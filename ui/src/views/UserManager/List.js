import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import CustomDatePickerInput from '../../components/atoms/CustomDatePickerInput';
import USER_ROLES from './data/roles';
import _ from 'lodash';

const User = ({ user, edit }) => (
  <tr key={user._id}>
    <td>
      <button onClick={() => edit(user)}>Edit</button>
    </td>
    <td>{user.email}</td>
    <td>
      {user.roles
        .map((r) => _.get(_.find(USER_ROLES, { value: r }), 'label'))
        .join(',')}
    </td>
    <td>
      <div>
        Suspend max 50 search result limit:
        <b> {user.limit_search ? 'Yes' : 'No'}</b>
      </div>
      <div>
        Expire on (yyyy/mm/dd):{' '}
        <b>{_.get(user, 'limit_search_expires', 'No')}</b>
      </div>
    </td>
    <td></td>
  </tr>
);

const EditUser = ({ user, change, cancel, update }) => (
  <tr key={user._id}>
    <td>
      <button onClick={() => cancel()}>Cancel</button>
    </td>
    <td>
      <input
        className="form-control"
        name="email"
        onChange={change}
        value={user.email}
      />
    </td>
    <td>
      <Select
        value={user.roles.map((r) => _.find(USER_ROLES, { value: r }))}
        name="role"
        placeholder="Select role"
        onChange={(roles) =>
          change({
            target: {
              name: 'roles',
              value: (roles && roles.map((r) => r.value)) || [],
            },
          })
        }
        options={USER_ROLES}
        className="basic-multi-select"
        isMulti
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px',
        }}
      ></div>
    </td>
    <td>
      <div>
        <label className="form-check-label" style={{ marginLeft: '20px' }}>
          <input
            checked={_.get(user, 'limit_search', false)}
            type="checkbox"
            className="form-check-input"
            name="limit_search"
            onChange={(e) =>
              change({
                target: { name: 'limit_search', value: e.target.checked },
              })
            }
          />{' '}
          Temporarily suspend max 50 search result limit
        </label>
      </div>
      <div>
        <DatePicker
          name="limit_search_expires"
          selected={
            user.limit_search_expires !== ''
              ? new Date(user.limit_search_expires)
              : null
          }
          onChange={(date) =>
            change({
              target: { name: 'limit_search_expires', value: date },
            })
          }
          dateFormat="yyyy/MM/dd"
          customInput={
            <CustomDatePickerInput
              style={{ width: '200px' }}
              placeholdertext="yyyy/MM/dd"
            />
          }
        />
      </div>
    </td>
    <td>
      <button onClick={() => update(false)}>Update</button>
    </td>
  </tr>
);

const List = ({ users = [], onUpdate, onBecome, onSearch }) => {
  const [activeUser, setActiveUser] = useState(null);

  const edit = (user) => {
    setActiveUser(user);
  };
  const cancel = () => setActiveUser(null);

  const change = (e) => {
    setActiveUser({
      ...activeUser,
      [e.target.name]: e.target.value,
    });
  };

  const update = () => {
    cancel();
    onUpdate(activeUser);
  };

  return (
    <div className="box">
      <table className="table table-striped b-t">
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Roles</th>
            <th>Search</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return activeUser && user._id === activeUser._id ? (
              <EditUser
                user={activeUser}
                change={change}
                cancel={cancel}
                update={update}
                key={user._id}
              />
            ) : (
              <User user={user} edit={edit} key={user._id} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;

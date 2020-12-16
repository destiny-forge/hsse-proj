import React, { useState, useEffect } from 'react';

const User = ({ user, edit }) => (
  <tr key={user._id}>
    <td>
      <button onClick={() => edit(user._id)}>Edit</button>
    </td>
    <td>{user.email}</td>
    <td>{user.role}</td>
    <td>{user.options}</td>
  </tr>
);

const EditUser = ({ user, change, cancel, update }) => (
  <tr key={user._id}>
    <td>
      <button onClick={() => cancel()}>Cancel</button>
    </td>
    <td>{user.email}</td>
    <td>{user.role}</td>
    <td>
      <textarea
        className="form-control"
        name="email"
        rows="5"
        onChange={change}
        value={user.email}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px',
        }}
      >
        <button onClick={() => update(false)}>Update</button>
      </div>
    </td>
  </tr>
);

const List = ({ users = [], onCancel, onUpdate, onBecome, onSearch }) => {
  const [activeUserId, setActiveUserId] = useState(null);
  const [user, setUser] = useState(null);

  const edit = (userId) => {
    setActiveUserId(userId);
  };
  const cancel = () => setActiveUserId(null);

  const change = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const update = () => {
    cancel();
    onUpdate(activeUserId, user);
  };

  return (
    <div className="box">
      <div className="table-responsive">
        <table className="table table-striped b-t">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Role</th>
              <th>Unlimited searching?</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return user._id === activeUserId ? (
                <EditUser
                  user={user}
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
    </div>
  );
};

export default List;

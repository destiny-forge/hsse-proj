import React from 'react';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import withAuth from '../withAuth';
import UserService from '../../services/UserService';
import List from './List';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import USER_ROLES from './data/roles';

const ROLES = [{ label: 'All roles', value: '*' }].concat(USER_ROLES);

class UserManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      role: 'user',
      users: [],
    };

    this.User = UserService({ fetch: this.props.fetch });
    this.updateUser = this.updateUser.bind(this);
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.search('', 'user');
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  search(email, role) {
    this.User.search(email, role).then((res) => {
      if (res.data != null) {
        const users = res.data;
        this.setState({ users });
      }
    });
  }

  doSearch = () => {
    const { email, role } = this.state;
    this.search(email, role);
  };

  updateUser(user) {
    this.User.create(user).then((res) => {
      if (res.data != null) {
        this.doSearch();
        this.notifySuccess();
      }
    });
  }

  notifySuccess = () => toast.success('User successfully updated!');

  render() {
    const { users, email, role } = this.state;
    return (
      <div className="padding">
        <div className="box">
          <div className="box-body">
            <div className="row">
              <div className="col-sm-3">
                <input
                  className="form-control"
                  placeholder="Search by email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-sm-3">
                <Select
                  value={ROLES.filter((opt) => opt.value === role)}
                  name="role"
                  placeholder="Select role"
                  onChange={(opt) =>
                    this.handleChange({
                      target: { name: 'role', value: opt.value },
                    })
                  }
                  options={ROLES}
                  isSearchable
                />
              </div>
              <div className="col-sm-6">
                <button className="btn primary" onClick={this.doSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="box-body">
            <List
              users={users}
              onUpdate={this.updateUser}
              onSearch={this.search}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withAuth(UserManager));

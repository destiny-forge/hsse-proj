import React from 'react';
import { withRouter } from 'react-router-dom';
import Select from 'react-select';
import withAuth from '../withAuth';
import UserService from '../../services/UserService';
import List from './List';

const ROLES = [
  { value: 'user', label: 'User' },
  { value: 'uploader', label: 'Uploader' },
  { value: 'linker', label: 'Linker' },
  { value: 'detailer', label: 'Detailer' },
  { value: 'prioritizer', label: 'Prioritizer' },
  { value: 'junior_filterer', label: 'Junior filterer' },
  { value: 'senior_filterer', label: 'Senior filterer' },
  { value: 'junior_appraiser', label: 'Junior appraiser' },
  { value: 'senior_appraiser', label: 'Senior appraiser' },
  { value: 'administrator', label: 'Administrator' },
];

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

  updateUser(userId, user) {
    this.User.create(userId, user).then((res) => {
      if (res.data != null) {
        let users = [...this.state.users];
        this.setState({ users });
      }
    });
  }

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

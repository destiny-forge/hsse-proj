import { useState } from 'react';
import _ from 'underscore';
import Context from './Context';
import AuthService from '../services/AuthService';

const LoginMenu = ({ t, site, setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState({});

  const Auth = new AuthService();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('here');
    let errors = {};
    if (_.isEmpty(email)) {
      errors.confirm_password = t('errors.cant_be_blank');
    }

    if (_.isEmpty(password)) {
      errors.password = t('errors.cant_be_blank');
    }

    console.log(errors);
    if (errors !== {}) {
      Auth.login(site, email, password)
        .then((res) => {
          console.log(res.data);
          if (res.data.error) {
            setErrors({
              ...errors,
              login: res.data.error,
            });
          } else {
            setUser(res.data.user);
          }
        })
        .catch((err) => {
          alert(err);
        });
      //error(responseText: JSON.stringify(user))
    } else {
      // Call Account.create api service
      //UserActions.createUser(user).then(success).catch(error)
    }
  };

  return (
    <form className="signup-menu" onSubmit={handleSubmit}>
      <div className="form-group has-feedback has-success">
        <input
          className="form-control"
          placeholder={t('menus.login.email')}
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          placeholder={t('menus.login.password')}
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn-primary">
        {t('menus.login.login_button')}
      </button>
    </form>
  );
};

export default Context(LoginMenu);

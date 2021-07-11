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
    setErrors({});
    let err = {};
    if (_.isEmpty(email)) {
      err.email = t('errors.cant_be_blank');
    }

    if (_.isEmpty(password)) {
      err.password = t('errors.cant_be_blank');
    }

    if (_.isEmpty(err)) {
      Auth.login(site, email, password)
        .then((res) => {
          if (res.data.error) {
            err.login = res.data.error;
            setErrors(err);
          } else {
            setUser(res.data.user);
          }
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      setErrors(err);
    }
  };

  const FormErrors = () => {
    let message = '';
    if (_.has(errors, 'login')) {
      message = t('errors.invalid_login');
    }
    console.log(errors);
    return <div className="form-errors">{message}</div>;
  };

  const FieldCSS = (css, field) => {
    let error = null;
    if (errors[field]) {
      error = errors[field];
    }
    return error ? `${css} has-feedback has-error` : `${css}`;
  };

  const FieldError = ({ field }) => {
    let error = null;
    if (errors[field]) {
      error = errors[field];
    }
    return (
      <>
        <span className="glyphicon form-control-feedback glyphicon-remove"></span>
        <span className="help-block">{error}</span>
      </>
    );
  };

  return (
    <form className="signup-menu" onSubmit={handleSubmit}>
      <FormErrors />
      <div className={FieldCSS('form-group', 'email')}>
        <input
          className="form-control"
          placeholder={t('menus.login.email')}
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FieldError field="email" />
      </div>
      <div className={FieldCSS('form-group', 'password')}>
        <input
          className="form-control"
          placeholder={t('menus.login.password')}
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FieldError field="password" />
      </div>
      <button type="submit" className="btn-primary">
        {t('menus.login.login_button')}
      </button>
    </form>
  );
};

export default Context(LoginMenu);

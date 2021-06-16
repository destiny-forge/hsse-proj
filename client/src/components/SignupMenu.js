import { useState } from 'react';
import Context from './Context';
import _ from 'underscore';
import Recaptcha from './Recaptcha';

const SignupMenu = ({ t, language }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [token, setToken] = useState();

  const handleSubmit = () => {
    let errors = {};

    // refactor into user validation utility function
    if (password !== confirm) {
      errors.confirm_password = t('/errors.passwords_must_match');
    }

    if (_.isEmpty(email)) {
      errors.confirm_password = t('/errors.cant_be_blank');
    }

    if (_.isEmpty(confirm)) {
      errors.confirm_password = t('/errors.cant_be_blank');
    }

    if (_.isEmpty(password)) {
      errors.password = t('/errors.cant_be_blank');
    }

    if (!terms) {
      errors.terms = t('/errors.cant_be_blank');
    }

    if (_.isEmpty(token)) {
      errors.captcha = t('/errors.cant_be_blank');
    }

    if (errors) {
      //error(responseText: JSON.stringify(user))
    } else {
      // Call Account.create api service
      //UserActions.createUser(user).then(success).catch(error)
    }
  };

  const renderRecaptcha = () => {
    let className = 'form-group recaptcha-group';
    className += errors.captcha ? ' has-feedback has-error' : '';

    return (
      <div className={className}>
        {/*
          <Recaptcha
          action="account-create"
          onToken={(token) => setToken(token)}
          key="6LdfQDoUAAAAALtMpuMsyq18nsBd0OkNCj84iwwY"
        />
        */}
        <span className="help-block">{errors.captcha || ''}</span>
      </div>
    );
  };

  const handleError = (errors) => {
    setErrors(errors);
  };

  return (
    <form className="signup-menu" onSubmit={handleSubmit}>
      <div className="form-group has-feedback has-success">
        <input
          label={t('menus.signup.email')}
          className="form-control"
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          label={t('menus.signup.password')}
          className="form-control"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          label={t('menus.signup.confirm_password')}
          className="form-control"
          name="confirm_password"
          type="password"
          onChange={(e) => setConfirm(e.target.value)}
        />
      </div>
      <div className="form-group">
        <div className="checkbox">
          <label>
            <input
              label={t('menus.signup.i_accept')}
              type="checkbox"
              name="accept_terms"
              onChange={(e) => setTerms(e.target.checked)}
            />
            <span>{t('menus.signup.i_accept')}</span>
          </label>
        </div>
      </div>
      <a
        rel="alternate"
        hrefLang={language}
        href={`/terms&lang=${language}`}
        className="btn-terms"
        target="_blank"
      >
        {t('menus.signup.terms')}
      </a>
      {renderRecaptcha()}
      <button className="btn-primary">{t('menus.signup.signup_button')}</button>
    </form>
  );
};

export default Context(SignupMenu);

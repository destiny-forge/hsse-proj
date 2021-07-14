import { useState } from 'react';
import Context from './Context';
import _ from 'underscore';
import Recaptcha from './Recaptcha';
import AuthService from '../services/AuthService';
import { LayerConsumer } from './LayerContext';

const SignupMenu = ({ t, site, language }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const Auth = new AuthService();

  const FormErrors = () => {
    let message = '';
    if (_.has(errors, 'signup')) {
      message = t(`errors.${errors.signup}`);
    }
    return <div className="form-errors">{message}</div>;
  };

  const FieldError = ({ field }) => {
    let error = null;
    if (errors[field]) {
      error = errors[field];
    }
    return (
      <>
        {/*<span className="glyphicon form-control-feedback glyphicon-remove"></span>*/}
        <span className="help-block">{error}</span>
      </>
    );
  };

  const FieldCSS = (css, field) => {
    let error = null;
    if (errors[field]) {
      error = errors[field];
    }
    return error ? `${css} has-feedback has-error` : `${css}`;
  };

  const handleSubmit = (e, dismissAll) => {
    e.preventDefault();
    let err = {};

    if (_.isEmpty(email)) {
      err.email = t('errors.cant_be_blank');
    }

    if (_.isEmpty(password)) {
      err.password = t('errors.cant_be_blank');
    }

    if (_.isEmpty(confirm)) {
      err.confirm_password = t('errors.cant_be_blank');
    }

    if (!terms) {
      err.terms = t('errors.must_accept_terms');
    }

    if (password !== confirm) {
      err.confirm_password = t('errors.passwords_must_match');
    }

    // if (_.isEmpty(token)) {
    //   err.captcha = t('errors.cant_be_blank');
    // }

    if (_.isEmpty(err)) {
      Auth.register(site, language, email, password)
        .then((res) => {
          if (res.data.error) {
            err.signup = res.data.error;
            setErrors(err);
          } else {
            setErrors(err);
            dismissAll();
          }
        })
        .catch((err) => {
          err.signup = err;
          setErrors(err);
        });
    }
  };

  const renderRecaptcha = () => {
    let className = 'form-group recaptcha-group';
    className += errors.captcha ? ' has-feedback has-error' : '';

    return (
      <div className={className}>
        &nbsp;
        {/*
          <Recaptcha
          action="account-create"
          onToken={(token) => setToken(token)}
          key="6LdfQDoUAAAAALtMpuMsyq18nsBd0OkNCj84iwwY"
        />
        <span className="help-block">{errors.captcha || ''}</span>
        */}
      </div>
    );
  };

  const handleError = (errors) => {
    setErrors(errors);
  };

  return (
    <LayerConsumer>
      {({ dismissAll }) => (
        <form
          className="signup-menu"
          onSubmit={(e) => {
            handleSubmit(e, dismissAll);
          }}
        >
          <FormErrors />
          <div className={FieldCSS('form-group', 'email')}>
            <input
              placeholder={t('menus.signup.email')}
              className="form-control"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FieldError field="email" />
          </div>
          <div className={FieldCSS('form-group', 'password')}>
            <input
              placeholder={t('menus.signup.password')}
              className="form-control"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FieldError field="password" />
          </div>
          <div className={FieldCSS('form-group', 'confirm_password')}>
            <input
              placeholder={t('menus.signup.confirm_password')}
              className="form-control"
              name="confirm_password"
              type="password"
              onChange={(e) => setConfirm(e.target.value)}
            />
            <FieldError field="confirm_password" />
          </div>
          <div className={FieldCSS('form-group', 'terms')}>
            <div className="checkbox">
              <label>
                <input
                  placeholder={t('menus.signup.i_accept')}
                  type="checkbox"
                  name="accept_terms"
                  onChange={(e) => setTerms(e.target.checked)}
                />
                <span>{t('menus.signup.i_accept')}</span>
              </label>
              <a
                rel="alternate"
                hrefLang={language}
                href={`/terms&lang=${language}`}
                className="btn-terms"
                target="_blank"
              >
                {t('menus.signup.terms')}
              </a>
              <FieldError field="terms" />
            </div>
          </div>

          {renderRecaptcha()}

          <button type="submit" className="btn-primary">
            {t('menus.signup.signup_button')}
          </button>
        </form>
      )}
    </LayerConsumer>
  );
};

export default Context(SignupMenu);

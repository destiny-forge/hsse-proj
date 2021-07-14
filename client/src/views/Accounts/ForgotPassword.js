import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Context from '../../components/Context';
import AuthService from '../../services/AuthService';

const ForgotPassword = ({ t, site, setPage }) => {
  const [email, setEmail] = useState('');
  const Auth = new AuthService();
  setPage('forgot_password');

  const submit = (e) => {
    e.preventDefault();

    Auth.forgotPassword(site, email)
      .then((res) => {
        if (res.success) {
          this.setState({
            isReset: true,
            email: '',
          });
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div id="page-content">
      <Helmet>
        <title>
          {t('forgot_password_page.title')} | {t('site_name')}
        </title>
      </Helmet>
      <form className="forgot-password-page" onSubmit={submit}>
        <h1>{t('forgot_password_page.title')}</h1>
        <p>{t('forgot_password_page.instructions')}</p>
        <div className="form-group has-feedback">
          <input
            type="email"
            placeholder={t('forgot_password_page.email')}
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="glyphicon form-control-feedback"></span>
        </div>
        <button>{t('forgot_password_page.submit')}</button>
      </form>
    </div>
  );
};

export default Context(ForgotPassword);

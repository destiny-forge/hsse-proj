import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Context from './Context';
import AccountService from '../services/AccountService';

const ProfileAccountInfo = ({ t, user, getProfile }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  const Account = AccountService();

  useEffect(() => {
    if (user !== null) {
      setEmail(user.email || '');
    }
  }, [user]);

  const save = (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirm) {
      setError('Passwords must match');
      return;
    }

    const info = {
      id: user._id,
      email,
      password,
      confirm,
    };

    Account.edit(info)
      .then((res) => {
        if (res) {
          toast.success(t('profile_page.successfully_updated'));
          getProfile();
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const toggle = (e) => {
    e.preventDefault();
    setEditing(!editing);
  };

  return (
    <form className="editable-information" onSubmit={save}>
      <h2>{t('profile_page.account_information')}</h2>
      <a href="/" rel="alternate" className="btn-toggle" onClick={toggle}>
        {editing ? t('profile_page.cancel') : t('profile_page.edit')}
      </a>
      {editing ? (
        <>
          <div className="form-group has-feedback">
            <input
              type="email"
              placeholder={t('profile_page.email')}
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="glyphicon form-control-feedback"></span>
          </div>
          <div className="form-group has-feedback">
            <input
              type="password"
              placeholder={t('profile_page.password')}
              name="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="glyphicon form-control-feedback"></span>
          </div>
          <div className="form-group has-feedback">
            <input
              type="password"
              placeholder={t('profile_page.confirm_password')}
              name="confirm"
              className="form-control"
              onChange={(e) => setConfirm(e.target.value)}
            />
            <span className="glyphicon form-control-feedback"></span>
          </div>
          <button onClick={save}>{t('update_information')}</button>
          {error && <div className="">{error}</div>}
        </>
      ) : (
        <div>
          <div className="readonly-field readonly-field-email">
            <div className="readonly-field-label">
              {t('profile_page.email')}
            </div>
            <div className="readonly-field-value">{email}</div>
          </div>
          <div className="readonly-field readonly-field-confirm_password">
            <div className="readonly-field-label">
              {t('profile_page.confirm_password')}
            </div>
            <div className="readonly-field-value">******</div>
          </div>
        </div>
      )}
    </form>
  );
};

export default Context(ProfileAccountInfo);

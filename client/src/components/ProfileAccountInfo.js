import Context from './Context';
import { useState, useEffect, useCallback } from 'react';

const ProfileAccountInfo = ({ t, user }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (user !== null) {
      setEmail(user.email || '');
    }
  }, [user]);

  const save = (e) => {
    e.preventDefault();
    const info = {
      email,
      password,
      confirm,
    };
    // ProfileService.edit(info)
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

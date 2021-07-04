import Context from './Context';
import { useState, useEffect } from 'react';

const ProfileAccountInfo = ({ t }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // set the user profile email from token
    // or pass in the profile object to the
    // component?
  });

  const Edit = () => {
    return (
      <>
        <div class="form-group has-feedback">
          <input
            type="email"
            placeholder={t('profile_page.email')}
            name="email"
            class="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span class="glyphicon form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input
            type="password"
            placeholder={t('profile_page.password')}
            name="password"
            class="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span class="glyphicon form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input
            type="password"
            placeholder={t('profile_page.confirm_password')}
            name="confirm"
            class="form-control"
            onChange={(e) => setConfirm(e.target.value)}
          />
          <span class="glyphicon form-control-feedback"></span>
        </div>
        <button onClick={save}>{t('update_information')}</button>
      </>
    );
  };

  const ReadOnly = () => {
    return (
      <div>
        <div className="readonly-field readonly-field-email">
          <div className="readonly-field-label">{t('profile_page.email')}</div>
          <div className="readonly-field-value">{email}</div>
        </div>
        <div className="readonly-field readonly-field-confirm_password">
          <div className="readonly-field-label">
            {t('profile_page.confirm_password')}
          </div>
          <div className="readonly-field-value">******</div>
        </div>
      </div>
    );
  };

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
      <a href="/" rel="alternate" class="btn-toggle" onClick={toggle}>
        {editing ? t('profile_page.cancel') : t('profile_page.edit')}
      </a>
      {editing ? <Edit /> : <ReadOnly />}
    </form>
  );
};

export default Context(ProfileAccountInfo);

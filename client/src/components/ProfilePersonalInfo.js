import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Context from './Context';
import ProfileService from '../services/ProfileService';
import COUNTRIES from '../data/countries';
import LANGUAGES from '../data/languages';

let CLIENT_ROLES = [
  'Student',
  'Researcher',
  'Professional',
  'Manager',
  'Policymaker',
  'Other',
];

const ProfilePersonalInfo = ({ t, site, user, getProfile }) => {
  const Profile = ProfileService();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');
  const [roles, setRoles] = useState([]);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);
  const [clientRoles, setClientRoles] = useState(CLIENT_ROLES);

  const toggleRole = (e) => {
    const role = e.target.value;
    let new_roles = roles;
    let index = new_roles.indexOf(role);
    if (e.target.checked && index === -1) {
      new_roles.push(role);
    } else if (!e.target.checked) {
      new_roles.splice(index, 1);
    }
    setRoles(new_roles);
    setClientRoles([...CLIENT_ROLES]);
  };

  useEffect(() => {
    if (user !== null) {
      setFirstName(user.firstName || '');
      setLastName(user.lastName || '');
      setCountry(user.country || '');
      setLanguage(user.language || 'en');
      setRoles(user.client_roles || []);
    }
  }, [user]);

  const save = (e) => {
    e.preventDefault();
    setError(null);

    const info = {
      id: user._id,
      firstName,
      lastName,
      language,
      country,
      roles,
    };
    Profile.edit(info)
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

  const getLanguage = () => {
    return (
      language && LANGUAGES[site].filter((l) => l.value === language)[0].label
    );
  };

  const getCountryName = () => {
    return country && country !== ''
      ? COUNTRIES.filter((c) => c.id === country)[0].name
      : '';
  };

  return (
    <form className="editable-information" onSubmit={save}>
      <h2>{t('profile_page.personal_information')}</h2>
      <a href="save" rel="alternate" className="btn-toggle" onClick={toggle}>
        {editing ? t('profile_page.cancel') : t('profile_page.edit')}
      </a>
      {editing ? (
        <div>
          <div className="form-group has-feedback">
            <input
              type="text"
              placeholder={t('profile_page.first_name')}
              name="first_name"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <span className="glyphicon form-control-feedback"></span>
          </div>
          <div className="form-group has-feedback">
            <input
              type="text"
              placeholder={t('profile_page.last_name')}
              name="last_name"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <span className="glyphicon form-control-feedback"></span>
          </div>
          <select
            label={t('profile_page.country')}
            name="country_id"
            type="select"
            className="form-control form-group"
            onChange={(e) => setCountry(e.target.value)}
          >
            {COUNTRIES.map((c) => {
              return (
                <option key={c.id} value={c.id} selected={c.id === country}>
                  {c.name}
                </option>
              );
            })}
          </select>
          <select
            label={t('profile_page.language')}
            name="language"
            type="select"
            className="form-control form-group"
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
          <div className="form-group update-role">
            <span>{t('profile_page.role_update_profile')}</span>
            {clientRoles.map((role, i) => {
              return (
                <label key={i} className="role">
                  <input
                    type="checkbox"
                    className="selectRole"
                    value={role.toLowerCase()}
                    name="role"
                    checked={roles.includes(role.toLowerCase())}
                    onChange={toggleRole}
                  />
                  <span>{role}</span>
                </label>
              );
            })}
          </div>
          <button onClick={save}>{t('update_information')}</button>

          {error && <div className="">{error}</div>}
        </div>
      ) : (
        <div>
          <div className="readonly-field readonly-field-first_name">
            <div className="readonly-field-label">
              {t('profile_page.first_name')}
            </div>
            <div className="readonly-field-value">{firstName}</div>
          </div>
          <div className="readonly-field readonly-field-last_name">
            <div className="readonly-field-label">
              {t('profile_page.last_name')}
            </div>
            <div className="readonly-field-value">{lastName}</div>
          </div>
          <div className="readonly-field readonly-field-country_id">
            <div className="readonly-field-label">
              {t('profile_page.country')}
            </div>
            <div className="readonly-field-value">{getCountryName()}</div>
          </div>
          <div className="readonly-field readonly-field-language">
            <div className="readonly-field-label">
              {t('profile_page.language')}
            </div>
            <div className="readonly-field-value">{getLanguage()}</div>
          </div>
          <div className="readonly-field readonly-field-role">
            <div className="readonly-field-label">{t('profile_page.role')}</div>
            <div className="readonly-field-value">{roles.join(', ')}</div>
          </div>
        </div>
      )}
    </form>
  );
};

export default Context(ProfilePersonalInfo);

import Context from './Context';
import { useState, useEffect } from 'react';

const ProfilePersonalInfo = ({ t }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [country, setCountry] = useState();
  const [roles, setRoles] = useState();

  const edit = () => {};

  return (
    <form className="editable-information" onSubmit={edit}>
      <h2>{t('profile_page.personal_information')}</h2>
    </form>
  );
};

export default Context(ProfilePersonalInfo);

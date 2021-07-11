import Context from './Context';
import { useState } from 'react';

const ProfileAccountInfo = ({ t }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [editing, setEditing] = useState(false);

  const edit = () => {};

  return (
    <form className="editable-information" onSubmit={edit}>
      <h2>{t('profile_page.account_information')}</h2>
    </form>
  );
};

export default Context(ProfileAccountInfo);

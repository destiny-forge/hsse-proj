import { useParams } from 'react-router-dom';
import Context from '../components/Context';
import { Helmet } from 'react-helmet';
import ProfileAccountInfo from '../components/ProfileAccountInfo';
import ProfilePersonalInfo from '../components/ProfilePersonalInfo';
import { useEffect } from 'react';
import AuthService from '../services/AuthService';

const Profile = ({ t, setPage, user }) => {
  const Auth = new AuthService();
  setPage('profile');

  useEffect(() => {
    if (!Auth.loggedIn()) {
      document.location = window.location.origin;
    }
  });

  const { id } = useParams();
  return (
    <div id="page-content">
      <Helmet>
        <title>
          {t('profile_page.title')} | {t('site_name')}
        </title>
      </Helmet>
      <div className="profile-page">
        <p dangerouslySetInnerHTML={{ __html: t('profile_page.text_1') }}></p>
        <p dangerouslySetInnerHTML={{ __html: t('profile_page.text_2') }}></p>
        <p dangerouslySetInnerHTML={{ __html: t('profile_page.text_3') }}></p>
        <h1>{t('profile_page.title')}</h1>
        <ProfileAccountInfo user={user} />
        <ProfilePersonalInfo user={user} />
      </div>
    </div>
  );
};

export default Context(Profile);

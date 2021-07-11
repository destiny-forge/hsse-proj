import { useParams } from 'react-router-dom';
import Context from '../components/Context';
import { Helmet } from 'react-helmet';
import ProfileAccountInfo from '../components/ProfileAccountInfo';
import ProfilePersonalInfo from '../components/ProfilePersonalInfo';

const Profile = ({ t, setPage }) => {
  setPage('profile');
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
        <ProfileAccountInfo />
        <ProfilePersonalInfo />
      </div>
    </div>
  );
};

export default Context(Profile);

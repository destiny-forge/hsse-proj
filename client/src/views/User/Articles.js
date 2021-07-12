import Context from '../../components/Context';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import AuthService from '../../services/AuthService';
import UserSavedDocuments from '../../components/UserSavedDocuments';

const UserArticleView = ({ t, setPage, user }) => {
  const Auth = new AuthService();
  setPage('saved_articles');

  useEffect(() => {
    if (!Auth.loggedIn()) {
      document.location = window.location.origin;
    }
  });

  return (
    <div id="page-content">
      <Helmet>
        <title>
          {t('saved_articles_page.title')} | {t('site_name')}
        </title>
      </Helmet>
      <div className="saved-articles-page">
        <h1>{t('saved_articles_page.title')}</h1>

        <div className="saved-articles-instructions">
          <p>{t('saved_articles_page.warning')}</p>
          <p>{t('saved_articles_page.instructions')}</p>
        </div>
      </div>

      <UserSavedDocuments />
    </div>
  );
};

export default Context(UserArticleView);

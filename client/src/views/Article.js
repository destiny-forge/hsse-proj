import { useParams } from 'react-router-dom';
import Context from '../components/Context';
import ArticleDetail from '../components/ArticleDetail';
import { Helmet } from 'react-helmet';

const Article = ({ t, setPage }) => {
  setPage('latest_content');
  const { id } = useParams();
  return (
    <div id="page-content">
      <Helmet>
        <title>
          {t('latest_content_page.title')} | {t('site_name')}
        </title>
      </Helmet>
      <ArticleDetail id={id} />
    </div>
  );
};

export default Context(Article);

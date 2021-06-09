import Context from '../components/Context';
import Markdown from '../components/Markdown';

const Terms = ({ setPage }) => {
  setPage('terms');
  return (
    <div id="page-content">
      <Markdown page="terms" />
    </div>
  );
};

export default Context(Terms);

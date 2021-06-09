import { useEffect } from 'react';
import Context from '../components/Context';
import Markdown from '../components/Markdown';

const Terms = ({ setPage }) => {
  useEffect(() => {
    setPage('terms');
  });
  return (
    <div id="page-content">
      <Markdown page="terms" />
    </div>
  );
};

export default Context(Terms);

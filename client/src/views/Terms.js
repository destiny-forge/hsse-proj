import Context from '../components/Context';
import Markdown from '../components/Markdown';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Fragment } from 'react';

const Terms = ({ setPage }) => {
  setPage('terms');
  return (
    <Fragment>
      <Header />
      <div id="page-content">
        <Markdown page="terms" />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Context(Terms);

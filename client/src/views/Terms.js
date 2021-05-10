import Context from '../components/Context';
import Markdown from '../components/Markdown';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = ({ site }) => {
  const className = `${site} app terms layered-navigation`;
  return (
    <div className={className}>
      <div className="layered-navigation-content">
        <Header />
        <div id="page-content">
          <Markdown page="terms" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Context(Terms);

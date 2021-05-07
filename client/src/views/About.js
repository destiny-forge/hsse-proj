import Context from '../components/Context';
import Markdown from '../components/Markdown';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = ({ site, language }) => {
  const className = `${site} app about layered-navigation`;
  return (
    <div className={className}>
      <div className="layered-navigation-content">
        <Header />
        <div id="page-content">
          <Markdown page="about" />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Context(About);

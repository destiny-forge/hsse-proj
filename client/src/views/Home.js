import Header from '../components/Header';
import Search from '../components/Search';
import GuidedQuestions from '../components/GuidedQuestions';
import Footer from '../components/Footer';
import Page from '../components/Page';

const Home = ({ site, t }) => (
  <div className="home layered-navigation">
    <div id="page-content">
      <Header />
      {site}
      <div class="home-page">
        <div class="home-page-header">
          <h1>Health Systems Evidence</h1>
          <p class="intro">
            The world's most comprehensive, free access point for evidence to
            support policy makers, stakeholders and researchers interested in
            how to strengthen or reform health systems or in how to get
            cost-effective programs, services and drugs to those who need them.
          </p>
          <Search onSearch={(result) => console.log(result)} />
        </div>
      </div>

      <GuidedQuestions />
      <Footer />
    </div>
  </div>
);

export default Page(Home);

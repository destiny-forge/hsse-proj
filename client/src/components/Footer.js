import { Link } from 'react-router-dom';
import Context from '../components/Context';

const HSEFooter = ({ t }) => (
  <footer>
    <div className="logo-wrapper">
      <img src="/images/mcmaster_logo.svg" className="logo" />
      <img src="/images/mcmaster_forum_logo.svg" className="forum-logo" />
    </div>
    <a
      href="mailto:hse@mcmaster.ca"
      target="_blank"
      rel="noreferrer"
      className="contact-us"
    >
      {t('contact_us')}
    </a>
    <span>|</span>
    <Link to="/terms" className="terms">
      {t('terms_of_use')}
    </Link>
  </footer>
);

const SSEFooter = ({ t }) => (
  <footer>
    <div className="logo-wrapper">
      <div className="logo">
        <a
          hrefLang="en"
          href="https://www.mcmasterforum.org/lets-collaborate/forumplus"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/mcmaster_forum_logo.png" />
        </a>
        <p>{t('footer.forum_plus')}</p>
      </div>
      <div className="forum-logo">
        <a
          hrefLang="en"
          href="https://www.monash.edu/sustainable-development"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/monash_university_logo.png" />
        </a>
        <p>{t('footer.monash_university')}</p>
      </div>
    </div>
    <div className="clearfix"></div>
    <a
      href="mailto:sse@mcmaster.ca"
      target="_blank"
      rel="noreferrer"
      className="contact-us"
    >
      {t('contact_us')}
    </a>
    <span>|</span>
    <Link to="/terms" rel="alternate" hrefLang="en" className="terms">
      {t('terms_of_use')}
    </Link>
  </footer>
);

const CVDFooter = ({ t }) => (
  <footer>
    <div className="logo-wrapper">
      <img src="/images/mcmaster_logo.svg" className="logo" />
      <img src="/images/mcmaster_forum_logo.svg" className="forum-logo" />
    </div>
    <div className="clearfix"></div>
    <a
      href="mailto:covidend@mcmaster.ca"
      target="_blank"
      rel="noreferrer"
      className="contact-us"
    >
      {t('contact_us')}
    </a>
    <span>|</span>
    <Link to="/terms" rel="alternate" hrefLang="en" className="terms">
      {t('terms_of_use')}
    </Link>
  </footer>
);

const Footer = ({ site, t }) => {
  let Component = HSEFooter;
  switch (site) {
    case 'hse':
      Component = HSEFooter;
      break;
    case 'sse':
      Component = SSEFooter;
      break;
    case 'cvd':
      Component = CVDFooter;
      break;
  }
  return <Component t={t} />;
};

export default Context(Footer);

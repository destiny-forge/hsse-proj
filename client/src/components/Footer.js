import Context from '../components/Context';

const HSEFooter = ({ t }) => (
  <footer>
    <div className="logo-wrapper">
      <img src="/images/mcmaster_logo.svg" className="logo" />
      <img src="/images/mcmaster_forum_logo.svg" className="forum-logo" />
    </div>
  </footer>
);

const SSEFooter = ({ t }) => (
  <footer>
    <div className="logo-wrapper">
      <div className="logo">
        <a
          rel="alternate"
          hreflang="en"
          href="https://www.mcmasterforum.org/lets-collaborate/forumplus"
          target="_blank"
        >
          <img src="/images/mcmaster_forum_logo.png" />
        </a>
        <p>{t('footer.forum_plus')}</p>
      </div>
      <div className="forum-logo">
        <a
          rel="alternate"
          hreflang="en"
          href="https://www.monash.edu/sustainable-development"
          target="_blank"
        >
          <img src="/images/monash_university_logo.png" />
        </a>
        <p>{t('footer.monash_university')}</p>
      </div>
    </div>
    <div className="clearfix"></div>
    <a
      rel="alternate"
      href="mailto:sse@mcmaster.ca"
      target="_blank"
      class="contact-us"
    >
      Contact us
    </a>
    <span>|</span>
    <a rel="alternate" hreflang="en" href="/terms?lang=en" className="terms">
      Terms of use
    </a>
  </footer>
);

const CVDFooter = ({ t }) => (
  <footer>
    <div className="logo-wrapper">
      <img src="/images/mcmaster_logo.svg" className="logo" />
      <img src="/images/mcmaster_forum_logo.svg" className="forum-logo" />
    </div>
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
    case 'covid':
      Component = CVDFooter;
      break;
  }
  return <Component t={t} />;
};

export default Context(Footer);

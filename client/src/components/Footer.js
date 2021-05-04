const HSEFooter = () => (
  <footer>
    <div className="logo-wrapper">
      <img src="/images/mcmaster_logo.svg" className="logo" />
      <img src="/images/mcmaster_forum_logo.svg" className="forum-logo" />
    </div>
  </footer>
);

const SSEFooter = () => (
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
        <p>
          A partner of Sustainable Development Solutions Network (SDSN) Canada
        </p>
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
        <p>
          Host organization for Sustainable Development Solutions Network (SDSN)
          Australia, New Zealand &amp; Pacific
        </p>
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

const CVDFooter = () => (
  <footer>
    <div className="logo-wrapper">
      <img src="/images/mcmaster_logo.svg" className="logo" />
      <img src="/images/mcmaster_forum_logo.svg" className="forum-logo" />
    </div>
  </footer>
);

const Footer = () => {
  const theme = 'hse';
  let Component = HSEFooter;
  switch (theme) {
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
  return <Component />;
};

export default Footer;

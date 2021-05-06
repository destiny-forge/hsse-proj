import Context from './Context';
import { LanguageChooser } from './LanguageContext';
import GuidedSearchToggle from './GuidedSearchToggle';

const Header = ({ site, t }) => (
  <nav className="top-nav">
    <h1>
      <a href="/?" data-reactid=".0.1.1:1.0.0">
        {t.site_name}
      </a>
    </h1>
    <a
      href="#"
      className="layer-toggle layer-toggle-main undefined"
      data-reactid=".0.1.1:1.1"
    >
      <span className="sr-only" data-reactid=".0.1.1:1.1.0">
        Toggle navigation
      </span>
      <div
        className="hotspot"
        style={{ display: 'block' }}
        data-reactid=".0.1.1:1.1.1:0"
      >
        <div
          className="hotspot-indicator-wrapper"
          data-reactid=".0.1.1:1.1.1:0.0"
        >
          <div
            className="hotspot-indicator"
            data-reactid=".0.1.1:1.1.1:0.0.0"
          ></div>
        </div>
      </div>
      <div
        className="hotspot"
        style={{ display: 'none' }}
        data-reactid=".0.1.1:1.1.1:1"
      >
        <div
          className="hotspot-indicator-wrapper"
          data-reactid=".0.1.1:1.1.1:1.0"
        >
          <div
            className="hotspot-indicator"
            data-reactid=".0.1.1:1.1.1:1.0.0"
          ></div>
        </div>
      </div>
      <div
        className="hotspot"
        style={{ display: 'none' }}
        data-reactid=".0.1.1:1.1.1:2"
      >
        <div
          className="hotspot-indicator-wrapper"
          data-reactid=".0.1.1:1.1.1:2.0"
        >
          <div
            className="hotspot-indicator"
            data-reactid=".0.1.1:1.1.1:2.0.0"
          ></div>
        </div>
      </div>
      <span className="icon-bar" data-reactid=".0.1.1:1.1.1:3"></span>
      <span className="icon-bar" data-reactid=".0.1.1:1.1.1:4"></span>
      <span className="icon-bar" data-reactid=".0.1.1:1.1.1:5"></span>
    </a>
    <ul className="main-menu menu-list" data-reactid=".0.1.1:1.2">
      <li className="menu-item menu-item-home" data-reactid=".0.1.1:1.2.0">
        <span className="menu-item-icon" data-reactid=".0.1.1:1.2.0.0"></span>
        <a href="/?" className="menu-item-text" data-reactid=".0.1.1:1.2.0.1">
          Home
        </a>
      </li>
      <li className="menu-item menu-item-about" data-reactid=".0.1.1:1.2.1">
        <span className="menu-item-icon" data-reactid=".0.1.1:1.2.1.0"></span>
        <a
          href="/about?"
          className="menu-item-text"
          data-reactid=".0.1.1:1.2.1.1"
        >
          About HSE
        </a>
      </li>
      <li className="menu-item menu-item-language" data-reactid=".0.1.1:1.2.2">
        <div
          className="hotspot"
          style={{ display: 'block' }}
          data-reactid=".0.1.1:1.2.2.0"
        >
          <div
            className="hotspot-indicator-wrapper"
            data-reactid=".0.1.1:1.2.2.0.0"
          >
            <div
              className="hotspot-indicator"
              data-reactid=".0.1.1:1.2.2.0.0.0"
            ></div>
          </div>
        </div>
        <span className="menu-item-icon" data-reactid=".0.1.1:1.2.2.1"></span>
        <LanguageChooser site={site} />
      </li>
      <li
        className="menu-item menu-item-guided-search"
        data-reactid=".0.1.1:1.2.3"
      >
        <span className="menu-item-icon" data-reactid=".0.1.1:1.2.3.0"></span>
        <label className="menu-item-text" data-reactid=".0.1.1:1.2.3.1">
          <span data-reactid=".0.1.1:1.2.3.1.0">Guided search</span>
          <GuidedSearchToggle />
        </label>
      </li>
      <li
        className="menu-item menu-item-latest-content"
        data-reactid=".0.1.1:1.2.4"
      >
        <span className="menu-item-icon" data-reactid=".0.1.1:1.2.4.0"></span>
        <a
          href="/latest-content?"
          className="menu-item-text"
          data-reactid=".0.1.1:1.2.4.1"
        >
          Latest content
        </a>
      </li>
      <li
        className="menu-item menu-item-sign-up"
        data-reactid=".0.1.1:1.2.5:$menu-item-signup"
      >
        <span
          className="menu-item-icon"
          data-reactid=".0.1.1:1.2.5:$menu-item-signup.0"
        ></span>
        <a
          href="#"
          className="layer-toggle layer-toggle-signup menu-item-text"
          data-reactid=".0.1.1:1.2.5:$menu-item-signup.1"
        >
          <span
            className="sr-only"
            data-reactid=".0.1.1:1.2.5:$menu-item-signup.1.0"
          >
            Toggle navigation
          </span>
          <span data-reactid=".0.1.1:1.2.5:$menu-item-signup.1.1">
            Create account
          </span>
        </a>
      </li>
      <li
        className="menu-item menu-item-login"
        data-reactid=".0.1.1:1.2.5:$menu-item-login"
      >
        <span
          className="menu-item-icon"
          data-reactid=".0.1.1:1.2.5:$menu-item-login.0"
        ></span>
        <a
          href="#"
          className="layer-toggle layer-toggle-login menu-item-text"
          data-reactid=".0.1.1:1.2.5:$menu-item-login.1"
        >
          <span
            className="sr-only"
            data-reactid=".0.1.1:1.2.5:$menu-item-login.1.0"
          >
            Toggle navigation
          </span>
          <span data-reactid=".0.1.1:1.2.5:$menu-item-login.1.1">Log in</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default Context(Header);

import Context from './Context';

const Header = ({ t }) => (
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
        <a
          href="#"
          className="layer-toggle layer-toggle-languages menu-item-text"
          data-reactid=".0.1.1:1.2.2.2"
        >
          <span className="sr-only" data-reactid=".0.1.1:1.2.2.2.0">
            Toggle navigation
          </span>
          <span data-reactid=".0.1.1:1.2.2.2.1">Select language</span>
        </a>
        <a
          className="desktop-menu-link menu-item-text"
          href="#"
          data-reactid=".0.1.1:1.2.2.3"
        >
          Select language
        </a>
        <ul className="languages-menu menu-list" data-reactid=".0.1.1:1.2.2.4">
          <li
            className="menu-item"
            value="cn"
            data-reactid=".0.1.1:1.2.2.4.$language-0"
          >
            <a
              className="menu-item-text"
              href="#"
              data-reactid=".0.1.1:1.2.2.4.$language-0.0"
            >
              中文
            </a>
          </li>
          <li
            className="menu-item"
            value="en"
            data-reactid=".0.1.1:1.2.2.4.$language-1"
          >
            <a
              className="menu-item-text"
              href="#"
              data-reactid=".0.1.1:1.2.2.4.$language-1.0"
            >
              English
            </a>
            <i
              className="checkmark"
              data-reactid=".0.1.1:1.2.2.4.$language-1.1"
            ></i>
          </li>
          <li
            className="menu-item"
            value="es"
            data-reactid=".0.1.1:1.2.2.4.$language-2"
          >
            <a
              className="menu-item-text"
              href="#"
              data-reactid=".0.1.1:1.2.2.4.$language-2.0"
            >
              Español
            </a>
          </li>
          <li
            className="menu-item"
            value="fr"
            data-reactid=".0.1.1:1.2.2.4.$language-3"
          >
            <a
              className="menu-item-text"
              href="#"
              data-reactid=".0.1.1:1.2.2.4.$language-3.0"
            >
              Français
            </a>
          </li>
          <li
            className="menu-item"
            value="pt"
            data-reactid=".0.1.1:1.2.2.4.$language-4"
          >
            <a
              className="menu-item-text"
              href="#"
              data-reactid=".0.1.1:1.2.2.4.$language-4.0"
            >
              Português
            </a>
          </li>
        </ul>
      </li>
      <li
        className="menu-item menu-item-guided-search"
        data-reactid=".0.1.1:1.2.3"
      >
        <span className="menu-item-icon" data-reactid=".0.1.1:1.2.3.0"></span>
        <label className="menu-item-text" data-reactid=".0.1.1:1.2.3.1">
          <span data-reactid=".0.1.1:1.2.3.1.0">Guided search</span>
          <div
            className="react-toggle react-toggle--checked"
            data-reactid=".0.1.1:1.2.3.1.1"
          >
            <div
              className="react-toggle-track"
              data-reactid=".0.1.1:1.2.3.1.1.0"
            >
              <div
                className="react-toggle-track-check"
                data-reactid=".0.1.1:1.2.3.1.1.0.0"
              >
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  data-reactid=".0.1.1:1.2.3.1.1.0.0.0"
                >
                  <title data-reactid=".0.1.1:1.2.3.1.1.0.0.0.0">
                    switch-check
                  </title>
                  <path
                    d="M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0"
                    fill="#fff"
                    data-reactid=".0.1.1:1.2.3.1.1.0.0.0.1"
                  ></path>
                </svg>
              </div>
              <div
                className="react-toggle-track-x"
                data-reactid=".0.1.1:1.2.3.1.1.0.1"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  data-reactid=".0.1.1:1.2.3.1.1.0.1.0"
                >
                  <title data-reactid=".0.1.1:1.2.3.1.1.0.1.0.0">
                    switch-x
                  </title>
                  <path
                    d="M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12"
                    fill="#fff"
                    data-reactid=".0.1.1:1.2.3.1.1.0.1.0.1"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              className="react-toggle-thumb"
              data-reactid=".0.1.1:1.2.3.1.1.1"
            ></div>
            <input
              className="react-toggle-screenreader-only"
              type="checkbox"
              checked=""
              data-reactid=".0.1.1:1.2.3.1.1.2"
            />
          </div>
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

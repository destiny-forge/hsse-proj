import { Link } from 'react-router-dom';
import Context from './Context';
import { LanguageChooser } from './LanguageContext';
import GuidedSearchToggle from './GuidedSearchToggle';
import { LayerConsumer } from './LayerContext';
import LayerToggle from './LayerToggle';

const MainMenu = ({ t, toggleLayer, site }) => {
  return (
    <LayerConsumer>
      {({ dismissLayer }) => (
        <ul className="main-menu menu-list">
          <li className="menu-item menu-item-home">
            <span className="menu-item-icon"></span>
            <Link to="/" className="menu-item-text" onClick={dismissLayer}>
              {t('main_menu.home')}
            </Link>
          </li>
          <li className="menu-item menu-item-about">
            <span className="menu-item-icon"></span>
            <Link to="/about" className="menu-item-text" onClick={dismissLayer}>
              {t('main_menu.about')}
            </Link>
          </li>
          <li className="menu-item menu-item-language">
            <span className="menu-item-icon"></span>
            <LayerToggle
              className="menu-item-text"
              menu="languages"
              onToggle={toggleLayer}
            >
              {t('main_menu.select_language')}
            </LayerToggle>
            <LanguageChooser site={site} />
          </li>
          <li className="menu-item menu-item-guided-search">
            <span className="menu-item-icon"></span>
            <label className="menu-item-text">
              <span>{t('main_menu.guided_search')}</span>
              <GuidedSearchToggle />
            </label>
          </li>
          <li className="menu-item menu-item-latest-content">
            <span className="menu-item-icon"></span>
            <Link
              to="/latest-content"
              className="menu-item-text"
              onClick={dismissLayer}
            >
              {t('main_menu.latest_content')}
            </Link>
          </li>
          <li className="menu-item menu-item-sign-up">
            <span className="menu-item-icon"></span>
            <LayerToggle
              className="menu-item-text"
              menu="signup"
              onToggle={toggleLayer}
            >
              {t('main_menu.create_account')}
            </LayerToggle>
          </li>
          <li className="menu-item menu-item-login">
            <span className="menu-item-icon"></span>
            <LayerToggle
              className="menu-item-text"
              menu="login"
              onToggle={toggleLayer}
            >
              {t('main_menu.login')}
            </LayerToggle>
          </li>
        </ul>
      )}
    </LayerConsumer>
  );
};

export default Context(MainMenu);

import { Link } from 'react-router-dom';
import Context from './Context';
import { LanguageChooser } from './LanguageContext';
import GuidedSearchToggle from './GuidedSearchToggle';
import LayerToggle from '../components/LayerToggle';

const Header = ({ site, t, onShowMenu }) => {
  return (
    <nav className="top-nav">
      <h1>
        <a href="/">{t('site_name')}</a>
      </h1>
      <LayerToggle menu="main" onToggle={onShowMenu}>
        <span className="sr-only">{t('toggle_navigation')}</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </LayerToggle>
      <ul className="main-menu menu-list">
        <li className="menu-item menu-item-home">
          <span className="menu-item-icon"></span>
          <Link to="/" className="menu-item-text">
            {t('main_menu.home')}
          </Link>
        </li>
        <li className="menu-item menu-item-about">
          <span className="menu-item-icon"></span>
          <Link to="/about" className="menu-item-text">
            {t('main_menu.about')}
          </Link>
        </li>
        <li className="menu-item menu-item-language">
          <span className="menu-item-icon"></span>
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
          <Link to="/latest-content" className="menu-item-text">
            {t('main_menu.latest_content')}
          </Link>
        </li>
        <li className="menu-item menu-item-sign-up">
          <span className="menu-item-icon"></span>
          <a href="#" className="layer-toggle menu-item-text">
            <span className="sr-only">{t('toggle_navigation')}</span>
            <span>{t('main_menu.create_account')}</span>
          </a>
        </li>
        <li className="menu-item menu-item-login">
          <span className="menu-item-icon"></span>
          <a href="#" className="layer-toggle menu-item-text">
            <span className="sr-only">{t('toggle_navigation')}</span>
            <span>{t('main_menu.login')}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Context(Header);

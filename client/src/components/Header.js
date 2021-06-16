import Context from './Context';
import LayerToggle from '../components/LayerToggle';
import MainMenu from './MainMenu';

const Header = ({ t, onShowMenu }) => {
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
      <MainMenu toggleLayer={onShowMenu} />
    </nav>
  );
};

export default Context(Header);

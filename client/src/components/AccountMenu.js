import Context from './Context';
import { LayerConsumer } from './LayerContext';

const AccountMenu = ({ t, language }) => {
  return (
    <LayerConsumer>
      {({ dismissAll }) => (
        <ul class="account-menu main-menu menu-list">
          <li class="menu-item menu-item-profile">
            <span class="menu-item-icon"></span>
            <a
              rel="alternate"
              hreflang={language}
              href="/profile"
              class="menu-item-text"
            >
              {t('menus.account.profile')}
            </a>
          </li>
          <li class="menu-item menu-item-saved-articles">
            <span class="menu-item-icon"></span>
            <a
              rel="alternate"
              hreflang={language}
              href="/user/articles"
              class="menu-item-text"
            >
              {t('menus.account.saved_documents')}
            </a>
          </li>
          <li class="menu-item menu-item-saved-searches">
            <span class="menu-item-icon"></span>
            <a
              rel="alternate"
              hreflang={language}
              href="/user/searches"
              class="menu-item-text"
            >
              {t('menus.account.saved_searches')}
            </a>
          </li>
        </ul>
      )}
    </LayerConsumer>
  );
};

export default Context(AccountMenu);

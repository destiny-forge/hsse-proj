import { useState, React } from 'react';
import { TransitionGroup } from 'react-transition-group';
import Layer from './Layer';
import _ from 'underscore';

const LayeredNavigation = ({ id, className, site, page, children }) => {
  const [menus, setMenus] = useState([]);
  const [overlay, setOverlay] = useState();

  const toggleMenu = (name, title, context) => {
    context = title || context;
    //# move focus away from button used to bring up the menu
    document.activeElement.blur();

    const menu = { name, title, context };
    setMenus({
      ...menus,
      menu,
    });
  };

  const dismissMenu = () => {
    if (menus.length == 0) return;

    let menus = _.clone(menus);
    let menu = menus.pop();
    menu.context.onDismiss();

    setMenus(menus);
    return; //# avoid warning message from react by return undefined
  };

  const findLayerGroup = () => {
    return _.find(children, (child) => child.type.displayName == 'LayerGroup');
  };

  const findMenu = (name) => {
    let menu = _.find(findLayerGroup().children, (menu) => {
      return menu.type.displayName === 'Layer' && menu.props.name === name;
    });

    if (!menu) {
      throw new Error(`Unknown menu requested ${name}`);
    }

    return [menu.props.children, menu.props.title];
  };

  const setOverlayContent = (content) => {
    setOverlay(content);
  };

  const renderOverlayContent = () => {
    return (
      menus.length > 0 &&
      overlay && (
        <div className="layered-navigation-overlay-content">{overlay}</div>
      )
    );
  };

  const renderLayer = (name, content, title, level) => {
    return (
      <Layer
        key="layer-#{level + 1}"
        onClose={dismissMenu}
        name={name}
        title={title}
        level={level}
      >
        {content}
      </Layer>
    );
  };

  const renderLayers = () => {
    let level = -1;
    for (const menu in menus) {
      level += (1)[(content, title)] = findMenu(menu.name);
      let title = menu.title;
      let props = _.clone(content.props);
      props.context = menu.context;
      let content = React.cloneElement(content, props);
      renderLayer(menu.name, content, title, level);
    }
  };

  className += `${site} app ${page} layered-navigation`;
  if (menus.length > 0) {
    className += ' layer-toggled';
  }

  if (menus.length > 0) document.body.classList.add('filter-scroll');
  else document.body.classList.remove('filter-scroll');

  return (
    <div id={id} className={className}>
      <TransitionGroup transitionName="layer" component="div">
        {renderLayers()}
      </TransitionGroup>
      <div className="layered-navigation-content">
        <div className="layered-navigation-overlay" onClick={dismissMenu}>
          {renderOverlayContent()}
        </div>
        {children}
      </div>
    </div>
  );
};

export default LayeredNavigation;

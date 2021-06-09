import Context from './Context';

const LayerToggle = ({
  t,
  language,
  menu,
  onToggle,
  title,
  context,
  children,
  className,
  style,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); //# prevent things like dismiss menu from being called on parent

    if (className === undefined && context !== undefined) {
      if (window.location.pathname === '/') {
        // UrlActions.navigateTo('/search')
        // SearchActions.toggleFilter(@props.context.filterGroup)
        return;
      }
    }
    //console.log(menu, title, context);
    onToggle(menu, title || null, context);
  };

  menu = menu.replace(/([A-Z])/g, '-$1').toLowerCase();

  return (
    <a
      rel="alternate"
      hrefLang={language}
      href="#"
      onClick={handleClick}
      style={style}
      className={`layer-toggle layer-toggle-${menu} ${className || ''}`}
    >
      {children}
    </a>
  );
};

export default Context(LayerToggle);

import { useState, useEffect } from 'react';
import Context from './Context';

const Layer = ({ language, title, level, name, children, onClose }) => {
  const [style, setStyle] = useState();
  const [titleWidth, setTitleWidth] = useState(0);

  useEffect(() => {
    const { style, titleWidth } = getDimensions();
    setStyle(style);
    setTitleWidth(titleWidth);
  }, [level]);

  const getDimensions = () => {
    const baseZIndex = 1000;
    //# TODO: get layer width from css
    const layerWidth = 300;
    const levelOffset = 8;
    const layerPadding = 16;
    const closeButtonWidth = 16;

    let width = layerWidth;
    let offset = level * levelOffset;

    let style = {};
    if (offset != 0) {
      width = layerWidth - offset + levelOffset;
      style = {
        borderLeft: `${levelOffset}px solid rgba(0, 0, 0, 0.2)`,
        width: `${width}px`,
        zIndex: baseZIndex + level,
      };
    }

    const titleWidth =
      width - (layerPadding * 2.5 + closeButtonWidth + levelOffset);
    return { style, titleWidth };
  };

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <nav className={`layer layer-${name}`} role="navigation" style={style}>
      <div className="layer-header">
        <span
          className="layer-header-title"
          style={{ width: `${titleWidth}px` }}
        >
          {title || 'Menu'}
        </span>
        <a
          rel="alternate"
          hrefLang={language}
          className="layer-header-close"
          href="#"
          onClick={handleClose}
        >
          &#x00D7;
        </a>
      </div>
      <div className="layer-inner">
        <div className="layer-content">{children}</div>
      </div>
    </nav>
  );
};

export default Context(Layer);

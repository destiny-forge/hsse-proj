import React from 'react';
import { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import Layer from './Layer';
import _ from 'underscore';

const LayerContext = React.createContext();
const LayerConsumer = LayerContext.Consumer;

const LayerProvider = ({ site, page, children }) => {
  let className = '';
  const [layers, setLayers] = useState([]);
  const [overlay, setOverlay] = useState();

  const toggleLayer = (name, title, context) => {
    context = title || context;
    document.activeElement.blur();

    const layer = { name, title, context };
    setLayers([...layers, layer]);
  };

  const dismissLayer = () => {
    if (layers.length == 0) return;
    let cloned = _.clone(layers);
    cloned.pop();
    setLayers(cloned);
  };

  const dismissAll = () => {
    setLayers([]);
  };

  const findLayerGroup = () => {
    return _.find(children, (child) => child.type.displayName === 'LayerGroup');
  };

  const findLayer = (name) => {
    let group = findLayerGroup();

    let layer = _.find(group.props.children, (layer) => {
      return layer.type.displayName === 'Layer' && layer.props.name === name;
    });

    if (!layer) {
      throw new Error(`Unknown layer requested ${name}`);
    }

    return [layer.props.children, layer.props.title];
  };

  const setOverlayContent = (content) => {
    setOverlay(content);
  };

  const renderOverlayContent = () => {
    return (
      layers.length > 0 &&
      overlay && (
        <div className="layered-navigation-overlay-content">{overlay}</div>
      )
    );
  };

  const renderLayer = (name, content, title, level) => {
    return (
      <Layer
        key={`layer-${level + 1}`}
        onClose={dismissLayer}
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
    return layers.map((layer) => {
      level += 1;
      let [content, _title] = findLayer(layer.name);
      let title = layer.title || _title;
      let props = _.clone(content.props);
      props.context = layer.context;

      let component = React.cloneElement(content, props);
      return renderLayer(layer.name, component, title, level);
    });
  };

  className += `${site} app ${page} layered-navigation`;
  if (layers.length > 0) {
    className += ' layer-toggled';
  }

  if (layers.length > 0) document.body.classList.add('filter-scroll');
  else document.body.classList.remove('filter-scroll');

  return (
    <LayerContext.Provider value={{ toggleLayer, dismissLayer, dismissAll }}>
      <div id="app" className={className}>
        <div transitionName="layer" component="div">
          {renderLayers()}
        </div>
        <div className="layered-navigation-content">
          <div className="layered-navigation-overlay" onClick={dismissLayer}>
            {renderOverlayContent()}
          </div>
          {children}
        </div>
      </div>
    </LayerContext.Provider>
  );
};

export { LayerProvider, LayerConsumer };

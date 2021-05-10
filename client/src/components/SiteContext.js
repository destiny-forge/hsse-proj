import React from 'react';

const SiteContext = React.createContext();
const SiteConsumer = SiteContext.Consumer;

const SiteProvider = ({ children }) => {
  let site = '';
  const url = window.location.origin;

  if (url.indexOf('healthsystemsevidence') >= 0) {
    site = 'hse';
  } else if (url.indexOf('socialsystemsevidence') >= 0) {
    site = 'sse';
  } else {
    site = 'cvd';
  }

  return (
    <SiteContext.Provider value={{ site }}>{children}</SiteContext.Provider>
  );
};

export { SiteProvider, SiteConsumer };

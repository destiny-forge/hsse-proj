import React, { useState } from 'react';

const GuidedSearchContext = React.createContext();
const GuidedSearchConsumer = GuidedSearchContext.Consumer;

const GuidedSearchProvider = ({ children }) => {
  let is_toggled = localStorage.getItem('guided_search');
  is_toggled = is_toggled === 'false' ? false : true;
  const [toggled, setToggled] = useState(is_toggled);

  const toggle = () => {
    const newValue = !toggled;
    setToggled(newValue);
    localStorage.setItem('guided_search', newValue);
  };

  return (
    <GuidedSearchContext.Provider value={{ toggled, toggle }}>
      {children}
    </GuidedSearchContext.Provider>
  );
};

export { GuidedSearchProvider, GuidedSearchConsumer };

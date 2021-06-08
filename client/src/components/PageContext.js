import React from 'react';
import { useState } from 'react';

const PageContext = React.createContext();
const PageConsumer = PageContext.Consumer;

const PageProvider = ({ children }) => {
  let [page, setPage] = useState('home');

  const sPage = (name) => {
    setPage(name);
  };

  return (
    <PageContext.Provider value={{ page, sPage }}>
      {children}
    </PageContext.Provider>
  );
};

export { PageProvider, PageConsumer };

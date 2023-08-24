import { createContext, useState } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  const [pageTitle, setPageTitle] = useState('');

  return (
    <AppContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };

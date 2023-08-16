import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  const [pageTitle, setPageTitle] = useState('');

  return (
    <AppContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </AppContext.Provider>
  );
}

// function useApp() {
//   const context = useContext(AppContext);
//   if (context === undefined)
//     throw new Error('PageTitleContext was used outside of PageTitleProvider');
//   return context;
// }

export { AppProvider, AppContext };

import { createContext, useEffect, useState } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorage';

const AppContext = createContext();

function AppProvider({ children }) {
  const [pageTitle, setPageTitle] = useState('');
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, 'isDarkMode');

  useEffect(() => {
    document.documentElement.classList.remove('light-mode', 'dark-mode');
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <AppContext.Provider
      value={{ pageTitle, setPageTitle, isDarkMode, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };

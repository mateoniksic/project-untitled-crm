import { createContext, useEffect, useState } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorage';

const AppContext = createContext();

function AppProvider({ children }) {
  const [pageTitle, setPageTitle] = useState('');
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, 'isDarkMode');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function updatePageTitle(title) {
    setPageTitle(title);
  }

  return (
    <AppContext.Provider
      value={{ pageTitle, updatePageTitle, isDarkMode, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };

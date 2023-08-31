import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function useApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error('AppContext was used outside of AppProvider');
  return context;
}

export { useApp };

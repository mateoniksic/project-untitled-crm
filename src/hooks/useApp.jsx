import { useContext } from 'react';

import { AppContext } from '../context/AppContext';

function useApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error('PageTitleContext was used outside of PageTitleProvider');
  return context;
}

export { useApp };

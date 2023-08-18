import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import GlobalStyles from './styles/GlobalStyles';

import AppLayout from './ui/AppLayout';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Contacts from './pages/Contacts/Contacts';
import Contact from './pages/Contacts/Contact';
import Deals from './pages/Deals/Deals';
import Deal from './pages/Deals/Deal';
import SettingsLayout from './ui/SettingsLayout';
import SettingsWorkspace from './pages/Settings/SettingsWorkspace';
import SettingsProfile from './pages/Settings/SettingsProfile';
import SettingsAccount from './pages/Settings/SettingsAccount';
import PageNotFound from './pages/PageNotFound';

import { AppProvider } from './context/AppContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <GlobalStyles />
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Navigate replace to="auth" />} />
              <Route path="auth" element={<Auth />} />
            </Route>
            <Route path="workspace/" element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="contacts/:contactId" element={<Contact />} />
              <Route path="deals" element={<Deals />} />
              <Route path="deals/:dealId" element={<Deal />} />
              <Route path="settings" element={<SettingsLayout />}>
                <Route index element={<SettingsWorkspace />} />
                <Route path="profile" element={<SettingsProfile />} />
                <Route path="account" element={<SettingsAccount />} />
              </Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
      <Toaster
        position="bottom-left"
        gutter={16}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: '1.4rem',
            maxWidth: '32rem',
            padding: '1.6rem',
            background: 'white',
            border: '1px solid var(--border-non-interactive)',
            boxShadow: '-0.6rem 0.6rem 0.1rem var(--bg-subtle)',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;

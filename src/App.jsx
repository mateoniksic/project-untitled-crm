import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;

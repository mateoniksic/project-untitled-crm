import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import AppLayout from './ui/AppLayout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Contacts from './pages/Contacts';
import Contact from './pages/Contact';
import Deal from './pages/Deal';
import Deals from './pages/Deals';
import SettingsLayout from './pages/SettingsLayout';
import PageNotFound from './pages/PageNotFound';

import { AppProvider } from './context/AppContext';

function App() {
  return (
    <>
      <GlobalStyles />
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route
                index
                element={
                  <Navigate
                    replace
                    to='sign-in'
                  />
                }
              />
              <Route
                path='sign-in'
                element={<SignIn />}
              />
              <Route
                path='sign-up'
                element={<SignUp />}
              />
            </Route>
            <Route
              path='workspace/'
              element={<AppLayout />}
            >
              <Route
                index
                element={
                  <Navigate
                    replace
                    to='dashboard'
                  />
                }
              />
              <Route
                path='dashboard'
                element={<Dashboard />}
              />
              <Route
                path='contacts'
                element={<Contacts />}
              />
              <Route
                path='contacts/:contactId'
                element={<Contact />}
              />
              <Route
                path='deals'
                element={<Deals />}
              />
              <Route
                path='deals/:dealId'
                element={<Deal />}
              />
              <Route
                path='settings'
                element={<SettingsLayout />}
              >
                <Route
                  index
                  element={'Workspace'}
                />

                <Route
                  path='profile'
                  element={'Profile'}
                />
                <Route
                  path='account'
                  element={'Account'}
                />
              </Route>
            </Route>
            <Route
              path='*'
              element={<PageNotFound />}
            />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;

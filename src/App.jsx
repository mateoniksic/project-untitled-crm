import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProvider } from './context/AppContext';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
import AppToaster from './ui/Toaster';
import ProtectedRoute from './ui/ProtectedRoute';
import SettingsLayout from './ui/SettingsLayout';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Contacts from './pages/Contacts';
import Contact from './pages/Contact';
import Deals from './pages/Deals';
import Workspace from './pages/settings/Workspace';
import WorkspaceMemebers from './pages/settings/WorkspaceMembers';
import UserProfile from './pages/settings/UserProfile';
import UserAccount from './pages/settings/UserAccount';
import PageNotFound from './pages/PageNotFound';

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
      <GlobalStyles />
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Navigate replace to="auth" />} />
              <Route path="auth" element={<Auth />} />
            </Route>
            <Route
              path="workspace/"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="contacts/:contactId" element={<Contact />} />
              <Route path="deals" element={<Deals />} />
              <Route path="settings" element={<SettingsLayout />}>
                <Route index element={<Workspace />} />
                <Route path="members" element={<WorkspaceMemebers />} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="account" element={<UserAccount />} />
              </Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
      <AppToaster />
    </QueryClientProvider>
  );
}

export default App;

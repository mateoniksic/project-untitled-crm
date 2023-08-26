import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
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
import WorkspaceSettings from './pages/WorkspaceSettings';
import MembersSettings from './pages/MembersSettings';
import UserProfileSettings from './pages/UserProfileSettings';
import UserAccountSettings from './pages/UserAccountSettings';
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
      <ReactQueryDevtools position="bottom-right" />
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
                <Route index element={<WorkspaceSettings />} />
                <Route path="members" element={<MembersSettings />} />
                <Route path="profile" element={<UserProfileSettings />} />
                <Route path="account" element={<UserAccountSettings />} />
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

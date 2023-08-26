import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useUser } from '../features/auth/useUser';
import Spinner from './Spinner';

function ProtectedRoute({ children }) {
  //1. Load the authenticated user
  const { isLoadingUser, isAuthenticatedUser } = useUser();
  const navigate = useNavigate();

  //2. If no authenticated user redirect to sign in.
  useEffect(() => {
    if (!isAuthenticatedUser && !isLoadingUser) {
      navigate('/auth');
    }
  }, [isAuthenticatedUser, isLoadingUser, navigate]);

  //3. While loading show a spinner
  if (isLoadingUser)
    return (
      <Spinner.FullPage>
        <Spinner />
      </Spinner.FullPage>
    );

  //4. If there is user load the app.
  if (isAuthenticatedUser) return children;
}

export default ProtectedRoute;

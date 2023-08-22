import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import Spinner from './Spinner';

import { useUser } from '../features/auth/hooks/useUser';

const FullPage = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  width: 100dvw;
`;

function ProtectedRoute({ children }) {
  //1. Load the authenticated user
  const { user, isLoadingUser, isAuthenticated } = useUser();
  const navigate = useNavigate();

  console.log('ProtectedRoute: ', user);
  //2. If no authenticated user redirect to sign in.
  useEffect(() => {
    if (!isAuthenticated && !isLoadingUser) {
      navigate('/auth');
    }
  }, [isAuthenticated, isLoadingUser, navigate]);

  //3. While loading show a spinner
  if (isLoadingUser)
    return (
      <FullPage>
        <Spinner.Wrapper>
          <Spinner />
        </Spinner.Wrapper>
      </FullPage>
    );

  //4. If there is user load the app.
  if (isAuthenticated) return children;
}

export default ProtectedRoute;

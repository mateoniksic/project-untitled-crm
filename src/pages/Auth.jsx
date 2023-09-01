import { styled } from 'styled-components';
import { useApp } from '../hooks/useApp';
import { Tab, Tabs, TabList, TabPanel } from '../ui/Tabs';
import Logo from '../ui/Logo';
import SignInForm from '../features/auth/SignInForm';
import SignUpForm from '../features/auth/SignUpForm';

const StyledSignIn = styled.div`
  background-color: var(--bg-normal);
  align-items: center;
  display: grid;
  grid-template-columns: minmax(40rem, 1fr) 1fr;
  grid-template-rows: 1fr;
  height: 100dvh;
  justify-content: center;
`;

const AuthFormDiv = styled.div`
  align-items: start;
  display: flex;
  flex-flow: column nowrap;
  gap: 3.2rem;
  justify-content: start;
  padding: 4rem;
  justify-self: center;
  width: 100%;
  max-width: 48rem;
`;

const AuthHeroDiv = styled.div`
  align-items: center;
  background-color: var(--bg-subtle);
  background-image: ${(props) =>
    props.$isDarkMode
      ? 'url(/auth/dashboard-dark.png)'
      : 'url(/auth/dashboard-light.png)'};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  border-left: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: column nowrap;
  height: 100dvh;
  justify-content: center;
`;

function SignIn() {
  const { isDarkMode } = useApp();
  return (
    <StyledSignIn>
      <AuthFormDiv>
        <Logo to="/" />
        <Tabs>
          <TabList>
            <Tab>Sign in</Tab>
            <Tab>Sign up</Tab>
          </TabList>
          <TabPanel>
            <SignInForm />
          </TabPanel>
          <TabPanel>
            <SignUpForm />
          </TabPanel>
        </Tabs>
      </AuthFormDiv>
      <AuthHeroDiv $isDarkMode={isDarkMode} />
    </StyledSignIn>
  );
}

export default SignIn;

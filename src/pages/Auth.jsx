import { styled } from 'styled-components';

import { Tab, Tabs, TabList, TabPanel } from '../ui/Tabs';

import SignInForm from '../features/auth/SignInForm';
import SignUpForm from '../features/auth/SignUpForm';
import Logo from '../ui/Logo';

const StyledSignIn = styled.div`
  background-color: var(--bg-normal);
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
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
`;

const AuthHeroDiv = styled.div`
  align-items: center;
  background-color: var(--bg-subtle);
  background-image: url(/auth/dashboard.png);
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
      <AuthHeroDiv />
    </StyledSignIn>
  );
}

export default SignIn;

import { styled } from 'styled-components';

import { Tab, Tabs, TabList, TabPanel } from '../ui/Tabs';

import SignInForm from '../features/authentication/SignInForm';
import SignUpForm from '../features/authentication/SignUpForm';
import Logo from '../ui/Logo';

const StyledSignIn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;
  height: 100dvh;
`;

const FormDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  gap: 3.2rem;
  padding: 4rem;
`;

const AuthHeroDiv = styled.div`
  background-color: var(--bg-subtle);
  background-image: url(../../public/authentication/dashboard.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  border-left: 1px solid var(--border-non-interactive);
`;

function SignIn() {
  return (
    <StyledSignIn>
      <FormDiv>
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
      </FormDiv>
      <AuthHeroDiv />
    </StyledSignIn>
  );
}

export default SignIn;

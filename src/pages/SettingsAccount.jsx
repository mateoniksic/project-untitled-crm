import { Tab, Tabs, TabList, TabPanel } from '../components/Tabs';
import {
  SettingsHeader,
  SettingsHeaderText,
} from '../components/SettingsHeader';
import Text from '../components/Text';

function SettingsAccount() {
  return (
    <>
      <Tabs>
        <SettingsHeader>
          <SettingsHeaderText>
            <Text as="h2" size="large">
              Account
            </Text>
            <Text as="p" size="subtle-medium">
              Change your sign in credentials.
            </Text>
          </SettingsHeaderText>
          <TabList>
            <Tab>Email</Tab>
            <Tab>Password</Tab>
          </TabList>
        </SettingsHeader>
        <TabPanel>EmailForm</TabPanel>
        <TabPanel>PasswordForm</TabPanel>
      </Tabs>
    </>
  );
}

export default SettingsAccount;

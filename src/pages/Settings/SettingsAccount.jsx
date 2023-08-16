import { Tab, Tabs, TabList, TabPanel } from '../../ui/Tabs';
import { SettingsHeader, SettingsHeaderText } from '../../ui/SettingsHeader';
import Text from '../../ui/Text';

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

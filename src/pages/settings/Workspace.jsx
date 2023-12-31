import { Tab, Tabs, TabList, TabPanel } from '../../ui/Tabs';
import { SettingsHeader, SettingsHeaderText } from '../../ui/SettingsHeader';
import Text from '../../ui/Text';
import UpdateBusinessProfileForm from '../../features/settings/workspace/UpdateBusinessProfileForm';
import UpdatePreferencesForm from '../../features/settings/workspace/UpdatePreferencesForm';

function Workspace() {
  return (
    <>
      <Tabs>
        <SettingsHeader>
          <SettingsHeaderText>
            <Text as="h2" size="large">
              Workspace
            </Text>
            <Text as="p" size="subtle-medium">
              Your business details and preferences related to this workspace.
            </Text>
          </SettingsHeaderText>
          <TabList>
            <Tab>General</Tab>
            <Tab>Preferences</Tab>
          </TabList>
        </SettingsHeader>
        <TabPanel>
          <UpdateBusinessProfileForm />
        </TabPanel>
        <TabPanel>
          <UpdatePreferencesForm />
        </TabPanel>
      </Tabs>
    </>
  );
}

export default Workspace;

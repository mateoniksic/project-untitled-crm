import { Tab, Tabs, TabList, TabPanel } from '../components/Tabs';
import {
  SettingsHeader,
  SettingsHeaderText,
} from '../components/SettingsHeader';
import Text from '../components/Text';
import UpdateBusinessProfileForm from '../features/settings/workspace/forms/UpdateBusinessProfileForm';
import UpdatePreferencesForm from '../features/settings/workspace/forms/UpdatePreferencesForm';

function SettingsWorkspace() {
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

export default SettingsWorkspace;

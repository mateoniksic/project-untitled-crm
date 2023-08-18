import { Tab, Tabs, TabList, TabPanel } from '../../ui/Tabs';
import { SettingsHeader, SettingsHeaderText } from '../../ui/SettingsHeader';
import Text from '../../ui/Text';

function SettingsProfile() {
  return (
    <>
      <SettingsHeader>
        <SettingsHeaderText>
          <Text as="h2" size="large">
            Profile
          </Text>
          <Text as="p" size="subtle-medium">
            Your profile is visible across the workspace.
          </Text>
        </SettingsHeaderText>
      </SettingsHeader>
      <div>ProfileForm</div>
    </>
  );
}

export default SettingsProfile;
import { SettingsHeader, SettingsHeaderText } from '../ui/SettingsHeader';
import Text from '../ui/Text';
import UpdateProfileForm from '../features/settings/profile/UpdateProfileForm';

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
      <UpdateProfileForm />
    </>
  );
}

export default SettingsProfile;

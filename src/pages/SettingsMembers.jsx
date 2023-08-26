import { Tab, Tabs, TabList, TabPanel } from '../ui/Tabs';
import { SettingsHeader, SettingsHeaderText } from '../ui/SettingsHeader';
import Text from '../ui/Text';
import AddMemberForm from '../features/settings/members/AddMemberForm';
import MemberList from '../features/settings/members/MemberList';

function SettingsMembers() {
  return (
    <>
      <Tabs>
        <SettingsHeader>
          <SettingsHeaderText>
            <Text as="h2" size="large">
              Members
            </Text>
            <Text as="p" size="subtle-medium">
              Manage your workspace members.
            </Text>
          </SettingsHeaderText>
          <TabList>
            <Tab>Members</Tab>
            <Tab>Add member</Tab>
          </TabList>
        </SettingsHeader>
        <TabPanel>
          <MemberList />
        </TabPanel>
        <TabPanel>
          <AddMemberForm />
        </TabPanel>
      </Tabs>
    </>
  );
}

export default SettingsMembers;

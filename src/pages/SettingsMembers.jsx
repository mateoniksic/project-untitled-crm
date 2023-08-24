import { Tab, Tabs, TabList, TabPanel } from '../components/Tabs';
import {
  SettingsHeader,
  SettingsHeaderText,
} from '../components/SettingsHeader';
import Text from '../components/Text';
import AddMemberForm from '../features/settings/members/forms/AddMemberForm';
import MemberList from '../features/settings/members/ui/MemberList';

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

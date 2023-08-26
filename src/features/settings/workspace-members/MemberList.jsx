import { styled } from 'styled-components';
import { useUser } from '../../auth/useUser';
import { useWorkspaceUserProfiles } from './useMembers';
import ProfileCard from '../../../ui/ProfileCard';
import Spinner from '../../../ui/Spinner';

const MemberListItem = styled.li`
  padding: 1.6rem 0.8rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--border-interactive);
  }
`;

function MemberList() {
  const {
    user: { workspace_id: workspaceId },
  } = useUser();
  const { workspaceUserProfiles, isLoadingUserworkspaceUserProfiles } =
    useWorkspaceUserProfiles({ workspaceId });

  if (isLoadingUserworkspaceUserProfiles)
    <Spinner.Wrapper>
      <Spinner />
    </Spinner.Wrapper>;

  return (
    <ul>
      {workspaceUserProfiles?.map((profile) => (
        <MemberListItem key={profile.user_profile_id}>
          <ProfileCard
            firstName={profile.user_profile_first_name}
            lastName={profile.user_profile_last_name}
            avatarUrl={profile.user_profile_avatar}
          />
        </MemberListItem>
      ))}
    </ul>
  );
}

export default MemberList;

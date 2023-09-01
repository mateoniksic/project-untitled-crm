import { styled } from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { useUser } from '../auth/useUser';
import { useUserProfile } from '../../features/settings/user-profile/useUserProfile';
import Text from '../../ui/Text';
import Spinner from '../../ui/Spinner';
import Form from '../../ui/Form';

const StyledDashboardHeader = styled.div`
  grid-area: dheader;
  align-items: center;
  background-color: var(--bg-normal);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 3.6rem;
`;

function DashboardHeader() {
  const {
    user: { id: userId },
  } = useUser();
  const { userProfile, isLoadingUserProfile } = useUserProfile({ userId });

  const [searchParams, setSearchParams] = useSearchParams();

  const lastXDaysFilterOptions = [
    { value: '1', label: 'Last day' },
    { value: '7', label: 'Last 7 days' },
    { value: '30', label: 'Last 30 days' },
    { value: '60', label: 'Last 60 days' },
    { value: '90', label: 'Last 90 days' },
  ];

  if (isLoadingUserProfile)
    return (
      <Spinner.Wrapper>
        <Spinner />
      </Spinner.Wrapper>
    );

  return (
    <StyledDashboardHeader>
      <Text size="large">Good day, {userProfile.user_profile_first_name}.</Text>
      <Form.Select
        type="text"
        id="filter-date"
        options={lastXDaysFilterOptions}
        placeholder="Select date"
        defaultValue={lastXDaysFilterOptions.find((lastXDay) =>
          searchParams.get('last')
            ? lastXDay.value === searchParams.get('last')
            : lastXDay.value === lastXDaysFilterOptions[1].value,
        )}
        onChange={(data) => {
          const queryValue = data.value;
          if (queryValue) {
            searchParams.set('last', queryValue);
            setSearchParams(searchParams);
          }
        }}
      />
    </StyledDashboardHeader>
  );
}

export default DashboardHeader;

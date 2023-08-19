import { styled } from 'styled-components';
import Text from '../../components/common/Text';

const StyledDashboardHeader = styled.div`
  align-items: center;
  background-color: var(--bg-normal);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: row wrap;
  grid-column: 1/-1;
  grid-row: 1;
  justify-content: space-between;
  padding: 3.6rem;
`;

function DashboardHeader() {
  return (
    <StyledDashboardHeader>
      <Text size="large">👋 Good day, John!</Text>
      <span>Last 30 days</span>
    </StyledDashboardHeader>
  );
}

export default DashboardHeader;

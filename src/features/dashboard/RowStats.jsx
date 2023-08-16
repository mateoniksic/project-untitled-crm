import { styled } from 'styled-components';
import { CircleDollarSignIcon } from 'lucide-react';

import Text from '../../ui/Text';
import DashboardCard from './DashboardCard';

const StyledRowStats = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-column: 1 / -1;
  grid-row: 2/3;
  grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
`;

function RowStats() {
  return (
    <StyledRowStats>
      <DashboardCard
        title="Open deals"
        icon={<CircleDollarSignIcon />}
        color="--indigo-3">
        <Text size="xlarge">$1,469,831.00</Text>
      </DashboardCard>

      <DashboardCard
        title="Closed deals"
        icon={<CircleDollarSignIcon />}
        color="--mint-3">
        <Text size="xlarge">$469,831.00</Text>
      </DashboardCard>

      <DashboardCard
        title="Lost deals"
        icon={<CircleDollarSignIcon />}
        color="--tomato-3">
        <Text size="xlarge">$69,831.00</Text>
      </DashboardCard>

      <DashboardCard
        title="Unfit deals"
        icon={<CircleDollarSignIcon />}
        color="--sage-3">
        <Text size="xlarge">$831.00</Text>
      </DashboardCard>
    </StyledRowStats>
  );
}

export default RowStats;

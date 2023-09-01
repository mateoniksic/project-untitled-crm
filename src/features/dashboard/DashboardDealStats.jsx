import { styled } from 'styled-components';
import { CircleDollarSignIcon, Currency } from 'lucide-react';
import Text from '../../ui/Text';
import DashboardCard from './DashboardCard';
import { formatCurrency } from '../../utils/helpers';

const StyledDashboardDealStats = styled.div`
  grid-area: ddstats;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  gap: 2.4rem;
  flex-flow: row wrap;
`;

function DashboardDealStats({ deals, currency }) {
  const valuesObj = deals.reduce(
    (stats, deal) => {
      let status = deal.deal_status.deal_status_name.toLowerCase();
      stats[status] += deal.deal_value;
      return stats;
    },
    { open: 0, closed: 0, lost: 0, unfit: 0 },
  );

  const formattedValues = Object.keys(valuesObj).reduce(
    (formattedValues, key) => {
      return {
        ...formattedValues,
        [key]: formatCurrency(valuesObj[key], currency),
      };
    },
    {},
  );

  return (
    <StyledDashboardDealStats>
      <DashboardCard
        title="Open deals"
        icon={<CircleDollarSignIcon />}
        color="--sage-3">
        <Text size="xlarge">{formattedValues?.open}</Text>
      </DashboardCard>

      <DashboardCard
        title="Closed deals"
        icon={<CircleDollarSignIcon />}
        color="--mint-3">
        <Text size="xlarge">{formattedValues?.closed}</Text>
      </DashboardCard>

      <DashboardCard
        title="Lost deals"
        icon={<CircleDollarSignIcon />}
        color="--tomato-3">
        <Text size="xlarge">{formattedValues?.lost}</Text>
      </DashboardCard>

      <DashboardCard
        title="Unfit deals"
        icon={<CircleDollarSignIcon />}
        color="--sage-3">
        <Text size="xlarge">{formattedValues?.unfit}</Text>
      </DashboardCard>
    </StyledDashboardDealStats>
  );
}

export default DashboardDealStats;

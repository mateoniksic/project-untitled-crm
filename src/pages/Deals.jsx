import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import { useApp } from '../hooks/useApp';
import Text from '../ui/Text';
import DealTable from '../features/deals/DealTable';
import DealAdd from '../features/deals/DealAdd';

const StyledDeals = styled.div`
  background-color: var(--bg-normal);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-non-interactive);
  padding: 3.2rem;
`;

const DealsHeader = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;

function Deals() {
  const [totalDeals, setTotalDeals] = useState('');
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Deals'));

  return (
    <StyledDeals>
      <DealsHeader>
        <Text size="large" as="h2">
          Total deals ({totalDeals})
        </Text>
        <DealAdd />
      </DealsHeader>
      <DealTable setTotalDeals={setTotalDeals} />
    </StyledDeals>
  );
}

export default Deals;

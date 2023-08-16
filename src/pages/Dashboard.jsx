import { styled } from 'styled-components';
import { useEffect } from 'react';

import DashboardHeader from '../features/dashboard/DashboardHeader';
import RowStats from '../features/dashboard/RowStats';
import RowPipeline from '../features/dashboard/RowPipeline';

import { useApp } from '../hooks/useApp';

const StyledDashboard = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto 1fr;
  height: 100%;
  padding: 3.2rem;
`;

function Dashboard() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Dashboard'));

  return (
    <StyledDashboard>
      <DashboardHeader />
      <RowStats />
      <RowPipeline />
    </StyledDashboard>
  );
}

export default Dashboard;

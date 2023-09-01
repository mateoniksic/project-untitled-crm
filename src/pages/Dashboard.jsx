import { styled } from 'styled-components';
import { useEffect } from 'react';
import { useApp } from '../hooks/useApp';
import { useDashboard } from '../features/dashboard/useDashboard';
import { useUser } from '../features/auth/useUser';
import { useWorkspace } from '../features/settings/workspace/useWorkspace';
import DashboardHeader from '../features/dashboard/DashboardHeader';
import DashboardDealStats from '../features/dashboard/DashboardDealStats';
import DashboardPipelineStats from '../features/dashboard/DashboardPipelineStats';
import Spinner from '../ui/Spinner';

const StyledDashboard = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'dheader dheader dheader dheader'
    'ddstats ddstats ddstats ddstats'
    'dpstats dpstats dpstats dpstats';
  height: 100%;
  padding: 3.2rem;
`;

function Dashboard() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Dashboard'));
  const {
    user: { workspace_id: workspaceId },
    isLoadingUser,
  } = useUser();
  const {
    workspace: { workspace_currency: currency } = {},
    isLoadingWorkspace,
  } = useWorkspace({ workspaceId });
  const { deals, isLoadingDeals } = useDashboard({ workspaceId });

  const isLoading = isLoadingUser || isLoadingWorkspace || isLoadingDeals;

  if (isLoading)
    return (
      <Spinner.Wrapper>
        <Spinner />
      </Spinner.Wrapper>
    );

  return (
    <StyledDashboard>
      <DashboardHeader />
      <DashboardDealStats deals={deals} currency={currency} />
      <DashboardPipelineStats deals={deals} currency={currency} />
    </StyledDashboard>
  );
}

export default Dashboard;

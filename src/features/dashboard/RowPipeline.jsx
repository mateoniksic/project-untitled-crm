import { styled } from 'styled-components';
import { FilterIcon } from 'lucide-react';

import DashboardCard from './DashboardCard';

const StyledRowPipeline = styled.div`
  display: grid;
  gap: 2.4rem;
  grid-column: 1 / -1;
  grid-row: 3/4;
  grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
`;

function RowPipeline() {
  return (
    <StyledRowPipeline>
      <DashboardCard title="Pipeline stages" icon={<FilterIcon />}>
        PipelineTable
      </DashboardCard>
      <DashboardCard title="Pipeline stages distribution" icon={<FilterIcon />}>
        DistributionGraph
      </DashboardCard>
    </StyledRowPipeline>
  );
}

export default RowPipeline;

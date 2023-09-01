import { styled } from 'styled-components';
import { FilterIcon } from 'lucide-react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  LabelList,
} from 'recharts';

import { formatCurrency } from '../../utils/helpers';
import DashboardCard from './DashboardCard';
import Table from '../../ui/Table';
import DashboardPipelineStageRow from './DashboardPipelineStageRow';

const StyledDashboardPipelineStats = styled.div`
  grid-area: dpstats;
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: start;
  gap: 2.4rem;
  flex-flow: row wrap;
`;

function DashboardPipelineStats({ deals, currency }) {
  const pipelineStages = Object.values(
    deals.reduce((pipelineStages, deal) => {
      let pipelineStage = deal.pipeline_stage.pipeline_stage_name;

      if (!pipelineStages[pipelineStage]) {
        pipelineStages[pipelineStage] = {
          id: deal.pipeline_stage_id,
          name: pipelineStage,
          dealsTotal: 0,
          dealsValue: 0,
          pipelineShare: 0,
          fill: 'var(--component-normal)',
        };
      }

      let pipeline = pipelineStages[pipelineStage];
      pipeline.dealsTotal++;
      pipeline.dealsValue += deal.deal_value;
      pipeline.pipelineShare = (pipeline.dealsTotal / deals.length) * 100;

      return pipelineStages;
    }, {}),
  )
    .map((stage) => {
      return {
        ...stage,
        dealsValue: formatCurrency(stage.dealsValue, currency),
      };
    })
    .sort((s1, s2) => s1.id - s2.id);

  console.log(pipelineStages);
  return (
    <StyledDashboardPipelineStats>
      <DashboardCard title="Pipeline stages" icon={<FilterIcon />}>
        <Table.Wrapper>
          <Table
            role="table"
            columns="minmax(8rem, 0.65fr) minmax(7rem, 0.25fr) minmax(4.8rem, 0.25fr);">
            <Table.Header>
              <Table.Column>Pipeline stage</Table.Column>
              <Table.Column>Deals total</Table.Column>
              <Table.Column>Deals value</Table.Column>
            </Table.Header>
            <Table.Body
              data={pipelineStages}
              render={(pipelineStage) => (
                <DashboardPipelineStageRow
                  key={pipelineStage.id}
                  pipelineStage={pipelineStage}
                />
              )}
            />
          </Table>
        </Table.Wrapper>
      </DashboardCard>
      <DashboardCard title="Pipeline stages distribution" icon={<FilterIcon />}>
        {pipelineStages.length ? (
          <ResponsiveContainer height={368} width="100%">
            <PieChart>
              <Pie
                data={pipelineStages}
                nameKey="name"
                dataKey="pipelineShare"
                innerRadius={75}
                outerRadius={180}
                paddingAngle={2}
                style={{ stroke: 'var(--border-non-interactive)' }}>
                <LabelList
                  dataKey={(entry) =>
                    `${entry.name} (${entry.pipelineShare.toFixed(2)}%)`
                  }
                  position="inside"
                  angle="15"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: '400',
                    fontSize: '0.9rem',
                    stroke: 'var(--text-lc)',
                  }}
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        ) : (
          'No records found.'
        )}
      </DashboardCard>
    </StyledDashboardPipelineStats>
  );
}

export default DashboardPipelineStats;

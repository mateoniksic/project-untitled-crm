import styled from 'styled-components';
import Row from '../../ui/Row';

const StyledDashboardPipelineStageRow = styled.div`
  align-items: center;
  column-gap: 2.4rem;
  display: grid;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2rem;
  grid-template-columns:
    minmax(8rem, 0.65fr) minmax(7rem, 0.25fr)
    minmax(4.8rem, 0.25fr);
  padding: 0.8rem 2rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--border-non-interactive);
  }
`;

function DashboardPipelineStageRow({ pipelineStage }) {
  return (
    <StyledDashboardPipelineStageRow>
      <Row>{pipelineStage.name}</Row>
      <Row $justifyContent="center">{pipelineStage.dealsTotal}</Row>
      <Row $justifyContent="center">{pipelineStage.dealsValue}</Row>
    </StyledDashboardPipelineStageRow>
  );
}

export default DashboardPipelineStageRow;

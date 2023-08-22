import { styled, css } from 'styled-components';

import Text from '../../../components/Text';

import { formatCurrency, formatDate } from '../../../utils/helpers';

const DealCardStyled = styled.div`
  align-items: stretch;
  background-color: var(--bg-normal);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  overflow: hidden;
`;

const DealHeader = styled.div`
  align-items: center;
  background-color: var(--bg-subtle);
  border-bottom: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 1.6rem;
`;

const DealMain = styled.div`
  align-items: start;
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
  height: 100%;
  justify-content: start;
  padding: 1.6rem;
`;

const StatusWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 0.8rem;
`;

const statuses = {
  open: css`
    background-color: var(--component-normal-neutral);
  `,
  closed: css`
    background-color: var(--component-normal);
  `,
  lost: css`
    background-color: var(--component-normal-danger);
  `,
  unfit: css`
    background-color: var(--component-normal-neutral);
  `,
};

const Status = styled.div`
  ${(props) => statuses[props.$status]};
  padding: 0.8rem;
  border-radius: var(--border-radius-sm);
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2rem;
  max-width: max-content;
`;

const DealFooter = styled.div`
  background-color: var(--bg-subtle);
  border-top: 1px solid var(--border-non-interactive);
  padding: 1.6rem;
`;

function DealCard({ dealDetails }) {
  const {
    deal_title: title,
    deal_value: value,
    deal_description: description,
    deal_created_at: createdAt,
    deal_status: { deal_status_name: status },
    pipeline_stage: { pipeline_stage_name: pipelineStage },
  } = dealDetails ?? {};

  return (
    <DealCardStyled>
      <DealHeader>
        <Text size="normal">{title}</Text>
        <Text size="subtle-semibold">{formatCurrency(value, 'EUR')}</Text>
      </DealHeader>
      <DealMain>
        {description && <Text size="subtle-medium">{description}</Text>}
        <StatusWrapper>
          <Status $status={status.toLowerCase()}>{status}</Status>
          <Status>{pipelineStage}</Status>
        </StatusWrapper>
      </DealMain>
      <DealFooter>
        <Text size="detail">{formatDate(createdAt)}</Text>
      </DealFooter>
    </DealCardStyled>
  );
}

export default DealCard;

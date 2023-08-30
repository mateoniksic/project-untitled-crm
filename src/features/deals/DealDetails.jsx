import { styled, css } from 'styled-components';
import { useDeleteDeal } from './useDeleteDeal';
import { formatCurrency, formatDate } from '../../utils/helpers';
import Text from '../../ui/Text';
import UpdateDeal from './UpdateDeal';
import DeleteDeal from './DeleteDeal';

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
  padding: 0.4rem 1.6rem;
`;

const DealActions = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.8rem;
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
  padding: 0.4rem 0.8rem;
  border-radius: var(--border-radius-sm);
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2rem;
  max-width: max-content;
`;

const DealFooter = styled.div`
  background-color: var(--bg-subtle);
  border-top: 1px solid var(--border-non-interactive);
  padding: 1.6rem;
`;

function DealDetails({ dealDetails }) {
  const deal = {
    deal_id: dealDetails.deal_id,
    deal_title: dealDetails.deal_title,
    deal_description: dealDetails.deal_description,
    deal_value: dealDetails.deal_value,
    deal_created_at: dealDetails.deal_created_at,
    deal_status_id: dealDetails.deal_status_id,
    pipeline_id: dealDetails.pipeline_id,
    pipeline_stage_id: dealDetails.pipeline_stage_id,
    workspace_id: dealDetails.workspace_id,
    contact_id: dealDetails.contact_id,
  };

  const { deleteDeal, isDeletingDeal } = useDeleteDeal();

  return (
    <DealCardStyled>
      <DealHeader>
        <div>
          <Text size="subtle">{dealDetails.deal_title}</Text>
          <Text size="subtle-semibold">
            {formatCurrency(dealDetails.deal_value, 'EUR')}
          </Text>
        </div>
        <DealActions>
          <UpdateDeal dealToUpdate={deal}></UpdateDeal>
          <DeleteDeal
            resourceName={deal.deal_title}
            id={deal.deal_id}
            onDelete={deleteDeal}
            disabled={isDeletingDeal}></DeleteDeal>
        </DealActions>
      </DealHeader>
      <DealMain>
        {dealDetails.deal_description && (
          <Text size="subtle-medium">{dealDetails.deal_description}</Text>
        )}
        <StatusWrapper>
          <Status
            $status={dealDetails.deal_status.deal_status_name.toLowerCase()}>
            {dealDetails.deal_status.deal_status_name}
          </Status>
          <Status>{dealDetails.pipeline_stage.pipeline_stage_name}</Status>
        </StatusWrapper>
      </DealMain>
      <DealFooter>
        <Text size="detail">{formatDate(dealDetails.deal_created_at)}</Text>
      </DealFooter>
    </DealCardStyled>
  );
}

export default DealDetails;

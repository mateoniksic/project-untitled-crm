import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDeleteDeal } from './useDeleteDeal';
import { formatDate, formatCurrency } from '../../utils/helpers';
import ProfileCard from '../../ui/ProfileCard';
import UpdateDeal from './UpdateDeal';
import DeleteDeal from './DeleteDeal';

const TableRow = styled.div`
  align-items: center;
  column-gap: 2.4rem;
  display: grid;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2rem;
  grid-template-columns:
    minmax(8rem, 0.65fr) minmax(7rem, 0.25fr) minmax(4.8rem, 0.25fr)
    minmax(8rem, 0.3fr) minmax(16rem, 0.4fr) minmax(10rem, 0.4fr) 6.8rem;
  padding: 0.8rem 2rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--border-non-interactive);
  }
`;

const ActionsColumn = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  gap: 0.8rem;
`;

function DealsTableRow({ dealDetails }) {
  const {
    contact,
    pipeline,
    pipeline_stage: { pipeline_stage_name: pipelineStage },
    deal_status: { deal_status_name: status },
    workspace: { workspace_currency: currency },
    ...deal
  } = dealDetails;

  const { deleteDeal, isDeletingDeal } = useDeleteDeal();

  return (
    <TableRow>
      <div>
        <Link to={`/workspace/contacts/${contact.contact_id}`}>
          {deal.deal_title}
        </Link>
      </div>
      <div>{formatCurrency(deal.deal_value, currency)}</div>
      <div>{status}</div>
      <div>{pipelineStage}</div>
      <div>
        <ProfileCard
          firstName={contact.contact_first_name}
          lastName={contact.contact_last_name}
          avatarUrl={contact.contact_avatar}
          size="3.2"
        />
      </div>
      <div>{formatDate(deal.deal_created_at)}</div>
      <ActionsColumn>
        <UpdateDeal dealToUpdate={deal}></UpdateDeal>
        <DeleteDeal
          resourceName={deal.deal_title}
          id={deal.deal_id}
          onDelete={deleteDeal}
          disabled={isDeletingDeal}></DeleteDeal>
      </ActionsColumn>
    </TableRow>
  );
}

export default DealsTableRow;

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Menus from '../../../components/Menus';
import ProfileCard from '../../../components/ProfileCard';
import { formatDate, formatCurrency } from '../../../utils/helpers';

const TableRow = styled.div`
  align-items: center;
  column-gap: 2.4rem;
  display: grid;
  font-size: 1.4rem;
  font-weight: 500;
  grid-template-columns:
    minmax(20rem, 1fr) minmax(6.5rem, 0.25fr) minmax(6rem, 0.25fr)
    minmax(14rem, 0.5fr) minmax(20rem, 1fr) minmax(10.5rem, 0.65fr) 3.6rem;
  line-height: 2rem;
  padding: 1.4rem 2.4rem;

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
      <ProfileCard
        firstName={contact.contact_first_name}
        lastName={contact.contact_last_name}
        avatarUrl={contact.contact_avatar}
        size="3.2"
      />
      <div>{formatDate(deal.deal_created_at)}</div>

      <ActionsColumn>
        <Menus.Menu>
          <Menus.Toggle id={deal.deal_id}></Menus.Toggle>
        </Menus.Menu>
        <Menus.List id={deal.deal_id}>
          <Menus.Item>UpdateDeal</Menus.Item>
          <Menus.Item>DeleteDeal</Menus.Item>
        </Menus.List>
      </ActionsColumn>
    </TableRow>
  );
}

export default DealsTableRow;

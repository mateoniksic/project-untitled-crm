import { useEffect } from 'react';
import { useUser } from '../auth/useUser';
import { useDeals } from './useDeals';
import Text from '../../ui/Text';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Pagination from '../../ui/Pagination';
import DealsTableRow from './DealsTableRow';

function DealsTable({ setTotalDeals }) {
  const {
    user: { workspace_id: workspaceId },
  } = useUser();
  const { deals, isLoadingDeals } = useDeals({ workspaceId });
  useEffect(() => setTotalDeals(deals?.length));
  console.log(deals);
  if (isLoadingDeals)
    return (
      <Spinner.Wrapper>
        <Spinner />
      </Spinner.Wrapper>
    );

  if (!deals.length)
    return (
      <Text size="subtle">
        You don&apos;t have any deals. Click on &apos;New deal&apos; button to
        create a new deal.
      </Text>
    );

  return (
    <Menus>
      <Table.Wrapper>
        <Table
          role="table"
          columns="minmax(20rem, 1fr) minmax(6.5rem, 0.25fr) minmax(6rem, 0.25fr) 
          minmax(14rem, 0.5fr) minmax(20rem, 1fr) minmax(10.5rem, 0.65fr) 3.6rem;">
          <Table.Header>
            <Table.Column>Title</Table.Column>
            <Table.Column>Value</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Pipeline stage</Table.Column>
            <Table.Column>Deal contact</Table.Column>
            <Table.Column>Created at</Table.Column>
          </Table.Header>
          <Table.Body
            data={deals}
            render={(deal) => (
              <DealsTableRow key={deal.deal_id} dealDetails={deal} />
            )}
          />
          <Table.Footer>
            <Pagination count={deals.length} />
          </Table.Footer>
        </Table>
      </Table.Wrapper>
    </Menus>
  );
}

export default DealsTable;

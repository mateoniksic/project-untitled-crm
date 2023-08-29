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
          columns="6.8rem minmax(8rem, 0.75fr) minmax(7rem, 0.25fr) minmax(4.8rem, 0.25fr)
                  minmax(8rem, 0.3fr) minmax(16rem, 0.4fr) minmax(10rem, 0.4fr);">
          <Table.Header>
            <Table.Column></Table.Column>
            <Table.Column>Title</Table.Column>
            <Table.Column>Value</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Stage</Table.Column>
            <Table.Column>Contact</Table.Column>
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

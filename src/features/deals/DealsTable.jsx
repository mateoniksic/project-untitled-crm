import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { useUser } from '../auth/useUser';
import { useDeals } from './useDeals';
import Text from '../../ui/Text';
import Spinner from '../../ui/Spinner';
import Table from '../../ui/Table';
import Pagination from '../../ui/Pagination';
import DealsTableRow from './DealsTableRow';
import Form from '../../ui/Form';

const StyledDealsTable = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: stretch;
  gap: 2.4rem;
`;

function DealsTable({ setTotalDeals }) {
  const {
    user: { workspace_id: workspaceId },
  } = useUser();
  const { deals, isLoadingDeals } = useDeals({ workspaceId });
  useEffect(() => setTotalDeals(deals?.length));
  const [search, setSearch] = useState('');

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
    <StyledDealsTable>
      <Form.Rows>
        <Form.Input
          type="text"
          id="search-deals"
          placeholder="Search deals by title..."
          onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
        />
      </Form.Rows>
      <Table.Wrapper>
        <Table
          role="table"
          columns="minmax(8rem, 0.65fr) minmax(7rem, 0.25fr) minmax(4.8rem, 0.25fr)
                  minmax(8rem, 0.3fr) minmax(14rem, 0.4fr) minmax(10rem, 0.4fr) 6.8rem;">
          <Table.Header>
            <Table.Column>Title</Table.Column>
            <Table.Column>Value</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Stage</Table.Column>
            <Table.Column>Contact</Table.Column>
            <Table.Column>Created at</Table.Column>
          </Table.Header>
          <Table.Body
            data={deals.filter((deal) =>
              search === ''
                ? deal
                : deal.deal_title.toLowerCase().includes(search),
            )}
            render={(deal) => (
              <DealsTableRow key={deal.deal_id} dealDetails={deal} />
            )}
          />
          <Table.Footer>
            <Pagination count={deals.length} />
          </Table.Footer>
        </Table>
      </Table.Wrapper>
    </StyledDealsTable>
  );
}

export default DealsTable;

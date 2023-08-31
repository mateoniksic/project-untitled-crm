import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constants';
import { useUser } from '../auth/useUser';
import { useDeals } from './useDeals';
import { usePipelineStages } from './usePipelineStages';
import { useDealStatuses } from './useDealStatuses';
import Spinner from '../../ui/Spinner';
import Row from '../../ui/Row';
import Text from '../../ui/Text';
import Form from '../../ui/Form';
import DealAdd from './DealAdd';
import Table from '../../ui/Table';
import DealTableRow from './DealTableRow';
import Pagination from '../../ui/Pagination';

function DealTable() {
  const {
    user: { workspace_id: workspaceId },
  } = useUser();
  const { deals, count, isLoadingDeals } = useDeals({ workspaceId });

  const { pipelineStages, isLoadingPipelineStages } = usePipelineStages();
  const pipelineStageOptions = pipelineStages?.map((stage) => ({
    value: stage.pipeline_stage_id,
    label: stage.pipeline_stage_name,
  }));

  const { dealStatuses, isLoadingDealStatuses } = useDealStatuses();
  const dealStatusOptions = dealStatuses?.map((status) => ({
    value: status.deal_status_id,
    label: status.deal_status_name,
  }));

  const isLoading =
    isLoadingDeals || isLoadingPipelineStages || isLoadingDealStatuses;

  const [searchParams, setSearchParams] = useSearchParams();

  const statusFilter = Number(searchParams.get('status'));
  const stageFilter = Number(searchParams.get('stage'));

  if (isLoading)
    return (
      <Spinner.Wrapper>
        <Spinner />
      </Spinner.Wrapper>
    );

  return (
    <Row
      $flexDirection="column"
      $alignItems="stretch"
      $border="1"
      $borderRadius="sm"
      $padding="3.2rem">
      <Row
        $justifyContent="space-between"
        $alignItems="center"
        $gap={'2.4rem'}
        $margin="0 0 2.4rem 0">
        <Text size="large">Total deals ({count})</Text>
        <Row $gap={'1.6rem'}>
          <Form.Select
            type="text"
            id="filter-deals"
            options={dealStatusOptions}
            placeholder="All statuses"
            defaultValue={dealStatusOptions.find(
              (status) => status.value === statusFilter,
            )}
            isClearable
            onChange={(data) => {
              if (!data) {
                searchParams.delete('status');
                setSearchParams(searchParams);
                return;
              }
              const queryValue = data.value;
              if (queryValue) {
                searchParams.delete('page');
                searchParams.set('status', queryValue);
                setSearchParams(searchParams);
              }
            }}
          />
          <Form.Select
            type="text"
            id="filter-deals"
            options={pipelineStageOptions}
            placeholder="All pipeline stages"
            isClearable
            defaultValue={pipelineStageOptions.find(
              (stage) => stage.value === stageFilter,
            )}
            onChange={(data) => {
              if (!data) {
                searchParams.delete('stage');
                setSearchParams(searchParams);
                return;
              }
              const queryValue = data.value;
              if (queryValue) {
                searchParams.delete('page');
                searchParams.set('stage', queryValue);
                setSearchParams(searchParams);
              }
            }}
          />
          <DealAdd />
        </Row>
      </Row>
      <Table.Wrapper>
        <Table
          role="table"
          columns="minmax(8rem, 0.65fr) minmax(7rem, 0.25fr) minmax(4.8rem, 0.25fr)
                  minmax(8rem, 0.35fr) minmax(14rem, 0.4fr) minmax(10rem, 0.4fr) 6.8rem;">
          <Table.Header>
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
              <DealTableRow key={deal.deal_id} dealDetails={deal} />
            )}
          />
          {count > PAGE_SIZE && (
            <Table.Footer>
              <Pagination count={count} />
            </Table.Footer>
          )}
        </Table>
      </Table.Wrapper>
    </Row>
  );
}

export default DealTable;

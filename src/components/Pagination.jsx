import { styled } from 'styled-components';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const StyledPagination = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2.4rem;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2rem;
`;
const PaginationButtons = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  align-items: center;
  gap: 1.6rem;
`;
const PaginationButton = styled.button`
  align-items: center;
  background-color: var(--component-normal-neutral);
  border-radius: 0.6rem;
  border: none;
  display: flex;
  flex-flow: row nowrap;
  gap: 0.8rem;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  &:hover {
    background-color: var(--component-hovered-neutral);
  }
`;

const PAGE_SIZE = 10;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set('page', prev);
    setSearchParams(searchParams);
  }

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set('page', next);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <StyledPagination>
      <div>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{' '}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{' '}
        of <span>{count}</span> results.
      </div>
      <PaginationButtons>
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <ChevronLeftIcon size="16" />
          <span>Previous</span>
        </PaginationButton>
        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === pageCount}>
          <span>Next</span>
          <ChevronRightIcon size="16" />
        </PaginationButton>
      </PaginationButtons>
    </StyledPagination>
  );
}

export default Pagination;

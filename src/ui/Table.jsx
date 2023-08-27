import { styled } from 'styled-components';
import { createContext, useContext } from 'react';

const TableContext = createContext();

const StyledTable = styled.div`
  background-color: var(--color-grey-0);
  border-radius: 0.6rem;
  border: 1px solid var(--border-non-interactive);
  font-size: 1.4rem;
  min-width: min-content;
  overflow: hidden;
  width: 100%;
`;

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

const StyledTableWrapper = styled.div`
  align-items: start;
  display: flex;
  justify-content: start;
  overflow: auto;
  width: 100%;
`;

function TableWrapper({ children }) {
  return <StyledTableWrapper>{children}</StyledTableWrapper>;
}

const StyledTableHeader = styled.header`
  align-items: center;
  background-color: var(--bg-subtle);
  border-bottom: 1px solid var(--border-non-interactive);
  color: var(--text-lc);
  column-gap: 2.4rem;
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  padding: 1.6rem 2.4rem;
`;

function TableHeader({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledTableHeader as="header" $columns={columns}>
      {children}
    </StyledTableHeader>
  );
}

const StyledTableColumn = styled.div`
  font-weight: 600;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

function TableColumn({ children }) {
  return <StyledTableColumn>{children}</StyledTableColumn>;
}

function TableBody({ data, render }) {
  return <div>{data.map(render)}</div>;
}

const TableFooter = styled.header`
  background-color: var(--bg-subtle);
  border-top: 1px solid var(--border-non-interactive);
  color: var(--text-lc);
  padding: 1.6rem 2.4rem;
`;

Table.Wrapper = TableWrapper;
Table.Header = TableHeader;
Table.Column = TableColumn;
Table.Body = TableBody;
Table.Footer = TableFooter;

export default Table;
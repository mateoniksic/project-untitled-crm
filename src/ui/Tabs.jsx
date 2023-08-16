import { styled } from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

const StyledTabList = styled(TabList)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  width: max-content;
  background-color: var(--component-normal);
  padding: 0.4rem;
  border-radius: 0.3rem;
`;

const StyledTab = styled(Tab)`
  border-radius: 0.3rem;
  padding: 0.6rem 1.2rem;
  cursor: pointer;

  &[aria-selected='true'] {
    background-color: var(--component-selected);
  }
`;

const styledTabPanel = styled(TabPanel)`
  margin-top: 3.2rem;
`;

export {
  Tabs,
  StyledTabList as TabList,
  StyledTab as Tab,
  styledTabPanel as TabPanel,
};

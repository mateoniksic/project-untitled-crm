import { styled } from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

const StyledTabs = styled(Tabs)`
  width: 100%;
`;

const StyledTabList = styled(TabList)`
  align-items: center;
  background-color: var(--component-normal);
  border-radius: 0.3rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  padding: 0.4rem;
  width: max-content;
`;

const StyledTab = styled(Tab)`
  border-radius: 0.3rem;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2rem;
  padding: 0.6rem 1.2rem;

  &[aria-selected='true'] {
    background-color: var(--component-selected);
  }
`;

export {
  StyledTabs as Tabs,
  StyledTabList as TabList,
  StyledTab as Tab,
  TabPanel,
};

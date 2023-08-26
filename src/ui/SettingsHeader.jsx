import { styled } from 'styled-components';

const SettingsHeader = styled.div`
  background-color: var(--bg-subtle);
  border-bottom: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: column nowrap;
  gap: 2.4rem;
  margin: -3.2rem -3.2rem 3.2rem -3.2rem;
  padding: 3.2rem;
`;

const SettingsHeaderText = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.8rem;
`;

export { SettingsHeader, SettingsHeaderText };

import { styled } from 'styled-components';

import Text from '../../components/common/Text';

const StyledStat = styled.div`
  align-items: center;
  background-color: var(--bg-normal);
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-non-interactive);
  display: flex;
  flex-flow: column nowrap;
  gap: 1.6rem;
  justify-content: start;
  align-items: start;
  padding: 3.6rem;
`;

const StatIcon = styled.div`
  align-items: center;
  background-color: ${(props) =>
    props.color ? `var(${props.color})` : 'var(--component-normal)'};
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  padding: 0.4rem;
`;

const StatDesc = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  gap: 0.8rem;
  justify-content: start;
  text-transform: uppercase;
`;

function Stat({ title, icon, color, children }) {
  return (
    <StyledStat>
      <StatDesc>
        <StatIcon color={color}>{icon}</StatIcon>
        <Text size="detail">{title}</Text>
      </StatDesc>
      {children}
    </StyledStat>
  );
}

export default Stat;

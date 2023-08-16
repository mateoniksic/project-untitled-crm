import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

import Text from './Text';

const StyledLogo = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  gap: 0.4rem;
`;

function Logo({ className, to }) {
  return (
    <StyledLogo className={className} to={to}>
      <img src="../../public/logo/logo-wrapper.svg" alt="UntitledCRM logo" />
      <Text size="large">UntitledCRM</Text>
    </StyledLogo>
  );
}

export default Logo;

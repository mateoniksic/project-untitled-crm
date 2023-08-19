import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

import Text from '../common/Text';

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  gap: 0.4rem;
  justify-content: start;
`;

const LogoImage = styled.img`
  fill: red;
`;

function Logo({ className, to }) {
  return (
    <StyledLogo className={className} to={to}>
      <LogoImage src="/logo/logo.svg" alt="UntitledCRM logo" />
      <Text size="large">UntitledCRM</Text>
    </StyledLogo>
  );
}

export default Logo;

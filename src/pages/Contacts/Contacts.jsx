import { useEffect } from 'react';
import { PlusCircleIcon } from 'lucide-react';
import MainContainer from '../../ui/MainContainer';
import Button from '../../ui/Button';

import { useApp } from '../../hooks/useApp';

function Contacts() {
  const { setPageTitle } = useApp();
  useEffect(() => setPageTitle('Contacts'));

  return (
    <MainContainer>
      <span>Contacts</span>
      <Button $variation="primary">
        <PlusCircleIcon size="16" />
        New Deal
      </Button>
    </MainContainer>
  );
}

export default Contacts;

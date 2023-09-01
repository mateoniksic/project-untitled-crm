import { MoonStarIcon, SunDimIcon } from 'lucide-react';
import { useApp } from '../hooks/useApp';
import Button from './Button';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useApp();

  return (
    <Button variation="neutral" iconOnly={true} onClick={toggleDarkMode}>
      {isDarkMode ? <SunDimIcon size="16" /> : <MoonStarIcon size="16" />}
    </Button>
  );
}

export default DarkModeToggle;

import { Toaster } from 'react-hot-toast';

function AppToaster() {
  return (
    <Toaster
      position="bottom-left"
      gutter={16}
      toastOptions={{
        success: {
          iconTheme: {
            primary: 'var(--component-normal)',
            secondary: 'var(--text-hc)',
          },
          duration: 3000,
        },
        error: {
          iconTheme: {
            primary: 'var(--component-normal-danger)',
            secondary: 'var(--text-hc-danger)',
          },
          duration: 3000,
        },
        style: {
          background: 'var(--bg-normal)',
          border: '1px solid var(--border-non-interactive)',
          boxShadow: '-0.6rem 0.6rem 0.1rem var(--bg-subtle)',
          color: 'var(--text-hc)',
          fontSize: '1.4rem',
          maxWidth: '32rem',
          padding: '1.6rem',
        },
      }}
    />
  );
}

export default AppToaster;

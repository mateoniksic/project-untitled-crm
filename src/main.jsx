import { ErrorBoundary } from 'react-error-boundary';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorFallback from './ui/ErrorFallback.jsx';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace('/')}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);

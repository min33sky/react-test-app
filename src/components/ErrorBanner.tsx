import React from 'react';

interface IErrorBanner {
  message: string;
}

function ErrorBanner({ message }: IErrorBanner) {
  return (
    <div data-testid="error-banner" style={{ backgroundColor: 'red', color: 'white' }}>
      <p>{message}</p>
    </div>
  );
}

export default ErrorBanner;

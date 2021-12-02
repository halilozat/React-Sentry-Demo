import './App.css';
import React, { useState } from 'react';
import * as Sentry from '@sentry/react';

function App() {
  const data = [
    {
      id: 1,
      user: 'halil',
      password: '123',
    },
  ];

  const [state, setState] = useState({
    message: 'This is my app',
  });

  // const buttonError = () => {
  //   try {
  //     if (data.length !== 0) {
  //       throw new Error('data length error');
  //     }
  //   } catch (error) {
  //     Sentry.captureException(error);
  //     console.log('error');
  //     // Sentry.captureMessage('error');
  //     // Sentry.addBreadcrumb(error);
  //   }
  // };
  console.log(state.message);

  return (
    <Sentry.ErrorBoundary
      fallback={({ error, componentStack, resetError }) => (
        <React.Fragment>
          <div>You have encountered an error</div>
          <div>{error.toString()}</div>
          <div>{componentStack}</div>
          <button
            onClick={() => {
              setState({ message: 'This is my app' });
              resetError();
            }}
          >
            Click here to reset!
          </button>
        </React.Fragment>
      )}
    >
      <div>{state.message}</div>
      <button onClick={() => setState({ message: 'Hello World' })}>
        Click here to change message!
      </button>
    </Sentry.ErrorBoundary>
  );
}
export default App;

import './App.css';
import * as Sentry from '@sentry/react';

function App() {
  const data = [
    {
      id: 1,
      user: 'halil',
      password: '123',
    },
  ];

  const buttonError = () => {
    try {
      if (data.length !== 0) {
        throw new Error('data length error');
      }
    } catch (error) {
      Sentry.withScope(function (scope) {
        scope.setTag('my-tag', data[0].user);
        scope.setLevel('warning');
        scope.setExtra('data', data);
        // will be tagged with my-tag="my value"
        Sentry.captureException(new Error('my error!!! 444'));
      });
      console.log('error');
      console.log(data[0].user);
      // Sentry.captureMessage('error');
      // Sentry.addBreadcrumb(error);
    }
  };

  return (
    <button type="button" onClick={buttonError}>
      Break the world
    </button>
  );
}
export default Sentry.withProfiler(App);

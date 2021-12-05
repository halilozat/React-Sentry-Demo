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

  const data2 = [
    {
      id: 2,
      user: 'halil2',
      username: 'halilozat',
      email: 'hozat@gmail.com',
      password: '123',
    },
  ];

  const buttonError = () => {
    try {
      if (data.length !== 0) {
        throw new Error('data length error');
      }
    } catch (error) {
      // Sentry.withScope(function (scope) {
      //   scope.setTag('my-tag', data[0].user);
      //   scope.setLevel('warning');
      //   scope.setExtra('data', data);
      //   scope.setExtra('data2', data2);
      //   scope.setExtra('data3', 'data3');
      //   Sentry.captureException(new Error('my error!!!'));
      // });

      Sentry.configureScope((scope) => {
        scope.setTag('my-tag', data[0].user);
        scope.setLevel('warning');
        scope.setExtra('data', data);
        Sentry.captureException(new Error('my error! tryed'));

        scope.addBreadcrumb({
          type: 'error', // predefined types
          category: 'error',
          level: Sentry.Severity.Error,
        });
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

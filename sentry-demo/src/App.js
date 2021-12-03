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
      // Sentry.captureException(new Error('clean as never'), (scope) => {
      //   scope.clear();
      //   scope.setTag('clean', 'slate');
      //   return scope;
      // });

      const scope = new Sentry.Scope();
      scope.setTag('clean', 'slate');
      scope.setTag('section', 'articles');
      Sentry.captureException(new Error('something went wronggg'), scope);

      console.log('error');
      console.log(data);
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

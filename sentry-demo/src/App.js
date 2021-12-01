import './App.css';
import * as Sentry from '@sentry/react';

function App() {
  return (
    <button
      type="button"
      onClick={() => {
        throw Error('button error');
      }}
    >
      Break the world
    </button>
  );
}
export default Sentry.withProfiler(App);

import React from 'react';
import './App.css';

const Quotes = React.lazy(() => import('./components/Quotes'));

function App() {
  return (
    <>
    <React.Suspense fallback='Loading...'>
      <Quotes />
    </React.Suspense>
    </>
  )
}

export default App
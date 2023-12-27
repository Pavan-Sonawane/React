
import './App.css';
import React, { lazy, Suspense } from 'react';
const LazyCounter = lazy(() => import('./Componants/Counter'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <LazyCounter />
      </Suspense>
    </div>
  );
}

export default App;


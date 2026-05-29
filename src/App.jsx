import React from 'react';
import './App.css';

function App() {
  return (
    <main className="min-h-screen bg-dark-50 dark:bg-dark-950 text-dark-700 dark:text-dark-200 font-sans">
      {/* El bg-[radial-gradient...] es el fondo moderno que ten�a el original */}
      <div className="absolute top-0 z-[-2] h-screen w-full bg-dark-50 dark:bg-dark-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,153,255,0.25),rgba(255,255,255,0))]"></div>
      
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-center">
          Workspace Listo ??
        </h1>
      </div>
    </main>
  );
}

export default App;

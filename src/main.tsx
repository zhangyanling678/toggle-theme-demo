import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App.tsx';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?'
  );
}

createRoot(root!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

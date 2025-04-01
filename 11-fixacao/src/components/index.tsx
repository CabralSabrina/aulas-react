// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // Para versões mais recentes do React
import App from '../App';
import './index.css'; // (opcional) Se você tiver algum estilo global

// Cria a raiz e renderiza a aplicação
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
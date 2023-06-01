import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';
import Header from './components/Header/Header.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { JournalApp } from './JournalApp';
import { Provider } from 'react-redux';
import { store } from './store';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // El estado debe esar en un punto alto de la aplicación
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
          <JournalApp/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)

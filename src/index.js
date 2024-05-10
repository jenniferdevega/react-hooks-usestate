import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TutorialState from './TutorialState';
import TutorialReducer from './TutorialReducer';
import TutorialEffect from './TutorialEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TutorialState />
    <TutorialReducer />
    <TutorialEffect />
  </React.StrictMode>
);

reportWebVitals();

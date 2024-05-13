import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TutorialState from './TutorialState';
import TutorialReducer from './TutorialReducer';
import TutorialEffect from './TutorialEffect';
import TutorialRef from './TutorialRef';
import TutorialLayoutEffect from './TutorialLayoutEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TutorialState />
    <TutorialReducer />
    <TutorialEffect />
    <TutorialRef />
    <TutorialLayoutEffect />
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab,faGithub,faLinkedin, } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee,faSpinner,faLinkedin,faGithub)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



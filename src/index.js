import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from `react-router-dom`;
import './index.css';
import Main from './components/Main.js';
import fontAwesomeStyles from '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(
    <HashRouter>
      <Main />
    </HashRouter>,
    document.getElementById('react-root')
  );
  
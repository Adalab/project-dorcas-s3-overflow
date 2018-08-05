import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import Page from './components/Page.js';
import fontAwesomeStyles from '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(
    <HashRouter>
      <Page />
    </HashRouter>,
    document.getElementById('root')
  );

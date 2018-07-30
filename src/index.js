import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main.js';
import registerServiceWorker from './registerServiceWorker';
import fontAwesomeStyles from '@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
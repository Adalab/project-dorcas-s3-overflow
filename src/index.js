import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { HashRouter } from 'react-router-dom';
=======
// import { HashRouter } from `react-router-dom`;
>>>>>>> fe82145f07a8ebb0f3cfb6649eb697df82cf9737
import './index.css';
import Main from './components/Main.js';
import fontAwesomeStyles from '@fortawesome/fontawesome-free/css/all.css';

<<<<<<< HEAD
ReactDOM.render(
    <HashRouter>
      <Main />
    </HashRouter>,
    document.getElementById('root')
  );
  
=======
ReactDOM.render(<Main/>, document.getElementById('root'));
>>>>>>> fe82145f07a8ebb0f3cfb6649eb697df82cf9737

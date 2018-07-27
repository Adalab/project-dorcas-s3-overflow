import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import fontAwesomeStyles from '@fortawesome/fontawesome-free/css/all.css';

const user = {
    name: "Bucky",
    job: "Recat",
    email: "buckythecat@gmail.com",
    phone: "666666666",
    github: "buckythecat",
    linkedin: "buckythecat",
    photo: "./images/cat.png",
    skills: "HTML",
    palette: "2",
    typography: "1"
}

ReactDOM.render(<Main userInfo={user}/>, document.getElementById('root'));
registerServiceWorker();

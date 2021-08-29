import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/main.js';
import './index.css'; 

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faCircle, faTimes);

ReactDOM.render(
    <Main/> ,
    document.getElementById('root') 
);

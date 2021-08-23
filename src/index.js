import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CourseRegister from './CourseRegister'
import OnlineProfile from './OnlineProfile';
import Join from './Join'
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import SchoolStatus from './SchoolStatus';
import ImageMap from './ImageMap';
import Anchor from './Anchor'
import DateMonth from './DateMonth'
import NumberRange from './NumberRange'
import Color from './Color'

ReactDOM.render(
  <React.StrictMode>
    <Color />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

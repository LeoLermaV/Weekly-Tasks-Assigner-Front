import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CreateWeeklyAssignerComponent from './Components/CreateWeeklyAssignerComponent/CreateWeeklyAssignerComponent';


ReactDOM.render(
  <React.StrictMode>
   <CreateWeeklyAssignerComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

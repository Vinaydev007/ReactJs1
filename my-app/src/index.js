import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Sample from './ui-content/sample';
import Accordian from './ui-content/Accordian';
import Todo from '../src/ui-content/todo'
import List from './ui-content/home/list';
import Main from './ui-content/home/main'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Sample/> */}
    {/* <Accordian/> */}
    {/* <Todo/> */}
    {/* <List/> */}
    <Main/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

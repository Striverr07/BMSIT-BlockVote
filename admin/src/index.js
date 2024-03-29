import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from 'react-router-dom';

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </Provider>,
  document.getElementById('root')
);


// reportWebVitals();

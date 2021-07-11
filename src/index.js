import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import Loading from './components/UI/Loading/Loading';
import reportWebVitals from './reportWebVitals';
import configureStore from './stores/store';
import { history } from './services/history';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Loading />
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

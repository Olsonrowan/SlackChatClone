import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import reducers from './Redux/reducers';

const store = createStore(reducers, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION())

ReactDOM.render(
    <Provider store={store}>
      
      <App/>
    </Provider>,
  document.getElementById('root')
);


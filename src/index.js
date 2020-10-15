import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import reducers from './Redux/reducers';
import 'semantic-ui-css/semantic.min.css'


const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
      
      <App/>
    </Provider>,
  document.getElementById('root')
);


import React from 'react';
import ReactDom from'react-dom';
/* import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'; */
import App from './components/App';

/* const store = createStore(
  reducers
) */

ReactDom.render(
  <App />,
  document.getElementById('app')
);

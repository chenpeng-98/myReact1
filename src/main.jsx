import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';

export default store;

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
});
// console.log(store.getState().changeSum);

render(
  <Provider store={store}>
    <App num={123456789} />
  </Provider>,
  document.getElementById('app')
);

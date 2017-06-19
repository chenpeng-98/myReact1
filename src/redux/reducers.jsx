import { combineReducers } from 'redux';

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text]);
    default:
      return state;
  }
}

function changeSum(state = [], action) {
  if (action.type === 'numChanged') {
    return Object.assign({}, state, {
      sum: action.sum
    });
  }
  return state;
}
const reducers = combineReducers({
  todos,
  changeSum
});

export default reducers;

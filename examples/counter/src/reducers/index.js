console.log('reducers/index.js');

export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('reducers INCREMENT');
      return state + 1
    case 'DECREMENT':
      console.log('reducers DECREMENT');
      return state - 1
    default:
      console.log('reducers default');
      return state
  }
}

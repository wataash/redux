console.log('reducers/index.js');

// refered as counterrr

// type: Reducer
export default (state = 0, action) => {
  // TODO: console.dir
  console.table('reducers/index.js export default:');
  console.table(action);
  switch (action.type) {
    case 'INCREMENT':
      console.log('case INCREMENT');
      return state + 1
    case 'DECREMENT':
      console.log('case DECREMENT');
      return state - 1
    default:
      console.log('case default');
      return state
  }
}

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counterrr from './reducers'

console.log('index.js');

const store = createStore(counterrr)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Counter
    // Warning: Failed prop type: The prop `dummy` is marked as required in `Counter`, but its value is `undefined`.
    // in Counter (at src/index.js:13)
    dummy={console.log('index.js render()')}
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)

render()
store.subscribe(render)

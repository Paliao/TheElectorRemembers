import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import registerServiceWorker from './registerServiceWorker'
import App from './App'
import reducers from './reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, thunk)(createStore)(reducers, devTools)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'))
  registerServiceWorker()

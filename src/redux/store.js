import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import reducer from './reducer'
import rootSaga from '../sagas/index'

const sagaMiddleware = createSagaMiddleware()
export const history = createBrowserHistory()

/* eslint-disable no-underscore-dangle */
const store = createStore(
  connectRouter(history)(reducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    )
  )
)

sagaMiddleware.run(rootSaga)

export default store

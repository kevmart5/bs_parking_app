import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createHistory from 'history/createBrowserHistory'
import reducer from './reducers/'

const history = createHistory({
  basename: '',
  forceRefresh: false
})


const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      routerMiddleware(history),
      logger
    )
  )
)

console.log('state:', store.getState())

export default store
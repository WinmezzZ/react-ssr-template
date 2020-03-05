import { combineReducers, createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { globalReducer } from './global/reducer'

const rootReducers = combineReducers({
  global: globalReducer
})

export const configureStore = (initialState) => {
  const store = createStore(
    rootReducers, 
    initialState, 
    applyMiddleware(reduxThunk)
  )

  return store
}
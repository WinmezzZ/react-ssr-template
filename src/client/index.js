import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { loadableReady } from '@loadable/component'
import App from '../app'
import { configureStore } from '../app/store'
import LoadDataLoader from '../app/components/LoadDataLoader'

const store = configureStore(window.__INITIAL_STATE__)

loadableReady(() => {
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <LoadDataLoader store={store}>
          <App />
        </LoadDataLoader>
      </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
  )
})
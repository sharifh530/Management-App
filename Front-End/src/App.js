import React from 'react'
import routes from './routes/routes'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import ApplicationRouter from './routes/ApplicationRouter'
const App = () => {
  console.log(routes)

  return (
    <Provider store={store}>
      <ApplicationRouter />
    </Provider>
  )
}

export default App

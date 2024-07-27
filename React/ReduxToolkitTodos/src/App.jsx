import './App.css'
import AddTodo from './components/AddTodo'
import TodosList from './components/TodosList'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {

  return (
    <Provider store={store}>
      <h1>Your tasks</h1>
      <AddTodo/>
      <TodosList/>
    </Provider>
  )
}

export default App

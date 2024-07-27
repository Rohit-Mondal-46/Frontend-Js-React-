import React, {useContext} from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './contexts/UserContextProvider'
import UserContext from './contexts/UserContext'

function App() {
  // const {user} = useContext(UserContext);
  return (
    <UserContextProvider> 
      {/* {(user=="")? <Login /> : <Profile />} */}
      <Login /> 
      <Profile />
    </UserContextProvider>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Details from './pages/Details/Details'
import Favorite from './pages/Fav/Favorite'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/favorite'
          element={<Favorite />}
        />
        <Route
          path='/details'
          element={<Details />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

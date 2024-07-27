import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './pages/Layout'
import About from './pages/About'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Github from './pages/Github'
import Dynamic from './pages/Dynamic'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='blogs' element={<Blogs/>} />
      <Route path='github' element={<Github/>} />
      <Route path=':user46' element={<Dynamic/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

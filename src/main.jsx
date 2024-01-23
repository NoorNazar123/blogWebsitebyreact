
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import BlogContent from './components/BlogContent/blogContent'
import About from './components/About/About'
import Lecture from './components/Lecture/Lecture'
import Contact from './components/Contact/Contact'




const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home />} />
      <Route path='/blog/:id' element={<BlogContent />} />
      <Route path='/lecture' element={<Lecture />} />
      <Route path='/about' element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


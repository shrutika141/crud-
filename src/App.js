import React from 'react'

import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import AddPost from './Components/AddPost/AddPost'
import UpdatePost from './Components/UpdatePost/UpdatePost'

import { Route, Routes } from 'react-router'


const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Addpost" element={<AddPost />} />
            <Route path="/updatepost/:id" element={<UpdatePost />} />
        </Routes>
    </div>
  )
}

export default App

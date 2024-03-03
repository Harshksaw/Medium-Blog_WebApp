import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import  Blog  from './pages/Blog'
import  Signin  from './pages/Signin'
import  Signup from './pages/Signup'
import Blogs from './pages/Blogs.'
import Navbar from './Components/Navbar'
import AboutUs from './Components/About'

function App() {


  return (
    <>
<BrowserRouter>
    <Navbar/>
        <Routes>

          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>

    
    </>

  )
}

export default App

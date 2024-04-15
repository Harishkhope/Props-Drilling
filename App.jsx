import React from 'react'
import Home from './Components/Home'
import Services from './Components/Services'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'
import Careers from './Components/Careers'
import Events from './Components/Events'
import Register from './Components/Register'
import Comingsoon from './Components/Comingsoon'
import BlogPage from './Components/BlogPage'
import BlogPostPage from './Components/BlogPostPage'
import blogs from './Components/BlogData'
import Privacypolicy from './Components/Privacypolicy'

import {
  Routes,
  Route
} from "react-router-dom";



const App = () => {
  return (
    <div>
        <div>
          <Routes>
            < Route exact path="/" element={<Home />} />
            < Route exact path="/about" element={<AboutUs />} />
            < Route exact path="/careers" element={<Careers />} />
            < Route exact path="/contact" element={<Contact />} />
            < Route exact path="/events" element={<Events />} />
            < Route exact path="/services" element={<Services />} />
            < Route exact path="/register" element={<Register />} />
            < Route exact path="/soon" element={<Comingsoon />} />
            < Route exact path="/pnc" element={<Privacypolicy />} />
            < Route exact path="/blog" element={<BlogPage blogs={blogs}/>} />
            < Route path="/blog/:id" element={<BlogPostPage blogs={blogs} />} />
          </Routes>
        </div>
    </div>
  )
}

export default App
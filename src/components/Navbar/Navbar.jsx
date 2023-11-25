import React from 'react'
import "./Navbar.css"
import Sidebar from '../Sidebar/Sidebar'

export default function Navbar() {
  return (
    <div className='main-cont'>
      <Sidebar />
       <div className='sidebar'>
            <span>My Portfolio</span>
            <div className='links'>
                <a href="#"><img src="facebook.png" alt=""  className='img-nav'/></a>
                <a href="#"><img src="instagram.png" alt="" className='img-nav'/></a>
                <a href="#"><img src="youtube.png" alt="" className='img-nav'/></a>
            </div>
       </div>
    </div>
  )
}

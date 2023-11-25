import React, { useState } from 'react'
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'
import './Sidebar.css'
import {motion} from 'framer-motion'
export default function Sidebar() {
  const [open , setOpen] = useState(false)
  const variants = {
    open: {
      clipPath: 'circle(1300px at 50px 50px',
      transition: {
        type: 'spring',
        stiffness: 40,
      }
    },
    closed: {
      clipPath: 'circle(20px at 40px 50px)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  }

  console.log(open)
  return (
    <motion.div className='hamburger-main' animate = {open ? 'open' : 'closed'}>
      <motion.div className="bg" variants={variants}>
        <Links open={open}/>
      </motion.div>
      <ToggleButton setOpen = {setOpen}/>
    </motion.div>
  )
}

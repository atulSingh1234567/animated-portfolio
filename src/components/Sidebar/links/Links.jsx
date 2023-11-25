import React from 'react'
import {motion} from 'framer-motion'
import '../Sidebar.css'

export default function Links({open}) {

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0
    },
    closed: {
      opacity: 0,
      y: 50
    }

  }
  const links = ["Homepage" , "Services" , "Portfolio" , "Contact"]
  return (
    
     <motion.ul className='link-box' variants={variants} animate={open ? 'open' : 'closed'}>
        {
        links.map(function(link){
          return  <motion.li key={link} className='link-li' variants = {itemVariants}> <a href={`#${link}`} className='link-sidebar'>{link}</a> </motion.li>
        })
       }
      </motion.ul>
   
  )
}

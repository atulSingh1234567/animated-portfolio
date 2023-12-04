import React, { useRef } from 'react'
import './Services.css'
import {AnimatePresence, motion, useInView, useScroll, useTransform} from 'framer-motion'

export default function Services() {

    const variants = {
        initial: {
            x: -500,
            y: 100,
            opacity: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        },

        hover: {
           scale: 1.03,
           transition: {
             type: 'spring',
             stiffness: 1000,
           }
        },

        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                 duration: 1,
                 staggerChildren: 0.1
            }
        }
    }

    const ref = useRef()
    const inView = useInView(ref , {margin: '-100px'})

  return (
    <AnimatePresence>
    <motion.div  animate = {inView && 'animate' || 'initial'} ref={ref} initial='initial' variants={variants} className='service-main-box'>

        <motion.div className='side-text' variants={variants}>
            <p className='side-text-para'>Elevating brands with innovative and seamless <br /> digital experiences.</p>
            <hr />
        </motion.div>
        <motion.div className="titlebox" variants={variants}>
           <motion.div className="upperBox-tittle">
            <img src="people.webp" alt="" className='service-tittle-img'/>
            <h1 className='tittlebox-heading'><b>Unique</b> Ideas </h1>
            </motion.div>
           <motion.div className="upperBox-tittle">
            <h1 className='tittlebox-heading'><b className='yellow-bold-text'>For Your</b> Business </h1>
            </motion.div>
        </motion.div>
        <motion.div className="cardbox" variants={variants}>
            <motion.div className="service-card" whileHover="hover" variants={variants}>
                <h2>Web Design</h2>
                <p>Crafting visually stunning and user-friendly website designs that captivate and engage audiences.</p>
            </motion.div>
            <motion.div className="service-card" whileHover="hover" variants={variants}>
                <h2>Responsive Development</h2>
                <p>Ensuring seamless experiences across all devices with responsive and adaptive web development</p>
            </motion.div>
            <motion.div className="service-card" whileHover="hover" variants={variants}>
                <h2>Animation and Motion</h2>
                <p>Adding life to websites through subtle animations and engaging motion graphics.</p>
            </motion.div>
            <motion.div className="service-card" whileHover= "hover" variants={variants}>
                <h2>Interactive UI/UX</h2>
                <p>Building dynamic and intuitive user interfaces for an enhanced and enjoyable user experience.</p>
            </motion.div>
        </motion.div>
      
    </motion.div>
    </AnimatePresence>
  )
}

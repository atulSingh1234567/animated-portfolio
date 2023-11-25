import { useState } from 'react'
import './Hero.css'
import {motion} from 'framer-motion'

export default function Hero() {
   
    const slidingtextvariants = {
        initial: {
            x: -500,
            opacity: 0
        },

        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.2,
            }
        },

        scrollbutton: {
           opacity: 0,
           y: 10,
           transition: {
            duration: 2,
            repeat: Infinity
           }

        }
    }

    const variants = {
        initial: {
            x: 0,
        },

        animate: {
            x: "-1000%",
            opacity: 1,
            transition: {
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 30
            }
        },

    }
  return (
    <motion.div className='hero-main-box' variants={slidingtextvariants}>
        <motion.div className="wrapper" animate = 'animate' initial = 'initial'  variants={slidingtextvariants}>
            <motion.h2 className='my-name'  variants={slidingtextvariants}>Atul Singh</motion.h2>
            <motion.h1 className='my-roll'  variants={slidingtextvariants}>Web developer</motion.h1>
            <motion.div className='buttons'  variants={slidingtextvariants}>
                <motion.button>See the latest work</motion.button>
                <motion.button>Contact me</motion.button>
            </motion.div>
            <motion.div className="slid-down" variants={slidingtextvariants} animate='scrollbutton'>
                <img src="scroll.png" alt=""  className='img-slid-down'/>
            </motion.div>
        </motion.div>

        <motion.div className="slidingText" animate='animate' initial='initial' variants={variants}>
            <h1 className='sliding-heading'>FrontEnd Data-structures Bootstrap Tailwind Framer-motion version-control</h1>
        </motion.div>
      
    </motion.div>
  )
}

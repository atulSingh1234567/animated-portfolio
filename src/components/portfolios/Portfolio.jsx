import React, {useRef} from 'react'
import {motion, useInView} from 'framer-motion'

export default function Portfolio() {
    const variants = {
        initial: {
            height: '40px', 
            opacity: 1,
        },
        hover: {
            height: '180px',
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        }
    }

    const newVariants = {
        initial: {
            x: -500,
            y: 100,
            opacity: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
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
        <motion.div ref={ref} variants={newVariants} initial='initial' animate = {inView && 'animate' || 'initial'} className='service-main-box' style={{justifyContent: 'normal', gap: '23px', paddingTop: '40px'}}>
            <motion.div variants={newVariants} className='side-text'>
                <p className='side-text-para'>Projects that will make you fall in love</p>
                <hr />
            </motion.div>
            <motion.div variants={newVariants} className="titlebox" style={{marginBottom: '50px'}}>
                <motion.div variants={newVariants} className="upperBox-tittle">
                    <img src="project-photo.jpg" alt="" className='service-tittle-img' />
                    <h1 className='tittlebox-heading'><b>Dive </b>into the ocean  </h1>
                </motion.div>
            </motion.div>
            <motion.div variants={newVariants} className='card-box' style={{display: 'flex', width: '100%', gap: '10px', position: 'relative', flexDirection: 'column', alignItems: 'center'}}>
                <motion.a variants={variants} whileHover='hover' initial='initial'  className='service-card' style={{display: 'flex',flexDirection: 'row', position: 'relative', width: '50%',padding: '0px', overflow: 'hidden'}} href='https://ecommerece-frontend.vercel.app/' target='_blank'>
                   <img src="ecommerce.jpg" alt="" className='setting' />
                   <motion.div variants={variants}  style={{display: 'flex', flexDirection: 'column', gap: '4px', padding: '4px'}}>
                    <motion.h1 >Ecommerce</motion.h1>
                    <motion.p >Welcome to our eCommerce website! Enjoy seamless shopping with features like Add to Cart, an intuitive Order Page, advanced Filters, and secure Customer Login.</motion.p>
                   </motion.div>
                </motion.a>
                <motion.a variants={variants} whileHover='hover' initial='initial'  className='service-card' style={{display: 'flex',flexDirection: 'row', position: 'relative', width: '50%',padding: '0px', overflow: 'hidden'}} href='https://github.com/atulSingh1234567/College-Management' target='_blank'>
                   <img src="placement.jpg" alt="" className='setting' />
                   <motion.div variants={variants}  style={{display: 'flex', flexDirection: 'column', gap: '4px', padding: '4px'}}>
                    <motion.h1 >College Placement Record</motion.h1>
                    <motion.p >Welcome to our College Placement Portal! Stay updated with the latest job opportunities, post job openings, and celebrate newly placed students. With a secure admin login, our platform ensures a smooth and efficient placement process.</motion.p>
                   </motion.div>
                </motion.a>
                <motion.a variants={variants} whileHover='hover' initial='initial'  className='service-card' style={{display: 'flex',flexDirection: 'row', position: 'relative', width: '50%',padding: '0px', overflow: 'hidden'}} href='https://github.com/atulSingh1234567/piCook' target='_blank'>
                   <img src="picook.jpg" alt="" className='setting' />
                   <motion.div variants={variants}  style={{display: 'flex', flexDirection: 'column', gap: '4px', padding: '4px'}}>
                    <motion.h1 >Post Your Imagination</motion.h1>
                    <motion.p >Being developed by- Atul Singh, a platform where you can upload, download and watch images from the world.</motion.p>
                   </motion.div>
                </motion.a>
                <motion.a variants={variants} whileHover='hover' initial='initial'  className='service-card' style={{display: 'flex',flexDirection: 'row', position: 'relative', width: '50%',padding: '0px', overflow: 'hidden'}} href='https://to-do-react-phi-five.vercel.app/' target='_blank'>
                   <img src="todo.jpg" alt="" className='setting' />
                   <motion.div variants={variants}  style={{display: 'flex', flexDirection: 'column', gap: '4px', padding: '4px'}}>
                    <motion.h1 >Track your routine</motion.h1>
                    <motion.p >Note down a reminder of your tasks with our ToDo apk. Edit, delete and update your tasks according to your needs.</motion.p>
                   </motion.div>
                </motion.a>

                <a href='https://github.com/atulSingh1234567' style={{}} target='_blank'>
                   and many more...
                </a>
            </motion.div>
        </motion.div>
    )
}

import React, { useRef } from 'react'
import './Parallax.css'
import {motion, useScroll, useTransform} from 'framer-motion'

export default function Parallax(props) {
    const ref  = useRef(null)

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start" , "end start"]
    })

    const yText = useTransform(scrollYProgress , [0,1] , ["0%" , "500%"])
    const yBG = useTransform(scrollYProgress , [0,1] , ["0%" , "100%"])
    // const sunEffect = useTransform(scrollYProgress , [0,1] , ["#f00abc" , "#00f"])

  return (
    <div ref={ref} className='parallax-main-box' style={{background: props.type==='services'? 'linear-gradient(180deg, ##0c0c1d , #111132)' : 'linear-gradient(180deg , #111132 , #0c0c1d)'}}>
      <motion.h1 className='parallax-heading' style={{y: yText}}>{props.type==='services'? 'What we do?' : 'What we did?'}</motion.h1>
      <div className='mountains'></div>
      <motion.div className="planets" style={{y: yBG , backgroundImage: `url(${props.type === 'services' ? 'planets.png' : 'sun.png'})`}}></motion.div>
      <motion.div className="stars" style={{x: yBG}}></motion.div>
    </div>
  )
}

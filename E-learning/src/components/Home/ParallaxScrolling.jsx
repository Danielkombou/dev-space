import { motion, easeInOut } from 'framer-motion'
import React from 'react'

function ParallaxScrolling({ children}) {
    const parallaxVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        scroll: {y :[0, -1000], transition: {duration: 2}, ease: easeInOut, repeat: Infinity}
    }

  return (
    <motion.div
    initial="hidden"
    animate="scroll"
    whileInView="visible"
    variants={parallaxVariants}
    classname="relative bg-gradient-to-r from-blue-200 to-blue-500"
    >
        {children}
    </motion.div>
  )
}

export default ParallaxScrolling
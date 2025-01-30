import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import { motion } from 'motion/react'

function SlideAnimate({ children }) {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.2
    })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        } else {
            controls.start('hidden')
        }
    }, [controls, inView])

    const variants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } }
    }

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={variants}
    >
        {children}
    </motion.div>
  )
}

export default SlideAnimate
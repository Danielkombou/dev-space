import React, { useEffect } from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { motion } from 'motion/react'

function SlideAnimate({ children, direction = "left" }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    vissible: { opacity: 1, transition: { staggerChildren: 0.2} },
  }

  const slideVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "top" ? -100 : direction === "bottom" ? 100 : 0,
    //   transition: { delay: 1 },
    },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={slideVariants}
    >
        {children}
      {/* {React.Children.map(children, (child) => {
        return (
          <motion.div variants={slideVariants}>{child}</motion.div>
        );
      })
      } */}
    </motion.div>
  );
}

export default SlideAnimate;

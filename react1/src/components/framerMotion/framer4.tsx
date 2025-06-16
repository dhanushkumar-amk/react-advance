import { useState } from 'react';
import './framer1.css'
import { motion } from 'framer-motion';

const variants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.5 },
}

const FramerMotionBasic4 = () => {
    const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
    {/* <motion.div className='box2'
     variants={{
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.5 },
     }}
        initial="hidden"
        animate= {isVisible ? "visible" : "hidden"}
        exit="exit"
        transition={ {duration: 4 } }
        onClick={() => setIsVisible(!isVisible)}
     /> */}

     <motion.div className='box2'
     variants={variants}
        initial="hidden"
        animate= {isVisible ? "visible" : "hidden"}
        exit="exit"
        transition={ {duration: 4 } }
        onClick={() => setIsVisible(!isVisible)}
     />

    </div>
  )
}

export default FramerMotionBasic4

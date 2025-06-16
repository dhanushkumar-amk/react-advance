import { motion } from 'framer-motion'
import './framer1.css'

/* [start, end ]  => keyframes */
const FramerMotionBasic3 = () => {
  return (
    <div>
        {/* <motion.div className='box2' animate={{scale : [1,2]}} transition={{duration: 4}} /> */}
        {/* <motion.div className='box2' animate={{scale : [1,2,2,3,3,2,2,1] }} transition={{duration: 4}} /> */}
        {/* <motion.div className='box' animate={{ rotate : [0,270,270, 0] }} transition={{duration: 5}} /> */}
        <motion.div className='box' animate={{ x: [2,300,300,2], rotate : [0,270,270, 0] }} transition={{duration: 5}} />
    </div>
  )
}

export default FramerMotionBasic3

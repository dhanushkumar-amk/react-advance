import { motion } from 'framer-motion'
import './framer1.css'

const parentVarients = {
    hidden : {opacity : 0},
    visible : {
        opacity : 1,
        transition : {
            staggerChildren : 0.8,
        }
    }
}

const childVarients = {
    hidden : {opacity : 0, y : 20},
    visible : {opacity : 1, y : 0}
}

const FramerMotionBasic5 = () => {
  return (
    <motion.div variants={parentVarients} initial="hidden" animate="visible">

       {[...Array(5)].map((_, index) => (
       <motion.div  variants={childVarients} className='box3 ' key={index} />
       ))}

    </motion.div>
  )
}

export default FramerMotionBasic5

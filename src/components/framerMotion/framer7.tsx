// import { input } from 'framer-motion/client';
import './framer1.css'
 import { useMotionValue, useTransform } from "framer-motion";
import { motion } from 'framer-motion';

const FramerMotionBasic7 = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // const inputRangeStart = [0, 100]
    // const inputRangeEnd = [0, 100]
    // const outputRangeStart = [0, 100]
    // const outputRangeEnd = [0, 100]

  const bgColor  = useTransform(x, [-100, 100], ["#ff0000", "#00ff00"])

    return (
    <motion.div drag dragConstraints={{left : -200, right: 200, top: -200, bottom : 200}} style={{x, y, bgColor }} className='w-32 h-32 flex items-center justify-center rounded-lg shadow-lg cursor-pointer'>
        <span className='text-white' >Drag me</span>
    </motion.div>
  )
}

export default FramerMotionBasic7

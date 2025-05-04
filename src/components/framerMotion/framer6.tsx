import './framer1.css'
import { motion, useMotionValue, useMotionValueEvent } from 'framer-motion';

const FramerMotionBasic6 = () => {
    const x = useMotionValue(100)

    useMotionValueEvent(x, 'animationStart', () => {
        console.log('animationStart on x');
    })

    useMotionValueEvent(x, 'change', (latest) => {
        console.log('x changed to ', latest);
    })

    return (
    <motion.div className='box' drag dragConstraints={{left : 0, right : 200}} style={{ x }} />
  )
}

export default FramerMotionBasic6

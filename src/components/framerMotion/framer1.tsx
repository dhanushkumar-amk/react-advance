import "./framer1.css"
import {motion} from 'framer-motion'

const BasicFramerMotion1 = () => {
  return (
    <div>
        {/* <motion.div className="box" animate = {{ x : 100  }}/> */}
        {/* <motion.div className="box" animate = {{ y : 100  }}/> */}
        {/* <motion.div className="box" animate = {{ translateX : "200px" }} /> */}
        {/* <motion.div className="box" animate = {{ translateY : "200px" }} /> */}
        {/* <motion.div className="box"  animate={{ rotate : 60 }}  /> */}
        {/* <motion.div className="box"  animate={{ scale : 2 }}  />  multiply its width and heigth */}
        {/* <motion.div className="box"  animate={{ skewY : 20 }}  /> */}
        <motion.div className="box"  animate={{ skewY : 20 }}  />
    </div>
  )
}

export default BasicFramerMotion1

import React from 'react';
import { motion } from 'framer-motion';
import "./services.scss";


const Services = () => {
  return (
    <div className='services'>
      <div className="wrapper">
        <div className="textContainer">
          <motion.h1 whileHover={{scale:1.3}}>Overview</motion.h1>
          <motion.p initial={{opacity:0}} whileInView={{opacity:1, transition:{delay:1,duration:1}}}>I am Suraj Sehgal, a prefinal year undergraduate student of the Department of Electrical Engineering at the Indian Institute of Technology (IIT), Kharagpur. I'm a versatile programmer with a strong foundation in  competitive programming, complemented by full stack development proficiency in technologies such as ReactJs, NodeJs and Framer-Motion. I excel in algorithmic problem-solving and data structures, having honed my abilities through various programming contests and competitions.</motion.p>
        </div>
        <div className="imgContainer"  >
          <div className="container">
            <motion.img whileHover={{y:[0,-10,10,-10,10,0],x:[0,10,-10,10,-10,0], transition:{duration:1}}} src="/competitive.png" alt="" />
            <motion.h3 whileHover={{x:10, y:10}}>Competitive Programmer</motion.h3>
          </div>
          <div className="container">
            <motion.img whileHover={{y:-20}} src="/web.png" alt="" />
            <motion.h3 whileHover={{x:10, y:10}}>Web Developer</motion.h3>
          </div>
          <div className="container">
            <motion.img whileHover={{y:[0,-10,10,-10,10,0],x:[0,-10,10,-10,10,0], transition:{duration:1}}} src="full.png" alt="" />
            <motion.h3 whileHover={{x:10, y:10}}>Full-Stack Developer</motion.h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

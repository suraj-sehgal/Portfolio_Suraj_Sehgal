import React from 'react';
import "./hero.scss";
import {motion} from "framer-motion"

const textVariants = {
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity,
    }
  }
}

const sliderVariants = {
  initial:{
    x:0,
  },
  animate:{
    x:"-300%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration:15,
    },
  },
  
}


const Hero = () => {

  return (
    <div className='hero'>
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial"  whileInView="animate" >
          <motion.h2 variants={textVariants} whileHover={{color:"grey"}}>Hi, I'm &nbsp;<span> SURAJ</span></motion.h2>
          <motion.h1 variants={textVariants} whileHover={{color:"red"}}>Competitive Programmer  Web Developer</motion.h1> 
          <motion.div variants={textVariants} className="buttons" >
            <motion.button variants={textVariants} ><a href='#Portfolio'>See the Latest Works</a></motion.button>
            <motion.button variants={textVariants}><a href='https://drive.google.com/file/d/1yT1dfOf_8DGHsUNZjpRyQxoqjoB1gLmC/view?usp=drive_link'>Download CV</a></motion.button>
          </motion.div>  
          <motion.a href='#Contact'><img variants={textVariants} src="/scroll.png" alt="" animate="scrollButton" /></motion.a>
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Electrical Engineering , IIT Kharagpur
      </motion.div>
      <div className="imageContainer">
        <img src="/suraj.png" alt="" />
      </div> 
    </div>
  )
}

export default Hero

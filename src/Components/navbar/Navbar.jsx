import React from 'react'
import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1,scale:1}} transition={{delay:2,duration:2,repeat:Infinity}}>Suraj Sehgal | IIT KGP</motion.span>
        <div className="social" >
          <motion.a href="https://www.linkedin.com/in/suraj-sehgal-79ba69257/"  initial={{y:-6}} animate={{y:6}} transition={{duration:1,repeat:Infinity}}><img src="/Linkedin.png" alt="" /></motion.a>
          <motion.a href="https://github.com/suraj-sehgal" initial={{y:-6}} animate={{y:6}} transition={{delay:0.3,duration:1,repeat:Infinity}}><img src="/github.png" alt="" /></motion.a>
          <motion.a href="https://www.facebook.com/profile.php?id=100011057102990"initial={{y:-6}} animate={{y:6}} transition={{delay:0.6,duration:1,repeat:Infinity}}><img src="/facebook.png" alt="" /></motion.a>
          <motion.a href="https://instagram.com/surajsehgal02?igshid=OGQ5ZDc2ODk2ZA=="initial={{y:-6}} animate={{y:6}} transition={{delay:0.9,duration:1,repeat:Infinity}}><img src="/instagram.png" alt="" /></motion.a>
        </div>
      </div>
    </div>
  )
}

export default Navbar

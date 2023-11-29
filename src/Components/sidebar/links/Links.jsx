import React from 'react'
import {motion} from "framer-motion"

const variants = {
  open:{
    transition:{
      stagerChildren:0.1,
    },
  },
  colsed:{
    transition:{
      stagerChildren:0.05,
      stagerDirection:-1,
    },
  },
};

const itemVariants = {
  open:{
    y:0,
    opacity:1,
  },
  colsed:{
    y:50,
    opacity:0,
  },
};

const Links = () => {

    const items=[
        "Homepage",
        "Services",
        "Portfolio",
        "Contact",
        "About",
    ]

  return (
    <motion.div className='links' variants={variants}>
        {items.map(item =>(
            <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale: 1.3}} whileTap={{scale:0.90}}>{item}</motion.a>
        ))}
      
    </motion.div>
  )
}

export default Links

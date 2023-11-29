import React, { useRef } from 'react'
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import "./portfolio.scss"

const items=[
    {
        id:1,
        title:"QuickChat",
        img:"/chat.png",
        desc:"Developed a robust web application using ReactJS for the front end, NodeJS with ExpressJS for the back end, and MongoDB for data storage. Implemented user-friendly features like one-to-one and group chat, along with secure login and signup functionalities. Ensured user data security by employing bcrypt for password hashing and salt generation. Strengthened application security with authorization tokens, verifying logged-in users. Employed Bootstrap and CSS for a visually appealing and responsive design. The result is a seamless, secure, and engaging platform that facilitates both individual and group communication.",
    },
    {
        id:2,
        title:"MyNotebook",
        img:"/note.jpg",
        desc:"The project utilizes a tech stack consisting of ReactJS for the front end, NodeJS and ExpressJS for the back end, and MongoDB for the database. Bootstrap and CSS are employed for styling. The front-end interface is designed to be user-friendly, featuring functionalities for creating, updating, reading, and deleting data. React's Props and Context API are leveraged to facilitate the seamless passing of parameters and functions between components, enhancing the overall efficiency and maintainability of the application.",
    },
    {
        id:3,
        title:"Snake Game",
        img:"/snake.png",
        desc:"The project is developed using C++ and incorporates object-oriented principles such as inheritance and encapsulation. The application utilizes the rand() function to generate random coordinates, ensuring unpredictability in the placement of fruits. Dynamic snake length is implemented, adding a layer of complexity to the game. Additionally, the challenge is enhanced by restricting the boundaries of the game grid, requiring strategic navigation by the player.",
    },
    
]

const Single = ({item})=>{
    const ref = useRef();
    const {scrollYProgress}= useScroll({target:ref,offset:["start start","end start"]});
    const y= useTransform(scrollYProgress, [0,1],[0,300]);

    return(<section >
            <div className="container" ref={ref}>
                <div className="wrapper" >
                    <div className="imageContainer" >
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 
const Portfolio = () => {
    const ref = useRef();
    const {scrollYProgress}= useScroll({target:ref,offset:["end end","start start"]});
    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping:30,
    })
  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>  
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>    
        {items.map(item =>(<Single item={item} key={item.id}/> ))}
      
    </div>
  )
}

export default Portfolio

import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';


const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
const Header = () => {
  return (
   <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0,1]}}
      transition={{ duration: 1.1}}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}> 
            <p className="p-text"> Hellow, I am </p>
            <h1 className="head-text"> Mahesh Abeykoon </h1>
          </div>
        </div>
          <div className="tag-cmp app__flex">
            <p className='p-text'>Developer</p>
            <p className='t-text'>Undergraduate</p>
          </div>
        </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1]}}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.mypic} alt="profile_bg" />
      <motion.img
        whileInView={{ opacity: [0,1 ]}}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>
          
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.java, images.react, images.spring_boot, images.android, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img scr={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div> 
   </div>
  )
}

export default Header
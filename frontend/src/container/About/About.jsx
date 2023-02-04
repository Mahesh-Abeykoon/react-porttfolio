import React from 'react'
import './About.scss';
import {motion} from 'framer-motion';
import { images } from '../../constants';

const abouts = [
  { title: 'Web Development', description: 'I am a good web developer', imgUrl: images.about1 },
  { title: 'Mobile Developement', description: 'I really intersted in Mobile Development', imgUrl: images.about2 },
  { title: 'Backend Development', description: 'I more like to do backend development', imgUrl: images.about3 },
  { title: 'MERN Stack', description: 'MERN Stack development is facinating for me  ', imgUrl: images.about4 }


];

const About = () => {
  return (
    <>
    <h2 className='head-text'>
        I really like to work with
        <br/>
      <span>  Mobile Application Development</span>
    </h2>
    
    <div className="app__profiles">
      {abouts.map((about, index) => (
        <motion.dev
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween'}}
          className="app__profile-item"
          key={about.title + index}
        >
          <img src={about.imgUrl} alt={about.title} />
          <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop: 10}}>{about.description}</p>

        </motion.dev>
      ))} 

    </div>
    </>
  )
}

export default About
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'; 

const About = () => {
  return (
    <>
      <motion.div variance={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variance={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
      >
        Software Engineering Student focused on building modern web and mobile applications.
Experienced with JavaScript, React, React Native, Java, and Kotlin, with hands-on full-stack experience using Firebase, PHP, SQL, and REST APIs.
A quick learner and highly motivated individual, continuously improving skills and currently exploring Three.js and Tailwind CSS as part of modern frontend development.
      </motion.p>

      <div>
        
      </div>
    </>
  );
};

export default About;

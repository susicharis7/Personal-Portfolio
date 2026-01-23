import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return(
    <motion.div variants={fadeIn("up","spring", index * 0.5, 0.75)}>
      <Tilt options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute top-3 right-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-11 h-11 rounded-full flex justify-center items-center cursor-pointer"
            >

            <img 
              src={github}
              alt="github"
              className="w-6 h-6 object-contain"
            />
            

            </div>
          </div>

        </div>


        <div className="mt-5 pt-1">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <hr className="border-t border-white/30 p-1" />
          <p className="mt-3 text-secondary text-[14px] leading-relaxed">
            {description}
          </p>
        </div>


        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>


      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return(
    <div className="w-full pb-24">

      <motion.div
        variants={textVariant()}
        className="w-full flex flex-col items-center text-center"
      >
        <p className={styles.sectionSubText}>Things I've Worked On</p>
        <h2 className={`${styles.sectionHeadText} text-[32px] sm:text-[36px] md:text-[40px] lg:text-[54px]`}>
          Personal Projects.
        </h2>
      </motion.div>

      <div className="w-full flex justify-center pb-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 mb-10 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
        >
          The following projects highlight my skills and experience through real-world applications. 
          Each project includes a short description and a link to the source code, demonstrating my ability to solve problems, 
          work with various technologies, and deliver functional solutions.
        </motion.p>
      </div>

      <div className="mt-12 w-full flex flex-wrap justify-center gap-7 mb-16">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index}
            {...project}
          />
        ))}
      </div>

    </div>
  );
}

export default SectionWrapper(Works, "");

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText} text-white`}
            style={{
              textShadow:
                '0 1px 0 rgba(255,255,255,0.08), 0 4px 10px rgba(0,0,0,0.45), 0 18px 40px rgba(145,94,255,0.35)',
            }}
          >
            Hi, I'm <span className="text-[#915eff]">Haris</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            style={{
              textShadow:
                '0 1px 0 rgba(255,255,255,0.06), 0 3px 8px rgba(0,0,0,0.4), 0 14px 30px rgba(145,94,255,0.25)',
            }}
          >
            I develop responsive Web Applications and Cross-Platform mobile apps
          </p>
        </div>


      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" className="group">
          <div className="relative w-[42px] h-[72px] rounded-full border border-secondary/60 bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(145,94,255,0.35)] transition-transform duration-300 group-hover:scale-[1.03]">
            <div className="absolute inset-1 rounded-full border border-secondary/30" />
            <motion.div
              animate={{ y: [6, 30, 6] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatType: 'loop' }}
              className="absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-secondary shadow-[0_0_16px_rgba(145,94,255,0.8)]"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Hero;


import { IMGLanternLeft, IMGLanternRight } from '../assets/images';
import { motion } from 'framer-motion';

const LanternTop = () => {
  return (
    <>
      <motion.picture
        className="absolute top-0 left-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring' }}
      >
        <img src={IMGLanternLeft} alt="Lantern Left" className="w-16" />
      </motion.picture>
      <motion.picture
        className="absolute top-0 right-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: 'spring', delay: 0.2 }}
      >
        <img src={IMGLanternRight} alt="Lantern Left" className="w-16" />
      </motion.picture>
    </>
  );
};

export default LanternTop;

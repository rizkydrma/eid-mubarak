import { motion } from 'framer-motion';
import { IMGMoon } from '../../assets/images';

const FirstPage = () => {
  return (
    <div className="space-y-3 flex flex-col justify-center items-center">
      <motion.img
        src={IMGMoon}
        alt="Moon Ramadhan"
        decoding="async"
        loading="lazy"
        className="w-56"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring' }}
      />
      <motion.h1
        className="text-5xl text-primary-400"
        initial={{ opacity: 0, y: 15 }}
        animate={{
          scale: [0, 1],
          rotate: [0, 30, 60, 240, 360],
          opacity: 1,
        }}
        transition={{ duration: 1.5, type: 'spring' }}
      >
        Ramadan
      </motion.h1>
      <motion.h1
        className="text-5xl text-primary-400"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', delay: 0.5 }}
      >
        Kareem
      </motion.h1>
    </div>
  );
};

export default FirstPage;

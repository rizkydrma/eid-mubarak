import { motion } from 'framer-motion';
import { IMGMenPray } from '../../assets/images';
import LanternTop from '../LanternTop';

const SecondPage = () => {
  return (
    <div className="z-10 flex flex-col justify-center items-center w-[calc(100%-100px)] m-auto">
      <LanternTop />
      <div className="space-y-3 z-10">
        <motion.img
          src={IMGMenPray}
          alt="Moon Ramadhan"
          decoding="async"
          loading="lazy"
          className="w-56 m-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring' }}
        />

        <motion.p
          className="text-lg font-light text-primary-400 text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', delay: 0.5 }}
        >
          Ramadan is not about taking a break from disobedience or bad habits.
          Ramadan is the starting point for a Muslim to improve himself so that
          he can be even better in the future.
        </motion.p>
      </div>
    </div>
  );
};

export default SecondPage;

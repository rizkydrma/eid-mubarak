import { motion } from 'framer-motion';
import { IMGWomenPray } from '../../assets/images';
import LanternTop from '../LanternTop';

const ThridPage = () => {
  return (
    <>
      <LanternTop />
      <div className="space-y-3 flex flex-col justify-center items-center w-[calc(100%-100px)] relative m-auto">
        <motion.img
          src={IMGWomenPray}
          alt="Moon Ramadhan"
          decoding="async"
          loading="lazy"
          className="w-48 mt-10"
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
          No human being is free from all sins, no one is free from all wrongs.
          In this holy month of Ramadan, let's forgive each other and share
          goodness.
        </motion.p>
      </div>
    </>
  );
};

export default ThridPage;

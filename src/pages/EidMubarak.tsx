import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BGEid } from '../assets/images';
import LanternTop from '../components/LanternTop';
import Button from '../components/Button';

const EidMubarak = () => {
  const [fireWorks, setFireWorks] = useState<boolean>(false);
  useEffect(() => {
    document.title = `Eid Mubarak with Rizky`;
  });
  return (
    <div>
      <LanternTop />

      <div className="grid place-items-center h-screen">
        <div className="text-center w-80 space-y-3 pb-28 z-10">
          <motion.h1
            className="text-2xl text-primary-400"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: 'spring' }}
          >
            Selamat Hari Raya Idul Fitri
          </motion.h1>
          <motion.h1
            className="text-md text-primary-400"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: 'spring', delay: 0.5 }}
          >
            1440 H / 2023 M
          </motion.h1>

          <motion.p
            className="text-xs text-primary-400"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: 'spring', delay: 0.5 }}
          >
            Taqabbalallahu minna wa minkum taqabbal yaa kariim, wa ja'alanallahu
            wa iyyakum minal 'aidin wal faizin wal maqbulin kullu 'aamin wa
            antum bi khair.
          </motion.p>

          <motion.p
            className="text-xs text-primary-400"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: 'spring', delay: 1 }}
          >
            Saya mengucapkan mohon maaf lahir dan batin.
          </motion.p>
          <Button
            className="bg-orange-400 text-white px-8"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2, type: 'spring', delay: 1 }}
            onClick={() => setFireWorks(true)}
          >
            Have a blessed Eid
          </Button>
          {fireWorks && (
            <>
              <div className="firework f0"></div>
              <div className="firework f1"></div>
              <div className="firework f2"></div>
              <div className="firework f3"></div>
              <div className="firework f4"></div>
            </>
          )}
        </div>
      </div>

      <picture className="absolute bottom-0 left-0 right-0">
        <img src={BGEid} alt="" />
      </picture>
    </div>
  );
};

export default EidMubarak;

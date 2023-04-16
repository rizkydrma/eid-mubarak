import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AnimateBedug, IMGLanternMoon } from '../../assets/images';
import useAudio from '../../hook/useAudio';
import AnimatedTextWord from '../AnimatedTextWord';
import Button from '../Button';
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
const FourthPage = () => {
  const [countDown, setCountDown] = useState(15);
  const navigate = useNavigate();
  const [playing, toggle] = useAudio(
    'https://blog.static.mamikos.com/wp-content/uploads/2020/05/Download-MP3-Takbiran-1-1-1-1.mp3'
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (countDown > 0) {
        setCountDown((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="px-10 z-10">
      {countDown !== 0 ? (
        <>
          <motion.img
            src={IMGLanternMoon}
            alt="Moon Ramadhan"
            decoding="async"
            loading="lazy"
            className="w-56 m-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: 'spring' }}
          />
          <AnimatedTextWord text="Dengan perjuangan dan pengorbanan selama bulan Ramadan, para kaum muslimin telah membuktikan bahwa mereka memiliki tekad yang kuat untuk mendapatkan keberkahan dari Allah SWT. Semoga bulan Ramadan menjadi bulan yang memberikan inspirasi dan semangat bagi kita semua untuk menjadi lebih baik dalam menjalani hidup." />
          <div className="h-6 w-6 bg-primary-700 rounded-full grid place-items-center m-auto">
            <span className="text-xs text-white text-center">{countDown}</span>
          </div>
        </>
      ) : (
        <div className="relative mt-10">
          {playing ? (
            <HiSpeakerWave
              size={20}
              className="text-primary-600"
              onClick={toggle}
            />
          ) : (
            <HiSpeakerXMark
              size={20}
              className="text-primary-600"
              onClick={toggle}
            />
          )}

          <motion.img
            src={AnimateBedug}
            alt="Tabuh Bedug"
            decoding="async"
            loading="lazy"
            className="w-56 m-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: 'spring' }}
          />
          <AnimatedTextWord text="Allaahu akbar allaahu akbar allaahu akbar. laa ilaaha illallaahu wallaahu akbar. allaahu akbar wa lillaahilhamd.allaahu akbar kabiiraw wal hamdu lillaahi katsiiraa wasubhaanallaahibukrataw wa ashiilaa." />
          <div className="m-auto text-center mt-4">
            <Button
              className="bg-orange-400 text-white px-8"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, type: 'spring' }}
              onClick={() => navigate('/eid-mubarak')}
            >
              Happy Eid Mubarak
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FourthPage;

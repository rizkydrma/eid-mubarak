import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { config } from '../config';

const captions = [
  'I just wanna say...',
  'Thank u for coming',
  'and thanks for save me',
  'thank u for choosing me',
  'and loving me',
  'i love u yasmine.',
];

const SpecialCaption = () => {
  const [countDown, setCountDown] = useState(0);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const mantra = searchParams.get('key');
  const listMantra = [config.MANTRA_KEY, 'guntur-bagja'];

  useEffect(() => {
    if (!listMantra.includes(mantra)) {
      return navigate('/eid-mubarak');
    }
    document.title = `Eid Mubarak with Rizky`;
    const interval = setInterval(() => {
      if (countDown < captions.length) {
        setCountDown((prev) => prev + 1);
      } else {
        navigate('/');
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [countDown]);

  return (
    <div className="h-screen grid place-items-center">
      {mantra == config.MANTRA_KEY ? (
        <motion.span
          // animate={{ opacity: 1 }}
          // initial={{ opacity: 0 }}
          // transition={{ duration: 1, type: 'spring', delay: 1 }}
          className="text-lg text-gray-700"
        >
          {captions[countDown]}
        </motion.span>
      ) : (
        <div className="px-6 text-center">
          <motion.p
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, type: 'spring', delay: 1 }}
            className="text-lg text-gray-700"
          >
            Testing buat guntur
          </motion.p>
          <motion.p
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, type: 'spring', delay: 1.5 }}
            className="text-lg text-gray-700"
          >
            Udah si tur gitu aja, ga keburu bikinnya WKWKW
          </motion.p>
        </div>
      )}
    </div>
  );
};

export default SpecialCaption;

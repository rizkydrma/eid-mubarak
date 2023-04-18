import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BGEid } from '../assets/images';
import LanternTop from '../components/LanternTop';
import Button from '../components/Button';
import Caption from '../data/caption.json';
import Modal, { TypeModal, initModal } from '../components/Modal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { HiClipboardDocument, HiXCircle } from 'react-icons/hi2';
import useWindowDimensions from '../hook/useWindowDimensions';
import ForbiddenDevice from '../components/ForbiddenDevice';

const EidMubarak = () => {
  const { width } = useWindowDimensions();
  const [fireWorks, setFireWorks] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<TypeModal<'caption', any>>(initModal);
  const [copyClipboard, setCopyClipboard] = useState({
    value: '',
    copied: false,
  });

  const getRandomCaption = (): void => {
    setLoading(true);
    const randomNumber = Math.ceil(Math.random() * 20);
    const findedCaption = Caption?.find((capt: any) => capt.id == randomNumber)
      ?.description as string;

    setTimeout(() => {
      setModal({
        open: true,
        type: 'caption',
        data: findedCaption,
        title: 'Caption',
      });

      setCopyClipboard({ ...copyClipboard, value: findedCaption });

      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    document.title = `Eid Mubarak with Rizky`;
  }, []);

  if ((width as number) < 481) {
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
              1444 H / 2023 M
            </motion.h1>

            <motion.p
              className="text-xs text-primary-400"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: 'spring', delay: 0.5 }}
            >
              Taqabbalallahu minna wa minkum taqabbal yaa kariim, wa
              ja'alanallahu wa iyyakum minal 'aidin wal faizin wal maqbulin
              kullu 'aamin wa antum bi khair.
            </motion.p>

            <motion.p
              className="text-xs text-primary-400"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: 'spring', delay: 1 }}
            >
              Saya mengucapkan mohon maaf lahir dan batin.
            </motion.p>
            <div className="flex flex-col gap-2 justify-center items-center">
              <Button
                className="bg-orange-400 text-white px-8 w-fit"
                animate={{ opacity: fireWorks ? 0 : 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 2, type: 'spring', delay: 1 }}
                onClick={() => setFireWorks(true)}
              >
                Have a blessed Eid
              </Button>

              <Button
                className="bg-orange-400 text-white px-8 w-fit"
                animate={{ opacity: fireWorks ? 1 : 0 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 3, type: 'spring', delay: 1 }}
                onClick={() => getRandomCaption()}
              >
                {loading ? (
                  <>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 mr-2 text-white animate-spin fill-blue-600 inline-flex"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="inline-flex">Loading...</span>
                  </>
                ) : (
                  'Generate Random Caption'
                )}
              </Button>
            </div>
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

        <Modal
          isOpen={modal?.open}
          setIsOpen={() => {
            setModal(initModal);
            setCopyClipboard({
              value: '',
              copied: false,
            });
          }}
        >
          <div className="flex gap-2 items-center absolute right-0 top-0 m-2">
            <motion.span
              className=" text-gray-500 text-xs ml-1 inline-flex"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: copyClipboard.copied ? 1 : 0, y: 0 }}
              transition={{ duration: 1, type: 'spring' }}
            >
              copied
            </motion.span>
            <CopyToClipboard
              text={copyClipboard.value}
              onCopy={() =>
                setCopyClipboard({ ...copyClipboard, copied: true })
              }
            >
              <HiClipboardDocument className="text-gray-700" size={18} />
            </CopyToClipboard>

            <button
              type="button"
              onClick={() => {
                setModal(initModal);
                setCopyClipboard({
                  value: '',
                  copied: false,
                });
              }}
            >
              <HiXCircle className="text-red-500" size={22} />
            </button>
          </div>

          <div className="pt-4">
            <span className="text-sm tracking-wide font-light font-sans text-justify pt-4">
              "{modal?.data}".
            </span>
          </div>
        </Modal>

        <picture className="absolute bottom-0 left-0 right-0">
          <img src={BGEid} alt="" />
        </picture>
      </div>
    );
  } else {
    return <ForbiddenDevice />;
  }
};

export default EidMubarak;

import { useEffect, useState } from 'react';
import Button from '../components/Button';
import ForbiddenDevice from '../components/ForbiddenDevice';
import FirstPage from '../components/Section/FirstPage';
import FourthPage from '../components/Section/FourthPage';
import SecondPage from '../components/Section/SecondPage';
import ThridPage from '../components/Section/ThirdPage';
import useWindowDimensions from '../hook/useWindowDimensions';

const HomePage = () => {
  const { width } = useWindowDimensions();
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.title = `Eid Mubarak with Rizky`;
  });

  if ((width as number) < 481) {
    return (
      <>
        <div className="pt-10">
          {page == 1 ? (
            <FirstPage />
          ) : page == 2 ? (
            <SecondPage />
          ) : page == 3 ? (
            <ThridPage />
          ) : page == 4 ? (
            <FourthPage />
          ) : null}
        </div>

        <div className="flex justify-between items-center gap-3 z-10 pb-10">
          {page == 1 && (
            <Button
              className="bg-orange-400 text-white px-8 m-auto"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 2, type: 'spring', delay: 1 }}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Get Started
            </Button>
          )}
          {page > 1 && page < 4 && (
            <>
              <Button
                className="bg-white border border-orange-400 text-orange-400  px-8"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 2, type: 'spring', delay: 1 }}
                onClick={() => setPage((prev) => prev - 1)}
              >
                back
              </Button>
              <Button
                className="bg-orange-400 text-white px-8"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 2, type: 'spring', delay: 1 }}
                onClick={() => setPage((prev) => prev + 1)}
              >
                next
              </Button>
            </>
          )}
        </div>
      </>
    );
  } else {
    return <ForbiddenDevice />;
  }
};

export default HomePage;

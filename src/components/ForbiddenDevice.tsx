import { ILForbiddenDevice } from '../assets/images';
import LanternTop from './LanternTop';

const ForbiddenDevice = () => {
  return (
    <div className="bg-gradient-to-tr from-orange-50 to-orange-100 h-screen w-full grid place-items-center relative">
      <LanternTop />
      <div className="flex flex-col justify-center items-center space-y-4 max-w-xs">
        <img
          src={ILForbiddenDevice}
          alt="Forbidden Device Ilustartor"
          decoding="async"
          loading="lazy"
          className="w-56"
        />
        <h1 className="text-xl text-primary-400 text-center">
          Please Using Mobile Device For Better Experience :(
        </h1>
      </div>
    </div>
  );
};

export default ForbiddenDevice;

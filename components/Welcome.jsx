import { BsDot } from 'react-icons/bs';
import { CiExport } from 'react-icons/ci';

const Welcome = () => {
  return (
    <div>
      <div className="mt-4 flex w-full items-center justify-between px-5 tracking-wide">
        <div>
          <h2 className="text-lg">AMS for SinamCare</h2>
          <p className="mt-2 text-sm text-gray-500">
            Welcome to your dashboard
          </p>
        </div>
        <div className="mr-7 flex items-center gap-14">
          <div>
            <h3 className="text-gray-400">Associates</h3>
            <p>120</p>
          </div>
          <div>
            <h3 className="text-gray-400">Patients</h3>
            <p>1000</p>
          </div>
          <div>
            <span className="flex items-center  text-green-500">
              Online{' '}
              <BsDot className="scale-150 animate-ping text-4xl transition duration-1000" />
            </span>
          </div>
          <button className="flex items-center gap-2 rounded bg-pink-500 px-[15px] py-[11px] text-sm">
            Export data <CiExport className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

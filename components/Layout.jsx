import { useContext } from 'react';
import GeneralContext from '../context/GeneralContext';
import Header from './Header';
import Leftmenu from './Leftmenu';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const { darkTheme } = useContext(GeneralContext);

  return (
<<<<<<< HEAD
    <div className={`${darkTheme && 'dark'}`}>
      <Navbar />
      <Header />
      <div className="flex bg-[#f6f8fc] pb-20 text-main-text-light dark:bg-main-dark-bg dark:text-main-text-dark">
=======
    <div className={` ${darkTheme && 'dark'}`}>
      <Navbar />
      <Header />
      <div className='flex bg-[#E9E6EB] pb-20 text-main-text-dark dark:bg-main-dark-bg'>
>>>>>>> 737ce2443047f845121e9861cd76472424829708
        {/* <Leftmenu /> */}
        {/* <div className="max-h-screen w-full overflow-scroll bg-main-light-bg pb-20 text-main-text-dark dark:bg-main-dark-bg"> */}
        {/* bg-[#0e1922] */}
        {children}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Layout;

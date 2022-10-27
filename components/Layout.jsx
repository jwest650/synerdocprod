import { useContext } from 'react';
import GeneralContext from '../context/GeneralContext';
import Header from './Header';
import Leftmenu from './Leftmenu';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const { darkTheme } = useContext(GeneralContext);
  return (
    <div className={` ${darkTheme && 'dark'}`}>
      <Navbar />
      <Header />
      <div className='flex min-h-screen bg-[#F6F8FC] pb-20 text-main-text-dark dark:bg-main-dark-bg'>
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

import { useContext } from 'react';
import GeneralContext from '../../context/GeneralContext';
import Header from './Header';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const { darkTheme } = useContext(GeneralContext);

  return (
    <div className={` mx-auto  ${darkTheme && 'dark'}`}>
      <Navbar />
      <Header />
      <div className="min-h-screen bg-[#f6f8fc]">
        <div className="mx-auto flex max-w-7xl overflow-auto  pb-20 text-main-text-light dark:bg-main-dark-bg">
          {/* <Leftmenu /> */}
          {/* <div className="max-h-screen w-full overflow-scroll bg-main-light-bg pb-20 text-main-text-dark dark:bg-main-dark-bg"> */}
          {/* bg-[#0e1922] */}
          {children}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;

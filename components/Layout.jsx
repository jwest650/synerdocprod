import Leftmenu from './Leftmenu';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Leftmenu />
        <div className="max-h-screen overflow-scroll bg-[#0e1922] text-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

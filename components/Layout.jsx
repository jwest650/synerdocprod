import Leftmenu from './Leftmenu';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex bg-[#0e1922]">
        <Leftmenu />
        <div className="max-h-screen w-full overflow-scroll bg-[#0e1922] pb-20 text-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

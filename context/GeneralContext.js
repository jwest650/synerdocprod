import { createContext, useState } from 'react';
import { hasCookie, getCookie, setCookie } from 'cookies-next';

const GeneralContext = createContext({});

export const GeneralProvider = ({ children }) => {
  console.log('cont');
  const [menuIsClicked, setMenuIsClicked] = useState(false);
  const [sectionClicked, setSectionClicked] = useState('calendar');

  const [darkTheme, setDarkTheme] = useState(() =>
    hasCookie('theme') ? JSON.parse(getCookie('theme')) : false
  );

  return (
    <GeneralContext.Provider
      value={{
        menuIsClicked,
        setMenuIsClicked,
        sectionClicked,
        setSectionClicked,
        darkTheme,
        setDarkTheme,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;

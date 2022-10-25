import { createContext, useState } from 'react';

const GeneralContext = createContext({});

export const GeneralProvider = ({ children }) => {
  const [menuIsClicked, setMenuIsClicked] = useState(false);
  const [sectionClicked, setSectionClicked] = useState('calendar');

  return (
    <GeneralContext.Provider
      value={{
        menuIsClicked,
        setMenuIsClicked,
        sectionClicked,
        setSectionClicked,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;

import { createContext, useState } from 'react';

const GeneralContext = createContext({});

export const GeneralProvider = ({ children }) => {
  const [menuIsClicked, setMenuIsClicked] = useState(false);

  return (
    <GeneralContext.Provider value={{ menuIsClicked, setMenuIsClicked }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;

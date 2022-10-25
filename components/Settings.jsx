import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Switch,
} from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';
import GeneralContext from '../context/GeneralContext';

const Settings = () => {
  const { darkTheme, setDarkTheme } = useContext(GeneralContext);

  useEffect(() => {
    console.log(darkTheme);
  }, [darkTheme]);

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <i>
          <FiSettings />
        </i>
      </PopoverTrigger>
      <PopoverContent>
        <div className="dark:text-black">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Settings</PopoverHeader>
          <PopoverBody>
            <ul>
              <li
                onClick={() => setDarkTheme((current) => (current = !current))}
                className="flex items-center gap-2 p-2"
              >
                Dark Theme
                <Switch isChecked={darkTheme} />
              </li>
              <li></li>
              <li></li>
            </ul>
          </PopoverBody>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Settings;

import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Switch,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { FiSettings } from 'react-icons/fi';
import GeneralContext from '../context/GeneralContext';

const Settings = () => {
  const { darkTheme, setDarkTheme } = useContext(GeneralContext);

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <i>
          <FiSettings />
        </i>
      </PopoverTrigger>
      <PopoverContent>
        <div className="text-black">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Settings</PopoverHeader>
          <PopoverBody>
            <ul>
              <li
                onClick={() => setDarkTheme((current) => (current = !current))}
                className="flex items-center justify-between gap-2 p-2"
              >
                <span>Dark Theme</span>
                <Switch isChecked={darkTheme} />
              </li>
            </ul>
          </PopoverBody>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Settings;

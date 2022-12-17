import { Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
import { BsSquare } from 'react-icons/bs';
import HelpDocumentTip from './HelpDocumentTip';

const MenuOptions = ({ menuOptions, selectedOption, setSelectedOption }) => {
  return (
    <ul className="space-y-2">
      <h3 className="verdana14 font-semibold underline">{menuOptions.name}</h3>
      {menuOptions.options.map((option, index) => (
        <li key={index} className="flex cursor-pointer items-center gap-2">
          <BsSquare
            onClick={() => setSelectedOption && setSelectedOption(option.title)}
            className={`scale-125 rounded shadow ${
              option.title === selectedOption
                ? 'bg-green-300 text-green-300'
                : 'bg-red-300 text-red-300'
            } `}
          />
          <Link href={`/${menuOptions.name}/${option.url}`}>
            <div>
              <Tooltip
                hasArrow
                label={`Go to ${option.title}`}
                fontSize="11px"
                color="white"
              >
                <span>{option.title}</span>
              </Tooltip>
            </div>
          </Link>
          <HelpDocumentTip url="" />
        </li>
      ))}
    </ul>
  );
};

export default MenuOptions;

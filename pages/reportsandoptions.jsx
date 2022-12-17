import { useState } from 'react';
import { menuOptions } from '../assets/menuOptionsData';
import MenuOptions from '../components/home/MenuOptions';

const Reportsandoptions = () => {
  const [selectedOption, setSelectedOption] = useState(false);

  return (
    <div className="verdana11">
      <h2 className="verdana16 font-semibold">Reports and Options</h2>
      <p clas>
        Click the box in front of the option to change your starting page -
        unclick to resume starting on the home page.
      </p>
      <ul className="mx-5 mt-3 grid grid-cols-5 gap-5">
        <li className="space-y-3">
          <MenuOptions
            menuOptions={menuOptions[0]}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <MenuOptions
            menuOptions={menuOptions[5]}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </li>
        <li className="space-y-3">
          <MenuOptions
            menuOptions={menuOptions[1]}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <MenuOptions
            menuOptions={menuOptions[6]}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </li>
        <MenuOptions
          menuOptions={menuOptions[2]}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <MenuOptions
          menuOptions={menuOptions[3]}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <MenuOptions
          menuOptions={menuOptions[4]}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </ul>
    </div>
  );
};

export default Reportsandoptions;

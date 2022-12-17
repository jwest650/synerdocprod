import Link from 'next/link';
import { useRouter } from 'next/router';
<<<<<<< HEAD
import { useEffect } from 'react';
import { useState } from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';
=======
import { useEffect, useState } from 'react';
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
import TableSelect from '../structure/TableSelect';
import { patients } from './homeData';

const Card = ({ title, addOption, hasDropDown, selectOptions }) => {
  const router = useRouter();
  const [showList, setShowList] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  useEffect(() => {
    if (
      selectedOption === 'My Schedule' ||
      selectedOption === 'Unverified Schedules'
    ) {
      router.push(`/${selectedOption.replace(/\s/g, '').toLowerCase()}`);
    }
  }, [router, selectedOption]);
  return (
    <div className="card-primary space-y-3">
      <div className="flex max-w-[250px] items-center justify-between">
        <h2 className="verdana14 font-semibold">{title && title}</h2>
        {addOption && addOption}
      </div>
      <div className="flex max-w-[250px] items-center justify-between gap-3">
        <div
          onMouseOver={() => setShowList(true)}
          onMouseLeave={() => setShowList(false)}
          className="relative flex items-center"
        >
          <input
            type="text"
            placeholder="Enter first or last name"
            className="input-primary"
          />
          {hasDropDown &&
            //  (
            //   <>
            //     <div className="absolute top-[1px] right-0 rounded-r bg-primary-gray px-2 py-[1px] shadow-lg shadow-secondary-blue">
            //       <MdOutlineArrowDropDown className="scale-150 text-lg" />
            //     </div>

            // {
            showList && (
              <div className="card-dropdown absolute top-5 z-10 whitespace-nowrap">
                <ul className=" mt-2 h-full w-full overflow-y-scroll rounded-t bg-white shadow-xl">
                  {patients.map((patient, index) => (
                    <Link href={`/Patients/patients-encounters/1`} key={index}>
                      <li className="flex cursor-pointer items-center gap-2 py-1 px-2 hover:bg-texiary-blue ">
                        <span>{patient.name}</span>
                        <span>{patient.status}</span>
                        <span>( SOC {patient.date})</span>
                      </li>
                    </Link>
                  ))}
                </ul>
                <div className="flex h-6 w-full items-center justify-center rounded-b border-t bg-white shadow-xl">
                  Items: <strong>{patients.length}</strong>
                </div>
              </div>
            )}
        </div>

        <button className="btn-primary">Search</button>
      </div>
      <p className="text-gray-700">or jump to</p>
      <TableSelect
        styles={{ backgroundColor: 'white' }}
        options={selectOptions}
        setSelectedOption={setSelectedOption}
      />
    </div>
  );
};

export default Card;

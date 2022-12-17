import { useState } from 'react';
import CalendarComp from '../../structure/CalendarComp';
import TableSelect from '../../structure/TableSelect';
import { physicianSpeciality } from './referralData';

const PhysicianInputs = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  return (
    <>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[42%] justify-end">
          <span className="text-primary-orange">*</span>First Name:{' '}
        </label>

        <div className=" flex w-[58%] items-center gap-2">
          <input type="text" className="input-primary" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[42%] justify-end">
          Middle Initial:{' '}
        </label>

        <div className=" flex w-[58%] items-center gap-2">
          <input type="text" className="input-primary w-14" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[42%] justify-end">
          <span className="text-primary-orange">*</span>
          Last Name:
        </label>
        <div className=" flex w-[58%] ">
          <input type="text" className="input-primary" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[42%] justify-end">
          Email:
        </label>
        <div className=" flex w-[58%] ">
          <input type="email" className="input-primary" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[42%] justify-end">
          Sales Rep:{' '}
        </label>
        <div className=" flex w-[58%] ">
          <TableSelect
            styles={{ width: 'fit-content', height: '25px' }}
            options={['<--select-->', '']}
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[42%] justify-end">
          <span className="text-primary-orange">*</span>Start Date:{' '}
        </label>
        <div className=" flex w-[58%] ">
          <CalendarComp date={startDate} setDate={setStartDate} />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[42%] justify-end">
          End Date:{' '}
        </label>
        <div className=" flex w-[58%] ">
          <CalendarComp date={endDate} setDate={setEndDate} />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[42%] justify-end">
          Physician Group:
        </label>
        <div className=" flex w-[58%] items-center gap-2">
          <input type="text" className="input-primary" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[42%] justify-end">
          Speciality:
        </label>
        <div className=" flex w-[58%] items-center gap-2">
          <TableSelect
            styles={{ width: 'fit-content', height: '25px' }}
            options={['<--select-->', ...physicianSpeciality]}
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[42%] justify-end">
          Title:
        </label>
        <div className=" flex w-[58%] items-center gap-2">
          <TableSelect
            styles={{ width: 'fit-content', height: '25px' }}
            options={[
              '<--select-->',
              'Doctor of Osteopathic Medicine',
              'Medical Doctor',
              'Nurse Practioner',
              'Physician Assistant',
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default PhysicianInputs;

import { useState } from 'react';
import CalendarComp from '../../structure/CalendarComp';
import TableSelect from '../../structure/TableSelect';

const InsuranceCompanyInputs = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  return (
    <>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[42%] justify-end">
          <span className="text-primary-orange">*</span>Referral Company:{' '}
        </label>
        <div className=" flex w-[58%] items-center gap-2">
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
    </>
  );
};

export default InsuranceCompanyInputs;

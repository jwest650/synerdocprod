import CalendarComp from '../../structure/CalendarComp';
import TableSelect from '../../structure/TableSelect';
<<<<<<< HEAD
=======
import { classification } from './associateDataFour';
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
import { employmentDiscipline } from './associateDatatwo';

const EmploymentDetails = ({
  setStartDate,
  startDate,
  setHireDate,
  hireDate,
}) => {
  return (
    <div className="mt-6 flex  w-full flex-col items-center gap-3.5 pr-8">
      <div className="flex w-full items-center justify-center gap-3 ">
        <label className="flex w-[35%]  justify-end">
          <span className="text-primary-orange">*</span>
          Classification:
        </label>
        <div className=" flex w-[65%] items-center">
          <TableSelect
            styles={{ width: 'fit-content', height: '25px' }}
<<<<<<< HEAD
            options={[
              '<--select-->',
              'Administrative',
              'Collector',
              'Contractor',
              'Field Staff - Full Time',
              'Field Staff - Part Time',
              'Salesperson',
              'Volunteer',
            ]}
=======
            options={['<--select-->', ...classification]}
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
          />
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          Discipline:
        </label>

        <div className=" flex w-[65%] items-center gap-2">
          <TableSelect
            styles={{ width: 'fit-content', height: '25px' }}
            options={['<--select-->', ...employmentDiscipline]}
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          <span className="text-primary-orange">*</span>Hire Date:
        </label>

        <div className=" flex w-[65%] items-center gap-2">
          <CalendarComp setDate={setHireDate} date={hireDate} />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          <span className="text-primary-orange">*</span>
          Start Date:{' '}
        </label>
        <div className=" flex w-[65%] ">
          <CalendarComp setDate={setStartDate} date={startDate} />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          Supervisor:
        </label>
        <div className=" flex w-[65%] ">
          <TableSelect
            styles={{ width: 'fit-content', height: '25px' }}
            options={['<--select-->', 'Balley Debie']}
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          <span className="text-primary-orange">*</span>Home Agency:
        </label>
        <div className=" flex w-[65%] ">
          <TableSelect
            styles={{ width: 'fit-content', height: '25px' }}
<<<<<<< HEAD
            options={['Sinam Care']}
=======
            options={['<--select-->', 'Sinam Care, LLC']}
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          Associate Number:
        </label>
        <div className=" flex w-[65%] ">
          <input type="text" placeholder="12345678" className="input-primary" />{' '}
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          Associate NPI:
        </label>
        <div className=" flex w-[65%] ">
          <input
            type="text"
            placeholder="9977423432"
            className="input-primary"
          />
        </div>
      </div>
<<<<<<< HEAD
=======
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          Evv Vendor ID:
        </label>
        <div className=" flex w-[65%] ">
          <input type="text" placeholder="" className="input-primary" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          Evv Admin Email:
        </label>
        <div className=" flex w-[65%] ">
          <input type="text" placeholder="" className="input-primary" />
        </div>
      </div>
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
    </div>
  );
};

export default EmploymentDetails;

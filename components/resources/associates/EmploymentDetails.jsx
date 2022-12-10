import CalendarComp from '../../structure/CalendarComp';
import TableSelect from '../../structure/TableSelect';

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
            options={['Field Staff - Full Time', 'Field Staff - Part Time']}
          />
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          Discipline
        </label>

        <div className=" flex w-[65%] items-center gap-2">
          <TableSelect
            styles={{ width: 'fit-content', height: '25px' }}
            options={['Regist-primarytext-primary-orangese']}
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
          Supervisor
        </label>
        <div className=" flex w-[65%] ">
          <TableSelect
            styles={{ width: 'fit-content', height: '25px' }}
            options={['Balley Debie']}
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
            options={['Sinamcare']}
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          Associate Number
        </label>
        <div className=" flex w-[65%] ">
          <input type="text" placeholder="12345678" className="input-primary" />{' '}
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          Associate NPI
        </label>
        <div className=" flex w-[65%] ">
          <input
            type="text"
            placeholder="9977423432"
            className="input-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default EmploymentDetails;

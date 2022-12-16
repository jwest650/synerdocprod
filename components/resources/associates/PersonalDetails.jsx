import CalendarComp from '../../structure/CalendarComp';
import TableSelect from '../../structure/TableSelect';
import { race } from './associateDataFour';

const PersonalDetails = ({ setBirthDate, birthDate }) => {
  return (
    <div className="mt-6 flex w-full flex-col items-center gap-3.5">
      <div className="flex w-full items-center justify-center gap-3 ">
        <label className="flex w-[35%]  justify-end">
          <span className="text-primary-orange">*</span>
          First/Middle/
          <span className="text-primary-orange">*</span>
          Last:
        </label>
        <div className=" flex w-[65%] items-center gap-1">
          <input
            type="text"
            placeholder="First"
            className="input-primary w-24"
          />
          <input
            type="text"
            placeholder="Middle"
            className="input-primary w-16"
          />
          <input
            type="text"
            placeholder="Last"
            className="input-primary w-24"
          />
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          SSN:
        </label>

        <div className=" flex w-[65%] items-center gap-2">
          <input type="text" className="input-primary w-14" />
          -
          <input type="text" className="input-primary w-14" />
          -
          <input type="text" className="input-primary w-14" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          Birth Date:
        </label>

        <div className=" flex w-[65%] items-center gap-2">
          <CalendarComp setDate={setBirthDate} date={birthDate} />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          Gender:
        </label>
        <div className=" flex w-[65%] ">
          <TableSelect
            styles={{ width: 'fit-content', height: '25px' }}
            options={['<--select-->', 'Male', 'Female', 'Other']}
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          Race:
        </label>
        <div className=" flex w-[65%] ">
          <TableSelect
            styles={{ width: 'fit-content', height: '25px' }}
            options={['<--select-->', ...race]}
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          Email:
        </label>
        <div className=" flex w-[65%] ">
          <input
            type="text"
            placeholder="example@gmail.com"
            className="input-primary"
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          Mobile Email:
        </label>
        <div className=" flex w-[65%] ">
          <input type="text" className="input-primary" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-3 ">
        <label htmlFor="" className="flex w-[35%] justify-end">
          Scheduling Rank:
        </label>
        <div className=" flex w-[65%] ">
          <TableSelect
            styles={{ width: 'fit-content', height: '25px' }}
            options={[
              'N/A',
              'Level 1 - Always Assign',
              'Level 2 - Occationally Assign',
              'Level 3 - Rarely Assign',
              'Level 4 - Never Assign',
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;

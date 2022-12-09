import { BsDot } from 'react-icons/bs';

const Infoleft = () => {
  return (
    <div className="space-y-5">
      {/* <div className="rounded-md bg-[#1e5ee9] p-5 shadow-md">
        <h2 className="mb-7 flex items-center gap-2 text-lg">
          <BsGrid className="cursor-pointer text-xl text-gray-200" />
          Activity Stream
        </h2>

        <ul>
          <li className="my-3 flex items-center justify-between text-base text-gray-100">
            <div className="flex items-center gap-2">
              <BsCheck2 className="rounded border-[5px] border-[#1fe2e2] bg-[#1fe2e2] text-[36px]" />
              <div>
                <p>Admission Successful</p>
                <p>
                  Admission ID: <span>#9823</span>
                </p>
              </div>
            </div>
            <p className="text-gray-300">1h</p>
          </li>
          <li className="my-3 flex items-center justify-between text-base text-gray-100">
            <div className="flex items-center gap-2">
              <BsCheck2 className="rounded border-[5px] border-[#1fe2e2] bg-[#1fe2e2] text-[36px]" />
              <div>
                <p>Admission Successful</p>
                <p>
                  Admission ID: <span>#9823</span>
                </p>
              </div>
            </div>
            <p className="text-gray-300">1h</p>
          </li>
          <li className="my-3 flex items-center justify-between text-base text-gray-100">
            <div className="flex items-center gap-2">
              <BsCheck2 className="rounded border-[5px] border-[#1fe2e2] bg-[#1fe2e2] text-[36px]" />
              <div>
                <p>Admission Successful</p>
                <p>
                  Admission ID: <span>#9823</span>
                </p>
              </div>
            </div>
            <p className="text-gray-300">1h</p>
          </li>
          <li className="my-3 flex items-center justify-between text-base text-gray-100">
            <div className="flex items-center gap-2">
              <BsCheck2 className="rounded border-[5px] border-[#1fe2e2] bg-[#1fe2e2] text-[36px]" />
              <div>
                <p>Admission Successful</p>
                <p>
                  Admission ID: <span>#9823</span>
                </p>
              </div>
            </div>
            <p className="text-gray-300">1h</p>
          </li>
        </ul>
        <p className="cursor-pointer text-end text-[#1fe2e2]">[view all]</p>
      </div> */}
      <div className="rounded-md bg-[#edf2fb] p-5 shadow-md">
        <h2 className="text-lg">Annoucements</h2>
        {/* <p>{scheduleData[0].StartTime.split('T')[0]}</p> */}
        <p className="text-xs font-semibold text-gray-400">
          10/19/2022 11:00AM
        </p>
        <p className="mt-3 text-sm text-gray-800">
          <span className="font-medium">ATTENTION:</span> We would like to
          encourage you to sign up for our...{' '}
          <span className="font-medium text-orange-600">[read more]</span>
        </p>
      </div>
      <div className="rounded-md bg-[#edf2fb] p-5 shadow-md">
        <h2 className="text-lg text-orange-600 underline">
          Reports and Options
        </h2>
      </div>
      <div className="rounded-md bg-[#edf2fb] p-5">
        <h2 className="mb-3 text-lg">Other Actions</h2>
        <ul className="px-5">
          <li className="flex cursor-pointer items-center text-sm text-orange-600 underline">
            <BsDot className="text-3xl text-black" />
            <span>Add Referral Source </span>
          </li>
          <li className="flex cursor-pointer items-center text-sm text-orange-600 underline">
            <BsDot className="text-3xl text-black" />
            Directions and Mapping
          </li>
          <li className="flex cursor-pointer items-center text-sm text-orange-600 underline">
            <BsDot className="text-3xl text-black" />
            Attach Uploaded Service Notes
          </li>
          <li className="flex cursor-pointer items-center text-sm text-orange-600 underline">
            <BsDot className="text-3xl text-black" />
            Add Pay Only
          </li>
          <li className="flex cursor-pointer items-center text-sm text-orange-600 underline">
            <BsDot className="text-3xl text-black" />
            Educational Documents
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Infoleft;

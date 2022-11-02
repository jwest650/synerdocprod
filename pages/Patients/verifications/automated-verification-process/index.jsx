import React from 'react';

const AutomatedVerificationProcess = () => {
  return (
    <div className='ar w-full space-y-4 bg-[#F6F8FC] p-5 text-gray-800 dark:text-white'>
      <section>
        <div>
          <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
            Auto Verify Service
          </h1>
          <hr />
          <button className='my-3 rounded border bg-orange-600 px-2 font-medium text-white'>
            Verify
          </button>
        </div>
      </section>
    </div>
  );
};

export default AutomatedVerificationProcess;

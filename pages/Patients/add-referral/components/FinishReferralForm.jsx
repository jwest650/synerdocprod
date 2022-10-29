import { Input, Select } from '@chakra-ui/react';

const FinishReferralForm = () => {
  return (
    <div>
      <section>
        <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
          Finish Referral - Nick Jones
        </h1>
        <hr />
        <h1 className='py-2 text-xl text-black dark:text-white'>
          Initial Physician Order
        </h1>
        <hr />

        <div>
          <div className='flex py-2'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Primary Physician: </h1>
            </div>
            <div className='flex items-center'>
              <div>
                <Input size={'xs'} type='text' />
              </div>
              <button className='ml-3 rounded border bg-orange-600 px-3  text-white'>
                Find Physician
              </button>
            </div>
          </div>

          <div className='flex py-2'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Physician Type: </h1>
            </div>
            <div>
              <Select size='xs'>
                <option value='option1' className='text-gray-800'>
                  Option 1
                </option>
                <option value='option2' className='text-gray-800'>
                  Option 2
                </option>
                <option value='option3' className='text-gray-800'>
                  Option 3
                </option>
              </Select>
            </div>
          </div>
          <div className='flex py-2'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Requested start of care: </h1>
            </div>
            <div>
              <Input size={'xs'} type='date' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinishReferralForm;

import { Select, Input, Checkbox } from '@chakra-ui/react';
import { useState } from 'react';
import AddReferralSourceContactModal from './AddReferralSourceContactModal';
import FindReferralSourceModal from './FindReferralSourceModal';

const CreateReferralForm = () => {
  let data = [1, 1, 1, 1];
  const [openFindReferral, setOpenFindReferral] = useState(false);
  const [openAddReferralContact, setOpenAddReferralContact] = useState(false);

  return (
    <div>
      <section>
        <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
          Create Referral
        </h1>
        <hr />

        <div className='py-4'>
          <p>Add a new referral into the system</p>
          <h1 className='text-2xl'>Agency</h1>
        </div>
        <hr />
        <div className=' flex  items-center justify-between'>
          <div className='flex items-center justify-between'>
            <label htmlFor='#' className='mr-3'>
              Agency:{' '}
            </label>
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
          <div className='my-2 flex'>
            <label htmlFor='#'>Agency Type: </label>
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
        </div>
      </section>
      <section>
        {/* Referral Source */}
        <section className=' mt-5 '>
          <div className=' py-4'>
            <h1 className='text-2xl'>Referral Source</h1>
          </div>
          <hr />
          <div className='flex py-3'>
            <div className='w-[150px]'>
              <label htmlFor='#'>Referral Source:</label>
            </div>
            <div>
              <Select size='xs' marginRight={5}>
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

            <div className='ml-3'>
              <button
                onClick={() => setOpenFindReferral(true)}
                className='dark:text-[#E77654px-6 cursor-pointer rounded bg-orange-600 py-1 px-5 text-sm capitalize text-[#fff]'
              >
                find referral source
              </button>
            </div>
          </div>

          <div className='mt-5 flex'>
            <div className='w-[150px]'>
              <label htmlFor='#'>Mode of Delivery:</label>
            </div>
            <div>
              <Select size='xs' marginRight={5}>
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
        </section>
      </section>

      {/* Search Modal */}
      <FindReferralSourceModal
        openFindReferral={openFindReferral}
        setOpenFindReferral={setOpenFindReferral}
      />
      {/* Add Modal */}
      <AddReferralSourceContactModal
        openAddReferralContact={openAddReferralContact}
        setOpenAddReferralContact={setOpenAddReferralContact}
      />
    </div>
  );
};

export default CreateReferralForm;

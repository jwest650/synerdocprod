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
                className='dark:text-[#E77654px-6 cursor-pointer rounded bg-[#E77654] py-1 px-5 text-sm capitalize text-[#fff]'
              >
                find referral source
              </button>
            </div>
          </div>

          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Referral Phone: </h1>
            </div>
            <p className='text-gray-500'>w: (3434)-343445</p>
          </div>

          <div className='flex '>
            <div className='w-[150px]'>
              <h1 className=''>Referral History: </h1>
            </div>
            <div>
              <table className=' min-w-full overflow-auto'>
                <thead className='border-b bg-[#32164A] text-[18px] tracking-wider text-white'>
                  <tr>
                    <th className=' border-gray-100  pl-2 text-left'></th>
                    <th className=' border-gray-100  pl-2 text-left'>
                      30 days
                    </th>
                    <th className=' border-gray-100  pl-2 text-left'>
                      60 days
                    </th>
                    <th className=' border-gray-100  pl-2 text-left'>
                      90 days
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border'>
                    <td className='border border-gray-400'>Admits</td>
                    <td className='border border-gray-400'>0</td>
                    <td className='border border-gray-400'>0</td>
                    <td className='border border-gray-400'>0</td>
                  </tr>
                  <tr className='border bg-[#eee]'>
                    <td className='border border-gray-400'>Non Admits</td>
                    <td className='border border-gray-400'>0</td>
                    <td className='border border-gray-400'>0</td>
                    <td className='border border-gray-400'>0</td>
                  </tr>
                </tbody>
              </table>
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

          <div className='my-5 flex'>
            <div className='w-[150px]'>
              <label htmlFor='#'>Sales Rep:</label>
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
        {/* Referral Source Contact */}
        <section className='mt-10 '>
          <div className='flex py-3'>
            <div className='w-[150px]'>
              <label htmlFor='#'>Referral Source Contact:</label>
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
                onClick={() => setOpenAddReferralContact(true)}
                className='dark:text-[#E77654px-6 cursor-pointer rounded bg-[#E77654] py-1 px-5 text-sm capitalize text-[#fff]'
              >
                add referral source contact
              </button>
            </div>
          </div>

          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Phone 1: </h1>
            </div>
            <div className='flex'>
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
              <p className='ml-3 text-gray-500'>(343)-343-445</p>
              <div className='ml-3'>
                <Input size={'xs'} />
              </div>
            </div>
          </div>
          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Phone 2: </h1>
            </div>
            <div className='flex'>
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
              <p className='ml-3 text-gray-500'>(343)-343-445</p>
              <div className='ml-3'>
                <Input size={'xs'} />
              </div>
            </div>
          </div>
          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Email: </h1>
            </div>
            <div>
              <Input size={'xs'} />
            </div>
          </div>
          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Information: </h1>
            </div>
            <div>
              <Input size={'xs'} />
            </div>
          </div>
        </section>
      </section>
      {/* Initial Referral Information */}
      <section>
        <div className=' py-3 '>
          <h1 className='py-3 text-2xl'>Initial Referral Information</h1>
          <hr />
          <div className='flex py-3'>
            <div className='w-[150px]'>
              <label htmlFor='#' className='mr-3'>
                Payer Category:
              </label>
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
          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Referral Date: </h1>
            </div>
            <div>
              <Input size={'xs'} type='date' />
            </div>
          </div>
          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Requested start of care: </h1>
            </div>
            <div>
              <Input size={'xs'} type='date' />
            </div>
          </div>
          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Admission Source: </h1>
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
          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Admission Type: </h1>
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
          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Descipline: </h1>
            </div>
            <div>
              <table className=' min-w-full overflow-auto'>
                <thead className='border-b bg-[#32164A] text-[18px] tracking-wider text-white'>
                  <tr>
                    <th className=' border-gray-100  pl-2 text-left'></th>
                    <th className=' border-gray-100  pl-2 text-left'>
                      Descipline
                    </th>
                    <th className=' border-gray-100  pl-2 text-left'>
                      Active Associates
                    </th>
                    <th className=' border-gray-100  pl-2 text-left'>
                      Associates In Zip Code
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border'>
                    <td className='border border-gray-400'>
                      <Checkbox defaultChecked></Checkbox>
                    </td>
                    <td className='border border-gray-400'>Skilled Nurse</td>
                    <td className='border border-gray-400'>9</td>
                    <td className='border border-gray-400'>0</td>
                  </tr>
                  <tr className='border'>
                    <td className='border border-gray-400'>
                      <Checkbox></Checkbox>
                    </td>
                    <td className='border border-gray-400'>Skilled Nurse</td>
                    <td className='border border-gray-400'>9</td>
                    <td className='border border-gray-400'>0</td>
                  </tr>
                  <tr className='border'>
                    <td className='border border-gray-400'>
                      <Checkbox defaultChecked></Checkbox>
                    </td>
                    <td className='border border-gray-400'>Skilled Nurse</td>
                    <td className='border border-gray-400'>9</td>
                    <td className='border border-gray-400'>0</td>
                  </tr>
                  <tr className='border'>
                    <td className='border border-gray-400'>
                      <Checkbox></Checkbox>
                    </td>
                    <td className='border border-gray-400'>Skilled Nurse</td>
                    <td className='border border-gray-400'>9</td>
                    <td className='border border-gray-400'>0</td>
                  </tr>
                </tbody>
              </table>

              <div className='mt-3'>
                <Checkbox>Decline Referral</Checkbox>
                <br />
                <Checkbox defaultChecked>Continue Referral</Checkbox>
                <br />
                <button
                  className='my-3 rounded border-2 px-2'
                  // onClick={() => step < 4 && setStep(step + 1)}
                >
                  save and continue
                </button>
              </div>
            </div>
          </div>
        </div>
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

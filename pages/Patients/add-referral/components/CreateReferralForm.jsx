import { Select, Input, Checkbox } from '@chakra-ui/react'
import { useState } from 'react'
import AddReferralSourceContactModal from './AddReferralSourceContactModal'
import FindReferralSourceModal from './FindReferralSourceModal'

const CreateReferralForm = () => {
  let data = [1, 1, 1, 1]
  const [openFindReferral, setOpenFindReferral] = useState(false)
  const [openAddReferralContact, setOpenAddReferralContact] = useState(false)

  return (
    <div>
      <section>
        <h1 className='verdana18 mt-3 font-bold capitalize text-black dark:text-white'>
          Create Referral
        </h1>
        <hr />

        <div className='py-2'>
          <p className='verdana12'>Add a new referral into the system</p>
          <h1 className='verdana16 mt-8 border-b font-bold'>Agency</h1>
        </div>
        {/* <hr /> */}
        <div className=' flex  items-center justify-between'>
          <div className='my-2 flex items-center'>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              <span className='font-bold text-secondary-color '>*</span>Agency:
            </p>
            <Select className='input-primary' size='xs' fontSize='13px'>
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

          <div className='my-2 flex items-center'>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              <span className='font-bold text-secondary-color'>*</span>Agency
              Type:{' '}
            </p>
            <Select className='input-primary' size='xs' fontSize='13px'>
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
      <section>
        {/* Referral Source */}
        <section className=' mt-5 '>
          <div className=' py-4'>
            <h1 className='verdana16 mt-5 border-b font-bold'>
              Referral Source
            </h1>
          </div>
          {/* <hr /> */}
          <div className='my-2 flex items-center'>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              <span className='font-bold text-secondary-color'>*</span>
              Referral Source:{' '}
            </p>
            <div>
              <Select className='input-primary' size='xs' marginRight={5}>
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
                className=' verdana13 cursor-pointer rounded bg-secondary-color py-[2px]  px-3 capitalize text-[#fff] dark:text-[#E77654]'
              >
                find referral source
              </button>
            </div>
          </div>
          <div className='my-2 flex items-center'>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Referral Phone:
            </p>
            <p className='verdana13 text-gray-500'>w: (3434)-343445</p>
          </div>
          <div className='my-2 -mt-7 flex items-center'>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Referral History:
            </p>
            <div className='mt-10'>
              <table className=' min-w-full overflow-auto'>
                <thead className='thead-primary'>
                  <tr>
                    <th className=' th-first'></th>
                    <th className=' th-middle'>30 days</th>
                    <th className=' th-middle'>60 days</th>
                    <th className=' th-last'>90 days</th>
                  </tr>
                </thead>
                <tbody className='verdana10'>
                  <tr className='border'>
                    <td className='td-primary'>Admits</td>
                    <td className='td-primary'>0</td>
                    <td className='td-primary'>0</td>
                    <td className='td-primary'>0</td>
                  </tr>
                  <tr className='border bg-[#eee]'>
                    <td className='td-primary'>Non Admits</td>
                    <td className='td-primary'>0</td>
                    <td className='td-primary'>0</td>
                    <td className='td-primary'>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className='my-2 flex items-center'>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Mode of Delivery:
            </p>
            <div>
              <Select className='input-primary' size='xs' marginRight={5}>
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
          <div className='my-2 flex items-center'>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Sales Rep:
            </p>
            <div>
              <Select className='input-primary' size='xs' marginRight={5}>
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
          <div className='my-2 flex items-center'>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Referral Source Contact:
            </p>
            <div>
              <Select className='input-primary' size='xs' marginRight={5}>
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
                className='verdana13 cursor-pointer rounded bg-secondary-color  py-[2px] px-3 capitalize text-[#fff] dark:text-[#E77654]'
              >
                add referral source contact
              </button>
            </div>
          </div>

          <div className='my-2 flex items-center'>
            <p className='verdana13 mr-3 w-[200px]  text-right font-semibold'>
              Phone 1:
            </p>
            <div className='flex items-center'>
              <div>
                <Select className='input-primary' size='xs'>
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
              <p className='verdana13 ml-3 text-gray-500'>(343)-343-445</p>
              <div className='ml-3'>
                <input className='input-primary' size={'xs'} />
              </div>
            </div>
          </div>
          <div className='my-2 flex items-center'>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Phone 2:
            </p>
            <div className='flex items-center'>
              <div>
                <Select className='input-primary' size='xs'>
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
              <p className='verdana13 ml-3 text-gray-500'>(343)-343-445</p>
              <div className='ml-3'>
                <input className='input-primary' size={'xs'} />
              </div>
            </div>
          </div>
          <div className='my-2 flex items-center'>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Email:
            </p>
            <div>
              <input className='input-primary' size={'xs'} />
            </div>
          </div>

          <div className='my-2 flex items-center'>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Information:
            </p>
            <div>
              <input className='input-primary' size={'xs'} />
            </div>
          </div>
        </section>
      </section>
      {/* Initial Referral Information */}
      <section>
        <div className=' py-3 '>
          <h1 className='verdana16 mt-8 border-b text-2xl font-bold'>
            Initial Referral Information
          </h1>
          {/* <hr /> */}
          <div className='my-2 flex items-center'>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              <span className='font-bold text-secondary-color'>*</span>
              Payer Category:
            </p>
            <div>
              <Select className='input-primary' size='xs' marginRight={5}>
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
          <div className='my-2 flex items-center'>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Referral Date:
            </p>
            <div>
              <input className='input-primary' size={'xs'} type='date' />
            </div>
          </div>

          <div className='my-2 flex items-center'>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Requested start of care:
            </p>
            <div>
              <input className='input-primary' size={'xs'} type='date' />
            </div>
          </div>

          <div className='my-2 flex items-center'>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Admission Source:
            </p>
            <div>
              <Select className='input-primary' size='xs' marginRight={5}>
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

          <div className='my-2 flex items-center'>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Admission Type:
            </p>
            <div>
              <Select className='input-primary' size='xs' marginRight={5}>
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

          <div className='my-2 mt-4 flex items-start'>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              <span className='font-bold text-secondary-color'>*</span>
              Descipline:
            </p>

            <div className='mt-1'>
              <table className=' min-w-full overflow-auto'>
                <thead className='thead-primary'>
                  <tr>
                    <th className=' th-first'></th>
                    <th className=' th-middle'>Descipline</th>
                    <th className=' th-middle'>Active Associates</th>
                    <th className=' th-last'>Associates In Zip Code</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border'>
                    <td className='td-primary'>
                      <Checkbox></Checkbox>
                    </td>
                    <td className='td-primary'>Skilled Nurse</td>
                    <td className='td-primary'>9</td>
                    <td className='td-primary'>0</td>
                  </tr>
                  <tr className='border'>
                    <td className='td-primary'>
                      <Checkbox></Checkbox>
                    </td>
                    <td className='td-primary'>Skilled Nurse</td>
                    <td className='td-primary'>9</td>
                    <td className='td-primary'>0</td>
                  </tr>
                  <tr className='border'>
                    <td className='td-primary'>
                      <Checkbox defaultChecked></Checkbox>
                    </td>
                    <td className='td-primary'>Skilled Nurse</td>
                    <td className='td-primary'>9</td>
                    <td className='td-primary'>0</td>
                  </tr>
                  <tr className='border'>
                    <td className='td-primary'>
                      <Checkbox></Checkbox>
                    </td>
                    <td className='td-primary'>Skilled Nurse</td>
                    <td className='td-primary'>9</td>
                    <td className='td-primary'>0</td>
                  </tr>
                </tbody>
              </table>

              <div className='verdana13 mt-3'>
                <Checkbox>
                  <span className='verdana13'>Decline Referral</span>
                </Checkbox>
                <br />
                <Checkbox defaultChecked>
                  <span className='verdana13'>Continue Referral</span>
                </Checkbox>
                <br />
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
  )
}

export default CreateReferralForm

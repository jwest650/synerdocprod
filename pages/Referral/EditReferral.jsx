import { Select, Checkbox } from '@chakra-ui/react'
import { useState } from 'react'
import AddReferralSourceContactModal from './AddReferralSourceContactModal'
import FindReferralSourceModal from './FindReferralSourceModal'

const EditReferral = () => {
  let data = [1, 1, 1, 1]
  const [openFindReferral, setOpenFindReferral] = useState(false)
  const [openAddReferralContact, setOpenAddReferralContact] = useState(false)

  return (
    <div>
      <section>
        <hr />
        <h1 className='verdana18 mt-3 font-bold capitalize text-black dark:text-white'>
          Edit Referral - Nick Dadzi
        </h1>
        <hr />
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
          <div className='my-2 flex '>
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
          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Referral Phone:
            </p>
            <p className='verdana13 text-gray-500'>w: (3434)-343445</p>
          </div>
          <div className='my-2 -mt-7 flex '>
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

          <div className='my-2 flex '>
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
          <div className='my-2 flex '>
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
          <div className=' flex items-center border-b'>
            <h1 className='verdana16  font-bold'>Referral Source Contact</h1>

            <div className='ml-7'>
              <button
                onClick={() => setOpenAddReferralContact(true)}
                className='btn-primary'
              >
                add referral source contact
              </button>
            </div>
          </div>
          <div className='my-2 flex  '>
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
          </div>

          <div className='my-2 flex  '>
            <p className='verdana13 mr-3 w-[200px]  text-right font-semibold'>
              Phone 1:
            </p>
            <div className='flex  '>
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
          <div className='my-2 flex '>
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
          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Email:
            </p>
            <div>
              <input className='input-primary' size={'xs'} />
            </div>
          </div>

          <div className='my-2 flex '>
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
      <section id='information'>
        <div className=' py-3 '>
          <h1 className='verdana16 mt-8 border-b text-2xl font-bold'>
            Initial Referral Information
          </h1>
          {/* <hr /> */}
          <div className='my-2 flex '>
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
          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Referral Date:
            </p>
            <div>
              <input className='input-primary' size={'xs'} type='date' />
            </div>
          </div>

          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Requested start of care:
            </p>
            <div>
              <input className='input-primary' size={'xs'} type='date' />
            </div>
          </div>

          <div className='my-2 flex '>
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

          <div className='my-2 flex '>
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

          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Zip Code:
            </p>
            <div>
              <input className='input-primary' type='text' value={1234} />
            </div>
          </div>

          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Referral Date:
            </p>
            <div>
              <input className='input-primary' type='date' value={1234} />
            </div>
          </div>

          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Requested Start Of Care:
            </p>
            <div>
              <input className='input-primary' type='date' value={1234} />
            </div>
          </div>

          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Transferred from another Home Health Agency:
            </p>
            <div>
              <Checkbox></Checkbox>
            </div>
          </div>

          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Primary Physician:
            </p>
            <div className='flex'>
              <input className='input-primary' type='text' />
              <button className='btn-primary ml-3'>Find Physician</button>
            </div>
          </div>

          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Primary Type:
            </p>
            <div className='flex'>
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

          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Physician Order:
            </p>
            <div className='flex'>
              <textarea rows={4} cols={50}></textarea>
            </div>
          </div>

          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Verbal/Written Order Date:
            </p>
            <div className='flex'>
              <input className='input-primary' type={'date'} />
            </div>
          </div>

          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Surgical Procedures:
            </p>
            <div className='flex'>
              <textarea rows={4} cols={50}></textarea>
            </div>
          </div>

          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Nutritional Requirements:
            </p>
            <div className='flex'>
              <textarea rows={4} cols={50}></textarea>
            </div>
          </div>

          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              DME & Supply Information:
            </p>
            <div className='flex'>
              <textarea rows={4} cols={50}></textarea>
            </div>
          </div>

          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Referring Diagnosis Code:
            </p>
            <div>
              <Select className='input-primary' size={'xs'}>
                <option value='F02 Dem in Oth dis class'>
                  F02 Dem in Oth dis class
                </option>
                <option value='F02 Dem in Oth dis class'>
                  F02 Dem in Oth dis class
                </option>
              </Select>
            </div>
          </div>

          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Referring Diagnosis:
            </p>
            <div className='flex'>
              <textarea rows={4} cols={50}></textarea>
            </div>
          </div>

          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Medications:
            </p>
            <div className='flex'>
              <textarea rows={4} cols={50}></textarea>
            </div>
          </div>

          <div className='my-2 flex '>
            <p className='verdana13 mr-3 w-[200px] text-right font-semibold'>
              Skills Required:
            </p>
            <div>
              <table className=' min-w-full overflow-auto'>
                <thead className='thead-primary'>
                  <tr>
                    <th className=' th-first'></th>
                    <th className=' th-last'>Skill</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border'>
                    <td className='td-primary'>
                      <Checkbox></Checkbox>
                    </td>
                    <td className='td-primary'>Skilled Nurse</td>
                  </tr>
                  <tr className='border'>
                    <td className='td-primary'>
                      <Checkbox></Checkbox>
                    </td>
                    <td className='td-primary'>Skilled Nurse</td>
                  </tr>
                  <tr className='border'>
                    <td className='td-primary'>
                      <Checkbox defaultChecked></Checkbox>
                    </td>
                    <td className='td-primary'>Skilled Nurse</td>
                  </tr>
                  <tr className='border'>
                    <td className='td-primary'>
                      <Checkbox></Checkbox>
                    </td>
                    <td className='td-primary'>Skilled Nurse</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='flex justify-end'>
          <button className='btn-primary'>Save</button>
          <button className='btn-primary ml-3'>Cancel</button>
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

export default EditReferral

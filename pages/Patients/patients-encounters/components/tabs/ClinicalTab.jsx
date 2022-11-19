import { Select } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import EditClinicalAssociateModal from './components/clinicaltab/EditClinicalAssociateModal'
import EditClinicalManagerModal from './components/clinicaltab/EditClinicalManagerModal'
import EditDisasterPlanModal from './components/clinicaltab/EditDisasterPlanModal'

const ClinicalTab = () => {
  const [openEditDisasterPlan, setOpenEditDisasterPlan] = useState(false)
  const [openEditClinical, setOpenEditClinical] = useState(false)
  const [openEditClinicalAssociate, setOpenEditClinicalAssociate] =
    useState(false)
  const data = [1, 1, 1, 1]

  return (
    <div className='verdana13 '>
      <article className='mt-5 grid min-h-[200px] grid-cols-2'>
        <section className='space-y-2 p-2'>
          <div className='flex'>
            <h1 className='verdana16  font-bold capitalize'>clinical team</h1>
            <button className='ml-3 flex items-center capitalize text-orange-500 underline'>
              <BsPlus className='verdana16  text-green-500' />
              add to clinical team
            </button>
          </div>
          <div className=' flex space-x-3'>
            <span
              className='cursor-pointer text-orange-500'
              onClick={() => setOpenEditClinical(true)}
            >
              [Edit]
            </span>
            <table className='mb-[30px] border-[#a0a0a0] text-xs capitalize'>
              <thead>
                <tr className='bg-primary-color text-white'>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    case manager
                  </th>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    manager phone
                  </th>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    clinical manager
                  </th>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    manager phone
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b-0'>
                  <td className='border-x border-[#a0a0a0]'>Bailey</td>
                  <td className=' border-x border-[#a0a0a0]'></td>
                  <td className=' border-x border-[#a0a0a0]'>
                    creamer heather
                  </td>
                  <td className=' border-x border-[#a0a0a0]'>
                    h:(318 )-222-345
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='mb-6 flex space-x-3'>
            <span
              className='cursor-pointer text-orange-500'
              onClick={() => setOpenEditClinicalAssociate(true)}
            >
              [Edit]
            </span>
            <table className=' border-[#a0a0a0] text-xs capitalize'>
              <thead>
                <tr className='bg-primary-color text-white'>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    Associate Name
                  </th>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    manager phone
                  </th>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    clinical manager
                  </th>
                  <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                    manager phone
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b-0'>
                  <td className='border-x border-[#a0a0a0]'>Bailey</td>
                  <td className=' border-x border-[#a0a0a0]'></td>
                  <td className=' border-x border-[#a0a0a0]'>
                    creamer heather
                  </td>
                  <td className=' border-x border-[#a0a0a0]'>
                    h:(318 )-222-345
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <p>no clinical team added</p>
          </div>
        </section>
        <section className='border-l-2 p-2'>
          <h1 className='verdana16  font-bold capitalize'>disciplines</h1>
          <div className='ml-10'>
            <p>physical therapist</p>
            <p>skilled nurse</p>
          </div>
        </section>
      </article>

      <article className='mt-5 grid min-h-[200px] grid-cols-2'>
        <section className='space-y-2 p-2'>
          <div className='flex'>
            <h1 className='verdana16  font-bold capitalize'>Specilty Skills</h1>
            <button className='ml-3 flex items-center capitalize text-orange-500 underline'>
              <BsPlus className='verdana16  text-green-500' />
              add Specialty Skills
            </button>
          </div>
          <div className='flex space-x-3'>{/* Specialty skills */}</div>

          <div>
            <p>no clinical team added</p>
          </div>
        </section>

        <section className='space-y-2 border-l-2 p-2 '>
          <div className='flex'>
            <h1 className='verdana16  font-bold capitalize'>Programs</h1>
            <button className='ml-3 flex items-center capitalize text-orange-500 underline'>
              <BsPlus className='verdana16  text-green-500' />
              add programs
            </button>
          </div>
          <div className='flex space-x-3'>{/* programs */}</div>

          <div>
            <p>no programs added</p>
          </div>
        </section>
      </article>

      <article className='mt-5 grid min-h-[200px] grid-cols-2'>
        <section className='space-y-2 p-2'>
          <div className='flex'>
            <h1 className='verdana16  font-bold capitalize'>Vendors</h1>

            <button className='ml-3 flex items-center capitalize text-orange-500 underline'>
              <BsPlus className='verdana16  text-green-500' />
              add Vendors
            </button>
          </div>
          <div className='flex space-x-3'>{/* vendors */}</div>
          <div>
            <p>no clinical team added</p>
          </div>
        </section>

        <section className='space-y-2 border-l-2 p-2'>
          <div className='flex'>
            <h1 className='verdana16  font-bold capitalize'>Vaccines</h1>
            <button className='ml-3 flex items-center capitalize text-orange-500 underline'>
              <BsPlus className='verdana16  text-green-500' />
              add Vaccines
            </button>
          </div>
          <div className='flex space-x-3'>{/* Vaccines */}</div>

          <div>
            <p>no Vaccines added</p>
          </div>
        </section>
      </article>

      <article className='mt-5 grid min-h-[200px] grid-cols-2'>
        <section className='space-y-2 p-2'>
          <div className='verdana13 w-full '>
            <h1 className='verdana18  font-bold capitalize text-black dark:text-white'>
              Disaster Plan
            </h1>
            <div className='flex'>
              <div>
                <p
                  className='cursor-pointer px-2 py-2 text-secondary-color underline'
                  onClick={() => setOpenEditDisasterPlan(true)}
                >
                  Edit
                </p>
              </div>

              <div className='flex w-[75%]'>
                <div className='w-[25%] border-r-2'>
                  <p className=' bg-primary-color px-2 py-1 text-white'>
                    Disaster Plan
                  </p>

                  <div>
                    <p>Patients Does Not Need Assistance</p>
                  </div>
                </div>
                <div className='w-[75%]'>
                  <p className=' bg-primary-color px-2 py-1 text-white'>
                    Plan Details
                  </p>

                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='space-y-2 border-l-2 p-2'>
          <div className='flex'>
            <h1 className='verdana16  font-bold capitalize'>
              Advance Directives
            </h1>
            <button className='ml-3 flex items-center capitalize text-orange-500 underline'>
              <BsPlus className='verdana16  text-green-500' />
              add Directives
            </button>
          </div>

          <div className='flex'>
            <div>
              <p
                className='cursor-pointer px-2 py-2 text-secondary-color underline'
                onClick={() => setOpenEditDisasterPlan(true)}
              >
                Edit
              </p>
            </div>

            <div className='w-[75%]'>
              <table>
                <thead className='thead-primary'>
                  <tr>
                    <th className='th-first '>Advance Directives</th>
                    <th className='th-middle'>Low Vitals</th>
                    <th className='th-middle'></th>
                    <th className='th-last'></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => (
                    <tr
                      key={i}
                      className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                    >
                      <td className='td-primary'>James Gordon</td>
                      <td className='td-primary'>James Gordon</td>
                      <td className='td-primary'>James Gordon</td>
                      <td className='td-primary'>James Gordon</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </article>

      <article className='mt-5 grid min-h-[200px] grid-cols-2'>
        <section className='space-y-2 p-2'>
          <div className='flex'>
            <h1 className='verdana16  font-bold capitalize'>
              Consent and Notices
            </h1>

            <button className='ml-3 flex items-center capitalize text-orange-500 underline'>
              <BsPlus className='verdana16  text-green-500' />
              add consent Notice
            </button>
          </div>

          <div className='flex'>
            <div>
              <p
                className='cursor-pointer px-2 py-2 text-secondary-color underline'
                onClick={() => setOpenEditDisasterPlan(true)}
              >
                Edit
              </p>
            </div>

            <div className=' w-[75%]'>
              <table>
                <thead className='thead-primary'>
                  <tr>
                    <th className='th-first '>Concent Notice</th>
                    <th className='th-middle'>Low Vitals</th>
                    <th className='th-middle'>High Vitals</th>
                    <th className='th-middle'></th>
                    <th className='th-last'></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => (
                    <tr
                      key={i}
                      className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                    >
                      <td className='td-primary'>James Gordon</td>
                      <td className='td-primary'>James Gordon</td>
                      <td className='td-primary'>James Gordon</td>
                      <td className='td-primary'>James Gordon</td>
                      <td className='td-primary'>James Gordon</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className='space-y-2 border-l-2 p-2'>
          <div className='flex'>
            <h1 className='verdana16  font-bold capitalize'>DME</h1>
            <button className='ml-3 flex items-center capitalize text-orange-500 underline'>
              <BsPlus className='verdana16  text-green-500' />
              add DME
            </button>
          </div>

          <div className='flex'>
            <div>
              {/* <p
                className='cursor-pointer px-2 py-2 text-secondary-color underline'
                onClick={() => setOpenEditDisasterPlan(true)}
              >
                Edit
              </p> */}
            </div>

            <div className='w-[75%]'>
              <table>
                <thead className='thead-primary'>
                  <tr>
                    <th className='th-first '>DME</th>
                    <th className='th-middle'>Low Vitals</th>
                    <th className='th-middle'>High Vitals</th>
                    <th className='th-middle'></th>
                    <th className='th-last'></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => (
                    <tr
                      key={i}
                      className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                    >
                      <td className='td-primary'>James Gordon</td>
                      <td className='td-primary'>James Gordon</td>
                      <td className='td-primary'>James Gordon</td>
                      <td className='td-primary'>James Gordon</td>
                      <td className='td-primary'>James Gordon</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </article>

      <article className='mt-5 grid min-h-[200px] grid-cols-2'>
        <section className='space-y-2 p-2'>
          <div className='flex'>
            <h1 className='verdana16  font-bold capitalize'>
              Vital sign Parameters
            </h1>

            <button className='ml-3 flex items-center capitalize text-orange-500 underline'>
              <BsPlus className='verdana16  text-green-500' />
              add Vitals
            </button>
          </div>
          <div>
            <table>
              <thead className='thead-primary'>
                <tr>
                  <th className='th-first w-[60%]'>Vital Parameters</th>
                  <th className='th-middle'>Low Vitals</th>
                  <th className='th-middle'>High Vitals</th>
                  <th className='th-middle'></th>
                  <th className='th-last'></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, i) => (
                  <tr
                    key={i}
                    className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                  >
                    <td className='td-primary'>James Gordon</td>
                    <td className='td-primary'>James Gordon</td>
                    <td className='td-primary'>James Gordon</td>
                    <td className='td-primary'>James Gordon</td>
                    <td className='td-primary'>James Gordon</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className='space-y-2 border-l-2 p-2'>
          <div className='flex'>
            <h1 className='verdana16  font-bold capitalize'>Allergies</h1>
            <button className='ml-3 flex items-center capitalize text-orange-500 underline'>
              <BsPlus className='verdana16  text-green-500' />
              add Allergies
            </button>
          </div>

          <div>
            <table>
              <thead className='thead-primary'>
                <tr>
                  <th className='th-first '>Allergy Parameters</th>
                  <th className='th-middle'></th>
                  <th className='th-middle'></th>
                  <th className='th-middle'></th>
                  <th className='th-middle'></th>
                  <th className='th-middle'></th>
                  <th className='th-middle'></th>
                  <th className='th-last'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='td-primary'></td>
                  <td className='td-primary'></td>
                  <td className='td-primary'></td>
                  <td className='td-primary'></td>
                  <td className='td-primary'></td>
                  <td className='td-primary'>
                    <Select size='xs' css={{ backgroundColor: '#ccc' }}>
                      <option>All</option>
                      <option>All</option>
                      <option>All</option>
                      <option>All</option>
                    </Select>
                  </td>
                  <td className='td-primary'></td>
                  <td className='td-primary'></td>
                </tr>
                {data.map((item, i) => (
                  <tr
                    key={i}
                    className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                  >
                    <td className='td-primary'>James Gordon</td>
                    <td className='td-primary'>James Gordon</td>
                    <td className='td-primary'>James Gordon</td>
                    <td className='td-primary'>James Gordon</td>
                    <td className='td-primary'>James Gordon</td>
                    <td className='td-primary'>James Gordon</td>
                    <td className='td-primary'>James Gordon</td>
                    <td className='td-primary'>James Gordon</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </article>

      {/* EditDisasterPlan Modal */}
      <EditDisasterPlanModal
        openEditDisasterPlan={openEditDisasterPlan}
        setOpenEditDisasterPlan={setOpenEditDisasterPlan}
      />
      <EditClinicalManagerModal
        openEditClinical={openEditClinical}
        setOpenEditClinical={setOpenEditClinical}
      />
      <EditClinicalAssociateModal
        openEditClinicalAssociate={openEditClinicalAssociate}
        setOpenEditClinicalAssociate={setOpenEditClinicalAssociate}
      />
    </div>
  )
}

export default ClinicalTab

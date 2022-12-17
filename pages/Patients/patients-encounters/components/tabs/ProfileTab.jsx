import Link from 'next/link'
import React from 'react'
import { FcInfo } from 'react-icons/fc'
import { TfiPencilAlt } from 'react-icons/tfi'
import { GrDocumentTime } from 'react-icons/gr'
import { useState } from 'react'
import EditEncounterModal from './components/profile/EditEncounterModal'
import EditPersonalModal from './components/profile/EditPersonalModal'

const ProfileTab = () => {
  const [openEditEncounter, setOpenEditEncounter] = useState(false)
  const [openEditPersonal, setOpenEditPersonal] = useState(false)

  return (
    <div>
      <section className='verdana13 flex justify-between '>
        <div className='w-[50%] border-r-2 p-2'>
          <div className='flex  py-2'>
            <h1 className='verdana16  text-black'>Persosnal</h1>
          </div>
          <div className='flex '>
            <div className='mr-2 border-r-2'>
              <div>
                <p
                  className=' mr-2 cursor-pointer text-secondary-color  underline'
                  onClick={() => setOpenEditPersonal(true)}
                >
                  Edit
                </p>
              </div>
            </div>

            <div>
              <div className='w-[100%] px-3'>
                <div className='my-2 flex'>
                  <p className='w-[150px] text-right font-semibold'>Name: </p>
                  <p className='ml-3'>Smith Joseph</p>
                </div>
                <div className='my-2 flex'>
                  <p className='w-[150px] text-right font-semibold'>
                    {' '}
                    Birth Date:{' '}
                  </p>
                  <p className='ml-3'>24/12/1960</p>
                </div>
                <div className='my-2 flex'>
                  <p className='w-[150px] text-right font-semibold'>Age: </p>
                  <p className='ml-3'>65</p>
                </div>
                <div className='my-2 flex'>
                  <p className='w-[150px] text-right font-semibold'>Gender: </p>
                  <p className='ml-3'>Male</p>
                </div>
                <div className='my-2 flex'>
                  <p className='w-[150px] text-right font-semibold'>Race: </p>
                  <p className='ml-3'>White</p>
                </div>
                <div className='my-2 flex'>
                  <p className='w-[150px] text-right font-semibold'>
                    Marital Status:{' '}
                  </p>
                  <p className='ml-3'>Single</p>
                </div>
                <div className='my-2 flex'>
                  <p className='w-[150px] text-right font-semibold'>Email: </p>
                  <p className='ml-3'>jsmith@exampple.com</p>
                </div>
                <div className='my-2 flex'>
                  <p className='w-[150px] text-right font-semibold'>
                    Medical Record:{' '}
                  </p>
                  <p className='ml-3'>6</p>
                </div>
                <div className='my-2 flex'>
                  <p className='w-[150px] text-right font-semibold'>
                    Social Security:{' '}
                  </p>
                  <p className='ml-3'></p>
                </div>
              </div>
            </div>
          </div>
          <div className='py-2'>
            <h1 className='verdana16  text-black'>Missing Fields</h1>
            <div className='flex'>
              <div className='mr-4'>
                <FcInfo />
              </div>
              <div className='h-[100px] overflow-y-auto border-l-2 px-3'>
                <p className='text-secondary-color underline'>Missing Phone</p>
                <p className='text-secondary-color underline'>
                  Missing Patients Address
                </p>
                <p className='text-secondary-color underline'>Missing Gender</p>
                <p className='text-secondary-color underline'>Missing Race</p>
                <p className='text-secondary-color underline'>
                  Missing Birth Date
                </p>
                <p className='text-secondary-color underline'>Missing Age</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[50%] border-l-4 p-2'>
          <div className='flex  py-2'>
            <h1 className='verdana16  text-black'>Current Encounter</h1>
          </div>
          <div className='flex '>
            <div className='mr-2 border-r-2'>
              <div>
                <p
                  className=' mr-2 cursor-pointer text-secondary-color underline'
                  onClick={() => setOpenEditEncounter(true)}
                >
                  Edit
                </p>
              </div>
            </div>
            <div className='w-[100%] px-3'>
              <div className='my-2 flex'>
                <p className='w-[150px] text-right font-semibold'>Status: </p>
                <p className='ml-3 flex items-center text-green-600'>
                  pending{' '}
                  <span className='ml-3 text-yellow-600'>
                    <GrDocumentTime />
                  </span>
                </p>
              </div>
              <div className='my-2 flex'>
                <p className='w-[150px] text-right font-semibold'>
                  Encounter Number:{' '}
                </p>
                <p className='ml-3'></p>
              </div>
              <div className='my-2 flex'>
                <p className='w-[150px] text-right font-semibold'>
                  Verbal SOC:{' '}
                </p>
                <p className='ml-3'></p>
              </div>
              <div className='my-2 flex'>
                <p className='w-[150px] text-right font-semibold'>
                  Start of Care:{' '}
                </p>
                <p className='ml-3'></p>
              </div>
              <div className='my-2 flex'>
                <p className='w-[150px] text-right font-semibold'>
                  Residence:{' '}
                </p>
                <p className='ml-3'></p>
              </div>
              <div className='my-2 flex'>
                <p className='w-[150px] text-right font-semibold'>Country: </p>
                <p className='items centerml-3 flex'>
                  Benevile
                  <span className='ml-3 text-yellow-600'>
                    <TfiPencilAlt />
                  </span>
                </p>
              </div>
              <div className='my-2 flex'>
                <p className='w-[150px] text-right font-semibold'>
                  Referral Source:{' '}
                </p>
                <p className='ml-3'></p>
              </div>
              <div className='my-2 flex'>
                <p className='w-[150px] text-right font-semibold'>
                  Referral Phone:{' '}
                </p>
                <p className='ml-3'></p>
              </div>
              <div className='my-2 flex'>
                <p className='w-[150px] text-right font-semibold'>
                  Admission Source:{' '}
                </p>
                <p className='ml-3'></p>
              </div>
              <div className='my-2 flex'>
                <p className='w-[150px] text-right font-semibold'>
                  Admission Type:{' '}
                </p>
                <p className='ml-3'></p>
              </div>
              <div className='my-2 flex'>
                <p className='w-[150px] text-right font-semibold'>
                  Agency Type:{' '}
                </p>
                <p className='ml-3'></p>
              </div>
              <div className='my-2 flex'>
                <p className='w-[150px] text-right font-semibold'>
                  Agency Name:{' '}
                </p>
                <p className='ml-3'></p>
              </div>
              <div className='my-2 flex'>
                <p className='w-[150px] text-right font-semibold'>
                  Excude form Survey:{' '}
                </p>
                <p className='ml-3'></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <EditEncounterModal
        openEditEncounter={openEditEncounter}
        setOpenEditEncounter={setOpenEditEncounter}
      />
      <EditPersonalModal
        openEditPersonal={openEditPersonal}
        setOpenEditPersonal={setOpenEditPersonal}
      />
    </div>
  )
}

export default ProfileTab

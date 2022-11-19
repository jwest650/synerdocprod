import { useState } from 'react'
import { FaBook } from 'react-icons/fa'
import { GrDocumentTime } from 'react-icons/gr'
import { HiDocumentSearch } from 'react-icons/hi'
import ActivatePatientModal from './ActivatePatientModal'
import ScheduleServiceModal from './ScheduleServiceModal'

const EncounterHeader = () => {
  const [openScheduleService, setOpenScheduleService] = useState(false)
  const [openActivatePatient, setOpenActivatePatient] = useState(false)

  return (
    <div className='verdana13 '>
      <div className='flex w-full items-center justify-between'>
        <div className='flex items-center gap-8 py-3'>
          <h2 className='text-lg font-semibold tracking-wide'>Smith Joseph</h2>
          <div className='flex '>
            <div className='flex'>
              <p
                className='verdana13 ml-3  cursor-pointer text-secondary-color underline'
                onClick={() => setOpenActivatePatient(true)}
              >
                [Activate Patient]
              </p>
              <p className='verdana13 ml-3  cursor-pointer text-secondary-color underline'>
                [Decline Referral]
              </p>
              <p
                className='verdana13 ml-3  cursor-pointer text-secondary-color underline'
                onClick={() => setOpenScheduleService(true)}
              >
                [schedule initial service]
              </p>
              <p className='verdana13 ml-3  cursor-pointer text-secondary-color underline'>
                [Patient Fact Report]
              </p>
            </div>
          </div>
        </div>
        <div className='space-x-5'>
          <span className='cursor-pointer text-xs font-semibold tracking-wide text-blue-800 underline'>
            WIKI Help
          </span>
          <span className='text-base font-extrabold text-green-800'>
            Encounter
          </span>
        </div>
      </div>

      <section>
        <div className='flex '>
          <div className='w-[33%]'>
            <div className='flex py-1'>
              <div className='mr-3 w-[200px] text-right'>
                <p className='font-semibold'>Patient Phone: </p>
              </div>
              <div>
                <p className='flex items-center'>
                  <FaBook />
                  H: (4545 5656 453)
                </p>
              </div>
            </div>
            <div className='flex py-1'>
              <div className='mr-3 w-[200px] text-right'>
                <p className='font-semibold'>Primary Physician: </p>
              </div>
              <div>
                <p>Hernandez Robert</p>
              </div>
            </div>
            <div className='flex py-1'>
              <div className='mr-3 w-[200px] text-right'>
                <p className='font-semibold'>Primary Physician Phone: </p>
              </div>
              <div>
                <p className='flex items-center'>
                  <FaBook />
                  W: (4545 5656 453)
                </p>
              </div>
            </div>
            <div className='flex py-1'>
              <div className='mr-3 w-[200px] text-right'>
                <p className='font-semibold'>Allergies: </p>
              </div>
              <div>
                <p></p>
              </div>
            </div>
            <div className='flex py-1'>
              <div className='mr-3 w-[200px] text-right'>
                <p className='font-semibold'>Advance Directives: </p>
              </div>
              <div>
                <p></p>
              </div>
            </div>
          </div>

          <div className='w-[33%]'>
            <div className='flex py-1'>
              <div className='mr-3 w-[200px] text-right'>
                <p className='font-semibold'>Agency: </p>
              </div>
              <div>
                <p>Homecare</p>
              </div>
            </div>
            <div className='flex py-1'>
              <div className='mr-3 w-[200px] text-right'>
                <p className='font-semibold'>Start of Care: </p>
              </div>
              <div>
                <p>23/12/12</p>
              </div>
            </div>

            <div className='flex py-1'>
              <div className='mr-3 w-[200px] text-right'>
                <p className='font-semibold'>Primary Diagnosis: </p>
              </div>
              <div>
                <p className='verdana13 flex w-[200px]'>
                  <HiDocumentSearch className='verdana18' />
                  150.25 Acute on chronic systolic heart failure
                </p>
              </div>
            </div>
            <div className='flex py-1'>
              <div className='mr-3 w-[200px] text-right'>
                <p className='font-semibold'>Disaster Level: </p>
              </div>
              <div>
                <p></p>
              </div>
            </div>
          </div>

          <div className='w-[33%]'>
            <div className='flex py-1'>
              <div className='mr-3 w-[200px] text-right'>
                <p className='font-semibold'>Status: </p>
              </div>
              <div>
                <p className='flex items-center text-green-700'>
                  Pending{' '}
                  <span className='ml-3 text-yellow-600'>
                    <GrDocumentTime />
                  </span>
                </p>
              </div>
            </div>
            <div className='flex py-1'>
              <div className='mr-3 w-[200px] text-right'>
                <p className='font-semibold'>Discharge Date: </p>
              </div>
              <div>
                <p>3/12/1990 </p>
              </div>
            </div>

            <div className='flex items-end'>
              <div className='flex '>
                <div className='mr-3 w-[200px] text-right'>
                  <p className='font-semibold'>DOB: </p>
                </div>

                <div className='flex'>
                  <p>3/12/1990 </p>
                </div>

                <div className='ml-3 flex'>
                  <p className='mr-3'>Age: </p>
                  <span>90</span>
                </div>
              </div>
            </div>
            <div className='flex py-1'>
              <div className='mr-3 w-[200px] text-right'>
                <p className='font-semibold'>DNR: </p>
              </div>
              <div>
                <p> </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Modals */}
      <ScheduleServiceModal
        openScheduleService={openScheduleService}
        setOpenScheduleService={setOpenScheduleService}
      />
      <ActivatePatientModal
        openActivatePatient={openActivatePatient}
        setOpenActivatePatient={setOpenActivatePatient}
      />
    </div>
  )
}

export default EncounterHeader

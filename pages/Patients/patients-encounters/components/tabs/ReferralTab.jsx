import React from 'react'
import { HiPrinter } from 'react-icons/hi'
import { FaFax } from 'react-icons/fa'
import { BsPlus } from 'react-icons/bs'
import Link from 'next/link'
import { useState } from 'react'
import EditReferralOrderTracking from './components/referraltab/EditReferralOrderTracking'
import FaceToFaceInformation from './components/referraltab/FaceToFaceInformation'
import FindPhysicianModal from './components/referraltab/FindPhysicianModal'

const ReferralTab = () => {
  const [openFindPhysician, setOpenFindPhysician] = useState(false)
  const [openEditOrderTracking, setOpenEditOrderTracking] = useState(false)
  const [openFaceToFaceInformation, setOpenFaceToFaceInformation] =
    useState(false)
  return (
    <div className='verdana13  '>
      <div className='flex'>
        <section className='  w-[60%]'>
          <header className='flex items-center space-x-5 capitalize'>
            <button className='btn btn-primary'>
              <div className='flex items-center'>
                <HiPrinter />
                <h1>print referral order</h1>
              </div>
            </button>
            <button className='btn btn-primary'>
              <div className='flex items-center'>
                <FaFax />
                <h1>fax referral order</h1>
              </div>
            </button>
            <button className='btn btn-primary'>
              <div className='flex items-center'>
                <BsPlus className='verdana16  text-green-500' />

                <h1>upload signed referral</h1>
              </div>
            </button>
          </header>
          <article className='mt-[50px] space-y-2 capitalize'>
            <h1 className='verdana16  font-bold'>referral source</h1>
            <div className='flex'>
              <Link href='/Referral/EditReferral'>
                <p className=' cursor-pointer px-2 text-orange-500'>[edit]</p>
              </Link>
              <div className='border-l-2 px-2'>
                <div className='flex space-x-3'>
                  <h1 className='mr-2 w-[200px] text-right font-bold'>name:</h1>
                  <p>ortiz</p>
                </div>
                <div className='flex space-x-3 capitalize'>
                  <h1 className='mr-2 w-[200px] text-right font-bold'>
                    phone:
                  </h1>
                  <p>(318) 331 77772</p>
                </div>
                <div className='flex space-x-3 capitalize'>
                  <h1 className='mr-2 w-[200px] text-right font-bold'>
                    email:
                  </h1>
                  <p>ortiz@gmail.com</p>
                </div>
                <div className='flex space-x-3 capitalize'>
                  <h1 className='mr-2 w-[200px] text-right font-bold'>
                    method:
                  </h1>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className='space-y-2 border-l-2 px-3 pt-4 capitalize'>
          <h1 classeName='font-bold verdana16 '>referral contact</h1>
          <div className='flex'>
            <Link href='/Referral/EditReferral'>
              <p className=' cursor-pointer px-2 text-orange-500'>[edit]</p>
            </Link>
            <div className='border-l-2 text-right'>
              <div>
                <h1 className='mr-2 w-[200px] text-right font-bold'>name:</h1>
              </div>
              <div>
                <h1 className='mr-2 w-[200px] text-right font-bold'>phone1:</h1>
              </div>
              <div>
                <h1 className='mr-2 w-[200px] text-right font-bold'>phone2:</h1>
              </div>
              <div>
                <h1 className='mr-2 w-[200px] text-right font-bold'>email:</h1>
              </div>
              <div>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  information:
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <article className='mt-[50px] space-y-2 capitalize'>
          <h1 className='verdana16  font-bold'>referral order tracking</h1>
          <div className='flex'>
            <p
              className=' cursor-pointer px-2 text-orange-500'
              onClick={() => setOpenEditOrderTracking(true)}
            >
              [edit]
            </p>

            <div className='border-l-2 px-2 pl-[100px] text-right'>
              <div className='flex space-x-3'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  sent data:
                </h1>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  recieve date:
                </h1>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  recieve not needed:
                </h1>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  date changed by user:
                </h1>
              </div>
            </div>
          </div>
        </article>
        <article className='mt-[50px] space-y-2 capitalize'>
          <h1 className='verdana16  font-bold'>Referral Information</h1>
          <div className='flex'>
            <Link href='/Referral/EditReferral/#information'>
              <p className=' cursor-pointer px-2 text-orange-500'>[edit]</p>
            </Link>
            <div className='border-l-2 px-2 pl-[150px] text-right'>
              <div className='flex space-x-3'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Zip Code:
                </h1>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Payer Category:
                </h1>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Disciplines:
                </h1>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Referral Date:
                </h1>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Requested Start of Care:
                </h1>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Admission Source:
                </h1>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Admission Type:
                </h1>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Primary Physician:
                </h1>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Primary Physician Type:
                </h1>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Physician Orders:
                </h1>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Verbal/Written Order Date:
                </h1>
              </div>

              <div className='mt-[50px] flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Surgical Procedures:
                </h1>
                <div className=' min-w-[350px] border-b-2 border-dotted text-left'>
                  {/* <p>the</p> */}
                </div>
              </div>
              <div className=' flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Nutritional Requirement:
                </h1>
                <div className=' min-w-[350px] border-b-2 border-dotted text-left'>
                  {/* <p>the</p> */}
                </div>
              </div>
              <div className=' flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  DME & Supply Information:
                </h1>
                <div className=' min-w-[350px] border-b-2 border-dotted text-left'>
                  {/* <p>the</p> */}
                </div>
              </div>
              <div className=' flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Regerring Diagnosis Code:
                </h1>
                <div className=' min-w-[350px]  text-left'>
                  {/* <p>the</p> */}
                </div>
              </div>
              <div className=' flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Regerring Diagnosis:
                </h1>
                <div className=' min-w-[350px] border-b-2 border-dotted text-left'>
                  {/* <p>the</p> */}
                </div>
              </div>
              <div className=' flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Medications:
                </h1>
                <div className=' min-w-[350px] border-b-2 border-dotted text-left'>
                  {/* <p>the</p> */}
                </div>
              </div>
              <div className=' flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Skills Required:
                </h1>
                <div className=' min-w-[350px] text-left'>
                  {/* <p>the</p> */}
                </div>
              </div>
              <div className=' flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Created By:
                </h1>
                <div className=' min-w-[350px] text-left'>
                  <p>Lucy Greek</p>
                </div>
              </div>
              <div className=' flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Modified By:
                </h1>
                <div className=' min-w-[350px] text-left'>
                  <p>Mark Greek</p>
                </div>
              </div>
              <div className=' flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Transferred from another Home Health Agency:
                </h1>
                <div className=' min-w-[350px] text-left'>
                  <p>No</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className='mt-[50px]  '>
          <h1 className='verdana16  font-bold'>
            Face To Face Referral Information
          </h1>
          <div className='flex'>
            <div className='border-r-2 px-2'>
              <p
                className=' cursor-pointer px-2 text-orange-500'
                onClick={() => setOpenFaceToFaceInformation(true)}
              >
                [edit]
              </p>
              <p className=' '>Manage F2F+</p>
            </div>
            <div className=' ml-[150px] px-2 '>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>Doctor:</h1>
                <div className='flex min-w-[500px] items-center'>
                  <input
                    type='text'
                    className='input-primary mr-2 w-[200px]'
                    value={'James, Grace'}
                  />
                  <button
                    className='btn-primary w-[200px] cursor-pointer'
                    onClick={() => setOpenFindPhysician(true)}
                  >
                    Change face to face Doctor
                  </button>
                </div>
              </div>

              <div className='flex space-x-3'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Visit Date:
                </h1>
                <div></div>
              </div>
              <div className='flex space-x-3'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Visit Comment:
                </h1>
                <div></div>
              </div>
              <div className='flex space-x-3'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>Type:</h1>
                <div></div>
              </div>
              <div className='flex space-x-3'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Physician or Allowed Practitioner Attestation:
                </h1>
                <div></div>
              </div>
              <div className='flex space-x-3'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Clinical Findings:
                </h1>
                <div></div>
              </div>
              <div className='flex space-x-3'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Services:
                </h1>
                <div></div>
              </div>
              <div className='flex space-x-3'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Homebound Reason:
                </h1>
                <div></div>
              </div>
              <div className='flex space-x-3'>
                <h1 className='mr-2 w-[200px] text-right font-bold'>
                  Other Homebound:
                </h1>
                <div></div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <EditReferralOrderTracking
        openEditOrderTracking={openEditOrderTracking}
        setOpenEditOrderTracking={setOpenEditOrderTracking}
      />
      <FaceToFaceInformation
        openFaceToFaceInformation={openFaceToFaceInformation}
        setOpenFaceToFaceInformation={setOpenFaceToFaceInformation}
      />
      <FindPhysicianModal
        openFindPhysician={openFindPhysician}
        setOpenFindPhysician={setOpenFindPhysician}
      />
    </div>
  )
}

export default ReferralTab

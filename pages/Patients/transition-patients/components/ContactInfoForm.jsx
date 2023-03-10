import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import AddAncillaryPhoneModal from './AddAncillaryPhoneModal'
import AddContactInfoModal from './AddContactInfoModal'
import AddPatientContactModal from './AddPatientContactModal'
import AddServiceFacilityModal from './AddServiceFacilityModal'

const ContactInfoForm = () => {
  const [openAddContactInfo, setOpenAddContactInfo] = useState(false)
  const [openAddServiceFacility, setOpenAddServiceFacility] = useState(false)
  const [openPatientContact, setOpenPatientContact] = useState(false)
  const [openAddAncillaryPhone, setOpenAddAncillaryPhone] = useState(false)

  return (
    <div className='verdana13 '>
      <h1 className='verdana18  font-bold capitalize text-black dark:text-white'>
        Add Or Edit Contact Info - Nick Jones
      </h1>
      <hr />
      <p>add or edit the contact info of the selected patient</p>

      <div className=' my-4 grid grid-flow-col grid-rows-2 gap-4'>
        <div className='h-[200px] border-r-2 p-2'>
          <div className='flex justify-between py-2'>
            <h1 className='verdana16  text-black'>Address/Phone Info</h1>
            <button
              className='rounded border bg-secondary-color px-3 text-xs text-white'
              onClick={() => setOpenAddContactInfo(true)}
            >
              Add Contact Info
            </button>
            <button
              className='rounded border bg-secondary-color px-3 text-xs text-white'
              onClick={() => setOpenAddServiceFacility(true)}
            >
              Add Service Facility
            </button>
          </div>
          <div className='flex border-t-4'>
            <div className='w-[100px] border-r-2'>
              <Link href='#' color='orange'>
                <p className=' text-secondary-color underline'>Edit</p>
              </Link>
              <br />
              <Link href='#' color='orange'>
                <p className=' text-secondary-color underline'>Delete</p>
              </Link>
            </div>
            <div className=' flex w-[100%] justify-between px-3'>
              <div>
                <h1>Home Address</h1>
                <p>21 street Accra,Ghana</p>
              </div>

              <div>
                <h1>Phone</h1>
                <p>233-4545-6564</p>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[200px] border-r-2 p-2'>
          <div className='flex  py-2'>
            <h1 className='verdana16  text-black'>Patient Contact</h1>
            <button
              onClick={() => setOpenPatientContact(true)}
              className='ml-3 rounded border bg-secondary-color px-3 text-xs text-white'
            >
              Add Patient Contact
            </button>
          </div>
          <div className='flex border-t-4'>
            <div className='w-[100px] border-r-2'>
              <Link href='#' color='orange'>
                <p className=' text-secondary-color underline'>Edit</p>
              </Link>
              <br />
              <Link href='#' color='orange'>
                <p className=' text-secondary-color underline'>Delete</p>
              </Link>
            </div>
            <div className='w-[100%]'>
              <div className=' flex w-[100%] justify-between px-3'>
                <div>
                  <h1>Nick Jones</h1>
                  <p>primary care giver</p>
                </div>

                <div>
                  <h1>Brother</h1>
                </div>
              </div>

              <div className=' flex w-[100%] justify-between p-3'>
                <div>
                  <h1>Home Address</h1>
                  <p>21 street Accra,Ghana</p>
                </div>

                <div>
                  <h1>Phone</h1>
                  <p>233-4545-6564</p>
                </div>
              </div>

              <div className=' flex w-[100%] justify-between px-3'>
                <div>
                  <h1>Email</h1>
                  <p>Please add email</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[200px] border-r-2 p-2'>
          <div className='flex  py-2'>
            <h1 className='verdana16  text-black'>Ancillary Phone Info</h1>
            <button
              onClick={() => setOpenAddAncillaryPhone(true)}
              className='ml-3 rounded border bg-secondary-color px-3 text-xs text-white'
            >
              Add Phone
            </button>
          </div>
          <div className='flex border-t-4'>
            <div className='w-[100px] border-r-2'>
              <Link href='#' color='orange'>
                <p className=' text-secondary-color underline'>Edit</p>
              </Link>
              <br />
              <Link href='#' color='orange'>
                <p className=' text-secondary-color underline'>Delete</p>
              </Link>
            </div>
            <div className='w-[100%] px-3'>
              <div>
                <p>Home: 233-4545-6564</p>
                <p>Desc: Neighbors phone</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AddContactInfoModal
        openAddContactInfo={openAddContactInfo}
        setOpenAddContactInfo={setOpenAddContactInfo}
      />

      <AddServiceFacilityModal
        openAddServiceFacility={openAddServiceFacility}
        setOpenAddServiceFacility={setOpenAddServiceFacility}
      />
      <AddPatientContactModal
        openPatientContact={openPatientContact}
        setOpenPatientContact={setOpenPatientContact}
      />
      <AddAncillaryPhoneModal
        openAddAncillaryPhone={openAddAncillaryPhone}
        setOpenAddAncillaryPhone={setOpenAddAncillaryPhone}
      />
    </div>
  )
}

export default ContactInfoForm

import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import AddAddressModal from './components/physiciantab/AddAddressModal'
import AddFacilityStay from './components/physiciantab/AddFacilityStay'
import AddServiceFacilityModal from './components/physiciantab/AddServiceFacilityModal'
import EditEncounterPhysicianModal from './components/physiciantab/EditEncounterPhysicianModal'
import FindPhysicianModal from './components/physiciantab/FindPhysicianModal'

const PhysFacTab = () => {
  const [openFindPhysician, setOpenFindPhysician] = useState(false)
  const [openAddFacilityStay, setOpenAddFacilityStay] = useState(false)
  const [openEditEncounterPhysician, setOpenEditEncounterPhysician] =
    useState(false)
  const [openAddAdress, setOpenAddAdress] = useState(false)

  return (
    <div className='verdana13  '>
      <div className='verdana13 grid grid-cols-2 '>
        <section className='space-y-3'>
          <header className='flex items-center space-x-5'>
            <h1 className=' verdana16  font-bold'>primary physicians</h1>
            <button
              className='btn-primary flex items-center capitalize '
              onClick={() => setOpenFindPhysician(true)}
            >
              <BsPlus className='verdana16  text-green-500' />
              add physicians
            </button>
          </header>
          <article className='mx-10 space-y-2 border-l-2 pl-5'>
            <div className='flex items-center'>
              <h1 className='mr-2 w-[150px] text-right font-bold'>name:</h1>
              <p>burma ortis</p>
            </div>
            <div className='flex items-center'>
              <h1 className='mr-2 w-[150px] text-right font-bold'>
                speciality:
              </h1>
            </div>
            <div className='flex items-center'>
              <h1 className='mr-2 w-[150px] text-right font-bold'>title:</h1>
              <p>medical doctor</p>
            </div>
            <div className='flex items-center'>
              <h1 className='mr-2 w-[150px] text-right font-bold'>type:</h1>
              <p
                className='cursor-pointer text-orange-600 underline'
                onClick={() => setOpenEditEncounterPhysician(true)}
              >
                certifying
              </p>
            </div>
            <div className='flex items-center'>
              <h1 className='mr-2 w-[150px] text-right font-bold'>group:</h1>
            </div>
            <div className='flex items-center'>
              <h1 className='mr-2 w-[150px] text-right font-bold'>email:</h1>
            </div>
            <div className='flex items-center'>
              <h1 className='mr-2 w-[150px] text-right font-bold'>phone:</h1>
              <p>(233)326675</p>
            </div>
            <div className='flex items-center'>
              <h1 className='mr-2 w-[150px] text-right font-bold'>npi:</h1>
              <p>12347654</p>
            </div>
            <div className='flex items-center'>
              <h1 className='mr-2 w-[150px] text-right font-bold'>Address:</h1>
              <p
                className='cursor-pointer text-orange-600 underline'
                onClick={() => setOpenAddAdress(true)}
              >
                No preferred physician address identify for orders
              </p>
            </div>
          </article>
        </section>
        <section className='space-y-3 border-l-2 p-2'>
          <div className='mb-[100px]'>
            <header className='flex items-center space-x-5'>
              <h1 className='verdana16 mr-2  font-bold'>
                last facility stay prior to soc
              </h1>
              <button
                className='btn-primary flex items-center capitalize'
                onClick={() => setOpenAddFacilityStay(true)}
              >
                <BsPlus className='verdana16  text-green-500' />
                add facility
              </button>
            </header>
            <p>no facility has been added to this encounter.</p>
          </div>

          <div className='mt-[100px]'>
            <header className='flex items-center space-x-5'>
              <h1 className='verdana16 mr-2  font-bold'>
                other facility stay prior to soc
              </h1>
              <button
                className='btn-primary flex items-center capitalize'
                onClick={() => setOpenAddFacilityStay(true)}
              >
                <BsPlus className='verdana16  text-green-500' />
                add facility
              </button>
            </header>

            <table className='w-full'>
              <thead className='thead-primary '>
                <tr>
                  <th className='th-first'>Facility Name</th>
                  <th className='th-middle'>Admit Date</th>
                  <th className='th-middle'>Discharge Date</th>
                  <th className='th-middle'>Comment</th>
                  <th className='th-middle'></th>
                  <th className='th-last'></th>
                </tr>
              </thead>
            </table>
            <p>no facility has been added to this encounter.</p>
          </div>
        </section>
      </div>

      <section>
        <div className='mt-[100px]'>
          <header className='flex items-center space-x-5'>
            <h1 className='verdana16 mr-2  font-bold'>other physicians</h1>
            {/* <button
              className='btn-primary flex items-center capitalize'
              onClick={() => setOpenFindPhysician(true)}
            >
              <BsPlus className='verdana16  text-green-500' />
              add physician
            </button> */}
          </header>

          <table className='w-full'>
            <thead className='thead-primary min-w-[600px]'>
              <tr>
                <th className='th-first'></th>
                <th className='th-middle'>Seq#</th>
                <th className='th-middle'>Physician Name</th>
                <th className='th-middle'>Doctor Title</th>
                <th className='th-middle'>Specialty</th>
                <th className='th-middle'>Type</th>
                <th className='th-middle'>Phone Number</th>
                <th className='th-middle'>NPI</th>
                <th className='th-middle'>Address</th>
                <th className='th-middle'></th>
                <th className='th-middle'></th>
                <th className='th-last'>Inactivated by</th>
              </tr>
            </thead>
          </table>
          <p>no physician found.</p>
        </div>
      </section>

      {/* Modals */}
      <FindPhysicianModal
        openFindPhysician={openFindPhysician}
        setOpenFindPhysician={setOpenFindPhysician}
      />
      <AddFacilityStay
        openAddFacilityStay={openAddFacilityStay}
        setOpenAddFacilityStay={setOpenAddFacilityStay}
      />

      <EditEncounterPhysicianModal
        openEditEncounterPhysician={openEditEncounterPhysician}
        setOpenEditEncounterPhysician={setOpenEditEncounterPhysician}
      />
      <AddAddressModal
        openAddAdress={openAddAdress}
        setOpenAddAdress={setOpenAddAdress}
      />
    </div>
  )
}

export default PhysFacTab

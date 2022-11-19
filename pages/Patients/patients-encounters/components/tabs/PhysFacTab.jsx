import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import AddServiceFacilityModal from './components/physiciantab/AddServiceFacilityModal'
import FindPhysicianModal from './components/physiciantab/FindPhysicianModal'

const PhysFacTab = () => {
  const [openFindPhysician, setOpenFindPhysician] = useState(false)
  const [openAddServiceFacility, setOpenAddServiceFacility] = useState(false)

  return (
    <div className='verdana13 grid grid-cols-2 '>
      <section className='space-y-3'>
        <header className='flex items-center space-x-5'>
          <h1 className=' verdana16  font-bold'>primary physicians</h1>
          <button
            className='flex items-center capitalize text-orange-500 underline '
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
            <h1 className='mr-2 w-[150px] text-right font-bold'>speciality:</h1>
          </div>
          <div className='flex items-center'>
            <h1 className='mr-2 w-[150px] text-right font-bold'>title:</h1>
            <p>medical doctor</p>
          </div>
          <div className='flex items-center'>
            <h1 className='mr-2 w-[150px] text-right font-bold'>type:</h1>
            <p>certifying</p>
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
        </article>
      </section>
      <section className='space-y-3 border-l-2 p-2'>
        <header className='flex items-center space-x-5'>
          <h1 className='verdana16 mr-2  font-bold'>
            last facility stay prior to soc
          </h1>
          <button
            className='flex items-center capitalize text-secondary-color underline '
            onClick={() => setOpenAddServiceFacility(true)}
          >
            <BsPlus className='verdana16  text-green-500' />
            add facility
          </button>
        </header>
        <p>no facility has been added to this encounter.</p>
      </section>

      {/* Modals */}
      <FindPhysicianModal
        openFindPhysician={openFindPhysician}
        setOpenFindPhysician={setOpenFindPhysician}
      />
      <AddServiceFacilityModal
        openAddServiceFacility={openAddServiceFacility}
        setOpenAddServiceFacility={setOpenAddServiceFacility}
      />
    </div>
  )
}

export default PhysFacTab

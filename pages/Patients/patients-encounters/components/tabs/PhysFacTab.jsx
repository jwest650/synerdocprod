import React from 'react'
import { BsPlus } from 'react-icons/bs'

const PhysFacTab = () => {
  return (
    <div className='grid grid-cols-2 text-sm capitalize'>
      <section className='space-y-3'>
        <header className='flex items-center space-x-5'>
          <h1 className=' text-xl font-bold'>primary physicians</h1>
          <button className='flex items-center capitalize text-orange-500 underline '>
            <BsPlus className='text-xl text-green-500' />
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
      <section className='space-y-3 border-l-2'>
        <header className='flex items-center space-x-5'>
          <h1 className='mr-2 text-xl font-bold'>
            last facility stay prior to soc
          </h1>
          <button className='flex items-center capitalize text-secondary-color underline '>
            <BsPlus className='text-xl text-green-500' />
            add facility
          </button>
        </header>
        <p>no facility has been added to this encounter.</p>
      </section>
    </div>
  )
}

export default PhysFacTab

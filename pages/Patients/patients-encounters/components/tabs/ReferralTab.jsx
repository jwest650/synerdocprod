import React from 'react'
import { HiPrinter } from 'react-icons/hi'
import { FaFax } from 'react-icons/fa'
import { BsPlus } from 'react-icons/bs'
const ReferralTab = () => {
  return (
    <div className='grid grid-cols-3 text-sm'>
      <section className='col-span-2 space-y-3'>
        <header className='flex items-center space-x-5 capitalize'>
          <div className='flex items-center'>
            <HiPrinter />
            <h1 className='text-orange-500 underline'>print referral order</h1>
          </div>
          <div className='flex items-center'>
            <FaFax />
            <h1 className='text-orange-500 underline'>fax referral order</h1>
          </div>
          <div className='flex items-center'>
            <BsPlus className='text-xl text-green-500' />

            <h1 className='text-orange-500 underline'>
              upload signed referral
            </h1>
          </div>
        </header>
        <article className=' space-y-2 capitalize'>
          <h1 className='text-xl font-bold'>referral source</h1>
          <div className='flex'>
            <p className=' px-2 text-orange-500'>[edit]</p>
            <div className='border-l-2 px-2'>
              <div className='flex space-x-3'>
                <h1 className='mr-2 w-[150px] text-right font-bold'>name:</h1>
                <p>ortiz</p>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[150px] text-right font-bold'>phone:</h1>
                <p>(318) 331 77772</p>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[150px] text-right font-bold'>email:</h1>
                <p>ortiz@gmail.com</p>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[150px] text-right font-bold'>method:</h1>
              </div>
            </div>
          </div>
        </article>
        <article className=' space-y-2 capitalize'>
          <h1 className='text-xl font-bold'>referral order tracking</h1>
          <div className='flex'>
            <p className=' px-2 text-orange-500'>[edit]</p>
            <div className='border-l-2 px-2 text-right'>
              <div className='flex space-x-3'>
                <h1 className='mr-2 w-[150px] text-right font-bold'>
                  sent data:
                </h1>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[150px] text-right font-bold'>
                  recieve date:
                </h1>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[150px] text-right font-bold'>
                  recieve not needed:
                </h1>
              </div>
              <div className='flex space-x-3 capitalize'>
                <h1 className='mr-2 w-[150px] text-right font-bold'>
                  date changed by user:
                </h1>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className='space-y-2 border-l-2 px-3 pt-4 capitalize'>
        <h1 classeName='font-bold text-xl'>referral contact</h1>
        <div className='flex'>
          <p className='px-2 text-orange-500'>[edit]</p>
          <div className='border-l-2 text-right'>
            <div>
              <h1 className='mr-2 w-[150px] text-right font-bold'>name:</h1>
            </div>
            <div>
              <h1 className='mr-2 w-[150px] text-right font-bold'>phone1:</h1>
            </div>
            <div>
              <h1 className='mr-2 w-[150px] text-right font-bold'>phone2:</h1>
            </div>
            <div>
              <h1 className='mr-2 w-[150px] text-right font-bold'>email:</h1>
            </div>
            <div>
              <h1 className='mr-2 w-[150px] text-right font-bold'>
                information:
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReferralTab

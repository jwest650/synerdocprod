import Link from 'next/link';
import React from 'react';

const ContactInfo = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
        Add Or Edit Contact Info - Nick Jones
      </h1>
      <hr />
      <p>add or edit the contact info of the selected patient</p>

      <div className=' my-4 grid grid-flow-col grid-rows-2 gap-4'>
        <div className='h-[200px] border-r-2 p-2'>
          <div className='flex justify-between py-2'>
            <h1 className='text-xl text-black'>Address/Phone Info</h1>
            <button className='rounded border bg-orange-600 px-3 text-xs text-white'>
              Add Contact Info
            </button>
            <button className='rounded border bg-orange-600 px-3 text-xs text-white'>
              Add Service Facility
            </button>
          </div>
          <div className='flex border-t-4'>
            <div className='w-[100px] border-r-2'>
              <Link
                href='#'
                color='orange'
                className='underlined bg-orange-600 text-orange-600'
              >
                Edit
              </Link>
              <br />
              <Link
                href='#'
                color='orange'
                className='underlined bg-orange-600 text-orange-600'
              >
                Delete
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
            <h1 className='text-xl text-black'>Patient Contact</h1>
            <button className='ml-3 rounded border bg-orange-600 px-3 text-xs text-white'>
              Add Contact Info
            </button>
          </div>
          <div className='flex border-t-4'>
            <div className='w-[100px] border-r-2'>
              <Link
                href='#'
                color='orange'
                className='underlined bg-orange-600 text-orange-600'
              >
                Edit
              </Link>
              <br />
              <Link
                href='#'
                color='orange'
                className='underlined bg-orange-600 text-orange-600'
              >
                Delete
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
            <h1 className='text-xl text-black'>Ancillary Phone Info</h1>
            <button className='ml-3 rounded border bg-orange-600 px-3 text-xs text-white'>
              Add Phone
            </button>
          </div>
          <div className='flex border-t-4'>
            <div className='w-[100px] border-r-2'>
              <Link
                href='#'
                color='orange'
                className='underlined bg-orange-600 text-orange-600'
              >
                Edit
              </Link>
              <br />
              <Link
                href='#'
                color='orange'
                className='underlined bg-orange-600 text-orange-600'
              >
                Delete
              </Link>
            </div>
            <div className='w-[100%] px-3'>
              <div>
                <p>Home: 233-4545-6564</p>
                <p>Desc: Neighbor's phone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-end py-3'>
        <button className='rounded border px-3'>Continue</button>
      </div>
    </div>
  );
};

export default ContactInfo;

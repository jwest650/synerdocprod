import React from 'react'
import { BsPlus } from 'react-icons/bs'

const ContactsTab = () => {
  return (
    <div className='verdana13 '>
      <article className='grid grid-cols-2 '>
        <section className='space-y-2'>
          <header className='flex items-center space-x-4'>
            <h1 className='verdana16  font-bold capitalize'>
              address / phone info
            </h1>
            <button className='btn-primary flex items-center'>
              <BsPlus className='verdana16  text-green-500' />
              add contact info
            </button>
            <button className='btn-primary flex items-center'>
              <BsPlus className='verdana16  text-green-500' />
              add service facility
            </button>
          </header>
          <div className='mx-2 flex space-x-5 border-t-2 '>
            <aside>
              <button className='text-orange-500'>[Edit]</button>
              <br />
              <button className='text-orange-500'>[Delete]</button>
            </aside>
            <aside className='grid w-full grid-cols-2 border-l-2 p-1 capitalize'>
              <div>
                <h1 className='font-bold'>home address</h1>
                <div>
                  <p>22222 hwy 1 bypass</p>
                  <p>nichito la 7174</p>
                </div>
              </div>
              <div>
                <h1 className='font-bold'>phone</h1>
                <div>
                  <p>home:(318):399494</p>
                </div>
              </div>
            </aside>
          </div>
        </section>
        <section className='space-y-2 border-l-2 pl-3'>
          <div className='flex items-center space-x-4'>
            <h1 className='verdana16  font-bold capitalize'>
              patient contacts
            </h1>
            <button className='btn-primary flex items-center'>
              <BsPlus className='verdana16  text-green-500' />
              add patient contact
            </button>
          </div>
          <div className='flex space-x-5 border-t-2'>
            <aside>
              <button className='text-orange-500'>[Edit]</button>
              <br />
              <button className='text-orange-500'>[Delete]</button>
              <br />
              <button className='text-orange-500'>[Edit]</button>
            </aside>
            <aside className='w-full border-l-2 p-1 capitalize'>
              <section>
                <div className='grid grid-cols-2'>
                  <h1 className='font-bold'>james, jessel</h1>

                  <h1 className='font-bold'>brother</h1>
                </div>
                <p>primary caregiver</p>
              </section>
              <section className='grid grid-cols-2'>
                <div>
                  <h1 className='font-bold'>home address</h1>
                  <div>
                    <p>22222 hwy 1 bypass</p>
                    <p>nichito la 7174</p>
                  </div>
                </div>
                <div>
                  {' '}
                  <h1 className='font-bold'>phone</h1>
                  <p>mobile:(318):399494</p>
                </div>
              </section>
              <section>
                <h1 className='font-bold'>Email</h1>
                <p>please add email</p>
              </section>
            </aside>
          </div>
        </section>
      </article>
    </div>
  )
}

export default ContactsTab

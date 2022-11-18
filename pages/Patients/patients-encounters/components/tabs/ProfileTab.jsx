import Link from 'next/link'
import React from 'react'
import { FcInfo } from 'react-icons/fc'

const ProfileTab = () => {
  return (
    <div>
      <section className='verdana13 flex justify-between '>
        <div className='w-[50%] border-r-2 p-2'>
          <div className='flex  py-2'>
            <h1 className='verdana16  text-black'>Persosnal</h1>
          </div>
          <div className='flex '>
            <div className='mr-2 border-r-2'>
              <Link href='#' color='orange'>
                <p className=' mr-2 text-secondary-color underline'>Edit</p>
              </Link>
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
              <Link href='#' color='orange'>
                <p className=' mr-2 text-secondary-color underline'>Edit</p>
              </Link>
            </div>
            <div className='w-[100%] px-3'>
              <div className='my-2 flex'>
                <p className='w-[150px] text-right font-semibold'>Status: </p>
                <p className='ml-3'></p>
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
                <p className='ml-3'></p>
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
    </div>
  )
}

export default ProfileTab

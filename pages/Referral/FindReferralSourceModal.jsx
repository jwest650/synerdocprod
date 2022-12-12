import {
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Checkbox,
} from '@chakra-ui/react'
import { useState } from 'react'
import AddReferralSourceModal from './AddReferralSourceModal'

const FindReferralSourceModal = ({ openFindReferral, setOpenFindReferral }) => {
  let data = [1, 1, 1, 1, 1]
  const [openAddReferral, setOpenAddReferral] = useState(false)

  return (
    <div>
      <Modal
        isOpen={openFindReferral}
        onClose={() => setOpenFindReferral(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900} className='verdana13 '>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalHeader>
              <h1 className='verdana18'>Find Referral Source</h1>
              <p className='verdana13  text-gray-600'>
                Find referral source/add referral source if not found.
              </p>
            </ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <div className='flex justify-between'>
                <label
                  htmlFor='#'
                  className='mr-2 w-[40%] text-right font-semibold'
                >
                  First/Last:{' '}
                </label>
                <div className='flex w-[60%]'>
                  <input
                    className='input-primary'
                    placeholder='small size'
                    size='xs'
                    mr={'3'}
                  />
                  <input
                    className='input-primary'
                    placeholder='small size'
                    size='xs'
                  />
                </div>
              </div>
              <div className='my-2 flex items-center'>
                <label
                  htmlFor='#'
                  className='mr-2 w-[40%] text-right font-semibold'
                >
                  Facility Name/Referral Company:{' '}
                </label>
                <div className='w-[60%]'>
                  <input
                    className='input-primary'
                    placeholder='small size'
                    size='xs'
                  />
                </div>
                <div className='ml-3 flex justify-end'>
                  <button className='rounded bg-secondary-color px-4 py-1 text-white shadow'>
                    Search
                  </button>
                </div>
              </div>

              <div>
                <table className='mt-10 min-w-full overflow-auto'>
                  <thead className='thead-primary'>
                    <tr>
                      <th className=' th-first'>Select</th>
                      <th className=' th-middle'>Name</th>
                      <th className=' th-middle'>Type</th>
                      <th className=' th-middle'>Preferred number</th>
                      <th className=' th-last'>Referral Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, i) => (
                      <tr
                        key={i}
                        className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                      >
                        <td className='td-primary'>
                          <Checkbox defaultChecked></Checkbox>
                        </td>
                        <td className='td-primary'>John Mason</td>
                        <td className='td-primary'>Others</td>
                        <td className='td-primary'>054344455</td>
                        <td className='td-primary'>CL, Miami</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='ml-auto'>
                <div className='flex justify-end py-3'>
                  <button
                    className='rounded bg-secondary-color px-4 py-1 text-white shadow'
                    onClick={() => setOpenFindReferral(false)}
                  >
                    Save
                  </button>
                  <button
                    className='ml-3 rounded bg-secondary-color px-4 py-1 text-white shadow'
                    onClick={() => setOpenFindReferral(false)}
                  >
                    Cancel
                  </button>
                </div>

                <div className='flex justify-end'>
                  <button
                    onClick={() => setOpenAddReferral(true)}
                    className='rounded bg-secondary-color px-4 py-1 text-white shadow'
                  >
                    add referral source
                  </button>
                </div>
              </div>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>

      {/* Add Modal */}
      <AddReferralSourceModal
        openAddReferral={openAddReferral}
        setOpenAddReferral={setOpenAddReferral}
      />
    </div>
  )
}

export default FindReferralSourceModal

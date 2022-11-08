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
        <ModalContent maxWidth={700}>
          <div className='w-full rounded border-[2px] border-t-[20px] border-primary-color p-4 pb-10 '>
            <ModalHeader>
              Find Referral Source
              <p className='text-sm text-gray-600'>
                Find referral source/add referral source if not found.
              </p>
            </ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <div className='flex justify-between'>
                <label htmlFor='#' className='w-[40%]'>
                  First/Last:{' '}
                </label>
                <div className='flex w-[60%]'>
                  <Input placeholder='small size' size='sm' mr={'3'} />
                  <Input placeholder='small size' size='sm' />
                </div>
              </div>
              <div className='my-2 flex '>
                <label htmlFor='#' className='w-[40%]'>
                  Facility Name/Referral Company:{' '}
                </label>
                <div className='w-[60%]'>
                  <Input placeholder='small size' size='sm' />
                </div>
              </div>

              <div className='flex justify-end'>
                <Button colorScheme='gray' size={'sm'} my={3}>
                  Search
                </Button>
              </div>

              <div>
                <table className='mt-10 min-w-full overflow-auto'>
                  <thead className='border-b bg-primary-color text-[18px] tracking-wider text-white'>
                    <tr>
                      <th className=' border-gray-100  pl-2 text-left'>
                        Select
                      </th>
                      <th className=' border-gray-100  pl-2 text-left'>Name</th>
                      <th className=' border-gray-100  pl-2 text-left'>Type</th>
                      <th className=' border-gray-100  pl-2 text-left'>
                        Preferred number
                      </th>
                      <th className=' border-gray-100  pl-2 text-left'>
                        Referral Address
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, i) => (
                      <tr
                        key={i}
                        className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                      >
                        <td className='border border-gray-400'>
                          <Checkbox defaultChecked></Checkbox>
                        </td>
                        <td className='border border-gray-400'>John Mason</td>
                        <td className='border border-gray-400'>Others</td>
                        <td className='border border-gray-400'>054344455</td>
                        <td className='border border-gray-400'>CL, Miami</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='ml-auto'>
                <div className='flex justify-end py-3'>
                  <button className='rounded bg-secondary-color px-4 py-1 text-white shadow'>
                    Save
                  </button>
                  <button className='ml-3 rounded bg-secondary-color px-4 py-1 text-white shadow'>
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

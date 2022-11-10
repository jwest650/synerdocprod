import {
  Checkbox,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Input,
} from '@chakra-ui/react'
import { useState } from 'react'
import AddFacilitySourceModal from './AddFacilitySourceModal'

const AddServiceFacilityModal = ({
  openAddServiceFacility,
  setOpenAddServiceFacility,
}) => {
  let data = [1, 1, 1, 1, 1]

  const [openFacilitySource, setOpenFacilitySource] = useState(false)

  return (
    <div>
      <Modal
        isOpen={openAddServiceFacility}
        onClose={() => setOpenAddServiceFacility(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900}>
          <div className='w-full rounded border-[2px] border-t-[20px] border-primary-color p-4 pb-10 '>
            <ModalBody>
              <div className='mb-3'>
                <h1 className=' text-2xl font-bold'>Add Service Facility</h1>
                <p>add information and save</p>
              </div>

              <div className='my-2 flex'>
                <p className='mr-3 w-[40%] text-right font-semibold'>
                  Facility Name/Referral Company:
                </p>

                <div className='w-[60%]'>
                  <Input placeholder='small size' size='sm' />
                </div>
              </div>

              <div className='flex justify-end'>
                <button className='my-2 rounded bg-secondary-color px-4 py-1 text-white shadow'>
                  Search
                </button>
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
                <div className='flex items-center justify-end py-3'>
                  <button
                    className='rounded bg-secondary-color px-4 py-1 text-white shadow'
                    mr={3}
                  >
                    Save
                  </button>
                  <button className='my-2 ml-3 rounded bg-secondary-color px-4 py-1 text-white shadow'>
                    Cancel
                  </button>
                </div>

                <div className='flex justify-end'>
                  <button
                    onClick={() => setOpenFacilitySource(true)}
                    className='rounded bg-secondary-color px-4 py-1 text-white shadow'
                  >
                    add facility source
                  </button>
                </div>
              </div>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>

      <AddFacilitySourceModal
        openFacilitySource={openFacilitySource}
        setOpenFacilitySource={setOpenFacilitySource}
      />
    </div>
  )
}

export default AddServiceFacilityModal

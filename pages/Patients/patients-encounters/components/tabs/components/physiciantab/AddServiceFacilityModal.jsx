import {
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Input,
} from '@chakra-ui/react'

const AddServiceFacilityModal = ({
  openAddServiceFacility,
  setOpenAddServiceFacility,
}) => {
  let data = [1, 1, 1, 1, 1]

  return (
    <div>
      <Modal
        isOpen={openAddServiceFacility}
        onClose={() => setOpenAddServiceFacility(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900} className='verdana13 '>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalBody>
              <div className='mb-3'>
                <h1 className=' verdana18  font-bold'>Add Service Facility</h1>
                <p>add information and save</p>
              </div>

              <div className='my-2 flex items-center'>
                <p className='mr-3 w-[40%] text-right font-semibold'>
                  Facility Name/Referral Company:
                </p>

                <div className='w-[60%]'>
                  <Input placeholder='' size='xs' />
                </div>
                <div className='ml-3 flex justify-end'>
                  <button className='my-2 rounded bg-secondary-color px-4 py-1 text-white shadow'>
                    Search
                  </button>
                </div>
              </div>

              <div>
                <table className='mt-10 min-w-full overflow-auto text-xs'>
                  <thead className='border bg-primary-color text-[18px] tracking-wider text-white'>
                    <tr className='border border-primary-color'>
                      <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                        Select
                      </th>
                      <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                        Name
                      </th>
                      <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                        Type
                      </th>
                      <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                        Preferred number
                      </th>
                      <th className=' border-l border-gray-400 py-1 px-2  text-left text-xs'>
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
    </div>
  )
}

export default AddServiceFacilityModal

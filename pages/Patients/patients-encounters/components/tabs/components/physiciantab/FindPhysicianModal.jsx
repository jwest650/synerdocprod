import {
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import React from 'react'

const FindPhysicianModal = ({ openFindPhysician, setOpenFindPhysician }) => {
  let data = [1, 1, 1, 1]
  return (
    <div className='verdana13 '>
      <Modal
        isOpen={openFindPhysician}
        onClose={() => setOpenFindPhysician(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900}>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalHeader>
              <h1 className='verdana18  font-bold capitalize text-black dark:text-white'>
                Find Physician
              </h1>
              <p className='verdana13 '>search or add physician</p>
              <hr />
            </ModalHeader>
            {/* <ModalCloseButton /> */}
            <ModalBody>
              <section>
                <div>
                  <div className='flex items-center py-2'>
                    <p className='verdana13 mr-3 w-[150px] text-right font-semibold'>
                      Last/First:
                    </p>
                    <div className='flex w-[100%]'>
                      <Input size={'xs'} type='text' />
                      <Input size={'xs'} className='ml-3' type='text' />
                    </div>
                    <div className='ml-2 flex justify-end'>
                      <button className='rounded bg-secondary-color px-4  text-white shadow'>
                        Searh
                      </button>
                    </div>
                  </div>
                </div>

                <table className=' min-w-full overflow-auto text-xs'>
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
                        Preffered Phone
                      </th>
                      <th className=' border-r border-gray-400 py-1 px-2  text-left text-xs'>
                        Referral Address
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, i) => (
                      <tr
                        key={i}
                        className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                      >
                        <td className='border border-gray-400'>
                          <Checkbox></Checkbox>
                        </td>
                        <td className='border border-gray-400'>Nick, Jones</td>
                        <td className='border border-gray-400'>23/12/05</td>
                        <td className='border border-gray-400'>Male</td>
                        <td className='border border-gray-400'>Pending</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className='my-3 flex justify-end'>
                  <div>
                    <div>
                      <button className='rounded bg-secondary-color px-4 py-1 text-white shadow'>
                        Save
                      </button>
                      <button className='ml-3 rounded bg-secondary-color px-4 py-1 text-white shadow'>
                        Cancel
                      </button>
                    </div>
                    <button className='my-2 rounded bg-secondary-color px-4 py-1 text-white shadow'>
                      add physician
                    </button>
                  </div>
                </div>
              </section>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default FindPhysicianModal

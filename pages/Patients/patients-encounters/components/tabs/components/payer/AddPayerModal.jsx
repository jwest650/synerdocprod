import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Input,
  Select,
} from '@chakra-ui/react'

const AddPayerModal = ({ openAddPayer, setOpenAddPayer }) => {
  let data = [1, 1, 1, 1, 1]

  return (
    <div>
      <Modal
        isOpen={openAddPayer}
        onClose={() => setOpenAddPayer(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900} className='verdana13 '>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalBody>
              <div>
                <h1 className=' verdana18  font-bold'>Add Payer</h1>
                <p>to add payer select from bellow</p>
              </div>

              <div className='mb-1 flex w-[70%] items-center'>
                <Input placeholder='Enter Payer Name' size='xs' />
                <Select size={'xs'} className='ml-2'>
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Suspended</option>
                  <option>Terminated</option>
                </Select>
                <Select size={'xs'} className='ml-2'>
                  <option>Medicare</option>
                  <option>Homecare</option>
                  <option>Suspended</option>
                  <option>Terminated</option>
                </Select>
                <div className='ml-3 flex justify-end'>
                  <button className='btn-primary'>Search</button>
                </div>
              </div>

              <div>
                <table className=' min-w-full overflow-auto text-xs'>
                  <thead className='thead-primary'>
                    <tr>
                      <th className=' th-first'>Payer Name</th>
                      <th className=' th-middle'>Payer Category</th>
                      <th className=' th-middle'>Clain Filling Type</th>
                      <th className=' th-middle'>Invoice Type</th>
                      <th className=' th-middle'>Invoice Cycle</th>
                      <th className=' th-middle'>Oasis Category</th>
                      <th className=' th-middle'>Organization Start Date</th>
                      <th className=' th-middle'>Organization End Date</th>
                      <th className=' th-last'></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, i) => (
                      <tr
                        key={i}
                        className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                      >
                        <td className='td-primary'>Jonas Tuga</td>
                        <td className='td-primary'>John Mason</td>
                        <td className='td-primary'>Others</td>
                        <td className='td-primary'>054344455</td>
                        <td className='td-primary'>CL, Miami</td>
                        <td className='td-primary'>CL, Miami</td>
                        <td className='td-primary'>CL, Miami</td>
                        <td className='td-primary'>CL, Miami</td>
                        <td className='td-primary'></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ModalBody>
          </div>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default AddPayerModal

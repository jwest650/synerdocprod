import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Input,
  Select,
  Checkbox,
  Textarea,
} from '@chakra-ui/react'
import { FcEditImage, FcEmptyTrash } from 'react-icons/fc'

const AddVitalSignModal = ({ openAddVitalSign, setOpenAddVitalSign }) => {
  const data = [1, 1, 1, 1]
  return (
    <div>
      <Modal
        isOpen={openAddVitalSign}
        onClose={() => setOpenAddVitalSign(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={900} className='verdana13 '>
          <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
            <ModalBody>
              <div>
                <h1 className=' verdana18  font-bold'>
                  Add Vital Sign Parameter
                </h1>
              </div>

              <div>
                <table>
                  <thead className='thead-primary'>
                    <tr>
                      <th className='th-first w-[60%]'>Description</th>
                      <th className='th-middle'>Low Value</th>
                      <th className='th-last'>High Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, i) => (
                      <tr
                        key={i}
                        className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                      >
                        <td className='td-primary'>Weight</td>
                        <td className='td-primary'>
                          <Input
                            type='number'
                            size='xs'
                            backgroundColor={'white'}
                          />
                        </td>
                        <td className='td-primary'>
                          <Input
                            type='number'
                            size='xs'
                            backgroundColor={'white'}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className='flex justify-center'>
                <div className='my-3 '>
                  <button
                    className='btn-save'
                    onClick={() => setOpenAddVitalSign(false)}
                  >
                    save
                  </button>
                  <button
                    className='ml-3 btn-cancel'
                    onClick={() => setOpenAddVitalSign(false)}
                  >
                    Cancel
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

export default AddVitalSignModal

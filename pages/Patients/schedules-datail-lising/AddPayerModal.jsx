import {
  Modal,
  ModalContent,
  Input,
  ModalOverlay,
  Select,
} from '@chakra-ui/react'
import React from 'react'

const AddPayerModal = ({ openAddPayer, setOpenAddPayer }) => {
  return (
    <div>
      <div>
        <Modal
          isOpen={openAddPayer}
          onClose={() => setOpenAddPayer(false)}
          className='p-5'
        >
          <ModalOverlay />
          <ModalContent maxWidth={700}>
            <div className='w-full rounded border-[2px] border-t-[20px] border-light-blue p-4 pb-10 '>
              <header className=' capitalize'>
                <h1 className='text-2xl font-bold'>add Payer</h1>
              </header>
              <section className='ml-12 flex items-center justify-between '>
                <aside className='space-y-3'>
                  <div className='flex items-center space-x-2'>
                    <label htmlFor=''>*Payer name:</label>

                    <input
                      className='input-primary'
                      w={200}
                      type='text'
                      size='sm'
                      placeholder=''
                    />
                  </div>
                  <div className='flex space-x-2'>
                    <label htmlFor=''>*payer category:</label>{' '}
                    <Select
                      className='input-primary'
                      placeholder='Select option'
                      size='xs'
                      w={120}
                    >
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </Select>
                  </div>
                  <div className='flex space-x-2'>
                    <label htmlFor=''>*oasis/his category:</label>{' '}
                    <Select
                      className='input-primary'
                      placeholder='Select option'
                      size='xs'
                      w={120}
                    >
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </Select>
                  </div>

                  <div className='flex space-x-2'>
                    <label htmlFor=''>*claim filling type:</label>
                    <Select
                      className='input-primary'
                      placeholder='Select option'
                      size='xs'
                      w={120}
                    >
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </Select>
                  </div>
                  <div className='flex space-x-2'>
                    <label htmlFor=''>*invoice type:</label>
                    <Select
                      className='input-primary'
                      placeholder='Select option'
                      size='xs'
                      w={120}
                    >
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </Select>
                  </div>
                  <div className='flex space-x-2'>
                    <label htmlFor=''>*invoice cycle:</label>
                    <Select
                      className='input-primary'
                      placeholder='Select option'
                      size='xs'
                      w={120}
                    >
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </Select>
                  </div>
                </aside>

                <aside className='space-y-3'>
                  <div className='space-x-2'>
                    <label htmlFor=''>start date:</label>
                    <input
                      className='input-primary'
                      w={200}
                      type='date'
                      size='sm'
                      placeholder=''
                    />
                  </div>
                  <div className='space-x-2'>
                    <label htmlFor=''>end date:</label>
                    <input
                      className='input-primary'
                      w={200}
                      type='date'
                      size='sm'
                      placeholder=''
                    />
                  </div>
                  <div className='space-x-2'>
                    <label htmlFor=''>payer email:</label>
                    <input
                      className='input-primary'
                      w={200}
                      type='text'
                      size='sm'
                      placeholder=''
                    />
                  </div>
                  <div className='space-x-2'>
                    <label htmlFor=''>apply sales tax:</label>
                    <input
                      className='input-primary'
                      type='checkbox'
                      name=''
                      id=''
                    />
                  </div>
                </aside>
              </section>
              <div className='mt-8 flex justify-end space-x-3'>
                <button
                  type='submit'
                  className='rounded bg-secondary-color px-4 py-1 text-white shadow'
                >
                  Save
                </button>
                <button className='rounded bg-gray-500 px-4 py-1 text-white shadow'>
                  Cancel
                </button>
              </div>
            </div>
          </ModalContent>
        </Modal>
      </div>
    </div>
  )
}

export default AddPayerModal

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
} from '@chakra-ui/react';
import { useState } from 'react';

const TransitionPatients = () => {
  let data = [1, 1, 1, 1];
  const [openFindReferral, setOpenFindReferral] = useState(false);
  const [openAddReferral, setOpenAddReferral] = useState(false);

  return (
    <div className='w-full bg-[#F6F8FC] p-10 text-gray-900'>
      <section className=' mx-auto w-[80%]  '>
        <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
          Transition Patients
        </h1>
        <hr />

        <div className='py-4'>
          <p>Add a new referral into the system</p>
          <h1 className='text-2xl'>Agency</h1>
        </div>
        <hr />
        <div className=' flex  items-center justify-between'>
          <div className='flex items-center justify-between'>
            <label htmlFor='#' className='mr-3'>
              Agency:{' '}
            </label>
            <Select size='xs'>
              <option value='option1' className='text-gray-800'>
                Option 1
              </option>
              <option value='option2' className='text-gray-800'>
                Option 2
              </option>
              <option value='option3' className='text-gray-800'>
                Option 3
              </option>
            </Select>
          </div>
          <div className='my-2 flex'>
            <label htmlFor='#' mr-3>
              Agency Type:{' '}
            </label>
            <div>
              <Select size='xs'>
                <option value='option1' className='text-gray-800'>
                  Option 1
                </option>
                <option value='option2' className='text-gray-800'>
                  Option 2
                </option>
                <option value='option3' className='text-gray-800'>
                  Option 3
                </option>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* Referral Source */}
        <section className='mx-auto mt-5 w-[80%]'>
          <div className=' py-4'>
            <h1 className='text-2xl'>Referral Source</h1>
          </div>
          <hr />
          <div className='flex py-3'>
            <div className='w-[150px]'>
              <label htmlFor='#'>Referral Source:</label>
            </div>
            <div>
              <Select size='xs' marginRight={5}>
                <option value='option1' className='text-gray-800'>
                  Option 1
                </option>
                <option value='option2' className='text-gray-800'>
                  Option 2
                </option>
                <option value='option3' className='text-gray-800'>
                  Option 3
                </option>
              </Select>
            </div>

            <div className='ml-3'>
              <button
                onClick={() => setOpenFindReferral(true)}
                className='dark:text-[#E77654px-6 cursor-pointer rounded bg-[#E77654] py-1 px-5 text-sm capitalize text-[#fff]'
              >
                find referral source
              </button>
            </div>
          </div>

          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Referral Phone: </h1>
            </div>
            <p className='text-gray-500'>w: (3434)-343445</p>
          </div>

          <div className='flex '>
            <div className='w-[150px]'>
              <h1 className=''>Referral History: </h1>
            </div>
            <div>
              <table className='mt-10 min-w-full overflow-auto'>
                <thead className='border-b bg-[#32164A] text-[18px] tracking-wider text-white'>
                  <tr>
                    <th className=' border-gray-100  pl-2 text-left'></th>
                    <th className=' border-gray-100  pl-2 text-left'>
                      30 days
                    </th>
                    <th className=' border-gray-100  pl-2 text-left'>
                      60 days
                    </th>
                    <th className=' border-gray-100  pl-2 text-left'>
                      90 days
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border'>
                    <td className='border border-gray-400'>Admits</td>
                    <td className='border border-gray-400'>0</td>
                    <td className='border border-gray-400'>0</td>
                    <td className='border border-gray-400'>0</td>
                  </tr>
                  <tr className='border bg-[#eee]'>
                    <td className='border border-gray-400'>Non Admits</td>
                    <td className='border border-gray-400'>0</td>
                    <td className='border border-gray-400'>0</td>
                    <td className='border border-gray-400'>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className='mt-5 flex'>
            <div className='w-[150px]'>
              <label htmlFor='#'>Mode of Delivery:</label>
            </div>
            <div>
              <Select size='xs' marginRight={5}>
                <option value='option1' className='text-gray-800'>
                  Option 1
                </option>
                <option value='option2' className='text-gray-800'>
                  Option 2
                </option>
                <option value='option3' className='text-gray-800'>
                  Option 3
                </option>
              </Select>
            </div>
          </div>

          <div className='my-5 flex'>
            <div className='w-[150px]'>
              <label htmlFor='#'>Sales Rep:</label>
            </div>
            <div>
              <Select size='xs' marginRight={5}>
                <option value='option1' className='text-gray-800'>
                  Option 1
                </option>
                <option value='option2' className='text-gray-800'>
                  Option 2
                </option>
                <option value='option3' className='text-gray-800'>
                  Option 3
                </option>
              </Select>
            </div>
          </div>
        </section>
        {/* Referral Source Contact */}
        <section className='mx-auto mt-10 w-[80%]'>
          <div className='flex py-3'>
            <div className='w-[150px]'>
              <label htmlFor='#'>Referral Source Contact:</label>
            </div>
            <div>
              <Select size='xs' marginRight={5}>
                <option value='option1' className='text-gray-800'>
                  Option 1
                </option>
                <option value='option2' className='text-gray-800'>
                  Option 2
                </option>
                <option value='option3' className='text-gray-800'>
                  Option 3
                </option>
              </Select>
            </div>

            <div className='ml-3'>
              <button
                onClick={() => setOpenFindReferral(true)}
                className='dark:text-[#E77654px-6 cursor-pointer rounded bg-[#E77654] py-1 px-5 text-sm capitalize text-[#fff]'
              >
                add referral source contact
              </button>
            </div>
          </div>

          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Phone 1: </h1>
            </div>
            <div className='flex'>
              <div>
                <Select size='xs'>
                  <option value='option1' className='text-gray-800'>
                    Option 1
                  </option>
                  <option value='option2' className='text-gray-800'>
                    Option 2
                  </option>
                  <option value='option3' className='text-gray-800'>
                    Option 3
                  </option>
                </Select>
              </div>
              <p className='ml-3 text-gray-500'>(343)-343-445</p>
              <div className='ml-3'>
                <Input size={'xs'} />
              </div>
            </div>
          </div>
          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Phone 2: </h1>
            </div>
            <div className='flex'>
              <div>
                <Select size='xs'>
                  <option value='option1' className='text-gray-800'>
                    Option 1
                  </option>
                  <option value='option2' className='text-gray-800'>
                    Option 2
                  </option>
                  <option value='option3' className='text-gray-800'>
                    Option 3
                  </option>
                </Select>
              </div>
              <p className='ml-3 text-gray-500'>(343)-343-445</p>
              <div className='ml-3'>
                <Input size={'xs'} />
              </div>
            </div>
          </div>
          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Email: </h1>
            </div>
            <div>
              <Input size={'xs'} />
            </div>
          </div>
          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Information: </h1>
            </div>
            <div>
              <Input size={'xs'} />
            </div>
          </div>
        </section>
      </section>

      {/* Initial Referral Information */}
      <section>
        <div className=' mx-auto w-[80%] py-3 '>
          <h1 className='py-3 text-2xl'>Initial Referral Information</h1>
          <hr />
          <div className='flex py-3'>
            <div className='w-[150px]'>
              <label htmlFor='#' className='mr-3'>
                Payer Category:
              </label>
            </div>
            <div>
              <Select size='xs'>
                <option value='option1' className='text-gray-800'>
                  Option 1
                </option>
                <option value='option2' className='text-gray-800'>
                  Option 2
                </option>
                <option value='option3' className='text-gray-800'>
                  Option 3
                </option>
              </Select>
            </div>
          </div>
          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Referral Date: </h1>
            </div>
            <div>
              <Input size={'xs'} type='date' />
            </div>
          </div>
          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Requested start of care: </h1>
            </div>
            <div>
              <Input size={'xs'} type='date' />
            </div>
          </div>
          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Admission Source: </h1>
            </div>
            <div>
              <Select size='xs'>
                <option value='option1' className='text-gray-800'>
                  Option 1
                </option>
                <option value='option2' className='text-gray-800'>
                  Option 2
                </option>
                <option value='option3' className='text-gray-800'>
                  Option 3
                </option>
              </Select>
            </div>
          </div>
          <div className='flex py-5'>
            <div className='w-[150px]'>
              <h1 className='mr-5'>Admission Type: </h1>
            </div>
            <div>
              <Select size='xs'>
                <option value='option1' className='text-gray-800'>
                  Option 1
                </option>
                <option value='option2' className='text-gray-800'>
                  Option 2
                </option>
                <option value='option3' className='text-gray-800'>
                  Option 3
                </option>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Search Modal */}
      <Modal
        isOpen={openFindReferral}
        onClose={() => setOpenFindReferral(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={700}>
          <ModalHeader>
            Find Referral Source
            <p className='text-sm text-gray-600'>
              Find referral source/add referral source if not found.
            </p>
          </ModalHeader>
          <ModalCloseButton />
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
                <thead className='border-b bg-[#32164A] text-[18px] tracking-wider text-white'>
                  <tr>
                    <th className=' border-gray-100  pl-2 text-left'>Select</th>
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
                <Button colorScheme='gray' size={'sm'} mr={3}>
                  Save
                </Button>
                <Button colorScheme='gray' size={'sm'}>
                  Cancel
                </Button>
              </div>

              <div className='flex justify-end'>
                <button
                  onClick={() => setOpenAddReferral(true)}
                  className='dark:text-[#E77654px-6 my-2 cursor-pointer rounded bg-[#E77654] py-1 px-5 text-sm capitalize text-[#fff]'
                >
                  add referral source
                </button>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Add Modal */}
      <Modal
        isOpen={openAddReferral}
        onClose={() => setOpenAddReferral(false)}
        className='p-5'
      >
        <ModalOverlay />
        <ModalContent maxWidth={700}>
          <div>
            <ModalHeader>
              Add Referral
              <p className='text-sm text-gray-600'>add referal details</p>
            </ModalHeader>
          </div>
          <ModalCloseButton />
          <ModalBody>
            <div className='my-2 flex'>
              <label htmlFor='#' className='w-[20%]'>
                Referral Type:{' '}
              </label>
              <div className='w-[70%]'>
                <Select size='xs'>
                  <option value='option1' className='text-gray-800'>
                    Option 1
                  </option>
                  <option value='option2' className='text-gray-800'>
                    Option 2
                  </option>
                  <option value='option3' className='text-gray-800'>
                    Option 3
                  </option>
                </Select>
              </div>
            </div>
            <div className='my-2 flex '>
              <label htmlFor='#' className='w-[20%]'>
                First Name:{' '}
              </label>
              <div className='w-[70%]'>
                <Input placeholder='small size' size='sm' />
              </div>
            </div>
            <div className='my-2 flex '>
              <label htmlFor='#' className='w-[20%]'>
                Middle initial:{' '}
              </label>
              <div className='w-[70%]'>
                <Input placeholder='small size' size='sm' />
              </div>
            </div>
            <div className='my-2 flex '>
              <label htmlFor='#' className='w-[20%]'>
                Last Name:{' '}
              </label>
              <div className='w-[70%]'>
                <Input placeholder='small size' size='sm' />
              </div>
            </div>
            <div className='my-2 flex '>
              <label htmlFor='#' className='w-[20%]'>
                Email:{' '}
              </label>
              <div className='w-[70%]'>
                <Input placeholder='small size' type={'email'} size='sm' />
              </div>
            </div>
            <div className='my-2 flex'>
              <label htmlFor='#' className='w-[20%]'>
                Sales Rep:{' '}
              </label>
              <div className='w-[70%]'>
                <Select size='xs'>
                  <option value='option1' className='text-gray-800'>
                    Option 1
                  </option>
                  <option value='option2' className='text-gray-800'>
                    Option 2
                  </option>
                  <option value='option3' className='text-gray-800'>
                    Option 3
                  </option>
                </Select>
              </div>
            </div>
            <div className='my-2 flex '>
              <label htmlFor='#' className='w-[20%]'>
                Start:{' '}
              </label>
              <div className='w-[70%]'>
                <Input
                  placeholder='Select Date and Time'
                  size='sm'
                  type='date'
                />
              </div>
            </div>
            <div className='my-2 flex '>
              <label htmlFor='#' className='w-[20%]'>
                End Date:{' '}
              </label>
              <div className='w-[70%]'>
                <Input
                  placeholder='Select Date and Time'
                  size='sm'
                  type='date'
                />
              </div>
            </div>
            <div className='my-2 flex '>
              <label htmlFor='#' className='w-[20%]'>
                Physician Group:{' '}
              </label>
              <div className='w-[70%]'>
                <Input placeholder='small size' size='sm' />
              </div>
            </div>
            <div className='my-2 flex'>
              <label htmlFor='#' className='w-[20%]'>
                Specialty:{' '}
              </label>
              <div className='w-[70%]'>
                <Select size='xs'>
                  <option value='option1' className='text-gray-800'>
                    Option 1
                  </option>
                  <option value='option2' className='text-gray-800'>
                    Option 2
                  </option>
                  <option value='option3' className='text-gray-800'>
                    Option 3
                  </option>
                </Select>
              </div>
            </div>
            <div className='my-2 flex'>
              <label htmlFor='#' className='w-[20%]'>
                Title:{' '}
              </label>
              <div className='w-[70%]'>
                <Select size='xs'>
                  <option value='option1' className='text-gray-800'>
                    Option 1
                  </option>
                  <option value='option2' className='text-gray-800'>
                    Option 2
                  </option>
                  <option value='option3' className='text-gray-800'>
                    Option 3
                  </option>
                </Select>
              </div>
            </div>
          </ModalBody>

          <div className='mx-auto p-5'>
            <Button colorScheme='gray' size={'sm'} mr={'3'}>
              Save
            </Button>
            <Button colorScheme='gray' size={'sm'}>
              Cancel
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default TransitionPatients;

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Select,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Checkbox,
} from '@chakra-ui/react';
import { useState } from 'react';

const AddReferral = () => {
  const [openFindReferral, setOpenFindReferral] = useState(false);
  const [openAddReferral, setOpenAddReferral] = useState(false);

  return (
    <div className='w-full bg-[#F6F8FC] p-10 text-gray-900'>
      <section className=' mx-auto w-[80%]  '>
        <h1 className='text-2xl'>Create Referral</h1>
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
            <TableContainer>
              <Table variant='striped' colorScheme='gray' size={'sm'}>
                <Thead backgroundColor={'#29507C'} color={'#fff'}>
                  <Tr>
                    <Th color={'#fff'} isNumeric></Th>
                    <Th color={'#fff'} isNumeric>
                      30 days
                    </Th>
                    <Th color={'#fff'} isNumeric>
                      60 days
                    </Th>
                    <Th color={'#fff'} isNumeric>
                      90 days
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Admits</Td>
                    <Td isNumeric>0</Td>
                    <Td isNumeric>0</Td>
                    <Td isNumeric>0</Td>
                  </Tr>
                  <Tr>
                    <Td>Non Admits</Td>
                    <Td isNumeric>0</Td>
                    <Td isNumeric>0</Td>
                    <Td isNumeric>0</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
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

            <TableContainer>
              <Table variant='striped' colorScheme='gray' size='sm'>
                <Thead backgroundColor={'#29507C'} color={'#fff'}>
                  <Tr>
                    <Th color={'#selecto'}>Select</Th>
                    <Th color={'#selecto'}>Name</Th>
                    <Th color={'#selecto'}>Type</Th>
                    <Th color={'#selecto'}>Preferred number</Th>
                    <Th color={'#selecto'}>Referral Address</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Checkbox defaultChecked></Checkbox>
                    </Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Checkbox></Checkbox>
                    </Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                    <Td>0</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
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

export default AddReferral;

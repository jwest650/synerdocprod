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
} from '@chakra-ui/react'
import Link from 'next/link'

const AddReferral = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className='p-10 text-gray-600'>
      <div>
        <h1 className='text-2xl'>Create Referral</h1>
      </div>
      <section>
        <div >
          <p className='py-5'>Add a new referral into the system</p>
        </div>
        <div className=" flex w-[500px] items-center justify-between">
          <div className="flex items-center justify-between">
            <label htmlFor="#" className="mr-5">
              Agency:{' '}
            </label>
            <Select size="xs">
              <option value="option1" className="text-gray-800">
                Option 1
              </option>
              <option value="option2" className="text-gray-800">
                Option 2
              </option>
              <option value="option3" className="text-gray-800">
                Option 3
              </option>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="#" className="mr-5">
              AgencyType:{' '}
            </label>
            <Select size="xs">
              <option value="option1" className="text-gray-800">
                Option 1
              </option>
              <option value="option2" className="text-gray-800">
                Option 2
              </option>
              <option value="option3" className="text-gray-800">
                Option 3
              </option>
            </Select>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="flex">
          <label htmlFor="#">Referral Source:</label>
          <Select size="xs" maxWidth={500} marginRight={5} marginLeft={5}>
            <option value="option1" className="text-gray-800">
              Option 1
            </option>
            <option value="option2" className="text-gray-800">
              Option 2
            </option>
            <option value="option3" className="text-gray-800">
              Option 3
            </option>
          </Select>
          <Link onClick={onOpen} className='text-[#FF6D00] underline cursor-pointer' >find referral source</Link>
        </div>

        <div className='flex'>
          <h1 className='mr-5'>Referral Phone: </h1>
          <p className='text-gray-500'>w: (3434)-343445</p>
        </div>

        <div className="flex ">
          <h1 className="mr-5">Referral History: </h1>
          <TableContainer>
            <Table variant='striped' colorScheme='[#0e1922]' size={'sm'}>
              <Thead backgroundColor={'#29507C'} color={"#fff"} >
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

        <div className="mt-5 flex">
          <label htmlFor="#">Mode of Delivery:</label>
          <Select size="xs" maxWidth={500} marginRight={5} marginLeft={5}>
            <option value="option1" className="text-gray-800">
              Option 1
            </option>
            <option value="option2" className="text-gray-800">
              Option 2
            </option>
            <option value="option3" className="text-gray-800">
              Option 3
            </option>
          </Select>
        </div>

        <div className="my-5 flex">
          <label htmlFor="#">Sales Rep:</label>
          <Select size="xs" maxWidth={500} marginRight={5} marginLeft={5}>
            <option value="option1" className="text-gray-800">
              Option 1
            </option>
            <option value="option2" className="text-gray-800">
              Option 2
            </option>
            <option value="option3" className="text-gray-800">
              Option 3
            </option>
          </Select>
        </div>
      </section>

      {/* Search Modal */}
      <Modal isOpen={isOpen} onClose={onClose} className='p-5' >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1 className="text-xl5">Find Referral Source</h1>
            <p className="text-sm">Find referral source/add referral source if not found.</p>

            <div className='flex justify-between'>
              <label htmlFor="#">First/Last: </label>
              <div className='flex'>
                  <Input placeholder='small size' size='sm' />
                  <Input placeholder='small size' size='sm' />
              </div>
            </div>
            <div className='flex justify-between'>
              <label htmlFor="#">Facility Name/Referral Company</label>
              <div>
                  <Input placeholder='small size' size='sm' />
              </div>
            </div>

            <div className='ml-auto'>
              <Button colorScheme='blue' my={3} onClick={onClose}>
                Search
              </Button>
            </div>
          

          <TableContainer>
            <Table variant='striped' colorScheme='[#0e1922]' size='sm'>
              <Thead backgroundColor={'#29507C'} color={"#fff"} >
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
                  <Td >0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                </Tr>
                <Tr>
                  <Td > 0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                  <Td>0</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          </ModalBody>

          <div className='ml-auto p-5'>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Save
            </Button>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cancel
            </Button>

            <div>
              <label onClick={onOpen} className='text-[#FF6D00] underline cursor-pointer' >add referral source</label>
            </div>
          </div>
        </ModalContent>
      </Modal>

      {/* Add Modal */}
      <Modal isOpen={isOpen} onClose={onClose} className='p-5' >
        <ModalOverlay />
        <ModalContent maxWidth={700}>
          <div>
          <ModalHeader>
            Add Referral
            <p className="text-sm text-gray-600">add referal details</p>
          </ModalHeader>

          </div>
          <ModalCloseButton />
          <ModalBody>

            <div className='flex my-2'>
              <label htmlFor="#" className='w-[20%]'>First: </label>
              <div className='w-[70%]'>
                <Select  size='xs' >
                  <option value='option1' className='text-gray-800'>Option 1</option>
                  <option value='option2' className='text-gray-800'>Option 2</option>
                  <option value='option3' className='text-gray-800'>Option 3</option>
                </Select>
                  {/* <Input placeholder='small size' size='sm' /> */}
              </div>
            </div>
            <div className='flex my-2 '>
              <label htmlFor="#" className='w-[20%]'>Company: </label>
              <div className='w-[70%]'>
                  <Input placeholder='small size' size='sm' />
              </div>
            </div>
            <div className='flex my-2 '>
              <label htmlFor="#" className='w-[20%]'>Company: </label>
              <div className='w-[70%]'>
                  <Input placeholder='small size' size='sm' />
              </div>
            </div>
            <div className='flex my-2 '>
              <label htmlFor="#" className='w-[20%]'>Start: </label>
              <div className='w-[70%]'>
                  <Input
                    placeholder="Select Date and Time"
                    size="sm"
                    type="date"
                  />
              </div>
            </div>
            <div className='flex my-2 '>
              <label htmlFor="#" className='w-[20%]'>End Date: </label>
              <div className='w-[70%]'>
                  <Input
                    placeholder="Select Date and Time"
                    size="sm"
                    type="date"
                  />
              </div>
            </div>
            <div className='flex my-2 '>
              <label htmlFor="#" className='w-[20%]'>Company: </label>
              <div className='w-[70%]'>
                  <Input placeholder='small size' size='sm' />
              </div>
            </div>
            <div className='flex my-2 '>
              <label htmlFor="#" className='w-[20%]'>Company: </label>
              <div className='w-[70%]'>
                  <Input placeholder='small size' size='sm' />
              </div>
            </div>

            
          </ModalBody>

          <div className='ml-auto p-5'>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Save
            </Button>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cancel
            </Button>

            <div>
              <Link onClick={onOpen} className='text-[#FF6D00] underline cursor-pointer' >add referral source</Link>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddReferral;

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

const AddReferral = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className='p-10'>
      <div className="underline">
        <h1>Create Referral</h1>
      </div>
      <section>
        <div className='underline'>
          <p className='py-5'>Add a new referral into the system</p>
        </div>
        <div className=' flex w-[70%] justify-between items-center'>
          <div className='flex items-center justify-between'>
            <label htmlFor="#" className='mr-5'>Agency: </label>
            <Select  size='xs' >
              <option value='option1' className='text-gray-800'>Option 1</option>
              <option value='option2' className='text-gray-800'>Option 2</option>
              <option value='option3' className='text-gray-800'>Option 3</option>
            </Select>
          </div>
          <div className='flex items-center justify-between'>
            <label htmlFor="#" className='mr-5'>AgencyType: </label>
            <Select  size='xs' >
              <option value='option1' className='text-gray-800'>Option 1</option>
              <option value='option2' className='text-gray-800'>Option 2</option>
              <option value='option3' className='text-gray-800'>Option 3</option>
            </Select>
          </div>
        </div>
      </section>

      <section className='mt-5'>
        <div className='flex'>
          <label htmlFor="#">Referral Source:</label>
          <Select  size='xs' maxWidth={500} marginRight={5} marginLeft={5} >
            <option value='option1' className='text-gray-800'>Option 1</option>
            <option value='option2' className='text-gray-800'>Option 2</option>
            <option value='option3' className='text-gray-800'>Option 3</option>
          </Select>
          <a href='#' className='text-[#FF6D00] underline' onClick={onOpen}>find referral source</a>
        </div>

        <div className='flex'>
          <h1 className='mr-5'>Referral Phone: </h1>
          <p className='text-gray-100'>w: (3434)-343445</p>
        </div>

        <div className='flex '>
          <h1 className='mr-5'>Referral History:  </h1>
          <TableContainer>
            <Table variant='striped' colorScheme='[#0e1922]'>
              <Thead backgroundColor={'#29507C'} color={"#fff"} >
                <Tr>
                  <Th color={'#fff'} isNumeric></Th>
                  <Th color={'#fff'} isNumeric>30 days</Th>
                  <Th color={'#fff'} isNumeric>60 days</Th>
                  <Th color={'#fff'} isNumeric>90 days</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td >Admits</Td>
                  <Td isNumeric>0</Td>
                  <Td isNumeric>0</Td>
                  <Td isNumeric>0</Td>
                </Tr>
                <Tr>
                  <Td >Non Admits</Td>
                  <Td isNumeric>0</Td>
                  <Td isNumeric>0</Td>
                  <Td isNumeric>0</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>

        <div className='flex mt-5'>
          <label htmlFor="#">Mode of Delivery:</label>
          <Select  size='xs' maxWidth={'70%'} marginRight={5} marginLeft={5} >
            <option value='option1' className='text-gray-800'>Option 1</option>
            <option value='option2' className='text-gray-800'>Option 2</option>
            <option value='option3' className='text-gray-800'>Option 3</option>
          </Select>
        </div>

        <div className='flex my-5'>
          <label htmlFor="#">Sales Rep:</label>
          <Select  size='xs' maxWidth={'70%'} marginRight={5} marginLeft={5} >
            <option value='option1' className='text-gray-800'>Option 1</option>
            <option value='option2' className='text-gray-800'>Option 2</option>
            <option value='option3' className='text-gray-800'>Option 3</option>
          </Select>
        </div>
      </section>

      {/* Search Modal */}
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent maxWidth={700}>
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
            <div>
              <label htmlFor="#">Facility Name/Referral Company</label>
              <div>
                  <Input placeholder='small size' size='sm' />
              </div>
            </div>

            <Button colorScheme='teal' size='sm' marginTop={5} alignItems='left' className='left'>
              Button
            </Button>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>

          <TableContainer>
            <Table variant='striped' colorScheme='[#0e1922]'>
              <Thead backgroundColor={'#29507C'} color={"#fff"} >
                <Tr>
                  <Th color={'#selecto'}>Select</Th>
                  <Th color={'#selecto'}>Name</Th>
                  <Th color={'#selecto'}>Type</Th>
                  <Th color={'#selecto'}>Preferred number</Th>
                  <Th color={'#selecto'}>Referral <Address></Address></Th>
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
        </ModalContent>
      </Modal>
    </div>
  )
}

export default AddReferral
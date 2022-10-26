import {
  Button,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const PatientsEncounters = () => {
  return (
    <div className='ar space-y-4 p-5 text-gray-800 dark:text-white'>
      <section className='flex items-center justify-between capitalize'>
        <div>
          <h1 className='text-2xl'>Patient Encounters</h1>
        </div>

        <div>
          <div className='flex justify-between'>
            <label htmlFor='#'>Censcus Date From:</label>
            <div className='flex '>
              <Input
                placeholder='small size'
                size='sm'
                mr={'3'}
                type={'date'}
              />
              <label htmlFor='#'>To:</label>
              <Input placeholder='small size' size='sm' type={'date'} />
            </div>
          </div>
        </div>

        <div className='flex items-center space-x-3'>
          <div className='space-x-2'>
            <select name='' id='' className='rounded text-black'>
              <option value='pdf'>PDF Summary</option>
              <option value='spreadsheet'>Spreadsheet Summary</option>
            </select>
            <button className='rounded border  px-2'>Export</button>
          </div>
        </div>
      </section>

      <section className='flex items-center justify-between'>
        <div className='flex justify-between'>
          <label htmlFor='#' className='w-[40%]'>
            Birth Date:
          </label>
          <div className='flex w-[60%]'>
            <Input placeholder='small size' size='sm' type={'date'} />
          </div>
        </div>

        <div className='flex justify-between'>
          <label htmlFor='#' className='w-[40%]'>
            MRN:
          </label>
          <div className='flex w-[60%]'>
            <Input placeholder='small size' size='sm' />
          </div>
        </div>

        <div className='flex justify-between'>
          <label htmlFor='#' className='w-[40%]'>
            Identifier#:
          </label>
          <div className='flex w-[60%]'>
            <Input placeholder='small size' size='sm' />
          </div>
        </div>

        <div className='flex items-center space-x-5'>
          <div className='my-2 flex '>
            <div>
              <Input placeholder='small size' size='sm' width={300} />
            </div>
            <Button colorScheme='gray' size={'sm'} ml={'3'}>
              Search
            </Button>
          </div>
        </div>
      </section>

      <section>
        <TableContainer>
          <Table variant='striped' colorScheme='gray' size='sm'>
            <Thead backgroundColor={'#432366'} color={'#fff'}>
              <Tr>
                <Th color={'#selecto'}>Patient Name</Th>
                <Th color={'#selecto'}>Latest cert period</Th>
                <Th color={'#selecto'}>Agency </Th>
                <Th color={'#selecto'}>Agency Type</Th>
                <Th color={'#selecto'}>Team</Th>
                <Th color={'#selecto'}>Status</Th>
                <Th color={'#selecto'}>Payer Category</Th>
                <Th color={'#selecto'}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr className='dark:text-white'>
                <Td>James Gordon</Td>
                <Td>23/4/2022 8:43 AM</Td>
                <Td>Tampa Home Health</Td>
                <Td>Home Health</Td>
                <Td>Amess Alicia</Td>
                <Td></Td>
                <Td>James Gordon</Td>
                <Td>+</Td>
              </Tr>
              <Tr className='dark:text-white'>
                <Td>James Gordon</Td>
                <Td>23/4/2022 8:43 AM</Td>
                <Td>Tampa Home Health</Td>
                <Td>Home Health</Td>
                <Td>Amess Alicia</Td>
                <Td></Td>
                <Td>James Gordon</Td>
                <Td>+</Td>
              </Tr>
              <Tr className='dark:text-white'>
                <Td>James Gordon</Td>
                <Td>23/4/2022 8:43 AM</Td>
                <Td>Tampa Home Health</Td>
                <Td>Home Health</Td>
                <Td>Amess Alicia</Td>
                <Td></Td>
                <Td>James Gordon</Td>
                <Td>+</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </section>
    </div>
  );
};

export default PatientsEncounters;

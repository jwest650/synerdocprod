import {
  Button,
  Checkbox,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const VerifiedServices = () => {
  return (
    <div className='ar w-full space-y-4 bg-[#F6F8FC] p-5 text-gray-800 dark:text-white'>
      <section className='flex items-center justify-between capitalize'>
        <div>
          <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
            Verified Services
          </h1>
        </div>

        <div className='flex items-center space-x-3'>
          <div className='flex space-x-2'>
            <Select size={'xs'} name='' id='' className='rounded text-black'>
              <option value='pdf'>PDF Summary</option>
              <option value='spreadsheet'>Spreadsheet Summary</option>
            </Select>
            <button className='rounded border  px-2'>Export</button>
          </div>
        </div>
      </section>

      <section className='flex items-center justify-end'>
        <div className='flex justify-between'>
          <label htmlFor='#'>Service start Date:</label>
          <div className='flex '>
            <Input placeholder='small size' size='xs' type={'date'} />
          </div>
        </div>

        <div className='flex justify-between'>
          <label htmlFor='#'>To:</label>
          <div className='flex '>
            <Input placeholder='small size' size='xs' type={'date'} />
          </div>
        </div>

        <div className='flex justify-between'>
          <label htmlFor='#'>Verification Date From:</label>
          <div className='flex '>
            <Input placeholder='small size' size='xs' type={'date'} />
          </div>
        </div>

        <div className='flex justify-between'>
          <label htmlFor='#'>To:</label>
          <div className='flex '>
            <Input placeholder='small size' size='xs' type={'date'} />
          </div>
        </div>

        <div className='ml-3 flex items-center space-x-5'>
          <div className='my-2 flex '>
            <div>
              <Input placeholder='small size' size='xs' />
            </div>
            <Button colorScheme='gray' size={'xs'} ml={'3'}>
              Search
            </Button>
          </div>
        </div>
      </section>

      <section className='flex items-center justify-end '>
        <Checkbox defaultChecked className='text-xs' size={'xs'}>
          Bill Only
        </Checkbox>
        <Checkbox defaultChecked className='text-xs' size={'xs'}>
          Pay Only{' '}
        </Checkbox>
        <Checkbox defaultChecked className='text-xs' size={'xs'}>
          Auto Verified Only{' '}
        </Checkbox>
        <Checkbox defaultChecked className='text-xs' size={'xs'}>
          Include Attachments
        </Checkbox>
      </section>

      <section>
        <TableContainer>
          <Table variant='striped' colorScheme='gray' size='sm'>
            <Thead backgroundColor={'#432366'} color={'#fff'}>
              <Tr>
                <Th color={'#selecto'}>Patient</Th>
                <Th color={'#selecto'}>Associates</Th>
                <Th color={'#selecto'}>Service</Th>
                <Th color={'#selecto'}>Service Date </Th>
                <Th color={'#selecto'}>Time In</Th>
                <Th color={'#selecto'}>Time Out</Th>
                <Th color={'#selecto'}>Payer Name</Th>
                <Th color={'#selecto'}>Status</Th>
                <Th color={'#selecto'}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr className='dark:text-white'>
                <Td>
                  <Select size='xs'>
                    <option value='option1' className='text-gray-800'>
                      All 1
                    </option>
                    <option value='option2' className='text-gray-800'>
                      All 2
                    </option>
                    <option value='option3' className='text-gray-800'>
                      All 3
                    </option>
                  </Select>
                </Td>
                <Td>
                  <Select size='xs'>
                    <option value='option1' className='text-gray-800'>
                      All 1
                    </option>
                    <option value='option2' className='text-gray-800'>
                      All 2
                    </option>
                    <option value='option3' className='text-gray-800'>
                      All 3
                    </option>
                  </Select>
                </Td>
                <Td>
                  <Select size='xs'>
                    <option value='option1' className='text-gray-800'>
                      All 1
                    </option>
                    <option value='option2' className='text-gray-800'>
                      All 2
                    </option>
                    <option value='option3' className='text-gray-800'>
                      All 3
                    </option>
                  </Select>
                </Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td>
                  <Select size='xs'>
                    <option value='option1' className='text-gray-800'>
                      All 1
                    </option>
                    <option value='option2' className='text-gray-800'>
                      All 2
                    </option>
                    <option value='option3' className='text-gray-800'>
                      All 3
                    </option>
                  </Select>
                </Td>
                <Td>
                  <Select size='xs'>
                    <option value='option1' className='text-gray-800'>
                      All 1
                    </option>
                    <option value='option2' className='text-gray-800'>
                      All 2
                    </option>
                    <option value='option3' className='text-gray-800'>
                      All 3
                    </option>
                  </Select>
                </Td>
                <Td></Td>
              </Tr>
              <Tr className='dark:text-white'>
                <Td>James Gordon</Td>
                <Td>1.High priority requires</Td>
                <Td>Tampa Home Health</Td>
                <Td>10/8/19</Td>
                <Td></Td>
                <Td></Td>
                <Td>Home Health</Td>
                <Td>Active</Td>
                <Td>+</Td>
              </Tr>
              <Tr className='dark:text-white'>
                <Td>James Gordon</Td>
                <Td>1.High priority requires</Td>
                <Td>Tampa Home Health</Td>
                <Td>10/8/19</Td>
                <Td></Td>
                <Td></Td>
                <Td>Home Health</Td>
                <Td>Active</Td>
                <Td>+</Td>
              </Tr>
              <Tr className='dark:text-white'>
                <Td>James Gordon</Td>
                <Td>1.High priority requires</Td>
                <Td>Tampa Home Health</Td>
                <Td>10/8/19</Td>
                <Td></Td>
                <Td></Td>
                <Td>Home Health</Td>
                <Td>Active</Td>
                <Td>+</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </section>
    </div>
  );
};

export default VerifiedServices;

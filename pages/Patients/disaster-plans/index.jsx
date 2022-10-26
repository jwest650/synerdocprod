import {
  Button,
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

const DisasterPlan = () => {
  return (
    <div className='ar space-y-4 p-5 text-gray-800 dark:text-white'>
      <section className='flex items-center justify-between capitalize'>
        <div>
          <h1 className='text-2xl'>Disaster Plan</h1>
        </div>

        <div className='flex items-center'>
          <div className='flex items-center space-x-3'>
            <div className='space-x-2'>
              <select name='' id='' className='rounded text-black'>
                <option value='pdf'>PDF Summary</option>
                <option value='spreadsheet'>Spreadsheet Summary</option>
              </select>
              <button className='rounded border  px-2'>Export</button>
            </div>
          </div>
          <div className='flex'>
            {/* <label htmlFor='#'>Censcus Date From:</label> */}
            <div className='flex '>
              <Input
                placeholder='small size'
                size='sm'
                ml={'3'}
                type={'text'}
              />
              <Input placeholder='small size' size='sm' type={'text'} ml={3} />
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
                <Th color={'#selecto'}></Th>
                <Th color={'#selecto'}>Patient Name</Th>
                <Th color={'#selecto'}>Disaster plan</Th>
                <Th color={'#selecto'}>Plan Details</Th>
                <Th color={'#selecto'}>Agency </Th>
                <Th color={'#selecto'}>Agency Type</Th>
                <Th color={'#selecto'}>Admit Date</Th>
                <Th color={'#selecto'}>Status</Th>
                <Th color={'#selecto'}>Country</Th>
                <Th color={'#selecto'}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr className='dark:text-white'>
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
                <Td></Td>
                <Td>James Gordon</Td>
                <Td>1.High priority requires</Td>
                <Td></Td>
                <Td>Tampa Home Health</Td>
                <Td>Home Health</Td>
                <Td>10/8/19</Td>
                <Td>Active</Td>
                <Td>Winn</Td>
                <Td>+</Td>
              </Tr>
              <Tr className='dark:text-white'>
                <Td></Td>
                <Td>James Gordon</Td>
                <Td>1.High priority requires</Td>
                <Td></Td>
                <Td>Tampa Home Health</Td>
                <Td>Home Health</Td>
                <Td>10/8/19</Td>
                <Td>Active</Td>
                <Td>Winn</Td>
                <Td>+</Td>
              </Tr>
              <Tr className='dark:text-white'>
                <Td></Td>
                <Td>James Gordon</Td>
                <Td>1.High priority requires</Td>
                <Td></Td>
                <Td>Tampa Home Health</Td>
                <Td>Home Health</Td>
                <Td>10/8/19</Td>
                <Td>Active</Td>
                <Td>Winn</Td>
                <Td>+</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </section>
    </div>
  );
};

export default DisasterPlan;

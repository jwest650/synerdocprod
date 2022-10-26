import {
  Button,
  Checkbox,
  Input,
  Radio,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const SchedulesDetailListing = () => {
  return (
    <div className='ar space-y-4 p-5 text-gray-800 dark:text-white'>
      <section className='flex items-center justify-between capitalize'>
        <div className='flex items-center'>
          <h1 className='text-2xl'>Schedules Detail Listing</h1>

          <button className='cursor-pointer rounded bg-[#E77654] py-1 px-5 text-sm capitalize text-[#fff] dark:text-[#E77654]'>
            Add Pay Only
          </button>
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

      <section className='flex justify-between'>
        <div></div>
        <div className='flex'>
          <span className='text-sm'>
            show activities without a service date attache
          </span>
          <Checkbox>
            <span className='text-sm'>Payer report Group</span>
          </Checkbox>
          <Select size='xs'>
            <option value='option1' className='text-gray-800'>
              All
            </option>
            <option value='option2' className='text-gray-800'>
              All
            </option>
            <option value='option3' className='text-gray-800'>
              All
            </option>
          </Select>
        </div>
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
                <Th color={'#selecto'}>Agency</Th>
                <Th color={'#selecto'}>Status</Th>
                <Th color={'#selecto'}>Auth</Th>
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
                <Td></Td>
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
                <Td></Td>
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
                <Td></Td>
                <Td>+</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </section>
    </div>
  );
};

export default SchedulesDetailListing;

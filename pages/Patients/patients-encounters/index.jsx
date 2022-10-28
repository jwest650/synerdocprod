import {
  Button,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  td,
  th,
  thead,
  tr,
} from '@chakra-ui/react';

const PatientsEncounters = () => {
  let data = [1, 1, 1, 1];

  return (
    <div className='w-full'>
      <section className='flex items-center justify-between capitalize'>
        <div>
          <h1 className='text-2xl font-bold capitalize text-black dark:text-white'>
            Patient Encounters
          </h1>
        </div>

        <div>
          <div className='flex justify-between'>
            <label htmlFor='#'>Censcus Date From:</label>
            <div className='flex '>
              <Input
                placeholder='small size'
                size='xs'
                mr={'3'}
                type={'date'}
              />
              <label htmlFor='#'>To:</label>
              <Input placeholder='xsall size' size='xs' type={'date'} />
            </div>
          </div>
        </div>

        <div className='flex items-center space-x-3'>
          <div className='flex items-center space-x-2'>
            <Select name='' id='' size='xs' className='rounded text-black'>
              <option value='pdf'>PDF Summary</option>
              <option value='spreadsheet'>Spreadsheet Summary</option>
            </Select>
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
            <Input placeholder='xsall size' size='xs' type={'date'} />
          </div>
        </div>

        <div className='flex justify-between'>
          <label htmlFor='#' className='w-[40%]'>
            MRN:
          </label>
          <div className='flex w-[60%]'>
            <Input placeholder='xsall size' size='xs' />
          </div>
        </div>

        <div className='flex justify-between'>
          <label htmlFor='#' className='w-[40%]'>
            Identifier#:
          </label>
          <div className='flex w-[60%]'>
            <Input placeholder='xsall size' size='xs' />
          </div>
        </div>

        <div className='flex items-center space-x-5'>
          <div className='my-2 flex  items-center'>
            <div>
              <Input placeholder='xsall size' size='xs' width={300} />
            </div>
            <button className='ml-3 rounded border px-2 ' ml={'3'}>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div>
          <table className=' min-w-full overflow-auto'>
            <thead className='border-b bg-[#32164A] text-[18px] tracking-wider text-white'>
              <tr>
                <th className=' border-gray-100  pl-2 text-left'>
                  Patient Name
                </th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Latest cert period
                </th>
                <th className=' border-gray-100  pl-2 text-left'>Agency </th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Agency Type
                </th>
                <th className=' border-gray-100  pl-2 text-left'>Team</th>
                <th className=' border-gray-100  pl-2 text-left'>Status</th>
                <th className=' border-gray-100  pl-2 text-left'>
                  Payer Category
                </th>
                <th className=' border-gray-100  pl-2 text-left'></th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, i) => (
                <tr
                  key={i}
                  className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                >
                  <td className='border border-gray-400'>James Gordon</td>
                  <td className='border border-gray-400'>23/4/2022 8:43 AM</td>
                  <td className='border border-gray-400'>Tampa Home Health</td>
                  <td className='border border-gray-400'>Home Health</td>
                  <td className='border border-gray-400'>Amess Alicia</td>
                  <td className='border border-gray-400'></td>
                  <td className='border border-gray-400'>James Gordon</td>
                  <td className='border border-gray-400'>+</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default PatientsEncounters;

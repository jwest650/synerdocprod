import { Input, Select } from '@chakra-ui/react'
import React from 'react'

const EvvTab = () => {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1]
  return (
    <div>
      <section>
        <div className='flex '>
          <div className='flex '>
            <p className='rounde mr-2 '>Service Date:</p>
            <div>
              <Input type='date' size={'xs'} />
            </div>
          </div>

          <div className='ml-10  flex'>
            <p className='rounde mr-2 '>End Date:</p>
            <div>
              <Input type='date' size={'xs'} />
            </div>
          </div>
        </div>

        <h1 className='verdana16 my-3 font-bold'>Visit Verifications</h1>

        <div>
          <table className=' min-w-[600px] overflow-auto'>
            <thead className='thead-primary'>
              <tr>
                <th className=' th-first'>Date</th>
                <th className=' th-middle'>Type</th>
                <th className=' th-middle'>Note</th>
                <th className=' th-middle'>Associate</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, i) => (
                <tr
                  key={i}
                  className={`border  ${i % 2 === 0 && 'bg-[#eeeeee]'} `}
                >
                  <td className=' td-primary'>12/04/2022 9:24am - EST</td>
                  <td className=' td-primary'>Start Care</td>
                  <td className=' td-primary'>
                    East Legon, American House 5667
                  </td>
                  <td className=' td-primary'>Denis Freeman</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <p className='w-[100%] bg-gray-300  p-2 text-sm'>
            No Homecare Item set found
          </p> */}
        </div>
      </section>
    </div>
  )
}

export default EvvTab

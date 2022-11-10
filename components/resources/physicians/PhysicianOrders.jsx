import { Input, Select } from '@chakra-ui/react';
import { physicianOrder, physicianTableData } from '../../../assets/data';
import Link from 'next/link';
// import MorePhysicianInfo from './MorePhysicianInfo';
import PhysicianOrderTableAction from './PhysicianOrderTableAction';
import PhysicianOrderCreateOrder from './PhysicianOrderCreateOrder';

const PhysicianOrders = () => {
  return (
    <section className="mx-10 mt-10">
      <div className="flex items-center justify-between border-b border-gray-600 pb-2">
        <div className="flex items-center gap-8">
          <h2 className="text-xl font-semibold tracking-wider">Orders</h2>
          <PhysicianOrderCreateOrder />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="#">Date:</label>
            <Input size="xs" type={'date'} />
          </div>
          <div className="flex items-center gap-2">
            <span>Status:</span>
            <Select
              css={{ backgroundColor: '#c6d8ffe1', border: 'none' }}
              className="shadow outline-none"
              size="xs"
            >
              <option value="option1" className="text-gray-800">
                Active
              </option>
              <option value="option2" className="text-gray-800">
                Inactive{' '}
              </option>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <input
              placeholder="search orders"
              className="rounded border px-3 py-[2px] text-black outline-none"
              type="text"
            />
            <button className="rounded bg-orange-600 px-2 py-[1px] font-medium text-white">
              Search
            </button>
          </div>
        </div>
      </div>

      <table className="mt-10 min-w-full overflow-auto">
        <thead className="border-b bg-[#0141CF] text-[18px] tracking-wider text-white">
          <tr>
            <th className=" border-gray-500 pl-2 text-left">Order Type</th>
            <th className=" border-gray-500 pl-2 text-left">Order Title</th>
            <th className=" border-gray-500 pl-2 text-left">Date</th>
            <th className=" border-gray-500 pl-2 text-left">Status</th>
            <th className=" border-gray-500 pl-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {physicianOrder.map((order, i) => (
            <tr key={i} className={`border  even:bg-[#eeeeee] `}>
              <td className=" max-h-[20px] min-w-[260px] cursor-pointer border border-gray-400 py-1 px-2 font-medium text-orange-600 decoration-orange-600">
                {order.orderType}
              </td>
              <td className=" max-h-[20px] min-w-[300px] cursor-pointer border border-gray-400 py-1 px-2 font-medium">
                {order.orderTitle}
              </td>
              <td className=" max-h-[20px] min-w-[100px] cursor-pointer border border-gray-400 py-1 px-2 font-medium">
                {order.date}
              </td>

              <td
                className={`max-h-[20px] min-w-[70px] border border-gray-400 py-1 px-2 font-semibold  ${
                  order.status === 'Active' && 'text-green-600'
                }`}
              >
                {order.status}
              </td>
              <td className=" max-h-[20px] min-w-[120px] cursor-pointer border border-gray-400 py-1 px-2 font-medium">
                <PhysicianOrderTableAction />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default PhysicianOrders;

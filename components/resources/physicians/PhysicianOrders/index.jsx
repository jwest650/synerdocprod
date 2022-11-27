import { Input, Select } from '@chakra-ui/react';
import PhysicianOrderTableAction from './PhysicianOrderTableAction';
import PhysicianOrderCreateOrder from './PhysicianOrderCreateOrder';
import { physicianOrder } from '../../../../assets/data';
import TableSelect from '../../../structure/TableSelect';

const PhysicianOrders = () => {
  return (
    <section className="verdana11 mx-10 mb-10 mt-10">
      <div className=" flex items-center justify-between border-b border-gray-600 pb-2">
        <div className="flex items-center gap-8">
          <h2 className="verdana16 font-semibold tracking-wider">Orders</h2>
          <PhysicianOrderCreateOrder />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="#">Date:</label>
            <input type="date" className="input-primary" />
          </div>
          <div className="flex items-center gap-2">
            <span>Status:</span>
            <TableSelect options={['Active', 'Pending', 'Inactive']} />
          </div>
          <div className="flex items-center gap-2">
            <input
              placeholder="search orders"
              className="input-primary"
              type="text"
            />
            <button className="btn-primary">Search</button>
          </div>
        </div>
      </div>

      <table className="mt-10 w-full overflow-auto shadow-md">
        <thead className="thead-primary">
          <tr className="verdana11">
            <th className="th-first">Order Type</th>
            <th className="th-middle">Order Title</th>
            <th className="th-middle">Date</th>
            <th className="th-middle">Status</th>
            <th className="th-last">Action</th>
          </tr>
        </thead>
        <tbody>
          {physicianOrder.map((order, i) => (
            <tr key={i} className={`border  even:bg-[#eeeeee] `}>
              <td className="td-primary text-orange-600 decoration-orange-600">
                {order.orderType}
              </td>
              <td className="td-primary">{order.orderTitle}</td>
              <td className="td-primary">{order.date}</td>

              <td
                className={`td-primary  ${
                  order.status === 'Active' && 'text-green-600'
                }`}
              >
                {order.status}
              </td>
              <td className="td-primary w-28">
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

import React from 'react';
import CreateDeduction from './CreateDeduction';
import CreatePayroll from './CreatePayroll';
import EditDeduction from './EditDeduction';
import EditPayroll from './EditPayroll';
import RemoveDeduction from './RemoveDeduction';
import RemovePayroll from './RemovePayroll';

const AssociateMenuPayroll = () => {
  return (
    <div>
      <div className="mx-5 mb-10">
        <div className="my-7">
          <div className="flex items-center gap-5">
            <h2 className="verdana16 font-semibold">Payroll</h2>
            <CreatePayroll />
          </div>
          <table className="mt-7 w-full overflow-auto shadow">
            <thead className="thead-primary">
              <tr className="verdana11">
                <th className="th-first">Type</th>
                <th className="th-middle">Salary Amount</th>
                <th className="th-middle">Federal</th>
                <th className="th-middle">State</th>
                <th className="th-middle">Skip WB check</th>
                <th className="th-middle">Start Date</th>
                <th className="th-middle">End Date</th>
                <th className="th-last">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="verdana11 w-full bg-[#e6ebf85d]">
                <td className="td-primary">Salary</td>
                <td className="td-primary">$80,000</td>
                <td className="td-primary">Unknown (0)</td>
                <td className="td-primary">Unknown (0)</td>
                <td className="td-primary">No</td>
                <td className="td-primary">10/17/19</td>
                <td className="td-primary">10/17/19</td>
                <td className="td-primary">
                  <div className="flex justify-center">
                    <EditPayroll />
                    <RemovePayroll />
                  </div>
                </td>
              </tr>
              <tr className="verdana11 w-full">
                <td className="td-primary ">Salary</td>
                <td className="td-primary">$80,000</td>
                <td className="td-primary">Unknown (0)</td>
                <td className="td-primary">Unknown (0)</td>
                <td className="td-primary">No</td>
                <td className="td-primary">10/17/19</td>
                <td className="td-primary">10/17/19</td>
                <td className="td-primary">
                  <div className="flex justify-center">
                    <EditPayroll />
                    <RemovePayroll />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>{' '}
        </div>
        <div className="my-12">
          <div className="flex items-center gap-5">
            <h2 className="verdana16 font-semibold">Payroll Deductions</h2>
            <CreateDeduction />
          </div>
          <table className="mt-7 w-full overflow-auto shadow">
            <thead className="thead-primary">
              <tr className="verdana11">
                <th className="th-first">Deduction</th>
                <th className="th-middle">Amount</th>
                <th className="th-middle">Percentage</th>
                <th className="th-middle">Start Date</th>
                <th className="th-middle">End Date</th>
                <th className="th-middle">Cumulative Amount</th>
                <th className="th-middle">Pretax</th>
                <th className="th-middle">Recurring</th>
                <th className="th-middle">Coverage</th>
                <th className="th-last">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="verdana11 w-full bg-[#e6ebf85d]">
                <td className="td-primary">Cell Phone</td>
                <td className="td-primary">$50.00</td>
                <td className="td-primary"></td>
                <td className="td-primary">08/08/22</td>
                <td className="td-primary"></td>
                <td className="td-primary">$0.00</td>
                <td className="td-primary">
                  <div className="flex justify-center">
                    <input type="checkbox" className="input-primary" />
                  </div>
                </td>
                <td className="td-primary">
                  <div className="flex justify-center">
                    <input type="checkbox" className="input-primary" />
                  </div>
                </td>
                <td className="td-primary">Full Deduction Amount</td>
                <td className="td-primary">
                  <div className="flex justify-center">
                    <EditDeduction />
                    <RemoveDeduction />
                  </div>
                </td>
              </tr>
              <tr className="verdana11 w-full">
                <td className="td-primary">Cell Phone</td>
                <td className="td-primary">$50.00</td>
                <td className="td-primary"></td>
                <td className="td-primary">08/08/22</td>
                <td className="td-primary"></td>
                <td className="td-primary">$0.00</td>
                <td className="td-primary">
                  <div className="flex justify-center">
                    <input type="checkbox" className="input-primary" />
                  </div>
                </td>
                <td className="td-primary">
                  <div className="flex justify-center">
                    <input type="checkbox" className="input-primary" />
                  </div>
                </td>
                <td className="td-primary">Full Deduction Amount</td>
                <td className="td-primary">
                  <div className="flex justify-center">
                    <EditDeduction />
                    <RemoveDeduction />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>{' '}
        </div>
      </div>
    </div>
  );
};

export default AssociateMenuPayroll;

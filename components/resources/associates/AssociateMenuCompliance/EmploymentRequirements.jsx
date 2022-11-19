import React from 'react';
import { FcCancel, FcOk, FcPlus } from 'react-icons/fc';
import { employmentReq } from '../../../../assets/data';
import ComplianceTableAction from './ComplianceTableAction';

const EmploymentRequirements = () => {
  return (
    <div>
      <table className="mx-auto mt-8 w-full overflow-auto px-3 shadow-md">
        <thead className=" verdana11 border-b bg-primary-blue tracking-wider text-white ">
          <tr>
            <th className="border border-primary-gray border-t-primary-blue border-l-primary-blue py-[1px] pl-2 text-left">
              Item
            </th>
            <th className="border border-primary-gray border-t-primary-blue py-[1px] pl-2 text-left">
              Last Modified By
            </th>
            <th className="border border-primary-gray border-t-primary-blue py-[1px] pl-2 text-left">
              Last Modified By Date
            </th>
            <th className="border border-primary-gray border-t-primary-blue py-[1px] pl-2 text-left">
              Comment
            </th>
            <th className="border border-primary-gray border-t-primary-blue py-[1px] pl-2 text-left">
              Completed
            </th>
            <th className="border border-primary-gray border-t-primary-blue py-[1px] pl-2 text-left">
              Renewal
            </th>
            <th className="border border-primary-gray border-t-primary-blue border-r-primary-blue py-[1px] pl-2 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employmentReq.map((option, index) => (
            <tr key={index} className="verdana11 w-full even:bg-[#eee]">
              <td className="td-primary">{option.item} </td>
              <td className="td-primary">{option.lastModifiedBy} </td>
              <td className="td-primary">{option.lastModifiedByDate}</td>
              <td className="td-primary">{option.comment}</td>
              <td className="td-primary text-xl">
                <div className="flex items-center justify-center">
                  {option.complaint ? <FcOk /> : <FcCancel />}
                </div>
              </td>
              <td className="td-primary">{option.renewal}</td>
              <td className="td-primary w-40">
                <ComplianceTableAction />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmploymentRequirements;

import React from 'react';
import { useState } from 'react';
import { FcCancel, FcOk, FcPlus } from 'react-icons/fc';
import { employmentReq, medicalReq } from '../../../../assets/data';
import ComplianceActionsTd from './ComplianceActionsTd';
import ComplianceTableAction from './ComplianceTableAction';

const MedicalRequirements = () => {
  return (
    <div>
      <table className="mx-auto mt-4 w-full overflow-auto px-3 shadow-md">
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
              Compliant
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
          {medicalReq.map((option, index) => (
            <tr key={index} className="verdana11 w-full even:bg-[#eee]">
              <ComplianceActionsTd
                option={option}
                category={'Medical Requirements'}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicalRequirements;

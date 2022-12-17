import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import DeletePopup from '../../../structure/DeletePopup';
import PhysicianEditAddressInfo from './PhysicianEditAddressInfo';

const PhysicianContactInfoTable = () => {
  return (
    <div className="verdana12 flex w-full border-t border-primary-gray">
      <div className="verdana10 mr-3 border-r border-primary-gray pt-1 pr-3">
        <PhysicianEditAddressInfo />{' '}
        <DeletePopup toDelete="address/phone info" />
      </div>
      <div className="flex w-full justify-between pt-1">
        <div>
          <h2 className="mb-1 font-semibold">Work Address</h2>
          <p>222 Tom Carson Road</p>
          <p>Winfield, LA 71483</p>
        </div>
        <div>
          <h2 className="mb-1 font-semibold">Phone</h2>
          <div className="flex gap-1">
            Fax: (318) 628-2221 <FcCheckmark className="scale-150" />
          </div>
          <div>Work: (318) 628-2222</div>
        </div>
      </div>
    </div>
  );
};

export default PhysicianContactInfoTable;

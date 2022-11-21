import React from 'react';
import CreatePayRate from './CreatePayRate';

const AssociateMenuPayRates = () => {
  return (
    <div>
      <div className="mx-5 mb-16 mt-7">
        <div className="flex items-center gap-4">
          <h1 className="verdana16 font-semibold">Pay Rates</h1>
          <CreatePayRate />
        </div>
        {/* table */}
      </div>
    </div>
  );
};

export default AssociateMenuPayRates;

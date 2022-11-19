import React from 'react';
import CreateNote from '../AssociateMenuNotes/CreateNote';
import EmploymentRequirements from './EmploymentRequirements';

const AssociateMenuCompliance = () => {
  return (
    <div className="px-5 pb-14">
      <div className="mt-5">
        <h2 className="verdana16 my-3 font-semibold">
          Compliance - Employment Requirements
        </h2>
        <div className="w-fit">
          <CreateNote />
        </div>
        <EmploymentRequirements />
      </div>
      <div className="mt-5">
        <h2 className="verdana16 my-3 font-semibold">
          Compliance - Employment Requirements
        </h2>
        <div className="w-fit">
          <CreateNote />
        </div>
      </div>
      <div className="mt-5">
        <h2 className="verdana16 my-3 font-semibold">
          Compliance - Employment Requirements
        </h2>
        <div className="w-fit">
          <CreateNote />
        </div>
      </div>
    </div>
  );
};

export default AssociateMenuCompliance;

import React from 'react';
import CreateNote from '../AssociateMenuNotes/CreateNote';
import CreateLicense from './CreateLicense';
import CreateSkills from './CreateSkills';
import EditEmploymentReq from './EditEmploymentReq';
import EditMedicalReq from './EditMedicalReq';
import EmploymentRequirements from './EmploymentRequirements';
import MedicalRequirements from './MedicalRequirements';

const AssociateMenuCompliance = () => {
  return (
    <div className="px-5 pb-14">
      <div className="mt-5">
        <h2 className="verdana16 my-3 font-semibold">
          Compliance - Employment Requirements
        </h2>
        <div className="w-fit">
          <EditEmploymentReq />
        </div>
        <EmploymentRequirements />
      </div>
      <div className="mt-14">
        <h2 className="verdana16 my-3 font-semibold">
          Compliance - Medical Requirements
        </h2>
        <div className="w-fit">
          <EditMedicalReq />
        </div>
        <MedicalRequirements />
      </div>
      <div className="mt-14">
        <div className="flex items-center  gap-3">
          <h2 className="verdana16 my-3 font-semibold">
            License/Certification
          </h2>
          <div className="w-fit">
            <CreateLicense />
          </div>
        </div>
        <p className=" verdana11 mt-3">
          This associate does not have any licenses
        </p>
      </div>
      <div className="mt-14">
        <div className="flex items-center  gap-3">
          <h2 className="verdana16 my-3 font-semibold">Skills</h2>
          <div className="w-fit">
            <CreateSkills />
          </div>
        </div>
        <p className=" verdana11 mt-3">
          This associate does not have any spacialty skills
        </p>
      </div>
    </div>
  );
};

export default AssociateMenuCompliance;

import React from 'react';
import AssociateCreateOrgAccess from './AssociateCreateOrgAccess';
import AssociateCreateReports from './AssociateCreateReports';
import AssociateCreateWebsiteAccess from './AssociateCreateWebsiteAccess';

const AssociateMenuWebsite = () => {
  return (
    <div>
      <div className="mx-2 my-14 flex md:mx-9">
        <div className="w-[50%] border-primary-gray py-5 md:border-r">
          <div className="mb-5 flex items-center gap-3">
            <h2 className="text-lg font-semibold">Website Access </h2>
            <AssociateCreateWebsiteAccess />
          </div>
          <p>This staff does not have access to the website</p>
        </div>
        <div className="flex w-[50%]  flex-col items-center gap-5 px-3 md:px-8">
          <div className="w-full border-primary-gray py-5">
            <div className="mb-5 flex  items-center gap-3">
              <h2 className="text-lg font-semibold">Security </h2>
            </div>
            <p>This staff does not belong to any roles</p>
          </div>
          <div className="w-full py-10">
            <div className="mb-5 flex  items-center gap-3">
              <h2 className="text-lg font-semibold">Org Access</h2>
              <AssociateCreateOrgAccess />
            </div>
            <p>This staff does not have any org access</p>
          </div>
        </div>
      </div>
      <div className="mx-2 md:mx-9">
        <div className="w-full py-10">
          <div className="mb-5 flex  items-center gap-3">
            <h2 className="text-lg font-semibold">Reports</h2>
            <AssociateCreateReports />
          </div>
          <p>This associate does not have any reports</p>
        </div>
      </div>
    </div>
  );
};

export default AssociateMenuWebsite;

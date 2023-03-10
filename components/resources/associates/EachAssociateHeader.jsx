<<<<<<< HEAD
import React from 'react';
import EditPopover from './EditPopover';

const EachAssociateHeader = ({ associateUrl }) => {
  return (
    <div className="flex w-full flex-col items-center rounded border px-5 pt-5 pb-12 text-sm shadow">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-8">
          <h2 className="verdana16 font-semibold tracking-wide">
            {associateUrl}
          </h2>
          <EditPopover />
        </div>
        <div className="space-x-5">
          <span className="cursor-pointer text-xs font-semibold tracking-wide text-blue-800 underline">
            WIKI Help
          </span>
=======
import EditAssociate from './AssociateMenuProfile/EditAssociate';
import EditPopover from './EditPopover';
import MoreAssociateInfo from './MoreAssociateInfo';
import UniversityList from './UniversityList';

const EachAssociateHeader = ({ associateUrl }) => {
  return (
    <div className="flex w-full flex-col items-center rounded border px-5 pt-5 pb-12 shadow">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="verdana16 font-semibold tracking-wide">
            {associateUrl}
          </h2>
          <EditAssociate />
          <EditPopover />
        </div>
        <div className="flex items-center gap-8">
          <UniversityList />
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
          <span className="text-base font-extrabold text-green-800">
            ASSOCIATE
          </span>
        </div>
      </div>
<<<<<<< HEAD
      <div className="verdana12 mt-6 flex w-full max-w-[800px] items-center justify-between">
=======
      <div className="mt-6 flex w-full max-w-[800px] items-center justify-between">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end justify-center gap-[6px]">
            <p className="font-semibold">Classification:</p>
            <p className="font-semibold">Phone:</p>
            <p className="font-semibold">Status:</p>
          </div>
          <div className="flex flex-col justify-center gap-[6px]">
            <p>Field Staff - Full Time</p>
<<<<<<< HEAD
            <p>+12 229 736 463</p>
=======
            <div className="flex items-center gap-1">
              <MoreAssociateInfo /> +12 229 736 463
            </div>
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
            <p>Active</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end gap-[6px]">
            <p className="font-semibold">Discipline:</p>
            <p className="font-semibold">Started:</p>
            <p className="font-semibold">Updated:</p>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p>Registered Nurse</p>
            <p>11/04/2022</p>
            <p>11/04/2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachAssociateHeader;

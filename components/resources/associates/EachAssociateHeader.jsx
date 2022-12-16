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
          <span className="text-base font-extrabold text-green-800">
            ASSOCIATE
          </span>
        </div>
      </div>
      <div className="mt-6 flex w-full max-w-[800px] items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-end justify-center gap-[6px]">
            <p className="font-semibold">Classification:</p>
            <p className="font-semibold">Phone:</p>
            <p className="font-semibold">Status:</p>
          </div>
          <div className="flex flex-col justify-center gap-[6px]">
            <p>Field Staff - Full Time</p>
            <div className="flex items-center gap-1">
              <MoreAssociateInfo /> +12 229 736 463
            </div>
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

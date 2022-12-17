import EditAssociate from './EditAssociate';
import InactivateAssociate from './InactivateAssociate';
import ReassignAssociate from './ReassignAssociate';
import TerminateAssociate from './TerminateAssociate';

const ProfileEncounter = () => {
  return (
    <div className="w-[50%] px-2 md:border-l">
      <div className="flex">
        <h2 className="verdana14 mb-5 font-semibold tracking-wider">
          Current Encounter
        </h2>
      </div>
      <div className="flex ">
        <div className="verdana10 mr-2 border-r px-1">
          <EditAssociate />
          <InactivateAssociate />
          <TerminateAssociate />
          <ReassignAssociate />
        </div>
        <div className="w-[100%] px-3">
          <div className="my-2 flex">
            <p className="w-[150px] text-right font-semibold">Status: </p>
            <p className="ml-3">Active</p>
          </div>
          <div className="my-2 flex">
            <p className="w-[150px] text-right font-semibold">
              Classification:{' '}
            </p>
            <p className="ml-3">Field Staff - Full Time</p>
          </div>
          <div className="my-2 flex">
            <p className="w-[150px] text-right font-semibold">Discipline: </p>
            <p className="ml-3">Registered Nurse</p>
          </div>
          <div className="my-2 flex">
            <p className="w-[150px] text-right font-semibold">Hire Date: </p>
            <p className="ml-3">1/1/2021</p>
          </div>
          <div className="my-2 flex">
            <p className="w-[150px] text-right font-semibold">Start Date: </p>
            <p className="ml-3">1/1/2021</p>
          </div>
          <div className="my-2 flex">
            <p className="w-[150px] text-right font-semibold">Supervisor: </p>
            <p className="ml-3"> Nichola Dadzie </p>
          </div>
          <div className="my-2 flex">
            <p className="w-[150px] text-right font-semibold">
              Associate Number:{' '}
            </p>
            <p className="ml-3"></p>
          </div>
          <div className="my-2 flex">
            <p className="w-[150px] text-right font-semibold">Associate NPI:</p>
            <p className="ml-3"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEncounter;

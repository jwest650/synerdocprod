<<<<<<< HEAD
import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';

const EditAssociateAgencies = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <span onClick={onOpen}>
        <p className="verdana10 mr-2 cursor-pointer pt-[2px] text-secondary-color underline">
          [Edit]
        </p>
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana16 font-semibold">
                Edit Associate Agencies/ Territories/ Teams
              </h1>

              <div className="mt-10"></div>
              <div className="mt-8 flex w-full justify-end gap-3">
                <button
                  type="submit"
                  className="rounded bg-[#0141CF] px-4 py-1 text-white shadow"
                >
                  Save
                </button>
                <button
                  onClick={onClose}
                  className="rounded bg-gray-500 px-4 py-1 text-white shadow"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </ModalContent>
      </Modal>
    </>
=======
import GeneralTreeview from '../../../structure/GeneralTreeview';
import { agencyAssignment } from '../associateDataFour';
import { agencyAssignmentRules } from '../associateDatatwo';

const EditAssociateAgencies = ({ associateUrl, setShowInit }) => {
  return (
    <div className="px-10">
      <h1 className="verdana14 mb-3 border-b border-primary-gray pb-2 font-semibold">
        Edit Associoate Agencies/Territories/Teams
      </h1>
      <p className="text-gray-500">
        Edit the agencies/territories/teams that the associate is available to
        be assigned work to
      </p>
      <div className="flex w-full items-start gap-6">
        <div className="w-[40%]">
          <h2 className="verdana16 mb-2 mt-5 font-semibold">{associateUrl}</h2>
          <div className="flex flex-col items-center justify-center gap-3 rounded border-2 bg-texiary-blue p-6 shadow">
            <>
              <div className="flex w-full items-center justify-center">
                <label className="mr-3 w-[50%] text-end font-semibold">
                  Status:
                </label>
                <p className=" w-[100%] ">Active</p>
              </div>
              <div className="flex w-full justify-center">
                <label className="mr-3 w-[50%] text-end font-semibold">
                  Classification:
                </label>
                <div className="w-full">Administrative:</div>
              </div>
              <div className="flex w-full items-center justify-center">
                <label className="mr-3 w-[50%] text-end font-semibold">
                  Discipline:
                </label>
                <div className="w-full">Registered Nurse:</div>
              </div>
              <div className="flex w-full items-center justify-center">
                <label className="mr-3 w-[50%] text-end font-semibold">
                  Hire Date:
                </label>
                <p className=" w-[100%] ">7/22/2022</p>
              </div>
              <div className="flex w-full items-center justify-center">
                <label className="mr-3 w-[50%] text-end font-semibold">
                  Start Date:
                </label>
                <p className=" w-[100%] ">7/22/2022</p>
              </div>
              <div className="flex w-full items-center justify-center">
                <label className="mr-3 w-[50%] text-end font-semibold">
                  Supervisor
                </label>
                <p className="w-[100%]">Cicekci Heidy:</p>
              </div>
              <div className="flex w-full items-center justify-center">
                <label className="mr-3 w-[50%] text-end font-semibold">
                  Associate NPI:
                </label>
                <p className="w-[100%] "></p>
              </div>
            </>
          </div>
        </div>
        <div className="w-[60%]">
          <h2 className="verdana16 mb-2 mt-5  flex items-center gap-1 px-6 font-semibold">
            Agency/Territory/Team/ Assignment
          </h2>
          <div className="flex w-full items-start gap-4 rounded border-2 bg-texiary-blue px-5 pb-5 shadow">
            <GeneralTreeview treeviewData={agencyAssignment} />
            <ul className="w-[45rem] py-4">
              <li className="verdana12 mb-2 font-semibold">
                To change your home agency, click on the agency name
              </li>
              {agencyAssignmentRules.map((option, index) => (
                <li key={index} className="py-1">
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex w-full justify-end gap-3">
            <button
              onClick={() => setShowInit(true)}
              className="rounded bg-primary-blue px-4 py-1 text-white shadow"
            >
              Save
            </button>
            <button
              onClick={() => setShowInit(true)}
              className="rounded bg-gray-500 px-4 py-1 text-white shadow"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
  );
};

export default EditAssociateAgencies;

import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import { FcEditImage } from 'react-icons/fc';
import TableSelect from '../../../structure/TableSelect';

const AssociateCreateReports = ({ setShowReports, action }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    setShowReports(true);
    onClose();
  };
  return (
    <>
      {action === 'create' && (
        <span
          onClick={onOpen}
          className="btn-primary flex cursor-pointer items-center gap-1"
        >
          <BiPlus className="scale-150" />
          <span>Create Report</span>
        </span>
      )}
      {action === 'edit' && (
        <span
          onClick={onOpen}
          className="mr-5 border-r border-primary-gray py-2 pr-5"
        >
          <FcEditImage className="scale-150" />
        </span>
      )}
      <Modal isOpen={isOpen} size={'2xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
<<<<<<< HEAD
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
=======
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10 ">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana16 font-bold">
                {action === 'create' ? 'Create' : 'Edit'} Report
              </h1>
              <p className="verdana11 mt-2 text-gray-500">
                Select a report and enter start date.
              </p>
              <div className="verdana12 mx-2 mt-14 w-full space-y-5">
                <div className="flex w-full items-start gap-4 ">
                  <label className="flex w-[30%] items-center justify-end font-medium ">
                    <span className="text-primary-orange">*</span>Report Name:
                  </label>
                  <div className="w-[70%]">
                    <TableSelect
                      options={[
                        'Global Service Note Report (Batch)',
                        'Hospice Item Set Response Files (Response)',
                        'Medications not approved to profile Spreadsheet (Batch)',
                        'NOE Report Spreadsheet (Batch)',
                      ]}
                    />
                  </div>
                </div>

                <div className="flex w-full items-center gap-4 ">
                  <label className="flex w-[30%] items-center justify-end font-medium ">
                    <span className="text-primary-orange">*</span>Start Date:
                  </label>
                  <div className="flex w-[70%] items-center gap-1">
                    <input
                      type="date"
                      placeholder=""
                      className="input-primary w-60"
                    />
                  </div>
                </div>
                <div className="flex w-full items-start gap-4">
                  <label className="flex w-[30%] items-center justify-end font-medium ">
                    End Date:
                  </label>
                  <div className="w-[70%]">
                    <input
                      type="date"
                      placeholder=""
                      className="input-primary w-60"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-14 flex w-full justify-end gap-3">
                <button
                  type="submit"
                  className="rounded bg-primary-blue px-4 py-1 text-white shadow"
                >
                  Save
                </button>
                <div
                  onClick={onClose}
                  className="cursor-pointer rounded bg-gray-500 px-4 py-1 text-white shadow"
                >
                  Cancel
                </div>
              </div>
            </form>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssociateCreateReports;

import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { FcCancel, FcOk } from 'react-icons/fc';
import DeletePopup from '../structure/DeletePopup';
import { uploadSeviceNotes } from './homeData';

const UploadSeviceNotes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span
        onClick={onOpen}
        className="flex cursor-pointer items-center gap-2 text-primary-orange underline"
      >
        <BsDot className="scale-150 text-base text-black" />
        Attach uploaded service notes
      </span>
      <Modal isOpen={isOpen} size={'4xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10 ">
            <h1 className="verdana18 font-semibold">Upload Service Notes</h1>

            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="verdana11 text-primary-gray">
                You have 10 service notes that are not attached to a service.
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="showdeleteditemsingrid1">
                  show deleted items in grid
                </label>
                <input
                  type="checkbox"
                  id="showdeleteditemsingrid1"
                  className="input-primary"
                />
              </div>
            </div>

            <table className="mt-2 min-w-full overflow-auto shadow-md">
              <thead className="thead-primary">
                <tr>
                  <th className="th-first"></th>
                  <th className="th-middle">Patient</th>
                  <th className="th-middle">Associate</th>
                  <th className="th-middle">Service Date</th>
                  <th className="th-middle">Certification Date</th>
                  <th className="th-middle">Note Type</th>
                  <th className="th-middle">Attached</th>
                  <th className="th-last">Action</th>
                </tr>
              </thead>
              <tbody>
                {uploadSeviceNotes.map((patient, index) => (
                  <tr key={index} className="even:bg-[#eeeeee]">
                    <td className="td-primary w-6">
                      <input type="checkbox" className="input-primary" />
                    </td>
                    <td className="td-primary">{patient.patient}</td>
                    <td className="td-primary">{patient.associate}</td>
                    <td className="td-primary">{patient.serviceDate}</td>
                    <td className="td-primary">
                      {patient.certificationPeriod}
                    </td>
                    <td className="td-primary">{patient.noteType}</td>
                    <td className="td-primary">
                      <div className="flex items-center justify-center">
                        {patient.attached ? (
                          <FcOk className="scale-150" />
                        ) : (
                          <FcCancel className="scale-150" />
                        )}
                      </div>
                    </td>
                    <td className="td-primary">
                      <span className="flex items-center justify-center">
                        <DeletePopup
                          deleteIcon={true}
                          toDelete="service note"
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-14 flex w-full justify-end gap-3">
              <button
                onClick={onClose}
                className="rounded bg-primary-blue px-4 py-1 text-white shadow"
              >
                Continue
              </button>
              <div
                onClick={onClose}
                className="cursor-pointer rounded bg-gray-500 px-4 py-1 text-white shadow"
              >
                Cancel
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UploadSeviceNotes;

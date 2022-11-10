import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { FcSearch } from 'react-icons/fc';
import { doctorPatients } from '../../../assets/data';

const DoctorHistory = ({ physicianName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span
        onClick={onOpen}
        // className="flex cursor-pointer items-center gap-1 rounded bg-orange-600 py-1 px-2 text-white"
      >
        <FcSearch />
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <h2 className="mt-3 text-2xl font-medium">
              {physicianName}&apos;s History
            </h2>
            <table className="mt-7 min-w-full overflow-auto">
              <thead className="border-b bg-[#0141CF] text-[18px] tracking-wider text-white">
                <tr>
                  <th className=" border-gray-100  pl-2 text-left">
                    Patient Name
                  </th>
                  <th className=" border-gray-100 pl-2 text-left">SOC Date</th>
                  <th className=" border-gray-100 pl-2 text-left">Where</th>
                </tr>
              </thead>
              <tbody>
                {doctorPatients.map((patients, i) => (
                  <tr key={i} className={`border even:bg-[#eeeeee] `}>
                    <td className=" max-h-[20px] min-w-[100px] border border-gray-400 py-1 px-2 font-medium">
                      {patients.name}
                    </td>
                    <td className=" max-h-[20px] min-w-[70px] cursor-pointer border border-gray-400 py-1 px-2 font-medium text-orange-600 underline decoration-orange-600">
                      {patients.socDate}
                    </td>
                    <td className=" max-h-[20px] min-w-[100px] cursor-pointer border border-gray-400 py-1 px-2 font-medium">
                      {patients.where}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={onClose}
              className="mt-10 rounded bg-gray-500 px-4 py-1 text-white shadow outline-none"
            >
              Close
            </button>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DoctorHistory;

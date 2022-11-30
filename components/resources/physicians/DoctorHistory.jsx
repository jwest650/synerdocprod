import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FcSearch } from 'react-icons/fc';
import { doctorPatients } from '../../../assets/data';
import SearchIcon from '../../../assets/images/search.png';

const DoctorHistory = ({ physicianName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span onClick={onOpen}>
        <Image src={SearchIcon} alt="icon" width={16} height={16} />
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <h2 className="verdana18 mt-3 font-medium">
              {physicianName}&apos;s History
            </h2>
            <table className="mt-3 min-w-full overflow-auto">
              <thead className="thead-primary">
                <tr>
                  <th className="th-first">Patient Name</th>
                  <th className="th-middle">SOC Date</th>
                  <th className="th-last">Where</th>
                </tr>
              </thead>
              <tbody>
                {doctorPatients.map((patients, i) => (
                  <tr key={i} className={`border even:bg-[#eeeeee] `}>
                    <td className="td-primary min-w-[100px]">
                      {patients.name}
                    </td>
                    <td className="td-primary min-w-[70px] text-primary-orange underline">
                      {patients.socDate}
                    </td>
                    <td className="td-primary min-w-[100px]">
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

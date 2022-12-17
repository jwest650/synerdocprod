import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';

const CreateSkills = ({ option, category }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span
        onClick={onOpen}
        className="btn-primary flex cursor-pointer items-center justify-center gap-1 "
      >
        <BiPlus className="scale-150" />
        <span>Create Skills</span>
      </span>
      <Modal isOpen={isOpen} size="xs" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10">
            <h1 className="verdana16 font-semibold">Create Skills</h1>

            <table className="mx-auto mt-4 w-full overflow-auto px-3 shadow-md">
              <thead className="thead-primary">
                <tr>
                  <th className="th-first"></th>
                  <th className="th-last">Skills</th>
                </tr>
              </thead>
              <tbody>
                <tr className="verdana11 w-full even:bg-[#eee]">
                  <td className="td-primary">
                    <div className="flex items-center justify-center">
                      <input type="checkbox" className="input-primary" />
                    </div>
                  </td>
                  <td className="td-primary">Endocrine</td>
                </tr>
                <tr className="verdana11 w-full even:bg-[#eee]">
                  <td className="td-primary">
                    <div className="flex items-center justify-center">
                      <input type="checkbox" className="input-primary" />
                    </div>
                  </td>
                  <td className="td-primary">GI/Nutritional</td>
                </tr>
                <tr className="verdana11 w-full even:bg-[#eee]">
                  <td className="td-primary">
                    <div className="flex items-center justify-center">
                      <input type="checkbox" className="input-primary" />
                    </div>
                  </td>
                  <td className="td-primary">Neonatal</td>
                </tr>
                <tr className="verdana11 w-full even:bg-[#eee]">
                  <td className="td-primary">
                    <div className="flex items-center justify-center">
                      <input type="checkbox" className="input-primary" />
                    </div>
                  </td>
                  <td className="td-primary">Pediatrics</td>
                </tr>
                <tr className="verdana11 w-full even:bg-[#eee]">
                  <td className="td-primary">
                    <div className="flex items-center justify-center">
                      <input type="checkbox" className="input-primary" />
                    </div>
                  </td>
                  <td className="td-primary">Psychiatric</td>
                </tr>
                <tr className="verdana11 w-full even:bg-[#eee]">
                  <td className="td-primary">
                    <div className="flex items-center justify-center">
                      <input type="checkbox" className="input-primary" />
                    </div>
                  </td>
                  <td className="td-primary">Respiratory</td>
                </tr>
                <tr className="verdana11 w-full even:bg-[#eee]">
                  <td className="td-primary">
                    <div className="flex items-center justify-center">
                      <input type="checkbox" className="input-primary" />
                    </div>
                  </td>
                  <td className="td-primary">Wound Care</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-8 flex w-full justify-center gap-3">
              <button onClick={onClose} className="btn-secondary ">
                Save
              </button>
              <button
                onClick={onClose}
                className="verdana12 rounded bg-gray-500 px-4 py-1 text-white shadow"
              >
                Cancel
              </button>
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateSkills;

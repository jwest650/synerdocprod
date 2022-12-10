import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import TableSelect from '../../../structure/TableSelect';
import { employmentReq } from '../associateDatathree';

const EditEmploymentReq = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [option, setOption] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <span
        onClick={onOpen}
        className="btn-primary flex cursor-pointer items-center gap-1"
      >
        <BiPlus className="scale-150" />
        <span>Edit Employment Requirements</span>
      </span>
      <Modal isOpen={isOpen} size="3xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <h1 className="verdana18 font-semibold">
              Edit Employment Requirements
            </h1>

            <div>
              <table className="mx-auto mt-4 w-full overflow-auto px-3 shadow-md">
                <thead className=" verdana11 border-b bg-primary-blue tracking-wider text-white ">
                  <tr>
                    <th className="th-first">Item</th>
                    <th className="th-middle">Result</th>
                    <th className="th-middle">Completed</th>

                    <th className="th-last">Renewal</th>
                  </tr>
                </thead>
                <tbody>
                  {employmentReq?.map((option, index) => (
                    <tr key={index} className="verdana11 w-full even:bg-[#eee]">
                      <td className="td-primary">{option.item} </td>
                      <td className="td-primary">
                        <div className="flex items-center justify-center">
                          {/* {option.hasResult && ( */}
                          <TableSelect
                            //   setSelectedOption={}
                            styles={{ h: '23px', borderColor: 'gray' }}
                            options={['Select', 'Pass', 'Fail']}
                          />
                          {/* )}{' '} */}
                        </div>
                      </td>
                      <td className="td-primary">
                        <div className="flex items-center justify-center">
                          {option.hasCompleted && (
                            <input
                              type="date"
                              className="rounded border border-primary-gray shadow"
                            />
                          )}
                        </div>
                      </td>
                      <td className="td-primary">
                        <div className="flex items-center justify-center">
                          {option.hasRenewal && (
                            <input
                              type="date"
                              className="rounded border border-primary-gray shadow"
                            />
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex w-full justify-end gap-3">
              <button
                type="submit"
                onClick={onClose}
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
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditEmploymentReq;

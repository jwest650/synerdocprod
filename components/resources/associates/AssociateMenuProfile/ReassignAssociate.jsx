import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import TableSelect from '../../../structure/TableSelect';

const ReassignAssociate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <span onClick={onOpen}>
        <p className="mr-2 cursor-pointer pt-[2px] text-secondary-color underline">
          [Reassign]
        </p>
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <div className="">
                <div className="mt-4 flex w-[90%] flex-col items-center justify-center px-3">
                  <div className="my-2 flex items-center">
                    <p className="w-[150px] text-right font-medium">
                      {' '}
                      <span className="text-primary-orange">*</span>Associate to
                      Assign:{' '}
                    </p>
                    <div className="ml-3">
                      {' '}
                      <TableSelect
                        styles={{ width: '100%' }}
                        options={['Other Leave', 'Option2']}
                      />
                    </div>
                  </div>
                  <div className="my-2 flex items-center">
                    <p className="w-[150px] text-right font-medium">
                      {' '}
                      <span className="text-primary-orange">*</span>Start Date:{' '}
                    </p>{' '}
                    <input
                      type="text"
                      placeholder="11/27/1960"
                      className="input-primary ml-4 w-28"
                    />{' '}
                  </div>
                  <div className="my-2 flex items-center">
                    <p className="w-[150px] text-right font-medium">
                      End Date:
                    </p>{' '}
                    <input
                      type="text"
                      placeholder="11/27/1960"
                      className="input-primary ml-4 w-28"
                    />{' '}
                  </div>
                </div>
                <div className="verdana18  w-full border-b border-dashed border-black font-semibold">
                  Schedules to Reassign{' '}
                </div>
                <div className="w-full overflow-auto px-2 py-4">
                  <table className=" mx-auto mt-8 w-full px-3">
                    <thead className="thead-primary">
                      <tr>
                        <th className="th-first">
                          <input type="checkbox" className="input-primary" />
                        </th>
                        <th className="th-middle">Associate</th>

                        <th className="th-middle">Patient</th>
                        <th className="th-middle">Service Date </th>
                        <th className="th-middle">Time In</th>
                        <th className="th-middle">Time Out</th>
                        <th className="th-last">Message </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="w-full bg-[#e6ebf85d]">
                        <td className="td-primary w-10 px-4">
                          <input type="checkbox" />
                        </td>
                        <td className="td-primary w-60 px-2">Bailey Derbie </td>
                        <td className="td-primary w-72 px-4">Smith Jimmy </td>
                        <td className="td-primary w-60 px-4">11/11/22 </td>
                        <td className="td-primary">
                          <input type="text" className="input-primary mx-3" />
                        </td>
                        <td className="td-primary">
                          <input type="text" className="input-primary mx-3" />
                        </td>
                        <td className="td-primary w-80"></td>
                      </tr>
                      <tr className="w-full bg-[#e6ebf85d]">
                        <td className="td-primary w-10 px-4">
                          <input type="checkbox" />
                        </td>
                        <td className="td-primary w-60 px-2">Bailey Derbie </td>
                        <td className="td-primary w-72 px-4">Smith Jimmy </td>
                        <td className="td-primary w-40 px-4">11/11/22 </td>
                        <td className="td-primary">
                          <input type="text" className="input-primary mx-3" />
                        </td>
                        <td className="td-primary">
                          <input type="text" className="input-primary mx-3" />
                        </td>
                        <td className="td-primary w-80"></td>
                      </tr>
                      <tr className="w-full bg-[#e6ebf85d]">
                        <td className="td-primary w-10 px-4">
                          <input type="checkbox" />
                        </td>
                        <td className="td-primary w-60 px-2">Bailey Derbie </td>
                        <td className="td-primary w-72 px-4">Smith Jimmy </td>
                        <td className="td-primary w-40 px-4">11/11/22 </td>
                        <td className="td-primary">
                          <input type="text" className="input-primary mx-3" />
                        </td>
                        <td className="td-primary">
                          <input type="text" className="input-primary mx-3" />
                        </td>
                        <td className="td-primary w-80"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
            {/* </ModalBody> */}
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReassignAssociate;

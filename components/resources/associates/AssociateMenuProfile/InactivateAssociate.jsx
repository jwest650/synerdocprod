import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import TableSelect from '../../../structure/TableSelect';

const InactivateAssociate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <span onClick={onOpen}>
        <p className="mr-2 cursor-pointer pt-[2px] text-secondary-color underline">
          [Inactivate]
        </p>
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 font-semibold">Inactivate Associate</h1>

              <div className="">
                <div className="mt-10 flex w-[85%] flex-col items-center justify-center px-3">
                  <div className="my-2 flex items-center">
                    <p className="w-[150px] text-right">
                      {' '}
                      <span className="text-primary-orange">*</span>Reason:{' '}
                    </p>
                    <div className="ml-3">
                      {' '}
                      <TableSelect
                        styles={{ width: '100%' }}
                        options={['Other Leave', 'Option2']}
                      />
                    </div>
                  </div>
                  <div className="my-2 flex justify-center">
                    <p className="w-[150px] text-right">
                      {' '}
                      <span className="text-primary-orange">*</span>Inactivation
                      Date:{' '}
                    </p>{' '}
                    <input
                      type="text"
                      placeholder="11/27/1960"
                      className="input-primary ml-4 w-28"
                    />{' '}
                  </div>
                </div>
                <p className="my-9 font-semibold">
                  All future scheduled services assigned to this Associate will
                  be unassigned.
                </p>
                <div className="w-fit border-b border-dashed border-black font-semibold">
                  All scheduled services assigned to this Associate that match
                  the inactive /termination date will be unassigned if checked.
                </div>

                <table className=" mx-auto mt-8 w-full overflow-auto px-3">
                  <thead className="thead-primary">
                    <tr>
                      <th className="th-first">
                        <input type="checkbox" className="" />
                      </th>
                      <th className="th-middle">Date</th>

                      <th className="th-middle">Services</th>
                      <th className="th-middle">Time In</th>
                      <th className="th-last">Time Out</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="w-full bg-[#e6ebf85d]">
                      <td className="td-primary w-10">
                        <input type="checkbox" />
                      </td>
                      <td className="td-primary w-10">11/11/22</td>
                      <td className="td-primary w-72">
                        Hospice MSW - Initial Assessment Visit{' '}
                      </td>
                      <td className="td-primary">
                        <input type="text" className="input-primary mx-3 " />
                      </td>
                      <td className="td-primary">
                        <input type="text" className="input-primary mx-3" />
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default InactivateAssociate;

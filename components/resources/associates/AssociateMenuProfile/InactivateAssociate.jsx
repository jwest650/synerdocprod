import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';

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
              <h1 className="text-xl font-semibold">Inactivate Associate</h1>

              <div className="">
                <div className="flex w-[100%] flex-col items-center justify-center px-3">
                  <div className="my-2 flex">
                    <p className="w-[150px] text-right font-semibold">
                      {' '}
                      <span className="text-primary-orange">*</span>Reason:{' '}
                    </p>
                    <div className="ml-3">
                      {' '}
                      <Select
                        css={{ backgroundColor: '#c6d8ffe1', border: 'none' }}
                        className="shadow outline-none"
                        size="xs"
                      >
                        <option value="option1" className="text-gray-800">
                          Other Leave{' '}
                        </option>
                        <option value="option1" className="text-gray-800">
                          Option2{' '}
                        </option>
                      </Select>
                    </div>
                  </div>
                  <div className="my-2 flex">
                    <p className="w-[150px] text-right font-semibold">
                      {' '}
                      <span className="text-primary-orange">*</span>Inactivation
                      Date:{' '}
                    </p>{' '}
                    <input
                      type="text"
                      placeholder="11/27/1960"
                      className="ml-4 w-28 rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                    />{' '}
                  </div>
                </div>
                <p className="my-9 px-2 font-semibold">
                  All future scheduled services assigned to this Associate will
                  be unassigned.
                </p>
                <div className="w-fit border-b border-dashed border-black px-2 font-semibold">
                  All scheduled services assigned to this Associate that match
                  the inactive /termination date will be unassigned if checked.
                </div>

                <table className=" mx-auto mt-8 w-full overflow-auto px-3">
                  <thead className="border-b bg-primary-blue text-[18px] tracking-wider text-white">
                    <tr>
                      <th className="border-primary-gray border-t-primary-blue border-l-primary-blue px-4 text-left">
                        <input type="checkbox" className="" />
                      </th>
                      <th className=" border-primary-gray border-t-primary-blue pl-2 text-left">
                        Date
                      </th>

                      <th className=" border-primary-gray border-t-primary-blue pl-2 text-left">
                        Services
                      </th>
                      <th className=" border-primary-gray border-t-primary-blue pl-2 text-left">
                        Time In
                      </th>
                      <th className=" border-primary-gray border-t-primary-blue border-r-primary-blue pl-2 text-left">
                        Time Out
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="w-full bg-[#e6ebf85d]">
                      <td className="w-10 border border-gray-400 py-2 px-4">
                        <input type="checkbox" />
                      </td>
                      <td className="w-10 border border-gray-400 px-2">
                        11/11/22
                      </td>
                      <td className="w-72 border border-gray-400 px-4">
                        Hospice MSW - Initial Assessment Visit{' '}
                      </td>
                      <td className="border border-gray-400">
                        <input
                          type="text"
                          className="mx-3 border px-3 outline-none "
                        />
                      </td>
                      <td className="border border-gray-400">
                        <input
                          type="text"
                          className="mx-3 border px-3 outline-none "
                        />
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

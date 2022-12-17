import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
<<<<<<< HEAD
=======
  Tooltip,
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
  useDisclosure,
} from '@chakra-ui/react';
import TableSelect from '../../../structure/TableSelect';

const TerminateAssociate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
<<<<<<< HEAD
      <span onClick={onOpen}>
        <p className="mr-2 cursor-pointer py-[5px] text-secondary-color underline">
          [Terminate]
        </p>
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 font-semibold">Terminate Associate</h1>

              <div className="">
                <div className="mt-5 flex w-[85%] flex-col items-center justify-center px-3">
                  <div className="my-2 flex items-center">
=======
      <Tooltip hasArrow label={`Terminate`} fontSize="11px" color="white">
        <span onClick={onOpen}>
          <p className="mr-2 cursor-pointer py-[5px] text-secondary-color underline">
            [Terminate]
          </p>
        </span>
      </Tooltip>
      <Modal isOpen={isOpen} size={'3xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana16 font-semibold">Terminate Associate</h1>

              <div className="">
                <div className="mt-5 flex w-[85%] flex-col items-center justify-center px-3">
                  <div className="my-1.5 flex items-center">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
                    <p className="w-[150px] text-right font-medium">
                      {' '}
                      <span className="text-primary-orange">*</span>Reason:{' '}
                    </p>
                    <div className="ml-3">
                      <TableSelect
                        styles={{ width: '100%' }}
                        options={['Other Leave', 'Option2']}
                      />
                    </div>
                  </div>

<<<<<<< HEAD
                  <div className="my-2 flex items-center">
=======
                  <div className="my-1.5 flex items-center">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
                    <p className="w-[150px] text-right font-medium">
                      Eligible for Rehire:
                    </p>{' '}
                    <div className="ml-4 w-28 pt-0.5">
                      <input type="checkbox" className="input-primary" />{' '}
                    </div>
                  </div>
<<<<<<< HEAD
                  <div className="my-2 flex items-center">
=======
                  <div className="my-1.5 flex items-center">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
                    <p className="w-[150px] text-right font-medium">
                      {' '}
                      <span className="text-primary-orange">*</span> Terminate
                      Date:{' '}
                    </p>{' '}
                    <input
                      type="text"
                      placeholder="11/27/1960"
                      className="input-primary ml-4 w-28"
                    />{' '}
                  </div>
                </div>
<<<<<<< HEAD
                <p className="my-9 font-semibold">
=======
                <p className="my-6 font-semibold">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
                  All future scheduled services assigned to this Associate will
                  be unassigned.
                </p>
                <div className="w-fit border-b border-dashed border-black font-semibold">
                  All scheduled services assigned to this Associate that match
                  the inactive /termination date will be unassigned if checked.
                </div>

                <table className=" mx-auto mt-4 w-full overflow-auto px-3">
                  <thead className="thead-primary">
                    <tr>
                      <th className="th-first">
                        <input type="checkbox" className="input-primary" />
                      </th>
                      <th className="th-middle">Date</th>

                      <th className="th-middle">Services</th>
                      <th className="th-middle">Time In</th>
                      <th className="th-last">Time Out</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="w-full bg-[#e6ebf85d]">
<<<<<<< HEAD
                      <td className="td-primary w-10">
=======
                      <td className="td-primary w-8">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
                        <input type="checkbox" />
                      </td>
                      <td className="td-primary w-10">11/11/22</td>
                      <td className="td-primary w-72 ">
<<<<<<< HEAD
                        Hospice MSW - Initial Assessment Visit{' '}
                      </td>
                      <td className="td-primary">
                        <input type="text" className="input-primary mx-3" />
                      </td>
                      <td className="td-primary">
                        <input type="text" className="input-primary mx-3" />
=======
                        RN Initial Assessment Visit{' '}
                      </td>
                      <td className="td-primary">
                        <input type="text" className="input-primary w-24" />
                      </td>
                      <td className="td-primary">
                        <input type="text" className="input-primary w-24" />
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 flex w-full justify-end gap-3">
                <button
                  type="submit"
<<<<<<< HEAD
                  className="rounded bg-[#0141CF] px-4 py-1 text-white shadow"
=======
                  className="rounded bg-primary-blue px-4 py-1 text-white shadow"
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
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

export default TerminateAssociate;

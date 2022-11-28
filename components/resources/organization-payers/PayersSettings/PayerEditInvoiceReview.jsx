import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import { FcEditImage } from 'react-icons/fc';

const PayerEditInvoiceReview = ({ reviewName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <span
        onClick={onOpen}
        className="mr-5 border-r border-primary-gray py-2 pr-5"
      >
        <FcEditImage className="scale-150" />{' '}
      </span>
      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana16 font-semibold">
                Edit Payer Invoice Review Settings
              </h1>
              <table className="mx-auto mt-5 w-full overflow-auto px-3 shadow-md">
                <thead className="thead-primary">
                  <tr className="verdana11">
                    <th className="th-first">Invoice Review Type</th>
                    <th className="th-middle">Start date</th>
                    <th className="th-last">End Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="verdana11 w-full even:bg-[#eee]">
                    <td className="td-primary">{reviewName}</td>

                    <td className="td-primary">
                      <div className="flex justify-center">
                        <input type="date" className="input-primary w-32" />
                      </div>
                    </td>
                    <td className="td-primary">
                      <div className="flex justify-center">
                        <input type="date" className="input-primary w-32" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-14 flex w-full justify-end gap-3">
                <button
                  type="submit"
                  className="rounded bg-primary-blue px-4 py-1 text-white shadow"
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
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PayerEditInvoiceReview;

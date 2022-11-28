import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import { payerInvoiceReviewData } from '../../../../assets/data';

const PayerCreateInvoiceReview = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <span className="verdana11">Create Invoice Review Type</span>
      </span>
      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana16 font-semibold">
                Create Payer Invoice Review Settings
              </h1>
              <table className="mx-auto mt-5 w-full overflow-auto px-3 shadow-md">
                <thead className="thead-primary">
                  <tr className="verdana11">
                    <th className="th-first">
                      <input type="checkbox" className="input-primary" />
                    </th>
                    <th className="th-middle">Invoice Review Type</th>
                    <th className="th-middle">Start date</th>
                    <th className="th-last">End Date</th>
                  </tr>
                </thead>
                <tbody>
                  {payerInvoiceReviewData.map((option, index) => (
                    <tr key={index} className="verdana11 w-full even:bg-[#eee]">
                      <td className="td-primary">
                        <div className="flex justify-center">
                          <input
                            type="checkbox"
                            className="input-primary mx-auto"
                          />
                        </div>
                      </td>
                      <td className="td-primary">{option.title}</td>
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
                  ))}
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

export default PayerCreateInvoiceReview;

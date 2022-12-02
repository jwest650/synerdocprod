import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import TableSelect from '../../../structure/TableSelect';
import { payerServiceCat } from '../payerData';

const PayerBypassServices = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <span
        onClick={onOpen}
        className="verdana10 flex cursor-pointer items-center text-primary-orange underline"
      >
        [Bypass Services]
      </span>
      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana16 font-semibold">
                Bypass Selected Service Codes
              </h1>
              <div className="mt-5 flex gap-4">
                <p className="verdana12">
                  Edit existing address and phone number details.{' '}
                </p>
                <TableSelect options={['Skilled Nurse']} />{' '}
              </div>
              <table className="mt-3 w-full overflow-auto px-3 shadow-md">
                <thead className="thead-primary">
                  <tr>
                    <th className="th-first">
                      <div className="flex justify-center">
                        <input type="checkbox" />
                      </div>
                    </th>
                    <th className="th-last">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {payerServiceCat.map((option, index) => (
                    <tr key={index} className="w-full bg-[#e6ebf85d]">
                      <td className="td-primary w-5">
                        <div className="flex items-center justify-center">
                          <input
                            type="checkbox"
                            className="input-primary flex items-center justify-center"
                          />
                        </div>
                      </td>
                      <td className="td-primary px-2">{option.description}</td>
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

export default PayerBypassServices;

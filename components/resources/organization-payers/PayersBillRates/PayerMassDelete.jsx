import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import TableSelect from '../../../structure/TableSelect';
import { payerBillRates } from '../payerDatatwo';

const PayerMassDelete = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span
        onClick={onOpen}
        className="btn-primary flex cursor-pointer items-center gap-1"
      >
        <BiPlus className="scale-150" />
        <span>Mass Delete</span>
      </span>
      <Modal isOpen={isOpen} size={'3xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="verdana11 w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <>
              <h2 className="verdana14 font-semibold">Mass Delete</h2>
              <div className="mt-7 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <p>Agency: </p>
                  <TableSelect
                    options={['Louisiana Labor of Love', 'Option2']}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <p>Service Category: </p>
                  <TableSelect options={['Skilled Nurse', 'Option2']} />
                </div>
              </div>

              <table className="mt-3 w-full">
                <thead className="thead-primary">
                  <tr>
                    <th className="th-first">
                      <div className="flex items-center justify-center gap-2">
                        <input type="checkbox" className="input-primary" />
                        Delete
                      </div>
                    </th>
                    <th className="th-middle">Agency Name</th>
                    <th className="th-middle">Service Description</th>
                    <th className="th-middle">Start Date</th>
                    <th className="th-last">Unit of Measure</th>
                  </tr>
                </thead>
                <tbody>
                  {payerBillRates.map((option, index) => (
                    <tr key={index} className="even:bg-[#eee]">
                      <td className="td-primary">
                        <div className="flex justify-center">
                          <input type="checkbox" className="input-primary" />
                        </div>
                      </td>
                      <td className="td-primary">{option.agencyName}</td>
                      <td className="td-primary">
                        {option.serviceDescription}
                      </td>
                      <td className="td-primary">{option.startDate}</td>
                      <td className="td-primary">{option.unitOfMeasure}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-10 flex w-full justify-end gap-3">
                <button onClick={onClose} className="btn-secondary">
                  Process
                </button>
                <button
                  onClick={onClose}
                  className="btn-modalcancel cursor-pointer"
                >
                  Close
                </button>
              </div>
            </>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PayerMassDelete;

import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import { payerInvoiceReviewData } from '../../../../assets/data';
import TableSelect from '../../../structure/TableSelect';

const PayerCreateHCPC = () => {
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
        <span className="verdana11">Create Payer HCPC By Place of Service</span>
      </span>
      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 font-semibold">
                Create Payer HCPC By Place of Service
              </h1>
              <div className="verdana12 mt-8">
                <div className="flex w-full flex-col items-center gap-3.5">
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%]  justify-end">
                      <span className="text-primary-orange">*</span>Place of
                      Service:
                    </p>
                    <div className=" flex w-[65%] gap-2">
                      <TableSelect
                        options={['Assisted Living Facility', 'Option2']}
                      />{' '}
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">
                      <span className="text-primary-orange">*</span> Service
                      Code:
                    </p>
                    <div className=" flex w-[65%] items-center gap-2">
                      <TableSelect options={['Routine Care', 'Option2']} />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">
                      <span className="text-primary-orange">*</span>HCPC Code:
                    </p>
                    <div className=" flex w-[65%] items-center gap-2">
                      <input
                        type="text"
                        placeholder="Q5002"
                        className="input-primary"
                      />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">
                      <span className="text-primary-orange">*</span>HCPC
                      Modifier1:
                    </p>
                    <div className=" flex w-[65%] items-center gap-2">
                      <TableSelect options={['Select', 'Option1']} />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">
                      <span className="text-primary-orange">*</span>HCPC
                      Modifier2:
                    </p>
                    <div className=" flex w-[65%] items-center gap-2">
                      <TableSelect options={['Select', 'Option1']} />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">
                      <span className="text-primary-orange">*</span>HCPC
                      Modifier3:
                    </p>
                    <div className=" flex w-[65%] items-center gap-2">
                      <TableSelect options={['Select', 'Option1']} />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">
                      <span className="text-primary-orange">*</span>HCPC
                      Modifier4:
                    </p>
                    <div className=" flex w-[65%] items-center gap-2">
                      <TableSelect options={['Select', 'Option1']} />
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">
                      <span className="text-primary-orange">*</span> Start Date:
                    </p>
                    <div className=" flex w-[65%] items-center gap-2">
                      <input type="date" className="input-primary" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">End Date:</p>
                    <div className=" flex w-[65%] ">
                      <input type="date" className="input-primary" />
                    </div>
                  </div>
                </div>
              </div>

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

export default PayerCreateHCPC;

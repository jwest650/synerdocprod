import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import { FcEditImage } from 'react-icons/fc';
import TableSelect from '../../../structure/TableSelect';

const PayerCreateForm = ({ edit }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {edit ? (
        <FcEditImage onClick={onOpen} className="scale-150" />
      ) : (
        <span
          onClick={onOpen}
          className="btn-primary flex cursor-pointer items-center gap-1"
        >
          <BiPlus className="scale-150" />
          <span>Create Form</span>
        </span>
      )}
      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <h1 className="verdana16 font-semibold">
              {' '}
              {edit ? 'Edit' : 'Create'} Payer Form
            </h1>
            <div className="verdana12 mt-10">
              <div className="flex w-full flex-col items-center gap-3.5">
                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[35%]  justify-end">
                    Automated Form Type:
                  </p>
                  <div className=" flex w-[65%] gap-2">
                    <TableSelect
                      options={[
                        'Home Health Consents and  Agreements',
                        'Option2',
                      ]}
                    />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[35%] justify-end">
                    Upload Document Type:
                  </p>
                  <div className=" flex w-[65%] items-center gap-2">
                    <TableSelect
                      options={['Consent for Treatment - Signed', 'Option2']}
                    />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[35%] justify-end">
                    {' '}
                    <span className="text-primary-orange">*</span>Start Date:
                  </p>
                  <div className=" flex w-[65%] items-center gap-2">
                    <input type="date" className="input-primary" />{' '}
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[35%] justify-end">End Date:</p>
                  <div className=" flex w-[65%] ">
                    <input type="date" className="input-primary" />{' '}
                  </div>
                </div>

                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[35%] justify-end">Orders To Recheck:</p>
                  <div className=" flex w-[65%] ">
                    <input type="checkbox" className="input-primary" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 flex w-full justify-end gap-3">
              <button type="submit" className="btn-secondary">
                Save
              </button>
              <button onClick={onClose} className="btn-modalcancel">
                Cancel
              </button>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PayerCreateForm;

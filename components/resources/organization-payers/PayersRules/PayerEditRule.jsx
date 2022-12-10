import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { FcEditImage } from 'react-icons/fc';

const PayerEditRule = ({ option }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <span onClick={onOpen} className="">
        <FcEditImage className="scale-150" />
      </span>
      <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana16 font-semibold">Edit Payer Rule</h1>
              <p className="verdana11">Edit Payer Rule Details</p>
              <div className="verdana12 mt-8">
                <div className="flex w-full flex-col items-center gap-3.5">
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%]  justify-end">Rule Name:</p>
                    <div className=" flex w-[65%] items-center">
                      <p className="input-primary">{option.name}</p>{' '}
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">
                      Rule Description:
                    </p>
                    <div className=" flex w-[65%] items-center gap-2">
                      <p className="input-primary">{option.description}</p>{' '}
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">Group Code:</p>
                    <div className=" flex w-[65%] items-center gap-2">
                      <p className="input-primary">{option.groupCode}</p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">
                      <span className="text-primary-orange">*</span>Start Date
                    </p>
                    <div className=" flex w-[65%] ">
                      <input type="text" className="input-primary" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">End Date</p>
                    <div className=" flex w-[65%] ">
                      <input type="text" className="input-primary" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-14 flex w-full justify-end gap-3">
                <button type="submit" className="btn-secondary">
                  Save
                </button>
                <button onClick={onClose} className="btn-modalcancel">
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

export default PayerEditRule;

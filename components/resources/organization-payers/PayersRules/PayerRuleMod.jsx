import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { FcEngineering } from 'react-icons/fc';

const PayerRuleMod = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <span onClick={onOpen} className="">
        <FcEngineering className="scale-150" />
      </span>
      <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana16 font-semibold">
                Rule Modification Information{' '}
              </h1>
              <div className="verdana12 mt-8">
                <div className="flex w-full flex-col items-center gap-3.5">
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%]  justify-end">Modify User:</p>
                    <div className=" flex w-[65%] items-center">
                      <p className="input-primary">Internal</p>{' '}
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">Create Date:</p>
                    <div className=" flex w-[65%] items-center gap-2">
                      <p className="input-primary">
                        {new Date().toISOString()}
                      </p>{' '}
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">
                      Last Updated Date:
                    </p>
                    <div className=" flex w-[65%] items-center gap-2">
                      <p className="input-primary"></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-14 flex w-full justify-end gap-3">
                <button onClick={onClose} className="btn-modalcancel">
                  Close
                </button>
              </div>
            </form>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PayerRuleMod;

import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';

const AssociateCreateWebsiteAccess = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <span
        onClick={onOpen}
        className="flex cursor-pointer items-center gap-1 rounded bg-orange-600 py-1 px-2 text-white"
      >
        <BiPlus className="scale-125" />
        <span className="text-sm">Create Website Access</span>
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            {/* <ModalBody> */}
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 text-xl font-bold">
                Create Website Access{' '}
              </h1>
              <p className="verdana13 mt-2 max-w-2xl space-y-2 text-gray-500">
                <li>
                  Enter a username, decide whether to generate a passsword or
                  manually set one.
                </li>
                <li>
                  Generating a password will send the new password to the
                  user&apos;s email address. The user will have to change the
                  password on their first login.
                </li>

                <li>
                  The start date regulates when the user can start logging into
                  the website. The end date will turn off access.{' '}
                </li>
              </p>

              <div className="mt-14 w-full space-y-3">
                <div className="flex w-full items-center gap-4 ">
                  <label className="flex w-[40%] justify-end ">
                    <span className="text-primary-orange">*</span>User Name:
                  </label>
                  <div className="w-[60%]">
                    <input
                      type="text"
                      placeholder=""
                      className="w-60 rounded bg-secondary-blue px-2 text-center shadow outline-none"
                    />
                  </div>
                </div>
                <div className="flex w-full items-center gap-4 ">
                  <label className="flex w-[40%] justify-end ">Email:</label>
                  <div className="w-[60%]">currntassociate@gmail.com</div>
                </div>
                <div className="flex w-full items-start gap-4 ">
                  <label className="flex w-[40%] justify-end ">
                    Password:{' '}
                  </label>
                  <div className="w-[60%]">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <label>Generate password</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <input
                        type="text"
                        placeholder=""
                        className="w-60 rounded bg-secondary-blue px-2 text-center shadow outline-none"
                      />
                    </div>
                    <p className="verdana11 mt-1 ml-5 w-full text-primary-gray">
                      Password must be at least 6 characters, contain at least 1
                      number
                    </p>
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
            {/* </ModalBody> */}
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssociateCreateWebsiteAccess;

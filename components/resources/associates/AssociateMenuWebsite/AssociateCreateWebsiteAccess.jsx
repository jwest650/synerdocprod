import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';

const AssociateCreateWebsiteAccess = ({ setEditUserRole }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();

    setEditUserRole(() => ({
      action: true,
      from: 'associatecreatewebsiteaccess',
    }));
    onClose();
  };
  return (
    <>
      <span
        onClick={onOpen}
        className="btn-primary flex cursor-pointer items-center gap-1"
      >
        <BiPlus className="scale-150" />
        <span className="verdana11">Create Website Access</span>
      </span>
      <Modal isOpen={isOpen} size={'3xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana16 font-bold">Create Website Access </h1>
              <p className="verdana12 mt-2 max-w-2xl space-y-2 text-gray-500">
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

              <div className="verdana12 mx-2 mt-14 w-full space-y-5">
                <div className="flex w-full items-start gap-4 ">
                  <label className="flex w-[40%] items-center justify-end font-medium ">
                    <span className="mr-1 flex h-[21px] min-h-[21px] w-[21px] min-w-[21px] items-center justify-center rounded-full bg-primary-blue font-normal text-white  ">
                      1
                    </span>
                    <span className="text-primary-orange">*</span>User Name:
                  </label>
                  <div className="w-[60%]">
                    <input
                      type="text"
                      placeholder=""
                      className="input-primary w-60"
                    />
                    <p className="mt-2 text-primary-gray">
                      between 4 to 50 characters
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center gap-4 ">
                  <label className="flex w-[40%] items-center justify-end font-medium ">
                    <span className="mr-1 flex h-[21px] min-h-[21px] w-[21px] min-w-[21px] items-center justify-center rounded-full bg-primary-blue font-normal text-white  ">
                      2
                    </span>
                    Email:
                  </label>
                  <div className="w-[60%]">
                    <div className="w-[60%]">
                      <input
                        type="text"
                        disabled
                        value={'currentassociate@gmail.com'}
                        className="input-primary w-60"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-start gap-4 ">
                  <label className="flex w-[40%] items-center justify-end font-medium ">
                    <span className="mr-1 flex h-[21px] min-h-[21px] w-[21px] min-w-[21px] items-center justify-center rounded-full bg-primary-blue font-normal text-white  ">
                      3
                    </span>
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
                        className="input-primary w-60"
                      />
                    </div>
                    <p className="verdana11 mt-1 ml-5 w-full text-primary-gray">
                      Password must be at least 6 characters, contain at least 1
                      number
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center gap-4 ">
                  <label className="flex w-[40%] items-center justify-end font-medium ">
                    <span className="mr-1 flex h-[21px] min-h-[21px] w-[21px] min-w-[21px] items-center justify-center rounded-full bg-primary-blue font-normal text-white  ">
                      4
                    </span>
                    <span className="text-primary-orange">*</span>Start Date:
                  </label>
                  <div className="flex w-[60%] items-center gap-1">
                    <input
                      type="date"
                      placeholder=""
                      className="input-primary w-60"
                    />
                  </div>
                </div>
                <div className="flex w-full items-start gap-4 pt-2 ">
                  <label className="flex w-[40%] items-center justify-end font-medium ">
                    <span className="mr-1 flex h-[21px] min-h-[21px] w-[21px] min-w-[21px] items-center justify-center rounded-full bg-primary-blue font-normal text-white  ">
                      5
                    </span>
                    End Date:
                  </label>
                  <div className="w-[60%]">
                    <input
                      type="date"
                      placeholder=""
                      className="input-primary w-60"
                    />
                    <p className="verdana11 mt-1 w-full text-primary-gray">
                      leave blank if no end date
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
                <div
                  onClick={onClose}
                  className="cursor-pointer rounded bg-gray-500 px-4 py-1 text-white shadow"
                >
                  Cancel
                </div>
              </div>
            </form>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssociateCreateWebsiteAccess;

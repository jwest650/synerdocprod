import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';

const AssociateCreatePhone = () => {
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
        <span className="text-sm">Create Phone</span>
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            {/* <ModalBody> */}
            <form action="" onSubmit={handleForm}>
              <h1 className="text-xl font-semibold">
                Add Ancillary Phone Info
              </h1>
              <p>Select a phone number type and enter phone number. </p>
              <div className="mt-16">
                <div className="flex w-[70%] flex-col items-center justify-center px-3">
                  <div className="my-2 flex">
                    <p className="w-[150px] text-right font-semibold">
                      <span className="text-primary-orange">*</span> Phone Type:
                    </p>
                    <div className="ml-3">
                      <Select
                        css={{
                          backgroundColor: '#c6d8ffe1',
                          border: 'none',
                        }}
                        className="shadow outline-none"
                        size="xs"
                      >
                        <option value="option1" className="text-gray-800">
                          Home{' '}
                        </option>
                        <option value="option1" className="text-gray-800">
                          Option2{' '}
                        </option>
                      </Select>
                    </div>
                  </div>

                  <div className="my-2 flex">
                    <p className="ml-6 w-[150px] text-right font-semibold">
                      <span className="text-primary-orange">*</span> Phone:
                    </p>{' '}
                    <div className="ml-4 flex w-28 items-center gap-2 pt-0.5">
                      (
                      <input
                        type="text"
                        className="w-14 rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                      />
                      )
                      <input
                        type="text"
                        className="w-14 rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                      />
                      -
                      <input
                        type="text"
                        placeholder=""
                        className="w-14 rounded bg-secondary-blue px-2 text-center shadow outline-none"
                      />
                    </div>
                  </div>

                  <div className="my-2 flex">
                    <p className="w-[150px] text-right font-semibold">
                      Extension:
                    </p>
                    <div className="ml-3">
                      <input
                        type="text"
                        placeholder=""
                        className="w-14 rounded bg-secondary-blue px-2 text-center shadow outline-none"
                      />{' '}
                    </div>
                  </div>
                  <div className=" my-2 flex w-full justify-center">
                    <p className="w-[335px] text-right font-semibold">
                      Description:
                    </p>
                    <div className="ml-3">
                      <textarea
                        type="text"
                        placeholder=""
                        className=" w-60 rounded bg-secondary-blue px-2 text-center shadow outline-none"
                      />{' '}
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
            {/* </ModalBody> */}
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssociateCreatePhone;

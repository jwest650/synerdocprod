import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import { FiTrash2 } from 'react-icons/fi';
import TableSelect from '../../../structure/TableSelect';

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
        className="btn-primary flex cursor-pointer items-center gap-1"
      >
        <BiPlus className="scale-150" />
        <span className="verdana11">Create Phone</span>
      </span>
      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            {/* <ModalBody> */}
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 font-semibold">
                Add Ancillary Phone Info
              </h1>
              <p className="verdana12">
                Select a phone number type and enter phone number.{' '}
              </p>
              <div className="mt-16">
                <div className="flex w-[70%] flex-col items-center justify-center px-3">
                  <div className="my-2 flex">
                    <p className="w-[185px] text-right font-medium">
                      <span className="text-primary-orange">*</span> Phone Type:
                    </p>
                    <div className="ml-3">
                      <TableSelect
                        styles={{ width: '100%' }}
                        options={['Home', 'Option2']}
                      />
                    </div>
                  </div>

                  <div className="my-2 flex">
                    <p className="ml-6 w-[180px] text-right font-medium">
                      <span className="text-primary-orange">*</span> Phone:
                    </p>{' '}
                    <div className="ml-4 flex w-28 items-center gap-1 pt-0.5">
                      (
                      <input type="text" className="input-primary w-14" />
                      )
                      <input type="text" className="input-primary w-14" />
                      -
                      <input
                        type="text"
                        placeholder=""
                        className="input-primary w-14"
                      />
                    </div>
                  </div>

                  <div className="my-2 flex">
                    <p className="w-[150px] text-right font-medium">
                      Extension:
                    </p>
                    <div className="ml-3">
                      <input
                        type="text"
                        placeholder=""
                        className="input-primary w-14"
                      />{' '}
                    </div>
                  </div>
                  <div className=" my-2 flex w-full justify-center">
                    <p className="ml-[260px] w-[335px] text-right font-medium">
                      Description:
                    </p>
                    <div className="ml-3">
                      <textarea
                        type="text"
                        placeholder=""
                        className="input-primary w-60"
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

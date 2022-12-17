import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import TableSelect from '../../../structure/TableSelect';

const FacilityCreatePhone = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <span
        onClick={onOpen}
        className="btn-primary flex cursor-pointer items-center gap-1  "
      >
        <BiPlus className="scale-150" />
        <span className="verdana11">Create Phone</span>
      </span>
      <Modal isOpen={isOpen} size={'2xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
<<<<<<< HEAD
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
=======
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10 ">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 font-semibold">
                Create Ancillary Phone Info
              </h1>
              <p className="verdana12">
                Select a phone number type and enter phone number.{' '}
              </p>
              <div className="verdana12 mt-14">
                <div className="flex w-full flex-col items-center gap-3.5">
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%]  justify-end">
                      <span className="text-primary-orange">*</span>Phone Type:
                    </p>
                    <div className=" flex w-[65%] items-center">
                      <TableSelect options={['Work', 'Option2']} />
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">
                      {' '}
                      <span className="text-primary-orange">*</span> Phone :
                    </p>
                    <div className=" flex w-[65%] items-center gap-2">
                      (<input type="text" className="input-primary w-16" />)
                      <input type="text" className="input-primary w-16" />-
                      <input type="text" className="input-primary w-16" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">Extension:</p>
                    <div className=" flex w-[65%] items-center gap-2">
                      <input type="text" className="input-primary w-14" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">Description:</p>
                    <div className=" flex w-[65%] ">
                      <textarea className="input-primary" />
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

export default FacilityCreatePhone;

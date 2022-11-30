import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import TableSelect from '../../../structure/TableSelect';

const ReferralEditContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <span
        onClick={onOpen}
        className="flex cursor-pointer items-center text-primary-orange underline"
      >
        [Edit]
      </span>
      <Modal isOpen={isOpen} size={'3xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 font-semibold">
                Edit Referral Source Contact
              </h1>
              <p className="verdana12">
                Edit Referral Source Contact Information
              </p>
              <div className="verdana12 mt-14">
                <div className="flex w-full flex-col items-center gap-3.5">
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%]  justify-end">
                      <span className="text-primary-orange">*</span>
                      First/Middle/{' '}
                      <span className="text-primary-orange">*</span>Last:
                    </p>
                    <div className=" flex w-[65%] gap-2">
                      <input type="text" className="input-primary w-32" />
                      <input type="text" className="input-primary w-16" />
                      <input type="text" className="input-primary w-32" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">Phone1:</p>
                    <div className=" flex w-[65%] items-center gap-2">
                      <TableSelect options={['Work', 'Option2']} />
                      (<input type="text" className="input-primary w-14" />)
                      <input type="text" className="input-primary w-14" />-
                      <input type="text" className="input-primary w-14" />
                      ext.
                      <input type="text" className="input-primary w-14" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">Phone2:</p>
                    <div className=" flex w-[65%] items-center gap-2">
                      <TableSelect options={['Select', 'Option1']} />
                      (<input type="text" className="input-primary w-14" />)
                      <input type="text" className="input-primary w-14" />-
                      <input type="text" className="input-primary w-14" />
                      ext.
                      <input type="text" className="input-primary w-14" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">Information:</p>
                    <div className=" flex w-[65%] ">
                      <input type="text" className="input-primary" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">Email:</p>
                    <div className=" flex w-[65%] ">
                      <input type="text" className="input-primary" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[35%] justify-end">
                      <span className="text-primary-orange">*</span>Start Date:
                    </p>
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

export default ReferralEditContact;

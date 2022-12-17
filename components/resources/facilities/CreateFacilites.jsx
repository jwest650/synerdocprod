import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import TableSelect from '../../structure/TableSelect';

const CreateFacilities = () => {
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
        <span>Create Facilities</span>
      </span>
      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
<<<<<<< HEAD
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
=======
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10 ">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 font-semibold">Create Facility</h1>
              <p className="verdana12 text-gray-400">Create Facility details</p>

<<<<<<< HEAD
              <div className="verdana13 mt-10">
=======
              <div className="verdana12 mt-10">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
                <div className="flex w-full flex-col items-center gap-3.5">
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[40%]  justify-end">
                      <span className="text-primary-orange">*</span>Facility
                      Name:
                    </p>
                    <div className=" flex w-[60%] gap-2">
                      <input
                        type="text"
                        placeholder="Facility Name"
                        className="input-primary"
                      />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[40%] justify-end">Email:</p>
                    <div className=" flex w-[60%] items-center gap-2">
                      <input
                        type="email"
                        placeholder="exmaple@gmail.com"
                        className="input-primary"
                      />{' '}
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[40%] justify-end">Sales Rep:</p>
                    <div className=" flex w-[60%] ">
                      <TableSelect options={['Option1', 'Option2']} />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[40%] justify-end">
                      <span className="text-primary-orange">*</span> Start Date:
                    </p>
                    <div className=" flex w-[60%] ">
                      <input type="date" className="input-primary" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[40%] justify-end">End Date:</p>
                    <div className=" flex w-[60%] ">
                      <input type="date" className="input-primary" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex w-full justify-end gap-3">
                <button
                  type="submit"
<<<<<<< HEAD
                  className="rounded bg-[#0141CF] px-4 py-1 text-white shadow"
=======
                  className="rounded bg-primary-blue px-4 py-1 text-white shadow"
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
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

export default CreateFacilities;

import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import TableSelect from '../../structure/TableSelect';

const CreatePhysicians = () => {
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
        <span>Create Physicians</span>
      </span>
      <Modal isOpen={isOpen} size={'2xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 font-semibold">Add Physician</h1>
              <p className="verdana12 text-gray-400">
                Select a special, title and physician details
              </p>

              <div className="verdana13 mt-10">
                <div className="flex w-full flex-col items-center gap-3.5">
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[40%]  justify-end">
                      <span className="text-primary-orange">*</span>Fist Name:
                    </p>
                    <div className=" flex w-[60%] gap-2">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="input-primary"
                      />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[40%] justify-end">Middle Initial:</p>
                    <div className=" flex w-[60%] items-center gap-2">
                      <input type="text" className="input-primary" />{' '}
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[40%] justify-end">
                      <span className="text-primary-orange">*</span> Last Name:
                    </p>
                    <div className=" flex w-[60%] items-center gap-2">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="input-primary"
                      />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[40%] justify-end">Title:</p>
                    <div className=" flex w-[60%]">
                      <TableSelect
                        options={['Medical Doctor', 'Physician Assistant']}
                      />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[40%] justify-end">Speciality:</p>
                    <div className=" flex w-[60%] ">
                      <TableSelect options={['Cardiologist', 'Dentist']} />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[40%] justify-end">Email:</p>
                    <div className=" flex w-[60%] ">
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        className="input-primary"
                      />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[40%] justify-end">Physician Group:</p>
                    <div className=" flex w-[60%] ">
                      <input type="email" className="input-primary" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[40%] justify-end">Sales Rep:</p>
                    <div className=" flex w-[60%] ">
                      <TableSelect options={['Matilda Ivy', 'Option2']} />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[40%] justify-end">
                      {' '}
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
                  className="rounded bg-[#0141CF] px-4 py-1 text-white shadow"
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

export default CreatePhysicians;

import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import EmploymentDetails from './EmploymentDetails';
import PersonalDetails from './PersonalDetails';

const CreateAssociate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [birthDate, setBirthDate] = useState('');
  const [hireDate, setHireDate] = useState('');
  const [startDate, setStartDate] = useState('');

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
        <span>Create Associates</span>
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
        //  backgroundColor="transparent"
        >
          {/* <div className="w-full rounded border border-black  shadow"> */}
          <div className="w-full rounded border-[2px] border-t-[20px]  border-secondary-blue p-4 pb-10  ">
            {/* <div className="w-full rounded border border-black bg-white shadow-xl"> */}
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana16 font-semibold">Create Associate</h1>
              <div className="verdana12 mt-7 flex h-full w-full flex-col items-start justify-center gap-12 text-sm md:grid md:grid-cols-6 md:gap-0">
                <div className="w-full pb-5 md:col-span-3">
                  <div className="flex items-center gap-2 border-b-2 pb-2">
                    <div className="inline-flex h-5 min-w-[20px] max-w-[20px] items-center justify-center rounded-full bg-primary-blue text-white">
                      1
                    </div>
                    <h2 className="verdana14 font-semibold">Personal</h2>
                  </div>
                  <PersonalDetails
                    setBirthDate={setBirthDate}
                    birthDate={birthDate}
                  />
                </div>
                <div className="ml-4 w-full pl-4 pb-5 md:col-span-3 md:border-l-2">
                  <div className="mr-5 flex items-center gap-2 border-b-2 pb-2">
                    <div className="inline-flex h-5 min-w-[20px] max-w-[20px] items-center justify-center rounded-full bg-primary-blue text-white">
                      2
                    </div>
                    <h2 className=" verdana14 font-semibold">Employment</h2>
                  </div>
                  <EmploymentDetails
                    setHireDate={setHireDate}
                    hireDate={hireDate}
                    setStartDate={setStartDate}
                    startDate={startDate}
                  />
                </div>
              </div>
              <div className="mt-8 flex w-full justify-end gap-3">
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

export default CreateAssociate;

import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import TableSelect from '../../../structure/TableSelect';
import { associateAddFormData } from '../associateDatathree';

const CreateForm = ({ setShowForm, setFormType }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    setShowForm(true);
    onClose();
  };

  return (
    <>
      <span
        onClick={onOpen}
        className="btn-primary flex cursor-pointer items-center gap-1"
      >
        <BiPlus className="scale-150" />
        <span className="verdana11">Create Form</span>
      </span>
      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 font-semibold">Add Form</h1>
              <p className="verdana11 text-primary-gray">Select a form Type</p>
              <div className="verdana12 mt-14">
                <div className="flex w-full flex-col items-center gap-3.5">
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[20%] justify-end">
                      {' '}
                      <span className="text-primary-orange">*</span>Form Type:
                    </p>
                    <div className=" flex w-[80%] items-center gap-2">
                      <TableSelect
                        setSelectedOption={setFormType}
                        options={['<--Select-->', ...associateAddFormData]}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-14 flex w-full justify-end gap-3">
                <button
                  type="submit"
                  className="rounded bg-primary-blue px-4 py-1 text-white shadow"
                >
                  Continue
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

export default CreateForm;

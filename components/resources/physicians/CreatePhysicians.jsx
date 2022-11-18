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
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 font-semibold">Add Physician</h1>
              <p className="verdana12 text-gray-400">
                Select a special, title and physician details
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <div className="verdana14 space-y-[18px]">
                  <div className="flex items-center justify-end">
                    <label className="flex">
                      <span className="text-red-600">*</span>First Name:{' '}
                    </label>
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label htmlFor="">Middle Initial:</label>
                  </div>
                  <div className="flex items-center justify-end">
                    <label className="text-red-600">*</label>Last Name:{' '}
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label htmlFor="">Title:</label>
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label htmlFor="">Speciality:</label>
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label htmlFor="">Email:</label>
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label htmlFor="">Physician Group:</label>
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label htmlFor="">Sales Rep:</label>
                  </div>
                  <div className="flex items-center justify-end">
                    <label className="text-red-600">*</label>Start Date:{' '}
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label htmlFor="">End Date:</label>
                  </div>
                </div>
                <div className="space-y-[14px]">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="input-primary w-60"
                    />
                  </div>
                  <div>
                    <input type="text" className="input-primary w-40" />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="input-primary w-60"
                    />
                  </div>
                  <div className="w-full rounded border border-secondary-blue shadow-sm">
                    <TableSelect
                      styles={{ width: '100%' }}
                      options={['Medical Doctore', 'Physician Assistant']}
                    />
                  </div>{' '}
                  <div className="w-full rounded border border-secondary-blue shadow-sm">
                    <TableSelect
                      styles={{ width: '100%' }}
                      options={['Cardiologist', 'Dentist']}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="example@gmail.com"
                      className="input-primary w-60"
                    />
                  </div>
                  <div>
                    <input type="text" className="input-primary w-full" />
                  </div>
                  <div className="w-full rounded border border-secondary-blue shadow-sm">
                    <TableSelect
                      styles={{ width: '100%' }}
                      options={['Matilda Ivy']}
                    />
                  </div>{' '}
                  <div>
                    <input
                      type="text"
                      placeholder="11/27/1960"
                      className="input-primary w-28"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="11/27/1960"
                      className="input-primary w-28"
                    />
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

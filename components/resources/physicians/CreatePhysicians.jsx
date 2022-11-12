import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';

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
        className="flex cursor-pointer items-center gap-1 rounded bg-orange-600 py-1 px-2 text-white"
      >
        <BiPlus />
        <span className="text-sm">Create Physicians</span>
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          {/* <div className="absolute top-[-14px] right-0 bg-red-300"> */}
          {/* <ModalCloseButton /> */}
          {/* </div> */}
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            {/* <ModalBody> */}
            <form action="" onSubmit={handleForm}>
              <h1 className="text-xl font-semibold">Add Associate</h1>
              <p className="text-sm text-gray-400">
                Select a special, title and physician details
              </p>
              {/* <div className="mt-5"> */}
              {/* <div className="w-full md:col-span-3"> */}
              <div className="mt-10 flex justify-center gap-4">
                <div className="space-y-[14px]">
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
                <div className="space-y-[13px]">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-60 rounded bg-[#c6d8ffe1] px-2 shadow outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-40 rounded bg-[#c6d8ffe1] outline-none"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-60 rounded bg-[#c6d8ffe1] px-2 shadow outline-none"
                    />
                  </div>
                  <Select
                    css={{
                      fontSize: '13px',
                      backgroundColor: '#c6d8ffe1',
                      border: 'none',
                    }}
                    className="shadow outline-none"
                    size="xs"
                  >
                    <option value="option1" className="text-gray-800">
                      Medical Doctor
                    </option>
                    <option value="option2" className="text-gray-800">
                      Physician Assistant
                    </option>
                  </Select>
                  <Select
                    css={{
                      fontSize: '13px',
                      backgroundColor: '#c6d8ffe1',
                      border: 'none',
                    }}
                    className="shadow outline-none"
                    size="xs"
                  >
                    <option value="option1" className="text-gray-800">
                      Cardiologist{' '}
                    </option>
                    <option value="option2" className="text-gray-800">
                      Dentist{' '}
                    </option>
                  </Select>
                  <div>
                    <input
                      type="text"
                      placeholder="example@gmail.com"
                      className="w-60 rounded bg-[#c6d8ffe1] px-2 shadow outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="mt-1 w-full rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                    />
                  </div>
                  <Select
                    css={{
                      fontSize: '13px',
                      backgroundColor: '#c6d8ffe1',
                      border: 'none',
                    }}
                    className="shadow outline-none"
                    size="xs"
                  >
                    <option value="option1" className="text-gray-800">
                      Matilda Ivy
                    </option>
                  </Select>
                  <div>
                    <input
                      type="text"
                      placeholder="11/27/1960"
                      className="w-28 rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="11/27/1960"
                      className="w-28 rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                    />
                  </div>
                </div>
              </div>
              {/* </div> */}
              {/* </div> */}
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

import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';

const CreateAssociate = () => {
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
        <span className="">Create Associates</span>
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
              <div className="mt-5 flex h-full w-full flex-col items-center justify-center gap-12 text-sm md:grid md:grid-cols-6 md:gap-0">
                <div className="w-full md:col-span-3">
                  <h2 className="border-b-2 font-semibold">Personal</h2>
                  <div className="mt-5 grid grid-cols-12">
                    <div className="col-span-5 mx-5 space-y-[14px] md:mx-auto">
                      <div className="flex items-center justify-end">
                        <div className="inline-flex h-5 min-w-[20px] max-w-[20px] items-center justify-center rounded-full bg-[#0141CF] text-white">
                          1
                        </div>

                        <label className="flex">
                          <span className="text-red-600">*</span>First/Middle/
                          <span className="text-red-600">*</span>Last:
                        </label>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0141CF] text-white">
                          2
                        </div>
                        <label htmlFor="">SSN:</label>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0141CF] text-white">
                          3
                        </div>
                        <label htmlFor="">Birth Date:</label>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0141CF] text-white">
                          4
                        </div>
                        <label htmlFor="">Gender:</label>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0141CF] text-white">
                          5
                        </div>
                        <label htmlFor="">Race:</label>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0141CF] text-white">
                          6
                        </div>
                        <label htmlFor="">Email:</label>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0141CF] text-white">
                          7
                        </div>
                        <label htmlFor="">Mobile Email:</label>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0141CF] text-white">
                          8
                        </div>
                        <label htmlFor="">Scheduling Rank:</label>
                      </div>
                    </div>
                    <div className="col-span-7 space-y-3">
                      <div className="flex gap-1">
                        <input
                          type="text"
                          placeholder="First"
                          className="w-24 rounded bg-[#c6d8ffe1] px-2 shadow outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Middle"
                          className="w-16 rounded bg-[#c6d8ffe1] px-2 shadow outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Last"
                          className="w-24 rounded bg-[#c6d8ffe1] px-2 shadow outline-none"
                        />
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          className="w-14 rounded bg-[#c6d8ffe1] outline-none"
                        />
                        -
                        <input
                          type="text"
                          className="w-14 rounded bg-[#c6d8ffe1] outline-none"
                        />
                        -
                        <input
                          type="text"
                          className="w-14 rounded bg-[#c6d8ffe1] outline-none"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="11/27/1960"
                          className="w-28 rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                        />
                      </div>
                      <Select
                        css={{ backgroundColor: '#c6d8ffe1', border: 'none' }}
                        className="shadow outline-none"
                        size="xs"
                      >
                        <option value="option1" className="text-gray-800">
                          Male
                        </option>
                        <option value="option2" className="text-gray-800">
                          Female
                        </option>
                        <option value="option3" className="text-gray-800">
                          Other
                        </option>
                      </Select>
                      <Select
                        css={{ backgroundColor: '#c6d8ffe1', border: 'none' }}
                        className="shadow outline-none"
                        size="xs"
                      >
                        <option value="option1" className="text-gray-800">
                          White{' '}
                        </option>
                        <option value="option2" className="text-gray-800">
                          Black{' '}
                        </option>
                        <option value="option3" className="text-gray-800">
                          Asian
                        </option>
                        <option value="option3" className="text-gray-800">
                          Native American{' '}
                        </option>
                        <option value="option3" className="text-gray-800">
                          Native Hawaiian{' '}
                        </option>
                        <option value="option3" className="text-gray-800">
                          Pacific Islander{' '}
                        </option>
                      </Select>
                      <div>
                        <input
                          type="text"
                          placeholder="example@gmail.com"
                          className="w-full rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="mt-1 w-full rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                        />
                      </div>
                      <Select
                        css={{ backgroundColor: '#c6d8ffe1', border: 'none' }}
                        className="shadow outline-none"
                        size="xs"
                      >
                        <option value="option1" className="text-gray-800">
                          N/A
                        </option>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="ml-4 w-full pl-4 md:col-span-3 md:border-l-2">
                  <h2 className="border-b-2 font-semibold">Employment</h2>
                  <div className="mt-5 mr-5 grid grid-cols-12">
                    <div className="col-span-5 mx-5 space-y-[14px] md:mx-auto">
                      <div className="flex items-center justify-end">
                        <div className="inline-flex h-5 min-w-[20px] max-w-[20px] items-center justify-center rounded-full bg-[#0141CF] text-white">
                          9
                        </div>

                        <label className="flex  pl-1">
                          <span className="text-red-600">*</span>Classification:
                        </label>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0141CF] text-white">
                          10
                        </div>
                        <label htmlFor="">Discipline:</label>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0141CF] text-white">
                          11
                        </div>
                        <label className="flex  pl-1">
                          <span className="text-red-600">*</span>Hire Date:
                        </label>{' '}
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0141CF] text-white">
                          12
                        </div>
                        <label className="flex  pl-1">
                          <span className="text-red-600">*</span>Start Date:
                        </label>{' '}
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0141CF] text-white">
                          13
                        </div>
                        <label htmlFor="">Supervisor:</label>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0141CF] text-white">
                          14
                        </div>
                        <label className="flex  pl-1">
                          <span className="text-red-600">*</span>Home Agency:
                        </label>{' '}
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0141CF] text-white">
                          15
                        </div>
                        <label htmlFor="">Associate Number:</label>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#0141CF] text-white">
                          16
                        </div>
                        <label htmlFor="">Associate NPI:</label>
                      </div>
                    </div>
                    <div className="col-span-7 space-y-3">
                      <Select
                        css={{ backgroundColor: '#c6d8ffe1', border: 'none' }}
                        className="shadow outline-none"
                        size="xs"
                      >
                        <option value="option1" className="text-gray-800">
                          Field Staff - Full Time{' '}
                        </option>
                        <option value="option2" className="text-gray-800">
                          Field Staff - Part Time{' '}
                        </option>
                      </Select>
                      <Select
                        css={{ backgroundColor: '#c6d8ffe1', border: 'none' }}
                        className="shadow outline-none"
                        size="xs"
                      >
                        <option value="option1" className="text-gray-800">
                          Registered Nurse
                        </option>
                      </Select>
                      <div>
                        <input
                          type="text"
                          placeholder="11/27/2021"
                          className="w-28 rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="11/28/2021"
                          className="w-28 rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                        />
                      </div>
                      <Select
                        css={{ backgroundColor: '#c6d8ffe1', border: 'none' }}
                        className="shadow outline-none"
                        size="xs"
                      >
                        <option value="option1" className="text-gray-800">
                          Balley, Debbie
                        </option>
                      </Select>
                      <Select
                        css={{ backgroundColor: '#c6d8ffe1', border: 'none' }}
                        className="shadow outline-none"
                        size="xs"
                      >
                        <option value="option1" className="text-gray-800">
                          Sinamcare
                        </option>
                      </Select>
                      <div>
                        <input
                          type="text"
                          placeholder="12345678"
                          className=" rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="9977423432"
                          className=" rounded bg-[#c6d8ffe1] px-2 text-center shadow outline-none"
                        />
                      </div>
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

export default CreateAssociate;

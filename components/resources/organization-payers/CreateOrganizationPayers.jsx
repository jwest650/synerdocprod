import {
  Checkbox,
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';

const CreateOrganizationPayers = () => {
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
        <span>Create Payers</span>
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="text-xl font-semibold">Add Payer</h1>
              <div className="mt-10 flex justify-center gap-4">
                <div className="space-y-[14px]">
                  <div className="flex items-center justify-end">
                    <label className="text-red-600">*</label>Payer Name:{' '}
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label className="text-red-600">*</label>Payer Category:{' '}
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label className="text-red-600">*</label>Oasis/HIS Category:{' '}
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label className="text-red-600">*</label>Claim Filing Type:{' '}
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label className="text-red-600">*</label>Invoice Type:{' '}
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label className="text-red-600">*</label>Invoice Cycle:{' '}
                  </div>
                  <div className="flex items-center justify-end">
                    <label>Start Date:</label>
                  </div>
                  <div className="flex items-center justify-end">
                    <label>End Date:</label>
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label>Payer Email:</label>
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label>Apply Sales Tax:</label>
                  </div>
                </div>
                <div className="space-y-[13px]">
                  <div>
                    <input
                      type="text"
                      placeholder="Payer Name"
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
                      Insurance{' '}
                    </option>
                    <option value="option2" className="text-gray-800">
                      Option2{' '}
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
                      8(H) - Private Insurance{' '}
                    </option>
                    <option value="option2" className="text-gray-800">
                      Option2{' '}
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
                      Commercial Insurance{' '}
                    </option>
                    <option value="option2" className="text-gray-800">
                      Option2{' '}
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
                      HCFA 1500{' '}
                    </option>
                    <option value="option2" className="text-gray-800">
                      Option2{' '}
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
                      Weekly{' '}
                    </option>
                    <option value="option2" className="text-gray-800">
                      Monthly{' '}
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
                  <div>
                    <input
                      type="text"
                      placeholder="example@gmail.com"
                      className="w-60 rounded bg-[#c6d8ffe1] px-2 shadow outline-none"
                    />
                  </div>
                  <div className="pt-2">
                    <Checkbox />
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
                  Add
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

export default CreateOrganizationPayers;

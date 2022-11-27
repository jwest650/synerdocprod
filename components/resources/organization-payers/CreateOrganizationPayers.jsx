import {
  Checkbox,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import TableSelect from '../../structure/TableSelect';

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
      <Modal isOpen={isOpen} size={'2xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 font-semibold">Add Payer</h1>
              <div className="mt-10 flex justify-center gap-4">
                <div className="space-y-[19px]">
                  <div className="flex items-center justify-end">
                    <label className="text-primary-orange">*</label>Payer Name:{' '}
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label className="text-primary-orange">*</label>Payer
                    Category:{' '}
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label className="text-primary-orange">*</label>Oasis/HIS
                    Category:{' '}
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label className="text-primary-orange">*</label>Claim Filing
                    Type:{' '}
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label className="text-primary-orange">*</label>Invoice
                    Type:{' '}
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label className="text-primary-orange">*</label>Invoice
                    Cycle:{' '}
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
                      className="input-primary w-60"
                    />
                  </div>
                  <TableSelect
                    styles={{ width: '100%' }}
                    options={['Insurance', 'Option2']}
                  />
                  <TableSelect
                    styles={{ width: '100%' }}
                    options={['8(H) - Private Insurance', 'Option2']}
                  />
                  <TableSelect
                    styles={{ width: '100%' }}
                    options={['Commercial Insurance', 'Option2']}
                  />
                  <TableSelect
                    styles={{ width: '100%' }}
                    options={['HCFA 1500', 'Option2']}
                  />
                  <TableSelect
                    styles={{ width: '100%' }}
                    options={['Weekly', 'Monthly']}
                  />
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
                  <div>
                    <input
                      type="text"
                      placeholder="example@gmail.com"
                      className="input-primary w-60"
                    />
                  </div>
                  <div className="pt-2">
                    <Checkbox />
                  </div>
                </div>
              </div>
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
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateOrganizationPayers;

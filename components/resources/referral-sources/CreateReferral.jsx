import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import TableSelect from '../../structure/TableSelect';

const CreateReferral = () => {
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
        <span>Create Referral Source</span>
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana18 font-semibold">Add Referral Source</h1>
              <p className="verdana-12 text-gray-400">
                Add Referral Source details{' '}
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <div className="space-y-[19px]">
                  <div className="flex items-center justify-end">
                    <label className="text-primary-orange">*</label>Referral
                    Type:{' '}
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label className="text-primary-orange">*</label>Facility
                    Name:{' '}
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label className="text-primary-orange">*</label>Facility
                    Type:{' '}
                  </div>
                  <div className="flex items-center justify-end">
                    <label>Email:</label>
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label>Sales Rep:</label>
                  </div>
                  <div className="flex items-center justify-end">
                    <label className="text-primary-orange">*</label>Start Date:{' '}
                  </div>
                  <div className="flex items-center justify-end gap-1">
                    <label>End Date:</label>
                  </div>
                </div>
                <div className="space-y-[13px]">
                  <TableSelect
                    styles={{ width: '100%' }}
                    options={['Facility', 'Option2']}
                  />
                  <div>
                    <input
                      type="text"
                      placeholder="Facility Name"
                      className="input-primary w-60"
                    />
                  </div>
                  <TableSelect
                    styles={{ width: '100%' }}
                    options={[
                      'Outpatient Facility',
                      'Hospital',
                      'DME/Supply Company',
                    ]}
                  />

                  <div>
                    <input
                      type="text"
                      placeholder="example@gmail.com"
                      className="input-primary w-60"
                    />
                  </div>
                  <TableSelect
                    styles={{ width: '100%' }}
                    options={['Option1', 'Option2']}
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

export default CreateReferral;

import {
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import TableSelect from '../../structure/TableSelect';

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
        <span>Create Associates</span>
      </span>
      <Modal isOpen={isOpen} size={'5xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor="transparent">
          <div className="w-full rounded border border-black  shadow">
            <div className="w-full rounded border-[2px] border-t-[20px] border-[rgba(198,216,255,0.7)]  ">
              <div className="w-full rounded border border-black bg-white p-4 pb-10 shadow-xl">
                <form action="" onSubmit={handleForm}>
                  <h1 className="verdana18 font-semibold">Create Associate</h1>
                  <div className="mt-10 flex h-full w-full flex-col items-center justify-center gap-12 text-sm md:grid md:grid-cols-6 md:gap-0">
                    <div className="w-full pb-5 md:col-span-3">
                      <div className="flex items-center gap-2 border-b-2 pb-2">
                        <div className="inline-flex h-5 min-w-[20px] max-w-[20px] items-center justify-center rounded-full bg-[#0141CF] text-white">
                          1
                        </div>
                        <h2 className="verdana16 font-semibold">Personal</h2>
                      </div>
                      <div className="mt-5 grid grid-cols-12">
                        <div className="col-span-5 mx-5 space-y-[19px] md:mx-auto">
                          <div className="flex items-center justify-end">
                            <label className="flex">
                              <span className="text-primary-orange">*</span>
                              First/Middle/
                              <span className="text-primary-orange">*</span>
                              Last:
                            </label>
                          </div>
                          <div className="flex items-center justify-end gap-1">
                            <label htmlFor="">SSN:</label>
                          </div>
                          <div className="flex items-center justify-end gap-1">
                            <label htmlFor="">Birth Date:</label>
                          </div>
                          <div className="flex items-center justify-end gap-1">
                            <label htmlFor="">Gender:</label>
                          </div>
                          <div className="flex items-center justify-end gap-1">
                            <label htmlFor="">Race:</label>
                          </div>
                          <div className="flex items-center justify-end gap-1">
                            <label htmlFor="">Email:</label>
                          </div>
                          <div className="flex items-center justify-end gap-1">
                            <label htmlFor="">Mobile Email:</label>
                          </div>
                          <div className="flex items-center justify-end gap-1">
                            <label htmlFor="">Scheduling Rank:</label>
                          </div>
                        </div>
                        <div className="col-span-7 space-y-3">
                          <div className="flex gap-1">
                            <input
                              type="text"
                              placeholder="First"
                              className="input-primary w-24"
                            />
                            <input
                              type="text"
                              placeholder="Middle"
                              className="input-primary w-16"
                            />
                            <input
                              type="text"
                              placeholder="Last"
                              className="input-primary w-24"
                            />
                          </div>
                          <div className="flex gap-2">
                            <input type="text" className="input-primary w-14" />
                            -
                            <input type="text" className="input-primary w-14" />
                            -
                            <input type="text" className="input-primary w-14" />
                          </div>
                          <div>
                            <input
                              type="date"
                              placeholder="11/27/1960"
                              className="input-primary w-28"
                            />
                          </div>
                          <TableSelect
                            styles={{ width: '100%' }}
                            options={['Male', 'Female', 'Other']}
                          />
                          <TableSelect
                            styles={{ width: '100%' }}
                            options={[
                              'White',
                              'Black',
                              'Asian',
                              'Native American',
                              'Native Hawaiian',
                              'Pacific Islander',
                              'Other',
                            ]}
                          />

                          <div>
                            <input
                              type="text"
                              placeholder="example@gmail.com"
                              className="input-primary w-full"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              className="input-primary w-full"
                            />
                          </div>
                          <TableSelect
                            styles={{ width: '100%' }}
                            options={['N/A']}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 w-full pl-4 pb-5 md:col-span-3 md:border-l-2">
                      <div className="mr-5 flex items-center gap-2 border-b-2 pb-2">
                        <div className="inline-flex h-5 min-w-[20px] max-w-[20px] items-center justify-center rounded-full bg-[#0141CF] text-white">
                          2
                        </div>
                        <h2 className=" verdana16 font-semibold">Employment</h2>
                      </div>
                      <div className="mt-5 mr-5 grid grid-cols-12">
                        <div className="col-span-5 mx-5 space-y-[19px] md:mx-auto">
                          <div className="flex items-center justify-end">
                            <label className="flex  pl-1">
                              <span className="text-primary-orange">*</span>
                              Classification:
                            </label>
                          </div>
                          <div className="flex items-center justify-end gap-1">
                            <label htmlFor="">Discipline:</label>
                          </div>
                          <div className="flex items-center justify-end gap-1">
                            <label className="flex  pl-1">
                              <span className="text-primary-orange">*</span>Hire
                              Date:
                            </label>{' '}
                          </div>
                          <div className="flex items-center justify-end gap-1">
                            <label className="flex  pl-1">
                              <span className="text-primary-orange">*</span>
                              Start Date:
                            </label>{' '}
                          </div>
                          <div className="flex items-center justify-end gap-1">
                            <label htmlFor="">Supervisor:</label>
                          </div>
                          <div className="flex items-center justify-end gap-1">
                            <label className="flex  pl-1">
                              <span className="text-primary-orange">*</span>Home
                              Agency:
                            </label>{' '}
                          </div>
                          <div className="flex items-center justify-end gap-1">
                            <label htmlFor="">Associate Number:</label>
                          </div>
                          <div className="flex items-center justify-end gap-1">
                            <label htmlFor="">Associate NPI:</label>
                          </div>
                        </div>
                        <div className="col-span-7 space-y-3">
                          <TableSelect
                            styles={{ width: '100%' }}
                            options={[
                              'Field Staff - Full Time',
                              'Field Staff - Part Time',
                            ]}
                          />
                          <TableSelect
                            styles={{ width: '100%' }}
                            options={['Regist-primarytext-primary-orangese']}
                          />
                          <div>
                            <input type="date" className="input-primary w-32" />
                          </div>
                          <div>
                            <input type="text" className="input-primary w-32" />
                          </div>
                          <TableSelect
                            styles={{ width: '100%' }}
                            options={['Balley Debie']}
                          />
                          <TableSelect
                            styles={{ width: '100%' }}
                            options={['Sinamcare']}
                          />

                          <div>
                            <input
                              type="text"
                              placeholder="12345678"
                              className="input-primary"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="9977423432"
                              className="input-primary"
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
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateAssociate;

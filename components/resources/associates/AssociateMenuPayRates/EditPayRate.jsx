import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { FcEditImage } from 'react-icons/fc';

const EditPayRate = ({ payrate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <span
        onClick={onOpen}
        className="mr-4 flex cursor-pointer items-center justify-center border-r border-primary-gray py-2 pr-4"
      >
        <FcEditImage className="scale-150" />
      </span>
      <Modal isOpen={isOpen} size={'2xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
<<<<<<< HEAD
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10">
=======
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
            <h1 className="verdana16 font-semibold">Edit Pay Rate</h1>
            <p className="verdana11"> Edit existing Pay Rate details</p>
            <div className="mt-7 w-full space-y-3 pl-5">
              <div className="flex items-center gap-3 ">
                <p className="ml-[20px] flex items-start">
                  Service Description:
                </p>
                <div className="input-primary flex w-[400px] justify-center">
                  {payrate.description}
                </div>
              </div>
              <div className="flex items-center gap-3 ">
                <p className="ml-[44px] flex items-start">
                  <span className="text-primary-orange">*</span>Weekday Rate:
                </p>
                <div>
                  <input
                    type="text"
                    className="input-primary"
                    value={payrate.weekdayRate}
                  />{' '}
                </div>
              </div>
              <div className="flex items-center gap-3 ">
                <p className="ml-[44px] flex items-start">
                  <span className="text-primary-orange">*</span>Weekend Rate:
                </p>
                <div>
                  <input
                    type="text"
                    className="input-primary"
                    value={payrate.weekendRate}
                  />{' '}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1 ">
                <p className="ml-[50px] flex items-start">Allow Override:</p>
                <div>
                  <input
                    type="checkbox"
                    className="input-primary"
                    checked={payrate.allowOverride ? true : false}
                  />{' '}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <p className="ml-[67px] flex items-start">
                  <span className="text-primary-orange">*</span>Start Date:
                </p>
                <div>
                  <input
                    type="date"
                    value={payrate.startDate}
                    className="input-primary w-fit"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 flex w-full justify-center gap-4">
              <button onClick={onClose} className="btn-secondary">
                Save
              </button>
              <button
                onClick={onClose}
                className="verdana12 rounded bg-gray-500 px-4 py-1 text-white shadow"
              >
                Cancel
              </button>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditPayRate;

import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import TableSelect from '../../../structure/TableSelect';
import NumberInputComp from '../../associates/AssociateMenuPayroll/NumberInputComp';

const PayerEditSettings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <span
        onClick={onOpen}
        className="cursor-pointer text-primary-orange underline"
      >
        [Edit]
      </span>
      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana16 font-semibold">Edit Facility</h1>

              <div className="verdana12 mt-10 flex w-full flex-col items-center gap-3.5">
                <div className="ml-1 flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[50%] justify-end font-semibold">
                    Organization Payer Start Date:
                  </p>
                  <div className="flex w-[50%] items-center">
                    <input type="date" className="input-primary" />
                  </div>
                </div>

                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[50%] justify-end font-semibold">
                    Organization Payer End Date:
                  </p>
                  <div className=" flex w-[50%] ">
                    <input type="date" className="input-primary" />
                  </div>
                </div>

                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[50%] justify-end font-semibold">
                    Last Billed Day:
                  </p>
                  <div className=" flex w-[50%] items-center gap-2">
                    <input type="date" className="input-primary" />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[50%] justify-end font-semibold">
                    Next Billing Day:
                  </p>
                  <div className=" flex w-[50%] items-center gap-2">
                    <input type="date" className="input-primary" />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[50%] justify-end font-semibold">
                    Hold Biling Date:
                  </p>
                  <div className=" flex w-[50%] items-center gap-2">
                    <input type="date" className="input-primary" />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[50%] justify-end font-semibold">
                    Process Thru Date:
                  </p>
                  <div className=" flex w-[50%] items-center gap-2">
                    <input type="date" className="input-primary" />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[50%] justify-end font-semibold">
                    Reporting Group:
                  </p>
                  <div className=" flex w-[50%] items-center gap-2">
                    <TableSelect
                      options={['Private Insurance Only', 'Option2']}
                    />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[50%] justify-end font-semibold">
                    Day of the month to bill prior month:
                  </p>
                  <div className=" flex w-[50%] items-center gap-2">
                    <NumberInputComp />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[50%] justify-end font-semibold">
                    Override Weekending Date:
                  </p>
                  <div className=" flex w-[50%] items-center gap-2">
                    <input type="date" className="input-primary" />
                  </div>
                </div>
                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[50%] justify-end font-semibold">
                    Restrict payer to agency type:
                  </p>
                  <div className=" flex w-[50%] items-center gap-2">
                    <TableSelect options={['Home Health', 'Option2']} />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex w-full justify-end gap-3">
                <button
                  type="submit"
<<<<<<< HEAD
                  className="rounded bg-[#0141CF] px-4 py-1 text-white shadow"
=======
                  className="rounded bg-primary-blue px-4 py-1 text-white shadow"
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
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

export default PayerEditSettings;

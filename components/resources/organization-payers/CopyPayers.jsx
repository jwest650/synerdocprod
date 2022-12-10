import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import TableSelect from '../../structure/TableSelect';

const CopyPayers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <div
        onClick={onOpen}
        className="cursor-pointer text-primary-orange underline"
      >
        [Copy Payer to another Org]
      </div>
      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-[#c6d8ffe1] p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <h1 className="verdana16 font-semibold">Copy Payer Sections</h1>
              <div className="verdana12 mt-8">
                <div className="flex w-full flex-col items-center gap-3.5">
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[45%]  justify-end">
                      <span className="text-primary-orange">*</span>Payer Name:
                    </p>
                    <div className=" flex w-[55%] gap-2">
                      <input type="text" className="input-primary" />{' '}
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[45%] justify-end">
                      Profile and Requirements:
                    </p>
                    <div className=" flex w-[55%] items-center gap-2">
                      <input type="checkbox" className="input-primary" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[45%] justify-end">Contact Info: </p>
                    <div className=" flex w-[55%] items-center gap-2">
                      <input type="checkbox" className="input-primary" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[45%] justify-end">Notes:</p>
                    <div className=" flex w-[55%] ">
                      <input type="checkbox" className="input-primary" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[45%] justify-end">Rules:</p>
                    <div className=" flex w-[55%] ">
                      <input type="checkbox" className="input-primary" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[45%] justify-end">Identifiers:</p>
                    <div className=" flex w-[55%] ">
                      <input type="checkbox" className="input-primary" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[45%] justify-end">Bill Rates:</p>
                    <div className=" flex w-[55%] ">
                      <input type="checkbox" className="input-primary" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[45%] justify-end">
                      Payer Review Settings:
                    </p>
                    <div className=" flex w-[55%] ">
                      <input type="checkbox" className="input-primary" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[45%] justify-end">
                      Payer HCPC by Place of Service:
                    </p>
                    <div className=" flex w-[55%] ">
                      <input type="checkbox" className="input-primary" />
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center gap-3 ">
                    <p className="flex w-[45%] justify-end">
                      Payer Carrier Codes:
                    </p>
                    <div className=" flex w-[55%] ">
                      <input type="checkbox" className="input-primary" />
                    </div>
                  </div>
                </div>
              </div>
              <table className="mx-auto mt-5 w-full overflow-auto px-3 shadow-md">
                <thead className="thead-primary">
                  <tr className="verdana11">
                    <th className="th-first"></th>
                    <th className="th-middle">Source Agency</th>
                    <th className="th-last">Destination Agency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="verdana11 w-full even:bg-[#eee]">
                    <td className="td-primary">
                      <div className="flex justify-center">
                        <input type="checkbox" className="input-primary" />
                      </div>
                    </td>
                    <td className="td-primary">Louisiana Labour of Love</td>
                    <td className="td-primary">
                      <TableSelect
                        options={['Louisiana Labor of Love', 'Option2']}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-10 flex w-full justify-end gap-3">
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

export default CopyPayers;

import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import SearchIcon from '../../../../assets/images/search.png';

const Territories = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleForm = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <span onClick={onOpen} className="flex w-full justify-center">
        <Image src={SearchIcon} alt="edit" width="14" height="14" />
      </span>

      <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10 ">
            <form action="" onSubmit={handleForm}>
              <div className="w-full overflow-auto px-2 py-4">
                <table className=" mx-auto w-full px-3">
                  <thead className="thead-primary">
                    <tr>
                      <th className="th-first">City </th>
                      <th className="th-middle">State</th>
                      <th className="th-middle">Country</th>
                      <th className="th-middle">Zip Code</th>
                      <th className="th-last">Territory</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="w-full bg-secondary-blue">
                      <td colSpan={5} className="td-primary w-9 px-4">
                        No records to display.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 flex w-full justify-end gap-3">
                <button
                  type="submit"
                  className="rounded bg-primary-blue px-4 py-1 text-white shadow"
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

export default Territories;

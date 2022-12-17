import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import SearchIcon from '../../../../assets/images/search.png';
import ResourceTable from './ResourceTable';

const FindResource = ({ resourceType, resourceName, setResourceName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showTable, setShowTable] = useState(false);

  return (
    <>
      <span onClick={onOpen}>
        <div className="flex cursor-pointer items-center gap-2">
          <Image src={SearchIcon} alt="searchicon" width="13px" height="13px" />{' '}
          <span className="text-primary-orange underline">
            Find {resourceType}
          </span>
        </div>
      </span>
      <Modal isOpen={isOpen} size={showTable ? '2xl' : 'xs'} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="w-full rounded border-[2px] border-t-[20px] border-secondary-blue p-4 pb-10 ">
            <h1 className="verdana18 font-semibold">Find {resourceType}</h1>
            <p className="verdana11 text-primary-gray">
              Select for a {resourceType}
            </p>
            <div className="verdana12 mt-4">
              <div className="flex w-full flex-col items-center gap-3.5">
                <div className="flex w-full items-center justify-center gap-3 ">
                  <p className="flex w-[20%] justify-end">Name:</p>
                  <div className=" flex w-[80%] items-center gap-2">
                    <input
                      type="text"
                      value={resourceName ? resourceName : ''}
                      onChange={(e) =>
                        setResourceName && setResourceName(e.target.value)
                      }
                      className="input-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex w-full justify-center gap-3">
              <button
                onClick={() => setShowTable(true)}
                className="btn-primary"
              >
                Search
              </button>
            </div>
            {showTable && (
              <ResourceTable setShowTable={setShowTable} onClose={onClose} />
            )}
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FindResource;

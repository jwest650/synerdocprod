import { Avatar } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { FcInfo } from 'react-icons/fc';
import AssociateUploadPic from './AssociateUploadPic';
import EditAssociate from './EditAssociate';

const ProfilePersonal = ({ associateUrl }) => {
  const [associateImage, setAssociateImage] = useState('');

  return (
    <div className="w-[50%] md:border-r">
      <div className="flex">
        <h2 className="verdana14 mb-5 font-semibold tracking-wider">
          Personal
        </h2>
      </div>
      <div className="flex">
        <div className="mr-2 space-y-1 border-r px-2">
          <EditAssociate />
        </div>

        <div>
          <div className="w-[100%] px-3">
            <div className="my-2 flex">
              <p className="w-[150px] text-right font-semibold">Name: </p>
              <p className="ml-3">{associateUrl}</p>
            </div>
            <div className="my-2 flex">
              <p className="w-[150px] text-right font-semibold">SSN:</p>
              <p className="ml-3">### - ## - ####</p>
            </div>
            <div className="my-2 flex">
              <p className="w-[150px] text-right font-semibold">Birth Date: </p>
              <p className="ml-3">8/23/1990</p>
            </div>
            <div className="my-2 flex">
              <p className="w-[150px] text-right font-semibold">Gender: </p>
              <p className="ml-3">Female</p>
            </div>
            <div className="my-2 flex">
              <p className="w-[150px] text-right font-semibold">Race: </p>
              <p className="ml-3">White</p>
            </div>
            <div className="my-2 flex">
              <p className="w-[150px] text-right font-semibold">Email: </p>
              <p className="ml-3">{associateUrl}@gmail.com</p>
            </div>
            <div className="my-2 flex">
              <p className="w-[150px] text-right font-semibold">
                Mobile Email:{' '}
              </p>
              <p className="ml-3"></p>
            </div>
            <div className="my-2 flex">
              <p className="w-[150px] text-right font-semibold">
                Scheduling Rank:{' '}
              </p>
              <p className="ml-3">Level 1 - Always Assign</p>
            </div>
            <div className={`my-2 flex items-center`}>
              <div className="mr-3 w-[150px]">
                <AssociateUploadPic setAssociateImage={setAssociateImage} />
              </div>
              {associateImage ? (
                <figure className="h-auto  w-24 rounded border-[4px] border-secondary-blue">
                  <Image
                    className="object-contain"
                    src={associateImage}
                    alt="associateimage"
                    width="100"
                    layout="responsive"
                    height="80"
                  />
                </figure>
              ) : (
                <Avatar bg="teal.500" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <h2 className="verdana14 mb-5 mt-2 font-semibold tracking-wider">
          Missing Fields
        </h2>
        <div className="mt-3 flex">
          <div className="mr-10">
            <FcInfo className="rotate-180 scale-125 text-lg" />
          </div>
          <div className="missingfield h-20 overflow-y-scroll  border-l px-3">
            <p className="text-secondary-color underline">Missing Phone</p>
            <p className="text-secondary-color underline">
              Missing Patients Address
            </p>
            <p className="text-secondary-color underline">Missing Gender</p>
            <p className="text-secondary-color underline">Missing Race</p>
            <p className="text-secondary-color underline">Missing Birth Date</p>
            <p className="text-secondary-color underline">Missing Age</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePersonal;

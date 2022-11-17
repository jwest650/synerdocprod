import { Avatar } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import { FcCheckmark, FcInfo, FcSearch } from 'react-icons/fc';
import { RiBook2Fill } from 'react-icons/ri';
import AssociateUploadPic from './AssociateUploadPic';
import EditAssociate from './EditAssociate';
import EditAssociateAgencies from './EditAssociateAgencies';
import InactivateAssociate from './InactivateAssociate';
import ReassignAssociate from './ReassignAssociate';
import TerminateAssociate from './TerminateAssociate';

const AssociateMenuProfile = () => {
  const router = useRouter();
  const associateUrl = router.asPath.split('/')[3];
  const [associateImage, setAssociateImage] = useState('');
  // console.log(associateImage.split(':')[0]);

  return (
    <div className="py-10">
      <section className="flex flex-col justify-between text-sm md:flex-row">
        <div className="w-[50%] px-2 md:border-r">
          <div className="flex">
            <h2 className="mb-5 text-lg font-semibold tracking-wider">
              Persosnal
            </h2>
          </div>
          <div className="flex ">
            <div className="mr-2 space-y-1 border-r px-2">
              {/* <Link href="#" color="orange"> */}
              <EditAssociate />
              {/* </Link> */}
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
                  <p className="w-[150px] text-right font-semibold">
                    Birth Date:{' '}
                  </p>
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
                  <div className="w-[150px]">
                    <AssociateUploadPic setAssociateImage={setAssociateImage} />
                  </div>
                  {associateImage ? (
                    <Image
                      className="object-contain "
                      src={associateImage}
                      alt="associateimage"
                      width="120"
                      height="100"
                    />
                  ) : (
                    <Avatar bg="teal.500" />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <h2 className="mb-5 mt-2 text-lg font-semibold tracking-wider">
              Missing Fields
            </h2>
            <div className="mt-3 flex">
              <div className="mr-10">
                <FcInfo className="rotate-180 scale-125 text-lg" />
              </div>
              <div className="border-l px-3">
                <p className="text-secondary-color underline">Missing Phone</p>
                <p className="text-secondary-color underline">
                  Missing Patients Address
                </p>
                <p className="text-secondary-color underline">Missing Gender</p>
                <p className="text-secondary-color underline">Missing Race</p>
                <p className="text-secondary-color underline">
                  Missing Birth Date
                </p>
                <p className="text-secondary-color underline">Missing Age</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] px-2 md:border-l">
          <div className="flex">
            <h2 className="mb-5 text-lg font-semibold tracking-wider">
              Current Encounter
            </h2>
          </div>
          <div className="flex ">
            <div className="mr-2 space-y-1 border-r px-1">
              <EditAssociate />
              <InactivateAssociate />
              <TerminateAssociate />
              <ReassignAssociate />
            </div>
            <div className="w-[100%] px-3">
              <div className="my-2 flex">
                <p className="w-[150px] text-right font-semibold">Status: </p>
                <p className="ml-3">Active</p>
              </div>
              <div className="my-2 flex">
                <p className="w-[150px] text-right font-semibold">
                  Classification:{' '}
                </p>
                <p className="ml-3">Field Staff - Full Time</p>
              </div>
              <div className="my-2 flex">
                <p className="w-[150px] text-right font-semibold">
                  Discipline:{' '}
                </p>
                <p className="ml-3">Registered Nurse</p>
              </div>
              <div className="my-2 flex">
                <p className="w-[150px] text-right font-semibold">
                  Hire Date:{' '}
                </p>
                <p className="ml-3">1/1/2021</p>
              </div>
              <div className="my-2 flex">
                <p className="w-[150px] text-right font-semibold">
                  Start Date:{' '}
                </p>
                <p className="ml-3">1/1/2021</p>
              </div>
              <div className="my-2 flex">
                <p className="w-[150px] text-right font-semibold">
                  Supervisor:{' '}
                </p>
                <p className="ml-3"> Nichola Dadzie </p>
              </div>
              <div className="my-2 flex">
                <p className="w-[150px] text-right font-semibold">
                  Associate Number:{' '}
                </p>
                <p className="ml-3"></p>
              </div>
              <div className="my-2 flex">
                <p className="w-[150px] text-right font-semibold">
                  Associate NPI:
                </p>
                <p className="ml-3"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10 py-2 px-2">
        <h2 className="text-lg font-semibold tracking-wider">
          Agency Assignment
        </h2>
        <div className="mt-5 flex">
          <div className="space-y-1 border-r px-[10px]">
            <EditAssociateAgencies />
          </div>
          <table className="mx-5 w-full overflow-auto">
            <thead className="border-b bg-[#0141CF] text-[18px] tracking-wider text-white">
              <tr>
                <th className=" border-gray-400  pl-2 text-left">Home</th>
                <th className=" border-gray-400 pl-2 text-left"></th>
                <th className=" border-gray-400 pl-2 text-left">Agency</th>
                <th className=" border-gray-400 pl-2 text-left">Territories</th>
                <th className=" border-gray-400 pl-2 text-left">Teams</th>
                <th className=" border-gray-400 pl-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="w-full bg-[#e6ebf85d]">
                <td className=" w-16 border border-gray-400 py-2 px-4">
                  <FcCheckmark className="scale-150" />
                </td>
                <td className="w-10 border border-gray-400 px-2">
                  <RiBook2Fill />{' '}
                </td>
                <td className="w-72 border border-gray-400 px-4">
                  Miami Labour of Love
                </td>
                <td className="border border-gray-400"></td>
                <td className="border border-gray-400"></td>
                <td className="w-16 border border-gray-400 px-4">
                  {' '}
                  <FcSearch className="scale-150" />{' '}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssociateMenuProfile;

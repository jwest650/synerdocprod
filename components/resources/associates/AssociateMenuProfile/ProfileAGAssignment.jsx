import { Tooltip } from '@chakra-ui/react';
import { FcCheckmark, FcSearch } from 'react-icons/fc';
import MoreAssociateInfo from '../MoreAssociateInfo';
import Territories from './Territories';

const ProfileAGAssignment = ({ setShowInit }) => {
  return (
    <div className="mt-10 py-2">
      <h2 className="verdana14 font-semibold tracking-wider">
        Agency Assignment
      </h2>
      <div className="mt-5 flex">
        <div className="space-y-1 border-r px-[10px]">
          <Tooltip hasArrow label={`Edit`} fontSize="11px" color="white">
            <span
              onClick={() => setShowInit(false)}
              className="verdana10 mr-2 cursor-pointer pt-[2px] text-secondary-color underline"
            >
              [Edit]
            </span>
          </Tooltip>
        </div>
        <table className="mx-5 w-full overflow-auto">
          <thead className="thead-primary">
            <tr>
              <th className="th-first">Home</th>
              <th className="th-middle"></th>
              <th className="th-middle">Agency</th>
              <th className="th-middle">Territories</th>
              <th className="th-middle">Teams</th>
              <th className="th-last">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="w-full bg-[#e6ebf85d]">
              <td className="td-primary w-14">
                <FcCheckmark className="mx-auto scale-150" />
              </td>
              <td className="td-primary w-10">
                <MoreAssociateInfo />
              </td>
              <td className="td-primary">Sinam Care, LLC</td>
              <td className="td-primary"></td>
              <td className="td-primary"></td>
              <td className="td-primary w-16">
                <Territories />{' '}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileAGAssignment;

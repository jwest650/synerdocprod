import Link from 'next/link';
import { BsDot } from 'react-icons/bs';
import CreateReferral from '../../resources/referral-sources/CreateReferral';
import CreatePayOnly from './CreatePayOnly';
import UploadSeviceNotes from './UploadSeviceNotes';

const OtherActionsCard = () => {
  return (
    <ul className="card-primary space-y-1">
      <li className="verdana14 mb-4 font-semibold">Other Actions</li>
      <li>
        <CreateReferral
          key={1}
          action={
            <span className="flex cursor-pointer items-center gap-2 text-primary-orange underline">
              <BsDot className="scale-150 text-base text-black" />
              Create Referral Source
            </span>
          }
        />
      </li>
      <li className="flex items-center gap-2 text-primary-orange underline">
        <BsDot className="scale-150 text-base text-black" />
        <Link href="/staff/staffdirections">Directions/Mapping</Link>
      </li>
      <li>
        <UploadSeviceNotes />
      </li>
      <li className="flex items-center gap-2 text-primary-orange underline">
        <BsDot className="scale-150 text-base text-black" />
        <Link href="/staff/payonlydetail">Add Pay Only</Link>
      </li>
      <li>
        <CreatePayOnly />
      </li>
    </ul>
  );
};

export default OtherActionsCard;

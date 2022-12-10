import { FcCheckmark } from 'react-icons/fc';
import DeletePopup from '../../../structure/DeletePopup';
import PayerEditContact from './PayerEditContact';
// import PhysicianEditReferralSourceContact from './PayerEditContact';

const PayerContactsTable = ({ payerUrl }) => {
  return (
    <div className="verdana12 flex w-full border-t border-primary-gray">
      <div className="verdana10 mr-3 border-r border-primary-gray pt-1 pr-3">
        {/* <PhysicianEditReferralSourceContact /> */}
        <PayerEditContact />
        <DeletePopup toDelete="referral source contact" />
      </div>
      <div className="flex w-full justify-between pt-1">
        <div>
          <h2 className="mb-1 font-semibold">John Franks</h2>
          <p>Email: {payerUrl}@gmail.com</p>
          <p>Dept:</p>
        </div>
        <div>
          <h2 className="mb-1 font-semibold">Phone</h2>
          <div className="flex gap-2">
            Work: (318) 628-2549 <FcCheckmark className="scale-150" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayerContactsTable;

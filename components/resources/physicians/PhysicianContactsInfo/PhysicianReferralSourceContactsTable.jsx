import DeletePopup from '../../../structure/DeletePopup';
import PhysicianEditReferralSourceContact from './PhysicianEditReferralSourceContact';

const PhysicianReferralSourceContactsTable = ({ physicianUrl }) => {
  return (
    <div className="verdana12 flex w-full border-t border-primary-gray">
      <div className="verdana10 mr-3 border-r border-primary-gray pt-1 pr-3">
        <PhysicianEditReferralSourceContact />
        <DeletePopup toDelete="referral source contact" />
      </div>
      <div className="flex w-full justify-between pt-1">
        <div>
          <h2 className="mb-1 font-semibold">{physicianUrl}</h2>
          <p className="text-green-500">Active</p>
          <p> {physicianUrl}@gmail.com</p>
        </div>
        <div>
          <h2 className="mb-1 font-semibold">Phone</h2>
          <div>Work: (318) 628-2549</div>
        </div>
      </div>
    </div>
  );
};

export default PhysicianReferralSourceContactsTable;

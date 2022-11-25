import DeletePopup from '../../../structure/DeletePopup';
import FacilityEditPhone from './FacilityEditPhone';

const FacilityAncillaryPhoneTable = () => {
  return (
    <div className="verdana12 flex w-[90%] border-t border-primary-gray">
      <div className="verdana10 mr-3 border-r border-primary-gray pt-1 pr-3">
        <FacilityEditPhone />
        <DeletePopup toDelete="ancilliary phonenumber" />{' '}
      </div>
      <div className="pt-1">
        <div className="flex gap-1.5">
          <p className="mb-1 font-semibold">Work:</p>
          <p>(318) 628-2995</p>
        </div>
        <div className="flex gap-1.5">
          <p className="mb-1 font-semibold">Desc:</p>
          <p>Answering Service</p>
        </div>
      </div>
    </div>
  );
};

export default FacilityAncillaryPhoneTable;

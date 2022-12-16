import { FcCheckmark } from 'react-icons/fc';
import DeletePopup from '../../../structure/DeletePopup';

const ContactInfoTable = ({ editComp }) => {
  return (
    <div className="flex w-full border-t border-primary-gray">
      <div className="verdana10 mr-3 border-r border-primary-gray pt-1 pr-3">
        {editComp}
        <DeletePopup toDelete="address/phone info" />
      </div>
      <div className="flex w-full justify-between pt-1">
        <div>
          <h2 className="mb-1 font-semibold">Home Address</h2>
          <p>154 High Street</p>
          <p>3rd Floor</p>
          <p>West Orange, NJ 07052</p>
        </div>
        <div>
          <h2 className="mb-1 font-semibold">Phone</h2>
          <div className="flex gap-1">
            Mobile: (318) 628-2221 <FcCheckmark className="scale-150" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoTable;

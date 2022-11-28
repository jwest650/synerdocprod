import { FcCheckmark } from 'react-icons/fc';
import DeletePopup from '../../../structure/DeletePopup';
import PayerEditAddress from './PayerEditAddress';

const PayerAddressTable = () => {
  return (
    <div className="verdana12 flex w-full border-t border-primary-gray">
      <div className="verdana10 mr-3 border-r border-primary-gray pt-1 pr-3">
        <PayerEditAddress />
        <DeletePopup toDelete="address/phone info" />
      </div>
      <div className="flex w-full justify-between pt-1">
        <div>
          <h2 className="mb-1 font-semibold">Mailing Address</h2>
          <p>PO BOX 981106</p>
          <p>El Paso, TX 79998 1106</p>
          <p>Bill to: Aetna</p>
          <p>Attn: Claims Department</p>
        </div>
        <div>
          <h2 className="mb-1 font-semibold">Phone</h2>
          <div className="flex gap-1">
            Work: (888) 628-2221 <FcCheckmark className="scale-150" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayerAddressTable;

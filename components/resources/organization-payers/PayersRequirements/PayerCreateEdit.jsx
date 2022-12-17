import PayerAuthRequirements from './PayerAuthRequirements';
import PayerClinicalReq from './PayerClinicalReq';
import PayerCoPayBillingReq from './PayerCoPayBillingReq';
import PayerDataRequirements from './PayerDataRequirements';
import PayerInvoiceAO from './PayerInvoiceAO';
import PayerMiscBillingReq from './PayerMiscBillingReq';
import PayerServiceCategory from './PayerServiceCategory';

const PayerCreateEdit = ({ setShowInit }) => {
  return (
    <div>
      <div className="flex items-center justify-between border-b border-primary-gray pb-2">
        <h2 className="verdana16 font-semibold">
          BCBS LA - General Requirements
        </h2>
        <div className="flex scale-110 items-center gap-5 px-3">
          <button
            onClick={() => setShowInit({ action: false, from: 'BCBS' })}
            className="btn-primary"
          >
            Save
          </button>
          <button
            onClick={() => setShowInit({ action: false, from: 'BCBS' })}
            className="btn-cancel"
          >
            Cancel{' '}
          </button>
        </div>
      </div>
      <div className="mt-10 flex justify-between">
        <div className="flex w-[50%] flex-col gap-10">
          <PayerAuthRequirements />
          <PayerClinicalReq />
          <PayerCoPayBillingReq />
          <PayerMiscBillingReq />
        </div>
        <div className="flex w-[50%] flex-col gap-10 px-10">
          <PayerDataRequirements />
          <PayerInvoiceAO />
          <PayerServiceCategory />
        </div>
      </div>
    </div>
  );
};

export default PayerCreateEdit;

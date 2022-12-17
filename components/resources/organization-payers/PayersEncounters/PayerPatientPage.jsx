import PayerAuthRequirements from './PayerAuthRequirements';
import PayerClinicalReq from './PayerClinicalReq';
import PayerCoPayBillingReq from './PayerCoPayBillingReq';
import PayerDataRequirements from './PayerDataRequirements';
import PayerInvoiceAO from './PayerInvoiceAO';
import PayerMiscBillingReq from './PayerMiscBillingReq';
import PayerServiceCategory from './PayerServiceCategory';

const PayerPatientPage = ({ setShowPatientPage }) => {
  return (
    <div>
      <div className="flex items-center justify-between border-b border-primary-gray pb-2">
        <h2 className="verdana14">
          Patient: <strong className="mr-3">McNaughton James</strong>
          Payer: <strong>BCBS LA</strong>
        </h2>
        <div className="flex scale-110 items-center gap-5 px-3">
          <button
            onClick={() => setShowPatientPage(false)}
            className="btn-primary"
          >
            Save
          </button>
          <button
            onClick={() => setShowPatientPage(false)}
            className="btn-cancel"
          >
            Cancel
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

export default PayerPatientPage;

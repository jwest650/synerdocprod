import AssociateCreateEmergencyContact from './AssociateCreateEmergencyContact';
import AssociateCreatePhone from './AssociateCreatePhone';
import AssociateCreateContactInfo from './AssociateCreateContactInfo';

const AssociateMenuContact = () => {
  return (
    <div>
      <div className="mx-2 my-14 md:mx-9">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="w-full border-primary-gray py-5 md:border-r md:pr-14">
            <div className="mb-5 flex  items-center gap-3">
              <h2 className="verdana16 font-semibold">Address/ Phone Info </h2>
              <AssociateCreateContactInfo />
            </div>
            <p>No addresses have been added for this associate</p>
          </div>
          <div className="w-full py-5 md:pl-8">
            <div className="mb-5 flex  items-center gap-3">
              <h2 className="verdana16 font-semibold">Emergency Contacts</h2>
              <AssociateCreateEmergencyContact />
            </div>
            <p>No emergency contacts have been added for this associate</p>
          </div>
        </div>
        <div className="mt-20 w-[50%] border-primary-gray py-5 md:border-r">
          <div className="mb-5 flex items-center gap-3">
            <h2 className="verdana16 font-semibold">Ancillary Phone Info </h2>
            <AssociateCreatePhone />
          </div>
          <p>No phone numbers have been added for this associate</p>
        </div>
      </div>
    </div>
  );
};

export default AssociateMenuContact;
import { useState } from 'react';
import ContactsTab from './components/tabs/ContactsTab';
import ProfileTab from './components/tabs/ProfileTab';
import NotesTab from './components/tabs/NotesTab';
import ReferralTab from './components/tabs/ReferralTab';
import PhysFacTab from './components/tabs/PhysFacTab';
import DocsTab from './components/tabs/DocsTab';
import ClinicalTab from './components/tabs/ClinicalTab';
import MedsTab from './components/tabs/MedsTab';
import OrdersTab from './components/tabs/OrdersTab';
import PayersTab from './components/tabs/PayersTab';
import ServiceNotesTab from './components/tabs/ServiceNotesTab';
import EvvTab from './components/tabs/EvvTab';

const renderTab = (tab) => {
  switch (tab) {
    case 'profile-tab':
      return <ProfileTab />;
    case 'contacts-tab':
      return <ContactsTab />;
    case 'notes-tab':
      return <NotesTab />;
    case 'referral-tab':
      return <ReferralTab />;
    case 'phys-fac-tab':
      return <PhysFacTab />;
    case 'docs-tab':
      return <DocsTab />;
    case 'clinical-tab':
      return <ClinicalTab />;
    case 'meds-tab':
      return <MedsTab />;
    case 'orders-tab':
      return <OrdersTab />;
    case 'payers-tab':
      return <PayersTab />;
    case 'service-notes-tab':
      return <ServiceNotesTab />;
    case 'evv-tab':
      return <EvvTab />;

    default:
      return <ProfileTab />;
  }
};

const Enconter = () => {
  const [activeTab, setActiveTab] = useState('profile-tab');
  let tabs = [
    { name: 'Profile', path: 'profile-tab' },
    { name: 'Contacts', path: 'contacts-tab' },
    { name: 'Notes', path: 'notes-tab' },
    { name: 'Referral', path: 'referral-tab' },
    { name: 'Phys/Fac', path: 'phys-fac-tab' },
    { name: 'Docs', path: 'docs-tab' },
    { name: 'Clinical', path: 'clinical-tab' },
    { name: 'Meds', path: 'meds-tab' },
    { name: 'Orders', path: 'orders-tab' },
    { name: 'Payers', path: 'payers-tab' },
    { name: 'Service Notes', path: 'service-notes-tab' },
    { name: 'EVV', path: 'evv-tab' },
  ];

  return (
    <div className="w-full">
      <section>
        <div>
          <div className="flex">
            <h1>Smith, Joseph</h1>
            <div className="flex ">
              <div className="flex">
                <p className="ml-3 text-sm text-orange-600 underline">
                  Activate Patient
                </p>
                <p className="ml-3 text-sm text-orange-600 underline">
                  Decline Referral
                </p>
                <p className="ml-3 text-sm text-orange-600 underline">
                  Patient Fact Report
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <section>
            <div className="flex ">
              <div className="w-[33%]">
                <div className="flex ">
                  <p>Patient Phone: </p>
                  <div>
                    <p></p>
                  </div>
                </div>
                <div className="flex ">
                  <p>Primary Physician: </p>
                  <div>
                    <p>Hernandez Robert</p>
                  </div>
                </div>
                <div className="flex ">
                  <p>Primary Physician Phone: </p>
                  <div>
                    <p></p>
                  </div>
                </div>
                <div className="flex ">
                  <p>Allergies: </p>
                  <div>
                    <p></p>
                  </div>
                </div>
                <div className="flex ">
                  <p>Advance Directives: </p>
                  <div>
                    <p></p>
                  </div>
                </div>
              </div>

              <div className="w-[33%]">
                <div className="flex ">
                  <p>Agency: </p>
                  <div>
                    <p>Homecare</p>
                  </div>
                </div>
                <div className="flex ">
                  <p>Start of Care: </p>
                  <div>
                    <p>23/12/12</p>
                  </div>
                </div>
                <div className="flex ">
                  <p>Primary Diagnosis: </p>
                  <div>
                    <p></p>
                  </div>
                </div>
                <div className="flex ">
                  <p>Disaster Level: </p>
                  <div>
                    <p></p>
                  </div>
                </div>
              </div>

              <div className="w-[33%]">
                <div className="flex ">
                  <p>Status: </p>
                  <div>
                    <p className="text-green-700">Pending</p>
                  </div>
                </div>
                <div className="flex ">
                  <p>Discharge Date: </p>
                  <div>
                    <p>3/12/1990 </p>
                  </div>
                </div>
                <div className="flex ">
                  <div className="flex">
                    <p>DOB: </p>
                    <div className="flex">
                      <p>3/12/1990 </p>
                    </div>
                    <div className="flex">
                      <p> Age: </p>
                      <span>90</span>
                    </div>
                  </div>
                </div>
                <div className="flex ">
                  <p>DNR: </p>
                  <div>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* TABS */}
          <section className="my-2">
            <ul className="flex ">
              {tabs.map((tab, i) => (
                <li
                  key={i}
                  className={`cursor-pointer rounded border-2 px-3 py-1 ${
                    tab.path === activeTab ? 'bg-gray-600 text-white' : ''
                  }`}
                  onClick={() => setActiveTab(tab.path)}
                >
                  {tab.name}
                </li>
              ))}
            </ul>

            {/* Render Tabs  */}
            {renderTab(activeTab)}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Enconter;

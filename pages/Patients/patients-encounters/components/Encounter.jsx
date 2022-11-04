import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useState } from 'react';
import Components from './tabs';

const renderTab = (tab) => {
  switch (tab) {
    case 'profile-tab':
      return <Components.ProfileTab />;
    case 'contacts-tab':
      return <Components.ContactsTab />;
    case 'notes-tab':
      return <Components.NotesTab />;
    case 'referral-tab':
      return <Components.ReferralTab />;
    case 'phys-fac-tab':
      return <Components.PhysFacTab />;
    case 'docs-tab':
      return <Components.DocsTab />;
    case 'clinical-tab':
      return <Components.MedsTab />;
    case 'meds-tab':
      return <Components.MedsTab />;
    case 'orders-tab':
      return <Components.OrdersTab />;
    case 'payers-tab':
      return <Components.PayersTab />;
    case 'service-notes-tab':
      return <Components.ServiceNotesTab />;
    case 'evv-tab':
      return <Components.EvvTab />;

    default:
      break;
  }
};

const Encounter = ({ openEncounter, setOpenEncounter }) => {
  const [activeTab, setActiveTab] = useState('profile-tab');
  let tabs = [
    { name: 'Profile', path: 'profile-tab' },
    { name: 'Contacts', path: 'contacts-tab' },
    { name: 'Notes', path: 'notes-tab' },
    { name: 'Referral', path: 'referral-tab' },
    { name: 'Phys/Fac', path: 'phys-fac-tab' },
    { name: 'Docs', path: 'docs-tab' },
    { name: 'Clinical', tabs: 'clinical-tab' },
    { name: 'Meds', path: 'meds-tab' },
    { name: 'Orders', path: 'orders-tab' },
    { name: 'Payers', path: 'payers-tab' },
    { name: 'Service Notes', path: 'service-notes-tab' },
    { name: 'EVV', path: 'evv-tab' },
  ];

  return (
    <div>
      <div>
        <Modal isOpen={openEncounter} onClose={() => setOpenEncounter(false)}>
          <ModalOverlay />
          <ModalContent maxWidth={'90%'} css={{ marginX: 'auto' }}>
            <div className='w-full rounded border-[2px] border-t-[20px] border-[#6b3e9280] p-4 pb-10 '>
              <ModalHeader>
                <div className='flex'>
                  <h1>Smith, Joseph</h1>
                  <div className='flex '>
                    <div className='flex'>
                      <p className='ml-3 text-sm text-orange-600 underline'>
                        Activate Patient
                      </p>
                      <p className='ml-3 text-sm text-orange-600 underline'>
                        Decline Referral
                      </p>
                      <p className='ml-3 text-sm text-orange-600 underline'>
                        Patient Fact Report
                      </p>
                    </div>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <section>
                  <div className='flex '>
                    <div className='w-[33%]'>
                      <div className='flex '>
                        <p>Patient Phone: </p>
                        <div>
                          <p></p>
                        </div>
                      </div>
                      <div className='flex '>
                        <p>Primary Physician: </p>
                        <div>
                          <p>Hernandez Robert</p>
                        </div>
                      </div>
                      <div className='flex '>
                        <p>Primary Physician Phone: </p>
                        <div>
                          <p></p>
                        </div>
                      </div>
                      <div className='flex '>
                        <p>Allergies: </p>
                        <div>
                          <p></p>
                        </div>
                      </div>
                      <div className='flex '>
                        <p>Advance Directives: </p>
                        <div>
                          <p></p>
                        </div>
                      </div>
                    </div>

                    <div className='w-[33%]'>
                      <div className='flex '>
                        <p>Agency: </p>
                        <div>
                          <p>Homecare</p>
                        </div>
                      </div>
                      <div className='flex '>
                        <p>Start of Care: </p>
                        <div>
                          <p>23/12/12</p>
                        </div>
                      </div>
                      <div className='flex '>
                        <p>Primary Diagnosis: </p>
                        <div>
                          <p></p>
                        </div>
                      </div>
                      <div className='flex '>
                        <p>Disaster Level: </p>
                        <div>
                          <p></p>
                        </div>
                      </div>
                    </div>

                    <div className='w-[33%]'>
                      <div className='flex '>
                        <p>Status: </p>
                        <div>
                          <p className='text-green-700'>Pending</p>
                        </div>
                      </div>
                      <div className='flex '>
                        <p>Discharge Date: </p>
                        <div>
                          <p>3/12/1990 </p>
                        </div>
                      </div>
                      <div className='flex '>
                        <div className='flex'>
                          <p>DOB: </p>
                          <div className='flex'>
                            <p>3/12/1990 </p>
                          </div>
                          <div className='flex'>
                            <p> Age: </p>
                            <span>90</span>
                          </div>
                        </div>
                      </div>
                      <div className='flex '>
                        <p>DNR: </p>
                        <div>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* TABS */}
                <section className='my-2'>
                  <ul className='flex '>
                    {tabs.map((tab, i) => (
                      <li
                        key={i}
                        className='cursor-pointer rounded-md border-2 px-3 py-1'
                        onClick={() => setActiveTab(tab.path)}
                      >
                        {tab.name}
                      </li>
                    ))}
                  </ul>

                  {/* Render Tabs Components */}
                  {renderTab(activeTab)}
                </section>
              </ModalBody>
            </div>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default Encounter;

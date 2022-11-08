import { useState } from 'react'
import ContactsTab from './components/tabs/ContactsTab'
import ProfileTab from './components/tabs/ProfileTab'
import NotesTab from './components/tabs/NotesTab'
import ReferralTab from './components/tabs/ReferralTab'
import PhysFacTab from './components/tabs/PhysFacTab'
import DocsTab from './components/tabs/DocsTab'
import ClinicalTab from './components/tabs/ClinicalTab'
import MedsTab from './components/tabs/MedsTab'
import OrdersTab from './components/tabs/OrdersTab'
import PayersTab from './components/tabs/PayersTab'
import ServiceNotesTab from './components/tabs/ServiceNotesTab'
import EvvTab from './components/tabs/EvvTab'
import EncounterHeader from './components/EncounterHeader'

const renderTab = (tab) => {
  switch (tab) {
    case 'profile-tab':
      return <ProfileTab />
    case 'contacts-tab':
      return <ContactsTab />
    case 'notes-tab':
      return <NotesTab />
    case 'referral-tab':
      return <ReferralTab />
    case 'phys-fac-tab':
      return <PhysFacTab />
    case 'docs-tab':
      return <DocsTab />
    case 'clinical-tab':
      return <ClinicalTab />
    case 'meds-tab':
      return <MedsTab />
    case 'orders-tab':
      return <OrdersTab />
    case 'payers-tab':
      return <PayersTab />
    case 'service-notes-tab':
      return <ServiceNotesTab />
    case 'evv-tab':
      return <EvvTab />

    default:
      return <ProfileTab />
  }
}

const Enconter = () => {
  const [activeTab, setActiveTab] = useState('profile-tab')
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
  ]

  return (
    <div className='w-full'>
      <EncounterHeader />
      <section>
        <div>
          {/* TABS */}
          <section className='my-2'>
            <ul className='flex '>
              {tabs.map((tab, index) => (
                <>
                  <li
                    className={`-mx-[1px] flex skew-x-[12deg] cursor-pointer items-center gap-1 rounded-t-lg border-2 border-gray-300 py-[1px] px-2 text-center italic ${
                      activeTab === tab.path &&
                      'skew-x-[0deg] border-r-0 border-b-0 bg-white pt-1 not-italic '
                    }    ${
                      activeTab === undefined &&
                      tab.path === 'Profile' &&
                      'skew-x-[0deg] border-r-0 border-b-0 bg-white pt-1.5 not-italic '
                    }    ${
                      index === 0 && ' skew-x-[1deg] border-r-0 not-italic'
                    }   `}
                    onClick={() => setActiveTab(tab.path)}
                  >
                    <span
                      className={`${
                        activeTab === tab.path && 'skew-x-[-0deg]'
                      }   ${index === 0 && 'skew-x-[-0deg] '} -skew-x-[12deg]`}
                    >
                      {/* {menu.icon} */}
                    </span>
                    <span>{tab.name}</span>
                  </li>
                </>
              ))}
            </ul>

            <section className='border-2 p-2'>
              {/* Render Tabs  */}
              {renderTab(activeTab)}
            </section>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Enconter

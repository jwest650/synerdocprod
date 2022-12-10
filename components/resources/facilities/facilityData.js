import { AiOutlineContacts } from 'react-icons/ai';
import { BsFolder2Open } from 'react-icons/bs';
import { FaRegNewspaper } from 'react-icons/fa';
import { SlCheck } from 'react-icons/sl';
import PhysicianDocuments from '../physicians/PhysicianDocuments';
import FacilityContactsInfo from './FacilityContactsInfo';
import FacilityCredentials from './FacilityCredentials';
import FacilityNotes from './FacilityNotes';

export const facilitiesTableData = [
  {
    name: 'Miami Regional Medical Center',
    url: 'miamiregionalmedicalcenter',
    facilityType: 'DME/Supply Company',
    email: 'miamirmc@gmail.com',
    preferredNumber: 'W:(900) 585-7664',
    status: 'Active',
  },
  {
    name: 'New York Regional Medical Center',
    url: 'newyorkregionalmedicalcenter',
    facilityType: 'Hospital',
    email: 'nyrmc@gmail.com',
    preferredNumber: 'W:(900) 873-0958',
    status: 'Active',
  },
  {
    name: 'Atlanta Regional Medical Center',
    url: 'atlantaregionalmedicalcenter',
    facilityType: 'Clinic',
    email: 'atrmc@gmail.com',
    preferredNumber: 'W:(900) 454-5354',
    status: 'Active',
  },
  {
    name: 'Maryland Regional Medical Center',
    url: 'marylandregionalmedicalcenter',
    facilityType: 'Hospital',
    email: 'mlrmc@gmail.com',
    preferredNumber: 'W:(900) 452-4535',
    status: 'Active',
  },
];

export const facilityMenu = [
  {
    menu: 'Contacts Info',
    url: 'contactsinfo',
    icon: <AiOutlineContacts />,
    component: <FacilityContactsInfo />,
  },
  {
    menu: 'Notes',
    url: 'notes',
    icon: <FaRegNewspaper />,
    component: <FacilityNotes />,
  },

  {
    menu: 'Credentials',
    url: 'credentials',
    icon: <SlCheck />,
    component: <FacilityCredentials />,
  },
  {
    menu: 'Documents',
    url: 'documents',
    icon: <BsFolder2Open />,
    component: <PhysicianDocuments />,
  },
];

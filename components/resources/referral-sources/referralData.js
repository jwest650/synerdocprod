import { AiOutlineContacts } from 'react-icons/ai';
import { FaRegNewspaper } from 'react-icons/fa';
import { SlCheck } from 'react-icons/sl';
import ReferralContactInfo from './ReferralContactInfo';
import ReferralCredentials from './ReferralCredentials';
import ReferralSourcesNotes from './ReferralSourcesNotes';

export const referralSourcesTableData = [
  {
    name: 'Aames Alan',
    url: 'aamesalen',
    referralSourceType: 'Physician',
    email: 'aamesalen@gmail.com',
    preferredNumber: '',
    status: 'Active',
  },
  {
    name: 'Andrews James',
    url: 'andrewsjames',
    referralSourceType: 'Physician',
    email: 'andrewsjames@gmail.com',
    preferredNumber: '',
    status: 'Active',
  },
  {
    name: 'Apria',
    url: 'apria',
    referralSourceType: 'Facility',
    email: '',
    preferredNumber: '',
    status: 'Active',
  },
];

export const referralSourcesMenu = [
  {
    menu: 'Contact Info',
    url: 'contactinfo',
    icon: <AiOutlineContacts />,
    component: <ReferralContactInfo />,
  },
  {
    menu: 'Notes',
    url: 'notes',
    icon: <FaRegNewspaper />,
    component: <ReferralSourcesNotes />,
  },

  {
    menu: 'Credentials',
    url: 'credentials',
    icon: <SlCheck />,
    component: <ReferralCredentials />,
  },
];

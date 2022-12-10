import { AiOutlineContacts } from 'react-icons/ai';
import { BiGitPullRequest } from 'react-icons/bi';
import { BsFolder2Open, BsGlobe } from 'react-icons/bs';
import { FaRegNewspaper } from 'react-icons/fa';
import { SlCheck } from 'react-icons/sl';
import PhysicianContactsInfo from './PhysicianContactsInfo';
import PhysicianCredentials from './PhysicianCredentials';
import PhysicianDocuments from './PhysicianDocuments';
import PhysicianNotes from './PhysicianNotes';
import PhysicianOrders from './PhysicianOrders';
import PhysicianWebsite from './PhysicianWebsite';

export const physiciansData = [
  {
    name: 'omarlay',
    email: 'omarlay@gmail.com',
    numbers: '',
    title: 'md',
    active: 'active',
  },
];

export const physicianTableData = [
  {
    name: 'Peggy Opong',
    url: 'peggyopong',
    email: 'peggyopng@gmail.com',
    preferredNumber: '',
    title: 'MD',
    status: 'Active',
  },
  {
    name: 'Destiny Dinam',
    url: 'destinydinam',
    email: 'destinydinam@gmail.com',
    preferredNumber: '',
    title: 'MD',
    status: 'Active',
  },
  {
    name: 'Joshua Nartey',
    url: 'joshuanartey',
    email: 'joshuanartey@gmail.com',
    preferredNumber: '',
    title: 'MD',
    status: 'Active',
  },
  {
    name: 'Nicholas Dazie',
    url: 'nicholasdazie',
    email: '',
    preferredNumber: '',
    title: 'MD',
    status: 'Active',
  },
  {
    name: 'Jay West',
    url: 'jaywest',
    email: 'jaywest@gmail.com',
    preferredNumber: '',
    title: 'MD',
    status: 'Active',
  },
];

export const physicianMenu = [
  {
    menu: 'Contacts Info',
    url: 'contactsinfo',
    icon: <AiOutlineContacts />,
    component: <PhysicianContactsInfo />,
  },
  {
    menu: 'Notes',
    url: 'notes',
    icon: <FaRegNewspaper />,
    component: <PhysicianNotes />,
  },

  {
    menu: 'Credentials',
    url: 'credentials',
    icon: <SlCheck />,
    component: <PhysicianCredentials />,
  },
  {
    menu: 'Documents',
    url: 'documents',
    icon: <BsFolder2Open />,
    component: <PhysicianDocuments />,
  },
  {
    menu: 'My Orders',
    url: 'myorders',
    icon: <BiGitPullRequest />,
    component: <PhysicianOrders />,
  },
  {
    menu: 'Website',
    url: 'website',
    icon: <BsGlobe />,
    component: <PhysicianWebsite />,
  },
];

export const physicianOrder = [
  {
    orderName: 'orderName1',
    orderDescription: 'lorem lorem lorem lorem',
    date: new Date().toLocaleString(),
    status: 'Active',
  },
  {
    orderName: 'orderName2',
    orderDescription: 'lorem lorem lorem lorem',
    date: new Date().toLocaleString(),
    status: 'Active',
  },
  {
    orderName: 'orderName3',
    orderDescription: 'lorem lorem lorem lorem',
    date: new Date().toLocaleString(),
    status: 'Active',
  },
  {
    orderName: 'orderName4',
    orderDescription: 'lorem lorem lorem lorem',
    date: new Date().toLocaleString(),
    status: 'Active',
  },
];

export const physicianOrgAccess = [
  { id: 1, name: 'ESI Demo', hasChild: true, expanded: true },
  { id: 2, pid: 1, name: 'Arizona', hasChild: true, expanded: true },
  { id: 3, pid: 2, name: 'Arizona Home Health - Chandler' },
  { id: 4, pid: 2, name: 'Arizona Home Health - Scottsdale ' },
  { id: 5, pid: 2, name: 'Arizona Home Health - Tempe' },
  { id: 6, pid: 2, name: 'Test Home Health Agency' },
  { id: 7, pid: 1, name: 'Florida', hasChild: true, expanded: true },
  { id: 8, pid: 7, name: 'Tampa Bay Home Health' },
  { id: 9, pid: 1, name: 'Kansas', hasChild: true, expanded: true },
  { id: 10, pid: 9, name: 'Kansas Home Health' },
  { id: 11, pid: 9, name: 'Kansas City Hospice' },
  { id: 12, pid: 1, name: 'Louisiana', hasChild: true, expanded: true },
  { id: 13, pid: 12, name: 'Faith In Action' },
  { id: 14, pid: 12, name: 'Loisiana Labour of Love' },
];

export const physicianRoles = [
  'Administrators',
  'Business  Office Manager',
  'Demo User',
  'HHA',
  'Human Resources',
  'Louisiana Labour of Love - Director',
  'Physician Document Management',
  'Point of Care - Clinical',
  'Quality Assurance',
  'Restricted Users',
  'Service Note Review',
  'Surveyor',
  'View Medical Records Only',
];

export const doctorPatients = [
  {
    name: 'John Doe',
    socDate: new Date().toLocaleDateString(),
    where: 'Encounter Doctor',
  },
  {
    name: 'John Doe',
    socDate: new Date().toLocaleDateString(),
    where: 'Referral Information',
  },
  {
    name: 'John Doe',
    socDate: new Date().toLocaleDateString(),
    where: 'Referral Source',
  },
  {
    name: 'John Doe',
    socDate: new Date().toLocaleDateString(),
    where: 'Certifications',
  },
  {
    name: 'John Doe',
    socDate: new Date().toLocaleDateString(),
    where: 'Interim orders',
  },
  {
    name: 'John Doe',
    socDate: new Date().toLocaleDateString(),
    where: 'Referral Information',
  },
  {
    name: 'John Doe',
    socDate: new Date().toLocaleDateString(),
    where: 'Encounter Doctor',
  },
  {
    name: 'John Doe',
    socDate: new Date().toLocaleDateString(),
    where: 'Interim orders',
  },
  {
    name: 'John Doe',
    socDate: new Date().toLocaleDateString(),
    where: 'Certifications',
  },
  {
    name: 'John Doe',
    socDate: new Date().toLocaleDateString(),
    where: 'Referral Source',
  },
];

import { AiOutlineContacts } from 'react-icons/ai';
import {
  BsCalendarCheck,
  BsCurrencyDollar,
  BsFolder2Open,
  BsGlobe,
} from 'react-icons/bs';
import { FaRegNewspaper } from 'react-icons/fa';
import { RiProfileLine } from 'react-icons/ri';
import { SlCheck } from 'react-icons/sl';
import { VscNote } from 'react-icons/vsc';
import AssociateMenuAvailability from './AssociateMenuAvailability';
import AssociateMenuCompliance from './AssociateMenuCompliance';
import AssociateMenuContact from './AssociateMenuContact';
import AssociateMenuDocs from './AssociateMenuDocs';
import AssociateMenuEvv from './AssociateMenuEvv';
import AssociateMenuNotes from './AssociateMenuNotes';
import AssociateMenuPayRates from './AssociateMenuPayRates';
import AssociateMenuPayroll from './AssociateMenuPayroll';
import AssociateMenuProfile from './AssociateMenuProfile';
import AssociateMenuWebsite from './AssociateMenuWebsite';

export const associateTableData = [
  {
    name: 'Peggy Opong',
    url: 'peggyopong',
    classification: 'Administrative',
    discipline: 'Registered Nurse',
    hireDate: new Date().toLocaleDateString(),
    status: 'Active',
  },
  {
    name: 'Destiny Dinam',
    url: 'destinydinam',
    classification: 'Administrative',
    discipline: 'Registered Nurse',
    hireDate: new Date().toLocaleDateString(),
    status: 'Active',
  },
  {
    name: 'Joshua Nartey',
    url: 'joshuanartey',
    classification: 'Field Staff - Full time',
    discipline: 'Nurse Practitioner',
    hireDate: new Date().toLocaleDateString(),
    status: 'Active',
  },
  {
    name: 'Nicholas Dazie',
    url: 'nicholasdazie',
    classification: 'Field Staff - Full time',
    discipline: 'Medical Director',
    hireDate: new Date().toLocaleDateString(),
    status: 'Active',
  },
  {
    name: 'Jay West',
    url: 'jaywest',
    classification: 'FieldStaff - Part Time',
    discipline: 'Certified Occupational Therapy Assistant',
    hireDate: new Date().toLocaleDateString(),
    status: 'Active',
  },
];

export const associateMenu = [
  {
    menu: 'Profile',
    url: 'profile',
    icon: <RiProfileLine />,
    component: <AssociateMenuProfile />,
  },
  {
    menu: 'Contacts',
    url: 'contacts',
    icon: <AiOutlineContacts />,
    component: <AssociateMenuContact />,
  },
  {
    menu: 'Website',
    url: 'website',
    icon: <BsGlobe />,
    component: <AssociateMenuWebsite />,
  },
  {
    menu: 'Notes',
    url: 'notes',
    icon: <FaRegNewspaper />,
    component: <AssociateMenuNotes />,
  },
  {
    menu: 'Availability',
    url: 'availability',
    icon: <BsCalendarCheck />,
    component: <AssociateMenuAvailability />,
  },
  {
    menu: 'Compliance',
    url: 'compliance',
    icon: <SlCheck />,
    component: <AssociateMenuCompliance />,
  },
  {
    menu: 'Payroll',
    url: 'payroll',
    icon: <VscNote />,
    component: <AssociateMenuPayroll />,
  },
  {
    menu: 'Pay Rates',
    url: 'payrates',
    icon: <BsCurrencyDollar />,
    component: <AssociateMenuPayRates />,
  },
  {
    menu: 'Docs',
    url: 'docs',
    icon: <BsFolder2Open />,
    component: <AssociateMenuDocs />,
  },
  {
    menu: 'EVV',
    url: 'evv',
    icon: '',
    component: <AssociateMenuEvv />,
  },
];

export const associateRoles = [
  'Accounts Receivable Specialist',
  'Family Portal',
  'Physician Document Management',
  'Administrators',
  'Finance Manager',
  'Point of Care - Clinical',
  'Agency Administrator/Director',
  'Human Resources Specialist',
  'Point of Care - LPN',
  'Allow Desktop Faxing',
  'Intake Coordinator',
  'Point of Care - Paraprofessional',
  'Associate HR',
  'Medical Director/Associate Medical Director',
  'Quality Assurance Nurse/Manager',
  'Auditor',
  'Office Manager',
  'Restricted User',
  'Case Manager - Point of Care',
  'On-Call Coordinator',
  'Scheduler',
  'Clerk/Receptionist',
  'Payroll Specialist',
  'System Administrator',
  'Director of Nursing',
];

export const associateOrgAccess = [
  { id: 1, name: 'Louisiana Labour of Love', hasChild: true, expanded: true },
  {
    id: 2,
    pid: 1,
    name: 'Louisiana Labour of Love',
    hasChild: true,
    expanded: true,
  },
  { id: 3, pid: 2, name: 'Labour of Love Hospice' },
  { id: 4, pid: 2, name: 'Louisiana Labour of Love' },
];

export const evvDrivingData = [
  {
    date: `${new Date().toLocaleString()}-${
      new Date().toUTCString().split(' ')[5]
    }  `,
    type: 'Stop Mileage',
    note: '225 Iowa Ave SE, Huron, SD 57350, USA Washechek, Ricky (Homemaker)',
  },
  {
    date: `${new Date().toLocaleString()}-${
      new Date().toUTCString().split(' ')[5]
    }  `,
    type: 'Start Mileage',
    note: '1225 Minnesota Ave SW, Huron, SD 57350, USA Washechek, Ricky (Homemaker)',
  },
];

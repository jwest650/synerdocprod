import { AiOutlineContacts } from 'react-icons/ai';
import { BiDollar } from 'react-icons/bi';
import { BsFolder2Open, BsListStars } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { FaRegNewspaper } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { MdNotes } from 'react-icons/md';
import { VscNote } from 'react-icons/vsc';
import PayerForms from './PayerForms';
import PayersBillRates from './PayersBillRates';
import PayersContactInfo from './PayersContactInfo';
import PayersDocuments from './PayersDocuments';
import PayersEncounters from './PayersEncounters';
import PayersNotes from './PayersNotes';
import PayersRequirements from './PayersRequirements';
import PayersRules from './PayersRules';
import PayersSettings from './PayersSettings';

export const organizationPayersTableData = [
  {
    name: 'Atena',
    url: 'atena',
    payerCategory: 'Insurance',
    claimFilingType: 'Commercial Insurance',
    agencyType: '',
    invoiceType: 'Generic',
    cycle: 'Weekly',
    orgStartDate: new Date().toLocaleDateString(),
    orgEndDate: '',
    status: 'Active',
  },
  {
    name: 'Amerihealth Caritas',
    url: 'amerihealthcaritas',
    payerCategory: 'Insurance',
    claimFilingType: 'Commercial Insurance',
    agencyType: '',
    invoiceType: 'UB04',
    cycle: 'Monthly',
    orgStartDate: new Date().toLocaleDateString(),
    orgEndDate: '',
    status: 'Active',
  },
  {
    name: 'BCBS LA',
    url: 'bcbsla',
    payerCategory: 'Insurance',
    claimFilingType: 'Commercial Insurance',
    agencyType: '',
    invoiceType: 'Generic',
    cycle: 'Monthly',
    orgStartDate: new Date().toLocaleDateString(),
    orgEndDate: '',
    status: 'Active',
  },
];

export const organizationPayersMenu = [
  {
    menu: 'Contact Info',
    url: 'contactinfo',
    icon: <AiOutlineContacts />,
    component: <PayersContactInfo />,
  },
  {
    menu: 'Notes',
    url: 'notes',
    icon: <FaRegNewspaper />,
    component: <PayersNotes />,
  },
  {
    menu: 'Settings',
    url: 'settings',
    icon: <FiSettings />,
    component: <PayersSettings />,
  },
  {
    menu: 'Requirements',
    url: 'requirements',
    icon: <BsListStars />,
    component: <PayersRequirements />,
  },
  {
    menu: 'Bill Rates',
    url: 'billrates',
    icon: <BiDollar />,
    component: <PayersBillRates />,
  },
  {
    menu: 'Rules',
    url: 'rules',
    icon: <MdNotes />,
    component: <PayersRules />,
  },
  {
    menu: 'Encounters',
    url: 'encounters',
    icon: <VscNote />,
    component: <PayersEncounters />,
  },
  {
    menu: 'Documents',
    url: 'documents',
    icon: <BsFolder2Open />,
    component: <PayersDocuments />,
  },
  {
    menu: 'Forms',
    url: 'forms',
    icon: <CgFileDocument />,
    component: <PayerForms />,
  },
];

export const payrateData = [
  {
    description: 'DB - LPN/LVN ROUTINE VISIT - 15 MIN',
    weekdayRate: 100,
    weekendRate: 100,
    allowOverride: true,
    startDate: new Date().toLocaleDateString(),
  },
  {
    description: 'DB - LPN/LVN ROUTINE DIRECT CARE - Hourly',
    weekdayRate: 100,
    weekendRate: 100,
    allowOverride: true,
    startDate: new Date().toLocaleDateString(),
  },
  {
    description: 'DB - LPN/LVN ROUTINE DIRECT CARE - Per Visit',
    weekdayRate: 100,
    weekendRate: 100,
    allowOverride: true,
    startDate: new Date().toLocaleDateString(),
  },
  {
    description: 'DB - LPN/LVN ROUTINE TEACHING - Per Visit',
    weekdayRate: 100,
    weekendRate: 100,
    allowOverride: true,
    startDate: new Date().toLocaleDateString(),
  },
  {
    description: 'DB - RN MANAGEMENT AND EVALUATION - Per Visit',
    weekdayRate: 100,
    weekendRate: 100,
    allowOverride: true,
    startDate: new Date().toLocaleDateString(),
  },
  {
    description: 'DB - RN PEDIATRIC ADMISSION ASSESSMENT',
    weekdayRate: 100,
    weekendRate: 100,
    allowOverride: true,
    startDate: new Date().toLocaleDateString(),
  },
  {
    description: 'DB - RN SUPERVISORY VISIT - HHA',
    weekdayRate: 100,
    weekendRate: 100,
    allowOverride: true,
    startDate: new Date().toLocaleDateString(),
  },
  {
    description: 'DB - RN ASSESSMENT - 15 MIN',
    weekdayRate: 100,
    weekendRate: 100,
    allowOverride: true,
    startDate: new Date().toLocaleDateString(),
  },
  {
    description: 'HSP - RN Psychiatric Nurse SOC with Oasis',
    weekdayRate: 100,
    weekendRate: 100,
    allowOverride: true,
    startDate: new Date().toLocaleDateString(),
  },
];

export const payerInvoiceReviewData = [
  { title: 'Orders Review' },
  { title: 'Visit Note Review' },
  { title: 'All Service Review' },
  { title: 'All Supplies Processed' },
  { title: 'All OASIS assessments done' },
  { title: 'RAP Review' },
];

export const payerHCPCData = [
  {
    placeOfService: 'Assisted Living Facility',
    service: 'HSP - CONTINUOUS CARE',
    HCPCCode: 'Q5002',
    HCPCModifier: '',
    HCPCModifier2: '',
    HCPCModifier3: '',
    HCPCModifier4: '',
    startDate: new Date().toLocaleDateString(),
    endDate: '',
  },
  {
    placeOfService: 'Nursing Facility/Home',
    service: 'HSP - CONTINUOUS CARE',
    HCPCCode: '',
    HCPCModifier: '',
    HCPCModifier2: '',
    HCPCModifier3: '',
    HCPCModifier4: '',
    startDate: new Date().toLocaleDateString(),
    endDate: '',
  },
];

export const payerServiceCat = [
  { description: 'Skilled Nurse' },
  { description: 'Physical Therapist' },
  { description: 'Occupational Therapist' },
  { description: 'Speech Therapist' },
  { description: 'Social Worker' },
  { description: 'Home Wealth Aide' },
  { description: 'Chore Services' },
  { description: 'Comprehension' },
  { description: 'Homemaker' },
  { description: 'Other Paraprofessional' },
  { description: 'Personal Care' },
  { description: 'Respite' },
  { description: 'Supplies' },
  { description: 'Durable Medical Equipment' },
  { description: 'Pharmaceuticals' },
  { description: 'Lab Services' },
  { description: 'Level of Care' },
  { description: 'Bereavement' },
  { description: 'Chaplain' },
  { description: 'Dietician' },
  { description: 'Massage Therapist' },
  { description: 'Supervisory Visit - Aide' },
  { description: 'Supervisory Visit - LPN' },
  { description: 'Supervisory Visit - OT' },
];

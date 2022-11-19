import {
  AiOutlineContacts,
  AiOutlineInfoCircle,
  AiOutlineLineChart,
} from 'react-icons/ai';
import {
  BsBuilding,
  BsCalendar4Event,
  BsCalendarCheck,
  BsCurrencyDollar,
  BsDot,
  BsFolder2Open,
  BsGlobe,
  BsListStars,
} from 'react-icons/bs';
import { TbNurse, TbPresentationAnalytics } from 'react-icons/tb';
import { BiChalkboard, BiDollar, BiGitPullRequest } from 'react-icons/bi';
import { GiWhiteBook } from 'react-icons/gi';
import { CiStethoscope } from 'react-icons/ci';
import { RiBillLine, RiProfileLine, RiToolsFill } from 'react-icons/ri';
import {
  MdAttachMoney,
  MdLibraryBooks,
  MdNotes,
  MdOutlineMedicalServices,
  MdOutlinePayments,
} from 'react-icons/md';
import { SlCalculator, SlCheck } from 'react-icons/sl';
import { FiHome, FiSettings } from 'react-icons/fi';
import { VscNote, VscServerProcess } from 'react-icons/vsc';
import { IoIosPeople } from 'react-icons/io';
import { FaHome, FaRegNewspaper } from 'react-icons/fa';
import AssociateMenuProfile from '../components/resources/associates/AssociateMenuProfile/index';
import AssociateMenuContact from '../components/resources/associates/AssociateMenuContact/index';
import AssociateMenuWebsite from '../components/resources/associates/AssociateMenuWebsite/index';
import AssociateMenuNotes from '../components/resources/associates/AssociateMenuNotes';
import AssociateMenuAvailability from '../components/resources/associates/AssociateMenuAvailability';
import AssociateMenuCompliance from '../components/resources/associates/AssociateMenuCompliance';
import AssociateMenuPayroll from '../components/resources/associates/AssociateMenuPayroll';
import AssociateMenuPayRates from '../components/resources/associates/AssociateMenuPayRates';
import AssociateMenuDocs from '../components/resources/associates/AssociateMenuDocs';
import AssociateMenuEvv from '../components/resources/associates/AssociateMenuEvv';
import PhysicianContactsInfo from '../components/resources/physicians/PhysicianContactsInfo';
import PhysicianNotes from '../components/resources/physicians/PhysicianNotes';
import PhysicianCredentials from '../components/resources/physicians/PhysicianCredentials';
import PhysicianDocuments from '../components/resources/physicians/PhysicianDocuments';
import PhysicianWebsite from '../components/resources/physicians/PhysicianWebsite';
import PhysicianOrders from '../components/resources/physicians/PhysicianOrders';
import FacilityContactsInfo from '../components/resources/facilities/FacilityContactsInfo';
import FacilityNotes from '../components/resources/facilities/FacilityNotes';
import FacilityCredentials from '../components/resources/facilities/FacilityCredentials';
import OrganizationPayersContactInfo from '../components/resources/organization-payers/OrganizationPayersContactInfo';
import OrganizationPayersNotes from '../components/resources/organization-payers/OrganizationPayersNotes';
import OrganizationPayersSettings from '../components/resources/organization-payers/OrganizationPayersSettings';
import OrganizationPayersRequirements from '../components/resources/organization-payers/OrganizationPayersRequirements';
import OrganizationPayersBillRates from '../components/resources/organization-payers/OrganizationPayersBillRates';
import OrganizationPayersRules from '../components/resources/organization-payers/OrganizationPayersRules';
import OrganizationPayersEncounters from '../components/resources/organization-payers/OrganizationPayersEncounters';
import OrganizationPayersDocuments from '../components/resources/organization-payers/OrganizationPayersDocuments';
import ReferralSourcesContactInfo from '../components/resources/referral-sources/ReferralSourcesContactInfo';
import ReferralSourcesNotes from '../components/resources/referral-sources/ReferralSourcesNotes';
import ReferralSourcesCredentials from '../components/resources/referral-sources/ReferralSourcesCredentials';

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    StartTime: '2021-01-11T06:30:00.000Z',
    EndTime: '2021-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    Location: 'Space Center USA',
    StartTime: '2021-01-12T04:00:00.000Z',
    EndTime: '2021-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Meteor Showers in 2021',
    Location: 'Space Center USA',
    StartTime: '2021-01-13T07:30:00.000Z',
    EndTime: '2021-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T06:30:00.000Z',
    EndTime: '2021-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    Location: 'Bermuda',
    StartTime: '2021-01-14T04:00:00.000Z',
    EndTime: '2021-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    Location: 'Himalayas',
    StartTime: '2021-01-15T05:30:00.000Z',
    EndTime: '2021-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Life on Mars',
    Location: 'Space Center USA',
    StartTime: '2021-01-16T03:30:00.000Z',
    EndTime: '2021-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-18T05:30:00.000Z',
    EndTime: '2021-01-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: 'Wildlife Galleries',
    Location: 'Africa',
    StartTime: '2021-01-20T05:30:00.000Z',
    EndTime: '2021-01-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: 'Best Photography 2021',
    Location: 'London',
    StartTime: '2021-01-21T04:00:00.000Z',
    EndTime: '2021-01-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    Subject: 'Smarter Puppies',
    Location: 'Sweden',
    StartTime: '2021-01-08T04:30:00.000Z',
    EndTime: '2021-01-08T06:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    Location: 'Space Center USA',
    StartTime: '2021-01-06T05:00:00.000Z',
    EndTime: '2021-01-06T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: 'Aliens vs Humans',
    Location: 'Research Center of USA',
    StartTime: '2021-01-05T04:30:00.000Z',
    EndTime: '2021-01-05T06:00:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-19T04:00:00.000Z',
    EndTime: '2021-01-19T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 16,
    Subject: 'Sky Gazers',
    Location: 'Alaska',
    StartTime: '2021-01-22T05:30:00.000Z',
    EndTime: '2021-01-22T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 17,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-11T00:00:00.000Z',
    EndTime: '2021-01-11T02:00:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 18,
    Subject: 'Space Galaxies and Planets',
    Location: 'Space Center USA',
    StartTime: '2021-01-11T11:30:00.000Z',
    EndTime: '2021-01-11T13:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 19,
    Subject: 'Lifecycle of Bumblebee',
    Location: 'San Fransisco',
    StartTime: '2021-01-14T00:30:00.000Z',
    EndTime: '2021-01-14T02:00:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 20,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T10:30:00.000Z',
    EndTime: '2021-01-14T12:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 21,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T08:30:00.000Z',
    EndTime: '2021-01-10T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 22,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-12T09:00:00.000Z',
    EndTime: '2021-01-12T10:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 23,
    Subject: 'Sky Gazers',
    Location: 'Greenland',
    StartTime: '2021-01-15T09:00:00.000Z',
    EndTime: '2021-01-15T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 24,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-16T07:00:00.000Z',
    EndTime: '2021-01-16T09:00:00.000Z',
    CategoryColor: '#7fa900',
  },
];

export const physiciansData = [
  {
    name: 'omarlay',
    email: 'omarlay@gmail.com',
    numbers: '',
    title: 'md',
    active: 'active',
  },
];

export const menuOptions = [
  {
    name: 'Dashboard',
    icon: <FaHome />,
    options: [
      {
        title: 'Home',
        url: 'home',
        icon: <FiHome />,
      },
      {
        title: 'Charts',
        url: 'charts',
        icon: <AiOutlineLineChart />,
      },
      {
        title: 'Budget',
        url: 'budget',
        icon: <SlCalculator />,
      },
      {
        title: 'Dates',
        url: 'dates',
        icon: <BsCalendar4Event />,
      },
      {
        title: 'Metrics',
        url: 'metrics',
        icon: <TbPresentationAnalytics />,
      },
      {
        title: 'Agency Cost',
        url: 'agency-cost',
        icon: <MdAttachMoney />,
      },
      {
        title: 'Whiteboard',
        url: 'whiteboard',
        icon: <BiChalkboard />,
      },
    ],
  },
  {
    name: 'Resources',
    icon: <MdOutlineMedicalServices />,
    options: [
      {
        title: 'Associates',
        url: 'associates',
        icon: <TbNurse />,
      },
      {
        title: 'Physicians',
        url: 'physicians',
        icon: <CiStethoscope />,
      },
      {
        title: 'Facilities',
        url: 'facilities',
        icon: <BsBuilding />,
      },
      {
        title: 'Organization Payers',
        url: 'organization-payers',
        icon: <MdOutlinePayments />,
      },
      {
        title: 'Referral Sources',
        url: 'referral-sources',
        icon: <AiOutlineInfoCircle />,
      },
    ],
  },

  {
    name: 'Patients',
    icon: <IoIosPeople />,
    options: [
      {
        title: 'Add Referral/Patient',
        url: 'add-referral',
        icon: <BsDot />,
      },
      {
        title: 'Transition Patients',
        url: 'transition-patients',
        icon: <BsDot />,
      },
      {
        title: 'Incomplete Referrals',
        url: 'incomplete-referrals',
        icon: <BsDot />,
      },
      {
        title: 'Patient Encounters',
        url: 'patients-encounters',
        icon: <BsDot />,
      },
      {
        title: 'Disaster Plans',
        url: 'disaster-plans',
        icon: <BsDot />,
      },
      {
        title: 'Patient Schedules',
        url: 'patient-schedules',
        icon: <BsDot />,
      },
      {
        title: 'Schedules Detail Listing',
        url: 'schedules-datail-lising',
        icon: <BsDot />,
      },
      {
        title: 'Associate Load Balance',
        url: 'associate-load-balance',
        icon: <BsDot />,
      },
      {
        title: 'Verifications',
        url: 'verifications',
        icon: <BsDot />,
        subOptions: [
          {
            title: 'Verify Services',
            url: 'verify-services',
            icon: <BsDot />,
          },
          {
            title: 'Adjust Verified Services',
            url: 'adjust-verified-services',
            icon: <BsDot />,
          },
          {
            title: 'Automated Service Verification Errors',
            url: 'automated-service-verification-errors',
            icon: <BsDot />,
          },
          {
            title: 'Automated Verification Process',
            url: 'automated-verification-process',
            icon: <BsDot />,
          },
          {
            title: 'Verify Service in Mass',
            url: 'verifiy-service-in-mass',
            icon: <BsDot />,
          },
        ],
      },
      {
        title: 'Verified Services',
        url: 'verified-services',
        icon: <BsDot />,
      },
      {
        title: 'Scheduling Notifications',
        url: 'scheduling-notifications',
        icon: <BsDot />,
      },
      {
        title: 'Approve F2F Document',
        url: 'approve-f2f-document',
        icon: <BsDot />,
      },
      {
        title: 'View/Print Orders',
        url: 'view-orders',
        icon: <BsDot />,
      },
      {
        title: 'Move Service Note',
        url: 'move-service-note',
        icon: <BsDot />,
      },
    ],
  },
  {
    name: 'AR',
    icon: <MdLibraryBooks />,
    options: [
      {
        title: 'A/R Collection Assignments',
        url: 'ar-collection-assignments',
        icon: <BsDot />,
      },
      {
        title: 'A/R Transaction Summary',
        url: 'ar-transaction-summary',
        icon: <BsDot />,
      },
      {
        title: 'Agency Accounts',
        url: 'agency-accounts',
        icon: <BsDot />,
      },
      {
        title: 'A/R Aging As Of Report',
        url: 'ar-aging-as-of-report',
        icon: <BsDot />,
      },
      {
        title: 'Invoices',
        url: 'invoices',
        icon: <BsDot />,
      },
      {
        title: 'Invoice Detail Report',
        url: 'invoice-detail-report',
        icon: <BsDot />,
      },
      {
        title: 'Invoice Service Summary',
        url: 'invoice-service-summary',
        icon: <BsDot />,
      },
      {
        title: 'Invoice Errors',
        url: 'invoice-errors',
        icon: <BsDot />,
      },
      {
        title: 'ERA Payments',

        url: 'era-payments',
        icon: <BsDot />,
      },
      {
        title: 'Payments',
        url: 'payments',
        icon: <BsDot />,
      },
      {
        title: 'Add Paymnet',
        url: 'add-payments',
        icon: <BsDot />,
      },
      {
        title: 'CAP Support  Data',
        url: 'cap-support-data',
        icon: <BsDot />,
      },
      {
        title: 'PPS Billing Alerts',
        url: 'pps-billing-alerts',
        icon: <BsDot />,
      },
    ],
  },
  {
    name: 'Processes',
    icon: <VscServerProcess />,
    options: [
      {
        title: 'View  Physician Documents',
        url: 'view-physcian-documents',
        icon: <BsDot />,
      },
      {
        title: 'Physician Document',

        url: 'physcian-document',
        icon: <BsDot />,
      },
      {
        title: 'Associate Time Entry',
        url: 'associate-time-entry',
        icon: <BsDot />,
      },
      {
        title: 'Oasis File Build',
        url: 'oasis-file-build',
        icon: <BsDot />,
      },
      {
        title: 'Oasis Validation Post',
        url: 'oasis-validation-post',
        icon: <BsDot />,
      },
      {
        title: 'Clinical Update Review',
        url: 'clinical-update-review',
        icon: <BsDot />,
      },
      {
        title: 'Directions / Map',
        url: 'directions',
        icon: <BsDot />,
      },
      {
        title: 'Home Health Patient Survey',
        url: 'home-health-patient-survey',
        icon: <BsDot />,
      },
      {
        title: 'Hostpice Item Set file Build',
        url: 'hospice-item-set-file-build',
        icon: <BsDot />,
      },
      {
        title: 'Hostpice Patient Survey',
        url: 'hospice-patient-survey',
        icon: <BsDot />,
      },
      {
        title: 'IDT Review',
        url: 'idt-review',
        icon: <BsDot />,
      },
      {
        title: 'Orders To Sign',
        url: 'orders-to-sign',
        icon: <BsDot />,
      },
      {
        title: 'Pharmacy Import',
        url: 'pharmacy-import',
        icon: <BsDot />,
      },
      {
        title: 'QA Review',
        url: 'qa-review',
        icon: <BsDot />,
      },
      {
        title: 'RCD Document Gathering',
        url: 'rcd-document-gathering',
        icon: <BsDot />,
      },
    ],
  },
  {
    name: 'Reports',
    icon: <GiWhiteBook />,
    options: [
      {
        title: 'Automated Reports',
        url: 'automated-reports',
        icon: <BsDot />,
      },
      {
        title: 'Ad Hoc Reports',
        url: 'ad-hoc-reports',
        icon: <BsDot />,
      },
      {
        title: 'Active Diabetes Patients Report',
        url: 'active-diabetes-patients-report',
        icon: <BsDot />,
      },
      {
        title: 'Associate Compliance',
        url: 'associate-compliance',
        icon: <BsDot />,
      },
      {
        title: 'Associate Pay Rates Report',
        url: 'associate-pay-rates-report',
        icon: <BsDot />,
      },
      {
        title: 'Associate Productivity',
        url: 'associate-productivity',
        icon: <BsDot />,
      },
      {
        title: 'Authorization Reports',
        url: 'authorization-reports',
        icon: <BsDot />,
      },
      {
        title: 'Bereavement',
        url: 'bereavement',
        icon: <BsDot />,
      },
      {
        title: 'Care Plans Without Bereavement',
        url: 'care-plans-without-bereavement',
        icon: <BsDot />,
      },
      {
        title: 'Diagnosis Code Report',
        url: 'diagnosis-code-report',
        icon: <BsDot />,
      },
      {
        title: 'DME Report',
        url: 'dme-report',
        icon: <BsDot />,
      },
      {
        title: 'EVV Report',
        url: 'evv-report',
        icon: <BsDot />,
      },
      {
        title: 'Face To Face Due Report',
        url: 'face-to-face-due-report',
        icon: <BsDot />,
      },
      {
        title: 'Form Data - Reports',
        title: 'form-data-reports',
        icon: <BsDot />,
      },
      {
        title: 'Forms',
        url: 'forms',
        icon: <BsDot />,
      },
      {
        title: 'HIS Transmission Report',
        url: 'his-transmission-report',
        icon: <BsDot />,
      },
      {
        title: 'Home Health QAPI Reports',
        url: 'home-health-qapi-reports',
        icon: <BsDot />,
      },
      {
        title: 'Medication Administration Report',
        url: 'medication-administration-report',
        icon: <BsDot />,
      },
      {
        title: 'Note/Forms Report',
        url: 'note-forms-report',
        icon: <BsDot />,
      },
      {
        title: 'Oasis Report',
        url: 'oasis-report',
        icon: <BsDot />,
      },
      {
        title: 'Orders Report',
        url: 'orders-report',
        icon: <BsDot />,
      },
      {
        title: 'Patient Measures',
        url: 'patient-measures',
        icon: <BsDot />,
      },
      {
        title: 'PDGM Report',
        url: 'pdgm-report',
        icon: <BsDot />,
      },
      {
        title: 'QAPI - Pain Report',
        url: 'qapi-pain-report',
        icon: <BsDot />,
      },
      {
        title: 'QAPI Reports For Hospice',
        url: 'qapi-reports-for-hospice',
        icon: <BsDot />,
      },
      {
        title: 'Service Note Report',
        url: 'service-note-report',
        icon: <BsDot />,
      },
      {
        title: 'Service Notes CoSign Report',
        url: 'service-notes-cosign-report',
        icon: <BsDot />,
      },
      {
        title: 'Statistical Reports',
        url: 'statistical-reports',
        icon: <BsDot />,
      },
    ],
  },
  {
    name: 'Settings',
    icon: <RiToolsFill />,
    options: [
      {
        title: 'Lookup Tables',
        url: 'lookup-tables',
        icon: <BsDot />,
      },
      {
        title: 'Org/Region/Agency',
        url: 'org-region-agency',
        icon: <BsDot />,
      },
      {
        title: 'Work Basket',
        url: 'work-basket',
        icon: <BsDot />,
      },
      {
        title: 'Journey Entry',
        url: 'journey-entry',
        icon: <BsDot />,
      },
      {
        title: 'Offline Forms App',
        url: 'offline-forms-app',
        icon: <BsDot />,
      },
      {
        title: 'Note Forms Tables',
        url: 'note-forms-tables',
        icon: <BsDot />,
      },
    ],
  },
];

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

export const organizationPayersMenu = [
  {
    menu: 'Contact Info',
    url: 'contactinfo',
    icon: <AiOutlineContacts />,
    component: <OrganizationPayersContactInfo />,
  },
  {
    menu: 'Notes',
    url: 'notes',
    icon: <FaRegNewspaper />,
    component: <OrganizationPayersNotes />,
  },
  {
    menu: 'Settings',
    url: 'settings',
    icon: <FiSettings />,
    component: <OrganizationPayersSettings />,
  },
  {
    menu: 'Requirements',
    url: 'requirements',
    icon: <BsListStars />,
    component: <OrganizationPayersRequirements />,
  },
  {
    menu: 'Bill Rates',
    url: 'billrates',
    icon: <BiDollar />,
    component: <OrganizationPayersBillRates />,
  },
  {
    menu: 'Rules',
    url: 'rules',
    icon: <MdNotes />,
    component: <OrganizationPayersRules />,
  },
  {
    menu: 'Encounters',
    url: 'encounters',
    icon: <VscNote />,
    component: <OrganizationPayersEncounters />,
  },
  {
    menu: 'Documents',
    url: 'documents',
    icon: <BsFolder2Open />,
    component: <OrganizationPayersDocuments />,
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
];

export const referralSourcesMenu = [
  {
    menu: 'Contact Info',
    url: 'contactinfo',
    icon: <AiOutlineContacts />,
    component: <ReferralSourcesContactInfo />,
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
    component: <ReferralSourcesCredentials />,
  },
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

export const physicianOrder = [
  {
    orderType: 'ordertype1',
    orderTitle: 'title1',
    date: new Date().toLocaleDateString(),
    status: 'Active',
  },
  {
    orderType: 'ordertype2',
    orderTitle: 'title2',
    date: new Date().toLocaleDateString(),
    status: 'Active',
  },
  {
    orderType: 'ordertype3',
    orderTitle: 'title3',
    date: new Date().toLocaleDateString(),
    status: 'Active',
  },
  {
    orderType: 'ordertype4',
    orderTitle: 'title4',
    date: new Date().toLocaleDateString(),
    status: 'Active',
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

export const notesData = [
  {
    date: new Date().toLocaleDateString(),
    type: 'Payroll',
    note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ',
  },
  {
    date: new Date().toLocaleDateString(),
    type: 'Payroll',
    note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ',
  },
  {
    date: new Date().toLocaleDateString(),
    type: 'General',
    note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ',
  },
];

// createorder, search order
// ordertype, ordertitle, date, status
// ordertype, date, status
// view order, delete order

// createorder modal
// ordertype
// form based on ordertype
//

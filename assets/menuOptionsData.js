import { AiOutlineInfoCircle, AiOutlineLineChart } from 'react-icons/ai';
import { BiChalkboard } from 'react-icons/bi';
import { BsBuilding, BsCalendar4Event, BsDot } from 'react-icons/bs';
import { CiStethoscope } from 'react-icons/ci';
import { FaHome } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { GiWhiteBook } from 'react-icons/gi';
import { IoIosPeople } from 'react-icons/io';
import {
  MdAttachMoney,
  MdLibraryBooks,
  MdOutlineMedicalServices,
  MdOutlinePayments,
} from 'react-icons/md';
import { RiToolsFill } from 'react-icons/ri';
import { SlCalculator } from 'react-icons/sl';
import { TbNurse, TbPresentationAnalytics } from 'react-icons/tb';
import { VscServerProcess } from 'react-icons/vsc';

export const menuOptions = [
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
    name: 'Dashboard',
    icon: <RxDashboard />,
    options: [
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
    name: 'Settings',
    icon: <RiToolsFill />,
    options: [
      {
        title: 'Lookup Tables',
        url: 'lookup-tables',
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
        title: 'Org/Region/Agency',
        url: 'org-region-agency',
        icon: <BsDot />,
      },
      {
        title: 'Security',
        url: 'security',
        icon: <BsDot />,
        subOptions: [
          {
            title: 'title',
            url: 'url',
            icon: <BsDot />,
          },
        ],
      },
      {
        title: 'Work Basket',
        url: 'work-basket',
        icon: <BsDot />,
        subOptions: [
          {
            title: 'title',
            url: 'url',
            icon: <BsDot />,
          },
        ],
      },
      {
        title: 'Journal Entry Setup',
        url: 'journal-entry-setup',
        icon: <BsDot />,
        subOptions: [
          {
            title: 'Journal Entry Mapping',
            url: 'journal-entry-mapping',
            icon: <BsDot />,
          },
          {
            title: 'Journal Entry Mapping Override',
            url: 'journal-entry-mapping-override',
            icon: <BsDot />,
          },
          {
            title: 'Journal Entry Preliminary Results',
            url: 'journal-entry-preliminary-results',
            icon: <BsDot />,
          },
          {
            title: 'QuickBooks File Creation',
            url: 'quickBooks-file-creation',
            icon: <BsDot />,
          },
        ],
      },
      {
        title: 'Offline Forms App',
        url: 'offline-forms-app',
        icon: <BsDot />,
      },
      {
        title: 'Note Form Tables',
        url: 'note-form-tables',
        icon: <BsDot />,
        subOptions: [
          {
            title: 'title',
            url: 'url',
            icon: <BsDot />,
          },
        ],
      },
    ],
  },
];

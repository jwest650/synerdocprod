import { AiOutlineInfoCircle, AiOutlineLineChart } from "react-icons/ai";
import { BsBuilding, BsCalendar4Event, BsDot } from "react-icons/bs";
import { TbNurse, TbPresentationAnalytics } from "react-icons/tb";
import { BiChalkboard } from "react-icons/bi";
import { GiWhiteBook } from "react-icons/gi";
import { CiStethoscope } from "react-icons/ci";
import { RiToolsFill } from "react-icons/ri";
import {
    MdAttachMoney,
    MdLibraryBooks,
    MdOutlineMedicalServices,
    MdOutlinePayments,
} from "react-icons/md";
import { SlCalculator } from "react-icons/sl";
import { FiHome } from "react-icons/fi";
import { VscServerProcess } from "react-icons/vsc";
import { IoIosPeople } from "react-icons/io";
import { FaHome } from "react-icons/fa";

export const scheduleData = [
    {
        Id: 1,
        Subject: "Explosion of Betelgeuse Star",
        Location: "Space Center USA",
        StartTime: "2021-01-10T04:00:00.000Z",
        EndTime: "2021-01-10T05:30:00.000Z",
        CategoryColor: "#1aaa55",
    },
    {
        Id: 2,
        Subject: "Thule Air Crash Report",
        Location: "Newyork City",
        StartTime: "2021-01-11T06:30:00.000Z",
        EndTime: "2021-01-11T08:30:00.000Z",
        CategoryColor: "#357cd2",
    },
    {
        Id: 3,
        Subject: "Blue Moon Eclipse",
        Location: "Space Center USA",
        StartTime: "2021-01-12T04:00:00.000Z",
        EndTime: "2021-01-12T05:30:00.000Z",
        CategoryColor: "#7fa900",
    },
    {
        Id: 4,
        Subject: "Meteor Showers in 2021",
        Location: "Space Center USA",
        StartTime: "2021-01-13T07:30:00.000Z",
        EndTime: "2021-01-13T09:00:00.000Z",
        CategoryColor: "#ea7a57",
    },
    {
        Id: 5,
        Subject: "Milky Way as Melting pot",
        Location: "Space Center USA",
        StartTime: "2021-01-14T06:30:00.000Z",
        EndTime: "2021-01-14T08:30:00.000Z",
        CategoryColor: "#00bdae",
    },
    {
        Id: 6,
        Subject: "Mysteries of Bermuda Triangle",
        Location: "Bermuda",
        StartTime: "2021-01-14T04:00:00.000Z",
        EndTime: "2021-01-14T05:30:00.000Z",
        CategoryColor: "#f57f17",
    },
    {
        Id: 7,
        Subject: "Glaciers and Snowflakes",
        Location: "Himalayas",
        StartTime: "2021-01-15T05:30:00.000Z",
        EndTime: "2021-01-15T07:00:00.000Z",
        CategoryColor: "#1aaa55",
    },
    {
        Id: 8,
        Subject: "Life on Mars",
        Location: "Space Center USA",
        StartTime: "2021-01-16T03:30:00.000Z",
        EndTime: "2021-01-16T04:30:00.000Z",
        CategoryColor: "#357cd2",
    },
    {
        Id: 9,
        Subject: "Alien Civilization",
        Location: "Space Center USA",
        StartTime: "2021-01-18T05:30:00.000Z",
        EndTime: "2021-01-18T07:30:00.000Z",
        CategoryColor: "#7fa900",
    },
    {
        Id: 10,
        Subject: "Wildlife Galleries",
        Location: "Africa",
        StartTime: "2021-01-20T05:30:00.000Z",
        EndTime: "2021-01-20T07:30:00.000Z",
        CategoryColor: "#ea7a57",
    },
    {
        Id: 11,
        Subject: "Best Photography 2021",
        Location: "London",
        StartTime: "2021-01-21T04:00:00.000Z",
        EndTime: "2021-01-21T05:30:00.000Z",
        CategoryColor: "#00bdae",
    },
    {
        Id: 12,
        Subject: "Smarter Puppies",
        Location: "Sweden",
        StartTime: "2021-01-08T04:30:00.000Z",
        EndTime: "2021-01-08T06:00:00.000Z",
        CategoryColor: "#f57f17",
    },
    {
        Id: 13,
        Subject: "Myths of Andromeda Galaxy",
        Location: "Space Center USA",
        StartTime: "2021-01-06T05:00:00.000Z",
        EndTime: "2021-01-06T07:00:00.000Z",
        CategoryColor: "#1aaa55",
    },
    {
        Id: 14,
        Subject: "Aliens vs Humans",
        Location: "Research Center of USA",
        StartTime: "2021-01-05T04:30:00.000Z",
        EndTime: "2021-01-05T06:00:00.000Z",
        CategoryColor: "#357cd2",
    },
    {
        Id: 15,
        Subject: "Facts of Humming Birds",
        Location: "California",
        StartTime: "2021-01-19T04:00:00.000Z",
        EndTime: "2021-01-19T05:30:00.000Z",
        CategoryColor: "#7fa900",
    },
    {
        Id: 16,
        Subject: "Sky Gazers",
        Location: "Alaska",
        StartTime: "2021-01-22T05:30:00.000Z",
        EndTime: "2021-01-22T07:30:00.000Z",
        CategoryColor: "#ea7a57",
    },
    {
        Id: 17,
        Subject: "The Cycle of Seasons",
        Location: "Research Center of USA",
        StartTime: "2021-01-11T00:00:00.000Z",
        EndTime: "2021-01-11T02:00:00.000Z",
        CategoryColor: "#00bdae",
    },
    {
        Id: 18,
        Subject: "Space Galaxies and Planets",
        Location: "Space Center USA",
        StartTime: "2021-01-11T11:30:00.000Z",
        EndTime: "2021-01-11T13:00:00.000Z",
        CategoryColor: "#f57f17",
    },
    {
        Id: 19,
        Subject: "Lifecycle of Bumblebee",
        Location: "San Fransisco",
        StartTime: "2021-01-14T00:30:00.000Z",
        EndTime: "2021-01-14T02:00:00.000Z",
        CategoryColor: "#7fa900",
    },
    {
        Id: 20,
        Subject: "Alien Civilization",
        Location: "Space Center USA",
        StartTime: "2021-01-14T10:30:00.000Z",
        EndTime: "2021-01-14T12:30:00.000Z",
        CategoryColor: "#ea7a57",
    },
    {
        Id: 21,
        Subject: "Alien Civilization",
        Location: "Space Center USA",
        StartTime: "2021-01-10T08:30:00.000Z",
        EndTime: "2021-01-10T10:30:00.000Z",
        CategoryColor: "#ea7a57",
    },
    {
        Id: 22,
        Subject: "The Cycle of Seasons",
        Location: "Research Center of USA",
        StartTime: "2021-01-12T09:00:00.000Z",
        EndTime: "2021-01-12T10:30:00.000Z",
        CategoryColor: "#00bdae",
    },
    {
        Id: 23,
        Subject: "Sky Gazers",
        Location: "Greenland",
        StartTime: "2021-01-15T09:00:00.000Z",
        EndTime: "2021-01-15T10:30:00.000Z",
        CategoryColor: "#ea7a57",
    },
    {
        Id: 24,
        Subject: "Facts of Humming Birds",
        Location: "California",
        StartTime: "2021-01-16T07:00:00.000Z",
        EndTime: "2021-01-16T09:00:00.000Z",
        CategoryColor: "#7fa900",
    },
];

export const physiciansData = [
    {
        name: "omarlay",
        email: "omarlay@gmail.com",
        numbers: "",
        title: "md",
        active: "active",
    },
];
export const menuOptions = [
    {
        name: "Dashboard",
        icon: <FaHome />,
        options: [
            {
                title: "Home",
                url: "home",
                icon: <FiHome />,
            },
            {
                title: "Charts",
                url: "charts",
                icon: <AiOutlineLineChart />,
            },
            {
                title: "Budget",
                url: "budget",
                icon: <SlCalculator />,
            },
            {
                title: "Dates",
                url: "dates",
                icon: <BsCalendar4Event />,
            },
            {
                title: "Metrics",
                url: "metrics",
                icon: <TbPresentationAnalytics />,
            },
            {
                title: "Agency Cost",
                url: "agency-cost",
                icon: <MdAttachMoney />,
            },
            {
                title: "Whiteboard",
                url: "whiteboard",
                icon: <BiChalkboard />,
            },
        ],
    },
    {
        name: "Resources",
        icon: <MdOutlineMedicalServices />,
        options: [
            {
                title: "Associates",
                url: "associates",
                icon: <TbNurse />,
            },
            {
                title: "Physicians",
                url: "physicians",
                icon: <CiStethoscope />,
            },
            {
                title: "Facilities",
                url: "facilities",
                icon: <BsBuilding />,
            },
            {
                title: "Organization Payers",
                url: "organization-payers",
                icon: <MdOutlinePayments />,
            },
            {
                title: "Referral Sources",
                url: "referral-sources",
                icon: <AiOutlineInfoCircle />,
            },
        ],
    },

    {
        name: "Patients",
        icon: <IoIosPeople />,
        options: [
            {
                title: "Add Referral/Patient",
                url: "add-referral",
                icon: <BsDot />,
            },
            {
                title: "Transition Patients",
                url: "transition-patients",
                icon: <BsDot />,
            },
            {
                title: "Incomplete Referrals",
                url: "incomplete-referrals",
                icon: <BsDot />,
            },
            {
                title: "Patient Encounters",
                url: "patients-encounters",
                icon: <BsDot />,
            },
            {
                title: "Disaster Plans",
                url: "disaster-plans",
                icon: <BsDot />,
            },
            {
                title: "Patient Schedules",
                url: "patient-schedules",
                icon: <BsDot />,
            },
            {
                title: "Schedules Detail Listing",
                url: "schedules-datail-lising",
                icon: <BsDot />,
            },
            {
                title: "Associate Load Balance",
                url: "associate-load-balance",
                icon: <BsDot />,
            },
            {
                title: "Verifications",
                url: "verifications",
                icon: <BsDot />,
                subOptions: [
                    {
                        title: "Verify Services",
                        url: "verify-services",
                        icon: <BsDot />,
                    },
                    {
                        title: "Adjust Verified Services",
                        url: "adjust-verified-services",
                        icon: <BsDot />,
                    },
                    {
                        title: "Automated Service Verification Errors",
                        url: "automated-service-verification-errors",
                        icon: <BsDot />,
                    },
                    {
                        title: "Automated Verification Process",
                        url: "automated-verification-process",
                        icon: <BsDot />,
                    },
                    {
                        title: "Verify Service in Mass",
                        url: "verifiy-service-in-mass",
                        icon: <BsDot />,
                    },
                ],
            },
            {
                title: "Verified Services",
                url: "verified-services",
                icon: <BsDot />,
            },
            {
                title: "Scheduling Notifications",
                url: "scheduling-notifications",
                icon: <BsDot />,
            },
            {
                title: "Approve F2F Document",
                url: "approve-f2f-document",
                icon: <BsDot />,
            },
            {
                title: "View/Print Orders",
                url: "view-orders",
                icon: <BsDot />,
            },
            {
                title: "Move Service Note",
                url: "move-service-note",
                icon: <BsDot />,
            },
        ],
    },
    {
        name: "AR",
        icon: <MdLibraryBooks />,
        options: [
            {
                title: "A/R Collection Assignments",
                url: "ar-collection-assignments",
                icon: <BsDot />,
            },
            {
                title: "A/R Transaction Summary",
                url: "ar-transaction-summary",
                icon: <BsDot />,
            },
            {
                title: "Agency Accounts",
                url: "agency-accounts",
                icon: <BsDot />,
            },
            {
                title: "A/R Aging As Of Report",
                url: "ar-aging-as-of-report",
                icon: <BsDot />,
            },
            {
                title: "Invoices",
                url: "invoices",
                icon: <BsDot />,
            },
            {
                title: "Invoice Detail Report",
                url: "invoice-detail-report",
                icon: <BsDot />,
            },
            {
                title: "Invoice Service Summary",
                url: "invoice-service-summary",
                icon: <BsDot />,
            },
            {
                title: "Invoice Errors",
                url: "invoice-errors",
                icon: <BsDot />,
            },
            {
                title: "ERA Payments",

                url: "era-payments",
                icon: <BsDot />,
            },
            {
                title: "Payments",
                url: "payments",
                icon: <BsDot />,
            },
            {
                title: "Add Paymnet",
                url: "add-payments",
                icon: <BsDot />,
            },
            {
                title: "CAP Support  Data",
                url: "cap-support-data",
                icon: <BsDot />,
            },
            {
                title: "PPS Billing Alerts",
                url: "pps-billing-alerts",
                icon: <BsDot />,
            },
        ],
    },
    {
        name: "Processes",
        icon: <VscServerProcess />,
        options: [
            {
                title: "View  Physician Documents",
                url: "view-physcian-documents",
                icon: <BsDot />,
            },
            {
                title: "Physician Document",

                url: "physcian-document",
                icon: <BsDot />,
            },
            {
                title: "Associate Time Entry",
                url: "associate-time-entry",
                icon: <BsDot />,
            },
            {
                title: "Oasis File Build",
                url: "oasis-file-build",
                icon: <BsDot />,
            },
            {
                title: "Oasis Validation Post",
                url: "oasis-validation-post",
                icon: <BsDot />,
            },
            {
                title: "Clinical Update Review",
                url: "clinical-update-review",
                icon: <BsDot />,
            },
            {
                title: "Directions / Map",
                url: "directions",
                icon: <BsDot />,
            },
            {
                title: "Home Health Patient Survey",
                url: "home-health-patient-survey",
                icon: <BsDot />,
            },
            {
                title: "Hostpice Item Set file Build",
                url: "hospice-item-set-file-build",
                icon: <BsDot />,
            },
            {
                title: "Hostpice Patient Survey",
                url: "hospice-patient-survey",
                icon: <BsDot />,
            },
            {
                title: "IDT Review",
                url: "idt-review",
                icon: <BsDot />,
            },
            {
                title: "Orders To Sign",
                url: "orders-to-sign",
                icon: <BsDot />,
            },
            {
                title: "Pharmacy Import",
                url: "pharmacy-import",
                icon: <BsDot />,
            },
            {
                title: "QA Review",
                url: "qa-review",
                icon: <BsDot />,
            },
            {
                title: "RCD Document Gathering",
                url: "rcd-document-gathering",
                icon: <BsDot />,
            },
        ],
    },
    {
        name: "Reports",
        icon: <GiWhiteBook />,
        options: [
            {
                title: "Automated Reports",
                url: "automated-reports",
                icon: <BsDot />,
            },
            {
                title: "Ad Hoc Reports",
                url: "ad-hoc-reports",
                icon: <BsDot />,
            },
            {
                title: "Active Diabetes Patients Report",
                url: "active-diabetes-patients-report",
                icon: <BsDot />,
            },
            {
                title: "Associate Compliance",
                url: "associate-compliance",
                icon: <BsDot />,
            },
            {
                title: "Associate Pay Rates Report",
                url: "associate-pay-rates-report",
                icon: <BsDot />,
            },
            {
                title: "Associate Productivity",
                url: "associate-productivity",
                icon: <BsDot />,
            },
            {
                title: "Authorization Reports",
                url: "authorization-reports",
                icon: <BsDot />,
            },
            {
                title: "Bereavement",
                url: "bereavement",
                icon: <BsDot />,
            },
            {
                title: "Care Plans Without Bereavement",
                url: "care-plans-without-bereavement",
                icon: <BsDot />,
            },
            {
                title: "Diagnosis Code Report",
                url: "diagnosis-code-report",
                icon: <BsDot />,
            },
            {
                title: "DME Report",
                url: "dme-report",
                icon: <BsDot />,
            },
            {
                title: "EVV Report",
                url: "evv-report",
                icon: <BsDot />,
            },
            {
                title: "Face To Face Due Report",
                url: "face-to-face-due-report",
                icon: <BsDot />,
            },
            {
                title: "Form Data - Reports",
                title: "form-data-reports",
                icon: <BsDot />,
            },
            {
                title: "Forms",
                url: "forms",
                icon: <BsDot />,
            },
            {
                title: "HIS Transmission Report",
                url: "his-transmission-report",
                icon: <BsDot />,
            },
            {
                title: "Home Health QAPI Reports",
                url: "home-health-qapi-reports",
                icon: <BsDot />,
            },
            {
                title: "Medication Administration Report",
                url: "medication-administration-report",
                icon: <BsDot />,
            },
            {
                title: "Note/Forms Report",
                url: "note-forms-report",
                icon: <BsDot />,
            },
            {
                title: "Oasis Report",
                url: "oasis-report",
                icon: <BsDot />,
            },
            {
                title: "Orders Report",
                url: "orders-report",
                icon: <BsDot />,
            },
            {
                title: "Patient Measures",
                url: "patient-measures",
                icon: <BsDot />,
            },
            {
                title: "PDGM Report",
                url: "pdgm-report",
                icon: <BsDot />,
            },
            {
                title: "QAPI - Pain Report",
                url: "qapi-pain-report",
                icon: <BsDot />,
            },
            {
                title: "QAPI Reports For Hospice",
                url: "qapi-reports-for-hospice",
                icon: <BsDot />,
            },
            {
                title: "Service Note Report",
                url: "service-note-report",
                icon: <BsDot />,
            },
            {
                title: "Service Notes CoSign Report",
                url: "service-notes-cosign-report",
                icon: <BsDot />,
            },
            {
                title: "Statistical Reports",
                url: "statistical-reports",
                icon: <BsDot />,
            },
        ],
    },
    {
        name: "Settings",
        icon: <RiToolsFill />,
        options: [
            {
                title: "Lookup Tables",
                url: "lookup-tables",
                icon: <BsDot />,
            },
            {
                title: "Org/Region/Agency",
                url: "org-region-agency",
                icon: <BsDot />,
            },
            {
                title: "Work Basket",
                url: "work-basket",
                icon: <BsDot />,
            },
            {
                title: "Journey Entry",
                url: "journey-entry",
                icon: <BsDot />,
            },
            {
                title: "Offline Forms App",
                url: "offline-forms-app",
                icon: <BsDot />,
            },
            {
                title: "Note Forms Tables",
                url: "note-forms-tables",
                icon: <BsDot />,
            },
        ],
    },
];

export const associateTableData = [
    {
        name: "Peggy Opong",
        classification: "Administrative",
        discipline: "Registered Nurse",
        hireDate: new Date().toLocaleDateString(),
        status: "Active",
    },
    {
        name: "Destiny Dinam",
        classification: "Administrative",
        discipline: "Registered Nurse",
        hireDate: new Date().toLocaleDateString(),
        status: "Active",
    },
    {
        name: "Joshua Nartey",
        classification: "Field Staff - Full time",
        discipline: "Nurse Practitioner",
        hireDate: new Date().toLocaleDateString(),
        status: "Active",
    },
    {
        name: "Nicholas Dazie",
        classification: "Field Staff - Full time",
        discipline: "Medical Director",
        hireDate: new Date().toLocaleDateString(),
        status: "Active",
    },
    {
        name: "Jay West",
        classification: "FieldStaff - Part Time",
        discipline: "Certified Occupational Therapy Assistant",
        hireDate: new Date().toLocaleDateString(),
        status: "Active",
    },
];

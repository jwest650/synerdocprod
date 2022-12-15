export const serviceCat = [
  'Skilled Nurse',
  'Physical Therapist',
  'Occupational Therapist',
  'Speech Therapist',
  'Social Worker',
  'Home Health Aide',
  'Chore Services',
  'Comprehensive',
  'Homemaker',
  'Other Paraprofessional',
  'Personal Care',
  'Respite',
  'Supplies',
  'Durable Medical Equipment',
  'Pharmaceutical Lab Services',
  'Level of Care',
  'Supervisory Visit - Aide',
  'Supervisory Visit - LPN',
  'Supervisory Visit - OT',
  'Supervisory Visit - PT',
  'Pay Only',
  'Modalities',
  'Other Professional',
];

export const payerReportingGroup = [
  'Medicare',
  'Medicare Part A',
  'Medicare Part A',
  'Medicare Hospice',
  'Medicare Outpatient',
  'Medicaid',
  'Waiver',
  'Insurance',
  'BC/BS',
  'Contractual',
  'Staffing',
  'Private Pay',
  'Third Party',
  'Workers Compensation',
  'Charity',
  'Unknown',
];

export const days = [
  'Today',
  'Yesterday',
  'This Week',
  'This Month',
  'This Year',
  'Year To Date',
  'Last Week',
  'Last Month',
];

// // Today's date
const today = new Date();

// Yesterday's date
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

// This week's date range (from the first day of the week to today)

const thisWeekStart = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - today.getDay()
);
const thisWeekEnd = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + (6 - today.getDay())
);

// This month's date range (from the first day of the month to today)
// // Get the start and end dates for this month
const thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
const thisMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 1);

// This year's date range (from the first day of the year to today)

const thisYearStart = new Date(today.getFullYear(), 0, 1); // 0 is the month index for January
const thisYearEnd = new Date(today.getFullYear() + 1, 0, 1); // 0 is the month index for January

// Year-to-date date range (from the first day of the year to today)
const yearToDateStart = new Date(today.getFullYear(), 0, 1); // Set the date to the first day of the year
const yearToDateEnd = new Date();

// Last week's date range (from the first day of last week to the last day of last week)

const lastWeekStart = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - today.getDay() - 7
);
const lastWeekEnd = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - today.getDay() - 1
);

// Last month's date range (from the first day of last month to the last day of last month)
const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);

export const periods = {
  today,
  yesterday,
  thisWeekStart,
  thisWeekEnd,
  thisMonthStart,
  thisMonthEnd,
  thisYearStart,
  thisYearEnd,
  yearToDateStart,
  yearToDateEnd,
  lastWeekStart,
  lastWeekEnd,
  lastMonthStart,
  lastMonthEnd,
};

export const patients = [
  {
    name: 'Berry Allen',
    status: 'Discharged',
    date: new Date().toLocaleDateString(),
  },
  {
    name: 'John Doe',
    status: 'Active',
    date: new Date().toLocaleDateString(),
  },
  {
    name: 'Joe West',
    status: 'Discharged',
    date: new Date().toLocaleDateString(),
  },
  {
    name: 'Cisco Ramon',
    status: 'Active',
    date: new Date().toLocaleDateString(),
  },
  {
    name: 'Berry Allen',
    status: 'Discharged',
    date: new Date().toLocaleDateString(),
  },
];

export const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

export const uploadSeviceNotes = [
  {
    checked: false,
    patient: 'Cummins Betty',
    associate: 'Agyeiwaa Nana',
    serviceDate: new Date().toLocaleDateString,
    certificationPeriod: '',
    noteType: 'Home Health Aide Visit',
    attached: false,
  },
  {
    checked: false,
    patient: 'Henriksen Jan',
    associate: 'Adjei Felix',
    serviceDate: new Date().toLocaleDateString,
    certificationPeriod: '',
    noteType: 'Home Health Aide Visit',
    attached: false,
  },
  {
    checked: false,
    patient: 'Hockaday Steve',
    associate: 'Adjei Felix',
    serviceDate: new Date().toLocaleDateString,
    certificationPeriod: '',
    noteType: 'Home Health Aide Visit',
    attached: false,
  },
  {
    checked: false,
    patient: 'Hockaday Steve',
    associate: 'Agyeiwaa Nana',
    serviceDate: new Date().toLocaleDateString,
    certificationPeriod: '',
    noteType: 'Home Health Aide Visit',
    attached: false,
  },
  {
    checked: false,
    patient: 'Hockaday Steve',
    associate: 'Adjei Felix',
    serviceDate: new Date().toLocaleDateString,
    certificationPeriod: '',
    noteType: 'Home Health Aide Visit',
    attached: false,
  },
  {
    checked: false,
    patient: 'Hockaday Steve',
    associate: 'Adjei Felix',
    serviceDate: new Date().toLocaleDateString,
    certificationPeriod: '',
    noteType: 'Home Health Aide Visit',
    attached: false,
  },
  {
    checked: false,
    patient: 'Hockaday Steve',
    associate: 'Adjei Felix',
    serviceDate: new Date().toLocaleDateString,
    certificationPeriod: '',
    noteType: 'Home Health Aide Visit',
    attached: false,
  },
  {
    checked: false,
    patient: 'Hockaday Steve',
    associate: 'Adjei Felix',
    serviceDate: new Date().toLocaleDateString,
    certificationPeriod: '',
    noteType: 'Home Health Aide Visit',
    attached: false,
  },
  {
    checked: false,
    patient: 'Thurnes Donna Ann',
    associate: 'Beyah Roseline',
    serviceDate: new Date().toLocaleDateString,
    certificationPeriod: '',
    noteType: 'Home Health Aide Visit',
    attached: false,
  },
  {
    checked: false,
    patient: 'White James',
    associate: 'Adjei Felix',
    serviceDate: new Date().toLocaleDateString,
    certificationPeriod: '',
    noteType: 'Home Health Aide Visit',
    attached: false,
  },
  {
    checked: false,
    patient: 'White James',
    associate: 'Adjei Felix',
    serviceDate: new Date().toLocaleDateString,
    certificationPeriod: '',
    noteType: 'Home Health Aide Visit',
    attached: false,
  },
];

export const availabilityPopup = [
  {
    day: 'SUN',
    time: '7:00 AM to 7:00 PM',
    type: 'Standard',
  },
  {
    day: 'MON',
    time: '7:00 AM to 7:00 PM',
    type: 'Standard',
  },
  {
    day: 'TUE',
    time: '7:00 AM to 7:00 PM',
    type: 'Standard',
  },
  {
    day: 'WED',
    time: '7:00 AM to 7:00 PM',
    type: 'Standard',
  },
  {
    day: 'THU',
    time: '7:00 AM to 7:00 PM',
    type: 'Standard',
  },
  {
    day: 'FRI',
    time: '7:00 AM to 7:00 PM',
    type: 'Standard',
  },
  {
    day: 'SAT',
    time: '7:00 AM to 7:00 PM',
    type: 'Standard',
  },
];

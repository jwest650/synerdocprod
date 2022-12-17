export const patientManagement = [
  { id: 1, name: 'PATIENT MANAGEMENT', hasChild: true, expanded: true },
  { id: 2, pid: 1, name: 'Add Referral/Patient' },
  { id: 3, pid: 1, name: 'Transition Patients' },
  { id: 4, pid: 1, name: 'View Patient Encounters' },
  { id: 5, pid: 1, name: 'View Imcomplete Referrals' },
  { id: 6, pid: 1, name: 'View Encounter Disaster Plans' },
  { id: 7, pid: 1, name: 'Do Not Restrict to Patient Served' },
  { id: 8, pid: 1, name: 'Edit Patient' },
  { id: 9, pid: 1, name: 'Manage Patient Schedules' },
  { id: 10, pid: 1, name: 'Manage My Patient Schedules' },
  { id: 11, pid: 1, name: 'View Schedules' },
  { id: 12, pid: 1, name: 'View Verified Services' },
  {
    id: 14,
    pid: 1,
    name: 'View Verifications',
    hasChild: true,
    expanded: true,
  },
];

export const resourceManagement = [
  { id: 1, name: 'RESOURCE MANAGEMENT', hasChild: true, expanded: true },
  { id: 2, pid: 1, name: 'Associate', hasChild: true, expanded: true },
  { id: 3, pid: 2, name: 'View Associate' },
  { id: 4, pid: 2, name: 'Add Associate' },
  { id: 5, pid: 2, name: 'Edit Associate' },
  { id: 6, pid: 2, name: 'Delete Associate' },
  { id: 7, pid: 2, name: 'Edit Completed Associate Forms' },
  { id: 8, pid: 2, name: 'Delete Completed Associate Forms' },
  { id: 9, pid: 2, name: 'View Associate Forms' },
  { id: 10, pid: 2, name: 'Add Associate Forms' },
  { id: 11, pid: 2, name: 'Edit Associate Forms' },
  { id: 12, pid: 2, name: 'Delete Associate Forms' },
  { id: 13, pid: 2, name: 'View Associate Payroll' },
];

export const notesData = [
  {
    date: `${new Date().toLocaleString()}-${
      new Date().toUTCString().split(' ')[5]
    }  `,
    type: 'Payroll',
    note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ',
    noteId: '1',
  },
  {
    date: `${new Date().toLocaleString()}-${
      new Date().toUTCString().split(' ')[5]
    }  `,
    type: 'Payroll',
    note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ',
    noteId: '2',
  },
  {
    date: `${new Date().toLocaleString()}-${
      new Date().toUTCString().split(' ')[5]
    }  `,
    type: 'General',
    note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ',
    noteId: '3',
  },
];

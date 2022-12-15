import Link from 'next/link';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { scheduleData } from '../../assets/scheduleData';
import CreateAssociate from '../resources/associates/CreateAssociate';
import ScheduleComp from '../structure/ScheduleComp';
import Card from './Card';
import OtherActionsCard from './otheractionscard';
import SchedulerNav from './SchedulerNav';

const HomePage = () => {
  const [events, setEvents] = useState(scheduleData);
  return (
    <div className="verdana11 mt-4 grid w-full grid-cols-4 gap-4">
      <div className="col-span-1 space-y-4">
        <div className="card-primary h-32 space-y-4">
          <h2 className="verdana14 font-semibold">Annoucements</h2>
          <p className="">There are no annoucements.</p>
        </div>
        <div className="card-primary space-y-4">
          <Link href="reportsandoptions">
            <button className="verdana14 font-semibold text-primary-orange underline">
              Reports and Options
            </button>
          </Link>
        </div>
        <Card
          selectOptions={[
            '<--select-->',
            'My Schedule',
            'Unverified Schedules',
          ]}
          title="Schedules"
        />
        <Card
          addOption={
            <Link href={`/Patients/add-referral`}>
              <button className="btn-primary flex items-center gap-1">
                <BiPlus className="scale-150" />
                Create Referral/Patient
              </button>
            </Link>
          }
          selectOptions={[
            '<--select-->',
            'All patients',
            'Active Patients',
            'Pending Patients',
            'Patients on Hold',
            'Patients in my agency',
          ]}
          title="Patients"
          hasDropDown={true}
        />
        <Card
          selectOptions={['<--select-->', 'Open invoices', 'Unbilled invoices']}
          title="Invoices"
        />
        <Card
          addOption={<CreateAssociate />}
          selectOptions={[
            '<--select-->',
            'All associates',
            'Associates in my agency',
          ]}
          title="Associates"
        />
        <OtherActionsCard />
      </div>
      <div className="col-span-3 space-y-4">
        <SchedulerNav />
        <ScheduleComp eventsData={events} setEventsData={setEvents} />
      </div>
    </div>
  );
};

export default HomePage;

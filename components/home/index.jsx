import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsDot } from 'react-icons/bs';
import { scheduleData } from '../../assets/scheduleData';
import ScheduleComp from '../structure/ScheduleComp';
import Card from './Card';
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
          addOption="Create Referral/Patient"
          selectOptions={['<--select-->']}
          title="Patients"
        />
        <Card selectOptions={['<--select-->']} title="Invoices" />
        <Card
          addOption="Create Associate"
          selectOptions={['<--select-->']}
          title="Associates"
        />
        <ul className="card-primary space-y-1">
          <li className="verdana14 mb-4 font-semibold">Other Actions</li>
          {[
            'Add Referral Source',
            'Directions/Mapping',
            'Attach uploaded service notes',
            'Add Pay Only',
            'Educational Documents',
          ].map((option, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-primary-orange underline"
            >
              <BsDot className="scale-150 text-base text-black" />
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-3 space-y-4">
        <SchedulerNav />
        <ScheduleComp eventsData={events} setEventsData={setEvents} />
      </div>
    </div>
  );
};

export default HomePage;

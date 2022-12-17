import Link from 'next/link';
import { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
<<<<<<< HEAD
import { BsDot } from 'react-icons/bs';
import { scheduleData } from '../../assets/scheduleData';
import CreateAssociate from '../resources/associates/CreateAssociate';
import CreateReferral from '../resources/referral-sources/CreateReferral';
import ScheduleComp from '../structure/ScheduleComp';
import Card from './Card';
import SchedulerNav from './SchedulerNav';
import UploadSeviceNotes from './UploadSeviceNotes';
=======
import { scheduleData } from '../../assets/scheduleData';
import CreateAssociate from '../resources/associates/CreateAssociate';
import ScheduleComp from '../structure/ScheduleComp';
import Card from './Card';
import OtherActionsCard from './otheractionscard';
import SchedulerNav from './SchedulerNav';
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7

const HomePage = () => {
  const [events, setEvents] = useState(scheduleData);
  return (
<<<<<<< HEAD
    <div className="verdana11 mt-4 grid w-full grid-cols-4 gap-4">
=======
    <div className="verdana11 mt-4 grid w-full grid-cols-4 gap-4 px-4">
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
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
<<<<<<< HEAD
        <ul className="card-primary space-y-1">
          <li className="verdana14 mb-4 font-semibold">Other Actions</li>
          <li>
            <CreateReferral
              key={1}
              action={
                <span className="flex cursor-pointer items-center gap-2 text-primary-orange underline">
                  <BsDot className="scale-150 text-base text-black" />
                  Create Referral Source
                </span>
              }
            />
          </li>
          <li className="flex items-center gap-2 text-primary-orange underline">
            <BsDot className="scale-150 text-base text-black" />
            <Link href="/staff/staffdirections">Directions/Mapping</Link>
          </li>
          <li>
            <UploadSeviceNotes />
          </li>
          <li className="flex items-center gap-2 text-primary-orange underline">
            <BsDot className="scale-150 text-base text-black" />
            <Link href="/staff/payonlydetail">Add Pay Only</Link>
          </li>
          {/* {/* 'Educational Documents' */}
        </ul>
      </div>
      <div className="col-span-3 space-y-4">
        <SchedulerNav />
=======
        <OtherActionsCard />
      </div>
      <div className="relative col-span-3 pt-28">
        <div className="absolute top-0 z-10">
          <SchedulerNav />
        </div>
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
        <ScheduleComp eventsData={events} setEventsData={setEvents} />
      </div>
    </div>
  );
};

export default HomePage;

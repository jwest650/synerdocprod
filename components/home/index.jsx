import { BsDot } from 'react-icons/bs';
import Card from './Card';

const HomePage = () => {
  return (
    <div className="verdana11 mt-4 grid w-full grid-cols-4 gap-4">
      <div className="col-span-1 space-y-4">
        <div className="card-primary h-32 space-y-4">
          <h2 className="verdana14 font-semibold">Annoucements</h2>
          <p className="">There are no annoucements.</p>
        </div>
        <div className="card-primary space-y-4">
          <h2 className="verdana14 font-semibold text-primary-orange underline">
            Reports and Options
          </h2>
        </div>
        <Card selectOptions={['<--select-->']} title="Schedules" />
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
      <div className="col-span-3 rounded text-6xl font-bold shadow">
        <p className="mx-auto">Calendar</p>
      </div>
    </div>
  );
};

export default HomePage;

import {
  Day,
  Week,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
  ViewsDirective,
  ViewDirective,
  ScheduleComponent,
} from '@syncfusion/ej2-react-schedule';
import React, { useState } from 'react';
import { scheduleData } from '../assets/data';
import Calendarnav from './Calendarnav';
import Card from './Card';
import ContentOptions from './ContentOptions';
import Infoleft from './Infoleft';

const Calendar = () => {
  const [scheduleObj, setScheduleObj] = useState({});

  const handleSave = (args) => {
    // console.log(args);
  };
  return (
    <div className="rounded-3xl px-3 pt-7">
      <Calendarnav />
      <ContentOptions />
      <div className="mt-[18px] flex flex-col gap-3 lg:grid lg:grid-cols-4">
        <div className="mb-16 lg:col-span-3">
          <ScheduleComponent
            cssClass="schedule"
            height="650px"
            ref={(schedule) => setScheduleObj(schedule)}
            selectedDate={new Date(2021, 0, 10)}
            currentView="Month"
            actionComplete={handleSave}
            eventSettings={{ dataSource: scheduleData }}
          >
            <ViewsDirective>
              {['Day', 'Week', 'Month', 'Agenda'].map((item) => (
                <ViewDirective key={item} option={item} />
              ))}
            </ViewsDirective>
            <Inject
              services={[
                Day,
                Week,
                Month,
                Agenda,
                Resize,
                DragAndDrop,
                // TimelineViews,
                // TimelineMonth,
                // TimelineYear,
              ]}
            />
          </ScheduleComponent>
          <div className="mt-3 grid w-full grid-cols-2 gap-3">
            <Card title="Schedule" addOption={null} />
            <Card title="Patients" addOption="Add Referral/Patient" />
            <Card title="Invoices" addOption={null} />
            <Card title="Associates" addOption="Add Associates" />
          </div>
        </div>
        <div className="lg:col-span-1">
          <Infoleft />
        </div>
      </div>
    </div>
  );
};

export default Calendar;

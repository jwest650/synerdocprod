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
import { useState } from 'react';

const ScheduleComp = ({ setEventsData, eventsData }) => {
  const [events, setEvents] = useState(null);

  const handleSave = (args) => {
    setTimeout(() => {
      const newEvents = events?.getEvents();
      setEventsData && setEventsData(newEvents);
    }, 100);
  };
  return (
    <ScheduleComponent
      cssClass="schedule"
      height="453px"
      ref={(schedule) => setEvents(schedule)}
      selectedDate={new Date('2022-11-02')} // month is in the middle and it actually starts from 0
      currentView="Month"
      activeCellsData={(e) => console.log(e)}
      actionComplete={handleSave}
      eventSettings={{ dataSource: eventsData }}
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
  );
};

export default ScheduleComp;
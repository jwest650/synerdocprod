import {
  Day,
  Week,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
<<<<<<< HEAD
=======
  ResourcesDirective,
  ResourceDirective,
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
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
<<<<<<< HEAD
=======

  const handleRendered = (args) => {
    args.element.style.backgroundColor = args?.data?.CategoryColor
      ? args?.data?.CategoryColor
      : '#000';
  };

>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
  return (
    <ScheduleComponent
      cssClass="schedule"
      height="453px"
      ref={(schedule) => setEvents(schedule)}
      selectedDate={new Date('2022-11-02')} // month is in the middle and it actually starts from 0
      currentView="Month"
      activeCellsData={(e) => console.log(e)}
      actionComplete={handleSave}
<<<<<<< HEAD
=======
      eventRendered={handleRendered}
>>>>>>> 87ab3bc16b20d778d9923f15c916dce8f0f498d7
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

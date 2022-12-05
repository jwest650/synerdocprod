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
import React, { useState, useContext } from 'react';
import { scheduleData } from '../../assets/scheduleData';
import GeneralContext from '../../context/GeneralContext';

const Calendar = () => {
  const { sectionClicked } = useContext(GeneralContext);
  const [scheduleObj, setScheduleObj] = useState({});

  const handleSave = (args) => {
    console.log('args---->', args);
  };
  console.log('args---->', scheduleObj);
  return (
    <ScheduleComponent
      cssClass="schedule"
      height="530px"
      // width="900px"
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
  );
};

export default Calendar;

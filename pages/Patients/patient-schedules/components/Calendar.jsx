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
  TimelineViews,
} from '@syncfusion/ej2-react-schedule';
import { useState, useContext } from 'react';
import scheduleData from '../../../../assets/scheduleData';
import GeneralContext from '../../../../context/GeneralContext';

const Calendar = () => {
  const { sectionClicked } = useContext(GeneralContext);
  const [scheduleObj, setScheduleObj] = useState({});

  const handleSave = (args) => {
    // console.log(args);
  };
  return (
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
        {['Day', 'Month', 'Timeline'].map((item) => (
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
          TimelineViews,
          // TimelineMonth,
          // TimelineYear,
        ]}
      />
    </ScheduleComponent>
  );
};

export default Calendar;

import { useEffect } from 'react';
import { periods } from '../homeData';

const usePeriods = (dayDuration, setFromDate, setToDate) => {
  useEffect(() => {
    if (dayDuration === '') return;
    if (dayDuration === 'Today') {
      setFromDate(periods.today.toLocaleDateString());
      setToDate(periods.today.toLocaleDateString());
      return;
    }
    if (dayDuration === 'Yesterday') {
      setFromDate(periods.yesterday.toLocaleDateString());
      setToDate(periods.yesterday.toLocaleDateString());
      return;
    }
    if (dayDuration === 'This Week') {
      setFromDate(periods.thisWeekStart.toLocaleDateString());
      setToDate(periods.thisWeekEnd.toLocaleDateString());
      return;
    }
    if (dayDuration === 'This Month') {
      setFromDate(periods.thisMonthStart.toLocaleDateString());
      setToDate(periods.thisMonthEnd.toLocaleDateString());
      return;
    }
    if (dayDuration === 'This Year') {
      setFromDate(periods.thisYearStart.toLocaleDateString());
      setToDate(periods.thisYearEnd.toLocaleDateString());
      return;
    }
    if (dayDuration === 'Year To Date') {
      setFromDate(periods.yearToDateStart.toLocaleDateString());
      setToDate(periods.yearToDateEnd.toLocaleDateString());
      return;
    }
    if (dayDuration === 'Last Week') {
      setFromDate(periods.lastWeekStart.toLocaleDateString());
      setToDate(periods.lastWeekEnd.toLocaleDateString());
      return;
    }
    if (dayDuration === 'Last Month') {
      setFromDate(periods.lastMonthStart.toLocaleDateString());
      setToDate(periods.lastMonthEnd.toLocaleDateString());
      return;
    }
  }, [dayDuration, setFromDate, setToDate]);

  return;
};

export default usePeriods;

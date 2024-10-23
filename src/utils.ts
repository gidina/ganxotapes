import { IGanxoTapa } from "./IGanxoTapa";

// HH or HH:MM
const getDateTime = (timeStr: string) => {
  const [hours, minutes] = timeStr.split(":");
  const hoursNum = parseInt(hours);
  const minutesNum = parseInt(minutes) | 0;

  const currentDate = new Date();
  currentDate.setHours(hoursNum);
  currentDate.setMinutes(minutesNum);
  currentDate.setSeconds(0);
  return currentDate;
};

// "HH-HH:MM" => [Date,Date]
const getTimeRange = (timeRange: string) => {
  const [startTime, endTime] = timeRange.split("-");
  return [getDateTime(startTime), getDateTime(endTime)];
};

const dayInMs = 1000 * 60 * 60 * 24;

const getDaysFromMs = (t: number) => {
  let cd = dayInMs,
    ch = 60 * 60 * 1000,
    d = Math.floor(t / cd),
    h = Math.floor((t - d * cd) / ch),
    m = Math.round((t - d * cd - h * ch) / 60000);

  if (m === 60) {
    h++;
    m = 0;
  }
  if (h === 24) {
    d++;
    h = 0;
  }

  return d;
};

// ["YYYY-MM-DD","YYYY-MM-DD"]
const getDatesFromPeriod = (period: string[]) => {
  const [startDateStr, endDateStr] = period;
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  const msInPeriod = Math.abs(startDate.getTime() - endDate.getTime());
  const daysInPeriod = getDaysFromMs(msInPeriod);

  const dates = [];
  for (let i = 0; i <= daysInPeriod; i++) {
    const daysInMillis = dayInMs * i;

    const nextDayDate = new Date();
    nextDayDate.setTime(startDate.getTime() + daysInMillis);

    dates.push(nextDayDate);
  }

  // return [startDate.toString(), endDate.toString()];
  return dates;
};

const getTimeTable = (
  schedule: string[][],
  datesOfPeriod: Date[]
): IGanxoTapa["timetable"] => {
  const timetable = datesOfPeriod.map((date) => {
    const indexDayOfWeek = date.getDay();
    const dailyPeriods = schedule[indexDayOfWeek];
    const dailyPeriodDates = dailyPeriods.map((period) => {
      const [startDate, endDate] = getTimeRange(period);
      const startPeriodDate = new Date(date);
      startPeriodDate.setHours(startDate.getHours());
      startPeriodDate.setMinutes(startDate.getMinutes());
      startPeriodDate.setSeconds(0);

      const endPeriodDate = new Date(date);
      endPeriodDate.setHours(endDate.getHours());
      endPeriodDate.setMinutes(endDate.getMinutes());
      endPeriodDate.setSeconds(0);

      return [startPeriodDate, endPeriodDate];
    });
    return dailyPeriodDates;
  });

  return timetable.flat();
};

export { getTimeRange, getDatesFromPeriod, getTimeTable };

import { IGanxoTapa, ISortBy } from "./IGanxoTapa";

const sortByTime = (closerTimeA: Date | null, closerTimeB: Date | null) => {
  if (!closerTimeA && !closerTimeB) {
    return 0;
  }

  if (!closerTimeA) {
    return 1;
  }

  if (!closerTimeB) {
    return -1;
  }

  if (closerTimeA?.getTime() < closerTimeB?.getTime()) {
    return -1;
  }

  if (closerTimeA?.getTime() > closerTimeB?.getTime()) {
    return 1;
  }

  return 0;
};
const getCloserOpeningHour = (tapa: IGanxoTapa, currentDate: Date) => {
  const periodeNoPosteriorMesProper = tapa.timetable.find((period) => {
    const [start, end] = period;
    if (end < currentDate && start < currentDate) {
      // ha estat obert pero ja ha tancat
      return false;
    }

    return true;
  });

  if (!periodeNoPosteriorMesProper) {
    // has been opened but now is closed
    return null;
  }

  const [periodeNoPosteriorMesProperStart, _] = periodeNoPosteriorMesProper;
  return periodeNoPosteriorMesProperStart;
};
const sortByCloserOpeningTime = (
  tapaA: IGanxoTapa,
  tapaB: IGanxoTapa,
  currentDate: Date
) => {
  const closerOpeningHourA = getCloserOpeningHour(tapaA, currentDate);
  const closerOpeningHourB = getCloserOpeningHour(tapaB, currentDate);
  return sortByTime(closerOpeningHourA, closerOpeningHourB);
};
const getCloserClosingHour = (tapa: IGanxoTapa, currentDate: Date) => {
  const periodeObertMesProper = tapa.timetable.find((period) => {
    const [start, end] = period;
    // if (end < currentDate) { return false; } // periode anterior ja tancat

    if (start < currentDate && currentDate < end) {
      return true;
    } // periode actual

    // if (start > currentDate) { return false; } // periode no obert encara

    return false;
  });

  if (!periodeObertMesProper) {
    // no esta obert
    return null;
  }

  const [_, periodeObertMesProperEnd] = periodeObertMesProper;
  return periodeObertMesProperEnd;
};
const sortByCloserClosingTime = (
  tapaA: IGanxoTapa,
  tapaB: IGanxoTapa,
  currentDate: Date
) => {
  const closerClosingHourA = getCloserClosingHour(tapaA, currentDate);
  const closerClosingHourB = getCloserClosingHour(tapaB, currentDate);
  return sortByTime(closerClosingHourA, closerClosingHourB);
};
const compareSortCriteria = (
  infoA: IGanxoTapa,
  infoB: IGanxoTapa,
  sortBy: ISortBy,
  selectedDate?: string
) => {
  const currentDate = selectedDate ? new Date(selectedDate) : new Date();

  if (sortBy === "schedule-close") {
    return sortByCloserClosingTime(infoA, infoB, currentDate);
  }

  if (sortBy === "schedule-open") {
    return sortByCloserOpeningTime(infoA, infoB, currentDate);
  }

  return 0;
};

const isOpenedNow = (info: IGanxoTapa) => {
  const currentDate = new Date();
  return isOpenedInDate(currentDate, info);
};
const isOpenedInDate = (date: string | Date, info: IGanxoTapa) => {
  const selectedDate = new Date(date);
  const currentTimeInMs = selectedDate.getTime();
  const timeTable = info.timetable;

  return timeTable.some((timeRange) => {
    const [startTime, endTime] = timeRange;
    const startTimeInMs = startTime.getTime();
    const endTimeInMs = endTime.getTime();

    return currentTimeInMs < endTimeInMs && currentTimeInMs >= startTimeInMs;
  });
};

const isSuitableForCeliac = (info: IGanxoTapa) => {
  if (info.allergies?.includes("celiac")) {
    return true;
  }

  return false;
};
const isSuitableForVegetarian = (info: IGanxoTapa) => {
  if (info.allergies?.includes("vegetarian")) {
    return true;
  }

  return false;
};
const isSuitableForVegan = (info: IGanxoTapa) => {
  if (info.allergies?.includes("vegan")) {
    return true;
  }

  return false;
};

const isTapa = (info: IGanxoTapa) => info.type === "tapa";
const isMenu = (info: IGanxoTapa) => info.type === "menu";

const isFilteredByText = (text: string, filterText: string) =>
  text.toLowerCase().includes(filterText.toLowerCase());
const isFilteredByActive = (active: boolean, filterActive: boolean) =>
  (filterActive && active) || !filterActive;

export {
  compareSortCriteria,
  isOpenedNow,
  isOpenedInDate,
  isSuitableForCeliac,
  isSuitableForVegetarian,
  isSuitableForVegan,
  isTapa,
  isMenu,
  isFilteredByText,
  isFilteredByActive,
};

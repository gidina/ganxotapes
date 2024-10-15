import { useState } from "react";
import ganxotapesTardor23, { IGanxoTapa } from "./api";
import Map from "./Map";
import { getDatesFromPeriod, getTimeRange } from "./utils";
import GanxoTapesGrid from "./GanxoTapesGrid";

const datesOfPeriod = getDatesFromPeriod(ganxotapesTardor23.duration);
const getTimeTable = (
  schedule: IGanxoTapa["schedule"]
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

const isOpenedNow = (info: IGanxoTapa) => {
  const currentDate = new Date();
  const timeTable = getTimeTable(info.schedule) || [];

  return timeTable.some((timeRange) => {
    const currentTimeInMs = currentDate.getTime();
    const [startTime, endTime] = timeRange;
    const startTimeInMs = startTime.getTime();
    const endTimeInMs = endTime.getTime();

    return currentTimeInMs < endTimeInMs && currentTimeInMs >= startTimeInMs;
  });
};

const isOpenedInDate = (date: string, info: IGanxoTapa) => {
  const selectedDate = new Date(date);
  const timeTable = getTimeTable(info.schedule) || [];

  return timeTable.some((timeRange) => {
    const currentTimeInMs = selectedDate.getTime();
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

export default function GanxoTapes() {
  const [filterByName, setFilterByName] = useState("");
  const [filterOpenedNow, setFilterOpenedNow] = useState(false);
  const [filterCeliac, setFilterCeliac] = useState(false);
  const [filterVegetarian, setFilterVegetarian] = useState(false);
  const [filterVegan, setFilterVegan] = useState(false);
  const [showTapes, setShowTapes] = useState(true);
  const [showMenus, setShowMenus] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const [showMap, setShowMap] = useState(false);

  const ganxotapes = ganxotapesTardor23.menu.filter(
    (ganxotapa) =>
      isFilteredByText(ganxotapa.restaurant, filterByName) &&
      isFilteredByActive(isOpenedNow(ganxotapa), filterOpenedNow) &&
      isFilteredByActive(isSuitableForCeliac(ganxotapa), filterCeliac) &&
      isFilteredByActive(
        isSuitableForVegetarian(ganxotapa),
        filterVegetarian
      ) &&
      isFilteredByActive(isSuitableForVegan(ganxotapa), filterVegan) &&
      ((showTapes && isTapa(ganxotapa)) || (showMenus && isMenu(ganxotapa))) &&
      isFilteredByActive(
        isOpenedInDate(selectedDate, ganxotapa),
        !!selectedDate
      )
  );
  return (
    <div className="w-full">
      <div className="grid gap-8">
        <div className="grid gap-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={showMap}
              onChange={() => setShowMap(!showMap)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Mostra mapa
            </span>
          </label>
          {showMap ? <Map points={ganxotapesTardor23.menu} /> : null}
        </div>
        <div className="flex items-center gap-2">
          <label
            htmlFor="selected-date"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Oberts
          </label>
          <input
            type="datetime-local"
            id="selected-date"
            max={ganxotapesTardor23.duration[1]}
            min={ganxotapesTardor23.duration[0]}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center">
            <input
              id="checked-checkbox"
              type="checkbox"
              checked={showTapes}
              onChange={() => setShowTapes(!showTapes)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="checked-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Mostra tapes
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="checked-checkbox"
              type="checkbox"
              checked={showMenus}
              onChange={() => setShowMenus(!showMenus)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="checked-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Mostra menús
            </label>
          </div>
        </div>
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filterOpenedNow}
              onChange={() => setFilterOpenedNow(!filterOpenedNow)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Només Oberts ara
            </span>
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filterCeliac}
              onChange={() => setFilterCeliac(!filterCeliac)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Apte per a celíacs
            </span>
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filterVegetarian}
              onChange={() => setFilterVegetarian(!filterVegetarian)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Apte per a vegetarians
            </span>
          </label>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={filterVegan}
              onChange={() => setFilterVegan(!filterVegan)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Apte per a vegans
            </span>
          </label>
        </div>
        <div>
          <input
            type="search"
            value={filterByName}
            onChange={(e) => setFilterByName(e.target.value)}
            placeholder="Buscar restaurant"
            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Mostrant {ganxotapes.length} resultats
          </p>
        </div>
        <GanxoTapesGrid ganxotapes={ganxotapes} />
      </div>
    </div>
  );
}

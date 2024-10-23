import { useState } from "react";
import { ISortBy } from "./IGanxoTapa";
import ganxotapesInfo from "./api";
import {
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
} from "./utils-ganxotapes";
import Map from "./Map";
import GanxoTapesGrid from "./GanxoTapesGrid";

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
  const [sortBy, setSortBy] = useState<ISortBy>("restaurant");

  const ganxotapesToSort = ganxotapesInfo.menu.filter(
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

  const ganxotapes = ganxotapesToSort.sort((infoA, infoB) =>
    compareSortCriteria(infoA, infoB, sortBy, selectedDate)
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
          {showMap ? <Map points={ganxotapesInfo.menu} /> : null}
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
            max={ganxotapesInfo.duration[1]}
            min={ganxotapesInfo.duration[0]}
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              setFilterOpenedNow(false);
            }}
            className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              onChange={() => {
                setFilterOpenedNow(!filterOpenedNow);
                setSelectedDate("");
              }}
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
        <div className="flex items-center gap-2">
          <label
            htmlFor="sorting-by"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Ordena per
          </label>
          <select
            id="sorting-by"
            className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              const value = e.target.value as ISortBy;
              setSortBy(value);
            }}
            value={sortBy}
          >
            <option value="" disabled>
              Selecciona un criteri
            </option>
            <option value="restaurant">Nom Restaurant</option>
            <option value="schedule-close">Tanca pròximament</option>
            <option value="schedule-open">Horari d'obertura</option>
          </select>
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

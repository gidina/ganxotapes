import { ganxotapesTardor24 } from "./assets/ganxotapesTardor24";
import { IGanxoTapes, IGanxoTapesAPI } from "./IGanxoTapa";
import { getDatesFromPeriod, getTimeTable } from "./utils";

const getEnumeratedGanxotapes = (ganxotapesData: IGanxoTapesAPI): IGanxoTapes => {
  const datesOfPeriod = getDatesFromPeriod(ganxotapesData.duration);
  const ganxotapesMenuWithTitle = ganxotapesData.menu.map(
    (ganxotapa, index) => ({
      ...ganxotapa,
      restaurant: `${index + 1}. ${ganxotapa.restaurant}`,
      timetable: getTimeTable(ganxotapa.schedule, datesOfPeriod) || [],
    }),
  );

  return { ...ganxotapesData, menu: ganxotapesMenuWithTitle };
};

const ganxotapesData = ganxotapesTardor24 as IGanxoTapesAPI;
export default getEnumeratedGanxotapes(ganxotapesData);

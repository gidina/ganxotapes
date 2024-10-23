import { IGanxoTapa } from "./IGanxoTapa";
// import useUser from "./userUser";

const GanxoTapa = ({ info }: { info: IGanxoTapa }) => {
  return (
    <div className="grid auto-rows-fr">
      <div className="">{info.restaurant}</div>
      <div className="">
        {info.type === "tapa" && (
          <div className="text-gray-600">{info.title}</div>
        )}
        {info.type === "menu" && (
          <div className="whitespace-pre-line">{info.menu}</div>
        )}
      </div>
      <img
        src={`https://www.visitguixols.com/images/${info.img}.jpg`}
        alt="Ganxotapa imatge"
        width={200}
        height={200}
        className=""
      />
      <div className="">{info.schedule2}</div>
    </div>
  );
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="font-bold">{info.restaurant}</div>
      {info.type === "tapa" && (
        <div className="text-gray-600">{info.title}</div>
      )}
      {info.type === "menu" && (
        <div className="whitespace-pre-line">{info.menu}</div>
      )}
      <img
        src={`https://www.visitguixols.com/images/${info.img}.jpg`}
        alt="Ganxotapa imatge"
        width={200}
        height={200}
        className="w-full row-span-2 md:row-auto"
      />
      <div>{info.schedule2}</div>
    </div>
  );

  // const { getVisitedRestaurant, setVisitedRestaurant } = useUser();
  return (
    <div className="grid auto-rows-auto gap-2">
      <div>
        {info.restaurant}
        {/* <div className="flex items-center">
          <input
            id="checked-checkbox"
            type="checkbox"
            checked={getVisitedRestaurant(info.id)}
            onChange={() => setVisitedRestaurant(info.id)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="checked-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Ja visitat
          </label>
        </div> */}
      </div>
      <div>{info.address}</div>
      <div>{info.telephone}</div>
      <div>{info.website}</div>
      <div>{info.title}</div>
      <img
        src={`https://visitguixols.com/images/${info.img}.jpg`}
        alt="Ganxotapa imatge"
        width={200}
        height={200}
      />
      <div>{info.price}</div>
      <div>{info.allergies2}</div>
      {info.type === "menu" && (
        <div className="whitespace-pre-line">{info.menu}</div>
      )}
      <div className="whitespace-pre-line">{info.schedule2}</div>
    </div>
  );
};

export default GanxoTapa;

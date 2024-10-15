import { IGanxoTapa } from "./api";

const GanxoTapesGridItem = ({ info }: { info: IGanxoTapa }) => {
  return (
    <li className="relative">
      <img
        alt=""
        src={`https://www.visitguixols.com/images/${info.img}.jpg`}
        className="rounded-md object-cover h-48 w-full"
      />
      <div className="absolute inset-x-0 top-0 p-4 rounded-md text-white font-medium bg-gradient-to-b from-gray-900">
        {info.restaurant}
      </div>
      <span className="flex flex-col gap-2">
        <h3 className="mt-6 text-sm font-medium text-gray-900 flex-1">
          {info.type === "tapa" && <div>{info.title}</div>}
          {info.type === "menu" && (
            <div className="whitespace-pre-line">{info.menu}</div>
          )}
        </h3>
        <dd className="text-sm text-gray-600">{info.schedule2}</dd>
      </span>
    </li>
  );
};

export default GanxoTapesGridItem;

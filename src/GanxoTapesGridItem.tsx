import { IGanxoTapa } from "./api";

const GanxoTapesGridItem = ({ info }: { info: IGanxoTapa }) => {
  return (
    <li className="col-span-1 flex flex-col acr acv aem ami text-center bcn">
      <div className="flex flex-1 flex-col p-8">
        <img
          src={`https://www.visitguixols.com/images/${info.img}.jpg`}
          alt="Ganxotapa imatge"
          className="rounded-md"
        />
        <h3 className="mt-6 text-sm font-medium text-gray-900">
          {info.type === "tapa" && <div>{info.title}</div>}
          {info.type === "menu" && (
            <div className="whitespace-pre-line">{info.menu}</div>
          )}
        </h3>
        <dl className="mt-1 flex grow flex-col justify-between">
          <dt className="sr-only">Horaris</dt>
          <dd className="text-sm text-gray-400">{info.schedule2}</dd>
          <dt className="sr-only">Restaurant</dt>
          <dd className="mt-3">
            <span className="inline-flex items-center rounded-full akb asa asm axf font-medium azd bda bde bdz">
              {info.restaurant}
            </span>
          </dd>
        </dl>
      </div>
    </li>
  );
  return (
    <li className="col-span-1 flex flex-col acr acv aem ami text-center bcn">
      <div className="flex flex-1 flex-col p-8">
        <img
          src={`https://www.visitguixols.com/images/${info.img}.jpg`}
          alt="Ganxotapa imatge"
          className="mx-auto h-32 w-32 shrink-0 rounded-full object-cover"
        />
        <h3 className="mt-6 text-sm font-medium text-gray-900">
          {info.type === "tapa" && <div>{info.title}</div>}
          {info.type === "menu" && (
            <div className="whitespace-pre-line">{info.menu}</div>
          )}
        </h3>
        <dl className="mt-1 flex grow flex-col justify-between">
          <dt className="sr-only">Horaris</dt>
          <dd className="text-sm text-gray-400">{info.schedule2}</dd>
          <dt className="sr-only">Restaurant</dt>
          <dd className="mt-3">
            <span className="inline-flex items-center rounded-full akb asa asm axf font-medium azd bda bde bdz">
              {info.restaurant}
            </span>
          </dd>
        </dl>
      </div>
    </li>
  );
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
};

export default GanxoTapesGridItem;

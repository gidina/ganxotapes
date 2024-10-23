import { IGanxoTapa } from "./IGanxoTapa";
import MapIcon from "./assets/MapIcon";
import PhoneIcon from "./assets/PhoneIcon";

const GanxoTapesGridItem = ({ info }: { info: IGanxoTapa }) => {
  return (
    <li className="relative">
      <img
        alt=""
        src={`https://www.visitguixols.com/images/${info.img}.jpg`}
        className="rounded-md object-cover h-48 w-full"
      />
      <div className="absolute inset-x-0 top-0 p-4 rounded-md text-white font-medium bg-gradient-to-b from-gray-900">
        <div className="flex justify-between">
          <p>{info.restaurant}</p>
          {/* <div className="flex gap-2 fill-white">
            <MapIcon />
            <PhoneIcon />
          </div> */}
        </div>
      </div>
      {/* <div className="absolute top-0 right-0">
        <div className="flex flex-end gap-2 fill-white z-1">
          <MapIcon />
          <PhoneIcon />
        </div>
      </div> */}
      {/* <div>
        <div className="mt-8">
          <span className="flex gap-2">
            <img
              src="/assets/home/map.svg"
              className="h-6 w-6"
              alt="Map icon"
            />
            <h5>1 Long Ln, London, SE1 4PG United Kingdom</h5>
          </span>
          <a
            href="https://goo.gl/maps/QNLRk8EawtxhVaky9"
            className="link-in-paragraph ml-8"
            target="_blank"
            aria-label="Get Directions to the Future Workshops London office"
          >
            Get Directions
            <img src="/assets/work/link-arrow.svg" alt="Arrow right" />
          </a>
        </div>
        <span className="flex gap-2">
          <img
            src="/assets/home/telephone.svg"
            className="h-6 w-6"
            alt="Telephone icon"
          />
          <a
            href="tel: +44 20 3322 1724"
            className="text-black hover:underline underline-offset-4 block w-fit"
          >
            +44 20 3322 1724
          </a>
        </span>
      </div> */}
      <span className="flex flex-col gap-2">
        <h3 className="mt-6 text-sm font-medium text-gray-900 dark:text-gray-300 flex-1">
          {info.type === "tapa" && <div>{info.title}</div>}
          {info.type === "menu" && (
            <div className="whitespace-pre-line">{info.menu}</div>
          )}
        </h3>
        <dd className="text-sm text-gray-600 dark:text-gray-50">
          {info.schedule2}
        </dd>
      </span>
    </li>
  );
};

export default GanxoTapesGridItem;

import { IGanxoTapa } from "./api";
import GanxoTapesGridItem from "./GanxoTapesGridItem";

const GanxoTapesGrid = ({ ganxotapes }: { ganxotapes: IGanxoTapa[] }) => (
  <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {ganxotapes.map((ganxotapa) => (
        <GanxoTapesGridItem key={ganxotapa.id} info={ganxotapa} />
      ))}
    </ul>
  </div>
);

// export default GanxoTapesGrid;

// absolute pt-14 bg-gradient-to-t from-purple-500
const Item = ({ info }: { info: IGanxoTapa }) => {
  //   return (
  //     <li className="relative">
  //       <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
  //         <img
  //           src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
  //           alt="University of Southern California"
  //           className="absolute inset-0 h-full w-full object-cover"
  //         />
  //         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
  //         <h3 className="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
  //         <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
  //           City of love
  //         </div>
  //       </article>
  //     </li>
  //   );
  return (
    <li className="relative">
      <img
        alt=""
        src={`https://www.visitguixols.com/images/${info.img}.jpg`}
        //   className="u arb btn"
        className="rounded-md object-cover h-48 w-full"
      />
      {/* <p className="font-medium">{info.restaurant}</p> */}
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
const ItemGrid = ({ ganxotapes }: { ganxotapes: IGanxoTapa[] }) => (
  <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
    <ul
      role="list"
      className="grid sm:grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-8"
    >
      {ganxotapes.map((ganxotapa) => (
        <Item key={ganxotapa.id} info={ganxotapa} />
      ))}
    </ul>
  </div>
);

export default ItemGrid;

import { IGanxoTapa } from "./IGanxoTapa";
import GanxoTapesGridItem from "./GanxoTapesGridItem";

const GanxoTapesGrid = ({ ganxotapes }: { ganxotapes: IGanxoTapa[] }) => (
  <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
    <ul
      role="list"
      className="grid sm:grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-8"
    >
      {ganxotapes.map((ganxotapa) => (
        <GanxoTapesGridItem key={ganxotapa.id} info={ganxotapa} />
      ))}
    </ul>
  </div>
);

export default GanxoTapesGrid;

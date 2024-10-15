const employees = [
  {
    name: "Jane Cooper",
    title: "Paradigm Representative",
    role: "Admin",
    imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Cody Fisher",
    title: "Lead Security Associate",
    role: "Admin",
    imgUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
  },
  {
    name: "Esther Howard",
    title: "Assurance Administrator",
    role: "Admin",
    imgUrl: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
  },
  {
    name: "Jenny Wilson",
    title: "Chief Accountability Analyst",
    role: "Admin",
    imgUrl: "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235",
  },
  {
    name: "Kristin Watson",
    title: "Investor Data Orchestrator",
    role: "Admin",
    imgUrl: "https://images.unsplash.com/photo-1532417344469-368f9ae6d187",
  },
  {
    name: "Cameron Williamson",
    title: "Product Infrastructure Executive",
    role: "Admin",
    imgUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857",
  },
  {
    name: "Courtney Henry",
    title: "Investor Factors Associate",
    role: "Admin",
    imgUrl: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56",
  },
  {
    name: "Theresa Webb",
    title: "Global Division Officer",
    role: "Admin",
    imgUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
  },
];

type IGridItem = {
  name: string;
  title: string;
  role: string;
  imgUrl: string;
};

const GridItem = ({ item }: { item: IGridItem }) => (
  <li className="col-span-1 flex flex-col acr acv aem ami text-center bcn">
    <div className="flex flex-1 flex-col p-8">
      <img
        alt=""
        src={`${item.imgUrl}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60`}
        className="mx-auto h-32 w-32 shrink-0 rounded-full"
      />
      <h3 className="mt-6 text-sm font-medium text-gray-900">{item.name}</h3>
      <dl className="mt-1 flex grow flex-col justify-between">
        <dt className="sr-only">Title</dt>
        <dd className="text-sm text-gray-400">{item.title}</dd>
        <dt className="sr-only">Role</dt>
        <dd className="mt-3">
          <span className="inline-flex items-center rounded-full akb asa asm axf font-medium azd bda bde bdz">
            {item.role}
          </span>
        </dd>
      </dl>
    </div>
    {/* <div>
      <div className="jj flex acq acv">
        <div className="flex rq flex-1">
          <a
            href="mailto:janecooper@example.com"
            className="ab is inline-flex rq flex-1 items-center zu aau afi aft ahu asz text-sm axj text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="ok sr ays"
            >
              <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z"></path>
              <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z"></path>
            </svg>
            Email
          </a>
        </div>
        <div className="ie flex rq flex-1">
          <a
            href="tel:+1-202-555-0170"
            className="ab inline-flex rq flex-1 items-center zu aau afl aft ahu asz text-sm axj text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="ok sr ays"
            >
              <path
                fill-rule="evenodd"
                d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Call
          </a>
        </div>
      </div>
    </div> */}
  </li>
);

const GridExample = () => (
  <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {employees.map((employee, index) => (
        <GridItem key={index} item={employee} />
      ))}
    </ul>
  </div>
);
export default GridExample;

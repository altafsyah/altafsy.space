/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";

export type WorkItemProps = {
  item: WorkItem;
  id: number;
};

export type WorkItem = {
  id: number;
  title: string;
  subtitle: string;
  year: string;
  image: string;
  description: {
    overview: string;
    links: {
      label: string;
      url: string;
    }[];
    background: string;
    features: string[];
  };
};

export default function WorkItem(props: WorkItemProps) {
  // const { attributes, listeners, setNodeRef, transform, transition } =
  //   useSortable({ id: props.id });
  // const style = {
  //   transform: CSS.Transform.toString(transform),
  //   transition,
  // };
  const { item } = props;

  return (
    <div
      className="bg-accent/50 backdrop-blur border border-accent w-full aspect-square rounded drop-shadow hover:drop-shadow-lg transition-all cursor-pointer ease-out group hover:scale-105"
      // ref={setNodeRef}
      // style={style}
      // {...attributes}
      // {...listeners}
    >
      <div className="w-full h-2/3 bg-primary relative overflow-hidden">
        <img src={item.image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="px-5 py-2">
        <div className="flex justify-between items-center gap-2 mt-3">
          <h1 className="text-xl font-semibold">{item.title}</h1>
          {item.description.links.length > 0 && (
            <a
              href={item.description.links[0].url}
              target="_blank"
              rel="noreferrer">
              <img
                src="/link.svg"
                className="w-5 aspect-auto invert"
                alt="Link"
              />
            </a>
          )}
        </div>
        <h2 className="font-medium">{item.subtitle}</h2>
        <div className="px-2 py-1 bg-primary w-fit drop-shadow-sm rounded-full mt-1">
          <p className="text-base font-semibold">{item.year}</p>
        </div>
      </div>
    </div>
  );
}

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export type WorkItemProps = {
  item: WorkItem;
  id: number;
};

export type WorkItem = {
  id: number;
  title: string;
  subtitle: string;
  year: string;
  description: {
    overview: string;
    links: string[];
    background: string;
    features: string[];
  };
};

export default function WorkItem(props: WorkItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const { item } = props;

  return (
    <div
      className="bg-secondary p-5 w-full aspect-square rounded drop-shadow hover:drop-shadow-lg transition-all cursor-pointer ease-out"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="w-full h-2/3 bg-primary"></div>
      <div>
        <h1 className="text-xl font-semibold mt-3">{item.title}</h1>
        <h2 className="font-medium">{item.subtitle}</h2>
        <div className="px-2 py-1 bg-primary w-fit drop-shadow-sm rounded-full mt-1">
          <p className="text-base font-semibold">{item.year}</p>
        </div>
      </div>
    </div>
  );
}

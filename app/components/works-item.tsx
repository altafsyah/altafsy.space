/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import clsx from "clsx";

export type WorkItemProps = {
  item: WorkItem;
  toggle: (item: WorkItem) => void;
  id: number;
  index: number;
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
    };
    background: string;
    features: string[];
  };
};

export default function WorkItem(props: WorkItemProps) {

  const { item, toggle, index } = props;

  return (
    <div
      className={clsx(
        "w-full h-full bg-accent/40 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-95 duration-200",
        index % 2 === 0 ? "hover:rotate-2" : "hover:-rotate-2"
      )}
      onClick={() => toggle(item)}
    >
      <div className="w-full h-[150px] bg-primary relative overflow-hidden">
        <img src={item.image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="px-5 py-2">
          <h1 className="text-xl font-semibold">{item.title}</h1>
        <h2 className="font-medium">{item.subtitle}</h2>
        <div className="px-2 py-1 bg-primary w-fit drop-shadow-sm rounded-full mt-1">
          <p className="text-base font-semibold">{item.year}</p>
        </div>
      </div>
    </div>
  );
}

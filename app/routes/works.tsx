import WorkItem, { WorkItem as TWorkItem } from "~/components/works-item";
import data from "~/data.json";
import type { MetaFunction } from "@remix-run/node";
import { defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { AnimatePresence } from "framer-motion";
import { Suspense, useState } from "react";
import SelectedWork from "~/components/selected-work";
import WorksLoader from "~/components/works-loader";

export const meta: MetaFunction = () => [
  {
    title: "Works || altafsy",
    description: "Altaf Syahrastani - Public Space",
  },
];

export const loader = async () => {
  const sortedWorks = data.works.sort((a: TWorkItem, b: TWorkItem) => {
    return parseInt(b.year) - parseInt(a.year);
  });
  return defer({
    sortedWorks: sortedWorks,
  });
};

export default function Works() {
  const { sortedWorks } = useLoaderData<typeof loader>();
  const [selected, setSelected] = useState<TWorkItem | undefined>();

  function toggleSelected(item: TWorkItem | undefined) {
    setSelected(item);
  }

  return (
    <>
      <section className="px-5" id="projects">
        <h1 className="text-3xl font-semibold">Featured Projects</h1>
        <h2 className="text-gray-400 text-xl font-medium mt-1">
          These are projects that I work for my client.
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <Suspense fallback={<WorksLoader />}>
            <Await resolve={sortedWorks}>
              {sortedWorks.map((item: TWorkItem, index: number) => (
                <WorkItem
                  index={index}
                  id={item.id}
                  key={item.id}
                  toggle={toggleSelected}
                  item={item}
                />
              ))}
            </Await>
          </Suspense>
        </section>
      </section>
      <AnimatePresence>
        {selected && <SelectedWork item={selected} toggle={toggleSelected} />}
      </AnimatePresence>
    </>
  );
}

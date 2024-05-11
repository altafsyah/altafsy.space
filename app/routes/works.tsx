// import {
//   DndContext,
//   DragEndEvent,
//   KeyboardSensor,
//   PointerSensor,
//   closestCenter,
//   useSensor,
//   useSensors,
// } from "@dnd-kit/core";
// import {
//   SortableContext,
//   arrayMove,
//   sortableKeyboardCoordinates,
// } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import WorkItem, { WorkItem as TWorkItem } from "~/components/works-item";
import data from "~/data.json?url";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  {
    title: "Works || altafsy",
    description: "Altaf Syahrastani - Public Space",
  },
];

export default function Works() {
  const [items, setItems] = useState<TWorkItem[]>([]);

  useEffect(() => {
    async function fetchWorks() {
      const res = await fetch(data);
      if (res.status === 200) {
        const result = await res.json();
        const sortedWorks = result.works.sort((a: TWorkItem, b: TWorkItem) => {
          return parseInt(b.year) - parseInt(a.year);
        });
        setItems(sortedWorks);
      }
    }
    fetchWorks();
  }, []);

  // const sensors = useSensors(
  //   useSensor(PointerSensor),
  //   useSensor(KeyboardSensor, {
  //     coordinateGetter: sortableKeyboardCoordinates,
  //   })
  // );

  // function handleDragEnd(event: DragEndEvent) {
  //   const { active, over } = event;
  //   if (active.id !== over?.id) {
  //     setItems((items) => {
  //       const oldIndex = items.findIndex((item) => item.id === active.id);
  //       const newIndex = items.findIndex((item) => item.id === over?.id);
  //       return arrayMove(items, oldIndex, newIndex);
  //     });
  //   }
  // }

  return (
    <section className="px-5" id="projects">
      <h1 className="text-3xl font-semibold">Featured Projects</h1>
      <h2 className="text-gray-400 text-xl font-medium mt-1">
        These are projects that I work for my client.
      </h2>
      {/* <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}>
        <SortableContext items={items}> */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {items.map((item) => (
          <WorkItem id={item.id} key={item.id} item={item} />
        ))}
      </section>
      {/* </SortableContext>
      </DndContext> */}
      {/* <div className="p-5 bg-accent/50 backdrop-blur border border-accent mt-5 rounded drop-shadow">
        <p className="text-xl font-medium">
          💡 Small update on this page (try to drag the project card)
        </p>
      </div> */}
    </section>
  );
}

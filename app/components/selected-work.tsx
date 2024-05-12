import { WorkItem } from "./works-item";
import { motion } from "framer-motion";

export default function SelectedWork({ item, toggle }: { item: WorkItem, toggle: (item: WorkItem | undefined) => void}) {
  return (
  <motion.section 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
      onClick={() => toggle(undefined)}
      className="fixed top-0 left-0 bg-black/10 flex justify-center items-center w-screen h-screen">
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.5 }}
      className="overflow-hidden bg-white rounded-xl max-w-xl w-full h-fit"
      >
        <div className="w-full h-[250px] bg-gray-300 relative">
          <img src={item.image} className="w-full h-full object-cover" alt="Image Project" />
        </div>
        <div className="w-full px-5 py-2 h-[400px] overflow-scroll text-accent">
          <div className="flex justify-between gap-5">
            <div>
              <h3 className="text-xl font-semibold">{item.title ?? ''}</h3>
              <p className="text-gray-500">{item.subtitle ?? ''}</p>
            </div>
            <div className="flex items-center gap-3">
                          <h4 className="px-3 py-1 bg-accent/20 text-accent font-semibold rounded-full h-fit">{item.year ?? ''}</h4>

              {item.description.links.url && (
                <a href={item.description.links.url} target="_blank" rel="noreferrer">
                  <img src="/links.svg" className="w-5 invert" alt="Link" />
                </a>
              )
              }
            </div>
          </div>
          <p className="mt-1 text-gray-600 font-medium">{item.description.overview}</p>
          <h4 className="mt-2 text-lg font-semibold">Background</h4>
          <p>{item.description.background ?? 'Background'}</p>
          <h4 className="mt-2 text-lg font-medium">Features</h4>
          <ul className="list-disc ml-5">
            {item && item.description.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.section>
  )
  // return (
  //   <motion.section
  //     key={item.id}
  //     initial={{ opacity: 0 }}
  //     animate={{ opacity: 1 }}
  //     exit={{ opacity: 0 }}
  //     onClick={() => toggle(undefined)}
  //     className="z-20 w-screen h-screen fixed top-0 left-0 bg-accent/10 backdrop-blur-sm p-5 flex justify-center items-center"
  //   >
  //     <motion.div
  //       initial={{ scale: 0.5 }}
  //       animate={{ scale: 1 }}
  //       exit={{ scale: 0 }}
  //       onClick={(e) => e.stopPropagation()}
  //       className="">
  //       <div className="w-full h-[250px] bg-gray-300"></div>
  //       <div className="my-3 px-5 text-primary">
  //         <div className="flex justify-between gap-5">
  //           <div>
  //             <h3 className="text-xl font-semibold">Project Title</h3>
  //             <p>Ini subtitle dari project</p>
  //           </div>
  //           <h4>2024</h4>
  //         </div>
  //         <p className="mt-1">Ini overview dari project project</p>
  //         <h4 className="mt-2 text-lg font-medium">Background</h4>
  //         <p>Ini background project</p>
  //         <h4 className="mt-2 text-lg font-medium">Features</h4>
  //         <ul>
  //           <li>Feature Satu</li>
  //           <li>Feature Satu</li>
  //           <li>Feature Satu</li>
  //         </ul>
  //       </div>
  //     </motion.div>
  //   </motion.section>
  // );
}

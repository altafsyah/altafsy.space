/* eslint-disable react/no-unescaped-entities */
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import stylesheet from "~/style.css?url";
import clsx from "clsx";

export const meta: MetaFunction = () => {
  return [
    { title: "altafsy || space" },
    { name: "description", content: "Altaf Syahrastani - Public Space" },
  ];
};

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: stylesheet,
  },
];

export default function Index() {
  return (
    <>
      <section id="greetings" className="px-5 text-center">
        <h1 className="text-3xl font-semibold">Hi, I'm Altaf Syahrastani</h1>
        <p className="text-lg text-gray-400 font-medium">
          I loved to craft and cares about user and developer experience.
        </p>
      </section>
      <section id="picture" className="px-5 mt-5">
        <div
          className={clsx(
            "w-full h-[350px] bg-secondary rounded-lg drop-shadow",
            "hover:scale-[1.01] transition-all duration-150",
            "flex justify-center items-center",
            "overflow-hidden relative"
          )}>
          <img
            src="/altaf.jpeg"
            alt="Altaf"
            className="w-full h-full object-cover"
            style={{
              objectPosition: "50% 70%",
            }}
          />
        </div>
      </section>
      <section className="px-5 mt-5" id="linkedin">
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/altaf-syahrastani-7727301a1/"
          target="_blank"
          className={clsx(
            "w-full p-3 rounded bg-[#869ED3] drop-shadow",
            "flex justify-between items-center",
            "hover:scale-[1.01] transition-all duration-150 cursor-pointer text-white"
          )}>
          <div className="flex items-center">
            <div className="w-12 p-2 h-12 flex justify-center items-center rounded bg-[#0A66C2] shadow-xl">
              <img
                src="/linkedin-in.svg"
                className="w-5 aspect-auto invert"
                alt="LinkedIn"
              />
            </div>
            <div className="ml-5">
              <h3 className="text-xl font-bold">Reach me on LinkedIn</h3>
              <p className="text-lg">Let's connect!</p>
            </div>
          </div>
        </a>
        <a
          rel="noreferrer"
          href="https://twitter.com/alsyh_77"
          target="_blank"
          className={clsx(
            "w-full p-3 rounded bg-[#343A40] drop-shadow mt-3 group",
            "flex justify-between items-center",
            "hover:scale-[1.01] transition-all duration-150 cursor-pointer text-white"
          )}>
          <div className="flex items-center">
            <div className="w-12 p-2 h-12 flex justify-center items-center rounded bg-[#212529] shadow-xl">
              <img
                src="/x-twitter.svg"
                className="w-5 aspect-auto invert"
                alt="Twitter"
              />
            </div>
            <div className="ml-5">
              <h3 className="text-xl font-bold">Be moots!</h3>
              <p className="text-lg">
                Find me on{" —— "}
                <span className="transition-colors duration-300 bg-white hover:bg-transparent">
                  @alsyh_77
                </span>
              </p>
            </div>
          </div>
        </a>
        <a
          rel="noreferrer"
          href="https://github.com/altafsyah"
          target="_blank"
          className={clsx(
            "w-full p-3 rounded bg-[#343A40] drop-shadow mt-3 group",
            "flex justify-between items-center",
            "hover:scale-[1.01] transition-all duration-150 cursor-pointer text-white"
          )}>
          <div className="flex items-center">
            <div className="w-12 p-2 h-12 flex justify-center items-center rounded bg-[#212529] shadow-xl">
              <img
                src="/github.svg"
                className="w-6 aspect-auto"
                alt="Twitter"
              />
            </div>
            <div className="ml-5">
              <h3 className="text-xl font-bold">Checkout my Github Profile</h3>
              {/* <p className="text-lg">My Github</p> */}
            </div>
          </div>
        </a>
        {/*Add Spotify : Current Track*/}
      </section>
    </>
  );
}

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  {
    title: "About",
    description: "Altaf Syahrastani - Public Space",
  },
];

export default function About() {
  return (
    <>
      <section id="about" className="text-xl px-5">
        <h5 className="text-tLightGray text-lg font-semibold">Hello,</h5>
        <h1 className="text-3xl font-semibold">I'm Altaf Syahrastani</h1>
        <p className="mt-3">
          I'm a web developer, mostly working on front-end development. I love
          when I can realize product design and make sure it gives the good
          experience for the user.
        </p>
        <p className="text-xl mt-3">
          I treat my spare time to learn and explore new things. When I get
          bored, I will find myself on reading books, try a new local coffee
          shop, strolling around the city, or just lay on my room.
        </p>
      </section>
      <section id="contact" className="mt-5 text-xl px-5">
        <h1 className="text-3xl font-semibold">My Contact</h1>
        <p className="mt-3">
          You can find me on these platforms, I'm open for any discussions, or
          just a nice and friendly chat. I'd love to hear anything from you
          <span className="font-bold"> (seriously)</span>.
        </p>
        <ol className="ml-10 mt-5 list-disc">
          <li>
            X (or Twitter){": "}
            <a
              href="https://twitter.com/alsyh_77"
              target="_blank"
              className="underline font-medium"
            >
              @alsyh_77
            </a>
          </li>
          <li>
            Email:{" "}
            <a
              href="mailto:syahrastanialtaf@gmail.com"
              className="underline font-medium"
            >
              syahrastanialtaf@gmail.com
            </a>
          </li>
        </ol>
        <p className="mt-5">
          You can also visit{" "}
          <a
            href="https://www.tanyaaja.in/p/altafsyah"
            target="_blank"
            className="mt-3 underline font-medium"
          >
            this site
          </a>{" "}
          to ask me anonymously.
        </p>
      </section>
      <section id="uses" className="text-xl mt-5 px-5">
        <h1 className="text-3xl font-semibold">Uses</h1>
        <p className="mt-3 p-3 bg-secondary rounded drop-shadow">
          I'm planning to put all tools and software that I'm using for my
          daily. Stay tuned! 🚀{" "}
        </p>
      </section>
    </>
  );
}

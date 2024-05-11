/* eslint-disable react/no-unescaped-entities */
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  {
    title: "Thoughts || altafsy",
    description: "Altaf Syahrastani - Public Space",
  },
];
export default function Thoughts() {
  return (
    <>
      <section id="thoughts" className="px-5">
        <h1 className="text-3xl font-semibold">Coming Soon!</h1>
        <div className="p-5 bg-accent/50 backdrop-blur border border-accent mt-5 rounded drop-shadow">
          <p className="text-xl font-medium">
            Lately, I love to write my thoughts (any thoughts) on my notes. So,
            I'm planning to write it here. Stay tuned! 🚀
          </p>
        </div>
      </section>
    </>
  );
}

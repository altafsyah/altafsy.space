import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwind from "~/tailwind.css?url";
import stylesheet from "~/style.css?url";
import type { LinksFunction } from "@remix-run/node";
import Navbar from "./components/navbar";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: tailwind,
  },
  {
    rel: "stylesheet",
    href: stylesheet,
  },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-primary text-secondary h-screen">
        <Navbar />
        <main className="max-w-xl w-full mx-auto mt-10 md:mt-16 pb-5 h-full">
          {children}
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

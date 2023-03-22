import { Link } from "gatsby";
import React from "react";
import { IGenCaisy_Navigation } from "../../sdk";
import { useLocation } from "@reach/router";

export const Navigation: React.FC<IGenCaisy_Navigation> = ({
  entries,
  homePage,
}) => {
  const { pathname } = useLocation();
  return (
    <header className="flex flex-wrap m-10 z-50 bg-white text-sm">
      <nav className="mx-auto" aria-label="Global">
        <div className="flex items-end flex-col justify-between flex-end">
          <div className="flex gap-5 flex-row flex-wrap items-center justify-center mt-0">
            {entries?.map((entry) => {
              if (!entry?.title || !entry.connection?.slug) {
                return null;
              }
              const active =
                `/${entry.connection?.slug}` === pathname ||
                (pathname === "/" && entry.connection?.slug === homePage?.slug);
              if (active) {
                return (
                  <Link
                    key={entry.id}
                    to={"/" + entry.connection?.slug}
                    className="font-medium text-blue-500"
                    aria-current="page"
                  >
                    {entry?.title}
                  </Link>
                );
              }
              return (
                <Link
                  key={entry.id}
                  to={"/" + entry.connection?.slug}
                  className="font-medium text-gray-600 hover:text-gray-400"
                >
                  {entry?.title}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

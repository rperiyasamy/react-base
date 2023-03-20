import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ Breadcrumbvalue }) => {
  return (
    <nav
      className="flex items-center text-gray-500 text-sm font-medium"
      aria-label="breadcrumbs"
    >
      {Breadcrumbvalue.map((crumb, index) => {
        const isLast = index === Breadcrumbvalue.length - 1;

        return (
          <div
            key={crumb.label}
            className={`flex items-center ${isLast ? "text-gray-900" : ""}`}
          >
            <Link to={crumb.path}>
              {crumb.label}
              <span className="mx-2 text-neutral-500 dark:text-neutral-400">
                &gt;
              </span>
            </Link>
            {/* {!isLast && <svg className="h-5 w-auto mx-2" fill="currentColor" >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>} */}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;

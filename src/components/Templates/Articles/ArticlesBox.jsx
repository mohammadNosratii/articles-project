import { Button } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

export default function ArticlesBox({ title, id }) {
  return (
    <div>
      <div className="dark:text-white text-xl p-5 rounded-md shadow-normal dark:bg-black/90 flex flex-col xs:flex-row justify-between items-center gap-4 relative border-s-4 border-gray-400">
        <h3 className="text-[17px] md:text-lg lg:text-[19px]">{title}</h3>
        <Link to={`/articles/${id}`}>
          <div className="h-15 w-15 absolute left-0 content-none bg-gray-800/70 hover:bg-orange-100 dark:bg-orange-200/70 dark:hover:bg-gray-800"></div>
          <Button
            className="bg-gray-800/70 text-orange-200 hover:bg-orange-100 hover:text-gray-800 dark:bg-orange-200/70 dark:text-gray-800 dark:hover:bg-gray-800 md:text-sm dark:hover:text-orange-200 py-5 rounded-xl"
            size="sm"
          >
            ورود به مقاله
          </Button>
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      className="w-full min-h-[30vh] text-center flex flex-col justify-evenly items-center text-4xl mt-15"
      style={{
        background:
          " radial-gradient(circle,rgba(255, 255, 255, 1) 0%, rgba(245, 233, 235, 1) 13%, rgba(245, 147, 163, 1) 30%, rgba(239, 86, 96, 1) 49%, rgba(162, 217, 244, 1) 70%, rgba(106, 204, 188, 1) 90%, rgba(245, 233, 235, 1) 100%);",
      }}
    >
      <p>
        <Link
          href={"https://github.com/rabb17chi/online-ui-lab"}
          title="Github Repo"
          className="hover:text-blue-500 transition-all duration-250"
          target="blank"
        >
          {"<"}Online UI Lab{">"}
        </Link>
      </p>
      <div>
        By{" "}
        <span
          className=" text-red-300 ml-2 hover:underline hover:underline-offset-4"
          title="GitHub Profile"
        >
          <Link href="https://github.com/rabb17chi">rabb17</Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;

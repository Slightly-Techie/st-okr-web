import { packages } from "@/constants";
import { Packages as Types } from "@/types";
import { Link } from "react-router-dom";

export default function Packages() {
  return (
    <article className="mt-[30px] max-w-[800px] w-full flex-wrap justify-center md:justify-between flex gap-5">
      {packages.map((item, index) => (
        <PackageItem key={index} {...item} />
      ))}
    </article>
  );
}

function PackageItem({ path, name, type, desc }: Types) {
  return (
    <Link
      to="/create-company"
      className="group bg-[#F4F4F4] first:border-[#047358] border border-black/5 py-4 flex-shrink-0 flex-grow-0  pr-2.5 pl-4 w-[245px]  rounded-[16px]"
    >
      <div className="flex items-center justify-between">
        <div className="size-8 border flex items-center justify-center border-black/10 bg-white rounded-md">
          <img src={path} alt={name} />
        </div>
        <div
          className={`py-2 group-first:text-[#047358] px-2.5 text-xs  bg-white border rounded-[4px] border-black/5`}
        >
          {type}
        </div>
      </div>
      <div className="mt-[11px]">
        <h5 className="font-bold">{name}</h5>
        <p className="mt-[5px] text-xs text-black/50">{desc}</p>
      </div>
    </Link>
  );
}

import Logo from "@/assets/Logo.svg";
import PageWrapper from "@/components/ui/wrapper";
import { packages } from "@/constants";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function JoinCompany() {
  return (
    <PageWrapper title="Join Company - OKR">
      <section className="px-4 md:px-8 flex flex-col mx-auto items-center">
        <img src={Logo} alt="Logo" className="pt-8 self-start" />
        <section className="mt-7 max-w-screen-lg mx-auto">
          <div>
            <h1 className="text-black/60 font-bold text-[28px]">
              Pioneer or Participate:{" "}
              <span className="block font-bold -mt-2">
                Your Company Journey Starts Here
              </span>
            </h1>
            <p className="mt-3 max-w-[486px] text-black/50">
              Pave the path to progress by pioneering your own company or
              participating in an existing one.
            </p>
          </div>
          <Packages />
          <main className="mt-8 max-w-[800px] border border-black/10 rounded-md">
            <div>
              <div className="w-full relative  border-b border-black/10">
                <input
                  className="w-full bg-[#F4F4F4] outline-none py-3 px-11"
                  placeholder="Search Organization"
                />
                <Search
                  size={18}
                  className="absolute opacity-60 left-4 bottom-[15px]"
                />
              </div>
              <div>categories</div>
            </div>
            {/* search results */}
            <article></article>
          </main>
        </section>
      </section>
    </PageWrapper>
  );
}

function Packages() {
  return (
    <article className="mt-[30px] max-w-[800px] w-full flex-wrap justify-center md:justify-between flex gap-5">
      {packages.map((item, index) => (
        <Link
          to="/create-company"
          key={index}
          className="bg-[#F4F4F4] first:border-[#047358] border border-black/5 py-4 flex-shrink-0 flex-grow-0  pr-2.5 pl-4 w-[245px]  rounded-[16px]"
        >
          <div className="flex items-center justify-between">
            <div className="size-8 border flex items-center justify-center border-black/10 bg-white rounded-md">
              <img src={item.path} alt={item.name} />
            </div>
            <div
              className={`py-2 ${index === 0 && "text-[#047358]"} px-2.5 text-xs  bg-white border rounded-[4px] border-black/5`}
            >
              {item.type}
            </div>
          </div>
          <div className="mt-[11px]">
            <h5 className="font-bold">{item.name}</h5>
            <p className="mt-[5px] text-xs text-black/50">{item.desc}</p>
          </div>
        </Link>
      ))}
    </article>
  );
}

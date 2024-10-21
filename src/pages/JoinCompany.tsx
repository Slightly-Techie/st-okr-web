import Logo from "@/assets/Logo.svg";
import CompanyTypes from "@/components/companies/companyTypes";
import Organizations from "@/components/companies/organizations";
import Packages from "@/components/companies/packages";
import PageWrapper from "@/components/ui/wrapper";
import { Search } from "lucide-react";

export default function JoinCompany() {
  return (
    <PageWrapper title="Join Company - OKR">
      <section className="px-4 md:px-8 pb-20  flex flex-col mx-auto items-center">
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
          <main className="mt-8 w-screen mr-4 md:max-w-[800px] border border-black/10 rounded-lg">
            <div className="w-full border-b">
              <div className="w-full relative  border-b border-black/10">
                <input
                  className="w-full bg-[#F4F4F4] rounded-t-lg outline-none py-3 px-11"
                  placeholder="Search Organization"
                />
                <Search
                  size={18}
                  className="absolute opacity-60 left-4 bottom-[15px]"
                />
              </div>
              <CompanyTypes />
            </div>

            <Organizations />
          </main>
        </section>
      </section>
    </PageWrapper>
  );
}

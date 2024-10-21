import { companyType } from "@/constants";

export default function CompanyTypes() {
  return (
    <div className="p-4 w-full  flex gap-[22px] flex-nowrap overflow-scroll">
      {companyType.map((company, index) => (
        <div
          key={index}
          className="group flex text-sm py-2 first:bg-black  px-2.5 flex-shrink-0  border-black/5 bg-[#FAFAFA] cursor-pointer border rounded-lg gap-2.5"
        >
          <p className="text-black/50 group-first:text-[#F4F4F4]">{company}</p>
          <span className="text-black/50 group-first:text-[#F4F4F4]">10</span>
        </div>
      ))}
    </div>
  );
}

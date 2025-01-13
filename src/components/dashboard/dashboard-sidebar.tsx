import Logo from "@/assets/logo.svg";
import { LayoutGrid, PlusIcon, Search, User2Icon, UserCheck2 } from "lucide-react";
import { Button } from "../ui/button";
import { GearIcon } from "@radix-ui/react-icons";

export default function DashboardSidebar() {
  return (
    <aside className="w-full  h-full bg-[#fafafa] lg:pt-7 lg:px-4 space-y-8">
      <section>
        <img src={Logo} alt="okr-logo" className="logo" />
      </section>

      <section className="flex flex-col gap-7 pb-6 border-b-2 border-[#f4f4f4]">
        <div className="space-y-4">

          {/* search */}
          <div className="relative flex items-center border rounded-lg ">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-[inherit] text-base px-8 py-1.5 placeholder:text-xs bg-[#f4f4f4] focus:outline-none focus:ring-1 focus:ring-gray-300"
              aria-label="Search"
            />
            <div className="absolute left-2 top-[30%] text-gray-400">
              <Search className="size-4 stroke-gray-400" />
            </div>
          </div>

          {/* Dashboard Button */}

          <Button className="w-full hover:bg-white gap-2 justify-start px-2  bg-white shadow-none border">
            <LayoutGrid size={13} className="fill-[#047258] stroke-[#047358]" />
            <p className="text-[#047358]">Dashboard</p>
          </Button>
        </div>

        <div className="flex items-center text-sm text-medium gap-3 px-2">
          <PlusIcon size={13} className="" />
          <p>OKRs</p>
        </div>
        <div className="flex items-center text-sm text-medium gap-3 px-2">
          <UserCheck2 size={13} className="" />
          <p>Members</p>
        </div>
        <div className="flex items-center text-sm text-medium gap-3 px-2">
          <User2Icon size={13} className="" />
          <p>Profile</p>
        </div>
      </section>

      <section className="w-full">
        <div className="flex items-center text-sm text-medium gap-3 px-2">
          <GearIcon className="" />
          <p>Settings</p>
        </div>
      </section>

    </aside>
  );
}

import { SettingsIcon } from "lucide-react";
import { MdOutlineNotificationImportant } from "react-icons/md";

export default function DashboardHeader() {
 return (
  <>
    <nav className="lg:py-4 lg:px-3 flex items-center justify-between">
      <div>
        <h1 className="lg:text-xl font-bold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-6">
        <button className="bg-[#F4F4F4] p-1.5 rounded-full relative text-white">
          <MdOutlineNotificationImportant size={20}/>
          <div className="absolute flex items-center justify-center -top-2 p-1 -right-2 size-4 rounded-full bg-red-500">
            <span className="text-xs text-white">2</span>
          </div>
        </button>

        <div className="bg-[#F4F4F4] flex items-center rounded-lg p-2 gap-6">

          <div className="flex items-center gap-1">
            <div className="bg-emerald-800 py-1 px-2 rounded-lg">
              <span className="text-white text-sm font-semibold">JR</span>
            </div>
            <p className="text-xs">Slightly Techie</p>
          </div>

          <SettingsIcon size={16} className="stroke-current text-gray-500"/>
        </div>
      </div>
    </nav>
  </>
 )
}
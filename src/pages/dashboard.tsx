import DashboardHeader from '@/components/dashboard/dashboard-header'
import DashboardSidebar from '@/components/dashboard/dashboard-sidebar'
import PageWrapper from '@/components/ui/wrapper'

export default function Dashboard() {
  return (
    <PageWrapper title="Dashboard - OKR">
      <div className="flex">
        <aside className="w-1/4 lg:w-[12vw] border-r border-gray-200 h-screen sticky top-0">
          <DashboardSidebar />
        </aside>
        <div className="flex-1">
          <header className="bg-white shadow-sm sticky top-0 z-10">
            <DashboardHeader />
          </header>
          <main className="p-6 space-y-6">
            {/* Main content goes here */}
          </main>
        </div>
      </div>
    </PageWrapper>
  )
}
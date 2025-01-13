import PageWrapper from "@/components/ui/wrapper";
import PerformanceChart from "../charts/performance.chart";
import ProgressChart from "../charts/progress.chart";

function HomePage() {
  return (
    <PageWrapper title="OKR">
      <div className="bg-white">HomePage</div>

      <ProgressChart />
      <PerformanceChart />
    </PageWrapper>
  );
}

export default HomePage;

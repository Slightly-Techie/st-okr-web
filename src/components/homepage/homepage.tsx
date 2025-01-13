import PageWrapper from "@/components/ui/wrapper";
// import PerformanceChart from "../charts/PerformanceChart";
import ProgressChart from "../charts/ProgressChart";

function HomePage() {
  return (
    <PageWrapper title="OKR">
      <div className="bg-white">HomePage</div>

      <ProgressChart />
    </PageWrapper>
  );
}

export default HomePage;

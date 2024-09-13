import PageWrapper from "../wrapper";
import Auth from "./components/auth";

function AuthPage() {
  return (
    <PageWrapper title="OKR | Sign In">
      <div className="w-full min-h-screen bg-stone-100 p-5">
        <div className="max-w-md mx-auto">
          <Auth />
        </div>
      </div>
    </PageWrapper>
  );
}

export default AuthPage;

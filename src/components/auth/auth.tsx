import Logo from "@/assets/Logo.svg";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";

function Auth() {
  const continueAuth = () => {
    window.location.href = "http://localhost:8080/api/v1/auth/google";
  };

  return (
    <div className="w-full md:max-w-screen-sm mx-auto  px-5 py-8 rounded-xl">
      <div>
        <img src={Logo} alt="okr-logo" className="size-12" />
        <div className="mt-10">
          <h1 className="text-xl font-semibold">
            Continue with with your Identity Provider
          </h1>
          <br />
          <div className="space-y-3">
            <Button
              variant={"outline"}
              onClick={continueAuth}
              className="w-full"
            >
              <FcGoogle className="mr-2 h-5 w-5" />
              Continue with Google
            </Button>
            <Button
              variant={"outline"}
              onClick={continueAuth}
              className="w-full"
            >
              <SiGithub className="mr-2 h-5 w-5" />
              Continue with Github
            </Button>
          </div>
        </div>
      </div>
      <hr className="my-5 border-neutral-300" />{" "}
      <p className="text-neutral-500 text-sm">
        By clicking the buttons below, you acknowledge that you have read,
        understood, and agree to our{" "}
        <Link
          to={`/`}
          className="underline hover:text-primary ease-in duration-200"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          to={`/`}
          className="underline hover:text-primary ease-in duration-200"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}

export default Auth;

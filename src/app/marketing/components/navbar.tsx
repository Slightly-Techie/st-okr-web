import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo-green.png";

function Navbar() {
  return (
    <nav className="w-full sticky p-5 h-20">
      <div className="flex h-full justify-between items-center max-w-screen-2xl mx-auto">
        <div>
          <img src={Logo} alt="okr-logo" className="size-10" />
        </div>
        <div>
          <Button>
            <Link to="/login" className="font-medium">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

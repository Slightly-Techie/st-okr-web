import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";

import check from "@/assets/check.svg";

const CreateCompanySuccess = () => {
  const [showConfetti, setShowConfetti] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-12">
      {showConfetti && (
        <Confetti
          gravity={0.3}
          style={{ left: "50%", transform: "translateX(-50%)" }}
        />
      )}

      <img src={check} alt="check" />

      <div className="max-w-[400px] text-center">
        <h1 className="text-3xl font-bold">
          Your Company Has Been Successfully Created 🎉
        </h1>
        <p className="text-sm text-opacity-60 mt-3 mb-4">
          Proceed to manage your company dashboard
        </p>

        <Link
          to={`/`}
          className="ease-in duration-200 primary-button text-sm block"
        >
          Continue to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default CreateCompanySuccess;

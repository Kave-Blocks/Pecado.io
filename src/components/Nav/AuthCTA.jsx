import React from "react";

const AuthCTA = ({ setIsScrolled }) => {
  return (
    <div className="flex flex-row gap-x-2">
      <a href="https://aix-app.pecado.io/" target="_blank"
        className={`btn btn-md bg-[#11112F] ${
          setIsScrolled
            ? "bg-primary-bg text-white"
            : "dark:bg-yellow-bg text-white"
        }`}
      >
        Visit AIX
      </a>
    </div>
  );
};

export default AuthCTA;

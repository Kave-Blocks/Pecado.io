import { Moon } from "lucide-react";
import React from "react";
import useDarkModeStore from "../../store/useDarkModeStore";
import { Sun } from "lucide-react";

const DarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <div>
      {isDarkMode ? ( 
        <Sun onClick={toggleDarkMode} className="cursor-pointer animate-rotate-y" color="#ffffff"/>
      ) : (
        <Moon onClick={toggleDarkMode} className="cursor-pointer animate-rotate-x"/>
      )}
    </div>
  );
};

export default DarkMode;

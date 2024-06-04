import { Moon } from "lucide-react";
import React from "react";
import useDarkModeStore from "../../store/useDarkModeStore";
import { Sun } from "lucide-react";

const DarkMode = ({ isScrolled }) => {
  const { isDarkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <div>
      {isDarkMode ? ( 
        <Sun onClick={toggleDarkMode} className={`cursor-pointer animate-rotate-y `} color={`${isScrolled ? '#000000' : '#ffffff'}`}/>
      ) : (
        <Moon onClick={toggleDarkMode} className={`cursor-pointer animate-rotate-x`} color={`${isScrolled ? '#ffffff' : '#000000'}`}/>
      )}
    </div>
  );
};

export default DarkMode;

import { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../context/Theme-Provider";

export const ToggleTheme = () => {
    
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      {theme === "dark" ? (
        <div
          className="flex items-center cursor-pointer text-white"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiSun />
          Light Mode
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiMoon />
          DarkMode
        </div>
      )}
    </div>
  );
};

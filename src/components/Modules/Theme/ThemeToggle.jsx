import { useTheme } from "next-themes";
import SunIcon from "../../../assets/icons/Sun";
import MoonIcon from "../../../assets/icons/Moon";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    switch (theme) {
      case "light": {
        return setTheme("dark");
      }
      case "dark": {
        return setTheme("light");
      }
      default: {
        break;
      }
    }
  };

  return (
    <div
      className="bg-gray-800 hover:bg-gray-300 hover:text-gray-900 hover:shadow-normal text-gray-300 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300"
      onClick={changeThemeHandler}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </div>
  );
}

import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <i
          className="text-xl text-white cursor-pointer fa fa-sun"
          onClick={() => setTheme("light")}
        ></i>
      ) : (
        <i
          className="text-xl text-white cursor-pointer fa fa-moon "
          onClick={() => setTheme("dark")}
        ></i>
      )}
    </>
  );
};

export default ThemeToggle;

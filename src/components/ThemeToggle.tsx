import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }


  useEffect(() => {
    !window.matchMedia("(prefers-color-scheme: dark)").matches && toggleTheme()
  }, []);


  return (
    <div className="flex justify-center items-center">
      <div
        className={`relative rounded-full w-12 h-6 transition duration-200 ease-linear bg-secondary`}
      >
        <label
          htmlFor="toggle"
          className={`absolute top-0 left-0 mb-0 w-6 h-6 rounded-full border-2 border-secondary bg-body transition-transform duration-100 ease-linear cursor-pointer
            ${darkMode ? "translate-x-full" : "translate-x-0"}`}
          onClick={toggleTheme}
        ></label>
        <input
          type="checkbox"
          id="toggle"
          name="toggle"
          className="appearance-none w-full h-full active:outline-none focus:outline-none"
          checked={darkMode}
          onChange={toggleTheme}
        />
      </div>
    </div>
  );
}


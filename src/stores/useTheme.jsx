// "use client";

// import { useState, createContext, useContext, useEffect } from "react";
// import { Moon, Sun } from "lucide-react"; // optional icon library

// const ThemeDataContext = createContext();

// export const ThemeProvide = ({ children }) => {
//   const [theme, setTheme] = useState(() => {
//     return localStorage.getItem("theme-storage") || "light";
//   });

//   useEffect(() => {
//     localStorage.setItem("theme-storage", theme);
//   }, [theme]);

//   // Function to toggle theme
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
//   };

//   // value shared to all components
//   const value = { theme, setTheme, toggleTheme };

//   return (
//     <ThemeDataContext.Provider value={value}>
//       {children}
//     </ThemeDataContext.Provider>
//   );
// };

// // Custome hook for easy usage
// export const useTheme = () => useContext(ThemeDataContext);

// export const ThemeToggleButton = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div className="w-full flex text-end justify-end">
//       <button
//         onClick={toggleTheme}
//         className={`flex items-center justify-start text-start gap-2 rounded-r px-1 py-1 hover:px-2 rounded-full transition-all duration-300
//          ${theme === "dark" ? "bg-gray-600 text-yellow-400" : "bg-gray-700 text-white"}
//         hover:${theme === "dark" ? "bg-gray-900" : "bg-gray-800"} shadow-md`}
//         aria-label="Toggle Theme"
//       >
//         {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
//         <span className="font-thin"></span>
//       </button>
//     </div>
//   );
// };

import React from "react";

const useTheme = () => {
  return <div>useTheme</div>;
};

export default useTheme;

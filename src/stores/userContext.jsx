// import { useState, createContext, useContext } from "react";

// export const UserDataContext = createContext()

// export const UserContext = ({ children }) => {

//     const [user, setUser] = useState({
//         email: "",
//         name: "",
//         password: "",
//     })

//     return (
//         <div>
//             <UserDataContext.Provider value={{ user, setUser }}>
//                 {children}
//             </UserDataContext.Provider>
//         </div>
//     )

// }

// export default UserContext



// src/context/UserDataContext.jsx
"use client"; // Required for Context in Next.js App Router

import { createContext, useState } from "react";

// 1. Give it a safe default value to prevent destructuring errors
export const UserDataContext = createContext({
  user: null,
  setUser: () => {},
});

export const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
};

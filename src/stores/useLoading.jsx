"use client";

import React, { createContext, useContext, useState } from "react";

// Create Context
const LoadingContext = createContext(null);

// Custom Hook
export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used inside a LoadingProvider");
  }
  return context;
};

// Provider
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

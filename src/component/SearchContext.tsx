"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the context type
interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

// Provide a default value
const defaultContextValue: SearchContextType = {
  searchTerm: "",
  setSearchTerm: () => {},
};

const SearchContext = createContext<SearchContextType>(defaultContextValue);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);

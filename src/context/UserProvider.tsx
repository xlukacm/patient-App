import React, { createContext, useContext } from "react";

type UserContextType = {
  context: string | null;
  setContext: (c: string | null) => void;
};

export const UserContext = createContext<UserContextType>({
  context: "Unknown",
  setContext: () => {},
});

export const useGlobalContext = () => useContext(UserContext);

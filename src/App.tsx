import React, { useCallback, useState } from "react";
import "./styles/styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { UserContext } from "./context/UserProvider";

function App() {
  const [context, setContext] = useState<string | null>(null);
  return (
    <UserContext.Provider value={{ context, setContext }}>
      <Router>
        <AppRoutes />
      </Router>
    </UserContext.Provider>
  );
}

export default App;

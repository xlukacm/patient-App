import React, { useCallback } from "react";
import "./styles/styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

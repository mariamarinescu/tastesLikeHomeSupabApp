import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Login } from "./components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/recipes" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Navigate to="/recipes" />} />
        <Route path="/forgot-password" element={<Navigate to="/recipes" />} />
        <Route path="/" element={<Navigate to="/recipes" />}>
          <Route path="recipes" element={<Navigate to="/recipes" />} />
          <Route path="createRecipe" element={<Navigate to="/recipes" />} />
          <Route path=":id" element={<Navigate to="/recipes" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

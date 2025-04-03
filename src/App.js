import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ForgotPassword, Login, Signup } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/recipes" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
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

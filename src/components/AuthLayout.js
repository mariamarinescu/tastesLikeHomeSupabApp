import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient"; // Assuming supabaseClient is one level up

import { useSession } from "../providers/SessionContext"; // Corrected import path

const AuthLayout = () => {
  const navigate = useNavigate();
  const { isAuthenticated, removeUser } = useSession(); // Use the context

  console.log({ isAuthenticated });
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error signing out:", error);
    } else {
      removeUser();
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <nav className="bg-gray-800 p-4 flex items-center space-x-4">
        <NavLink
          to="/recipes"
          className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        >
          Recipes
        </NavLink>
        <NavLink
          to="/createRecipe"
          className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
        >
          Create Recipe
        </NavLink>
        {
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-auto"
            onClick={handleLogout}
          >
            Log Out
          </button>
        }
      </nav>
      <div className="flex-grow p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;

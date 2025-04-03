import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthForm, InputField } from ".";
import supabase from "../config/supabaseClient";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return setMessage(error.message);
    navigate("/login");
  };

  return (
    <AuthForm
      title="Sign Up"
      subtitle="Create an account to get started."
      buttonText="Sign Up"
      onSubmit={handleSubmit}
    >
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
      />
      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
      />
      {message && <p className="text-red-500 text-center">{message}</p>}
      <p className="text-center text-sm mt-2">
        Already have an account?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </AuthForm>
  );
};

export default SignUp;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthForm, InputField } from ".";
import supabase from "../config/supabaseClient";
import { useSession } from "../providers/SessionContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { setCurrentUser } = useSession();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return setMessage(error.message);
    setCurrentUser(data.user.email);
    navigate("/recipes");
  };

  return (
    <AuthForm
      title="Login"
      subtitle="Welcome back! Please enter your details."
      buttonText="Login"
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
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot password?
        </span>
      </p>
    </AuthForm>
  );
};

export default Login;

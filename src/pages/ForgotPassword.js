import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthForm, InputField } from ".";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(
      "If your email exists in our system, a reset link has been sent."
    );
  };

  return (
    <AuthForm
      title="Forgot Password?"
      subtitle="Enter your email to reset your password."
      buttonText="Send Reset Link"
      onSubmit={handleSubmit}
    >
      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
      />
      {message && <p className="text-green-500 text-center">{message}</p>}
      <p className="text-center text-sm mt-2">
        Remembered your password?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Log in
        </span>
      </p>
    </AuthForm>
  );
};

export default ForgotPassword;

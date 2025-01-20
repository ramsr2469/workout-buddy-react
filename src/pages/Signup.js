import React, { useState } from "react";
import useSignup from "../hooks/useSignup";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, error, isLoading } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    signUp(email, password);
  };
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button disabled={isLoading} type="submit">
        Sing Up
      </button>
      {error && <div className="">{error}</div>}
    </form>
  );
}

export default Signup;

import React, { useState } from "react";

function Signup({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Registered with ${email}`);
    const audio = new Audio("/click.mp3");
    audio.play();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white text-center">Register</h2>
      <form onSubmit={handleSignup} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded bg-gray-100"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded bg-gray-100"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-sm text-white text-center">
        Already have an account?{" "}
        <button onClick={onSwitch} className="underline">
          Login
        </button>
      </p>
    </div>
  );
}

export default Signup;

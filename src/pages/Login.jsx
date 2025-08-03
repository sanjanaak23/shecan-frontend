// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../index.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/main");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('/login.jpg')`, // ✅ Public image path
        backdropFilter: "blur(4px)",
      }}
    >
      <motion.div
        className="bg-white bg-opacity-20 rounded-2xl shadow-lg p-8 w-[90%] max-w-md text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-center mb-6 tracking-wide">
          {isLogin ? "Login" : "Sign Up"} to SheCan
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 bg-transparent border-b border-white placeholder-white focus:outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-transparent border-b border-white placeholder-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-transparent border-b border-white placeholder-white focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-white text-black py-2 mt-4 rounded hover:bg-gray-100 transition-all"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already registered?"}{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;

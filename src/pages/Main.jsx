// src/pages/Main.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import mainBg from "../assets/main.jpg";
import "../index.css";

const quotes = [
  "Believe in yourself and all that you are.",
  "She believed she could, so she did.",
  "Empowered women empower women.",
  "Your only limit is your mind.",
  "Keep going. You’re getting there."
];

const Main = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const cardData = [
    { title: "Your Daily Goals", desc: "Track your daily tasks and achievements here.", path: "/dashboard" },
    { title: "Leaderboard", desc: "See how other interns are performing.", path: "/leaderboard" },
    { title: "Rewards", desc: "Earn points and redeem them for cool perks!", path: "/rewards" },
    { title: "Journal", desc: "Reflect on your day or log your thoughts here.", path: "/journal" }
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-between px-4 py-8 relative font-poppins"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      {/* Floating Profile Icon */}
      <Link to="/profile">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="fixed top-4 right-4 z-50 bg-white bg-opacity-80 rounded-full shadow-lg p-2 hover:scale-105 transition-all"
        >
          <FaUserCircle className="text-3xl text-gray-800" />
        </motion.div>
      </Link>

      {/* Quote Card */}
      <motion.div
        key={quoteIndex}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        className="bg-white bg-opacity-30 text-black text-lg md:text-2xl text-center rounded-xl px-6 py-4 shadow-lg mb-8 max-w-xl backdrop-blur-md"
        style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.4)" }}
      >
        {quotes[quoteIndex]}
      </motion.div>

      {/* Main Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl"
      >
        {cardData.map((item, index) => (
          <Link to={item.path} key={index}>
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, type: "spring", bounce: 0.4 }}
              className="p-8 md:p-14 rounded-2xl shadow-lg text-black text-center backdrop-blur-sm border border-white bg-gradient-to-br from-white/40 to-white/20 hover:from-pink-200/70 hover:to-orange-100/80 transition-all duration-300"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
            >
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* Footer */}
      <footer className="w-full mt-12 text-center text-sm text-white opacity-80">
        © 2025 SheCan. All rights reserved.
      </footer>
    </div>
  );
};

export default Main;

import React, { useState } from "react";
import { motion } from "framer-motion";
import journalBg from "../assets/journal.jpg";

const Journal = () => {
  const [entry, setEntry] = useState("");

  const handleChange = (e) => setEntry(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Entry saved!");
    setEntry("");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-6"
      style={{ backgroundImage: `url(${journalBg})` }}
    >
      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, type: "spring" }}
        className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-3xl h-[80vh] flex flex-col gap-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white drop-shadow">
          ✨ Journal Your Thoughts
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col flex-grow gap-4">
          <textarea
            value={entry}
            onChange={handleChange}
            placeholder="Write anything on your mind..."
            className="w-full flex-grow p-4 rounded-xl resize-none bg-white bg-opacity-70 text-gray-800 text-lg outline-none shadow-md focus:ring-2 focus:ring-blue-300"
          />

          {/* Animated Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-300 w-full shadow-md"
          >
            Save Entry
          </motion.button>
        </form>
      </motion.div>

      <footer className="mt-6 text-black text-sm opacity-80 text-center">
        © 2025 <span className="font-semibold">SheCan</span>. All rights reserved.
      </footer>
    </div>
  );
};

export default Journal;

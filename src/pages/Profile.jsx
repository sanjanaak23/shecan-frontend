import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgImage from "../assets/profile.jpg";

const Profile = () => {
  const defaultUser = {
    name: "Sanjana Kumari",
    email: "sanjana@example.com",
    joined: "July 2025",
    role: "Intern",
    goalsCompleted: 42,
    journalEntries: 17,
    points: 310
  };

  const [user] = useState(defaultUser);
  const [profileImg, setProfileImg] = useState(
    localStorage.getItem("profileImg") || null
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImg(reader.result);
      localStorage.setItem("profileImg", reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex items-center justify-center px-4 py-8"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 text-center text-white backdrop-blur-sm bg-white/10 p-6 rounded-xl shadow-xl max-w-xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-6 drop-shadow-lg"
        >
           Dashboard-Profile
        </motion.h2>

        {/* Profile Picture */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center gap-2 mb-6"
        >
          <label htmlFor="profile-img-upload" className="cursor-pointer">
            {profileImg ? (
              <img
                src={profileImg}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md hover:shadow-lg transition"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-200 border-2 border-dashed border-white flex items-center justify-center text-white text-sm hover:bg-gray-100">
                Upload Photo
              </div>
            )}
          </label>
          <input
            id="profile-img-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <p className="text-sm text-white drop-shadow-sm">Click to upload</p>
        </motion.div>

        {/* User Info */}
        <div className="space-y-2 text-white text-base font-medium drop-shadow-sm">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Joined:</strong> {user.joined}</p>
          <p><strong>Goals Completed:</strong> {user.goalsCompleted}</p>
          <p><strong>Journal Entries:</strong> {user.journalEntries}</p>
          <p><strong>Reward Points:</strong> {user.points}</p>
        </div>

        <div className="mt-6">
          <Link to="/main">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-white/20 text-white px-6 py-2 rounded-xl shadow hover:bg-white/30 transition drop-shadow"
            >
              ← Back to Dashboard
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;

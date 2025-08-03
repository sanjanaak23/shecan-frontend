import { motion } from "framer-motion";
import { Crown, Medal, Award } from "lucide-react";
import leaderboardBg from "../assets/leaderboard.jpg";

const leaders = [
  { name: "Sanjana", points: 320, icon: <Crown className="text-[#d6d6d6] w-8 h-8" /> },
  { name: "Aisha", points: 275, icon: <Medal className="text-[#bcbcbc] w-8 h-8" /> },
  { name: "Ishita", points: 240, icon: <Award className="text-[#a6a6a6] w-8 h-8" /> },
  { name: "Diya", points: 200 },
  { name: "Mira", points: 180 },
  { name: "Sara", points: 160 },
];

const Leaderboard = () => {
  return (
    <div
      className="min-h-screen text-white py-10 px-4 md:px-12 lg:px-24 flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: `url(${leaderboardBg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1e]/70 to-[#1c1c1e]/90 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-10 drop-shadow-xl text-gray-100">
          Leaderboard
        </h1>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-6 space-y-4">
          {leaders.map((user, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="flex justify-between items-center p-4 rounded-xl bg-[#d3d3d340] hover:bg-[#d3d3d360] text-white backdrop-blur-md transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                {user.icon || (
                  <div className="w-8 h-8 rounded-full bg-white/30 text-sm flex items-center justify-center font-semibold text-white">
                    {index + 1}
                  </div>
                )}
                <span className="text-lg md:text-xl font-medium text-gray-200">
                  {user.name}
                </span>
              </div>
              <span className="text-xl md:text-2xl font-bold text-gray-100">
                {user.points} pts
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

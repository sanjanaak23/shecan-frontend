import { motion } from "framer-motion";
import {
  Gift,
  Trophy,
  Medal,
  ThumbsUp,
  Crown,
  Gem,
} from "lucide-react";
import rewardsImg from "../assets/rewards.jpg";

const rewards = [
  {
    title: "Gift Voucher",
    value: "₹500",
    icon: <Gift className="h-10 w-10 text-white/90" />,
  },
  {
    title: "Top Performer",
    value: "🏆",
    icon: <Trophy className="h-10 w-10 text-white/90" />,
  },
  {
    title: "Consistency Medal",
    value: "🥇",
    icon: <Medal className="h-10 w-10 text-white/90" />,
  },
  {
    title: "Intern of the Week",
    value: "⭐",
    icon: <ThumbsUp className="h-10 w-10 text-white/90" />,
  },
  {
    title: "Leadership Crown",
    value: "👑",
    icon: <Crown className="h-10 w-10 text-white/90" />,
  },
  {
    title: "Gem Badge",
    value: "💎",
    icon: <Gem className="h-10 w-10 text-white/90" />,
  },
];

const Rewards = () => {
  return (
    <div
      className="min-h-screen bg-[#1e1e2f] text-white py-10 px-4 md:px-12 lg:px-24"
      style={{
        backgroundImage: `url(${rewardsImg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 text-center drop-shadow-md">
        Rewards & Recognition
      </h1>

      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rewards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl p-6 shadow-xl bg-[rgba(173, 216, 230, 0.25)] backdrop-blur-md transition-transform duration-300 flex flex-col items-center text-center"
          >
            {card.icon}
            <div className="mt-4 text-lg md:text-xl font-medium">
              {card.title}
            </div>
            <p className="text-3xl md:text-4xl font-bold mt-2">{card.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <div className="mt-16 text-center text-2xl md:text-3xl font-bold drop-shadow-md">
        "Every step you take matters—even the quiet ones."
      </div>

      {/* Footer */}
      <footer className="w-full mt-12 text-center text-sm text-white opacity-80">
        © 2025 SheCan. All rights reserved.
      </footer>
    </div>
  );
};

export default Rewards;

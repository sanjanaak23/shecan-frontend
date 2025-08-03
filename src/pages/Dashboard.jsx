import { motion } from "framer-motion";
import {
  CheckCircle,
  Target,
  Star,
  Flame,
  Clock,
  NotebookPen,
} from "lucide-react";

const stats = [
  {
    title: "Tasks Completed",
    value: "18",
    icon: <CheckCircle className="h-10 w-10 text-white/90" />,
  },
  {
    title: "Goals Achieved",
    value: "7",
    icon: <Target className="h-10 w-10 text-white/90" />,
  },
  {
    title: "Points Earned",
    value: "320",
    icon: <Star className="h-10 w-10 text-white/90" />,
  },
  {
    title: "Streak",
    value: "5 days",
    icon: <Flame className="h-10 w-10 text-white/90" />,
  },
  {
    title: "Time Today",
    value: "1h 45m",
    icon: <Clock className="h-10 w-10 text-white/90" />,
  },
  {
    title: "Journals",
    value: "11",
    icon: <NotebookPen className="h-10 w-10 text-white/90" />,
  },
];

const Dashboard = () => {
  return (
    <div
      className="min-h-screen bg-[#1c1c1e] text-white py-10 px-4 md:px-12 lg:px-24 flex flex-col justify-between"
      style={{
        backgroundImage: "url('/src/assets/dashboard.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 text-center drop-shadow-md">
          Dashboard Overview
        </h1>

        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.1 }}
              className="rounded-2xl p-6 shadow-xl bg-[rgba(55,55,55,0.5)] backdrop-blur-md hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
            >
              {card.icon}
              <div className="mt-4 text-lg md:text-xl font-medium">
                {card.title}
              </div>
              <p className="text-3xl md:text-4xl font-bold mt-2">
                {card.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mt-20 text-center drop-shadow-md">
          “We don’t know if he can or can’t, but <span>SHE CAN!</span>”
        </h2>
      </div>

      {/* Footer */}
      <footer className="w-full mt-12 text-center text-sm text-white opacity-80">
        © 2025 SheCan. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;

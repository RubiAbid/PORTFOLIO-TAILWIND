"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Achievement {
  prefix?: string;
  metric: string;
  value: string;
  postfix?: string;
}

const achievementsList: Achievement[] = [
  { metric: "Projects", value: "6", postfix: "+" },
  { prefix: "~", metric: "Users", value: "200" },
  { metric: "Years", value: "1" },
];

const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.max(1, Math.ceil(value / 100)); // Calculate the increment step
    const interval = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 10); // Adjust the interval time as needed for smooth animation

    return () => clearInterval(interval);
  }, [value]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {count}
    </motion.span>
  );
};

const AchievementsSection: React.FC = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          const numericValue = parseInt(achievement.value.replace(",", ""), 10);

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumber value={numericValue} />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;

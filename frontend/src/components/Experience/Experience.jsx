import React from "react";
import "./Experience.css";

const Experience = () => {
  const achievements = [
    { value: "8+", label1: "years", label2: "Experience" },
    { value: "20+", label1: "completed", label2: "Projects" },
    { value: "5+", label1: "companies", label2: "Work" },
    { value: "10+", label1: "skills", label2: "Mastered" },
    { value: "15+", label1: "clients", label2: "Satisfied" },
    { value: "7+", label1: "awards", label2: "Won" },
    { value: "100+", label1: "hours", label2: "Training" },
  ];

  return (
    <div className="experience" id="experience">
      {achievements.map((achievement, index) => (
        <div key={index} className="achievement">
          <div className="circle">{achievement.value}</div>
          <span className="label1">{achievement.label1}</span>
          <span className="label2">{achievement.label2}</span>
        </div>
      ))}
    </div>
  );
};

export default Experience;

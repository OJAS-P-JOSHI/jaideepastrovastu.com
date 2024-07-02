import React from "react";
import "./Experience.css";

const Experience = () => {
  const achievements = [
    { value: "20+", label1: "years", label2: "Experience" },
    { value: "100+", label1: "Happy", label2: "Clients" },  // Rounded value
    { value: "15+", label1: "Vastu Sites", label2: "Visited" },
    { value: "3+", label1: "Languages", label2: "Known" },
    { value: "100+", label1: "hours", label2: "Training" }, // Kept "hours"
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

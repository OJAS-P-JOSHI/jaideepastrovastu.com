import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
import { motion } from "framer-motion";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = { duration: 1, type: "spring" };

  return (
    <div className="experience" id='experience'>
      {[
        { value: "8+", label1: "years", label2: "Experience" },
        { value: "20+", label1: "completed", label2: "Projects" },
        { value: "5+", label1: "companies", label2: "Work" },
        { value: "More", label1: "", label2: "Info" }
      ].map((achievement, index) => (
        <motion.div
          key={index}
          className="achievement"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={transition}
        >
          <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>{achievement.value}</div>
          <span style={{ color: darkMode ? 'white' : '' }}>{achievement.label1}</span>
          <span>{achievement.label2}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;

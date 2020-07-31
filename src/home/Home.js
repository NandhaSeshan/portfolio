import React from "react";
import "./Home.css";
import SplitText from "react-pose-text";

const charPoses = {
  hoverable: true,
  exit: { y: 50, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: ({ charInWordIndex }) => ({
      type: "spring",
      delay: charInWordIndex * 30,
      stiffness: 500 + charInWordIndex * 150,
      damping: 10 - charInWordIndex * 1,
    }),
  },
  init: {
    scale: 1,
  },
  hover: {
    scale: 2,
  },
};

export const Home = () => (
  <div className="home">
    <div className="passage_container">
      <SplitText
        id="page_message"
        initialPose="exit"
        pose="enter"
        charPoses={charPoses}
      >
        Hi. I’m Nandhu, nice to meet you. Please take a look around!
      </SplitText>
    </div>
  </div>
);

export default Home;

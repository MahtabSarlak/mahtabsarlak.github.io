import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "I am a Computer Vision Research Assistant",
          "I am a Software Engineer",
          "I am an M.S. Student in Computer Science (Artificial Intelligence)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

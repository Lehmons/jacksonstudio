import React, { useState, useRef, useEffect } from "react";
import RowStyles from "./Row.styled";
import Shape from "../Shape";
import getRandom from "../../lib/Utils/getRandom";
import { animate, motion, useAnimationControls } from "framer-motion";

const colors = {
  green: "#02BB00",
  red: "#FF0000",
  blue: "#0064FF",
  yellow: "#FFE700",
};

const colorKeys = Object.keys(colors);
const shapes = ["triangle", "circle", "square", "cross"];

export default function Row({ size, delay }) {
  const [loop, setLoop] = useState([]);
  const controls = useAnimationControls();
  const currentDir = useRef();
  const timer = useRef();

  const setup = () => {
    const newShapes = [];

    [...Array(size * 3).keys()].map((i) => {
      const indexShape = getRandom(0, shapes.length - 1);
      const indexColor = getRandom(0, colorKeys.length - 1);

      const colorKey = colorKeys[indexColor];

      newShapes.push({
        type: shapes[indexShape],
        color: colors[colorKey],
      });
    });

    setLoop(newShapes);
  };

  const restart = () => {
    clearTimeout(timer.current);
    runAnimation();
  };

  const animateCenter = () => {
    controls.start({
      x: "-50%",
      transition: {
        type: "tween",
        duration: 0.8,
        delay: delay,
        ease: [0.42, 0, 0.58, 1],
        onAnimationComplete: () => {
          alert("animation finished");
          restart();
        },
      },
    });
    currentDir.current = "center";
  };

  const animateLeft = () => {
    controls.start({
      x: "0%",
      transition: {
        type: "tween",
        duration: 0.8,
        delay: delay,
        ease: [0.42, 0, 0.58, 1],
      },
      onAnimationComplete: () => {
        alert("animation finished");
        restart();
      },
    });
    currentDir.current = "left";
  };

  const animateRight = () => {
    controls.start({
      x: "-100%",
      transition: {
        type: "tween",
        duration: 0.8,
        delay: delay,
        ease: [0.42, 0, 0.58, 1],
      },
      onAnimationComplete: () => {
        alert("animation finished");
        restart();
      },
    });
    currentDir.current = "right";
  };

  const runAnimation = () => {
    if (currentDir.current !== "center") {
      animateCenter();
      return;
    }

    const directions = ["left", "right"];
    const direction = directions[Math.floor(Math.random() * directions.length)];

    if (direction === "right") {
      animateRight();
      return;
    }

    animateLeft();
  };

  const reset = () => {
    controls.set({ x: "-50%" });
    currentDir.current = "center";
  };

  useEffect(() => {
    setup();
    reset();
    runAnimation();
  }, []);

  return (
    <RowStyles
      className={`is-${size}`}
      animate={controls}
      onAnimationComplete={restart}
    >
      {loop.map((item, i) => (
        <Shape key={i} type={item?.type} color={item?.color} />
      ))}
    </RowStyles>
  );
}

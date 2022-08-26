import React, { useState, useRef, useEffect } from "react";
import ShapeStyles from "./Shape.styled";
import Circle from "./circle.svg";
import Square from "./square.svg";
import Triangle from "./triangle.svg";
import Cross from "./cross.svg";

export default function Shape({ type, color }) {
  return (
    <ShapeStyles className="shape">
      {type === "circle" && <Circle fill={color} />}
      {type === "square" && <Square fill={color} />}
      {type === "triangle" && <Triangle fill={color} />}
      {type === "cross" && <Cross fill={color} />}
    </ShapeStyles>
  );
}

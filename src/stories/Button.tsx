"use client";
import { useState } from "react";

interface ButtonProps {
  radius?: number;
  backgroundColor?: string;
  emoji: "clap" | "heart" | "star";
}

const emojiStyles = {
  clap: "👏",
  heart: "💔",
  star: "🌟",
};

export const Button = ({ radius = 50, emoji = "clap" }: ButtonProps) => {
  const [color, setColor] = useState<string>("");

  function changeColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  }

  const ButtonClass = "text-5xl m-4 p-8 shadow-xl bg-gray-400 ";
  return (
    <button
      className={ButtonClass}
      style={{ borderRadius: radius, backgroundColor: "#" + `${color}`}}
      onClick={changeColor}
    >
      {emojiStyles[emoji]}
    </button>
  );
};

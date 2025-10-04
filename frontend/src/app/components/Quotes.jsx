"use client";

import { useState, useEffect } from "react";

const quoteList = [
  "Keep going, you're doing great!",
  "Breathe in, breathe out, and relax.",
  "Every day is a fresh start.",
  "Your feelings are valid.",
  "Small steps lead to big changes.",
  "You are stronger than you think.",
  "Take a deep breath and smile."
];

export default function Quotes() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quoteList[Math.floor(Math.random() * quoteList.length)]);
  }, []);

  return (
    <div className="text-center max-w-lg">
      <h1 className="text-3xl font-bold mb-6">Daily Inspiration</h1>
      <p className="text-xl italic leading-relaxed">{quote}</p>
    </div>
  );
}

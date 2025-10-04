"use client";
import { useState, useEffect, useRef } from "react";
import GaugeChart from "react-gauge-chart";
import { db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

// The component now accepts an `onSubmitted` function as a prop
export default function StressMeter({ userId, onSubmitted }) {
  const [level, setLevel] = useState(0.5);
  const [displayLevel, setDisplayLevel] = useState(0.5);
  const [saving, setSaving] = useState(false);
  const [emoji, setEmoji] = useState("😐");
  const animationRef = useRef();

  // Load previous stress level from Firestore
  useEffect(() => {
    const loadStress = async () => {
      if (!userId) return;
      try {
        const docRef = doc(db, "stressLevels", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const savedLevel = docSnap.data().stressLevel / 10; // scale 0-1
          setLevel(savedLevel);
          setDisplayLevel(savedLevel);
        }
      } catch (err) {
        console.error("Error loading stress level:", err);
      }
    };
    loadStress();
  }, [userId]);

  // Animate needle smoothly to the target level
  useEffect(() => {
    const animate = () => {
      setDisplayLevel((prev) => {
        const diff = level - prev;
        if (Math.abs(diff) < 0.001) return level; // Stop when close enough
        return prev + diff * 0.1;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [level]);
  
  // Update emoji based on the current animated level
  useEffect(() => {
    if (displayLevel < 0.33) setEmoji("😊");
    else if (displayLevel < 0.66) setEmoji("😐");
    else setEmoji("😢");
  }, [displayLevel]);

  // Change background color based on stress
  const bgColor = () => {
    if (displayLevel < 0.33) return "bg-green-100";
    if (displayLevel < 0.66) return "bg-yellow-100";
    return "bg-red-100";
  };

  // Save stress level to Firestore and notify the parent component
  const handleSave = async () => {
    if (!userId) return;
    try {
      setSaving(true);
      const stressLevel = Math.round(level * 10);
      const docRef = doc(db, "stressLevels", userId);
      await setDoc(docRef, { stressLevel, updatedAt: new Date() });
      
      // Call the onSubmitted function passed from the dashboard
      if (onSubmitted) {
        onSubmitted();
      }

    } catch (err) {
      console.error("Error saving stress level:", err);
      alert("Error saving stress level ❌");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center w-full max-w-md rounded-xl p-8 space-y-6 transition-colors duration-500 ${bgColor()}`}>
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        Daily Stress Meter
      </h1>
      <div className="text-6xl animate-bounce">{emoji}</div>
      <GaugeChart
        id="animated-gauge"
        nrOfLevels={20}
        colors={["#5BE12C", "#F5CD19", "#EA4228"]} // Green, Yellow, Red
        percent={displayLevel}
        arcPadding={0.02}
        needleColor="#333333"
        needleBaseColor="#333333"
        animate={false} // We handle animation manually for a smoother feel
        textColor="#000"
        formatTextValue={() => `${Math.round(displayLevel * 10)} / 10`}
      />
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={level}
        onChange={(e) => setLevel(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-300 rounded-lg accent-indigo-600"
      />
      <p className="text-lg font-semibold">
        Selected Level: {Math.round(level * 10)} / 10
      </p>
      <button
        onClick={handleSave}
        disabled={saving}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg disabled:opacity-50 transition-transform transform hover:scale-105"
      >
        {saving ? "Saving..." : "Submit Stress Level"}
      </button>
    </div>
  );
}


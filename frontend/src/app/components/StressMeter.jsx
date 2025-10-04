"use client";
import { useState, useEffect, useRef } from "react";
import GaugeChart from "react-gauge-chart";
import { db } from "@/lib/firebase";
import { doc, setDoc, addDoc, getDoc, collection } from "firebase/firestore";

// This is the merged component. It takes `userId` and `onSubmitted` as props
// to work with your new dashboard flow.
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

  // Animate needle smoothly
  useEffect(() => {
    const animate = () => {
      setDisplayLevel((prev) => {
        const diff = level - prev;
        if (Math.abs(diff) < 0.001) return level;
        return prev + diff * 0.1;
      });
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [level]);

  // Update emoji dynamically
  useEffect(() => {
    if (displayLevel < 0.33) setEmoji("😊");
    else if (displayLevel < 0.66) setEmoji("😐");
    else setEmoji("😢");
  }, [displayLevel]);

  // Dynamic background color
  const bgColor = () => {
    if (displayLevel < 0.33) return "bg-green-100";
    if (displayLevel < 0.66) return "bg-yellow-100";
    return "bg-red-100";
  };

  // *** MERGED SAVE FUNCTION ***
  // This combines the best parts of both your and your friend's code.
  const handleSave = async () => {
    if (!userId) {
      alert("User not found! Please login again.");
      return;
    }
    try {
      setSaving(true);
      const stressLevel = Math.round(level * 10); // scale 0-10

      // 1. From your friend's code: Save the current stress level
      await setDoc(doc(db, "stressLevels", userId), {
        stressLevel,
        updatedAt: new Date(),
      });

      // 2. From your friend's code: Save a historical entry for analytics
      await addDoc(collection(db, "moodEntries"), {
        uid: userId,
        stressLevel,
        timestamp: new Date(),
      });

      // 3. From your code: Notify the dashboard that the submission is complete
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
        colors={["#5BE12C", "#F5CD19", "#EA4228"]}
        percent={displayLevel}
        arcPadding={0.02}
        needleColor="#333333"
        needleBaseColor="#333333"
        animate={false}
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


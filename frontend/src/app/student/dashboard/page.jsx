"use client";

import AnimatedStressMeter from "../../components/StressMeter";
import Quotes from "../../components/Quotes";

export default function StressMeterPage() {
  const userId = "demo_user_123"; // Replace with Firebase UID or email

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Quotes */}
      <div className="lg:w-1/2 bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center p-8 text-white">
        <Quotes />
      </div>

      {/* Right Side - Animated Stress Meter */}
      <div className="lg:w-1/2 bg-gray-100 flex items-center justify-center p-8">
        <AnimatedStressMeter userId={userId} />
      </div>
    </div>
  );
}

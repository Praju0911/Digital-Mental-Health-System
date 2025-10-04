"use client";
import { useState } from 'react';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (email.includes('student')) {
        router.push('/student/dashboard');
      } else if (email.includes('professional')) {
        router.push('/professional/dashboard');
      } else if (email.includes('admin')) {
        router.push('/admin/dashboard');
      } else {
         setError("Could not determine user role from email.");
      }
    } catch (err) {
      // More specific error messages
      if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        setError('Invalid email or password. Please try again.');
      } else {
        setError('An error occurred during login.');
      }
      console.error("Login Error:", err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 lg:grid lg:grid-cols-2">
      {/* Left side - Welcome message */}
      <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-12">
        <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mb-6">
            {/* Simple SVG icon for mental health / support */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-center">Your Safe Space</h1>
        <p className="text-lg text-center text-indigo-100">
          Confidential and professional mental health support, right when you need it.
        </p>
      </div>

      {/* Right side - Login Form */}
      <div className="flex items-center justify-center p-6 lg:p-12">
        <div className="p-8 bg-white rounded-xl shadow-lg w-full max-w-sm">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 mb-8">Please sign in to continue.</p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
            >
              Sign In
            </button>
            {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}


"use client";
import { useState, useEffect } from 'react';
import { auth, db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Import signOut
import { useRouter } from 'next/navigation';
import StressMeter from '@/app/components/StressMeter';

export default function StudentDashboard() {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('');
  const [userName, setUserName] = useState('Student');
  const [stressSubmitted, setStressSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const nameFromEmail = currentUser.email.split('@')[0];
        setUserName(nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1));
      } else {
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleRequestChat = async () => {
    if (!user) return;
    setStatus('Checking for existing requests...');
    const q = query(collection(db, "chatQueue"), where("studentId", "==", user.uid));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
        setStatus('You already have a pending chat request.');
        const existingSessionId = querySnapshot.docs[0].data().sessionId;
        router.push(`/student/chat/${existingSessionId}`);
        return;
    }

    setStatus('Sending request...');
    const sessionRef = await addDoc(collection(db, "chatSessions"), {
        studentId: user.uid,
        createdAt: serverTimestamp(),
        status: 'pending'
    });
    await addDoc(collection(db, "chatQueue"), {
        studentId: user.uid,
        studentEmail: user.email,
        sessionId: sessionRef.id,
        requestedAt: serverTimestamp()
    });
    setStatus('Chat request sent! Waiting for a professional.');
    router.push(`/student/chat/${sessionRef.id}`);
  };
  
  // --- NEW LOGOUT FUNCTION ---
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!user) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto py-6 px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Welcome, {userName}!</h1>
            <p className="text-gray-500 mt-1">
              {stressSubmitted ? "Thank you for checking in." : "Let's start with your daily check-in."}
            </p>
          </div>
          {/* --- NEW LOGOUT BUTTON --- */}
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="flex items-center justify-center py-8 px-4">
        {!stressSubmitted ? (
          <StressMeter userId={user.uid} onSubmitted={() => setStressSubmitted(true)} />
        ) : (
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center max-w-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">Thank You for Your Submission!</h2>
              <p className="text-gray-600 mb-6">Your well-being is important. If you need to talk, support is just a click away.</p>
              <button 
                onClick={handleRequestChat} 
                className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
              >
                Speak to a Professional
              </button>
              {status && <p className="mt-4 text-center text-sm text-gray-500">{status}</p>}
          </div>
        )}
      </main>
    </div>
  );
}


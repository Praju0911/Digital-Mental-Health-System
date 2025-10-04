"use client";
import { useState, useEffect } from 'react';
import { auth, db } from '@/lib/firebase';
import { collection, onSnapshot, query, orderBy, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ProfessionalDashboard() {
  const [user, setUser] = useState(null);
  const [chatQueue, setChatQueue] = useState([]);
  const [userName, setUserName] = useState('Professional');
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

  // Listen for real-time updates on the chat queue
  useEffect(() => {
    const q = query(collection(db, "chatQueue"), orderBy("requestedAt", "asc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const queue = [];
      querySnapshot.forEach((doc) => {
        queue.push({ id: doc.id, ...doc.data() });
      });
      setChatQueue(queue);
    });
    return () => unsubscribe();
  }, []);

  const handleAcceptChat = async (request) => {
    if (!user) return;
    
    // 1. Update the session document to active and add professional's ID
    const sessionRef = doc(db, 'chatSessions', request.sessionId);
    await updateDoc(sessionRef, {
        professionalId: user.uid,
        status: 'active'
    });
    
    // 2. Remove the request from the queue collection
    await deleteDoc(doc(db, 'chatQueue', request.id));
    
    // 3. Redirect to the dedicated professional chat room
    router.push(`/professional/chat/${request.sessionId}`);
  };

  if (!user) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="min-h-screen bg-indigo-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto py-6 px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Welcome, {userName}</h1>
            <p className="text-gray-500 mt-1">Students are waiting for your support.</p>
          </div>
          <Link href="/login" onClick={() => auth.signOut()} className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
            Logout
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Student Chat Queue ({chatQueue.length})</h2>
          <div className="space-y-4">
            {chatQueue.length > 0 ? (
              chatQueue.map((request) => (
                <div key={request.id} className="p-4 border rounded-lg flex justify-between items-center bg-gray-50">
                  <div>
                    <p className="font-semibold text-gray-700">Student Email: {request.studentEmail}</p>
                    <p className="text-sm text-gray-500">
                      Requested at: {new Date(request.requestedAt?.toDate()).toLocaleTimeString()}
                    </p>
                  </div>
                  <button 
                    onClick={() => handleAcceptChat(request)} 
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105"
                  >
                    Accept Chat
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 py-8">The queue is currently empty. Well done!</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

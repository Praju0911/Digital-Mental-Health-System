"use client";
import { useState, useEffect, useRef } from 'react';
import { auth, db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useParams, useRouter } from 'next/navigation';

export default function ProfessionalChatRoom() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const params = useParams();
  const router = useRouter();
  const sessionId = params.sessionId;
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, [router]);

  // Listen for real-time messages for this session
  useEffect(() => {
    if (!sessionId) return;
    const messagesRef = collection(db, 'chatSessions', sessionId, 'messages');
    const q = query(messagesRef, orderBy('timestamp'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push({ id: doc.id, ...doc.data() });
      });
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [sessionId]);

  // Auto-scroll to the bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '' || !user || !sessionId) return;

    const messagesRef = collection(db, 'chatSessions', sessionId, 'messages');
    await addDoc(messagesRef, {
      text: newMessage,
      senderId: user.uid,
      timestamp: serverTimestamp()
    });

    setNewMessage('');
  };

  const handleEndChat = async () => {
    if (!user || !sessionId) return;
    // Navigate back to the professional dashboard
    router.push('/professional/dashboard');
  };

  if (!user) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="flex flex-col h-screen bg-indigo-50">
        <header className="bg-indigo-600 text-white p-4 shadow-md flex justify-between items-center">
            <div>
                <h1 className="text-xl font-semibold">Professional Chat View</h1>
                <p className="text-sm">You are speaking with a student.</p>
            </div>
            <button 
              onClick={handleEndChat} 
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
                End Chat
            </button>
        </header>

        <main className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
                {messages.map(msg => (
                    <div key={msg.id} className={`flex ${msg.senderId === user.uid ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-3 rounded-xl max-w-xs lg:max-w-md ${msg.senderId === user.uid ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white text-gray-800 shadow-sm rounded-bl-none'}`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
        </main>

        <footer className="bg-white p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your response..."
                    className="flex-1 p-2 border rounded-l-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700">
                    Send
                </button>
            </form>
        </footer>
    </div>
  );
}

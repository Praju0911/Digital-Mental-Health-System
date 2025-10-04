"use client";
import { useState, useEffect, useRef } from 'react';
import { auth, db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot, getDoc, doc, deleteDoc, where, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useParams, useRouter } from 'next/navigation';

export default function ChatRoom() {
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

  useEffect(() => {
    if (!sessionId) return;
    const messagesRef = collection(db, 'chatSessions', sessionId, 'messages');
    const q = query(messagesRef, orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, [sessionId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '' || !user || !sessionId) return;

    const messageToSend = newMessage;
    setNewMessage(''); // Clear input immediately

    // 1. Save the message to Firestore
    const messagesRef = collection(db, 'chatSessions', sessionId, 'messages');
    await addDoc(messagesRef, {
      text: messageToSend,
      senderId: user.uid,
      timestamp: serverTimestamp()
    });

    // 2. Send the message for AI analysis in the background
    try {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const anonymousName = userDoc.exists() ? userDoc.data().anonymousName : 'AnonymousStudent';
      
      const apiUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL || 'http://localhost:8000';
      
      // Fire-and-forget this request. We don't need to wait for it.
      fetch(`${apiUrl}/api/analyze-message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageToSend,
          sessionId: sessionId,
          anonymousName: anonymousName,
          studentId: user.uid // Pass the student's real UID for backend lookup
        }),
      });
    } catch (error) {
      console.error("Failed to send message for analysis:", error);
    }
  };
  
  const handleEndChat = async () => {
    if (!user || !sessionId) return;
    try {
      // Clean up the queue if the session is still there
      const q = query(collection(db, "chatQueue"), where("sessionId", "==", sessionId));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const chatQueueDoc = querySnapshot.docs[0];
        await deleteDoc(doc(db, "chatQueue", chatQueueDoc.id));
      }
      // Redirect back to the safety of the dashboard
      router.push('/student/dashboard');
    } catch (error) {
      console.error("Error ending chat:", error);
      router.push('/student/dashboard'); // Still navigate away on error
    }
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex flex-col h-screen bg-gray-100">
        <header className="bg-white p-4 shadow-md flex justify-between items-center">
            <h1 className="text-xl font-semibold">Speaking with a Professional</h1>
            <button 
              onClick={handleEndChat} 
              className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
                End Chat
            </button>
        </header>
        <main className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
                {messages.map(msg => {
                    const isSender = msg.senderId === user.uid;
                    return (
                        <div key={msg.id} className={`flex ${isSender ? 'justify-end' : 'justify-start'}`}>
                            <div className={`p-3 rounded-xl max-w-xs lg:max-w-md ${isSender ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                                {msg.text}
                            </div>
                        </div>
                    );
                })}
                <div ref={messagesEndRef} />
            </div>
        </main>
        <footer className="bg-white p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border rounded-l-lg focus:ring-blue-500 focus:border-blue-500"
                />
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600">
                    Send
                </button>
            </form>
        </footer>
    </div>
  );
}


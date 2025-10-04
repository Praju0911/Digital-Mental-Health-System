import express from "express";
import cors from "cors";
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Init Firebase Admin SDK
initializeApp({
  credential: applicationDefault(),
});
const db = getFirestore();

const app = express();
app.use(cors());
app.use(express.json());

// Save stress entry
app.post("/api/stress", async (req, res) => {
  try {
    const { userId, stressLevel } = req.body;
    const today = new Date().toISOString().split("T")[0];
    const docId = `${userId}_${today}`;

    await db.collection("stress_logs").doc(docId).set({
      user_id: userId,
      date: today,
      stress_level: stressLevel,
      timestamp: Date.now(),
    });

    res.json({ success: true, stressLevel });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error saving stress level" });
  }
});

// Fetch today’s stress log
app.get("/api/stress/:userId", async (req, res) => {
  const { userId } = req.params;
  const today = new Date().toISOString().split("T")[0];
  const docId = `${userId}_${today}`;

  const doc = await db.collection("stress_logs").doc(docId).get();
  if (doc.exists) {
    res.json({ logged: true, data: doc.data() });
  } else {
    res.json({ logged: false });
  }
});

app.listen(4000, () => console.log("Backend running on http://localhost:4000"));

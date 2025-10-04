require('dotenv').config();
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();
const auth = admin.auth();
const app = express();
app.use(cors());
app.use(express.json());

// --- UPDATED: AI Keyword Analysis Endpoint ---
app.post('/api/analyze-message', async (req, res) => {
  const { message, sessionId, anonymousName, studentId } = req.body;
  if (!message || !sessionId || !anonymousName || !studentId) {
    return res.status(400).send('Missing required message data');
  }

  const criticalKeywords = [
    'suicide', 'kill myself', 'hopeless', 'end it all', 
    'can\'t go on', 'no reason to live', 'want to die'
  ];
  const messageText = message.toLowerCase();

  const foundKeyword = criticalKeywords.find(keyword => messageText.includes(keyword));

  if (foundKeyword) {
    try {
      // --- NEW LOGIC: Fetch the user's real email ---
      const userRecord = await auth.getUser(studentId);
      const studentEmail = userRecord.email;

      // Create the alert and include the student's email
      await db.collection('alerts').add({
        sessionId: sessionId,
        anonymousName: anonymousName,
        studentEmail: studentEmail, // <-- ADDED EMAIL
        flaggedMessage: message,
        keyword: foundKeyword,
        timestamp: new Date(),
        status: 'new'
      });
      // This is the new, correct success message
      console.log(`Critical alert for ${studentEmail} due to keyword: "${foundKeyword}"`);
      return res.status(200).json({ alertCreated: true });
    } catch (error) {
      console.error('Error creating alert:', error);
      return res.status(500).json({ error: 'Failed to create alert' });
    }
  }

  res.status(200).json({ alertCreated: false });
});

// --- Other endpoints remain the same ---
app.get('/api/get-alerts', async (req, res) => {
    try {
        const snapshot = await db.collection('alerts').orderBy('timestamp', 'desc').get();
        const alerts = snapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                timestamp: data.timestamp.toDate()
            }
        });
        res.status(200).json(alerts);
    } catch (error) {
        console.error('Error fetching alerts:', error);
        res.status(500).send('Error fetching alerts');
    }
});
app.get('/api/admin-data', async (req, res) => {
  try {
    const listUsersResult = await auth.listUsers(1000);
    const stressLevelsSnapshot = await db.collection('stressLevels').get();
    const stressDataMap = new Map();
    stressLevelsSnapshot.forEach(doc => {
      stressDataMap.set(doc.id, doc.data());
    });
    const usersData = listUsersResult.users.map(userRecord => {
      const stressInfo = stressDataMap.get(userRecord.uid);
      return {
        uid: userRecord.uid,
        email: userRecord.email,
        stressLevel: stressInfo ? stressInfo.stressLevel : "N/A",
        updatedAt: stressInfo ? stressInfo.updatedAt.toDate() : null,
      };
    });
    res.status(200).json(usersData);
  } catch (error) {
    console.error('Error fetching admin data:', error);
    res.status(500).json({ error: 'Failed to fetch admin data' });
  }
});
app.get('/api/user-history', async (req, res) => {
    const { uid } = req.query;
    if (!uid) return res.status(400).send('User UID is required');
    try {
        const snapshot = await db.collection('moodEntries').where('uid', '==', uid).orderBy('timestamp', 'desc').get();
        const history = snapshot.docs.map(doc => {
            const data = doc.data();
            return { ...data, timestamp: data.timestamp.toDate() };
        });
        res.status(200).json(history);
    } catch (error) {
        console.error('Error fetching user history:', error);
        res.status(500).send('Error fetching user history');
    }
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


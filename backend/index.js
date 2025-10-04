require('dotenv').config();
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

// Initialize Firebase Admin
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

// --- POWERFUL ENDPOINT FOR THE ADMIN DASHBOARD ---
app.get('/api/admin-data', async (req, res) => {
  try {
    const listUsersResult = await auth.listUsers(1000); // Get all auth users
    const stressLevelsSnapshot = await db.collection('stressLevels').get(); // Get all latest stress levels

    // Create a map for quick lookup of stress levels by user ID
    const stressDataMap = new Map();
    stressLevelsSnapshot.forEach(doc => {
      stressDataMap.set(doc.id, doc.data());
    });

    // Combine auth user data with their latest stress data
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

// --- ENDPOINT FOR FETCHING A SINGLE USER'S HISTORY ---
app.get('/api/user-history', async (req, res) => {
    const { uid } = req.query;
    if (!uid) {
        return res.status(400).send('User UID is required');
    }
    try {
        // Fetch historical data from the 'moodEntries' collection
        const snapshot = await db.collection('moodEntries').where('uid', '==', uid).orderBy('timestamp', 'desc').get();
        const history = snapshot.docs.map(doc => {
            const data = doc.data();
            return {
                ...data,
                timestamp: data.timestamp.toDate() // Convert Firestore Timestamp to JS Date
            }
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


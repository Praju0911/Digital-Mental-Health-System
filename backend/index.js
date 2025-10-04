require('dotenv').config();
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const auth = admin.auth();
const app = express();
app.use(cors());
app.use(express.json());

// Get all stress entries with username
app.get('/api/stress-data', async (req, res) => {
  try {
    const snapshot = await db.collection('stressEntries').get();

    const data = await Promise.all(snapshot.docs.map(async (doc) => {
      const entry = doc.data();
      try {
        const user = await auth.getUser(entry.uid);
        return {
          username: user.displayName || user.email,
          stressLevel: entry.stressLevel,
          date: entry.date
        };
      } catch (error) {
        return {
          username: 'Unknown User',
          stressLevel: entry.stressLevel,
          date: entry.date
        };
      }
    }));

    res.status(200).json(data);
  } catch (error) {
    res.status(500).send('Error fetching stress data: ' + error);
  }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

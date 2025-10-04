import admin from "firebase-admin";
import path from "path";

if (!admin.apps.length) {
const serviceAccount = path.resolve("./src/lib/key.json");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

export { admin, db };

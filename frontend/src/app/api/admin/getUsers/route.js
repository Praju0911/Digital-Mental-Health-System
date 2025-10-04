import { admin, db } from "@/lib/firebaseAdmin";

export async function GET() {
  try {
    const listUsersResult = await admin.auth().listUsers();
    const users = listUsersResult.users.map(u => ({ uid: u.uid, email: u.email }));

    const snapshot = await db.collection("stressLevels").get();
    const stressData = snapshot.docs.map(doc => ({
      uid: doc.id,
      stressLevel: doc.data().stressLevel,
      updatedAt: doc.data().updatedAt?.toDate
        ? doc.data().updatedAt.toDate()
        : doc.data().updatedAt,
    }));

    const mergedData = users.map(u => {
      const stressEntry = stressData.find(s => s.uid === u.uid);
      return {
        email: u.email,
        uid: u.uid,
        stressLevel: stressEntry ? stressEntry.stressLevel : "N/A",
        updatedAt: stressEntry ? stressEntry.updatedAt : null,
      };
    });

    return new Response(JSON.stringify(mergedData), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch users data" }), { status: 500 });
  }
}

module.exports = [
"[project]/.next-internal/server/app/api/admin/getUsers/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/lib/firebaseAdmin.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
(()=>{
    const e = new Error("Cannot find module 'firebase-admin'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
// Only initialize once
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            type: process.env.FIREBASE_TYPE,
            project_id: process.env.FIREBASE_PROJECT_ID,
            private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
            private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
            client_email: process.env.FIREBASE_CLIENT_EMAIL,
            client_id: process.env.FIREBASE_CLIENT_ID,
            auth_uri: process.env.FIREBASE_AUTH_URI,
            token_uri: process.env.FIREBASE_TOKEN_URI,
            auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
            client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
        })
    });
}
const db = admin.firestore();
;
}),
"[project]/src/lib/firebaseAdmin.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebaseAdmin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebaseAdmin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/firebaseAdmin.js [app-route] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module 'firebase-admin'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
}),
"[project]/src/app/api/admin/getUsers/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebaseAdmin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/firebaseAdmin.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebaseAdmin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebaseAdmin.js [app-route] (ecmascript)");
;
async function GET() {
    try {
        const listUsersResult = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebaseAdmin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["admin"].auth().listUsers();
        const users = listUsersResult.users.map((u)=>({
                uid: u.uid,
                email: u.email
            }));
        const snapshot = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebaseAdmin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"].collection("stressLevels").get();
        const stressData = snapshot.docs.map((doc)=>({
                uid: doc.id,
                stressLevel: doc.data().stressLevel,
                updatedAt: doc.data().updatedAt?.toDate ? doc.data().updatedAt.toDate() : doc.data().updatedAt
            }));
        const mergedData = users.map((u)=>{
            const stressEntry = stressData.find((s)=>s.uid === u.uid);
            return {
                email: u.email,
                uid: u.uid,
                stressLevel: stressEntry ? stressEntry.stressLevel : "N/A",
                updatedAt: stressEntry ? stressEntry.updatedAt : null
            };
        });
        return new Response(JSON.stringify(mergedData), {
            status: 200
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({
            error: "Failed to fetch users data"
        }), {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__86728bcd._.js.map
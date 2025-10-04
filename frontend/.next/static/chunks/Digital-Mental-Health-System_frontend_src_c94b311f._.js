(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Digital-Mental-Health-System/frontend/src/lib/firebase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "app",
    ()=>app,
    "auth",
    ()=>auth,
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
const firebaseConfig = {
    apiKey: "AIzaSyAE-k8r8F4II_5rBfTvh6BNzQDku7KE_Gg",
    authDomain: "mental-health-87a9d.firebaseapp.com",
    projectId: "mental-health-87a9d",
    storageBucket: "mental-health-87a9d.firebasestorage.app",
    messagingSenderId: "500649525001",
    appId: "1:500649525001:web:60ff34cd3656aebcbe9dd8",
    measurementId: "G-6EVCYEMBVS"
};
let app;
if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length) {
    app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
} else {
    app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])()[0];
}
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Digital-Mental-Health-System/frontend/src/app/admin/dashboard/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/src/lib/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AdminDashboard() {
    _s();
    const [usersData, setUsersData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDashboard.useEffect": ()=>{
            const fetchStressData = {
                "AdminDashboard.useEffect.fetchStressData": async ()=>{
                    try {
                        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "stressLevels"));
                        const data = snapshot.docs.map({
                            "AdminDashboard.useEffect.fetchStressData.data": (doc)=>{
                                var _doc_data_updatedAt;
                                return {
                                    uid: doc.id,
                                    stressLevel: doc.data().stressLevel,
                                    updatedAt: ((_doc_data_updatedAt = doc.data().updatedAt) === null || _doc_data_updatedAt === void 0 ? void 0 : _doc_data_updatedAt.toDate) ? doc.data().updatedAt.toDate() : doc.data().updatedAt
                                };
                            }
                        }["AdminDashboard.useEffect.fetchStressData.data"]);
                        setUsersData(data);
                    } catch (err) {
                        console.error("Error fetching stress data:", err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["AdminDashboard.useEffect.fetchStressData"];
            fetchStressData();
        }
    }["AdminDashboard.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-8 bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Admin Dashboard - Student Stress Levels"
            }, void 0, false, {
                fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/admin/dashboard/page.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/admin/dashboard/page.jsx",
                lineNumber: 37,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full bg-white shadow-md rounded-lg overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-indigo-600 text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-3 px-6 text-left",
                                        children: "Student UID"
                                    }, void 0, false, {
                                        fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/admin/dashboard/page.jsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-3 px-6 text-left",
                                        children: "Stress Level"
                                    }, void 0, false, {
                                        fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/admin/dashboard/page.jsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-3 px-6 text-left",
                                        children: "Last Updated"
                                    }, void 0, false, {
                                        fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/admin/dashboard/page.jsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/admin/dashboard/page.jsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/admin/dashboard/page.jsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: usersData.map((user)=>{
                                var _user_updatedAt;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-3 px-6",
                                            children: user.uid
                                        }, void 0, false, {
                                            fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/admin/dashboard/page.jsx",
                                            lineNumber: 51,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-3 px-6",
                                            children: [
                                                user.stressLevel,
                                                " / 10"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/admin/dashboard/page.jsx",
                                            lineNumber: 52,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-3 px-6",
                                            children: (_user_updatedAt = user.updatedAt) === null || _user_updatedAt === void 0 ? void 0 : _user_updatedAt.toLocaleString()
                                        }, void 0, false, {
                                            fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/admin/dashboard/page.jsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, user.uid, true, {
                                    fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/admin/dashboard/page.jsx",
                                    lineNumber: 50,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/admin/dashboard/page.jsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/admin/dashboard/page.jsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/admin/dashboard/page.jsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/admin/dashboard/page.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(AdminDashboard, "FGQnwNhWTBLSrsklyi211EEqu2E=");
_c = AdminDashboard;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Digital-Mental-Health-System_frontend_src_c94b311f._.js.map
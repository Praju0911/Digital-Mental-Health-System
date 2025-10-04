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
"[project]/Digital-Mental-Health-System/frontend/src/app/components/StressMeter.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StressMeter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$react$2d$gauge$2d$chart$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/react-gauge-chart/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/src/lib/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function StressMeter(param) {
    let { userId } = param;
    _s();
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.5); // target slider
    const [displayLevel, setDisplayLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.5); // animated needle
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [emoji, setEmoji] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("😐");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    // Load previous stress level from Firestore
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StressMeter.useEffect": ()=>{
            const loadStress = {
                "StressMeter.useEffect.loadStress": async ()=>{
                    try {
                        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "stressLevels", userId);
                        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
                        if (docSnap.exists()) {
                            const savedLevel = docSnap.data().stressLevel / 10; // scale 0-1
                            setLevel(savedLevel);
                            setDisplayLevel(savedLevel);
                        }
                    } catch (err) {
                        console.error("Error loading stress level:", err);
                    }
                }
            }["StressMeter.useEffect.loadStress"];
            loadStress();
        }
    }["StressMeter.useEffect"], [
        userId
    ]);
    // Animate needle smoothly
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StressMeter.useEffect": ()=>{
            const animate = {
                "StressMeter.useEffect.animate": ()=>{
                    setDisplayLevel({
                        "StressMeter.useEffect.animate": (prev)=>{
                            const diff = level - prev;
                            if (Math.abs(diff) < 0.001) return level;
                            return prev + diff * 0.1;
                        }
                    }["StressMeter.useEffect.animate"]);
                    animationRef.current = requestAnimationFrame(animate);
                }
            }["StressMeter.useEffect.animate"];
            animationRef.current = requestAnimationFrame(animate);
            return ({
                "StressMeter.useEffect": ()=>cancelAnimationFrame(animationRef.current)
            })["StressMeter.useEffect"];
        }
    }["StressMeter.useEffect"], [
        level
    ]);
    // Update emoji dynamically
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StressMeter.useEffect": ()=>{
            if (displayLevel < 0.33) setEmoji("😊");
            else if (displayLevel < 0.66) setEmoji("😐");
            else setEmoji("😢");
        }
    }["StressMeter.useEffect"], [
        displayLevel
    ]);
    // Dynamic background based on stress level
    const bgColor = ()=>{
        if (displayLevel < 0.33) return "bg-green-200";
        else if (displayLevel < 0.66) return "bg-yellow-200";
        else return "bg-red-200";
    };
    // Save stress level to Firestore
    const handleSave = async ()=>{
        try {
            setSaving(true);
            const stressLevel = Math.round(level * 10); // scale 0-10
            const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "stressLevels", userId);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(docRef, {
                stressLevel,
                updatedAt: new Date()
            });
            alert("Stress level saved successfully ✅");
            router.push("/student/dashboard");
        } catch (err) {
            console.error("Error saving stress level:", err);
            alert("Error saving stress level ❌");
        } finally{
            setSaving(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center w-full max-w-md rounded-xl p-8 space-y-6 transition-colors duration-500 ".concat(bgColor()),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-gray-800 text-center",
                children: "Daily Stress Meter"
            }, void 0, false, {
                fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/components/StressMeter.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-6xl animate-bounce",
                children: emoji
            }, void 0, false, {
                fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/components/StressMeter.jsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$react$2d$gauge$2d$chart$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "animated-gauge",
                nrOfLevels: 20,
                colors: [
                    "#00FF00",
                    "#33FF00",
                    "#66FF00",
                    "#99FF00",
                    "#CCFF00",
                    "#FFFF00",
                    "#FFCC00",
                    "#FF9900",
                    "#FF6600",
                    "#FF3300",
                    "#FF0000"
                ],
                percent: displayLevel,
                arcPadding: 0.02,
                needleColor: "#333333",
                needleBaseColor: "#333333",
                animate: false,
                textColor: "#000",
                formatTextValue: ()=>"".concat(Math.round(displayLevel * 10), " / 10")
            }, void 0, false, {
                fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/components/StressMeter.jsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: 0,
                max: 1,
                step: 0.01,
                value: level,
                onChange: (e)=>setLevel(parseFloat(e.target.value)),
                className: "w-full h-2 bg-gray-300 rounded-lg accent-indigo-600"
            }, void 0, false, {
                fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/components/StressMeter.jsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg font-semibold",
                children: [
                    "Selected Level: ",
                    Math.round(level * 10),
                    " / 10"
                ]
            }, void 0, true, {
                fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/components/StressMeter.jsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSave,
                disabled: saving,
                className: "w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg disabled:opacity-50 transition-transform transform hover:scale-105",
                children: saving ? "Saving..." : "Submit Stress Level"
            }, void 0, false, {
                fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/components/StressMeter.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/components/StressMeter.jsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(StressMeter, "6b/VazWAB1zcP3j6bomTSNmvBOk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = StressMeter;
var _c;
__turbopack_context__.k.register(_c, "StressMeter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Digital-Mental-Health-System/frontend/src/app/components/Quotes.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Quotes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const quoteList = [
    "Keep going, you're doing great!",
    "Breathe in, breathe out, and relax.",
    "Every day is a fresh start.",
    "Your feelings are valid.",
    "Small steps lead to big changes.",
    "You are stronger than you think.",
    "Take a deep breath and smile."
];
function Quotes() {
    _s();
    const [quote, setQuote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Quotes.useEffect": ()=>{
            setQuote(quoteList[Math.floor(Math.random() * quoteList.length)]);
        }
    }["Quotes.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center max-w-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Daily Inspiration"
            }, void 0, false, {
                fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/components/Quotes.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl italic leading-relaxed",
                children: quote
            }, void 0, false, {
                fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/components/Quotes.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/components/Quotes.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(Quotes, "5dMXsGVSJyMiqBXtvqhGbwvmLe8=");
_c = Quotes;
var _c;
__turbopack_context__.k.register(_c, "Quotes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Digital-Mental-Health-System/frontend/src/app/student/dashboard/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StressMeterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$src$2f$app$2f$components$2f$StressMeter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/src/app/components/StressMeter.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$src$2f$app$2f$components$2f$Quotes$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Digital-Mental-Health-System/frontend/src/app/components/Quotes.jsx [app-client] (ecmascript)");
"use client";
;
;
;
function StressMeterPage() {
    const userId = "demo_user_123"; // Replace with Firebase UID or email
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col lg:flex-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:w-1/2 bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center p-8 text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$src$2f$app$2f$components$2f$Quotes$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/student/dashboard/page.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/student/dashboard/page.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:w-1/2 bg-gray-100 flex items-center justify-center p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Digital$2d$Mental$2d$Health$2d$System$2f$frontend$2f$src$2f$app$2f$components$2f$StressMeter$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    userId: userId
                }, void 0, false, {
                    fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/student/dashboard/page.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/student/dashboard/page.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Digital-Mental-Health-System/frontend/src/app/student/dashboard/page.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = StressMeterPage;
var _c;
__turbopack_context__.k.register(_c, "StressMeterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Digital-Mental-Health-System_frontend_src_1989df93._.js.map
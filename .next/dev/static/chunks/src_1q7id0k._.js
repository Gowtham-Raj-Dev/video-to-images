(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ThemeToggle() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            const savedTheme = localStorage.getItem("theme") || "dark";
            setTheme(savedTheme);
        }
    }["ThemeToggle.useEffect"], []);
    const toggleTheme = ()=>{
        const nextTheme = theme === "light" ? "dark" : "light";
        setTheme(nextTheme);
        localStorage.setItem("theme", nextTheme);
        if (nextTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-toggle-wrapper",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "theme-toggle-text",
                onClick: toggleTheme,
                children: "Switch Theme"
            }, void 0, false, {
                fileName: "[project]/src/components/ThemeToggle.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "theme-toggle",
                onClick: toggleTheme,
                "aria-label": "Toggle theme",
                children: theme === "light" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 31,
                    columnNumber: 30
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/components/ThemeToggle.tsx",
                    lineNumber: 31,
                    columnNumber: 51
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ThemeToggle.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ThemeToggle.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "HKZhbbE1NL5O9VXEQueUHrvooII=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Header({ activeTab = "none" }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap nav desktop-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "logo-container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/",
                            className: "logo",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mark",
                                    children: "✦"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "logo-text",
                                    children: [
                                        "Gemini",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "logo-text-extra",
                                            children: "WatermarkRemover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 22,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "nav-links",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/image",
                                className: activeTab === "img" || activeTab === "multi-img" ? "active" : "",
                                children: "Image Tool"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/video",
                                className: activeTab === "vid" || activeTab === "multi-vid" ? "active" : "",
                                children: "Video Tool"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "nav-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap mobile-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-nav-top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                className: "mobile-logo",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mobile-mark",
                                        children: "✦"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mobile-logo-text-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mobile-logo-title",
                                                children: "Gemini"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 45,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mobile-logo-subtitle",
                                                children: "WatermarkRemover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 46,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mobile-nav-right",
                                style: {
                                    display: "flex",
                                    gap: "10px",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "mobile-menu-toggle",
                                        onClick: ()=>setIsOpen(!isOpen),
                                        "aria-label": "Toggle menu",
                                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 56,
                                            columnNumber: 25
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 56,
                                            columnNumber: 43
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-nav-dropdown",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dropdown-title",
                                children: "Select Tool"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/image",
                                className: `dropdown-item ${activeTab === "img" || activeTab === "multi-img" ? "active" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dropdown-item-icon img-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "3",
                                                    y: "3",
                                                    width: "18",
                                                    height: "18",
                                                    rx: "2",
                                                    ry: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 160
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "8.5",
                                                    cy: "8.5",
                                                    r: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 222
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "21 15 16 10 5 21"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 265
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dropdown-item-details",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "dropdown-item-title",
                                                children: "Image Watermark Remover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "dropdown-item-desc",
                                                children: "Remove watermarks from JPG, PNG, WebP"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/video",
                                className: `dropdown-item ${activeTab === "vid" || activeTab === "multi-vid" ? "active" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dropdown-item-icon vid-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "2",
                                                    y: "2",
                                                    width: "20",
                                                    height: "20",
                                                    rx: "2.18",
                                                    ry: "2.18"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 160
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "7",
                                                    y1: "2",
                                                    x2: "7",
                                                    y2: "22"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 228
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "17",
                                                    y1: "2",
                                                    x2: "17",
                                                    y2: "22"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 270
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "2",
                                                    y1: "12",
                                                    x2: "22",
                                                    y2: "12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 314
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "2",
                                                    y1: "7",
                                                    x2: "7",
                                                    y2: "7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 358
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "2",
                                                    y1: "17",
                                                    x2: "7",
                                                    y2: "17"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 399
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "17",
                                                    y1: "17",
                                                    x2: "22",
                                                    y2: "17"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 442
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "17",
                                                    y1: "7",
                                                    x2: "22",
                                                    y2: "7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 487
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "dropdown-item-details",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "dropdown-item-title",
                                                children: "Video Watermark Remover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "dropdown-item-desc",
                                                children: "Erase watermarks from MP4, WebM, MOV"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(Header, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "wrap foot",
            style: {
                alignItems: 'center'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "foot-links",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/image",
                                    children: "Image Tool"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 11,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/video",
                                    children: "Video Tool"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 12,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                color: 'var(--muted, #a1a1aa)',
                                fontSize: '13px',
                                maxWidth: '320px',
                                lineHeight: '1.5'
                            },
                            children: "We do not store your images or videos. All processing is done locally on your device, ensuring your data remains 100% private."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: 'center',
                        fontSize: '14px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '24px',
                                fontWeight: 600
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/privacypolicy",
                                    style: {
                                        color: 'var(--muted, #a1a1aa)',
                                        transition: 'color 0.2s'
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.color = 'var(--text, #f4f4f5)',
                                    onMouseLeave: (e)=>e.currentTarget.style.color = 'var(--muted, #a1a1aa)',
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/termsandconditions",
                                    style: {
                                        color: 'var(--muted, #a1a1aa)',
                                        transition: 'color 0.2s'
                                    },
                                    onMouseEnter: (e)=>e.currentTarget.style.color = 'var(--text, #f4f4f5)',
                                    onMouseLeave: (e)=>e.currentTarget.style.color = 'var(--muted, #a1a1aa)',
                                    children: "Terms & Conditions"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                color: 'var(--muted, #a1a1aa)',
                                fontFamily: 'monospace, "Courier New"',
                                fontSize: '13px'
                            },
                            children: "© 2026 codelove.in . All rights reserved."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontWeight: 600,
                                color: 'var(--text, #f4f4f5)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Developed with"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#ef4444',
                                        fontSize: '16px'
                                    },
                                    children: "❤️"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: '#3b82f6',
                                        letterSpacing: '-1px'
                                    },
                                    children: "<>"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "by"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://gowtham.codelovein/",
                                    style: {
                                        textDecoration: 'underline',
                                        textUnderlineOffset: '4px',
                                        color: 'var(--text, #f4f4f5)'
                                    },
                                    children: "Gowtham"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.mjs [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.mjs [app-client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Home() {
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("img");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Remove loading class if still present
            setTimeout({
                "Home.useEffect": ()=>{
                    document.body.classList.remove('loading');
                }
            }["Home.useEffect"], 100);
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "gwr-landing",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: css
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero",
                style: {
                    paddingBottom: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-badge",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "dot"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 26,
                                    columnNumber: 39
                                }, this),
                                " 100% local · No upload · No sign-up"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: [
                                "Free Gemini",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 26
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gradient-text",
                                    children: "Watermark Remover"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 27,
                                    columnNumber: 32
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "sub",
                            children: "Free online Gemini watermark cleaner for images, logos, and star overlays. No upload, no sign-up — 100% local, private processing."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-cta",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "btn btn-primary",
                                    href: "/image",
                                    children: "Remove watermarks now"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "btn btn-ghost",
                                    href: "#how",
                                    children: "Learn how it works"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "stats",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "check",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 37,
                                            columnNumber: 19
                                        }, this),
                                        " Runs in your browser — no upload"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "check",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 38,
                                            columnNumber: 19
                                        }, this),
                                        " ~1s per 1MP image"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "check",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 39,
                                            columnNumber: 19
                                        }, this),
                                        " Pixel-exact restoration"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tool-nav",
                            id: "tool",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/image",
                                    className: "tool-card img-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "icon-wrap",
                                            style: {
                                                width: '80px',
                                                height: '80px',
                                                borderRadius: '20px',
                                                background: 'rgba(66,133,244,0.12)',
                                                display: 'grid',
                                                placeItems: 'center',
                                                color: 'var(--brand)',
                                                marginBottom: '24px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "40",
                                                height: "40",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "3",
                                                        y: "3",
                                                        width: "18",
                                                        height: "18",
                                                        rx: "2",
                                                        ry: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 45,
                                                        columnNumber: 160
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "8.5",
                                                        cy: "8.5",
                                                        r: "1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 45,
                                                        columnNumber: 222
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "21 15 16 10 5 21"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 45,
                                                        columnNumber: 265
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '24px',
                                                fontWeight: 800,
                                                color: 'var(--text)',
                                                marginBottom: '12px'
                                            },
                                            children: "Image Remover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'var(--muted)',
                                                fontSize: '15px',
                                                lineHeight: 1.6,
                                                marginBottom: '24px'
                                            },
                                            children: "Clean watermarks, logos, and overlays from a single JPG, PNG, or WebP image. Ultra-fast and 100% private."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "btn btn-primary",
                                            style: {
                                                marginTop: 'auto',
                                                pointerEvents: 'none'
                                            },
                                            children: "Open Image Tool"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/multi-image",
                                    className: "tool-card img-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "icon-wrap",
                                            style: {
                                                width: '80px',
                                                height: '80px',
                                                borderRadius: '20px',
                                                background: 'rgba(66,133,244,0.12)',
                                                display: 'grid',
                                                placeItems: 'center',
                                                color: 'var(--brand)',
                                                marginBottom: '24px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "40",
                                                height: "40",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "3",
                                                        y: "3",
                                                        width: "18",
                                                        height: "18",
                                                        rx: "2",
                                                        ry: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 160
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M7 3v18"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 222
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M11 3v18"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 247
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M15 3v18"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 273
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '24px',
                                                fontWeight: 800,
                                                color: 'var(--text)',
                                                marginBottom: '12px'
                                            },
                                            children: "Multi Image Remover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'var(--muted)',
                                                fontSize: '15px',
                                                lineHeight: 1.6,
                                                marginBottom: '24px'
                                            },
                                            children: "Process dozens of images at once using parallel worker threads. Download all results sequentially."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "btn btn-primary",
                                            style: {
                                                marginTop: 'auto',
                                                pointerEvents: 'none'
                                            },
                                            children: "Open Multi Image Tool"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/video",
                                    className: "tool-card vid-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "icon-wrap",
                                            style: {
                                                width: '80px',
                                                height: '80px',
                                                borderRadius: '20px',
                                                background: 'rgba(155,114,203,0.12)',
                                                display: 'grid',
                                                placeItems: 'center',
                                                color: 'var(--brand-2)',
                                                marginBottom: '24px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "40",
                                                height: "40",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "2",
                                                        y: "2",
                                                        width: "20",
                                                        height: "20",
                                                        rx: "2.18",
                                                        ry: "2.18"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 160
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "7",
                                                        y1: "2",
                                                        x2: "7",
                                                        y2: "22"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 228
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "17",
                                                        y1: "2",
                                                        x2: "17",
                                                        y2: "22"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 270
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "2",
                                                        y1: "12",
                                                        x2: "22",
                                                        y2: "12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 314
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "2",
                                                        y1: "7",
                                                        x2: "7",
                                                        y2: "7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 358
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "2",
                                                        y1: "17",
                                                        x2: "7",
                                                        y2: "17"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 399
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "17",
                                                        y1: "17",
                                                        x2: "22",
                                                        y2: "17"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 442
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "17",
                                                        y1: "7",
                                                        x2: "22",
                                                        y2: "7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 487
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '24px',
                                                fontWeight: 800,
                                                color: 'var(--text)',
                                                marginBottom: '12px'
                                            },
                                            children: "Video Remover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'var(--muted)',
                                                fontSize: '15px',
                                                lineHeight: 1.6,
                                                marginBottom: '24px'
                                            },
                                            children: "Seamlessly erase Gemini watermarks from a single video file. No uploads required."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "btn btn-primary",
                                            style: {
                                                marginTop: 'auto',
                                                background: 'var(--brand-2)',
                                                pointerEvents: 'none',
                                                border: 'none'
                                            },
                                            children: "Open Video Tool"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/multi-video",
                                    className: "tool-card vid-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "icon-wrap",
                                            style: {
                                                width: '80px',
                                                height: '80px',
                                                borderRadius: '20px',
                                                background: 'rgba(155,114,203,0.12)',
                                                display: 'grid',
                                                placeItems: 'center',
                                                color: 'var(--brand-2)',
                                                marginBottom: '24px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "40",
                                                height: "40",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                        x: "2",
                                                        y: "2",
                                                        width: "20",
                                                        height: "20",
                                                        rx: "2.18",
                                                        ry: "2.18"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 160
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "7",
                                                        y1: "2",
                                                        x2: "7",
                                                        y2: "22"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 228
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "17",
                                                        y1: "2",
                                                        x2: "17",
                                                        y2: "22"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 270
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "2",
                                                        y1: "12",
                                                        x2: "22",
                                                        y2: "12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 314
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "2",
                                                        y1: "7",
                                                        x2: "7",
                                                        y2: "7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 358
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "2",
                                                        y1: "17",
                                                        x2: "7",
                                                        y2: "17"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 399
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "17",
                                                        y1: "17",
                                                        x2: "22",
                                                        y2: "17"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 442
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "17",
                                                        y1: "7",
                                                        x2: "22",
                                                        y2: "7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 487
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '24px',
                                                fontWeight: 800,
                                                color: 'var(--text)',
                                                marginBottom: '12px'
                                            },
                                            children: "Multi Video Remover"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'var(--muted)',
                                                fontSize: '15px',
                                                lineHeight: 1.6,
                                                marginBottom: '24px'
                                            },
                                            children: "Process multiple videos sequentially with ultra-fast alpha blending. Save hours of manual work."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "btn btn-primary",
                                            style: {
                                                marginTop: 'auto',
                                                background: 'var(--brand-2)',
                                                pointerEvents: 'none',
                                                border: 'none'
                                            },
                                            children: "Open Multi Video Tool"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "features",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap sec-head",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "eyebrow",
                            children: "Reverse alpha blending"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Pixel-accurate restoration"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "No AI repainting or guesswork. We mathematically reverse the watermark's alpha blend to recover the exact original pixels underneath — lossless and clean."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: 24
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "btn btn-primary",
                                href: "/image",
                                children: "Try it free"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 99,
                                columnNumber: 42
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "how",
                style: {
                    background: "var(--bg-soft)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sec-head",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: "How it works"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "How to remove a Gemini watermark online"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "steps",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "step",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "num",
                                            children: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 35
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Upload photos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 63
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Add JPG, PNG or WebP files — single or in bulk. Nothing leaves your device."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 85
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "step",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "num",
                                            children: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 35
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Auto-remove watermark"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 63
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "In-browser processing detects and strips the Gemini logo & star overlay automatically."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 93
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "step",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "num",
                                            children: "3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 35
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Download clean images"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 63
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Save individual PNGs or grab everything at once as a ZIP archive."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 93
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "toolkit",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sec-head",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: "Complete toolkit"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Complete Google Gemini watermark removal toolkit"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid",
                            children: toolkit.map((t)=>{
                                const IconComponent = t.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "emoji",
                                            style: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '46px',
                                                height: '46px',
                                                borderRadius: '12px',
                                                background: t.bgColor,
                                                color: t.color
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: t.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: t.desc
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, t.title, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "faq",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sec-head",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow",
                                    children: "FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 37
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "Frequently asked questions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 73
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "faq",
                            children: faqs.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    open: i === 0,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            children: f.q
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: f.a
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, f.q, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    paddingTop: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cta-band",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Ready to remove Gemini watermarks for free?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Open source, browser-local, no sign-up. Start in seconds."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-cta",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "btn btn-primary",
                                        href: "/image",
                                        children: "Remove Image watermarks now"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "btn btn-primary",
                                        href: "/video",
                                        children: "Remove Video watermarks now"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Home, "iCvdfXUVdsbPRKn1m5bHdGUDl6U=");
_c = Home;
const toolkit = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        color: "var(--brand-2)",
        bgColor: "rgba(168, 85, 247, 0.1)",
        title: "Multiple variants",
        desc: "Logo, star overlay and Nano Banana watermark support."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        color: "var(--brand-3)",
        bgColor: "rgba(244, 63, 94, 0.1)",
        title: "Bulk parallel processing",
        desc: "Clean dozens of images at once with worker threads."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
        color: "var(--accent)",
        bgColor: "rgba(34, 197, 94, 0.1)",
        title: "Browser-local",
        desc: "Zero uploads. Your images never touch a server."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"],
        color: "var(--brand)",
        bgColor: "rgba(59, 130, 246, 0.1)",
        title: "Multi-format",
        desc: "JPG, PNG, WebP in — PNG or ZIP out."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        color: "var(--brand-2)",
        bgColor: "rgba(168, 85, 247, 0.1)",
        title: "Cross-platform",
        desc: "Works on any modern browser, any OS."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"],
        color: "var(--brand-3)",
        bgColor: "rgba(244, 63, 94, 0.1)",
        title: "Free & open source",
        desc: "No paywall, no account, ever."
    }
];
const faqs = [
    {
        q: "Is it really free?",
        a: "Yes — completely free and open source. No account, no subscription, no hidden limits."
    },
    {
        q: "Are my images uploaded anywhere?",
        a: "No. All processing runs locally in your browser. Your images never leave your device."
    },
    {
        q: "How does the removal work?",
        a: "It reverses the watermark's alpha blending mathematically to restore the exact original pixels, rather than repainting with AI."
    },
    {
        q: "Can I process many images at once?",
        a: "Yes. Bulk parallel processing handles batches and lets you download them all as a ZIP."
    },
    {
        q: "Which watermark variants are supported?",
        a: "The Gemini logo, the star overlay, and the Nano Banana variant are all covered."
    },
    {
        q: "Does it support videos?",
        a: "Video removal is in beta and processes the overlay frame-by-frame, also fully in-browser."
    },
    {
        q: "What formats can I use?",
        a: "JPG, PNG and WebP inputs are supported, with PNG or ZIP outputs."
    }
];
const css = `
.gwr-landing {
  --bg: #ffffff;
  --bg-soft: #f6f8fc;
  --bg-soft2: #eef2fb;
  --card: #ffffff;
  --border: #e6e8ef;
  --text: #1a1c23;
  --muted: #5b6472;
  --brand: #4285f4;
  --brand-dark: #1a73e8;
  --brand-2: #9b72cb;
  --brand-3: #d96570;
  --accent: #1e8e3e;
  --radius: 16px;
  --max: 1180px;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
.dark .gwr-landing {
  --bg: #000000;
  --bg-soft: #09090b;
  --bg-soft2: #18181b;
  --card: #09090b;
  --border: #27272a;
  --text: #f4f4f5;
  --muted: #a1a1aa;
  --brand: #3b82f6;
  --brand-dark: #3b82f6;
  --brand-2: #a855f7;
  --brand-3: #f43f5e;
  --accent: #22c55e;
}
.gwr-landing * { box-sizing: border-box; }
.gwr-landing #originalInfo, .gwr-landing #processedInfo { display: none !important; }
.gwr-landing a { color: inherit; text-decoration: none; }
.gwr-landing .wrap { max-width: var(--max); margin: 0 auto; padding: 0 24px; }
.gwr-landing .gradient-text {
  background: linear-gradient(120deg, var(--brand), var(--brand-2), var(--brand-3));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  display: inline-block;
}
.gwr-landing .free-shine {
  background: linear-gradient(120deg, #4285f4 0%, #9b72cb 25%, #d96570 50%, #9b72cb 75%, #4285f4 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: shine-effect 3s linear infinite;
  font-weight: 850;
  display: inline-block;
}
@keyframes shine-effect {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}
.gwr-landing header {
  position: sticky; top: 0; z-index: 50;
  backdrop-filter: blur(14px); background: rgba(255,255,255,0.82);
  border-bottom: 1px solid var(--border);
}
.dark .gwr-landing header {
  background: rgba(0,0,0,0.82);
  border-bottom-color: var(--border);
}
.gwr-landing .nav { display: flex; align-items: center; justify-content: space-between; height: 64px; }
.logo-container { flex: 1; display: flex; justify-content: flex-start; }
.gwr-landing .logo { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 15.5px; }
.gwr-landing .logo .mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: conic-gradient(from 200deg, var(--brand), var(--brand-2), var(--brand-3), var(--brand));
  display: grid; place-items: center; color: #fff; font-size: 14px;
}
.gwr-landing .nav-links { display: flex; gap: 24px; font-size: 14px; color: var(--muted); font-weight: 500; justify-content: center; }
.gwr-landing .nav-links a:hover { color: var(--text); }
.gwr-landing .nav-links a.active { color: var(--text); font-weight: 600; }
.gwr-landing .nav-right { flex: 1; display: flex; justify-content: flex-end; align-items: center; gap: 12px; }

.gwr-landing .pill {
  display: inline-flex; align-items: center; gap: 7px;
  border: 1px solid var(--border); padding: 7px 13px; border-radius: 999px;
  font-size: 13px; color: var(--muted); background: var(--bg);
}
.gwr-landing .btn {
  display: inline-flex; align-items: center; gap: 8px; justify-content: center;
  padding: 11px 20px; border-radius: 11px; font-weight: 600; font-size: 14px;
  cursor: pointer; border: 1px solid transparent; transition: .18s ease; white-space: nowrap;
}
.gwr-landing .btn-primary { background: var(--brand-dark); color: #fff; box-shadow: 0 6px 18px rgba(26,115,232,.28); }
.gwr-landing .btn-primary:hover { background: #1763c9; transform: translateY(-1px); box-shadow: 0 10px 24px rgba(26,115,232,.36); }
.gwr-landing .btn-ghost { background: var(--bg); border-color: var(--border); color: var(--text); }
.gwr-landing .btn-ghost:hover { background: var(--bg-soft); }
.gwr-landing .hero { position: relative; padding: 64px 0 36px; text-align: center; overflow: hidden; }
.gwr-landing .hero::before {
  content: ""; position: absolute; inset: -200px 0 auto 0; height: 480px;
  background: radial-gradient(60% 60% at 50% 0%, rgba(66,133,244,.12), transparent 70%); pointer-events: none;
}
.gwr-landing .hero-badge {
  display: inline-flex; align-items: center; gap: 8px; font-size: 13px;
  color: var(--muted); border: 1px solid var(--border); background: var(--bg-soft);
  padding: 6px 14px; border-radius: 999px; margin-bottom: 22px;
}
.gwr-landing .hero-badge .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); }
.gwr-landing h1 { font-size: clamp(34px, 6vw, 58px); line-height: 1.08; letter-spacing: -1.5px; font-weight: 800; margin: 0; }
.gwr-landing .sub { max-width: 660px; margin: 20px auto 0; color: var(--muted); font-size: 18px; }
.gwr-landing .hero-cta { display: flex; gap: 14px; justify-content: center; margin-top: 30px; flex-wrap: wrap; }
.gwr-landing .stats { display: flex; gap: 28px; justify-content: center; margin-top: 26px; flex-wrap: wrap; color: var(--muted); font-size: 14px; }
.gwr-landing .stats span { display: inline-flex; align-items: center; gap: 7px; }
.gwr-landing .check { color: var(--accent); }
.gwr-landing .tool { margin: 44px auto 0; max-width: 940px; }
.gwr-landing .tabs { display: inline-flex; gap: 6px; padding: 5px; background: var(--bg-soft); border: 1px solid var(--border); border-radius: 12px; margin-bottom: 18px; }
.gwr-landing .tab {
  padding: 9px 22px; border-radius: 8px; font-size: 14px; font-weight: 600;
  color: var(--muted); cursor: pointer; border: none; background: transparent; transition: .15s; font-family: inherit;
}
.gwr-landing .tab.active { background: var(--brand-dark); color: #fff; }
.gwr-landing .tab .beta { font-size: 10px; opacity: .85; margin-left: 5px; }
.gwr-landing .dropzone {
  border: 2px dashed #cdd5e6; border-radius: var(--radius);
  background: linear-gradient(180deg, var(--card), var(--bg-soft)); padding: 46px 24px; text-align: center; transition: .2s; cursor: pointer;
}
.dark .gwr-landing .dropzone {
  border-color: var(--border);
  background: linear-gradient(180deg, var(--card), var(--bg-soft));
}
.gwr-landing .dropzone:hover { border-color: var(--brand); background: var(--bg-soft2); }
.gwr-landing .dropzone .icon {
  width: 56px; height: 56px; margin: 0 auto 16px; border-radius: 14px;
  background: rgba(66,133,244,.12); display: grid; place-items: center; font-size: 26px;
}
.dark .gwr-landing .dropzone .icon {
  background: rgba(59, 130, 246, 0.15);
}
.gwr-landing .dropzone h3 { font-size: 19px; }
.gwr-landing .dropzone p { color: var(--muted); font-size: 14px; margin-top: 6px; }
.gwr-landing .formats { display: flex; gap: 8px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
.gwr-landing .fmt { font-size: 12px; color: var(--muted); border: 1px solid var(--border); padding: 4px 10px; border-radius: 7px; background: var(--bg-soft); }
.gwr-landing .compare { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 28px; }
.gwr-landing .shot { position: relative; border-radius: var(--radius); overflow: hidden; border: 1px solid var(--border); aspect-ratio: 4/3; }
.gwr-landing .shot .label {
  position: absolute; top: 12px; left: 12px; font-size: 12px; font-weight: 600; color:#fff; z-index: 10;
  padding: 5px 11px; border-radius: 7px; backdrop-filter: blur(6px); background: rgba(0,0,0,.42);
}
.gwr-landing .shot.before { background: linear-gradient(135deg, #dbe4f5, #cdd9f0); }
.gwr-landing .shot.after { background: linear-gradient(135deg, #d6efe0, #d2e8f7); }
.dark .gwr-landing .shot.before { background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05)); }
.dark .gwr-landing .shot.after { background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.05)); }
.gwr-landing .watermark { position: absolute; bottom: 14px; right: 14px; font-size: 13px; font-weight: 700; color: rgba(30,40,60,.55); display: flex; align-items: center; gap: 5px; }
.dark .gwr-landing .watermark { color: rgba(255,255,255,.45); }
.gwr-landing .shot .photo { position:absolute; inset:0; display:grid; place-items:center; color: var(--muted); font-size: 13px; }
.gwr-landing section { padding: 78px 0; }
.gwr-landing .eyebrow { color: var(--brand-dark); font-weight: 700; font-size: 13px; letter-spacing: 1.4px; text-transform: uppercase; }
.gwr-landing .sec-head { text-align: center; max-width: 720px; margin: 0 auto 48px; }
.gwr-landing .sec-head h2 { font-size: clamp(28px, 4vw, 42px); letter-spacing: -1px; margin-top: 12px; font-weight: 800; }
.gwr-landing .sec-head p { color: var(--muted); margin-top: 14px; font-size: 17px; }
.gwr-landing .steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 22px; }
.gwr-landing .step { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 28px; box-shadow: 0 1px 3px rgba(16,24,40,.04); }
.gwr-landing .step .num { width: 38px; height: 38px; border-radius: 10px; font-weight: 800; background: rgba(66,133,244,.12); color: var(--brand-dark); display: grid; place-items: center; margin-bottom: 16px; }
.dark .gwr-landing .step .num { background: rgba(59, 130, 246, 0.15); color: #3b82f6; }
.gwr-landing .step h3 { font-size: 18px; }
.gwr-landing .step p { color: var(--muted); font-size: 14px; margin-top: 8px; }
.gwr-landing .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 20px; }
.gwr-landing .card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 26px; transition: .2s; box-shadow: 0 1px 3px rgba(16,24,40,.04); }
.gwr-landing .card:hover { border-color: var(--brand); transform: translateY(-3px); box-shadow: 0 12px 28px rgba(16,24,40,.08); }
.gwr-landing .card .emoji { width: 46px; height: 46px; border-radius: 12px; display: grid; place-items: center; font-size: 22px; background: var(--bg-soft2); margin-bottom: 16px; }
.gwr-landing .card h3 { font-size: 17px; }
.gwr-landing .card p { color: var(--muted); font-size: 14px; margin-top: 8px; }
.gwr-landing .flow { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 20px; }
.gwr-landing .flow-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 26px; box-shadow: 0 1px 3px rgba(16,24,40,.04); }
.gwr-landing .flow-card .tag { font-size: 12px; color: var(--brand-dark); font-weight: 700; }
.gwr-landing .flow-card h3 { font-size: 18px; margin-top: 10px; }
.gwr-landing .flow-card p { color: var(--muted); font-size: 14px; margin-top: 8px; }
.gwr-landing .flow-card a { display: inline-flex; gap: 6px; margin-top: 14px; color: var(--brand-dark); font-size: 14px; font-weight: 600; }
.gwr-landing .faq { max-width: 780px; margin: 0 auto; }
.gwr-landing details { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 18px 22px; margin-bottom: 12px; cursor: pointer; }
.gwr-landing details[open] { border-color: var(--brand); }
.gwr-landing summary { font-weight: 600; font-size: 16px; list-style: none; display: flex; justify-content: space-between; align-items: center; }
.gwr-landing summary::-webkit-details-marker { display: none; }
.gwr-landing summary::after { content: "+"; font-size: 22px; color: var(--muted); font-weight: 400; }
.gwr-landing details[open] summary::after { content: "−"; }
.gwr-landing details p { color: var(--muted); font-size: 14.5px; margin-top: 12px; }
.gwr-landing .cta-band { background: linear-gradient(120deg, #1a73e8, #4285f4 55%, #9b72cb); border-radius: 24px; padding: 60px 32px; text-align: center; color: #fff; }
.gwr-landing .cta-band h2 { font-size: clamp(28px, 4vw, 40px); letter-spacing: -1px; font-weight: 800; }
.gwr-landing .cta-band p { color: rgba(255,255,255,.9); margin-top: 14px; font-size: 17px; }
.gwr-landing .cta-band .hero-cta { margin-top: 28px; }
.gwr-landing .cta-band .btn-primary { background: #fff; color: var(--brand-dark); box-shadow: none; }
.gwr-landing .cta-band .btn-primary:hover { background: #f0f3fb; }
.gwr-landing .cta-band .btn-ghost { background: transparent; border-color: rgba(255,255,255,.5); color: #fff; }
.gwr-landing .cta-band .btn-ghost:hover { background: rgba(255,255,255,.12); }
.gwr-landing footer { border-top: 1px solid var(--border); padding: 50px 0 40px; color: var(--muted); background: var(--bg-soft); }
.dark .gwr-landing footer { background: var(--bg-soft); border-top-color: var(--border); }
.gwr-landing .foot { display: flex; justify-content: space-between; gap: 24px; flex-wrap: wrap; align-items: center; }
.gwr-landing .foot-links { display: flex; gap: 22px; font-size: 14px; }
.gwr-landing .foot-links a:hover { color: var(--text); }
.gwr-landing .lang { background: var(--bg); border: 1px solid var(--border); color: var(--muted); padding: 8px 12px; border-radius: 9px; font-size: 13px; }
.gwr-landing .tool-nav {
  margin-top: 54px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 24px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
.gwr-landing .tool-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 48px 32px;
  background: linear-gradient(180deg, var(--card), var(--bg-soft));
  border: 2px solid transparent;
  border-radius: 24px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}
.gwr-landing .tool-card.img-card:hover {
  border-color: var(--brand);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(66,133,244,0.12);
}
.gwr-landing .tool-card.vid-card:hover {
  border-color: var(--brand-2);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(155,114,203,0.12);
}
@media (max-width: 640px) {
  .gwr-landing .tool-nav {
    margin-top: 36px;
    gap: 16px;
  }
  .gwr-landing .tool-card {
    padding: 32px 20px;
    border-radius: 16px;
  }
  .gwr-landing .cta-band {
    padding: 40px 20px;
    border-radius: 16px;
  }
}
@media (max-width: 880px) {
  .gwr-landing .nav-right .pill { display: none; }
}
`;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1q7id0k._.js.map
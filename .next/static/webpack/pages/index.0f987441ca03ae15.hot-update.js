"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Home/Home.js":
/*!*********************************!*\
  !*** ./components/Home/Home.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Home_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.styled */ \"./components/Home/Home.styled.js\");\n/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shape */ \"./components/Shape/index.js\");\n/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Row */ \"./components/Row/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), size = ref[0], setSize = ref[1];\n    var sizes = {\n        mobile: 768,\n        desktop: 1280\n    };\n    var setup = function() {\n        // calculation\n        var viewportW = window.innerWidth;\n        if (viewportW <= sizes.mobile) {\n            setSize(3);\n            return;\n        }\n        if (viewportW <= sizes.desktop) {\n            setSize(4);\n            return;\n        }\n        setSize(5);\n    };\n    var onScroll = function() {\n        var y = window.scrollY;\n        console.log(y);\n        var viewportH = window.innerHeight;\n        var pageHeight = document.body.offsetHeight;\n        if (y >= pageHeight - viewportH) {\n            window.scrollTo(0, 0);\n            return;\n        }\n        if (y < 0) {\n            window.scrollTo(0, pageHeight - viewportH);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var resize = function resize() {\n            setup();\n        };\n        setup();\n        window.addEventListener(\"resize\", resize);\n        window.addEventListener(\"scroll\", onScroll);\n        return function() {\n            window.removeEventListener(\"resize\", resize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            size && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: size,\n                        delay: 2.5\n                    }, void 0, false, {\n                        fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Home/Home.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: size,\n                        delay: 1.5\n                    }, void 0, false, {\n                        fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Home/Home.js\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: size,\n                        delay: 2.5\n                    }, void 0, false, {\n                        fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Home/Home.js\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: size,\n                        delay: 1.5\n                    }, void 0, false, {\n                        fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Home/Home.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: size,\n                        delay: 1.5\n                    }, void 0, false, {\n                        fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Home/Home.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: size,\n                        delay: 2.5\n                    }, void 0, false, {\n                        fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Home/Home.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: size,\n                        delay: 1.5\n                    }, void 0, false, {\n                        fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Home/Home.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: size,\n                        delay: 2.5\n                    }, void 0, false, {\n                        fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Home/Home.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: size,\n                        delay: 1.5\n                    }, void 0, false, {\n                        fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Home/Home.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: size,\n                        delay: 1.5\n                    }, void 0, false, {\n                        fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Home/Home.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: size,\n                        delay: 1.5\n                    }, void 0, false, {\n                        fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Home/Home.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: size,\n                        delay: 1.5\n                    }, void 0, false, {\n                        fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Home/Home.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: size,\n                        delay: 1.5\n                    }, void 0, false, {\n                        fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Home/Home.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: size,\n                        delay: 1.5\n                    }, void 0, false, {\n                        fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Home/Home.js\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: size,\n                        delay: 1.5\n                    }, void 0, false, {\n                        fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Home/Home.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"mailto:studio@freddiejackson.uk?subject=Work Enquiry\",\n                    children: \"Jackson Studio\"\n                }, void 0, false, {\n                    fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Home/Home.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Home/Home.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Home/Home.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bmVudHMvSG9tZS9Ib21lLmpzPzBiZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhvbWVTdHlsZXMgZnJvbSBcIi4vSG9tZS5zdHlsZWRcIjtcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi4vU2hhcGVcIjtcbmltcG9ydCBSb3cgZnJvbSBcIi4uL1Jvd1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IHNpemVzID0ge1xuICAgIG1vYmlsZTogNzY4LFxuICAgIGRlc2t0b3A6IDEyODAsXG4gIH07XG5cbiAgY29uc3Qgc2V0dXAgPSAoKSA9PiB7XG4gICAgLy8gY2FsY3VsYXRpb25cbiAgICBjb25zdCB2aWV3cG9ydFcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIGlmICh2aWV3cG9ydFcgPD0gc2l6ZXMubW9iaWxlKSB7XG4gICAgICBzZXRTaXplKDMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh2aWV3cG9ydFcgPD0gc2l6ZXMuZGVza3RvcCkge1xuICAgICAgc2V0U2l6ZSg0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRTaXplKDUpO1xuICB9O1xuXG4gIGNvbnN0IG9uU2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IHkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBjb25zb2xlLmxvZyh5KTtcbiAgICBjb25zdCB2aWV3cG9ydEggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgcGFnZUhlaWdodCA9IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0O1xuICAgIGlmICh5ID49IHBhZ2VIZWlnaHQgLSB2aWV3cG9ydEgpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHkgPCAwKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcGFnZUhlaWdodCAtIHZpZXdwb3J0SCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0dXAoKTtcbiAgICBmdW5jdGlvbiByZXNpemUoKSB7XG4gICAgICBzZXR1cCgpO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8SG9tZVN0eWxlcz5cbiAgICAgIHtzaXplICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Um93IHNpemU9e3NpemV9IGRlbGF5PXsyLjV9IC8+XG4gICAgICAgICAgPFJvdyBzaXplPXtzaXplfSBkZWxheT17MS41fSAvPlxuICAgICAgICAgIDxSb3cgc2l6ZT17c2l6ZX0gZGVsYXk9ezIuNX0gLz5cbiAgICAgICAgICA8Um93IHNpemU9e3NpemV9IGRlbGF5PXsxLjV9IC8+XG4gICAgICAgICAgPFJvdyBzaXplPXtzaXplfSBkZWxheT17MS41fSAvPlxuICAgICAgICAgIDxSb3cgc2l6ZT17c2l6ZX0gZGVsYXk9ezIuNX0gLz5cbiAgICAgICAgICA8Um93IHNpemU9e3NpemV9IGRlbGF5PXsxLjV9IC8+XG4gICAgICAgICAgPFJvdyBzaXplPXtzaXplfSBkZWxheT17Mi41fSAvPlxuICAgICAgICAgIDxSb3cgc2l6ZT17c2l6ZX0gZGVsYXk9ezEuNX0gLz5cbiAgICAgICAgICA8Um93IHNpemU9e3NpemV9IGRlbGF5PXsxLjV9IC8+XG4gICAgICAgICAgPFJvdyBzaXplPXtzaXplfSBkZWxheT17MS41fSAvPlxuICAgICAgICAgIDxSb3cgc2l6ZT17c2l6ZX0gZGVsYXk9ezEuNX0gLz5cbiAgICAgICAgICA8Um93IHNpemU9e3NpemV9IGRlbGF5PXsxLjV9IC8+XG4gICAgICAgICAgPFJvdyBzaXplPXtzaXplfSBkZWxheT17MS41fSAvPlxuICAgICAgICAgIDxSb3cgc2l6ZT17c2l6ZX0gZGVsYXk9ezEuNX0gLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAgPGgxPlxuICAgICAgICA8YSBocmVmPVwibWFpbHRvOnN0dWRpb0BmcmVkZGllamFja3Nvbi51az9zdWJqZWN0PVdvcmsgRW5xdWlyeVwiPlxuICAgICAgICAgIEphY2tzb24gU3R1ZGlvXG4gICAgICAgIDwvYT5cbiAgICAgIDwvaDE+XG4gICAgPC9Ib21lU3R5bGVzPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJIb21lU3R5bGVzIiwiU2hhcGUiLCJSb3ciLCJIb21lIiwic2l6ZSIsInNldFNpemUiLCJzaXplcyIsIm1vYmlsZSIsImRlc2t0b3AiLCJzZXR1cCIsInZpZXdwb3J0VyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJvblNjcm9sbCIsInkiLCJzY3JvbGxZIiwiY29uc29sZSIsImxvZyIsInZpZXdwb3J0SCIsImlubmVySGVpZ2h0IiwicGFnZUhlaWdodCIsImRvY3VtZW50IiwiYm9keSIsIm9mZnNldEhlaWdodCIsInNjcm9sbFRvIiwicmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZWxheSIsImgxIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Home/Home.js\n"));

/***/ })

});
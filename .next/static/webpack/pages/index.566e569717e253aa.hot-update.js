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

/***/ "./components/Row/Row.js":
/*!*******************************!*\
  !*** ./components/Row/Row.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Row; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Row_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Row.styled */ \"./components/Row/Row.styled.js\");\n/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shape */ \"./components/Shape/index.js\");\n/* harmony import */ var _lib_Utils_getRandom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/Utils/getRandom */ \"./lib/Utils/getRandom.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar colors = {\n    green: \"#02BB00\",\n    red: \"#FF0000\",\n    blue: \"#0064FF\",\n    yellow: \"#FFE700\"\n};\nvar colorKeys = Object.keys(colors);\nvar shapes = [\n    \"triangle\",\n    \"circle\",\n    \"square\",\n    \"cross\"\n];\nfunction Row(param) {\n    var size = param.size;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), loop = ref[0], setLoop = ref[1];\n    var controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimationControls)();\n    var setup = function() {\n        var newShapes = [];\n        (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Array(size * 3).keys()).map(function(i) {\n            var indexShape = (0,_lib_Utils_getRandom__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(0, shapes.length - 1);\n            var indexColor = (0,_lib_Utils_getRandom__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(0, colorKeys.length - 1);\n            var colorKey = colorKeys[indexColor];\n            newShapes.push({\n                type: shapes[indexShape],\n                color: colors[colorKey]\n            });\n        });\n        setLoop(newShapes);\n    };\n    var start = function() {\n        var directions = [\n            -1,\n            1\n        ];\n        var direction = directions[Math.floor(Math.random() * directions.length)];\n        if (direction === 1) {\n            animateRight();\n            return;\n        }\n        animateLeft();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setup();\n        controls.set({\n            x: \"-50%\"\n        });\n        start();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Row_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: \"is-\".concat(size),\n        animate: controls,\n        children: loop.map(function(item, i) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Shape__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                type: item === null || item === void 0 ? void 0 : item.type,\n                color: item === null || item === void 0 ? void 0 : item.color\n            }, i, false, {\n                fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Row/Row.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/freddie-jackson/Repos/jacksonstudio/components/Row/Row.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n};\n_s(Row, \"KmCYydm31CPaD/5el5NM35WiqNA=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimationControls\n    ];\n});\n_c = Row;\nvar _c;\n$RefreshReg$(_c, \"Row\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxXQUFPLEdBQVhBLEtBQUFBLENBQVcsR0FBWEEsSUFBSSxDQUFFWixLQUFLO2VBQXZDUCxDQUFDOzs7O3FCQUEwQztTQUN4RCxDQUFDOzs7OztZQUNRLENBQ1o7Q0FDSDtHQS9DdUJULEdBQUc7O1FBRVJWLCtEQUFvQjs7O0FBRmZVLEtBQUFBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb3cvUm93LmpzPzUzNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvd1N0eWxlcyBmcm9tIFwiLi9Sb3cuc3R5bGVkXCI7XG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4uL1NoYXBlXCI7XG5pbXBvcnQgZ2V0UmFuZG9tIGZyb20gXCIuLi8uLi9saWIvVXRpbHMvZ2V0UmFuZG9tXCI7XG5pbXBvcnQgeyBhbmltYXRlLCBtb3Rpb24sIHVzZUFuaW1hdGlvbkNvbnRyb2xzIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgY29sb3JzID0ge1xuICBncmVlbjogXCIjMDJCQjAwXCIsXG4gIHJlZDogXCIjRkYwMDAwXCIsXG4gIGJsdWU6IFwiIzAwNjRGRlwiLFxuICB5ZWxsb3c6IFwiI0ZGRTcwMFwiLFxufTtcblxuY29uc3QgY29sb3JLZXlzID0gT2JqZWN0LmtleXMoY29sb3JzKTtcbmNvbnN0IHNoYXBlcyA9IFtcInRyaWFuZ2xlXCIsIFwiY2lyY2xlXCIsIFwic3F1YXJlXCIsIFwiY3Jvc3NcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvdyh7IHNpemUgfSkge1xuICBjb25zdCBbbG9vcCwgc2V0TG9vcF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGNvbnRyb2xzID0gdXNlQW5pbWF0aW9uQ29udHJvbHMoKTtcblxuICBjb25zdCBzZXR1cCA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdTaGFwZXMgPSBbXTtcblxuICAgIFsuLi5BcnJheShzaXplICogMykua2V5cygpXS5tYXAoKGkpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4U2hhcGUgPSBnZXRSYW5kb20oMCwgc2hhcGVzLmxlbmd0aCAtIDEpO1xuICAgICAgY29uc3QgaW5kZXhDb2xvciA9IGdldFJhbmRvbSgwLCBjb2xvcktleXMubGVuZ3RoIC0gMSk7XG5cbiAgICAgIGNvbnN0IGNvbG9yS2V5ID0gY29sb3JLZXlzW2luZGV4Q29sb3JdO1xuXG4gICAgICBuZXdTaGFwZXMucHVzaCh7XG4gICAgICAgIHR5cGU6IHNoYXBlc1tpbmRleFNoYXBlXSxcbiAgICAgICAgY29sb3I6IGNvbG9yc1tjb2xvcktleV0sXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNldExvb3AobmV3U2hhcGVzKTtcbiAgfTtcblxuICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb25zID0gWy0xLCAxXTtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpcmVjdGlvbnMubGVuZ3RoKV07XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAxKSB7XG4gICAgICBhbmltYXRlUmlnaHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBhbmltYXRlTGVmdCgpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0dXAoKTtcbiAgICBjb250cm9scy5zZXQoeyB4OiBcIi01MCVcIiB9KTtcbiAgICBzdGFydCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Um93U3R5bGVzIGNsYXNzTmFtZT17YGlzLSR7c2l6ZX1gfSBhbmltYXRlPXtjb250cm9sc30+XG4gICAgICB7bG9vcC5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgPFNoYXBlIGtleT17aX0gdHlwZT17aXRlbT8udHlwZX0gY29sb3I9e2l0ZW0/LmNvbG9yfSAvPlxuICAgICAgKSl9XG4gICAgPC9Sb3dTdHlsZXM+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIlJvd1N0eWxlcyIsIlNoYXBlIiwiZ2V0UmFuZG9tIiwiYW5pbWF0ZSIsIm1vdGlvbiIsInVzZUFuaW1hdGlvbkNvbnRyb2xzIiwiY29sb3JzIiwiZ3JlZW4iLCJyZWQiLCJibHVlIiwieWVsbG93IiwiY29sb3JLZXlzIiwiT2JqZWN0Iiwia2V5cyIsInNoYXBlcyIsIlJvdyIsInNpemUiLCJsb29wIiwic2V0TG9vcCIsImNvbnRyb2xzIiwic2V0dXAiLCJuZXdTaGFwZXMiLCJBcnJheSIsIm1hcCIsImkiLCJpbmRleFNoYXBlIiwibGVuZ3RoIiwiaW5kZXhDb2xvciIsImNvbG9yS2V5IiwicHVzaCIsInR5cGUiLCJjb2xvciIsInN0YXJ0IiwiZGlyZWN0aW9ucyIsImRpcmVjdGlvbiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImFuaW1hdGVSaWdodCIsImFuaW1hdGVMZWZ0Iiwic2V0IiwieCIsImNsYXNzTmFtZSIsIml0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Row/Row.js\n"));

/***/ })

});
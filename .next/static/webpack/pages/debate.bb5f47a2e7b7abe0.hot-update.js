"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/debate",{

/***/ "./src/pages/debate/index.js":
/*!***********************************!*\
  !*** ./src/pages/debate/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/Home.module.scss */ \"./src/styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst Debate = (param)=>{\n    let { vote  } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/get-debate\").then((res)=>res.json()).then((pData)=>{\n            console.log(pData);\n            if (pData.status === 200) {\n                setData(pData.debate);\n            }\n        }).catch((error)=>console.log(error));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Vote: \",\n                    vote\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().debate_container),\n                children: data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: data.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                            lineNumber: 33,\n                            columnNumber: 25\n                        }, undefined),\n                        data.messages.length && data.messages.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                id: m.id,\n                                children: m.body\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                                lineNumber: 34,\n                                columnNumber: 75\n                            }, undefined))\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            console.log(data)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Debate, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n_c = Debate;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Debate);\nvar _c;\n$RefreshReg$(_c, \"Debate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGViYXRlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QztBQUNIO0FBVTNDLE1BQU1HLFNBQVMsU0FBYztRQUFiLEVBQUVDLEtBQUksRUFBRTs7SUFDcEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDLElBQUk7SUFFckNELGdEQUFTQSxDQUFDLElBQU07UUFDWk0sTUFBTSxtQkFDREMsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxJQUFJLElBQ3BCRixJQUFJLENBQUNHLENBQUFBLFFBQVM7WUFDWEMsUUFBUUMsR0FBRyxDQUFDRjtZQUNaLElBQUlBLE1BQU1HLE1BQU0sS0FBSyxLQUFLO2dCQUN0QlIsUUFBUUssTUFBTUksTUFBTTtZQUN4QixDQUFDO1FBQ0wsR0FDQ0MsS0FBSyxDQUFDQyxDQUFBQSxRQUFTTCxRQUFRQyxHQUFHLENBQUNJO0lBQ3BDLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXbkIsc0VBQVc7OzBCQUN2Qiw4REFBQ3FCOztvQkFBRTtvQkFBT2pCOzs7Ozs7OzBCQUNWLDhEQUFDYztnQkFBSUMsV0FBV25CLGtGQUF1QjswQkFDbENLLHNCQUNHOztzQ0FDSSw4REFBQ2E7c0NBQUtiLEtBQUtrQixLQUFLOzs7Ozs7d0JBQ2ZsQixLQUFLbUIsUUFBUSxDQUFDQyxNQUFNLElBQUlwQixLQUFLbUIsUUFBUSxDQUFDRSxHQUFHLENBQUMsQ0FBQ0Msa0JBQU0sOERBQUNDO2dDQUFHQyxJQUFJRixFQUFFRSxFQUFFOzBDQUFHRixFQUFFRyxJQUFJOzs7Ozs7Ozs7Ozs7O1lBSWxGbEIsUUFBUUMsR0FBRyxDQUFDUjs7Ozs7OztBQUd6QjtHQTdCTUY7S0FBQUE7O0FBK0JOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kZWJhdGUvaW5kZXguanM/OTAxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHZvdGU6IFwiYWdyZWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgRGViYXRlID0gKHsgdm90ZSB9KSA9PiB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2goJy9hcGkvZ2V0LWRlYmF0ZScpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihwRGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwRGF0YSlcclxuICAgICAgICAgICAgICAgIGlmIChwRGF0YS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEocERhdGEuZGViYXRlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICA8cD5Wb3RlOiB7dm90ZX08L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGViYXRlX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57ZGF0YS50aXRsZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEubWVzc2FnZXMubGVuZ3RoICYmIGRhdGEubWVzc2FnZXMubWFwKChtKSA9PiA8bGkgaWQ9e20uaWR9PnttLmJvZHl9PC9saT4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhkYXRhKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGViYXRlXHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRlYmF0ZSIsInZvdGUiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJwRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJkZWJhdGUiLCJjYXRjaCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsInAiLCJkZWJhdGVfY29udGFpbmVyIiwidGl0bGUiLCJtZXNzYWdlcyIsImxlbmd0aCIsIm1hcCIsIm0iLCJsaSIsImlkIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/debate/index.js\n"));

/***/ })

});
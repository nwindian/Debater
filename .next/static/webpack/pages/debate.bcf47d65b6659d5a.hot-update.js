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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.scss */ \"./src/styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment/moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Debate = (param)=>{\n    let { vote  } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/get-debate\").then((res)=>res.json()).then((pData)=>{\n            console.log(pData);\n            if (pData.status === 200) {\n                setData(pData.debate);\n            }\n        }).catch((error)=>console.log(error));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Vote: \",\n                    vote\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().debate_container),\n                children: data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: data.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, undefined),\n                        data.messages.length && data.messages.map((m)=>{\n                            const time = JSON.parse(m.timePosted);\n                            console.log;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().message),\n                                id: m.id,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"posted by: \",\n                                            m.user\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"message body: \",\n                                            m.body\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"time posted: \",\n                                            m.timePosted\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                                lineNumber: 38,\n                                columnNumber: 37\n                            }, undefined);\n                        })\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            console.log(data)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Debate, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n_c = Debate;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Debate);\nvar _c;\n$RefreshReg$(_c, \"Debate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGViYXRlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ0g7QUFDVDtBQVVsQyxNQUFNSSxTQUFTLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7O0lBQ3BCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRXJDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pPLE1BQU0sbUJBQ0RDLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSSxJQUNwQkYsSUFBSSxDQUFDRyxDQUFBQSxRQUFTO1lBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWixJQUFJQSxNQUFNRyxNQUFNLEtBQUssS0FBSztnQkFDdEJSLFFBQVFLLE1BQU1JLE1BQU07WUFDeEIsQ0FBQztRQUNMLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBU0wsUUFBUUMsR0FBRyxDQUFDSTtJQUNwQyxHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBV3BCLHNFQUFXOzswQkFDdkIsOERBQUNzQjs7b0JBQUU7b0JBQU9qQjs7Ozs7OzswQkFDViw4REFBQ2M7Z0JBQUlDLFdBQVdwQixrRkFBdUI7MEJBQ2xDTSxzQkFDRzs7c0NBQ0ksOERBQUNhO3NDQUFLYixLQUFLa0IsS0FBSzs7Ozs7O3dCQUNmbEIsS0FBS21CLFFBQVEsQ0FBQ0MsTUFBTSxJQUFJcEIsS0FBS21CLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLElBQU07NEJBQzlDLE1BQU1DLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0gsRUFBRUksVUFBVTs0QkFDcENuQixRQUFRQyxHQUFHOzRCQUNYLHFCQUFRLDhEQUFDSztnQ0FBSUMsV0FBV3BCLHlFQUFjO2dDQUFFa0MsSUFBSU4sRUFBRU0sRUFBRTs7a0RBQzVDLDhEQUFDWjs7NENBQUU7NENBQVlNLEVBQUVPLElBQUk7Ozs7Ozs7a0RBQ3JCLDhEQUFDYjs7NENBQUU7NENBQWVNLEVBQUVRLElBQUk7Ozs7Ozs7a0RBQ3hCLDhEQUFDZDs7NENBQUU7NENBQWNNLEVBQUVJLFVBQVU7Ozs7Ozs7Ozs7Ozs7d0JBR3JDOzs7Ozs7OztZQUlYbkIsUUFBUUMsR0FBRyxDQUFDUjs7Ozs7OztBQUd6QjtHQXRDTUY7S0FBQUE7O0FBd0NOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kZWJhdGUvaW5kZXguanM/OTAxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQvbW9tZW50J1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdm90ZTogXCJhZ3JlZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBEZWJhdGUgPSAoeyB2b3RlIH0pID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaCgnL2FwaS9nZXQtZGViYXRlJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHBEYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBEYXRhKVxyXG4gICAgICAgICAgICAgICAgaWYgKHBEYXRhLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShwRGF0YS5kZWJhdGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgIDxwPlZvdGU6IHt2b3RlfTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWJhdGVfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHtkYXRhICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntkYXRhLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tZXNzYWdlcy5sZW5ndGggJiYgZGF0YS5tZXNzYWdlcy5tYXAoKG0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBKU09OLnBhcnNlKG0udGltZVBvc3RlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0gaWQ9e20uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnBvc3RlZCBieToge20udXNlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+bWVzc2FnZSBib2R5OiB7bS5ib2R5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD50aW1lIHBvc3RlZDoge20udGltZVBvc3RlZH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2NvbnNvbGUubG9nKGRhdGEpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWJhdGVcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibW9tZW50IiwiRGViYXRlIiwidm90ZSIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInBEYXRhIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImRlYmF0ZSIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwicCIsImRlYmF0ZV9jb250YWluZXIiLCJ0aXRsZSIsIm1lc3NhZ2VzIiwibGVuZ3RoIiwibWFwIiwibSIsInRpbWUiLCJKU09OIiwicGFyc2UiLCJ0aW1lUG9zdGVkIiwibWVzc2FnZSIsImlkIiwidXNlciIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/debate/index.js\n"));

/***/ })

});
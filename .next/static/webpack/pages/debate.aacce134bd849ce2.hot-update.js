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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.scss */ \"./src/styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment/moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Debate = (param)=>{\n    let { vote  } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/get-debate\").then((res)=>res.json()).then((pData)=>{\n            console.log(pData);\n            if (pData.status === 200) {\n                setData(pData.debate);\n            }\n        }).catch((error)=>console.log(error));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Vote: \",\n                    vote\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().debate_container),\n                children: data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: data.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, undefined),\n                        data.messages.length && data.messages.map((m)=>{\n                            const time = moment_moment__WEBPACK_IMPORTED_MODULE_2___default()().subtract(m.timeAgoPosted[0], \"days\", m.timeAgoPosted[1], \"hours\").calendar();\n                            console.log(time);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().message),\n                                id: m.id,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"posted by: \",\n                                            m.user\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"message body: \",\n                                            m.body\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"time posted: \",\n                                            time\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                                lineNumber: 38,\n                                columnNumber: 37\n                            }, undefined);\n                        })\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            console.log(data)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Debate, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n_c = Debate;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Debate);\nvar _c;\n$RefreshReg$(_c, \"Debate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGViYXRlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ0g7QUFDVDtBQVVsQyxNQUFNSSxTQUFTLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7O0lBQ3BCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRXJDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pPLE1BQU0sbUJBQ0RDLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSSxJQUNwQkYsSUFBSSxDQUFDRyxDQUFBQSxRQUFTO1lBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWixJQUFJQSxNQUFNRyxNQUFNLEtBQUssS0FBSztnQkFDdEJSLFFBQVFLLE1BQU1JLE1BQU07WUFDeEIsQ0FBQztRQUNMLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBU0wsUUFBUUMsR0FBRyxDQUFDSTtJQUNwQyxHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBV3BCLHNFQUFXOzswQkFDdkIsOERBQUNzQjs7b0JBQUU7b0JBQU9qQjs7Ozs7OzswQkFDViw4REFBQ2M7Z0JBQUlDLFdBQVdwQixrRkFBdUI7MEJBQ2xDTSxzQkFDRzs7c0NBQ0ksOERBQUNhO3NDQUFLYixLQUFLa0IsS0FBSzs7Ozs7O3dCQUNmbEIsS0FBS21CLFFBQVEsQ0FBQ0MsTUFBTSxJQUFJcEIsS0FBS21CLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLElBQU07NEJBQzlDLE1BQU1DLE9BQU8xQixvREFBTUEsR0FBRzJCLFFBQVEsQ0FBQ0YsRUFBRUcsYUFBYSxDQUFDLEVBQUUsRUFBRSxRQUFRSCxFQUFFRyxhQUFhLENBQUMsRUFBRSxFQUFFLFNBQVNDLFFBQVE7NEJBQ2hHbkIsUUFBUUMsR0FBRyxDQUFDZTs0QkFDWixxQkFBUSw4REFBQ1Y7Z0NBQUlDLFdBQVdwQix5RUFBYztnQ0FBRWtDLElBQUlOLEVBQUVNLEVBQUU7O2tEQUM1Qyw4REFBQ1o7OzRDQUFFOzRDQUFZTSxFQUFFTyxJQUFJOzs7Ozs7O2tEQUNyQiw4REFBQ2I7OzRDQUFFOzRDQUFlTSxFQUFFUSxJQUFJOzs7Ozs7O2tEQUN4Qiw4REFBQ2Q7OzRDQUFFOzRDQUFjTzs7Ozs7Ozs7Ozs7Ozt3QkFHekI7Ozs7Ozs7O1lBSVhoQixRQUFRQyxHQUFHLENBQUNSOzs7Ozs7O0FBR3pCO0dBdENNRjtLQUFBQTs7QUF3Q04sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RlYmF0ZS9pbmRleC5qcz85MDE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudC9tb21lbnQnXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB2b3RlOiBcImFncmVlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IERlYmF0ZSA9ICh7IHZvdGUgfSkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCcvYXBpL2dldC1kZWJhdGUnKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocERhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocERhdGEpXHJcbiAgICAgICAgICAgICAgICBpZiAocERhdGEuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKHBEYXRhLmRlYmF0ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgPHA+Vm90ZToge3ZvdGV9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlYmF0ZV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2RhdGEudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1lc3NhZ2VzLmxlbmd0aCAmJiBkYXRhLm1lc3NhZ2VzLm1hcCgobSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZSA9IG1vbWVudCgpLnN1YnRyYWN0KG0udGltZUFnb1Bvc3RlZFswXSwgJ2RheXMnLCBtLnRpbWVBZ29Qb3N0ZWRbMV0sICdob3VycycpLmNhbGVuZGFyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZX0gaWQ9e20uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnBvc3RlZCBieToge20udXNlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+bWVzc2FnZSBib2R5OiB7bS5ib2R5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD50aW1lIHBvc3RlZDoge3RpbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhkYXRhKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGViYXRlXHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1vbWVudCIsIkRlYmF0ZSIsInZvdGUiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJwRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJkZWJhdGUiLCJjYXRjaCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsInAiLCJkZWJhdGVfY29udGFpbmVyIiwidGl0bGUiLCJtZXNzYWdlcyIsImxlbmd0aCIsIm1hcCIsIm0iLCJ0aW1lIiwic3VidHJhY3QiLCJ0aW1lQWdvUG9zdGVkIiwiY2FsZW5kYXIiLCJtZXNzYWdlIiwiaWQiLCJ1c2VyIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/debate/index.js\n"));

/***/ })

});
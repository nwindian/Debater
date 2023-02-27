/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/debate";
exports.ids = ["pages/debate"];
exports.modules = {

/***/ "./src/styles/Home.module.scss":
/*!*************************************!*\
  !*** ./src/styles/Home.module.scss ***!
  \*************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__zgAJj\",\n\t\"debate_container\": \"Home_debate_container__MFOv3\",\n\t\"header\": \"Home_header__6KCIB\",\n\t\"link\": \"Home_link__nF9qd\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWJhdGVyLWFwcC8uL3NyYy9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcz8yYzFlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJIb21lX21haW5fX3pnQUpqXCIsXG5cdFwiZGViYXRlX2NvbnRhaW5lclwiOiBcIkhvbWVfZGViYXRlX2NvbnRhaW5lcl9fTUZPdjNcIixcblx0XCJoZWFkZXJcIjogXCJIb21lX2hlYWRlcl9fNktDSUJcIixcblx0XCJsaW5rXCI6IFwiSG9tZV9saW5rX19uRjlxZFwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/Home.module.scss\n");

/***/ }),

/***/ "./src/pages/debate/index.js":
/*!***********************************!*\
  !*** ./src/pages/debate/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/Home.module.scss */ \"./src/styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nasync function getServerSideProps() {\n    return {\n        props: {\n            vote: \"agree\"\n        }\n    };\n}\nconst Debate = ({ vote  })=>{\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/get-debate\").then((res)=>res.json()).then((pData)=>{\n            console.log(pData);\n            if (pData.status === 200) {\n                setData(pData.debate);\n            }\n        }).catch((error)=>console.log(error));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().main),\n                children: [\n                    \"Vote: \",\n                    vote\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().debate_container),\n                children: data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: data.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: data.messages.length && data.messages.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    id: m.id,\n                                    children: m.body\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 79\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                            lineNumber: 35,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rebek\\\\Debater\\\\debater-app\\\\src\\\\pages\\\\debate\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            console.log(data)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Debate);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGViYXRlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QztBQUNIO0FBRXBDLGVBQWVHLHFCQUFxQjtJQUN2QyxPQUFPO1FBQ0hDLE9BQU87WUFDSEMsTUFBTTtRQUNWO0lBQ0o7QUFDSixDQUFDO0FBR0QsTUFBTUMsU0FBUyxDQUFDLEVBQUVELEtBQUksRUFBRSxHQUFLO0lBQ3pCLE1BQU0sQ0FBQ0UsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRXJDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pRLE1BQU0sbUJBQ0RDLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSSxJQUNwQkYsSUFBSSxDQUFDRyxDQUFBQSxRQUFTO1lBQ1hDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWixJQUFJQSxNQUFNRyxNQUFNLEtBQUssS0FBSztnQkFDdEJSLFFBQVFLLE1BQU1JLE1BQU07WUFDeEIsQ0FBQztRQUNMLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBU0wsUUFBUUMsR0FBRyxDQUFDSTtJQUNwQyxHQUFHLEVBQUU7SUFFTCxxQkFDSTs7MEJBQ0ksOERBQUNDO2dCQUFFQyxXQUFXckIsc0VBQVc7O29CQUFFO29CQUFPSzs7Ozs7OzswQkFDbEMsOERBQUNrQjtnQkFBSUYsV0FBV3JCLGtGQUF1QjswQkFDbENPLHNCQUNHOztzQ0FDSSw4REFBQ2dCO3NDQUFLaEIsS0FBS2tCLEtBQUs7Ozs7OztzQ0FDaEIsOERBQUNDO3NDQUFJbkIsS0FBS29CLFFBQVEsQ0FBQ0MsTUFBTSxJQUFJckIsS0FBS29CLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLGtCQUFNLDhEQUFDQztvQ0FBR0MsSUFBSUYsRUFBRUUsRUFBRTs4Q0FBR0YsRUFBRUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSXRGbkIsUUFBUUMsR0FBRyxDQUFDUjs7O0FBR3pCO0FBRUEsaUVBQWVELE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWJhdGVyLWFwcC8uL3NyYy9wYWdlcy9kZWJhdGUvaW5kZXguanM/OTAxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHZvdGU6IFwiYWdyZWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IERlYmF0ZSA9ICh7IHZvdGUgfSkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCcvYXBpL2dldC1kZWJhdGUnKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocERhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocERhdGEpXHJcbiAgICAgICAgICAgICAgICBpZiAocERhdGEuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKHBEYXRhLmRlYmF0ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+Vm90ZToge3ZvdGV9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlYmF0ZV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge2RhdGEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2RhdGEudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD57ZGF0YS5tZXNzYWdlcy5sZW5ndGggJiYgZGF0YS5tZXNzYWdlcy5tYXAoKG0pID0+IDxsaSBpZD17bS5pZH0+e20uYm9keX08L2xpPil9PC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Y29uc29sZS5sb2coZGF0YSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlYmF0ZSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIiwidm90ZSIsIkRlYmF0ZSIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInBEYXRhIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImRlYmF0ZSIsImNhdGNoIiwiZXJyb3IiLCJwIiwiY2xhc3NOYW1lIiwibWFpbiIsImRpdiIsImRlYmF0ZV9jb250YWluZXIiLCJ0aXRsZSIsInVsIiwibWVzc2FnZXMiLCJsZW5ndGgiLCJtYXAiLCJtIiwibGkiLCJpZCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/debate/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/debate/index.js"));
module.exports = __webpack_exports__;

})();
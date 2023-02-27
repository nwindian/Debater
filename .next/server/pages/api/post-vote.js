"use strict";
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
exports.id = "pages/api/post-vote";
exports.ids = ["pages/api/post-vote"];
exports.modules = {

/***/ "(api)/./src/pages/api/post-vote.js":
/*!************************************!*\
  !*** ./src/pages/api/post-vote.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nfunction handler(req, res) {\n    const { vote , user  } = req.body;\n    vote && user ? res.status(200).json({\n        status: 200,\n        message: \"vote successful\",\n        data: {\n            vote,\n            user\n        }\n    }) : res.status(400).json({\n        status: 400,\n        error: \"could not POST vote\",\n        data: {\n            vote,\n            user\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Bvc3Qtdm90ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBRTlELFNBQVNBLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxLQUFJLEVBQUUsR0FBR0gsSUFBSUksSUFBSTtJQUMvQkYsUUFBUUMsT0FDTkYsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFRCxRQUFRO1FBQUtFLFNBQVM7UUFBbUJDLE1BQU07WUFBRU47WUFBTUM7UUFBSztJQUFFLEtBQ3JGRixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVELFFBQVE7UUFBS0ksT0FBTztRQUF1QkQsTUFBTTtZQUFFTjtZQUFNQztRQUFLO0lBQUUsRUFBRTtBQUM3RixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGViYXRlci1hcHAvLi9zcmMvcGFnZXMvYXBpL3Bvc3Qtdm90ZS5qcz9jNzJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgeyB2b3RlLCB1c2VyIH0gPSByZXEuYm9keTtcbiAgdm90ZSAmJiB1c2VyID9cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0YXR1czogMjAwLCBtZXNzYWdlOiBcInZvdGUgc3VjY2Vzc2Z1bFwiLCBkYXRhOiB7IHZvdGUsIHVzZXIgfSB9KSA6XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdGF0dXM6IDQwMCwgZXJyb3I6IFwiY291bGQgbm90IFBPU1Qgdm90ZVwiLCBkYXRhOiB7IHZvdGUsIHVzZXIgfSB9KVxufVxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ2b3RlIiwidXNlciIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImRhdGEiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/post-vote.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/post-vote.js"));
module.exports = __webpack_exports__;

})();
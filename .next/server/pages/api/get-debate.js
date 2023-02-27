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
exports.id = "pages/api/get-debate";
exports.ids = ["pages/api/get-debate"];
exports.modules = {

/***/ "(api)/./src/pages/api/get-debate.js":
/*!*************************************!*\
  !*** ./src/pages/api/get-debate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    res.status(200).json({\n        status: 200,\n        message: \"debate retrieved\",\n        debate: {\n            title: \"debate title\",\n            messages: [\n                {\n                    id: 0,\n                    user: \"user1\",\n                    body: \"message 1\",\n                    sideIsPro: true,\n                    timeAgoPosted: [\n                        5,\n                        2.8\n                    ]\n                },\n                {\n                    id: 1,\n                    user: \"user2\",\n                    body: \"message 2\",\n                    sideIsPro: false,\n                    timeAgoPosted: [\n                        4,\n                        1.5\n                    ]\n                },\n                {\n                    id: 2,\n                    user: \"user3\",\n                    body: \"message 3\",\n                    sideIsPro: true,\n                    timeAgoPosted: [\n                        3,\n                        3.22\n                    ]\n                },\n                {\n                    id: 3,\n                    user: \"user4\",\n                    body: \"message 4\",\n                    sideIsPro: false,\n                    timeAgoPosted: [\n                        3,\n                        1\n                    ]\n                }\n            ]\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dldC1kZWJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3BDQSxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQ2ZELFFBQVE7UUFDUkUsU0FBUztRQUNUQyxRQUFRO1lBQ0ZDLE9BQU87WUFDUEMsVUFBVTtnQkFDSjtvQkFBRUMsSUFBSTtvQkFBR0MsTUFBTTtvQkFBU0MsTUFBTTtvQkFBYUMsV0FBVyxJQUFJO29CQUFFQyxlQUFlO3dCQUFDO3dCQUFHO3FCQUFJO2dCQUFDO2dCQUNwRjtvQkFBRUosSUFBSTtvQkFBR0MsTUFBTTtvQkFBU0MsTUFBTTtvQkFBYUMsV0FBVyxLQUFLO29CQUFFQyxlQUFlO3dCQUFDO3dCQUFHO3FCQUFJO2dCQUFDO2dCQUNyRjtvQkFBRUosSUFBSTtvQkFBR0MsTUFBTTtvQkFBU0MsTUFBTTtvQkFBYUMsV0FBVyxJQUFJO29CQUFFQyxlQUFlO3dCQUFDO3dCQUFHO3FCQUFLO2dCQUFDO2dCQUNyRjtvQkFBRUosSUFBSTtvQkFBR0MsTUFBTTtvQkFBU0MsTUFBTTtvQkFBYUMsV0FBVyxLQUFLO29CQUFFQyxlQUFlO3dCQUFDO3dCQUFHO3FCQUFFO2dCQUFDO2FBQ3hGO1FBQ1A7SUFDTjtBQUNOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWJhdGVyLWFwcC8uL3NyYy9wYWdlcy9hcGkvZ2V0LWRlYmF0ZS5qcz80OGY0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xyXG4gICAgICAgICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJkZWJhdGUgcmV0cmlldmVkXCIsXHJcbiAgICAgICAgICAgIGRlYmF0ZToge1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJkZWJhdGUgdGl0bGVcIixcclxuICAgICAgICAgICAgICAgICAgbWVzc2FnZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBpZDogMCwgdXNlcjogXCJ1c2VyMVwiLCBib2R5OiBcIm1lc3NhZ2UgMVwiLCBzaWRlSXNQcm86IHRydWUsIHRpbWVBZ29Qb3N0ZWQ6IFs1LCAyLjhdIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgaWQ6IDEsIHVzZXI6IFwidXNlcjJcIiwgYm9keTogXCJtZXNzYWdlIDJcIiwgc2lkZUlzUHJvOiBmYWxzZSwgdGltZUFnb1Bvc3RlZDogWzQsIDEuNV0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBpZDogMiwgdXNlcjogXCJ1c2VyM1wiLCBib2R5OiBcIm1lc3NhZ2UgM1wiLCBzaWRlSXNQcm86IHRydWUsIHRpbWVBZ29Qb3N0ZWQ6IFszLCAzLjIyXSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiAzLCB1c2VyOiBcInVzZXI0XCIsIGJvZHk6IFwibWVzc2FnZSA0XCIsIHNpZGVJc1BybzogZmFsc2UsIHRpbWVBZ29Qb3N0ZWQ6IFszLCAxXSB9XHJcbiAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJkZWJhdGUiLCJ0aXRsZSIsIm1lc3NhZ2VzIiwiaWQiLCJ1c2VyIiwiYm9keSIsInNpZGVJc1BybyIsInRpbWVBZ29Qb3N0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/get-debate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/get-debate.js"));
module.exports = __webpack_exports__;

})();
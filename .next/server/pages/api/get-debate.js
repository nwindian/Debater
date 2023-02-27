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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    res.status(200).json({\n        status: 200,\n        message: \"debate retrieved\",\n        debate: {\n            title: \"debate title\",\n            messages: [\n                {\n                    id: 0,\n                    user: \"user1\",\n                    body: \"message 1\",\n                    sideIsPro: true,\n                    timePosted: `moment().subtract(1, 'days').calendar()`\n                },\n                {\n                    id: 1,\n                    user: \"user2\",\n                    body: \"message 2\",\n                    sideIsPro: false,\n                    timePosted: `moment().subtract(1, 'days').calendar()`\n                },\n                {\n                    id: 2,\n                    user: \"user3\",\n                    body: \"message 3\",\n                    sideIsPro: true,\n                    timePosted: `moment().subtract(1, 'days').calendar()`\n                },\n                {\n                    id: 3,\n                    user: \"user4\",\n                    body: \"message 4\",\n                    sideIsPro: false,\n                    timePosted: `moment().subtract(1, 'days').calendar()`\n                }\n            ]\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dldC1kZWJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3BDQSxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQ2ZELFFBQVE7UUFDUkUsU0FBUztRQUNUQyxRQUFRO1lBQ0ZDLE9BQU87WUFDUEMsVUFBVTtnQkFDSjtvQkFBRUMsSUFBSTtvQkFBR0MsTUFBTTtvQkFBU0MsTUFBTTtvQkFBYUMsV0FBVyxJQUFJO29CQUFFQyxZQUFZLENBQUMsdUNBQXVDLENBQUM7Z0JBQUM7Z0JBQ2xIO29CQUFFSixJQUFJO29CQUFHQyxNQUFNO29CQUFTQyxNQUFNO29CQUFhQyxXQUFXLEtBQUs7b0JBQUVDLFlBQVksQ0FBQyx1Q0FBdUMsQ0FBQztnQkFBQztnQkFDbkg7b0JBQUVKLElBQUk7b0JBQUdDLE1BQU07b0JBQVNDLE1BQU07b0JBQWFDLFdBQVcsSUFBSTtvQkFBRUMsWUFBWSxDQUFDLHVDQUF1QyxDQUFDO2dCQUFDO2dCQUNsSDtvQkFBRUosSUFBSTtvQkFBR0MsTUFBTTtvQkFBU0MsTUFBTTtvQkFBYUMsV0FBVyxLQUFLO29CQUFFQyxZQUFZLENBQUMsdUNBQXVDLENBQUM7Z0JBQUM7YUFDeEg7UUFDUDtJQUNOO0FBQ04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RlYmF0ZXItYXBwLy4vc3JjL3BhZ2VzL2FwaS9nZXQtZGViYXRlLmpzPzQ4ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgICAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcImRlYmF0ZSByZXRyaWV2ZWRcIixcclxuICAgICAgICAgICAgZGViYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcImRlYmF0ZSB0aXRsZVwiLFxyXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiAwLCB1c2VyOiBcInVzZXIxXCIsIGJvZHk6IFwibWVzc2FnZSAxXCIsIHNpZGVJc1BybzogdHJ1ZSwgdGltZVBvc3RlZDogYG1vbWVudCgpLnN1YnRyYWN0KDEsICdkYXlzJykuY2FsZW5kYXIoKWAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBpZDogMSwgdXNlcjogXCJ1c2VyMlwiLCBib2R5OiBcIm1lc3NhZ2UgMlwiLCBzaWRlSXNQcm86IGZhbHNlLCB0aW1lUG9zdGVkOiBgbW9tZW50KCkuc3VidHJhY3QoMSwgJ2RheXMnKS5jYWxlbmRhcigpYCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiAyLCB1c2VyOiBcInVzZXIzXCIsIGJvZHk6IFwibWVzc2FnZSAzXCIsIHNpZGVJc1BybzogdHJ1ZSwgdGltZVBvc3RlZDogYG1vbWVudCgpLnN1YnRyYWN0KDEsICdkYXlzJykuY2FsZW5kYXIoKWAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBpZDogMywgdXNlcjogXCJ1c2VyNFwiLCBib2R5OiBcIm1lc3NhZ2UgNFwiLCBzaWRlSXNQcm86IGZhbHNlLCB0aW1lUG9zdGVkOiBgbW9tZW50KCkuc3VidHJhY3QoMSwgJ2RheXMnKS5jYWxlbmRhcigpYCB9XHJcbiAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJkZWJhdGUiLCJ0aXRsZSIsIm1lc3NhZ2VzIiwiaWQiLCJ1c2VyIiwiYm9keSIsInNpZGVJc1BybyIsInRpbWVQb3N0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/get-debate.js\n");

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
webpackHotUpdate("static\\development\\pages\\job\\[id].js",{

/***/ "./pages/job/[id]/index.tsx":
/*!**********************************!*\
  !*** ./pages/job/[id]/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Elements */ "./Elements/index.tsx");
/* harmony import */ var _DB_JobDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../DB/JobDB */ "./DB/JobDB.ts");
var _jsxFileName = "F:\\2019\\Testing\\heyjobs\\pages\\job\\[id]\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Job = function Job() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var passedID = router.query.id;
  var passedJob = _DB_JobDB__WEBPACK_IMPORTED_MODULE_3__["JobDB"].filter(function (job) {
    return job.id == Number(passedID);
  })[0];
  console.log(passedID);
  return __jsx(_Elements__WEBPACK_IMPORTED_MODULE_2__["JobInfo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, " ", passedJob ? passedJob.title : 'Job not found'), passedJob && __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Apply for Job"), passedJob && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "descTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Job Description"), __jsx(_Elements__WEBPACK_IMPORTED_MODULE_2__["JobDetails"], {
    theme: {
      fulltext: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, passedJob.description))));
};

/* harmony default export */ __webpack_exports__["default"] = (Job);

/***/ })

})
//# sourceMappingURL=[id].js.06ff34ac8508c9f9450e.hot-update.js.map
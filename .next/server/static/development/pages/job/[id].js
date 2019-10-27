module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./DB/JobDB.ts":
/*!*********************!*\
  !*** ./DB/JobDB.ts ***!
  \*********************/
/*! exports provided: JobDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDB", function() { return JobDB; });
/* harmony import */ var _Types_Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Types/Types */ "./Types/Types.ts");

const JobDB = [{
  id: 1,
  title: "Frontend Developer",
  description: `The position has the following core responsibilities:  For qualified opportunities, lead Monetization/BSS and Customer Care portfolio solutions, customer technical engagements, understanding customers’ business pain points, requirements (including detailed use cases) and KPI’s. Establish trusting relationship with customer technical decision makers. Lead BSS offer solution strategy (including products and services requirements): assess customer RFP or input documents, define solution to be positioned and reference architecture by adapting Nokia blueprints to customer needs. Bring and maintain subject matter expertise on our NSW Monetization and in Nokia end-to-end solutions involving the Monetization and customer care solutions. Lead discussions on technical requirements and resolve gaps with Product Managers and System Engineers to ensure customer features/roadmap commitments can be met, during pre-sales engagements. Participate in technical discussions with other Nokia Business Groups and 3rd parties to define E2E solution required by customers. Guide and review technical offer deliverables: SoW, SoC/Point by point Responses, BoQs. Drive and document overall deal solution strategy (product and services), interface with PLMs & Pre-Sales (Services), to drive optimal scoping & cost structure to ensure competitivity and future up-sells. Support the sales team in bid defense planning and lead NSW technical presentation to the customer. Lead PoC/Trial proposals, including definition of trial scope, architecture, use cases and drive necessary management approvals Work with program management and delivery teams for knowledge transfer of customer project from pre-sales to post-sales Participate in account planning and revenue funnel reviews with sales and commercial management teams Participate in periodic reviews with  Digital experience Leaders to provide status of key opportunities, wins/losses feedbacks and identified BSproduct/services gaps Strictly adhere to the published NOKIA SELL & NSW processes. Complete all administrative assignments comprehensively and on-time. Represent NOKIA in a professional and an ethical manner. Travel to customer meetings and related business activities can be up to 2 to 3 days a week in assigned territory. `,
  employment_type: _Types_Types__WEBPACK_IMPORTED_MODULE_0__["EnumEmploymentType"].Full_Time
}, {
  id: 2,
  title: "Backend Developer",
  description: `Mission:  Manages the implementation of OCS for various customers, in terms of all the technical aspects including feature content, delivery date and quality of the technical solution, from offer preparation through deployment activities and customer acceptance. Plans, organizes and pilots the Customer Technical Project in the framework of the contract scope; coordinates the technical support activities involving other Nokia departments; is the customer prime interface for all the technical aspects of the solution and manages the day to day relationship with the customer. TPM works closely with the Solutions Architect to insure delivery of the solution. TPM is also an active contributor of Nokia products/solution introduction, evolution and roadmap.  Key Responsibilities:  Is prime interface with customer Technical Managers for all technical concerns. Understands the customers&#039; strategy and manages his technical expectations Identifies deliverables under his responsibility. Plans & executes these deliverables taking care of cost & milestones Follows up KPIs of the operator&#039;s network to ensure the optimized usage of the deployed solution Is in charge of identifying risks for both customer and Nokia Proposes & implements risk mitigation plan Identifies and analyses customer needs and advises them on solution / technology / products that are the best fit. Supports offer development. Provides feedback to R&D/PLM teams regarding features & performances needed Is in charge of the coordination with new product introduction teams for first implementation applicable in their projects Is in charge to build and manage the customer network configuration changes. `,
  employment_type: _Types_Types__WEBPACK_IMPORTED_MODULE_0__["EnumEmploymentType"].Full_Time
}, {
  id: 3,
  title: "FullStack Developer",
  description: `JOB PURPOSE/KEY RESPONSIBILITIES:  Prepare, develop and analyze management accounting information Provide high quality support service to Finance Business Partner (FBP) / Finance Director (FD) in the organization, providing financial insight to management on all spend areas and providing options for improving return on investment  ACCOUNTABILITY: The Financial Reporting Manager will be responsible for all aspects of Gulf management accounting & reporting activities. The primary responsibilities would include:  Producing monthly and quarterly management reports to senior management Lead the development and improvement of financial processes: Finance reporting tools, Management reporting tools Publish sales reports for providing visibility to the management on performance track. Publish monthly dashboard for senior management. Analysis of monthly in-market/to-market sales vs. budget and monthly presentation to management on YTD /YTG trend analysis Monthly review of market returns and expiries and discussion with logistics and commercial for their improvement and controls Monthly review of gross margins, standard cost & releases for all SKU’s sold in Gulf and liaising with ICT  team/Pricing team for timely correction Analyzing variances and exploring potential problems with FBP and FD Providing senior management a forecasted P&L / latest estimate on a regular basis Making appropriate recommendations and advising the impact on the business Improving and developing new systems surrounding all aspects of GSK Gulf operations Responsibility for project evaluation, due diligence, financial forecasting Ensure implementation of finance projects on time and in line with market needs and corporate / above country expectations  JOB FACTORS     COMPLEXITY:  Gulf consist of 5 scattered, complex, unique markets with 10 plus distributors and government agencies of different skill levels.  Huge gap in per capita income between markets, different currencies, tax, pricing, and laws Support Gulf management to achieve annual turnover of £125M Management of costing data with all sites in UK, Europe, etc. to ensure accuracy, reliability and proper rationalization.  Address product profitability, volume, pricing and discount thresholds and create products pricing, costing and mix monitor system to increase product profitability margins `,
  employment_type: _Types_Types__WEBPACK_IMPORTED_MODULE_0__["EnumEmploymentType"].Full_Time
}, {
  id: 4,
  title: "DevOps Engineer",
  description: `Understands the Software Development Lifecycle and has the outright 
        understanding of various automation tools for developing digital pipelines (CI/ CD pipelines)`,
  employment_type: _Types_Types__WEBPACK_IMPORTED_MODULE_0__["EnumEmploymentType"].Part_Time
}, {
  id: 5,
  title: "Network engineer",
  description: `involves setting up, administering, maintaining and upgrading communication systems,
         local area networks and wide area networks for an organisation`,
  employment_type: _Types_Types__WEBPACK_IMPORTED_MODULE_0__["EnumEmploymentType"].Freelance
}, {
  id: 6,
  title: "Developer",
  description: "Work in a team of experienced developers maintaining a travel ecommerce web app & improving the overall UI/UX",
  employment_type: _Types_Types__WEBPACK_IMPORTED_MODULE_0__["EnumEmploymentType"].Internship
}];

/***/ }),

/***/ "./Elements/JobDetails.tsx":
/*!*********************************!*\
  !*** ./Elements/JobDetails.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
font-size: .9em;
color: #777;
text-overflow: ellipsis;
width: 80vw;
white-space: ${props => props.theme && props.theme.fulltext ? 'none' : 'nowrap'};
overflow: hidden;
`);

/***/ }),

/***/ "./Elements/JobHeader.tsx":
/*!********************************!*\
  !*** ./Elements/JobHeader.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
a{
    color: #217fb6;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1em;
    margin-right:15px;
    &:hover{
        color: #155275;
        text-decoration: underline;
    }
}

span{
    background: #5cb85c;
    display: inline;
    padding: 1px 8px;
    font-weight: 500;
    color: #fff;
    text-align: center;
    /* white-space: nowrap; */
    border-radius: 5px;
    font-size: x-small;
}

`);

/***/ }),

/***/ "./Elements/JobInfo.tsx":
/*!******************************!*\
  !*** ./Elements/JobInfo.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
div{
    margin-top: 14px;
    background-color: #fff;
    border: 1px solid #D0D0D0;
    padding: 20px 25px;
    display: flex;
    flex-direction: column;
    
    h1{
        font-family:sans-serif;
        font-size: 1.7em;
        font-weight: 700;
        display: flex;
        color: #20bf6b;
    }
    button{
            color: #fff;
            background: #3794ce;
            border-color: #2e86bd;
            padding: 7px 30px;
            width: 250px;
            border: 1px solid transparent;
            box-shadow: 0 -2px rgba(0,0,0,.2) inset;
            font-weight: 400;
            font-size:14px;
            cursor: pointer;
            &:hover{
                        color: #fff;
                        background-color: #2978a9;
                        border-color: #22638c;
                    } 
            }
    .descTitle{
        color: #3c3c3c;
        font-size: 1.2em;
        font-weight: 700;
        margin: 0 0 10px;
        border: none;
        border-bottom: 1px solid #D0D0D0;
    }
    @media (max-width: 760px) {
        div{
            padding: 20px 10px;
        }
        h1{
                justify-content: center !important;
            }
            button{
                width:100%;
                text-align:center;
            }
           .descTitle{
            text-align:center;
           }
    }
}
`);

/***/ }),

/***/ "./Elements/JobsGrid.tsx":
/*!*******************************!*\
  !*** ./Elements/JobsGrid.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul`
list-style: none;
padding: 10px;
background: #fff;
li{
    /* margin: 15px; */
    border-bottom: 1px solid #eee;
    padding: 15px 0;
    &:nth-child(1){
    border-bottom:none;
}
}
`);

/***/ }),

/***/ "./Elements/SearchPanel.tsx":
/*!**********************************!*\
  !*** ./Elements/SearchPanel.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
h1{
    font-family:sans-serif;
    font-size:36px;
    display: flex;
    justify-content: center;
    color: #20bf6b;
}
div{
    display:flex;
    justify-content:center;
    input{
        width: 40vw;
        height: 20px;
        padding-left:5px; 
    }
}
`);

/***/ }),

/***/ "./Elements/index.tsx":
/*!****************************!*\
  !*** ./Elements/index.tsx ***!
  \****************************/
/*! exports provided: SearchPanel, JobsGrid, JobHeader, JobDetails, JobInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchPanel */ "./Elements/SearchPanel.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchPanel", function() { return _SearchPanel__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _JobsGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JobsGrid */ "./Elements/JobsGrid.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JobsGrid", function() { return _JobsGrid__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _JobHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JobHeader */ "./Elements/JobHeader.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JobHeader", function() { return _JobHeader__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _JobDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JobDetails */ "./Elements/JobDetails.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JobDetails", function() { return _JobDetails__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _JobInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./JobInfo */ "./Elements/JobInfo.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JobInfo", function() { return _JobInfo__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./Types/Types.ts":
/*!************************!*\
  !*** ./Types/Types.ts ***!
  \************************/
/*! exports provided: EnumEmploymentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumEmploymentType", function() { return EnumEmploymentType; });
let EnumEmploymentType;

(function (EnumEmploymentType) {
  EnumEmploymentType["Full_Time"] = "Full Time";
  EnumEmploymentType["Part_Time"] = "Part Time";
  EnumEmploymentType["Freelance"] = "Freelance";
  EnumEmploymentType["Internship"] = "Internship";
})(EnumEmploymentType || (EnumEmploymentType = {}));

/***/ }),

/***/ "./pages/job/[id]/index.tsx":
/*!**********************************!*\
  !*** ./pages/job/[id]/index.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Elements */ "./Elements/index.tsx");
/* harmony import */ var _DB_JobDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../DB/JobDB */ "./DB/JobDB.ts");
var _jsxFileName = "F:\\2019\\Testing\\heyjobs\\pages\\job\\[id]\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Job = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    id: passedID
  } = router.query;
  let passedJob = _DB_JobDB__WEBPACK_IMPORTED_MODULE_3__["JobDB"].filter(job => job.id == Number(passedID))[0];
  console.log(passedID);
  return __jsx(_Elements__WEBPACK_IMPORTED_MODULE_2__["JobInfo"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, " ", passedJob ? passedJob.title : 'Job not found'), passedJob && __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Apply for Job"), passedJob && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("div", {
    className: "descTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Job Description"), __jsx(_Elements__WEBPACK_IMPORTED_MODULE_2__["JobDetails"], {
    theme: {
      fulltext: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, passedJob.description))));
};

/* harmony default export */ __webpack_exports__["default"] = (Job);

/***/ }),

/***/ 3:
/*!****************************************!*\
  !*** multi ./pages/job/[id]/index.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\2019\Testing\heyjobs\pages\job\[id]\index.tsx */"./pages/job/[id]/index.tsx");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map
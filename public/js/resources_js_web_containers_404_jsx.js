"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_web_containers_404_jsx"],{

/***/ "./resources/js/web/containers/404.jsx":
/*!*********************************************!*\
  !*** ./resources/js/web/containers/404.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _asset_images_oops_orange_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../asset/images/oops-orange.jpg */ "./resources/js/asset/images/oops-orange.jpg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







function PageError(props) {
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useHistory)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setTimeout(function () {
      var timeLeft = 6;
      var elem = document.getElementById('Timer');
      var timerId = setInterval(countdown, 1000);

      function countdown() {
        if (timeLeft == 0) {
          clearTimeout(timerId);
          history.push('/');
        } else {
          elem.innerHTML = timeLeft - 1;
          timeLeft--;
        }
      }
    }, 3000);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "container mt-5 position-relative",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "row align-items-center justify-content-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: "box-img",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            src: _asset_images_oops_orange_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
            alt: ""
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "count-down",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: "Quay l\u1EA1i trang ch\u1EE7"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            id: "Timer",
            children: "5"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
            children: "s"
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageError);

/***/ }),

/***/ "./resources/js/asset/images/oops-orange.jpg":
/*!***************************************************!*\
  !*** ./resources/js/asset/images/oops-orange.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/oops-orange.jpg?f7c8d4fe9abcae2321c6e871085f2e4e");

/***/ })

}]);
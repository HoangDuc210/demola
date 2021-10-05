(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./resources/js/components/musics/AddMusic/AddMusicComponent.jsx":
/*!***********************************************************************!*\
  !*** ./resources/js/components/musics/AddMusic/AddMusicComponent.jsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.module.js");
/* harmony import */ var _configFirebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../configFirebase */ "./resources/js/configFirebase.js");







function AddMusicComponent(props) {
  // const [errorFile, setErrorFile] = useState();
  // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  // const validationSchema = yup.object().shape({
  //     name_music: yup
  //         .string()
  //         .trim()
  //         .required("Vui lòng nhập họ và tên!!!")
  //         .max(20, "Tên nhân viên không quá 20 ký tự!!!"),
  //     like: yup
  //         .string()
  //         .trim()
  //         .required("Vui lòng nhập số điện thoại!!!")
  //         .min(10, "Số điện thoại không đúng định dạng!!!")
  //         .max(11, "Số điện thoại không đúng định dạng!!!"),
  //     cate_music: yup
  //         .string()
  //         .trim()
  //         .required("Vui lòng nhập hthành phố!!!")
  //         .max(20, "Tên thành phố không quá 20 ký tự!!!")
  // });
  // const {
  //     register,
  //     handleSubmit,
  //     setValue,
  //     formState: { errors }
  // } = useForm({ resolver: yupResolver(validationSchema) });
  // const apiUrl = "http://localhost:8000/api/v1/musics";
  // const onSubmit = async data => {
  //     const file_music_lenght = data.file_music.length;
  //     if (file_music_lenght === 0) return setErrorFile("Bạn chưa chọn file");
  //     const file_music_format = data.file_music[0].type;
  //     if (file_music_format !== "audio/mpeg") return setErrorFile("Bạn chưa chọn file nhạc");
  //     //upload image filebase
  //     const storage = firebase.storage();
  //     let bucketName = "musics";
  //     let file = data.file_music[0];
  //     let storageRef = storage.ref(`${bucketName}/${file.name}`);
  //     let uploadTask = await storageRef.put(file);
  //     const urlData = await storage.ref(`${bucketName}/${file.name}`).getDownloadURL();
  //     const dataMusic = {
  //         name_music: data.name_music,
  //         file_music: urlData,
  //         cate_music: data.cate_music,
  //         like: data.like
  //     }
  //     const apiUrl = "http://localhost:8000/api/v1/musics";
  //     axios.post(apiUrl, dataMusic).then(res => {
  //         console.log(res);
  //     });
  // };
  // const cancle = () => {
  //     setValue("name_music", "");
  //     setValue("file_music", "");
  //     setValue("cate_music", "");
  //     setValue("like", "");
  // };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
}

/* harmony default export */ __webpack_exports__["default"] = (AddMusicComponent);

/***/ }),

/***/ "./resources/js/configFirebase.js":
/*!****************************************!*\
  !*** ./resources/js/configFirebase.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");


var firebaseConfig = {
  apiKey: "AIzaSyC2uGRDMnhvofLNUQA4Sm-RACAnoaOmZJA",
  authDomain: "music-of-hoang-147e3.firebaseapp.com",
  projectId: "music-of-hoang-147e3",
  storageBucket: "music-of-hoang-147e3.appspot.com",
  messagingSenderId: "474095240414",
  appId: "1:474095240414:web:e4fc62e4945d90e1dc6e4f",
  measurementId: "G-T68REFX0HN"
}; // Initialize Firebase

firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ })

}]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*var obj;\r\n\r\nobj = {\r\n\tname: 'Eldar',\r\n\tnick: 'Dissmay'\r\n};\r\n\r\nvar obj2 = {\r\n\tobj1: obj,\r\n\ttext: 'Something'\r\n}\r\n\r\nconsole.log( obj2.obj1.nick );*/\n\n/*function ourFunction(){\r\n\talert('Hello!');\r\n}*/\n\n/*ourFunction();*/\n\n/*var someFunc = function(a){\r\n\tconsole.log(a);\r\n\tconsole.log( a * a);\r\n}*/\n\n/*someFunc(5);\r\nsomeFunc(10);*/\n\n/*var obj = {\r\n\tname: 'Dima',\r\n\tsquare: someFunc\r\n}\r\nvar carArray = [1.8, 'rare', function(){console.log('Rare move')}];\r\ncarArray[2]();\r\nvar car = {\r\n\tengine: 1.8,\r\n\tprivod: 'rare',\r\n\trareMove: function(){\r\n\t\tconsole.log('I move to rare side!');\r\n\t}\r\n}\r\n\r\ncar.rareMove();\r\n\r\nobj.square(6);*/\n\n/*function strLeng(str){\r\n\tif( str.length > 10 ){\r\n\t\tconsole.log('Слишком длинный текст!');\r\n\t} else if( str.length < 3){\r\n\t\tconsole.log('Слишком короткий текст!');\r\n\t} else {\r\n\t\tconsole.log('Норм!');\r\n\t}\r\n}\r\n\r\nstrLeng('Привет!'); // Норм\r\nstrLeng('kfjshdfkjshdfjkhsdfsdj'); // Слишком длинный\r\nstrLeng('Yo'); // Слишком короткий*/\n\n/*var boolean;\r\n\r\nboolean = true; //да\r\nboolean = false; //нет\r\n\r\nif( boolean ){\r\n\tconsole.log('True!');\r\n} else{\r\n\tconsole.log('False!');\r\n}*/\nvar array = [10, 15, 25, 'Hello', 13.5]; // 5 < 5\n\nvar user = {\n  nick: 'dimovich85',\n  name: 'Dima',\n  email: 'dimovich85@gmail.com'\n};\n\nfor (var i = 0; i < array.length; i++) {\n  console.log(array[i]);\n}\n\nconsole.log(user.nick);\nconsole.log(user['nick']);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiLyp2YXIgb2JqO1xyXG5cclxub2JqID0ge1xyXG5cdG5hbWU6ICdFbGRhcicsXHJcblx0bmljazogJ0Rpc3NtYXknXHJcbn07XHJcblxyXG52YXIgb2JqMiA9IHtcclxuXHRvYmoxOiBvYmosXHJcblx0dGV4dDogJ1NvbWV0aGluZydcclxufVxyXG5cclxuY29uc29sZS5sb2coIG9iajIub2JqMS5uaWNrICk7Ki9cclxuXHJcbi8qZnVuY3Rpb24gb3VyRnVuY3Rpb24oKXtcclxuXHRhbGVydCgnSGVsbG8hJyk7XHJcbn0qL1xyXG5cclxuLypvdXJGdW5jdGlvbigpOyovXHJcblxyXG4vKnZhciBzb21lRnVuYyA9IGZ1bmN0aW9uKGEpe1xyXG5cdGNvbnNvbGUubG9nKGEpO1xyXG5cdGNvbnNvbGUubG9nKCBhICogYSk7XHJcbn0qL1xyXG5cclxuLypzb21lRnVuYyg1KTtcclxuc29tZUZ1bmMoMTApOyovXHJcblxyXG4vKnZhciBvYmogPSB7XHJcblx0bmFtZTogJ0RpbWEnLFxyXG5cdHNxdWFyZTogc29tZUZ1bmNcclxufVxyXG52YXIgY2FyQXJyYXkgPSBbMS44LCAncmFyZScsIGZ1bmN0aW9uKCl7Y29uc29sZS5sb2coJ1JhcmUgbW92ZScpfV07XHJcbmNhckFycmF5WzJdKCk7XHJcbnZhciBjYXIgPSB7XHJcblx0ZW5naW5lOiAxLjgsXHJcblx0cHJpdm9kOiAncmFyZScsXHJcblx0cmFyZU1vdmU6IGZ1bmN0aW9uKCl7XHJcblx0XHRjb25zb2xlLmxvZygnSSBtb3ZlIHRvIHJhcmUgc2lkZSEnKTtcclxuXHR9XHJcbn1cclxuXHJcbmNhci5yYXJlTW92ZSgpO1xyXG5cclxub2JqLnNxdWFyZSg2KTsqL1xyXG5cclxuLypmdW5jdGlvbiBzdHJMZW5nKHN0cil7XHJcblx0aWYoIHN0ci5sZW5ndGggPiAxMCApe1xyXG5cdFx0Y29uc29sZS5sb2coJ9Ch0LvQuNGI0LrQvtC8INC00LvQuNC90L3Ri9C5INGC0LXQutGB0YIhJyk7XHJcblx0fSBlbHNlIGlmKCBzdHIubGVuZ3RoIDwgMyl7XHJcblx0XHRjb25zb2xlLmxvZygn0KHQu9C40YjQutC+0Lwg0LrQvtGA0L7RgtC60LjQuSDRgtC10LrRgdGCIScpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZygn0J3QvtGA0LwhJyk7XHJcblx0fVxyXG59XHJcblxyXG5zdHJMZW5nKCfQn9GA0LjQstC10YIhJyk7IC8vINCd0L7RgNC8XHJcbnN0ckxlbmcoJ2tmanNoZGZranNoZGZqa2hzZGZzZGonKTsgLy8g0KHQu9C40YjQutC+0Lwg0LTQu9C40L3QvdGL0Llcclxuc3RyTGVuZygnWW8nKTsgLy8g0KHQu9C40YjQutC+0Lwg0LrQvtGA0L7RgtC60LjQuSovXHJcblxyXG4vKnZhciBib29sZWFuO1xyXG5cclxuYm9vbGVhbiA9IHRydWU7IC8v0LTQsFxyXG5ib29sZWFuID0gZmFsc2U7IC8v0L3QtdGCXHJcblxyXG5pZiggYm9vbGVhbiApe1xyXG5cdGNvbnNvbGUubG9nKCdUcnVlIScpO1xyXG59IGVsc2V7XHJcblx0Y29uc29sZS5sb2coJ0ZhbHNlIScpO1xyXG59Ki9cclxuXHJcbnZhciBhcnJheSA9IFsxMCwgMTUsIDI1LCAnSGVsbG8nLCAxMy41XTsgLy8gNSA8IDVcclxudmFyIHVzZXIgPSB7XHJcblx0bmljazogJ2RpbW92aWNoODUnLFxyXG5cdG5hbWU6ICdEaW1hJyxcclxuXHRlbWFpbDogJ2RpbW92aWNoODVAZ21haWwuY29tJ1xyXG59XHJcblxyXG5mb3IoIHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcclxuXHRjb25zb2xlLmxvZyggYXJyYXlbaV0gKTtcclxufVxyXG5cclxuY29uc29sZS5sb2coIHVzZXIubmljayApO1xyXG5jb25zb2xlLmxvZyggdXNlclsnbmljayddICk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQTs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("// slider\r\n$(document).ready(function () {\r\n\r\n    $('.recently__slider-inner').slick({\r\n        infinite: true,\r\n        slidesToShow: 3,\r\n        slidesToScroll: 1,\r\n        prevArrow: $('.arrow-left'),\r\n        nextArrow: $('.arrow-right'),\r\n        responsive: [\r\n            {\r\n                breakpoint: 1024,\r\n                settings: {\r\n                    slidesToShow: 2,\r\n                    slidesToScroll: 1,\r\n                    infinite: true,\r\n                }\r\n            },\r\n            {\r\n                breakpoint: 769,\r\n                settings: {\r\n                    slidesToShow: 1,\r\n                    slidesToScroll: 1,\r\n                    infinite: true,\r\n                }\r\n            },\r\n\r\n\r\n        ]\r\n    });\r\n\r\n\r\n\r\n    $('a.scroll-home').click(function () {\r\n        scrollToAnimate('#section-home')\r\n    })\r\n\r\n    $('a.scroll-work').click(function () {\r\n        scrollToAnimate('#section-work')\r\n    })\r\n\r\n    $('a.scroll-freelance').click(function () {\r\n        scrollToAnimate('#section-freelance')\r\n    })\r\n\r\n    function scrollToAnimate(selector, time = 1000) {\r\n        $('html, body').animate({\r\n            scrollTop: $(selector).offset().top\r\n        }, time);\r\n    }\r\n\r\n    let body = document.querySelector('body')\r\n    burgerBtn = document.querySelector('.btn-burger');\r\n    menuContent = document.querySelector('.dropdown-menu__mobile');\r\n    burgerBtn.addEventListener('click', function () {\r\n        if (menuContent.classList.contains('flex') === false) {\r\n            menuContent.classList.add('flex');\r\n            burgerBtn.classList.add('burger-close');\r\n            menuContent.classList.remove('hide');\r\n            body.classList.add('scroll-hide');\r\n        }\r\n        else\r\n        {\r\n            menuContent.classList.remove('flex');\r\n            burgerBtn.classList.remove('burger-close');\r\n            menuContent.classList.add('hide');\r\n            body.classList.remove('scroll-hide');\r\n        }\r\n    })\r\n        let scrollEl = document.querySelectorAll('.scroll__el')\r\n    scrollEl.forEach((item) => {\r\n        item.addEventListener('click', () => {\r\n            menuContent.classList.remove('flex');\r\n            burgerBtn.classList.remove('burger-close');\r\n            body.classList.remove('scroll-hide');\r\n            menuContent.classList.add('hide')\r\n        })\r\n    })\r\n});\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp_build/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _db_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oRai");
var _db_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t("oRai", 1);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"]`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({
  theme
}) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
const {
  theme
} = _db_json__WEBPACK_IMPORTED_MODULE_3__; // eslint-disable-next-line react/prop-types

function App({
  Component,
  pageProps
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
    rel: "stylesheet"
  })), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme
  }, __jsx(GlobalStyle, null), __jsx(Component, pageProps)));
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oRai":
/***/ (function(module) {

module.exports = JSON.parse("{\"bg\":\"https://williroger.42web.io/imagens/bg_quiz.jpg\",\"title\":\"#LivrosDaFUVEST\",\"description\":\"Quiz sobre as obras literárias de leitura obrigatória da FUVEST 2021\",\"questions\":[{\"image\":\"https://media.giphy.com/media/l2SpVUVBLn5dsxcJi/giphy.gif\",\"title\":\"Publicado originalmente em 1980, foi escrito durante a participação do escritor na guerra de libertação de Angola na década de 70.\",\"description\":\"Qual livro?\",\"answer\":1,\"alternatives\":[\"Angústia\",\"Mayombe\",\"Campo Geral\",\"Romanceiro da Inconfidência\",\"Nove Noites\"]},{\"image\":\"https://media.giphy.com/media/oFPiPgqwof4Pe/giphy.gif\",\"title\":\"A escrita do livro se deu no fim dos anos 40. Esse período foi marcado pela transição de um mundo que estava em guerra para uma “paz armada”, com a Guerra Fria. A própria dualidade percebida no título e na leitura da obra é vista, também, no mundo: havia uma polarização entre dois blocos, o capitalista e o socialista, em voga em todo o planeta.\",\"description\":\"Consegue desvendar?\",\"answer\":2,\"alternatives\":[\"Quincas Borba\",\"A Relíquia\",\"Claro Enigma\",\"Campo Geral\",\"Romanceiro da Inconfidência\"]},{\"image\":\"https://media.giphy.com/media/3otPoRNsswd0WTQa7m/giphy.gif\",\"title\":\"O narrador acompanha muito de perto o menino Miguilim, as suas dores, alegrias e descobertas do mundo. Por isso ela é também uma novela de formação, de um menino vivendo, sofrendo e descobrindo o mundo e os homens, mas também reagindo a eles\",\"description\":\"Miguilim... É livro...\",\"answer\":3,\"alternatives\":[\"Poemas Escolhidos\",\"Quincas Borba\",\"Angústia\",\"Campo Geral\",\"Romanceiro da Inconfidência\"]},{\"image\":\"https://media.giphy.com/media/l2SpVUVBLn5dsxcJi/giphy.gif\",\"title\":\"Decidi compor, nos vagares deste verão, na minha quinta do Mosteiro (antigo solar dos condes de Lindoso), as memórias da minha vida - que neste século, tão consumindo pelas incertezas da inteligência e tão angustiado pelos tormentos do dinheiro, encerra, penso eu e pensa meu cunhado Crispim, uma lição lúcida e forte\",\"description\":\"Hum... Esse é um trecho do livro...\",\"answer\":2,\"alternatives\":[\"Poemas Escolhidos\",\"Angústia\",\"A Relíquia\",\"Romanceiro da Inconfidência\",\"Nove Noites\"]},{\"image\":\"https://media.giphy.com/media/Wp0ZtQjgViqR2/giphy.gif\",\"title\":\"A história de Buell Quain revela as contradições e os desejos de um homem sozinho numa terra estranha, confrontado com os seus próprios limites e com a alteridade mais absoluta, numa narrativa que faz referências aos romances de Joseph Conrad e aos relatos do escritor inglês Bruce Chatwin.\",\"description\":\"Joseph? Bruce? Buell? Será Machado de Assis? Qual é o livro?\",\"answer\":4,\"alternatives\":[\"A Relíquia\",\"Mayombe\",\"Campo Geral\",\"Romanceiro da Inconfidência\",\"Nove Noites\"]}],\"external\":[\"https://aluraquiz-css.omariosouto.vercel.app/\",\"https://aluraquiz-devsoutinho.omariosouto.vercel.app/\"],\"theme\":{\"colors\":{\"primary\":\"#0F94AB\",\"secondary\":\"#FFB500\",\"mainBg\":\"#030301\",\"contrastText\":\"#FFFFFF\",\"contrastTextYellow\":\"#030301\",\"wrong\":\"#ff4f00\",\"success\":\"#26CF6A\"},\"borderRadius\":\"4px\"}}");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });
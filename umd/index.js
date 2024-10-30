!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.react);for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(self,(function(e){/******/
return function(){// webpackBootstrap
/******/"use strict";
/******/var t={
/***/156:
/***/function(t){t.exports=e;
/***/}
/******/},r={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function o(e){
/******/ // Check if module is in cache
/******/var n=r[e];
/******/if(void 0!==n)
/******/return n.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var u=r[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return t[e](u,u.exports,o),u.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/o.n=function(e){
/******/var t=e&&e.__esModule?
/******/function(){return e.default}:
/******/function(){return e};
/******/
/******/return o.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/o.d=function(e,t){
/******/for(var r in t)
/******/o.o(t,r)&&!o.o(e,r)&&
/******/Object.defineProperty(e,r,{enumerable:!0,get:t[r]})
/******/;
/******/},
/******/o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
/******/,
/******/ // define __esModule on exports
/******/o.r=function(e){
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})};
/******/
/************************************************************************/
var n={};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
/******/return function(){o.r(n);
/* harmony import */var e=o(156),t=o.n(e),r=t().memo((function(e){var r;
// const [style, setStyle] = useState(props.style || {})
return t().createElement("div",null,"Hello Demo--- ",null!==(r=e.label)&&void 0!==r?r:"测试")}));
/* harmony import */
/* harmony default export */n.default=r}(),n;
/******/}()}));
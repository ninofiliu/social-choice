!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["social-choice"]=e():t["social-choice"]=e()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);class n{constructor(t){this.r=t,this.n=t.reduce((t,e)=>t+e.nb,0),this.m=t[0].ranks.length,this.nGraph=new Array(this.m).fill(null).map((t,e)=>new Array(this.m).fill(null).map((t,r)=>e==r?null:this.getNXY(e,r))),this.pGraph=new Array(this.m).fill(null).map((t,e)=>new Array(this.m).fill(null).map((t,r)=>e==r?null:this.nGraph[e][r]>this.nGraph[r][e])),this.cw=this.getCW()}getNXY(t,e){let r=0;for(let n of this.r)n.ranks[t]<n.ranks[e]&&(r+=n.nb);return r}getCW(){for(let t=0;t<this.m;t++){let e=!0;for(let r=0;r<this.m;r++)t!=r&&(e=e&&this.pGraph[t][r]);if(e)return t}}}var o=t=>{const e=new Array(t.m).fill(0);t.r.forEach(({nb:t,ranks:r})=>{r.forEach((r,n)=>{0==r&&(e[n]+=t)})});const r=Math.max(...e);return e.reduce((t,e,n)=>e==r?[...t,n]:t,[])};r.d(e,"scf",function(){return i}),r.d(e,"Profile",function(){return n});const i={plurality:o}}])});
//# sourceMappingURL=index.js.map
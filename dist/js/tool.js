!function(t){var e={};function n(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(11)},function(t,e,n){Nova.booting(function(t,e,r){e.addRoutes([{name:"file-explorer",path:"/file-explorer",component:n(2)}])})},function(t,e,n){var r=n(8)(n(9),n(10),!1,function(t){n(3)},null,null);t.exports=r.exports},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(6)("0baca8c5",r,!0,{})},function(t,e,n){(t.exports=n(5)(!1)).push([t.i,"",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var s=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([s]).join("\n")}var o;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},s=0;s<this.length;s++){var i=this[s][0];"number"==typeof i&&(r[i]=!0)}for(s=0;s<t.length;s++){var o=t[s];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=n(7),i={},o=r&&(document.head||document.getElementsByTagName("head")[0]),a=null,l=0,c=!1,u=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(g(n.parts[s]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var o=[];for(s=0;s<n.parts.length;s++)o.push(g(n.parts[s]));i[n.id]={id:n.id,refs:1,parts:o}}}}function v(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function g(t){var e,n,r=document.querySelector("style["+f+'~="'+t.id+'"]');if(r){if(c)return u;r.parentNode.removeChild(r)}if(p){var s=l++;r=a||(a=v()),e=x.bind(null,r,s,!1),n=x.bind(null,r,s,!0)}else r=v(),e=function(t,e){var n=e.css,r=e.media,s=e.sourceMap;r&&t.setAttribute("media",r);d.ssrId&&t.setAttribute(f,e.id);s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){c=n,d=r||{};var o=s(t,e);return h(o),function(e){for(var n=[],r=0;r<o.length;r++){var a=o[r];(l=i[a.id]).refs--,n.push(l)}e?h(o=s(t,e)):o=[];for(r=0;r<n.length;r++){var l;if(0===(l=n[r]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete i[l.id]}}}};var m,_=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function x(t,e,n,r){var s=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=_(e,s);else{var i=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t,e){for(var n=[],r={},s=0;s<e.length;s++){var i=e[s],o=i[0],a={id:t+":"+s,css:i[1],media:i[2],sourceMap:i[3]};r[o]?r[o].parts.push(a):n.push(r[o]={id:o,parts:[a]})}return n}},function(t,e){t.exports=function(t,e,n,r,s,i){var o,a=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(o=t,a=t.default);var c,u="function"==typeof a?a.options:a;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),s&&(u._scopeId=s),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=c):r&&(c=r),c){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(t,e){return c.call(e),f(t,e)}):u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:o,exports:a,options:u}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={metaInfo:function(){return{title:"FileExplorer"}},data:function(){return{title:"",disks:[],fetching:!1,selectedDisk:null,files:{},directories:{},path:[]}},watch:{path:function(){this.getFiles()},selectedDisk:function(){this.path=[],this.getFiles()}},mounted:function(){this.getConfig()},methods:{getFiles:function(){var t=this,e=this.path.join("/");console.log(e,this.selectedDisk),this.fetching=!0,Nova.request().get("/nova-vendor/file-explorer/files?disk="+this.selectedDisk+"&path="+e).then(function(e){t.files=e.data.files,t.directories=e.data.directories,t.fetching=!1})},getConfig:function(){var t=this;Nova.request().get("/nova-vendor/file-explorer/files/disks").then(function(e){t.disks=e.data.disks,t.selectedDisk=e.data.default,t.title=e.data.title})},openDirectory:function(t){this.path.push(t)},closeDirectory:function(){this.path.pop()}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("heading",{staticClass:"mb-6"},[t._v(t._s(t.title))]),t._v(" "),n("label",{staticClass:"text-lg",attrs:{for:"select"}},[t._v("Select a disk to explore:")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedDisk,expression:"selectedDisk"}],staticClass:"mb-6 text-lg p-2",attrs:{id:"select"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedDisk=e.target.multiple?n:n[0]}}},t._l(t.disks,function(e){return n("option",{key:e,domProps:{value:e}},[t._v("\n      "+t._s(e)+"\n    ")])}),0),t._v(" "),t.selectedDisk?n("card",{staticClass:"mb-6"},[n("table",{staticClass:"table w-full"},[n("thead",[n("tr",[n("th",{staticClass:"w-3/4",attrs:{colspan:"1",scope:"col"}},[t._v("Files")]),t._v(" "),n("th",{staticClass:"w-1/4",attrs:{colspan:"1"}},[t._v("\n            "+t._s(t.files.length?"Download":"")+"\n          ")])])]),t._v(" "),t.fetching?n("tbody",[n("tr",[n("td",{attrs:{colspan:"2"}},[n("loader")],1)])]):n("tbody",[t.path.length?n("tr",[n("td",{attrs:{colspan:"2"}},[n("button",{on:{click:function(e){return t.closeDirectory()}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{staticClass:"heroicon-ui",attrs:{d:"M13 5.41V21a1 1 0 0 1-2 0V5.41l-5.3 5.3a1 1 0 1 1-1.4-1.42l7-7a1 1 0 0 1 1.4 0l7 7a1 1 0 1 1-1.4 1.42L13 5.4z"}})])])])]):t._e(),t._v(" "),t._l(t.directories,function(e){return n("tr",{key:e},[n("td",{attrs:{colspan:"2"}},[n("div",{staticClass:"flex flex-row items-center"},[n("svg",{staticClass:"mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{staticClass:"heroicon-ui",attrs:{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h7.41l2 2H20zM4 6v12h16V8h-7.41l-2-2H4z"}})]),t._v(" "),n("button",{on:{click:function(n){return t.openDirectory(e)}}},[t._v("\n                "+t._s(e)+"\n              ")])])])])}),t._v(" "),t._l(t.files,function(e){return n("tr",{key:e},[n("td",[t._v(t._s(e))]),t._v(" "),n("td",{staticClass:"flex justify-center items-center"},[n("a",{attrs:{href:"/nova-vendor/file-explorer/files/download?disk="+t.selectedDisk+"&path="+t.path.join("/")+"/"+e}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[n("path",{staticClass:"heroicon-ui",attrs:{d:"M11 14.59V3a1 1 0 0 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3zM3 17a1 1 0 0 1 2 0v3h14v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z"}})])])])])})],2)])]):t._e()],1)},staticRenderFns:[]}},function(t,e){}]);
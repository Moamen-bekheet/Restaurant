(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"html, :root, body{\n    height: 120vh;\n}\n@media (max-width: 650px){\n    html, :root, body{\n        width: min-content;\n    }\n}\n#header{\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1rem;\n    background-color: #fca5a5;\n}\n.home-nav, .menu-nav, .contact-nav{\n    padding: 2rem;\n    border-radius: 1rem;\n    border: 1px solid #fee2e2;\n    border-bottom: 0;\n    margin: 1rem;\n}\n.home-nav:hover, .menu-nav:hover, .contact-nav:hover{\n    background-color: #f87171;\n}\n.content-body{\n    background-color: #fee2e2;\n}\n#content{\n    text-align: center;\n    height: 100%;\n    display: grid;\n    grid-template-rows: max-content 1fr;\n}\n.menu-items-container{\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(20rem,1fr));\n    gap:1rem;\n    padding: 1rem;\n}\n.item-card{\n    display: flex;\n    gap: 1rem;\n    justify-content: space-between;\n    width: fit-content;\n    background-color: #f87171;\n    height: fit-content;\n    padding: 1rem;\n    border-radius: 1rem;\n}\n.item-card img{\n    width: 130px;\n    height: auto;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0;var r={};(()=>{t.d(r,{PX:()=>T,F7:()=>w,LE:()=>L,GI:()=>k});const e=t.p+"594ebb5d9f0bed3cb037.jpg",n=document.getElementById("content"),o=document.createElement("div");function a(){L.style.backgroundColor="#fee2e2",L.classList.add("home-nav"),L.textContent="Home",k.classList.add("menu-nav"),k.textContent="Menu",T.classList.add("contact-nav"),T.textContent="Contact",w.appendChild(L),w.appendChild(k),w.appendChild(T),n.appendChild(w),function(){const t=document.createElement("h1");t.textContent="Zombie",o.appendChild(t),function(){const n=document.createElement("div");n.id="photo-container",o.appendChild(n);const t=new Image;t.src=e,n.appendChild(t)}();const r=document.createElement("p");r.textContent="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ipsum quos deserunt quod laborum quasi debitis laudantium accusamus deleniti neque amet quia, perferendis doloremque totam facilis eius consequuntur, quo error.",o.appendChild(r),n.appendChild(o)}()}function i(e,n,t,r){o.classList.add("menu-items-container"),k.style.backgroundColor="#fee2e2";const a=document.createElement("div");a.classList.add("item-card");const i=document.createElement("div");a.appendChild(i);const c=document.createElement("div");a.appendChild(c);const d=document.createElement("h2");i.appendChild(d);const s=document.createElement("p");i.appendChild(s);const l=document.createElement("p");i.appendChild(l);const u=new Image;u.src=r,c.appendChild(u),d.textContent=e,s.textContent=n,l.textContent=t,o.appendChild(a)}o.classList.add("content-body");var c=t(379),d=t.n(c),s=t(795),l=t.n(s),u=t(569),p=t.n(u),m=t(565),f=t.n(m),h=t(216),v=t.n(h),g=t(589),b=t.n(g),y=t(426),C={};C.styleTagTransform=b(),C.setAttributes=f(),C.insert=p().bind(null,"head"),C.domAPI=l(),C.insertStyleElement=v(),d()(y.Z,C),y.Z&&y.Z.locals&&y.Z.locals;const x=t.p+"850be359f0761d48a5e5.jpg",E=t.p+"e70f5d0121f4a480d9dd.jpg",w=document.createElement("div");w.id="header";const L=document.createElement("div"),k=document.createElement("div"),T=document.createElement("div");a(),L.addEventListener("click",(()=>{o.innerHTML="",o.classList.remove("menu-items-container"),k.style.backgroundColor="transparent",T.style.backgroundColor="transparent",a()})),k.addEventListener("click",(()=>{o.innerHTML="",L.style.backgroundColor="transparent",T.style.backgroundColor="transparent",i("Veggies","vegetables mid-sized pizza","100EGP",x),i("whole thing","vegetables pizza","200EGP",E)})),T.addEventListener("click",(()=>{o.innerHTML="",o.classList.remove("menu-items-container"),L.style.backgroundColor="transparent",T.style.backgroundColor="transparent"}))})()})();
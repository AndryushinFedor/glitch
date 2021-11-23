!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).glitch=e()}(this,function(){"use strict";var r={amount:35,iterations:20,quality:30,seed:25};function p(i){return"object"!=typeof(i=function(t){var e=!1;if(void 0!==t)try{e=JSON.parse(JSON.stringify(t))}catch(t){}return e}(i))&&(i={}),Object.keys(r).filter(function(t){return"iterations"!==t}).forEach(function(t){var e,a,n;"number"!=typeof i[t]||isNaN(i[t])?i[t]=r[t]:i[t]=(e=i[t],n=100,e<(a=0)?a:n<e?n:e),i[t]=Math.round(i[t])}),("number"!=typeof i.iterations||isNaN(i.iterations)||i.iterations<=0)&&(i.iterations=r.iterations),i.iterations=Math.round(i.iterations),i}var h=function(t,e){void 0===t&&(t=300),void 0===e&&(e=150),"undefined"==typeof window?(this.canvasEl={width:t,height:e},this.ctx=null):(this.canvasEl=document.createElement("canvas"),this.canvasEl.width=t,this.canvasEl.height=e,this.ctx=this.canvasEl.getContext("2d"))},t={width:{configurable:!0},height:{configurable:!0}};function m(t){if(t instanceof HTMLImageElement){if(!t.naturalWidth||!t.naturalHeight||!1===t.complete)throw new Error("This this image hasn't finished loading: "+t.src);var e=new h(t.naturalWidth,t.naturalHeight),a=e.getContext("2d");a.drawImage(t,0,0,e.width,e.height);var n=a.getImageData(0,0,e.width,e.height);return n.data&&n.data.length&&(void 0===n.width&&(n.width=t.naturalWidth),void 0===n.height&&(n.height=t.naturalHeight)),n}throw new Error("This object does not seem to be an image.")}h.prototype.getContext=function(){return this.ctx},h.prototype.toDataURL=function(t,e,a){if("function"!=typeof a)return this.canvasEl.toDataURL(t,e);a(this.canvasEl.toDataURL(t,e))},t.width.get=function(){return this.canvasEl.width},t.width.set=function(t){this.canvasEl.width=t},t.height.get=function(){return this.canvasEl.height},t.height.set=function(t){this.canvasEl.height=t},Object.defineProperties(h.prototype,t),"undefined"!=typeof window&&(h.Image=Image);var i=h.Image;function s(n){return new Promise(function(t,e){var a=new i;a.onload=function(){t(a)},a.onerror=e;try{a.src=n}catch(t){e(t)}})}function l(t,e,a,n){s(t).then(a,n)}function u(t){return{width:t.width||t.naturalWidth,height:t.height||t.naturalHeight}}function v(t,e,o,a){s(t).then(function(t){var e,a,n,i,r=u(t),s=(a=u(e=t),n=new h(a.width,a.height),(i=n.getContext("2d")).drawImage(e,0,0,a.width,a.height),{canvas:n,ctx:i}.ctx.getImageData(0,0,r.width,r.height));s.width||(s.width=r.width),s.height||(s.height=r.height),o(s)},a)}function b(i,r){return new Promise(function(t,e){if((n=i)&&"number"==typeof n.width&&"number"==typeof n.height&&n.data&&"number"==typeof n.data.length&&"object"==typeof n.data){var a=new h(i.width,i.height);a.getContext("2d").putImageData(i,0,0),t(a.toDataURL("image/jpeg",r/100))}else e(new Error("object is not valid imageData"));var n})}var w=Object.assign;return function(n){var r,s;n=p(n);var o=new Worker(URL.createObjectURL(new Blob(['function isImageData(a){return a&&"number"==typeof a.width&&"number"==typeof a.height&&a.data&&"number"==typeof a.data.length&&"object"==typeof a.data}var base64Chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",base64Map$1=base64Chars.split(""),reversedBase64Map$1={};base64Map$1.forEach(function(a,e){reversedBase64Map$1[a]=e});var maps={base64Map:base64Map$1,reversedBase64Map:reversedBase64Map$1},reversedBase64Map=maps.reversedBase64Map;function base64ToByteArray(a){for(var e,s=[],t=a.replace("data:image/jpeg;base64,",""),r=0,i=t.length;r<i;r++){t[r];var p=reversedBase64Map[t[r]];switch(r%4){case 1:s.push(e<<2|p>>4);break;case 2:s.push((15&e)<<4|p>>2);break;case 3:s.push((3&e)<<6|p)}e=p}return s}function jpgHeaderLength(a){for(var e=417,s=0,t=a.length;s<t;s++)if(255===a[s]&&218===a[s+1]){e=s+2;break}return e}function glitchByteArray(a,e,s,t){for(var r=jpgHeaderLength(a),i=a.length-r-4,p=s/100,n=e/100,h=0;h<t;h++){var g=i/t*h|0,o=g+((i/t*(h+1)|0)-g)*n|0;i<o&&(o=i),a[~~(r+o)]=~~(256*p)}return a}var base64Map=maps.base64Map;function byteArrayToBase64(a){for(var e,s,t=["data:image/jpeg;base64,"],r=0,i=a.length;r<i;r++){var p=a[r];switch(e=r%3){case 0:t.push(base64Map[p>>2]);break;case 1:t.push(base64Map[(3&s)<<4|p>>4]);break;case 2:t.push(base64Map[(15&s)<<2|p>>6]),t.push(base64Map[63&p])}s=p}return 0===e?(t.push(base64Map[(3&s)<<4]),t.push("==")):1===e&&(t.push(base64Map[(15&s)<<2]),t.push("=")),t.join("")}function glitchImageData(a,e,s){if(isImageData(a))return byteArrayToBase64(glitchByteArray(base64ToByteArray(e),s.seed,s.amount,s.iterations));throw new Error("glitchImageData: imageData seems to be corrupt.")}function fail(a){self.postMessage({err:a.message||a})}function success(a){self.postMessage({base64URL:a})}onmessage=function(a){var e=a.data.imageData,s=a.data.params,t=a.data.base64URL;if(e&&t&&s)try{void 0===e.width&&"number"==typeof a.data.imageDataWidth&&(e.width=a.data.imageDataWidth),void 0===e.height&&"number"==typeof a.data.imageDataHeight&&(e.height=a.data.imageDataHeight),success(glitchImageData(e,t,s))}catch(a){fail(a)}else a.data.imageData?fail("Parameters are missing."):fail("ImageData is missing.");self.close()};'],{type:"text/javascript"}))),e={getParams:function(){return n},getInput:t,getOutput:h},a={fromImageData:function(t){return c(u,t)},fromImage:function(t){return c(m,t)}},i={toImage:function(t){return f(l,t,!0)},toDataURL:function(t){return f(u)},toImageData:function(t){return f(v,t,!0)}};function t(){var t=w({},e);return r||w(t,a),t}function h(){var t=w({},e);return s||w(t,i),t}function u(t){return t}function c(a,n,i){return r=function(){return new Promise(function(t,e){if(i)a(n,t,e);else if(a===u)t(n);else try{t(a(n,t,e))}catch(t){e(t)}})},(g()?d:h)()}function f(n,i,r){return s=function(a){return new Promise(function(t,e){r?n(a,i,t,e):n===u?t(a):n(a,i).then(t,e)})},(g()?d:t)()}function g(){return r&&s}function d(){return new Promise(function(e,a){r().then(function(t){return a=t,s=n,new Promise(function(t,e){b(a,s.quality).then(function(t){return n=a,i=t,r=s,new Promise(function(e,a){o.addEventListener("message",function(t){t.data&&t.data.base64URL?e(t.data.base64URL):t.data&&t.data.err?a(t.data.err):a(t)}),o.postMessage({params:r,base64URL:i,imageData:n,imageDataWidth:n.width,imageDataHeight:n.height})});var n,i,r},e).then(t,e)});var a,s},a).then(function(t){s(t).then(e,a)},a)})}return t()}});

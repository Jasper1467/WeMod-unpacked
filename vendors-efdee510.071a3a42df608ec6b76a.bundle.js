(global.webpackChunkWeMod=global.webpackChunkWeMod||[]).push([[4581],{27091:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},53294:(t,e,r)=>{"use strict";t.exports=r(96594)},98310:(t,e,r)=>{"use strict";const{MIME_PNG:n}=r(51385),o={decode:t=>new Promise((e=>{const r=URL.createObjectURL(new Blob([t])),n=document.createElement("img");n.src=r,n.onload=()=>{const{naturalHeight:t,naturalWidth:r}=n,o=document.createElement("canvas");o.width=r,o.height=t;const a=o.getContext("2d");a.drawImage(n,0,0);const{data:i}=a.getImageData(0,0,r,t);e({data:i,height:t,width:r})}})),encode:(t,e=n)=>new Promise((r=>{const{data:n,height:o,width:a}=t,i=document.createElement("canvas");i.width=a,i.height=o;const s=i.getContext("2d"),c=s.createImageData(a,o),u=c.data;for(let t=0;t<u.length;t++)u[t]=n[t];s.putImageData(c,0,0),r((t=>{const e=atob(t.replace(/.+,/u,"")),r=new Uint8Array(e.length);for(let t=0;t<e.length;t++)r[t]=e.charCodeAt(t);return r.buffer})(i.toDataURL(e)))}))};t.exports=o},96594:(t,e,r)=>{"use strict";const n=r(98310),o=r(3231),a=r(42440),{MIME_PNG:i}=r(51385),s={isICO:o,parse:(t,e=i)=>a(t,e,n)};t.exports=s},3231:(t,e,r)=>{"use strict";const n=r(90489);t.exports=t=>{const e=n(t);return 0===e.getUint16(0,!0)&&1===e.getUint16(2,!0)}},51385:t=>{"use strict";t.exports={MIME_BMP:"image/bmp",MIME_JPEG:"image/jpeg",MIME_PNG:"image/png"}},42440:(t,e,r)=>{"use strict";const n=r(95704),{MIME_PNG:o}=r(51385);t.exports=async(t,e,r)=>{const a=n(t);return await Promise.all(a.map((async t=>{if(e===o&&"png"===t.type)return{...t,buffer:t.data.buffer.slice(t.data.byteOffset,t.data.byteOffset+t.data.byteLength)};if("png"===t.type){const e=await r.decode(t.data);Object.assign(t,{data:e.data,type:"bmp"})}return Object.assign(t,{buffer:await r.encode(t,e),type:e.replace("image/","")})})))}},27376:t=>{t.exports=function(t){if(!t)return!1;var r=e.call(t);return"[object Function]"===r||"function"==typeof t&&"[object RegExp]"!==r||"undefined"!=typeof window&&(t===window.setTimeout||t===window.alert||t===window.confirm||t===window.prompt)};var e=Object.prototype.toString},5826:t=>{var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}},19902:(t,e,r)=>{var n=r(41875),o=function(){},a=r(33340),i=r(85748),s=r(3827),c=r(35781),u=r(47529),f=self.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest;t.exports=function(t,e){e="function"==typeof e?e:o,"string"==typeof t?t={uri:t}:t||(t={}),t.binary&&(t=function(t){if(f)return u(t,{responseType:"arraybuffer"});if(void 0===self.XMLHttpRequest)throw new Error("your browser does not support XHR loading");var e=new self.XMLHttpRequest;return e.overrideMimeType("text/plain; charset=x-user-defined"),u({xhr:e},t)}(t)),n(t,(function(r,n,u){if(r)return e(r);if(!/^2/.test(n.statusCode))return e(new Error("http status code: "+n.statusCode));if(!u)return e(new Error("no body result"));var f,d,p=!1;if(f=u,"[object ArrayBuffer]"===Object.prototype.toString.call(f)){var l=new Uint8Array(u);u=Buffer.from(l,"binary")}c(u)&&(p=!0,"string"==typeof u&&(u=Buffer.from(u,"binary"))),p||(Buffer.isBuffer(u)&&(u=u.toString(t.encoding)),u=u.trim());try{var g=n.headers["content-type"];d=p?s(u):/json/.test(g)||"{"===u.charAt(0)?JSON.parse(u):/xml/.test(g)||"<"===u.charAt(0)?i(u):a(u)}catch(t){e(new Error("error parsing font "+t.message)),e=o}e(null,d)}))}},35781:(t,e,r)=>{var n=r(3226),o=Buffer.from([66,77,70,3]);t.exports=function(t){return"string"==typeof t?"BMF"===t.substring(0,3):t.length>4&&n(t.slice(0,4),o)}},3226:(t,e,r)=>{var n=r(14300).Buffer;t.exports=function(t,e){if(n.isBuffer(t)&&n.isBuffer(e)){if("function"==typeof t.equals)return t.equals(e);if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}}},81890:(t,e,r)=>{var n=r(71017),o=r(57147),a=parseInt("0777",8);function i(t,e,r,s){"function"==typeof e?(r=e,e={}):e&&"object"==typeof e||(e={mode:e});var c=e.mode,u=e.fs||o;void 0===c&&(c=a),s||(s=null);var f=r||function(){};t=n.resolve(t),u.mkdir(t,c,(function(r){if(!r)return f(null,s=s||t);if("ENOENT"===r.code){if(n.dirname(t)===t)return f(r);i(n.dirname(t),e,(function(r,n){r?f(r,n):i(t,e,f,n)}))}else u.stat(t,(function(t,e){t||!e.isDirectory()?f(r,s):f(null,s)}))}))}t.exports=i.mkdirp=i.mkdirP=i,i.sync=function t(e,r,i){r&&"object"==typeof r||(r={mode:r});var s=r.mode,c=r.fs||o;void 0===s&&(s=a),i||(i=null),e=n.resolve(e);try{c.mkdirSync(e,s),i=i||e}catch(o){if("ENOENT"===o.code)i=t(n.dirname(e),r,i),t(e,r,i);else{var u;try{u=c.statSync(e)}catch(t){throw o}if(!u.isDirectory())throw o}}return i}}}]);
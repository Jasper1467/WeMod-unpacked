(global.webpackChunkWeMod=global.webpackChunkWeMod||[]).push([[9557],{19346:t=>{t.exports=ImageData},23645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(n)for(var h=0;h<this.length;h++){var a=this[h][0];null!=a&&(s[a]=!0)}for(var c=0;c<t.length;c++){var f=[].concat(t[c]);n&&s[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),r&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=r):f[2]=r),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),e.push(f))}},e}},61667:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},8081:t=>{"use strict";t.exports=function(t){return t[1]}},66297:(t,e,r)=>{const n=r(90489),o=r(19346);class i{constructor(t,e,{width:r,height:n,colorDepth:o,format:i}){if(this.format=i,this.offset=e,this.depth=o,this.stride=function(t){const e=t%4;return e?t+4-e:t}(r*this.depth/8),this.size=this.stride*n,this.data=t.slice(this.offset,this.offset+this.size),this.size!==this.data.byteLength)throw new Error("Truncated bitmap data")}get(t,e,r){const n=this.format.indexOf(r);return 1===this.depth?(this.data[e*this.stride+(t/8|0)]&1<<7-t%8*1)>>7-t%8*1:2===this.depth?(this.data[e*this.stride+(t/4|0)]&3<<6-t%4*2)>>>6-t%4*2:4===this.depth?(this.data[e*this.stride+(t/2|0)]&15<<4-t%2*4)>>>4-t%2*4:this.data[e*this.stride+t*(this.depth/8)+n]}}t.exports=function(t,{width:e=0,height:r=0,icon:s=!1}={}){const h=n(t);let a,c,f,u,p;s?(a=h.getUint32(0,!0),c=h.getUint32(4,!0)/1|0,f=h.getUint32(8,!0)/2|0,u=h.getUint16(14,!0),p=h.getUint32(32,!0)):(function(t){if(19778!==t)throw new Error(`Invalid magic byte 0x${t.toString(16)}`)}(h.getUint16(0,!0)),a=14+h.getUint32(14,!0),c=h.getUint32(18,!0),f=h.getUint32(22,!0),u=h.getUint16(28,!0),p=h.getUint32(46,!0)),0===p&&u<=8&&(p=1<<u);const g=0===c?e:c,d=0===f?r:f,l=new Uint8Array(h.buffer,h.byteOffset+a,h.byteLength-a),w=p?function(t,{width:e,height:r,colorDepth:n,colorCount:o,icon:s}){if(8!==n&&4!==n&&2!==n&&1!==n)throw new Error(`A color depth of ${n} is not supported`);const h=new i(t,0,{width:o,height:1,colorDepth:32,format:"BGRA"}),a=new i(t,h.offset+h.size,{width:e,height:r,colorDepth:n,format:"C"}),c=s?new i(t,a.offset+a.size,{width:e,height:r,colorDepth:1,format:"A"}):null,f=new Uint8Array(e*r*4);let u=0;for(let t=0;t<r;t++)for(let n=0;n<e;n++){const e=a.get(n,r-t-1,"C");f[u++]=h.get(e,0,"R"),f[u++]=h.get(e,0,"G"),f[u++]=h.get(e,0,"B"),f[u++]=c&&c.get(n,r-t-1,"A")?0:255}return new Uint8ClampedArray(f.buffer,f.byteOffset,f.byteLength)}(l,{width:g,height:d,colorDepth:u,colorCount:p,icon:s}):function(t,{width:e,height:r,colorDepth:n,icon:o}){if(32!==n&&24!==n)throw new Error(`A color depth of ${n} is not supported`);const s=new i(t,0,{width:e,height:r,colorDepth:n,format:"BGRA"}),h=24===n&&o?new i(t,s.offset+s.size,{width:e,height:r,colorDepth:1,format:"A"}):null,a=new Uint8Array(e*r*4);let c=0;for(let t=0;t<r;t++)for(let o=0;o<e;o++)a[c++]=s.get(o,r-t-1,"R"),a[c++]=s.get(o,r-t-1,"G"),a[c++]=s.get(o,r-t-1,"B"),a[c++]=32===n?s.get(o,r-t-1,"A"):h&&h.get(o,r-t-1,"A")?0:255;return new Uint8ClampedArray(a.buffer,a.byteOffset,a.byteLength)}(l,{width:g,height:d,colorDepth:u,icon:s});return Object.assign(new o(w,g,d),{colorDepth:u})}},95704:(t,e,r)=>{const n=r(90489),o=r(66297),i=r(19346);function s(t,e){return 2303741511===t.getUint32(e+0)&&218765834===t.getUint32(e+4)}function h(t,e){const r=t.getUint8(e+24),n=t.getUint8(e+25);if(0===n)return 1*r;if(2===n)return 3*r;if(3===n)return 1*r;if(4===n)return 2*r;if(6===n)return 4*r;throw new Error("Invalid PNG colorType")}function a(t,e){return t.getUint32(e+16,!1)}function c(t,e){return t.getUint32(e+20,!1)}t.exports=function(t){const e=n(t);if(e.byteLength<6)throw new Error("Truncated header");if(s(e,0))return[{bpp:h(e,0),data:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),height:c(e,0),hotspot:null,type:"png",width:a(e,0)}];if(0!==e.getUint16(0,!0))throw new Error("Invalid magic bytes");const r=e.getUint16(2,!0);if(1!==r&&2!==r)throw new Error("Invalid image type");const f=e.getUint16(4,!0);if(e.byteLength<6+16*f)throw new Error("Truncated image list");return Array.from({length:f},((t,n)=>{const f=e.getUint8(6+16*n+0),u=e.getUint8(6+16*n+1),p=e.getUint32(6+16*n+8,!0),g=e.getUint32(6+16*n+12,!0),d=2!==r?null:{x:e.getUint16(6+16*n+4,!0),y:e.getUint16(6+16*n+6,!0)};if(s(e,g))return{bpp:h(e,g),data:new Uint8Array(e.buffer,e.byteOffset+g,p),height:c(e,g),hotspot:d,type:"png",width:a(e,g)};const l=new Uint8Array(e.buffer,e.byteOffset+g,p),w=o(l,{width:f,height:u,icon:!0}),y={bpp:w.colorDepth,hotspot:d,type:"bmp"};return Object.assign(new i(w.data,w.width,w.height),y)}))}},65987:t=>{"use strict";var e={single_source_shortest_paths:function(t,r,n){var o={},i={};i[r]=0;var s,h,a,c,f,u,p,g=e.PriorityQueue.make();for(g.push(r,0);!g.empty();)for(a in h=(s=g.pop()).value,c=s.cost,f=t[h]||{})f.hasOwnProperty(a)&&(u=c+f[a],p=i[a],(void 0===i[a]||p>u)&&(i[a]=u,g.push(a,u),o[a]=h));if(void 0!==n&&void 0===i[n]){var d=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(d)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var r=[],n=e;n;)r.push(n),t[n],n=t[n];return r.reverse(),r},find_path:function(t,r,n){var o=e.single_source_shortest_paths(t,r,n);return e.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(t){var r,n=e.PriorityQueue,o={};for(r in t=t||{},n)n.hasOwnProperty(r)&&(o[r]=n[r]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var r={value:t,cost:e};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e},58908:t=>{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t.exports=e}}]);
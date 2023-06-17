"use strict";(global.webpackChunkWeMod=global.webpackChunkWeMod||[]).push([[3243],{11494:(r,e)=>{function t(r,e,t,n){for(var o=r[e++],a=1<<o,i=a+1,l=i+1,f=o+1,h=(1<<f)-1,u=0,s=0,d=0,v=r[e++],c=new Int32Array(4096),w=null;;){for(;u<16&&0!==v;)s|=r[e++]<<u,u+=8,1===v?v=r[e++]:--v;if(u<f)break;var g=s&h;if(s>>=f,u-=f,g!==a){if(g===i)break;for(var p=g<l?g:w,k=0,b=p;b>a;)b=c[b]>>8,++k;var x=b;if(d+k+(p!==g?1:0)>n)return void console.log("Warning, gif stream longer than expected.");t[d++]=x;var E=d+=k;for(p!==g&&(t[d++]=x),b=p;k--;)b=c[b],t[--E]=255&b,b>>=8;null!==w&&l<4096&&(c[l++]=w<<8|x,l>=h+1&&f<12&&(++f,h=h<<1|1)),w=g}else l=i+1,h=(1<<(f=o+1))-1,w=null}return d!==n&&console.log("Warning, gif stream shorter than expected."),t}try{e.GifWriter=function(r,e,t,n){var o=0,a=void 0===(n=void 0===n?{}:n).loop?null:n.loop,i=void 0===n.palette?null:n.palette;if(e<=0||t<=0||e>65535||t>65535)throw new Error("Width/Height invalid.");function l(r){var e=r.length;if(e<2||e>256||e&e-1)throw new Error("Invalid code/color length, must be power of 2 and 2 .. 256.");return e}r[o++]=71,r[o++]=73,r[o++]=70,r[o++]=56,r[o++]=57,r[o++]=97;var f=0,h=0;if(null!==i){for(var u=l(i);u>>=1;)++f;if(u=1<<f,--f,void 0!==n.background){if((h=n.background)>=u)throw new Error("Background index out of range.");if(0===h)throw new Error("Background index explicitly passed as 0.")}}if(r[o++]=255&e,r[o++]=e>>8&255,r[o++]=255&t,r[o++]=t>>8&255,r[o++]=(null!==i?128:0)|f,r[o++]=h,r[o++]=0,null!==i)for(var s=0,d=i.length;s<d;++s){var v=i[s];r[o++]=v>>16&255,r[o++]=v>>8&255,r[o++]=255&v}if(null!==a){if(a<0||a>65535)throw new Error("Loop count invalid.");r[o++]=33,r[o++]=255,r[o++]=11,r[o++]=78,r[o++]=69,r[o++]=84,r[o++]=83,r[o++]=67,r[o++]=65,r[o++]=80,r[o++]=69,r[o++]=50,r[o++]=46,r[o++]=48,r[o++]=3,r[o++]=1,r[o++]=255&a,r[o++]=a>>8&255,r[o++]=0}var c=!1;this.addFrame=function(e,t,n,a,f,h){if(!0===c&&(--o,c=!1),h=void 0===h?{}:h,e<0||t<0||e>65535||t>65535)throw new Error("x/y invalid.");if(n<=0||a<=0||n>65535||a>65535)throw new Error("Width/Height invalid.");if(f.length<n*a)throw new Error("Not enough pixels for the frame size.");var u=!0,s=h.palette;if(null==s&&(u=!1,s=i),null==s)throw new Error("Must supply either a local or global palette.");for(var d=l(s),v=0;d>>=1;)++v;d=1<<v;var w=void 0===h.delay?0:h.delay,g=void 0===h.disposal?0:h.disposal;if(g<0||g>3)throw new Error("Disposal out of range.");var p=!1,k=0;if(void 0!==h.transparent&&null!==h.transparent&&(p=!0,(k=h.transparent)<0||k>=d))throw new Error("Transparent color index.");if((0!==g||p||0!==w)&&(r[o++]=33,r[o++]=249,r[o++]=4,r[o++]=g<<2|(!0===p?1:0),r[o++]=255&w,r[o++]=w>>8&255,r[o++]=k,r[o++]=0),r[o++]=44,r[o++]=255&e,r[o++]=e>>8&255,r[o++]=255&t,r[o++]=t>>8&255,r[o++]=255&n,r[o++]=n>>8&255,r[o++]=255&a,r[o++]=a>>8&255,r[o++]=!0===u?128|v-1:0,!0===u)for(var b=0,x=s.length;b<x;++b){var E=s[b];r[o++]=E>>16&255,r[o++]=E>>8&255,r[o++]=255&E}return o=function(r,e,t,n){r[e++]=t;var o=e++,a=1<<t,i=a-1,l=a+1,f=l+1,h=t+1,u=0,s=0;function d(t){for(;u>=t;)r[e++]=255&s,s>>=8,u-=8,e===o+256&&(r[o]=255,o=e++)}function v(r){s|=r<<u,u+=h,d(8)}var c=n[0]&i,w={};v(a);for(var g=1,p=n.length;g<p;++g){var k=n[g]&i,b=c<<8|k,x=w[b];if(void 0===x){for(s|=c<<u,u+=h;u>=8;)r[e++]=255&s,s>>=8,u-=8,e===o+256&&(r[o]=255,o=e++);4096===f?(v(a),f=l+1,h=t+1,w={}):(f>=1<<h&&++h,w[b]=f++),c=k}else c=x}return v(c),v(l),d(1),o+1===e?r[o]=0:(r[o]=e-o-1,r[e++]=0),e}(r,o,v<2?2:v,f),o},this.end=function(){return!1===c&&(r[o++]=59,c=!0),o},this.getOutputBuffer=function(){return r},this.setOutputBuffer=function(e){r=e},this.getOutputBufferPosition=function(){return o},this.setOutputBufferPosition=function(r){o=r}},e.GifReader=function(r){var e=0;if(71!==r[e++]||73!==r[e++]||70!==r[e++]||56!==r[e++]||56!=(r[e++]+1&253)||97!==r[e++])throw new Error("Invalid GIF 87a/89a header.");var n=r[e++]|r[e++]<<8,o=r[e++]|r[e++]<<8,a=r[e++],i=a>>7,l=1<<1+(7&a);r[e++],r[e++];var f=null,h=null;i&&(f=e,h=l,e+=3*l);var u=!0,s=[],d=0,v=null,c=0,w=null;for(this.width=n,this.height=o;u&&e<r.length;)switch(r[e++]){case 33:switch(r[e++]){case 255:if(11!==r[e]||78==r[e+1]&&69==r[e+2]&&84==r[e+3]&&83==r[e+4]&&67==r[e+5]&&65==r[e+6]&&80==r[e+7]&&69==r[e+8]&&50==r[e+9]&&46==r[e+10]&&48==r[e+11]&&3==r[e+12]&&1==r[e+13]&&0==r[e+16])e+=14,w=r[e++]|r[e++]<<8,e++;else for(e+=12;;){if(!((W=r[e++])>=0))throw Error("Invalid block size");if(0===W)break;e+=W}break;case 249:if(4!==r[e++]||0!==r[e+4])throw new Error("Invalid graphics extension block.");var g=r[e++];d=r[e++]|r[e++]<<8,v=r[e++],0==(1&g)&&(v=null),c=g>>2&7,e++;break;case 254:for(;;){if(!((W=r[e++])>=0))throw Error("Invalid block size");if(0===W)break;e+=W}break;default:throw new Error("Unknown graphic control label: 0x"+r[e-1].toString(16))}break;case 44:var p=r[e++]|r[e++]<<8,k=r[e++]|r[e++]<<8,b=r[e++]|r[e++]<<8,x=r[e++]|r[e++]<<8,E=r[e++],y=E>>6&1,m=1<<1+(7&E),_=f,I=h,B=!1;E>>7&&(B=!0,_=e,I=m,e+=3*m);var A=e;for(e++;;){var W;if(!((W=r[e++])>=0))throw Error("Invalid block size");if(0===W)break;e+=W}s.push({x:p,y:k,width:b,height:x,has_local_palette:B,palette_offset:_,palette_size:I,data_offset:A,data_length:e-A,transparent_index:v,interlaced:!!y,delay:d,disposal:c});break;case 59:u=!1;break;default:throw new Error("Unknown gif block: 0x"+r[e-1].toString(16))}this.numFrames=function(){return s.length},this.loopCount=function(){return w},this.frameInfo=function(r){if(r<0||r>=s.length)throw new Error("Frame index out of range.");return s[r]},this.decodeAndBlitFrameBGRA=function(e,o){var a=this.frameInfo(e),i=a.width*a.height,l=new Uint8Array(i);t(r,a.data_offset,l,i);var f=a.palette_offset,h=a.transparent_index;null===h&&(h=256);var u=a.width,s=n-u,d=u,v=4*(a.y*n+a.x),c=4*((a.y+a.height)*n+a.x),w=v,g=4*s;!0===a.interlaced&&(g+=4*n*7);for(var p=8,k=0,b=l.length;k<b;++k){var x=l[k];if(0===d&&(d=u,(w+=g)>=c&&(g=4*s+4*n*(p-1),w=v+(u+s)*(p<<1),p>>=1)),x===h)w+=4;else{var E=r[f+3*x],y=r[f+3*x+1],m=r[f+3*x+2];o[w++]=m,o[w++]=y,o[w++]=E,o[w++]=255}--d}},this.decodeAndBlitFrameRGBA=function(e,o){var a=this.frameInfo(e),i=a.width*a.height,l=new Uint8Array(i);t(r,a.data_offset,l,i);var f=a.palette_offset,h=a.transparent_index;null===h&&(h=256);var u=a.width,s=n-u,d=u,v=4*(a.y*n+a.x),c=4*((a.y+a.height)*n+a.x),w=v,g=4*s;!0===a.interlaced&&(g+=4*n*7);for(var p=8,k=0,b=l.length;k<b;++k){var x=l[k];if(0===d&&(d=u,(w+=g)>=c&&(g=4*s+4*n*(p-1),w=v+(u+s)*(p<<1),p>>=1)),x===h)w+=4;else{var E=r[f+3*x],y=r[f+3*x+1],m=r[f+3*x+2];o[w++]=E,o[w++]=y,o[w++]=m,o[w++]=255}--d}}}}catch(r){}}}]);
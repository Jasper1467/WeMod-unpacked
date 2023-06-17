"use strict";(global.webpackChunkWeMod=global.webpackChunkWeMod||[]).push([[9556],{41809:(e,t,n)=>{n.d(t,{F:()=>ye});var i=n(45574),o=n(70655),r=n(6492),s=n(72141),u=n(69071),a=n(95656),c=n(73902),d=n(5441),l=n(14903),v=function(e,t,n){return void 0===t&&(t=""),void 0===n&&(n=10),[l.xp,t,e.substring(0,n)].filter(Boolean).join("_")},f=n(48964),p=n(29293),h=n.n(p),g=function(){function e(){this.ua=new p.UAParser("undefined"!=typeof navigator?navigator.userAgent:null).getResult()}return e.prototype.getApplicationContext=function(){return{versionName:this.versionName,language:b(),platform:"Web",os:m(this.ua),deviceModel:y(this.ua)}},e}(),m=function(e){var t,n;return[null===(t=e.browser)||void 0===t?void 0:t.name,null===(n=e.browser)||void 0===n?void 0:n.major].filter((function(e){return null!=e})).join(" ")},y=function(e){var t;return null===(t=e.os)||void 0===t?void 0:t.name},b=function(){return"undefined"!=typeof navigator&&(navigator.languages&&navigator.languages[0]||navigator.language)||""},I=function(){function e(){this.queue=[]}return e.prototype.logEvent=function(e){this.receiver?this.receiver(e):this.queue.length<512&&this.queue.push(e)},e.prototype.setEventReceiver=function(e){this.receiver=e,this.queue.length>0&&(this.queue.forEach((function(t){e(t)})),this.queue=[])},e}(),w=function(){return w=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},w.apply(this,arguments)},_=function(e,t){var n=typeof e;if(n!==typeof t)return!1;for(var i=0,o=["string","number","boolean","undefined"];i<o.length;i++)if(o[i]===n)return e===t;if(null==e&&null==t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;var r=Array.isArray(e),s=Array.isArray(t);if(r!==s)return!1;if(!r||!s){var u=Object.keys(e).sort(),a=Object.keys(t).sort();if(!_(u,a))return!1;var c=!0;return Object.keys(e).forEach((function(n){_(e[n],t[n])||(c=!1)})),c}for(var d=0;d<e.length;d++)if(!_(e[d],t[d]))return!1;return!0};Object.entries||(Object.entries=function(e){for(var t=Object.keys(e),n=t.length,i=new Array(n);n--;)i[n]=[t[n],e[t[n]]];return i});var k=function(){function e(){this.identity={userProperties:{}},this.listeners=new Set}return e.prototype.editIdentity=function(){var e=this,t=w({},this.identity.userProperties),n=w(w({},this.identity),{userProperties:t});return{setUserId:function(e){return n.userId=e,this},setDeviceId:function(e){return n.deviceId=e,this},setUserProperties:function(e){return n.userProperties=e,this},updateUserProperties:function(e){for(var t=n.userProperties||{},i=0,o=Object.entries(e);i<o.length;i++){var r=o[i],s=r[0],u=r[1];switch(s){case"$set":for(var a=0,c=Object.entries(u);a<c.length;a++){var d=c[a],l=d[0],v=d[1];t[l]=v}break;case"$unset":for(var f=0,p=Object.keys(u);f<p.length;f++)delete t[l=p[f]];break;case"$clearAll":t={}}}return n.userProperties=t,this},commit:function(){return e.setIdentity(n),this}}},e.prototype.getIdentity=function(){return w({},this.identity)},e.prototype.setIdentity=function(e){var t=w({},this.identity);this.identity=w({},e),_(t,this.identity)||this.listeners.forEach((function(t){t(e)}))},e.prototype.addIdentityListener=function(e){this.listeners.add(e)},e.prototype.removeIdentityListener=function(e){this.listeners.delete(e)},e}(),S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:self,T=function(){function e(){this.identityStore=new k,this.eventBridge=new I,this.applicationContextProvider=new g}return e.getInstance=function(t){return S.analyticsConnectorInstances||(S.analyticsConnectorInstances={}),S.analyticsConnectorInstances[t]||(S.analyticsConnectorInstances[t]=new e),S.analyticsConnectorInstances[t]},e}(),O=function(){return T.getInstance("$default_instance")},E=n(90902),P=function(){function e(){this.name="identity",this.type=E.z.BEFORE,this.identityStore=O().identityStore}return e.prototype.execute=function(e){return(0,o.mG)(this,void 0,void 0,(function(){var t;return(0,o.Jh)(this,(function(n){return(t=e.user_properties)&&this.identityStore.editIdentity().updateUserProperties(t).commit(),[2,e]}))}))},e.prototype.setup=function(e){return Promise.resolve(void 0)},e}(),R=function(e,t){for(var n=0;n<t.length;n++){var i=t[n],o=i.name,r=i.args,s=i.resolve,u=e&&e[o];if("function"==typeof u){var a=u.apply(e,r);"function"==typeof s&&s(null==a?void 0:a.promise)}}return e},J=function(e){return e&&void 0!==e._q},C=function(){var e,t,n,i;if("undefined"==typeof navigator)return"";var o=navigator.userLanguage;return null!==(i=null!==(n=null!==(t=null===(e=navigator.languages)||void 0===e?void 0:e[0])&&void 0!==t?t:navigator.language)&&void 0!==n?n:o)&&void 0!==i?i:""},G=function(){function e(){var e;this.name="context",this.type=E.z.BEFORE,this.eventId=0,this.library="amplitude-ts/".concat("1.9.1"),"undefined"!=typeof navigator&&(e=navigator.userAgent),this.uaResult=new(h())(e).getResult()}return e.prototype.setup=function(e){return this.config=e,Promise.resolve(void 0)},e.prototype.execute=function(e){return(0,o.mG)(this,void 0,void 0,(function(){var t,n,i,r,s;return(0,o.Jh)(this,(function(a){return t=(new Date).getTime(),n=this.uaResult.browser.name,i=this.uaResult.browser.version,r=this.uaResult.device.model||this.uaResult.os.name,s=this.uaResult.device.vendor,[2,(0,o.pi)((0,o.pi)((0,o.pi)((0,o.pi)((0,o.pi)((0,o.pi)((0,o.pi)((0,o.pi)((0,o.pi)((0,o.pi)((0,o.pi)((0,o.pi)({user_id:this.config.userId,device_id:this.config.deviceId,session_id:this.config.sessionId,time:t},this.config.appVersion&&{app_version:this.config.appVersion}),this.config.trackingOptions.platform&&{platform:"Web"}),this.config.trackingOptions.osName&&{os_name:n}),this.config.trackingOptions.osVersion&&{os_version:i}),this.config.trackingOptions.deviceManufacturer&&{device_manufacturer:s}),this.config.trackingOptions.deviceModel&&{device_model:r}),this.config.trackingOptions.language&&{language:C()}),this.config.trackingOptions.ipAddress&&{ip:"$remote"}),{insert_id:(0,u.h)(),partner_id:this.config.partnerId,plan:this.config.plan}),this.config.ingestionMetadata&&{ingestion_metadata:{source_name:this.config.ingestionMetadata.sourceName,source_version:this.config.ingestionMetadata.sourceVersion}}),e),{event_id:this.eventId++,library:this.library})]}))}))},e}(),q=n(61529),x=n(17542),z=n(44673),U=n(16635),D=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,o.ZT)(t,e),t.prototype.send=function(e,t){return(0,o.mG)(this,void 0,void 0,(function(){var n,i;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:if("undefined"==typeof fetch)throw new Error("FetchTransport is not supported");return n={headers:{"Content-Type":"application/json",Accept:"*/*"},body:JSON.stringify(t),method:"POST"},[4,fetch(e,n)];case 1:return[4,o.sent().json()];case 2:return i=o.sent(),[2,this.buildResponse(i)]}}))}))},t}(U.d),N=n(563),A=function(){function e(e){this.options=(0,o.pi)({},e)}return e.prototype.isEnabled=function(){return(0,o.mG)(this,void 0,void 0,(function(){var t,n,i;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:if(!(0,N.l)())return[2,!1];t=String(Date.now()),n=new e(this.options),i="AMP_TEST",o.label=1;case 1:return o.trys.push([1,4,5,7]),[4,n.set(i,t)];case 2:return o.sent(),[4,n.get(i)];case 3:return[2,o.sent()===t];case 4:return o.sent(),[2,!1];case 5:return[4,n.remove(i)];case 6:return o.sent(),[7];case 7:return[2]}}))}))},e.prototype.get=function(e){return(0,o.mG)(this,void 0,void 0,(function(){var t;return(0,o.Jh)(this,(function(n){switch(n.label){case 0:return[4,this.getRaw(e)];case 1:if(!(t=n.sent()))return[2,void 0];try{try{t=decodeURIComponent(atob(t))}catch(e){}return[2,JSON.parse(t)]}catch(e){return[2,void 0]}return[2]}}))}))},e.prototype.getRaw=function(e){var t;return(0,o.mG)(this,void 0,void 0,(function(){var n,i,r;return(0,o.Jh)(this,(function(o){return n=(0,N.l)(),i=null!==(t=null==n?void 0:n.document.cookie.split("; "))&&void 0!==t?t:[],(r=i.find((function(t){return 0===t.indexOf(e+"=")})))?[2,r.substring(e.length+1)]:[2,void 0]}))}))},e.prototype.set=function(e,t){var n;return(0,o.mG)(this,void 0,void 0,(function(){var i,r,s,u,a,c;return(0,o.Jh)(this,(function(o){try{i=null!==(n=this.options.expirationDays)&&void 0!==n?n:0,s=void 0,(r=null!==t?i:-1)&&((u=new Date).setTime(u.getTime()+24*r*60*60*1e3),s=u),a="".concat(e,"=").concat(btoa(encodeURIComponent(JSON.stringify(t)))),s&&(a+="; expires=".concat(s.toUTCString())),a+="; path=/",this.options.domain&&(a+="; domain=".concat(this.options.domain)),this.options.secure&&(a+="; Secure"),this.options.sameSite&&(a+="; SameSite=".concat(this.options.sameSite)),(c=(0,N.l)())&&(c.document.cookie=a)}catch(e){}return[2]}))}))},e.prototype.remove=function(e){return(0,o.mG)(this,void 0,void 0,(function(){return(0,o.Jh)(this,(function(t){switch(t.label){case 0:return[4,this.set(e,null)];case 1:return t.sent(),[2]}}))}))},e.prototype.reset=function(){return(0,o.mG)(this,void 0,void 0,(function(){return(0,o.Jh)(this,(function(e){return[2]}))}))},e}(),V=function(){function e(){}return e.prototype.isEnabled=function(){return(0,o.mG)(this,void 0,void 0,(function(){var t,n,i;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:if(!(0,N.l)())return[2,!1];t=String(Date.now()),n=new e,i="AMP_TEST",o.label=1;case 1:return o.trys.push([1,4,5,7]),[4,n.set(i,t)];case 2:return o.sent(),[4,n.get(i)];case 3:return[2,o.sent()===t];case 4:return o.sent(),[2,!1];case 5:return[4,n.remove(i)];case 6:return o.sent(),[7];case 7:return[2]}}))}))},e.prototype.get=function(e){return(0,o.mG)(this,void 0,void 0,(function(){var t;return(0,o.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.getRaw(e)];case 1:return(t=n.sent())?[2,JSON.parse(t)]:[2,void 0];case 2:return n.sent(),[2,void 0];case 3:return[2]}}))}))},e.prototype.getRaw=function(e){var t;return(0,o.mG)(this,void 0,void 0,(function(){return(0,o.Jh)(this,(function(n){return[2,(null===(t=(0,N.l)())||void 0===t?void 0:t.localStorage.getItem(e))||void 0]}))}))},e.prototype.set=function(e,t){var n;return(0,o.mG)(this,void 0,void 0,(function(){return(0,o.Jh)(this,(function(i){try{null===(n=(0,N.l)())||void 0===n||n.localStorage.setItem(e,JSON.stringify(t))}catch(e){}return[2]}))}))},e.prototype.remove=function(e){var t;return(0,o.mG)(this,void 0,void 0,(function(){return(0,o.Jh)(this,(function(n){try{null===(t=(0,N.l)())||void 0===t||t.localStorage.removeItem(e)}catch(e){}return[2]}))}))},e.prototype.reset=function(){var e;return(0,o.mG)(this,void 0,void 0,(function(){return(0,o.Jh)(this,(function(t){try{null===(e=(0,N.l)())||void 0===e||e.localStorage.clear()}catch(e){}return[2]}))}))},e}(),j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={done:4},t}return(0,o.ZT)(t,e),t.prototype.send=function(e,t){return(0,o.mG)(this,void 0,void 0,(function(){var n=this;return(0,o.Jh)(this,(function(i){return[2,new Promise((function(i,o){"undefined"==typeof XMLHttpRequest&&o(new Error("XHRTransport is not supported."));var r=new XMLHttpRequest;r.open("POST",e,!0),r.onreadystatechange=function(){if(r.readyState===n.state.done)try{var e=r.responseText,t=JSON.parse(e),s=n.buildResponse(t);i(s)}catch(e){o(e)}},r.setRequestHeader("Content-Type","application/json"),r.setRequestHeader("Accept","*/*"),r.send(JSON.stringify(t))}))]}))}))},t}(U.d),M=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,o.ZT)(t,e),t.prototype.send=function(e,t){return(0,o.mG)(this,void 0,void 0,(function(){var n=this;return(0,o.Jh)(this,(function(i){return[2,new Promise((function(i,o){var r=(0,N.l)();if(!(null==r?void 0:r.navigator.sendBeacon))throw new Error("SendBeaconTransport is not supported");try{var s=JSON.stringify(t);return i(r.navigator.sendBeacon(e,JSON.stringify(t))?n.buildResponse({code:200,events_ingested:t.events.length,payload_size_bytes:s.length,server_upload_time:Date.now()}):n.buildResponse({code:500}))}catch(e){o(e)}}))]}))}))},t}(U.d),L=function(){return{cookieExpiration:365,cookieSameSite:"Lax",cookieSecure:!1,cookieStorage:new x.k,cookieUpgrade:!0,disableCookies:!1,domain:"",sessionTimeout:18e5,trackingOptions:{deviceManufacturer:!0,deviceModel:!0,ipAddress:!0,language:!0,osName:!0,osVersion:!0,platform:!0},transportProvider:new D}},F=function(e){function t(t,n){var i,r,s,u,a,c,d,l,v,f=this,p=L();return(f=e.call(this,(0,o.pi)((0,o.pi)({flushIntervalMillis:1e3,flushMaxRetries:5,flushQueueSize:30,transportProvider:p.transportProvider},n),{apiKey:t}))||this)._optOut=!1,f.cookieStorage=null!==(i=null==n?void 0:n.cookieStorage)&&void 0!==i?i:p.cookieStorage,f.deviceId=null==n?void 0:n.deviceId,f.lastEventTime=null==n?void 0:n.lastEventTime,f.optOut=Boolean(null==n?void 0:n.optOut),f.sessionId=null==n?void 0:n.sessionId,f.userId=null==n?void 0:n.userId,f.appVersion=null==n?void 0:n.appVersion,f.attribution=null==n?void 0:n.attribution,f.cookieExpiration=null!==(r=null==n?void 0:n.cookieExpiration)&&void 0!==r?r:p.cookieExpiration,f.cookieSameSite=null!==(s=null==n?void 0:n.cookieSameSite)&&void 0!==s?s:p.cookieSameSite,f.cookieSecure=null!==(u=null==n?void 0:n.cookieSecure)&&void 0!==u?u:p.cookieSecure,f.cookieUpgrade=null!==(a=null==n?void 0:n.cookieUpgrade)&&void 0!==a?a:p.cookieUpgrade,f.defaultTracking=null==n?void 0:n.defaultTracking,f.disableCookies=null!==(c=null==n?void 0:n.disableCookies)&&void 0!==c?c:p.disableCookies,f.defaultTracking=null==n?void 0:n.defaultTracking,f.domain=null!==(d=null==n?void 0:n.domain)&&void 0!==d?d:p.domain,f.partnerId=null==n?void 0:n.partnerId,f.sessionTimeout=null!==(l=null==n?void 0:n.sessionTimeout)&&void 0!==l?l:p.sessionTimeout,f.trackingOptions=null!==(v=null==n?void 0:n.trackingOptions)&&void 0!==v?v:p.trackingOptions,f}return(0,o.ZT)(t,e),Object.defineProperty(t.prototype,"deviceId",{get:function(){return this._deviceId},set:function(e){this._deviceId!==e&&(this._deviceId=e,this.updateStorage())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userId",{get:function(){return this._userId},set:function(e){this._userId!==e&&(this._userId=e,this.updateStorage())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"sessionId",{get:function(){return this._sessionId},set:function(e){this._sessionId!==e&&(this._sessionId=e,this.updateStorage())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"optOut",{get:function(){return this._optOut},set:function(e){this._optOut!==e&&(this._optOut=e,this.updateStorage())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastEventTime",{get:function(){return this._lastEventTime},set:function(e){this._lastEventTime!==e&&(this._lastEventTime=e,this.updateStorage())},enumerable:!1,configurable:!0}),t.prototype.updateStorage=function(){var e,t={deviceId:this._deviceId,userId:this._userId,sessionId:this._sessionId,optOut:this._optOut,lastEventTime:this._lastEventTime};null===(e=this.cookieStorage)||void 0===e||e.set(v(this.apiKey),t)},t}(z.De),K=function(e,t){return(0,o.mG)(void 0,void 0,void 0,(function(){var n,i,r,s,a,c,d,l,v,f,p,h,g,m;return(0,o.Jh)(this,(function(y){switch(y.label){case 0:return n=L(),i=null!==(g=null==t?void 0:t.deviceId)&&void 0!==g?g:(0,u.h)(),r=null==t?void 0:t.lastEventTime,s=null==t?void 0:t.optOut,a=null==t?void 0:t.sessionId,c=null==t?void 0:t.userId,d=null==t?void 0:t.cookieStorage,l=null==t?void 0:t.domain,v=F.bind,f=[void 0,e],p=[(0,o.pi)({},t)],h={cookieStorage:d,deviceId:i,domain:l,lastEventTime:r,optOut:s,sessionId:a},[4,Z(t)];case 1:return[2,new(v.apply(F,f.concat([o.pi.apply(void 0,p.concat([(h.storageProvider=y.sent(),h.trackingOptions=(0,o.pi)((0,o.pi)({},n.trackingOptions),null==t?void 0:t.trackingOptions),h.transportProvider=null!==(m=null==t?void 0:t.transportProvider)&&void 0!==m?m:X(null==t?void 0:t.transport),h.userId=c,h)]))])))]}}))}))},B=function(e,t){return void 0===t&&(t=L()),(0,o.mG)(void 0,void 0,void 0,(function(){var n,i,r;return(0,o.Jh)(this,(function(s){switch(s.label){case 0:return n=(0,o.pi)((0,o.pi)({},t),e),i=null==e?void 0:e.cookieStorage,(r=!i)?[3,2]:[4,i.isEnabled()];case 1:r=!s.sent(),s.label=2;case 2:return r?[2,H(n)]:[2,i]}}))}))},H=function(e){return(0,o.mG)(void 0,void 0,void 0,(function(){var t,n;return(0,o.Jh)(this,(function(i){switch(i.label){case 0:return t=new A({domain:e.domain,expirationDays:e.cookieExpiration,sameSite:e.cookieSameSite,secure:e.cookieSecure}),(n=e.disableCookies)?[3,2]:[4,t.isEnabled()];case 1:n=!i.sent(),i.label=2;case 2:return n?[4,(t=new V).isEnabled()]:[3,4];case 3:i.sent()||(t=new x.k),i.label=4;case 4:return[2,t]}}))}))},Z=function(e){return(0,o.mG)(void 0,void 0,void 0,(function(){var t,n,i,r,s,u,a;return(0,o.Jh)(this,(function(c){switch(c.label){case 0:if(e&&Object.prototype.hasOwnProperty.call(e,"storageProvider")&&!e.storageProvider)return[3,9];c.label=1;case 1:c.trys.push([1,7,8,9]),t=(0,o.XA)([null==e?void 0:e.storageProvider,new V]),n=t.next(),c.label=2;case 2:return n.done?[3,6]:(i=n.value,(r=i)?[4,i.isEnabled()]:[3,4]);case 3:r=c.sent(),c.label=4;case 4:if(r)return[2,i];c.label=5;case 5:return n=t.next(),[3,2];case 6:return[3,9];case 7:return s=c.sent(),u={error:s},[3,9];case 8:try{n&&!n.done&&(a=t.return)&&a.call(t)}finally{if(u)throw u.error}return[7];case 9:return[2,void 0]}}))}))},X=function(e){return e===q.F.XHR?new j:e===q.F.SendBeacon?new M:L().transportProvider},$=function(e,t){return(0,o.mG)(void 0,void 0,void 0,(function(){var n,i,r,s,u,a,c,d,v,f;return(0,o.Jh)(this,(function(p){switch(p.label){case 0:return[4,B(t)];case 1:return n=p.sent(),i=function(e){return"".concat(l.xp.toLowerCase(),"_").concat(e.substring(0,6))}(e),[4,n.getRaw(i)];case 2:return(r=p.sent())?(null!==(f=null==t?void 0:t.cookieUpgrade)&&void 0!==f?f:L().cookieUpgrade)?[4,n.remove(i)]:[3,4]:[2,{optOut:!1}];case 3:p.sent(),p.label=4;case 4:return s=(0,o.CR)(r.split("."),5),u=s[0],a=s[1],c=s[2],d=s[3],v=s[4],[2,{deviceId:u,userId:Q(a),sessionId:W(d),lastEventTime:W(v),optOut:Boolean(c)}]}}))}))},W=function(e){var t=parseInt(e,32);if(!isNaN(t))return t},Q=function(e){if(atob&&escape&&e)try{return decodeURIComponent(escape(atob(e)))}catch(e){return}},Y=n(18726),ee=n(39439),te="[Amplitude]",ne="".concat(te," Page Viewed"),ie="".concat(te," Form Started"),oe="".concat(te," Form Submitted"),re="".concat(te," File Downloaded"),se="session_start",ue="session_end",ae="".concat(te," File Extension"),ce="".concat(te," File Name"),de="".concat(te," Link ID"),le="".concat(te," Link Text"),ve="".concat(te," Link URL"),fe="".concat(te," Form ID"),pe="".concat(te," Form Name"),he="".concat(te," Form Destination"),ge={page_domain:"".concat(te," Page Domain"),page_location:"".concat(te," Page Location"),page_path:"".concat(te," Page Path"),page_title:"".concat(te," Page Title"),page_url:"".concat(te," Page URL")},me=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return(0,o.ZT)(t,e),t.prototype.init=function(e,t,n){return void 0===e&&(e=""),(0,r.S)(this._init((0,o.pi)((0,o.pi)({},n),{userId:t,apiKey:e})))},t.prototype._init=function(t){var n,i,r,u,a,c,d,l,p,h,g,m,y,b,I,w,_,k;return(0,o.mG)(this,void 0,void 0,(function(){var S,T,R,J,C,q,x,z,U,D,N,V,j,M,L,F,H,Z=this;return(0,o.Jh)(this,(function(X){switch(X.label){case 0:return this.initializing?[2]:(this.initializing=!0,S=t,t.disableCookies?(T="",[3,5]):[3,1]);case 1:return null===(n=t.domain)||void 0===n?[3,2]:(R=n,[3,4]);case 2:return[4,(0,o.mG)(void 0,void 0,void 0,(function(){var e,t,n,i,r,s,u;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return[4,(new A).isEnabled()];case 1:if(!o.sent()||"undefined"==typeof location)return[2,""];for(e=location.hostname,t=e.split("."),n=[],i="AMP_TLDTEST",r=t.length-2;r>=0;--r)n.push(t.slice(r).join("."));r=0,o.label=2;case 2:return r<n.length?(s=n[r],[4,(u=new A({domain:"."+s})).set(i,1)]):[3,7];case 3:return o.sent(),[4,u.get(i)];case 4:return o.sent()?[4,u.remove(i)]:[3,6];case 5:return o.sent(),[2,"."+s];case 6:return r++,[3,2];case 7:return[2,""]}}))}))];case 3:R=X.sent(),X.label=4;case 4:T=R,X.label=5;case 5:return S.domain=T,[4,$(t.apiKey,t)];case 6:return J=X.sent(),[4,B(t)];case 7:return[4,(C=X.sent()).get(v(t.apiKey))];case 8:return q=X.sent(),x=(0,f.v)(),z=null!==(u=null!==(r=null!==(i=t.deviceId)&&void 0!==i?i:x.deviceId)&&void 0!==r?r:null==q?void 0:q.deviceId)&&void 0!==u?u:J.deviceId,U=null!==(c=null!==(a=t.sessionId)&&void 0!==a?a:null==q?void 0:q.sessionId)&&void 0!==c?c:J.sessionId,D=null!==(l=null!==(d=t.optOut)&&void 0!==d?d:null==q?void 0:q.optOut)&&void 0!==l?l:J.optOut,N=null!==(p=null==q?void 0:q.lastEventTime)&&void 0!==p?p:J.lastEventTime,V=null!==(g=null!==(h=t.userId)&&void 0!==h?h:null==q?void 0:q.userId)&&void 0!==g?g:J.userId,this.previousSessionDeviceId=null!==(m=null==q?void 0:q.deviceId)&&void 0!==m?m:J.deviceId,this.previousSessionUserId=null!==(y=null==q?void 0:q.userId)&&void 0!==y?y:J.userId,[4,K(t.apiKey,(0,o.pi)((0,o.pi)({},t),{deviceId:z,sessionId:U,optOut:D,lastEventTime:N,userId:V,cookieStorage:C}))];case 9:return j=X.sent(),[4,e.prototype._init.call(this,j)];case 10:return X.sent(),M=!this.config.lastEventTime,(!this.config.sessionId||this.config.lastEventTime&&Date.now()-this.config.lastEventTime>this.config.sessionTimeout)&&(this.setSessionId(Date.now()),M=!0),(L=O()).eventBridge.setEventReceiver((function(e){Z.track(e.eventType,e.eventProperties)})),L.identityStore.setIdentity({userId:this.config.userId,deviceId:this.config.deviceId}),[4,this.add(new s.o).promise];case 11:return X.sent(),[4,this.add(new G).promise];case 12:return X.sent(),[4,this.add({name:"@amplitude/plugin-session-handler",type:E.z.BEFORE,setup:function(e,t){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(n){return Q=e,te=t,[2]}))}))},execute:function(e){return(0,o.mG)(void 0,void 0,void 0,(function(){var t,n;return(0,o.Jh)(this,(function(i){return t=Date.now(),e.event_type===se||e.event_type===ue?(Q.lastEventTime=t,[2,e]):(n=Q.lastEventTime||t,t-n>Q.sessionTimeout&&(te.setSessionId(t),e.session_id=te.getSessionId(),e.time=t),Q.lastEventTime=t,[2,e])}))}))}}).promise];case 13:return X.sent(),[4,this.add(new P).promise];case 14:return X.sent(),("boolean"==typeof(W=this.config.defaultTracking)?W:null==W?void 0:W.fileDownloads)?[4,this.add({name:"@amplitude/plugin-file-download-tracking-browser",type:E.z.ENRICHMENT,setup:function(e,t){return(0,o.mG)(void 0,void 0,void 0,(function(){var n,i;return(0,o.Jh)(this,(function(o){return t?(n=function(e){var n;try{n=new URL(e.href,window.location.href)}catch(e){return}var o=i.exec(n.href),r=null==o?void 0:o[1];r&&e.addEventListener("click",(function(){var i;r&&t.track(re,((i={})[ae]=r,i[ce]=n.pathname,i[de]=e.id,i[le]=e.text,i[ve]=e.href,i))}))},i=/\.(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)$/,Array.from(document.getElementsByTagName("a")).forEach(n),"undefined"!=typeof MutationObserver&&new MutationObserver((function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){"A"===e.nodeName&&n(e),"querySelectorAll"in e&&"function"==typeof e.querySelectorAll&&Array.from(e.querySelectorAll("a")).map(n)}))}))})).observe(document.body,{subtree:!0,childList:!0}),[2]):(e.loggerProvider.warn("File download tracking requires a later version of @amplitude/analytics-browser. File download events are not tracked."),[2])}))}))},execute:function(e){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(t){return[2,e]}))}))}}).promise]:[3,16];case 15:X.sent(),X.label=16;case 16:return function(e){return"boolean"==typeof e?e:!!(null==e?void 0:e.formInteractions)}(this.config.defaultTracking)?[4,this.add({name:"@amplitude/plugin-form-interaction-tracking-browser",type:E.z.ENRICHMENT,setup:function(e,t){return(0,o.mG)(void 0,void 0,void 0,(function(){var n;return(0,o.Jh)(this,(function(i){return t?(n=function(e){var n=!1;e.addEventListener("change",(function(){var i;n||t.track(ie,((i={})[fe]=e.id,i[pe]=e.name,i[he]=e.action,i)),n=!0}),{}),e.addEventListener("submit",(function(){var i,o;n||t.track(ie,((i={})[fe]=e.id,i[pe]=e.name,i[he]=e.action,i)),t.track(oe,((o={})[fe]=e.id,o[pe]=e.name,o[he]=e.action,o)),n=!1}))},Array.from(document.getElementsByTagName("form")).forEach(n),"undefined"!=typeof MutationObserver&&new MutationObserver((function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){"FORM"===e.nodeName&&n(e),"querySelectorAll"in e&&"function"==typeof e.querySelectorAll&&Array.from(e.querySelectorAll("form")).map(n)}))}))})).observe(document.body,{subtree:!0,childList:!0}),[2]):(e.loggerProvider.warn("Form interaction tracking requires a later version of @amplitude/analytics-browser. Form interaction events are not tracked."),[2])}))}))},execute:function(e){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(t){return[2,e]}))}))}}).promise]:[3,18];case 17:X.sent(),X.label=18;case 18:return(null===(b=this.config.attribution)||void 0===b?void 0:b.disabled)?[3,20]:((F=(0,Y.h)({excludeReferrers:null===(I=this.config.attribution)||void 0===I?void 0:I.excludeReferrers,initialEmptyValue:null===(w=this.config.attribution)||void 0===w?void 0:w.initialEmptyValue,resetSessionOnNewCampaign:null===(_=this.config.attribution)||void 0===_?void 0:_.resetSessionOnNewCampaign})).__pluginEnabledOverride=!(!M&&!(null===(k=this.config.attribution)||void 0===k?void 0:k.trackNewCampaigns))&&void 0,[4,this.add(F).promise]);case 19:X.sent(),X.label=20;case 20:return H=function(e){var t,n,i=(null===(t=e.attribution)||void 0===t?void 0:t.trackPageViews)?"attribution":function(){return!1},o=void 0,r="Page View";return("boolean"==typeof(n=e.defaultTracking)?n:!!(!0===(null==n?void 0:n.pageViews)||(null==n?void 0:n.pageViews)&&"object"==typeof n.pageViews))&&(i=void 0,r=void 0,e.defaultTracking&&"object"==typeof e.defaultTracking&&e.defaultTracking.pageViews&&"object"==typeof e.defaultTracking.pageViews&&("trackOn"in e.defaultTracking.pageViews&&(i=e.defaultTracking.pageViews.trackOn),"trackHistoryChanges"in e.defaultTracking.pageViews&&(o=e.defaultTracking.pageViews.trackHistoryChanges),"eventType"in e.defaultTracking.pageViews&&e.defaultTracking.pageViews.eventType&&(r=e.defaultTracking.pageViews.eventType))),{trackOn:i,trackHistoryChanges:o,eventType:r}}(this.config),H.eventType=H.eventType||ne,[4,this.add((0,ee._)(H)).promise];case 21:return X.sent(),[4,this.add({name:"@amplitude/plugin-default-page-view-event-enrichment-browser",type:E.z.ENRICHMENT,setup:function(){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(e){return[2,void 0]}))}))},execute:function(e){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(t){return e.event_type===ne&&e.event_properties&&(e.event_properties=Object.entries(e.event_properties).reduce((function(e,t){var n=(0,o.CR)(t,2),i=n[0],r=n[1],s=ge[i];return s?e[s]=r:e[i]=r,e}),{})),[2,e]}))}))}}).promise];case 22:return X.sent(),this.initializing=!1,[4,this.runQueuedFunctions("dispatchQ")];case 23:return X.sent(),[2]}var W,Q,te}))}))},t.prototype.getUserId=function(){var e;return null===(e=this.config)||void 0===e?void 0:e.userId},t.prototype.setUserId=function(e){this.config?e===this.config.userId&&void 0!==e||(this.config.userId=e,this.setSessionId(Date.now()),function(e){O().identityStore.editIdentity().setUserId(e).commit()}(e)):this.q.push(this.setUserId.bind(this,e))},t.prototype.getDeviceId=function(){var e;return null===(e=this.config)||void 0===e?void 0:e.deviceId},t.prototype.setDeviceId=function(e){this.config?(this.config.deviceId=e,function(e){O().identityStore.editIdentity().setDeviceId(e).commit()}(e)):this.q.push(this.setDeviceId.bind(this,e))},t.prototype.reset=function(){this.setDeviceId((0,u.h)()),this.setUserId(void 0)},t.prototype.getSessionId=function(){var e;return null===(e=this.config)||void 0===e?void 0:e.sessionId},t.prototype.setSessionId=function(e){if(this.config){var t,n=this.getSessionId(),i=this.config.lastEventTime;if(this.config.sessionId=e,this.config.lastEventTime=void 0,"boolean"==typeof(t=this.config.defaultTracking)?t:null==t?void 0:t.sessions){if(n&&i){var o={session_id:n,time:i+1};o.device_id=this.previousSessionDeviceId,o.user_id=this.previousSessionUserId,this.track(ue,void 0,o)}this.track(se,void 0,{session_id:e,time:e-1}),this.previousSessionDeviceId=this.config.deviceId,this.previousSessionUserId=this.config.userId}}else this.q.push(this.setSessionId.bind(this,e))},t.prototype.setTransport=function(e){this.config?this.config.transportProvider=X(e):this.q.push(this.setTransport.bind(this,e))},t.prototype.identify=function(t,n){if(J(t)){var i=t._q;t._q=[],t=R(new a.h,i)}return(null==n?void 0:n.user_id)&&this.setUserId(n.user_id),(null==n?void 0:n.device_id)&&this.setDeviceId(n.device_id),e.prototype.identify.call(this,t,n)},t.prototype.groupIdentify=function(t,n,i,o){if(J(i)){var r=i._q;i._q=[],i=R(new a.h,r)}return e.prototype.groupIdentify.call(this,t,n,i,o)},t.prototype.revenue=function(t,n){if(J(t)){var i=t._q;t._q=[],t=R(new c.e,i)}return e.prototype.revenue.call(this,t,n)},t}(d.c),ye=function(){var e=new me;return{init:(0,i.w_)(e.init.bind(e),"init",(0,i.yh)(e),(0,i.zn)(e,["config"])),add:(0,i.w_)(e.add.bind(e),"add",(0,i.yh)(e),(0,i.zn)(e,["config.apiKey","timeline.plugins"])),remove:(0,i.w_)(e.remove.bind(e),"remove",(0,i.yh)(e),(0,i.zn)(e,["config.apiKey","timeline.plugins"])),track:(0,i.w_)(e.track.bind(e),"track",(0,i.yh)(e),(0,i.zn)(e,["config.apiKey","timeline.queue.length"])),logEvent:(0,i.w_)(e.logEvent.bind(e),"logEvent",(0,i.yh)(e),(0,i.zn)(e,["config.apiKey","timeline.queue.length"])),identify:(0,i.w_)(e.identify.bind(e),"identify",(0,i.yh)(e),(0,i.zn)(e,["config.apiKey","timeline.queue.length"])),groupIdentify:(0,i.w_)(e.groupIdentify.bind(e),"groupIdentify",(0,i.yh)(e),(0,i.zn)(e,["config.apiKey","timeline.queue.length"])),setGroup:(0,i.w_)(e.setGroup.bind(e),"setGroup",(0,i.yh)(e),(0,i.zn)(e,["config.apiKey","timeline.queue.length"])),revenue:(0,i.w_)(e.revenue.bind(e),"revenue",(0,i.yh)(e),(0,i.zn)(e,["config.apiKey","timeline.queue.length"])),flush:(0,i.w_)(e.flush.bind(e),"flush",(0,i.yh)(e),(0,i.zn)(e,["config.apiKey","timeline.queue.length"])),getUserId:(0,i.w_)(e.getUserId.bind(e),"getUserId",(0,i.yh)(e),(0,i.zn)(e,["config","config.userId"])),setUserId:(0,i.w_)(e.setUserId.bind(e),"setUserId",(0,i.yh)(e),(0,i.zn)(e,["config","config.userId"])),getDeviceId:(0,i.w_)(e.getDeviceId.bind(e),"getDeviceId",(0,i.yh)(e),(0,i.zn)(e,["config","config.deviceId"])),setDeviceId:(0,i.w_)(e.setDeviceId.bind(e),"setDeviceId",(0,i.yh)(e),(0,i.zn)(e,["config","config.deviceId"])),reset:(0,i.w_)(e.reset.bind(e),"reset",(0,i.yh)(e),(0,i.zn)(e,["config","config.userId","config.deviceId"])),getSessionId:(0,i.w_)(e.getSessionId.bind(e),"getSessionId",(0,i.yh)(e),(0,i.zn)(e,["config"])),setSessionId:(0,i.w_)(e.setSessionId.bind(e),"setSessionId",(0,i.yh)(e),(0,i.zn)(e,["config"])),setOptOut:(0,i.w_)(e.setOptOut.bind(e),"setOptOut",(0,i.yh)(e),(0,i.zn)(e,["config"])),setTransport:(0,i.w_)(e.setTransport.bind(e),"setTransport",(0,i.yh)(e),(0,i.zn)(e,["config"]))}};ye()},53665:(e,t,n)=>{n.d(t,{q:()=>s});var i=n(70655),o=n(48964),r=n(75645),s=function(){function e(){}return e.prototype.parse=function(){return(0,i.mG)(this,void 0,void 0,(function(){return(0,i.Jh)(this,(function(e){return[2,(0,i.pi)((0,i.pi)((0,i.pi)((0,i.pi)({},r.Lo),this.getUtmParam()),this.getReferrer()),this.getClickIds())]}))}))},e.prototype.getUtmParam=function(){var e=(0,o.v)();return{utm_campaign:e[r.VX],utm_content:e[r.fZ],utm_id:e[r.KI],utm_medium:e[r.lP],utm_source:e[r.b3],utm_term:e[r.NE]}},e.prototype.getReferrer=function(){var e,t,n={referrer:void 0,referring_domain:void 0};try{n.referrer=document.referrer||void 0,n.referring_domain=null!==(t=null===(e=n.referrer)||void 0===e?void 0:e.split("/")[2])&&void 0!==t?t:void 0}catch(e){}return n},e.prototype.getClickIds=function(){var e,t=(0,o.v)();return(e={})[r.ah]=t[r.ah],e[r.rV]=t[r.rV],e[r.fC]=t[r.fC],e[r.Ji]=t[r.Ji],e[r.bz]=t[r.bz],e[r.pr]=t[r.pr],e[r.cl]=t[r.cl],e[r.oZ]=t[r.oZ],e[r.pG]=t[r.pG],e},e}()},75645:(e,t,n)=>{n.d(t,{Ji:()=>v,KI:()=>r,Lo:()=>y,NE:()=>a,VX:()=>i,ah:()=>c,b3:()=>u,bz:()=>f,cl:()=>h,fC:()=>l,fZ:()=>o,lP:()=>s,oZ:()=>g,pG:()=>m,pr:()=>p,rV:()=>d});var i="utm_campaign",o="utm_content",r="utm_id",s="utm_medium",u="utm_source",a="utm_term",c="dclid",d="fbclid",l="gbraid",v="gclid",f="ko_click_id",p="msclkid",h="ttclid",g="twclid",m="wbraid",y={utm_campaign:void 0,utm_content:void 0,utm_id:void 0,utm_medium:void 0,utm_source:void 0,utm_term:void 0,referrer:void 0,referring_domain:void 0,dclid:void 0,gbraid:void 0,gclid:void 0,fbclid:void 0,ko_click_id:void 0,msclkid:void 0,ttclid:void 0,twclid:void 0,wbraid:void 0}},563:(e,t,n)=>{n.d(t,{l:()=>i});var i=function(){return"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof self?self:"undefined"!=typeof global?global:void 0}},48964:(e,t,n)=>{n.d(t,{v:()=>o});var i=n(563),o=function(){var e,t=(0,i.l)();return(null===(e=null==t?void 0:t.location)||void 0===e?void 0:e.search)?t.location.search.substring(1).split("&").filter(Boolean).reduce((function(e,t){var n=t.split("=",2),i=r(n[0]),o=r(n[1]);return o?(e[i]=o,e):e}),{}):{}},r=function(e){void 0===e&&(e="");try{return decodeURIComponent(e)}catch(e){return""}}}}]);
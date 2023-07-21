"use strict";(global.webpackChunkWeMod=global.webpackChunkWeMod||[]).push([[7095],{44673:(e,t,r)=>{r.d(t,{De:()=>l,RG:()=>h});var n,i=r(8302);!function(e){e.US="US",e.EU="EU"}(n||(n={}));var o=r(14903),s="Amplitude Logger ",u=function(){function e(){this.logLevel=i.i.None}return e.prototype.disable=function(){this.logLevel=i.i.None},e.prototype.enable=function(e){void 0===e&&(e=i.i.Warn),this.logLevel=e},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.logLevel<i.i.Verbose||console.log("".concat(s,"[Log]: ").concat(e.join(" ")))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.logLevel<i.i.Warn||console.warn("".concat(s,"[Warn]: ").concat(e.join(" ")))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.logLevel<i.i.Error||console.error("".concat(s,"[Error]: ").concat(e.join(" ")))},e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.logLevel<i.i.Debug||console.log("".concat(s,"[Debug]: ").concat(e.join(" ")))},e}(),a=function(){return{flushMaxRetries:12,flushQueueSize:200,flushIntervalMillis:1e4,logLevel:i.i.Warn,loggerProvider:new u,optOut:!1,serverUrl:o.EG,serverZone:n.US,useBatch:!1}},l=function(){function e(e){var t,r,n;this._optOut=!1;var i=a();this.apiKey=e.apiKey,this.flushIntervalMillis=e.flushIntervalMillis||i.flushIntervalMillis,this.flushMaxRetries=e.flushMaxRetries||i.flushMaxRetries,this.flushQueueSize=e.flushQueueSize||i.flushQueueSize,this.loggerProvider=e.loggerProvider||i.loggerProvider,this.logLevel=null!==(t=e.logLevel)&&void 0!==t?t:i.logLevel,this.minIdLength=e.minIdLength,this.plan=e.plan,this.ingestionMetadata=e.ingestionMetadata,this.optOut=null!==(r=e.optOut)&&void 0!==r?r:i.optOut,this.serverUrl=e.serverUrl,this.serverZone=e.serverZone||i.serverZone,this.storageProvider=e.storageProvider,this.transportProvider=e.transportProvider,this.useBatch=null!==(n=e.useBatch)&&void 0!==n?n:i.useBatch,this.loggerProvider.enable(this.logLevel);var o=h(e.serverUrl,e.serverZone,e.useBatch);this.serverZone=o.serverZone,this.serverUrl=o.serverUrl}return Object.defineProperty(e.prototype,"optOut",{get:function(){return this._optOut},set:function(e){this._optOut=e},enumerable:!1,configurable:!0}),e}(),c=function(e,t){return e===n.EU?t?o.RE:o.y_:t?o.h8:o.EG},h=function(e,t,r){if(void 0===e&&(e=""),void 0===t&&(t=a().serverZone),void 0===r&&(r=a().useBatch),e)return{serverUrl:e,serverZone:void 0};var n=["US","EU"].includes(t)?t:a().serverZone;return{serverZone:n,serverUrl:c(n,r)}}},14903:(e,t,r)=>{r.d(t,{EG:()=>s,RE:()=>l,f1:()=>o,h8:()=>a,q$:()=>n,xp:()=>i,y_:()=>u});var n="-",i="AMP",o="".concat(i,"_unsent"),s="https://api2.amplitude.com/2/httpapi",u="https://api.eu.amplitude.com/2/httpapi",a="https://api2.amplitude.com/batch",l="https://api.eu.amplitude.com/batch"},5441:(e,t,r)=>{r.d(t,{c:()=>c});var n=r(70655),i=r(77648),o=r(90902),s=r(97774),u=function(){function e(e){this.client=e,this.queue=[],this.applying=!1,this.plugins=[]}return e.prototype.register=function(e,t){return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(r){switch(r.label){case 0:return[4,e.setup(t,this.client)];case 1:return r.sent(),this.plugins.push(e),[2]}}))}))},e.prototype.deregister=function(e){return this.plugins.splice(this.plugins.findIndex((function(t){return t.name===e})),1),Promise.resolve()},e.prototype.reset=function(e){this.applying=!1,this.plugins=[],this.client=e},e.prototype.push=function(e){var t=this;return new Promise((function(r){t.queue.push([e,r]),t.scheduleApply(0)}))},e.prototype.scheduleApply=function(e){var t=this;this.applying||(this.applying=!0,setTimeout((function(){t.apply(t.queue.shift()).then((function(){t.applying=!1,t.queue.length>0&&t.scheduleApply(0)}))}),e))},e.prototype.apply=function(e){return(0,n.mG)(this,void 0,void 0,(function(){var t,r,i,u,a,l,c,h,p,d,f,v,y,g,m,E,_,b;return(0,n.Jh)(this,(function(S){switch(S.label){case 0:if(!e)return[2];t=(0,n.CR)(e,1),r=t[0],i=(0,n.CR)(e,2),u=i[1],a=this.plugins.filter((function(e){return e.type===o.z.BEFORE})),S.label=1;case 1:S.trys.push([1,6,7,8]),l=(0,n.XA)(a),c=l.next(),S.label=2;case 2:return c.done?[3,5]:[4,c.value.execute((0,n.pi)({},r))];case 3:r=S.sent(),S.label=4;case 4:return c=l.next(),[3,2];case 5:return[3,8];case 6:return h=S.sent(),m={error:h},[3,8];case 7:try{c&&!c.done&&(E=l.return)&&E.call(l)}finally{if(m)throw m.error}return[7];case 8:p=this.plugins.filter((function(e){return e.type===o.z.ENRICHMENT})),S.label=9;case 9:S.trys.push([9,14,15,16]),d=(0,n.XA)(p),f=d.next(),S.label=10;case 10:return f.done?[3,13]:[4,f.value.execute((0,n.pi)({},r))];case 11:r=S.sent(),S.label=12;case 12:return f=d.next(),[3,10];case 13:return[3,16];case 14:return v=S.sent(),_={error:v},[3,16];case 15:try{f&&!f.done&&(b=d.return)&&b.call(d)}finally{if(_)throw _.error}return[7];case 16:return y=this.plugins.filter((function(e){return e.type===o.z.DESTINATION})),g=y.map((function(e){var t=(0,n.pi)({},r);return e.execute(t).catch((function(e){return(0,s.O)(t,0,String(e))}))})),Promise.all(g).then((function(e){var t=(0,n.CR)(e,1)[0];u(t)})),[2]}}))}))},e.prototype.flush=function(){return(0,n.mG)(this,void 0,void 0,(function(){var e,t,r,i=this;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return e=this.queue,this.queue=[],[4,Promise.all(e.map((function(e){return i.apply(e)})))];case 1:return n.sent(),t=this.plugins.filter((function(e){return e.type===o.z.DESTINATION})),r=t.map((function(e){return e.flush&&e.flush()})),[4,Promise.all(r)];case 2:return n.sent(),[2]}}))}))},e}(),a=r(29536),l=r(6492),c=function(){function e(e){void 0===e&&(e="$default"),this.initializing=!1,this.q=[],this.dispatchQ=[],this.logEvent=this.track.bind(this),this.timeline=new u(this),this.name=e}return e.prototype._init=function(e){return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(t){switch(t.label){case 0:return this.config=e,this.timeline.reset(this),[4,this.runQueuedFunctions("q")];case 1:return t.sent(),[2]}}))}))},e.prototype.runQueuedFunctions=function(e){return(0,n.mG)(this,void 0,void 0,(function(){var t,r,i,o,s,u;return(0,n.Jh)(this,(function(a){switch(a.label){case 0:t=this[e],this[e]=[],a.label=1;case 1:a.trys.push([1,6,7,8]),r=(0,n.XA)(t),i=r.next(),a.label=2;case 2:return i.done?[3,5]:[4,(0,i.value)()];case 3:a.sent(),a.label=4;case 4:return i=r.next(),[3,2];case 5:return[3,8];case 6:return o=a.sent(),s={error:o},[3,8];case 7:try{i&&!i.done&&(u=r.return)&&u.call(r)}finally{if(s)throw s.error}return[7];case 8:return[2]}}))}))},e.prototype.track=function(e,t,r){var n=(0,i.bD)(e,t,r);return(0,l.S)(this.dispatch(n))},e.prototype.identify=function(e,t){var r=(0,i.O7)(e,t);return(0,l.S)(this.dispatch(r))},e.prototype.groupIdentify=function(e,t,r,n){var o=(0,i.Jz)(e,t,r,n);return(0,l.S)(this.dispatch(o))},e.prototype.setGroup=function(e,t,r){var n=(0,i.Bl)(e,t,r);return(0,l.S)(this.dispatch(n))},e.prototype.revenue=function(e,t){var r=(0,i.To)(e,t);return(0,l.S)(this.dispatch(r))},e.prototype.add=function(e){return this.config?(0,l.S)(this.timeline.register(e,this.config)):(this.q.push(this.add.bind(this,e)),(0,l.S)())},e.prototype.remove=function(e){return this.config?(0,l.S)(this.timeline.deregister(e)):(this.q.push(this.remove.bind(this,e)),(0,l.S)())},e.prototype.dispatchWithCallback=function(e,t){if(!this.config)return t((0,s.O)(e,0,a.I2));this.process(e).then(t)},e.prototype.dispatch=function(e){return(0,n.mG)(this,void 0,void 0,(function(){var t=this;return(0,n.Jh)(this,(function(r){return this.config?[2,this.process(e)]:[2,new Promise((function(r){t.dispatchQ.push(t.dispatchWithCallback.bind(t,e,r))}))]}))}))},e.prototype.process=function(e){return(0,n.mG)(this,void 0,void 0,(function(){var t,r,i;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),this.config.optOut?[2,(0,s.O)(e,0,a.AV)]:[4,this.timeline.push(e)];case 1:return 200===(i=n.sent()).code?this.config.loggerProvider.log(i.message):this.config.loggerProvider.error(i.message),[2,i];case 2:return t=n.sent(),r=String(t),this.config.loggerProvider.error(r),[2,i=(0,s.O)(e,0,r)];case 3:return[2]}}))}))},e.prototype.setOptOut=function(e){this.config?this.config.optOut=Boolean(e):this.q.push(this.setOptOut.bind(this,Boolean(e)))},e.prototype.flush=function(){return(0,l.S)(this.timeline.flush())},e}()},95656:(e,t,r)=>{r.d(t,{h:()=>u});var n=r(70655),i=r(76766),o=r(14903),s=r(33766),u=function(){function e(){this._propertySet=new Set,this._properties={}}return e.prototype.getUserProperties=function(){return(0,n.pi)({},this._properties)},e.prototype.set=function(e,t){return this._safeSet(i.h9.SET,e,t),this},e.prototype.setOnce=function(e,t){return this._safeSet(i.h9.SET_ONCE,e,t),this},e.prototype.append=function(e,t){return this._safeSet(i.h9.APPEND,e,t),this},e.prototype.prepend=function(e,t){return this._safeSet(i.h9.PREPEND,e,t),this},e.prototype.postInsert=function(e,t){return this._safeSet(i.h9.POSTINSERT,e,t),this},e.prototype.preInsert=function(e,t){return this._safeSet(i.h9.PREINSERT,e,t),this},e.prototype.remove=function(e,t){return this._safeSet(i.h9.REMOVE,e,t),this},e.prototype.add=function(e,t){return this._safeSet(i.h9.ADD,e,t),this},e.prototype.unset=function(e){return this._safeSet(i.h9.UNSET,e,o.q$),this},e.prototype.clearAll=function(){return this._properties={},this._properties[i.h9.CLEAR_ALL]=o.q$,this},e.prototype._safeSet=function(e,t,r){if(this._validate(e,t,r)){var n=this._properties[e];return void 0===n&&(n={},this._properties[e]=n),n[t]=r,this._propertySet.add(t),!0}return!1},e.prototype._validate=function(e,t,r){return void 0===this._properties[i.h9.CLEAR_ALL]&&!this._propertySet.has(t)&&(e===i.h9.ADD?"number"==typeof r:e===i.h9.UNSET||e===i.h9.REMOVE||(0,s.T)(t,r))},e}()},29536:(e,t,r)=>{r.d(t,{AV:()=>s,C_:()=>u,I2:()=>l,IT:()=>i,Zq:()=>o,Zy:()=>a,nS:()=>n});var n="Event tracked successfully",i="Unexpected error occurred",o="Event rejected due to exceeded retry count",s="Event skipped due to optOut config",u="Event rejected due to missing API key",a="Invalid API key",l="Client not initialized"},72141:(e,t,r)=>{r.d(t,{o:()=>c});var n=r(70655),i=r(90902),o=r(75925),s=r(29536),u=r(14903),a=r(97774),l=r(44673),c=function(){function e(){this.name="amplitude",this.type=i.z.DESTINATION,this.retryTimeout=1e3,this.throttleTimeout=3e4,this.storageKey="",this.scheduled=null,this.queue=[]}return e.prototype.setup=function(e){var t;return(0,n.mG)(this,void 0,void 0,(function(){var r,i=this;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return this.config=e,this.storageKey="".concat(u.f1,"_").concat(this.config.apiKey.substring(0,10)),[4,null===(t=this.config.storageProvider)||void 0===t?void 0:t.get(this.storageKey)];case 1:return r=n.sent(),this.saveEvents(),r&&r.length>0&&Promise.all(r.map((function(e){return i.execute(e)}))).catch(),[2,Promise.resolve(void 0)]}}))}))},e.prototype.execute=function(e){var t=this;return new Promise((function(r){var n={event:e,attempts:0,callback:function(e){return r(e)},timeout:0};t.addToQueue(n)}))},e.prototype.addToQueue=function(){for(var e=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var n=t.filter((function(t){return t.attempts<e.config.flushMaxRetries?(t.attempts+=1,!0):(e.fulfillRequest([t],500,s.Zq),!1)}));n.forEach((function(t){e.queue=e.queue.concat(t),0!==t.timeout?setTimeout((function(){t.timeout=0,e.schedule(0)}),t.timeout):e.schedule(e.config.flushIntervalMillis)})),this.saveEvents()},e.prototype.schedule=function(e){var t=this;this.scheduled||(this.scheduled=setTimeout((function(){t.flush(!0).then((function(){t.queue.length>0&&t.schedule(e)}))}),e))},e.prototype.flush=function(e){return void 0===e&&(e=!1),(0,n.mG)(this,void 0,void 0,(function(){var t,r,i,o=this;return(0,n.Jh)(this,(function(n){switch(n.label){case 0:return t=[],r=[],this.queue.forEach((function(e){return 0===e.timeout?t.push(e):r.push(e)})),this.queue=r,this.scheduled&&(clearTimeout(this.scheduled),this.scheduled=null),s=t,u=this.config.flushQueueSize,a=Math.max(u,1),i=s.reduce((function(e,t,r){var n=Math.floor(r/a);return e[n]||(e[n]=[]),e[n].push(t),e}),[]),[4,Promise.all(i.map((function(t){return o.send(t,e)})))];case 1:return n.sent(),[2]}var s,u,a}))}))},e.prototype.send=function(e,t){return void 0===t&&(t=!0),(0,n.mG)(this,void 0,void 0,(function(){var r,i,o,u,a;return(0,n.Jh)(this,(function(c){switch(c.label){case 0:if(!this.config.apiKey)return[2,this.fulfillRequest(e,400,s.C_)];r={api_key:this.config.apiKey,events:e.map((function(e){var t=e.event;return t.extra,(0,n._T)(t,["extra"])})),options:{min_id_length:this.config.minIdLength}},c.label=1;case 1:return c.trys.push([1,3,,4]),i=(0,l.RG)(this.config.serverUrl,this.config.serverZone,this.config.useBatch).serverUrl,[4,this.config.transportProvider.send(i,r)];case 2:if(null===(o=c.sent()))return this.fulfillRequest(e,0,s.IT),[2];if(!t){if("body"in o){u="";try{u=JSON.stringify(o.body,null,2)}catch(e){}this.fulfillRequest(e,o.statusCode,"".concat(o.status,": ").concat(u))}else this.fulfillRequest(e,o.statusCode,o.status);return[2]}return this.handleReponse(o,e),[3,4];case 3:return a=c.sent(),this.fulfillRequest(e,0,String(a)),[3,4];case 4:return[2]}}))}))},e.prototype.handleReponse=function(e,t){switch(e.status){case o.q.Success:this.handleSuccessResponse(e,t);break;case o.q.Invalid:this.handleInvalidResponse(e,t);break;case o.q.PayloadTooLarge:this.handlePayloadTooLargeResponse(e,t);break;case o.q.RateLimit:this.handleRateLimitResponse(e,t);break;default:this.handleOtherReponse(t)}},e.prototype.handleSuccessResponse=function(e,t){this.fulfillRequest(t,e.statusCode,s.nS)},e.prototype.handleInvalidResponse=function(e,t){var r=this;if(e.body.missingField||e.body.error.startsWith(s.Zy))this.fulfillRequest(t,e.statusCode,e.body.error);else{var i=(0,n.ev)((0,n.ev)((0,n.ev)((0,n.ev)([],(0,n.CR)(Object.values(e.body.eventsWithInvalidFields)),!1),(0,n.CR)(Object.values(e.body.eventsWithMissingFields)),!1),(0,n.CR)(Object.values(e.body.eventsWithInvalidIdLengths)),!1),(0,n.CR)(e.body.silencedEvents),!1).flat(),o=new Set(i),u=t.filter((function(t,n){if(!o.has(n))return!0;r.fulfillRequest([t],e.statusCode,e.body.error)}));this.addToQueue.apply(this,(0,n.ev)([],(0,n.CR)(u),!1))}},e.prototype.handlePayloadTooLargeResponse=function(e,t){1!==t.length?(this.config.flushQueueSize/=2,this.addToQueue.apply(this,(0,n.ev)([],(0,n.CR)(t),!1))):this.fulfillRequest(t,e.statusCode,e.body.error)},e.prototype.handleRateLimitResponse=function(e,t){var r=this,i=Object.keys(e.body.exceededDailyQuotaUsers),o=Object.keys(e.body.exceededDailyQuotaDevices),s=e.body.throttledEvents,u=new Set(i),a=new Set(o),l=new Set(s),c=t.filter((function(t,n){if(!(t.event.user_id&&u.has(t.event.user_id)||t.event.device_id&&a.has(t.event.device_id)))return l.has(n)&&(t.timeout=r.throttleTimeout),!0;r.fulfillRequest([t],e.statusCode,e.body.error)}));this.addToQueue.apply(this,(0,n.ev)([],(0,n.CR)(c),!1))},e.prototype.handleOtherReponse=function(e){var t=this;this.addToQueue.apply(this,(0,n.ev)([],(0,n.CR)(e.map((function(e){return e.timeout=e.attempts*t.retryTimeout,e}))),!1))},e.prototype.fulfillRequest=function(e,t,r){this.saveEvents(),e.forEach((function(e){return e.callback((0,a.O)(e.event,t,r))}))},e.prototype.saveEvents=function(){if(this.config.storageProvider){var e=Array.from(this.queue.map((function(e){return e.event})));this.config.storageProvider.set(this.storageKey,e)}},e}()},73902:(e,t,r)=>{r.d(t,{e:()=>s});var n=r(70655),i=r(76766),o=r(33766),s=function(){function e(){this.productId="",this.quantity=1,this.price=0}return e.prototype.setProductId=function(e){return this.productId=e,this},e.prototype.setQuantity=function(e){return e>0&&(this.quantity=e),this},e.prototype.setPrice=function(e){return this.price=e,this},e.prototype.setRevenueType=function(e){return this.revenueType=e,this},e.prototype.setRevenue=function(e){return this.revenue=e,this},e.prototype.setEventProperties=function(e){return(0,o.L)(e)&&(this.properties=e),this},e.prototype.getEventProperties=function(){var e=this.properties?(0,n.pi)({},this.properties):{};return e[i.al.REVENUE_PRODUCT_ID]=this.productId,e[i.al.REVENUE_QUANTITY]=this.quantity,e[i.al.REVENUE_PRICE]=this.price,e[i.al.REVENUE_TYPE]=this.revenueType,e[i.al.REVENUE]=this.revenue,e},e}()},17542:(e,t,r)=>{r.d(t,{k:()=>i});var n=r(70655),i=function(){function e(){this.memoryStorage=new Map}return e.prototype.isEnabled=function(){return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(e){return[2,!0]}))}))},e.prototype.get=function(e){return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(t){return[2,this.memoryStorage.get(e)]}))}))},e.prototype.getRaw=function(e){return(0,n.mG)(this,void 0,void 0,(function(){var t;return(0,n.Jh)(this,(function(r){switch(r.label){case 0:return[4,this.get(e)];case 1:return[2,(t=r.sent())?JSON.stringify(t):void 0]}}))}))},e.prototype.set=function(e,t){return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(r){return this.memoryStorage.set(e,t),[2]}))}))},e.prototype.remove=function(e){return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(t){return this.memoryStorage.delete(e),[2]}))}))},e.prototype.reset=function(){return(0,n.mG)(this,void 0,void 0,(function(){return(0,n.Jh)(this,(function(e){return this.memoryStorage.clear(),[2]}))}))},e}()},16635:(e,t,r)=>{r.d(t,{d:()=>i});var n=r(75925),i=function(){function e(){}return e.prototype.send=function(e,t){return Promise.resolve(null)},e.prototype.buildResponse=function(e){var t,r,i,o,s,u,a,l,c,h,p,d,f,v,y,g,m,E,_,b,S,R;if("object"!=typeof e)return null;var T=e.code||0,I=this.buildStatus(T);switch(I){case n.q.Success:return{status:I,statusCode:T,body:{eventsIngested:null!==(t=e.events_ingested)&&void 0!==t?t:0,payloadSizeBytes:null!==(r=e.payload_size_bytes)&&void 0!==r?r:0,serverUploadTime:null!==(i=e.server_upload_time)&&void 0!==i?i:0}};case n.q.Invalid:return{status:I,statusCode:T,body:{error:null!==(o=e.error)&&void 0!==o?o:"",missingField:null!==(s=e.missing_field)&&void 0!==s?s:"",eventsWithInvalidFields:null!==(u=e.events_with_invalid_fields)&&void 0!==u?u:{},eventsWithMissingFields:null!==(a=e.events_with_missing_fields)&&void 0!==a?a:{},eventsWithInvalidIdLengths:null!==(l=e.events_with_invalid_id_lengths)&&void 0!==l?l:{},epsThreshold:null!==(c=e.eps_threshold)&&void 0!==c?c:0,exceededDailyQuotaDevices:null!==(h=e.exceeded_daily_quota_devices)&&void 0!==h?h:{},silencedDevices:null!==(p=e.silenced_devices)&&void 0!==p?p:[],silencedEvents:null!==(d=e.silenced_events)&&void 0!==d?d:[],throttledDevices:null!==(f=e.throttled_devices)&&void 0!==f?f:{},throttledEvents:null!==(v=e.throttled_events)&&void 0!==v?v:[]}};case n.q.PayloadTooLarge:return{status:I,statusCode:T,body:{error:null!==(y=e.error)&&void 0!==y?y:""}};case n.q.RateLimit:return{status:I,statusCode:T,body:{error:null!==(g=e.error)&&void 0!==g?g:"",epsThreshold:null!==(m=e.eps_threshold)&&void 0!==m?m:0,throttledDevices:null!==(E=e.throttled_devices)&&void 0!==E?E:{},throttledUsers:null!==(_=e.throttled_users)&&void 0!==_?_:{},exceededDailyQuotaDevices:null!==(b=e.exceeded_daily_quota_devices)&&void 0!==b?b:{},exceededDailyQuotaUsers:null!==(S=e.exceeded_daily_quota_users)&&void 0!==S?S:{},throttledEvents:null!==(R=e.throttled_events)&&void 0!==R?R:[]}};case n.q.Timeout:default:return{status:I,statusCode:T}}},e.prototype.buildStatus=function(e){return e>=200&&e<300?n.q.Success:429===e?n.q.RateLimit:413===e?n.q.PayloadTooLarge:408===e?n.q.Timeout:e>=400&&e<500?n.q.Invalid:e>=500?n.q.Failed:n.q.Unknown},e}()},45574:(e,t,r)=>{r.d(t,{w_:()=>l,yh:()=>s,zn:()=>a});var n=r(70655),i=r(8302),o=function(e){return void 0===e&&(e=0),((new Error).stack||"").split("\n").slice(2+e).map((function(e){return e.trim()}))},s=function(e){return function(){var t=(0,n.pi)({},e.config);return{logger:t.loggerProvider,logLevel:t.logLevel}}},u=function(e,t){var r,i;t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"");try{for(var o=(0,n.XA)(t.split(".")),s=o.next();!s.done;s=o.next()){var u=s.value;if(!(u in e))return;e=e[u]}}catch(e){r={error:e}}finally{try{s&&!s.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}return e},a=function(e,t){return function(){var r,i,o={};try{for(var s=(0,n.XA)(t),a=s.next();!a.done;a=s.next()){var l=a.value;o[l]=u(e,l)}}catch(e){r={error:e}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}return o}},l=function(e,t,r,n,s){return void 0===s&&(s=null),function(){for(var u=[],a=0;a<arguments.length;a++)u[a]=arguments[a];var l=r(),c=l.logger,h=l.logLevel;if(h&&h<i.i.Debug||!h||!c)return e.apply(s,u);var p={type:"invoke public method",name:t,args:u,stacktrace:o(1),time:{start:(new Date).toISOString()},states:{}};n&&p.states&&(p.states.before=n());var d=e.apply(s,u);return d&&d.promise?d.promise.then((function(){n&&p.states&&(p.states.after=n()),p.time&&(p.time.end=(new Date).toISOString()),c.debug(JSON.stringify(p,null,2))})):(n&&p.states&&(p.states.after=n()),p.time&&(p.time.end=(new Date).toISOString()),c.debug(JSON.stringify(p,null,2))),d}}},77648:(e,t,r)=>{r.d(t,{Bl:()=>l,Jz:()=>a,O7:()=>u,To:()=>c,bD:()=>s});var n=r(70655),i=r(76766),o=r(95656),s=function(e,t,r){var i="string"==typeof e?{event_type:e}:e;return(0,n.pi)((0,n.pi)((0,n.pi)({},i),r),t&&{event_properties:t})},u=function(e,t){return(0,n.pi)((0,n.pi)({},t),{event_type:i.JU.IDENTIFY,user_properties:e.getUserProperties()})},a=function(e,t,r,o){var s;return(0,n.pi)((0,n.pi)({},o),{event_type:i.JU.GROUP_IDENTIFY,group_properties:r.getUserProperties(),groups:(s={},s[e]=t,s)})},l=function(e,t,r){var s,u=new o.h;return u.set(e,t),(0,n.pi)((0,n.pi)({},r),{event_type:i.JU.IDENTIFY,user_properties:u.getUserProperties(),groups:(s={},s[e]=t,s)})},c=function(e,t){return(0,n.pi)((0,n.pi)({},t),{event_type:i.JU.REVENUE,event_properties:e.getEventProperties()})}},97774:(e,t,r)=>{r.d(t,{O:()=>i});var n=r(75925),i=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=n.q.Unknown),{event:e,code:t,message:r}}},6492:(e,t,r)=>{r.d(t,{S:()=>n});var n=function(e){return{promise:e||Promise.resolve()}}},69071:(e,t,r)=>{r.d(t,{h:()=>n});var n=function(e){return e?(e^16*Math.random()>>e/4).toString(16):(String(1e7)+String(-1e3)+String(-4e3)+String(-8e3)+String(-1e11)).replace(/[018]/g,n)}},33766:(e,t,r)=>{r.d(t,{L:()=>i,T:()=>o});var n=r(70655),i=function(e){if(Object.keys(e).length>1e3)return!1;for(var t in e){var r=e[t];if(!o(t,r))return!1}return!0},o=function(e,t){var r,o;if("string"!=typeof e)return!1;if(Array.isArray(t)){var s=!0;try{for(var u=(0,n.XA)(t),a=u.next();!a.done;a=u.next()){var l=a.value;if(Array.isArray(l))return!1;if("object"==typeof l)s=s&&i(l);else if(!["number","string"].includes(typeof l))return!1;if(!s)return!1}}catch(e){r={error:e}}finally{try{a&&!a.done&&(o=u.return)&&o.call(u)}finally{if(r)throw r.error}}}else{if(null==t)return!1;if("object"==typeof t)return i(t);if(!["number","string","boolean"].includes(typeof t))return!1}return!0}},76766:(e,t,r)=>{var n,i,o;r.d(t,{JU:()=>o,al:()=>i,h9:()=>n}),function(e){e.SET="$set",e.SET_ONCE="$setOnce",e.ADD="$add",e.APPEND="$append",e.PREPEND="$prepend",e.REMOVE="$remove",e.PREINSERT="$preInsert",e.POSTINSERT="$postInsert",e.UNSET="$unset",e.CLEAR_ALL="$clearAll"}(n||(n={})),function(e){e.REVENUE_PRODUCT_ID="$productId",e.REVENUE_QUANTITY="$quantity",e.REVENUE_PRICE="$price",e.REVENUE_TYPE="$revenueType",e.REVENUE="$revenue"}(i||(i={})),function(e){e.IDENTIFY="$identify",e.GROUP_IDENTIFY="$groupidentify",e.REVENUE="revenue_amount"}(o||(o={}))},8302:(e,t,r)=>{var n;r.d(t,{i:()=>n}),function(e){e[e.None=0]="None",e[e.Error=1]="Error",e[e.Warn=2]="Warn",e[e.Verbose=3]="Verbose",e[e.Debug=4]="Debug"}(n||(n={}))},90902:(e,t,r)=>{var n;r.d(t,{z:()=>n}),function(e){e.BEFORE="before",e.ENRICHMENT="enrichment",e.DESTINATION="destination"}(n||(n={}))},75925:(e,t,r)=>{var n;r.d(t,{q:()=>n}),function(e){e.Unknown="unknown",e.Skipped="skipped",e.Success="success",e.RateLimit="rate_limit",e.PayloadTooLarge="payload_too_large",e.Invalid="invalid",e.Failed="failed",e.Timeout="Timeout",e.SystemError="SystemError"}(n||(n={}))},61529:(e,t,r)=>{var n;r.d(t,{F:()=>n}),function(e){e.XHR="xhr",e.SendBeacon="beacon",e.Fetch="fetch"}(n||(n={}))}}]);
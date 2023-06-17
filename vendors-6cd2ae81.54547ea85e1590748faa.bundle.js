/*! For license information please see vendors-6cd2ae81.54547ea85e1590748faa.bundle.js.LICENSE.txt */
"use strict";(global.webpackChunkWeMod=global.webpackChunkWeMod||[]).push([[204],{56158:(t,e,r)=>{r.d(e,{Fi:()=>p,H3:()=>k,On:()=>a,UW:()=>h,W2:()=>w,f3:()=>u,ri:()=>R});var n=r(81383),i=r(1015);function o(t,e,r,n){var i,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,r,s):i(e,r))||s);return o>3&&s&&Object.defineProperty(e,r,s),s}function s(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function a(t){var e=function(t){t.hasOwnProperty("inject")||(t.inject=(n.Pu.getOwn(n.Pu.paramTypes,t)||d).slice(),t.inject&&t.inject.length>0&&t.inject[t.inject.length-1]===Object&&t.inject.splice(-1,1))};return function(t){return!!t}(t)?e(t):e}function u(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e,r,n){if("number"==typeof n)return a(e),void(1===t.length&&(e.inject[n]=t[0]));n?n.value.inject=t:e.inject=t}}var c,h=n.TF.create("aurelia:resolver",(function(t){return"function"==typeof t.get||"Resolvers must implement: get(container: Container, key: any): any"}));function l(t,e,r){return t===e}!function(t){t[t.instance=0]="instance",t[t.singleton=1]="singleton",t[t.transient=2]="transient",t[t.function=3]="function",t[t.array=4]="array",t[t.alias=5]="alias"}(c||(c={}));var f=function(){function t(t,e){this.strategy=t,this.state=e}return t.prototype.get=function(t,e){if(l(this.strategy,c.instance,this.state))return this.state;if(l(this.strategy,c.singleton,this.state)){var r=t.invoke(this.state);return this.state=r,this.strategy=0,r}if(l(this.strategy,c.transient,this.state))return t.invoke(this.state);if(l(this.strategy,c.function,this.state))return this.state(t,e,this);if(l(this.strategy,c.array,this.state))return this.state[0].get(t,e);if(l(this.strategy,c.alias,this.state))return t.get(this.state);throw new Error("Invalid strategy: "+this.strategy)},o([h(),s("design:paramtypes",[Number,Object])],t)}(),p=(function(){function t(t){this._key=t}var e;e=t,t.prototype.get=function(t){var e=this;return function(){return t.get(e._key)}},t.of=function(t){return new e(t)},t=e=o([h(),s("design:paramtypes",[Object])],t)}(),function(){function t(t){this._key=t}var e;e=t,t.prototype.get=function(t){return t.getAll(this._key)},t.of=function(t){return new e(t)},t=e=o([h(),s("design:paramtypes",[Object])],t)}(),function(){function t(t,e){void 0===e&&(e=!0),this._key=t,this._checkParent=e}var e;return e=t,t.prototype.get=function(t){return t.hasResolver(this._key,this._checkParent)?t.get(this._key):null},t.of=function(t,r){return void 0===r&&(r=!0),new e(t,r)},e=o([h(),s("design:paramtypes",[Object,Boolean])],t)}());function g(t){if(null==t)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}(function(){function t(t){this._key=t}var e;e=t,t.prototype.get=function(t){return t.parent?t.parent.get(this._key):null},t.of=function(t){return new e(t)},t=e=o([h(),s("design:paramtypes",[Object])],t)})(),function(){function t(t){this._key=t}var e;e=t,t.prototype.get=function(t){var e=this._key,r=t.getResolver(e);return r&&r.strategy===c.function&&(e=r.state),function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t.invoke(e,r)}},t.of=function(t){return new e(t)},t=e=o([h(),s("design:paramtypes",[Object])],t)}(),function(){function t(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];this.key=t,this.asKey=t,this.dynamicDependencies=e}var e;e=t,t.prototype.get=function(t){var e=this.dynamicDependencies.length>0?this.dynamicDependencies.map((function(e){return e["protocol:aurelia:resolver"]?e.get(t):t.get(e)})):void 0,r=this.key,n=t.getResolver(r);n&&3===n.strategy&&(r=n.state);var i=t.invoke(r,e);return t.registerInstance(this.asKey,i),i},t.prototype.as=function(t){return this.asKey=t,this},t.of=function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return new(e.bind.apply(e,[void 0,t].concat(r)))},t=e=o([h(),s("design:paramtypes",[Object,Object])],t)}();var d=Object.freeze([]);n.Pu.registration="aurelia:registration",n.Pu.invoker="aurelia:invoker";var v=h.decorates,y=function(){function t(t,e,r){this.fn=t,this.invoker=e,this.dependencies=r}return t.prototype.invoke=function(t,e){return void 0!==e?this.invoker.invokeWithDynamicDependencies(t,this.fn,this.dependencies,e):this.invoker.invoke(t,this.fn,this.dependencies)},t}(),m={invoke:function(t,e,r){var n=r.map((function(e){return t.get(e)}));return Reflect.construct(e,n)},invokeWithDynamicDependencies:function(t,e,r,n){for(var i,o=r.length,s=new Array(o);o--;){if(null==(i=r[o]))throw new Error("Constructor Parameter with index "+o+" cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?");s[o]=t.get(i)}return void 0!==n&&(s=s.concat(n)),Reflect.construct(e,s)}},w=function(){function t(t){void 0===t&&(t={}),this._configuration=t,this._onHandlerCreated=t.onHandlerCreated,this._handlers=t.handlers||(t.handlers=new Map),this._resolvers=new Map,this.root=this,this.parent=null}return t.prototype.makeGlobal=function(){return t.instance=this,this},t.prototype.setHandlerCreatedCallback=function(t){this._onHandlerCreated=t,this._configuration.onHandlerCreated=t},t.prototype.registerInstance=function(t,e){return this.registerResolver(t,new f(0,void 0===e?t:e))},t.prototype.registerSingleton=function(t,e){return this.registerResolver(t,new f(1,void 0===e?t:e))},t.prototype.registerTransient=function(t,e){return this.registerResolver(t,new f(2,void 0===e?t:e))},t.prototype.registerHandler=function(t,e){return this.registerResolver(t,new f(3,e))},t.prototype.registerAlias=function(t,e){return this.registerResolver(e,new f(5,t))},t.prototype.registerResolver=function(t,e){g(t);var r=this._resolvers,n=r.get(t);return void 0===n?r.set(t,e):4===n.strategy?n.state.push(e):r.set(t,new f(4,[n,e])),e},t.prototype.autoRegister=function(t,e){if("function"==typeof(e=void 0===e?t:e)){var r=n.Pu.get(n.Pu.registration,e);return void 0===r?this.registerResolver(t,new f(1,e)):r.registerResolver(this,t,e)}return this.registerResolver(t,new f(0,e))},t.prototype.autoRegisterAll=function(t){for(var e=t.length;e--;)this.autoRegister(t[e])},t.prototype.unregister=function(t){this._resolvers.delete(t)},t.prototype.hasResolver=function(t,e){return void 0===e&&(e=!1),g(t),this._resolvers.has(t)||e&&null!==this.parent&&this.parent.hasResolver(t,e)},t.prototype.getResolver=function(t){return this._resolvers.get(t)},t.prototype.get=function(e){if(g(e),e===t)return this;if(v(e))return e.get(this,e);var r=this._resolvers.get(e);if(void 0===r){if(null===this.parent)return this.autoRegister(e).get(this,e);var i=n.Pu.get(n.Pu.registration,e);return void 0===i?this.parent._get(e):i.registerResolver(this,e,e).get(this,e)}return r.get(this,e)},t.prototype._get=function(t){var e=this._resolvers.get(t);return void 0===e?null===this.parent?this.autoRegister(t).get(this,t):this.parent._get(t):e.get(this,t)},t.prototype.getAll=function(t){g(t);var e=this._resolvers.get(t);if(void 0===e)return null===this.parent?d:this.parent.getAll(t);if(4===e.strategy){for(var r=e.state,n=r.length,i=new Array(n);n--;)i[n]=r[n].get(this,t);return i}return[e.get(this,t)]},t.prototype.createChild=function(){var e=new t(this._configuration);return e.root=this.root,e.parent=this,e},t.prototype.invoke=function(t,e){try{var r=this._handlers.get(t);return void 0===r&&(r=this._createInvocationHandler(t),this._handlers.set(t,r)),r.invoke(this,e)}catch(e){throw new i.KT("Error invoking "+t.name+". Check the inner error for details.",e,!0)}},t.prototype._createInvocationHandler=function(t){var e,r;if(void 0===t.inject)e=n.Pu.getOwn(n.Pu.paramTypes,t)||d;else{e=[];for(var i=t;"function"==typeof i;)e.push.apply(e,(r=i).hasOwnProperty("inject")?"function"==typeof r.inject?r.inject():r.inject:[]),i=Object.getPrototypeOf(i)}var o=n.Pu.getOwn(n.Pu.invoker,t)||m,s=new y(t,o,e);return void 0!==this._onHandlerCreated?this._onHandlerCreated(s):s},t}(),b=function(){function t(){}return t.prototype.invoke=function(t,e,r){for(var n=r.length,i=new Array(n);n--;)i[n]=t.get(r[n]);return e.apply(void 0,i)},t.prototype.invokeWithDynamicDependencies=function(t,e,r,n){for(var i=r.length,o=new Array(i);i--;)o[i]=t.get(r[i]);return void 0!==n&&(o=o.concat(n)),e.apply(void 0,o)},t}();function _(t){return function(e){n.Pu.define(n.Pu.registration,t,e)}}function k(t){return _(new C(t))}function R(t,e){return void 0===e&&(e=!1),_(new O(t,e))}b.instance=new b;var C=function(){function t(t){this._key=t}return t.prototype.registerResolver=function(t,e,r){var n=t.getResolver(this._key||e);return void 0===n?t.registerTransient(this._key||e,r):n},t}(),O=function(){function t(t,e){void 0===e&&(e=!1),"boolean"==typeof t?this._registerInChild=t:(this._key=t,this._registerInChild=e)}return t.prototype.registerResolver=function(t,e,r){var n=this._registerInChild?t:t.root,i=n.getResolver(this._key||e);return void 0===i?n.registerSingleton(this._key||e,r):i},t}()},"aurelia-event-aggregator":(t,e,r)=>{r.d(e,{configure:()=>u,h:()=>a});var n=r(98099).jl("event-aggregator"),i=function(){function t(t,e){this.messageType=t,this.callback=e}return t.prototype.handle=function(t){t instanceof this.messageType&&this.callback.call(null,t)},t}();function o(t,e,r){try{t(e,r)}catch(t){n.error(t)}}function s(t,e){try{t.handle(e)}catch(t){n.error(t)}}var a=function(){function t(){this.eventLookup={},this.messageHandlers=[]}return t.prototype.publish=function(t,e){var r=void 0,n=void 0;if(!t)throw new Error("Event was invalid.");if("string"==typeof t){if(r=this.eventLookup[t])for(n=(r=r.slice()).length;n--;)o(r[n],e,t)}else for(n=(r=this.messageHandlers.slice()).length;n--;)s(r[n],t)},t.prototype.subscribe=function(t,e){var r=void 0,n=void 0;if(!t)throw new Error("Event channel/type was invalid.");return"string"==typeof t?(r=e,n=this.eventLookup[t]||(this.eventLookup[t]=[])):(r=new i(t,e),n=this.messageHandlers),n.push(r),{dispose:function(){var t=n.indexOf(r);-1!==t&&n.splice(t,1)}}},t.prototype.subscribeOnce=function(t,e){var r=this.subscribe(t,(function(t,n){return r.dispose(),e(t,n)}));return r},t}();function u(t){var e,r;t.instance(a,(e=t.aurelia,r=new a,e.subscribeOnce=function(t,e){return r.subscribeOnce(t,e)},e.subscribe=function(t,e){return r.subscribe(t,e)},e.publish=function(t,e){r.publish(t,e)},r))}},52956:(t,e,r)=>{r.d(e,{eN:()=>c});var n=r(1015),i={maxRetries:3,interval:1e3,strategy:0},o=function(){function t(t){if(this.retryConfig=Object.assign({},i,t||{}),2===this.retryConfig.strategy&&this.retryConfig.interval<=1e3)throw new Error("An interval less than or equal to 1 second is not allowed when using the exponential retry strategy")}return t.prototype.request=function(t){var e=t;return e.retryConfig||(e.retryConfig=Object.assign({},this.retryConfig),e.retryConfig.counter=0),e.retryConfig.requestClone=t.clone(),t},t.prototype.response=function(t,e){return delete e.retryConfig,t},t.prototype.responseError=function(t,e,r){var i=e.retryConfig,o=i.requestClone;return Promise.resolve().then((function(){if(i.counter<i.maxRetries){var a=!i.doRetry||i.doRetry(t,e);return Promise.resolve(a).then((function(a){if(a)return i.counter++,new Promise((function(t){return n.iw.global.setTimeout(t,function(t){var e=t.interval,r=t.strategy,n=t.minRandomInterval,i=t.maxRandomInterval,o=t.counter;if("function"==typeof r)return t.strategy(o);switch(r){case 0:return s[0](e);case 1:return s[1](o,e);case 2:return s[2](o,e);case 3:return s[3](o,e,n,i);default:throw new Error("Unrecognized retry strategy")}}(i)||0)})).then((function(){var t=o.clone();return"function"==typeof i.beforeRetry?i.beforeRetry(t,r):t})).then((function(t){return r.fetch(Object.assign(t,{retryConfig:i}))}));throw delete e.retryConfig,t}))}throw delete e.retryConfig,t}))},t}(),s=[function(t){return t},function(t,e){return e*t},function(t,e){return 1===t?e:Math.pow(e,t)/1e3},function(t,e,r,n){return void 0===r&&(r=0),void 0===n&&(n=6e4),Math.random()*(n-r)+r}],a=function(){function t(){this.baseUrl="",this.defaults={},this.interceptors=[]}return t.prototype.withBaseUrl=function(t){return this.baseUrl=t,this},t.prototype.withDefaults=function(t){return this.defaults=t,this},t.prototype.withInterceptor=function(t){return this.interceptors.push(t),this},t.prototype.useStandardConfiguration=function(){return Object.assign(this.defaults,{credentials:"same-origin"},this.defaults),this.rejectErrorResponses()},t.prototype.rejectErrorResponses=function(){return this.withInterceptor({response:u})},t.prototype.withRetry=function(t){var e=new o(t);return this.withInterceptor(e)},t}();function u(t){if(!t.ok)throw t;return t}var c=function(){function t(){if(this.activeRequestCount=0,this.isRequesting=!1,this.isConfigured=!1,this.baseUrl="",this.defaults=null,this.interceptors=[],"undefined"==typeof fetch)throw new Error("HttpClient requires a Fetch API implementation, but the current environment doesn't support it. You may need to load a polyfill such as https://github.com/github/fetch")}return t.prototype.configure=function(t){var e;if("object"==typeof t)e={defaults:t};else{if("function"!=typeof t)throw new Error("invalid config");(e=new a).baseUrl=this.baseUrl,e.defaults=Object.assign({},this.defaults),e.interceptors=this.interceptors;var r=t(e);a.prototype.isPrototypeOf(r)&&(e=r)}var n=e.defaults;if(n&&Headers.prototype.isPrototypeOf(n.headers))throw new Error("Default headers must be a plain object.");var i=e.interceptors;if(i&&i.length){if(i.filter((function(t){return o.prototype.isPrototypeOf(t)})).length>1)throw new Error("Only one RetryInterceptor is allowed.");var s=i.findIndex((function(t){return o.prototype.isPrototypeOf(t)}));if(s>=0&&s!==i.length-1)throw new Error("The retry interceptor must be the last interceptor defined.")}return this.baseUrl=e.baseUrl,this.defaults=n,this.interceptors=e.interceptors||[],this.isConfigured=!0,this},t.prototype.fetch=function(t,e){var r=this;!function(t){if(t.isRequesting=!!++t.activeRequestCount,t.isRequesting){var e=n.SO.createCustomEvent("aurelia-fetch-client-request-started",{bubbles:!0,cancelable:!0});setTimeout((function(){return n.SO.dispatchEvent(e)}),1)}}(this);var i=this.buildRequest(t,e);return function(t,e,r){return f(t,e,"request","requestError",r)}(i,this.interceptors,this).then((function(t){var e=null;if(Response.prototype.isPrototypeOf(t))e=Promise.resolve(t);else{if(!Request.prototype.isPrototypeOf(t))throw new Error("An invalid result was returned by the interceptor chain. Expected a Request or Response instance, but got ["+t+"]");i=t,e=fetch(t)}return function(t,e,r,n){return f(t,e,"response","responseError",r,n)}(e,r.interceptors,i,r)})).then((function(t){return Request.prototype.isPrototypeOf(t)?r.fetch(t):t})).then((function(t){return l(r),t}),(function(t){throw l(r),t}))},t.prototype.buildRequest=function(t,e){var r,n,i,o,s,a=this.defaults||{},u=function(t){var e={};for(var r in t||{})t.hasOwnProperty(r)&&(e[r]="function"==typeof t[r]?t[r]():t[r]);return e}(a.headers);if(Request.prototype.isPrototypeOf(t))r=t,i=new Headers(r.headers).get("Content-Type");else{e||(e={});var c=(n=e.body)?{body:n}:null,l=Object.assign({},a,{headers:{}},e,c);i=new Headers(l.headers).get("Content-Type"),r=new Request((o=this.baseUrl,s=t,h.test(s)?s:(o||"")+s),l)}return i||(new Headers(u).has("content-type")?r.headers.set("Content-Type",new Headers(u).get("content-type")):n&&function(t){try{JSON.parse(t)}catch(t){return!1}return!0}(n)&&r.headers.set("Content-Type","application/json")),function(t,e){for(var r in e||{})e.hasOwnProperty(r)&&!t.has(r)&&t.set(r,e[r])}(r.headers,u),n&&Blob.prototype.isPrototypeOf(n)&&n.type&&r.headers.set("Content-Type",n.type),r},t.prototype.get=function(t,e){return this.fetch(t,e)},t.prototype.post=function(t,e,r){return d(this,t,e,r,"POST")},t.prototype.put=function(t,e,r){return d(this,t,e,r,"PUT")},t.prototype.patch=function(t,e,r){return d(this,t,e,r,"PATCH")},t.prototype.delete=function(t,e,r){return d(this,t,e,r,"DELETE")},t}(),h=/^([a-z][a-z0-9+\-.]*:)?\/\//i;function l(t){if(t.isRequesting=!!--t.activeRequestCount,!t.isRequesting){var e=n.SO.createCustomEvent("aurelia-fetch-client-requests-drained",{bubbles:!0,cancelable:!0});setTimeout((function(){return n.SO.dispatchEvent(e)}),1)}}function f(t,e,r,n){for(var i=[],o=4;o<arguments.length;o++)i[o-4]=arguments[o];return(e||[]).reduce((function(t,e){var o=e[r],s=e[n];return t.then(o&&function(t){return o.call.apply(o,[e,t].concat(i))}||p,s&&function(t){return s.call.apply(s,[e,t].concat(i))}||g)}),Promise.resolve(t))}function p(t){return t}function g(t){throw t}function d(t,e,r,n,i){return n||(n={}),n.method=i,r&&(n.body=r),t.fetch(e,n)}},"aurelia-framework":(t,e,r)=>{r.d(e,{Aurelia:()=>m,Container:()=>n.W2,FrameworkConfiguration:()=>y,autoinject:()=>n.On,bindable:()=>o.Ex,bindingMode:()=>i.mD,computedFrom:()=>i.g$,containerless:()=>o.j3,customElement:()=>o.Mo,inject:()=>n.f3,inlineView:()=>o.Rs,noView:()=>o.N,observable:()=>i.LO,parseQueryString:()=>a.dD,signalBindings:()=>i.M_,singleton:()=>n.ri});var n=r(56158),i=r(6778),o=(r(81383),r(51781)),s=r(90209),a=(r(68318),r(98627)),u=r(1015),c=r(98099),h=c.jl("aurelia"),l=/\.[^/.]+$/;function f(t,e){var r,n=function(){return(r=e.shift())?Promise.resolve(r(t)).then(n):Promise.resolve()};return n()}function p(t){var e=t.match(l);if(e&&e.length>0)return e[0].split(".")[1]}function g(t){return Promise.all(t.behaviorsToLoad.map((function(e){return e.load(t.container,e.target)}))).then((function(){t.behaviorsToLoad=null}))}function d(t){if(t.processed)throw new Error("This config instance has already been applied. To load more plugins or global resources, create a new FrameworkConfiguration instance.")}function v(t,e){return"Invalid ".concat(e," [").concat(t,"], ").concat(e," must be specified as functions or relative module IDs.")}var y=function(){function t(t){var e=this;this.aurelia=t,this.container=t.container,this.info=[],this.processed=!1,this.preTasks=[],this.postTasks=[],this.behaviorsToLoad=[],this.configuredPlugins=[],this.resourcesToLoad={},this.preTask((function(){return t.loader.normalize("aurelia-bootstrapper",void 0).then((function(t){return e.bootstrapperName=t}))})),this.postTask((function(){return function(t,e,r){if(0===Object.keys(e).length)return Promise.resolve();var n=t.container.get(o.bI);return Promise.all(Object.keys(e).map((function(r){return o=(n=e[r]).moduleId,u=p(o),i(o)&&(o=s(o)),t.loader.normalize(o,n.relativeTo).then((function(t){return{name:n.moduleId,importId:i(n.moduleId)?a(t,u):t}}));var n,o,u}))).then((function(t){var e=[],i=[];return t.forEach((function(t){e.push(void 0),i.push(t.importId)})),n.importViewResources(i,e,r)}));function i(t){var e=p(t);return!!e&&""!==e&&".js"!==e&&".ts"!==e}function s(t){return t.replace(l,"")}function a(t,e){return s(t)+"."+e}}(t,e.resourcesToLoad,t.resources)}))}return t.prototype.instance=function(t,e){return this.container.registerInstance(t,e),this},t.prototype.singleton=function(t,e){return this.container.registerSingleton(t,e),this},t.prototype.transient=function(t,e){return this.container.registerTransient(t,e),this},t.prototype.preTask=function(t){return d(this),this.preTasks.push(t),this},t.prototype.postTask=function(t){return d(this),this.postTasks.push(t),this},t.prototype.feature=function(t,e){switch(void 0===e&&(e={}),typeof t){case"string":var r=/\/index$/i.test(t),n=r||p(t)?t:t+"/index",i=r?t.slice(0,-6):t;this.info.push({moduleId:n,resourcesRelativeTo:[i,""],config:e});break;case"function":this.info.push({configure:t,config:e||{}});break;default:throw new Error(v(t,"feature"))}return this},t.prototype.globalResources=function(t){var e=this;d(this);for(var r,n=Array.isArray(t)?t:arguments,i=this.resourcesRelativeTo||["",""],s=0,u=n.length;s<u;++s)switch(typeof(r=n[s])){case"string":var c=i[0],h=i[1],l=r;(r.startsWith("./")||r.startsWith("../"))&&""!==c&&(l=(0,a.v_)(c,r)),this.resourcesToLoad[l]={moduleId:l,relativeTo:h};break;case"function":var f=this.aurelia.resources.autoRegister(this.container,r);f instanceof o.h2&&null!==f.elementName&&1===this.behaviorsToLoad.push(f)&&this.postTask((function(){return g(e)}));break;default:throw new Error(v(r,"resource"))}return this},t.prototype.globalName=function(t,e){return d(this),this.resourcesToLoad[t]={moduleId:e,relativeTo:""},this},t.prototype.plugin=function(t,e){var r;switch(d(this),typeof t){case"string":r={moduleId:t,resourcesRelativeTo:[t,""],config:e||{}};break;case"function":r={configure:t,config:e||{}};break;default:throw new Error(v(t,"plugin"))}return this.info.push(r),this},t.prototype._addNormalizedPlugin=function(t,e){var r=this,n={moduleId:t,resourcesRelativeTo:[t,""],config:e||{}};return this.info.push(n),this.preTask((function(){var e=[t,r.bootstrapperName];return n.moduleId=t,n.resourcesRelativeTo=e,Promise.resolve()})),this},t.prototype.defaultBindingLanguage=function(){return this._addNormalizedPlugin("aurelia-templating-binding")},t.prototype.router=function(){return this._addNormalizedPlugin("aurelia-templating-router")},t.prototype.history=function(){return this._addNormalizedPlugin("aurelia-history-browser")},t.prototype.defaultResources=function(){return this._addNormalizedPlugin("aurelia-templating-resources")},t.prototype.eventAggregator=function(){return this._addNormalizedPlugin("aurelia-event-aggregator")},t.prototype.basicConfiguration=function(){return this.defaultBindingLanguage().defaultResources().eventAggregator()},t.prototype.standardConfiguration=function(){return this.basicConfiguration().history().router()},t.prototype.developmentLogging=function(t){var e=this,r=t?c.hw[t]:void 0;return void 0===r&&(r=c.hw.debug),this.preTask((function(){return e.aurelia.loader.normalize("aurelia-logging-console",e.bootstrapperName).then((function(t){return e.aurelia.loader.loadModule(t).then((function(t){c.RP(new t.ConsoleAppender),c.uR(r)}))}))})),this},t.prototype.apply=function(){var t=this;return this.processed?Promise.resolve():f(this,this.preTasks).then((function(){var e,r=t.aurelia.loader,n=t.info,i=function(){return(e=n.shift())?function(t,e,r){if(h.debug("Loading plugin ".concat(r.moduleId,".")),"string"==typeof r.moduleId){t.resourcesRelativeTo=r.resourcesRelativeTo;var n=r.moduleId;return r.resourcesRelativeTo.length>1?e.normalize(r.moduleId,r.resourcesRelativeTo[1]).then((function(t){return i(t)})):i(n)}if("function"==typeof r.configure)return-1!==t.configuredPlugins.indexOf(r.configure)?Promise.resolve():(t.configuredPlugins.push(r.configure),Promise.resolve(r.configure.call(null,t,r.config||{})));throw new Error(v(r.moduleId||r.configure,"plugin"));function i(n){return e.loadModule(n).then((function(e){if("configure"in e)return-1!==t.configuredPlugins.indexOf(e.configure)?Promise.resolve():Promise.resolve(e.configure(t,r.config||{})).then((function(){t.configuredPlugins.push(e.configure),t.resourcesRelativeTo=null,h.debug("Configured plugin ".concat(r.moduleId,"."))}));t.resourcesRelativeTo=null,h.debug("Loaded plugin ".concat(r.moduleId,"."))}))}}(t,r,e).then(i):(t.processed=!0,t.configuredPlugins=null,Promise.resolve())};return i().then((function(){return f(t,t.postTasks)}))}))},t}(),m=function(){function t(e,r,i){this.loader=e||new u.iw.Loader,this.container=r||(new n.W2).makeGlobal(),this.resources=i||new o.wu,this.use=new y(this),this.logger=c.jl("aurelia"),this.hostConfigured=!1,this.host=null,this.use.instance(t,this),this.use.instance(s.aN,this.loader),this.use.instance(o.wu,this.resources)}return t.prototype.start=function(){var t=this;return this._started?this._started:(this.logger.info("Aurelia Starting"),this._started=this.use.apply().then((function(){if(u.SO.addEventListener("submit",(function(t){var e=t.target,r=e.action;"form"!==e.tagName.toLowerCase()||r||t.preventDefault()}),!1),!t.container.hasResolver(o.ek)){var e="You must configure Aurelia with a BindingLanguage implementation.";throw t.logger.error(e),new Error(e)}t.logger.info("Aurelia Started");var r=u.SO.createCustomEvent("aurelia-started",{bubbles:!0,cancelable:!0});return u.SO.dispatchEvent(r),t})))},t.prototype.enhance=function(t,e){var r=this;return void 0===t&&(t={}),void 0===e&&(e=null),this._configureHost(e||u.SO.querySelectorAll("body")[0]),new Promise((function(e){var n=r.container.get(o.F0);r.root=n.enhance({container:r.container,element:r.host,resources:r.resources,bindingContext:t}),r.root.attached(),r._onAureliaComposed(),e(r)}))},t.prototype.setRoot=function(t,e){var r=this;void 0===t&&(t=null),void 0===e&&(e=null);var n={};this.root&&this.root.viewModel&&this.root.viewModel.router&&(this.root.viewModel.router.deactivate(),this.root.viewModel.router.reset()),this._configureHost(e);var i=this.container.get(o.F0);return delete this.container.get(o.P3).initialComposition,t||(t=this.configModuleId?(0,a.ri)("./app",this.configModuleId):"app"),n.viewModel=t,n.container=n.childContainer=this.container,n.viewSlot=this.hostSlot,n.host=this.host,i.compose(n).then((function(t){return r.root=t,n.viewSlot.attached(),r._onAureliaComposed(),r}))},t.prototype._configureHost=function(t){if(!this.hostConfigured){if(t=t||this.host,this.host=t&&"string"!=typeof t?t:u.SO.getElementById(t||"applicationHost"),!this.host)throw new Error("No applicationHost was specified.");this.hostConfigured=!0,this.host.aurelia=this,this.hostSlot=new o.L3(this.host,!0),this.hostSlot.transformChildNodesIntoView(),this.container.registerInstance(u.SO.boundary,this.host)}},t.prototype._onAureliaComposed=function(){var t=u.SO.createCustomEvent("aurelia-composed",{bubbles:!0,cancelable:!0});setTimeout((function(){return u.SO.dispatchEvent(t)}),1)},t}()},"aurelia-history-browser":(t,e,r)=>{r.d(e,{configure:()=>d});var n=r(31149),i=r(1015),o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},o(t,e)};function s(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var a=function(){function t(){}return t.prototype.activate=function(t){},t.prototype.deactivate=function(){},t}(),u=function(t){function e(){var r=t.call(this)||this;return r.handler=function(t){var n=e.getEventInfo(t),i=n.shouldHandleEvent,o=n.href;i&&(t.preventDefault(),r.history.navigate(o))},r}return s(e,t),e.prototype.activate=function(t){t._hasPushState&&(this.history=t,i.SO.addEventListener("click",this.handler,!0))},e.prototype.deactivate=function(){i.SO.removeEventListener("click",this.handler,!0)},e.getEventInfo=function(t){var r=t,n={shouldHandleEvent:!1,href:null,anchor:null},i=e.findClosestAnchor(r.target);if(!i||!e.targetIsThisWindow(i))return n;if(c(i,"download")||c(i,"router-ignore")||c(i,"data-router-ignore"))return n;if(r.altKey||r.ctrlKey||r.metaKey||r.shiftKey)return n;var o=i.getAttribute("href");n.anchor=i,n.href=o;var s=1===r.which,a=o&&!("#"===o.charAt(0)||/^[a-z]+:/i.test(o));return n.shouldHandleEvent=s&&a,n},e.findClosestAnchor=function(t){for(;t;){if("A"===t.tagName)return t;t=t.parentNode}},e.targetIsThisWindow=function(t){var e=t.getAttribute("target"),r=i.iw.global;return!e||e===r.name||"_self"===e},e}(a),c=function(t,e){return t.hasAttribute(e)},h=function(t){function e(e){var r=t.call(this)||this;return r._isActive=!1,r._checkUrlCallback=r._checkUrl.bind(r),r.location=i.iw.location,r.history=i.iw.history,r.linkHandler=e,r}return s(e,t),e.prototype.activate=function(t){if(this._isActive)throw new Error("History has already been activated.");var e=this.history,r=!!t.pushState;this._isActive=!0;var n,o=this.options=Object.assign({},{root:"/"},this.options,t),s=this.root=("/"+o.root+"/").replace(f,"/"),a=this._wantsHashChange=!1!==o.hashChange,u=this._hasPushState=!!(o.pushState&&e&&e.pushState);if(u?n="popstate":a&&(n="hashchange"),i.iw.addEventListener(n,this._checkUrlCallback),a&&r){var c=this.location,h=c.pathname.replace(/[^\/]$/,"$&/")===s;if(!u&&!h){var p=this.fragment=this._getFragment(null,!0);return c.replace(s+c.search+"#"+p),!0}u&&h&&c.hash&&(p=this.fragment=this._getHash().replace(l,""),e.replaceState({},i.SO.title,s+p+c.search))}if(this.fragment||(this.fragment=this._getFragment("")),this.linkHandler.activate(this),!o.silent)return this._loadUrl("")},e.prototype.deactivate=function(){var t=this._checkUrlCallback;i.iw.removeEventListener("popstate",t),i.iw.removeEventListener("hashchange",t),this._isActive=!1,this.linkHandler.deactivate()},e.prototype.getAbsoluteRoot=function(){var t,e=this.location;return e.protocol+"//"+e.hostname+((t=e.port)?":"+t:"")+this.root},e.prototype.navigate=function(t,e){var r=void 0===e?{}:e,n=r.trigger,o=void 0===n||n,s=r.replace,a=void 0!==s&&s,u=this.location;if(t&&g.test(t))return u.href=t,!0;if(!this._isActive)return!1;if(t=this._getFragment(t||""),this.fragment===t&&!a)return!1;this.fragment=t;var c=this.root+t;return""===t&&"/"!==c&&(c=c.slice(0,-1)),this._hasPushState?(c=c.replace("//","/"),this.history[a?"replaceState":"pushState"]({},i.SO.title,c)):this._wantsHashChange?function(t,e,r){if(r){var n=t.href.replace(/(javascript:|#).*$/,"");t.replace(n+"#"+e)}else t.hash="#"+e}(u,t,a):u.assign(c),!o||this._loadUrl(t)},e.prototype.navigateBack=function(){this.history.back()},e.prototype.setTitle=function(t){i.SO.title=t},e.prototype.setState=function(t,e){var r=this.history,n=Object.assign({},r.state),i=this.location,o=i.pathname,s=i.search,a=i.hash;n[t]=e,r.replaceState(n,null,""+o+s+a)},e.prototype.getState=function(t){return Object.assign({},this.history.state)[t]},e.prototype.getHistoryIndex=function(){var t=this.getState("HistoryIndex");return void 0===t&&(t=this.history.length-1,this.setState("HistoryIndex",t)),t},e.prototype.go=function(t){this.history.go(t)},e.prototype._getHash=function(){return this.location.hash.substr(1)},e.prototype._getFragment=function(t,e){var r;if(!t)if(this._hasPushState||!this._wantsHashChange||e){var n=this.location;t=n.pathname+n.search,r=this.root.replace(p,""),t.indexOf(r)||(t=t.substr(r.length))}else t=this._getHash();return"/"+t.replace(l,"")},e.prototype._checkUrl=function(){this._getFragment("")!==this.fragment&&this._loadUrl("")},e.prototype._loadUrl=function(t){var e=this.fragment=this._getFragment(t);return!!this.options.routeHandler&&this.options.routeHandler(e)},e.inject=[a],e}(n.A),l=/^#?\/*|\s+$/g,f=/^\/+|\/+$/g,p=/\/$/,g=/^([a-z][a-z0-9+\-.]*:)?\/\//i;function d(t){var e=t;e.singleton(n.A,h),e.transient(a,u)}},31149:(t,e,r)=>{function n(t){throw new Error("History must implement "+t+"().")}r.d(e,{A:()=>i});var i=function(){function t(){}return t.prototype.activate=function(t){n("activate")},t.prototype.deactivate=function(){n("deactivate")},t.prototype.getAbsoluteRoot=function(){n("getAbsoluteRoot")},t.prototype.navigate=function(t,e){n("navigate")},t.prototype.navigateBack=function(){n("navigateBack")},t.prototype.setTitle=function(t){n("setTitle")},t.prototype.setState=function(t,e){n("setState")},t.prototype.getState=function(t){n("getState")},t.prototype.getHistoryIndex=function(){n("getHistoryIndex")},t.prototype.go=function(t){n("go")},t}()}}]);
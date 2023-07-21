(()=>{var __webpack_modules__={941:module=>{module.exports=eval("require")("original-fs")}};var __webpack_module_cache__={};function __nccwpck_require__(e){var t=__webpack_module_cache__[e];if(t!==undefined){return t.exports}var n=__webpack_module_cache__[e]={exports:{}};var r=true;try{__webpack_modules__[e](n,n.exports,__nccwpck_require__);r=false}finally{if(r)delete __webpack_module_cache__[e]}return n.exports}(()=>{__nccwpck_require__.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;__nccwpck_require__.d(t,{a:t});return t}})();(()=>{__nccwpck_require__.d=(e,t)=>{for(var n in t){if(__nccwpck_require__.o(t,n)&&!__nccwpck_require__.o(e,n)){Object.defineProperty(e,n,{enumerable:true,get:t[n]})}}}})();(()=>{__nccwpck_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})();(()=>{__nccwpck_require__.r=e=>{if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})}})();if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var __webpack_exports__={};(()=>{"use strict";__nccwpck_require__.r(__webpack_exports__);const e=require("electron");var t=__nccwpck_require__.n(e);const n=require("fs");var r=__nccwpck_require__.n(n);const i=require("os");const o=require("path");var s=__nccwpck_require__.n(o);var a=undefined&&undefined.__classPrivateFieldGet||function(e,t,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t==="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(e):r?r.value:t.get(e)};var l,c,d;const u="persist:ads";const p=10*60*1e3;const h=process.platform==="win32"&&i.release().startsWith("10");const f=new Map;const w=new Map([["near",(e,t,n)=>n],["center",(e,t,n)=>n+(e-t)/2],["far",(e,t,n)=>e-(t-n)]]);const m=w.get("near");let g=false;function roundRectangle(e){return{width:Math.round(e.width),height:Math.round(e.height),x:Math.round(e.x),y:Math.round(e.y)}}class AdView{constructor(e,t){this.parent=e;l.add(this);this.visible=true;this.onParentResize=this.onParentResize.bind(this);this.config=t;this.updateOriginalParentSize(e);this.updateOriginalBounds();this.updateComputeBounds();if(!g){blockPrivateNetworkRequests();g=true}e.on("resize",this.onParentResize);this.createView();this.refreshInterval=setInterval((()=>this.refresh()),p)}createView(){this.view=new e.BrowserView({webPreferences:{backgroundThrottling:false,nodeIntegration:false,sandbox:true,disableDialogs:true,partition:u}});this.view.setBackgroundColor("#11171d");const n=this.view.webContents;n.setAudioMuted(true);n.setUserAgent("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36");n.setWindowOpenHandler((e=>{var n;const r=new URL(e.url);if(r.protocol==="https:"||r.protocol==="http:"){t().shell.openExternal(e.url).catch((()=>null))}if(r.protocol==="wemod:"){(n=this.parent)===null||n===void 0?void 0:n.webContents.send("EVENT_ADVIEW_MESSAGE",{sender:this.config.id,message:r.pathname,params:Object.fromEntries(r.searchParams)})}return{action:"deny"}}));n.on("will-navigate",((e,t)=>{if(t!==this.config.url){e.preventDefault()}}));n.on("did-navigate",(()=>{n.setAudioMuted(true);n.setZoomFactor(this.config.zoom)}));this.parent.addBrowserView(this.view);if(this.visible){a(this,l,"m",c).call(this)}if(this.config.debug){n.openDevTools({mode:"detach"})}}load(e){return this.view.webContents.loadURL(e)}refresh(){this.parent.removeBrowserView(this.view);this.view.webContents.destroy();this.createView();return this.load(this.config.url).catch((()=>null))}onParentResize(){const[e,t]=a(this,l,"m",d).call(this,this.parent);this.currentBounds.x=Math.round(this.computeBoundX(e,this.originalParentWidth,this.originalBounds.x));this.currentBounds.y=Math.round(this.computeBoundY(t,this.originalParentHeight,this.originalBounds.y));if(this.visible){a(this,l,"m",c).call(this)}}show(){if(this.visible!==null){this.visible=true;a(this,l,"m",c).call(this)}}hide(){const e={width:this.currentBounds.width,height:this.currentBounds.height,x:-this.currentBounds.width-1,y:-this.currentBounds.height-1};this.visible=false;this.setViewBounds(e)}setViewBounds(e){this.view.setBounds(e);this.view.setBounds(e)}update(e){const t=e.url!==this.config.url;this.config=e;if(e.parentSize){this.originalParentWidth=Math.round(e.parentSize.width);this.originalParentHeight=Math.round(e.parentSize.height)}else{this.updateOriginalParentSize(this.parent)}this.updateOriginalBounds();this.updateComputeBounds();this.onParentResize();this.view.webContents.setZoomFactor(this.config.zoom);if(t){this.load(this.config.url).catch((()=>null))}}dispose(){if(this.view){this.parent.off("resize",this.onParentResize);this.parent.removeBrowserView(this.view);this.view.webContents.destroy();this.parent=null;this.view=null}clearInterval(this.refreshInterval)}updateOriginalBounds(){this.originalBounds=roundRectangle(this.config.bounds);this.currentBounds={...this.originalBounds}}updateComputeBounds(){var e,t;this.computeBoundX=(e=w.get(this.config.anchorX))!==null&&e!==void 0?e:m;this.computeBoundY=(t=w.get(this.config.anchorY))!==null&&t!==void 0?t:m}updateOriginalParentSize(e){[this.originalParentWidth,this.originalParentHeight]=a(this,l,"m",d).call(this,e)}}l=new WeakSet,c=function _AdView_setBounds(){const e={...this.currentBounds};this.setViewBounds(e)},d=function _AdView_getParentSize(t){const n=e.screen.getDisplayMatching(t.getBounds());if(h&&t.isMaximized()){return[n.workAreaSize.width,n.workAreaSize.height]}return t.getSize()};function createAdView(e,t){const n=f.get(t.id);if(n){n.dispose();f.delete(t.id)}const r=new AdView(e,t);f.set(t.id,r);return r.load(t.url).catch((()=>null))}function showAdView(e){var t;(t=f.get(e))===null||t===void 0?void 0:t.show()}function hideAdView(e){var t;(t=f.get(e))===null||t===void 0?void 0:t.hide()}async function updateAdView(e){var t;(t=f.get(e.id))===null||t===void 0?void 0:t.update(e)}function destroyAllAdViews(){for(const e of f.values()){e.dispose()}f.clear()}function destroyAdView(e){const t=f.get(e);if(t){t.dispose();f.delete(e);return true}else{return false}}const _=/^(?:https?|wss?):\/\/(?:localhost|127\.\d+\.\d+\.\d+)(?:$|\/.*)/;function blockPrivateNetworkRequests(){t().session.fromPartition(u).webRequest.onBeforeRequest({urls:["*://*/*"]},((e,t)=>{if(_.test(e.url)){t({cancel:true})}else{t({})}}))}const v=String.fromCharCode(...[104,116,116,112,115,58,47,47,119,119,119,46,103,111,111,103,108,101,45,97,110,97,108,121,116,105,99,115,46,99,111,109,47,109,112,47,99,111,108,108,101,99,116,63,109,101,97,115,117,114,101,109,101,110,116,95,105,100,61,71,45,83,68,77,82,66,78,78,74,84,54,38,97,112,105,95,115,101,99,114,101,116,61,83,84,105,54,113,75,48,112,82,54,45,121,99,70,71,74,51,95,84,84,50,81]);const b=String.fromCharCode(...[50,99,57,57,50,56,56,56,100,100,54,49,57,57,49,56,51,57,54,101,97,48,49,51,102,55,55,57,50,55,49,100]);async function postProductionEvents(e,n,r){await Promise.allSettled([postJson(v,{client_id:e,user_id:n,events:r}),postJson("https://api2.amplitude.com/2/httpapi",{api_key:b,events:r.map((r=>({user_id:n,device_id:e,device_model:process.platform==="win32"?"Windows":process.platform,event_type:r.name,event_properties:r.params,app_version:t().app.getVersion(),os_name:process.platform==="win32"?"Windows":process.platform,os_version:i.release(),ip:"$remote"})))})])}function postJson(e,n){return new Promise(((r,i)=>{const o=t().net.request({url:e,method:"POST",partition:"temp"});o.on("error",i);o.on("response",(e=>{e.on("error",i);e.on("end",r);e.on("data",(()=>{}))}));o.setHeader("Content-Type","application/json");o.end(JSON.stringify(n))}))}const y=require("child_process");var A=__nccwpck_require__.n(y);var S=__nccwpck_require__(941);const T=t().app;const E=__dirname.endsWith(".asar")?s().normalize(`${__dirname}.unpacked/static/unpacked`):s().normalize(`${__dirname}/static/unpacked`);const O={userModelId:"com.squirrel.WeMod.WeMod",protocolScheme:"wemod",devMode:process.defaultApp,paths:{app:null,home:null,assets:E,storage:null,temp:null},preferredSizes:[[1440,825],[1250,825],[1200,640]],windowOptions:{show:false,width:1440,height:825,minWidth:1080,minHeight:640,frame:false,backgroundColor:"#000",icon:null,webPreferences:{backgroundThrottling:false,nodeIntegration:true,contextIsolation:false}}};function initializeConfig(){const t=s().join(T.getPath("userData"),"App");try{r().mkdirSync(t)}catch{}O.paths.storage=t;O.paths.app=T.getAppPath();O.paths.home=T.getPath("home");O.paths.temp=T.getPath("temp");O.windowOptions.icon=e.nativeImage.createFromPath(s().normalize(`${E}/icon.ico`))}const I=O;let C=null;function overlaps(e,t){return!(e.x>t.x+t.width||e.x+e.width<t.x||e.y>t.y+t.height||e.y+e.height<t.y)}function isValidAppUri(e){return typeof e==="string"&&e.startsWith(`${I.protocolScheme}:`)}function extractAppUriFromAgv(e){var t;return(t=e.find(isValidAppUri))!==null&&t!==void 0?t:`${I.protocolScheme}:`}function registerHandlerForWindow(e,n,r){t().ipcMain.handle(n,((t,...n)=>{if(t.sender.id===e.webContents.id){return r(...n)}}))}function getEnvironmentVariables(){if(C!==null){return C}const e={PATH:"",SYSTEMROOT:"C:\\Windows",WINDIR:"C:\\Windows",PROGRAMDATA:"C:\\ProgramData",PROGRAMFILES:"C:\\Program Files","PROGRAMFILES(X86)":`C:\\Program Files${is64BitOs()?" (x86)":""}`};Object.keys(process.env).forEach((t=>e[t.toUpperCase()]=process.env[t]));e.WINDIR=e.SYSTEMROOT;if(process.platform==="win32"){const t=e.PATH.toLocaleLowerCase().split(";");if(!t.includes("c:\\windows\\system32")){e.PATH=`C:\\Windows\\System32;${e.PATH}`}if(!t.includes("c:\\windows")){e.PATH=`C:\\Windows;${e.PATH}`}if(e.PATH.endsWith(";")){e.PATH=e.PATH.substring(0,e.PATH.length-1)}}return C=e}function is64BitOs(){return process.arch==="x64"||process.env.hasOwnProperty("PROCESSOR_ARCHITEW6432")}function isWow64Process(){return process.arch==="ia32"&&process.env.hasOwnProperty("PROCESSOR_ARCHITEW6432")}const P="/Node:localhost /Namespace:\\\\root\\SecurityCenter2 Path AntiVirusProduct Get displayName, productState /Format:list";function getInstalledAVProductNames(){if(process.platform!=="win32"){return Promise.resolve([])}const e=getEnvironmentVariables();const t=`${I.paths.storage}\\.temp-${Date.now()}`;return new Promise(((n,r)=>{y.exec(`"${e.SYSTEMROOT}\\System32\\wbem\\WMIC.exe" ${P} > "${t}"`,{env:e},(async e=>{if(e){r(e);return}S.readFile(t,{encoding:"utf16le"},((e,t)=>{if(e){r(e);return}try{const e=parseWmicTableResult(t).filter((e=>(parseInt(e.productState,10)&61440)===4096)).map((e=>e.displayName));n(Array.from(new Set(e)))}catch(e){r(e)}}))}))})).finally((()=>S.unlink(t,(()=>{}))))}function parseWmicTableResult(e){const t=e.replace(/\r/g,"").split("\n\n\n").map((e=>e.split("\n").filter((e=>e.length>0)))).filter((e=>e.length>0)).map((e=>{const t={};e.forEach((e=>{const n=e.indexOf("=");if(n>=0){t[e.substring(0,n)]=e.substring(n+1).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&")}}));return t}));return t}function getCreatorConfiguration(){const e=o.join(I.paths.home,".wemod");return S.promises.readFile(e,"utf8").then((e=>{const t=JSON.parse(e);if(typeof t!=="object"||t===null){return null}const n=t;return Array.isArray(n.repos)&&n.repos.every((e=>typeof e==="string"))?{repos:n.repos}:null})).catch((()=>null))}function getAppSettingsPath(){return s().join(I.paths.storage,"init.json")}function loadAppSettings(){try{const e=JSON.parse(r().readFileSync(getAppSettingsPath(),"utf8"));if(typeof e==="object"&&e!==null){if(typeof e.window==="object"&&e.window!==null){e.windows.app=e.window;delete e.window}return e}else{return{}}}catch{return{}}}function saveAppSettings(e){try{r().writeFileSync(getAppSettingsPath(),JSON.stringify(e),"utf8")}catch{}}let N=new Set;function getWindowState(e){return{visible:e.isVisible(),minimized:e.isMinimized(),maximized:N.has(e)||e.isMaximized()}}function makeEventDispatcher(e){return()=>e.webContents.send("EVENT_WINDOW_STATE_CHANGED",getWindowState(e))}function showWindow(e){if(N.has(e)){N.delete(e);if(!e.isMaximized()){e.maximize();return}}e.show()}function attachWindowStateObserver(e,n,r,i,o){if(typeof n.windows!=="object"||n.windows===null){n.windows={}}const s=n.windows[r]||{};n.windows[r]=s;if(s.bounds){const e=t().screen.getDisplayMatching(s.bounds);if(!e||!overlaps(s.bounds,e.bounds)){s.bounds=undefined}}if(s.bounds){e.setBounds(s.bounds)}if(s.maximized){N.add(e)}if(!s.bounds&&!s.maximized){e.setBounds(getDefaultWindowBounds(e,i,o))}const a=makeEventDispatcher(e);e.on("minimize",a);e.on("maximize",a);e.on("unmaximize",a);e.on("restore",a);e.on("hide",a);e.on("show",a);const captureBounds=t=>{if(e.isVisible()){if(e.isNormal()||t&&s.maximized&&e.isMaximized()){s.bounds=e.getBounds()}}};e.on("close",(()=>captureBounds(false)));e.on("moved",(()=>captureBounds(false)));e.on("resize",(()=>captureBounds(true)));e.on("maximize",(()=>s.maximized=true));e.on("unmaximize",(()=>s.maximized=false));e.on("closed",(()=>{N.delete(e);saveAppSettings(n)}))}function getDefaultWindowBounds(t,n,r){const i=r?e.screen.getDisplayMatching(r.getBounds()):e.screen.getPrimaryDisplay();const o=i.workAreaSize;const s=n.find((e=>e[0]<=o.width));const a=s?s[0]:t.getMinimumSize()[0];let l;if(s&&s[1]<=o.height){l=s[1]}else{const e=n.find((e=>e[1]<=o.height));l=e?e[1]:t.getMinimumSize()[1]}const c={width:a,height:l};if(r){c.x=Math.round(i.bounds.x+o.width/2-a/2);c.y=Math.round(i.bounds.y+o.height/2-l/2)}return c}const W=[[1440,825],[1250,825],[1200,640]];function createGameMapWindow(e,t,n){const r={parent:null,show:false,width:W[0][0],height:W[0][1],minWidth:800,minHeight:600,backgroundColor:I.windowOptions.backgroundColor,icon:I.windowOptions.icon,webPreferences:{backgroundThrottling:false,nodeIntegration:false,sandbox:true,disableDialogs:true,partition:I.windowOptions.webPreferences.partition}};const windowHandler=(r,i)=>{if(t.frameName!==i.frameName){return}e.webContents.off("did-create-window",windowHandler);r.setMenu(null);r.setMenuBarVisibility(false);attachWindowStateObserver(r,n,i.frameName,W,e);const onParentNavigation=(e,t,n,i)=>{if(i&&!n){r.destroy()}};e.webContents.on("did-start-navigation",onParentNavigation);r.on("closed",(()=>{e.webContents.off("did-start-navigation",onParentNavigation);e.webContents.send("EVENT_GAME_MAP_WINDOW_CLOSED",i.frameName)}));r.webContents.setWindowOpenHandler((t=>{const n=isValidAppUri(t.url)?"EVENT_APP_ACTIVATED":"EVENT_NEW_WINDOW_REQUESTED";e.webContents.send(n,t.url);return{action:"deny"}}));r.webContents.on("will-navigate",((e,t)=>{if(t!==i.url){e.preventDefault()}}));let o=false;r.webContents.on("did-fail-load",((t,n,s,a,l)=>{if(l){o=true;e.webContents.send("EVENT_GAME_MAP_WINDOW_LOAD_ERROR",i.frameName);r.destroy()}}));r.webContents.on("did-finish-load",(()=>{if(!o){e.webContents.send("EVENT_GAME_MAP_WINDOW_LOAD_FINISH",i.frameName)}}));if(I.devMode){r.webContents.openDevTools({mode:"detach"})}};e.webContents.on("did-create-window",windowHandler);return r}function showGameMapWindow(t){const n=e.BrowserWindow.getAllWindows().find((e=>e.webContents.mainFrame.name===t));if(n){showWindow(n);return true}else{return false}}const D=350;const x=500;const M=575;const k=300;const H=620;function makeBaseOptions(t){const n=t.getBounds();return{x:Math.round(n.x+n.width/2-x/2),y:Math.round(n.y+n.height/2-H/2),minWidth:D,maxWidth:M,width:x,minHeight:k,height:H,icon:e.nativeImage.createFromPath(o.join(I.paths.assets,"lock.ico")),title:"Loading...",backgroundColor:"#ffffff",modal:true,parent:t,fullscreenable:false,maximizable:false,minimizable:false,skipTaskbar:true}}function createSetupIntentWindow(e,t){const n={...makeBaseOptions(e),webPreferences:{nodeIntegration:false,contextIsolation:true,partition:I.windowOptions.webPreferences.partition}};const windowHandler=(n,r)=>{if(t.frameName!==r.frameName){return}n.setMenu(null);n.setMenuBarVisibility(false);n.webContents.setWindowOpenHandler((()=>({action:"deny"})));n.on("close",(()=>{e.webContents.off("did-create-window",windowHandler)}));if(I.devMode){n.webContents.openDevTools({mode:"detach"})}};e.webContents.on("did-create-window",windowHandler);return n}const R=s().resolve(s().dirname(process.execPath),"..","Update.exe");let V=[];let U;let z="not-checked";let q;let B;function isSameArgs(e){return e.length===V.length&&e.every(((e,t)=>e===V[t]))}function setState(e){if(e!==z){z=e;if(q){q(e)}}return e}function setUpdateStateChangedHandler(e){q=e}function getUpdateState(){return z}function isUpdaterAvailable(){if(process.platform!=="win32"){return false}try{r().accessSync(R,r().constants.R_OK);return true}catch{return false}}function checkForUpdate(e){if(!isUpdaterAvailable()){return Promise.resolve(z)}if(z==="checking"){return B}if(!["not-checked","not-available","available"].includes(z)){return Promise.resolve(z)}const t=z;setState("checking");B=runSquirrel(["--checkForUpdate",e]).then((e=>{B=null;const t=JSON.parse(e.trim().split("\n").pop());const n=typeof t==="object"&&t!==null&&Array.isArray(t.releasesToApply)&&t.releasesToApply.length>0;return setState(n?"available":"not-available")})).catch((e=>{B=null;setState(t);throw e}));return B}function fakeApplyUpdate(){return setState("applied")}function downloadAndApplyUpdate(e){if(z!=="available"&&z!=="apply-error"){return Promise.resolve(z)}setState("applying");return runSquirrel(["--update",e]).then((()=>setState("applied"))).catch((e=>{setState("apply-error");throw e}))}function restartApp(e){const t=s().basename(process.execPath);const n=["--processStartAndWait",t];if(typeof e==="string"){n.push("--process-start-args",e)}return runSquirrelDetached(n)}function runSquirrelDetached(e){return new Promise(((t,n)=>{const r=(0,y.spawn)(R,e,{detached:true,windowsHide:true,stdio:"ignore"});r.unref();if(r.pid){t()}else{r.on("error",n)}}))}function runSquirrel(e){return new Promise(((t,n)=>{if(U&&!isSameArgs(e)){throw new Error(`Updater process with arguments ${e} is already running`)}if(!U){U=(0,y.spawn)(R,e,{windowsHide:true});V=e||[]}let r=false;U.on("error",(e=>{r=true;n(e)}));let i="";U.stdout.on("data",(e=>{i+=e}));let o="";U.stderr.on("data",(e=>{o+=e}));U.on("exit",((e,s)=>{U=undefined;V=[];if(r){return}if(e!==0){return n(new Error(`Command failed: ${s!=null?s:e}\n${o}`))}t(i)}))}))}const L=t().app;const F=s().resolve(process.execPath,"..","..","Update.exe");const j=s().basename(process.execPath);function isSquirrelEvent(e){return e.length>=2&&e[1].startsWith("--squirrel-")}async function handleSquirrelEvent(e){const t={install:handleInstall,updated:handleUpdate,uninstall:handleUninstall,firstrun:handleFirstRun}[e[1].substring("--squirrel-".length)];if(t){await t(e)}}function removeDesktopShortcut(){A().spawnSync(F,["--removeShortcut",j])}function createDesktopShortcut(){A().spawnSync(F,["--createShortcut",j])}function handleInstall(){createDesktopShortcut()}function handleFirstRun(e){L.relaunch({args:e.slice(2)})}function handleUpdate(){try{const e=L.getPath("desktop");try{r().statSync(s().join(e,j.replace(".exe","")+".lnk"));removeDesktopShortcut();createDesktopShortcut()}catch{}}catch{createDesktopShortcut()}}async function handleUninstall(){await L.whenReady();initializeConfig();const e=loadAppSettings();if(typeof e.installationId==="string"&&typeof e.userId==="string"){const n=L.getSystemLocale().substring(0,2);const r=["en","zh","de","es","fr","ja","ko","pt","pl"].includes(n)?await requestUninstallFeedback(n).catch((()=>null)):null;uninstallLog("Feedback",r);await postUninstallEvent(r,e.installationId,e.userId).catch((()=>null));if((r===null||r===void 0?void 0:r.result)==="cancel"){await restartApp().catch((()=>!I.devMode&&t().shell.openExternal(`${I.protocolScheme}:`))).catch((()=>null));process.exitCode=1337;return}}if(!I.devMode){L.removeAsDefaultProtocolClient(I.protocolScheme);removeDesktopShortcut();try{recursiveDeleteDirectory(L.getPath("userData"))}catch{}}}async function postUninstallEvent(e,t,n){const r={name:(e===null||e===void 0?void 0:e.result)==="cancel"?"app_uninstall_cancel":"app_uninstall",params:{app_version:L.getVersion(),os_locale:L.getSystemLocale(),os_arch:is64BitOs()?"x64":"ia32",os_version:i.release(),...e?{reason:e.reason||undefined,reason_other:e.otherReason||undefined,reason_notes:e.additionalNotes||undefined}:{}}};if(I.devMode){uninstallLog("Event",r)}else{await postProductionEvents(t,n,[r])}}function uninstallLog(e,...t){if(I.devMode){console.log(`[Uninstall] ${e}`,...t)}}async function requestUninstallFeedback(n){let r=new e.BrowserWindow({show:false,width:700,height:600,maximizable:false,minimizable:false,resizable:false,icon:I.windowOptions.icon,webPreferences:{backgroundThrottling:false,nodeIntegration:false,partition:"temp"}});r.setMenu(null);r.setMenuBarVisibility(false);const i={result:"continue",reason:null,otherReason:null,additionalNotes:null};let o;const s=new Promise((e=>{o=e}));r.on("closed",(()=>{r=null;o(i)}));r.webContents.setWindowOpenHandler((e=>{uninstallLog(`Navigating to ${e.url}`);const n=new URL(e.url);if(n.protocol==="https:"||n.protocol==="mailto:"){t().shell.openExternal(e.url).catch((()=>null))}if(n.protocol==="wemod:"){const e=n.searchParams;if(n.pathname==="resize"){const t=e.get("height");if(/^\d+$/.test(t)){const e=Number(t);uninstallLog(`Resizing to ${e}px`);r.setContentSize(r.getContentSize()[0],e,true)}if(!r.isVisible()){r.show()}}if(n.pathname==="progress"){i.reason=e.get("reason")||null;i.otherReason=e.get("otherReason")||null;i.additionalNotes=e.get("additionalNotes")||null}if(n.pathname==="close"){const t=e.get("result");if(t==="continue"||t==="cancel"){i.result=t}r.close()}}return{action:"deny"}}));try{await r.loadURL(`https://www.wemod.${I.devMode?"test":"com"}/uninstall?app=1`,{extraHeaders:`Accept-Language: ${n}`})}catch{r.close();return null}if(I.devMode){r.webContents.openDevTools({mode:"detach"})}return await s}function recursiveDeleteDirectory(e){if(!r().existsSync(e)){return}try{r().readdirSync(e).forEach((t=>{const n=s().join(e,t);try{if(r().lstatSync(n).isDirectory()){recursiveDeleteDirectory(n)}else{r().unlinkSync(n)}}catch{}}))}catch{}try{r().rmdirSync(e)}catch{}}const $=t().app;let G="quit";let Y;let X;let J;let K;let Q=false;let Z;let ee;bootstrap();function bootstrap(){$.commandLine.appendSwitch("no-proxy-server");$.commandLine.appendSwitch("force-ui-direction","ltr");if(I.devMode){$.commandLine.appendSwitch("ignore-certificate-errors","true");if($.commandLine.hasSwitch("wemod-temp")){I.windowOptions.webPreferences.partition="temp"}}const e=$.commandLine.getSwitchValue("wemod-user-data");if(e){$.setPath("userData",`${$.getPath("userData")}-${e}`)}if(isSquirrelEvent(process.argv)){$.on("window-all-closed",(()=>{}));const exitApp=()=>$.exit(process.exitCode);handleSquirrelEvent(process.argv).then(exitApp,exitApp);return}if(!e&&!$.requestSingleInstanceLock()){$.quit();return}if($.commandLine.hasSwitch("disable-gpu")){$.disableHardwareAcceleration()}X=$.commandLine.hasSwitch("start-in-tray");ee=$.commandLine.getSwitchValue("wemod-env")||null;$.whenReady().then(run)}function run(){$.setAppUserModelId(I.userModelId);$.on("window-all-closed",(()=>$.quit()));$.on("will-quit",(()=>{if(Q){restartApp(Z)}}));$.on("second-instance",((e,t)=>{if(Y){Y.webContents.send("EVENT_APP_ACTIVATED",extractAppUriFromAgv(t));restoreWindow()}}));if(!I.devMode){$.setAsDefaultProtocolClient(I.protocolScheme)}t().nativeTheme.on("updated",updateTrayIconImage);initializeConfig();K=loadAppSettings();initializeAppWindow();registerAppChannels();setUpdateStateChangedHandler((e=>{if(Y){Y.webContents.send("EVENT_UPDATE_STATE_CHANGED",e)}}));if(I.devMode){Y.loadURL("http://localhost:8080")}else{blockHttpRequests();Y.loadURL(`file://${__dirname}/index.html`)}if(I.devMode){openDevTools();setFileOrigin()}}function blockHttpRequests(){var e;t().session.fromPartition((e=I.windowOptions.webPreferences.partition)!==null&&e!==void 0?e:"").webRequest.onBeforeRequest({urls:["http://*/*"]},((e,t)=>{t({cancel:e.webContents&&e.webContents.getURL().startsWith("file://")})}))}function restoreWindow(){showWindow(Y);if(Y.isMinimized()){Y.restore()}destroyTrayIcon()}function destroyTrayIcon(){if(J){J.destroy();J=null;Y.webContents.send("EVENT_RESTORED_FROM_TRAY")}}function closeToTray(){if(!J){J=createTrayIcon();Y.hide();Y.webContents.send("EVENT_CLOSED_TO_TRAY")}}function createTrayIcon(){const t=new e.Tray(getTrayIconImageForTheme());t.setToolTip("WeMod");t.setContextMenu(e.Menu.buildFromTemplate([{label:"Open WeMod",type:"normal",click:()=>restoreWindow()},{type:"separator"},{label:"Exit",type:"normal",click:()=>Y.webContents.send("EVENT_APP_QUIT_REQUESTED")}]));t.on("click",(()=>restoreWindow()));return t}function updateTrayIconImage(){J===null||J===void 0?void 0:J.setImage(getTrayIconImageForTheme())}function getTrayIconImageForTheme(){if(process.platform==="win32"){const n=t().nativeTheme.shouldUseDarkColors?"tray_dark.ico":"tray_light.ico";return e.nativeImage.createFromPath(o.join(I.paths.assets,n))}else{return e.nativeImage.createFromNamedImage("NSInfo").resize({width:24})}}function registerHandler(e,t){registerHandlerForWindow(Y,e,((...n)=>{if(I.devMode){console.debug(`[IPC] ${e}`,n)}return t(...n)}))}function registerAppChannels(){registerHandler("ACTION_INITIALIZE_APP",(async()=>{var e;const t=i.cpus();const n=I.devMode?null:((e=$.getVersion().split("-")[1])===null||e===void 0?void 0:e.split(".")[0])||"stable";return{app:{hwnd:Y.getNativeWindowHandle().readUInt32LE(0),version:$.getVersion()+(I.devMode?"-dev":""),releaseChannel:n,updaterAvailable:isUpdaterAvailable(),locale:$.getSystemLocale(),region:$.getLocaleCountryCode()||null,launchUri:extractAppUriFromAgv(process.argv),paths:{app:I.paths.app,assets:I.paths.assets,storage:I.paths.storage,temp:I.paths.temp},osPlatform:process.platform,osArch:is64BitOs()?"x64":"ia32",osVersion:i.release(),osHostname:i.hostname(),deviceCpuModel:t.length>0?t[0].model:null,deviceCpuCount:t.length,wow64:isWow64Process(),env:getEnvironmentVariables()},envOverride:typeof n==="string"&&!["stable","beta"].includes(n)?await readEnvironmentOverride():null,updateState:getUpdateState(),window:getWindowState(Y),startedInTray:X}}));registerHandler("ACTION_SET_INSTALLATION_INFO",((e,t)=>{if(typeof e!=="string"||typeof t!=="string"){return Promise.reject(new TypeError("Expected string."))}else{K.installationId=e;K.userId=t;saveAppSettings(K)}}));registerHandler("ACTION_GET_INSTALLED_AV_PRODUCTS",(()=>getInstalledAVProductNames().catch((()=>null))));registerHandler("ACTION_GET_CREATOR_CONFIGURATION",(()=>getCreatorConfiguration()));registerHandler("ACTION_GET_WINDOW_STATE",(()=>getWindowState(Y)));registerHandler("ACTION_OPEN_DEV_TOOLS",openDevTools);registerHandler("ACTION_OPEN_EXTERNAL",(e=>expectString(e,(e=>$.getApplicationNameForProtocol(e)?t().shell.openExternal(e).then((()=>true)).catch((()=>false)):Promise.resolve(false)))));registerHandler("ACTION_QUIT_APP",(()=>{G="quit-no-confirm";$.quit()}));registerHandler("ACTION_CLOSE_WINDOW",(()=>Y.close()));registerHandler("ACTION_MINIMIZE_WINDOW",(()=>Y.minimize()));registerHandler("ACTION_MAXIMIZE_WINDOW",(()=>Y.maximize()));registerHandler("ACTION_UNMAXIMIZE_WINDOW",(()=>Y.unmaximize()));registerHandler("ACTION_DEFAULT_WINDOW",(()=>{if(Y.isMinimized()){Y.restore()}if(Y.isMaximized()){Y.unmaximize()}const e=getDefaultWindowBounds(Y,I.preferredSizes,Y);Y.setSize(e.width,e.height)}));registerHandler("ACTION_SHOW_WINDOW",(()=>{if(X){X=false;J=createTrayIcon()}else if(!J){showWindow(Y)}}));registerHandler("ACTION_FOCUS_WINDOW",(()=>{restoreWindow();Y.focus()}));registerHandler("ACTION_RELOAD_WINDOW",(()=>{setTimeout((()=>Y.loadURL(Y.webContents.getURL())),100);return new Promise((()=>null))}));registerHandler("ACTION_SET_CLOSE_BEHAVIOR",(e=>{if(typeof e!=="string"||!["tray","quit","quit-no-confirm"].includes(e)){return Promise.reject(new TypeError("Invalid close behavior type."))}G=e;return Promise.resolve()}));registerHandler("ACTION_GET_MEMORY_INFO",(()=>({free:i.freemem(),total:i.totalmem()})));registerHandler("ACTION_READ_SHORTCUT_LINK",(e=>expectString(e,(e=>{try{return t().shell.readShortcutLink(e)}catch{return null}}))));registerHandler("ACTION_SHOW_SAVE_FILE_DIALOG",(e=>t().dialog.showSaveDialog(Y,e)));registerHandler("ACTION_SHOW_OPEN_FILE_DIALOG",(e=>t().dialog.showOpenDialog(Y,e)));registerHandler("ACTION_CHECK_FOR_UPDATE",(e=>expectUpdateFeedUrl(e,(e=>checkForUpdate(e)))));registerHandler("ACTION_APPLY_UPDATE",(e=>expectUpdateFeedUrl(e,(e=>downloadAndApplyUpdate(e)))));registerHandler("ACTION_FAKE_APPLY_UPDATE",(()=>fakeApplyUpdate())),registerHandler("ACTION_RESTART_APP_FOR_UPDATE",(e=>expectString(e,(e=>{if(getUpdateState()==="applied"){G="quit-no-confirm";Q=true;const t=[];if(J||X){t.push("--start-in-tray")}if(isValidAppUri(e)){t.push(e)}Z=t.length>0?t.join(" "):undefined;$.quit();return true}else{return false}}))));registerHandler("ACTION_COPY_TEXT",(t=>{expectString(t,(t=>e.clipboard.writeText(t)))}));registerHandler("ACTION_CREATE_DESKTOP_SHORTCUT",(e=>{expectDesktopShortcutOptions(e,((e,t,n)=>main_createDesktopShortcut(e,t,n)))}));registerHandler("ACTION_SHOW_TOAST",(t=>expectString(t,(t=>new Promise((n=>{if(e.Notification.isSupported()&&process.platform==="win32"&&i.release().match(/^1\d\./)){try{const r=new e.Notification({toastXml:t});r.once("show",(()=>n(true)));r.once("failed",(()=>n(false)));r.show()}catch{n(false)}}else{n(false)}}))))));registerHandler("ACTION_CREATE_ADVIEW",(e=>expectBrowserViewOptions(e,(e=>createAdView(Y,e)))));registerHandler("ACTION_DESTROY_ADVIEW",(e=>expectString(e,destroyAdView)));registerHandler("ACTION_SHOW_ADVIEW",(e=>expectString(e,showAdView)));registerHandler("ACTION_HIDE_ADVIEW",(e=>expectString(e,hideAdView)));registerHandler("ACTION_UPDATE_ADVIEW",(e=>expectBrowserViewOptions(e,updateAdView)));registerHandler("ACTION_GET_SYSTEM_IDLE_TIME",(()=>e.powerMonitor.getSystemIdleTime()));registerHandler("ACTION_SHOW_GAME_MAP_WINDOW",(e=>expectString(e,showGameMapWindow)));registerHandler("ACTION_POST_ANALYTICS_EVENT",(e=>expectAnalyticsEvent(e,postAnalyticsEvent)))}function expectUpdateFeedUrl(e,t){return typeof e==="string"&&e.startsWith("https://")?t(e):Promise.reject(new TypeError("Invalid update feed URL string."))}function expectString(e,t){return typeof e==="string"?t(e):Promise.reject(new TypeError("Expected string."))}function expectDesktopShortcutOptions(e,t){return typeof e==="object"&&typeof e.uri==="string"&&e.uri.startsWith(I.protocolScheme+":")&&typeof e.label==="string"&&(typeof e.icon==="undefined"||typeof e.icon==="string"||e.icon===null)?t(e.uri,e.label,e.icon):Promise.reject(new TypeError("Invalid desktop shortcut options."))}function expectBrowserViewOptions(e,t){return typeof e==="object"&&typeof e.id==="string"&&typeof e.url==="string"&&typeof e.anchorX==="string"&&typeof e.anchorY==="string"&&(typeof e.debug==="boolean"||typeof e.debug==="undefined")&&typeof e.zoom==="number"&&typeof e.bounds==="object"&&e.bounds!==null&&Object.keys(e.bounds).length===4&&typeof e.bounds.x==="number"&&typeof e.bounds.y==="number"&&typeof e.bounds.width==="number"&&typeof e.bounds.height==="number"&&(!e.parentSize||typeof e.parentSize.width==="number"&&typeof e.parentSize.height==="number")?t(e):Promise.reject(new TypeError("Invalid browser view options."))}function expectAnalyticsEvent(e,t){return typeof e==="object"&&e!==null&&typeof e.name==="string"&&typeof e.params==="object"&&e.params!==null?t(e):Promise.reject(new TypeError("Invalid analytics event arguments."))}async function readEnvironmentOverride(){if(ee){try{const e=JSON.parse(await n.promises.readFile(ee,"utf-8"));if(typeof e==="object"&&e!==null){return e}}catch{}}return null}function openDevTools(){Y.webContents.openDevTools({mode:"detach"})}function setFileOrigin(){Y.webContents.session.webRequest.onBeforeSendHeaders(((e,t)=>{if(!e.url.includes("api-cdn.wemod")){t(e);return}t({requestHeaders:{origin:"*",...e.requestHeaders}})}));Y.webContents.session.webRequest.onHeadersReceived(((e,t)=>{if(!e.url.includes("api-cdn.wemod")){t(e);return}t({responseHeaders:{...e.responseHeaders,"access-control-allow-origin":["*"]}})}))}function initializeAppWindow(){Y=new e.BrowserWindow(I.windowOptions);Y.setMenu(null);Y.setMenuBarVisibility(false);attachWindowStateObserver(Y,K,"app",I.preferredSizes);Y.webContents.setWindowOpenHandler(handleNewWindow);Y.webContents.on("dom-ready",(()=>{destroyAllAdViews()}));Y.on("closed",(()=>{Y=null}));Y.on("close",(e=>{if(G==="tray"&&!J){e.preventDefault();closeToTray()}if(G==="quit"){e.preventDefault();Y.webContents.send("EVENT_APP_QUIT_REQUESTED")}if(G==="quit-no-confirm"){Y.hide()}}))}function handleNewWindow(e){if(e.frameName==="setup_intent"){return{action:"allow",overrideBrowserWindowOptions:createSetupIntentWindow(Y,e)}}else if(e.frameName.startsWith("game-map:")){return{action:"allow",overrideBrowserWindowOptions:createGameMapWindow(Y,e,K)}}else{const t=isValidAppUri(e.url)?"EVENT_APP_ACTIVATED":"EVENT_NEW_WINDOW_REQUESTED";Y.webContents.send(t,e.url);return{action:"deny"}}}function main_createDesktopShortcut(e,t,r){if(process.platform!=="win32"){return}t=t.replace(/[\\/:"*?<>|]+/g,"").replace(/  +/g," ");if(!t.length){return}r!==null&&r!==void 0?r:r=getDefaultIconFile();const i=$.getPath("desktop");const s=o.join(i,`${t}.url`);const a=`[{000214A0-0000-0000-C000-000000000046}]\r\nProp3=19,11\r\n[InternetShortcut]\r\nIDList=\r\nIconIndex=0\r\nURL=${e}\r\nIconFile=${r}`;return n.promises.writeFile(s,a,"utf8").catch((()=>{throw new Error("Failed to create shortcut file.")}))}let te=null;function getDefaultIconFile(){if(te===null){try{te=o.resolve(o.dirname(process.execPath),"..","WeMod.exe");n.accessSync(te,n.constants.R_OK)}catch{te=o.join(I.paths.assets,"icon.ico")}}return te}async function postAnalyticsEvent(e){if(!K.installationId){return false}await postProductionEvents(K.installationId,K.userId,[e]);return true}})();module.exports=__webpack_exports__})();
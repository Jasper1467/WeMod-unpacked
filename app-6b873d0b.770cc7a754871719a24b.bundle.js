"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [9840],
  {
    "dialogs/selection-dialog.scss": (o, e, t) => {
      t.r(e), t.d(e, { default: () => u });
      var i = t(8081),
        a = t.n(i),
        l = t(23645),
        n = t.n(l),
        d = t(61667),
        r = t.n(d),
        s = new URL(t(81025), t.b),
        c = n()(a()),
        g = r()(s);
      c.push([
        o.id,
        '.selection-dialog{width:670px;border:0;padding:43px 48px}.selection-dialog ux-dialog-header .title{font-size:30px;line-height:36px;color:#fff;padding-bottom:11px}.selection-dialog ux-dialog-body{margin:0;padding:0}.selection-dialog ux-dialog-body .message{font-size:13px;line-height:20px;font-weight:600;color:rgba(255,255,255,.5);margin:0 0 27px}.selection-dialog ux-dialog-body .options{list-style:none;margin:0;padding:0}.selection-dialog ux-dialog-body .options .option{--checkbox--checked-color: var(--theme--highlight);--checkbox__label--color: rgba(255, 255, 255, 0.5);display:inline-flex;align-items:center;--checkbox--checked-color: var(--color--accent);display:flex}.selection-dialog ux-dialog-body .options .option,.selection-dialog ux-dialog-body .options .option *{cursor:pointer}.selection-dialog ux-dialog-body .options .option,.selection-dialog ux-dialog-body .options .option *{cursor:pointer}.selection-dialog ux-dialog-body .options .option>*:first-child{margin-right:9px}.selection-dialog ux-dialog-body .options .option+.option{margin-top:16px}.selection-dialog ux-dialog-body .options .option.disabled{opacity:.5;pointer-events:none}.selection-dialog ux-dialog-body .options .option.selected .checkbox:before{opacity:1}.selection-dialog ux-dialog-body .options .option.selected .label{color:var(--color--accent)}.selection-dialog ux-dialog-body .options .option.has-input{margin-top:11px}.selection-dialog ux-dialog-body .options .option:hover:not(.selected) .label{color:#fff}.selection-dialog ux-dialog-body .options .option .checkbox{display:inline-block;width:15px;height:15px;border:1px solid rgba(255,255,255,.25);border-radius:4px;position:relative;background:rgba(0,0,0,0);transition:background-color .15s;-webkit-appearance:none}.selection-dialog ux-dialog-body .options .option .checkbox,.selection-dialog ux-dialog-body .options .option .checkbox *{cursor:pointer}.selection-dialog ux-dialog-body .options .option .checkbox:checked:before{opacity:1}.selection-dialog ux-dialog-body .options .option .checkbox:before{background:var(--checkbox--checked-color);content:"";display:block;position:absolute;left:0;top:0;width:15px;height:11px;opacity:0;-webkit-mask-box-image:url(' +
          g +
          ")}.selection-dialog ux-dialog-body .options .option .label{font-size:13px;line-height:20px;font-weight:500;color:var(--checkbox__label--color);display:flex;align-items:center}.selection-dialog ux-dialog-body .options .option .label,.selection-dialog ux-dialog-body .options .option .label *{cursor:pointer}.selection-dialog ux-dialog-body .options .option .label input{display:block;color:rgba(255,255,255,.9);padding:4px 9px 5px 9px;border:1px solid rgba(0,0,0,0);transition:color .15s,border-color .15s;position:relative;background:rgba(255,255,255,.05);border-radius:5px;height:30px;width:100%;cursor:text;margin-left:8px}.selection-dialog ux-dialog-body .options .option .label input,.selection-dialog ux-dialog-body .options .option .label input::placeholder{font-size:14px;line-height:21px;font-weight:500}.selection-dialog ux-dialog-body .options .option .label input::placeholder{color:rgba(255,255,255,.3)}.selection-dialog ux-dialog-body .options .option .label input:disabled{opacity:.5}.selection-dialog ux-dialog-body .options .option .label input:focus{border-color:var(--theme--highlight);caret-color:var(--theme--highlight);color:#fff}.selection-dialog ux-dialog-body .options .option .label input:focus+*{--input__label--color: rgba(255, 255, 255, 0.6)}.selection-dialog ux-dialog-body textarea{display:block;color:rgba(255,255,255,.9);padding:4px 9px 5px 9px;border:1px solid rgba(0,0,0,0);transition:color .15s,border-color .15s;position:relative;background:rgba(255,255,255,.05);border-radius:5px;height:30px;width:100%;height:auto;resize:none;margin:20px 0;height:auto}.selection-dialog ux-dialog-body textarea::-webkit-scrollbar{width:7px;height:7px;background:rgba(255,255,255,.1);border-radius:10px;margin:10px}.selection-dialog ux-dialog-body textarea::-webkit-scrollbar-thumb:window-inactive,.selection-dialog ux-dialog-body textarea::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,.2);border-radius:99px;border:1px solid rgba(0,0,0,.2);background-clip:padding-box}.selection-dialog ux-dialog-body textarea::-webkit-scrollbar-thumb:window-inactive:hover,.selection-dialog ux-dialog-body textarea::-webkit-scrollbar-thumb:hover{background-color:rgba(255,255,255,.5)}.selection-dialog ux-dialog-body textarea,.selection-dialog ux-dialog-body textarea::placeholder{font-size:14px;line-height:21px;font-weight:500}.selection-dialog ux-dialog-body textarea::placeholder{color:rgba(255,255,255,.3)}.selection-dialog ux-dialog-body textarea:disabled{opacity:.5}.selection-dialog ux-dialog-body textarea:focus{border-color:var(--theme--highlight);caret-color:var(--theme--highlight);color:#fff}.selection-dialog ux-dialog-body textarea:focus+*{--input__label--color: rgba(255, 255, 255, 0.6)}.selection-dialog ux-dialog-footer{margin:25px 0 0;text-align:left;padding:0;border-bottom-left-radius:10px;border-bottom-right-radius:10px}.selection-dialog ux-dialog-footer .buttons{display:flex;align-items:center}.selection-dialog ux-dialog-footer .buttons>*+*{margin-left:20px}.selection-dialog ux-dialog-footer .buttons button.primary{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-size:20px;line-height:34px;font-weight:600;--cta--padding: 20.5px;--cta--height: 43px;--cta--hover--border-width: 2px;box-shadow:inset 0 0 0 1px var(--color--accent);--cta__icon--color: var(--color--accent);margin:0}.selection-dialog ux-dialog-footer .buttons button.primary,.selection-dialog ux-dialog-footer .buttons button.primary *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) .selection-dialog ux-dialog-footer .buttons button.primary{border:1px solid #fff}}.selection-dialog ux-dialog-footer .buttons button.primary>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}.selection-dialog ux-dialog-footer .buttons button.primary>*:first-child{padding-left:0}.selection-dialog ux-dialog-footer .buttons button.primary>*:last-child{padding-right:0}.selection-dialog ux-dialog-footer .buttons button.primary svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) .selection-dialog ux-dialog-footer .buttons button.primary svg *{fill:CanvasText}}.selection-dialog ux-dialog-footer .buttons button.primary svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) .selection-dialog ux-dialog-footer .buttons button.primary svg{opacity:1}}.selection-dialog ux-dialog-footer .buttons button.primary img{height:50%}.selection-dialog ux-dialog-footer .buttons button.primary:disabled{opacity:.3}.selection-dialog ux-dialog-footer .buttons button.primary:disabled,.selection-dialog ux-dialog-footer .buttons button.primary:disabled *{cursor:default;pointer-events:none}@media(hover: hover){.selection-dialog ux-dialog-footer .buttons button.primary:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}.selection-dialog ux-dialog-footer .buttons button.primary:not(:disabled):hover svg{opacity:1}}.selection-dialog ux-dialog-footer .buttons button.primary:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}@media(hover: hover){.selection-dialog ux-dialog-footer .buttons button.primary:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--color--accent);background-color:rgba(0,0,0,0)}}.selection-dialog ux-dialog-footer .buttons button.primary:not(:disabled):active{background-color:var(--color--accent)}.selection-dialog ux-dialog-footer .buttons button.primary:not(:disabled):active{--cta__icon--color: #000;color:#000}.selection-dialog ux-dialog-footer .buttons a.secondary{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-size:20px;line-height:34px;font-weight:600;--cta--padding: 20.5px;--cta--height: 43px;--cta--hover--border-width: 2px;background-color:rgba(255,255,255,.1);box-shadow:none !important;color:rgba(255,255,255,.5)}.selection-dialog ux-dialog-footer .buttons a.secondary,.selection-dialog ux-dialog-footer .buttons a.secondary *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) .selection-dialog ux-dialog-footer .buttons a.secondary{border:1px solid #fff}}.selection-dialog ux-dialog-footer .buttons a.secondary>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}.selection-dialog ux-dialog-footer .buttons a.secondary>*:first-child{padding-left:0}.selection-dialog ux-dialog-footer .buttons a.secondary>*:last-child{padding-right:0}.selection-dialog ux-dialog-footer .buttons a.secondary svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) .selection-dialog ux-dialog-footer .buttons a.secondary svg *{fill:CanvasText}}.selection-dialog ux-dialog-footer .buttons a.secondary svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) .selection-dialog ux-dialog-footer .buttons a.secondary svg{opacity:1}}.selection-dialog ux-dialog-footer .buttons a.secondary img{height:50%}.selection-dialog ux-dialog-footer .buttons a.secondary:disabled{opacity:.3}.selection-dialog ux-dialog-footer .buttons a.secondary:disabled,.selection-dialog ux-dialog-footer .buttons a.secondary:disabled *{cursor:default;pointer-events:none}@media(hover: hover){.selection-dialog ux-dialog-footer .buttons a.secondary:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}.selection-dialog ux-dialog-footer .buttons a.secondary:not(:disabled):hover svg{opacity:1}}.selection-dialog ux-dialog-footer .buttons a.secondary:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}@media(hover: hover){.selection-dialog ux-dialog-footer .buttons a.secondary:not(:disabled):hover{background-color:rgba(255,255,255,.2);color:#fff}}",
        "",
      ]);
      const u = c;
    },
    "dialogs/update-dialog.scss": (o, e, t) => {
      t.r(e), t.d(e, { default: () => u });
      var i = t(8081),
        a = t.n(i),
        l = t(23645),
        n = t.n(l),
        d = t(61667),
        r = t.n(d),
        s = new URL(t(98282), t.b),
        c = n()(a()),
        g = r()(s);
      c.push([
        o.id,
        ".update-dialog ux-dialog-header .dialog-header-content{padding-bottom:12px;display:flex;align-items:center}.update-dialog ux-dialog-header .dialog-header-content h1{flex:1}.update-dialog ux-dialog-header .dialog-header-content .logo{height:25px}.update-dialog ux-dialog-body{max-height:450px;padding:0;padding-right:6px;overflow-y:auto}.update-dialog ux-dialog-body::-webkit-scrollbar{width:7px;height:7px;background:rgba(255,255,255,.1);border-radius:10px;margin:10px}.update-dialog ux-dialog-body::-webkit-scrollbar-thumb:window-inactive,.update-dialog ux-dialog-body::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,.2);border-radius:99px;border:1px solid rgba(0,0,0,.2);background-clip:padding-box}.update-dialog ux-dialog-body::-webkit-scrollbar-thumb:window-inactive:hover,.update-dialog ux-dialog-body::-webkit-scrollbar-thumb:hover{background-color:rgba(255,255,255,.5)}.update-dialog .content>*+*{margin-top:8px}.update-dialog .content>*:last-child{padding-bottom:0}.update-dialog .content hr{border:1px solid rgba(255,255,255,.1);margin:0;padding:0}.update-dialog .content img{max-width:216px;padding:0 10px}.update-dialog .content strong,.update-dialog .content h1,.update-dialog .content h2,.update-dialog .content h3,.update-dialog .content h4,.update-dialog .content h5,.update-dialog .content h6{font-weight:700;font-size:15px;line-height:24px;font-weight:700;color:#fff;margin:0}.update-dialog .content,.update-dialog .content li,.update-dialog .content p,.update-dialog .content a{font-size:14px;line-height:21px;font-weight:500;color:rgba(255,255,255,.5)}.update-dialog .content a{color:var(--theme--highlight);transition:filter .15s}.update-dialog .content a:hover{filter:brightness(1.2)}.update-dialog .content p{padding-bottom:12px;margin:0}.update-dialog .content ul{list-style-image:url(" +
          g +
          ");margin:0;padding-left:22px;padding-bottom:12px}.update-dialog .content ul li+li{margin-top:9px}.update-dialog .content code{font-family:sans-serif;color:#fff}.update-dialog>*+*{margin-left:0}",
        "",
      ]);
      const u = c;
    },
    "dialogs/webview-dialog.scss": (o, e, t) => {
      t.r(e), t.d(e, { default: () => d });
      var i = t(8081),
        a = t.n(i),
        l = t(23645),
        n = t.n(l)()(a());
      n.push([
        o.id,
        ".webview-dialog{border:0;padding:0;width:auto}.webview-dialog .dialog-scroll-wrapper{display:flex;border-radius:20px}.webview-dialog iframe{border:0}.webview-dialog .loading-indicator{padding:60px 150px}.webview-dialog.loaded{animation:dialog-pop2 .2s ease-in-out !important}",
        "",
      ]);
      const d = n;
    },
    "dialogs/welcome-mat-dialog.scss": (o, e, t) => {
      t.r(e), t.d(e, { default: () => u });
      var i = t(8081),
        a = t.n(i),
        l = t(23645),
        n = t.n(l),
        d = t(61667),
        r = t.n(d),
        s = new URL(t(47254), t.b),
        c = n()(a()),
        g = r()(s);
      c.push([
        o.id,
        '.welcome-mat-dialog{font-size:14px;line-height:21px;line-height:19px;width:700px;padding:0}.welcome-mat-dialog .dialog-scroll-wrapper{padding:30px 60px 60px}.welcome-mat-dialog ux-dialog-header{display:block;margin-bottom:28px;text-align:center}.welcome-mat-dialog ux-dialog-header h1{font-weight:800;font-size:35px;line-height:40px;font-weight:800;color:#fff;margin:0 0 13px}.welcome-mat-dialog ux-dialog-header h1 strong{font-weight:800;font-size:35px;line-height:40px;color:var(--theme--highlight)}.welcome-mat-dialog ux-dialog-header p{font-size:14px;line-height:21px;line-height:19px;display:block;color:rgba(255,255,255,.7);max-width:513px}.welcome-mat-dialog ux-dialog-body{font-size:14px;line-height:21px;display:flex}.welcome-mat-dialog ux-dialog-body>*{flex:1}.welcome-mat-dialog ux-dialog-body button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0}.welcome-mat-dialog ux-dialog-body button,.welcome-mat-dialog ux-dialog-body button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) .welcome-mat-dialog ux-dialog-body button{border:1px solid #fff}}.welcome-mat-dialog ux-dialog-body button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}.welcome-mat-dialog ux-dialog-body button>*:first-child{padding-left:0}.welcome-mat-dialog ux-dialog-body button>*:last-child{padding-right:0}.welcome-mat-dialog ux-dialog-body button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) .welcome-mat-dialog ux-dialog-body button svg *{fill:CanvasText}}.welcome-mat-dialog ux-dialog-body button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) .welcome-mat-dialog ux-dialog-body button svg{opacity:1}}.welcome-mat-dialog ux-dialog-body button img{height:50%}.welcome-mat-dialog ux-dialog-body button:disabled{opacity:.3}.welcome-mat-dialog ux-dialog-body button:disabled,.welcome-mat-dialog ux-dialog-body button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){.welcome-mat-dialog ux-dialog-body button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}.welcome-mat-dialog ux-dialog-body button:not(:disabled):hover svg{opacity:1}}.welcome-mat-dialog ux-dialog-body button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}.welcome-mat-dialog ux-dialog-body ul{list-style:none;margin:0 0 30px;padding:0}.welcome-mat-dialog ux-dialog-body ul li:before{content:"";display:inline-block;width:15px;height:11px;vertical-align:middle;-webkit-mask-box-image:url(' +
          g +
          ");margin-right:15px}.welcome-mat-dialog ux-dialog-body ul li+li{margin-top:11px}.welcome-mat-dialog ux-dialog-body .col{display:flex;flex-direction:column;align-items:flex-start}.welcome-mat-dialog ux-dialog-body .col button{display:flex;width:100%}.welcome-mat-dialog ux-dialog-body .free{padding:26px 0;margin-right:30px}.welcome-mat-dialog ux-dialog-body .free h5{font-weight:600;font-size:16px;line-height:25px;color:rgba(255,255,255,.6);margin:0 0 20px}.welcome-mat-dialog ux-dialog-body .free ul li:before{background:rgba(255,255,255,.6)}.welcome-mat-dialog ux-dialog-body .free button{font-weight:700;font-size:15px;line-height:24px;font-weight:700;--cta--padding: 12px;--cta--height: 28px;--cta--hover--border-width: 1px}.welcome-mat-dialog ux-dialog-body .pro{padding:17px 30px 23px;background:var(--theme--secondary-background);border-radius:20px}.welcome-mat-dialog ux-dialog-body .pro h4{font-weight:800;font-size:21px;line-height:30px;font-weight:700;display:inline-flex;align-items:center;color:#fff;margin:0 0 14px}.welcome-mat-dialog ux-dialog-body .pro h4 strong{background-color:var(--theme--highlight);display:inline-block;font-weight:800;font-size:14px;text-transform:uppercase;color:#fff;line-height:20px;letter-spacing:.6px;padding:0 4px;border-radius:2.5px;min-width:0;text-rendering:geometricPrecision;line-height:28px;font-size:20px;letter-spacing:.9px;padding:0 6px;background:linear-gradient(225deg, var(--color--brand-green) 0%, var(--color--pro) 100%);color:#fff;margin-left:7px}@media(forced-colors: active){body:not(.override-contrast-mode) .welcome-mat-dialog ux-dialog-body .pro h4 strong{border:1px solid #fff}}.welcome-mat-dialog ux-dialog-body .pro p{color:rgba(255,255,255,.4);margin:0 0 13px}.welcome-mat-dialog ux-dialog-body .pro button{font-size:20px;line-height:34px;font-weight:600;--cta--padding: 20.5px;--cta--height: 43px;--cta--hover--border-width: 2px;background-color:var(--color--accent) !important;color:var(--theme--background) !important;transition:filter .15s;box-shadow:none !important}@media(hover: hover){.welcome-mat-dialog ux-dialog-body .pro button:hover{filter:brightness(1.1)}}.welcome-mat-dialog ux-dialog-body .pro ul li{color:#fff}.welcome-mat-dialog ux-dialog-body .pro ul li:before{background:var(--theme--highlight)}",
        "",
      ]);
      const u = c;
    },
    "dialogs/selection-dialog.html": (o, e, t) => {
      t.r(e), t.d(e, { default: () => i });
      const i =
        '<template> <require from="./selection-dialog.scss"></require> <require from="../shared/resources/elements/close-button"></require> <ux-dialog class="selection-dialog secondary-gradient-bg"> <ux-dialog-header> <h1 class="title">${config.title | i18n}</h1> <close-button click.delegate="controller.cancel()" tabindex="0"></close-button> </ux-dialog-header> <ux-dialog-body> <div class="message" if.bind="config.message" innerhtml.bind="config.message | i18n | markdown"></div> <ul class="options"> <li repeat.for="option of config.options" class="option ${selections.includes(option) ? \'selected\' : \'\'} ${!selections.includes(option) && maxSelections > 1 && selections.length == maxSelections ? \'disabled\' : \'\'} ${$last && config.customSelection ? \'has-input\' : \'\'}" click.delegate="toggleSelection(option)" tabindex="0"> <span class="checkbox"></span> <span class="label"> ${option | i18n}${($last && config.customSelection) ? \':\' : \'\'} <input if.bind="$last && config.customSelection" placeholder.bind="config.customSelection.placeholder | i18n" maxlength.bind="config.customSelection.maxLength" focus.one-way="enableCustomSelectionField" value.bind="customSelection"> </span> </li> </ul> <textarea if.bind="showDetailsField" placeholder.bind="config.detailsField.placeholder | i18n" maxlength.bind="config.detailsField.maxLength" value.bind="details" rows="4"></textarea> </ux-dialog-body> <ux-dialog-footer> <div class="buttons"> <button class="primary" disabled.bind="!canSubmit" click.delegate="submit()">${config.submitLabel | i18n}</button> <a class="secondary" href="#" if.bind="config.cancelLabel" click.delegate="controller.cancel()">${config.cancelLabel | i18n}</a> </div> </ux-dialog-footer> </ux-dialog> </template> ';
    },
    "dialogs/update-dialog.html": (o, e, t) => {
      t.r(e), t.d(e, { default: () => n });
      var i = t(27091),
        a = t.n(i),
        l = new URL(t(41405), t.b);
      const n =
        '<template> <require from="./update-dialog.scss"></require> <require from="../shared/resources/elements/close-button"></require> <ux-dialog class="update-dialog"> <ux-dialog-header> <h1>${\'update_dialog.wemod_updates\' | i18n}</h1> <img class="logo" src="' +
        a()(l) +
        '"> <close-button click.trigger="controller.cancel()" tabindex="0"></close-button> </ux-dialog-header> <ux-dialog-body overflow-fade="vertical"> <div class="content" innerhtml.bind="content"></div> </ux-dialog-body> </ux-dialog> </template> ';
    },
    "dialogs/webview-dialog.html": (o, e, t) => {
      t.r(e), t.d(e, { default: () => i });
      const i =
        '<template> <require from="./webview-dialog.scss"></require> <require from="../shared/resources/elements/close-button"></require> <require from="../shared/resources/elements/loading-indicator"></require> <ux-dialog class="webview-dialog scrollable ${!loading ? \'loaded\' : \'\'}" style.bind="config.styles"> <close-button click.delegate="controller.close(false, \'close_button\')" tabindex="0"></close-button> <div class="loading-indicator" if.bind="loading"> <loading-indicator></loading-indicator> </div> <div class="dialog-scroll-wrapper" show.bind="!loading"> <iframe ref="iframeEl" sandbox="allow-same-origin allow-forms allow-scripts allow-popups allow-pointer-lock"></iframe> </div> </ux-dialog> </template>';
    },
    "dialogs/welcome-mat-dialog.html": (o, e, t) => {
      t.r(e), t.d(e, { default: () => i });
      const i =
        "<template> <require from=\"./welcome-mat-dialog.scss\"></require> <require from=\"../shared/resources/elements/close-button\"></require> <require from=\"../resources/elements/pro-cta-label\"></require> <ux-dialog class=\"welcome-mat-dialog module scrollable secondary-gradient-bg\"> <close-button click.delegate=\"controller.close(true, 'close_button')\"></close-button> <div class=\"dialog-scroll-wrapper\"> <ux-dialog-header> <h1 if.bind=\"!playedGameCount\" innerhtml.bind=\"'welcome_mat_dialog.welcome_to_wemod' | i18n | markdown\"></h1> <h1 else innerhtml.bind=\"'welcome_mat_dialog.enjoy_all_of_wemod_with_pro' | i18n | markdown\"></h1> <p>${'welcome_mat_dialog.wemod_is_free_to_use' | i18n}</p> </ux-dialog-header> <ux-dialog-body> <div class=\"free col\"> <h5>${'welcome_mat_dialog.free_membership' | i18n}</h5> <ul> <li>${'welcome_mat_dialog.$x_cheats_for_$y_games' | i18n:{x: i18nNumber.toView(cheatCount), y: i18nNumber.toView(gameCount)}}</li> <li>${'welcome_mat_dialog.hotkey_cheat_controls' | i18n}</li> <li>${'welcome_mat_dialog.auto_game_and_version_detection' | i18n}</li> <li>${'welcome_mat_dialog.safe_and_virus_free_cheats' | i18n}</li> <li>${'welcome_mat_dialog.discord_community_access' | i18n}</li> </ul> <button click.delegate=\"controller.close(true, 'continue_button')\">${'welcome_mat_dialog.continue_with_free_membership' | i18n}</button> </div> <div class=\"pro col\"> <h4 innerhtml.bind=\"'welcome_mat_dialog.upgrade_to_pro' | i18n | markdown\"></h4> <p>${'welcome_mat_dialog.everything_in_free_membership' | i18n}</p> <ul> <li>${'welcome_mat_dialog.interactive_cheat_controls' | i18n}</li> <li>${'welcome_mat_dialog.save_cheats_between_plays' | i18n}</li> <li>${'welcome_mat_dialog.remote_mobile_app' | i18n}</li> <li>${'welcome_mat_dialog.in_game_cheat_overlay' | i18n}</li> <li>${'welcome_mat_dialog.game_boosting' | i18n}</li> <li>${'welcome_mat_dialog.exclusive_themes' | i18n}</li> <li>${'welcome_mat_dialog.special_role_in_discord' | i18n}</li> </ul> <button pro-cta=\"welcome_mat\" click.delegate=\"controller.close(true, 'pro_cta')\"> <pro-cta-label></pro-cta-label> </button> </div> </ux-dialog-body> </div> </ux-dialog> </template> ";
    },
    "dialogs/selection-dialog": (o, e, t) => {
      t.r(e),
        t.d(e, { SelectionDialog: () => r, SelectionDialogService: () => s });
      var i = t(70655),
        a = t("aurelia-dialog"),
        l = t("aurelia-framework"),
        n = t(14267),
        d = t(5384);
      let r = class {
        constructor(o) {
          (this.controller = o),
            (this.customSelection = ""),
            (this.details = "");
        }
        activate(o) {
          this.config = o;
          const e = !0 === o.multiselect ? {} : o.multiselect;
          if (
            ((this.minSelections = (e && e.minSelections) || 1),
            (this.maxSelections = e ? e.maxSelections || o.options.length : 1),
            Array.isArray(o.defaultSelections))
          ) {
            const e = o.defaultSelections.map((o) => o.toString());
            this.selections = o.options
              .filter((o) => e.includes(o.toString()))
              .slice(0, this.maxSelections);
          } else this.selections = [];
        }
        get canSubmit() {
          return (
            !(
              this.selections.length < this.minSelections ||
              this.selections.length > this.maxSelections
            ) &&
            this.#o() &&
            this.#e()
          );
        }
        #o() {
          if (!this.config.customSelection) return !0;
          if (!this.#t()) return !0;
          const o = (0, d.kJ)(this.customSelection) || "";
          return (
            o.length > 0 && o.length <= this.config.customSelection.maxLength
          );
        }
        #e() {
          if (!this.config.detailsField) return !0;
          if (this.config.detailsField.lastOptionOnly && !this.#t()) return !0;
          const o = (0, d.kJ)(this.details) || "";
          return (
            o.length >= (this.config.detailsField.minLength || 0) &&
            o.length <= this.config.detailsField.maxLength
          );
        }
        get showDetailsField() {
          return (
            this.config.detailsField &&
            (!this.config.detailsField.lastOptionOnly || this.#t())
          );
        }
        get enableCustomSelectionField() {
          return this.config.customSelection && this.#t();
        }
        submit() {
          this.controller.ok({
            selection: this.selections[0]?.toString(),
            selections: this.selections.map((o) => o.toString()),
            customSelection: this.enableCustomSelectionField
              ? (0, d.kJ)(this.customSelection)
              : null,
            details: this.showDetailsField ? (0, d.kJ)(this.details) : null,
          });
        }
        toggleSelection(o) {
          this.config.multiselect
            ? this.selections.includes(o)
              ? (this.selections = this.selections.filter((e) => e !== o))
              : this.selections.length < this.maxSelections &&
                (this.selections.push(o),
                (this.selections = this.selections.slice(0)))
            : this.selections.includes(o) || (this.selections = [o]);
        }
        #t() {
          const o = this.config.options[this.config.options.length - 1];
          return this.selections.includes(o);
        }
      };
      (0, i.gn)(
        [
          (0, l.computedFrom)("selections", "customSelection", "details"),
          (0, i.w6)("design:type", Boolean),
          (0, i.w6)("design:paramtypes", []),
        ],
        r.prototype,
        "canSubmit",
        null
      ),
        (0, i.gn)(
          [
            (0, l.computedFrom)("selections"),
            (0, i.w6)("design:type", Boolean),
            (0, i.w6)("design:paramtypes", []),
          ],
          r.prototype,
          "showDetailsField",
          null
        ),
        (0, i.gn)(
          [
            (0, l.computedFrom)("selections"),
            (0, i.w6)("design:type", Boolean),
            (0, i.w6)("design:paramtypes", []),
          ],
          r.prototype,
          "enableCustomSelectionField",
          null
        ),
        (r = (0, i.gn)(
          [
            (0, l.autoinject)(),
            (0, i.w6)("design:paramtypes", [a.DialogController]),
          ],
          r
        ));
      let s = class extends n.c {
        constructor() {
          super(...arguments),
            (this.viewModelClass = "dialogs/selection-dialog");
        }
      };
      s = (0, i.gn)([(0, l.autoinject)()], s);
    },
    "dialogs/update-dialog": (o, e, t) => {
      t.r(e), t.d(e, { UpdateDialog: () => s, UpdateDialogService: () => c });
      var i = t(70655),
        a = t("aurelia-dialog"),
        l = t("aurelia-framework"),
        n = t(9980),
        d = t.n(n),
        r = t(14267);
      let s = class {
        #i;
        constructor(o, e) {
          (this.controller = o), (this.#i = e);
        }
        activate(o) {
          this.content = this.#i.render(o.content);
        }
      };
      s = (0, i.gn)(
        [
          (0, l.autoinject)(),
          (0, i.w6)("design:paramtypes", [a.DialogController, d()]),
        ],
        s
      );
      let c = class extends r.c {
        constructor() {
          super(...arguments), (this.viewModelClass = "dialogs/update-dialog");
        }
      };
      c = (0, i.gn)([(0, l.autoinject)()], c);
    },
    "dialogs/webview-dialog": (o, e, t) => {
      t.r(e), t.d(e, { WebviewDialog: () => v, WebviewDialogService: () => _ });
      var i = t(70655),
        a = t("aurelia-dialog"),
        l = t("aurelia-event-aggregator"),
        n = t("aurelia-framework"),
        d = t(23739),
        r = t(68611),
        s = t(81866),
        c = t(83467),
        g = t(26478),
        u = t(29242),
        p = t("shared/api/index"),
        h = t(14267),
        b = t(339),
        m = t(35969),
        x = t(93082),
        f = t(66302),
        w = t(84620),
        y = t("dialogs/payment-processing-dialog");
      let v = class {
        #a;
        #l;
        #n;
        #d;
        #r;
        #s;
        #c;
        #g;
        #u;
        #p;
        #h;
        #b;
        constructor(o, e, t, i, a, l, n, d, r) {
          (this.controller = o),
            (this.wasClosedByWebview = !1),
            (this.loading = !0),
            (this.#a = e),
            (this.#l = t),
            (this.#n = i),
            (this.#d = a),
            (this.#r = l),
            (this.#s = n),
            (this.#c = d),
            (this.#g = r);
        }
        activate(o) {
          this.config = o;
        }
        deactivate(o) {
          this.wasClosedByWebview ||
            this.#h
              ?.execute("external_close", {
                ok: !o.wasCancelled,
                output: o.output || "cancel",
              })
              .catch(f.K);
        }
        async attached() {
          let o;
          (this.#u = Date.now()),
            (this.#p = (0, b.rk)(
              () =>
                this.#m(
                  "load-timeout",
                  `Timed out trying to load "${this.iframeEl.src}"`
                ),
              3e4
            )),
            (this.#b = new b.K4([this.#p]));
          const e = Date.now();
          let t = null,
            i = null;
          try {
            (o = await this.#r.createWebview({
              mode: "modal",
              theme: this.theme,
              locale: this.#d.getEffectiveLocale().baseName,
              route: this.config.route,
              params: this.config.params ?? {},
            })),
              (t = Date.now());
          } catch (o) {
            return (
              o instanceof p.ResponseError && (i = o.response.status),
              this.#a.event("webview_timing", {
                route: this.config.route,
                stage1Duration: Date.now() - e,
                stage1Error: i,
                stage2Duration: null,
              }),
              void this.#m(
                "create-webview-error",
                `Error creating webview with route "${this.config.route}"`
              )
            );
          }
          if (!this.iframeEl) return;
          const a = Date.now();
          this.iframeEl.addEventListener(
            "load",
            () => {
              this.#a.event("webview_timing", {
                route: this.config.route,
                stage1Duration: t - e,
                stage1Error: i,
                stage2Duration: Date.now() - a,
              });
            },
            { once: !0 }
          ),
            (this.iframeEl.src = o.url),
            (this.#h = new w.k1(this.iframeEl.contentWindow, o.origin)),
            this.#h.setHandler("event", (o) => this.#x(o)),
            this.#h.setHandler("error", (o) => this.#f(o)),
            this.#h.setHandler("router_event", (o) => this.#w(o)),
            this.#h.setHandler("resize", (o) => this.#y(o)),
            this.#h.setHandler("view_title", (o) => this.#v(o)),
            this.#h.setHandler("view_collection", (o) => this.#_(o)),
            this.#h.setHandler("close", (o) => this.#k(o)),
            this.#h.setHandler("open_uri", (o) => this.#S(o)),
            this.#h.setHandler("toast_message", (o) => this.#C(o)),
            this.#h.setHandler("set_payment_processing_state", (o) =>
              this.#$(o)
            ),
            this.#b.push(this.#h);
        }
        detached() {
          this.#c.hide(),
            this.#b.dispose(),
            (this.#b = null),
            (this.#p = null),
            (this.#h = null);
        }
        handleResize(o, e) {
          (this.iframeEl.width =
            "auto" === e[0] ? o[0].toString() : `${e[0]}px`),
            (this.iframeEl.height =
              "auto" === e[1] ? o[1].toString() : `${e[1]}px`);
        }
        #m(o, e) {
          this.#a.event("webview_dialog_error", { type: o, message: e }, s.$),
            this.controller.cancel("error");
        }
        #x(o) {
          return this.#a.event(o.name, o.data, o.dispatch), !0;
        }
        #f(o) {
          return this.#m(o.type, o.message), !0;
        }
        #w(o) {
          return (
            this.handleResize(o.size, o.preferredSize),
            "router:navigation:complete" === o.event &&
              (this.#p.dispose(),
              (this.loading = !1),
              this.#n.publish("webview_load", {
                mode: "modal",
                route: this.config.route,
                params: this.config.params,
                duration: Date.now() - this.#u,
              }),
              this.useWindowsContrastMode ||
                this.#h.execute("override_contrast_mode", null).catch(f.K)),
            "router:navigation:error" === o.event &&
              this.#m("router-navigation", `Error navigating to "${o.name}"`),
            !0
          );
        }
        #y(o) {
          return this.handleResize(o.size, o.preferredSize), !0;
        }
        #v(o) {
          return (
            this.#l.router.navigateToRoute("title", {
              titleId: o.gameId,
              gameId: o.gameId,
              previousRoute: o.previousRoute,
              parentRoute: o.parentRoute,
            }),
            this.#n.publish(
              new u.kx(o.location, o.titleId, o.gameId || null, null, !1)
            ),
            !0
          );
        }
        #_(o) {
          return (
            this.#l.router.navigateToRoute("collection", { slug: o.slug }), !0
          );
        }
        #k(o) {
          return (
            (this.wasClosedByWebview = !0),
            o.refreshAccount && this.#g.refreshAccount(),
            this.controller.close(o.ok, o.output),
            !0
          );
        }
        #S(o) {
          return window.open(o.uri, "_blank"), !0;
        }
        #C(o) {
          return (
            this.#s.toast({
              content:
                "string" == typeof o.content
                  ? m.oc.literal(o.content)
                  : o.content,
              type: o.type,
            }),
            !0
          );
        }
        async #$(o) {
          return o.processing ? await this.#c.show() : await this.#c.hide(), !0;
        }
      };
      v = (0, i.gn)(
        [
          (0, n.autoinject)(),
          (0, x.b)({
            selectors: {
              theme: (0, x.g)("settings", "theme"),
              useWindowsContrastMode: (0, x.g)(
                "settings",
                "useWindowsContrastMode"
              ),
            },
          }),
          (0, i.w6)("design:paramtypes", [
            a.DialogController,
            s.c,
            c.W,
            l.h,
            m.oc,
            d.K,
            g.x,
            y.PaymentProcessingDialogService,
            r.v,
          ]),
        ],
        v
      );
      let _ = class extends h.c {
        constructor() {
          super(...arguments), (this.viewModelClass = "dialogs/webview-dialog");
        }
      };
      _ = (0, i.gn)([(0, n.autoinject)()], _);
    },
    "dialogs/welcome-mat-dialog": (o, e, t) => {
      t.r(e),
        t.d(e, { WelcomeMatDialog: () => u, WelcomeMatDialogService: () => p });
      var i = t(70655),
        a = t("aurelia-dialog"),
        l = t("aurelia-framework"),
        n = t(81866),
        d = t(2314),
        r = t(14267),
        s = t("shared/i18n/resources/value-converters"),
        c = t(93082),
        g = t(51722);
      let u = class {
        #a;
        constructor(o, e, t) {
          (this.i18nNumber = o), (this.controller = e), (this.#a = t);
        }
        get cheatCount() {
          return this.catalog
            ? Object.values(this.catalog.games)
                .filter((o) => (0, g.yE)(o.flags, d.p.Active))
                .reduce((o, e) => o + (e.trainer?.cheatCount ?? 0), 0)
            : 0;
        }
        get gameCount() {
          return this.catalog
            ? Object.values(this.catalog.games).filter((o) =>
                (0, g.yE)(o.flags, d.p.Active)
              ).length
            : 0;
        }
        get playedGameCount() {
          return Object.values(this.gameHistory).filter((o) => !!o.lastPlayedAt)
            .length;
        }
        activate() {
          this.#a.event("welcome_mat_open");
        }
        deactivate(o) {
          let e;
          (e = o.wasCancelled && !o.output ? "escape" : o.output),
            this.#a.event("welcome_mat_dismiss", { method: e });
        }
      };
      (0, i.gn)(
        [
          (0, l.computedFrom)("catalog"),
          (0, i.w6)("design:type", Number),
          (0, i.w6)("design:paramtypes", []),
        ],
        u.prototype,
        "cheatCount",
        null
      ),
        (0, i.gn)(
          [
            (0, l.computedFrom)("catalog"),
            (0, i.w6)("design:type", Number),
            (0, i.w6)("design:paramtypes", []),
          ],
          u.prototype,
          "gameCount",
          null
        ),
        (0, i.gn)(
          [
            (0, l.computedFrom)("gameHistory"),
            (0, i.w6)("design:type", Number),
            (0, i.w6)("design:paramtypes", []),
          ],
          u.prototype,
          "playedGameCount",
          null
        ),
        (u = (0, i.gn)(
          [
            (0, c.b)({
              setup: "activate",
              teardown: "deactivate",
              selectors: {
                catalog: (0, c.g)("catalog"),
                gameHistory: (0, c.g)("gameHistory"),
              },
            }),
            (0, l.autoinject)(),
            (0, i.w6)("design:paramtypes", [
              s.I18nNumberValueConverter,
              a.DialogController,
              n.c,
            ]),
          ],
          u
        ));
      let p = class extends r.c {
        constructor() {
          super(...arguments),
            (this.viewModelClass = "dialogs/welcome-mat-dialog");
        }
      };
      p = (0, i.gn)([(0, l.autoinject)()], p);
    },
  },
]);

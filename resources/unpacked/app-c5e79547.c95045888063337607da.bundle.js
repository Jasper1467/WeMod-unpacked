"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [630],
  {
    "shared/resources/elements/back-link.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => s });
      var i = o(8081),
        r = o.n(i),
        n = o(23645),
        a = o.n(n)()(r());
      a.push([
        e.id,
        'back-link{display:flex;width:auto;margin-bottom:7.5px;align-items:center;display:inline-flex;width:fit-content}back-link,back-link *{cursor:pointer}back-link .caret{display:inline-block;flex:0 0 auto;margin-left:5px;margin-right:14px;margin-top:1.5px;color:rgba(255,255,255,.4);transition:color .15s;margin:1.5px 5px 0 0;transform:rotate(180deg)}back-link .caret:after{content:"";display:block;clear:both}back-link .caret svg{float:left}back-link .caret svg{max-width:8px;max-height:8px}back-link .caret svg *{color:#fff}back-link .caret svg *{fill:currentColor;color:inherit !important}back-link .label{font-size:13px;line-height:20px;font-weight:500;display:flex;flex:0 0 auto;align-items:center;color:rgba(255,255,255,.4);transition:color .15s;text-decoration:none}back-link .label:hover{color:#fff}back-link .label:hover .caret{color:#fff}',
        "",
      ]);
      const s = a;
    },
    "shared/resources/elements/close-button.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => s });
      var i = o(8081),
        r = o.n(i),
        n = o(23645),
        a = o.n(n)()(r());
      a.push([
        e.id,
        "close-button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)) !important;display:inline-flex;width:26px;height:26px;box-shadow:none;padding:0;border-radius:50%;border:0;align-items:center;justify-content:center;transition:background-color .15s}close-button,close-button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) close-button{border:1px solid #fff}}close-button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}close-button>*:first-child{padding-left:0}close-button>*:last-child{padding-right:0}close-button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) close-button svg *{fill:CanvasText}}close-button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) close-button svg{opacity:1}}close-button img{height:50%}close-button:disabled{opacity:.3}close-button:disabled,close-button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){close-button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}close-button:not(:disabled):hover svg{opacity:1}}close-button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}@media(forced-colors: active){body:not(.override-contrast-mode) close-button{border:1px solid #fff}}close-button svg{opacity:1}@media(hover: hover){close-button:hover{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)) !important}}close-button.light{background-color:rgba(255,255,255,.1) !important}",
        "",
      ]);
      const s = a;
    },
    "shared/resources/elements/feature-number.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => s });
      var i = o(8081),
        r = o.n(i),
        n = o(23645),
        a = o.n(n)()(r());
      a.push([
        e.id,
        "feature-number{font-size:18px;line-height:30px;font-weight:600;width:40px;height:40px;background:linear-gradient(180deg, rgba(var(--theme--highlight--rgb), 0.25) 0%, transparent 100%);border-radius:10px;display:inline-flex;align-items:center;justify-content:center;color:rgba(255,255,255,.75)}",
        "",
      ]);
      const s = a;
    },
    "shared/resources/elements/features.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => v });
      var i = o(8081),
        r = o.n(i),
        n = o(23645),
        a = o.n(n),
        s = o(61667),
        l = o.n(s),
        c = new URL(o(92797), o.b),
        d = new URL(o(80357), o.b),
        p = new URL(o(67980), o.b),
        h = new URL(o(53385), o.b),
        g = a()(r()),
        u = l()(c),
        b = l()(d),
        f = l()(p),
        m = l()(h);
      g.push([
        e.id,
        'features{display:flex;flex-wrap:wrap;margin:-30px 0 0 -30px}features .feature-tile{position:relative;min-height:188px;padding:27px 0 0 34px;display:block;background:var(--theme--secondary-background);border-radius:20px;margin-left:30px;margin-top:30px;flex:0 0 calc(50% - 30px)}features .feature-tile h1{font-size:24px;line-height:32px;font-weight:700;color:#fff;margin:0 0 13px 0;position:relative;z-index:2}features .feature-tile h1 em{font-style:normal;color:var(--color--accent)}features .feature-tile h1 info-tooltip{vertical-align:middle}features .feature-tile h2{font-size:16px;line-height:24px;font-weight:600;color:rgba(255,255,255,.5);margin:0;position:relative;z-index:1}features .feature-tile h2 em{font-style:normal;color:#fff}features .feature-tile:after{content:"";display:block;position:absolute;left:0;top:0;width:100%;height:100%;z-index:0;background-position:bottom right;background-size:auto 190px;background-repeat:no-repeat}features .feature-tile info-tooltip{margin-left:10px}features .feature-tile.interactive_controls:after{background-image:url(' +
          u +
          ")}features .feature-tile.interactive_controls h2{max-width:140px}features .feature-tile.remote_app:after{background-image:url(" +
          b +
          ");background-size:auto 165px}features .feature-tile.remote_app h2{max-width:150px}features .feature-tile.overlay:after{background-image:url(" +
          f +
          ");background-size:auto 174px;border-bottom-right-radius:20px;overflow:hidden}features .feature-tile.overlay h2{max-width:170px}features .feature-tile.save_cheats:after{background-image:url(" +
          m +
          ");background-size:auto 160px;background-position:left center;overflow:hidden}features .feature-tile.save_cheats h2{max-width:170px}",
        "",
      ]);
      const v = g;
    },
    "shared/resources/elements/horizontal-scroll-container.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => u });
      var i = o(8081),
        r = o.n(i),
        n = o(23645),
        a = o.n(n),
        s = o(61667),
        l = o.n(s),
        c = new URL(o(69558), o.b),
        d = new URL(o(4991), o.b),
        p = a()(r()),
        h = l()(c),
        g = l()(d);
      p.push([
        e.id,
        "horizontal-scroll-container{display:block;position:relative;z-index:0}horizontal-scroll-container .scroll-wrapper{display:flex;overflow-x:hidden;overflow-y:hidden;white-space:nowrap;position:relative;z-index:0}horizontal-scroll-container .scroll-wrapper::-webkit-scrollbar{width:7px;height:7px;background:rgba(255,255,255,.1);border-radius:10px;margin:10px}horizontal-scroll-container .scroll-wrapper::-webkit-scrollbar-thumb:window-inactive,horizontal-scroll-container .scroll-wrapper::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,.2);border-radius:99px;border:1px solid rgba(0,0,0,.2);background-clip:padding-box}horizontal-scroll-container .scroll-wrapper::-webkit-scrollbar-thumb:window-inactive:hover,horizontal-scroll-container .scroll-wrapper::-webkit-scrollbar-thumb:hover{background-color:rgba(255,255,255,.5)}horizontal-scroll-container .scroll-wrapper:hover{overflow-x:overlay}horizontal-scroll-container .scroll-left,horizontal-scroll-container .scroll-right{display:inline-block;width:40px;height:40px;border:0;border-radius:50%;background:rgba(0,0,0,.35) center/9px no-repeat;transform:scale(1);opacity:1;transition:background-color .15s,opacity .15s,transform .15s;position:absolute;top:var(--horizontal-scroll-container__arrow--top, calc(50% - 20px));z-index:1}horizontal-scroll-container .scroll-left:hover,horizontal-scroll-container .scroll-right:hover{background-color:rgba(var(--theme--highlight--rgb), 0.35)}horizontal-scroll-container .scroll-left:active,horizontal-scroll-container .scroll-right:active{background-color:var(--theme--highlight)}horizontal-scroll-container .scroll-left.hide,horizontal-scroll-container .scroll-right.hide{transform:scale(0);opacity:0;pointer-events:none}horizontal-scroll-container .scroll-left{background-image:url(" +
          h +
          ");background-position-x:calc(50% - 1px);left:10px}horizontal-scroll-container .scroll-right{background-image:url(" +
          g +
          ");background-position-x:calc(50% + 1px);right:10px}",
        "",
      ]);
      const u = p;
    },
    "shared/resources/elements/info-tooltip.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => s });
      var i = o(8081),
        r = o.n(i),
        n = o(23645),
        a = o.n(n)()(r());
      a.push([
        e.id,
        "info-tooltip{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;--cta--height: 15px;--cta--hover--border-width: 1px;min-width:var(--cta--height);width:var(--cta--height);border-radius:50%;justify-content:center;align-items:center;position:relative;background:rgba(255,255,255,.1);box-shadow:none !important}info-tooltip,info-tooltip *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) info-tooltip{border:1px solid #fff}}info-tooltip>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}info-tooltip>*:first-child{padding-left:0}info-tooltip>*:last-child{padding-right:0}info-tooltip svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) info-tooltip svg *{fill:CanvasText}}info-tooltip svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) info-tooltip svg{opacity:1}}info-tooltip img{height:50%}info-tooltip:disabled{opacity:.3}info-tooltip:disabled,info-tooltip:disabled *{cursor:default;pointer-events:none}@media(hover: hover){info-tooltip:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}info-tooltip:not(:disabled):hover svg{opacity:1}}info-tooltip:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}info-tooltip,info-tooltip>*{padding:0 !important}info-tooltip:active{background-color:rgba(0,0,0,0) !important;color:rgba(255,255,255,.8) !important}info-tooltip svg{opacity:.5}info-tooltip tooltip{white-space:normal}info-tooltip:hover{background:var(--theme--highlight) !important}info-tooltip:hover svg{opacity:1}",
        "",
      ]);
      const s = a;
    },
    "shared/resources/elements/loading-indicator.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => s });
      var i = o(8081),
        r = o.n(i),
        n = o(23645),
        a = o.n(n)()(r());
      a.push([
        e.id,
        "loading-indicator{opacity:.4;display:block;width:30px;height:30px}loading-indicator svg{animation:loading-indicator-rotate 2s linear infinite;width:30px;height:30px}loading-indicator circle{stroke:#fff;stroke-dasharray:1,200;stroke-dashoffset:0;animation:loading-indicator-stroke 1.5s ease-in-out infinite}loading-indicator.small{width:15px;height:15px;overflow:hidden}loading-indicator.small svg{transform:scale(0.5);transform-origin:top left;animation-name:loading-indicator-rotate__small}@keyframes loading-indicator-rotate{to{transform:rotate(360deg)}}@keyframes loading-indicator-rotate__small{to{transform:rotate(360deg) scale(0.5)}}@keyframes loading-indicator-stroke{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}100%{stroke-dasharray:89,200;stroke-dashoffset:-124}}",
        "",
      ]);
      const s = a;
    },
    "shared/resources/elements/payment-loading-indicator.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => u });
      var i = o(8081),
        r = o.n(i),
        n = o(23645),
        a = o.n(n),
        s = o(61667),
        l = o.n(s),
        c = new URL(o(70208), o.b),
        d = new URL(o(68367), o.b),
        p = a()(r()),
        h = l()(c),
        g = l()(d);
      p.push([
        e.id,
        'payment-loading-indicator{display:inline-block;width:100px;height:100px;opacity:0;transition:opacity .15s,visibility 0s .15s;visibility:hidden;position:relative}payment-loading-indicator.absolute{position:absolute;left:50%;top:50%;margin-left:-50px;margin-top:-50px}payment-loading-indicator:before{content:"";display:block;width:100%;height:100%;background:url(' +
          h +
          ') center/contain no-repeat;animation:payment-loading-indicator-spinner 1s linear infinite}payment-loading-indicator:after{content:"";display:block;width:50px;height:30px;background:url(' +
          g +
          ") center/contain no-repeat;position:absolute;left:50%;top:50%;margin-top:-15px;margin-left:-25px}payment-loading-indicator.loading{opacity:1;visibility:visible;transition-delay:0s}@keyframes payment-loading-indicator-spinner{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
        "",
      ]);
      const u = p;
    },
    "shared/resources/elements/payment-processing.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => s });
      var i = o(8081),
        r = o.n(i),
        n = o(23645),
        a = o.n(n)()(r());
      a.push([
        e.id,
        "payment-processing{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;opacity:0;visibility:hidden;transition:opacity .15s,visibility 0s .15s;z-index:9999}payment-processing.loading{opacity:1;visibility:visible;transition-delay:0s}payment-processing .wrapper{display:flex;flex-direction:column;justify-content:center;align-items:center}payment-processing payment-loading-indicator{margin-bottom:32px}payment-processing header{font-size:20px;line-height:34px;font-weight:600;color:rgba(255,255,255,.75);margin-bottom:5px;text-align:center}payment-processing sub{font-size:16px;line-height:24px;color:rgba(255,255,255,.3);text-align:center}payment-processing.modal{background:rgba(0,0,0,.8);position:fixed}payment-processing.modal .wrapper{border-radius:20px;width:100%;max-width:435px;min-height:300px;padding:20px;margin:20px;background:linear-gradient(0deg, var(--theme--background) 0%, var(--theme--secondary-background) 100%)}",
        "",
      ]);
      const s = a;
    },
    "shared/resources/elements/pro-badge.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => s });
      var i = o(8081),
        r = o.n(i),
        n = o(23645),
        a = o.n(n)()(r());
      a.push([
        e.id,
        "pro-badge{background-color:var(--theme--highlight);display:inline-block;font-weight:800;font-size:14px;text-transform:uppercase;color:#fff;line-height:20px;letter-spacing:.6px;padding:0 4px;border-radius:2.5px;min-width:0;text-rendering:geometricPrecision;background:linear-gradient(225deg, var(--color--brand-green) 0%, var(--color--pro) 100%);color:#fff;min-width:auto}@media(forced-colors: active){body:not(.override-contrast-mode) pro-badge{border:1px solid #fff}}pro-badge.small{line-height:14px;font-size:10px;letter-spacing:.4px;padding:0 3px}pro-badge.large{line-height:28px;font-size:20px;letter-spacing:.9px;padding:0 6px}",
        "",
      ]);
      const s = a;
    },
    "shared/resources/elements/range-input.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => s });
      var i = o(8081),
        r = o.n(i),
        n = o(23645),
        a = o.n(n)()(r());
      a.push([
        e.id,
        'range-input,.range-input{display:flex;position:relative;z-index:0;height:17px}range-input,range-input *,.range-input,.range-input *{cursor:pointer}range-input:after,.range-input:after{content:"";display:block;clear:both}range-input.disabled,.range-input.disabled{position:relative;z-index:0}range-input.disabled:before,.range-input.disabled:before{content:"";position:absolute;left:0;top:0;right:0;bottom:0;z-index:999;opacity:0;cursor:not-allowed}range-input.disabled *,.range-input.disabled *{pointer-events:none}range-input input[type=range],.range-input input[type=range]{-webkit-appearance:none;display:inline-block;background:rgba(0,0,0,0);width:100%;position:relative;z-index:1;margin:0;padding:0;height:17px}range-input input[type=range]::-webkit-slider-thumb,.range-input input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:17px;height:17px;background:#fff;border-radius:50%;margin:0;padding:0}range-input input[type=range]::-webkit-slider-runnable-track,.range-input input[type=range]::-webkit-slider-runnable-track{width:100%;height:17px;background:rgba(0,0,0,0);-webkit-appearance:none}range-input input[type=range]:focus,.range-input input[type=range]:focus{outline:none}range-input .input-wrapper,.range-input .input-wrapper{position:relative;flex:1;margin-right:10px;height:17px;min-width:0}range-input .upper,range-input .lower,.range-input .upper,.range-input .lower{display:block;height:8px;border-radius:4px;position:absolute;top:4.5px;z-index:1}range-input .lower,.range-input .lower{background:var(--theme--highlight);left:0}range-input .upper,.range-input .upper{right:0;width:100%;background:rgba(255,255,255,.2)}range-input label,.range-input label{font-size:11px;line-height:16px;text-transform:uppercase;font-weight:900;flex:0;position:relative;color:#fff;line-height:17px;margin-right:4px}range-input label .value,.range-input label .value{display:block;text-align:right;margin-top:.5px}range-input.label-first,.range-input.label-first{flex-direction:row-reverse}range-input.label-first .input-wrapper,.range-input.label-first .input-wrapper{margin-left:10px;margin-right:0}range-input.label-first label,.range-input.label-first label{margin-left:4px;margin-right:0}range-input.label-first label .value,.range-input.label-first label .value{text-align:left}',
        "",
      ]);
      const s = a;
    },
    "shared/resources/elements/selection-input.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => u });
      var i = o(8081),
        r = o.n(i),
        n = o(23645),
        a = o.n(n),
        s = o(61667),
        l = o.n(s),
        c = new URL(o(47254), o.b),
        d = new URL(o(57691), o.b),
        p = a()(r()),
        h = l()(c),
        g = l()(d);
      p.push([
        e.id,
        'selection-input{position:relative;width:100%;position:relative;display:block;min-width:0;min-height:30px}selection-input,selection-input *{cursor:pointer}selection-input.disabled{position:relative;z-index:0}selection-input.disabled:before{content:"";position:absolute;left:0;top:0;right:0;bottom:0;z-index:999;opacity:0;cursor:not-allowed}selection-input.disabled *{pointer-events:none}selection-input .selection-value{display:block;color:rgba(255,255,255,.9);padding:4px 9px 5px 9px;border:1px solid rgba(0,0,0,0);transition:color .15s,border-color .15s;position:relative;background:rgba(255,255,255,.05);border-radius:5px;height:30px;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;padding-top:3px;padding-right:25px;font-size:14px;line-height:21px;font-weight:500}selection-input .selection-value,selection-input .selection-value::placeholder{font-size:14px;line-height:21px;font-weight:500}selection-input .selection-value::placeholder{color:rgba(255,255,255,.3)}selection-input .selection-value:disabled{opacity:.5}selection-input .selection-value:focus{border-color:var(--theme--highlight);caret-color:var(--theme--highlight);color:#fff}selection-input .selection-value:focus+*{--input__label--color: rgba(255, 255, 255, 0.6)}selection-input .selection-options{width:100%;list-style:none;margin:0;padding:0;border-radius:5px;overflow-x:hidden;overflow-y:auto;max-height:200px;z-index:1;left:0;position:relative;top:-30px;background:#000;box-shadow:0 0 5px rgba(var(--theme--background--rgb), 0.5);transition:opacity .15s,background-color .15s,color .15s;opacity:var(--selection__options--opacity);pointer-events:var(--selection__options--pointer-events);transform:translateZ(0)}selection-input .selection-options::-webkit-scrollbar{width:7px;height:7px;background:rgba(255,255,255,.1);border-radius:10px;margin:10px}selection-input .selection-options::-webkit-scrollbar-thumb:window-inactive,selection-input .selection-options::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,.2);border-radius:99px;border:1px solid rgba(0,0,0,.2);background-clip:padding-box}selection-input .selection-options::-webkit-scrollbar-thumb:window-inactive:hover,selection-input .selection-options::-webkit-scrollbar-thumb:hover{background-color:rgba(255,255,255,.5)}selection-input .selection-options>*{font-size:13px;line-height:20px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;color:rgba(255,255,255,.6);padding:3px 27px;transition:color .15s;position:relative}selection-input .selection-options>*:hover{color:#fff;background:var(--theme--highlight)}selection-input .selection-options>*:hover:before{background:#fff !important}selection-input .selection-options>*.selected{color:#fff}selection-input .selection-options>*.selected:before{content:"";display:inline-flex;position:absolute;left:7px;top:7.5px;width:15px;height:11px;background:var(--theme--highlight);mask-image:url(' +
          h +
          ");-webkit-mask-box-image:url(" +
          h +
          ')}selection-input .wrapper{--selection--overflow: hidden;--selection__options--opacity: 0;--selection__options--pointer-events: none;overflow:var(--selection--overflow);width:100%;height:30px;position:relative}selection-input .wrapper:after{--input__icon--color: rgba(255, 255, 255, 0.4);position:absolute;right:0;top:0;height:100%;width:30px;display:inline-flex;align-items:center;justify-content:center;pointer-events:none;content:"";opacity:.4;background:url(' +
          g +
          ") center/11px no-repeat}selection-input .wrapper:after svg *{fill:var(--input__icon--color)}selection-input.opened .wrapper{--selection--overflow: visible;--selection__options--opacity: 1;--selection__options--pointer-events: all}",
        "",
      ]);
      const u = p;
    },
    "shared/resources/elements/toggle.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => s });
      var i = o(8081),
        r = o.n(i),
        n = o(23645),
        a = o.n(n)()(r());
      a.push([
        e.id,
        'toggle{display:inline-block;position:relative;z-index:0;height:20px}toggle,toggle *{cursor:pointer}toggle.disabled{position:relative;z-index:0}toggle.disabled:before{content:"";position:absolute;left:0;top:0;right:0;bottom:0;z-index:999;opacity:0;cursor:not-allowed}toggle.disabled *{pointer-events:none}toggle label{display:inline-block;width:54px;height:20px;background:rgba(255,255,255,.2);border-radius:10px;cursor:pointer;transition:background-color .15s;position:relative;overflow:hidden}@media(forced-colors: active){body:not(.override-contrast-mode) toggle label{border:1px solid #fff}}toggle label .handle{position:absolute;left:0;top:0;display:inline-block;height:20px;line-height:20px;width:40px;text-align:center;background:rgba(255,255,255,.5);border-radius:10px;text-transform:uppercase;font-size:12px;font-weight:900;color:#000;transition:left .15s,width .15s,background-color .15s}toggle label input{display:none}toggle label.checked .handle{background-color:var(--theme--highlight);width:33px;left:20px}',
        "",
      ]);
      const s = a;
    },
    "shared/resources/elements/tooltip.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => s });
      var i = o(8081),
        r = o.n(i),
        n = o(23645),
        a = o.n(n)()(r());
      a.push([
        e.id,
        ".theme-default tooltip.alert .tooltip .tooltip-content{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(var(--color--alert--rgb), 0.12), rgba(var(--color--alert--rgb), 0.12)) !important}.theme-purple-pro tooltip.alert .tooltip .tooltip-content{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(var(--color--alert--rgb), 0.12), rgba(var(--color--alert--rgb), 0.12)) !important}.theme-green-pro tooltip.alert .tooltip .tooltip-content{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(var(--color--alert--rgb), 0.12), rgba(var(--color--alert--rgb), 0.12)) !important}.theme-orange-pro tooltip.alert .tooltip .tooltip-content{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(var(--color--alert--rgb), 0.12), rgba(var(--color--alert--rgb), 0.12)) !important}.theme-pro tooltip.alert .tooltip .tooltip-content{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(var(--color--alert--rgb), 0.12), rgba(var(--color--alert--rgb), 0.12)) !important}tooltip.alert .tooltip [slot=content]{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(var(--color--alert--rgb), 0.12), rgba(var(--color--alert--rgb), 0.12)) !important}tooltip.alert .tooltip [slot=content],tooltip.alert .tooltip [slot=content] a{color:rgba(var(--color--alert--rgb), 0.9)}tooltip.alert .tooltip .tooltip-arrow{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(var(--color--alert--rgb), 0.12), rgba(var(--color--alert--rgb), 0.12)) !important}tooltip.info .tooltip .tooltip-content{max-width:300px;width:max-content}.custom-tooltip .tooltip [slot=content]{margin:0 !important;padding:0 !important;overflow:hidden;display:block !important}.tooltip{position:absolute;opacity:0;visibility:hidden;transition:visiblity 0s linear .15s,opacity .15s,transform .15s,margin .15s;z-index:99}.tooltip .tooltip-content{border:1px solid rgba(255,255,255,.05);border-radius:10px;position:relative;text-align:left;display:block}.theme-default .tooltip .tooltip-content{background:#11171d linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-purple-pro .tooltip .tooltip-content{background:#0b172a linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-green-pro .tooltip .tooltip-content{background:#1b1b1b linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-orange-pro .tooltip .tooltip-content{background:#161c24 linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-pro .tooltip .tooltip-content{background:#111 linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.tooltip .tooltip-content>*+*{margin-left:0}.tooltip [slot=content]{border-radius:10px;border:1px solid rgba(255,255,255,.05);padding:11px 15px;text-align:left;display:inline-flex;align-items:center;border:0 !important;position:relative;z-index:1}.theme-default .tooltip [slot=content]{background:#11171d linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-purple-pro .tooltip [slot=content]{background:#0b172a linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-green-pro .tooltip [slot=content]{background:#1b1b1b linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-orange-pro .tooltip [slot=content]{background:#161c24 linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-pro .tooltip [slot=content]{background:#111 linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.tooltip [slot=content]>*+*{margin-left:9px}.tooltip [slot=content],.tooltip [slot=content] a{font-size:14px;line-height:21px;line-height:19px;font-weight:500;color:rgba(255,255,255,.5)}.tooltip [slot=content] strong,.tooltip [slot=content] em{font-weight:700;color:#fff;font-style:normal}.tooltip [slot=content] p{margin:0;padding:0}.tooltip [slot=content] p+p{margin-top:10px}.tooltip .tooltip-arrow{display:block;width:20px;height:20px;position:absolute;border-radius:2px;border:1px solid rgba(255,255,255,.05);transform:rotate(45deg)}.theme-default .tooltip .tooltip-arrow{background:#11171d linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-purple-pro .tooltip .tooltip-arrow{background:#0b172a linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-green-pro .tooltip .tooltip-arrow{background:#1b1b1b linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-orange-pro .tooltip .tooltip-arrow{background:#161c24 linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-pro .tooltip .tooltip-arrow{background:#111 linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.tooltip.arrow-left-top{left:100%;top:calc(50% - 24px)}.tooltip.arrow-left-top .tooltip-arrow{left:-2px;top:10px}.tooltip.arrow-left-center{left:100%;top:50%}.tooltip.arrow-left-center .tooltip-arrow{left:-5px;top:50%;margin-top:-10px}.tooltip.arrow-right-top{right:100%;top:calc(50% - 24px)}.tooltip.arrow-right-top .tooltip-arrow{right:-5px;top:10px}.tooltip.arrow-top-center{top:100%;left:50%}.tooltip.arrow-top-center .tooltip-arrow{left:50%;top:-5px;margin-left:-10px}.tooltip.arrow-bottom-center{bottom:100%;left:50%}.tooltip.arrow-bottom-center .tooltip-arrow{left:50%;bottom:-5px;margin-left:-10px}.tooltip.arrow-top-left{top:100%;left:50%;margin-left:-25px}.tooltip.arrow-top-left .tooltip-arrow{left:14px;top:-5px}.tooltip.arrow-top-right{top:100%;right:50%;margin-right:-25px}.tooltip.arrow-top-right .tooltip-arrow{right:14px;top:-5px}*:hover>.tooltip:not(.hidden),*:hover>tooltip .tooltip:not(.hidden),.tooltip.visible{opacity:1;visibility:visible;transition-delay:0s}*:hover>.tooltip:not(.hidden).arrow-left-top,*:hover>.tooltip:not(.hidden).arrow-left-center,*:hover>tooltip .tooltip:not(.hidden).arrow-left-top,*:hover>tooltip .tooltip:not(.hidden).arrow-left-center,.tooltip.visible.arrow-left-top,.tooltip.visible.arrow-left-center{margin-left:10px}*:hover>.tooltip:not(.hidden).arrow-right-top,*:hover>tooltip .tooltip:not(.hidden).arrow-right-top,.tooltip.visible.arrow-right-top{margin-right:10px}*:hover>.tooltip:not(.hidden).arrow-top-center,*:hover>.tooltip:not(.hidden).arrow-top-left,*:hover>.tooltip:not(.hidden).arrow-top-right,*:hover>tooltip .tooltip:not(.hidden).arrow-top-center,*:hover>tooltip .tooltip:not(.hidden).arrow-top-left,*:hover>tooltip .tooltip:not(.hidden).arrow-top-right,.tooltip.visible.arrow-top-center,.tooltip.visible.arrow-top-left,.tooltip.visible.arrow-top-right{margin-top:10px}*:hover>.tooltip:not(.hidden).arrow-bottom-center,*:hover>tooltip .tooltip:not(.hidden).arrow-bottom-center,.tooltip.visible.arrow-bottom-center{margin-bottom:10px}",
        "",
      ]);
      const s = a;
    },
    "shared/resources/elements/back-link.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => a });
      var i = o(27091),
        r = o.n(i),
        n = new URL(o(24052), o.b);
      const a =
        '<template> <require from="./back-link.scss"></require> <span class="caret"><inline-svg src="' +
        r()(n) +
        '"></inline-svg></span> <span class="label"><slot></slot></span> </template> ';
    },
    "shared/resources/elements/close-button.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => a });
      var i = o(27091),
        r = o.n(i),
        n = new URL(o(27349), o.b);
      const a =
        '<template> <require from="./close-button.scss"></require> <i><inline-svg src="' +
        r()(n) +
        '"></inline-svg></i> </template> ';
    },
    "shared/resources/elements/feature-number.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => i });
      const i =
        '<template> <require from="./feature-number.scss"></require> <slot></slot> </template> ';
    },
    "shared/resources/elements/features.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => i });
      const i =
        '<template> <require from="./features.scss"></require> <require from="./info-tooltip"></require> <div repeat.for="feature of features" class="feature-tile ${feature}"> <h1> <span innerhtml.bind="`features.${feature}` | i18n | markdown"></span> <info-tooltip direction="top-center">${`features.${feature}_info` | i18n}</info-tooltip> </h1> <h2 innerhtml.bind="`features.${feature}_description` | i18n | markdown"></h2> </div> </template>';
    },
    "shared/resources/elements/horizontal-scroll-container.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => i });
      const i =
        '<template> <require from="./horizontal-scroll-container.scss"></require> <div class="overflow-fade__wrapper overflow-fade__wrapper--horizontal"> <div class="scroll-wrapper" overflow-fade="horizontal" ref="scrollWrapperEl"> <slot></slot> </div> </div> <button class="scroll-left" ref="scrollLeftEl" mouseenter.trigger="scrollLeft()" mouseleave.trigger="stopScrolling()" tabindex="-1"></button> <button class="scroll-right" ref="scrollRightEl" mouseenter.trigger="scrollRight()" mouseleave.trigger="stopScrolling()" tabindex="-1"></button> </template> ';
    },
    "shared/resources/elements/info-tooltip.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => a });
      var i = o(27091),
        r = o.n(i),
        n = new URL(o(23717), o.b);
      const a =
        '<template class="${dark ? \'dark\' : \'\'}" mouseover.delegate="show()" mouseout.delegate="visible = false"> <require from="./info-tooltip.scss"></require> <require from="./tooltip"></require> <span class="icon"> <inline-svg src="' +
        r()(n) +
        '"></inline-svg> </span> <tooltip direction.bind="direction" open.bind="visible" ref="tooltip" class="info" ignore-click-outside.bind="true"> <div slot="content"> <slot></slot> </div> </tooltip> </template> ';
    },
    "shared/resources/elements/loading-indicator.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => i });
      const i =
        '<template> <require from="./loading-indicator.scss"></require> <svg> <circle cx="15" cy="15" r="10" fill="none" stroke-width="1" stroke-miterlimit="10"></circle> </svg> </template>';
    },
    "shared/resources/elements/payment-loading-indicator.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => i });
      const i =
        "<template class=\"${loading ? 'loading' : ''} ${absolute ? 'absolute' : ''} allow-looping-animation\"> <require from=\"./payment-loading-indicator.scss\"></require> </template> ";
    },
    "shared/resources/elements/payment-processing.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => i });
      const i =
        "<template class=\"${modal ? 'modal' : ''} ${loading ? 'loading' : ''}\"> <require from=\"./payment-processing.scss\"></require> <require from=\"./payment-loading-indicator\"></require> <div class=\"wrapper\"> <payment-loading-indicator loading.bind=\"loading\" absolute.bind=\"false\"></payment-loading-indicator> <header>${'payment_processing.we_are_processing_your_payment' | i18n}</header> <sub>${'payment_processing.thanks_for_your_patience' | i18n}</sub> </div> </template> ";
    },
    "shared/resources/elements/pro-badge.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => i });
      const i =
        "<template> <require from=\"./pro-badge.scss\"></require> ${'pro_badge.pro' | i18n} </template> ";
    },
    "shared/resources/elements/range-input.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => i });
      const i =
        '<template class="${disabled ? \'disabled\' : \'\'}"> <require from="./range-input.scss"></require> <div class="input-wrapper"> <div class="lower" css.bind="{width: lowerWidth}"></div> <div class="upper"></div> <input type="range" min="0" max.bind="maxIndex" step="1" value.bind="index | i18nNativeNumber:{useGrouping: false}" keyup.trigger="onInputKeyUp($event)" disabled.bind="disabled" ref="rangeInput" haptic-touch> </div> <label> <div class="value">${displayValue | i18nNumber}</div> </label> </template> ';
    },
    "shared/resources/elements/selection-input.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => i });
      const i =
        '<template class="${opened ? \'opened\' : \'\'} ${disabled ? \'disabled\' : \'\'}"> <require from="./selection-input.scss"></require> <div class="wrapper"> <div click.delegate="open()" class="selection-value" tabindex.bind="disabled ? -1 : 0"> <template if.bind="enableI18n">${(labels[value] || value) | i18n}</template> <template if.bind="!enableI18n">${labels[value] || value || \'---\'}</template> </div> <ul class="selection-options"> <li repeat.for="option of options" click.delegate="setValue(option)" class="${value == option ? \'selected\' : \'\'}" tabindex.bind="disabled || !opened ? -1 : 0"> <template if.bind="enableI18n">${(labels[option] || option) | i18n}</template> <template if.bind="!enableI18n">${labels[option] || option}</template> </li> </ul> </div> </template> ';
    },
    "shared/resources/elements/toggle.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => i });
      const i =
        '<template bindable="on, off, value, disabled, change" class="${disabled ? \'disabled\' : \'\'}"> <require from="./toggle.scss"></require> <label class="${value ? \'checked\' : \'\'}" haptic-touch tabindex.bind="disabled ? -1 : 0"> <span class="handle">${(value ? on || \'toggle.on\' : off || \'toggle.off\') | i18n | maxLengthReplace:3:\'|\'}</span> <input type="checkbox" checked.bind="value" change.delegate="change && change({value: $event.target.checked})"> </label> </template> ';
    },
    "shared/resources/elements/tooltip.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => i });
      const i =
        '<template> <require from="./tooltip.scss"></require> <require from="../custom-attributes/close-if-click-outside"></require> <div class="tooltip arrow-${direction} ${(clickToOpen || open != undefined) ? open ? \'visible\' : \'hidden\' : \'\'}" close-if-click-outside.two-way="closeIfClickOutsideOpen"> <div class="tooltip-content"> <i class="tooltip-arrow"></i> <slot name="content"></slot> </div> </div> </template> ';
    },
    "shared/markdown/index": (e, t, o) => {
      o.r(t),
        o.d(t, {
          MarkdownValueConverter: () => n.MarkdownValueConverter,
          configure: () => a,
        }),
        o("aurelia-framework");
      var i = o(9980),
        r = o.n(i),
        n = o("shared/markdown/value-converter");
      function a(e, t) {
        e.container.registerHandler(
          r(),
          (function (e) {
            let t;
            return () => (e && ((t = e()), (e = void 0)), t);
          })(() =>
            (function (e) {
              const t = r()(e ?? { html: !1, breaks: !0 }),
                o = t.validateLink.bind(t);
              return (
                (t.validateLink = (e) =>
                  /^data:image\/svg\+xml;/.test(e) || o(e)),
                t
              );
            })(t)
          )
        ),
          e.globalResources(["./value-converter"]);
      }
    },
    "shared/markdown/value-converter": (e, t, o) => {
      o.r(t), o.d(t, { MarkdownValueConverter: () => s });
      var i = o(70655),
        r = o("aurelia-framework"),
        n = o(9980),
        a = o.n(n);
      let s = class {
        #e;
        constructor(e) {
          this.#e = e;
        }
        toView(e, t = !0) {
          return "string" == typeof e
            ? ((e = e.replace(/\\n/g, "\n")),
              (t ? this.#e.renderInline(e) : this.#e.render(e)).replace(
                /\n/g,
                "<br>"
              ))
            : "";
        }
      };
      s = (0, i.gn)(
        [(0, r.autoinject)(), (0, i.w6)("design:paramtypes", [a()])],
        s
      );
    },
    "shared/pusher/index": (e, t, o) => {
      o.r(t),
        o.d(t, {
          Channel: () => n,
          PresenceChannel: () => a,
          Pusher: () => s,
          configure: () => l,
        });
      var i = o(86606),
        r = o(339);
      class n {
        #t;
        #o;
        constructor(e, t) {
          (this.connection = e),
            (this.events = new r.yM()),
            (this.#o = new r.K4()),
            (this.#t = t),
            this.connection.channels.push(this),
            (this.name = t.name);
        }
        is(e) {
          return this.name.startsWith("private-")
            ? this.name.substring("private-".length) === e
            : this.name === e;
        }
        send(e, t) {
          this.#t.trigger(e, t ?? {});
        }
        listen(e, t) {
          this.#t.bind(e, t);
          const o = (0, r.JD)(() => this.#t.unbind(e, t));
          return this.#o.push(o), o;
        }
        listenAll(e) {
          this.#t.bind_global(e);
          const t = (0, r.JD)(() => this.#t.unbind_global(e));
          return this.#o.push(t), t;
        }
        clone() {
          return new n(this.connection, this.#t);
        }
        dispose() {
          this.close();
        }
        close() {
          if (!this.events) return;
          this.#o.dispose(), (this.#o = null);
          const e = this.connection.channels.findIndex((e) => e === this);
          -1 !== e && this.connection.channels.splice(e, 1),
            0 === this.connection.channels.length
              ? this.connection.disconnect()
              : this.connection.channels.some((e) => e.name === this.name) ||
                this.#t.pusher.unsubscribe(this.name),
            this.events.publish("close"),
            this.events.dispose(),
            (this.events = null);
        }
        onClosed(e) {
          return this.events.subscribeOnce("close", e);
        }
      }
      class a extends n {
        #i;
        constructor(e, t) {
          super(e, t),
            (this.#i = t),
            (this.me = t.members.me),
            (this.members = []),
            t.members.each((e) => this.members.push(e)),
            this.listen("pusher:member_added", (e) => {
              this.members.push(e), this.events.publish("member-added", e);
            }),
            this.listen("pusher:member_removed", (e) => {
              const t = this.members.findIndex((t) => t.id === e.id);
              if (-1 !== t) {
                const e = this.members[t];
                this.members.splice(t, 1),
                  this.events.publish("member-removed", e);
              }
            });
        }
        is(e) {
          return this.name.substring("presence-".length) === e;
        }
        onMemberAdded(e) {
          return this.events.subscribe("member-added", e);
        }
        onMemberRemoved(e) {
          return this.events.subscribe("member-removed", e);
        }
        clone() {
          return new a(this.connection, this.#i);
        }
      }
      class s {
        #r;
        #n;
        #a;
        #s;
        constructor(e, t) {
          (this.channels = []),
            (this.#s = new Map()),
            (this.#r = e),
            (this.#n = t);
        }
        #l() {
          return this.#a ? this.#a.config : this.#n;
        }
        get connected() {
          return !!this.#a;
        }
        setAuthHeader(e) {
          const t = this.#l();
          ("object" == typeof t.auth && null !== t.auth) || (t.auth = {}),
            ("object" == typeof t.auth.headers && null !== t.auth.headers) ||
              (t.auth.headers = {}),
            (t.auth.headers.Authorization = e);
        }
        joinPrivate(e) {
          return this.join(`private-${e}`);
        }
        joinPresence(e) {
          return this.join(`presence-${e}`);
        }
        async join(e) {
          this.#a || (this.#a = new i(this.#r, this.#n));
          const t = this.channels.find((t) => t.name === e);
          if (t) return t.clone();
          const o = this.#s.get(e);
          if (o) return (await o).clone();
          const r = new Promise((t, o) => {
            const i = () => {
                s(),
                  t(
                    e.startsWith("presence-") ? new a(this, c) : new n(this, c)
                  );
              },
              r = (e) => {
                s(), o(e);
              },
              s = () => {
                this.#s.delete(e),
                  l.unbind("error", r),
                  c.unbind("pusher:subscription_succeeded", i),
                  c.unbind("pusher:subscription_error", r);
              },
              l = this.#a.connection;
            l.bind("error", r);
            const c = this.#a.subscribe(e);
            c.bind("pusher:subscription_succeeded", i),
              c.bind("pusher:subscription_error", r);
          });
          return this.#s.set(e, r), await r;
        }
        disconnect() {
          if (this.#a) {
            const e = this.#a.config.auth?.headers?.Authorization;
            this.#a.disconnect(),
              (this.#a = null),
              (this.channels = []),
              this.setAuthHeader(e);
          }
        }
      }
      function l(e, t) {
        e.container.registerInstance(s, new s(t.key, t.options));
      }
    },
    "shared/resources/custom-attributes/close-if-click-outside": (e, t, o) => {
      o.r(t), o.d(t, { CloseIfClickOutsideCustomAttribute: () => n });
      var i = o(70655),
        r = o("aurelia-framework");
      let n = class {
        #c;
        constructor(e) {
          (this.#c = e),
            (this.closeIfClickOutside = this.closeIfClickOutside.bind(this));
        }
        unbind() {
          document.removeEventListener("click", this.closeIfClickOutside);
        }
        valueChanged() {
          this.value
            ? document.addEventListener("click", this.closeIfClickOutside)
            : document.removeEventListener("click", this.closeIfClickOutside);
        }
        closeIfClickOutside(e) {
          if (!document.querySelector(".app-layout")?.contains(e.target))
            return;
          let t = e.target;
          if (!this.#c.contains(t)) {
            for (; t.parentNode; ) {
              if (((t = t.parentNode), 11 === t.nodeType)) return;
              if (
                this.ignoreSelector &&
                1 === t.nodeType &&
                t.matches(this.ignoreSelector)
              )
                return;
            }
            this.value = !1;
          }
        }
      };
      (0, i.gn)(
        [
          (0, r.bindable)({ primaryProperty: !0 }),
          (0, i.w6)("design:type", Boolean),
        ],
        n.prototype,
        "value",
        void 0
      ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", String)],
          n.prototype,
          "ignoreSelector",
          void 0
        ),
        (n = (0, i.gn)(
          [
            (0, r.inject)(Element),
            (0, r.noView)(),
            (0, i.w6)("design:paramtypes", [Element]),
          ],
          n
        ));
    },
    "shared/resources/elements/back-link": (e, t, o) => {
      o.r(t), o.d(t, { BackLink: () => i });
      class i {}
    },
    "shared/resources/elements/close-button": (e, t, o) => {
      o.r(t), o.d(t, { CloseButton: () => i });
      class i {}
    },
    "shared/resources/elements/feature-number": (e, t, o) => {
      o.r(t), o.d(t, { FeatureNumber: () => i });
      class i {}
    },
    "shared/resources/elements/features": (e, t, o) => {
      o.r(t), o.d(t, { Features: () => n });
      var i = o(70655),
        r = o("aurelia-framework");
      class n {
        constructor() {
          this.features = [
            "save_cheats",
            "overlay",
            "remote_app",
            "interactive_controls",
          ];
        }
      }
      (0, i.gn)(
        [r.bindable, (0, i.w6)("design:type", Object)],
        n.prototype,
        "features",
        void 0
      );
    },
    "shared/resources/elements/horizontal-scroll-container": (e, t, o) => {
      o.r(t), o.d(t, { HorizontalScrollContainer: () => n });
      var i = o(70655),
        r = o("aurelia-framework");
      let n = class {
        #c;
        #d;
        #p;
        #h;
        constructor(e) {
          (this.#c = e),
            (this.initialize = this.initialize.bind(this)),
            (this.scroll = this.scroll.bind(this)),
            (this.scrollRight = this.scrollRight.bind(this)),
            (this.scrollLeft = this.scrollLeft.bind(this)),
            (this.stopScrolling = this.stopScrolling.bind(this));
        }
        attached() {
          this.scrollWrapperEl.addEventListener("scroll", this.initialize),
            (this.#h = new ResizeObserver(this.initialize)),
            this.#h.observe(this.#c),
            this.initialize();
        }
        detached() {
          this.scrollWrapperEl.removeEventListener("scroll", this.initialize),
            clearInterval(this.#p),
            this.#h.disconnect();
        }
        initialize() {
          this.scrollLeftEl.classList.toggle(
            "hide",
            this.scrollWrapperEl.scrollLeft <= 0
          ),
            this.scrollRightEl.classList.toggle(
              "hide",
              this.scrollWrapperEl.scrollLeft >
                this.scrollWrapperEl.scrollWidth - this.#c.offsetWidth - 1
            );
          const e = this.#c.querySelector(".scroll-wrapper").children,
            t = this.#c.offsetWidth;
          let o = 0;
          for (const t of e) o += t.offsetWidth;
          this.#c.classList.toggle("scrollable", o > t);
        }
        scrollLeft() {
          (this.#d = -1), (this.#p = setInterval(this.scroll, 5));
        }
        scrollRight() {
          (this.#d = 1), (this.#p = setInterval(this.scroll, 5));
        }
        scroll() {
          this.scrollWrapperEl.scrollBy(2 * this.#d, 0);
        }
        stopScrolling() {
          clearInterval(this.#p);
        }
        reset() {
          this.scrollWrapperEl && (this.scrollWrapperEl.scrollLeft = 0);
        }
      };
      n = (0, i.gn)(
        [(0, r.autoinject)(), (0, i.w6)("design:paramtypes", [Element])],
        n
      );
    },
    "shared/resources/elements/info-tooltip": (e, t, o) => {
      o.r(t), o.d(t, { InfoTooltip: () => n });
      var i = o(70655),
        r = o("aurelia-framework");
      let n = class {
        #g;
        #c;
        constructor(e) {
          (this.direction = "top-center"), (this.visible = !1), (this.#c = e);
        }
        show() {
          if (((this.visible = !0), this.detach && this.#g)) {
            const e = this.#c.getBoundingClientRect();
            (this.#g.style.position = "fixed"),
              (this.#g.style.left = `${e.left}px`),
              (this.#g.style.top = `${e.top}px`),
              (this.#g.style.width = `${e.width}px`),
              (this.#g.style.height = `${e.height}px`),
              (this.#g.style.pointerEvents = "none");
          }
        }
        attached() {
          this.detach
            ? ((this.#g = document.createElement("DIV")),
              document.querySelector("router-view").appendChild(this.#g),
              this.#g.appendChild(this.tooltip))
            : (this.#g = this.#c);
        }
        detached() {
          this.detach &&
            (this.#g.parentElement.removeChild(this.#g),
            (this.#g = null),
            this.#c.appendChild(this.tooltip));
        }
      };
      (0, i.gn)(
        [r.bindable, (0, i.w6)("design:type", Boolean)],
        n.prototype,
        "detach",
        void 0
      ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Boolean)],
          n.prototype,
          "dark",
          void 0
        ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", String)],
          n.prototype,
          "direction",
          void 0
        ),
        (n = (0, i.gn)(
          [(0, r.inject)(Element), (0, i.w6)("design:paramtypes", [Element])],
          n
        ));
    },
    "shared/resources/elements/loading-indicator": (e, t, o) => {
      o.r(t), o.d(t, { LoadingIndicator: () => i });
      class i {}
    },
    "shared/resources/elements/payment-loading-indicator": (e, t, o) => {
      o.r(t), o.d(t, { PaymentLoadingIndicator: () => n });
      var i = o(70655),
        r = o("aurelia-framework");
      class n {
        constructor() {
          this.absolute = !0;
        }
      }
      (0, i.gn)(
        [r.bindable, (0, i.w6)("design:type", Boolean)],
        n.prototype,
        "loading",
        void 0
      ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Boolean)],
          n.prototype,
          "absolute",
          void 0
        );
    },
    "shared/resources/elements/payment-processing": (e, t, o) => {
      o.r(t), o.d(t, { PaymentProcessing: () => n });
      var i = o(70655),
        r = o("aurelia-framework");
      class n {}
      (0, i.gn)(
        [r.bindable, (0, i.w6)("design:type", Boolean)],
        n.prototype,
        "loading",
        void 0
      ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Boolean)],
          n.prototype,
          "modal",
          void 0
        );
    },
    "shared/resources/elements/pro-badge": (e, t, o) => {
      o.r(t), o.d(t, { ProBadge: () => i });
      class i {}
    },
    "shared/resources/elements/range-input": (e, t, o) => {
      o.r(t), o.d(t, { RangeInput: () => l });
      var i = o(70655),
        r = o("aurelia-framework"),
        n = o(339);
      const a = new Set([
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "PageUp",
        "PageDown",
      ]);
      function s(e) {
        return "string" == typeof e ? parseFloat(e) : e;
      }
      class l {
        constructor() {
          (this.#u = !1), (this.#b = !1), (this.index = "0");
        }
        #u;
        #b;
        #f;
        get maxIndex() {
          return Math.floor((s(this.max) - s(this.min)) / this.#m());
        }
        #m() {
          return s(this.step) || 1;
        }
        #v() {
          return Math.min(s(this.max), Math.max(0, s(this.min)));
        }
        get lowerWidth() {
          const e = (parseInt(this.index ?? "0", 10) / this.maxIndex) * 100,
            t = (17 * (100 - e)) / 100;
          return Number.isNaN(e) || Number.isNaN(t)
            ? "0px"
            : `calc(${e}% + ${t}px)`;
        }
        attached() {
          this.#f = new n.K4([
            (0, n.Q7)(this.rangeInput, "mouseup", (e) =>
              this.onInputChange(e.target.value)
            ),
            (0, n.Q7)(this.rangeInput, "touchend", (e) =>
              this.onInputChange(e.target.value)
            ),
          ]);
        }
        detached() {
          this.#f.dispose();
        }
        bind() {
          (this.#b = !0),
            this.valueChanged(this.value),
            (this.displayValue = this.#w(s(this.value) ?? this.#v()));
        }
        indexChanged(e) {
          this.#b &&
            (this.#u
              ? (this.#u = !1)
              : (this.displayValue = this.#w(this.#x(e))));
        }
        valueChanged(e) {
          if (!this.#b) return;
          (e = s(e) ?? this.#v()), (this.displayValue = this.#w(e));
          const t = this.#y(e).toString();
          t !== this.index && ((this.#u = !0), (this.index = t));
        }
        onInputChange(e) {
          const t = parseFloat(this.#w(this.#x(e)));
          this.change ? this.change({ value: t }) : (this.value = t);
        }
        onInputKeyUp(e) {
          a.has(e.key) && this.onInputChange(e.target.value);
        }
        #x(e) {
          const t = parseInt(e ?? "0", 10);
          return t === this.maxIndex
            ? s(this.max)
            : Math.min(s(this.max), s(this.min) + t * this.#m());
        }
        #y(e) {
          if ("number" != typeof e) return 0;
          const t = this.#m();
          return e - t < this.min
            ? 0
            : e + t > this.max
            ? this.maxIndex
            : Math.round((e - s(this.min)) / t);
        }
        #w(e) {
          const t = this.#m().toString(),
            o = t.indexOf(".");
          return -1 === o ? e.toString() : e.toFixed(t.length - o - 1);
        }
      }
      (0, i.gn)(
        [
          (0, r.bindable)({ defaultBindingMode: r.bindingMode.twoWay }),
          (0, i.w6)("design:type", Object),
        ],
        l.prototype,
        "value",
        void 0
      ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Object)],
          l.prototype,
          "min",
          void 0
        ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Object)],
          l.prototype,
          "max",
          void 0
        ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Object)],
          l.prototype,
          "step",
          void 0
        ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Boolean)],
          l.prototype,
          "disabled",
          void 0
        ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Function)],
          l.prototype,
          "change",
          void 0
        ),
        (0, i.gn)(
          [r.observable, (0, i.w6)("design:type", String)],
          l.prototype,
          "index",
          void 0
        ),
        (0, i.gn)(
          [
            (0, r.computedFrom)("min", "max", "step"),
            (0, i.w6)("design:type", Number),
            (0, i.w6)("design:paramtypes", []),
          ],
          l.prototype,
          "maxIndex",
          null
        ),
        (0, i.gn)(
          [
            (0, r.computedFrom)("index", "min", "max", "step"),
            (0, i.w6)("design:type", String),
            (0, i.w6)("design:paramtypes", []),
          ],
          l.prototype,
          "lowerWidth",
          null
        );
    },
    "shared/resources/elements/selection-input": (e, t, o) => {
      o.r(t), o.d(t, { SelectionInput: () => n });
      var i = o(70655),
        r = o("aurelia-framework");
      let n = class {
        #c;
        constructor(e) {
          (this.enableI18n = !0),
            (this.openInitially = !1),
            (this.opened = !1),
            (this.#c = e),
            (this.closeIfClickOutside = this.closeIfClickOutside.bind(this));
        }
        bind() {
          this.openInitially && this.open();
        }
        open() {
          (this.opened = !0),
            document.addEventListener("click", this.closeIfClickOutside);
        }
        close() {
          (this.opened = !1),
            document.removeEventListener("click", this.closeIfClickOutside);
        }
        closeIfClickOutside(e) {
          this.#c.contains(e.target) || this.close();
        }
        setValue(e) {
          (this.value = e),
            (this.opened = !1),
            this.onValueChanged && this.onValueChanged(e);
        }
        detached() {
          this.close();
        }
      };
      (0, i.gn)(
        [r.bindable, (0, i.w6)("design:type", String)],
        n.prototype,
        "value",
        void 0
      ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Array)],
          n.prototype,
          "options",
          void 0
        ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Object)],
          n.prototype,
          "labels",
          void 0
        ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Boolean)],
          n.prototype,
          "disabled",
          void 0
        ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Boolean)],
          n.prototype,
          "enableI18n",
          void 0
        ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Boolean)],
          n.prototype,
          "openInitially",
          void 0
        ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Function)],
          n.prototype,
          "onValueChanged",
          void 0
        ),
        (n = (0, i.gn)(
          [
            (0, r.inject)(Element),
            (0, i.w6)("design:paramtypes", [HTMLElement]),
          ],
          n
        ));
    },
    "shared/resources/elements/tooltip": (e, t, o) => {
      o.r(t), o.d(t, { Tooltip: () => n });
      var i = o(70655),
        r = o("aurelia-framework");
      let n = class {
        #c;
        constructor(e) {
          (this.open = void 0),
            (this.clickToOpen = !1),
            (this.enableClickOutside = !0),
            (this.ignoreClickOutside = !1),
            (this.#c = e);
        }
        get closeIfClickOutsideOpen() {
          return (
            !(this.ignoreClickOutside || !this.enableClickOutside) && this.open
          );
        }
        set closeIfClickOutsideOpen(e) {
          this.enableClickOutside && (this.open = e);
        }
        attached() {
          ("top-center" !== this.direction &&
            "bottom-center" !== this.direction) ||
            setTimeout(() => {
              const e = this.#c.querySelector(".tooltip"),
                t = e.getBoundingClientRect().width;
              e.style.marginLeft = -t / 2 + "px";
            }, 200),
            ("left-center" !== this.direction &&
              "right-center" !== this.direction) ||
              setTimeout(() => {
                const e = this.#c.querySelector(".tooltip"),
                  t = e.getBoundingClientRect().height;
                e.style.marginTop = -t / 2 + "px";
              }, 200);
        }
      };
      (0, i.gn)(
        [r.bindable, (0, i.w6)("design:type", String)],
        n.prototype,
        "direction",
        void 0
      ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", String)],
          n.prototype,
          "title",
          void 0
        ),
        (0, i.gn)(
          [
            (0, r.bindable)({ defaultBindingMode: r.bindingMode.twoWay }),
            (0, i.w6)("design:type", Boolean),
          ],
          n.prototype,
          "open",
          void 0
        ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Boolean)],
          n.prototype,
          "clickToOpen",
          void 0
        ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Boolean)],
          n.prototype,
          "enableClickOutside",
          void 0
        ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Boolean)],
          n.prototype,
          "ignoreClickOutside",
          void 0
        ),
        (0, i.gn)(
          [
            (0, r.computedFrom)("enableClickOutside", "open"),
            (0, i.w6)("design:type", Boolean),
            (0, i.w6)("design:paramtypes", [Boolean]),
          ],
          n.prototype,
          "closeIfClickOutsideOpen",
          null
        ),
        (n = (0, i.gn)(
          [(0, r.inject)(Element), (0, i.w6)("design:paramtypes", [Element])],
          n
        ));
    },
    93082: (e, t, o) => {
      o.d(t, { b: () => h, g: () => p });
      var i = o(56158),
        r = o(45437),
        n = o(38595),
        a = o(56737),
        s = o(62546),
        l = o(41931);
      const c = (e) => e.state,
        d = { selectors: { state: c }, setup: "bind", teardown: "unbind" };
      function p(...e) {
        return (t) => t.state.pipe((0, s.j)(...e), (0, l.x)());
      }
      function h(e) {
        const t = i.W2.instance.get(r.yh),
          o =
            "function" == typeof e || void 0 === e
              ? { ...d, selectors: { state: e || c } }
              : { ...d, ...e };
        function s(e) {
          const o = e(t);
          return o instanceof n.y ? o : t.state;
        }
        return (e) => {
          const t = e.prototype[o.setup];
          e.prototype[o.setup] = function () {
            (this._bindCalled = !1),
              (this._stateSubscriptions = Object.keys(o.selectors).map((e) =>
                s(o.selectors[e]).subscribe((t) => {
                  const o = this[e];
                  if (((this[e] = t), this._bindCalled)) {
                    "propertyChanged" in this && this.propertyChanged(e, t, o);
                    const i = `${e}Changed`;
                    i in this && this[i](t, o);
                  }
                })
              ));
            try {
              if (t) return t.apply(this, arguments);
            } finally {
              this._bindCalled = !0;
            }
          };
          const i = e.prototype[o.teardown];
          e.prototype[o.teardown] = function () {
            if (
              (this._stateSubscriptions &&
                Array.isArray(this._stateSubscriptions) &&
                this._stateSubscriptions.forEach((e) => {
                  e instanceof a.w && !1 === e.closed && e.unsubscribe();
                }),
              (this._bindCalled = !1),
              i)
            )
              return i.apply(this, arguments);
          };
        };
      }
    },
    "shared/store/index": (e, t, o) => {
      o.r(t), o.d(t, { configure: () => a });
      var i = o(45437),
        r = o(56449),
        n = o(56155);
      function a(e, t) {
        const o = (function (e) {
          let t;
          try {
            const o = localStorage.getItem(e.storageKey);
            if ("string" == typeof o) {
              const e = JSON.parse(o);
              "object" == typeof e &&
                null !== e &&
                "number" == typeof e.stateVersion &&
                (t = e);
            }
          } catch {}
          return (function (e, t, o) {
            let i = !1;
            try {
              for (; e && e.stateVersion < o.length; )
                (i = !0), (e = o[e.stateVersion](e));
            } catch {
              e = null;
            }
            return {
              state: e ?? { ...t, stateVersion: o.length },
              migrated: i,
            };
          })(t ?? e.getFallbackState() ?? null, e.initialState, e.migrations);
        })(t);
        o.migrated && s(o.state, t.storageKey);
        const a = new i.yh(o.state, {
          logDispatchedActions: t.debug,
          logDefinitions: { dispatchedActions: i.in.debug },
        });
        let l;
        e.container.registerInstance(i.yh, a),
          t.debug &&
            (a.state.subscribe((e) => (window.state = e)),
            a.registerMiddleware(i.E0, i.Pt.After, { logType: "debug" })),
          Object.entries(t.actions).forEach(([e, t]) => a.registerAction(e, t)),
          a.state
            .pipe((0, r.T)(1), (0, n.b)(2e3))
            .subscribe((e) => s(e, t.storageKey)),
          a.state.subscribe((e) => (l = e)),
          window.addEventListener("unload", () => {
            (t.debug && !localStorage.getItem(t.storageKey)) ||
              s(l, t.storageKey);
          });
      }
      function s(e, t) {
        localStorage.setItem(t, JSON.stringify(e));
      }
    },
    39431: (e, t, o) => {
      o.d(t, { s: () => r });
      var i = o(41931);
      function r(...e) {
        return (0, i.x)((t, o) => e.every((e) => t[e] === o[e]));
      }
    },
    66302: (e, t, o) => {
      o.d(t, { K: () => i });
      const i = Object.freeze(function () {});
    },
    54934: (e, t, o) => {
      o.d(t, { Ax: () => c, RR: () => d, _Q: () => l, jc: () => s });
      var i = o(69157),
        r = o(29080),
        n = o(31389),
        a = o(82633);
      function s(e, t) {
        return (0, i.Z)(t, e);
      }
      function l(e, t) {
        return (0, r.Z)(t, e);
      }
      function c(e, t) {
        return (0, n.Z)(t, e);
      }
      function d(e, t) {
        return (0, a.Z)(t, e);
      }
    },
    51722: (e, t, o) => {
      function i(e, t) {
        return 0 != (e & t);
      }
      function r(e, t) {
        return t.some((t) => 0 != (e & t));
      }
      o.d(t, { EB: () => r, yE: () => i });
    },
    "shared/utility/index": (e, t, o) => {
      o.r(t), o.d(t, { configure: () => a });
      var i = o(6778),
        r =
          (o("aurelia-framework"),
          o("shared/utility/resources/elements/inline-svg")),
        n = o(99087);
      function a(e, t) {
        e.globalResources([
          "./resources/attributes/fallback-src",
          "./resources/attributes/overflow-fade",
          "./resources/elements/inline-svg",
          "./resources/value-converters/platform",
          "./resources/value-converters/string",
        ]),
          setInterval(() => (0, i.M_)(n.k), 6e4),
          t?.debug && (r.InlineSvgCustomElement.debug = !0);
      }
    },
    86725: (e, t, o) => {
      o.d(t, { L: () => r });
      var i = o("aurelia-logging-console");
      o(1015);
      class r extends i.ConsoleAppender {
        #k;
        constructor(e) {
          super(), (this.#k = e);
        }
        #C(e) {
          return !this.#k.includes(e.id);
        }
        debug(e, ...t) {
          this.#C(e) && super.debug(e, ...t);
        }
        info(e, ...t) {
          this.#C(e) && super.info(e, ...t);
        }
        warn(e, ...t) {
          this.#C(e) && super.warn(e, ...t);
        }
        error(e, ...t) {
          this.#C(e) && super.error(e, ...t);
        }
      }
    },
    "shared/utility/resources/attributes/fallback-src": (e, t, o) => {
      o.r(t), o.d(t, { FallbackSrcCustomAttribute: () => a });
      var i = o(70655),
        r = o("aurelia-framework"),
        n = o(339);
      let a = class {
        #c;
        #f;
        constructor(e) {
          this.#c = e;
        }
        attached() {
          this.#f = (0, n.Q7)(this.#c, "error", () => {
            this.value && (this.#c.src = this.value);
          });
        }
        detached() {
          this.#f.dispose(), (this.#f = null);
        }
      };
      a = (0, i.gn)(
        [
          (0, r.inject)(Element),
          (0, r.noView)(),
          (0, i.w6)("design:paramtypes", [HTMLImageElement]),
        ],
        a
      );
    },
    "shared/utility/resources/attributes/overflow-fade": (e, t, o) => {
      o.r(t), o.d(t, { OverflowFadeCustomAttribute: () => s });
      var i = o(70655),
        r = o("aurelia-framework");
      const n = new ResizeObserver((e) =>
          e.forEach((e) => e.target.au["overflow-fade"].viewModel.update())
        ),
        a = new MutationObserver((e) =>
          e.forEach((e) => e.target.au["overflow-fade"].viewModel.update())
        );
      let s = class {
        #c;
        #_;
        #I;
        constructor(e) {
          (this.#_ = !1),
            (this.#c = e),
            (this.update = this.update.bind(this)),
            (this.#I = this.#z.bind(this));
        }
        bind() {
          n.observe(this.#c),
            a.observe(this.#c, { childList: !0 }),
            this.#c.addEventListener("scroll", this.update);
        }
        unbind() {
          n.unobserve(this.#c),
            a.disconnect(),
            this.#c.removeEventListener("scroll", this.update);
        }
        update() {
          this.#_ || ((this.#_ = !0), window.requestAnimationFrame(this.#I));
        }
        #z() {
          if ("horizontal" === this.value) {
            const e = this.#c;
            e.parentElement.classList.toggle(
              "overflow-fade-left",
              e.scrollLeft > 0
            ),
              e.parentElement.classList.toggle(
                "overflow-fade-right",
                e.scrollLeft + e.clientWidth < e.scrollWidth - 1
              );
          }
          if ("vertical" === this.value) {
            const e = this.#c;
            e.parentElement.classList.toggle(
              "overflow-fade-top",
              e.scrollTop > 0
            ),
              e.parentElement.classList.toggle(
                "overflow-fade-bottom",
                e.scrollTop + e.clientHeight < e.scrollHeight - 1
              );
          }
          this.#_ = !1;
        }
      };
      s = (0, i.gn)(
        [
          (0, r.inject)(Element),
          (0, r.noView)(),
          (0, i.w6)("design:paramtypes", [Element]),
        ],
        s
      );
    },
    "shared/utility/resources/elements/inline-svg": (e, t, o) => {
      o.r(t), o.d(t, { InlineSvgCustomElement: () => c });
      var i,
        r = o(70655),
        n = o(52956),
        a = o("aurelia-framework");
      const s = new Map(),
        l = new Map();
      let c = (i = class {
        #L;
        #E;
        #O;
        constructor(e, t) {
          (this.#O = !1), (this.#L = e), (this.#E = t);
        }
        attached() {
          (this.#O = !0), this.srcChanged();
        }
        detached() {
          this.#O = !1;
        }
        async srcChanged() {
          if (!this.#O) return;
          if (!this.src) return void this.#V("", "");
          const e = s.get(this.src);
          if (void 0 !== e) return void this.#V(this.src, e);
          let t = l.get(this.src);
          t || ((t = this.#S(this.src)), l.set(this.src, t));
          const o = this.src,
            i = await t;
          this.#O && o === this.src && this.#V(o, i);
        }
        async #S(e) {
          try {
            const t = await this.#E.get(e);
            if (t.ok) {
              let o = await t.text();
              const i = o.indexOf("<svg");
              return i > 0 && (o = o.substring(i)), s.set(e, o), o;
            }
            if (i.debug) throw new Error(`Image request failed (${e})`);
            return "";
          } finally {
            l.delete(e);
          }
        }
        #V(e, t) {
          const o = this.#L.parentNode;
          o &&
            ((o.innerHTML = t),
            i.debug && o.prepend(document.createComment(e)));
        }
      });
      (0, r.gn)(
        [a.bindable, (0, r.w6)("design:type", String)],
        c.prototype,
        "src",
        void 0
      ),
        (c = i =
          (0, r.gn)(
            [
              (0, a.noView)(),
              (0, a.containerless)(),
              (0, a.customElement)("inline-svg"),
              (0, a.inject)(Element, n.eN),
              (0, r.w6)("design:paramtypes", [HTMLElement, n.eN]),
            ],
            c
          ));
    },
    52726: (e, t, o) => {
      o.d(t, { l: () => i });
      class i {
        toView(e, t) {
          const o = {};
          return (
            e?.forEach((e) => {
              const i = e[t];
              (o[i] = o[i] || []), o[i].push(e);
            }),
            Object.keys(o).map((e) => ({ [t]: e, values: o[e] }))
          );
        }
      }
    },
    "shared/utility/resources/value-converters/platform": (e, t, o) => {
      o.r(t),
        o.d(t, {
          PlatformIconSvgValueConverter: () => g,
          PlatformNameValueConverter: () => b,
        });
      var i = o(7804),
        r = o(27817),
        n = o(19260),
        a = o(17116),
        s = o(57123),
        l = o(46336),
        c = o(14115),
        d = o(26684),
        p = o(3294);
      const h = new Map([
        ["epic", r],
        ["gog", n],
        ["origin", i],
        ["rockstar", a],
        ["standalone", s],
        ["steam", l],
        ["twitch", c],
        ["uplay", d],
        ["uwp", p],
      ]);
      class g {
        toView(e) {
          return h.get(e) ?? h.get("standalone");
        }
      }
      const u = {
        discord: "Discord",
        epic: "Epic",
        gog: "GOG",
        itch: "itch.io",
        origin: "EA",
        rockstar: "Rockstar Games",
        standalone: "PC",
        steam: "Steam",
        uplay: "Ubisoft",
        uwp: "Xbox",
      };
      class b {
        toView(e) {
          return e ? u[e] || e.charAt(0).toLocaleUpperCase() + e.slice(1) : "";
        }
      }
    },
    "shared/utility/resources/value-converters/string": (e, t, o) => {
      o.r(t),
        o.d(t, {
          AppendValueConverter: () => l,
          DashCaseValueConverter: () => r,
          LowerCaseValueConverter: () => i,
          MaxLengthReplaceValueConverter: () => a,
          NullIfEmptyValueConverter: () => s,
          StrReplaceValueConverter: () => n,
        });
      class i {
        toView(e) {
          return e.toLowerCase();
        }
      }
      class r {
        toView(e) {
          return e.replace(/[\s_]/g, "-");
        }
      }
      class n {
        toView(e, t, o, i) {
          return e
            ? ("string" == typeof t && (t = new RegExp(t, i)),
              e.toString().replace(t, o))
            : e;
        }
      }
      class a {
        toView(e, t, o) {
          return e && e.toString().length > t ? o : e;
        }
      }
      class s {
        toView(e) {
          return "string" == typeof e || "number" == typeof e
            ? e.toString()
            : "";
        }
        fromView(e) {
          return ("string" == typeof e && e.trim()) || null;
        }
      }
      class l {
        toView(e, t) {
          return e ? e.toString() + t : t;
        }
      }
    },
    84620: (e, t, o) => {
      o.d(t, { k1: () => n, n8: () => r });
      var i = o(339);
      class r extends Error {
        constructor(e) {
          super(e), Object.setPrototypeOf(this, r.prototype);
        }
      }
      class n {
        #q;
        #M;
        #j;
        #$;
        #R;
        #A;
        constructor(e, t) {
          (this.#q = 1),
            (this.#R = new Map()),
            (this.#A = new Map()),
            (this.#M = e),
            (this.#$ = t),
            (this.#j = (0, i.Q7)(window, "message", (e) => {
              if (e.origin === this.#$ && e.source === this.#M) {
                const t = e.data;
                "object" == typeof t &&
                  null !== t &&
                  "number" == typeof t.id &&
                  "string" == typeof t.type &&
                  this.#B(t);
              }
            }));
        }
        execute(e, t) {
          if (!this.#M) throw new Error("RPC channel was disposed.");
          const o = this.#q++,
            i = new Promise((e, t) => {
              this.#A.set(o, [e, t]);
            });
          return this.#W({ id: o, type: e, data: t }), i;
        }
        setHandler(e, t) {
          if (!this.#M) throw new Error("RPC channel was disposed.");
          this.#R.set(e, t);
        }
        async #B(e) {
          if (
            "_resolve" === e.type ||
            "_reject" === e.type ||
            "_unhandled" === e.type
          ) {
            const t = this.#A.get(e.id);
            if (t)
              if ((this.#A.delete(e.id), "_resolve" === e.type)) {
                const o = e;
                t[0](o.data);
              } else if ("_reject" === e.type) {
                const o = e;
                t[1](o.data);
              } else if ("_unhandled" === e.type) {
                const o = e;
                t[1](
                  new r(`No handler defined for message type ${o.data.type}.`)
                );
              }
          } else {
            const t = this.#R.get(e.type);
            if (t) {
              let o, i;
              try {
                (i = await t(e.data)), (o = "_resolve");
              } catch (e) {
                (i = e), (o = "_reject");
              }
              this.#W({ id: e.id, type: o, data: i });
            } else
              this.#W({ id: e.id, type: "_unhandled", data: { type: e.type } });
          }
        }
        #W(e) {
          this.#M?.postMessage(e, this.#$);
        }
        dispose() {
          this.#j?.dispose(),
            (this.#j = null),
            this.#R.clear(),
            (this.#M = null);
          for (const [e, t] of this.#A.values())
            t(new Error("RPC channel was disposed."));
          this.#A.clear();
        }
      }
    },
    99087: (e, t, o) => {
      o.d(t, { k: () => i });
      const i = "tick-minute";
    },
    5384: (e, t, o) => {
      o.d(t, { O1: () => s, Wu: () => n, kJ: () => a, td: () => r });
      const i = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      function r(e, t = 2) {
        if (!e) return "0 " + i[0];
        const o = Math.floor(Math.log(e) / Math.log(1024));
        return parseFloat((e / Math.pow(1024, o)).toFixed(t)) + " " + i[o];
      }
      function n(e) {
        let t = 0;
        for (let o = 0; o < e.length; o++)
          t = ((t << 5) - t + e.charCodeAt(o)) | 0;
        return t;
      }
      function a(e) {
        return ("string" == typeof e && e.trim()) || null;
      }
      function s(e) {
        const t = new Uint8Array(e);
        return (
          crypto.getRandomValues(t),
          BigInt(
            "0x" +
              Array.from(t, (e) => e.toString(16).padStart(2, "0")).join("")
          )
            .toString(36)
            .substring(0, e)
        );
      }
    },
    15066: (e, t, o) => {
      function i(e) {
        return window
          .getComputedStyle(document.body)
          .getPropertyValue(`--constant--${e}`);
      }
      function r(e) {
        return window
          .getComputedStyle(document.body)
          .getPropertyValue(`--color--${e}`);
      }
      o.d(t, { L: () => r, g: () => i });
    },
  },
]);

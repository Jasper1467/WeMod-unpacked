"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [2417],
  {
    "queue/resources/elements/creators-list.scss": (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var o = i(8081),
        a = i.n(o),
        s = i(23645),
        n = i.n(s)()(a());
      n.push([
        t.id,
        "creators-list .creator{display:flex;align-items:flex-start}creators-list .creator+.creator{margin-top:22px}creators-list .creator img{flex:0 0 auto;width:40px;height:40px;margin:0 14px 0 0;border-radius:50%;overflow:hidden}creators-list .creator .username{font-size:16px;line-height:24px;font-weight:600;color:#fff}creators-list .creator .cheats{font-size:13px;line-height:20px;color:rgba(255,255,255,.2)}creators-list .creator .cheats strong{font-weight:500;color:rgba(255,255,255,.4)}",
        "",
      ]);
      const r = n;
    },
    "resources/elements/account-email.scss": (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var o = i(8081),
        a = i.n(o),
        s = i(23645),
        n = i.n(s)()(a());
      n.push([t.id, "account-email email-input{display:block}", ""]);
      const r = n;
    },
    "resources/elements/ad-popup.scss": (t, e, i) => {
      i.r(e), i.d(e, { default: () => h });
      var o = i(8081),
        a = i.n(o),
        s = i(23645),
        n = i.n(s),
        r = i(61667),
        l = i.n(r),
        c = new URL(i(24052), i.b),
        d = n()(a()),
        p = l()(c);
      d.push([
        t.id,
        'playwire-ad-popup{display:flex;background:var(--theme--background);width:375px;height:210px}playwire-ad-popup .webview-placeholder{overflow:hidden;width:100%;height:100%;border:0}ad-popup{--playwire-ad--width: 375px;--playwire-ad--height: 210px;display:block;position:fixed;right:30px;bottom:0;padding-bottom:20px;z-index:9998;visibility:hidden}ad-popup .wrapper{background:var(--theme--background) linear-gradient(rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)) !important;border-bottom-left-radius:10px;border-bottom-right-radius:10px}ad-popup.active{visibility:visible}ad-popup .content{width:var(--ad-popup--width);display:flex;align-items:center;margin:0;padding:10px 20px;min-height:56px}ad-popup .content i{margin-right:15px}ad-popup .content i svg{width:43px;height:33px}ad-popup .content p{font-size:12px;line-height:18px;color:rgba(255,255,255,.6);margin:0}ad-popup .content p a{font-size:12px;line-height:18px;background:rgba(0,0,0,0) !important;padding:0;border:0;display:inline-flex;align-items:center;color:var(--theme--highlight);text-decoration:none}ad-popup .content p a svg *{fill:var(--theme--highlight)}@media(hover: hover){ad-popup .content p a:hover{color:#fff}ad-popup .content p a:hover svg *{fill:#fff}}ad-popup .content p a:after{content:"";display:inline-block;width:5px;height:9px;-webkit-mask-box-image:url(' +
          p +
          ");margin-left:5px;background:var(--theme--highlight);transition:transform .15s}@media(hover: hover){ad-popup .content p a:hover{color:#fff}ad-popup .content p a:hover:after{transform:translateX(3px);background:#fff}}@media(max-height: 800px){ad-popup{padding-bottom:0}ad-popup .content{display:none}}",
        "",
      ]);
      const h = d;
    },
    "resources/elements/alert-icon.scss": (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var o = i(8081),
        a = i.n(o),
        s = i(23645),
        n = i.n(s)()(a());
      n.push([
        t.id,
        "alert-icon{width:16px;height:16px;display:inline-flex;border-radius:50%;background:rgba(var(--color--alert--rgb), 0.3);align-items:center;justify-content:center;flex:0 0 auto}alert-icon i{display:inline-block}alert-icon i svg *{fill:var(--color--alert)}",
        "",
      ]);
      const r = n;
    },
    "resources/elements/beta-tag.scss": (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var o = i(8081),
        a = i.n(o),
        s = i(23645),
        n = i.n(s)()(a());
      n.push([
        t.id,
        "beta-tag{background-color:var(--color--accent);display:inline-block;font-weight:900;font-size:12px;color:#111;line-height:15px;padding:0 4px;border-radius:2.5px;min-width:0;font-style:normal;min-width:initial}",
        "",
      ]);
      const r = n;
    },
    "resources/elements/boost-balance-button.scss": (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var o = i(8081),
        a = i.n(o),
        s = i(23645),
        n = i.n(s)()(a());
      n.push([
        t.id,
        'boost-balance-button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-weight:800;font-size:21px;line-height:30px;font-weight:800;--cta--padding: 18px;--cta--height: 39px;--cta--hover--border-width: 2px;font-size:13px;line-height:20px}boost-balance-button,boost-balance-button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) boost-balance-button{border:1px solid #fff}}boost-balance-button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}boost-balance-button>*:first-child{padding-left:0}boost-balance-button>*:last-child{padding-right:0}boost-balance-button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) boost-balance-button svg *{fill:CanvasText}}boost-balance-button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) boost-balance-button svg{opacity:1}}boost-balance-button img{height:50%}boost-balance-button:disabled{opacity:.3}boost-balance-button:disabled,boost-balance-button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){boost-balance-button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}boost-balance-button:not(:disabled):hover svg{opacity:1}}boost-balance-button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}boost-balance-button:disabled,boost-balance-button.disabled{cursor:default;pointer-events:none}boost-balance-button svg{opacity:1 !important}boost-balance-button:hover{--balance-button__balance--before-color: rgba(255, 255, 255, 0.4);--balance-button__label--color: rgba(255, 255, 255, 0.8)}boost-balance-button .balance{font-weight:700;position:relative;padding-right:10px;margin-right:5px;color:var(--balance-button__balance--color, #fff)}boost-balance-button .balance:before{content:"";display:block;position:absolute;right:0;top:50%;height:18px;margin-top:-9px;border-left:1px solid var(--balance-button__balance--before-color, rgba(255, 255, 255, 0.15))}boost-balance-button .label{font-weight:500;color:var(--balance-button__label--color, rgba(255, 255, 255, 0.6))}',
        "",
      ]);
      const r = n;
    },
    "resources/elements/boost-button.scss": (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var o = i(8081),
        a = i.n(o),
        s = i(23645),
        n = i.n(s)()(a());
      n.push([
        t.id,
        'boost-button .count{font-size:14px;line-height:21px;font-weight:600;color:rgba(255,255,255,.6)}boost-button .checkmark svg{margin-left:5px;margin-right:9px}boost-button .checkmark svg *{fill:var(--theme--highlight)}boost-button button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-weight:700;font-size:15px;line-height:24px;font-weight:700;--cta--padding: 12px;--cta--height: 28px;--cta--hover--border-width: 1px;box-shadow:inset 0 0 0 1px var(--theme--highlight)}boost-button button,boost-button button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) boost-button button{border:1px solid #fff}}boost-button button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}boost-button button>*:first-child{padding-left:0}boost-button button>*:last-child{padding-right:0}boost-button button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) boost-button button svg *{fill:CanvasText}}boost-button button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) boost-button button svg{opacity:1}}boost-button button img{height:50%}boost-button button:disabled{opacity:.3}boost-button button:disabled,boost-button button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){boost-button button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}boost-button button:not(:disabled):hover svg{opacity:1}}boost-button button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}@media(hover: hover){boost-button button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--theme--highlight);animation:cta--boost--hover .3s ease-in-out alternate infinite}}boost-button button:not(:disabled):active{background-color:rgba(0,0,0,0)}boost-button button svg{opacity:1}boost-button button:after{font-size:14px;line-height:21px;font-weight:900;content:"+1";white-space:nowrap;overflow:hidden;display:inline-block;text-align:right;width:0;opacity:0;transform:translate(10px, 0);transition:width .15s,opacity .15s,transform .15s}boost-button button:hover:not(:disabled):after{width:23px;opacity:1;transform:translate(0, 0)}',
        "",
      ]);
      const r = n;
    },
    "resources/elements/breadcrumbs.scss": (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var o = i(8081),
        a = i.n(o),
        s = i(23645),
        n = i.n(s)()(a());
      n.push([
        t.id,
        'breadcrumbs{display:flex;width:auto;margin-bottom:7.5px;align-items:center}breadcrumbs .caret{display:inline-block;flex:0 0 auto;margin-left:5px;margin-right:14px;margin-top:1.5px;color:rgba(255,255,255,.4);transition:color .15s}breadcrumbs .caret:after{content:"";display:block;clear:both}breadcrumbs .caret svg{float:left}breadcrumbs .caret svg{max-width:8px;max-height:8px}breadcrumbs .caret svg *{color:#fff}breadcrumbs .caret svg *{fill:currentColor;color:inherit !important}breadcrumbs .caret.back{margin:1.5px 5px 0 0;transform:rotate(180deg)}breadcrumbs .item{font-size:13px;line-height:20px;font-weight:500;display:flex;flex:0 0 auto;align-items:center;color:rgba(255,255,255,.4);transition:color .15s;text-decoration:none}breadcrumbs a.item:hover{color:#fff}breadcrumbs a.item:hover .caret{color:#fff}breadcrumbs:empty{height:20px}',
        "",
      ]);
      const r = n;
    },
    "resources/elements/coaching-tip.scss": (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var o = i(8081),
        a = i.n(o),
        s = i(23645),
        n = i.n(s)()(a());
      n.push([
        t.id,
        "coaching-tip{display:inline-block;position:relative}coaching-tip .wrapper{position:relative;width:32px}coaching-tip .hotspot{--hotspot--color: var(--color--accent);position:relative;width:32px;height:32px}coaching-tip .hotspot,coaching-tip .hotspot *{cursor:pointer}coaching-tip .hotspot .ring{position:absolute;left:50%;top:50%;border-radius:50%;transition:background-color .15s,border-color .15s}coaching-tip .hotspot .ring:nth-child(1){width:37.5%;height:37.5%;margin-left:-18.75%;margin-top:-18.75%;background:var(--hotspot--color)}coaching-tip .hotspot .ring:nth-child(2){width:62.5%;height:62.5%;margin-left:-31.25%;margin-top:-31.25%;border:1.5px solid var(--hotspot--color);animation:coaching-tip-hotspot 1s ease-in-out 0s infinite}coaching-tip .hotspot .ring:nth-child(3){width:81.25%;height:81.25%;margin-left:-40.625%;margin-top:-40.625%;border:1.5px solid var(--hotspot--color);animation:coaching-tip-hotspot 1s ease-in-out .1s infinite}coaching-tip .hotspot .ring:nth-child(4){width:100%;height:100%;margin-left:-50%;margin-top:-50%;border:1.5px solid var(--hotspot--color);animation:coaching-tip-hotspot 1s ease-in-out .2s infinite}coaching-tip .popup{width:325px;padding:20px 25px 25px;border-radius:10px;background:var(--theme--secondary-background);border:1px solid rgba(255,255,255,.05);opacity:0;visibility:hidden;transition:visibility 0s .2s;z-index:1;box-shadow:0px 0px 5px rgba(17,17,17,.5)}coaching-tip .popup h5{font-weight:600;font-size:16px;line-height:25px;font-weight:700;margin:0 0 5px;color:#fff}coaching-tip .popup p{font-size:14px;line-height:22px;font-weight:500;color:rgba(255,255,255,.6);margin:0}coaching-tip .popup p a{font-weight:500;color:var(--theme--highlight);text-decoration:underline}coaching-tip .popup p a:hover{color:#fff}coaching-tip .popup p strong{font-weight:500;color:#fff}coaching-tip .popup button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-weight:700;font-size:15px;line-height:24px;font-weight:700;--cta--padding: 12px;--cta--height: 28px;--cta--hover--border-width: 1px;box-shadow:inset 0 0 0 1px var(--theme--highlight);--cta__icon--color: var(--theme--highlight)}coaching-tip .popup button,coaching-tip .popup button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) coaching-tip .popup button{border:1px solid #fff}}coaching-tip .popup button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}coaching-tip .popup button>*:first-child{padding-left:0}coaching-tip .popup button>*:last-child{padding-right:0}coaching-tip .popup button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) coaching-tip .popup button svg *{fill:CanvasText}}coaching-tip .popup button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) coaching-tip .popup button svg{opacity:1}}coaching-tip .popup button img{height:50%}coaching-tip .popup button:disabled{opacity:.3}coaching-tip .popup button:disabled,coaching-tip .popup button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){coaching-tip .popup button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}coaching-tip .popup button:not(:disabled):hover svg{opacity:1}}coaching-tip .popup button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}@media(hover: hover){coaching-tip .popup button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--theme--highlight);background-color:rgba(0,0,0,0)}}coaching-tip .popup button:not(:disabled):active{background-color:var(--theme--highlight)}coaching-tip .popup hr{border:0;border-top:1px solid rgba(255,255,255,.2);margin:15px 0}coaching-tip close-button{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)) !important;display:inline-flex;width:26px;height:26px;box-shadow:none;padding:0;border-radius:50%;border:0;align-items:center;justify-content:center;transition:background-color .15s;position:absolute;right:-12.5px;top:-12.5px}@media(forced-colors: active){body:not(.override-contrast-mode) coaching-tip close-button{border:1px solid #fff}}coaching-tip close-button svg{opacity:1}@media(hover: hover){coaching-tip close-button:hover{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)) !important}}coaching-tip.show .hotspot{--hotspot--color: var(--color--brand-blue)}coaching-tip.show .popup{animation:dialog-pop .2s ease-in-out forwards;visibility:visible;transition-delay:0s}coaching-tip.position-relative-right{margin-left:16px}coaching-tip.position-right{position:absolute;left:100%;top:50%;margin-left:16px;margin-top:-16px}coaching-tip.position-left{position:absolute;right:100%;top:50%;margin-right:16px;margin-top:-16px}coaching-tip.popup-right .popup{position:absolute;left:100%;top:0;margin-left:12px}coaching-tip.popup-left .popup{position:absolute;right:100%;top:0;margin-right:12px}coaching-tip.popup-bottom-left .popup{position:absolute;right:0px;top:100%;margin-top:12px}coaching-tip.hide-hotspot .wrapper{width:0}coaching-tip.hide-hotspot .hotspot{display:none}coaching-tip.hide-hotspot .popup{margin:0}coaching-tip.close-button-left close-button{right:initial;left:-12px}body.disable-looping-animation coaching-tip .hotspot .ring:not(:first-child){animation-fill-mode:forwards !important}@keyframes coaching-tip-hotspot{0%{opacity:0}25%{opacity:1}50%,100%{opacity:0}}.coaching-tip-highlight{animation:coaching-tip-highlight .15s linear forwards}@keyframes coaching-tip-highlight{to{box-shadow:0 0 0 1px var(--theme--highlight),0 0 40px 0 rgba(var(--theme--highlight--rgb), 0.3)}}",
        "",
      ]);
      const r = n;
    },
    "resources/elements/email-input.scss": (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var o = i(8081),
        a = i.n(o),
        s = i(23645),
        n = i.n(s)()(a());
      n.push([
        t.id,
        "email-input{position:relative;width:100%;display:inline-block;width:auto}email-input input{display:block;color:rgba(255,255,255,.9);padding:4px 9px 5px 9px;border:1px solid rgba(0,0,0,0);transition:color .15s,border-color .15s;position:relative;background:rgba(255,255,255,.05);border-radius:5px;height:30px;width:100%}email-input input,email-input input::placeholder{font-size:14px;line-height:21px;font-weight:500}email-input input::placeholder{color:rgba(255,255,255,.3)}email-input input:disabled{opacity:.5}email-input input:focus{border-color:var(--theme--highlight);caret-color:var(--theme--highlight);color:#fff}email-input input:focus+*{--input__label--color: rgba(255, 255, 255, 0.6)}email-input.large input{height:40px;width:100%;color:rgba(255,255,255,.8);padding:5px 14px;background-color:var(--theme--secondary-background);border:1.5px solid rgba(0,0,0,0);border-radius:5px;caret-color:var(--color--accent);transition:background-color .15s,border-color .15s}email-input.large input,email-input.large input::placeholder{font-size:18px;line-height:30px;font-weight:500}email-input.large input::placeholder{color:rgba(255,255,255,.5)}email-input.large input:hover{border-color:rgba(255,255,255,.1)}email-input.large input:focus{background-color:var(--theme--pro--secondary-background);border-color:var(--theme--secondary-background)}email-input.valid input{padding-right:30px}email-input i{--input__icon--color: rgba(255, 255, 255, 0.4);position:absolute;right:0;top:0;height:100%;width:30px;display:inline-flex;align-items:center;justify-content:center;pointer-events:none}email-input i svg *{fill:var(--input__icon--color)}email-input i.ok{--input__icon--color: var(--color--accent)}",
        "",
      ]);
      const r = n;
    },
    "resources/elements/favorite-button.scss": (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var o = i(8081),
        a = i.n(o),
        s = i(23645),
        n = i.n(s)()(a());
      n.push([
        t.id,
        "favorite-button,favorite-button *{cursor:pointer}favorite-button svg *{transition:fill .15s}favorite-button .fill{fill:rgba(0,0,0,0)}favorite-button .stroke{fill:rgba(255,255,255,.3)}favorite-button.bump{animation:favorite-bump .3s 1 ease-in-out}favorite-button.favorite .fill{fill:var(--theme--highlight)}favorite-button.favorite .stroke{fill:var(--theme--highlight)}favorite-button:hover:not(.favorite) .stroke{fill:#fff}@keyframes favorite-bump{0%{transform:scale(1)}50%{transform:scale(1.4)}100%{transform:scale(1)}}",
        "",
      ]);
      const r = n;
    },
    "resources/elements/follow-button.scss": (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var o = i(8081),
        a = i.n(o),
        s = i(23645),
        n = i.n(s)()(a());
      n.push([
        t.id,
        "follow-button{position:relative;margin-top:3px}follow-button,follow-button *{cursor:pointer}follow-button *{transition:opacity .15s}follow-button.bump{animation:favorite-bump .3s 1 ease-in-out}follow-button .unfollow-icon{opacity:0}follow-button .unfollow-icon *{fill:var(--theme--highlight)}follow-button .follow-icon{opacity:.3;position:absolute;left:0;top:0}follow-button.following .unfollow-icon{opacity:1}follow-button.following .follow-icon{opacity:0}follow-button:hover:not(.following) .follow-icon{opacity:1}@keyframes follow-bump{0%{transform:scale(1)}50%{transform:scale(1.4)}100%{transform:scale(1)}}",
        "",
      ]);
      const r = n;
    },
    "resources/elements/happy-icon.scss": (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var o = i(8081),
        a = i.n(o),
        s = i(23645),
        n = i.n(s)()(a());
      n.push([
        t.id,
        "happy-icon{width:16px;height:16px;display:inline-flex;align-items:center;justify-content:center}happy-icon i{display:inline-block}happy-icon i svg *{fill:var(--theme--highlight)}",
        "",
      ]);
      const r = n;
    },
    "resources/elements/layout-toggle.scss": (t, e, i) => {
      i.r(e), i.d(e, { default: () => g });
      var o = i(8081),
        a = i.n(o),
        s = i(23645),
        n = i.n(s),
        r = i(61667),
        l = i.n(r),
        c = new URL(i(79674), i.b),
        d = new URL(i(78766), i.b),
        p = n()(a()),
        h = l()(c),
        u = l()(d);
      p.push([
        t.id,
        "layout-toggle,layout-toggle *{cursor:pointer}layout-toggle.wide{display:inline-flex;align-items:center;border:1px solid rgba(255,255,255,.15);border-radius:5px;transition:background-color .15s,border-color .15s}layout-toggle.wide:hover{background:rgba(255,255,255,.15);border-color:rgba(0,0,0,0)}layout-toggle.wide span{display:inline-block;width:24px;height:24px;border:0;outline:none;padding:0;background-color:rgba(0,0,0,0);background-repeat:no-repeat;opacity:.3;transition:opacity .15s}layout-toggle.wide span.thumbnail{background-image:url(" +
          h +
          ");background-position:5px center}layout-toggle.wide span.list{background-image:url(" +
          u +
          ');background-position:0 center}layout-toggle.wide.list span.list{opacity:.8}layout-toggle.wide.thumbnail span.thumbnail{opacity:.8}layout-toggle:not(.wide){width:18px;height:18px}layout-toggle:not(.wide) span{display:inline-block;padding:0;outline:0;overflow:hidden;width:18px;height:18px;margin-left:0;background:rgba(0,0,0,0);border:1px solid rgba(255,255,255,.15);border-radius:5px;position:relative;transition:background-color .15s,border-color .15s}layout-toggle:not(.wide) span:before{content:"";display:block;position:absolute;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,0) center no-repeat;opacity:.6;transition:opacity .15s}layout-toggle:not(.wide) span:hover{background:rgba(255,255,255,.15);border-color:rgba(0,0,0,0)}layout-toggle:not(.wide) span:hover:before{opacity:1}layout-toggle:not(.wide).list span:before{background-image:url(' +
          h +
          ")}layout-toggle:not(.wide).thumbnail span:before{background-image:url(" +
          u +
          ")}",
        "",
      ]);
      const g = p;
    },
    "resources/elements/playwire-ad-popup.scss": (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var o = i(8081),
        a = i.n(o),
        s = i(23645),
        n = i.n(s)()(a());
      n.push([
        t.id,
        "playwire-ad-popup{display:flex;background:var(--theme--background);width:375px;height:210px}playwire-ad-popup .webview-placeholder{overflow:hidden;width:100%;height:100%;border:0}",
        "",
      ]);
      const r = n;
    },
    "resources/elements/progress-bar.scss": (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var o = i(8081),
        a = i.n(o),
        s = i(23645),
        n = i.n(s)()(a());
      n.push([
        t.id,
        "progress-bar{display:block;width:100%;height:7px;border-radius:100px;background:rgba(255,255,255,.2);position:relative;overflow:hidden}progress-bar .value{height:100%;border-radius:100px}progress-bar .indeterminate-value{position:absolute;height:100%;border-radius:2px;top:0;left:0;animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite}progress-bar .value,progress-bar .indeterminate-value{background:var(--theme--highlight)}@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}",
        "",
      ]);
      const r = n;
    },
    "resources/elements/remote-code.scss": (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var o = i(8081),
        a = i.n(o),
        s = i(23645),
        n = i.n(s)()(a());
      n.push([
        t.id,
        "remote-code{display:inline-block}remote-code .code{margin:0;height:38px}remote-code .code .digit{font-weight:800;font-size:21px;line-height:30px;font-weight:500;display:inline-block;width:38px;height:38px;border:1px solid var(--theme--highlight);line-height:36px;text-align:center;color:#fff;border-radius:50%;transition:color .25s}remote-code .code .digit+.digit{margin-left:10px}remote-code .code .digit:nth-child(1){transition-delay:0s}remote-code .code .digit:nth-child(2){transition-delay:.1s}remote-code .code .digit:nth-child(3){transition-delay:.2s}remote-code .code .digit:nth-child(4){transition-delay:.3s}remote-code .code .digit:nth-child(5){transition-delay:.4s}remote-code .code.expired .digit{color:rgba(0,0,0,0)}remote-code progress-bar{width:225px;height:3px;margin:24px auto 0 auto;background-color:#fff}remote-code progress-bar .value{background:var(--color--alert) !important}",
        "",
      ]);
      const r = n;
    },
    "resources/elements/remote-qr-code.scss": (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var o = i(8081),
        a = i.n(o),
        s = i(23645),
        n = i.n(s)()(a());
      n.push([
        t.id,
        "remote-qr-code canvas{width:100% !important;height:100% !important;border-radius:5px}",
        "",
      ]);
      const r = n;
    },
    "queue/resources/elements/creators-list.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => n });
      var o = i(27091),
        a = i.n(o),
        s = new URL(i(20488), i.b);
      const n =
        '<template> <require from="./creators-list.scss"></require> <div class="creators"> <div class="creator" repeat.for="creator of creators.creators"> <img src.bind="creator.avatar | cdn:{size: 48}" fallback-src="' +
        a()(s) +
        '"> <div class="meta"> <div class="username">${creator.username}</div> <div class="cheats" innerhtml.bind="\'creators_list.$x_cheats_created\' | i18n:{x: i18nNumber.toView(creator.cheatCount)} | markdown"></div> </div> </div> </div> </template> ';
    },
    "resources/elements/account-email.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => o });
      const o =
        '<template> <require from="./account-email.scss"></require> <require from="./email-input"></require> <email-input value.bind="value" placeholder.bind="placeholder" status.bind="status" existing-email.bind="existingEmail" view-model.ref="emailInput"></email-input> </template> ';
    },
    "resources/elements/ad-popup.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => n });
      var o = i(27091),
        a = i.n(o),
        s = new URL(i(41528), i.b);
      const n =
        '<template class="${active ? \'active\' : \'\'}"> <require from="./ad-popup.scss"></require> <require from="./playwire-ad-popup"></require> <div class="wrapper" if.bind="active"> <playwire-ad-popup disable.call="disable()" view-model.ref="playwireAdPopup"></playwire-ad-popup> <div class="content"> <i><inline-svg src="' +
        a()(s) +
        '"></inline-svg></i> <p> ${\'ad_popup.ad_revenue_uses\' | i18n} <a href="#" pro-cta="playwire_ad_popup">${\'ad_popup.remove_ads\' | i18n}</a> </p> </div> </div> </template> ';
    },
    "resources/elements/alert-icon.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => n });
      var o = i(27091),
        a = i.n(o),
        s = new URL(i(24243), i.b);
      const n =
        '<template> <require from="./alert-icon.scss"></require> <i> <inline-svg src="' +
        a()(s) +
        '"></inline-svg> </i> </template>';
    },
    "resources/elements/beta-tag.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => o });
      const o =
        "<template> <require from=\"./beta-tag.scss\"></require> ${'beta_tag.beta' | i18n} </template> ";
    },
    "resources/elements/boost-balance-button.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => n });
      var o = i(27091),
        a = i.n(o),
        s = new URL(i(55777), i.b);
      const n =
        '<template class="${account.subscription ? \'disabled\' : \'\'}" pro-cta="value: boost_balance_button; disabled.bind: account.subscription;"> <require from="./boost-balance-button.scss"></require> <i> <inline-svg src="' +
        a()(s) +
        '"></inline-svg> </i> <span if.bind="account.boosts || account.subscription" class="balance">${account.boosts || 0 | i18nNumber}</span> <span class="label"> <template if.bind="trialActive && account.boosts === 0">${\'boost_balance_button.boosts_available_after_trial_period\' | i18n}</template> <template else>${account.subscription ? \'unavailable_game.boosts\' : \'unavailable_game.get_boosts\' | i18n}</template> </span> </template> ';
    },
    "resources/elements/boost-button.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => n });
      var o = i(27091),
        a = i.n(o),
        s = new URL(i(47254), i.b);
      const n =
        '<template> <require from="./boost-button.scss"></require> <template if.bind="showCount && account.boostedGames[gameId]"> <div class="count">${account.boostedGames[gameId]}</div> <i class="checkmark"><inline-svg src="' +
        a()(s) +
        '"></inline-svg></i> </template> <button click.trigger="boost()" pro-cta="value: boost_button; disabled.bind: account.boosts !== 0 || account.subscription;" disabled.bind="boosting"> <i><inline-svg src.bind="icon"></inline-svg></i> </button> </template> ';
    },
    "resources/elements/breadcrumbs.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => r });
      var o = i(27091),
        a = i.n(o),
        s = new URL(i(24052), i.b),
        n = a()(s);
      const r =
        '<template bindable="items"> <require from="./breadcrumbs.scss"></require> <template if.bind="previousRoute"> <a class="item" href="#" click.delegate="back()"> <span class="caret back"><inline-svg src="' +
        n +
        '"></inline-svg></span> <span>${backButtonLabel | i18n}</span> </a> </template> <template else> <template repeat.for="item of items"> <span class="item" if.bind="!item[1]">${item[0] | i18n}</span> <a if.bind="item[1]" class="item" route-href="route.bind: item[1]; params.bind: item[2]">${item[0] | i18n}</a> <span class="caret"><inline-svg src="' +
        n +
        '"></inline-svg></span> </template> </template> </template> ';
    },
    "resources/elements/coaching-tip.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => o });
      const o =
        '<template class="position-${position} popup-${popupPosition} ${visible ? \'show\' : \'\'} close-button-${closeButtonPosition} ${hideHotspot ? \'hide-hotspot\' : \'\'}"> <require from="./coaching-tip.scss"></require> <require from="../../shared/resources/custom-attributes/close-if-click-outside"></require> <require from="../../shared/resources/elements/close-button"></require> <div class="wrapper"> <div class="hotspot" click.delegate="toggle($event)" tabindex="0"> <span class="ring"></span> <span class="ring"></span> <span class="ring"></span> <span class="ring"></span> </div> <div class="popup" close-if-click-outside="value.two-way: closeIfClickOutsideVisible; ignore-selector: coaching-tip;"> <close-button click.delegate="hide(\'close-button\')" tabindex="0"></close-button> <template part="content" replaceable></template> <div slot="content"> <slot></slot> </div> </div> </div> </template> ';
    },
    "resources/elements/email-input.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => n });
      var o = i(27091),
        a = i.n(o),
        s = new URL(i(47254), i.b);
      const n =
        '<template class="${focused ? \'focused\' : \'\'} ${value ? \'\' : \'empty\'} ${large ? \'large\' : \'\'} ${status === \'valid\' ? \'valid\' : \'\'}"> <require from="./email-input.scss"></require> <input type="text" ref="inputEl" value.bind="value & debounce:400" spellcheck="false" placeholder.bind="placeholder || \'\'" focus.trigger="handleFocus()" blur.trigger="handleBlur()"> <i if.bind="status === \'valid\'" class="ok"><inline-svg src="' +
        a()(s) +
        '"></inline-svg></i> </template> ';
    },
    "resources/elements/favorite-button.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => o });
      const o =
        '<template class="${favorite ? \'favorite\' : \'\'}"> <require from="./favorite-button.scss"></require> <div click.trigger="toggleFavorite($event)" tabindex="0"> <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.1133 1.61523L7.2513 7.33423H1.5293L6.1763 10.7382L4.3673 16.3432L9.1133 12.8722L13.8593 16.3432L12.0503 10.7382L16.6973 7.33423H10.9743L9.1133 1.61523Z" fill="white" class="fill"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.11282 0L11.3368 6.83445H18.2254L12.6364 10.9285L14.8081 17.6573L9.1127 13.4919L3.41727 17.6573L5.58897 10.9285L0 6.83445H6.88765L9.11282 0ZM9.11257 3.2309L7.61374 7.83445H3.05739L6.76242 10.5484L5.31612 15.0296L9.1127 12.253L12.9093 15.0296L11.463 10.5484L15.168 7.83445H10.6106L9.11257 3.2309Z" fill="white" class="stroke"/> </svg> </div> </template> ';
    },
    "resources/elements/follow-button.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => o });
      const o =
        '<template class="${following ? \'following\' : \'\'} ${bump ? \'bump\' : \'\'}"> <require from="./follow-button.scss"></require> <div click.trigger="toggle($event)" tabindex="0"> <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="follow-icon"> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.62504 2.68038L7.11422 2.58203H7.8845L8.37368 2.68038C10.3656 3.08086 11.8565 4.82745 11.8565 6.90625V7.53047C11.8565 9.34267 12.528 11.0834 13.7348 12.4336L13.7367 12.4358L13.9845 12.7114L13.9853 12.7122C14.0017 12.7304 14.0034 12.7532 13.9957 12.7701C13.9845 12.7948 13.9589 12.8125 13.9279 12.8125H1.07079C1.05459 12.8125 1.03958 12.8078 1.02731 12.8C1.01525 12.7922 1.00907 12.7836 1.00598 12.7767C0.994179 12.7503 1.00129 12.7257 1.01344 12.7122L1.01421 12.7114L1.26198 12.4358L1.26392 12.4336C2.47093 11.0832 3.14222 9.33908 3.14222 7.53047V6.90625C3.14222 4.82745 4.63312 3.08086 6.62504 2.68038ZM0.518332 11.7672C1.56298 10.5984 2.14222 9.09102 2.14222 7.53047V6.90625C2.14222 4.33633 3.98373 2.19141 6.42793 1.7V1.0625C6.42793 0.474805 6.90672 0 7.49936 0C8.09199 0 8.57079 0.474805 8.57079 1.0625V1.7C11.015 2.19141 12.8565 4.33633 12.8565 6.90625V7.53047C12.8565 9.09434 13.4357 10.5984 14.4804 11.7672L14.7282 12.0428C15.0094 12.3549 15.0797 12.8031 14.9056 13.185C14.7315 13.5668 14.3498 13.8125 13.9279 13.8125H1.07079C0.648913 13.8125 0.263868 13.5668 0.0931091 13.185C-0.0776498 12.8031 -0.0106855 12.3549 0.270564 12.0428L0.518332 11.7672ZM8.64222 14.875H9.64222C9.64222 15.227 9.55496 15.57 9.39181 15.875C9.29337 16.059 9.1673 16.2292 9.0161 16.3791C8.61431 16.7775 8.06855 17 7.49936 17C6.93016 17 6.3844 16.7775 5.98262 16.3791C5.83142 16.2292 5.70535 16.059 5.60691 15.875C5.44376 15.57 5.3565 15.227 5.3565 14.875H6.3565H7.49936H8.64222ZM7 15.8884V15.875H6.9727C6.98174 15.8796 6.99084 15.884 7 15.8884Z" fill="white"/> </svg> <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="unfollow-icon"> <path d="M7.49936 0C6.90672 0 6.42793 0.474805 6.42793 1.0625V1.7C3.98373 2.19141 2.14222 4.33633 2.14222 6.90625V7.53047C2.14222 9.09102 1.56298 10.5984 0.518332 11.7672L0.270564 12.0428C-0.0106855 12.3549 -0.0776498 12.8031 0.0931091 13.185C0.263868 13.5668 0.648913 13.8125 1.07079 13.8125H13.9279C14.3498 13.8125 14.7315 13.5668 14.9056 13.185C15.0797 12.8031 15.0094 12.3549 14.7282 12.0428L14.4804 11.7672C13.4357 10.5984 12.8565 9.09434 12.8565 7.53047V6.90625C12.8565 4.33633 11.015 2.19141 8.57079 1.7V1.0625C8.57079 0.474805 8.09199 0 7.49936 0ZM9.0161 16.3791C9.41789 15.9807 9.64222 15.4395 9.64222 14.875H7.49936H5.3565C5.3565 15.4395 5.58083 15.9807 5.98262 16.3791C6.3844 16.7775 6.93016 17 7.49936 17C8.06856 17 8.61431 16.7775 9.0161 16.3791Z" fill="white"/> </svg> </div> </template>';
    },
    "resources/elements/happy-icon.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => n });
      var o = i(27091),
        a = i.n(o),
        s = new URL(i(94719), i.b);
      const n =
        '<template> <require from="./happy-icon.scss"></require> <i> <inline-svg src="' +
        a()(s) +
        '"></inline-svg> </i> </template>';
    },
    "resources/elements/layout-toggle.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => o });
      const o =
        '<template class="${layout} ${wide ? \'wide\' : \'\'}" click.delegate="toggle()" tabindex="0"> <require from="./layout-toggle.scss"></require> <template if.bind="wide"> <span class="thumbnail"></span> <span class="list"></span> </template> <template else> <span></span> </template> </template> ';
    },
    "resources/elements/lazy-render.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => o });
      const o =
        '<template> <template if.bind="visible"> <template replaceable part="content"></template> </template> <template else> <template replaceable part="placeholder" if.bind="!visible"></template> </template> </template>';
    },
    "resources/elements/playwire-ad-popup.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => o });
      const o =
        '<template class="${active ? \'active\' : \'\'}"> <require from="./playwire-ad-popup.scss"></require> <div ref="webviewEl" class="webview-placeholder"></div> </template> ';
    },
    "resources/elements/pro-cta-label.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => o });
      const o =
        "<template> ${eligibleForFreeTrial ? trialKey || 'pro_cta_label.start_free_trial' : noTrialKey || 'pro_cta_label.upgrade_to_pro' | i18n} </template> ";
    },
    "resources/elements/progress-bar.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => o });
      const o =
        '<template bindable="progress, indeterminate"> <require from="./progress-bar.scss"></require> <div class="value" if.bind="!indeterminate" css.bind="{width: (progress * 100) +\'%\'}"></div> <div class="indeterminate-value" if.bind="indeterminate"></div> </template>';
    },
    "resources/elements/remote-code.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => o });
      const o =
        '<template> <require from="./remote-code.scss"></require> <require from="./progress-bar.html"></require> <div class="code" ref="codeElement"> <span repeat.for="digit of code.code.split(\'\')" class="digit">${digit}</span> </div> <progress-bar progress.bind="1 - timeElapsed / code.expiresIn"></progress-bar> </template> ';
    },
    "resources/elements/remote-qr-code.html": (t, e, i) => {
      i.r(e), i.d(e, { default: () => o });
      const o =
        '<template> <require from="./remote-qr-code.scss"></require> <canvas ref="canvasElement"></canvas> </template> ';
    },
    "queue/resources/elements/creators-list": (t, e, i) => {
      i.r(e), i.d(e, { CreatorsList: () => r });
      var o = i(70655),
        a = i("aurelia-framework"),
        s = i(2789),
        n = i("shared/i18n/resources/value-converters");
      let r = class {
        constructor(t, e) {
          (this.creators = t), (this.i18nNumber = e);
        }
      };
      r = (0, o.gn)(
        [
          (0, a.autoinject)(),
          (0, o.w6)("design:paramtypes", [s.y, n.I18nNumberValueConverter]),
        ],
        r
      );
    },
    "resources/custom-attributes/add-class-if-overflow": (t, e, i) => {
      i.r(e), i.d(e, { AddClassIfOverflowCustomAttribute: () => s });
      var o = i(70655),
        a = i("aurelia-framework");
      let s = class {
        #t;
        #e;
        #i;
        constructor(t) {
          this.#t = t;
        }
        attached() {
          const t = this.#o.bind(this);
          (this.#i = new ResizeObserver(() => this.#o())),
            this.#i.observe(this.#t),
            (this.#e = setTimeout(t));
        }
        detached() {
          this.#i.disconnect(), this.#a();
        }
        #o() {
          this.#a(),
            (this.#e = setTimeout(() => {
              const t = this.#t;
              (t.style.visibility = "hidden"), t.classList.remove(this.value);
              const e =
                t.scrollWidth > t.offsetWidth ||
                t.scrollHeight > t.offsetHeight;
              t.classList.toggle(this.value, e),
                (t.style.visibility = "visible");
            }));
        }
        #a() {
          this.#e && (clearTimeout(this.#e), (this.#e = null));
        }
      };
      s = (0, o.gn)(
        [
          (0, a.inject)(Element),
          (0, a.noView)(),
          (0, o.w6)("design:paramtypes", [Element]),
        ],
        s
      );
    },
    "resources/custom-attributes/attach-src": (t, e, i) => {
      i.r(e), i.d(e, { AttachSrcCustomAttribute: () => s });
      var o = i(70655),
        a = i("aurelia-framework");
      let s = class {
        #t;
        constructor(t) {
          this.#t = t;
        }
        attached() {
          this.#t.src = this.value;
        }
      };
      s = (0, o.gn)(
        [
          (0, a.inject)(Element),
          (0, a.noView)(),
          (0, o.w6)("design:paramtypes", [Object]),
        ],
        s
      );
    },
    "resources/custom-attributes/pro-cta": (t, e, i) => {
      i.r(e), i.d(e, { ProCtaCustomAttribute: () => c });
      var o = i(70655),
        a = i("aurelia-event-aggregator"),
        s = i("aurelia-framework"),
        n = i(62522),
        r = i(29242),
        l = i(11912);
      let c = class {
        #s;
        #t;
        #n;
        #r;
        #l;
        constructor(t, e, i) {
          (this.#t = t), (this.#n = e), (this.#r = i);
        }
        attached() {
          (this.#s = "string" == typeof this.#t.getAttribute("tabIndex")),
            this.disabledChanged();
        }
        bind() {
          this.#l = (0, l.Q7)(this.#t, "click", async () => {
            this.value &&
              !this.disabled &&
              (this.#n.publish(new r.Us(this.value)),
              await this.#r.open({ trigger: this.value, nonInteraction: !1 }),
              this.callback?.());
          });
        }
        unbind() {
          this.#l && (this.#l.dispose(), (this.#l = null));
        }
        disabledChanged() {
          this.#s ||
            this.#t.setAttribute("tabIndex", this.disabled ? "-1" : "0");
        }
      };
      (0, o.gn)(
        [
          (0, s.bindable)({ primaryProperty: !0 }),
          (0, o.w6)("design:type", String),
        ],
        c.prototype,
        "value",
        void 0
      ),
        (0, o.gn)(
          [(0, s.bindable)(), (0, o.w6)("design:type", Boolean)],
          c.prototype,
          "disabled",
          void 0
        ),
        (0, o.gn)(
          [(0, s.bindable)(), (0, o.w6)("design:type", Function)],
          c.prototype,
          "callback",
          void 0
        ),
        (c = (0, o.gn)(
          [
            (0, s.inject)(Element, a.h, n.x),
            (0, s.noView)(),
            (0, o.w6)("design:paramtypes", [Element, a.h, n.x]),
          ],
          c
        ));
    },
    "resources/custom-attributes/title-link": (t, e, i) => {
      i.r(e), i.d(e, { TitleLinkCustomAttribute: () => l });
      var o = i(70655),
        a = i("aurelia-event-aggregator"),
        s = i("aurelia-framework"),
        n = i(29242),
        r = i(11912);
      let l = class {
        #t;
        #n;
        #l;
        constructor(t, e) {
          (this.#t = t), (this.#n = e);
        }
        bind() {
          this.#l = (0, r.Q7)(this.#t, "click", async () => {
            this.value &&
              this.titleId &&
              this.#n.publish(
                new n.kx(
                  this.value,
                  this.titleId,
                  this.gameId || null,
                  this.trainerId || null,
                  this.searchResult || !1
                )
              );
          });
        }
        unbind() {
          this.#l && (this.#l.dispose(), (this.#l = null));
        }
      };
      (0, o.gn)(
        [
          (0, s.bindable)({ primaryProperty: !0 }),
          (0, o.w6)("design:type", String),
        ],
        l.prototype,
        "value",
        void 0
      ),
        (0, o.gn)(
          [(0, s.bindable)(), (0, o.w6)("design:type", String)],
          l.prototype,
          "titleId",
          void 0
        ),
        (0, o.gn)(
          [(0, s.bindable)(), (0, o.w6)("design:type", String)],
          l.prototype,
          "gameId",
          void 0
        ),
        (0, o.gn)(
          [(0, s.bindable)(), (0, o.w6)("design:type", String)],
          l.prototype,
          "trainerId",
          void 0
        ),
        (0, o.gn)(
          [(0, s.bindable)(), (0, o.w6)("design:type", Boolean)],
          l.prototype,
          "searchResult",
          void 0
        ),
        (l = (0, o.gn)(
          [
            (0, s.inject)(Element, a.h),
            (0, s.noView)(),
            (0, o.w6)("design:paramtypes", [Element, a.h]),
          ],
          l
        ));
    },
    "resources/elements/account-email": (t, e, i) => {
      i.r(e), i.d(e, { AccountEmail: () => u });
      var o = i(70655),
        a = i("aurelia-framework"),
        s = i(45437),
        n = i(23739),
        r = i(81866),
        l = i(26478),
        c = i(35969),
        d = i(93082),
        p = i(51722),
        h = i(27170);
      let u = class {
        #c;
        #d;
        #p;
        #h;
        #u;
        constructor(t, e, i, o) {
          (this.focused = !1),
            (this.#c = !1),
            (this.#d = t),
            (this.#p = e),
            (this.#h = i),
            (this.#u = o);
        }
        bind() {
          this.accountChanged();
        }
        accountChanged() {
          this.value = this.account.email;
        }
        #g() {
          return "string" == typeof this.value
            ? this.value.replace(/[。｡︒]/g, ".")
            : null;
        }
        async submit() {
          if (this.#c) throw new Error("Email change is already in progress.");
          this.#c = !0;
          try {
            return await this.#b();
          } catch (t) {
            const e =
              t.data && t.data.entries
                ? t.data.entries[0].message
                : t.toString();
            this.#h.toast({ content: c.oc.literal(e), type: "alert" });
          } finally {
            this.#c = !1;
          }
        }
        async #b() {
          const t = this.#g(),
            e = await this.emailInput.validateWithFeedback(),
            i = !!this.account.email;
          return (
            !!e &&
            (await this.#d.dispatch(h.qg, await this.#p.changeAccountEmail(t)),
            this.#u.event(
              "email_collect",
              { location: this.location, firstEmail: i },
              r.$
            ),
            !0)
          );
        }
        get existingEmail() {
          return (0, p.yE)(this.account?.flags, 2) && this.account?.email
            ? this.account?.email
            : null;
        }
      };
      (0, o.gn)(
        [a.observable, (0, o.w6)("design:type", String)],
        u.prototype,
        "value",
        void 0
      ),
        (0, o.gn)(
          [a.bindable, (0, o.w6)("design:type", String)],
          u.prototype,
          "placeholder",
          void 0
        ),
        (0, o.gn)(
          [
            (0, a.bindable)({ defaultBindingMode: a.bindingMode.twoWay }),
            (0, o.w6)("design:type", String),
          ],
          u.prototype,
          "status",
          void 0
        ),
        (0, o.gn)(
          [a.bindable, (0, o.w6)("design:type", String)],
          u.prototype,
          "location",
          void 0
        ),
        (0, o.gn)(
          [
            (0, a.computedFrom)("account.flags", "account.email", "value"),
            (0, o.w6)("design:type", String),
            (0, o.w6)("design:paramtypes", []),
          ],
          u.prototype,
          "existingEmail",
          null
        ),
        (u = (0, o.gn)(
          [
            (0, d.b)({ selectors: { account: (0, d.g)("account") } }),
            (0, a.autoinject)(),
            (0, o.w6)("design:paramtypes", [s.yh, n.K, l.x, r.c]),
          ],
          u
        ));
    },
    "resources/elements/ad-popup": (t, e, i) => {
      i.r(e), i.d(e, { AdPopup: () => d });
      var o = i(70655),
        a = i("aurelia-framework"),
        s = i(81866),
        n = i(81110),
        r = i(35969),
        l = i(93082),
        c = i(51722);
      let d = class {
        #m;
        #v;
        #f;
        #i;
        #w;
        #y;
        #x;
        #k;
        #u;
        #t;
        constructor(t, e, i, o) {
          (this.force = !1),
            (this.active = !1),
            (this.#v = !1),
            (this.#x = t),
            (this.#k = e),
            (this.#u = i),
            (this.#t = o);
        }
        attached() {
          if (!this.#C()) return void this.#_();
          this.#E(!0);
          const t = [
            document.getElementById("dialogs"),
            document.getElementById("fullscreen-dialogs"),
          ];
          (this.#m = new MutationObserver(() => {
            const e = t.some((t) => t.classList.contains("ux-dialog-open"));
            e && !this.#v && this.active
              ? this.#_()
              : !e && this.#v && this.active && this.#L(),
              (this.#v = e);
          })),
            t.forEach((t) =>
              this.#m.observe(t, { attributeFilter: ["class"] })
            ),
            (this.#f = new MutationObserver(() => this.#I())),
            this.#f.observe(this.#t, { childList: !0, subtree: !0 }),
            (this.#i = new ResizeObserver(() => this.#I())),
            this.#i.observe(this.#t),
            (this.#w = this.#k.onLocaleChanged(() => this.#I())),
            (this.#y = this.#x.whenVisible(() =>
              this.#u.event("gamepage_ad_player_show")
            ));
        }
        detached() {
          this.#m?.disconnect(),
            this.#f?.disconnect(),
            this.#i?.disconnect(),
            this.#w?.dispose(),
            this.#y?.dispose(),
            this.#E(!1);
        }
        #C() {
          return !(
            !this.force &&
            !(0, c.yE)(this.account.flags, 8192) &&
            this.account?.subscription
          );
        }
        disable() {
          this.#E(!1), this.#_();
        }
        accountChanged(t, e) {
          t?.subscription && !e?.subscription && this.disable();
        }
        #_() {
          this.playwireAdPopup && this.playwireAdPopup.hideAd();
        }
        #L() {
          this.playwireAdPopup && this.playwireAdPopup.showAd();
        }
        #E(t) {
          (this.active = t),
            document.body.classList.toggle("ad-popup-active", t);
          const e = window.getComputedStyle(this.#t);
          document.body.style.setProperty(
            "--ad-popup--width",
            e.getPropertyValue("--playwire-ad--width")
          ),
            document.body.style.setProperty(
              "--ad-popup--height",
              e.getPropertyValue("--playwire-ad--height")
            );
        }
        #I() {
          this.playwireAdPopup && this.playwireAdPopup.updateAdView();
        }
      };
      (0, o.gn)(
        [a.bindable, (0, o.w6)("design:type", Boolean)],
        d.prototype,
        "force",
        void 0
      ),
        (0, o.gn)(
          [
            (0, a.bindable)({ defaultBindingMode: a.bindingMode.fromView }),
            (0, o.w6)("design:type", Boolean),
          ],
          d.prototype,
          "active",
          void 0
        ),
        (d = (0, o.gn)(
          [
            (0, l.b)({
              setup: "attached",
              teardown: "detached",
              selectors: { account: (0, l.g)("account") },
            }),
            (0, a.autoinject)(),
            (0, o.w6)("design:paramtypes", [n.f, r.oc, s.c, Element]),
          ],
          d
        ));
    },
    "resources/elements/boost-balance-button": (t, e, i) => {
      i.r(e), i.d(e, { BoostBalanceButton: () => r });
      var o = i(70655),
        a = i("aurelia-framework"),
        s = i(31389),
        n = i(93082);
      let r = class {
        get trialActive() {
          return (
            this.account.subscription &&
            this.account.subscription.trialEndsAt &&
            (0, s.Z)(
              Date.now(),
              new Date(this.account.subscription.trialEndsAt)
            )
          );
        }
      };
      (0, o.gn)(
        [
          (0, a.computedFrom)("account.subscription.trialEndsAt"),
          (0, o.w6)("design:type", Boolean),
          (0, o.w6)("design:paramtypes", []),
        ],
        r.prototype,
        "trialActive",
        null
      ),
        (r = (0, o.gn)(
          [
            (0, n.b)({ selectors: { account: (0, n.g)("account") } }),
            (0, a.autoinject)(),
          ],
          r
        ));
    },
    "resources/elements/boost-button": (t, e, i) => {
      i.r(e), i.d(e, { BoostButton: () => b });
      var o = i(70655),
        a = i("aurelia-event-aggregator"),
        s = i("aurelia-framework"),
        n = i(45437),
        r = i(31389),
        l = i(23739),
        c = i(19748),
        d = i(26478),
        p = i(29242),
        h = i(94472),
        u = i(93082),
        g = i(27170);
      let b = class {
        #p;
        #h;
        #d;
        #n;
        #q;
        constructor(t, e, i, o, a) {
          (this.boosting = !1),
            (this.#p = t),
            (this.#h = e),
            (this.#d = i),
            (this.#n = o),
            (this.#q = a);
        }
        async boost() {
          if (this.trialActive && 0 === this.account.boosts)
            return void this.#h.toast({
              content: "boost_button.boosts_available_after_trial_period",
              type: "alert",
            });
          if (0 === this.account.boosts)
            return void (
              this.account.subscription &&
              this.#h.toast({
                content: "boost_button.no_boosts",
                type: "alert",
              })
            );
          if (this.boosting) return;
          const t = this.gameId;
          this.boosting = !0;
          try {
            await this.#S(t);
          } catch (e) {
            let i = e;
            if (i instanceof h.MS && 409 === i.status)
              try {
                return (
                  await this.#d.dispatch(g.qg, await this.#p.getUserAccount()),
                  void (await this.#S(t))
                );
              } catch (t) {
                i = t;
              }
            if (
              (this.#h.toast({
                content: "boost_button.an_error_occurred",
                type: "alert",
              }),
              !(i instanceof h.VL || i instanceof TypeError))
            )
              throw i;
          } finally {
            this.boosting = !1;
          }
        }
        async #S(t) {
          const e = await this.#p.boostGame(t, this.account.boosts);
          await this.#d.dispatch(g.qg, e), this.#n.publish(new p.xp(t));
          const i = this.#h.toast({
            type: "boost",
            content: "boost_button.you_boosted_$game",
            i18nParams: {
              game: this.catalog.titles[this.catalog.games[t].titleId].name,
            },
            actions: [
              {
                label: "boost_button.dont_notify_me",
                onclick: async () => {
                  this.#h.remove(i),
                    (await this.#q.unfollowGames([t])) &&
                      this.#h.toast({
                        type: "ok",
                        content:
                          "boost_button.notification_preferences_updated",
                      });
                },
              },
            ],
          });
        }
        get trialActive() {
          return (
            this.account.subscription &&
            this.account.subscription.trialEndsAt &&
            (0, r.Z)(
              Date.now(),
              new Date(this.account.subscription.trialEndsAt)
            )
          );
        }
      };
      (0, o.gn)(
        [s.bindable, (0, o.w6)("design:type", String)],
        b.prototype,
        "icon",
        void 0
      ),
        (0, o.gn)(
          [s.bindable, (0, o.w6)("design:type", String)],
          b.prototype,
          "gameId",
          void 0
        ),
        (0, o.gn)(
          [s.bindable, (0, o.w6)("design:type", Boolean)],
          b.prototype,
          "showCount",
          void 0
        ),
        (0, o.gn)(
          [
            (0, s.computedFrom)("account.subscription.trialEndsAt"),
            (0, o.w6)("design:type", Boolean),
            (0, o.w6)("design:paramtypes", []),
          ],
          b.prototype,
          "trialActive",
          null
        ),
        (b = (0, o.gn)(
          [
            (0, u.b)({
              selectors: {
                account: (0, u.g)("account"),
                catalog: (0, u.g)("catalog"),
              },
            }),
            (0, s.autoinject)(),
            (0, o.w6)("design:paramtypes", [l.K, d.x, n.yh, a.h, c.r]),
          ],
          b
        ));
    },
    "resources/elements/breadcrumbs": (t, e, i) => {
      i.r(e), i.d(e, { Breadcrumbs: () => n });
      var o = i(70655),
        a = i("aurelia-framework"),
        s = i(86433);
      let n = class {
        #A;
        constructor(t) {
          this.#A = t;
        }
        attached() {
          (this.previousRoute =
            this.#A.currentInstruction.queryParams.previousRoute),
            (this.backButtonLabel = `breadcrumbs.back_to_${(
              this.previousRoute ?? ""
            ).replace("-", "_")}`);
        }
        back() {
          this.#A.navigateBack();
        }
      };
      (0, o.gn)(
        [a.bindable, (0, o.w6)("design:type", Array)],
        n.prototype,
        "items",
        void 0
      ),
        (n = (0, o.gn)(
          [(0, a.autoinject)(), (0, o.w6)("design:paramtypes", [s.F0])],
          n
        ));
    },
    "resources/elements/coaching-tip": (t, e, i) => {
      i.r(e), i.d(e, { CoachingTip: () => p });
      var o = i(70655),
        a = i("aurelia-event-aggregator"),
        s = i("aurelia-framework"),
        n = i(45437),
        r = i(29242),
        l = i(339),
        c = i(93082),
        d = i(27170);
      let p = class {
        #B;
        #z;
        #d;
        #O;
        constructor(t, e) {
          (this.position = "right"),
            (this.popupPosition = "right"),
            (this.closeButtonPosition = "right"),
            (this.autoShowInitially = !1),
            (this.detach = !1),
            (this.waitForOtherCoachingTips = !1),
            (this.visible = !1),
            (this.#d = t),
            (this.#O = e);
        }
        attached() {
          this.#T(),
            (this.#z = new l.K4([this.#O.subscribe(r.PC, () => this.#T())]));
        }
        detached() {
          this.#z.dispose(), this.hide();
        }
        show(t = !1) {
          (this.visible = !0),
            this.toggleHighlight(!0),
            this.#d.dispatch(d.cd, this.id, new Date().toISOString()),
            this.#O.publish(new r.qC(this.id, t));
        }
        hide(t) {
          clearTimeout(this.#B),
            (this.visible = !1),
            this.toggleHighlight(!1),
            t && this.#O.publish(new r.PC(this.id, t));
        }
        toggleHighlight(t) {
          this.highlightSelector &&
            document
              .querySelectorAll(this.highlightSelector)
              .forEach((e) => e.classList.toggle("coaching-tip-highlight", t));
        }
        toggle(t) {
          t && (t.preventDefault(), t.stopPropagation()),
            this.visible ? this.hide("click-outside") : this.show();
        }
        get closeIfClickOutsideVisible() {
          return this.visible;
        }
        set closeIfClickOutsideVisible(t) {
          t ? this.show() : this.hide("click-outside");
        }
        #V() {
          return !!document.querySelector("coaching-tip.show");
        }
        #T() {
          clearTimeout(this.#B),
            this.autoShowInitially &&
              !this.coachingTipHistory[this.id]?.tipShownAt &&
              (this.#B = setTimeout(() => {
                (this.waitForOtherCoachingTips && this.#V()) || this.show(!0);
              }, 2e3));
        }
      };
      (0, o.gn)(
        [s.bindable, (0, o.w6)("design:type", Boolean)],
        p.prototype,
        "hideHotspot",
        void 0
      ),
        (0, o.gn)(
          [s.bindable, (0, o.w6)("design:type", String)],
          p.prototype,
          "position",
          void 0
        ),
        (0, o.gn)(
          [s.bindable, (0, o.w6)("design:type", String)],
          p.prototype,
          "popupPosition",
          void 0
        ),
        (0, o.gn)(
          [s.bindable, (0, o.w6)("design:type", String)],
          p.prototype,
          "closeButtonPosition",
          void 0
        ),
        (0, o.gn)(
          [s.bindable, (0, o.w6)("design:type", String)],
          p.prototype,
          "id",
          void 0
        ),
        (0, o.gn)(
          [s.bindable, (0, o.w6)("design:type", Boolean)],
          p.prototype,
          "autoShowInitially",
          void 0
        ),
        (0, o.gn)(
          [s.bindable, (0, o.w6)("design:type", Boolean)],
          p.prototype,
          "detach",
          void 0
        ),
        (0, o.gn)(
          [s.bindable, (0, o.w6)("design:type", String)],
          p.prototype,
          "highlightSelector",
          void 0
        ),
        (0, o.gn)(
          [s.bindable, (0, o.w6)("design:type", Boolean)],
          p.prototype,
          "waitForOtherCoachingTips",
          void 0
        ),
        (0, o.gn)(
          [
            (0, s.computedFrom)("visible"),
            (0, o.w6)("design:type", Boolean),
            (0, o.w6)("design:paramtypes", [Boolean]),
          ],
          p.prototype,
          "closeIfClickOutsideVisible",
          null
        ),
        (p = (0, o.gn)(
          [
            (0, c.b)({
              selectors: { coachingTipHistory: (0, c.g)("coachingTipHistory") },
            }),
            (0, s.autoinject)(),
            (0, o.w6)("design:paramtypes", [n.yh, a.h]),
          ],
          p
        ));
    },
    "resources/elements/email-input": (t, e, i) => {
      i.r(e), i.d(e, { EmailInput: () => r });
      var o = i(70655),
        a = i("aurelia-framework"),
        s = i(8462),
        n = i("shared/dialogs/basic-dialog");
      let r = class {
        #M;
        #$;
        constructor(t, e) {
          (this.status = "none"),
            (this.autoFocus = !1),
            (this.large = !1),
            (this.focused = !1),
            (this.#M = t),
            (this.#$ = e);
        }
        attached() {
          this.autoFocus && this.inputEl?.focus();
        }
        bind() {
          this.value = this.existingEmail || "";
        }
        valueChanged() {
          this.#F();
        }
        existingEmailChanged() {
          (this.value = this.existingEmail), this.#F();
        }
        #g() {
          return "string" == typeof this.value
            ? this.value.replace(/[。｡︒]/g, ".")
            : null;
        }
        async #F() {
          const t = this.#g();
          if (null === t || 0 === t.length) return (this.status = "none"), null;
          if (this.existingEmail === this.value)
            return (this.status = "none"), null;
          this.status = "validating";
          const e = await this.#M.validate(t);
          return t !== this.#g() ? null : ((this.status = e.status), e);
        }
        async validateWithFeedback() {
          const t = await this.#F();
          if (null === t || null === t.status) return !1;
          if (t.status === s.q.Valid) return !0;
          if (t.status === s.q.Invalid)
            return await this.#$.ok("auth.invalid"), !1;
          if (t.status === s.q.Unsure)
            return (
              "auth.looks_good" ===
              (await this.#$.show({
                cancelable: !0,
                message: "auth.misspelled_email_$email",
                messageParams: { email: this.#g() },
                options: [
                  { label: "auth.cancel" },
                  { label: "auth.looks_good", style: "primary" },
                ],
              }))
            );
          throw new Error(`Unknown email validation status ${t.status}.`);
        }
        handleBlur() {
          (this.value = this.inputEl.value), (this.focused = !1);
        }
        handleFocus() {
          this.focused = !0;
        }
      };
      (0, o.gn)(
        [
          (0, a.bindable)({ defaultBindingMode: a.bindingMode.twoWay }),
          (0, o.w6)("design:type", String),
        ],
        r.prototype,
        "value",
        void 0
      ),
        (0, o.gn)(
          [
            (0, a.bindable)({ defaultBindingMode: a.bindingMode.toView }),
            (0, o.w6)("design:type", String),
          ],
          r.prototype,
          "placeholder",
          void 0
        ),
        (0, o.gn)(
          [
            (0, a.bindable)({ defaultBindingMode: a.bindingMode.fromView }),
            (0, o.w6)("design:type", String),
          ],
          r.prototype,
          "status",
          void 0
        ),
        (0, o.gn)(
          [
            (0, a.bindable)({ defaultBindingMode: a.bindingMode.toView }),
            (0, o.w6)("design:type", Boolean),
          ],
          r.prototype,
          "autoFocus",
          void 0
        ),
        (0, o.gn)(
          [
            (0, a.bindable)({ defaultBindingMode: a.bindingMode.toView }),
            (0, o.w6)("design:type", String),
          ],
          r.prototype,
          "existingEmail",
          void 0
        ),
        (0, o.gn)(
          [
            (0, a.bindable)({ defaultBindingMode: a.bindingMode.toView }),
            (0, o.w6)("design:type", Boolean),
          ],
          r.prototype,
          "large",
          void 0
        ),
        (r = (0, o.gn)(
          [
            (0, a.autoinject)(),
            (0, o.w6)("design:paramtypes", [s.o, n.BasicDialogService]),
          ],
          r
        ));
    },
    "resources/elements/favorite-button": (t, e, i) => {
      i.r(e), i.d(e, { FavoriteButton: () => l });
      var o = i(70655),
        a = i("aurelia-framework"),
        s = i(45437),
        n = i(93082),
        r = i(27170);
      let l = class {
        #t;
        #d;
        constructor(t, e) {
          (this.#t = t), (this.#d = e);
        }
        bind() {
          this.favoritesChanged();
        }
        favoritesChanged() {
          this.favorites &&
            (this.favorite = this.favorites.hasOwnProperty(this.titleId));
        }
        toggleFavorite(t) {
          this.favorite
            ? this.#t.classList.remove("bump")
            : (this.#t.classList.add("bump"),
              setTimeout(() => this.#t.classList.remove("bump"), 300)),
            setTimeout(() => {
              this.#d.dispatch(r.b9, this.titleId);
            }),
            t.stopPropagation();
        }
      };
      (0, o.gn)(
        [
          (0, a.bindable)({ defaultBindingMode: a.bindingMode.twoWay }),
          (0, o.w6)("design:type", String),
        ],
        l.prototype,
        "titleId",
        void 0
      ),
        (l = (0, o.gn)(
          [
            (0, n.b)({ selectors: { favorites: (0, n.g)("favoriteTitles") } }),
            (0, a.inject)(Element, s.yh),
            (0, o.w6)("design:paramtypes", [Element, s.yh]),
          ],
          l
        ));
    },
    "resources/elements/follow-button": (t, e, i) => {
      i.r(e), i.d(e, { FollowButton: () => n });
      var o = i(70655),
        a = i("aurelia-framework"),
        s = i(19748);
      let n = class {
        constructor(t, e) {
          (this.element = t), (this.followedGames = e);
        }
        get following() {
          return (
            !!this.gameId &&
            !!this.followedGames.followedGames.find(
              (t) => t.gameId === this.gameId
            )
          );
        }
        async toggle(t) {
          if ((t.preventDefault(), !this.busy)) {
            this.busy = !0;
            try {
              this.following
                ? (await this.followedGames.unfollowGames([this.gameId]),
                  this.element?.classList.remove("bump"))
                : (await this.followedGames.followGames([this.gameId], 2),
                  this.element?.classList.add("bump"),
                  setTimeout(
                    () => this.element?.classList.remove("bump"),
                    300
                  ));
            } finally {
              this.busy = !1;
            }
          }
        }
      };
      (0, o.gn)(
        [a.bindable, (0, o.w6)("design:type", String)],
        n.prototype,
        "gameId",
        void 0
      ),
        (0, o.gn)(
          [
            (0, a.computedFrom)("gameId", "followedGames.followedGames"),
            (0, o.w6)("design:type", Boolean),
            (0, o.w6)("design:paramtypes", []),
          ],
          n.prototype,
          "following",
          null
        ),
        (n = (0, o.gn)(
          [(0, a.autoinject)(), (0, o.w6)("design:paramtypes", [Element, s.r])],
          n
        ));
    },
    "resources/elements/layout-toggle": (t, e, i) => {
      i.r(e), i.d(e, { Layout: () => o, LayoutToggle: () => c });
      var o,
        a = i(70655),
        s = i("aurelia-framework"),
        n = i(45437),
        r = i(93082),
        l = i(27170);
      !(function (t) {
        (t.List = "list"), (t.Thumbnail = "thumbnail");
      })(o || (o = {}));
      let c = class {
        #d;
        constructor(t) {
          (this.wide = !1), (this.#d = t);
        }
        bind() {
          this.settingsKey &&
            (this.layout =
              this.settings[this.settingsKey] ?? (this.default || o.List));
        }
        toggle() {
          this.layout === o.List ? this.set(o.Thumbnail) : this.set(o.List);
        }
        set(t) {
          (this.layout = t),
            this.settingsKey &&
              this.#d.dispatch(
                l.D3,
                { [this.settingsKey]: this.layout },
                this.source
              );
        }
      };
      (0, a.gn)(
        [
          (0, s.bindable)({ defaultBindingMode: s.bindingMode.twoWay }),
          (0, a.w6)("design:type", String),
        ],
        c.prototype,
        "layout",
        void 0
      ),
        (0, a.gn)(
          [s.bindable, (0, a.w6)("design:type", String)],
          c.prototype,
          "settingsKey",
          void 0
        ),
        (0, a.gn)(
          [s.bindable, (0, a.w6)("design:type", String)],
          c.prototype,
          "default",
          void 0
        ),
        (0, a.gn)(
          [s.bindable, (0, a.w6)("design:type", String)],
          c.prototype,
          "source",
          void 0
        ),
        (0, a.gn)(
          [s.bindable, (0, a.w6)("design:type", Boolean)],
          c.prototype,
          "wide",
          void 0
        ),
        (c = (0, a.gn)(
          [
            (0, r.b)({ selectors: { settings: (0, r.g)("settings") } }),
            (0, s.autoinject)(),
            (0, a.w6)("design:paramtypes", [n.yh]),
          ],
          c
        ));
    },
    "resources/elements/lazy-render": (t, e, i) => {
      i.r(e), i.d(e, { LazyRender: () => n });
      var o = i(70655),
        a = i("aurelia-framework");
      let s = class {
        constructor() {
          (this.#P = new Map()), (this.#R = new Map()), (this.#H = new Map());
        }
        #P;
        #R;
        #H;
        observe(t, e, i) {
          let o = this.#P.get(e);
          o ||
            ((o = new IntersectionObserver(
              (t) => {
                t.forEach((t) => this.#j(t));
              },
              { root: e, rootMargin: "500px", threshold: [] }
            )),
            this.#P.set(e, o));
          const a = this.#R.get(o) || 0;
          o.observe(t),
            this.#R.set(o, a + 1),
            this.#H.set(t, {
              timeout: null,
              callback: i,
              initialUpdate: !0,
              root: e,
            });
        }
        unobserve(t) {
          const e = this.#H.get(t);
          if (e) {
            const i = this.#P.get(e.root);
            if (i) {
              const o = this.#R.get(i) || 0;
              i.unobserve(t),
                o <= 1
                  ? (i.disconnect(), this.#P.delete(e.root), this.#R.delete(i))
                  : this.#R.set(i, o - 1);
            }
            clearTimeout(e.timeout), this.#H.delete(t);
          }
        }
        #j(t) {
          const e = t.isIntersecting,
            i = t.target,
            o = this.#H.get(i);
          if (o) {
            if ((clearTimeout(o.timeout), o.callback))
              if (!e || o.initialUpdate) o.callback(e);
              else {
                const t = setTimeout(() => o.callback(!0), 100);
                o.timeout = t;
              }
            o.initialUpdate = !1;
          }
        }
      };
      s = (0, o.gn)([(0, a.singleton)()], s);
      let n = class {
        #t;
        #U;
        constructor(t, e) {
          (this.visible = !1), (this.#t = t), (this.#U = e);
        }
        attached() {
          const t = document.querySelector(".view-scrollable");
          this.#U.observe(this.#t.parentElement, t, (t) => (this.visible = t));
        }
        detached() {
          this.#U.unobserve(this.#t.parentElement);
        }
      };
      n = (0, o.gn)(
        [
          (0, a.autoinject)(),
          (0, a.containerless)(),
          (0, o.w6)("design:paramtypes", [Element, s]),
        ],
        n
      );
    },
    "resources/elements/playwire-ad-popup": (t, e, i) => {
      i.r(e), i.d(e, { PlaywireAdPopup: () => u });
      var o = i(70655),
        a = i("aurelia-framework"),
        s = i(16511),
        n = i(81866),
        r = i(81110),
        l = i(35969),
        c = i(93082),
        d = i(51722),
        p = i(11912);
      const h = "game_page_bottom_right";
      let u = class {
        #u;
        #x;
        #k;
        constructor(t, e, i) {
          (this.active = !1),
            (this.initialized = !1),
            (this.hideOnInitialize = !1),
            (this.#u = t),
            (this.#x = e),
            (this.#k = i);
        }
        attached() {
          this.#G();
        }
        detached() {
          this.#x.destroyAdView(h);
        }
        async #G() {
          if ((await (0, p.UC)(150), this.webviewEl))
            try {
              await this.#x.createAdView(this.#K()),
                this.hideOnInitialize && this.hideAd();
            } catch {
              this.disable?.();
            }
          else this.disable?.();
          this.initialized = !0;
        }
        hideAd() {
          this.initialized || (this.hideOnInitialize = !0),
            this.#x.hideAdView(h);
        }
        showAd() {
          this.initialized || (this.hideOnInitialize = !1),
            this.#x.showAdView(h);
        }
        updateAdView() {
          this.webviewEl && this.#x.updateAdView(this.#K());
        }
        #K() {
          const t = this.webviewEl.getBoundingClientRect(),
            e =
              parseFloat(
                window
                  .getComputedStyle(this.webviewEl)
                  .getPropertyValue("--webview--zoom")
              ) || 1;
          return {
            id: h,
            url: this.#Z(),
            anchorX: "far",
            anchorY: "far",
            zoom: e,
            bounds: { x: t.x, y: t.y, width: t.width, height: t.height },
            parentSize: {
              width: window.innerWidth,
              height: window.innerHeight,
            },
            debug: (0, d.yE)(this.account.flags, 8192),
          };
        }
        #Z() {
          let t = `https://www.wemod.com/webview/playwire/trendi?app=1&locale=${this.#k
            .getEffectiveLocale()
            .toString()}`;
          return (
            this.account.gdpr?.consentGiven && (t += "&gdpr_consent_given=1"),
            t + s.uZ.sZ.w
          );
        }
      };
      (0, o.gn)(
        [
          (0, a.bindable)({ defaultBindingMode: a.bindingMode.toView }),
          (0, o.w6)("design:type", Function),
        ],
        u.prototype,
        "disable",
        void 0
      ),
        (0, o.gn)(
          [
            (0, a.bindable)({ defaultBindingMode: a.bindingMode.toView }),
            (0, o.w6)("design:type", Boolean),
          ],
          u.prototype,
          "active",
          void 0
        ),
        (u = (0, o.gn)(
          [
            (0, c.b)({
              setup: "attached",
              teardown: "detached",
              selectors: { account: (0, c.g)("account") },
            }),
            (0, a.autoinject)(),
            (0, o.w6)("design:paramtypes", [n.c, r.f, l.oc]),
          ],
          u
        ));
    },
    "resources/elements/pro-cta-label": (t, e, i) => {
      i.r(e), i.d(e, { ProCtaLabel: () => l });
      var o = i(70655),
        a = i("aurelia-framework"),
        s = i(95112),
        n = i(93082),
        r = i(51722);
      let l = class {
        constructor(t) {
          (this.promotions = t), (this.trialAvailable = !0);
        }
        get eligibleForFreeTrial() {
          return (
            this.trialAvailable &&
            !(0, r.yE)(this.account?.flags, 2048) &&
            !(0, r.yE)(this.promotions.promotion?.flags, 1)
          );
        }
      };
      (0, o.gn)(
        [a.bindable, (0, o.w6)("design:type", Boolean)],
        l.prototype,
        "trialAvailable",
        void 0
      ),
        (0, o.gn)(
          [a.bindable, (0, o.w6)("design:type", String)],
          l.prototype,
          "trialKey",
          void 0
        ),
        (0, o.gn)(
          [a.bindable, (0, o.w6)("design:type", String)],
          l.prototype,
          "noTrialKey",
          void 0
        ),
        (0, o.gn)(
          [
            (0, a.computedFrom)(
              "account.flags",
              "trialAvailable",
              "promotions.promotion"
            ),
            (0, o.w6)("design:type", Boolean),
            (0, o.w6)("design:paramtypes", []),
          ],
          l.prototype,
          "eligibleForFreeTrial",
          null
        ),
        (l = (0, o.gn)(
          [
            (0, n.b)({ selectors: { account: (0, n.g)("account") } }),
            (0, a.autoinject)(),
            (0, o.w6)("design:paramtypes", [s.z]),
          ],
          l
        ));
    },
    "resources/elements/remote-code": (t, e, i) => {
      i.r(e), i.d(e, { RemoteCode: () => r });
      var o = i(70655),
        a = i("aurelia-framework"),
        s = i(23739),
        n = i(76330);
      let r = class {
        #p;
        #W;
        #D;
        constructor(t, e) {
          (this.remote = t),
            (this.visible = !0),
            (this.#W = null),
            (this.#D = null),
            (this.#p = e);
        }
        attached() {
          this.visibleChanged(),
            (this.#D = this.remote.onStatusChanged((t) => {
              t !== n.d.Disconnected && (this.code = null);
            }));
        }
        detached() {
          null !== this.#D && (this.#D.dispose(), (this.#D = null)),
            null !== this.#W && (clearInterval(this.#W), (this.#W = null));
        }
        get isConnected() {
          return this.remote.status === n.d.Connected;
        }
        visibleChanged() {
          this.visible && (this.code || this.isConnected || this.#N());
        }
        #Q() {
          this.isConnected ||
            (this.code && (this.timeElapsed = this.code.expiresIn),
            this.codeElement?.classList.add("expired"),
            setTimeout(async () => {
              this.codeElement &&
                !this.isConnected &&
                (await this.#N(),
                this.codeElement?.classList.remove("expired"));
            }, 1e3));
        }
        async #N() {
          try {
            this.code = await this.#p.requestRemoteAuthCode();
          } catch {
            return void (this.code = null);
          }
          (this.timeElapsed = 0),
            clearInterval(this.#W),
            (this.#W = setInterval(() => {
              (this.timeElapsed += 0.01),
                (!this.code || this.timeElapsed >= this.code.expiresIn) &&
                  (clearInterval(this.#W),
                  this.visible ? this.#Q() : (this.code = null));
            }, 10));
        }
      };
      (0, o.gn)(
        [(0, a.bindable)(), (0, o.w6)("design:type", Boolean)],
        r.prototype,
        "visible",
        void 0
      ),
        (0, o.gn)(
          [
            (0, a.computedFrom)("remote.status"),
            (0, o.w6)("design:type", Boolean),
            (0, o.w6)("design:paramtypes", []),
          ],
          r.prototype,
          "isConnected",
          null
        ),
        (r = (0, o.gn)(
          [(0, a.autoinject)(), (0, o.w6)("design:paramtypes", [n.K, s.K])],
          r
        ));
    },
    "resources/elements/remote-qr-code": (t, e, i) => {
      i.r(e), i.d(e, { RemoteQrCode: () => s });
      var o = i(92592);
      const a = `${i(16511).fY}/remote`;
      class s {
        attached() {
          this.#X();
        }
        #X() {
          this.canvasElement && o.rT(this.canvasElement, a);
        }
      }
    },
    "resources/elements/toast-anchor": (t, e, i) => {
      i.r(e), i.d(e, { ToastAnchor: () => n });
      var o = i(70655),
        a = i("aurelia-framework"),
        s = i(26478);
      let n = class {
        #t;
        #h;
        #Y;
        #J;
        constructor(t, e) {
          (this.#t = t), (this.#h = e);
        }
        attached() {
          (this.#J = new IntersectionObserver((t) => {
            const e = t[0];
            if (e.isIntersecting) this.#tt();
            else {
              const t = e.boundingClientRect.top > 0 ? "down" : "up";
              this.#et(t);
            }
          })),
            this.#J.observe(this.#t);
        }
        detached() {
          this.#J.disconnect(), this.#tt();
        }
        #et(t) {
          this.#Y = this.#h.toast({
            content: this.labelKey,
            persist: !0,
            type: `arrow-${t}`,
            lock: !0,
            onclick: () => this.#it(),
          });
        }
        #tt() {
          this.#h.remove(this.#Y);
        }
        #it() {
          if (this.scrollEl) {
            const t =
                document
                  .querySelector("header.app-header")
                  ?.getBoundingClientRect().height || 0,
              e = this.#t.offsetTop - t - 10;
            this.scrollEl.scrollTo({ top: e, behavior: "smooth" });
          }
        }
      };
      (0, o.gn)(
        [a.bindable, (0, o.w6)("design:type", String)],
        n.prototype,
        "name",
        void 0
      ),
        (0, o.gn)(
          [a.bindable, (0, o.w6)("design:type", String)],
          n.prototype,
          "labelKey",
          void 0
        ),
        (0, o.gn)(
          [a.bindable, (0, o.w6)("design:type", HTMLElement)],
          n.prototype,
          "scrollEl",
          void 0
        ),
        (n = (0, o.gn)(
          [
            (0, a.inlineView)("<template></template>"),
            (0, a.autoinject)(),
            (0, o.w6)("design:paramtypes", [Element, s.x]),
          ],
          n
        ));
    },
    "resources/index": (t, e, i) => {
      function o(t) {
        t.globalResources([
          "./value-converters/game",
          "./custom-attributes/attach-src",
          "./custom-attributes/pro-cta",
          "./custom-attributes/title-link",
        ]);
      }
      i.r(e), i.d(e, { configure: () => o }), i("aurelia-framework");
    },
    "resources/value-converters/game": (t, e, i) => {
      i.r(e), i.d(e, { GameFlagsValueConverter: () => s });
      var o = i(2314),
        a = i(51722);
      class s {
        toView(t, ...e) {
          return (0, a.EB)(
            "number" == typeof t ? t : t.flags,
            e.map((t) => o.p[t])
          );
        }
      }
    },
  },
]);

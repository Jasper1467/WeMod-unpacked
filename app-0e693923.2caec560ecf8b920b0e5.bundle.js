"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [2430],
  {
    "cheats/game-collection.scss": (e, t, a) => {
      a.r(t), a.d(t, { default: () => p });
      var i = a(8081),
        r = a.n(i),
        o = a(23645),
        n = a.n(o),
        s = a(61667),
        c = a.n(s),
        l = new URL(a(79661), a.b),
        d = n()(r()),
        g = c()(l);
      d.push([
        e.id,
        'section.game-collection .top header{font-weight:800;font-size:35px;line-height:40px;font-weight:800;color:#fff;display:inline-flex;align-items:center;margin-bottom:33px;display:flex;align-items:center}section.game-collection .top header>*+*{margin-left:15px;line-height:0}section.game-collection .top header .name{flex:1}section.game-collection .top header layout-toggle{margin-left:10px}section.game-collection .group h1{font-weight:800;font-size:21px;line-height:30px;color:#fff;margin:0 0 22px}section.game-collection .group h1 .count{color:rgba(255,255,255,.4);margin-left:2px}section.game-collection .group+.group{margin-top:40px}section.game-collection .grid{display:grid;justify-content:start;grid-template-columns:repeat(auto-fill, 258px);gap:26px}section.game-collection .grid .game-feed-item-placeholder{padding-bottom:59.65px}section.game-collection .grid .game-feed-item-placeholder:before{width:258px;height:120px;border-radius:10px;display:block;content:"";background:rgba(255,255,255,.04)}section.game-collection .empty .empty-message{display:inline-block;border-radius:10px;background:rgba(255,255,255,.04);padding:12px 20px 15px;margin:0 0 30px;max-width:445px;width:100%}section.game-collection .empty .empty-message h1{font-weight:600;font-size:16px;line-height:25px;font-weight:700;color:#fff;margin:0 0 5px}section.game-collection .empty .empty-message p{font-size:14px;line-height:21px;color:rgba(255,255,255,.6);margin:0}section.game-collection .empty .empty-message.favorite-icon p em{position:relative;color:rgba(0,0,0,0);display:inline-block;width:15px;height:15px;vertical-align:text-top;background:url(' +
          g +
          ") center/contain no-repeat;opacity:.6}section.game-collection .empty .alternate-feed h1{font-weight:800;font-size:21px;line-height:30px;font-weight:700;color:#fff;margin:0 0 23px}section.game-collection .search+.group,section.game-collection .search+.empty,section.game-collection .search+.no-results-message{margin-top:38px}section.game-collection .search+.pills{margin-top:22px}section.game-collection .pills{display:flex;align-items:center;flex-wrap:wrap;margin:-11px 0 0 -11px;margin-bottom:32px}section.game-collection .pills>*{margin-left:11px;margin-top:11px}section.game-collection .pills a{font-size:14px;line-height:21px;font-weight:700;display:inline-flex;align-items:center;padding:3px 12px;color:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.2);border-radius:100px;transition:color .15s,border-color .15s,background-color .15s}section.game-collection .pills a:hover{background:rgba(255,255,255,.6);border-color:rgba(0,0,0,0);color:var(--theme--background)}section.game-collection .pills a.active{background:rgba(255,255,255,.6);border-color:rgba(0,0,0,0);color:var(--theme--background)}section.game-collection .pills a i{margin-right:5px}section.game-collection .pills a.icon-favorite svg{width:15px;height:15px}section.game-collection .pills a.icon-favorite svg *{fill:var(--theme--background);stroke:rgba(255,255,255,.4);transition:stroke .15s}section.game-collection .pills a:hover.icon-favorite svg *,section.game-collection .pills a.active.icon-favorite svg *{stroke:var(--theme--background)}section.game-collection .no-results-message h4{font-weight:800;font-size:21px;line-height:30px;font-weight:700;color:#fff;margin:0 0 11px}section.game-collection .no-results-message p{font-size:13px;line-height:20px;color:rgba(255,255,255,.7)}",
        "",
      ]);
      const p = d;
    },
    "cheats/game.scss": (e, t, a) => {
      a.r(t), a.d(t, { default: () => u });
      var i = a(8081),
        r = a.n(i),
        o = a(23645),
        n = a.n(o),
        s = a(61667),
        c = a.n(s),
        l = new URL(a(24052), a.b),
        d = new URL(a(47254), a.b),
        g = new URL(a(69410), a.b),
        p = n()(r()),
        h = c()(l),
        m = c()(d),
        b = c()(g);
      p.push([
        e.id,
        'playwire-ad-popup{display:flex;background:var(--theme--background);width:375px;height:210px}playwire-ad-popup .webview-placeholder{overflow:hidden;width:100%;height:100%;border:0}ad-popup{--playwire-ad--width: 375px;--playwire-ad--height: 210px;display:block;position:fixed;right:30px;bottom:0;padding-bottom:20px;z-index:9998;visibility:hidden}ad-popup .wrapper{background:var(--theme--background) linear-gradient(rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)) !important;border-bottom-left-radius:10px;border-bottom-right-radius:10px}ad-popup.active{visibility:visible}ad-popup .content{width:var(--ad-popup--width);display:flex;align-items:center;margin:0;padding:10px 20px;min-height:56px}ad-popup .content i{margin-right:15px}ad-popup .content i svg{width:43px;height:33px}ad-popup .content p{font-size:12px;line-height:18px;color:rgba(255,255,255,.6);margin:0}ad-popup .content p a{font-size:12px;line-height:18px;background:rgba(0,0,0,0) !important;padding:0;border:0;display:inline-flex;align-items:center;color:var(--theme--highlight);text-decoration:none}ad-popup .content p a svg *{fill:var(--theme--highlight)}@media(hover: hover){ad-popup .content p a:hover{color:#fff}ad-popup .content p a:hover svg *{fill:#fff}}ad-popup .content p a:after{content:"";display:inline-block;width:5px;height:9px;-webkit-mask-box-image:url(' +
          h +
          ');margin-left:5px;background:var(--theme--highlight);transition:transform .15s}@media(hover: hover){ad-popup .content p a:hover{color:#fff}ad-popup .content p a:hover:after{transform:translateX(3px);background:#fff}}@media(max-height: 800px){ad-popup{padding-bottom:0}ad-popup .content{display:none}}ux-dialog.basic-dialog.trainer-notes-dialog ux-dialog-body img{max-width:70%}section.game{--trainer-tab-content-top: calc(var(--constant--appHeaderHeight) + 80px + 75px)}section.game .trainer-layout{min-height:100%;display:flex;flex-direction:row}section.game .trainer-layout .trainer-layout-left{flex:1;min-width:0}section.game .trainer-layout .trainer-layout-right{flex:0 1 375px;transition:flex .15s,margin-left .15s,opacity .15s;position:relative;margin-left:15px;margin-top:-5px}section.game .trainer-layout .trainer-layout-right.collapsed{flex:0 0 0;margin-left:0;overflow:hidden;opacity:0}section.game .trainer-layout .trainer-layout-right.collapsed .trainer-tab-content-wrapper{min-height:initial}section.game .trainer-actions{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;min-height:39px}section.game .trainer-actions save-cheats-toggle{margin-right:15px}section.game .trainer-actions save-cheats-toggle.au-enter-active{animation:trainer-actions-fade .15s}section.game .trainer-actions save-cheats-toggle.au-leave-active{animation:trainer-actions-fade .15s reverse forwards}section.game .trainer-tab-content-wrapper{position:fixed;right:30px;top:var(--trainer-tab-content-top);width:375px;max-height:calc(100vh - var(--trainer-tab-content-top) - 20px);border-radius:10px;overflow-x:hidden;overflow:auto}section.game .trainer-tab-content-wrapper::-webkit-scrollbar{width:7px;height:7px;background:rgba(255,255,255,.1);border-radius:10px;margin:10px}section.game .trainer-tab-content-wrapper::-webkit-scrollbar-thumb:window-inactive,section.game .trainer-tab-content-wrapper::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,.2);border-radius:99px;border:1px solid rgba(0,0,0,.2);background-clip:padding-box}section.game .trainer-tab-content-wrapper::-webkit-scrollbar-thumb:window-inactive:hover,section.game .trainer-tab-content-wrapper::-webkit-scrollbar-thumb:hover{background-color:rgba(255,255,255,.5)}section.game .trainer-tab-content-wrapper::-webkit-scrollbar-button:single-button:vertical:decrement{height:15px}section.game .trainer-tab-content-wrapper::-webkit-scrollbar-button:single-button:vertical:increment{height:0}@media(forced-colors: active){body:not(.override-contrast-mode) section.game .trainer-tab-content-wrapper{border:1px solid #fff}}section.game .trainer-tab-content-wrapper.scroll-content-to-fit-ad{max-height:calc(100vh - var(--trainer-tab-content-top) - var(--game-ad-popup-safe-area, 0px) - 20px);min-height:100px}section.game .trainer-tabs{display:inline-flex;background:rgba(255,255,255,.05);padding:0;border-radius:99px;margin-top:15px;position:absolute;right:0;top:80px}section.game .trainer-tabs .tab{font-size:13px;line-height:20px;font-weight:700;background:rgba(0,0,0,0);border:none;outline:0;padding:7.5px 12px;color:rgba(255,255,255,.5);transition:color .15s;position:relative}section.game .trainer-tabs .tab+*:before{content:"";position:absolute;left:0;top:50%;margin-top:-6.5px;width:1px;height:13px;border-left:1px solid rgba(255,255,255,.15)}section.game .trainer-tabs .tab:first-child{padding-left:15.5px}section.game .trainer-tabs .tab:last-of-type{padding-right:15.5px}section.game .trainer-tabs .tab:hover{color:#fff}section.game .trainer-tabs .tab.current{color:#fff}section.game .trainer-tabs .tab .label.with-pro-badge strong{background-color:var(--theme--highlight);display:inline-block;font-weight:800;font-size:14px;text-transform:uppercase;color:#fff;line-height:20px;letter-spacing:.6px;padding:0 4px;border-radius:2.5px;min-width:0;text-rendering:geometricPrecision;line-height:14px;font-size:10px;letter-spacing:.4px;padding:0 3px;background:linear-gradient(225deg, var(--color--brand-green) 0%, var(--color--pro) 100%);color:#fff;margin:0 0 0 3px}@media(forced-colors: active){body:not(.override-contrast-mode) section.game .trainer-tabs .tab .label.with-pro-badge strong{border:1px solid #fff}}section.game .trainer-tabs .extras{position:absolute;right:100%;display:block;align-items:center;padding:10px 5px}section.game .trainer-tabs .extras button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-size:13px;line-height:20px;font-weight:700;--cta--padding: 11px;--cta--height: 26px;--cta--hover--border-width: 1px;min-width:var(--cta--height);width:var(--cta--height);border-radius:50%;justify-content:center;align-items:center;box-shadow:none;width:15px;height:15px;display:inline-flex;justify-content:center;align-items:center;position:relative;box-shadow:none !important;background:rgba(0,0,0,0) !important}section.game .trainer-tabs .extras button,section.game .trainer-tabs .extras button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) section.game .trainer-tabs .extras button{border:1px solid #fff}}section.game .trainer-tabs .extras button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}section.game .trainer-tabs .extras button>*:first-child{padding-left:0}section.game .trainer-tabs .extras button>*:last-child{padding-right:0}section.game .trainer-tabs .extras button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) section.game .trainer-tabs .extras button svg *{fill:CanvasText}}section.game .trainer-tabs .extras button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) section.game .trainer-tabs .extras button svg{opacity:1}}section.game .trainer-tabs .extras button img{height:50%}section.game .trainer-tabs .extras button:disabled{opacity:.3}section.game .trainer-tabs .extras button:disabled,section.game .trainer-tabs .extras button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){section.game .trainer-tabs .extras button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}section.game .trainer-tabs .extras button:not(:disabled):hover svg{opacity:1}}section.game .trainer-tabs .extras button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}section.game .trainer-tabs .extras button,section.game .trainer-tabs .extras button>*{padding:0 !important}@media(forced-colors: active){body:not(.override-contrast-mode) section.game .trainer-tabs .extras button{border:0 !important}}section.game .trainer-tabs .extras button svg{max-width:15px;max-height:15px}section.game .trainer-tabs .extras button svg *{color:#fff}section.game .trainer-tabs.docked{position:fixed;top:calc(80px + var(--constant--appHeaderHeight));right:30px;z-index:9998}section.game .trainer-tab-content{max-height:100%}section.game .trainer-tab-content header{font-weight:800;font-size:21px;line-height:30px;font-weight:700;margin-bottom:10px;color:#fff}section.game .trainer-tab-content map-banner+section{margin-top:30px}section.game .trainer-tab-content section+map-banner{margin-top:23px}section.game .trainer-tab-content>section{padding:15px;background:rgba(255,255,255,.04);overflow:hidden;border-radius:10px}section.game .trainer-tab-content.info{font-size:12px;line-height:18px;color:rgba(255,255,255,.4)}section.game .trainer-tab-content.info .info-link{font-size:12px;line-height:18px;background:rgba(0,0,0,0) !important;padding:0;border:0;display:inline-flex;align-items:center;color:var(--theme--highlight);text-decoration:none;margin-top:10px;margin-right:10px}section.game .trainer-tab-content.info .info-link svg *{fill:var(--theme--highlight)}@media(hover: hover){section.game .trainer-tab-content.info .info-link:hover{color:#fff}section.game .trainer-tab-content.info .info-link:hover svg *{fill:#fff}}section.game .trainer-tab-content.info .info-link:after{content:"";display:inline-block;width:5px;height:9px;-webkit-mask-box-image:url(' +
          h +
          ');margin-left:5px;background:var(--theme--highlight);transition:transform .15s}@media(hover: hover){section.game .trainer-tab-content.info .info-link:hover{color:#fff}section.game .trainer-tab-content.info .info-link:hover:after{transform:translateX(3px);background:#fff}}section.game .trainer-tab-content.info .info-success{font-size:12px;line-height:18px;display:inline-flex;align-items:center;margin-top:10px;color:var(--color--accent)}section.game .trainer-tab-content.info .info-success:before{content:"";display:inline-block;width:15px;height:11px;-webkit-mask-box-image:url(' +
          m +
          ');margin-right:5px;margin-bottom:2px;background:var(--color--accent);transition:transform .15s}section.game .trainer-tab-content.info p{margin:10px 0}section.game .trainer-tab-content.info p strong{font-weight:bold;color:#fff}section.game .trainer-tab-content.info p a{color:rgba(255,255,255,.8);transition:color .15s}section.game .trainer-tab-content.info p a:hover{color:#fff}section.game .trainer-tab-content.info hr{border:0;border-top:1px solid rgba(255,255,255,.1);margin:15px 0}section.game .trainer-tab-content.creator .creator-action-button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-weight:700;font-size:15px;line-height:24px;font-weight:700;--cta--padding: 12px;--cta--height: 28px;--cta--hover--border-width: 1px}section.game .trainer-tab-content.creator .creator-action-button,section.game .trainer-tab-content.creator .creator-action-button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) section.game .trainer-tab-content.creator .creator-action-button{border:1px solid #fff}}section.game .trainer-tab-content.creator .creator-action-button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}section.game .trainer-tab-content.creator .creator-action-button>*:first-child{padding-left:0}section.game .trainer-tab-content.creator .creator-action-button>*:last-child{padding-right:0}section.game .trainer-tab-content.creator .creator-action-button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) section.game .trainer-tab-content.creator .creator-action-button svg *{fill:CanvasText}}section.game .trainer-tab-content.creator .creator-action-button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) section.game .trainer-tab-content.creator .creator-action-button svg{opacity:1}}section.game .trainer-tab-content.creator .creator-action-button img{height:50%}section.game .trainer-tab-content.creator .creator-action-button:disabled{opacity:.3}section.game .trainer-tab-content.creator .creator-action-button:disabled,section.game .trainer-tab-content.creator .creator-action-button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){section.game .trainer-tab-content.creator .creator-action-button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}section.game .trainer-tab-content.creator .creator-action-button:not(:disabled):hover svg{opacity:1}}section.game .trainer-tab-content.creator .creator-action-button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}section.game .trainer-tab-content.creator .creator-action-button+.creator-action-button{margin-top:10px}section.game .trainer-tab-content.pro{background-color:var(--theme--secondary-background)}section.game .trainers{margin:0 -15px -15px -15px}section.game .trainers .trainer-link{display:flex;flex-direction:row;align-items:center;padding:11.5px 15px}section.game .trainers .trainer-link+.trainer-link{border-top:1px solid rgba(255,255,255,.1)}section.game .trainers .trainer-link:hover{background:rgba(var(--theme--highlight--rgb), 0.09)}section.game .trainers .trainer-link:hover>*.cheats,section.game .trainers .trainer-link:hover>*.release{color:rgba(255,255,255,.6)}section.game .trainers .trainer-link:hover>*.release svg *{fill:rgba(255,255,255,.6)}section.game .trainers .trainer-link.selected>.version{color:#fff}section.game .trainers .trainer-link>*.version{font-size:13px;line-height:20px;font-weight:700;flex:1;color:rgba(255,255,255,.5);margin-right:10px;display:flex;align-items:center;min-width:0}section.game .trainers .trainer-link>*.version>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;margin-right:9px;flex:0 1 auto}section.game .trainers .trainer-link>*.version svg *{fill:var(--theme--highlight)}section.game .trainers .trainer-link>*.cheats{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;font-size:13px;line-height:20px;font-weight:500;margin-right:10px;flex:1;color:rgba(255,255,255,.4)}section.game .trainers .trainer-link>*.cheats b{font-weight:700;color:#fff}section.game .trainers .trainer-link>*.release{font-size:12px;line-height:18px;font-weight:500;flex:0 0 auto;color:rgba(255,255,255,.4);display:flex;align-items:center}section.game .trainers .trainer-link>*.release i{margin-right:9px}section.game .trainers .trainer-link>*.release svg *{fill:rgba(255,255,255,.4)}section.game .trainers .trainer-link.placeholder,section.game .trainers .trainer-link.placeholder *{pointer-events:none}section.game .trainers .trainer-link.placeholder .version span{background:rgba(255,255,255,.02);animation:placeholder__el--fade 1s ease-in-out alternate infinite;animation-delay:calc(-1.5s*var(--placeholder--index));border-radius:2px}section.game .trainers .trainer-link.placeholder .version span,section.game .trainers .trainer-link.placeholder .version span *{color:rgba(0,0,0,0) !important;border:0 !important}section.game .trainers .trainer-link.placeholder .version span *{visibility:hidden}section.game .trainers .trainer-link.placeholder .cheats span{background:rgba(255,255,255,.02);animation:placeholder__el--fade 1s ease-in-out alternate infinite;animation-delay:calc(-1.5s*var(--placeholder--index));border-radius:100px}section.game .trainers .trainer-link.placeholder .cheats span,section.game .trainers .trainer-link.placeholder .cheats span *{color:rgba(0,0,0,0) !important;border:0 !important}section.game .trainers .trainer-link.placeholder .cheats span *{visibility:hidden}section.game .trainers .trainer-link.placeholder .release span{background:rgba(255,255,255,.02);animation:placeholder__el--fade 1s ease-in-out alternate infinite;animation-delay:calc(-1.5s*var(--placeholder--index))}section.game .trainers .trainer-link.placeholder .release span,section.game .trainers .trainer-link.placeholder .release span *{color:rgba(0,0,0,0) !important;border:0 !important}section.game .trainers .trainer-link.placeholder .release span *{visibility:hidden}section.game .close-button{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)) !important;display:inline-flex;width:26px;height:26px;box-shadow:none;padding:0;border-radius:50%;border:0;align-items:center;justify-content:center;transition:background-color .15s;position:fixed;right:19px;top:calc(var(--trainer-tab-content-top) - 11px);z-index:1}@media(forced-colors: active){body:not(.override-contrast-mode) section.game .close-button{border:1px solid #fff}}section.game .close-button svg{opacity:1}@media(hover: hover){section.game .close-button:hover{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)) !important}}section.game .error-message-wrapper{display:flex;flex:1;align-items:center;justify-content:center;text-align:center}section.game .error-message-wrapper .error-message{margin:100px 0}section.game .error-message-wrapper .message{font-size:14px;line-height:21px;font-weight:700;color:#fff;margin-bottom:10px}section.game .error-message-wrapper .message alert-icon{margin-right:10px}section.game .error-message-wrapper button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-weight:700;font-size:15px;line-height:24px;font-weight:700;--cta--padding: 12px;--cta--height: 28px;--cta--hover--border-width: 1px;box-shadow:inset 0 0 0 1px var(--color--alert);--cta__icon--color: var(--color--alert)}section.game .error-message-wrapper button,section.game .error-message-wrapper button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) section.game .error-message-wrapper button{border:1px solid #fff}}section.game .error-message-wrapper button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}section.game .error-message-wrapper button>*:first-child{padding-left:0}section.game .error-message-wrapper button>*:last-child{padding-right:0}section.game .error-message-wrapper button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) section.game .error-message-wrapper button svg *{fill:CanvasText}}section.game .error-message-wrapper button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) section.game .error-message-wrapper button svg{opacity:1}}section.game .error-message-wrapper button img{height:50%}section.game .error-message-wrapper button:disabled{opacity:.3}section.game .error-message-wrapper button:disabled,section.game .error-message-wrapper button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){section.game .error-message-wrapper button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}section.game .error-message-wrapper button:not(:disabled):hover svg{opacity:1}}section.game .error-message-wrapper button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}@media(hover: hover){section.game .error-message-wrapper button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--color--alert);background-color:rgba(0,0,0,0)}}section.game .error-message-wrapper button:not(:disabled):active{background-color:var(--color--alert)}section.game .info-sections{border-radius:10px;overflow:hidden}section.game .info-sections:not(:empty){margin-bottom:18px}section.game .info-sections>section{background:rgba(255,255,255,.04)}section.game .info-sections>section.collapsed main{height:0;padding-bottom:0}section.game .info-sections>section.collapsed header:before{transform:rotate(-90deg)}section.game .info-sections>section:not(.collapsed) header{color:#fff}section.game .info-sections>section:not(.collapsed) header:before{opacity:1}section.game .info-sections main{display:block;overflow:hidden;height:auto;padding:0 20px 20px}section.game .info-sections header{font-weight:600;font-size:16px;line-height:25px;display:flex;align-items:center;padding:13px 20px;color:rgba(255,255,255,.6);transition:color .3s}section.game .info-sections header,section.game .info-sections header *{cursor:pointer}section.game .info-sections header:hover{color:#fff}section.game .info-sections header:hover:before{opacity:1}section.game .info-sections header:before{content:"";display:inline-block;width:11px;height:7px;background:url(' +
          b +
          ') center/contain no-repeat;margin-right:10px;transition:transform .3s,opacity .3s;opacity:.6}section.game .notes .text{font-size:14px;line-height:21px;font-weight:500;color:rgba(255,255,255,.6)}section.game .notes .text,section.game .notes .text *{user-select:text;cursor:auto}section.game .notes .text>p{margin:0}section.game .notes .text a{color:var(--theme--highlight);transition:filter .15s;cursor:pointer}section.game .notes .text a:hover{filter:brightness(1.2)}section.game .notes .text img{margin-top:8px;max-width:100%;border-radius:5px}section.game .notes .read-notes-button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;box-shadow:inset 0 0 0 1px var(--theme--highlight);--cta__icon--color: var(--theme--highlight);font-weight:700;font-size:15px;line-height:24px;font-weight:700;--cta--padding: 12px;--cta--height: 28px;--cta--hover--border-width: 1px;margin-top:15px}section.game .notes .read-notes-button,section.game .notes .read-notes-button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) section.game .notes .read-notes-button{border:1px solid #fff}}section.game .notes .read-notes-button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}section.game .notes .read-notes-button>*:first-child{padding-left:0}section.game .notes .read-notes-button>*:last-child{padding-right:0}section.game .notes .read-notes-button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) section.game .notes .read-notes-button svg *{fill:CanvasText}}section.game .notes .read-notes-button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) section.game .notes .read-notes-button svg{opacity:1}}section.game .notes .read-notes-button img{height:50%}section.game .notes .read-notes-button:disabled{opacity:.3}section.game .notes .read-notes-button:disabled,section.game .notes .read-notes-button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){section.game .notes .read-notes-button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}section.game .notes .read-notes-button:not(:disabled):hover svg{opacity:1}}section.game .notes .read-notes-button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}@media(hover: hover){section.game .notes .read-notes-button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--theme--highlight);background-color:rgba(0,0,0,0)}}section.game .notes .read-notes-button:not(:disabled):active{background-color:var(--theme--highlight)}section.game.ad-active .trainer-layout .trainer-layout-right{flex-basis:var(--ad-popup--width)}section.game.ad-active .trainer-layout .trainer-layout-right.collapsed{flex-basis:calc(var(--ad-popup--width) + 15px)}section.game.ad-active .trainer-tab-content-wrapper{width:var(--ad-popup--width)}section.game:not(.ad-can-be-visible).ad-active .close-button{display:none}section.game:not(.ad-can-be-visible).ad-active.trainer-selected .trainer-tabs .tab.current{position:relative}section.game:not(.ad-can-be-visible).ad-active.trainer-selected .trainer-tabs .tab.current:after{content:"";display:block;position:absolute;top:100%;left:50%;border-top:10px solid rgba(0,0,0,0);border-right:10px solid rgba(0,0,0,0);border-bottom:10px solid rgba(255,255,255,.04);border-left:10px solid rgba(0,0,0,0);transform:translate(-50%, 0);margin-top:5px}section.game:not(.ad-can-be-visible).ad-active.trainer-selected .trainer-tabs .tab.pro:after{border-bottom-color:var(--theme--secondary-background)}section.game:not(.ad-can-be-visible)~ad-popup{display:none}@keyframes trainer-actions-fade{from{opacity:0}to{opacity:1}}',
        "",
      ]);
      const u = p;
    },
    "cheats/game-collection.html": (e, t, a) => {
      a.r(t), a.d(t, { default: () => n });
      var i = a(27091),
        r = a.n(i),
        o = new URL(a(79661), a.b);
      const n =
        '<template> <require from="./game-collection.scss"></require> <require from="./resources/elements/game-feed"></require> <require from="./resources/elements/game-feed-item"></require> <require from="./resources/elements/game-search-input"></require> <require from="./resources/elements/list-game-feed"></require> <require from="./resources/value-converters/group-feed-items"></require> <require from="../resources/elements/breadcrumbs"></require> <require from="../resources/elements/layout-toggle"></require> <require from="../resources/elements/toast-anchor"></require> <require from="../resources/elements/lazy-render"></require> <section class="game-collection view-background au-animate"> <div class="overflow-fade__wrapper overflow-fade__wrapper--vertical"> <div class="view-scrollable" overflow-fade="vertical" ref="scrollEl"> <div class="top"> <breadcrumbs></breadcrumbs> <header> <span class="name">${config.titleKey | i18n}</span> <layout-toggle layout.bind="layout" default="list" settings-key="gamesLayout" source="game_collection" wide.bind="true" if.bind="feed.items.length"></layout-toggle> </header> </div> <section class="search" if.bind="config.enableSearch"> <game-search-input on-clear.call="onClear()" on-search.call="onSearch()" search-terms.bind="searchTerms" placeholder-key.bind="selectedFeed.searchPlaceholder" view-model.ref="gameSearchInput" disabled.bind="!feed.items.length"></game-search-input> </section> <nav class="pills" if.bind="config.feeds.length > 1"> <a repeat.for="feed of config.feeds" href="#" class="${selectedFeed === feed ? \'active\' : \'\'} ${feed.navIcon ? `icon-${feed.navIcon}` : \'\'}" click.delegate="selectedFeed = feed"> <i if.bind="feed.navIcon === \'favorite\'"><inline-svg src="' +
        r()(o) +
        '"></inline-svg></i> <span>${feed.navLabel | i18n}</span> </a> </nav> <section class="group" repeat.for="group of items | groupFeedItems:selectedFeed.groups"> <template if.bind="group.group !== \'all\'"> <toast-anchor name.bind="group.group" scroll-el.bind="scrollEl" label-key="game_collection.${group.group}"></toast-anchor> <h1> ${`game_collection.${group.group}` | i18n} <span class="count">${group.items.length}</span> </h1> </template> <div class="grid" if.bind="layout === \'thumbnail\'"> <div class="grid-item" repeat.for="item of group.items"> <lazy-render> <template replace-part="content"> <game-feed-item item.bind="item" location.bind="location" metadata-types.bind="selectedFeed.metadataTypes" large-thumbnails.bind="true" previous-route.bind="config.location" parent-route="collection/${config.slug}"></game-feed-item> </template> <template replace-part="placeholder"> <div class="game-feed-item-placeholder"></div> </template> </lazy-render> </div> </div> <div class="list" if.bind="layout === \'list\'"> <list-game-feed items.bind="group.items" location.bind="location" metadata-types.bind="selectedFeed.metadataTypes" previous-route.bind="config.location" parent-route="collection/${config.slug}"></list-game-feed> </div> </section> <div if.bind="feed.items.length && !items.length" class="no-results-message"> <h4>${\'game_collection.no_results\' | i18n}</h4> <p>${\'game_collection.no_results_advice\' | i18n}</p> </div> <section if.bind="!feed.items.length" class="empty"> <div class="empty-message ${selectedFeed.emptyMessage.className ? selectedFeed.emptyMessage.className : \'\'}" if.bind="selectedFeed.emptyMessage"> <h1>${selectedFeed.emptyMessage.headerKey | i18n}</h1> <p innerhtml.bind="selectedFeed.emptyMessage.messageKey | i18n | markdown"></p> </div> <div class="alternate-feed" if.bind="alternateFeed"> <header> <h1>${alternateFeed.titleLabel | i18n}</h1> </header> <article> <game-feed location="${location}:${alternateFeed.location}" previous-route.bind="config.location" layout="horizontal" feed-config.bind="alternateFeed.feedConfig" filter.bind="alternateFeed.filter"></game-feed> </article> </div> </section> </div> </div> </section> </template> ';
    },
    "cheats/game.html": (e, t, a) => {
      a.r(t), a.d(t, { default: () => l });
      var i = a(27091),
        r = a.n(i),
        o = new URL(a(91766), a.b),
        n = new URL(a(27349), a.b),
        s = new URL(a(4991), a.b),
        c = new URL(a(98879), a.b);
      const l =
        '<template> <require from="./game.scss"></require> <require from="./resources/elements/pro-popup"></require> <require from="./resources/elements/save-cheats-toggle"></require> <require from="./resources/elements/trainer-cheats-list"></require> <require from="./resources/elements/trainer-cheats-list-placeholder.html"></require> <require from="./resources/elements/trainer-play-button"></require> <require from="./resources/elements/trainer-meta"></require> <require from="./resources/elements/update-pending"></require> <require from="./resources/elements/suggest-cheats"></require> <require from="./resources/value-converters/blueprint-translation"></require> <require from="./resources/elements/map-banner"></require> <require from="../resources/elements/alert-icon.html"></require> <require from="../resources/elements/breadcrumbs"></require> <require from="../shared/resources/elements/tooltip"></require> <require from="../shared/resources/custom-attributes/close-if-click-outside"></require> <require from="../resources/elements/ad-popup"></require> <section class="game ${adCanBeVisible ? \'ad-can-be-visible\' : \'\'} ${adActive ? \'ad-active\' : \'\'} ${selectedTrainer ? \'trainer-selected\' : \'\'}"> <div class="title-actions"> <div class="trainer-actions"> <save-cheats-toggle game.bind="game" trainer.bind="selectedTrainer" if.bind="trainerPlayButtonState !== null" class="au-animate"></save-cheats-toggle> <trainer-play-button trainer-info.bind="selectedTrainer" disabled-message.bind="selectedTrainerNotesRead ? null : \'game.read_notes\'" play.call="launch(app, gameVersion, trigger)" button-state.bind="trainerPlayButtonState" auto-launch.bind="autoLaunch" class="au-animate"></trainer-play-button> </div> </div> <div class="trainer-tabs ${panelDocked ? \'docked\' : \'\'}" ref="trainerTabsEl"> <div class="extras"> <button if.bind="game.trainer.discussionUrl && !betaModsEnabled" click.delegate="openDiscussion()"> <i><inline-svg src="' +
        r()(o) +
        '"></inline-svg></i> <tooltip direction="top-center"> <div slot="content"> ${\'game.discussion\' | i18n} </div> </tooltip> </button> </div> <button class="tab info ${!proPopupVisible && selectedTab === \'info\' && \'current\'}" click.delegate="selectTab(\'info\')"> <span class="label">${gameMaps.length ? \'game.info_and_maps\' : \'game.info\' | i18n}</span> </button> <button if.bind="showCreatorTab" class="tab creator ${!proPopupVisible && selectedTab === \'creator\' && \'current\'}" click.delegate="selectTab(\'creator\')"> <span class="label">Creator</span> </button> <button class="tab history ${!proPopupVisible && selectedTab === \'history\' && \'current\'}" click.delegate="selectTab(\'history\')"> <span class="label">${\'game.history\' | i18n}</span> </button> <button if.bind="!account.subscription" class="tab pro ${proPopupVisible && \'current\'}" click.delegate="selectTab(\'pro\')"> <span class="label with-pro-badge" innerhtml.bind="\'game.upgrade_to_pro\' | i18n | markdown"> </span> </button> </div> <div class="trainer-layout"> <div class="error-message-wrapper" if.bind="errorMessage"> <div class="error-message"> <div class="message"> <alert-icon></alert-icon> ${errorMessage | i18n} </div> <button click.delegate="loadTrainer(trainerId)">${\'game.retry\' | i18n}</button> </div> </div> <template else> <div class="trainer-layout-left"> <template if.bind="!selectedTrainer"> <trainer-cheats-list-placeholder></trainer-cheats-list-placeholder> </template> <template else> <div class="info-sections"> <section class="update-pending ${updatePendingCollapsed ? \'collapsed\' : \'\'}" if.bind="game | gameFlags:\'Outdated\':\'UpdateQueued\'"> <update-pending game.bind="game" suggest-cheats.bind="canSuggestCheats && suggestCheatsLocation === \'update-pending\'"></update-pending> </section> <section class="notes ${notesCollapsed ? \'collapsed\' : \'\'}" if.bind="selectedTrainer.blueprint.notes"> <header click.delegate="toggleNotes()" tabindex="0">${\'game.required_reading\' | i18n}</header> <main> <div class="text"> <p innerhtml.bind="selectedTrainer.blueprint.notes | blueprintTranslation:selectedTrainer | markdown"></p> </div> <button class="read-notes-button" if.bind="!selectedTrainerNotesRead" click.delegate="readNotes()"> ${\'game.got_it\' | i18n} </button> </main> </section> </div> <trainer-cheats-list trainer.bind="selectedTrainer" trainer-play-button-state.bind="trainerPlayButtonState" beta-mods-enabled.bind="betaModsEnabled"></trainer-cheats-list> </template> </div> <div class="trainer-layout-right ${!panelDocked ? \'collapsed\' : \'\'}"> <button class="close-button selected-tab-close-button" click.delegate="closeSelectedTab()" if.bind="selectedTab || proPopupVisible"> <inline-svg src="' +
        r()(n) +
        '"></inline-svg> </button> <div class="trainer-tab-content-wrapper ${!proPopupVisible && adActive ? \'scroll-content-to-fit-ad\' : \'\'}" ref="trainerTabContentWrapperEl" close-if-click-outside="value.two-way: closeIfClickOutsideTabContent; ignore-selector: .trainer-tabs;"> <div class="trainer-tab-content info" if.bind="!proPopupVisible && selectedTab === \'info\'"> <map-banner if.bind="!account.subscription && gameMaps.length" maps.bind="gameMaps"></map-banner> <section> <trainer-meta game.bind="game"></trainer-meta> <a if.bind="canHelpTranslate" href="#" target="_blank" class="info-link" click.delegate="helpTranslate()"> ${\'trainer_meta.help_translate_this\' | i18n} </a> <a if.bind="!shortcutCreated" href="#" target="_blank" class="info-link" click.delegate="createDesktopShortcut()"> ${\'trainer_meta.create_desktop_shortcut\' | i18n} </a> <span if.bind="shortcutCreated" class="info-success"> <span>${\'trainer_meta.added_to_your_desktop\' | i18n}</span> </span> <template if.bind="canSuggestCheats && suggestCheatsLocation === \'info\'"> <hr> <suggest-cheats game.bind="game"></suggest-cheats> </template> </section> <map-banner if.bind="account.subscription && gameMaps.length" maps.bind="gameMaps"></map-banner> </div> <div class="trainer-tab-content history" if.bind="!proPopupVisible && selectedTab === \'history\'"> <section> <header>${\'game.history\' | i18n}</header> <div class="trainers"> <div if.bind="!trainerHistory"> <div repeat.for="p of [1,2,3]" class="trainer-link placeholder" css="--placeholder--index: ${$index}"> <span class="version"> <span>9/9/1999</span> </span> <span class="cheats"> <span>99 Options</span> </span> <span class="release"> <span>9d</span> </span> </div> </div> <a else repeat.for="otherTrainer of trainerHistory" href="#" click.delegate="loadTrainer(otherTrainer.id)" title-link="value.bind: \'trainer_history\'; title-id.bind: game.titleId; game-id.bind: game.id; trainer-id.bind: otherTrainer.id;" class="trainer-link ${selectedTrainer.id === otherTrainer.id ? \'selected\' : \'\'}"> <span class="version"> <span if.bind="otherTrainer.releasedAt"> ${otherTrainer.releasedAt | i18nDateTime:{dateStyle:\'short\'}} </span> <span else> ${\'game.unreleased\' | i18n} </span> <i> <inline-svg src="' +
        r()(s) +
        '"></inline-svg> </i> </span> <span class="cheats"> <span><b>${otherTrainer.cheatCount}</b> ${otherTrainer.cheatCount === 1 ? \'game.option\' : \'game.options\' | i18n}</span> </span> <span class="release"> <i if.bind="otherTrainer.releasedAt"> <inline-svg src="' +
        r()(c) +
        '"></inline-svg> </i> ${otherTrainer.releasedAt | i18nElaspedTime:true} </span> </a> </div> </section> </div> <div class="trainer-tab-content creator" if.bind="!proPopupVisible && selectedTab === \'creator\'"> <section> <button class="creator-action-button" click.delegate="creatorUtil.createLocalProject(selectedTrainer.loaderArgs)">Create Project</button> <button class="creator-action-button" click.delegate="creatorUtil.openLocalProject(selectedTrainer.loaderArgs)">Open Project</button> <button class="creator-action-button" click.delegate="reloadTrainer()">Reload Blueprint</button> <button class="creator-action-button" click.delegate="creatorUtil.editTrainer(selectedTrainer.loaderArgs)">Edit Trainer</button> </section> </div> <div class="trainer-tab-content pro" if.bind="proPopupVisible"> <pro-popup></pro-popup> </div> </div> </div> </template> </div> </section> <ad-popup active.bind="adActive" ref="adPopupEl"></ad-popup> </template> ';
    },
    69262: (e, t, a) => {
      a.d(t, { k: () => n });
      var i = a(70655),
        r = a("aurelia-framework"),
        o = a(81110);
      let n = class {
        #e;
        constructor(e) {
          this.#e = e;
        }
        async getRepoDirectories() {
          return (await this.#t())?.repos || [];
        }
        #t() {
          return this.#e.getCreatorConfiguration();
        }
      };
      n = (0, i.gn)(
        [(0, r.autoinject)(), (0, i.w6)("design:paramtypes", [o.f])],
        n
      );
    },
    99078: (e, t, a) => {
      a.d(t, { I: () => l });
      var i = a(70655),
        r = a(71017),
        o = a("aurelia-framework"),
        n = a(56901),
        s = a(81110),
        c = a(69262);
      let l = class {
        #a;
        #e;
        constructor(e, t) {
          (this.#a = e), (this.#e = t);
        }
        async getTrainerBinaryPath(e) {
          const t = await this.#i(e);
          if (null === t) return null;
          const a = r.normalize(`${t}/Build/Trainer.dll`);
          if (
            !(await n.promises
              .stat(a)
              .then((e) => e.isFile())
              .catch(() => !1))
          )
            return null;
          if (a.startsWith("\\\\")) {
            const e = r.join(this.#e.getTempFolder(), "NetworkTrainer.dll");
            return (
              await n.promises.writeFile(e, await n.promises.readFile(a)), e
            );
          }
          return a;
        }
        async #i(e) {
          const t = await this.#a.getRepoDirectories();
          for (const a of t) {
            const t = r.join(a, e);
            if (
              await n.promises
                .stat(t)
                .then((e) => e.isDirectory())
                .catch(() => !1)
            )
              return t;
          }
          return null;
        }
      };
      l = (0, i.gn)(
        [(0, o.autoinject)(), (0, i.w6)("design:paramtypes", [c.k, s.f])],
        l
      );
    },
    "cheats/game-collection": (e, t, a) => {
      a.r(t), a.d(t, { GameCollection: () => u });
      var i = a(70655),
        r = a("aurelia-event-aggregator"),
        o = a("aurelia-framework"),
        n = a(86433),
        s = a(45437),
        c = a(81866),
        l = a(74036),
        d = a(29242),
        g = a(93082),
        p = a(27170),
        h = a(9288);
      const m = [
          {
            titleLabel: "game_collection.add_games_to_your_favorites",
            location: "recently_played",
            feedConfig: l.no,
            filter: { maxItems: 10 },
            metadataTypes: ["platform-icons", "status-badges", "genres"],
          },
          {
            titleLabel: "game_collection.add_games_to_your_favorites",
            location: "my_games",
            feedConfig: l.RZ,
            filter: { maxItems: 10 },
            metadataTypes: ["platform-icons", "status-badges", "genres"],
          },
          {
            titleLabel: "game_collection.add_games_to_your_favorites",
            location: "free_games",
            feedConfig: l.Bd,
            filter: { maxItems: 10, tags: ["free"] },
            metadataTypes: ["platform-icons", "status-badges", "genres"],
          },
        ],
        b = [
          {
            slug: "free-games",
            titleKey: "game_collection.free_games",
            analyticsName: "Free Games",
            location: "free_games",
            feeds: [
              {
                feedConfig: l.Bd,
                filter: { tags: ["free"] },
                groups: ["all"],
                metadataTypes: ["platform-icons", "status-badges", "genres"],
              },
            ],
          },
          {
            slug: "my-games",
            titleKey: "game_collection.my_games",
            analyticsName: "My Games",
            location: "my_games",
            feeds: [
              {
                location: "all",
                analyticsName: "All",
                navLabel: "game_collection.all",
                searchPlaceholder: "game_collection.search_your_game_library",
                feedConfig: l.RZ,
                groups: [
                  "playable",
                  "launch_without_mods",
                  "favorites_not_installed",
                  "free_games_to_install",
                ],
                metadataTypes: ["platform-icons", "status-badges", "genres"],
                emptyMessage: {
                  headerKey: "game_collection.you_have_no_installed_games",
                  messageKey:
                    "game_collection.install_a_free_game_to_get_started",
                },
                alternateFeeds: [
                  {
                    titleLabel: "game_collection.free_games_to_install",
                    location: "free_games",
                    feedConfig: l.Bd,
                    filter: { maxItems: 10, tags: ["free"] },
                    metadataTypes: [
                      "platform-icons",
                      "status-badges",
                      "genres",
                    ],
                  },
                ],
              },
              {
                location: "favorites",
                analyticsName: "Favorites",
                navLabel: "game_collection.favorites",
                searchPlaceholder: "game_collection.search_your_favorites",
                navIcon: "favorite",
                feedConfig: l.US,
                groups: [
                  "playable",
                  "launch_without_mods",
                  "favorites_not_installed",
                ],
                metadataTypes: ["platform-icons", "status-badges", "genres"],
                emptyMessage: {
                  headerKey: "game_collection.you_have_no_favorites",
                  messageKey:
                    "game_collection.add_games_to_your_favorites_by_selecting_the_star_icon",
                  className: "favorite-icon",
                },
                alternateFeeds: m,
              },
            ],
            enableSearch: !0,
          },
          {
            slug: "most-popular",
            titleKey: "game_collection.most_popular",
            analyticsName: "Most Popular",
            location: "most_popular",
            feeds: [
              {
                feedConfig: l.aC,
                filter: { maxItems: 100 },
                groups: ["all"],
                metadataTypes: ["platform-icons", "status-badges", "players"],
              },
            ],
          },
          {
            slug: "recently-played",
            titleKey: "game_collection.recently_played",
            analyticsName: "Recently Played",
            location: "recently_played",
            feeds: [
              {
                feedConfig: l.Si,
                groups: ["playable", "launch_without_mods"],
                metadataTypes: ["platform-icons", "status-badges", "genres"],
              },
            ],
          },
          {
            slug: "favorites",
            titleKey: "game_collection.favorites",
            analyticsName: "Favorites",
            location: "favorites",
            enableSearch: !0,
            feeds: [
              {
                searchPlaceholder: "game_collection.search_your_favorites",
                feedConfig: l.US,
                groups: ["playable", "installable"],
                metadataTypes: ["platform-icons", "status-badges", "genres"],
                emptyMessage: {
                  headerKey: "game_collection.you_have_no_favorites",
                  messageKey: "game_collection.add_games_to_your_favorites",
                  className: "favorite-icon",
                },
                alternateFeeds: m,
              },
            ],
          },
          {
            slug: "game-pass",
            titleKey: "game_collection.game_pass",
            analyticsName: "Game Pass",
            location: "game_pass",
            feeds: [
              {
                feedConfig: l.Bd,
                filter: { tags: ["game-pass"] },
                groups: ["all"],
                metadataTypes: ["platform-icons", "status-badges", "genres"],
              },
            ],
          },
          {
            slug: "community-choice",
            titleKey: "game_collection.community_choice",
            analyticsName: "Community Choice",
            location: "community_choice",
            feeds: [
              {
                feedConfig: l.Bd,
                filter: { tags: ["choice"] },
                groups: ["all"],
                metadataTypes: ["platform-icons", "status-badges", "genres"],
              },
            ],
          },
          {
            slug: "supported-games",
            titleKey: "game_collection.all_supported_games",
            analyticsName: "All Supported Games",
            location: "all_supported_games",
            feeds: [
              {
                feedConfig: l.ZR,
                groups: ["all"],
                metadataTypes: ["platform-icons", "status-badges", "genres"],
              },
            ],
          },
        ];
      let u = class {
        #r;
        #o;
        #n;
        #s;
        #c;
        #l;
        constructor(e, t, a, i, r) {
          (this.router = t),
            (this.#l = []),
            (this.#r = e),
            (this.#o = a),
            (this.#n = i),
            (this.#s = r);
        }
        activate(e) {
          this.#c = e.slug;
          const t = b.find((e) => e.slug === this.#c);
          t && (this.config = t);
        }
        deactivate() {
          this.feed?.dispose(), this.#l.forEach((e) => e.dispose());
        }
        bind() {
          if (this.config) {
            const e = this.gameCollectionPreferences[this.config.slug];
            e?.selectedFeed &&
              (this.selectedFeed = this.config.feeds.find(
                (t) => t.feedConfig.id === e.selectedFeed
              )),
              this.selectedFeed || (this.selectedFeed = this.config.feeds[0]);
          }
        }
        onSearch() {
          (this.appliedSearchTerms = this.searchTerms),
            this.#n.publish(
              new d.o4(
                `game_collection_${this.config.slug}`,
                this.appliedSearchTerms
              )
            );
        }
        onClear() {
          (this.appliedSearchTerms = ""), (this.searchTerms = "");
        }
        get items() {
          return (0, h.y)(
            this.feed.items,
            this.appliedSearchTerms,
            ["titleName", "titleTerms"],
            "titleName"
          );
        }
        selectedFeedChanged() {
          (this.feed = this.#o.getFilteredFeed(
            this.selectedFeed.feedConfig,
            this.selectedFeed.filter || {}
          )),
            this.gameSearchInput?.clear(!1),
            this.#s.dispatch(p.V_, this.config.slug, {
              selectedFeed: this.selectedFeed.feedConfig.id,
            }),
            this.#l.forEach((e) => e.dispose()),
            (this.#l =
              this.selectedFeed.alternateFeeds?.map((e) =>
                this.#o.getFilteredFeed(e.feedConfig, e.filter)
              ) || []),
            this.#r.screenView(
              this.selectedFeed.analyticsName || this.config.analyticsName,
              this.config.analyticsName
            );
        }
        get alternateFeed() {
          const e = this.#l.findIndex((e) => e.items.length > 0);
          return e > -1 && this.selectedFeed.alternateFeeds
            ? this.selectedFeed.alternateFeeds[e]
            : null;
        }
        get location() {
          return (
            this.config.location +
            (this.config.feeds.length > 0 && this.selectedFeed.location
              ? `:${this.selectedFeed.location}`
              : "")
          );
        }
      };
      (0, i.gn)(
        [o.observable, (0, i.w6)("design:type", Object)],
        u.prototype,
        "selectedFeed",
        void 0
      ),
        (0, i.gn)(
          [
            (0, o.computedFrom)("feed.items", "appliedSearchTerms"),
            (0, i.w6)("design:type", Array),
            (0, i.w6)("design:paramtypes", []),
          ],
          u.prototype,
          "items",
          null
        ),
        (0, i.gn)(
          [
            (0, o.computedFrom)("alternateFeeds"),
            (0, i.w6)("design:type", Object),
            (0, i.w6)("design:paramtypes", []),
          ],
          u.prototype,
          "alternateFeed",
          null
        ),
        (0, i.gn)(
          [
            (0, o.computedFrom)("config"),
            (0, i.w6)("design:type", String),
            (0, i.w6)("design:paramtypes", []),
          ],
          u.prototype,
          "location",
          null
        ),
        (u = (0, i.gn)(
          [
            (0, o.autoinject)(),
            (0, g.b)({
              selectors: {
                gameCollectionPreferences: (0, g.g)(
                  "gameCollectionPreferences"
                ),
              },
            }),
            (0, i.w6)("design:paramtypes", [c.c, n.F0, l.AD, r.h, s.yh]),
          ],
          u
        ));
    },
    "cheats/game": (e, t, a) => {
      a.r(t), a.d(t, { Game: () => z });
      var i = a(70655),
        r = a("aurelia-event-aggregator"),
        o = a("aurelia-framework"),
        n = a(86433),
        s = a(45437),
        c = a(18739),
        l = a(62546),
        d = a(23739),
        g = a(27099),
        p = a(82826),
        h = a(51296),
        m = a(97798),
        b = a(86241),
        u = a(93122),
        f = a(29242),
        v = a(2314),
        y = a(47164),
        x = a("shared/dialogs/basic-dialog"),
        w = a(35969),
        T = a(93082),
        k = a(54934),
        _ = a(51722),
        C = a(5384),
        P = a(27170),
        F = a(11912),
        S = a(71017),
        $ = a(56901),
        D = a("dialogs/selection-dialog"),
        A = a(81110),
        q = a(69262);
      let E = class {
        #a;
        constructor(e) {
          this.#a = e;
        }
        async createProject(e, t, a, i) {
          if (!(await this.#a.getRepoDirectories()).includes(e))
            throw new Error(
              "The given path is not a registered repo directory."
            );
          const r = `${e}\\${t}`;
          if (
            await $.promises
              .stat(r)
              .then((e) => e.isDirectory())
              .catch(() => !1)
          )
            return r;
          await this.#d(e, r);
          const o = `${r}\\Trainer.sln`,
            n = `${r}\\Trainer.vcxproj`;
          "x64" !== a && (await Promise.all([this.#g(n, a), this.#g(o, a)])),
            await this.#p(n, t);
          try {
            await $.promises.rename(o, `${r}\\${i}.sln`);
          } catch {}
          return r;
        }
        async #g(e, t) {
          try {
            const a = await $.promises.readFile(e, "utf8");
            await $.promises.writeFile(e, a.replaceAll("x64", t));
          } catch {}
        }
        async #p(e, t) {
          try {
            const a = `$1$(ProjectDir)${"..\\".repeat(
                t.split("\\").length
              )}Include;`,
              i = await $.promises.readFile(e, "utf8");
            await $.promises.writeFile(
              e,
              i.replace(/(<AdditionalIncludeDirectories>)/g, a)
            );
          } catch {}
        }
        async #d(e, t) {
          const a = `${e}\\Template`;
          await this.#h(t),
            await Promise.all(
              (await $.promises.readdir(a, { withFileTypes: !0 }))
                .filter((e) => e.isFile())
                .map((e) =>
                  $.promises.copyFile(
                    `${a}\\${e.name}`,
                    `${t}\\${e.name}`,
                    $.constants.COPYFILE_EXCL
                  )
                )
            );
        }
        async #h(e) {
          const t = e.split("\\");
          let a = t.shift();
          for (const e of t)
            (a += `\\${e}`),
              (await $.promises
                .stat(a)
                .then((e) => e.isDirectory())
                .catch(() => !1)) || (await $.promises.mkdir(a));
        }
      };
      E = (0, i.gn)(
        [(0, o.autoinject)(), (0, i.w6)("design:paramtypes", [q.k])],
        E
      );
      let I = class {
        #e;
        #a;
        #m;
        #b;
        #u;
        constructor(e, t, a, i, r) {
          (this.#e = e),
            (this.#a = t),
            (this.#m = a),
            (this.#b = i),
            (this.#u = r);
        }
        editTrainer(e) {
          window.open(e.blueprintEditUrl, "_blank");
        }
        async openLocalProject(e) {
          const t = await this.#a.getRepoDirectories(),
            a = [];
          for (const i of t) {
            const t = S.join(i, e.repoPath);
            (await $.promises
              .stat(t)
              .then((e) => e.isDirectory())
              .catch(() => !1)) && a.push(t);
          }
          if (0 === a.length)
            return void this.#b.ok(
              w.oc.literal("Project not found. Make sure it was created.")
            );
          let i;
          if (1 !== a.length) {
            const e = await this.#u.open({
              title: w.oc.literal("Select a Project"),
              options: a.map(w.oc.literal),
              submitLabel: w.oc.literal("Open"),
            });
            if (e.wasCancelled) return;
            i = e.output.selection;
          } else i = a[0];
          await this.#e.launchExternal(i);
        }
        async createLocalProject(e) {
          const t = await this.#a.getRepoDirectories();
          let a;
          if (0 === t.length)
            return void this.#b.ok(
              w.oc.literal("You don’t have any local repositories registered.")
            );
          if (1 === t.length) a = t[0];
          else {
            const e = await this.#u.open({
              title: w.oc.literal("Select a Repository"),
              options: t.map(w.oc.literal),
              submitLabel: w.oc.literal("Continue"),
            });
            if (e.wasCancelled) return;
            a = e.output.selection;
          }
          const i = await this.#b.show({
            message: w.oc.literal(
              "Which architecture should the project target?"
            ),
            options: [w.oc.literal("x86"), w.oc.literal("x64")],
            cancelable: !0,
          });
          if (null === i) return;
          const r = await this.#m.createProject(
            a,
            e.repoPath,
            "x86" === i ? "Win32" : "x64",
            e.fileSafeTitleName
          );
          await this.#e.launchExternal(r);
        }
      };
      I = (0, i.gn)(
        [
          (0, o.autoinject)(),
          (0, i.w6)("design:paramtypes", [
            A.f,
            q.k,
            E,
            x.BasicDialogService,
            D.SelectionDialogService,
          ]),
        ],
        I
      );
      var N = a("cheats/resources/elements/first-play-upgrade-prompt-dialog"),
        L = a(77644),
        R = a(69949);
      let j,
        z = class {
          #f;
          #v;
          #s;
          #y;
          #x;
          #w;
          #T;
          #k;
          #_;
          #C;
          #P;
          #F;
          #S;
          #$;
          #D;
          #A;
          #q;
          #E;
          #I;
          #N;
          constructor(e, t, a, i, r, o, n, s, c, l, d, g, p, h, m, b, u) {
            (this.creatorUtil = s),
              (this.selectedTab = j),
              (this.notesCollapsed = !0),
              (this.shortcutCreated = !1),
              (this.#I = !1),
              (this.#f = e),
              (this.#v = t),
              (this.#s = a),
              (this.#y = i),
              (this.#x = r),
              (this.#w = o),
              (this.#T = n),
              (this.#k = c),
              (this.#_ = l),
              (this.#C = d),
              (this.#P = g),
              (this.#F = p),
              (this.#S = h),
              (this.#$ = m),
              (this.#D = b),
              (this.#A = u);
          }
          attached() {
            const e = new ResizeObserver(() => this.#L());
            e.observe(this.trainerTabsEl),
              (this.#N = new F.K4()
                .pushEventListener(window, "resize", () => this.#R(!1))
                .pushFunction(() => e.disconnect())
                .push(
                  this.#S.subscribe(
                    "custom-installation-selector-open-changed",
                    this.#j.bind(this)
                  )
                )
                .push(this.#y.onLocaleChanged(() => this.#z()))),
              this.#L(),
              this.#z();
          }
          detached() {
            this.#N?.dispose(), (this.#N = null);
          }
          async bind() {
            this.#M(),
              await this.loadTrainer(this.trainerId),
              (this.#I = !0),
              (this.notesCollapsed = !!this.selectedTrainerNotesRead);
          }
          unbind() {
            (this.#I = !1),
              this.#E?.cancel(),
              (this.#E = null),
              this.#k.cancelVisibleTrainer();
          }
          #z() {
            this.canHelpTranslate = !this.#y.isDefaultLanguage();
          }
          async creatorModeChanged(e, t) {
            if (this.#I && void 0 !== t) {
              const e = this.selectedTrainer?.id;
              !1 === (await this.loadTrainer(void 0, !1)) &&
                (this.creatorMode && e ? await this.loadTrainer(e) : this.#B());
            }
          }
          catalogChanged() {
            this.#M();
          }
          #M() {
            this.game = this.catalog.games[this.gameId];
          }
          async reloadTrainer() {
            await this.loadTrainer(this.selectedTrainer.id);
          }
          get proPopupVisible() {
            return this.proAutoPopupOpen || "pro" === this.selectedTab;
          }
          get panelDocked() {
            return this.proAutoPopupOpen || !!this.selectedTab;
          }
          #B() {
            this.errorMessage = "game.cant_connect_to_wemod";
          }
          async loadTrainer(e, t = !0) {
            this.#E?.cancel();
            const a = new F.wK();
            this.#E = a;
            const i = this.selectedTrainer;
            this.selectedTrainer = null;
            const r = await this.#T.fetch(this.gameId, e);
            return a.canceled
              ? null
              : r
              ? ((this.errorMessage = null),
                (this.selectedTrainer = r),
                this.#s.dispatch(P.Jr, this.game.titleId),
                this.#v.navigateToRoute(
                  "title",
                  {
                    titleId: this.game.titleId,
                    gameId: this.gameId,
                    trainerId: r.id,
                  },
                  { replace: !0, trigger: !1 }
                ),
                this.#k.setVisibleTrainer(r),
                this.trainerNotesReadChanged(),
                this.trainerPanelClosed
                  ? this.closeSelectedTab()
                  : this.#O(this.selectedTab) || this.selectTab("info"),
                (this.trainerPanelClosed || "info" === this.selectedTab) &&
                  this.#U(),
                i?.gameId !== r.gameId &&
                  ((this.trainerHistory = null), this.selectedTabChanged()),
                this.#R(!1),
                this.#S.publish(new f.dR(r)),
                !0)
              : (t && this.#B(), !1);
          }
          async launch(e, t, a) {
            const i = this.selectedTrainer;
            if ("remote" !== a) {
              if ((await this.#V()) && !(await this.#A.open()).wasCancelled)
                return;
              if (!(await this.#H())) return;
              if (i !== this.selectedTrainer) return;
              if (
                "number" == typeof t &&
                !this.selectedTrainer.supportedVersions.includes(t) &&
                (await this.#x.yesNo("game.cheats_might_not_work_dialog")) !==
                  x.DialogResult.Yes
              )
                return;
              const e = this.trainerPlayButtonState;
              if (
                ((this.trainerPlayButtonState = "loading"),
                !(await this.#C.open()))
              )
                return void (this.trainerPlayButtonState = e);
              if (
                (await this.#P.showDialog()) &&
                (await this.#F.hasOpenDialog())
              )
                return;
              if (
                (await this.#$.showDialogBeforeTrainer()) &&
                (await this.#F.hasOpenDialog())
              )
                return;
            }
            if (i === this.selectedTrainer)
              try {
                await this.#w.launch(new R.z9(this.selectedTrainer, e, t, a));
              } catch (e) {
                if (!(e instanceof R.w6)) throw e;
              }
          }
          trainerPanelClosedChanged() {
            this.trainerPanelClosed && ((this.selectedTab = null), this.#R(!1));
          }
          adActiveChanged() {
            this.adActive && !this.selectedTab && this.selectTab("info");
          }
          get showCreatorTab() {
            return (
              this.selectedTrainer &&
              "trainerlib-local" === this.selectedTrainer.loader
            );
          }
          #O(e) {
            switch (e) {
              case "info":
              case "history":
                return !0;
              case "creator":
                return this.showCreatorTab;
              case "pro":
                return !this.account.subscription;
              default:
                return !1;
            }
          }
          async selectTab(e) {
            (this.proAutoPopupOpen && "pro" === e) ||
              (this.#O(e) || (e = "info"),
              this.trainerPanelClosed &&
                this.#s.dispatch(P.D3, { trainerPanelClosed: !1 }, "game"),
              this.proAutoPopupOpen && this.#K(),
              (this.previousSelectedTab = this.selectedTab),
              (this.selectedTab = e)),
              this.#R(!0);
          }
          async selectedTabChanged() {
            if (((j = this.selectedTab), "history" === this.selectedTab))
              try {
                this.trainerHistory = await this.#f.getTrainerHistoryForGame(
                  this.gameId
                );
              } catch {
                try {
                  this.trainerHistory = await this.#W();
                } catch {}
              }
          }
          closeSelectedTab() {
            this.proAutoPopupOpen
              ? (this.#K(), this.#R(!1))
              : this.#s.dispatch(P.D3, { trainerPanelClosed: !0 }, "game"),
              (this.previousSelectedTab = null),
              (this.selectedTab = null);
          }
          #K() {
            this.#s.dispatch(P.JC, "lastTrainerProPopupDismissal");
          }
          trainerNotesReadChanged() {
            this.selectedTrainer?.blueprint.notes
              ? ((this.#q = (0, C.Wu)(this.selectedTrainer.blueprint.notes)),
                (this.selectedTrainerNotesRead =
                  this.trainerNotesRead[this.selectedTrainer.id] === this.#q))
              : ((this.#q = null), (this.selectedTrainerNotesRead = !0));
          }
          toggleNotes() {
            this.notesCollapsed ? (this.notesCollapsed = !1) : this.readNotes();
          }
          async readNotes() {
            await this.#s.dispatch(
              P.yo,
              this.selectedTrainer.id,
              (0, C.Wu)(this.selectedTrainer.blueprint.notes)
            ),
              this.#U(),
              (this.notesCollapsed = !0);
          }
          async #H() {
            if (this.selectedTrainerNotesRead) return !0;
            const e = this.selectedTrainer;
            return (
              "game.play" ===
                (await this.#x.show({
                  message: w.oc.literal(e.blueprint.notes),
                  className: "trainer-notes-dialog",
                  options: [
                    { label: "game.play", style: "primary" },
                    { label: "game.close" },
                  ],
                })) && (await this.#s.dispatch(P.yo, e.id, this.#q), !0)
            );
          }
          accountChanged() {
            this.#U(),
              this.selectedTab &&
                !this.#O(this.selectedTab) &&
                this.selectTab("info");
          }
          lastTrainerProPopupDismissalChanged() {
            this.#U();
          }
          async #U() {
            this.proAutoPopupOpen = await this.#G();
          }
          async #G() {
            if (!this.selectedTrainer) return !1;
            if (this.account.subscription) return !1;
            if (this.selectedTab && "info" !== this.selectedTab) return !1;
            if ((0, _.yE)(this.game.flags, v.p.Outdated)) return !1;
            if (await this.#V()) return !1;
            const e = this.lastTrainerProPopupDismissal || this.freeUserSince;
            return !!e && Date.now() - new Date(e).getTime() >= 864e5;
          }
          async #W() {
            return (
              (await this.#s.state
                .pipe((0, c.P)(), (0, l.j)("trainers", this.gameId))
                .toPromise()) || []
            )
              .slice()
              .sort((e, t) => t.releasedAt.localeCompare(e.releasedAt))
              .map((e) => ({
                id: e.id,
                cheatCount: e.blueprint.cheats.length,
                supportedVersions: e.supportedVersions,
                releasedAt: e.releasedAt,
                createdAt: e.releasedAt,
              }));
          }
          openDiscussion() {
            this.game.trainer.discussionUrl &&
              window.open(this.game.trainer.discussionUrl);
          }
          helpTranslate() {
            let e;
            try {
              e = this.#f.getGameTranslationUrl(
                this.gameId,
                this.#y.getEffectiveLocale().toString()
              );
            } catch {
              e = "https://translate.wemod.com";
            }
            window.open(e, "_blank");
          }
          #L() {
            this.trainerTabsEl &&
              document.body.style.setProperty(
                "--trainer-tabs-width",
                `${this.trainerTabsEl.clientWidth}px`
              );
          }
          async createDesktopShortcut() {
            await this.#_.create(this.gameId, "game_info_panel"),
              (this.shortcutCreated = !0);
          }
          gameChanged() {
            this.shortcutCreated = !1;
          }
          get canSuggestCheats() {
            return (0, _.yE)(this.game.flags, v.p.AllowCheatSuggestions);
          }
          get suggestCheatsLocation() {
            return (0, _.EB)(this.game.flags, [v.p.Outdated, v.p.UpdateQueued])
              ? "update-pending"
              : "info";
          }
          async #R(e) {
            if (
              (await new Promise((e) => window.requestAnimationFrame(e)),
              !this.selectedTrainer || !this.adActive || !this.adPopupEl)
            )
              return;
            let t = !1;
            if (this.selectedTab) {
              (this.adPopupEl.style.display = "block"),
                document.body.style.setProperty(
                  "--game-ad-popup-safe-area",
                  `${this.adPopupEl.clientHeight}px`
                );
              const a = this.trainerTabContentWrapperEl?.clientHeight || 0,
                i =
                  this.trainerTabContentWrapperEl?.getBoundingClientRect()
                    .top || 0,
                r = this.adPopupEl.clientHeight,
                o = 20;
              (this.adPopupEl.style.display = null),
                (t = window.innerHeight - a - i - r - o < 0),
                !t ||
                  e ||
                  this.proAutoPopupOpen ||
                  (this.closeSelectedTab(), (t = !1));
            }
            this.tabContentObscuresAd = t;
          }
          #j(e) {
            if (!e)
              return void (this.customInstallationSelectorObscuresAd = !1);
            const t = document.querySelector(
              "custom-installation-selector .tooltip-content"
            );
            if (t && this.adPopupEl) {
              const e = t.getBoundingClientRect(),
                a = this.adPopupEl.getBoundingClientRect();
              this.customInstallationSelectorObscuresAd = a.top - 20 < e.bottom;
            } else this.customInstallationSelectorObscuresAd = !1;
          }
          get adCanBeVisible() {
            return (
              !this.proPopupVisible &&
              !this.tabContentObscuresAd &&
              !this.customInstallationSelectorObscuresAd
            );
          }
          get closeIfClickOutsideTabContent() {
            return !this.adCanBeVisible && this.selectedTab && this.adActive;
          }
          set closeIfClickOutsideTabContent(e) {
            if (!e) {
              const e = this.previousSelectedTab,
                t = this.selectedTab;
              this.closeSelectedTab(),
                "pro" === t &&
                  e &&
                  "pro" !== e &&
                  setTimeout(() => this.selectTab(e));
            }
          }
          get betaModsEnabled() {
            return (
              this.selectedTrainer?.blueprint.cheats.filter((e) =>
                (0, _.yE)(e.flags, 2)
              ).length > 0
            );
          }
          get gameMaps() {
            if (!this.game) return (this.lastMaps = []), [];
            if (!this.selectedTrainer) return this.lastMaps;
            const e = this.catalog.maps.filter(
              (e) => e.titleId === this.game.titleId
            );
            return (this.lastMaps = e), e;
          }
          get gamesPlayedCount() {
            return Object.values(this.gameHistory).filter((e) => e.lastPlayedAt)
              .length;
          }
          async #V() {
            return (
              !this.gamesPlayedCount &&
              !this.lastFirstPlayUpgradePrompt &&
              !this.account.subscription &&
              !(0, k.RR)(
                new Date(this.account.joinedAt),
                new Date(N.EXPERIMENT_START_DATE)
              ) &&
              (await this.#D.trigger(N.EXPERIMENT_KEY)) > 0
            );
          }
        };
      (0, i.gn)(
        [o.bindable, (0, i.w6)("design:type", String)],
        z.prototype,
        "gameId",
        void 0
      ),
        (0, i.gn)(
          [o.bindable, (0, i.w6)("design:type", String)],
          z.prototype,
          "trainerId",
          void 0
        ),
        (0, i.gn)(
          [o.bindable, (0, i.w6)("design:type", Boolean)],
          z.prototype,
          "autoLaunch",
          void 0
        ),
        (0, i.gn)(
          [o.observable, (0, i.w6)("design:type", String)],
          z.prototype,
          "selectedTab",
          void 0
        ),
        (0, i.gn)(
          [o.observable, (0, i.w6)("design:type", Boolean)],
          z.prototype,
          "adActive",
          void 0
        ),
        (0, i.gn)(
          [o.observable, (0, i.w6)("design:type", Object)],
          z.prototype,
          "game",
          void 0
        ),
        (0, i.gn)(
          [
            (0, o.computedFrom)("proAutoPopupOpen", "selectedTab"),
            (0, i.w6)("design:type", Boolean),
            (0, i.w6)("design:paramtypes", []),
          ],
          z.prototype,
          "proPopupVisible",
          null
        ),
        (0, i.gn)(
          [
            (0, o.computedFrom)("proAutoPopupOpen", "selectedTab"),
            (0, i.w6)("design:type", Boolean),
            (0, i.w6)("design:paramtypes", []),
          ],
          z.prototype,
          "panelDocked",
          null
        ),
        (0, i.gn)(
          [
            (0, o.computedFrom)("selectedTrainer"),
            (0, i.w6)("design:type", Boolean),
            (0, i.w6)("design:paramtypes", []),
          ],
          z.prototype,
          "showCreatorTab",
          null
        ),
        (0, i.gn)(
          [
            (0, o.computedFrom)("game"),
            (0, i.w6)("design:type", Boolean),
            (0, i.w6)("design:paramtypes", []),
          ],
          z.prototype,
          "canSuggestCheats",
          null
        ),
        (0, i.gn)(
          [
            (0, o.computedFrom)("game"),
            (0, i.w6)("design:type", String),
            (0, i.w6)("design:paramtypes", []),
          ],
          z.prototype,
          "suggestCheatsLocation",
          null
        ),
        (0, i.gn)(
          [
            (0, o.computedFrom)(
              "proPopupVisible",
              "tabContentObscuresAd",
              "customInstallationSelectorObscuresAd"
            ),
            (0, i.w6)("design:type", Boolean),
            (0, i.w6)("design:paramtypes", []),
          ],
          z.prototype,
          "adCanBeVisible",
          null
        ),
        (0, i.gn)(
          [
            (0, o.computedFrom)("adCanBeVisible", "selectedTab", "adActive"),
            (0, i.w6)("design:type", Boolean),
            (0, i.w6)("design:paramtypes", [Boolean]),
          ],
          z.prototype,
          "closeIfClickOutsideTabContent",
          null
        ),
        (0, i.gn)(
          [
            (0, o.computedFrom)("selectedTrainer"),
            (0, i.w6)("design:type", Boolean),
            (0, i.w6)("design:paramtypes", []),
          ],
          z.prototype,
          "betaModsEnabled",
          null
        ),
        (0, i.gn)(
          [
            (0, o.computedFrom)("game", "catalog", "selectedTrainer"),
            (0, i.w6)("design:type", Array),
            (0, i.w6)("design:paramtypes", []),
          ],
          z.prototype,
          "gameMaps",
          null
        ),
        (0, i.gn)(
          [
            (0, o.computedFrom)("gameHistory"),
            (0, i.w6)("design:type", Number),
            (0, i.w6)("design:paramtypes", []),
          ],
          z.prototype,
          "gamesPlayedCount",
          null
        ),
        (z = (0, i.gn)(
          [
            (0, T.b)({
              selectors: {
                account: (0, T.g)("account"),
                catalog: (0, T.g)("catalog"),
                trainerNotesRead: (0, T.g)("trainerNotesRead"),
                trainerPanelClosed: (0, T.g)("settings", "trainerPanelClosed"),
                creatorMode: (0, T.g)("settings", "creatorMode"),
                freeUserSince: (0, T.g)("timestamps", "freeUserSince"),
                lastTrainerProPopupDismissal: (0, T.g)(
                  "timestamps",
                  "lastTrainerProPopupDismissal"
                ),
                updatePendingCollapsed: (0, T.g)(
                  "settings",
                  "updatePendingCollapsed"
                ),
                gameHistory: (0, T.g)("gameHistory"),
                lastFirstPlayUpgradePrompt: (0, T.g)(
                  "timestamps",
                  "lastFirstPlayUpgradePrompt"
                ),
              },
            }),
            (0, o.autoinject)(),
            (0, i.w6)("design:paramtypes", [
              d.K,
              n.F0,
              s.yh,
              w.oc,
              x.BasicDialogService,
              R.hc,
              L.A,
              I,
              m.G,
              g.T,
              h.p,
              b.O,
              p.x,
              r.h,
              u.c,
              y.p,
              N.FirstPlayUpgradePromptDialogService,
            ]),
          ],
          z
        ));
    },
  },
]);

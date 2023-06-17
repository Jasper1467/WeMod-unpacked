"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [2366],
  {
    "app/resources/elements/app-header-user.scss": (e, t, i) => {
      i.r(t), i.d(t, { default: () => n });
      var o = i(8081),
        r = i.n(o),
        a = i(23645),
        s = i.n(a)()(r());
      s.push([
        e.id,
        "app-header-user{display:flex;flex-direction:row;height:36px;position:relative;z-index:1;-webkit-app-region:drag}app-header-user>*{display:flex;align-items:center}app-header-user .actions{-webkit-app-region:no-drag;flex:0 1 auto;display:flex;align-items:center;border-radius:18px;padding:5px 10px 5px 5px;min-width:0}.theme-default app-header-user .actions{background:#292e34}.theme-purple-pro app-header-user .actions{background:#232e3f}.theme-green-pro app-header-user .actions{background:#323232}.theme-orange-pro app-header-user .actions{background:#2d333a}.theme-pro app-header-user .actions{background:#292929}app-header-user .actions .creator-mode-toggle{display:flex;justify-content:center;margin-right:9px}app-header-user .actions remote-button{margin-left:15px}app-header-user .actions overlay-button{margin-left:10px}app-header-user .actions remote-button,app-header-user .actions overlay-button,app-header-user .actions header-pro-badge{z-index:1}app-header-user .actions remote-button.tooltip-open,app-header-user .actions overlay-button.tooltip-open,app-header-user .actions header-pro-badge.tooltip-open{z-index:0}app-header-user .banner{margin-left:9px}app-header-user .buttons{display:flex}@media(forced-colors: active){body:not(.override-contrast-mode) app-header-user .buttons .icon *{fill:CanvasText}}app-header-user .buttons .icon i{display:inline;opacity:.4;transition:opacity .15s}app-header-user .buttons .icon.icon-discord svg{max-width:initial}app-header-user .buttons .icon:hover i{opacity:1}app-header-user .buttons .icon svg{height:16px;width:auto}app-header-user .buttons>*{margin-left:15px}app-header-user .buttons>*.discord-button{position:relative}app-header-user .buttons>*.discord-button .tooltip{transform:translateY(20px)}app-header-user .user-wrapper{display:flex;min-width:0}app-header-user .user-wrapper .buttons{display:flex}app-header-user .user-wrapper .user{display:flex;flex-direction:row;align-items:center;min-width:0}app-header-user .user-wrapper .user,app-header-user .user-wrapper .user *{text-decoration:none}app-header-user .user-wrapper .user .avatar{display:flex;flex:0;margin-right:9px}app-header-user .user-wrapper .user .avatar,app-header-user .user-wrapper .user .avatar *{cursor:pointer}app-header-user .user-wrapper .user .avatar img{display:inline-block;border-radius:50%;overflow:hidden;width:26px;height:26px}app-header-user .user-wrapper .user .info{display:flex;flex:1 1 0;min-width:0}app-header-user .user-wrapper .user .info .username{display:flex;align-items:center;font-size:14px;color:rgba(255,255,255,.4);min-width:0}app-header-user .user-wrapper .user .info .username .label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;flex:1 1 auto;min-width:0;width:100%}app-header-user .user-wrapper .user .info .username .label,app-header-user .user-wrapper .user .info .username .label *{cursor:pointer}app-header-user .user-wrapper .user .info .username .badge-container{margin-top:-1px;flex:0 0 auto;margin-left:9px;position:relative}app-header-user .user-wrapper .user .info .username .badge{background-color:var(--theme--highlight);display:inline-block;font-weight:800;font-size:14px;text-transform:uppercase;color:#fff;line-height:20px;letter-spacing:.6px;padding:0 4px;border-radius:2.5px;min-width:0;text-rendering:geometricPrecision;line-height:14px;font-size:10px;letter-spacing:.4px;padding:0 3px}@media(forced-colors: active){body:not(.override-contrast-mode) app-header-user .user-wrapper .user .info .username .badge{border:1px solid #fff}}app-header-user .user-wrapper .user .info .username .badge,app-header-user .user-wrapper .user .info .username .badge *{cursor:pointer}app-header-user .user-wrapper .user .info .username .badge.pro{background:linear-gradient(225deg, var(--color--brand-green) 0%, var(--color--pro) 100%);color:#fff}app-header-user .user-wrapper .banner{flex:0 0 auto;height:30px;padding:0 7px 0 8px;margin-left:9px;border-radius:4px;overflow:hidden;transition:filter .15s;display:flex;align-items:center;background:linear-gradient(-225deg, var(--color--brand-green) 0%, var(--color--pro) 100%)}app-header-user .user-wrapper .banner,app-header-user .user-wrapper .banner *{cursor:pointer}app-header-user .user-wrapper .banner:hover{filter:brightness(1.1)}app-header-user .user-wrapper .banner .badge{font-weight:800;font-size:12px;color:#4f79fb;text-transform:uppercase;padding:2px 4px;border-radius:2.5px;background:#fff}app-header-user .user-wrapper .banner .label{font-weight:800;font-size:10px;line-height:12px;color:#fff;width:-webkit-min-content;margin-left:7.5px;text-align:center}app-header-user.condense-pro-banner .banner .label{display:none}app-header-user.hide-avatar .avatar{display:none}app-header-user.hide-avatar .info{margin-left:4px}app-header-user.hide-username .user .info .username .label{display:none}app-header-user.hide-username .user .info .username .badge{margin-left:0}",
        "",
      ]);
      const n = s;
    },
    "app/resources/elements/app-header.scss": (e, t, i) => {
      i.r(t), i.d(t, { default: () => u });
      var o = i(8081),
        r = i.n(o),
        a = i(23645),
        s = i.n(a),
        n = i(61667),
        l = i.n(n),
        p = new URL(i(69091), i.b),
        d = new URL(i(79661), i.b),
        c = s()(r()),
        h = l()(p),
        g = l()(d);
      c.push([
        e.id,
        "app-header-search{--overflow-fade--background: var(--theme--background);-webkit-app-region:no-drag;display:block;width:260px;max-width:260px;height:36px}app-header-search.condensed{width:170px;max-width:170px}app-header-search.transition .wrapper{transition:width .25s ease-in-out}app-header-search .wrapper{border:1px solid rgba(255,255,255,.2);border-radius:18px;overflow:hidden;background:var(--theme--background);width:var(--search-width)}app-header-search .search{position:relative;width:100%;height:34px}app-header-search input{padding:5px 11px 5px 37px;height:34px;background:rgba(0,0,0,0) url(" +
          h +
          ') 9px center no-repeat;border:0;color:#fff;width:100%}app-header-search input:focus-visible{outline:none !important}app-header-search input,app-header-search input::placeholder{font-weight:500;font-size:16px}app-header-search input::placeholder{color:rgba(255,255,255,.4)}app-header-search .close-button{position:absolute;top:8.5px;right:11px;width:17px;height:17px;display:inline-block;align-items:center;justify-content:center;background:rgba(0,0,0,0);border:0;opacity:.3;transition:opacity .15s,visibility 0s .15s}app-header-search .close-button:hover{opacity:1}app-header-search .close-button:disabled{opacity:0;visibility:hidden;transition-delay:0s}app-header-search .close-button:not(:disabled)~input{padding-right:30px}app-header-search .overflow-fade__wrapper:before,app-header-search .overflow-fade__wrapper:after{display:none}app-header-search .no-results{width:var(--search-max-width);color:rgba(255,255,255,.4);margin:0 10px 10px;display:none;font-size:15px}app-header-search .results{width:var(--search-max-width);max-height:0;transition:max-height .25s ease-in-out,opacity .25s;margin:0;padding:0;opacity:0;-webkit-app-region:no-drag;overflow:visible;position:relative;z-index:1001}app-header-search .results::-webkit-scrollbar{width:7px;height:7px;background:rgba(255,255,255,.1);border-radius:10px;margin:10px}app-header-search .results::-webkit-scrollbar-thumb:window-inactive,app-header-search .results::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,.2);border-radius:99px;border:1px solid rgba(0,0,0,.2);background-clip:padding-box}app-header-search .results::-webkit-scrollbar-thumb:window-inactive:hover,app-header-search .results::-webkit-scrollbar-thumb:hover{background-color:rgba(255,255,255,.5)}app-header-search .results::-webkit-scrollbar{width:25px;border-top-left-radius:0;border-top-right-radius:18px;border-bottom-right-radius:18px;border-bottom-left-radius:0;background:rgba(0,0,0,0)}app-header-search .results::-webkit-scrollbar-thumb:window-inactive,app-header-search .results::-webkit-scrollbar-thumb{border:10px solid rgba(0,0,0,0)}app-header-search .results .group-title{font-size:14px;line-height:21px;font-weight:600;color:#fff;display:block;margin:0;padding:5px 15px}app-header-search .results .empty-message{display:flex;margin:0 10px 10px;font-size:13px;line-height:19px;color:rgba(255,255,255,.5)}app-header-search .results .empty-message p{margin:0;padding:0}app-header-search .results .results-group+.results-group{margin-top:15px}app-header-search .results .results-group.favorites .empty-message:before{content:"";display:inline-block;width:20px;height:20px;background:url(' +
          g +
          ') center no-repeat;opacity:.3;margin-right:6px;vertical-align:middle}app-header-search .results .result{list-style:none;color:#fff;display:flex;align-items:center;margin:0 20px 0 10px;transition:margin .25s,padding .25s;border-radius:5px}app-header-search .results .result .thumbnail-wrapper{position:relative;margin-right:14px}app-header-search .results .result .thumbnail-wrapper:nth-child(1n+0) img{animation-delay:0.1s}app-header-search .results .result .thumbnail-wrapper:nth-child(2n+0) img{animation-delay:0.2s}app-header-search .results .result .thumbnail-wrapper:nth-child(3n+0) img{animation-delay:0.3s}app-header-search .results .result .thumbnail-wrapper:nth-child(4n+0) img{animation-delay:0.4s}app-header-search .results .result .thumbnail-wrapper:nth-child(5n+0) img{animation-delay:0.5s}app-header-search .results .result .thumbnail-wrapper:nth-child(6n+0) img{animation-delay:0.6s}app-header-search .results .result .thumbnail-wrapper:nth-child(7n+0) img{animation-delay:0.7s}app-header-search .results .result .thumbnail-wrapper:nth-child(8n+0) img{animation-delay:0.8s}app-header-search .results .result .thumbnail-wrapper:nth-child(9n+0) img{animation-delay:0.9s}app-header-search .results .result .thumbnail{display:inline-block;background:rgba(0,0,0,.1);width:74px;height:34px;border-radius:5px;flex:0 0 auto;float:left}app-header-search .results .result .thumbnail:not(.loaded){animation-name:thumbnail-loading;animation-duration:1s;animation-timing-function:linear;animation-direction:alternate;animation-iteration-count:infinite;background-clip:padding-box}app-header-search .results .result .name{font-size:14px;line-height:19px;color:rgba(255,255,255,.5);flex:1;transition:color .15s}app-header-search .results .result .tag{background-color:var(--color--accent);display:inline-block;font-weight:900;font-size:12px;color:#111;line-height:15px;padding:0 4px;border-radius:2.5px;min-width:0;font-style:normal;background-color:rgba(0,0,0,0);color:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.4);line-height:11px;text-transform:uppercase;font-size:11px;font-weight:bold;padding:1.5px 4px;margin-right:7px;vertical-align:middle}app-header-search .results .result:hover,app-header-search .results .result:focus{background:var(--theme--secondary-background);outline:none !important}app-header-search .results .result:hover .name,app-header-search .results .result:focus .name{color:#fff}app-header-search .results .result .unavailable-badge{position:absolute;right:0;bottom:0;width:16px;height:16px;border-top-left-radius:3px;border-bottom-right-radius:3px;background:#999;border-top:1px solid var(--theme--background);border-left:1px solid var(--theme--background);display:inline-flex;align-items:center;justify-content:center}app-header-search .results .result .unavailable-badge svg{width:12px}app-header-search .results .result .unavailable-badge svg *{fill:var(--theme--background)}app-header-search.expanded{width:100%}app-header-search.expanded .wrapper{box-shadow:0 0 5px rgba(var(--theme--background--rgb), 0.5);position:relative;position:absolute;left:0;top:0}app-header-search.expanded .overflow-fade__wrapper:before,app-header-search.expanded .overflow-fade__wrapper:after{display:block}app-header-search.expanded .no-results{display:block}app-header-search.expanded .results{max-height:calc(100vh - 75px - var(--toasts-safe-area));opacity:1;overflow-x:hidden;overflow-y:overlay}app-header-search.expanded .results .result{margin-top:5px;padding:5px 15px 5px 5px}app-header-search.expanded .results .result:first-of-type{margin-top:0}app-header-search.expanded .results .result:last-of-type{margin-bottom:10px}app-header-search:not(.expanded) .overflow-fade__wrapper:before,app-header-search:not(.expanded) .overflow-fade__wrapper:after{display:none}app-header{height:60px;display:flex;align-items:center;width:100%;-webkit-app-region:drag;padding:12px 5px 12px 10px;position:relative}app-header .logo{width:32px;height:20px;margin-left:10px;margin-right:20px;position:relative;z-index:1001}app-header .logo.link{-webkit-app-region:no-drag}app-header .logo.link img{width:32px;height:20px}app-header .content-wrapper{flex:1 1 auto;display:flex;align-items:center;position:relative;z-index:2;min-width:0}app-header .content-wrapper app-header-search{flex:1 1 auto;margin-right:20px}app-header .content-wrapper app-header-search.expanded+nav{opacity:0;-webkit-app-region:no-drag}app-header .content-wrapper nav{flex:0 0 auto;transition:opacity .25s}app-header .content-wrapper app-header-user{flex:1 1 auto;margin-right:10px;justify-content:flex-end;min-width:0}app-header .expanded-search-wrapper{position:relative;display:flex;align-items:center;flex:0 0 auto;margin-right:10px;z-index:0;min-width:0}app-header nav{flex:0 0 auto;align-items:baseline;position:relative;z-index:-1;min-width:350px}app-header nav a{font-weight:500;font-size:16px;color:rgba(255,255,255,.4);transition:color .15s,font-size .15s;text-decoration:none;line-height:16px !important;padding-right:21px;position:relative;-webkit-app-region:no-drag}app-header nav a:last-child{padding-right:0}app-header nav a:hover{color:#fff}app-header nav a.current{font-weight:700;color:#fff;font-size:23px}app-header nav a.current:before{content:"";position:absolute;left:0;bottom:-5px;width:16px;height:2px;background:rgba(255,255,255,.2)}app-header window-controls{flex:0 0 auto;-webkit-app-region:no-drag;position:relative;z-index:1001;margin-right:8px}app-header.search-expanded,app-header.search-expanded *{-webkit-app-region:no-drag}app-header.search-expanded app-header-search,app-header.search-expanded * app-header-search{width:var(--search-max-width)}.ux-dialog-open~.app-layout app-header .logo.link{pointer-events:none}.ux-dialog-open~.app-layout app-header>*:not(:before),.ux-dialog-open~.app-layout app-header>*:not(:before) *{-webkit-app-region:no-drag !important}.ux-dialog-open~.app-layout app-header:before{content:"";position:absolute;left:0;top:20px;right:0;bottom:0;-webkit-app-region:no-drag}.ux-dialog-open~.app-layout app-header:after{content:"";position:absolute;left:0;top:3px;right:0;height:17px;-webkit-app-region:drag}',
        "",
      ]);
      const u = c;
    },
    "app/resources/elements/discord-tooltip.scss": (e, t, i) => {
      i.r(t), i.d(t, { default: () => n });
      var o = i(8081),
        r = i.n(o),
        a = i(23645),
        s = i.n(a)()(r());
      s.push([
        e.id,
        ".discord-tooltip .tooltip{background:rgba(0,0,0,0) !important;border:1px solid rgba(255,255,255,.05);border-radius:10px}.discord-tooltip .tooltip .tooltip-content{padding:0;border:0 !important}.discord-tooltip .tooltip .tooltip-content>*+*{margin-left:0}.discord-tooltip .layout{background:#18293a;display:flex;width:550px}.discord-tooltip .content{flex:1 1 auto;padding:17px 24px}.discord-tooltip .graphic{flex:0 0 auto;width:204px;height:211px;border-top-right-radius:10px;border-bottom-right-radius:10px}.discord-tooltip h1{font-weight:800;font-size:21px;line-height:30px;font-weight:700;color:#fff;margin:0 0 15px}.discord-tooltip p{font-weight:700;font-size:15px;line-height:24px;font-weight:500;display:block;color:rgba(255,255,255,.75)}.discord-tooltip button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;box-shadow:inset 0 0 0 1px var(--theme--highlight);--cta__icon--color: var(--theme--highlight);font-weight:700;font-size:15px;line-height:24px;font-weight:700;--cta--padding: 12px;--cta--height: 28px;--cta--hover--border-width: 1px;margin-top:25px}.discord-tooltip button,.discord-tooltip button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) .discord-tooltip button{border:1px solid #fff}}.discord-tooltip button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}.discord-tooltip button>*:first-child{padding-left:0}.discord-tooltip button>*:last-child{padding-right:0}.discord-tooltip button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) .discord-tooltip button svg *{fill:CanvasText}}.discord-tooltip button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) .discord-tooltip button svg{opacity:1}}.discord-tooltip button img{height:50%}.discord-tooltip button:disabled{opacity:.3}.discord-tooltip button:disabled,.discord-tooltip button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){.discord-tooltip button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}.discord-tooltip button:not(:disabled):hover svg{opacity:1}}.discord-tooltip button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}@media(hover: hover){.discord-tooltip button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--theme--highlight);background-color:rgba(0,0,0,0)}}.discord-tooltip button:not(:disabled):active{background-color:var(--theme--highlight)}",
        "",
      ]);
      const n = s;
    },
    "app/resources/elements/header-pro-badge.scss": (e, t, i) => {
      i.r(t), i.d(t, { default: () => n });
      var o = i(8081),
        r = i.n(o),
        a = i(23645),
        s = i.n(a)()(r());
      s.push([
        e.id,
        "header-pro-badge{position:relative}header-pro-badge pro-badge{display:inline-block}header-pro-badge pro-badge,header-pro-badge pro-badge *{cursor:pointer}",
        "",
      ]);
      const n = s;
    },
    "app/resources/elements/overlay-button.scss": (e, t, i) => {
      i.r(t), i.d(t, { default: () => n });
      var o = i(8081),
        r = i.n(o),
        a = i(23645),
        s = i.n(a)()(r());
      s.push([
        e.id,
        '@keyframes -pulse{0%{transform:scale(0.3)}50%{transform:scale(0.5)}100%{transform:scale(0.3)}}@keyframes pulse-2{0%{transform:scale(1);opacity:0}70%{transform:scale(1.5);opacity:1}100%{transform:scale(2);opacity:0}}overlay-button{position:relative}overlay-button .overlay-button{display:block;background:rgba(0,0,0,0);padding:0;border:none;width:26px;height:26px}overlay-button .overlay-button svg{position:relative;z-index:1}overlay-button .overlay-button .background{fill:var(--theme--background)}overlay-button .overlay-button *{transition-property:stroke,stroke-opacity,fill,fill-opacity;transition-duration:.15s}overlay-button:hover:not(.connected) .overlay-button .background{stroke-opacity:.5}overlay-button.connected .widget-background{fill:var(--theme--highlight);fill-opacity:.25}overlay-button.connected .background,overlay-button.connected .widget-border{stroke:var(--theme--highlight);stroke-opacity:1}overlay-button.highlight .pulse{width:26px;height:26px;position:absolute;left:0;top:0}overlay-button.highlight .pulse:after{background:rgba(0,0,0,0);content:"";position:absolute;left:0;top:0;width:26px;height:26px;display:inline-block;border-radius:50%;animation:pulse 1s infinite ease-in-out}overlay-button.highlight .pulse:before{background:rgba(var(--theme--highlight--rgb), 0.24);content:"";display:block;position:absolute;left:0;top:0;width:26px;height:26px;border-radius:50%;animation:pulse-2 1s infinite}',
        "",
      ]);
      const n = s;
    },
    "app/resources/elements/overlay-tooltip.scss": (e, t, i) => {
      i.r(t), i.d(t, { default: () => x });
      var o = i(8081),
        r = i.n(o),
        a = i(23645),
        s = i.n(a),
        n = i(61667),
        l = i.n(n),
        p = new URL(i(47823), i.b),
        d = new URL(i(31916), i.b),
        c = new URL(i(81025), i.b),
        h = new URL(i(93869), i.b),
        g = new URL(i(98907), i.b),
        u = s()(r()),
        b = l()(p),
        m = l()(d),
        v = l()(c),
        f = l()(h),
        y = l()(g);
      u.push([
        e.id,
        "@keyframes -pulse{0%{transform:scale(0.3)}50%{transform:scale(0.5)}100%{transform:scale(0.3)}}@keyframes pulse-2{0%{transform:scale(1);opacity:0}70%{transform:scale(1.5);opacity:1}100%{transform:scale(2);opacity:0}}.billing-settings section{padding:20px;border-radius:10px;border:1px solid rgba(255,255,255,.04);transition:opacity .15s}.billing-settings section.filled{background:rgba(255,255,255,.04);border:none;padding-top:18px}.billing-settings section.filled h5{color:rgba(255,255,255,.6)}.billing-settings section.filled h5.plan-header{margin-bottom:16px;color:#fff}.billing-settings section+section{margin-top:20px}.billing-settings section.loading{opacity:.4}.billing-settings section.loading,.billing-settings section.loading *{pointer-events:none}.billing-settings section.layout{display:flex}.billing-settings section.layout>*:first-child{flex:1 1 auto}.billing-settings section.layout>*:last-child{flex:0 0 auto}.billing-settings .details{display:flex;align-items:center}.billing-settings .details .meta{display:flex;align-items:center;color:rgba(255,255,255,.5)}.billing-settings .details .meta>*+*{margin-left:7px}.billing-settings .details .meta,.billing-settings .details .meta strong,.billing-settings .details .meta em{font-size:13px;line-height:20px;font-weight:500}.billing-settings .details .meta em{font-style:normal;color:rgba(255,255,255,.8)}.billing-settings .details .card-type{width:34px;height:22px;border-radius:4px;background-position:center;background-repeat:no-repeat;background-image:url(" +
          b +
          ');display:inline-block;flex:0 0 auto}.billing-settings .details .meta.warning,.billing-settings .details .meta.warning *{color:var(--color--brand-yellow)}.billing-settings .details .row-actions{display:flex;align-items:center}.billing-settings .details .row-actions .links{display:flex;align-items:center;margin-left:20px;padding-left:20px;border-left:1px solid rgba(255,255,255,.1)}.billing-settings .link{font-size:13px;line-height:20px;font-weight:700;background:rgba(0,0,0,0);border:0;color:rgba(255,255,255,.25);padding:0}.billing-settings .link:hover{color:#fff}.billing-settings h5{font-weight:600;font-size:16px;line-height:25px;font-weight:700;color:#fff;margin:0 0 11px}.billing-settings h5 em{font-style:normal;color:var(--theme--highlight)}.billing-settings h5 strong{background-color:var(--theme--highlight);display:inline-block;font-weight:800;font-size:14px;text-transform:uppercase;color:#fff;line-height:20px;letter-spacing:.6px;padding:0 4px;border-radius:2.5px;min-width:0;text-rendering:geometricPrecision;background:linear-gradient(225deg, var(--color--brand-green) 0%, var(--color--pro) 100%);color:#fff;margin-right:4px;vertical-align:middle}@media(forced-colors: active){body:not(.override-contrast-mode) .billing-settings h5 strong{border:1px solid #fff}}.billing-settings h5+.details{margin-top:2px}.billing-settings h5.warning{color:var(--color--brand-yellow) !important;display:inline-flex;align-items:center}.billing-settings h5.warning:before{display:inline-block;content:"";width:15px;height:15px;border-radius:50%;background:rgba(var(--color--brand-yellow--rgb), 0.3) url(' +
          m +
          ') 6px 3px no-repeat}.billing-settings h5.warning:before{margin-right:8px}.billing-settings .main-actions{margin:17px 0 0 0}.billing-settings .main-actions>*+*{margin-left:15px}.billing-settings .main-actions .button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;box-shadow:inset 0 0 0 1px var(--color--accent);--cta__icon--color: var(--color--accent);font-weight:800;--cta--padding: 18px;--cta--height: 40px;--cta--hover--border-width: 2px;font-size:18px}.billing-settings .main-actions .button,.billing-settings .main-actions .button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) .billing-settings .main-actions .button{border:1px solid #fff}}.billing-settings .main-actions .button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}.billing-settings .main-actions .button>*:first-child{padding-left:0}.billing-settings .main-actions .button>*:last-child{padding-right:0}.billing-settings .main-actions .button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) .billing-settings .main-actions .button svg *{fill:CanvasText}}.billing-settings .main-actions .button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) .billing-settings .main-actions .button svg{opacity:1}}.billing-settings .main-actions .button img{height:50%}.billing-settings .main-actions .button:disabled{opacity:.3}.billing-settings .main-actions .button:disabled,.billing-settings .main-actions .button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){.billing-settings .main-actions .button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}.billing-settings .main-actions .button:not(:disabled):hover svg{opacity:1}}.billing-settings .main-actions .button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}@media(hover: hover){.billing-settings .main-actions .button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--color--accent);background-color:rgba(0,0,0,0)}}.billing-settings .main-actions .button:not(:disabled):active{background-color:var(--color--accent)}.billing-settings .main-actions .button:not(:disabled):active{--cta__icon--color: #000;color:#000}.billing-settings .main-actions .button.main{background-color:var(--color--accent) !important;color:var(--theme--background) !important;transition:filter .15s;box-shadow:none !important}@media(hover: hover){.billing-settings .main-actions .button.main:hover{filter:brightness(1.1)}}.billing-settings .main-actions .button.secondary{background-color:rgba(255,255,255,.6);box-shadow:none;color:var(--theme--background)}.billing-settings .main-actions .button.secondary svg{opacity:1}.billing-settings .main-actions .button.secondary svg *{--cta__icon--color: var(--theme--background)}@media(hover: hover){.billing-settings .main-actions .button.secondary:not(:disabled):hover{background-color:var(--theme--highlight)}}.billing-settings .main-actions .button.accent{background-color:rgba(var(--color--accent--rgb), 0.08) !important;color:var(--color--accent) !important;transition:filter .15s;box-shadow:none !important}@media(hover: hover){.billing-settings .main-actions .button.accent:hover{filter:brightness(1.1)}}.billing-settings .main-actions .button.small{font-size:13px;line-height:20px;font-weight:700;--cta--padding: 11px;--cta--height: 26px;--cta--hover--border-width: 1px}.billing-settings .main-actions .divider{border-left:1px solid rgba(255,255,255,.1);height:28px}.billing-settings .main-actions .promo{font-size:13px;line-height:20px;color:var(--color--accent);display:inline-flex;align-items:center}.billing-settings .main-actions .promo i{margin-left:7px}.billing-settings .main-actions .promo i svg *{fill:var(--color--accent)}.billing-settings .info{font-size:14px;line-height:21px;font-weight:500;line-height:19px;color:rgba(255,255,255,.5)}.billing-settings .disclaimer{font-size:13px;line-height:20px;font-weight:500;color:rgba(255,255,255,.3);display:flex;align-items:center;margin:20px 0 0 0}.billing-settings .disclaimer .icon{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;--cta--height: 15px;--cta--hover--border-width: 1px;min-width:var(--cta--height);width:var(--cta--height);border-radius:50%;justify-content:center;align-items:center;position:relative;background:rgba(255,255,255,.1);box-shadow:none !important;pointer-events:none;margin-right:7px}.billing-settings .disclaimer .icon,.billing-settings .disclaimer .icon *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) .billing-settings .disclaimer .icon{border:1px solid #fff}}.billing-settings .disclaimer .icon>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}.billing-settings .disclaimer .icon>*:first-child{padding-left:0}.billing-settings .disclaimer .icon>*:last-child{padding-right:0}.billing-settings .disclaimer .icon svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) .billing-settings .disclaimer .icon svg *{fill:CanvasText}}.billing-settings .disclaimer .icon svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) .billing-settings .disclaimer .icon svg{opacity:1}}.billing-settings .disclaimer .icon img{height:50%}.billing-settings .disclaimer .icon:disabled{opacity:.3}.billing-settings .disclaimer .icon:disabled,.billing-settings .disclaimer .icon:disabled *{cursor:default;pointer-events:none}@media(hover: hover){.billing-settings .disclaimer .icon:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}.billing-settings .disclaimer .icon:not(:disabled):hover svg{opacity:1}}.billing-settings .disclaimer .icon:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}.billing-settings .disclaimer .icon,.billing-settings .disclaimer .icon>*{padding:0 !important}.billing-settings .disclaimer .icon:active{background-color:rgba(0,0,0,0) !important;color:rgba(255,255,255,.8) !important}.billing-settings .disclaimer .icon svg{opacity:.5}.billing-settings .disclaimer a{color:rgba(255,255,255,.5)}.billing-settings .disclaimer a:hover{color:#fff}.billing-settings .graphic{margin:0 0 -20px 0;justify-self:flex-end}.billing-settings .subscribed{--checkbox--checked-color: var(--theme--highlight);--checkbox__label--color: rgba(255, 255, 255, 0.5);display:inline-flex;align-items:center;--checkbox--checked-color: var(--color--accent);border:1px solid rgba(255,255,255,.15);border-radius:100px;padding:8px 15px;transition:background-color .15s,border-color .15s;background-color:rgba(var(--color--accent--rgb), 0.08);cursor:initial;border-color:rgba(0,0,0,0);--checkbox__label--color: var(--checkbox--checked-color);margin-right:15px}.billing-settings .subscribed,.billing-settings .subscribed *{cursor:pointer}.billing-settings .subscribed,.billing-settings .subscribed *{cursor:pointer}.billing-settings .subscribed>*:first-child{margin-right:9px}.billing-settings .subscribed:hover>*{--checkbox__label--color: #fff}.billing-settings .subscribed,.billing-settings .subscribed *:not(info-tooltip){cursor:default !important}.billing-settings .subscribed .checkbox{display:inline-block;width:15px;height:15px;border:1px solid rgba(255,255,255,.25);border-radius:4px;position:relative;background:rgba(0,0,0,0);transition:background-color .15s;-webkit-appearance:none;width:15px;height:15px;background:rgba(0,0,0,0);border-color:rgba(255,255,255,.25);border-color:rgba(0,0,0,0)}.billing-settings .subscribed .checkbox,.billing-settings .subscribed .checkbox *{cursor:pointer}.billing-settings .subscribed .checkbox:checked:before{opacity:1}.billing-settings .subscribed .checkbox:before{background:var(--checkbox--checked-color);content:"";display:block;position:absolute;left:0;top:0;width:15px;height:11px;opacity:0;-webkit-mask-box-image:url(' +
          v +
          ')}.billing-settings .subscribed .checkbox:before{left:1px;top:0;width:15px;height:11px;transform:scale(1)}.billing-settings .subscribed .checkbox:before{opacity:1}.billing-settings .subscribed>.icon{margin-right:9px}.billing-settings .subscribed>.icon svg *{fill:var(--color--accent)}.billing-settings .subscribed .label{font-size:13px;line-height:20px;font-weight:500;color:var(--checkbox__label--color);transition:color .15s;color:var(--color--accent) !important}.billing-settings .subscribed .label,.billing-settings .subscribed .label *{cursor:pointer}.billing-settings .subscribed info-tooltip{margin-left:10px}.billing-settings .subscribed info-tooltip,.billing-settings .subscribed info-tooltip *{cursor:pointer}.billing-settings .subscribed.warning{background:rgba(var(--color--brand-yellow--rgb), 0.08)}.billing-settings .subscribed.warning .label{color:var(--color--brand-yellow) !important}.billing-settings .subscribed.warning .checkbox{display:none}.billing-settings .subscribed.warning:before{display:inline-block;content:"";width:19px;height:19px;border-radius:50%;background:rgba(var(--color--brand-yellow--rgb), 0.3) url(' +
          f +
          ') center no-repeat;margin-right:11px}.billing-settings hr{border:0;border-top:1px solid rgba(255,255,255,.1);margin:20px 0 16px}overlay-tooltip .initial-tooltip .tooltip .tooltip-content{white-space:nowrap}overlay-tooltip .overlay-tooltip .tooltip{background:rgba(0,0,0,0) !important;border:1px solid rgba(255,255,255,.05);border-radius:10px}overlay-tooltip .overlay-tooltip .tooltip .tooltip-content{padding:0;border:0 !important}.theme-default overlay-tooltip .overlay-tooltip .tooltip .tooltip-content{background:#11171d linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-purple-pro overlay-tooltip .overlay-tooltip .tooltip .tooltip-content{background:#0b172a linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-green-pro overlay-tooltip .overlay-tooltip .tooltip .tooltip-content{background:#1b1b1b linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-orange-pro overlay-tooltip .overlay-tooltip .tooltip .tooltip-content{background:#161c24 linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-pro overlay-tooltip .overlay-tooltip .tooltip .tooltip-content{background:#111 linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}overlay-tooltip .overlay-tooltip .tooltip .tooltip-content>*+*{margin-left:0}overlay-tooltip .overlay-tooltip .layout{display:flex;width:466px}overlay-tooltip .overlay-tooltip .layout .left{flex:1 1 auto;padding:17px 25px 25px 25px;background-color:var(--theme--secondary-background)}overlay-tooltip .overlay-tooltip .layout .left h1{font-weight:800;font-size:21px;line-height:30px;font-weight:700;display:flex;align-items:center;margin:0 0 9px;color:#fff}overlay-tooltip .overlay-tooltip .layout .left h1 .pulse{position:relative;margin-left:14px}overlay-tooltip .overlay-tooltip .layout .left h1 .pulse.regular{width:6px;height:6px}overlay-tooltip .overlay-tooltip .layout .left h1 .pulse.regular:after{background:rgba(var(--color--accent--rgb), 0.8);content:"";position:absolute;left:0;top:0;width:6px;height:6px;display:inline-block;border-radius:50%;animation:pulse 1s infinite ease-in-out}overlay-tooltip .overlay-tooltip .layout .left h1 .pulse.regular:before{background:rgba(var(--color--accent--rgb), 0.5);content:"";display:block;position:absolute;left:0;top:0;width:6px;height:6px;border-radius:50%;animation:pulse-2 1s infinite}overlay-tooltip .overlay-tooltip .layout .left h1 .pulse.alert{width:6px;height:6px}overlay-tooltip .overlay-tooltip .layout .left h1 .pulse.alert:after{background:rgba(255,99,104,.8);content:"";position:absolute;left:0;top:0;width:6px;height:6px;display:inline-block;border-radius:50%;animation:pulse 1s infinite ease-in-out}overlay-tooltip .overlay-tooltip .layout .left h1 .pulse.alert:before{background:rgba(255,99,104,.5);content:"";display:block;position:absolute;left:0;top:0;width:6px;height:6px;border-radius:50%;animation:pulse-2 1s infinite}overlay-tooltip .overlay-tooltip .layout .left h1 .warning{position:relative;margin-left:9px}overlay-tooltip .overlay-tooltip .layout .left h1 .warning:before{display:inline-block;content:"";width:15px;height:15px;border-radius:50%;background:rgba(var(--color--brand-yellow--rgb), 0.3) url(' +
          m +
          ') 6px 3px no-repeat}overlay-tooltip .overlay-tooltip .layout .left p{font-weight:700;font-size:15px;line-height:24px;font-weight:500;color:rgba(255,255,255,.8);margin:0 0 12px}overlay-tooltip .overlay-tooltip .layout .left p strong{font-size:11px;line-height:16px;display:inline-flex;line-height:24px;text-transform:uppercase;border:1px solid var(--color--brand-blue);vertical-align:middle}overlay-tooltip .overlay-tooltip .layout .left p strong>*{padding:0 8px;font-weight:inherit;color:var(--color--brand-blue);display:inline-block}overlay-tooltip .overlay-tooltip .layout .left p strong>*+*{border-left:1px solid var(--color--brand-blue)}overlay-tooltip .overlay-tooltip .layout .left p strong>*:first-child:before{content:"";display:inline-block;width:16px;height:16px;background:var(--color--brand-blue);-webkit-mask-box-image:url(' +
          y +
          ");margin-right:6px;vertical-align:middle}overlay-tooltip .overlay-tooltip .layout .left .requirements{font-size:13px;line-height:20px;color:rgba(255,255,255,.5)}overlay-tooltip .overlay-tooltip .layout .left button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-size:13px;line-height:20px;font-weight:700;--cta--padding: 11px;--cta--height: 26px;--cta--hover--border-width: 1px}overlay-tooltip .overlay-tooltip .layout .left button,overlay-tooltip .overlay-tooltip .layout .left button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) overlay-tooltip .overlay-tooltip .layout .left button{border:1px solid #fff}}overlay-tooltip .overlay-tooltip .layout .left button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}overlay-tooltip .overlay-tooltip .layout .left button>*:first-child{padding-left:0}overlay-tooltip .overlay-tooltip .layout .left button>*:last-child{padding-right:0}overlay-tooltip .overlay-tooltip .layout .left button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) overlay-tooltip .overlay-tooltip .layout .left button svg *{fill:CanvasText}}overlay-tooltip .overlay-tooltip .layout .left button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) overlay-tooltip .overlay-tooltip .layout .left button svg{opacity:1}}overlay-tooltip .overlay-tooltip .layout .left button img{height:50%}overlay-tooltip .overlay-tooltip .layout .left button:disabled{opacity:.3}overlay-tooltip .overlay-tooltip .layout .left button:disabled,overlay-tooltip .overlay-tooltip .layout .left button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){overlay-tooltip .overlay-tooltip .layout .left button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}overlay-tooltip .overlay-tooltip .layout .left button:not(:disabled):hover svg{opacity:1}}overlay-tooltip .overlay-tooltip .layout .left button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}overlay-tooltip .overlay-tooltip .layout .left button.accent{box-shadow:inset 0 0 0 1px var(--color--accent);--cta__icon--color: var(--color--accent)}@media(hover: hover){overlay-tooltip .overlay-tooltip .layout .left button.accent:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--color--accent);background-color:rgba(0,0,0,0)}}overlay-tooltip .overlay-tooltip .layout .left button.accent:not(:disabled):active{background-color:var(--color--accent)}overlay-tooltip .overlay-tooltip .layout .left button.accent:not(:disabled):active{--cta__icon--color: #000;color:#000}overlay-tooltip .overlay-tooltip .layout .right{flex:0 0 213px;padding:19px 0 0 35px;overflow:hidden;position:relative}overlay-tooltip .overlay-tooltip .layout .right desktop-with-overlay{width:128%;position:absolute;bottom:0}overlay-tooltip .overlay-tooltip .layout .right desktop-with-overlay .video-wrapper .overlay{top:5.5%}",
        "",
      ]);
      const x = u;
    },
    "app/resources/elements/app-header-search.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => l });
      var o = i(27091),
        r = i.n(o),
        a = new URL(i(27349), i.b),
        s = new URL(i(92281), i.b),
        n = new URL(i(80008), i.b);
      const l =
        '<template class="${expanded ? \'expanded\' : \'\'} ${condensed ? \'condensed\' : \'\'}" focusin.trigger="expanded = true" focusout.trigger="handleBlur()"> <require from="../../../resources/custom-attributes/add-class-if-overflow"></require> <div class="wrapper"> <div class="search"> <button class="close-button" click.delegate="close()" disabled.bind="!searchTerms && !expanded"> <inline-svg src="' +
        r()(a) +
        '"></inline-svg> </button> <input type="text" value.bind="searchTerms & debounce:400" placeholder.bind="\'app_header_search.search_games\' | i18n" ref="inputEl"> </div> <div class="no-results" if.bind="results && !results.length && !searchSession.pendingSearchTerms"> ${\'app_header_search.no_results_message\' | i18n} </div> <div class="overflow-fade__wrapper overflow-fade__wrapper--vertical" if.bind="groupedFeedItems.length"> <div class="results" overflow-fade="vertical" ref="scrollEl"> <div repeat.for="group of groupedFeedItems" class="results-group ${group.className ? group.className : \'\'}"> <h4 class="group-title" if.bind="group.title">${group.title | i18n}</h4> <a repeat.for="item of group.items" class="result focusable-result" route-href="route.bind: \'title\'; params.bind: {titleId: item.titleId, gameId: item.gameId, parentRoute: item.parentRoute}" title-link="value.bind: \'app_header_search\'; title-id.bind: item.titleId; game-id.bind: item.gameId; search-result.bind: true;"> <div class="thumbnail-wrapper ${thumbnailLoaded ? \'loaded\' : \'\'}"> <img class="thumbnail" fallback-src="' +
        r()(s) +
        '" src.bind="item.titleThumbnail | cdn:{size: 120}" load.trigger="thumbnailLoaded = true"> <span class="unavailable-badge" if.bind="!item.isAvailable" title.bind="\'app_header_search.no_cheats_available\' | i18n"> <inline-svg src="' +
        r()(n) +
        '"></inline-svg> </span> </div> <div class="info"> <span if.bind="item.isNew" class="tag">${\'app_header_search.new\' | i18n}</span> <span if.bind="item.isUpdated" class="tag">${\'app_header_search.updated\' | i18n}</span> <span class="name">${item.titleName}<template if.bind="item.gameEdition">&nbsp;(${item.gameEdition})</template></span> </div> </a> <div class="empty-message" if.bind="!group.items.length && group.emptyMessage"> <p>${group.emptyMessage | i18n}</p> </div> </div> </div> </div> </div> </template>';
    },
    "app/resources/elements/app-header-user.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => p });
      var o = i(27091),
        r = i.n(o),
        a = new URL(i(20488), i.b),
        s = new URL(i(97955), i.b),
        n = new URL(i(27873), i.b),
        l = new URL(i(13407), i.b);
      const p =
        '<template> <require from="./app-header-user.scss"></require> <require from="./overlay-button"></require> <require from="./remote-button"></require> <require from="./discord-tooltip"></require> <require from="./header-pro-badge"></require> <div class="actions"> <div class="user-wrapper"> <div class="user"> <div class="avatar" click.delegate="openSettings(\'account/profile\')" tabindex="0"> <img if.bind="account.profileImage" fallback-src="' +
        r()(a) +
        '" src.bind="account.profileImage | cdn:{size: 32}"> </div> <div class="info"> <div class="username"> <span class="label" ref="usernameEl" click.delegate="openSettings(\'account/profile\')" tabindex="0">${account.username}</span> <span if.bind="badge" class="badge-container"> <span if.bind="isCreator" class="badge ${badge}" click.trigger="toggleCreatorMode()">${badge}</span> <header-pro-badge else></header-pro-badge> </span> </div> </div> <div class="banner upgrade trigger-pro-cta" if.bind="!account.subscription" pro-cta="header_support_us_button" tabindex="0"> <span class="badge">${\'user.go_pro\' | i18n}</span> <span class="label">${\'user.support_wemod\' | i18n}</span> </div> </div> </div> <remote-button if.bind="account.subscription"></remote-button> <overlay-button if.bind="account.subscription"></overlay-button> <div class="buttons"> <span class="discord-button" if.bind="showDiscordButton"> <a click.delegate="openDiscord()" class="icon icon-discord" href="#"> <i class="wemod-icon wemod-icon--m"><inline-svg src="' +
        r()(s) +
        '"></inline-svg></i> </a> <discord-tooltip open.bind="discordTooltipOpen"></discord-tooltip> </span> <a href="https://wemod.gg/help" target="_blank" class="icon icon-help"> <i class="wemod-icon wemod-icon--m"><inline-svg src="' +
        r()(n) +
        '"></inline-svg></i> </a> <a click.delegate="openSettings()" class="icon icon-settings" href="#"> <i class="wemod-icon wemod-icon--m"><inline-svg src="' +
        r()(l) +
        '"></inline-svg></i> </a> </div> </div> </template> ';
    },
    "app/resources/elements/app-header.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => n });
      var o = i(27091),
        r = i.n(o),
        a = new URL(i(68367), i.b),
        s = r()(a);
      const n =
        '<template class="${searchExpanded ? \'search-expanded\' : \'\'}"> <require from="./app-header.scss"></require> <require from="./app-header-user"></require> <require from="./app-header-search"></require> <require from="./window-controls"></require> <img if.bind="basic || current === \'dashboard\'" src="' +
        s +
        '" class="logo"> <a else route-href="route: dashboard" class="logo link"><img src="' +
        s +
        '"></a> <div class="content-wrapper inert-when-dialog-open"> <template if.bind="!basic"> <div class="expanded-search-wrapper" ref="expandedSearchWrapperEl"> <app-header-search wrapper-el.bind="expandedSearchWrapperEl" ref="searchEl" expanded.bind="searchExpanded"></app-header-search> <nav> <a route-href="route: dashboard" class="${current === \'dashboard\' ? \'current\' : \'\'}">${\'app_header.home\' | i18n}</a> <a route-href="route.bind: \'collection\'; params.bind: {slug: \'my-games\'}" class="games ${current === \'my-games\' ? \'current\' : \'\'}">${\'app_header.my_games\' | i18n}</a> <a route-href="route: titles" class="games ${current === \'titles\' ? \'current\' : \'\'}">${\'app_header.explore\' | i18n}</a> <a if.bind="onlineStatus.status === \'online\'" route-href="route: queue" class="${current === \'queue\' ? \'current\' : \'\'}">${\'app_header.creators\' | i18n}</a> </nav> </div> <app-header-user username-el.bind="usernameEl" ref="userEl"></app-header-user> </template> </div> <window-controls ref="windowControlsEl"></window-controls> </template>';
    },
    "app/resources/elements/discord-tooltip.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => s });
      var o = i(27091),
        r = i.n(o),
        a = new URL(i(26485), i.b);
      const s =
        '<template> <require from="./discord-tooltip.scss"></require> <require from="../../../shared/resources/elements/tooltip"></require> <tooltip class="discord-tooltip custom-tooltip" direction="top-right" open.bind="open"> <div slot="content"> <div class="layout"> <div class="content"> <h1> ${\'discord_tooltip.join_our_discord\' | i18n} </h1> <p> ${\'discord_tooltip.connect_message\' | i18n} </p> <button click.delegate="connect()">${\'discord_tooltip.connect_discord\' | i18n}</button> </div> <img class="graphic" src="' +
        r()(a) +
        '"> </div> </div> </tooltip> </template> ';
    },
    "app/resources/elements/header-pro-badge.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => o });
      const o =
        '<template class="${tooltipOpen ? \'tooltip-open\' : \'\'}"> <require from="./header-pro-badge.scss"></require> <require from="./pro-onboarding-tooltip"></require> <require from="../../../shared/resources/elements/pro-badge"></require> <pro-badge class="small" click.delegate="tooltipOpen = true"></pro-badge> <pro-onboarding-tooltip open.bind="tooltipOpen"></pro-onboarding-tooltip> </template>';
    },
    "app/resources/elements/overlay-button.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => s });
      var o = i(27091),
        r = i.n(o),
        a = new URL(i(80059), i.b);
      const s =
        "<template class=\"${isConnected ? 'connected' : ''} ${highlight ? 'highlight' : ''} ${tooltipOpen ? 'tooltip-open' : ''}\"> <require from=\"./overlay-button.scss\"></require> <require from=\"./overlay-tooltip\"></require> <button class=\"overlay-button\" click.delegate=\"openTooltip()\"> <i><inline-svg src=\"" +
        r()(a) +
        '"></inline-svg></i> <div class="pulse"></div> </button> <overlay-tooltip open.bind="tooltipOpen"></overlay-tooltip> </template> ';
    },
    "app/resources/elements/overlay-tooltip.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => o });
      const o =
        '<template> <require from="./overlay-tooltip.scss"></require> <require from="../../../dialogs/resources/elements/desktop-with-overlay.html"></require> <require from="../../../shared/resources/elements/tooltip"></require> <tooltip class="initial-tooltip" direction="top-right" open.bind="helpVisible"> <div slot="content"> ${\'overlay_tooltip.click_to_use_the_overlay\' | i18n} </div> </tooltip> <tooltip class="overlay-tooltip custom-tooltip" direction="top-right" open.bind="open" click-to-open="true"> <div slot="content"> <div class="layout"> <div class="left"> <template if.bind="status == \'unsupported\'"> <h1> ${\'overlay_tooltip.unsupported\' | i18n} <span class="pulse alert"></span> </h1> <p>${\'overlay_tooltip.your_pc_does_not_meet_the_requirements\' | i18n}</p> <div class="requirements">${\'overlay_tooltip.requires_version\' | i18n:{version: minimumWindowsVersion}}</div> </template> <template if.bind="status == \'not-installed\'"> <h1> ${\'overlay_tooltip.not_installed\' | i18n} <span class="pulse alert"></span> </h1> <p>${\'overlay_tooltip.install_the_overlay_from_the_microsoft_store\' | i18n}</p> <button click.delegate="openInStore()">${\'overlay_tooltip.install_the_overlay\' | i18n}</button> </template> <template if.bind="status == \'game-bar-disabled\'"> <h1> ${\'overlay_tooltip.enable_game_bar\' | i18n} <span class="warning"></span> </h1> <p>${\'overlay_tooltip.the_overlay_requires_game_bar\' | i18n}</p> <button class="accent" click.delegate="openGameBarSettings()">${\'overlay_tooltip.open_game_bar_settings\' | i18n}</button> </template> <template if.bind="status == \'installed\'"> <h1> ${\'overlay_tooltip.overlay\' | i18n} <span class="pulse regular"></span> </h1> <p innerhtml.bind="\'overlay_tooltip.the_overlay_is_installed\' | i18n | markdown"></p> </template> </div> <div class="right"> <desktop-with-overlay if.bind="open"></desktop-with-overlay> </div> </div> </div> </tooltip> </template> ';
    },
    "app/resources/elements/app-header-search": (e, t, i) => {
      i.r(t), i.d(t, { AppHeaderSearch: () => g });
      var o = i(70655),
        r = i("aurelia-dialog"),
        a = i("aurelia-event-aggregator"),
        s = i("aurelia-framework"),
        n = i(74036),
        l = i("cheats/resources/value-converters/group-feed-items"),
        p = i(69949),
        d = i(93082),
        c = i(11912),
        h = i(7137);
      let g = class {
        #e;
        #t;
        #i;
        #o;
        #r;
        #a;
        #s;
        #n;
        #l;
        #p;
        #d;
        constructor(e, t, i, o, r, a, s) {
          (this.searchTerms = ""),
            (this.#i = null),
            (this.#o = []),
            (this.#a = e),
            (this.#r = t),
            (this.#s = i),
            (this.#n = o),
            (this.#l = r),
            (this.#p = a),
            (this.#d = s);
        }
        bind() {
          (this.searchSession = this.#a.createSession(
            () => this.#c(),
            "app_header"
          )),
            (this.myGames = this.#d.getFilteredFeed(n.sq, { maxItems: 5 })),
            (this.favorites = this.#d.getFilteredFeed(n.US, { maxItems: 100 })),
            (this.recentlyPlayed = this.#d.getFilteredFeed(n.Si, {
              maxItems: 5,
            }));
        }
        attached() {
          (this.#e = new ResizeObserver(() => this.#h())),
            this.#e.observe(this.wrapperEl),
            this.#h(),
            (this.#t = new c.K4()
              .pushEventListener(window, "keydown", this.#g.bind(this))
              .push(this.searchSession)
              .push(this.myGames)
              .push(this.favorites)
              .push(this.recentlyPlayed)
              .push(
                this.#p.subscribe(
                  "router:navigation:complete",
                  this.#u.bind(this)
                )
              ));
        }
        detached() {
          this.#e.disconnect(), this.#t.dispose();
        }
        searchTermsChanged() {
          this.searchSession.reset(), this.#c();
        }
        async expandedChanged() {
          this.#r.classList.add("transition"),
            this.#b(),
            await (0, c.UC)(250),
            this.#r.classList.remove("transition"),
            this.expanded || this.inputEl.blur();
        }
        resultsChanged() {
          this.#m();
        }
        #c() {
          if (!this.searchTerms) return void (this.results = null);
          const e = this.#a
              .search(this.searchSession, this.searchTerms)
              .map((e) =>
                "catalog-title" === e.resultType
                  ? (0, n.RB)(this.state, e.result)
                  : "title-metadata" === e.resultType
                  ? (0, n.W8)(e.result, e.isInstalled)
                  : void 0
              ),
            t = this.#l
              .toView(e, [
                "playable",
                "launch_without_mods",
                "installable",
                "unsupported_and_not_installed",
              ])
              .map((e) => {
                const t = this.state.gameHistory;
                let i = [...e.items];
                if ("playable" === e.group) {
                  const e = i
                      .filter((e) => !!t[e.gameId]?.lastPlayedAt)
                      .sort((e, i) =>
                        t[i.gameId]?.lastPlayedAt.localeCompare(
                          t[e.gameId].lastPlayedAt
                        )
                      ),
                    o = i.filter((t) => !e.includes(t));
                  i = [...e, ...o];
                }
                return { group: e.group, items: i };
              });
          this.results = t.flatMap((e) => e.items);
        }
        #h() {
          null !== this.#i && window.cancelAnimationFrame(this.#i),
            (this.#i = window.requestAnimationFrame(() => this.#b()));
        }
        #b() {
          const e = this.expanded ? this.wrapperEl : this.#r,
            t = `${this.wrapperEl.getBoundingClientRect().width}px`,
            i = `${e.getBoundingClientRect().width}px`;
          this.#r.style.setProperty("--search-width", i),
            this.#r.style.setProperty("--search-max-width", t);
        }
        #g(e) {
          if (!this.#t) return;
          const t =
              1 === e.key.length &&
              ((e.key >= "a" && e.key <= "z") ||
                (e.key >= "A" && e.key <= "Z") ||
                (e.key >= "0" && e.key <= "9")),
            i = " " === e.key,
            o = e.altKey || e.ctrlKey || e.metaKey,
            r = document.activeElement === this.inputEl,
            a =
              ["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName) &&
              !r,
            s = this.#s.hasOpenDialog,
            n = !!document.querySelector("trainer-hotkey.editing"),
            l = !!this.#n.trainer;
          a ||
            s ||
            n ||
            ("Escape" === e.key && this.close(),
            (!t && !i) ||
              o ||
              (r || l || (this.clear(), this.#m(), i && e.preventDefault()),
              r && 0 === this.searchTerms.length && this.#m()),
            this.groupedFeedItems.some((e) => e.items.length > 0) &&
              this.expanded &&
              ("ArrowDown" === e.key && this.#v(1, e),
              "ArrowUp" === e.key && this.#v(-1, e)),
            !o &&
              r &&
              !this.inputEl.value &&
              ["Backspace", "Delete"].includes(e.key) &&
              this.close());
        }
        clear() {
          (this.searchTerms = ""),
            (this.results = null),
            this.searchSession.reset(),
            this.inputEl.focus();
        }
        close() {
          this.clear(), (this.expanded = !1), this.inputEl.blur();
        }
        #m() {
          this.scrollEl && (this.scrollEl.scrollTop = 0);
        }
        #u() {
          this.expanded = !1;
        }
        #f(e) {
          return e.map((e) => {
            const t = !!this.myGames.items.find((t) => t.gameId === e.gameId);
            return {
              ...e,
              parentRoute: t ? "collection/my-games" : "",
              previousRoute: t ? "my-games" : "",
            };
          });
        }
        get groupedFeedItems() {
          let e;
          return (
            this.results
              ? (e = [{ items: this.#f(this.results) }])
              : ((e = []),
                this.recentlyPlayed.items.length
                  ? e.push({
                      title: "app_header_search.recently_played",
                      items: this.#f(this.recentlyPlayed.items),
                    })
                  : this.myGames.items.length &&
                    e.push({
                      title: "app_header_search.my_games",
                      items: this.#f(this.myGames.items),
                    }),
                e.push({
                  title: "app_header_search.favorites",
                  items: this.#f(this.favorites.items),
                  emptyMessage: "app_header_search.favorites_empty_message",
                  className: "favorites",
                })),
            (this.#o = []),
            e
          );
        }
        #v(e, t) {
          let i;
          this.#o.length ||
            (this.#o = Array.from(
              this.#r.querySelectorAll(".focusable-result")
            ));
          const o = this.#o.findIndex((e) => document.activeElement === e),
            r = o > -1,
            a = this.#o.length - 1;
          r
            ? (0 === o && -1 === e) || (o === a && 1 === e)
              ? (this.inputEl.focus(), t.preventDefault(), 1 === e && this.#m())
              : r && (i = this.#o[o + e])
            : (i = 1 === e ? this.#o[0] : this.#o[a]),
            i && (t.preventDefault(), i.focus());
        }
        handleBlur() {
          this.#r.contains(document.activeElement) || (this.expanded = !1);
        }
      };
      (0, o.gn)(
        [s.bindable, (0, o.w6)("design:type", String)],
        g.prototype,
        "searchTerms",
        void 0
      ),
        (0, o.gn)(
          [
            (0, s.bindable)({ defaultBindingMode: s.bindingMode.fromView }),
            (0, o.w6)("design:type", Boolean),
          ],
          g.prototype,
          "expanded",
          void 0
        ),
        (0, o.gn)(
          [s.bindable, (0, o.w6)("design:type", HTMLElement)],
          g.prototype,
          "wrapperEl",
          void 0
        ),
        (0, o.gn)(
          [s.bindable, (0, o.w6)("design:type", Boolean)],
          g.prototype,
          "condensed",
          void 0
        ),
        (0, o.gn)(
          [s.observable, (0, o.w6)("design:type", Array)],
          g.prototype,
          "results",
          void 0
        ),
        (0, o.gn)(
          [
            (0, s.computedFrom)(
              "results",
              "myGames.items",
              "favorites.items",
              "recentlyPlayed.items"
            ),
            (0, o.w6)("design:type", Array),
            (0, o.w6)("design:paramtypes", []),
          ],
          g.prototype,
          "groupedFeedItems",
          null
        ),
        (g = (0, o.gn)(
          [
            (0, s.autoinject)(),
            (0, d.b)({ selectors: { state: (e) => e.state } }),
            (0, o.w6)("design:paramtypes", [
              h.Q,
              Element,
              r.DialogService,
              p.hc,
              l.GroupFeedItemsValueConverter,
              a.h,
              n.AD,
            ]),
          ],
          g
        ));
    },
    "app/resources/elements/app-header-user": (e, t, i) => {
      i.r(t), i.d(t, { AppHeaderUser: () => g });
      var o = i(70655),
        r = i("aurelia-dialog"),
        a = i("aurelia-framework"),
        s = i(45437),
        n = i(81110),
        l = i("settings/settings-dialog"),
        p = i(93082),
        d = i(51722),
        c = i(27170),
        h = i(81866);
      let g = class {
        #s;
        #y;
        #x;
        #w;
        constructor(e, t, i, o, r) {
          (this.#s = e),
            (this.#y = t),
            (this.#x = i),
            (this.#w = r),
            (this.host = o);
        }
        openSettings(e) {
          this.#s.closeAll(), this.#y.open({ group: e });
        }
        async openDiscord() {
          (0, d.yE)(this.account.flags, 256)
            ? (this.#x.event("discord_server_click", { trigger: "header" }),
              (await this.host.launchExternal(
                "discord://discord.com/invite/wemod"
              )) || window.open("website://discord", "_blank"))
            : (this.discordTooltipOpen = !0);
        }
        get showDiscordButton() {
          return !this.host.info.locale.endsWith("CN");
        }
        get isCreator() {
          const e = (0, d.yE)(this.account.flags, 64);
          return (
            !e &&
              this.creatorMode &&
              this.#w.dispatch(c.D3, { creatorMode: !1 }, "user_header", !0),
            e
          );
        }
        toggleCreatorMode() {
          this.isCreator &&
            this.#w.dispatch(
              c.D3,
              { creatorMode: !this.creatorMode },
              "user_header"
            );
        }
        get badge() {
          return this.isCreator
            ? this.creatorMode
              ? "creator"
              : "pro"
            : this.account.subscription
            ? "pro"
            : null;
        }
      };
      (0, o.gn)(
        [
          (0, a.bindable)({ defaultBindingMode: a.bindingMode.fromView }),
          (0, o.w6)("design:type", HTMLElement),
        ],
        g.prototype,
        "usernameEl",
        void 0
      ),
        (0, o.gn)(
          [
            (0, a.computedFrom)("host.info.locale"),
            (0, o.w6)("design:type", Boolean),
            (0, o.w6)("design:paramtypes", []),
          ],
          g.prototype,
          "showDiscordButton",
          null
        ),
        (0, o.gn)(
          [
            (0, a.computedFrom)("account.flags"),
            (0, o.w6)("design:type", Boolean),
            (0, o.w6)("design:paramtypes", []),
          ],
          g.prototype,
          "isCreator",
          null
        ),
        (0, o.gn)(
          [
            (0, a.computedFrom)("account.flags", "creatorMode"),
            (0, o.w6)("design:type", String),
            (0, o.w6)("design:paramtypes", []),
          ],
          g.prototype,
          "badge",
          null
        ),
        (g = (0, o.gn)(
          [
            (0, p.b)({
              selectors: {
                account: (0, p.g)("account"),
                creatorMode: (0, p.g)("settings", "creatorMode"),
              },
            }),
            (0, a.autoinject)(),
            (0, o.w6)("design:paramtypes", [
              r.DialogService,
              l.SettingsDialogService,
              h.c,
              n.f,
              s.yh,
            ]),
          ],
          g
        ));
    },
    "app/resources/elements/app-header": (e, t, i) => {
      i.r(t), i.d(t, { AppHeader: () => n });
      var o = i(70655),
        r = i("aurelia-framework"),
        a = i(86433),
        s = i(36997);
      let n = class {
        #e;
        #k;
        constructor(e, t) {
          (this.onlineStatus = e),
            (this.router = t),
            (this.basic = !1),
            (this.#k = null);
        }
        attached() {
          this.basic ||
            ((this.#e = new ResizeObserver(() => this.#_())),
            this.#e.observe(this.usernameEl),
            this.#e.observe(this.windowControlsEl),
            this.#e.observe(document.body),
            this.#_());
        }
        detached() {
          this.basic ||
            (this.#e.disconnect(),
            null !== this.#k &&
              (window.cancelAnimationFrame(this.#k), (this.#k = null)));
        }
        get current() {
          return "dashboard" === this.router.currentInstruction.config.name
            ? "dashboard"
            : ("collection" === this.router.currentInstruction.config.name &&
                "my-games" === this.router.currentInstruction.params.slug) ||
              "collection/my-games" ===
                this.router.currentInstruction.queryParams.parentRoute
            ? "my-games"
            : "queue" === this.router.currentInstruction.config.name ||
              "queue" === this.router.currentInstruction.queryParams.parentRoute
            ? "queue"
            : ["title", "titles", "collection"].includes(
                this.router.currentInstruction.config.name
              )
            ? "titles"
            : null;
        }
        #_() {
          null !== this.#k && window.cancelAnimationFrame(this.#k),
            (this.#k = window.requestAnimationFrame(() => this.#q()));
        }
        #q() {
          if (!this.usernameEl) return;
          const e = () =>
              this.usernameEl.scrollWidth > this.usernameEl.clientWidth,
            t = (e = !1) => this.searchEl.classList.toggle("condensed", e),
            i = (e = !1) =>
              this.userEl.classList.toggle("condense-pro-banner", e),
            o = (e = !1) => this.userEl.classList.toggle("hide-avatar", e),
            r = (e = !1) => this.userEl.classList.toggle("hide-username", e);
          t(!1),
            i(!1),
            o(!1),
            r(!1),
            e() && t(!0),
            e() && i(!0),
            e() && (i(!1), o(!0)),
            e() && (t(!1), o(!1), r(!0)),
            e() && t(!0);
        }
      };
      (0, o.gn)(
        [r.bindable, (0, o.w6)("design:type", Boolean)],
        n.prototype,
        "basic",
        void 0
      ),
        (0, o.gn)(
          [r.bindable, (0, o.w6)("design:type", Boolean)],
          n.prototype,
          "searchExpanded",
          void 0
        ),
        (0, o.gn)(
          [
            (0, r.computedFrom)("router.currentInstruction"),
            (0, o.w6)("design:type", String),
            (0, o.w6)("design:paramtypes", []),
          ],
          n.prototype,
          "current",
          null
        ),
        (n = (0, o.gn)(
          [(0, r.autoinject)(), (0, o.w6)("design:paramtypes", [s.Yz, a.F0])],
          n
        ));
    },
    "app/resources/elements/discord-tooltip": (e, t, i) => {
      i.r(t), i.d(t, { DiscordTooltip: () => n });
      var o = i(70655),
        r = i("aurelia-framework"),
        a = i(85882),
        s = i(81866);
      let n = class {
        #x;
        #S;
        constructor(e, t) {
          (this.open = !1), (this.#x = e), (this.#S = t);
        }
        openChanged() {
          this.open && this.#x.event("discord_tooltip_open");
        }
        connect() {
          window.open("website://account/connections/discord#auth", "_blank"),
            this.#x.event("discord_connect_click", {
              trigger: "discord_tooltip",
            }),
            this.#S.watchFlag(256, 30),
            (this.open = !1);
        }
      };
      (0, o.gn)(
        [
          (0, r.bindable)({ defaultBindingMode: r.bindingMode.twoWay }),
          (0, o.w6)("design:type", Boolean),
        ],
        n.prototype,
        "open",
        void 0
      ),
        (n = (0, o.gn)(
          [(0, r.autoinject)(), (0, o.w6)("design:paramtypes", [s.c, a.B])],
          n
        ));
    },
    "app/resources/elements/header-pro-badge": (e, t, i) => {
      i.r(t), i.d(t, { HeaderProBadge: () => o });
      class o {
        constructor() {
          this.tooltipOpen = !1;
        }
      }
    },
    "app/resources/elements/overlay-button": (e, t, i) => {
      i.r(t), i.d(t, { OverlayButton: () => l });
      var o = i(70655),
        r = i("aurelia-event-aggregator"),
        a = i("aurelia-framework"),
        s = i(87632),
        n = i(11912);
      let l = class {
        #R;
        #E;
        constructor(e, t) {
          (this.highlight = !1),
            (this.tooltipOpen = !1),
            (this.#E = e),
            (this.overlay = t);
        }
        attached() {
          this.#R = new n.K4()
            .push(
              this.#E.subscribe(
                "highlight-overlay-button",
                () => (this.highlight = !0)
              )
            )
            .push(
              this.#E.subscribe("open-overlay-tooltip", () =>
                this.openTooltip()
              )
            );
        }
        detached() {
          this.#R.dispose();
        }
        openTooltip() {
          (this.highlight = !1), (this.tooltipOpen = !0);
        }
        tooltipOpenChanged(e, t) {
          !0 === t &&
            !1 === e &&
            ((this.highlight = !1), this.#E.publish("overlay-tooltip-closed"));
        }
        get isConnected() {
          return "connected" === this.overlay.status;
        }
      };
      (0, o.gn)(
        [a.observable, (0, o.w6)("design:type", Boolean)],
        l.prototype,
        "tooltipOpen",
        void 0
      ),
        (0, o.gn)(
          [
            (0, a.computedFrom)("overlay.status"),
            (0, o.w6)("design:type", Boolean),
            (0, o.w6)("design:paramtypes", []),
          ],
          l.prototype,
          "isConnected",
          null
        ),
        (l = (0, o.gn)(
          [(0, a.autoinject)(), (0, o.w6)("design:paramtypes", [r.h, s.F0])],
          l
        ));
    },
    "app/resources/elements/overlay-tooltip": (e, t, i) => {
      i.r(t), i.d(t, { OverlayTooltip: () => l });
      var o = i(70655),
        r = i("aurelia-framework"),
        a = i(87632),
        s = i(11912),
        n = i(81866);
      let l = class {
        #r;
        #I;
        #x;
        #t;
        #z;
        constructor(e, t, i) {
          (this.open = !1),
            (this.helpVisible = !1),
            (this.minimumWindowsVersion = a.fk),
            (this.#z = null),
            (this.#r = e),
            (this.#I = t),
            (this.#x = i);
        }
        attached() {
          const e = this.#r.parentElement;
          (this.#t = new s.K4()
            .pushEventListener(e, "mouseenter", this.#F.bind(this))
            .pushEventListener(e, "mouseleave", this.#$.bind(this))),
            this.#T();
        }
        detached() {
          this.#t.dispose(),
            (this.#t = null),
            null !== this.#z && (clearInterval(this.#z), (this.#z = null));
        }
        #F() {
          this.open || (this.helpVisible = !0);
        }
        #$() {
          this.helpVisible = !1;
        }
        openChanged(e) {
          e
            ? (this.#T(), (this.#z = setInterval(() => this.#T(), 5e3)))
            : (clearInterval(this.#z), (this.#z = null));
        }
        openInStore() {
          return (
            this.#x.event(
              "overlay_install_click",
              { location: "tooltip" },
              n.$
            ),
            this.#I.openInStore()
          );
        }
        openGameBarSettings() {
          return this.#I.openGameBarSettings();
        }
        async #T() {
          this.status = await this.#I.refreshFeatureStatus();
        }
      };
      (0, o.gn)(
        [
          (0, r.bindable)({ defaultBindingMode: r.bindingMode.twoWay }),
          (0, o.w6)("design:type", Boolean),
        ],
        l.prototype,
        "open",
        void 0
      ),
        (l = (0, o.gn)(
          [
            (0, r.autoinject)(),
            (0, o.w6)("design:paramtypes", [Element, a.F0, n.c]),
          ],
          l
        ));
    },
  },
]);

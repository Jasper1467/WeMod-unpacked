"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [760],
  {
    "cheats/resources/elements/game-feed-item.scss": (e, t, i) => {
      i.r(t), i.d(t, { default: () => s });
      var a = i(8081),
        n = i.n(a),
        o = i(23645),
        r = i.n(o)()(n());
      r.push([
        e.id,
        'game-feed-item a{--game__row--color: rgba(255, 255, 255, 0.7);--game__meta--color: rgba(255, 255, 255, 0.4);--game__thumbnail--border-color: transparent;display:flex;flex-direction:column;position:relative;width:var(--game__thumbnail--width);--game__thumbnail--width: 194px;--game__thumbnail--height: 90px;--game__thumbnail--border-radius: 10px}game-feed-item a,game-feed-item a *{cursor:pointer}game-feed-item a i{display:inline-block;width:15px;height:15px;display:inline-flex;justify-content:center;align-items:center}game-feed-item a i:after{content:"";display:block;clear:both}game-feed-item a i svg{float:left}game-feed-item a i svg{max-width:15px;max-height:15px}game-feed-item a i svg *{color:#fff}game-feed-item a i svg *{fill:rgba(255,255,255,.4);transition:fill .15s}game-feed-item a>*:nth-child(1){margin-bottom:12px}game-feed-item a>*:nth-child(2){width:100%;display:flex;flex-direction:column}game-feed-item a>*:nth-child(2)>*+*{margin-top:8px}game-feed-item a:hover{--game__row--color: #fff;--game__meta--color: rgba(255, 255, 255, 0.6);--game__thumbnail--border-color: var(--theme--highlight)}game-feed-item a:hover i svg *{fill:rgba(255,255,255,.6)}game-feed-item a,game-feed-item a *{text-decoration:none}game-feed-item a:nth-child(1n+0) img{animation-delay:0.1s}game-feed-item a:nth-child(2n+0) img{animation-delay:0.2s}game-feed-item a:nth-child(3n+0) img{animation-delay:0.3s}game-feed-item a:nth-child(4n+0) img{animation-delay:0.4s}game-feed-item a:nth-child(5n+0) img{animation-delay:0.5s}game-feed-item a:nth-child(6n+0) img{animation-delay:0.6s}game-feed-item a:nth-child(7n+0) img{animation-delay:0.7s}game-feed-item a:nth-child(8n+0) img{animation-delay:0.8s}game-feed-item a:nth-child(9n+0) img{animation-delay:0.9s}game-feed-item a .row{font-size:14px;line-height:21px;line-height:19px;font-weight:500;flex:0 0 auto;display:flex;align-items:center;color:var(--game__row--color);transition:color .15s;overflow:hidden}game-feed-item a .row>*+*{margin-left:18px}game-feed-item a .row>*>*+*{margin-left:10px}game-feed-item a .row>i:last-of-type:not(:first-of-type){margin-left:18px}game-feed-item a .row b{font-weight:700}game-feed-item a .row>*{flex:0 1 auto;display:flex;align-items:center;min-width:0}game-feed-item a .ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}game-feed-item a .meta{font-size:12px;line-height:18px;font-weight:500;color:var(--game__meta--color);transition:color .15s;line-height:17px}game-feed-item a .fill{flex:1;overflow:hidden}game-feed-item a .tag{background-color:var(--color--accent);display:inline-block;font-weight:900;font-size:12px;color:#111;line-height:15px;padding:0 4px;border-radius:2.5px;min-width:0;font-style:normal;background-color:rgba(0,0,0,0);color:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.4);line-height:11px;text-transform:uppercase;font-size:11px;font-weight:bold;padding:1.5px 4px;flex:0 0 auto}game-feed-item a .genres>*+*:before{content:", "}game-feed-item a .avatar{width:16px;height:16px;border-radius:50%;overflow:hidden;border:none !important}game-feed-item .thumbnail-wrapper{width:var(--game__thumbnail--width);height:var(--game__thumbnail--height);border-radius:var(--game__thumbnail--border-radius);border:1px solid var(--game__thumbnail--border-color);transition:border-color .15s;position:relative;overflow:hidden}game-feed-item .thumbnail-wrapper.unavailable,game-feed-item .thumbnail-wrapper.unavailable .thumbnail{border-bottom-right-radius:3px}game-feed-item .thumbnail{display:inline-block;background:rgba(0,0,0,.1);width:100%;height:100%;border-radius:var(--game__thumbnail--border-radius);overflow:hidden}game-feed-item .thumbnail:not(.loaded){animation-name:thumbnail-loading;animation-duration:1s;animation-timing-function:linear;animation-direction:alternate;animation-iteration-count:infinite;background-clip:padding-box}game-feed-item .choice-badge{position:absolute;right:10px;bottom:15px;width:30px}game-feed-item .unavailable-badge{position:absolute;right:0;bottom:0;width:24px;height:24px;border-top-left-radius:3px;border-bottom-right-radius:3px;background:#999;border-top:1px solid var(--theme--background);border-left:1px solid var(--theme--background);display:inline-flex;align-items:center;justify-content:center}game-feed-item .unavailable-badge svg *{fill:var(--theme--background)}game-feed-item.large-thumbnails a{--game__thumbnail--width: 258px;--game__thumbnail--height: 120px;--game__thumbnail--border-radius: 10px}',
        "",
      ]);
      const s = r;
    },
    "cheats/resources/elements/game-search-input.scss": (e, t, i) => {
      i.r(t), i.d(t, { default: () => g });
      var a = i(8081),
        n = i.n(a),
        o = i(23645),
        r = i.n(o),
        s = i(61667),
        l = i.n(s),
        d = new URL(i(69091), i.b),
        m = r()(n()),
        p = l()(d);
      m.push([
        e.id,
        "game-search-input form{display:inline-flex;align-items:center}game-search-input .input-wrapper{position:relative;width:360px}game-search-input input{width:100%;min-width:40px;height:30px;border:0;border-radius:15px;padding:0 30px 0 35px;background:rgba(255,255,255,.1) url(" +
          p +
          ") 10px center no-repeat;transition:background-color .15s;color:rgba(255,255,255,.9)}game-search-input input,game-search-input input::placeholder{font-size:14px;line-height:21px;font-weight:500}game-search-input input::placeholder{color:rgba(255,255,255,.3)}game-search-input input:disabled{opacity:.5}game-search-input .clear-button{position:absolute;right:12px;top:11px;background:rgba(0,0,0,0);border:0;padding:0;opacity:.2;transition:opacity .15s;display:inline-flex}game-search-input .clear-button:hover{opacity:1}game-search-input .search-button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-weight:700;font-size:15px;line-height:24px;font-weight:700;--cta--padding: 12px;--cta--height: 28px;--cta--hover--border-width: 1px;box-shadow:inset 0 0 0 1px var(--theme--highlight);--cta__icon--color: var(--theme--highlight);margin-left:10px}game-search-input .search-button,game-search-input .search-button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) game-search-input .search-button{border:1px solid #fff}}game-search-input .search-button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}game-search-input .search-button>*:first-child{padding-left:0}game-search-input .search-button>*:last-child{padding-right:0}game-search-input .search-button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) game-search-input .search-button svg *{fill:CanvasText}}game-search-input .search-button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) game-search-input .search-button svg{opacity:1}}game-search-input .search-button img{height:50%}game-search-input .search-button:disabled{opacity:.3}game-search-input .search-button:disabled,game-search-input .search-button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){game-search-input .search-button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}game-search-input .search-button:not(:disabled):hover svg{opacity:1}}game-search-input .search-button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}@media(hover: hover){game-search-input .search-button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--theme--highlight);background-color:rgba(0,0,0,0)}}game-search-input .search-button:not(:disabled):active{background-color:var(--theme--highlight)}",
        "",
      ]);
      const g = m;
    },
    "cheats/resources/elements/grid-game-feed.scss": (e, t, i) => {
      i.r(t), i.d(t, { default: () => s });
      var a = i(8081),
        n = i.n(a),
        o = i(23645),
        r = i.n(o)()(n());
      r.push([
        e.id,
        'horizontal-game-feed-item{position:relative;z-index:0}horizontal-game-feed-item .item{--game__row--color: rgba(255, 255, 255, 0.7);--game__meta--color: rgba(255, 255, 255, 0.4);--game__thumbnail--border-color: transparent;display:flex;flex-direction:row;display:flex;flex-direction:row;align-items:flex-start;padding:10px;overflow:visible}horizontal-game-feed-item .item,horizontal-game-feed-item .item *{cursor:pointer}horizontal-game-feed-item .item i{display:inline-block;width:15px;height:15px;display:inline-flex;justify-content:center;align-items:center}horizontal-game-feed-item .item i:after{content:"";display:block;clear:both}horizontal-game-feed-item .item i svg{float:left}horizontal-game-feed-item .item i svg{max-width:15px;max-height:15px}horizontal-game-feed-item .item i svg *{color:#fff}horizontal-game-feed-item .item i svg *{fill:rgba(255,255,255,.4);transition:fill .15s}horizontal-game-feed-item .item>*:nth-child(1){margin-right:20px;flex:0 0 auto}horizontal-game-feed-item .item>*:nth-child(2){display:flex;flex-direction:column;flex:1 1 auto;position:relative;padding:5px 0;overflow:hidden}horizontal-game-feed-item .item:hover{--game__row--color: #fff;--game__meta--color: rgba(255, 255, 255, 0.6);--game__thumbnail--border-color: var(--theme--highlight)}horizontal-game-feed-item .item:hover i svg *{fill:rgba(255,255,255,.6)}horizontal-game-feed-item .item,horizontal-game-feed-item .item *{text-decoration:none}horizontal-game-feed-item .item .thumbnail{width:var(--game__thumbnail--width);height:var(--game__thumbnail--height);border-radius:var(--game__thumbnail--border-radius);border:1px solid var(--game__thumbnail--border-color);transition:border-color .15s;display:inline-block;background:rgba(0,0,0,.1);width:114px;height:53px;border-radius:5px}horizontal-game-feed-item .item .info{padding:0}horizontal-game-feed-item .item .info .row{font-size:14px;line-height:21px;line-height:19px;font-weight:500;flex:0 0 auto;display:flex;align-items:center;color:var(--game__row--color);transition:color .15s;overflow:hidden}horizontal-game-feed-item .item .info .row>*+*{margin-left:18px}horizontal-game-feed-item .item .info .row>*>*+*{margin-left:10px}horizontal-game-feed-item .item .info .row>i:last-of-type:not(:first-of-type){margin-left:18px}horizontal-game-feed-item .item .info .row b{font-weight:700}horizontal-game-feed-item .item .info .row>*{flex:0 1 auto;display:flex;align-items:center;min-width:0}horizontal-game-feed-item .item .info .row+.row{margin-top:12px}horizontal-game-feed-item .item .info .row .ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}horizontal-game-feed-item .item .info .row .meta{font-size:12px;line-height:18px;font-weight:500;color:var(--game__meta--color);transition:color .15s;line-height:17px}horizontal-game-feed-item .item .info .row .fill{flex:1;overflow:hidden}horizontal-game-feed-item .item .info .row .tag{background-color:var(--color--accent);display:inline-block;font-weight:900;font-size:12px;color:#111;line-height:15px;padding:0 4px;border-radius:2.5px;min-width:0;font-style:normal;background-color:rgba(0,0,0,0);color:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.4);line-height:11px;text-transform:uppercase;font-size:11px;font-weight:bold;padding:1.5px 4px}horizontal-game-feed-item .item .info .row .avatar{width:16px;height:16px;border-radius:50%}horizontal-game-feed-item .item .info .row .genres>*+*{margin:0}horizontal-game-feed-item .item .info .row .genres>*+*:before{content:", "}horizontal-game-feed-item .item:not(:hover) .info favorite-button{visibility:hidden;width:0;margin-left:0}horizontal-game-feed-item .item:hover:before{box-shadow:0 0 5px rgba(var(--theme--background--rgb), 0.5);position:relative;content:"";background:var(--theme--secondary-background);border-radius:5px;position:absolute;left:0;top:0;width:100%;height:100%;z-index:-1;pointer-events:none}grid-game-feed{--grid-game-feed--max-columns: 1;display:block;padding:10px;background:rgba(255,255,255,.04);border-radius:10px}grid-game-feed .wrapper{display:grid;justify-content:start;grid-template-columns:repeat(auto-fit, minmax(350px, 1fr));width:100%;max-height:calc(73px * var(--grid-game-feed--max-columns));overflow:hidden}',
        "",
      ]);
      const s = r;
    },
    "cheats/resources/elements/horizontal-game-feed-item.scss": (e, t, i) => {
      i.r(t), i.d(t, { default: () => s });
      var a = i(8081),
        n = i.n(a),
        o = i(23645),
        r = i.n(o)()(n());
      r.push([
        e.id,
        'horizontal-game-feed-item{position:relative;z-index:0}horizontal-game-feed-item .item{--game__row--color: rgba(255, 255, 255, 0.7);--game__meta--color: rgba(255, 255, 255, 0.4);--game__thumbnail--border-color: transparent;display:flex;flex-direction:row;display:flex;flex-direction:row;align-items:flex-start;padding:10px;overflow:visible}horizontal-game-feed-item .item,horizontal-game-feed-item .item *{cursor:pointer}horizontal-game-feed-item .item i{display:inline-block;width:15px;height:15px;display:inline-flex;justify-content:center;align-items:center}horizontal-game-feed-item .item i:after{content:"";display:block;clear:both}horizontal-game-feed-item .item i svg{float:left}horizontal-game-feed-item .item i svg{max-width:15px;max-height:15px}horizontal-game-feed-item .item i svg *{color:#fff}horizontal-game-feed-item .item i svg *{fill:rgba(255,255,255,.4);transition:fill .15s}horizontal-game-feed-item .item>*:nth-child(1){margin-right:20px;flex:0 0 auto}horizontal-game-feed-item .item>*:nth-child(2){display:flex;flex-direction:column;flex:1 1 auto;position:relative;padding:5px 0;overflow:hidden}horizontal-game-feed-item .item:hover{--game__row--color: #fff;--game__meta--color: rgba(255, 255, 255, 0.6);--game__thumbnail--border-color: var(--theme--highlight)}horizontal-game-feed-item .item:hover i svg *{fill:rgba(255,255,255,.6)}horizontal-game-feed-item .item,horizontal-game-feed-item .item *{text-decoration:none}horizontal-game-feed-item .item .thumbnail{width:var(--game__thumbnail--width);height:var(--game__thumbnail--height);border-radius:var(--game__thumbnail--border-radius);border:1px solid var(--game__thumbnail--border-color);transition:border-color .15s;display:inline-block;background:rgba(0,0,0,.1);width:114px;height:53px;border-radius:5px}horizontal-game-feed-item .item .info{padding:0}horizontal-game-feed-item .item .info .row{font-size:14px;line-height:21px;line-height:19px;font-weight:500;flex:0 0 auto;display:flex;align-items:center;color:var(--game__row--color);transition:color .15s;overflow:hidden}horizontal-game-feed-item .item .info .row>*+*{margin-left:18px}horizontal-game-feed-item .item .info .row>*>*+*{margin-left:10px}horizontal-game-feed-item .item .info .row>i:last-of-type:not(:first-of-type){margin-left:18px}horizontal-game-feed-item .item .info .row b{font-weight:700}horizontal-game-feed-item .item .info .row>*{flex:0 1 auto;display:flex;align-items:center;min-width:0}horizontal-game-feed-item .item .info .row+.row{margin-top:12px}horizontal-game-feed-item .item .info .row .ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}horizontal-game-feed-item .item .info .row .meta{font-size:12px;line-height:18px;font-weight:500;color:var(--game__meta--color);transition:color .15s;line-height:17px}horizontal-game-feed-item .item .info .row .fill{flex:1;overflow:hidden}horizontal-game-feed-item .item .info .row .tag{background-color:var(--color--accent);display:inline-block;font-weight:900;font-size:12px;color:#111;line-height:15px;padding:0 4px;border-radius:2.5px;min-width:0;font-style:normal;background-color:rgba(0,0,0,0);color:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.4);line-height:11px;text-transform:uppercase;font-size:11px;font-weight:bold;padding:1.5px 4px}horizontal-game-feed-item .item .info .row .avatar{width:16px;height:16px;border-radius:50%}horizontal-game-feed-item .item .info .row .genres>*+*{margin:0}horizontal-game-feed-item .item .info .row .genres>*+*:before{content:", "}horizontal-game-feed-item .item:not(:hover) .info favorite-button{visibility:hidden;width:0;margin-left:0}horizontal-game-feed-item .item:hover:before{box-shadow:0 0 5px rgba(var(--theme--background--rgb), 0.5);position:relative;content:"";background:var(--theme--secondary-background);border-radius:5px;position:absolute;left:0;top:0;width:100%;height:100%;z-index:-1;pointer-events:none}',
        "",
      ]);
      const s = r;
    },
    "cheats/resources/elements/horizontal-game-feed.scss": (e, t, i) => {
      i.r(t), i.d(t, { default: () => s });
      var a = i(8081),
        n = i.n(a),
        o = i(23645),
        r = i.n(o)()(n());
      r.push([
        e.id,
        "horizontal-game-feed{--horizontal-scroll-container__arrow--top: 25px;display:block;height:153px;padding-bottom:10px}horizontal-game-feed game-feed-item{margin-right:25px}horizontal-game-feed.large-thumbnails{--horizontal-scroll-container__arrow--top: 41px;height:193px}horizontal-game-feed horizontal-scroll-container .scroll-wrapper{padding-bottom:10px}",
        "",
      ]);
      const s = r;
    },
    "cheats/resources/elements/launch-without-mods-button.scss": (e, t, i) => {
      i.r(t), i.d(t, { default: () => s });
      var a = i(8081),
        n = i.n(a),
        o = i(23645),
        r = i.n(o)()(n());
      r.push([
        e.id,
        'launch-without-mods-button button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;box-shadow:inset 0 0 0 1px var(--theme--highlight);--cta__icon--color: var(--theme--highlight);position:relative}launch-without-mods-button button,launch-without-mods-button button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) launch-without-mods-button button{border:1px solid #fff}}launch-without-mods-button button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}launch-without-mods-button button>*:first-child{padding-left:0}launch-without-mods-button button>*:last-child{padding-right:0}launch-without-mods-button button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) launch-without-mods-button button svg *{fill:CanvasText}}launch-without-mods-button button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) launch-without-mods-button button svg{opacity:1}}launch-without-mods-button button img{height:50%}launch-without-mods-button button:disabled{opacity:.3}launch-without-mods-button button:disabled,launch-without-mods-button button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){launch-without-mods-button button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}launch-without-mods-button button:not(:disabled):hover svg{opacity:1}}launch-without-mods-button button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}@media(hover: hover){launch-without-mods-button button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--theme--highlight);background-color:rgba(0,0,0,0)}}launch-without-mods-button button:not(:disabled):active{background-color:var(--theme--highlight)}launch-without-mods-button button svg{width:6.5px;height:6.5px;opacity:.5}launch-without-mods-button button svg *{fill:#fff}launch-without-mods-button button:not(:disabled):active{background:rgba(0,0,0,0)}launch-without-mods-button button.pulse::before{content:"";display:block;position:absolute;left:0;top:0;width:100%;height:100%;z-index:-1;background:var(--theme--highlight);opacity:.2;animation:cta--pulse .5s ease-in-out infinite alternate;border-radius:99px}launch-without-mods-button button.pulse::before{background-color:var(--theme--highlight);animation:cta--inner-pulse 1s ease-in-out infinite alternate}launch-without-mods-button.large button{font-weight:800;font-size:21px;line-height:30px;font-weight:800;--cta--padding: 20px;--cta--height: 49px}launch-without-mods-button:not(.large) button{font-weight:800;font-size:21px;line-height:30px;font-weight:800;--cta--padding: 18px;--cta--height: 39px;--cta--hover--border-width: 2px;font-weight:700;font-size:15px;line-height:24px;font-weight:600}',
        "",
      ]);
      const s = r;
    },
    "cheats/resources/elements/list-game-feed.scss": (e, t, i) => {
      i.r(t), i.d(t, { default: () => s });
      var a = i(8081),
        n = i.n(a),
        o = i(23645),
        r = i.n(o)()(n());
      r.push([
        e.id,
        'list-game-feed .game{display:flex;width:100%}list-game-feed .game,list-game-feed .game *{cursor:pointer}list-game-feed .game>*{display:flex;height:40px;align-items:center;overflow:hidden}list-game-feed .game>*+*{padding-left:14px}list-game-feed .game+.game>*{border-top:1px solid rgba(255,255,255,.1)}list-game-feed .game .placeholder{flex:1 1 auto;height:40px}list-game-feed .game .thumbnail{flex:0 0 auto}list-game-feed .game .thumbnail img{display:inline-block;background:rgba(0,0,0,.1);width:40px;height:19px;border-radius:2.5px}list-game-feed .game .name{font-size:14px;line-height:21px;font-weight:700;flex:1 1 35%;color:rgba(255,255,255,.5);transition:color .15s}list-game-feed .game .name .inner{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;display:block}list-game-feed .game .favorite{flex:1 1 10%}list-game-feed .game .favorite favorite-button{display:inline-block;flex:0 0 auto}list-game-feed .game .meta{font-size:12px;line-height:18px;color:rgba(255,255,255,.5);transition:color .15s;overflow:hidden;flex:1 1 35%}list-game-feed .game .meta .genres{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;display:block}list-game-feed .game .meta .genres>*+*:before{content:", "}list-game-feed .game .meta i{margin-right:10px}list-game-feed .game .meta i svg{transition:opacity .15s;opacity:.5}list-game-feed .game .meta i svg *{fill:#fff}list-game-feed .game .tags{display:inline-flex;align-items:center;flex:1 1 20%}list-game-feed .game .tags>*+*{margin-left:10px}list-game-feed .game .tags svg{opacity:.5;transition:opacity .15s}list-game-feed .game .tags svg *{fill:#fff}list-game-feed .game .tags .tag{background-color:var(--color--accent);display:inline-block;font-weight:900;font-size:12px;color:#111;line-height:15px;padding:0 4px;border-radius:2.5px;min-width:0;font-style:normal;background-color:rgba(0,0,0,0);color:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.4);line-height:11px;text-transform:uppercase;font-size:11px;font-weight:bold;padding:1.5px 4px;transition:border-color .15s,color .15s}list-game-feed .game:hover .name,list-game-feed .game:hover .meta{color:#fff}list-game-feed .game:hover .meta svg{opacity:1}list-game-feed .game:hover .tags svg{opacity:1}list-game-feed .game:hover .tags .tag{border-color:#fff;color:#fff}',
        "",
      ]);
      const s = r;
    },
    "cheats/resources/elements/map-banner.scss": (e, t, i) => {
      i.r(t), i.d(t, { default: () => c });
      var a = i(8081),
        n = i.n(a),
        o = i(23645),
        r = i.n(o),
        s = i(61667),
        l = i.n(s),
        d = new URL(i(25799), i.b),
        m = new URL(i(62393), i.b),
        p = r()(n()),
        g = l()(d),
        h = l()(m);
      p.push([
        e.id,
        "map-banner{display:block}map-banner .free-users{display:block;border-radius:10px;overflow:hidden;background:var(--theme--default--background) linear-gradient(0deg, rgba(172, 62, 255, 0.25) 0%, rgba(172, 62, 255, 0.25) 100%);position:relative}map-banner .free-users .content{position:relative;z-index:1;min-height:105px;padding:12.5px 19px}map-banner .free-users .title{font-size:16px;line-height:24px;font-weight:700;color:#fff;display:flex;align-items:center}map-banner .free-users .title strong{color:var(--theme--highlight)}map-banner .free-users .title pro-badge{margin-left:7px}map-banner .free-users .message{font-size:13px;line-height:20px;display:inline-block;max-width:185px;color:rgba(255,255,255,.75);margin:4.5px 0 0;padding:0}map-banner .free-users .thumbnail{position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;object-position:center right;z-index:0;-webkit-mask-image:linear-gradient(270deg, #fff 0%, transparent 190px)}map-banner .free-users .markers{position:absolute;right:9px;top:50%;margin-top:-40px;z-index:0}map-banner .pro-users .header{font-size:16px;line-height:24px;font-weight:700;display:flex;align-items:center;color:#fff;margin-bottom:14.5px}map-banner .pro-users .header beta-tag{margin-left:10px;background-color:rgba(255,255,255,.5)}map-banner .pro-users .maps-list{display:grid;grid-template-columns:1fr;column-gap:20px;row-gap:20px}map-banner .pro-users .maps-list.multiple-maps{grid-template-columns:1fr 1fr}map-banner .pro-users .maps-list.multiple-maps .map-tile .map{width:157.5px;height:83px;object-fit:cover}map-banner .pro-users .maps-list.multiple-maps .map-tile .thumbnail.loaded:after{background:url(" +
          g +
          ') center/151px 68px no-repeat}map-banner .pro-users .maps-list.multiple-maps .map-tile loading-indicator{top:36.5px}map-banner .pro-users .map-tile{display:block;padding:10px;border-radius:10px;background:rgba(255,255,255,.04);position:relative;min-width:0;overflow:hidden}map-banner .pro-users .map-tile loading-indicator{position:absolute;left:50%;top:61.5px;margin-left:-15px;opacity:1}map-banner .pro-users .map-tile loading-indicator circle{stroke:var(--color--accent)}map-banner .pro-users .map-tile.loading{opacity:.7;pointer-events:none}map-banner .pro-users .map-tile.loading .thumbnail{opacity:.5}map-banner .pro-users .map-tile.loading .link{opacity:.5}map-banner .pro-users .map-tile .thumbnail{display:block;border-radius:5px;height:auto;transition:opacity .15s;overflow:hidden;position:relative}map-banner .pro-users .map-tile .thumbnail:nth-child(1n+0) img{animation-delay:0.1s}map-banner .pro-users .map-tile .thumbnail:nth-child(2n+0) img{animation-delay:0.2s}map-banner .pro-users .map-tile .thumbnail:nth-child(3n+0) img{animation-delay:0.3s}map-banner .pro-users .map-tile .thumbnail:nth-child(4n+0) img{animation-delay:0.4s}map-banner .pro-users .map-tile .thumbnail:nth-child(5n+0) img{animation-delay:0.5s}map-banner .pro-users .map-tile .thumbnail:nth-child(6n+0) img{animation-delay:0.6s}map-banner .pro-users .map-tile .thumbnail:nth-child(7n+0) img{animation-delay:0.7s}map-banner .pro-users .map-tile .thumbnail:nth-child(8n+0) img{animation-delay:0.8s}map-banner .pro-users .map-tile .thumbnail:nth-child(9n+0) img{animation-delay:0.9s}map-banner .pro-users .map-tile .thumbnail .map{display:block;height:133px}map-banner .pro-users .map-tile .thumbnail:not(.loaded) img{animation-name:thumbnail-loading;animation-duration:1s;animation-timing-function:linear;animation-direction:alternate;animation-iteration-count:infinite;background-clip:padding-box}map-banner .pro-users .map-tile .thumbnail.loaded:before,map-banner .pro-users .map-tile .thumbnail.loaded:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%}map-banner .pro-users .map-tile .thumbnail.loaded:before{background:linear-gradient(225deg, #0bf2f6 0%, #9200ff 100%);mix-blend-mode:color;opacity:.5}map-banner .pro-users .map-tile .thumbnail.loaded:after{background:url(' +
          h +
          ") center/316px 110px no-repeat}map-banner .pro-users .map-tile .link{font-size:13px;line-height:20px;color:rgba(255,255,255,.8);display:inline-flex;align-items:center;transition:color .15s;margin-top:9px;max-width:100%}map-banner .pro-users .map-tile .link span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;flex:0 1 auto}map-banner .pro-users .map-tile .link i{margin:1.5px 0 0 5px;transition:transform .15s}map-banner .pro-users .map-tile .link i svg{height:7px}map-banner .pro-users .map-tile:hover .link{color:#fff}map-banner .pro-users .map-tile:hover .link i{transform:translateX(2px)}",
        "",
      ]);
      const c = p;
    },
    "cheats/resources/elements/game-feed-item.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => b });
      var a = i(27091),
        n = i.n(a),
        o = new URL(i(92281), i.b),
        r = new URL(i(41562), i.b),
        s = new URL(i(80008), i.b),
        l = new URL(i(98879), i.b),
        d = new URL(i(4211), i.b),
        m = new URL(i(20488), i.b),
        p = n()(o),
        g = n()(r),
        h = n()(s),
        c = n()(l);
      const b =
        '<template class="${largeThumbnails ? \'large-thumbnails\' : \'\'}"> <require from="./game-feed-item.scss"></require> <require from="../../../shared/cheats/resources/value-converters/important-genres"></require> <require from="../../../resources/elements/favorite-button"></require> <a class="game-feed-item" route-href="route.bind: \'title\'; params.bind: {titleId: item.titleId, gameId: item.gameId, previousRoute: previousRoute, parentRoute: parentRoute}" title-link="value.bind: location; title-id.bind: item.titleId; game-id.bind: item.gameId; search-result.bind: searchResult;"> <div class="thumbnail-wrapper ${!item.isAvailable ? \'unavailable\' : \'\'}"> <img class="thumbnail ${thumbnailLoaded ? \'loaded\' : \'\'}" fallback-src="' +
        p +
        '" src.bind="item.titleThumbnail | cdn:{size: 260}" load.trigger="thumbnailLoaded = true"> <img class="choice-badge" if.bind="item.isChoice" title.bind="\'game_feed.community_choice_award_winner\' | i18n" src="' +
        g +
        '"> <span class="unavailable-badge" if.bind="!item.isAvailable" title.bind="\'game_feed.no_cheats_available\' | i18n"> <inline-svg src="' +
        h +
        '"></inline-svg> </span> </div> <footer> <div class="row"> <b class="fill" title.bind="item.titleName"> <span class="ellipsis">${item.titleName}<template if.bind="item.gameEdition">&nbsp;(${item.gameEdition})</template></span> </b> <favorite-button if.bind="item.isAvailable" title-id.bind="item.titleId"></favorite-button> </div> <div class="row"> <span class="fill"> <i if.bind="metadataTypes.includes(\'platform-icons\')" repeat.for="platformId of item.platformIds" class="platform-icon" title.bind="platformId | platformName"> <inline-svg src.bind="platformId | platformIconSvg"></inline-svg> </i> <template if.bind="metadataTypes.includes(\'status-badges\')"> <template if.bind="!largeThumbnails && metadataTypes.includes(\'platform-icons\') && item.platformIds.length > 1"> <span if.bind="item.isNew" class="tag" title="${\'game_feed.new\' | i18n}">${\'game_feed.new_abbreviation\' | i18n}</span> <span if.bind="item.isUpdated" class="tag" title="${\'game_feed.updated\' | i18n}">${\'game_feed.updated_abbreviation\' | i18n}</span> </template> <template else> <span if.bind="item.isNew" class="tag">${\'game_feed.new\' | i18n}</span> <span if.bind="item.isUpdated" class="tag">${\'game_feed.updated\' | i18n}</span> </template> </template> <span if.bind="metadataTypes.includes(\'genres\')" class="meta genres ellipsis"> <span repeat.for="genre of item.genres | importantGenres:2">${`genres.${genre}` | i18n}</span> </span> </span> <span if.bind="metadataTypes.includes(\'updated-at\') && item.updatedAt"> <i><inline-svg src="' +
        c +
        "\"></inline-svg></i> <span title.bind=\"item.updatedAt | i18nDateTime:{dateStyle:'short'} | i18nParam:'game_feed.released_on_$date':'date'\" class=\"meta\">${item.updatedAt | i18nElaspedTime}</span> </span> <span if.bind=\"metadataTypes.includes('players') && item.players\"> <i><inline-svg src=\"" +
        n()(d) +
        '"></inline-svg></i> <span class="meta">${item.players | i18nNumber:{notation: \'compact\', maximumFractionDigits: 2, maximumSignificantDigits: 4}}</span> </span> <span if.bind="metadataTypes.includes(\'creator\')"> <img class="avatar" src.bind="item.creatorAvatar | cdn:{size: 16}" fallback-src="' +
        n()(m) +
        '"> <span class="meta">${item.creator}</span> </span> <span if.bind="item.lastPlayedAt && (!metadataTypes.length || metadataTypes.includes(\'last-played-at\'))"> <i><inline-svg src="' +
        c +
        "\"></inline-svg></i> <span title.bind=\"item.lastPlayedAt | i18nDateTime:{dateStyle:'short'} | i18nParam:'game_feed.last_played_$date':'date'\" class=\"meta\">${item.lastPlayedAt | i18nElaspedTime:true}</span> </span> </div> </footer> </a> </template> ";
    },
    "cheats/resources/elements/game-feed.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => a });
      const a =
        '<template> <require from="./horizontal-game-feed"></require> <require from="./grid-game-feed"></require> <horizontal-game-feed if.bind="layout === \'horizontal\'" items.bind="feed.items" location.bind="location || \'free_games\'" previous-route.bind="previousRoute" large-thumbnails.bind="largeThumbnails" metadata-types.bind="metadataTypes"></horizontal-game-feed> <grid-game-feed if.bind="layout === \'grid\'" items.bind="feed.items" location.bind="location || \'free_games\'" previous-route.bind="previousRoute" max-rows.bind="maxGridRows" metadata-types.bind="metadataTypes"></grid-game-feed> </template> ';
    },
    "cheats/resources/elements/game-search-input.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => r });
      var a = i(27091),
        n = i.n(a),
        o = new URL(i(27349), i.b);
      const r =
        '<template> <require from="./game-search-input.scss"></require> <form submit.delegate="search()"> <span class="input-wrapper"> <input type="text" placeholder="${(placeholderKey || \'game_search_input.search\') | i18n}" value.bind="searchTerms" ref="inputEl" disabled.bind="disabled"> <a class="clear-button" href="#" click.delegate="clear()" if.bind="searchTerms || searching"> <inline-svg src="' +
        n()(o) +
        '"></inline-svg> </a> </span> <button class="search-button" disabled.bind="!searchTerms || disabled">${\'game_search_input.go\' | i18n}</button> </form> </template> ';
    },
    "cheats/resources/elements/grid-game-feed.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => a });
      const a =
        '<template> <require from="./grid-game-feed.scss"></require> <require from="./horizontal-game-feed-item"></require> <div class="wrapper"> <horizontal-game-feed-item repeat.for="item of items" item.bind="item" location.bind="location" metadata-types.bind="metadataTypes" previous-route.bind="previousRoute" layout.bind="grid"></horizontal-game-feed-item> </div> </template> ';
    },
    "cheats/resources/elements/horizontal-game-feed-item.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => m });
      var a = i(27091),
        n = i.n(a),
        o = new URL(i(92281), i.b),
        r = new URL(i(98879), i.b),
        s = new URL(i(4211), i.b),
        l = n()(o),
        d = n()(r);
      const m =
        '<template> <require from="./horizontal-game-feed-item.scss"></require> <require from="../../../shared/cheats/resources/value-converters/important-genres"></require> <require from="../../../resources/elements/favorite-button"></require> <a class="item" route-href="route.bind: \'title\'; params.bind: {titleId: item.titleId, gameId: item.gameId, previousRoute: previousRoute}" title-link="value.bind: location; title-id.bind: item.titleId; game-id.bind: item.gameId;"> <img class="thumbnail" fallback-src="' +
        l +
        '" src.bind="item.titleThumbnail | cdn:{size: 120}"> <div class="info"> <div class="row" title.bind="item.titleName"> <b class="fill" title.bind="item.titleName"> <i if.bind="metadataTypes.includes(\'platform-icons\')" repeat.for="platformId of item.platformIds" class="platform-icon" title.bind="platformId | platformName"> <inline-svg src.bind="platformId | platformIconSvg"></inline-svg> </i> <span class="ellipsis">${item.titleName}<template if.bind="item.gameEdition">&nbsp;(${item.gameEdition})</template></span> </b> <favorite-button if.bind="item.isAvailable" title-id.bind="item.titleId"></favorite-button> </div> <div class="row"> <span if.bind="metadataTypes.includes(\'status-badges\') && (item.isNew || item.isUpdated)"> <span if.bind="item.isNew" class="tag">${\'game_feed.new\' | i18n}</span> <span if.bind="item.isUpdated" class="tag">${\'game_feed.updated\' | i18n}</span> </span> <span if.bind="metadataTypes.includes(\'genres\')"> <span class="meta genres ellipsis"> <span repeat.for="genre of item.genres | importantGenres:2">${`genres.${genre}` | i18n}</span> </span> </span> <template if.bind="metadataTypes.includes(\'updated-at\') && item.updatedAt"> <span> <i><inline-svg src="' +
        d +
        '"></inline-svg></i> <span title.bind="item.updatedAt | i18nDateTime:{dateStyle:\'short\'} | i18nParam:\'game_feed.released_on_$date\':\'date\'" class="label">${item.updatedAt | i18nElaspedTime}</span> </span> </template> <template if.bind="metadataTypes.includes(\'creator\')"> <span> <img class="avatar" src.bind="item.creatorAvatar | cdn:{size: 16}"> <span class="meta ellipsis">${item.creator}</span> </span> </template> <template if.bind="metadataTypes.includes(\'players\') && item.players"> <span> <i><inline-svg src="' +
        n()(s) +
        '"></inline-svg></i> <span class="meta">${item.players | i18nNumber:{notation: \'compact\', maximumFractionDigits: 2, maximumSignificantDigits: 4}}</span> </span> </template> <template if.bind="item.lastPlayedAt && (!metadataTypes.length || metadataTypes.includes(\'last-played-at\'))"> <span> <i><inline-svg src="' +
        d +
        "\"></inline-svg></i> <span title.bind=\"item.lastPlayedAt | i18nDateTime:{dateStyle:'short'} | i18nParam:'game_feed.last_played_$date':'date'\" class=\"meta\">${item.lastPlayedAt | i18nElaspedTime:true}</span> </span> </template> </div> </div> </a> </template> ";
    },
    "cheats/resources/elements/horizontal-game-feed.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => a });
      const a =
        '<template class="${largeThumbnails ? \'large-thumbnails\' : \'\'}"> <require from="./horizontal-game-feed.scss"></require> <require from="./game-feed-item"></require> <require from="../../../shared/resources/elements/horizontal-scroll-container"></require> <horizontal-scroll-container view-model.ref="horizontalScrollContainer"> <game-feed-item repeat.for="item of items" item.bind="item" location.bind="location" metadata-types.bind="metadataTypes" previous-route.bind="previousRoute" parent-route.bind="parentRoute" large-thumbnails.bind="largeThumbnails"></game-feed-item> </horizontal-scroll-container> </template> ';
    },
    "cheats/resources/elements/launch-without-mods-button.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => r });
      var a = i(27091),
        n = i.n(a),
        o = new URL(i(24956), i.b);
      const r =
        '<template> <require from="./launch-without-mods-button.scss"></require> <button click.delegate="launch()" disabled.bind="launching" class="${primary && !hasPlayedUnavailableGame ? \'pulse\' : \'\'}"> <span>${\'launch_without_mods_button.launch_without_mods\' | i18n}</span> <i><inline-svg src="' +
        n()(o) +
        '"></inline-svg></i> </button> </template> ';
    },
    "cheats/resources/elements/list-game-feed.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => p });
      var a = i(27091),
        n = i.n(a),
        o = new URL(i(92281), i.b),
        r = new URL(i(98879), i.b),
        s = new URL(i(4211), i.b),
        l = n()(o),
        d = n()(r),
        m = n()(s);
      const p =
        '<template> <require from="./list-game-feed.scss"></require> <require from="../../../resources/elements/favorite-button"></require> <require from="../../../resources/elements/lazy-render"></require> <a class="game" repeat.for="item of items" route-href="route.bind: \'title\'; params.bind: {titleId: item.titleId, gameId: item.gameId, previousRoute: previousRoute, parentRoute: parentRoute}" title-link="value.bind: location; title-id.bind: item.titleId; game-id.bind: item.gameId; search-result.bind: searchResult;"> <lazy-render> <template replace-part="content"> <span class="thumbnail"> <img fallback-src="' +
        l +
        '" src.bind="item.titleThumbnail | cdn:{size: 40}"> </span> <span class="name"> <span class="inner">${item.titleName}<template if.bind="item.gameEdition">&nbsp;(${item.gameEdition})</template></span> </span> <span class="favorite"> <favorite-button if.bind="item.isAvailable" title-id.bind="item.titleId"></favorite-button> </span> <span class="meta"> <span if.bind="metadataTypes.includes(\'genres\')" class="genres"> <span repeat.for="genre of item.genres">${`genres.${genre}` | i18n}</span> </span> <template if.bind="metadataTypes.includes(\'updated-at\') && item.updatedAt"> <i><inline-svg src="' +
        d +
        "\"></inline-svg></i> <span title.bind=\"item.updatedAt | i18nDateTime:{dateStyle:'short'} | i18nParam:'game_feed.released_on_$date':'date'\" class=\"meta\">${item.updatedAt | i18nElaspedTime}</span> </template> <template if.bind=\"metadataTypes.includes('players') && item.players\"> <i><inline-svg src=\"" +
        m +
        '"></inline-svg></i> <span class="meta">${item.players | i18nNumber:{notation: \'compact\', maximumFractionDigits: 2, maximumSignificantDigits: 4}}</span> </template> <template if.bind="metadataTypes.includes(\'creator\')"> <i><inline-svg src="' +
        m +
        '"></inline-svg></i> <span class="meta">${item.creator}</span> </template> <template if.bind="item.lastPlayedAt && (!metadataTypes.length || metadataTypes.includes(\'last-played-at\'))"> <i><inline-svg src="' +
        d +
        '"></inline-svg></i> <span title.bind="item.lastPlayedAt | i18nDateTime:{dateStyle:\'short\'} | i18nParam:\'game_feed.last_played_$date\':\'date\'" class="meta">${item.lastPlayedAt | i18nElaspedTime:true}</span> </template> </span> <span class="tags"> <i if.bind="metadataTypes.includes(\'platform-icons\')" repeat.for="platformId of item.platformIds" class="platform-icon" title.bind="platformId | platformName"> <inline-svg src.bind="platformId | platformIconSvg"></inline-svg> </i> <template if.bind="metadataTypes.includes(\'status-badges\')"> <span if.bind="item.isNew" class="tag">${\'game_feed.new\' | i18n}</span> <span if.bind="item.isUpdated" class="tag">${\'game_feed.updated\' | i18n}</span> </template> </span> </template> <template replace-part="placeholder"> <span class="placeholder"></span> </template> </lazy-render> </a> </template> ';
    },
    "cheats/resources/elements/map-banner.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => s });
      var a = i(27091),
        n = i.n(a),
        o = new URL(i(49022), i.b),
        r = new URL(i(4991), i.b);
      const s =
        '<template> <require from="./map-banner.scss"></require> <require from="../../../shared/resources/elements/pro-badge"></require> <require from="../../../resources/elements/beta-tag.html"></require> <require from="../../../shared/resources/elements/loading-indicator"></require> <a if.bind="!account.subscription" href="#" class="free-users" pro-cta="free_users_map_banner"> <div class="content"> <div class="title"> <span innerhtml.bind="maps.length === 1 ? \'map_banner.interactive_map_with_emphasis\' : \'map_banner.interactive_maps_with_emphasis\' | i18n | markdown"></span> <pro-badge></pro-badge> </div> <div class="message"> ${\'map_banner.explore_game_places_and_items_for_$game\' | i18n:{game: title.name}} </div> </div> <img src.bind="maps[0].thumbnail | cdn" class="thumbnail"> <img src="' +
        n()(o) +
        '" class="markers"> </a> <div else class="pro-users"> <div class="header"> ${maps.length === 1 ? \'map_banner.interactive_map\' : \'map_banner.interactive_maps\' | i18n} <beta-tag></beta-tag> </div> <div class="maps-list ${maps.length > 1 ? \'multiple-maps\' : \'\'}"> <a href="#" repeat.for="map of maps" class="map-tile ${loading[map.id] ? \'loading\' : \'\'}" click.delegate="openMap(map, $event.ctrlKey)" tabindex.bind="loading[map.id] ? -1 : 0"> <div class="thumbnail ${thumbnailLoaded ? \'loaded\' : \'\'}"> <img class="map" src.bind="map.thumbnail | cdn" load.trigger="thumbnailLoaded = true"> </div> <span class="link"> <span>${map.name}</span> <i><inline-svg src="' +
        n()(r) +
        '"></inline-svg></i> </span> <loading-indicator if.bind="loading[map.id]"></loading-indicator> </a> </div> </div> </template>';
    },
    "cheats/resources/elements/game-feed-item": (e, t, i) => {
      i.r(t), i.d(t, { GameFeedItem: () => o });
      var a = i(70655),
        n = i("aurelia-framework");
      class o {
        constructor() {
          (this.largeThumbnails = !1),
            (this.searchResult = !1),
            (this.thumbnailLoaded = !1);
        }
      }
      (0, a.gn)(
        [n.bindable, (0, a.w6)("design:type", Object)],
        o.prototype,
        "item",
        void 0
      ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", String)],
          o.prototype,
          "location",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", Array)],
          o.prototype,
          "metadataTypes",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", String)],
          o.prototype,
          "previousRoute",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", String)],
          o.prototype,
          "parentRoute",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", Boolean)],
          o.prototype,
          "largeThumbnails",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", Boolean)],
          o.prototype,
          "searchResult",
          void 0
        );
    },
    "cheats/resources/elements/game-feed": (e, t, i) => {
      i.r(t), i.d(t, { GameFeed: () => l });
      var a = i(70655),
        n = i("aurelia-framework"),
        o = i(74036),
        r = i(93082),
        s = i(39431);
      let l = class {
        #e;
        constructor(e) {
          (this.filter = { maxItems: 10 }),
            (this.metadataTypes = []),
            (this.largeThumbnails = !1),
            (this.layout = "horizontal"),
            (this.#e = e);
        }
        attached() {
          this.feed = this.#e.getFilteredFeed(this.feedConfig, this.filter);
        }
        detached() {
          this.feed.dispose();
        }
      };
      (0, a.gn)(
        [
          (0, n.bindable)({ defaultBindingMode: n.bindingMode.toView }),
          (0, a.w6)("design:type", Object),
        ],
        l.prototype,
        "feedConfig",
        void 0
      ),
        (0, a.gn)(
          [
            (0, n.bindable)({ defaultBindingMode: n.bindingMode.twoWay }),
            (0, a.w6)("design:type", o._k),
          ],
          l.prototype,
          "feed",
          void 0
        ),
        (0, a.gn)(
          [
            (0, n.bindable)({ defaultBindingMode: n.bindingMode.toView }),
            (0, a.w6)("design:type", Object),
          ],
          l.prototype,
          "filter",
          void 0
        ),
        (0, a.gn)(
          [
            (0, n.bindable)({ defaultBindingMode: n.bindingMode.toView }),
            (0, a.w6)("design:type", Array),
          ],
          l.prototype,
          "metadataTypes",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", String)],
          l.prototype,
          "previousRoute",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", Boolean)],
          l.prototype,
          "largeThumbnails",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", String)],
          l.prototype,
          "layout",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", Number)],
          l.prototype,
          "maxGridRows",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", String)],
          l.prototype,
          "location",
          void 0
        ),
        (l = (0, a.gn)(
          [
            (0, r.b)((e) =>
              e.state.pipe((0, s.s)("catalog", "installedGameVersions"))
            ),
            (0, n.autoinject)(),
            (0, a.w6)("design:paramtypes", [o.AD]),
          ],
          l
        ));
    },
    "cheats/resources/elements/game-search-input": (e, t, i) => {
      i.r(t), i.d(t, { GameSearchInput: () => r });
      var a = i(70655),
        n = i("aurelia-framework"),
        o = i(86433);
      let r = class {
        #t;
        constructor(e) {
          (this.searchTerms = ""),
            (this.onClear = () => {}),
            (this.onReset = () => {}),
            (this.onSearch = () => {}),
            (this.#t = e);
        }
        bind() {
          this.#t.currentInstruction.queryParams.search &&
            (this.searchTerms = this.#t.currentInstruction.queryParams.search);
        }
        attached() {
          this.search();
        }
        searchTermsChanged() {
          this.onReset(), this.searchTerms || this.clear(!1);
        }
        search() {
          this.searchTerms && (this.onSearch(), this.#i());
        }
        clear(e = !0) {
          (this.searchTerms = ""),
            e && this.inputEl?.focus(),
            this.#i(),
            this.onClear();
        }
        #i() {
          this.#t.navigateToRoute(
            this.#t.currentInstruction.config.name,
            { ...this.#t.currentInstruction.params, search: this.searchTerms },
            { trigger: !1, replace: !0 }
          );
        }
      };
      (0, a.gn)(
        [
          (0, n.bindable)({ defaultBindingMode: n.bindingMode.fromView }),
          (0, a.w6)("design:type", String),
        ],
        r.prototype,
        "searchTerms",
        void 0
      ),
        (0, a.gn)(
          [
            (0, n.bindable)({ defaultBindingMode: n.bindingMode.toView }),
            (0, a.w6)("design:type", Boolean),
          ],
          r.prototype,
          "searching",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", Object)],
          r.prototype,
          "onClear",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", Object)],
          r.prototype,
          "onReset",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", Object)],
          r.prototype,
          "onSearch",
          void 0
        ),
        (0, a.gn)(
          [
            (0, n.bindable)({ defaultBindingMode: n.bindingMode.toView }),
            (0, a.w6)("design:type", String),
          ],
          r.prototype,
          "placeholderKey",
          void 0
        ),
        (0, a.gn)(
          [
            (0, n.bindable)({ defaultBindingMode: n.bindingMode.twoWay }),
            (0, a.w6)("design:type", Boolean),
          ],
          r.prototype,
          "disabled",
          void 0
        ),
        (r = (0, a.gn)(
          [(0, n.autoinject)(), (0, a.w6)("design:paramtypes", [o.F0])],
          r
        ));
    },
    "cheats/resources/elements/grid-game-feed": (e, t, i) => {
      i.r(t), i.d(t, { GridGameFeed: () => r });
      var a = i(70655),
        n = i("aurelia-framework");
      const o = "--grid-game-feed--max-columns";
      let r = class {
        #a;
        constructor(e) {
          this.#a = e;
        }
        attached() {
          this.maxRows
            ? this.#a.style.setProperty(o, this.maxRows.toString())
            : this.#a.style.removeProperty(o);
        }
      };
      (0, a.gn)(
        [n.bindable, (0, a.w6)("design:type", Array)],
        r.prototype,
        "items",
        void 0
      ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", String)],
          r.prototype,
          "location",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", String)],
          r.prototype,
          "previousRoute",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", Array)],
          r.prototype,
          "metadataTypes",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", Number)],
          r.prototype,
          "maxRows",
          void 0
        ),
        (r = (0, a.gn)(
          [(0, n.autoinject)(), (0, a.w6)("design:paramtypes", [Element])],
          r
        ));
    },
    "cheats/resources/elements/horizontal-game-feed-item": (e, t, i) => {
      i.r(t), i.d(t, { HorizontalGameFeedItem: () => o });
      var a = i(70655),
        n = i("aurelia-framework");
      class o {
        constructor() {
          this.largeThumbnails = !1;
        }
      }
      (0, a.gn)(
        [n.bindable, (0, a.w6)("design:type", Object)],
        o.prototype,
        "item",
        void 0
      ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", String)],
          o.prototype,
          "location",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", Array)],
          o.prototype,
          "metadataTypes",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", String)],
          o.prototype,
          "previousRoute",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", Boolean)],
          o.prototype,
          "largeThumbnails",
          void 0
        );
    },
    "cheats/resources/elements/horizontal-game-feed": (e, t, i) => {
      i.r(t), i.d(t, { HorizontalGameFeed: () => o });
      var a = i(70655),
        n = i("aurelia-framework");
      let o = class {
        constructor() {
          this.largeThumbnails = !1;
        }
        itemsChanged() {
          this.horizontalScrollContainer?.reset();
        }
      };
      (0, a.gn)(
        [n.bindable, (0, a.w6)("design:type", Array)],
        o.prototype,
        "items",
        void 0
      ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", Array)],
          o.prototype,
          "metadataTypes",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", String)],
          o.prototype,
          "location",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", String)],
          o.prototype,
          "previousRoute",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", String)],
          o.prototype,
          "parentRoute",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", Boolean)],
          o.prototype,
          "largeThumbnails",
          void 0
        ),
        (o = (0, a.gn)([(0, n.autoinject)()], o));
    },
    "cheats/resources/elements/launch-without-mods-button": (e, t, i) => {
      i.r(t), i.d(t, { LaunchWithoutModsButton: () => d });
      var a = i(70655),
        n = i("aurelia-framework"),
        o = i(16943),
        r = i(2314),
        s = i(93082),
        l = i(51722);
      let d = class {
        #n;
        #o;
        constructor(e) {
          this.#o = e;
        }
        detached() {
          clearTimeout(this.#n);
        }
        launch() {
          this.launching ||
            ((this.launching = !0),
            clearTimeout(this.#n),
            (this.#n = setTimeout(() => {
              this.launching = !1;
            }, 5e3)),
            this.#o.launch(this.app, this.gameId, this.trigger));
        }
        get hasPlayedUnavailableGame() {
          return (
            !!this.gameHistory &&
            Object.entries(this.gameHistory).some(
              ([e, t]) =>
                t.lastPlayedAt &&
                (!this.games[e] ||
                  !(0, l.yE)(this.games[e].flags, r.p.Available))
            )
          );
        }
      };
      (0, a.gn)(
        [n.bindable, (0, a.w6)("design:type", Object)],
        d.prototype,
        "app",
        void 0
      ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", String)],
          d.prototype,
          "gameId",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", String)],
          d.prototype,
          "trigger",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", Boolean)],
          d.prototype,
          "primary",
          void 0
        ),
        (0, a.gn)(
          [
            (0, n.computedFrom)("gameHistory", "games"),
            (0, a.w6)("design:type", Boolean),
            (0, a.w6)("design:paramtypes", []),
          ],
          d.prototype,
          "hasPlayedUnavailableGame",
          null
        ),
        (d = (0, a.gn)(
          [
            (0, s.b)({
              selectors: {
                games: (0, s.g)("catalog", "games"),
                gameHistory: (0, s.g)("gameHistory"),
              },
            }),
            (0, n.autoinject)(),
            (0, a.w6)("design:paramtypes", [o.W]),
          ],
          d
        ));
    },
    "cheats/resources/elements/list-game-feed": (e, t, i) => {
      i.r(t), i.d(t, { ListGameFeed: () => o });
      var a = i(70655),
        n = i("aurelia-framework");
      class o {
        constructor() {
          this.searchResult = !1;
        }
      }
      (0, a.gn)(
        [n.bindable, (0, a.w6)("design:type", Array)],
        o.prototype,
        "items",
        void 0
      ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", Array)],
          o.prototype,
          "metadataTypes",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", String)],
          o.prototype,
          "location",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", String)],
          o.prototype,
          "previousRoute",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", String)],
          o.prototype,
          "parentRoute",
          void 0
        ),
        (0, a.gn)(
          [n.bindable, (0, a.w6)("design:type", Boolean)],
          o.prototype,
          "searchResult",
          void 0
        );
    },
    "cheats/resources/elements/map-banner": (e, t, i) => {
      i.r(t), i.d(t, { MapBanner: () => s });
      var a = i(70655),
        n = i("aurelia-framework"),
        o = i(23015),
        r = i(93082);
      let s = class {
        #r;
        constructor(e) {
          (this.loading = {}), (this.#r = e);
        }
        async openMap(e, t = !1) {
          if (!this.loading[e.id]) {
            this.loading[e.id] = !0;
            try {
              await this.#r.openMap(e, t);
            } finally {
              this.loading[e.id] = !1;
            }
          }
        }
        get title() {
          return this.maps.length > 0
            ? this.catalog.titles[this.maps[0].titleId]
            : void 0;
        }
      };
      (0, a.gn)(
        [n.bindable, (0, a.w6)("design:type", Array)],
        s.prototype,
        "maps",
        void 0
      ),
        (0, a.gn)(
          [
            (0, n.computedFrom)("maps"),
            (0, a.w6)("design:type", Object),
            (0, a.w6)("design:paramtypes", []),
          ],
          s.prototype,
          "title",
          null
        ),
        (s = (0, a.gn)(
          [
            (0, r.b)({
              selectors: {
                account: (0, r.g)("account"),
                catalog: (0, r.g)("catalog"),
              },
            }),
            (0, n.autoinject)(),
            (0, a.w6)("design:paramtypes", [o.e]),
          ],
          s
        ));
    },
  },
]);

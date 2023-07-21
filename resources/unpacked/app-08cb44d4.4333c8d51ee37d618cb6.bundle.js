"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [4837],
  {
    "dashboard/dashboard.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => r });
      var i = o(8081),
        a = o.n(i),
        s = o(23645),
        n = o.n(s)()(a());
      n.push([
        e.id,
        "section.dashboard{--min-featured-content-height: 200px;--game-feed-height: 262px;--game-feeds-visible: 0}section.dashboard .view-scrollable{padding-bottom:40px !important}section.dashboard .dashboard-layout{display:flex;flex-wrap:wrap;margin-right:-30px;margin-bottom:-30px;margin-top:10px;position:relative;z-index:0}section.dashboard .dashboard-layout .column{display:flex;flex-direction:column;height:calc(100vh - var(--constant--appHeaderHeight) + 40px);min-height:calc(var(--min-featured-content-height) + var(--game-feed-height)*var(--game-feeds-visible));display:flex;flex-direction:column;padding-right:30px;margin-bottom:30px}section.dashboard .dashboard-layout .column>*+*{margin-top:22px}section.dashboard .dashboard-layout .column:first-child{flex:1 1 67%;min-width:500px}section.dashboard .dashboard-layout .column:last-child{flex:1 1 33%}section.dashboard featured-content{padding:20px;border-radius:10px;background:rgba(255,255,255,.04);overflow:hidden;position:relative;height:var(--min-featured-content-height);flex:1 0 auto;z-index:0}@media(forced-colors: active){body:not(.override-contrast-mode) section.dashboard featured-content{border:1px solid #fff}}section.dashboard .game-feed{display:flex;flex-direction:column;flex:0 0 auto}.theme-default section.dashboard .game-feed{--overflow-fade--background: #1b2026}.theme-purple-pro section.dashboard .game-feed{--overflow-fade--background: #152033}.theme-green-pro section.dashboard .game-feed{--overflow-fade--background: #242424}.theme-orange-pro section.dashboard .game-feed{--overflow-fade--background: #1f252d}.theme-pro section.dashboard .game-feed{--overflow-fade--background: #1b1b1b}section.dashboard .game-feed header{display:flex;align-items:center;margin-bottom:13px}section.dashboard .game-feed header h1{font-weight:800;font-size:21px;line-height:30px;font-weight:700;color:#fff;margin-bottom:13px;display:block;flex:1;margin:0}section.dashboard .game-feed header a{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-size:13px;line-height:20px;font-weight:700;--cta--padding: 11px;--cta--height: 26px;--cta--hover--border-width: 1px}section.dashboard .game-feed header a,section.dashboard .game-feed header a *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) section.dashboard .game-feed header a{border:1px solid #fff}}section.dashboard .game-feed header a>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}section.dashboard .game-feed header a>*:first-child{padding-left:0}section.dashboard .game-feed header a>*:last-child{padding-right:0}section.dashboard .game-feed header a svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) section.dashboard .game-feed header a svg *{fill:CanvasText}}section.dashboard .game-feed header a svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) section.dashboard .game-feed header a svg{opacity:1}}section.dashboard .game-feed header a img{height:50%}section.dashboard .game-feed header a:disabled{opacity:.3}section.dashboard .game-feed header a:disabled,section.dashboard .game-feed header a:disabled *{cursor:default;pointer-events:none}@media(hover: hover){section.dashboard .game-feed header a:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}section.dashboard .game-feed header a:not(:disabled):hover svg{opacity:1}}section.dashboard .game-feed header a:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}section.dashboard .game-feed article{padding:20px;border-radius:10px;background:rgba(255,255,255,.04);overflow:hidden}@media(forced-colors: active){body:not(.override-contrast-mode) section.dashboard .game-feed article{border:1px solid #fff}}section.dashboard .sections section{display:flex;flex-direction:column;flex:1;overflow:hidden}section.dashboard .sections section header{display:flex;align-items:center;margin-bottom:13px}section.dashboard .sections section header h1{font-weight:800;font-size:21px;line-height:30px;font-weight:700;color:#fff;margin-bottom:13px;display:block;flex:1;margin:0;font-size:18px}section.dashboard .sections section header a{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-size:13px;line-height:20px;font-weight:700;--cta--padding: 11px;--cta--height: 26px;--cta--hover--border-width: 1px}section.dashboard .sections section header a,section.dashboard .sections section header a *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) section.dashboard .sections section header a{border:1px solid #fff}}section.dashboard .sections section header a>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}section.dashboard .sections section header a>*:first-child{padding-left:0}section.dashboard .sections section header a>*:last-child{padding-right:0}section.dashboard .sections section header a svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) section.dashboard .sections section header a svg *{fill:CanvasText}}section.dashboard .sections section header a svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) section.dashboard .sections section header a svg{opacity:1}}section.dashboard .sections section header a img{height:50%}section.dashboard .sections section header a:disabled{opacity:.3}section.dashboard .sections section header a:disabled,section.dashboard .sections section header a:disabled *{cursor:default;pointer-events:none}@media(hover: hover){section.dashboard .sections section header a:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}section.dashboard .sections section header a:not(:disabled):hover svg{opacity:1}}section.dashboard .sections section header a:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}section.dashboard .sections section article{padding:20px;border-radius:10px;background:rgba(255,255,255,.04);overflow:hidden;padding:0}@media(forced-colors: active){body:not(.override-contrast-mode) section.dashboard .sections section article{border:1px solid #fff}}section.dashboard .sections section article [overflow-fade]{height:100%;overflow:hidden}section.dashboard .sections section article [overflow-fade]::-webkit-scrollbar{width:7px;height:7px;background:rgba(255,255,255,.1);border-radius:10px;margin:10px}section.dashboard .sections section article [overflow-fade]::-webkit-scrollbar-thumb:window-inactive,section.dashboard .sections section article [overflow-fade]::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,.2);border-radius:99px;border:1px solid rgba(0,0,0,.2);background-clip:padding-box}section.dashboard .sections section article [overflow-fade]::-webkit-scrollbar-thumb:window-inactive:hover,section.dashboard .sections section article [overflow-fade]::-webkit-scrollbar-thumb:hover{background-color:rgba(255,255,255,.5)}section.dashboard .sections section article [overflow-fade]::-webkit-scrollbar-button:single-button:vertical:decrement{height:10px}section.dashboard .sections section article [overflow-fade]::-webkit-scrollbar-button:single-button:vertical:increment{height:10px}section.dashboard .sections section article [overflow-fade]::-webkit-scrollbar{background:rgba(0,0,0,0)}section.dashboard .sections section article [overflow-fade]:hover{overflow-y:overlay}section.dashboard .sections section.objectives{max-height:300px}.theme-default section.dashboard .sections section.objectives{--overflow-fade--background: #1d2524}.theme-purple-pro section.dashboard .sections section.objectives{--overflow-fade--background: #172530}.theme-green-pro section.dashboard .sections section.objectives{--overflow-fade--background: #262922}.theme-orange-pro section.dashboard .sections section.objectives{--overflow-fade--background: #212a2b}.theme-pro section.dashboard .sections section.objectives{--overflow-fade--background: #1d1f19}section.dashboard .sections section.objectives.completed{flex:unset}section.dashboard .sections section.objectives article{background:rgba(var(--color--accent--rgb), 0.08)}section.dashboard .sections section.objectives [overflow-fade]{padding:20px}.theme-default section.dashboard .sections section.announcements{--overflow-fade--background: #1b2026}.theme-purple-pro section.dashboard .sections section.announcements{--overflow-fade--background: #152033}.theme-green-pro section.dashboard .sections section.announcements{--overflow-fade--background: #242424}.theme-orange-pro section.dashboard .sections section.announcements{--overflow-fade--background: #1f252d}.theme-pro section.dashboard .sections section.announcements{--overflow-fade--background: #1b1b1b}section.dashboard .sections section.announcements activity{display:block;padding:20px}section.dashboard announcements{border-top-left-radius:10px;border-top-right-radius:10px;overflow:hidden}section.dashboard announcements.hide{display:none}section.dashboard announcements:not(.hide)+article{border-top-left-radius:0;border-top-right-radius:0}section.dashboard announcements:not(.hide)+article::-webkit-scrollbar-button:single-button:vertical:decrement{height:0}section.dashboard announcements:not(.hide)+article::-webkit-scrollbar-button:single-button:vertical:increment{height:10px}section.dashboard .relative{position:relative}",
        "",
      ]);
      const r = n;
    },
    "dashboard/resources/elements/activity.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => r });
      var i = o(8081),
        a = o.n(i),
        s = o(23645),
        n = o.n(s)()(a());
      n.push([
        e.id,
        'activity{position:relative;z-index:0}activity .tabs{display:flex;margin:-20px -20px 20px -20px;position:relative}activity .tabs:before{content:"";position:absolute;left:0;right:0;bottom:0;border-bottom:1px solid rgba(255,255,255,.1)}activity .tabs button{font-weight:600;font-size:16px;line-height:25px;color:rgba(255,255,255,.5);padding:0 9.5px;margin:0;background:rgba(0,0,0,0);border:none;flex:0 0 auto;transition:color .15s}activity .tabs button.selected{color:#fff}activity .tabs button.selected>span:before{border-bottom-color:#fff}activity .tabs button>span{display:inline-block;padding:14px 0;position:relative}activity .tabs button>span:before{content:"";position:absolute;left:0;right:0;bottom:0;border-bottom:1px solid rgba(0,0,0,0);transition:border-color .15s}activity .tabs button:first-of-type{padding-left:19px}activity .tabs button:last-of-type{padding-right:19px}activity .items .item{display:flex;position:relative;text-decoration:none;align-items:center}activity .items .item:nth-child(1n+0) img{animation-delay:0.1s}activity .items .item:nth-child(2n+0) img{animation-delay:0.2s}activity .items .item:nth-child(3n+0) img{animation-delay:0.3s}activity .items .item:nth-child(4n+0) img{animation-delay:0.4s}activity .items .item:nth-child(5n+0) img{animation-delay:0.5s}activity .items .item:nth-child(6n+0) img{animation-delay:0.6s}activity .items .item:nth-child(7n+0) img{animation-delay:0.7s}activity .items .item:nth-child(8n+0) img{animation-delay:0.8s}activity .items .item:nth-child(9n+0) img{animation-delay:0.9s}activity .items .item+.item{margin-top:20px}activity .items .item .thumbnail{display:inline-block;background:rgba(0,0,0,.1);width:74px;height:34px;border-radius:5px;flex:0 0 auto;margin-right:14px;position:relative;z-index:1;border-radius:2px}activity .items .item .thumbnail:not(.loaded){animation-name:thumbnail-loading;animation-duration:1s;animation-timing-function:linear;animation-direction:alternate;animation-iteration-count:infinite;background-clip:padding-box}activity .items .item .content{font-size:14px;line-height:21px;line-height:19px;font-weight:500;color:rgba(255,255,255,.6);flex:1}activity .items .item .content strong{font-weight:700;color:#fff}activity .items .item .content .platform-icon{vertical-align:middle;margin:0 3px 3px}activity .items .item .content .platform-icon svg *{fill:rgba(255,255,255,.4)}activity .items .item .content .time{font-size:12px;line-height:18px;font-weight:500;color:rgba(255,255,255,.3);white-space:nowrap}activity .items .item .content .time:before{content:" · "}activity .follow-prompt{background:rgba(var(--color--accent--rgb), 0.12);position:relative;margin:-20px -20px 20px}activity .follow-prompt .wrapper{font-size:14px;line-height:21px;transition:opacity .15s,transform .15s,visibility 0s .15s;visibility:visible;opacity:1;transform:translateX(0);padding:15px 20px;color:rgba(255,255,255,.6);transition-delay:0s;display:flex;align-items:center}activity .follow-prompt .wrapper strong{font-weight:700;color:var(--color--accent)}activity .follow-prompt .wrapper em{font-style:normal;color:rgba(255,255,255,.8)}activity .follow-prompt .wrapper.hidden{visibility:hidden;opacity:0;transform:translateX(10px)}activity .follow-prompt button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-size:13px;line-height:20px;font-weight:700;--cta--padding: 11px;--cta--height: 26px;--cta--hover--border-width: 1px;background-color:var(--color--accent) !important;color:var(--theme--background) !important;transition:filter .15s;box-shadow:none !important}activity .follow-prompt button,activity .follow-prompt button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) activity .follow-prompt button{border:1px solid #fff}}activity .follow-prompt button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}activity .follow-prompt button>*:first-child{padding-left:0}activity .follow-prompt button>*:last-child{padding-right:0}activity .follow-prompt button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) activity .follow-prompt button svg *{fill:CanvasText}}activity .follow-prompt button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) activity .follow-prompt button svg{opacity:1}}activity .follow-prompt button img{height:50%}activity .follow-prompt button:disabled{opacity:.3}activity .follow-prompt button:disabled,activity .follow-prompt button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){activity .follow-prompt button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}activity .follow-prompt button:not(:disabled):hover svg{opacity:1}}activity .follow-prompt button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}@media(hover: hover){activity .follow-prompt button:hover{filter:brightness(1.1)}}activity .follow-prompt .prompt span{flex:1 1 auto}activity .follow-prompt .prompt button{margin-left:10px}activity .follow-prompt .followed-message{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;align-items:center}activity .follow-prompt .followed-message span{margin:0 6px;flex:1 1 auto}activity .follow-prompt .followed-message .checkmark svg *{fill:var(--color--accent)}activity .follow-prompt .followed-message .caret{transition:transform .15s ease-in-out}activity .follow-prompt .followed-message .caret svg *{fill:rgba(255,255,255,.4);transition:fill .15s}activity .follow-prompt .followed-message:hover .caret{transform:translateX(3px)}activity .follow-prompt .followed-message:hover .caret svg *{fill:#fff}',
        "",
      ]);
      const r = n;
    },
    "dashboard/resources/elements/announcements.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => r });
      var i = o(8081),
        a = o.n(i),
        s = o(23645),
        n = o.n(s)()(a());
      n.push([
        e.id,
        'announcements{display:block}announcements.hide{display:none}announcements .announcement{background:rgba(var(--theme--highlight--rgb), 0.12);display:flex;align-items:center;padding:20px;text-decoration:none}announcements .announcement,announcements .announcement *{cursor:default}announcements .announcement[href],announcements .announcement[href] *{cursor:pointer}announcements .announcement .icon{margin-right:9px}announcements .announcement .icon>i{display:inline-block}announcements .announcement .icon>i:after{content:"";display:block;clear:both}announcements .announcement .icon>i svg{float:left}announcements .announcement .icon>i svg{max-width:15px;max-height:15px}announcements .announcement .icon>i svg *{color:#fff}announcements .announcement .content{flex:1}announcements .announcement .content,announcements .announcement .content *{font-size:14px;line-height:21px;font-weight:500;color:rgba(255,255,255,.6)}announcements .announcement .content em{font-weight:700;color:var(--theme--highlight);font-style:normal}announcements .announcement .content strong{font-weight:700;color:rgba(255,255,255,.8)}announcements .announcement .content p{margin:0;padding:0}announcements .announcement .content p+p{margin-top:10px}announcements .announcement.alert{background:rgba(var(--color--alert--rgb), 0.12)}announcements .announcement.alert .content em{color:var(--color--alert)}',
        "",
      ]);
      const r = n;
    },
    "dashboard/resources/elements/featured-content.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => m });
      var i = o(8081),
        a = o.n(i),
        s = o(23645),
        n = o.n(s),
        r = o(61667),
        d = o.n(r),
        c = new URL(o(69558), o.b),
        l = new URL(o(4991), o.b),
        h = n()(a()),
        p = d()(c),
        b = d()(l);
      h.push([
        e.id,
        'featured-content .images{width:100%;height:100%;position:absolute;left:0;top:0;z-index:0;overflow:hidden;border-radius:2px}featured-content .images:before{content:"";display:block;position:absolute;left:0;bottom:0;right:0;z-index:1;height:50%;background:linear-gradient(0deg, rgba(17, 23, 29, 0.67) 0%, transparent 100%)}featured-content .images .image{width:100%;height:100%;position:absolute;left:0;top:0;background-position:center;background-size:cover;opacity:0;transform:scale(1.1);transition:opacity .5s,transform .5s}featured-content .images .image:not(.loaded){animation-name:thumbnail-loading;animation-duration:1s;animation-timing-function:linear;animation-direction:alternate;animation-iteration-count:infinite;background-clip:padding-box}featured-content .images .image.show{opacity:1;transform:scale(1)}featured-content .badge{position:absolute;left:20px;top:20px}featured-content .badge>.text{background-color:var(--color--accent);display:inline-block;font-weight:900;font-size:12px;color:#111;line-height:15px;padding:0 4px;border-radius:2.5px;min-width:0;font-style:normal}featured-content .title{font-weight:800;font-size:35px;line-height:40px;font-weight:800;position:absolute;left:0;bottom:30px;width:100%;padding:0 28px;color:#fff;-webkit-text-stroke:1px #000}featured-content .link{position:absolute;left:0;top:0;right:0;bottom:40px;display:block}featured-content .previous-item,featured-content .next-item{display:inline-block;width:40px;height:40px;border:0;border-radius:50%;background:rgba(0,0,0,.35) center/9px no-repeat;transform:scale(1);opacity:1;transition:background-color .15s,opacity .15s,transform .15s;position:absolute;top:50%;margin-top:-20px;z-index:1}featured-content .previous-item:hover,featured-content .next-item:hover{background-color:rgba(var(--theme--highlight--rgb), 0.35)}featured-content .previous-item:active,featured-content .next-item:active{background-color:var(--theme--highlight)}featured-content .previous-item{background-image:url(' +
          p +
          ");background-position-x:calc(50% - 1px);left:20px}featured-content .next-item{background-image:url(" +
          b +
          ");background-position-x:calc(50% + 1px);right:20px}featured-content .dots{position:absolute;left:0;bottom:15px;width:100%;display:flex;justify-content:center}featured-content .dots .dot{flex:0 0 auto;width:8px;height:8px;border-radius:2px;border:1px solid rgba(255,255,255,.6);background:rgba(0,0,0,0);padding:0;transition:border-color .15s,background-color .15s}featured-content .dots .dot,featured-content .dots .dot *{cursor:pointer}featured-content .dots .dot:hover,featured-content .dots .dot.current{background:var(--theme--highlight);border-color:rgba(0,0,0,0)}featured-content .dots .dot+.dot{margin-left:12px}featured-content .dots:hover .dot.current:not(:hover){background:rgba(0,0,0,0);border-color:rgba(255,255,255,.6)}",
        "",
      ]);
      const m = h;
    },
    "dashboard/resources/elements/objectives-progress-bar.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => r });
      var i = o(8081),
        a = o.n(i),
        s = o(23645),
        n = o.n(s)()(a());
      n.push([
        e.id,
        'objectives-progress-bar{display:flex;align-items:center;position:relative}objectives-progress-bar .node{background:var(--color--accent);content:"";display:flex;align-items:center;justify-content:center;width:9px;height:9px;position:absolute;left:0;top:50%;margin-top:-4.5px;border-radius:50%;transition:all .15s}objectives-progress-bar .node i{display:none}objectives-progress-bar .node i svg{width:10px}objectives-progress-bar .node i svg *{fill:var(--theme--background)}@media(forced-colors: active){body:not(.override-contrast-mode) objectives-progress-bar .node{display:none}}objectives-progress-bar.completed .node{width:19px;height:19px;margin-top:-9.5px}objectives-progress-bar.completed .node i{display:inline-block}objectives-progress-bar.completed .count{color:var(--color--accent)}objectives-progress-bar .wrapper{flex:1;border-radius:3px;background:rgba(255,255,255,.2);overflow:hidden}@media(forced-colors: active){body:not(.override-contrast-mode) objectives-progress-bar .wrapper{border:1px solid #fff}}objectives-progress-bar .progress{background:var(--color--accent);height:3px;border-radius:3px;overflow:hidden;transition:width .15s}@media(forced-colors: active){body:not(.override-contrast-mode) objectives-progress-bar .progress{background-color:#fff}}objectives-progress-bar .count{font-size:11px;line-height:16px;font-weight:900;flex:0 0 auto;margin-left:10px;color:rgba(255,255,255,.8)}',
        "",
      ]);
      const r = n;
    },
    "dashboard/resources/elements/objectives.scss": (e, t, o) => {
      o.r(t), o.d(t, { default: () => p });
      var i = o(8081),
        a = o.n(i),
        s = o(23645),
        n = o.n(s),
        r = o(61667),
        d = o.n(r),
        c = new URL(o(81025), o.b),
        l = n()(a()),
        h = d()(c);
      l.push([
        e.id,
        'objectives{position:relative;display:block;margin:-5px 0}objectives.complete objectives-progress-bar,objectives.complete objectives-progress-bar *{cursor:pointer}objectives .items{margin-right:-10px}objectives .objective{--checkbox--checked-color: var(--theme--highlight);--checkbox__label--color: rgba(255, 255, 255, 0.5);display:inline-flex;align-items:center;--checkbox--checked-color: var(--color--accent);border:1px solid rgba(255,255,255,.15);border-radius:100px;padding:8px 15px;transition:background-color .15s,border-color .15s;margin-right:10px}objectives .objective,objectives .objective *{cursor:pointer}objectives .objective,objectives .objective *{cursor:pointer}objectives .objective>*:first-child{margin-right:9px}objectives .objective:hover>*{--checkbox__label--color: #fff}objectives .objective:first-of-type{margin-top:15px}objectives .objective+.objective{margin-top:10px}objectives .objective.complete{cursor:default;background-color:rgba(var(--color--accent--rgb), 0.08);cursor:initial;border-color:rgba(0,0,0,0);--checkbox__label--color: var(--checkbox--checked-color)}objectives .objective.complete .checkbox{border-color:rgba(0,0,0,0)}objectives .objective.complete .checkbox:before{opacity:1}objectives .objective.complete .icon svg *{fill:var(--color--accent)}objectives .objective.complete .label{--checkbox__label--color: var(--color--accent)}objectives .objective:not(.linked){pointer-events:none}objectives .objective:not(.linked),objectives .objective:not(.linked) *{cursor:default}objectives .objective:not(.linked):not(.complete),objectives .objective:not(.linked):not(.complete) *{--checkbox__label--color: rgba(255, 255, 255, 0.5) !important}objectives .objective .label{font-size:13px;line-height:20px;font-weight:500;color:var(--checkbox__label--color);transition:color .15s}objectives .objective .label,objectives .objective .label *{cursor:pointer}objectives .objective .checkbox{display:inline-block;width:15px;height:15px;border:1px solid rgba(255,255,255,.25);border-radius:4px;position:relative;background:rgba(0,0,0,0);transition:background-color .15s;-webkit-appearance:none;width:15px;height:15px;background:rgba(0,0,0,0);border-color:rgba(255,255,255,.25);flex:0 0 auto}objectives .objective .checkbox,objectives .objective .checkbox *{cursor:pointer}objectives .objective .checkbox:checked:before{opacity:1}objectives .objective .checkbox:before{background:var(--checkbox--checked-color);content:"";display:block;position:absolute;left:0;top:0;width:15px;height:11px;opacity:0;-webkit-mask-box-image:url(' +
          h +
          ")}objectives .objective .checkbox:before{left:1px;top:0;width:15px;height:11px;transform:scale(1)}objectives .objective .info-link{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;--cta--height: 15px;--cta--hover--border-width: 1px;min-width:var(--cta--height);width:var(--cta--height);border-radius:50%;justify-content:center;align-items:center;--cta--hover--color: var(--color--accent);margin-left:3px;pointer-events:all;flex:0 0 auto}objectives .objective .info-link,objectives .objective .info-link *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) objectives .objective .info-link{border:1px solid #fff}}objectives .objective .info-link>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}objectives .objective .info-link>*:first-child{padding-left:0}objectives .objective .info-link>*:last-child{padding-right:0}objectives .objective .info-link svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) objectives .objective .info-link svg *{fill:CanvasText}}objectives .objective .info-link svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) objectives .objective .info-link svg{opacity:1}}objectives .objective .info-link img{height:50%}objectives .objective .info-link:disabled{opacity:.3}objectives .objective .info-link:disabled,objectives .objective .info-link:disabled *{cursor:default;pointer-events:none}@media(hover: hover){objectives .objective .info-link:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}objectives .objective .info-link:not(:disabled):hover svg{opacity:1}}objectives .objective .info-link:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}objectives .objective .info-link,objectives .objective .info-link>*{padding:0 !important}objectives .objective .info-link:active{background-color:rgba(0,0,0,0) !important;color:rgba(255,255,255,.8) !important}objectives .objective .pro-badge{background-color:var(--theme--highlight);display:inline-block;font-weight:800;font-size:14px;text-transform:uppercase;color:#fff;line-height:20px;letter-spacing:.6px;padding:0 4px;border-radius:2.5px;min-width:0;text-rendering:geometricPrecision;line-height:14px;font-size:10px;letter-spacing:.4px;padding:0 3px;background:linear-gradient(225deg, var(--color--brand-green) 0%, var(--color--pro) 100%);color:#fff;margin-right:3px;position:relative;top:-1px}@media(forced-colors: active){body:not(.override-contrast-mode) objectives .objective .pro-badge{border:1px solid #fff}}",
        "",
      ]);
      const p = l;
    },
    "dashboard/dashboard.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => i });
      const i =
        '<template> <require from="./dashboard.scss"></require> <require from="./resources/elements/objectives"></require> <require from="./resources/elements/announcements"></require> <require from="./resources/elements/activity"></require> <require from="./resources/elements/featured-content"></require> <require from="./resources/elements/dashboard-free-games"></require> <require from="../cheats/resources/elements/horizontal-game-feed"></require> <require from="../resources/elements/coaching-tip"></require> <section class="dashboard view-background au-animate" css="--game-feeds-visible: ${gameFeedsVisible}"> <div class="overflow-fade__wrapper overflow-fade__wrapper--vertical"> <div class="view-scrollable" overflow-fade="vertical"> <div class="dashboard-layout"> <div class="column"> <featured-content></featured-content> <section class="game-feed" if.bind="myGames.items.length"> <header> <h1> <span class="relative"> ${\'dashboard.my_games\' | i18n} <coaching-tip id="dashboard_my_games" auto-show-initially.bind="true" if.bind="shouldShowMyGamesCoachingTip" highlight-selector=".my-games-feed"> <h5>${\'dashboard.my_games_coaching_tip_header\' | i18n}</h5> <p>${\'dashboard.my_games_coaching_tip_message\' | i18n}</p> </coaching-tip> </span> </h1> <a route-href="route.bind: \'collection\'; params.bind: {previousRoute: \'dashboard\', slug: \'my-games\'}">${\'dashboard.see_all\' | i18n}</a> </header> <article class="my-games-feed"> <horizontal-game-feed items.bind="myGames.items" location="my_games" previous-route="dashboard" parent-route="collection/my-games" metadata-types.bind="[\'platform-icons\', \'status-badges\', \'genres\']"></horizontal-game-feed> </article> </section> <dashboard-free-games if.bind="!myGames.items.length" should-show-coaching-tip.bind="shouldShowMyGamesCoachingTip" max-items.bind="maxItemsPerFeed" feed.bind="freeGames"></dashboard-free-games> <section class="game-feed" if.bind="mostPopular.items.length"> <header> <h1>${\'dashboard.most_popular\' | i18n}</h1> <a route-href="route.bind: \'collection\'; params.bind: {previousRoute: \'dashboard\', slug: \'most-popular\'}">${\'dashboard.see_all\' | i18n}</a> </header> <article> <horizontal-game-feed items.bind="mostPopular.items" location="most_popular" previous-route="dashboard" metadata-types.bind="[\'platform-icons\', \'status-badges\', \'players\']"></horizontal-game-feed> </article> </section> <dashboard-free-games if.bind="myGames.items.length" should-show-coaching-tip.bind="shouldShowMyGamesCoachingTip" max-items.bind="maxItemsPerFeed" feed.bind="freeGames"></dashboard-free-games> </div> <div class="column sections"> <section class="objectives ${objectivesModel.allCompleted ? \'completed\' : \'\'}"> <header><h1>${(objectivesTitle || \'dashboard.objectives\') | i18n}</h1></header> <article class="overflow-fade__wrapper overflow-fade__wrapper--vertical--no-scrollbar"> <div overflow-fade="vertical"> <objectives view-model.ref="objectivesModel" title.bind="objectivesTitle"></objectives> </div> </article> </section> <section class="announcements"> <header> <h1>${\'dashboard.announcements\' | i18n}</h1> <a route-href="route: queue">${\'dashboard.see_queue\' | i18n}</a> </header> <article class="overflow-fade__wrapper overflow-fade__wrapper--vertical--no-scrollbar"> <div overflow-fade="vertical"> <announcements></announcements> <activity></activity> </div> </article> </section> </div> </div> </div> </div> </section> </template> ';
    },
    "dashboard/resources/elements/activity.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => d });
      var i = o(27091),
        a = o.n(i),
        s = new URL(o(47254), o.b),
        n = new URL(o(4991), o.b),
        r = new URL(o(92281), o.b);
      const d =
        "<template> <require from=\"./activity.scss\"></require> <nav class=\"tabs\" if.bind=\"myGamesFeed.length\"> <button class=\"${selectedFeed === 'all' ? 'selected' : ''}\" click.delegate=\"selectedFeed = 'all'\"> <span>${'activity.all' | i18n}</span> </button> <button class=\"${selectedFeed === 'my_games' ? 'selected': ''}\" click.delegate=\"selectedFeed = 'my_games'\"> <span>${'activity.my_games' | i18n}</span> </button> </nav> <div class=\"follow-prompt\" if.bind=\"selectedFeed === 'my_games' && (shouldShowFollowPrompt || followed)\"> <div class=\"prompt wrapper ${followed ? 'hidden' : ''}\"> <span innerhtml.bind=\"'activity.get_notifications_for_games_you_care_about' | i18n | markdown\"></span> <button click.delegate=\"follow()\" disabled.bind=\"followInProgress\">${'activity.follow_all' | i18n}</button> </div> <a class=\"followed-message wrapper ${followed ? '' : 'hidden'}\" href=\"wemod:/settings/notifications\"> <i class=\"checkmark\"><inline-svg src=\"" +
        a()(s) +
        '"></inline-svg></i> <span innerhtml.bind="\'activity.your_notifications_are_set\' | i18n | markdown"></span> <i class="caret"><inline-svg src="' +
        a()(n) +
        '"></inline-svg></i> </a> </div> <div class="items"> <a repeat.for="item of selectedFeedItems" class="item" if.bind="item.type === \'trainer_release\' || item.type === \'trainer_update\'" route-href="route: title; params.bind: {titleId: item.titleId, gameId: item.gameId, previousRoute: \'dashboard\'}" title-link="value.bind: \'activity\'; title-id.bind: item.titleId; game-id.bind: item.gameId;"> <img class="thumbnail ${thumbnailLoaded ? \'loaded\' : \'\'}" fallback-src="' +
        a()(r) +
        '" src.bind="item.titleThumbnail | cdn:{size:120}" load.trigger="thumbnailLoaded = true"> <div class="content"> <template if.bind="item.type === \'trainer_release\'"> ${\'activity.$creator_created_cheats_for\' | i18n:{creator: item.creatorUsername}} </template> <strong> ${item.titleName} <i repeat.for="platformId of item.platformIds" class="platform-icon" title.bind="platformId | platformName"> <inline-svg src.bind="platformId | platformIconSvg"></inline-svg> </i> </strong> <template if.bind="item.type === \'trainer_update\'"> ${\'activity.was_updated_by_$creator\' | i18n:{creator: item.creatorUsername}} </template> <span class="time">${item.happenedAt | i18nElaspedTime}</span> </div> </a> </div> </template> ';
    },
    "dashboard/resources/elements/announcements.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => i });
      const i =
        '<template class="${!announcements.length ? \'hide\' : \'\'}"> <require from="./announcements.scss"></require> <require from="../../../resources/elements/alert-icon.html"></require> <require from="../../../resources/elements/happy-icon.html"></require> <a repeat.for="announcement of announcements" class="announcement ${announcement.type}" href.bind="announcement.url" target="_blank"> <div class="icon"> <alert-icon if.bind="announcement.type == \'alert\'"></alert-icon> <happy-icon else></happy-icon> </div> <div class="content"> <p innerhtml.bind="announcement.message | markdown"></p> </div> </a> </template> ';
    },
    "dashboard/resources/elements/dashboard-free-games.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => i });
      const i =
        '<template> <require from="../../../cheats/resources/elements/game-feed"></require> <require from="../../../resources/elements/coaching-tip"></require> <section class="game-feed"> <header> <h1> <span class="relative"> ${\'dashboard.free_games\' | i18n} <coaching-tip id="dashboard_free_games" auto-show-initially.bind="true" if.bind="shouldShowCoachingTip" highlight-selector=".free-games-feed"> <h5>${\'dashboard.free_games_coaching_tip_header\' | i18n}</h5> <p>${\'dashboard.free_games_coaching_tip_message\' | i18n}</p> </coaching-tip> </span> </h1> <a route-href="route.bind: \'collection\'; params.bind: {previousRoute: \'dashboard\', slug: \'free-games\'}">${\'dashboard.see_all\' | i18n}</a> </header> <article class="free-games-feed"> <game-feed feed.bind="feed" max-items.bind="maxItems" previous-route="dashboard" layout="horizontal" feed-config.bind="ALL_GAMES_CONFIG" filter.bind="{ tags: [\'free\'] }" metadata-types.bind="[\'platform-icons\', \'status-badges\', \'genres\']"></game-feed> </article> </section> </template>';
    },
    "dashboard/resources/elements/featured-content.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => r });
      var i = o(27091),
        a = o.n(i),
        s = new URL(o(4265), o.b),
        n = new URL(o(49714), o.b);
      const r =
        '<template mouseover.delegate="autoplaying = false" mouseout.delegate="autoplaying = true"> <require from="./featured-content.scss"></require> <div class="images"> <div repeat.for="content of featuredContent" class="image ${imageLoaded ? \'loaded\' : \'\'} ${currentFeaturedContent == content ? \'show\' : \'\'}" css="background-image: url(\'${content.image | cdn}\')"> <img style="display:none" src.bind="content.image | cdn" load.trigger="imageLoaded = true"> </div> </div> <div class="badge"> <span class="text" if.bind="currentFeaturedContent.badgeType === \'text\'" css.bind="{background: currentFeaturedContent.badgeColor}">${currentFeaturedContent.badgeText}</span> <span if.bind="currentFeaturedContent.badgeType === \'epic_gotw\'"> <inline-svg src="' +
        a()(s) +
        '"></inline-svg> </span> <span if.bind="currentFeaturedContent.badgeType === \'community_choice\'"> <inline-svg src="' +
        a()(n) +
        '"></inline-svg> </span> </div> <div class="title">${currentFeaturedContent.title}</div> <button class="previous-item" click.delegate="previous()"></button> <button class="next-item" click.delegate="next()"></button> <a if.bind="currentFeaturedContent.url !== null" class="link" click.delegate="open($event)" href="#"></a> <div class="dots"> <button repeat.for="content of featuredContent" class="dot ${content == currentFeaturedContent ? \'current\' : \'\'}" click.delegate="change(content)"></button> </div> </template> ';
    },
    "dashboard/resources/elements/objectives-progress-bar.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => n });
      var i = o(27091),
        a = o.n(i),
        s = new URL(o(47254), o.b);
      const n =
        '<template class="${completed >= total ? \'completed\' : \'\'}"> <require from="./objectives-progress-bar.scss"></require> <div class="node"> <i><inline-svg src="' +
        a()(s) +
        '"></inline-svg></i> </div> <div class="wrapper"> <div class="progress" css="width: ${completed / total * 100}%"></div> </div> <div class="count"> ${completed} / ${total} </div> </template>';
    },
    "dashboard/resources/elements/objectives.html": (e, t, o) => {
      o.r(t), o.d(t, { default: () => n });
      var i = o(27091),
        a = o.n(i),
        s = new URL(o(23717), o.b);
      const n =
        '<template class="${completedCount >= completableCount ? \'complete\' : \'\'}"> <require from="./objectives.scss"></require> <require from="./objectives-progress-bar"></require> <div class="objectives-container"> <objectives-progress-bar total.bind="completableCount" completed.bind="completedCount" click.delegate="toggleShowCompleted()" tabindex="0"></objectives-progress-bar> <div class="items"> <div repeat.for="objective of objectives" if.bind="!objective.hidden" class="objective ${objective.completed ? \'complete\' : \'\'} objective-${objective.id.replace(\'_\', \'-\')} ${objective.goto ? \'linked\' : \'\'}" click.delegate="gotoObjective(objective)" tabindex="0"> <i if.bind="objective.icon" class="icon"> <inline-svg src.bind="objective.icon"></inline-svg> </i> <span else if.bind="objective.flags || objective.checkCompleted" class="checkbox"></span> <span class="label"> <span if.bind="objective.pro && !objective.completed" class="pro-badge">${\'objectives.pro\' | i18n}</span> ${(\'objectives.objective_\' + objective.id) | i18n} <button class="info-link" if.bind="objective.infoLink && !objective.completed" click.delegate="gotoInfoLink($event, objective)"> <i> <inline-svg src="' +
        a()(s) +
        '"></inline-svg> </i> </button> </span> </div> </div> </div> </template> ';
    },
    "dashboard/dashboard": (e, t, o) => {
      o.r(t), o.d(t, { Dashboard: () => l });
      var i = o(70655),
        a = o("aurelia-framework"),
        s = o(86433),
        n = o(81866),
        r = o(74036),
        d = o(93082),
        c = o(39431);
      let l = class {
        #e;
        #t;
        constructor(e, t, o) {
          (this.router = t),
            (this.maxItemsPerFeed = 10),
            (this.#e = e),
            (this.#t = o);
        }
        attached() {
          this.#e.screenView({
            name: "Dashboard",
            class: "Dashboard",
            params: {
              installed_games:
                Object.values(this.state.installedGameVersions).length > 0,
            },
          });
        }
        bind() {
          (this.myGames = this.#t.getFilteredFeed(r.sq, { maxItems: 10 })),
            (this.mostPopular = this.#t.getFilteredFeed(r.aC, {
              maxItems: 10,
            }));
        }
        detached() {
          this.myGames.dispose(), this.mostPopular.dispose();
        }
        get gameFeedsVisible() {
          return (
            1 +
            (this.myGames?.items.length ? 1 : 0) +
            (this.freeGames?.items.length ? 1 : 0)
          );
        }
        get shouldShowMyGamesCoachingTip() {
          return (
            0 ===
            Object.values(this.state.gameHistory).filter(
              (e) => !!e.lastPlayedAt
            ).length
          );
        }
        get shouldShowFreeGamesCoachingTip() {
          return (
            0 === this.myGames?.items.length &&
            !!this.state.timestamps.appsRefreshedAt
          );
        }
      };
      (0, i.gn)(
        [
          (0, a.computedFrom)(
            "myGames.items",
            "mostPopular",
            "freeGames.items"
          ),
          (0, i.w6)("design:type", Number),
          (0, i.w6)("design:paramtypes", []),
        ],
        l.prototype,
        "gameFeedsVisible",
        null
      ),
        (0, i.gn)(
          [
            (0, a.computedFrom)("state.gameHistory"),
            (0, i.w6)("design:type", Boolean),
            (0, i.w6)("design:paramtypes", []),
          ],
          l.prototype,
          "shouldShowMyGamesCoachingTip",
          null
        ),
        (0, i.gn)(
          [
            (0, a.computedFrom)("myGames.items", "timestamps.appsRefreshedAt"),
            (0, i.w6)("design:type", Boolean),
            (0, i.w6)("design:paramtypes", []),
          ],
          l.prototype,
          "shouldShowFreeGamesCoachingTip",
          null
        ),
        (l = (0, i.gn)(
          [
            (0, d.b)((e) =>
              e.state.pipe(
                (0, c.s)(
                  "catalog",
                  "gameHistory",
                  "installedGameVersions",
                  "gameHistory",
                  "timestamps"
                )
              )
            ),
            (0, a.autoinject)(),
            (0, i.w6)("design:paramtypes", [n.cp, s.F0, r.AD]),
          ],
          l
        ));
    },
    "dashboard/resources/elements/activity": (e, t, o) => {
      o.r(t), o.d(t, { Activity: () => m });
      var i = o(70655),
        a = o("aurelia-framework"),
        s = o(45437),
        n = o(69157),
        r = o(81866),
        d = o(19748),
        c = o(74036),
        l = o(2314),
        h = o(93082),
        p = o(51722),
        b = o(27170);
      let m = class {
        #o;
        #i;
        #e;
        #a;
        constructor(e, t, o, i) {
          (this.followed = !1),
            (this.followInProgress = !1),
            (this.#o = e),
            (this.#i = t),
            (this.#e = o),
            (this.#a = i);
        }
        attached() {
          (this.myGamesActivityFeed = this.#o.getFilteredFeed(c.Wz, {})),
            this.#s(),
            this.#n();
        }
        detached() {
          this.myGamesActivityFeed?.dispose();
        }
        catalogChanged() {
          this.#s();
        }
        #s() {
          const e = Object.values(this.catalog.games)
              .filter((e) => (0, p.yE)(e.flags, l.p.Available))
              .sort((e, t) =>
                t.trainer.updatedAt.localeCompare(e.trainer.updatedAt)
              ),
            t = [];
          let o;
          for (const i of e)
            if (o?.titleId === i.titleId)
              o.platformIds.includes(i.platformId) ||
                o.platformIds.push(i.platformId);
            else if (((o = this.#r(i)), t.push(o), 10 === t.length)) break;
          this.feed = t;
        }
        #r(e) {
          const t = this.catalog.titles[e.titleId],
            o = this.catalog.creators[e.creatorId];
          return {
            type:
              e.trainer.createdAt === e.trainer.updatedAt
                ? "trainer_release"
                : "trainer_update",
            titleId: t.id,
            titleName: t.name,
            titleThumbnail: t.thumbnail,
            gameId: e.id,
            creatorUsername: o.username,
            creatorAvatar: o.avatar,
            happenedAt: e.trainer.updatedAt,
            platformIds: [e.platformId],
          };
        }
        get myGamesFeed() {
          return this.myGamesActivityFeed
            ? this.myGamesActivityFeed.items
                .slice(0, 10)
                .map((e) => ({
                  type:
                    e.createdAt === e.updatedAt
                      ? "trainer_release"
                      : "trainer_update",
                  titleId: e.titleId,
                  titleName: e.titleName,
                  titleThumbnail: e.titleThumbnail,
                  gameId: e.gameId,
                  creatorUsername: e.creator,
                  creatorAvatar: e.creatorAvatar,
                  happenedAt: e.updatedAt,
                  platformIds: e.platformIds,
                }))
            : [];
        }
        #n() {
          if (((this.selectedFeed = "all"), this.myGamesFeed[0])) {
            const e = Date.now(),
              t = (0, n.Z)(new Date(this.myGamesFeed[0].happenedAt), e) <= 7,
              o = (0, n.Z)(new Date(this.lastMyGamesActivityFeedSeen), e) <= 7;
            !t ||
              (this.lastMyGamesActivityFeedSeen && o) ||
              (this.selectedFeed = "my_games");
          }
        }
        selectedFeedChanged() {
          "my_games" === this.selectedFeed &&
            this.#i.dispatch(b.JC, "lastMyGamesActivityFeedSeen");
        }
        get selectedFeedItems() {
          return this.feed && this.myGamesActivityFeed
            ? "all" === this.selectedFeed
              ? this.feed
              : this.myGamesFeed
            : [];
        }
        get shouldShowFollowPrompt() {
          return (
            !this.lastFollowedMyGames &&
            this.myGamesActivityFeed?.items.length > 0
          );
        }
        async follow() {
          if (!this.followInProgress) {
            let e;
            this.followInProgress = !0;
            try {
              (e = this.#o.getFilteredFeed(c.ly)), e.updateItems();
              const t = e.items.map((e) => e.gameId),
                o = [...new Set(t)];
              await this.#a.followGames(o, 2),
                await this.#i.dispatch(b.JC, "lastFollowedMyGames"),
                this.#e.event("my_games_dashboard_follow", {}, r.$9),
                (this.followed = !0);
            } catch {
            } finally {
              (this.followInProgress = !1), e?.dispose();
            }
          }
        }
      };
      (0, i.gn)(
        [a.observable, (0, i.w6)("design:type", String)],
        m.prototype,
        "selectedFeed",
        void 0
      ),
        (0, i.gn)(
          [
            (0, a.computedFrom)("myGamesActivityFeed.items"),
            (0, i.w6)("design:type", Array),
            (0, i.w6)("design:paramtypes", []),
          ],
          m.prototype,
          "myGamesFeed",
          null
        ),
        (0, i.gn)(
          [
            (0, a.computedFrom)("selectedFeed", "feed", "myGamesFeed"),
            (0, i.w6)("design:type", Array),
            (0, i.w6)("design:paramtypes", []),
          ],
          m.prototype,
          "selectedFeedItems",
          null
        ),
        (0, i.gn)(
          [
            (0, a.computedFrom)(
              "lastFollowedMyGames",
              "myGamesActivityFeed.items"
            ),
            (0, i.w6)("design:type", Boolean),
            (0, i.w6)("design:paramtypes", []),
          ],
          m.prototype,
          "shouldShowFollowPrompt",
          null
        ),
        (m = (0, i.gn)(
          [
            (0, h.b)({
              selectors: {
                catalog: (0, h.g)("catalog"),
                lastMyGamesActivityFeedSeen: (0, h.g)(
                  "timestamps",
                  "lastMyGamesActivityFeedSeen"
                ),
                lastFollowedMyGames: (0, h.g)(
                  "timestamps",
                  "lastFollowedMyGames"
                ),
              },
            }),
            (0, a.autoinject)(),
            (0, i.w6)("design:paramtypes", [c.AD, s.yh, r.cp, d.r]),
          ],
          m
        ));
    },
    "dashboard/resources/elements/announcements": (e, t, o) => {
      o.r(t), o.d(t, { Announcements: () => r });
      var i = o(70655),
        a = o("aurelia-framework"),
        s = o(26020),
        n = o(93082);
      let r = class {
        #d;
        #c;
        constructor(e) {
          this.#d = e;
        }
        #s() {
          this.announcements = this.catalog.announcements.filter((e) =>
            this.#d.isApplicable(e)
          );
        }
        bind() {
          (this.#c = this.#d.onReevaluationRequired(() => this.#s())),
            this.#s();
        }
        unbind() {
          this.#c.dispose(), (this.#c = null);
        }
        catalogChanged() {
          this.#s();
        }
      };
      r = (0, i.gn)(
        [
          (0, n.b)({ selectors: { catalog: (0, n.g)("catalog") } }),
          (0, a.autoinject)(),
          (0, i.w6)("design:paramtypes", [s.W]),
        ],
        r
      );
    },
    "dashboard/resources/elements/dashboard-free-games": (e, t, o) => {
      o.r(t), o.d(t, { DashboardFreeGames: () => n });
      var i = o(70655),
        a = o("aurelia-framework"),
        s = o(74036);
      class n {
        constructor() {
          this.ALL_GAMES_CONFIG = s.Bd;
        }
      }
      (0, i.gn)(
        [
          (0, a.bindable)({ defaultBindingMode: a.bindingMode.toView }),
          (0, i.w6)("design:type", Boolean),
        ],
        n.prototype,
        "shouldShowCoachingTip",
        void 0
      ),
        (0, i.gn)(
          [
            (0, a.bindable)({ defaultBindingMode: a.bindingMode.toView }),
            (0, i.w6)("design:type", Number),
          ],
          n.prototype,
          "maxItems",
          void 0
        ),
        (0, i.gn)(
          [
            (0, a.bindable)({ defaultBindingMode: a.bindingMode.twoWay }),
            (0, i.w6)("design:type", s._k),
          ],
          n.prototype,
          "feed",
          void 0
        );
    },
    "dashboard/resources/elements/featured-content": (e, t, o) => {
      o.r(t), o.d(t, { FeaturedContent: () => c });
      var i = o(70655),
        a = o("aurelia-framework"),
        s = o(81866),
        n = o(26020),
        r = o(93082),
        d = o(11912);
      let c = class {
        #e;
        #d;
        #c;
        constructor(e, t) {
          (this.autoplaying = !0),
            (this.autoplayDuration = 5e3),
            (this.next = this.next.bind(this)),
            (this.previous = this.previous.bind(this)),
            (this.#e = e),
            (this.#d = t);
        }
        attached() {
          (this.#c = this.#d.onReevaluationRequired(() => this.#s())),
            this.#l();
        }
        detached() {
          this.autoplayInterval.dispose(), this.#c.dispose(), (this.#c = null);
        }
        bind() {
          this.#s(), this.change(this.featuredContent[0]);
        }
        catalogChanged() {
          this.#s();
        }
        #s() {
          this.featuredContent = this.catalog.featured.filter((e) =>
            this.#d.isApplicable(e)
          );
          const e = this.currentFeaturedContent
            ? this.featuredContent.findIndex(
                (e) => e.title === this.currentFeaturedContent.title
              )
            : 0;
          e >= 0 && e < this.featuredContent.length
            ? this.change(this.featuredContent[e])
            : this.change(this.featuredContent[0]);
        }
        change(e) {
          (this.currentFeaturedContent = e), this.#l();
        }
        open(e) {
          e.preventDefault();
          const t = this.currentFeaturedContent;
          t &&
            (window.open(t.url, t.url.startsWith("http") ? "_blank" : void 0),
            this.#e.event("featured_content_click", {
              id: t.id,
              title: t.title,
              url: t.url,
              position: this.featuredContent.indexOf(t),
            }));
        }
        next() {
          if (!this.featuredContent) return;
          let e = this.featuredContent.indexOf(this.currentFeaturedContent) + 1;
          e > this.featuredContent.length - 1 && (e = 0),
            (this.currentFeaturedContent = this.featuredContent[e]);
        }
        previous() {
          if (!this.featuredContent) return;
          let e = this.featuredContent.indexOf(this.currentFeaturedContent) - 1;
          e < 0 && (e = this.featuredContent.length - 1),
            (this.currentFeaturedContent = this.featuredContent[e]);
        }
        #l() {
          this.autoplayInterval?.dispose(),
            (this.autoplayInterval = (0, d.tI)(() => {
              this.autoplaying && this.next();
            }, this.autoplayDuration));
        }
      };
      c = (0, i.gn)(
        [
          (0, r.b)({ selectors: { catalog: (0, r.g)("catalog") } }),
          (0, a.autoinject)(),
          (0, i.w6)("design:paramtypes", [s.cp, n.W]),
        ],
        c
      );
    },
    "dashboard/resources/elements/objectives-progress-bar": (e, t, o) => {
      o.r(t), o.d(t, { ObjectivesProgressBar: () => s });
      var i = o(70655),
        a = o("aurelia-framework");
      class s {}
      (0, i.gn)(
        [a.bindable, (0, i.w6)("design:type", Number)],
        s.prototype,
        "total",
        void 0
      ),
        (0, i.gn)(
          [a.bindable, (0, i.w6)("design:type", Number)],
          s.prototype,
          "completed",
          void 0
        );
    },
    "dashboard/resources/elements/objectives": (e, t, o) => {
      o.r(t), o.d(t, { Objectives: () => $ });
      var i,
        a = o(70655),
        s = o("aurelia-event-aggregator"),
        n = o("aurelia-framework"),
        r = o(45437),
        d = o(69157),
        c = o(85882),
        l = o(81866),
        h = o(87632),
        p = o(76330),
        b = o("dialogs/leave-feedback-dialog"),
        m = o(62522),
        g = o(29242),
        f = o(81110),
        u = o(2314),
        v = o(15524),
        y = o(35969),
        w = o(93082),
        x = o(51722),
        k = o(27170),
        j = o(11912),
        _ = o(82579),
        C = o(80871),
        F = o(24289);
      let A = null,
        I = null,
        G = null,
        $ = (i = class {
          #h;
          #p;
          #b;
          #m;
          #g;
          #f;
          #i;
          #u;
          #e;
          #v;
          constructor(e, t, o, i, a, s, n, r, d) {
            (this.showCompleted = !1),
              (this.#p = e),
              (this.#b = t),
              (this.#m = o),
              (this.#g = i),
              (this.#f = a),
              (this.#i = s),
              (this.#u = n),
              (this.#e = r),
              (this.#v = d);
          }
          get allCompleted() {
            return this.completableCount === this.completedCount;
          }
          bind() {
            this.#s();
          }
          attached() {
            (this.#h = new j.K4().push(
              this.#u.onStatusChanged((e) => {
                e === p.d.Connected && ((i.remoteHasConnected = !0), this.#s());
              })
            )),
              this.#u.status === p.d.Connected &&
                ((i.remoteHasConnected = !0), this.#s());
          }
          detached() {
            this.#h.dispose(), (this.#h = null);
          }
          accountFlagsChanged() {
            this.#s();
          }
          overlayAppChanged() {
            this.#s();
          }
          hasUsedInteractiveControlsChanged() {
            this.#s();
          }
          gameHistoryChanged() {
            this.#s();
          }
          installedGamesChanged() {
            this.#s();
          }
          hasUsedHotkeysChanged() {
            this.#s();
          }
          hasVisitedFacebookChanged() {
            this.#s();
          }
          hasVisitedTwitterChanged() {
            this.#s();
          }
          hasVisitedYouTubeChanged() {
            this.#s();
          }
          #s() {
            const e = this.#y(),
              t = e.filter(
                (e) => !(e.hidden || (!e.flags && !e.checkCompleted))
              );
            (this.completableCount = t.length),
              (this.completedCount = t.filter(
                (e) => (
                  (e.completed = e.checkCompleted
                    ? e.checkCompleted()
                    : (0, x.yE)(this.accountFlags, e.flags)),
                  e.completed
                )
              ).length),
              this.completedCount !== this.completableCount ||
                this.showCompleted ||
                e.filter((e) => e.completed).forEach((e) => (e.hidden = !0)),
              (this.objectives = e.sort((e, t) =>
                e.completed && !t.completed
                  ? 1
                  : !e.completed && t.completed
                  ? -1
                  : 0
              )),
              this.#w("get_started")
                ? this.#w("profile")
                  ? this.account.subscription && !this.#w("pro")
                    ? (this.title = "objectives.get_started_with_pro")
                    : (this.title = void 0)
                  : (this.title = "objectives.complete_your_profile")
                : (this.title = "objectives.get_started"),
              this.#x();
          }
          gotoObjective(e) {
            this.#m.publish(new g.Ax(e.id, e.completed || !1)),
              e.goto &&
                ("string" == typeof e.goto
                  ? window.open(e.goto, "_blank")
                  : e.goto(e));
          }
          gotoInfoLink(e, t) {
            e.stopPropagation(), window.open(t.infoLink, "_blank");
          }
          #y() {
            const e = Object.keys(this.installedGameVersions).length > 0;
            return [
              {
                id: "play_a_game",
                checkCompleted: () =>
                  Object.keys(this.gameHistory).some((e) => {
                    const t = this.catalog.games[e];
                    return !!t && (0, x.yE)(t.flags, u.p.Available);
                  }),
                goto: e
                  ? "wemod://collection/my-games"
                  : "wemod://collection/free-games",
                group: "get_started",
              },
              {
                id: "use_hotkeys",
                checkCompleted: () => !!this.hasUsedHotkeys,
                goto: e
                  ? "wemod://collection/my-games"
                  : "wemod://collection/free-games",
                infoLink: "https://wemod.gg/hotkeys",
                group: "get_started",
              },
              {
                id: "try_pro",
                flags: 2048,
                goto: (0, x.yE)(this.accountFlags, 2048)
                  ? null
                  : () =>
                      this.#f.open({
                        trigger: "objective",
                        nonInteraction: !1,
                      }),
                hidden: !!this.account.subscription,
              },
              {
                id: "set_username",
                flags: 1,
                goto: "wemod://settings/account/profile",
                group: "profile",
              },
              {
                id: "set_profile_image",
                flags: 16,
                goto: "wemod://settings/account/profile",
                group: "profile",
              },
              {
                id: "set_email",
                flags: 4,
                goto: "wemod://settings/account/profile",
                group: "profile",
              },
              {
                id: "set_password",
                flags: 8,
                goto: "wemod://settings/account/password",
                group: "profile",
              },
              {
                id: "connect_remote",
                checkCompleted: () =>
                  i.remoteHasConnected || (0, x.yE)(this.account.flags, 1024),
                goto: () => this.#m.publish("open-remote-tooltip"),
                infoLink: "https://wemod.gg/support-remote",
                hidden: !this.account.subscription,
                pro: !0,
                group: "pro",
              },
              {
                id: "install_overlay",
                checkCompleted: () => !!this.overlayApp,
                goto: () => this.#m.publish("open-overlay-tooltip"),
                infoLink: "https://wemod.gg/support-overlay",
                hidden: !this.account.subscription,
                pro: !0,
                group: "pro",
              },
              {
                id: "boost_a_game",
                flags: 4096,
                goto: "wemod://queue",
                infoLink: "https://wemod.gg/support-queue",
                hidden:
                  !this.account.subscription ||
                  (!(0, x.yE)(this.account.flags, 4096) &&
                    !this.account.boosts),
                pro: !0,
                group: "pro",
              },
              {
                id: "use_interactive_controls",
                checkCompleted: () => !!this.hasUsedInteractiveControls,
                infoLink: "https://wemod.gg/support-controls",
                hidden: !this.account.subscription,
                pro: !0,
                group: "pro",
              },
              {
                id: "leave_feedback",
                flags: 32,
                goto: () => this.#b.open(),
                hidden:
                  (0, d.Z)(new Date(this.account.joinedAt), Date.now()) < 14 ||
                  !this.#g.isDefaultLanguage(),
              },
              {
                id: "join_discord",
                flags: 256,
                goto: (e) => {
                  window.open("website://account/connections#auth", "_blank"),
                    e.completed || this.#p.watchFlag(256, 30);
                },
              },
              {
                id: "join_community",
                flags: 128,
                goto: (e) => {
                  window.open("https://community.wemod.com", "_blank"),
                    e.completed || this.#p.watchFlag(128, 30);
                },
              },
              {
                id: "like_on_facebook",
                icon: _,
                checkCompleted: () => this.hasVisitedFacebook,
                goto: (e) => {
                  window.open(
                    "https://www.facebook.com/v2.12/plugins/error/confirm/like?iframe_referer=https%3A%2F%2Fwww.wemod.com&kid_directed_site=false&secure=true&plugin=like&return_params=%7B%22app_id%22%3A%22113869198637480%22%2C%22container_width%22%3A%22734%22%2C%22href%22%3A%22https%3A%2F%2Fwww.facebook.com%2FWeModGames%22%2C%22layout%22%3A%22button_count%22%2C%22locale%22%3A%22en_US%22%2C%22sdk%22%3A%22joey%22%2C%22share%22%3A%22false%22%2C%22show_faces%22%3A%22false%22%2C%22size%22%3A%22large%22%2C%22ret%22%3A%22sentry%22%2C%22act%22%3A%22like%22%7D",
                    "_blank"
                  ),
                    e.completed ||
                      this.#i.dispatch(k.V0, "hasVisitedFacebook", !0);
                },
              },
              {
                id: "follow_on_twitter",
                icon: C,
                checkCompleted: () => this.hasVisitedTwitter,
                goto: (e) => {
                  window.open("https://twitter.com/wemod", "_blank"),
                    e.completed ||
                      this.#i.dispatch(k.V0, "hasVisitedTwitter", !0);
                },
              },
              {
                id: "subscribe_on_youtube",
                icon: F,
                checkCompleted: () => this.hasVisitedYouTube,
                goto: (e) => {
                  window.open(
                    "https://www.youtube.com/c/WeModGames?sub_confirmation=1",
                    "_blank"
                  ),
                    e.completed ||
                      this.#i.dispatch(k.V0, "hasVisitedYouTube", !0);
                },
              },
            ];
          }
          toggleShowCompleted() {
            this.completedCount >= this.completableCount &&
              ((this.showCompleted = !this.showCompleted), this.#s());
          }
          #w(e) {
            return this.objectives
              .filter((t) => t.group === e && !t.hidden)
              .every((e) => e.completed);
          }
          #x() {
            const e = this.objectives.filter((e) =>
                ["get_started", "profile"].includes(e.group)
              ),
              t = (
                (e.filter((e) => !!e.completed).length / e.length) *
                100
              ).toFixed(2);
            t !== I && ((I = t), this.#e.user("objective_percent_free", t));
            const o = this.objectives.filter((e) => "pro" === e.group),
              i = (
                (o.filter((e) => !!e.completed).length / o.length) *
                100
              ).toFixed(2);
            if (
              (i !== G && ((G = i), this.#e.user("objective_percent_pro", i)),
              !this.#v.isInTraySinceStartup)
            ) {
              const e = Object.fromEntries(
                  this.objectives.map((e) => [
                    `objective_${e.id}`,
                    !!e.completed,
                  ])
                ),
                t = JSON.stringify(e);
              t !== A &&
                ((A = t), this.#e.event("objective_completion", e, l.$9));
            }
          }
        });
      (0, a.gn)(
        [
          (0, n.bindable)({ defaultBindingMode: n.bindingMode.fromView }),
          (0, a.w6)("design:type", String),
        ],
        $.prototype,
        "title",
        void 0
      ),
        (0, a.gn)(
          [
            (0, n.computedFrom)("completableCount", "completedCount"),
            (0, a.w6)("design:type", Boolean),
            (0, a.w6)("design:paramtypes", []),
          ],
          $.prototype,
          "allCompleted",
          null
        ),
        ($ = i =
          (0, a.gn)(
            [
              (0, w.b)({
                selectors: {
                  account: (0, w.g)("account"),
                  accountFlags: (0, w.g)("account", "flags"),
                  overlayApp: (0, w.g)(
                    "installedApps",
                    new v.h("uwp", h.bf).toString()
                  ),
                  hasUsedInteractiveControls: (0, w.g)(
                    "flags",
                    "hasUsedInteractiveControls"
                  ),
                  gameHistory: (0, w.g)("gameHistory"),
                  installedGameVersions: (0, w.g)("installedGameVersions"),
                  hasUsedHotkeys: (0, w.g)("flags", "hasUsedHotkeys"),
                  hasVisitedFacebook: (0, w.g)("flags", "hasVisitedFacebook"),
                  hasVisitedTwitter: (0, w.g)("flags", "hasVisitedTwitter"),
                  hasVisitedYouTube: (0, w.g)("flags", "hasVisitedYouTube"),
                  catalog: (0, w.g)("catalog"),
                },
              }),
              (0, n.autoinject)(),
              (0, a.w6)("design:paramtypes", [
                c.B,
                b.LeaveFeedbackDialogService,
                s.h,
                y.oc,
                m.x,
                r.yh,
                p.K,
                l.cp,
                f.f,
              ]),
            ],
            $
          ));
    },
  },
]);

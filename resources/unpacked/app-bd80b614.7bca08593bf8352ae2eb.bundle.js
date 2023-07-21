"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [9853],
  {
    "queue/queue.scss": (e, t, i) => {
      i.r(t), i.d(t, { default: () => s });
      var a = i(8081),
        o = i.n(a),
        u = i(23645),
        n = i.n(u)()(o());
      n.push([
        e.id,
        'section.queue h1{font-weight:800;font-size:35px;line-height:40px;font-weight:800;color:#fff;display:inline-flex;align-items:center;margin-bottom:33px;display:flex;color:#fff;margin-bottom:13px}section.queue h1>*+*{margin-left:15px;line-height:0}section.queue h1 .actions{flex:1;display:flex;justify-content:flex-end}section.queue h1 info-tooltip{margin-top:6px}section.queue h2{font-weight:800;font-size:21px;line-height:30px;font-weight:700;color:#fff;margin-bottom:13px;display:block}section.queue .layout{display:flex}section.queue .layout .left{flex:1 1 60%;margin-right:15px;overflow:hidden}section.queue .layout .right{margin-left:15px;flex:0 1 440px;overflow:hidden}section.queue .layout .right>h2:first-child{margin-top:68px}section.queue .filter-tabs{display:inline-flex;margin-bottom:33px;padding-top:15px;border-top:2px solid rgba(255,255,255,.15)}section.queue .filter-tabs button{font-weight:700;font-size:15px;line-height:24px;font-weight:700;background:rgba(0,0,0,0);border:none;outline:0;display:inline-flex;align-items:center;opacity:.4;transition:opacity .15s;color:#fff;padding:0 10px}section.queue .filter-tabs button,section.queue .filter-tabs button *{cursor:pointer}section.queue .filter-tabs button:first-child{padding-left:0}section.queue .filter-tabs button:last-of-type{padding-right:0}section.queue .filter-tabs button>*+*{margin-left:11px}section.queue .filter-tabs button i{display:inline-block;width:15px;height:15px;display:inline-flex;justify-content:center;align-items:center}section.queue .filter-tabs button i:after{content:"";display:block;clear:both}section.queue .filter-tabs button i svg{float:left}section.queue .filter-tabs button i svg{max-width:15px;max-height:15px}section.queue .filter-tabs button i svg *{color:#fff}section.queue .filter-tabs button svg *{fill:#fff}section.queue .filter-tabs button:hover{opacity:1}section.queue .filter-tabs button.current{opacity:1;pointer-events:none}section.queue .queue-items{padding:20px;border-radius:10px;background:rgba(255,255,255,.04);overflow:hidden}@media(forced-colors: active){body:not(.override-contrast-mode) section.queue .queue-items{border:1px solid #fff}}section.queue .queue-items .queue-item{display:flex;position:relative;padding:15px 0}section.queue .queue-items .queue-item:nth-child(1n+0) img{animation-delay:0.1s}section.queue .queue-items .queue-item:nth-child(2n+0) img{animation-delay:0.2s}section.queue .queue-items .queue-item:nth-child(3n+0) img{animation-delay:0.3s}section.queue .queue-items .queue-item:nth-child(4n+0) img{animation-delay:0.4s}section.queue .queue-items .queue-item:nth-child(5n+0) img{animation-delay:0.5s}section.queue .queue-items .queue-item:nth-child(6n+0) img{animation-delay:0.6s}section.queue .queue-items .queue-item:nth-child(7n+0) img{animation-delay:0.7s}section.queue .queue-items .queue-item:nth-child(8n+0) img{animation-delay:0.8s}section.queue .queue-items .queue-item:nth-child(9n+0) img{animation-delay:0.9s}section.queue .queue-items .queue-item:first-child{padding-top:0}section.queue .queue-items .queue-item:last-child{padding-bottom:0}section.queue .queue-items .queue-item+.queue-item{border-top:1px solid rgba(255,255,255,.1)}section.queue .queue-items .queue-item .position{font-weight:800;font-size:35px;line-height:40px;font-weight:800;flex:0 0 52px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.25);width:32px;padding-right:20px}section.queue .queue-items .queue-item .game{--game__row--color: rgba(255, 255, 255, 0.7);--game__meta--color: rgba(255, 255, 255, 0.4);--game__thumbnail--border-color: transparent;display:flex;flex-direction:row;flex:1 1 auto;min-width:0}section.queue .queue-items .queue-item .game,section.queue .queue-items .queue-item .game *{cursor:pointer}section.queue .queue-items .queue-item .game i{display:inline-block;width:15px;height:15px;display:inline-flex;justify-content:center;align-items:center}section.queue .queue-items .queue-item .game i:after{content:"";display:block;clear:both}section.queue .queue-items .queue-item .game i svg{float:left}section.queue .queue-items .queue-item .game i svg{max-width:15px;max-height:15px}section.queue .queue-items .queue-item .game i svg *{color:#fff}section.queue .queue-items .queue-item .game i svg *{fill:rgba(255,255,255,.4);transition:fill .15s}section.queue .queue-items .queue-item .game>*:nth-child(1){margin-right:20px;flex:0 0 auto}section.queue .queue-items .queue-item .game>*:nth-child(2){display:flex;flex-direction:column;flex:1 1 auto;position:relative;padding:5px 0;overflow:hidden}section.queue .queue-items .queue-item .game:hover{--game__row--color: #fff;--game__meta--color: rgba(255, 255, 255, 0.6);--game__thumbnail--border-color: var(--theme--highlight)}section.queue .queue-items .queue-item .game:hover i svg *{fill:rgba(255,255,255,.6)}section.queue .queue-items .queue-item .game,section.queue .queue-items .queue-item .game *{text-decoration:none}section.queue .queue-items .queue-item .game .thumbnail{width:var(--game__thumbnail--width);height:var(--game__thumbnail--height);border-radius:var(--game__thumbnail--border-radius);border:1px solid var(--game__thumbnail--border-color);transition:border-color .15s;display:inline-block;background:rgba(0,0,0,.1);width:131px;height:61px;border-radius:5px}section.queue .queue-items .queue-item .game .thumbnail:not(.loaded){animation-name:thumbnail-loading;animation-duration:1s;animation-timing-function:linear;animation-direction:alternate;animation-iteration-count:infinite;background-clip:padding-box}section.queue .queue-items .queue-item .game .name,section.queue .queue-items .queue-item .game .creator{font-size:14px;line-height:21px;line-height:19px;font-weight:500;flex:0 0 auto;display:flex;align-items:center;color:var(--game__row--color);transition:color .15s;overflow:hidden}section.queue .queue-items .queue-item .game .name>*+*,section.queue .queue-items .queue-item .game .creator>*+*{margin-left:18px}section.queue .queue-items .queue-item .game .name>*>*+*,section.queue .queue-items .queue-item .game .creator>*>*+*{margin-left:10px}section.queue .queue-items .queue-item .game .name>i:last-of-type:not(:first-of-type),section.queue .queue-items .queue-item .game .creator>i:last-of-type:not(:first-of-type){margin-left:18px}section.queue .queue-items .queue-item .game .name b,section.queue .queue-items .queue-item .game .creator b{font-weight:700}section.queue .queue-items .queue-item .game .name>*,section.queue .queue-items .queue-item .game .creator>*{flex:0 1 auto;display:flex;align-items:center;min-width:0}section.queue .queue-items .queue-item .game .avatar{width:16px;height:16px;border-radius:50%;overflow:hidden}section.queue .queue-items .queue-item .game .name label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}section.queue .queue-items .queue-item .game .creator .username{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}section.queue .queue-items .queue-item .game .creator .username,section.queue .queue-items .queue-item .game .creator .time label{font-size:12px;line-height:18px;font-weight:500;color:var(--game__meta--color);transition:color .15s;line-height:17px}section.queue .queue-items .queue-item .game .spacer{flex:1 1 auto}section.queue .queue-items .queue-item .game .wemod-tag,section.queue .queue-items .queue-item .game .time{flex:0 0 auto}section.queue .queue-items .queue-item boost-button{flex:0 0 auto;display:flex;align-items:center;margin-left:20px}section.queue .creators-list-wrapper{padding:20px;border-radius:10px;background:rgba(255,255,255,.04);overflow:hidden}@media(forced-colors: active){body:not(.override-contrast-mode) section.queue .creators-list-wrapper{border:1px solid #fff}}section.queue .become-a-creator{padding:20px;border-radius:10px;background:rgba(255,255,255,.04);overflow:hidden;margin-top:30px}@media(forced-colors: active){body:not(.override-contrast-mode) section.queue .become-a-creator{border:1px solid #fff}}section.queue .become-a-creator h2{margin:0 0 5px}section.queue .become-a-creator p{font-size:14px;line-height:21px;color:rgba(255,255,255,.6);margin:0 0 13px}section.queue .become-a-creator a{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-size:13px;line-height:20px;font-weight:700;--cta--padding: 11px;--cta--height: 26px;--cta--hover--border-width: 1px;box-shadow:inset 0 0 0 1px var(--theme--highlight);--cta__icon--color: var(--theme--highlight)}section.queue .become-a-creator a,section.queue .become-a-creator a *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) section.queue .become-a-creator a{border:1px solid #fff}}section.queue .become-a-creator a>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}section.queue .become-a-creator a>*:first-child{padding-left:0}section.queue .become-a-creator a>*:last-child{padding-right:0}section.queue .become-a-creator a svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) section.queue .become-a-creator a svg *{fill:CanvasText}}section.queue .become-a-creator a svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) section.queue .become-a-creator a svg{opacity:1}}section.queue .become-a-creator a img{height:50%}section.queue .become-a-creator a:disabled{opacity:.3}section.queue .become-a-creator a:disabled,section.queue .become-a-creator a:disabled *{cursor:default;pointer-events:none}@media(hover: hover){section.queue .become-a-creator a:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}section.queue .become-a-creator a:not(:disabled):hover svg{opacity:1}}section.queue .become-a-creator a:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}@media(hover: hover){section.queue .become-a-creator a:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--theme--highlight);background-color:rgba(0,0,0,0)}}section.queue .become-a-creator a:not(:disabled):active{background-color:var(--theme--highlight)}',
        "",
      ]);
      const s = n;
    },
    "queue/queue.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => c });
      var a = i(27091),
        o = i.n(a),
        u = new URL(i(92281), i.b),
        n = new URL(i(20488), i.b),
        s = new URL(i(98879), i.b),
        r = new URL(i(47150), i.b);
      const c =
        '<template> <require from="./queue.scss"></require> <require from="./resources/elements/creators-list"></require> <require from="../resources/elements/boost-balance-button"></require> <require from="../resources/elements/boost-button"></require> <require from="../shared/resources/elements/info-tooltip"></require> <section class="queue view-background au-animate"> <div class="overflow-fade__wrapper overflow-fade__wrapper--vertical"> <div class="view-scrollable" overflow-fade="vertical"> <h1> <span>${\'queue.queue\' | i18n}</span> <info-tooltip direction="top-left">${\'queue.info_tooltip\' | i18n}</info-tooltip> <div class="actions"> <boost-balance-button></boost-balance-button> </div> </h1> <div class="layout"> <section class="left"> <div class="filter-tabs"> <button class="${view === \'all\' ? \'current\' : \'\'}" click.delegate="changeView(\'all\')"> <span>${\'queue.overview\' | i18n}</span> </button> <button class="${view === \'updates\' ? \'current\' : \'\'}" click.delegate="changeView(\'updates\')"> <span>${\'queue.needs_update\' | i18n}</span> </button> <button class="${view === \'releases\' ? \'current\' : \'\'}" click.delegate="changeView(\'releases\')"> <span>${\'queue.new_releases\' | i18n}</span> </button> <button class="${view === \'recent\' ? \'current\' : \'\'}" click.delegate="changeView(\'recent\')"> <span>${\'queue.recently_completed\' | i18n}</span> </button> </div> <div class="queue-items"> <div class="queue-item ${item.game.id === gameInfo.id ? \'active\' : \'\'}" repeat.for="item of queueItems" id="queue-game-${item.game.id}"> <div class="position" if.bind="item.position">${item.position}</div> <a class="game" route-href="route.bind: \'title\'; params.bind: {titleId: item.title.id, gameId: item.game.id, previousRoute: \'queue\', parentRoute: \'queue\'}" title-link="value.bind: \'queue\'; title-id.bind: item.title.id; game-id.bind: item.game.id;"> <img class="thumbnail ${thumbnailLoaded ? \'loaded\' : \'\'}" fallback-src="' +
        o()(u) +
        '" src.bind="item.title.thumbnail | cdn:{size: 140}" load.trigger="thumbnailLoaded = true"> <div class="meta"> <div class="name"> <span> <i title.bind="item.game.platformId | platformName"> <inline-svg src.bind="item.game.platformId | platformIconSvg"></inline-svg> </i> <label>${item.title.name}</label> </span> </div> <div class="spacer"></div> <div class="creator"> <span if.bind="item.creator"> <img class="avatar" src.bind="item.creator.avatar | cdn:{size: 16}" fallback-src="' +
        o()(n) +
        '"> <label class="username">${item.creator.username}</label> </span> <span if.bind="item.game | gameFlags:\'ReleaseQueued\'" class="wemod-tag wemod-tag--new">${\'queue.new\' | i18n}</span> <span if.bind="item.game | gameFlags:\'UpdateQueued\'" class="wemod-tag wemod-tag--updated">${\'queue.update\' | i18n}</span> <span class="time" if.bind="view === \'recent\'"> <i><inline-svg src="' +
        o()(s) +
        '"></inline-svg></i> <label>${item.game.trainer.updatedAt | i18nElaspedTime:true}</label> </span> </div> </div> </a> <boost-button game-id.bind="item.game.id" icon="' +
        o()(r) +
        '" show-count.bind="true"></boost-button> </div> </div> </section> <section class="right"> <h2>${\'queue.the_creators\' | i18n}</h2> <div class="creators-list-wrapper"> <creators-list></creators-list> </div> <div class="become-a-creator"> <h2>${\'queue.become_a_wemod_creator\' | i18n}</h2> <p>${\'queue.join_our_creator_community\' | i18n}</p> <a href="website://create#auth" target="_blank">${\'queue.apply\' | i18n}</a> </div> </section> </div> </div> </div> </section> </template> ';
    },
    "queue/queue": (e, t, i) => {
      i.r(t), i.d(t, { Queue: () => m });
      var a = i(70655),
        o = i("aurelia-framework"),
        u = i(86433),
        n = i(81866),
        s = i(2314),
        r = i(36997),
        c = i(93082),
        l = i(51722);
      let m = class {
        #e;
        #t;
        #i;
        #a;
        constructor(e, t, i) {
          (this.#e = e), (this.#t = t), (this.#i = i);
        }
        bind() {
          this.changeView(this.view);
        }
        catalogChanged() {
          this.#o();
        }
        activate(e) {
          (this.#a = this.#t.onStatusChanged((e) => this.#u(e))),
            this.#u(this.#t.status),
            (this.view = e.view ?? "all"),
            this.#n(e.gameId);
        }
        deactivate() {
          this.#a.dispose(), (this.#a = null);
        }
        #o() {
          switch (this.view) {
            case "recent":
              this.queueItems = Object.values(this.catalog.games)
                .filter((e) => (0, l.yE)(e.flags, s.p.Available))
                .sort((e, t) =>
                  t.trainer.updatedAt.localeCompare(e.trainer.updatedAt)
                )
                .slice(0, 5)
                .map((e) => this.#s(e.id));
              break;
            default: {
              const e = {
                all: s.p.Queued,
                updates: s.p.UpdateQueued,
                releases: s.p.ReleaseQueued,
              }[this.view];
              this.queueItems = this.catalog.queue
                .map((e, t) => this.#s(e, t + 1))
                .filter((t) => (0, l.yE)(t.game.flags, e));
              break;
            }
          }
        }
        changeView(e) {
          (this.view = e),
            this.#o(),
            this.#e.screenView({
              name: {
                all: "Overview",
                updates: "Needs update",
                releases: "New releases",
                recent: "Recently completed",
              }[e],
              class: "Queue",
            });
        }
        #u(e) {
          "online" !== e && this.#i.navigateToRoute("dashboard");
        }
        #s(e, t = null) {
          const i = this.catalog.games[e];
          return {
            game: i,
            title: this.catalog.titles[i.titleId],
            creator: i.creatorId ? this.catalog.creators[i.creatorId] : void 0,
            position: t,
          };
        }
        #n(e) {
          setTimeout(() => {
            const t = document.getElementById(`queue-game-${e}`);
            t && t.scrollIntoView({ behavior: "smooth", block: "center" });
          });
        }
      };
      m = (0, a.gn)(
        [
          (0, c.b)({
            selectors: {
              catalog: (0, c.g)("catalog"),
              availableBoosts: (0, c.g)("account", "boosts"),
            },
          }),
          (0, o.autoinject)(),
          (0, a.w6)("design:paramtypes", [n.cp, r.Yz, u.F0]),
        ],
        m
      );
    },
  },
]);

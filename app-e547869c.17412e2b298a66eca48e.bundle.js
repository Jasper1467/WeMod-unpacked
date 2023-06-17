"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [39],
  {
    "cheats/resources/elements/trainer-play-button.scss": (t, a, n) => {
      n.r(a), n.d(a, { default: () => g });
      var i = n(8081),
        o = n.n(i),
        e = n(23645),
        r = n.n(e),
        l = n(61667),
        s = n.n(l),
        p = new URL(n(47405), n.b),
        c = new URL(n(50718), n.b),
        d = r()(o()),
        h = s()(p),
        u = s()(c);
      d.push([
        t.id,
        "coaching-tip{display:inline-block;position:relative}coaching-tip .wrapper{position:relative;width:32px}coaching-tip .hotspot{--hotspot--color: var(--color--accent);position:relative;width:32px;height:32px}coaching-tip .hotspot,coaching-tip .hotspot *{cursor:pointer}coaching-tip .hotspot .ring{position:absolute;left:50%;top:50%;border-radius:50%;transition:background-color .15s,border-color .15s}coaching-tip .hotspot .ring:nth-child(1){width:37.5%;height:37.5%;margin-left:-18.75%;margin-top:-18.75%;background:var(--hotspot--color)}coaching-tip .hotspot .ring:nth-child(2){width:62.5%;height:62.5%;margin-left:-31.25%;margin-top:-31.25%;border:1.5px solid var(--hotspot--color);animation:coaching-tip-hotspot 1s ease-in-out 0s infinite}coaching-tip .hotspot .ring:nth-child(3){width:81.25%;height:81.25%;margin-left:-40.625%;margin-top:-40.625%;border:1.5px solid var(--hotspot--color);animation:coaching-tip-hotspot 1s ease-in-out .1s infinite}coaching-tip .hotspot .ring:nth-child(4){width:100%;height:100%;margin-left:-50%;margin-top:-50%;border:1.5px solid var(--hotspot--color);animation:coaching-tip-hotspot 1s ease-in-out .2s infinite}coaching-tip .popup{width:325px;padding:20px 25px 25px;border-radius:10px;background:var(--theme--secondary-background);border:1px solid rgba(255,255,255,.05);opacity:0;visibility:hidden;transition:visibility 0s .2s;z-index:1;box-shadow:0px 0px 5px rgba(17,17,17,.5)}coaching-tip .popup h5{font-weight:600;font-size:16px;line-height:25px;font-weight:700;margin:0 0 5px;color:#fff}coaching-tip .popup p{font-size:14px;line-height:22px;font-weight:500;color:rgba(255,255,255,.6);margin:0}coaching-tip .popup p a{font-weight:500;color:var(--theme--highlight);text-decoration:underline}coaching-tip .popup p a:hover{color:#fff}coaching-tip .popup p strong{font-weight:500;color:#fff}coaching-tip .popup button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-weight:700;font-size:15px;line-height:24px;font-weight:700;--cta--padding: 12px;--cta--height: 28px;--cta--hover--border-width: 1px;box-shadow:inset 0 0 0 1px var(--theme--highlight);--cta__icon--color: var(--theme--highlight)}coaching-tip .popup button,coaching-tip .popup button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) coaching-tip .popup button{border:1px solid #fff}}coaching-tip .popup button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}coaching-tip .popup button>*:first-child{padding-left:0}coaching-tip .popup button>*:last-child{padding-right:0}coaching-tip .popup button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) coaching-tip .popup button svg *{fill:CanvasText}}coaching-tip .popup button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) coaching-tip .popup button svg{opacity:1}}coaching-tip .popup button img{height:50%}coaching-tip .popup button:disabled{opacity:.3}coaching-tip .popup button:disabled,coaching-tip .popup button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){coaching-tip .popup button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}coaching-tip .popup button:not(:disabled):hover svg{opacity:1}}coaching-tip .popup button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}@media(hover: hover){coaching-tip .popup button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--theme--highlight);background-color:rgba(0,0,0,0)}}coaching-tip .popup button:not(:disabled):active{background-color:var(--theme--highlight)}coaching-tip .popup hr{border:0;border-top:1px solid rgba(255,255,255,.2);margin:15px 0}coaching-tip close-button{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)) !important;display:inline-flex;width:26px;height:26px;box-shadow:none;padding:0;border-radius:50%;border:0;align-items:center;justify-content:center;transition:background-color .15s;position:absolute;right:-12.5px;top:-12.5px}@media(forced-colors: active){body:not(.override-contrast-mode) coaching-tip close-button{border:1px solid #fff}}coaching-tip close-button svg{opacity:1}@media(hover: hover){coaching-tip close-button:hover{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)) !important}}coaching-tip.show .hotspot{--hotspot--color: var(--color--brand-blue)}coaching-tip.show .popup{animation:dialog-pop .2s ease-in-out forwards;visibility:visible;transition-delay:0s}coaching-tip.position-relative-right{margin-left:16px}coaching-tip.position-right{position:absolute;left:100%;top:50%;margin-left:16px;margin-top:-16px}coaching-tip.position-left{position:absolute;right:100%;top:50%;margin-right:16px;margin-top:-16px}coaching-tip.popup-right .popup{position:absolute;left:100%;top:0;margin-left:12px}coaching-tip.popup-left .popup{position:absolute;right:100%;top:0;margin-right:12px}coaching-tip.popup-bottom-left .popup{position:absolute;right:0px;top:100%;margin-top:12px}coaching-tip.hide-hotspot .wrapper{width:0}coaching-tip.hide-hotspot .hotspot{display:none}coaching-tip.hide-hotspot .popup{margin:0}coaching-tip.close-button-left close-button{right:initial;left:-12px}body.disable-looping-animation coaching-tip .hotspot .ring:not(:first-child){animation-fill-mode:forwards !important}@keyframes coaching-tip-hotspot{0%{opacity:0}25%{opacity:1}50%,100%{opacity:0}}.coaching-tip-highlight{animation:coaching-tip-highlight .15s linear forwards}@keyframes coaching-tip-highlight{to{box-shadow:0 0 0 1px var(--theme--highlight),0 0 40px 0 rgba(var(--theme--highlight--rgb), 0.3)}}trainer-play-button{display:flex;align-items:center;position:relative}trainer-play-button .button-wrapper{position:relative}trainer-play-button .button-container{position:relative;z-index:0}trainer-play-button .button-container.au-enter-active{animation:trainer-play-button-fade .15s}trainer-play-button .button-container.au-leave-active{animation:trainer-play-button-fade .15s reverse forwards}trainer-play-button .button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;padding:0 !important;font-weight:800;font-size:21px;line-height:30px;font-weight:800;--cta--padding: 20px;--cta--height: 49px;position:relative}trainer-play-button .button,trainer-play-button .button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) trainer-play-button .button{border:1px solid #fff}}trainer-play-button .button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}trainer-play-button .button>*:first-child{padding-left:0}trainer-play-button .button>*:last-child{padding-right:0}trainer-play-button .button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) trainer-play-button .button svg *{fill:CanvasText}}trainer-play-button .button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) trainer-play-button .button svg{opacity:1}}trainer-play-button .button img{height:50%}trainer-play-button .button:disabled{opacity:.3}trainer-play-button .button:disabled,trainer-play-button .button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){trainer-play-button .button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}trainer-play-button .button:not(:disabled):hover svg{opacity:1}}trainer-play-button .button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}trainer-play-button .button>*:first-child{padding-left:var(--cta--padding)}trainer-play-button .button>*:last-child{padding-right:var(--cta--padding)}@media(hover: hover){trainer-play-button .button:not(:disabled):hover{filter:brightness(1.1)}}trainer-play-button .button.play,trainer-play-button .button.loading,trainer-play-button .button.playing{color:#fff !important;box-shadow:none !important;background:rgba(0,0,0,0) !important;position:relative;z-index:0}trainer-play-button .button.play svg *,trainer-play-button .button.loading svg *,trainer-play-button .button.playing svg *{fill:#fff}trainer-play-button .button.play:disabled,trainer-play-button .button.loading:disabled,trainer-play-button .button.playing:disabled{opacity:1 !important}trainer-play-button .button.play:disabled>*,trainer-play-button .button.loading:disabled>*,trainer-play-button .button.playing:disabled>*{opacity:.3}trainer-play-button .button.play>*,trainer-play-button .button.loading>*,trainer-play-button .button.playing>*{transition:opacity .15s}trainer-play-button .button.play.loading>*,trainer-play-button .button.loading.loading>*,trainer-play-button .button.playing.loading>*{opacity:1 !important}trainer-play-button .button.play.loading .scroll-wrapper,trainer-play-button .button.loading.loading .scroll-wrapper,trainer-play-button .button.playing.loading .scroll-wrapper{width:160px;height:100%;position:relative;display:flex;overflow:hidden;-webkit-mask-image:linear-gradient(90deg, transparent 0, transparent 13px, black 18px, black calc(100% - 18px), transparent calc(100% - 13px))}trainer-play-button .button.play.loading~.glow,trainer-play-button .button.play.loading~.lines,trainer-play-button .button.loading.loading~.glow,trainer-play-button .button.loading.loading~.lines,trainer-play-button .button.playing.loading~.glow,trainer-play-button .button.playing.loading~.lines{opacity:1}trainer-play-button .button.play.loading:not(.no-scroll) .label,trainer-play-button .button.loading.loading:not(.no-scroll) .label,trainer-play-button .button.playing.loading:not(.no-scroll) .label{display:block;animation:trainer-play-button-loading-scroll linear 3s infinite;padding-right:50px}trainer-play-button .button.play.loading .gradient,trainer-play-button .button.loading.loading .gradient,trainer-play-button .button.playing.loading .gradient{transform:rotate(180deg)}trainer-play-button .button.play .label,trainer-play-button .button.loading .label,trainer-play-button .button.playing .label{background:url(" +
          h +
          ') 18px center/22px no-repeat;padding-left:48px}trainer-play-button .button.play .gradient,trainer-play-button .button.loading .gradient,trainer-play-button .button.playing .gradient{position:absolute;left:0;top:0;width:100%;height:100%;border-radius:100px;overflow:hidden;z-index:-1;transition:transform 1s linear}trainer-play-button .button.play .gradient:after,trainer-play-button .button.loading .gradient:after,trainer-play-button .button.playing .gradient:after{content:"";position:absolute;left:0;top:50%;width:100%;height:0;padding-top:100%;background:rgba(0,0,0,0) linear-gradient(225deg, var(--color--brand-green) 0%, var(--color--brand-green) 25%, var(--color--pro) 75%, var(--color--pro) 100%) !important;transform:translateY(-50%);animation:var(--cta__play-gradient--animation, none)}trainer-play-button .button.install{box-shadow:inset 0 0 0 1px var(--color--accent);--cta__icon--color: var(--color--accent)}@media(hover: hover){trainer-play-button .button.install:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--color--accent);background-color:rgba(0,0,0,0)}}trainer-play-button .button.install:not(:disabled):active{background-color:var(--color--accent)}trainer-play-button .button.install:not(:disabled):active{--cta__icon--color: #000;color:#000}@media(hover: hover){trainer-play-button .button.install:not(:disabled):hover svg{opacity:.25}trainer-play-button .button.install:not(:disabled):hover>i:hover svg{opacity:1}}trainer-play-button .button.pulse-accent::before{content:"";display:block;position:absolute;left:0;top:0;width:100%;height:100%;z-index:-1;background:var(--color--accent);opacity:.2;animation:cta--pulse .5s ease-in-out infinite alternate;border-radius:99px}trainer-play-button .button.pulse-accent::before{background-color:var(--color--accent);animation:cta--inner-pulse 1s ease-in-out infinite alternate}trainer-play-button .button.pulse-play::before{content:"";display:block;position:absolute;left:0;top:0;width:100%;height:100%;z-index:-1;background:linear-gradient(225deg, var(--color--brand-green) 0%, var(--color--pro) 100%);opacity:.4;animation:cta--pulse .5s ease-in-out infinite alternate;border-radius:99px}trainer-play-button .button svg{opacity:1}trainer-play-button .glow{position:absolute;width:230%;height:368px;left:50%;top:50%;transform:translate(-50%, -50%);background:url(' +
          u +
          ") center/100% 100%;z-index:-2;pointer-events:none;opacity:0;transition:opacity .3s}trainer-play-button .lines{-webkit-mask-image:radial-gradient(circle at center, black 50%, transparent);position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);width:134%;height:158px;pointer-events:none;opacity:0;z-index:-1;transition:opacity .3s}trainer-play-button .lines svg{width:100%;height:100%}trainer-play-button .lines .line{animation:trainer-play-button-line 5s ease-in-out infinite}trainer-play-button .lines .line.highlight,trainer-play-button .lines .line .highlight{fill:var(--theme--highlight) !important;fill-opacity:1 !important}trainer-play-button .lines .line:nth-child(1){animation-duration:2s}trainer-play-button .lines .line:nth-child(2){animation-duration:2.25s}trainer-play-button .lines .line:nth-child(3){animation-duration:2.5s}trainer-play-button .lines .line:nth-child(4){animation-duration:2.75s}trainer-play-button .lines .line:nth-child(5){animation-duration:3s}trainer-play-button .lines .line:nth-child(6){animation-duration:3.25s}trainer-play-button .lines .line:nth-child(7){animation-duration:3.5s}trainer-play-button .lines .line:nth-child(8){animation-duration:4s}trainer-play-button .lines .line:nth-child(9){animation-duration:4.5s}trainer-play-button .lines .line:nth-child(10){animation-duration:4.75s}trainer-play-button .lines .line:nth-child(11){animation-duration:5s}trainer-play-button .lines .line:nth-child(12){animation-duration:5.5s}trainer-play-button .lines .line:nth-child(13){animation-duration:5.76s}trainer-play-button .lines .line:nth-child(14){animation-duration:6s}trainer-play-button .lines .line:nth-child(15){animation-duration:6.5s}trainer-play-button .lines .line:nth-child(16){animation-duration:6.75s}trainer-play-button .lines .line:nth-child(17){animation-duration:7s}trainer-play-button custom-installation-selector .tooltip{top:calc(100% + 5px) !important}trainer-play-button .button.no-installation.tooltip-open+custom-installation-selector{display:none}trainer-play-button coaching-tip{position:absolute;left:0;top:0;margin-left:-10px}@keyframes trainer-play-button-fade{from{opacity:0}to{opacity:1}}",
        "",
      ]);
      const g = d;
    },
    "cheats/resources/elements/trainer-play-button.html": (t, a, n) => {
      n.r(a), n.d(a, { default: () => s });
      var i = n(27091),
        o = n.n(i),
        e = new URL(n(69410), n.b),
        r = new URL(n(42618), n.b),
        l = o()(e);
      const s =
        '<template> <require from="./trainer-play-button.scss"></require> <require from="./custom-installation-selector"></require> <require from="../../../resources/elements/coaching-tip"></require> <div class="button-wrapper"> <div class="button-container au-animate" if.bind="buttonState"> <template if.bind="preferredInstallation"> <span if.bind="buttonState === \'play\'" class="button play pulse-play"> <span class="gradient"></span> <span class="label" click.delegate="launch(preferredInstallation, preferredGameVersion)" tabindex="0"> ${\'trainer_play_button.play\' | i18n} </span> <i click.delegate="customInstallationSelectorOpen = true" class="caret" tabindex="0"> <inline-svg src="' +
        l +
        '"></inline-svg> </i> </span> <span if.bind="buttonState === \'loading\'" class="button loading" disabled="disabled"> <span class="gradient"></span> <span class="scroll-wrapper"> <span class="label allow-looping-animation">${\'trainer_play_button.loading_mods\' | i18n}</span> <span class="label allow-looping-animation">${\'trainer_play_button.loading_mods\' | i18n}</span> </span> </span> <span if.bind="buttonState === \'playing\'" class="button playing" disabled="disabled"> <span class="gradient"></span> <span class="label">${\'trainer_play_button.playing\' | i18n}</span> </span> <span if.bind="buttonState === \'playing_other\'" class="button playing" disabled="disabled"> <span class="gradient"></span> <span class="label">${\'trainer_play_button.play\' | i18n}</span> </span> <coaching-tip id="trainer_play_button" auto-show-initially.bind="true" if.bind="shouldShowPlayCoachingTip" position="custom" popup-position="left" hide-hotspot.bind="true" wait-for-other-coaching-tips.bind="true"> <h5>${\'trainer_play_button.play_coaching_tip_header\' | i18n}</h5> <p>${\'trainer_play_button.play_coaching_tip_message\' | i18n}</p> </coaching-tip> </template> <template else> <span if.bind="buttonState === \'install_for_free\'" class="button no-installation install pulse-accent" disabled.bind="isInstalling"> <span class="label" click.delegate="installGame()" tabindex="0"> ${\'trainer_play_button.install_for_free\' | i18n} </span> <i click.delegate="customInstallationSelectorOpen = true" tabindex="0"> <inline-svg src="' +
        l +
        '"></inline-svg> </i> </span> <span if.bind="buttonState === \'install\'" class="button no-installation install" disabled.bind="isInstalling"> <span class="label" click.delegate="installGame()" tabindex="0"> ${\'trainer_play_button.install_game\' | i18n} </span> <i click.delegate="customInstallationSelectorOpen = true" tabindex="0"> <inline-svg src="' +
        l +
        '"></inline-svg> </i> </span> <coaching-tip id="trainer_install_button" auto-show-initially.bind="true" if.bind="shouldShowInstallCoachingTip" position="custom" popup-position="left" hide-hotspot.bind="true" wait-for-other-coaching-tips.bind="true"> <h5> <template if.bind="platformId === \'standalone\'">${\'trainer_play_button.install_coaching_tip_install_game_header\' | i18n}</template> <template else>${\'trainer_play_button.install_coaching_tip_platform_header\' | i18n:{platform: platformName}}</template> </h5> <p>${\'trainer_play_button.install_coaching_tip_message\' | i18n}</p> </coaching-tip> </template> <span class="glow"></span> <span class="lines allow-looping-animation"> <inline-svg src="' +
        o()(r) +
        '"></inline-svg> </span> </div> <custom-installation-selector open.bind="customInstallationSelectorOpen" game-id.bind="trainerInfo.gameId" play.call="launch(app)"></custom-installation-selector> </div> </template> ';
    },
    "cheats/resources/elements/trainer-play-button": (t, a, n) => {
      n.r(a), n.d(a, { TrainerPlayButton: () => v });
      var i = n(70655),
        o = n("aurelia-dialog"),
        e = n("aurelia-event-aggregator"),
        r = n("aurelia-framework"),
        l = n(45437),
        s = n(72326),
        p = n(30035),
        c = n(76330),
        d = n(29242),
        h = n(81110),
        u = n(93082),
        g = n(39431),
        b = n("shared/utility/resources/value-converters/platform"),
        y = n(27170),
        f = n(11912),
        m = n(69949);
      let v = class {
        #t;
        #a;
        #n;
        #i;
        #o;
        #e;
        #r;
        #l;
        #s;
        #p;
        #c;
        constructor(t, a, n, i, o, e, r, l, s) {
          (this.trainerService = t),
            (this.buttonState = null),
            (this.preferredInstallation = null),
            (this.#o = a),
            (this.#e = n),
            (this.#r = i),
            (this.#l = o),
            (this.#s = e),
            (this.#p = r),
            (this.#i = l),
            (this.#c = s);
        }
        #d() {
          this.#a && (this.#a.dispose(), (this.#a = null), (this.#n = null));
        }
        #h() {
          if ("play" === this.buttonState && this.trainerInfo) {
            const t = this.trainerInfo.gameId;
            this.#a && t !== this.#n && this.#d(),
              this.#a || ((this.#a = this.#r.watchGame(t)), (this.#n = t));
          } else this.#d();
        }
        #u() {
          if (!this.trainerInfo)
            return (
              (this.buttonState = null),
              void (this.customInstallationSelectorOpen = !1)
            );
          const t = this.state.catalog.games[this.trainerInfo.gameId];
          if (
            ((this.isInstallable = !!t && (t.purchaseUris ?? []).length > 0),
            (this.isFree = !!t && t.tags.includes("free")),
            !this.preferredInstallation)
          )
            return void (this.isInstallable && this.isFree
              ? (this.buttonState = "install_for_free")
              : (this.buttonState = "install"));
          const a = this.trainerService.trainer;
          a
            ? ((this.customInstallationSelectorOpen = !1),
              a.getMetadata(m.z9).info.id === this.trainerInfo.id
                ? (this.buttonState = a.isActive() ? "playing" : "loading")
                : (this.buttonState = "playing_other"))
            : (this.buttonState = "play");
        }
        bind() {
          const t = () => {
            this.#u(), this.#h();
          };
          (this.#t = new f.K4([
            this.trainerService.onNewTrainer(t),
            this.trainerService.onTrainerActivated(this.#u.bind(this)),
            this.trainerService.onTrainerEnded(t),
            this.#s.onLaunchTrainer((t) => this.#g(t)),
          ])),
            this.#b(),
            this.#u(),
            this.#h();
        }
        unbind() {
          this.#t.dispose(), this.#d();
        }
        stateChanged() {
          this.#b(), this.#u();
        }
        trainerInfoChanged() {
          this.#b(), this.#u(), this.#h();
        }
        launch(t, a, n = "play_button") {
          (this.hasLaunched = !0),
            this.play({ app: t, gameVersion: a, trigger: n });
        }
        #b() {
          const t = this.#p.getPreferredInstallationInfo(
            this.trainerInfo?.gameId
          );
          (this.preferredInstallation = t.app),
            (this.preferredGameVersion = t.version);
        }
        async installGame() {
          if (!this.isInstalling) {
            this.isInstalling = !0;
            let t = !1;
            try {
              const a = this.trainerInfo.gameId,
                n = this.isFree,
                i = this.state.catalog.games[a]?.purchaseUris ?? [];
              for (const o of i)
                if (await this.#e.launchExternal(o)) {
                  this.#o.publish(new d.wg(a, o, n)), (t = !0);
                  break;
                }
            } finally {
              t
                ? setTimeout(() => (this.isInstalling = !1), 1e3)
                : ((this.customInstallationSelectorOpen = !0),
                  (this.isInstalling = !1)),
                this.#l.dispatch(y.V0, "hasClickedInstallGame", !0);
            }
          }
        }
        buttonStateChanged(t, a) {
          a || "play" !== t || this.#y();
        }
        #y() {
          this.autoLaunch &&
            (this.launch(
              this.preferredInstallation,
              this.preferredGameVersion,
              "shortcut"
            ),
            (this.autoLaunch = !1));
        }
        get shouldShowInstallCoachingTip() {
          return !this.state?.flags.hasClickedInstallGame;
        }
        get shouldShowPlayCoachingTip() {
          return (
            !this.hasLaunched &&
            this.state &&
            0 ===
              Object.values(this.state.gameHistory).filter(
                (t) => !!t.lastPlayedAt
              ).length
          );
        }
        #g(t) {
          t === this.trainerInfo.id &&
            (this.launch(
              this.preferredInstallation,
              this.preferredGameVersion,
              "remote"
            ),
            this.#i.closeAll());
        }
        customInstallationSelectorOpenChanged() {
          this.#o.publish(
            "custom-installation-selector-open-changed",
            this.customInstallationSelectorOpen
          );
        }
        get platformId() {
          return this.trainerInfo
            ? this.state.catalog.games[this.trainerInfo.gameId]?.platformId
            : null;
        }
        get platformName() {
          return this.#c.toView(this.platformId);
        }
      };
      (0, i.gn)(
        [r.bindable, (0, i.w6)("design:type", Object)],
        v.prototype,
        "trainerInfo",
        void 0
      ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", String)],
          v.prototype,
          "disabledMessage",
          void 0
        ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Function)],
          v.prototype,
          "play",
          void 0
        ),
        (0, i.gn)(
          [
            (0, r.bindable)({ defaultBindingMode: r.bindingMode.twoWay }),
            (0, i.w6)("design:type", String),
          ],
          v.prototype,
          "buttonState",
          void 0
        ),
        (0, i.gn)(
          [r.bindable, (0, i.w6)("design:type", Boolean)],
          v.prototype,
          "autoLaunch",
          void 0
        ),
        (0, i.gn)(
          [r.observable, (0, i.w6)("design:type", Boolean)],
          v.prototype,
          "customInstallationSelectorOpen",
          void 0
        ),
        (0, i.gn)(
          [
            (0, r.computedFrom)("state.flags.hasClickedInstallGame"),
            (0, i.w6)("design:type", Boolean),
            (0, i.w6)("design:paramtypes", []),
          ],
          v.prototype,
          "shouldShowInstallCoachingTip",
          null
        ),
        (0, i.gn)(
          [
            (0, r.computedFrom)("hasLaunched", "state.gameHistory"),
            (0, i.w6)("design:type", Boolean),
            (0, i.w6)("design:paramtypes", []),
          ],
          v.prototype,
          "shouldShowPlayCoachingTip",
          null
        ),
        (0, i.gn)(
          [
            (0, r.computedFrom)("trainerInfo.gameId"),
            (0, i.w6)("design:type", String),
            (0, i.w6)("design:paramtypes", []),
          ],
          v.prototype,
          "platformId",
          null
        ),
        (0, i.gn)(
          [
            (0, r.computedFrom)("platformId"),
            (0, i.w6)("design:type", String),
            (0, i.w6)("design:paramtypes", []),
          ],
          v.prototype,
          "platformName",
          null
        ),
        (v = (0, i.gn)(
          [
            (0, u.b)((t) =>
              t.state.pipe(
                (0, g.s)(
                  "installedGameVersions",
                  "installedApps",
                  "catalog",
                  "gameHistory",
                  "flags"
                )
              )
            ),
            (0, r.autoinject)(),
            (0, i.w6)("design:paramtypes", [
              m.hc,
              e.h,
              h.f,
              s.q,
              l.yh,
              c.K,
              p.c,
              o.DialogService,
              b.PlatformNameValueConverter,
            ]),
          ],
          v
        ));
    },
  },
]);

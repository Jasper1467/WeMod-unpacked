"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [7542],
  {
    93884: (e, t, s) => {
      s.d(t, { X: () => h });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(45437),
        n = s(93082),
        l = s(27170);
      let h = class {
        #e;
        constructor(e) {
          this.#e = e;
        }
        attached() {
          this.subscriptionChanged();
        }
        detached() {}
        subscriptionChanged() {
          this.#t() || this.themeChanged(this.theme);
        }
        themeChanged(e, t) {
          this.#t() ||
            (t && document.body.classList.remove(`theme-${t}`),
            document.body.classList.add(`theme-${e}`));
        }
        #t() {
          return (
            "default" !== this.theme &&
            !this.subscription &&
            (this.#e.dispatch(l.D3, { theme: "default" }, "theme_applier", !0),
            !0)
          );
        }
      };
      h = (0, a.gn)(
        [
          (0, n.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              subscription: (0, n.g)("account", "subscription"),
              theme: (0, n.g)("settings", "theme"),
            },
          }),
          (0, i.autoinject)(),
          (0, a.w6)("design:paramtypes", [r.yh]),
        ],
        h
      );
    },
    7137: (e, t, s) => {
      s.d(t, { Q: () => b, s: () => m });
      var a = s(70655),
        i = s("aurelia-event-aggregator"),
        r = s("aurelia-framework"),
        n = s(23739),
        l = s(29242),
        h = s(94472),
        o = s(2314),
        c = s(36997),
        d = s(93082),
        u = s(39431),
        g = s(66302),
        p = s(51722),
        v = s(9288);
      class m {
        #s;
        #a;
        constructor(e, t) {
          (this.searchResults = []), (this.#a = e), (this.location = t);
        }
        initialize() {
          this.#s = this.#a.onStatusChanged(() => this.triggerResultsRefresh());
        }
        reset() {
          (this.pendingSearchTerms = null), (this.searchResults = []);
        }
        dispose() {
          this.#s.dispose(), (this.#s = null);
        }
        triggerResultsRefresh() {
          this.resultsShouldRefresh && this.resultsShouldRefresh();
        }
      }
      let b = class {
        #a;
        #i;
        #r;
        constructor(e, t, s) {
          (this.#a = e), (this.#i = t), (this.#r = s);
        }
        activate() {}
        deactivate() {}
        createSession(e, t) {
          const s = new m(this.#a, t);
          return (s.resultsShouldRefresh = e), s.initialize(), s;
        }
        search(e, t) {
          const s = "online" === this.#a.status;
          let a = this.#n(Object.values(this.state.catalog.titles), t);
          if (
            (t &&
              t !== e.pendingSearchTerms &&
              this.#r.publish(new l.o4(e.location, t)),
            s ||
              ((a = a.filter((e) =>
                e.gameIds.some((e) => !!this.cachedTrainers[e])
              )),
              e.reset()),
            s && t)
          ) {
            const s = t.trim();
            this.#l(e, s)
              ? this.#h(e, s).catch(g.K)
              : (e.pendingSearchTerms = s);
          }
          const i = new Set();
          let r = a
            .filter((e) =>
              e.gameIds.some((e) =>
                (0, p.yE)(this.state.catalog.games[e]?.flags, o.p.Available)
              )
            )
            .map((e) => ({
              resultType: "catalog-title",
              result: e,
              isInstalled: null,
            }));
          return (
            s && r.push(...this.#o(e)),
            (r = r.filter(
              (e) => !i.has(e.result.id) && (i.add(e.result.id), !0)
            )),
            r
          );
        }
        #l(e, t) {
          return (
            !(t.length <= 2 || t === e.pendingSearchTerms) &&
            (t.length < 25 || t.split("").some((e) => e !== t[0]))
          );
        }
        #o(e) {
          const t = this.#c(e);
          return [
            ...e.searchResults.filter(
              (e) => -1 === t.findIndex((t) => t.result.id === e.result.id)
            ),
            ...t,
          ];
        }
        async #h(e, t) {
          let s;
          e.pendingSearchTerms = t;
          try {
            s = await this.#i.searchUnavailableTitles(t, 15);
          } catch (e) {
            if (!(0, h.zF)(e) && !(0, c.by)(e)) throw e;
            s = [];
          }
          t === e.pendingSearchTerms &&
            ((e.searchResults = s.map((e) => ({
              resultType: "title-metadata",
              result: e,
              isInstalled: !1,
            }))),
            e.triggerResultsRefresh(),
            (e.pendingSearchTerms = null));
        }
        #c(e) {
          return this.#n(
            Object.values(this.state.correlatedUnavailableTitles).filter((e) =>
              e.games.some((e) => !(0, p.yE)(e.flags, o.p.Unsupported))
            ),
            e.pendingSearchTerms
          ).map((e) => ({
            resultType: "title-metadata",
            result: e,
            isInstalled: !0,
          }));
        }
        #n(e, t) {
          return (0, v.y)(e, t, ["name", "terms"], "name");
        }
      };
      b = (0, a.gn)(
        [
          (0, d.b)({
            setup: "activate",
            teardown: "deactivate",
            selectors: {
              state: (e) =>
                e.state.pipe(
                  (0, u.s)(
                    "catalog",
                    "favoriteTitles",
                    "installedGameVersions",
                    "gameHistory",
                    "correlatedUnavailableTitles"
                  )
                ),
              cachedTrainers: (0, d.g)("trainers"),
            },
          }),
          (0, r.autoinject)(),
          (0, a.w6)("design:paramtypes", [c.Yz, n.K, i.h]),
        ],
        b
      );
    },
    248: (e, t, s) => {
      s.d(t, { s: () => v });
      var a = s(70655),
        i = s("aurelia-event-aggregator"),
        r = s("aurelia-framework"),
        n = s("cheats/resources/value-converters/proper-hotkey"),
        l = s("cheats/resources/value-converters/sort-keys"),
        h = s(69949),
        o = s(35969),
        c = s(93082),
        d = s(11912),
        u = s(30248),
        g = s(83202),
        p = s(97798);
      let v = class {
        #d;
        #u;
        #g;
        #p;
        #v;
        #m;
        #b;
        #y;
        #T;
        #f;
        constructor(e, t, s, a, i, r, n, l) {
          (this.#d = e),
            (this.#u = t),
            (this.#g = s),
            (this.#p = a),
            (this.#v = i),
            (this.#m = r),
            (this.#b = n),
            (this.#y = l);
        }
        attached() {
          this.#f = new d.K4()
            .push(
              this.#m.onVisibleTrainerChanged((e) => {
                (this.#T = e), this.#S();
              })
            )
            .push(
              this.#d.onNewTrainer((e) => {
                const t = e.getMetadata(h.z9);
                (this.#T = t.info), this.#S();
              })
            )
            .push(this.#g.onLocaleChanged(() => this.#S()));
        }
        detached() {
          this.#f.dispose(), (this.#f = null);
        }
        cheatBlueprintInstructionsReadChanged() {
          this.#S();
        }
        gamePreferencesChanged() {
          this.#S();
        }
        #S() {
          const e = {};
          if (!this.#T) return;
          const t = this.#v.trainerSupportsActivateOnLoad(this.#T.blueprint),
            s = t && this.#v.enabledForGame(this.#T.gameId),
            a = this.gamePreferences[this.#T.gameId]?.saveCheats,
            i = this.gamePreferences[this.#T.gameId]?.customHotkeys;
          this.#T.blueprint.cheats.forEach((r) => {
            const n = t && this.#v.cheatSupportsActivateOnLoad(r);
            e[r.uuid] = {
              instructionsRead: this.#p.isRead(r.uuid, r.instructions),
              saveCheats: {
                enabled: n && s,
                supported: n,
                value: n && s && a ? a.trainerState[r.target] : void 0,
              },
              hotkeys: this.#w(r, i ? i[r.uuid] : void 0),
            };
          }),
            (this.cheatStates = e),
            this.#u.publish("cheat-states", {
              gameId: this.#T.gameId,
              state: e,
            });
        }
        onCheatStatesChanged(e) {
          return this.#u.subscribe("cheat-states", e);
        }
        #w(e, t = []) {
          return e.hotkeys.map((e, s) => {
            let a = t[s];
            return (
              null === a && (a = []),
              this.#y.toView(a || e).map((e) => this.#b.toView(e))
            );
          });
        }
      };
      v = (0, a.gn)(
        [
          (0, c.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              cheatBlueprintInstructionsRead: (0, c.g)(
                "cheatBlueprintInstructionsRead"
              ),
              gamePreferences: (0, c.g)("gamePreferences"),
            },
          }),
          (0, r.autoinject)(),
          (0, a.w6)("design:paramtypes", [
            h.hc,
            i.h,
            o.oc,
            u.X,
            g.b,
            p.G,
            n.ProperHotkeyValueConverter,
            l.SortKeysValueConverter,
          ]),
        ],
        v
      );
    },
    21375: (e, t, s) => {
      s.d(t, { a: () => o });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(20151),
        n = s(38650),
        l = s(69949),
        h = s(94692);
      let o = class {
        #d;
        #I;
        constructor(e) {
          this.#d = e;
        }
        attached() {
          this.#I = this.#d.onNewTrainer((e) => this.#C(e));
        }
        detached() {
          this.#I.dispose(), (this.#I = null);
        }
        #C(e) {
          const t = e.getMetadata(l.z9);
          if ("trainerlib" !== t.info.loader) return;
          const s = new r.p(t);
          s.event(h.zI.PlayPressed),
            e.addMetadata(s),
            e.onStateChanged((t) => {
              t === n.$c.Injecting &&
                s.event(h.zI.GameFound, {
                  process_name: e.process.imagePath.substring(
                    e.process.imagePath.lastIndexOf("\\") + 1
                  ),
                });
            }),
            e.onActivated(async () => {
              s.event(h.zI.TrainerInitialized);
            }),
            e.onLogMessage((e) => {
              s.event(h.zI.LogMessage, { level: e.level, message: e.message });
            }),
            e.onValueSet((e) => {
              s.event(h.zI.ValueChanged, {
                source: {
                  1: "app",
                  2: "app",
                  0: "trainer",
                  3: "remote",
                  4: "overlay",
                  5: "save_cheats",
                }[e.source],
                name: e.name,
                old_value: e.oldValue,
                new_value: e.value,
              });
            }),
            e.onEnded(() => {
              s.event(h.zI.TrainerEnd);
            });
        }
      };
      o = (0, a.gn)(
        [(0, i.autoinject)(), (0, a.w6)("design:paramtypes", [l.hc])],
        o
      );
    },
    72542: (e, t, s) => {
      s.d(t, { s: () => c });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(45437),
        n = s(69949),
        l = s(93082),
        h = s(27170);
      const o = [2, 4, 3];
      let c = class {
        #d;
        #e;
        #k;
        constructor(e, t) {
          (this.#d = e), (this.#e = t);
        }
        attached() {
          this.#k = this.#d.onTrainerActivated((e) => {
            this.hasUsedInteractiveControls ||
              e.onValueSet((e) => {
                o.includes(e.source) && this.#V(), 4 === e.source && this.#P();
              });
          });
        }
        detached() {
          this.#k && (this.#k.dispose(), (this.#k = null));
        }
        #V() {
          this.hasUsedInteractiveControls ||
            this.#e.dispatch(h.V0, "hasUsedInteractiveControls", !0);
        }
        #P() {
          this.hasUsedOverlay || this.#e.dispatch(h.V0, "hasUsedOverlay", !0);
        }
      };
      c = (0, a.gn)(
        [
          (0, l.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              hasUsedInteractiveControls: (0, l.g)(
                "flags",
                "hasUsedInteractiveControls"
              ),
              hasUsedOverlay: (0, l.g)("flags", "hasUsedOverlay"),
            },
          }),
          (0, i.autoinject)(),
          (0, a.w6)("design:paramtypes", [n.hc, r.yh]),
        ],
        c
      );
    },
    27366: (e, t, s) => {
      s.d(t, { M: () => c });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(45437),
        n = s(29001),
        l = s(69949),
        h = s(27170),
        o = s(76330);
      let c = class {
        #d;
        #e;
        #H;
        #I;
        constructor(e, t, s) {
          (this.#d = e), (this.#e = t), (this.#H = s);
        }
        attached() {
          this.#I = this.#d.onTrainerActivated((e) => this.#U(e));
        }
        detached() {
          this.#I.dispose(), (this.#I = null);
        }
        #U(e) {
          const t = e.getMetadata(l.z9),
            s = new Date();
          let a = !1;
          e.onValueSet((e) => {
            3 === e.source && (a = !0);
          }),
            e.onEnded(() => {
              const e = (0, n.Z)(s, Date.now());
              this.#e.dispatch(h.B$, t.info.gameId, s.toISOString(), e),
                a && this.#H.sendGamePlayed(t.info.gameId, s.toISOString(), e);
            });
        }
      };
      c = (0, a.gn)(
        [
          (0, i.autoinject)(),
          (0, a.w6)("design:paramtypes", [l.hc, r.yh, o.K]),
        ],
        c
      );
    },
    8397: (e, t, s) => {
      s.d(t, { Y: () => p });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(45437),
        n = s(62546),
        l = s(41931),
        h = s(69949),
        o = s(6358),
        c = s(51722),
        d = s(27170),
        u = s(11912),
        g = s(28529);
      let p = class {
        #d;
        #$;
        #R;
        #e;
        #I;
        #A;
        constructor(e, t, s, a) {
          (this.#d = e), (this.#$ = t), (this.#R = s), (this.#e = a);
        }
        attached() {
          this.#I = this.#d.onTrainerActivated(this.#U.bind(this));
        }
        detached() {
          this.#I.dispose(), (this.#I = null);
        }
        #U(e) {
          const t = e.getMetadata(h.z9);
          let s, a, i;
          const r = this.#e.state
              .pipe(
                (0, n.j)("gamePreferences", t.info.gameId, "customHotkeys"),
                (0, l.x)()
              )
              .subscribe((e) => (s = e ?? {})),
            o = this.#e.state
              .pipe((0, n.j)("flags", "hasUsedHotkeys"), (0, l.x)())
              .subscribe((e) => (a = e)),
            c = this.#e.state
              .pipe((0, n.j)("settings", "disableHotkeys"), (0, l.x)())
              .subscribe((e) => (i = e)),
            g = this.#e.state
              .pipe((0, n.j)("account", "subscription"), (0, l.x)())
              .subscribe((e) => {
                !e &&
                  i &&
                  this.#e.dispatch(
                    d.D3,
                    { disableHotkeys: !1 },
                    "trainer_hotkeys",
                    !0
                  ),
                  (this.#A = !!e);
              }),
            p = new u.K4()
              .pushFunction(() => r.unsubscribe())
              .pushFunction(() => o.unsubscribe())
              .pushFunction(() => c.unsubscribe())
              .pushFunction(() => g.unsubscribe())
              .push(
                this.#R.onHotkeyPress((r) => {
                  e.isActive() &&
                    !i &&
                    this.#E(e, t.info.blueprint, s, r) &&
                    !a &&
                    this.#e.dispatch(d.V0, "hasUsedHotkeys", !0);
                })
              );
          e.onEnded(() => p.dispose());
        }
        #E(e, t, s, a) {
          const i = this.#j(t, s, a);
          if (0 === i.length) return !1;
          const r = new Set();
          for (const t of i) {
            const s = t.cheat.uuid;
            let a = null;
            switch (t.cheat.type) {
              case "button":
                a = this.#x(e, t.cheat.target, t.cheat.args, s);
                break;
              case "toggle":
                a = this.#N(e, t.cheat.target, s);
                break;
              case "number":
              case "slider":
                a = this.#z(e, t.cheat.target, t.cheat.args, t.hotkeyIndex, s);
                break;
              case "selection":
                a = this.#M(e, t.cheat.target, t.cheat.args, t.hotkeyIndex, s);
            }
            null === a || r.has(a) || (r.add(a), this.#$.play(a));
          }
          return !0;
        }
        #j(e, t, s) {
          let a = [],
            i = 0;
          for (const r of e.cheats)
            if (!(0, c.yE)(r.flags, 2) || this.#A)
              for (let e = 0; e < r.hotkeys.length; e++) {
                const n = (t[r.uuid] || {})[e];
                if (null === n) continue;
                const l = n || r.hotkeys[e];
                0 !== l.length &&
                  0 !== l[0] &&
                  l.every((e) => s.includes(e)) &&
                  (l.length > i
                    ? ((a = [{ cheat: r, hotkeyIndex: e }]), (i = l.length))
                    : l.length === i && a.push({ cheat: r, hotkeyIndex: e }));
              }
          return a;
        }
        #x(e, t, s, a) {
          return e.setValue(t, s.value, 1, a), g.$.Execute;
        }
        #N(e, t, s) {
          return e.getValue(t)
            ? (e.setValue(t, !1, 1, s), g.$.Disable)
            : (e.setValue(t, !0, 1, s), g.$.Enable);
        }
        #z(e, t, s, a, i) {
          const r = e.getValue(t) ?? Math.min(s.max, Math.max(0, s.min));
          let n = r;
          0 === a ? (n -= s.step) : 1 === a && (n += s.step);
          const l = s.step.toString(),
            h = l.indexOf(".");
          -1 !== h && (n = parseFloat(n.toFixed(l.length - h - 1))),
            (n = Math.max(n, s.min)),
            (n = Math.min(n, s.max));
          let o = null;
          return (
            n === r
              ? (o = g.$.Limit)
              : (n > r && (o = g.$.Increase),
                n < r && (o = g.$.Decrease),
                e.setValue(t, n, 1, i)),
            o
          );
        }
        #M(e, t, s, a, i) {
          let r = null,
            n = e.getValue(t) ?? -1;
          if (0 === a)
            --n < 0 && (n = s.options.length - 1), (r = g.$.Decrease);
          else {
            if (1 !== a) return null;
            ++n > s.options.length - 1 && (n = 0), (r = g.$.Increase);
          }
          return e.setValue(t, n, 1, i), r;
        }
      };
      p = (0, a.gn)(
        [
          (0, i.autoinject)(),
          (0, a.w6)("design:paramtypes", [h.hc, g.s, o.aI, r.yh]),
        ],
        p
      );
    },
    30291: (e, t, s) => {
      s.d(t, { h: () => g });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(98099),
        n = s(38650),
        l = s(79669),
        h = s(69949);
      const o = (0, r.jl)("trainer"),
        c = {
          [n.$c.AcquiringBinary]: "Acquiring trainer binary...",
          [n.$c.EnsuringBinaryAccess]: "Ensuring trainer binary access...",
          [n.$c.CheckingInternalBinaries]: "Validating internal libraries...",
          [n.$c.FindingProcess]: "Finding or launching process...",
          [n.$c.ValidatingProcess]: "Validating target process...",
          [n.$c.CreatingTrainerHost]: "Creating trainer host...",
          [n.$c.Injecting]: "Injecting dependencies into process...",
          [n.$c.InitializingIpc]: "Initializing IPC channels...",
          [n.$c.Executing]: "Executing trainer...",
          [n.$c.Connecting]: "Waiting for connection...",
          [n.$c.Activating]: "Activating trainer...",
          [n.$c.Active]: "Ready for user input.",
          [n.$c.Ended]: "Trainer ended.",
        },
        d = {
          [n.YN.ElevationDenied]: "Trainer elevation denied.",
          [n.YN.Canceled]: "Trainer launch canceled.",
          [n.YN.TimedOut]: "Trainer launch timed out.",
          [n.YN.Incompatible]:
            "Trainer was built for a newer version of the app.",
          [n.YN.GameAlreadyRunning]:
            "Game was already running, but an internal launch is required.",
          [n.YN.GameNotRunning]:
            "Game was not running, but an external launch is required.",
          [n.YN.Error]: "Failed to launch trainer.",
        },
        u = {
          0: "trainer",
          2: "GUI control",
          1: "hotkey",
          3: "remote",
          4: "overlay",
          5: "save mods",
        };
      let g = class {
        #d;
        #I;
        constructor(e) {
          this.#d = e;
        }
        attached() {
          this.#I = this.#d.onNewTrainer((e) => this.#F(e));
        }
        detached() {
          this.#I.dispose(), (this.#I = null);
        }
        async #F(e) {
          e.onStateChanged((e) => {
            const t = c[e];
            t && o.info(t);
          }),
            e.onEnded(() => {
              const t = d[e.launchResult];
              t && o.warn(t);
            }),
            e.onValueSet((e) => {
              o.info(`${e.name} set to ${e.value} by ${u[e.source]}`);
            }),
            e.onLogMessage((e) => {
              switch (e.level) {
                case l.in.Info:
                  o.info(e.message);
                  break;
                case l.in.Warning:
                  o.warn(e.message);
                  break;
                case l.in.Error:
                  o.error(e.message);
                  break;
                default:
                  o.debug(e.message);
              }
            });
        }
      };
      g = (0, a.gn)(
        [(0, i.autoinject)(), (0, a.w6)("design:paramtypes", [h.hc])],
        g
      );
    },
    17564: (e, t, s) => {
      s.d(t, { l: () => h });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(93082),
        n = s(76330),
        l = s(97798);
      let h = class {
        #m;
        #H;
        #I;
        constructor(e, t) {
          (this.#m = e), (this.#H = t);
        }
        attached() {
          this.#I = this.#m.onDisplayTrainerChanged(this.#O.bind(this));
        }
        #O(e) {
          e
            ? this.#H.setCurrentTrainer(
                {
                  trainerId: e.id,
                  gameId: e.gameId,
                  supportedVersions: e.supportedVersions,
                },
                this.#m.runningTrainer?.instance
              )
            : this.#H.setCurrentTrainer(null);
        }
        detached() {
          this.#I.dispose(), (this.#I = null), this.#H.setCurrentTrainer(null);
        }
      };
      h = (0, a.gn)(
        [
          (0, i.autoinject)(),
          (0, r.b)({
            setup: "attached",
            teardown: "detached",
            selectors: { catalog: (0, r.g)("catalog") },
          }),
          (0, a.w6)("design:paramtypes", [l.G, n.K]),
        ],
        h
      );
    },
    97798: (e, t, s) => {
      s.d(t, { G: () => h });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(83467),
        n = s(69949),
        l = s(11912);
      let h = class {
        #u;
        #L;
        constructor(e, t) {
          (this.#u = new l.yM()),
            e.onNewTrainer(this.#C.bind(this)),
            e.onTrainerEnded(this.#D.bind(this)),
            (this.#L = t);
        }
        attached() {}
        detached() {
          this.#u.dispose();
        }
        setVisibleTrainer(e) {
          (this.visibleTrainer = e),
            this.#u.publish("visible", this.visibleTrainer),
            this.runningTrainer ||
              ((this.displayTrainer = e),
              this.#u.publish("display", this.displayTrainer));
        }
        #C(e) {
          const t = e.getMetadata(n.z9).info;
          (this.runningTrainer = { info: t, instance: e }),
            this.#u.publish("running", this.runningTrainer),
            (this.displayTrainer = t),
            this.#u.publish("display", this.displayTrainer);
        }
        #D() {
          (this.runningTrainer = null),
            (this.displayTrainer = this.visibleTrainer),
            this.#u.publish("display", this.displayTrainer),
            this.#u.publish("running", null);
        }
        onDisplayTrainerChanged(e) {
          return this.#u.subscribe("display", e);
        }
        onVisibleTrainerChanged(e) {
          return this.#u.subscribe("visible", e);
        }
        onRunningTrainerChanged(e) {
          return this.#u.subscribe("running", e);
        }
        async cancelVisibleTrainer() {
          await (0, l.UC)(),
            "title" === this.#L.router.currentInstruction.config.name
              ? (await (0, l.UC)(500),
                this.visibleTrainer?.id || this.setVisibleTrainer(null))
              : this.setVisibleTrainer(null);
        }
      };
      h = (0, a.gn)(
        [(0, i.autoinject)(), (0, a.w6)("design:paramtypes", [n.hc, r.W])],
        h
      );
    },
  },
]);

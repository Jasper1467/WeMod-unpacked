"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [5536],
  {
    83202: (e, t, a) => {
      a.d(t, { b: () => p });
      var s = a(70655),
        n = a("aurelia-event-aggregator"),
        i = a("aurelia-framework"),
        r = a(45437),
        c = a(69949),
        l = a(29242),
        o = a(93082),
        h = a(51722),
        u = a(27170),
        d = a(11912);
      let p = class {
        #e;
        #t;
        #a;
        #s;
        #n;
        constructor(e, t, a) {
          (this.#n = new d.yM()), (this.#e = e), (this.#t = t), (this.#a = a);
        }
        attached() {
          (this.#s = new d.K4().push(
            this.#e.onTrainerActivated((e) => this.#i(e))
          )),
            this.#r();
        }
        detached() {
          this.#s.dispose(), (this.#s = null);
        }
        #i(e) {
          const t = e.getMetadata(c.z9).info,
            a = this.trainerSupportsActivateOnLoad(t.blueprint),
            s = this.enabledForGame(t.gameId);
          if (!a) return;
          const n = this.gamePreferences[t.gameId]?.saveCheats?.trainerState;
          s &&
            n &&
            t.blueprint.cheats.forEach(async (t) => {
              if (this.cheatSupportsActivateOnLoad(t)) {
                const a = n[t.target];
                void 0 !== a && (await e.setValue(t.target, a, 5));
              }
            }),
            e.onValueSet((e) => {
              this.saveValue(t.gameId, e.name, e.value);
            });
        }
        async saveValue(e, t, a) {
          this.#n.publish("value-saved", { gameId: e, target: t, value: a }),
            await this.#t.dispatch(u.Jw, e, t, a);
        }
        onValueSaved(e) {
          return this.#n.subscribe("value-saved", e);
        }
        async enable(e, t, a) {
          (a ??= this.#c(e)),
            await this.#t.dispatch(u.Vb, e, !0, a),
            this.#a.publish(new l.lc(t, e, !0));
        }
        #c(e) {
          const t = this.#e.trainer;
          return t && t.getMetadata(c.z9).info.gameId === e
            ? Object.fromEntries(t.values.entries())
            : null;
        }
        async disable(e, t) {
          await this.#t.dispatch(u.Vb, e, !1),
            this.#a.publish(new l.lc(t, e, !1));
        }
        enableSaveCheatsByDefaultChanged(e, t) {
          !1 === e && !0 === t && this.#t.dispatch(u.NP, !0);
        }
        cheatSupportsActivateOnLoad(e) {
          return (0, h.yE)(e?.flags, 1);
        }
        trainerSupportsActivateOnLoad(e) {
          return (0, h.yE)(e?.flags, 1);
        }
        #l(e) {
          return (
            this.gamePreferences && this.gamePreferences[e]?.saveCheats?.enabled
          );
        }
        enabledForGame(e) {
          return (
            !!this.canUse && (this.#l(e) ?? this.enableSaveCheatsByDefault)
          );
        }
        enabledByDefault() {
          return this.enableSaveCheatsByDefault;
        }
        #r() {
          this.canUse ||
            (((this.gamePreferences &&
              Object.values(this.gamePreferences).some((e) => {
                if ("boolean" == typeof e.saveCheats?.enabled) return !0;
                const t = e.saveCheats?.trainerState;
                return t && Object.keys(t).length > 0;
              })) ||
              this.enableSaveCheatsByDefault) &&
              this.#t.dispatch(u.NP, !1));
        }
        accountChanged() {
          this.#r();
        }
        get canUse() {
          return this.account && !!this.account.subscription;
        }
      };
      (0, s.gn)(
        [
          (0, i.computedFrom)("account.subscription"),
          (0, s.w6)("design:type", Boolean),
          (0, s.w6)("design:paramtypes", []),
        ],
        p.prototype,
        "canUse",
        null
      ),
        (p = (0, s.gn)(
          [
            (0, o.b)({
              setup: "attached",
              teardown: "detached",
              selectors: {
                gamePreferences: (0, o.g)("gamePreferences"),
                enableSaveCheatsByDefault: (0, o.g)(
                  "settings",
                  "enableSaveCheatsByDefault"
                ),
                account: (0, o.g)("account"),
              },
            }),
            (0, i.autoinject)(),
            (0, s.w6)("design:paramtypes", [c.hc, r.yh, n.h]),
          ],
          p
        ));
    },
    28529: (e, t, a) => {
      a.d(t, { $: () => s, s: () => p });
      var s,
        n = a(70655),
        i = a(71017),
        r = a("aurelia-framework"),
        c = a(45437),
        l = a(69949),
        o = a(93082),
        h = a(27170),
        u = a(11912);
      !(function (e) {
        (e.Execute = "execute"),
          (e.Enable = "enable"),
          (e.Disable = "disable"),
          (e.Increase = "increase"),
          (e.Decrease = "decrease"),
          (e.Limit = "limit"),
          (e.Error = "error");
      })(s || (s = {}));
      const d = ["Percussive", "Boopie", "Melodic", "Retro"];
      let p = class {
        #t;
        #e;
        #o;
        #h;
        constructor(e, t) {
          (this.availablePacks = d),
            (this.#o = null),
            (this.#t = e),
            (this.#e = t);
        }
        attached() {
          this.selectedPack || this.setSoundPack(d[0], "sound_player", !0),
            (this.#h = this.#e.onNewTrainer((e) => {
              this.preload(), e.onValueSetError(() => this.play(s.Error));
            }));
        }
        detached() {
          this.#h.dispose(), (this.#h = null);
        }
        selectedPackChanged() {
          this.#o = null;
        }
        async setSoundPack(e, t, a) {
          this.availablePacks.includes(e) &&
            ((this.#o = null),
            await this.#t.dispatch(h.D3, { cheatSoundPack: e }, t, a));
        }
        async setVolume(e, t) {
          e >= 0 &&
            e <= 100 &&
            (await this.#t.dispatch(h.D3, { cheatSoundVolume: e }, t),
            this.#o?.setVolume(e));
        }
        async preload() {
          if (null !== this.#o) return !0;
          const e = this.selectedPack,
            t = await g.load(e, this.volume);
          return e === this.selectedPack && ((this.#o = t), !0);
        }
        async play(e) {
          this.enabled &&
            (null !== this.#o || (await this.preload())) &&
            (await this.#o.play(e).catch(() => null));
        }
      };
      p = (0, n.gn)(
        [
          (0, o.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              enabled: (0, o.g)("settings", "cheatSounds"),
              selectedPack: (0, o.g)("settings", "cheatSoundPack"),
              volume: (0, o.g)("settings", "cheatSoundVolume"),
            },
          }),
          (0, r.autoinject)(),
          (0, n.w6)("design:paramtypes", [c.yh, l.hc]),
        ],
        p
      );
      class g {
        #u;
        constructor(e) {
          this.#u = e;
        }
        play(e) {
          const t = this.#u[e];
          return (t.currentTime = 0), t.play();
        }
        setVolume(e) {
          "number" == typeof e &&
            Object.values(this.#u).forEach((t) => g.#d(t, e));
        }
        static async load(e, t) {
          const a = {};
          return (
            await Promise.all(
              Object.values(s).map(async (s) => {
                a[s] = await this.#p(
                  (function (e, t) {
                    return i.normalize(`./static/audio/cheats/${e}/${t}.mp3`);
                  })(e, s),
                  t
                );
              })
            ),
            new g(a)
          );
        }
        static #p(e, t) {
          return new Promise((a, s) => {
            const n = new Audio(e),
              i = new u.K4()
                .pushEventListener(n, "error", (e) => {
                  i.dispose(), s(e);
                })
                .pushEventListener(n, "canplaythrough", () => {
                  i.dispose(), "number" == typeof t && g.#d(n, t), a(n);
                });
          });
        }
        static #d(e, t) {
          e.volume = t / 100;
        }
      }
    },
    19502: (e, t, a) => {
      a.d(t, { n: () => o });
      var s = a(70655),
        n = a("aurelia-framework"),
        i = a(2314),
        r = a(35969),
        c = a(93082),
        l = a(51722);
      let o = class {
        #g;
        constructor(e) {
          this.#g = e;
        }
        attached() {}
        detached() {}
        get count() {
          return this.games
            ? Object.values(this.games).filter((e) =>
                (0, l.yE)(e.flags, i.p.Available)
              ).length
            : 0;
        }
        get formattedCount() {
          return this.#g.formatNumber(this.count);
        }
      };
      (0, s.gn)(
        [
          (0, n.computedFrom)("games"),
          (0, s.w6)("design:type", Number),
          (0, s.w6)("design:paramtypes", []),
        ],
        o.prototype,
        "count",
        null
      ),
        (0, s.gn)(
          [
            (0, n.computedFrom)("count"),
            (0, s.w6)("design:type", String),
            (0, s.w6)("design:paramtypes", []),
          ],
          o.prototype,
          "formattedCount",
          null
        ),
        (o = (0, s.gn)(
          [
            (0, c.b)({
              setup: "attached",
              teardown: "detached",
              selectors: { games: (0, c.g)("catalog", "games") },
            }),
            (0, n.autoinject)(),
            (0, s.w6)("design:paramtypes", [r.oc]),
          ],
          o
        ));
    },
  },
]);

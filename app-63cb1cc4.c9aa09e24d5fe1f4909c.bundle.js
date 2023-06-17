"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [3213],
  {
    40522: (t, e, s) => {
      s.d(e, { Z: () => a }), s(1015);
      const a = [
        {
          route: "dashboard",
          name: "dashboard",
          moduleId: "dashboard/dashboard",
        },
        {
          route: "titles",
          name: "titles",
          moduleId: "cheats/titles",
          activationStrategy: "replace",
          settings: { supportedAsInternalUri: !0 },
        },
        {
          route: "titles/:titleId",
          name: "title",
          moduleId: "cheats/title",
          activationStrategy: "replace",
          settings: { supportedAsInternalUri: !0 },
        },
        {
          route: "queue",
          name: "queue",
          moduleId: "queue/queue",
          settings: { supportedAsInternalUri: !0 },
        },
        {
          route: "project/:projectId",
          name: "project-redirect",
          moduleId: "cheats/project-redirect",
        },
        {
          route: "collection/:slug",
          name: "collection",
          moduleId: "cheats/game-collection",
          activationStrategy: "replace",
          settings: { supportedAsInternalUri: !0 },
        },
      ];
    },
    31033: (t, e, s) => {
      s.d(e, { r: () => c });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(11912),
        n = s(81866);
      let c = class {
        #t;
        #e;
        constructor(t) {
          this.#t = t;
        }
        attached() {
          const t = this.handleContrastMode();
          this.#e = new r.K4()
            .pushEventListener(t, "change", (t) => this.setForcedColorsParam(t))
            .pushEventListener(document, "focusin", () =>
              this.handleKeyboardNavigation()
            )
            .pushEventListener(document, "keypress", (t) => this.#s(t))
            .pushFunction(this.#a());
        }
        detached() {
          this.#e.dispose();
        }
        handleContrastMode() {
          const t = window.matchMedia("(forced-colors: active)");
          return this.setForcedColorsParam(t), t;
        }
        setForcedColorsParam(t) {
          this.#t.user("a11y_forced_colors", t.matches ? "active" : "inactive");
        }
        handleKeyboardNavigation() {
          const t = document.activeElement;
          if (t) {
            const e = t.matches(":focus-visible"),
              s = !["INPUT", "TEXTAREA"].includes(t.nodeName);
            e && s && this.#t.user("a11y_keyboard_navigation", "true");
          }
        }
        #s(t) {
          "Enter" === t.key &&
            t.target instanceof HTMLElement &&
            t.target === document.activeElement &&
            !["A", "BUTTON"].includes(t.target.nodeName) &&
            t.target.click();
        }
        #a() {
          const t = [
              document.getElementById("dialogs"),
              document.getElementById("fullscreen-dialogs"),
            ],
            e = new MutationObserver(() => {
              const e = Array.from(
                  document.querySelectorAll(".inert-when-dialog-open")
                ),
                s = Array.from(
                  document.querySelectorAll("ux-dialog-container")
                ),
                a = s.pop(),
                i = t.some((t) => t.classList.contains("ux-dialog-open"));
              a && (a.inert = !1),
                [...e, ...s].forEach((t) => {
                  t && (t.inert = i);
                });
            });
          return (
            t.forEach((t) =>
              e.observe(t, { attributeFilter: ["class"], childList: !0 })
            ),
            () => {
              e.disconnect();
            }
          );
        }
      };
      c = (0, a.gn)(
        [(0, i.autoinject)(), (0, a.w6)("design:paramtypes", [n.c])],
        c
      );
    },
    85882: (t, e, s) => {
      s.d(e, { B: () => d });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(45437),
        n = s(23739),
        c = s(93082),
        o = s(51722),
        h = s(27170),
        l = s(11912),
        u = s(78219);
      let d = class {
        #i;
        #r;
        #n;
        #c;
        constructor(t, e) {
          (this.#n = []), (this.#i = t), (this.#r = e);
        }
        attached() {}
        detached() {
          this.#c?.dispose(), (this.#c = null), (this.#n = []);
        }
        accountFlagsChanged() {
          this.#n = this.#n.filter(
            (t) => !(0, o.yE)(this.accountFlags, t.flag)
          );
        }
        watchFlag(t, e, s = !1) {
          if ((0, o.yE)(this.accountFlags, t)) return l.$L;
          {
            const a = { flag: t, remainingTries: e };
            return (
              this.#n.push(a),
              this.#o(s),
              (0, l.JD)(() => {
                const t = this.#n.indexOf(a);
                t >= 0 && this.#n.splice(t, 1);
              })
            );
          }
        }
        #o(t) {
          t && this.#c?.dispose(),
            (!t && this.#c) ||
              (this.#c = (0, l.rk)(
                async () => {
                  this.#c = null;
                  try {
                    await this.#h();
                  } finally {
                    this.#c || 0 === this.#n.length || this.#o(!1);
                  }
                },
                t ? 0 : (0, u.V)(4, 7)
              ));
        }
        async #h() {
          let t;
          try {
            const e = await this.#i.getUserAccountFlags(
              this.#n.reduce((t, e) => t | e.flag, 0)
            );
            (this.#n = this.#n.filter(
              (t) =>
                --t.remainingTries > 0 && !(0, o.yE)(this.accountFlags, t.flag)
            )),
              e && (t = await this.#i.getUserAccount());
          } catch {}
          t && (await this.#r.dispatch(h.qg, t));
        }
      };
      d = (0, a.gn)(
        [
          (0, i.autoinject)(),
          (0, c.b)({
            setup: "attached",
            teardown: "detached",
            selectors: { accountFlags: (0, c.g)("account", "flags") },
          }),
          (0, a.w6)("design:paramtypes", [n.K, r.yh]),
        ],
        d
      );
    },
    68611: (t, e, s) => {
      s.d(e, { v: () => m });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(45437),
        n = s(23739),
        c = s(81110),
        o = s(73876),
        h = s(47164),
        l = s("shared/pusher/index"),
        u = s(93082),
        d = s(27170),
        g = s(11912),
        p = s(78219);
      let m = class {
        #i;
        #r;
        #l;
        #u;
        #d;
        #g;
        #p;
        #m;
        constructor(t, e, s, a, i, r) {
          (this.#i = t),
            (this.#r = e),
            (this.#l = s),
            (this.#u = a),
            (this.#d = i),
            (this.#g = r);
        }
        attached() {
          this.#g.setDeauthorizedHandler(() => this.signOut()),
            (this.#p = this.#l.onRestoredFromTray(this.#v.bind(this))),
            this.#f(this.token),
            (this.#m = (0, g.tI)(
              () => this.refreshAccount(),
              (0, p.i)(15, 20)
            ));
        }
        detached() {
          this.#p.dispose(),
            (this.#p = null),
            this.#m && (this.#m.dispose(), (this.#m = null));
        }
        #v() {
          this.refreshAccount();
        }
        tokenChanged(t) {
          this.#f(t);
        }
        async signOut() {
          return (
            await this.#r.dispatch(d.V0, "signOutOnStartup", !0),
            this.#l.reload()
          );
        }
        #f(t) {
          this.#u.setAuthHeader(`Bearer ${t.accessToken}`);
        }
        async refreshAccount() {
          let t = null;
          try {
            t = await this.#i.getUserAccount();
          } catch {}
          return (
            null !== t &&
              (await this.#r.dispatch(d.qg, t),
              t.activeExperiments &&
                this.#d.setAllExperiments(t.activeExperiments)),
            t
          );
        }
      };
      m = (0, a.gn)(
        [
          (0, i.autoinject)(),
          (0, u.b)({
            setup: "attached",
            teardown: "detached",
            selectors: { token: (0, u.g)("token") },
          }),
          (0, a.w6)("design:paramtypes", [n.K, r.yh, c.f, l.Pusher, h.p, o.y]),
        ],
        m
      );
    },
    81866: (t, e, s) => {
      s.d(e, { c: () => w, $: () => v });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(98099),
        n = s(16511),
        c = s(41809),
        o = s(90902),
        h = s(81110),
        l = s(35969),
        u = s(93082),
        d = s(51722),
        g = s(48736);
      let p = class {
        #l;
        #y;
        #w;
        #b;
        constructor(t, e) {
          (this.#w = null), (this.#l = t), (this.#y = e);
        }
        activate() {
          n.uZ.bO.q &&
            (this.configChanged(),
            (this.#w = (0, c.F)()),
            this.#w.init(n.uZ.bO.q, this.account.uuid, {
              optOut: !this.enabled,
              appVersion: this.#l.info.version,
              deviceId: this.deviceId,
              disableCookies: !0,
              domain: "app.wemod.com",
              defaultTracking: !1,
            }),
            this.#w.add({
              name: "wemod_metadata",
              type: o.z.ENRICHMENT,
              setup: async (t) => {},
              execute: async (t) => (
                (t.os_name =
                  { win32: "Windows" }[this.#l.info.osPlatform] ??
                  this.#l.info.osPlatform),
                (t.os_version = this.#l.info.osVersion),
                (t.language = this.#y.getEffectiveLocale().toString()),
                t
              ),
            }));
        }
        configChanged() {
          this.#b =
            "number" == typeof this.config?.audience &&
            (0, d.yE)(this.account.audience, this.config.audience);
        }
        async deactivate() {
          await this.#w?.flush().promise;
        }
        enabledChanged() {
          this.#w?.setOptOut(!this.enabled);
        }
        track(t, e = {}) {
          this.#w &&
            this.#b &&
            this.#w.track(
              t.replaceAll("cheat", "mod"),
              Object.fromEntries(
                Object.entries((0, g.v)(e)).map(([t, e]) => [
                  t.replaceAll("cheat", "mod"),
                  e,
                ])
              )
            );
        }
      };
      p = (0, a.gn)(
        [
          (0, i.autoinject)(),
          (0, u.b)({
            setup: "activate",
            teardown: "deactivate",
            selectors: {
              account: (0, u.g)("account"),
              deviceId: (0, u.g)("installation", "id"),
              enabled: (0, u.g)("settings", "analytics"),
              config: (0, u.g)("catalog", "config", "amplitude"),
            },
          }),
          (0, a.w6)("design:paramtypes", [h.f, l.oc]),
        ],
        p
      );
      var m = s(84401);
      const v = Object.freeze({ ga: !0, amplitude: !0 }),
        f = Object.freeze({ ga: !0, amplitude: !1 }),
        y = (0, r.jl)("events");
      let w = class {
        #I;
        #k;
        constructor(t, e) {
          (this.#I = t), (this.#k = e);
        }
        async activate() {
          await Promise.allSettled([this.#I.activate(), this.#k.activate()]);
        }
        async deactivate() {
          await this.#k.deactivate();
        }
        user(t, e) {
          n.fF && y.debug(t, e), this.#I.user(t, e);
        }
        event(t, e = {}, s) {
          (s = Object.assign({}, f, s)),
            n.fF && y.debug(t, e, s),
            s.ga && this.#I.event(t, e),
            s.amplitude && this.#k.track(t, e);
        }
        screenView(t, e) {
          this.#I.screenView(t, e);
        }
      };
      w = (0, a.gn)(
        [(0, i.autoinject)(), (0, a.w6)("design:paramtypes", [m.W, p])],
        w
      );
    },
    54722: (t, e, s) => {
      s.d(e, { K: () => c });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s("shared/api/index"),
        n = s(35969);
      let c = class {
        #i;
        #y;
        #C;
        #A;
        constructor(t, e) {
          (this.#i = t), (this.#y = e);
        }
        #E() {
          this.#A = this.#y.getEffectiveLocale().baseName;
        }
        activate() {
          (this.#C = this.#y.onLocaleChanged(() => this.#E())),
            this.#E(),
            this.#i.addInterceptor({
              request: (t) => (
                this.#A && t.headers.set("Accept-Language", this.#A), t
              ),
            });
        }
        deactivate() {
          this.#C.dispose(), (this.#C = null);
        }
      };
      c = (0, a.gn)(
        [
          (0, i.autoinject)(),
          (0, a.w6)("design:paramtypes", [r.WeModApiClient, n.oc]),
        ],
        c
      );
    },
    90450: (t, e, s) => {
      s.d(e, { D: () => o });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s("shared/api/index"),
        n = s(93082);
      const c = { overrideCountry: "country" };
      let o = class {
        #i;
        constructor(t) {
          this.#i = t;
        }
        activate() {
          this.#i.addInterceptor({
            request: (t) => {
              const e = {};
              return (
                Object.keys(c).forEach((t) => {
                  this.settings[t] && (e[c[t]] = this.settings[t]);
                }),
                Object.values(e).length > 0 &&
                  t.headers.set("X-Debug-Properties", btoa(JSON.stringify(e))),
                t
              );
            },
          });
        }
        deactivate() {}
      };
      o = (0, a.gn)(
        [
          (0, i.autoinject)(),
          (0, n.b)({
            setup: "activate",
            teardown: "deactivate",
            selectors: { settings: (0, n.g)("settings") },
          }),
          (0, a.w6)("design:paramtypes", [r.WeModApiClient]),
        ],
        o
      );
    },
    83467: (t, e, s) => {
      s.d(e, { W: () => a });
      class a {
        attached(t) {
          this.router = t;
        }
        detached() {}
        getCurrentInternalUri() {
          const t = this.router.currentInstruction;
          if (t.config.settings?.supportedAsInternalUri) {
            const e = new URL(`wemod:${t.fragment}`);
            return (e.search = t.queryString), e.toString();
          }
          return "wemod:";
        }
      }
    },
    40387: (t, e, s) => {
      s.d(e, { H: () => d });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(45437),
        n = s(18739),
        c = s(62546),
        o = s(23739),
        h = s(93082),
        l = s(27170),
        u = s(11912);
      let d = class {
        #i;
        #r;
        #c;
        constructor(t, e) {
          (this.#i = t), (this.#r = e);
        }
        attached() {
          this.#o();
        }
        detached() {
          this.#L();
        }
        #o() {
          this.#c = (0, u.rk)(() => this.#E(), 6e4);
        }
        #L() {
          this.#c && (this.#c.dispose(), (this.#c = null));
        }
        async #E() {
          this.#L();
          try {
            if (!this.preventCatalogRefresh) {
              const t = await this.#r.state
                .pipe((0, n.P)(), (0, c.j)("catalogCacheKey"))
                .toPromise();
              let e = null;
              try {
                e = await this.#i.getCatalog(t);
              } catch {}
              null !== e &&
                e.body &&
                (await this.#r.dispatch(l.y4, e.body, e.cacheKey));
            }
          } finally {
            this.#o();
          }
        }
      };
      d = (0, a.gn)(
        [
          (0, h.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              preventCatalogRefresh: (0, h.g)(
                "settings",
                "preventCatalogRefresh"
              ),
            },
          }),
          (0, i.autoinject)(),
          (0, a.w6)("design:paramtypes", [o.K, r.yh]),
        ],
        d
      );
    },
    30248: (t, e, s) => {
      s.d(e, { X: () => l });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(45437),
        n = s(69949),
        c = s(93082),
        o = s(5384),
        h = s(27170);
      let l = class {
        #j;
        #r;
        #T;
        constructor(t, e) {
          (this.#j = t), (this.#r = e);
        }
        attached() {
          this.#T = this.#j.onTrainerActivated((t) => {
            t.onValueSetError((t) => {
              t.cheatId && this.markUnread(t.cheatId);
            });
          });
        }
        detached() {
          this.#T && (this.#T.dispose(), (this.#T = null));
        }
        markRead(t, e) {
          if (!e) return;
          const s = (0, o.Wu)(e);
          this.cheatBlueprintInstructionsRead[t] !== s &&
            this.#r.dispatch(h.ZM, t, s);
        }
        markUnread(t) {
          this.#r.dispatch(h.ZM, t, null);
        }
        isRead(t, e) {
          return !e || this.cheatBlueprintInstructionsRead[t] === (0, o.Wu)(e);
        }
      };
      l = (0, a.gn)(
        [
          (0, c.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              cheatBlueprintInstructionsRead: (0, c.g)(
                "cheatBlueprintInstructionsRead"
              ),
            },
          }),
          (0, i.autoinject)(),
          (0, a.w6)("design:paramtypes", [n.hc, r.yh]),
        ],
        l
      );
    },
    26020: (t, e, s) => {
      s.d(e, { W: () => u });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(81110),
        n = s(339),
        c = s(35969),
        o = s(93082),
        h = s(51722);
      function l() {
        (0, i.signalBindings)("content-target");
      }
      let u = class {
        #O;
        #y;
        #F;
        #C;
        #R;
        constructor(t, e) {
          (this.#F = new n.yM()), (this.#O = t.info.region), (this.#y = e);
        }
        onReevaluationRequired(t) {
          return this.#F.subscribe("_", t);
        }
        activate() {
          (this.#C = this.#y.onLocaleChanged(() => {
            this.#S(this.#y.getEffectiveLocale()), this.#F.publish("_"), l();
          })),
            this.#S(this.#y.getEffectiveLocale());
        }
        deactivate() {
          this.#C.dispose(),
            (this.#C = null),
            this.#F.dispose(),
            (this.#F = null);
        }
        audienceChanged() {
          this.#F.publish("_"), l();
        }
        #S(t) {
          this.#R = t.language;
        }
        isApplicable(t) {
          return t.target
            ? !(
                t.target.countries &&
                this.#O &&
                !t.target.countries.includes(this.#O)
              ) &&
                !(
                  t.target.languages && !t.target.languages.includes(this.#R)
                ) &&
                (!t.target.audience ||
                  (0, h.yE)(this.audience, t.target.audience))
            : !t.audience || (0, h.yE)(this.audience, t.audience);
        }
      };
      u = (0, a.gn)(
        [
          (0, i.autoinject)(),
          (0, o.b)({
            setup: "activate",
            teardown: "deactivate",
            selectors: { audience: (0, o.g)("account", "audience") },
          }),
          (0, a.w6)("design:paramtypes", [r.f, c.oc]),
        ],
        u
      );
    },
    2789: (t, e, s) => {
      s.d(e, { y: () => n });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(93082);
      let n = class {
        attached() {}
        detached() {}
        get creators() {
          return this.catalog
            ? Object.values(this.catalog.creators)
                .filter((t) => t.active)
                .map((t) => {
                  const e = Object.values(this.catalog.games)
                    .filter((e) => e.creatorId === t.id)
                    .reduce((t, e) => t + (e.trainer?.cheatCount ?? 0), 0);
                  return { ...t, cheatCount: e };
                })
                .sort((t, e) => e.cheatCount - t.cheatCount)
            : [];
        }
      };
      (0, a.gn)(
        [
          (0, i.computedFrom)("catalog"),
          (0, a.w6)("design:type", Array),
          (0, a.w6)("design:paramtypes", []),
        ],
        n.prototype,
        "creators",
        null
      ),
        (n = (0, a.gn)(
          [
            (0, r.b)({
              setup: "attached",
              teardown: "detached",
              selectors: { catalog: (0, r.g)("catalog") },
            }),
            (0, i.autoinject)(),
          ],
          n
        ));
    },
  },
]);

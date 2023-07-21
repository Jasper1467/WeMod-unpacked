"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [3213],
  {
    40522: (e, t, s) => {
      s.d(t, { Z: () => a }), s(1015);
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
    31033: (e, t, s) => {
      s.d(t, { r: () => c });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(11912),
        n = s(81866);
      let c = class {
        #e;
        #t;
        constructor(e) {
          this.#e = e;
        }
        attached() {
          const e = this.handleContrastMode();
          this.#t = new r.K4()
            .pushEventListener(e, "change", (e) => this.setForcedColorsParam(e))
            .pushEventListener(document, "focusin", () =>
              this.handleKeyboardNavigation()
            )
            .pushEventListener(document, "keypress", (e) => this.#s(e))
            .pushFunction(this.#a());
        }
        detached() {
          this.#t.dispose();
        }
        handleContrastMode() {
          const e = window.matchMedia("(forced-colors: active)");
          return this.setForcedColorsParam(e), e;
        }
        setForcedColorsParam(e) {
          this.#e.user("a11y_forced_colors", e.matches ? "active" : "inactive");
        }
        handleKeyboardNavigation() {
          const e = document.activeElement;
          if (e) {
            const t = e.matches(":focus-visible"),
              s = !["INPUT", "TEXTAREA"].includes(e.nodeName);
            t && s && this.#e.user("a11y_keyboard_navigation", "true");
          }
        }
        #s(e) {
          "Enter" === e.key &&
            e.target instanceof HTMLElement &&
            e.target === document.activeElement &&
            !["A", "BUTTON"].includes(e.target.nodeName) &&
            e.target.click();
        }
        #a() {
          const e = [
              document.getElementById("dialogs"),
              document.getElementById("fullscreen-dialogs"),
            ],
            t = new MutationObserver(() => {
              const t = Array.from(
                  document.querySelectorAll(".inert-when-dialog-open")
                ),
                s = Array.from(
                  document.querySelectorAll("ux-dialog-container")
                ),
                a = s.pop(),
                i = e.some((e) => e.classList.contains("ux-dialog-open"));
              a && (a.inert = !1),
                [...t, ...s].forEach((e) => {
                  e && (e.inert = i);
                });
            });
          return (
            e.forEach((e) =>
              t.observe(e, { attributeFilter: ["class"], childList: !0 })
            ),
            () => {
              t.disconnect();
            }
          );
        }
      };
      c = (0, a.gn)(
        [(0, i.autoinject)(), (0, a.w6)("design:paramtypes", [n.cp])],
        c
      );
    },
    85882: (e, t, s) => {
      s.d(t, { B: () => l });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(45437),
        n = s(23739),
        c = s(93082),
        o = s(51722),
        h = s(27170),
        u = s(11912),
        d = s(78219);
      let l = class {
        #i;
        #r;
        #n;
        #c;
        constructor(e, t) {
          (this.#n = []), (this.#i = e), (this.#r = t);
        }
        attached() {}
        detached() {
          this.#c?.dispose(), (this.#c = null), (this.#n = []);
        }
        accountFlagsChanged() {
          this.#n = this.#n.filter(
            (e) => !(0, o.yE)(this.accountFlags, e.flag)
          );
        }
        watchFlag(e, t, s = !1) {
          if ((0, o.yE)(this.accountFlags, e)) return u.$L;
          {
            const a = { flag: e, remainingTries: t };
            return (
              this.#n.push(a),
              this.#o(s),
              (0, u.JD)(() => {
                const e = this.#n.indexOf(a);
                e >= 0 && this.#n.splice(e, 1);
              })
            );
          }
        }
        #o(e) {
          e && this.#c?.dispose(),
            (!e && this.#c) ||
              (this.#c = (0, u.rk)(
                async () => {
                  this.#c = null;
                  try {
                    await this.#h();
                  } finally {
                    this.#c || 0 === this.#n.length || this.#o(!1);
                  }
                },
                e ? 0 : (0, d.V)(4, 7)
              ));
        }
        async #h() {
          let e;
          try {
            const t = await this.#i.getUserAccountFlags(
              this.#n.reduce((e, t) => e | t.flag, 0)
            );
            (this.#n = this.#n.filter(
              (e) =>
                --e.remainingTries > 0 && !(0, o.yE)(this.accountFlags, e.flag)
            )),
              t && (e = await this.#i.getUserAccount());
          } catch {}
          e && (await this.#r.dispatch(h.qg, e));
        }
      };
      l = (0, a.gn)(
        [
          (0, i.autoinject)(),
          (0, c.b)({
            setup: "attached",
            teardown: "detached",
            selectors: { accountFlags: (0, c.g)("account", "flags") },
          }),
          (0, a.w6)("design:paramtypes", [n.K, r.yh]),
        ],
        l
      );
    },
    68611: (e, t, s) => {
      s.d(t, { v: () => m });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(45437),
        n = s(23739),
        c = s(81110),
        o = s(73876),
        h = s(47164),
        u = s("shared/pusher/index"),
        d = s(93082),
        l = s(27170),
        p = s(11912),
        g = s(78219);
      let m = class {
        #i;
        #r;
        #u;
        #d;
        #l;
        #p;
        #g;
        #m;
        constructor(e, t, s, a, i, r) {
          (this.#i = e),
            (this.#r = t),
            (this.#u = s),
            (this.#d = a),
            (this.#l = i),
            (this.#p = r);
        }
        attached() {
          this.#p.setDeauthorizedHandler(() => this.signOut()),
            (this.#g = this.#u.onRestoredFromTray(this.#v.bind(this))),
            this.#f(this.token),
            (this.#m = (0, p.tI)(
              () => this.refreshAccount(),
              (0, g.i)(15, 20)
            ));
        }
        detached() {
          this.#g.dispose(),
            (this.#g = null),
            this.#m && (this.#m.dispose(), (this.#m = null));
        }
        #v() {
          this.refreshAccount();
        }
        tokenChanged(e) {
          this.#f(e);
        }
        async signOut() {
          return (
            await this.#r.dispatch(l.V0, "signOutOnStartup", !0),
            this.#u.reload()
          );
        }
        #f(e) {
          this.#d.setAuthHeader(`Bearer ${e.accessToken}`);
        }
        async refreshAccount() {
          let e = null;
          try {
            e = await this.#i.getUserAccount();
          } catch {}
          return (
            null !== e &&
              (await this.#r.dispatch(l.qg, e),
              e.activeExperiments &&
                this.#l.setAllExperiments(e.activeExperiments)),
            e
          );
        }
      };
      m = (0, a.gn)(
        [
          (0, i.autoinject)(),
          (0, d.b)({
            setup: "attached",
            teardown: "detached",
            selectors: { token: (0, d.g)("token") },
          }),
          (0, a.w6)("design:paramtypes", [n.K, r.yh, c.f, u.Pusher, h.p, o.y]),
        ],
        m
      );
    },
    81866: (e, t, s) => {
      s.d(t, { cp: () => I, $9: () => v, Ju: () => f });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(98099),
        n = s(70824),
        c = s(41809),
        o = s(90902),
        h = s(81110),
        u = s(35969),
        d = s(93082),
        l = s(51722),
        p = s(48736);
      let g = class {
        #u;
        #y;
        #w;
        #b;
        #I;
        constructor(e, t) {
          (this.#w = null), (this.#u = e), (this.#y = t);
        }
        activate() {
          n.Z.services.amplitude.apiKey &&
            (this.#k(),
            (this.#w = (0, c.F)()),
            this.account || this.#w.reset(),
            this.#w.init(n.Z.services.amplitude.apiKey, this.account?.uuid, {
              optOut: !this.enabled,
              appVersion: this.#u.info.version,
              deviceId: this.deviceId,
              disableCookies: !0,
              domain: "app.wemod.com",
              defaultTracking: !1,
            }),
            this.#w.add({
              name: "wemod_metadata",
              type: o.z.ENRICHMENT,
              setup: async (e) => {},
              execute: async (e) => (
                (e.os_name =
                  { win32: "Windows" }[this.#u.info.osPlatform] ??
                  this.#u.info.osPlatform),
                (e.os_version = this.#u.info.osVersion),
                (e.language = this.#y.getEffectiveLocale().toString()),
                this.#I &&
                  ((e.user_properties = Object.assign(
                    e.user_properties ?? {},
                    this.#I
                  )),
                  (this.#I = void 0)),
                e
              ),
            }));
        }
        configChanged() {
          this.#k();
        }
        accountChanged() {
          this.#k(), this.account && this.#w?.setUserId(this.account.uuid);
        }
        #k() {
          const e = this.account?.audience ?? 1;
          this.#b =
            "number" == typeof this.config?.audience &&
            (0, l.yE)(e, this.config.audience);
        }
        async deactivate() {
          await this.#w?.flush().promise;
        }
        enabledChanged() {
          this.#w?.setOptOut(!this.enabled);
        }
        track(e, t = {}) {
          this.#w &&
            this.#b &&
            this.#w.track(
              e.replaceAll("cheat", "mod"),
              Object.fromEntries(
                Object.entries((0, p.v)(t)).map(([e, t]) => [
                  e.replaceAll("cheat", "mod"),
                  t,
                ])
              )
            );
        }
        setUserProperty(e, t) {
          this.#I || (this.#I = {}), (this.#I[e] = t);
        }
        screenView(e) {
          this.#u.isInTraySinceStartup ||
            this.track("screen_view", {
              screen_type: e.name ?? null,
              screen_class: e.class ?? null,
              ...(e.params || null),
            });
        }
      };
      g = (0, a.gn)(
        [
          (0, i.autoinject)(),
          (0, d.b)({
            setup: "activate",
            teardown: "deactivate",
            selectors: {
              account: (0, d.g)("account"),
              deviceId: (0, d.g)("installation", "id"),
              enabled: (0, d.g)("settings", "analytics"),
              config: (0, d.g)("catalog", "config", "amplitude"),
            },
          }),
          (0, a.w6)("design:paramtypes", [h.f, u.oc]),
        ],
        g
      );
      var m = s(84401);
      const v = Object.freeze({ ga: !0, amplitude: !0 }),
        f = Object.freeze({ ga: !1, amplitude: !0 }),
        y = Object.freeze({ ga: !0, amplitude: !1 });
      function w(e) {
        return Object.assign({}, y, e);
      }
      const b = (0, r.jl)("events");
      let I = class {
        #C;
        #A;
        constructor(e, t) {
          (this.#C = e), (this.#A = t);
        }
        async activate() {
          await Promise.allSettled([this.#C.activate(), this.#A.activate()]);
        }
        async deactivate() {
          await this.#A.deactivate();
        }
        user(e, t, s) {
          (s = w(s)),
            n.Z.debug && b.debug(e, t),
            s.ga && this.#C.user(e, t),
            s.amplitude && this.#A.setUserProperty(e, t);
        }
        event(e, t = {}, s) {
          (s = w(s)),
            n.Z.debug && b.debug(e, t, s),
            s.ga && this.#C.event(e, t),
            s.amplitude && this.#A.track(e, t);
        }
        screenView(e, t = v) {
          (t = w(t)),
            n.Z.debug && b.debug("screenView", e.name, e.class, e.params, t),
            t.ga && this.#C.screenView(e),
            t.amplitude && this.#A.screenView(e);
        }
      };
      I = (0, a.gn)(
        [(0, i.autoinject)(), (0, a.w6)("design:paramtypes", [m.W, g])],
        I
      );
    },
    54722: (e, t, s) => {
      s.d(t, { K: () => c });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s("shared/api/index"),
        n = s(35969);
      let c = class {
        #i;
        #y;
        #E;
        #j;
        constructor(e, t) {
          (this.#i = e), (this.#y = t);
        }
        #L() {
          this.#j = this.#y.getEffectiveLocale().baseName;
        }
        activate() {
          (this.#E = this.#y.onLocaleChanged(() => this.#L())),
            this.#L(),
            this.#i.addInterceptor({
              request: (e) => (
                this.#j && e.headers.set("Accept-Language", this.#j), e
              ),
            });
        }
        deactivate() {
          this.#E.dispose(), (this.#E = null);
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
    90450: (e, t, s) => {
      s.d(t, { D: () => o });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s("shared/api/index"),
        n = s(93082);
      const c = { overrideCountry: "country" };
      let o = class {
        #i;
        constructor(e) {
          this.#i = e;
        }
        activate() {
          this.#i.addInterceptor({
            request: (e) => {
              const t = {};
              return (
                Object.keys(c).forEach((e) => {
                  this.settings[e] && (t[c[e]] = this.settings[e]);
                }),
                Object.values(t).length > 0 &&
                  e.headers.set("X-Debug-Properties", btoa(JSON.stringify(t))),
                e
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
    83467: (e, t, s) => {
      s.d(t, { W: () => a });
      class a {
        attached(e) {
          this.router = e;
        }
        detached() {}
        getCurrentInternalUri() {
          const e = this.router.currentInstruction;
          if (e.config.settings?.supportedAsInternalUri) {
            const t = new URL(`wemod:${e.fragment}`);
            return (t.search = e.queryString), t.toString();
          }
          return "wemod:";
        }
      }
    },
    40387: (e, t, s) => {
      s.d(t, { H: () => l });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(45437),
        n = s(18739),
        c = s(62546),
        o = s(23739),
        h = s(93082),
        u = s(27170),
        d = s(11912);
      let l = class {
        #i;
        #r;
        #c;
        constructor(e, t) {
          (this.#i = e), (this.#r = t);
        }
        attached() {
          this.#o();
        }
        detached() {
          this.#T();
        }
        #o() {
          this.#c = (0, d.rk)(() => this.#L(), 6e4);
        }
        #T() {
          this.#c && (this.#c.dispose(), (this.#c = null));
        }
        async #L() {
          this.#T();
          try {
            if (!this.preventCatalogRefresh) {
              const e = await this.#r.state
                .pipe((0, n.P)(), (0, c.j)("catalogCacheKey"))
                .toPromise();
              let t = null;
              try {
                t = await this.#i.getCatalog(e);
              } catch {}
              null !== t &&
                t.body &&
                (await this.#r.dispatch(u.y4, t.body, t.cacheKey));
            }
          } finally {
            this.#o();
          }
        }
      };
      l = (0, a.gn)(
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
        l
      );
    },
    30248: (e, t, s) => {
      s.d(t, { X: () => u });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(45437),
        n = s(69949),
        c = s(93082),
        o = s(5384),
        h = s(27170);
      let u = class {
        #U;
        #r;
        #P;
        constructor(e, t) {
          (this.#U = e), (this.#r = t);
        }
        attached() {
          this.#P = this.#U.onTrainerActivated((e) => {
            e.onValueSetError((e) => {
              e.cheatId && this.markUnread(e.cheatId);
            });
          });
        }
        detached() {
          this.#P && (this.#P.dispose(), (this.#P = null));
        }
        markRead(e, t) {
          if (!t) return;
          const s = (0, o.Wu)(t);
          this.cheatBlueprintInstructionsRead[e] !== s &&
            this.#r.dispatch(h.ZM, e, s);
        }
        markUnread(e) {
          this.#r.dispatch(h.ZM, e, null);
        }
        isRead(e, t) {
          return !t || this.cheatBlueprintInstructionsRead[e] === (0, o.Wu)(t);
        }
      };
      u = (0, a.gn)(
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
        u
      );
    },
    26020: (e, t, s) => {
      s.d(t, { W: () => d });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(81110),
        n = s(339),
        c = s(35969),
        o = s(93082),
        h = s(51722);
      function u() {
        (0, i.signalBindings)("content-target");
      }
      let d = class {
        #O;
        #y;
        #S;
        #E;
        #F;
        constructor(e, t) {
          (this.#S = new n.yM()), (this.#O = e.info.region), (this.#y = t);
        }
        onReevaluationRequired(e) {
          return this.#S.subscribe("_", e);
        }
        activate() {
          (this.#E = this.#y.onLocaleChanged(() => {
            this.#R(this.#y.getEffectiveLocale()), this.#S.publish("_"), u();
          })),
            this.#R(this.#y.getEffectiveLocale());
        }
        deactivate() {
          this.#E.dispose(),
            (this.#E = null),
            this.#S.dispose(),
            (this.#S = null);
        }
        audienceChanged() {
          this.#S.publish("_"), u();
        }
        #R(e) {
          this.#F = e.language;
        }
        isApplicable(e) {
          return e.target
            ? !(
                e.target.countries &&
                this.#O &&
                !e.target.countries.includes(this.#O)
              ) &&
                !(
                  e.target.languages && !e.target.languages.includes(this.#F)
                ) &&
                (!e.target.audience ||
                  (0, h.yE)(this.audience, e.target.audience))
            : !e.audience || (0, h.yE)(this.audience, e.audience);
        }
      };
      d = (0, a.gn)(
        [
          (0, i.autoinject)(),
          (0, o.b)({
            setup: "activate",
            teardown: "deactivate",
            selectors: { audience: (0, o.g)("account", "audience") },
          }),
          (0, a.w6)("design:paramtypes", [r.f, c.oc]),
        ],
        d
      );
    },
    2789: (e, t, s) => {
      s.d(t, { y: () => n });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(93082);
      let n = class {
        attached() {}
        detached() {}
        get creators() {
          return this.catalog
            ? Object.values(this.catalog.creators)
                .filter((e) => e.active)
                .map((e) => {
                  const t = Object.values(this.catalog.games)
                    .filter((t) => t.creatorId === e.id)
                    .reduce((e, t) => e + (t.trainer?.cheatCount ?? 0), 0);
                  return { ...e, cheatCount: t };
                })
                .sort((e, t) => t.cheatCount - e.cheatCount)
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

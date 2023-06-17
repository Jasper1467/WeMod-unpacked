"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [8666],
  {
    27099: (e, t, a) => {
      a.d(t, { T: () => y });
      var i = a(70655),
        s = a("aurelia-event-aggregator"),
        r = a("aurelia-framework"),
        n = a(53294),
        l = a(56901),
        o = a(29242),
        c = a(81110),
        d = a(30206),
        h = a(35969),
        m = a(93082),
        u = a(57638),
        g = a(51674),
        p = a(30035),
        f = a(77986);
      const v = 256,
        w = 256;
      let y = class {
        #e;
        #t;
        #a;
        #i;
        #s;
        constructor(e, t, a, i, s) {
          (this.#e = e),
            (this.#t = t),
            (this.#a = a),
            (this.#i = i),
            (this.#s = s);
        }
        attached() {}
        detached() {}
        async create(e, t) {
          const a = this.catalog.games[e],
            i = this.catalog.titles[a?.titleId];
          if (!a || !i) return;
          const s = await this.#r(a);
          await this.#e.createDesktopShortcut(
            `wemod://play?titleId=${i.id}&gameId=${a.id}`,
            this.#t.getValue("desktop_shortcut.play_$title", { title: i.name }),
            s
          ),
            this.#a.publish(new o.EF(t, a.id));
        }
        #n(e) {
          return new Promise((t) => {
            const a = new Image();
            a.addEventListener("load", () => t(a), { once: !0 }), (a.src = e);
          });
        }
        async #r(e) {
          const t = this.#s.getPreferredInstallationInfo(e.id).app;
          if (!t) return null;
          const a = await this.#i.getIcon(t.platform, t.sku);
          if (!a) return null;
          const i = (0, u.DZ)(a).toLowerCase();
          let s;
          if (
            (".ico" === i
              ? (s = await this.#l(a))
              : [".jpg", ".jpeg", ".png"].includes(i) && (s = await this.#n(a)),
            !s)
          )
            return null;
          const r = await this.#o(s),
            n = await this.#c(e.id);
          try {
            this.#d(n, r);
          } catch {
            return null;
          }
          return n;
        }
        async #o(e) {
          const t = document.createElement("canvas"),
            a = t.getContext("2d"),
            i = await this.#n(f);
          if (((t.width = v), (t.height = w), e instanceof ImageData)) {
            const t = await window.createImageBitmap(
              e,
              0,
              0,
              e.width,
              e.height,
              { resizeWidth: v, resizeHeight: w, resizeQuality: "high" }
            );
            a.drawImage(t, 0, 0);
          }
          e instanceof HTMLImageElement && a.drawImage(e, 0, 0, v, w),
            a.drawImage(i, v - i.width - 16, w - i.height - 16);
          const s = await new Promise((e) => t.toBlob(e));
          return await new Promise((e, t) => {
            const a = new FileReader();
            a.addEventListener("loadend", () => e(new Uint8Array(a.result)), {
              once: !0,
            }),
              a.addEventListener(
                "error",
                () => t(new Error("Failed to read image.")),
                { once: !0 }
              ),
              a.readAsArrayBuffer(s);
          });
        }
        async #l(e) {
          try {
            const t = await l.promises.readFile(e),
              a = (await n.parse(t)).sort((e, t) => t.width - e.width)[0];
            if (a.data instanceof Uint8Array) {
              const e = new Image();
              return (
                (e.src = URL.createObjectURL(
                  new Blob([a.buffer], { type: "image/png" })
                )),
                e
              );
            }
            return new ImageData(a.data, a.width, a.height);
          } catch {
            return null;
          }
        }
        async #d(e, t) {
          const a = Buffer.from(t),
            i = await (0, g.N)(a);
          await l.promises.writeFile(e, i);
        }
        async #c(e) {
          const t = this.#i.iconCacheDirectory;
          return (
            (await l.promises
              .stat(t)
              .then((e) => e.isDirectory())
              .catch(() => !1)) || (await l.promises.mkdir(t)),
            (0, u.v_)(t, `${e}.ico`)
          );
        }
      };
      y = (0, i.gn)(
        [
          (0, m.b)({
            setup: "attached",
            teardown: "detached",
            selectors: { catalog: (0, m.g)("catalog") },
          }),
          (0, r.autoinject)(),
          (0, i.w6)("design:paramtypes", [c.f, h.oc, s.h, d.w, p.c]),
        ],
        y
      );
    },
    82826: (e, t, a) => {
      a.d(t, { x: () => l });
      var i = a(70655),
        s = a("aurelia-dialog"),
        r = a("aurelia-framework"),
        n = a(11912);
      let l = class {
        #h;
        constructor(e) {
          this.#h = e;
        }
        attached() {}
        detached() {}
        async hasOpenDialog() {
          return await (0, n.UC)(), this.#h.hasOpenDialog;
        }
      };
      l = (0, i.gn)(
        [
          (0, r.autoinject)(),
          (0, i.w6)("design:paramtypes", [s.DialogService]),
        ],
        l
      );
    },
    23924: (e, t, a) => {
      a.d(t, { O: () => G });
      var i = a(70655),
        s = a("aurelia-event-aggregator"),
        r = a("aurelia-framework"),
        n = a(45437),
        l = a(30248),
        o = a(38650),
        c = a(69949),
        d = a(62522),
        h = a(29242),
        m = a(81110),
        u = a(58694),
        g = a(35969),
        p = a(93082),
        f = a(51722),
        v = a(27170),
        w = a(11912),
        y = a(81866),
        I = a(87632),
        b = a(76330);
      function _(e) {
        return "number" == typeof e ? parseFloat((e / 1e3).toFixed(2)) : null;
      }
      const A = {
          [o.$c.AcquiringBinary]: "acquiring_binary",
          [o.$c.EnsuringBinaryAccess]: "ensuring_binary_access",
          [o.$c.CheckingInternalBinaries]: "checking_internal_binaries",
          [o.$c.FindingProcess]: "finding_process",
          [o.$c.ValidatingProcess]: "validating_process",
          [o.$c.CreatingTrainerHost]: "creating_trainer_host",
          [o.$c.Injecting]: "injecting",
          [o.$c.InitializingIpc]: "initializing_ipc",
          [o.$c.Executing]: "executing_trainer",
          [o.$c.Connecting]: "connecting",
          [o.$c.Activating]: "activating",
          [o.$c.Active]: "active",
          [o.$c.Ended]: "ended",
        },
        P = {
          [o.YN.Canceled]: "canceled",
          [o.YN.ElevationDenied]: "elevation_denied",
          [o.YN.Error]: "error",
          [o.YN.Incompatible]: "incompatible",
          [o.YN.GameAlreadyRunning]: "internal_launch_required",
          [o.YN.GameNotRunning]: "external_launch_required",
          [o.YN.Success]: "success",
          [o.YN.TimedOut]: "timeout",
        },
        k = {
          1: "hotkey",
          2: "control",
          0: "trainer",
          3: "remote",
          4: "overlay",
          5: "save_cheats",
        },
        T = { 2: "all_updates", 1: "next_update" };
      let G = class {
        #m;
        #u;
        #a;
        #g;
        #p;
        #f;
        #e;
        #v;
        #w;
        #t;
        #y;
        #I;
        #b;
        constructor(e, t, a, i, s, r, n, l, o, c) {
          (this.#b = {
            [v.D3]: this.#_,
            [v.Uh]: this.#A,
            [v.b9]: this.#P,
            [v.IB]: this.#k,
          }),
            (this.#m = e),
            (this.#u = t),
            (this.#a = a),
            (this.#g = i),
            (this.#p = s),
            (this.#f = r),
            (this.#e = n),
            (this.#v = l),
            (this.#w = o),
            (this.#t = c);
        }
        activate() {
          this.#m.user("last_app_version", this.#e.info.version),
            this.#m.user("system_locale", this.#e.info.locale),
            this.#T(),
            this.accountChanged(this.account),
            this.flags.firstRun && this.#G("first_open"),
            this.#e.isInTraySinceStartup ||
              this.#G("app_enter", { firstRun: this.flags.firstRun }, y.$);
          const e = this.#D.bind(this);
          this.#u.registerMiddleware(e, n.Pt.After),
            (this.#y = new w.K4()
              .push(this.#t.onLocaleChanged(() => this.#T()))
              .pushFunction(() => this.#u.unregisterMiddleware(e)));
        }
        deactivate() {
          this.#y.dispose(), (this.#y = null);
        }
        attached() {
          this.#I = new w.K4([
            this.#g.onNewTrainer((e) => {
              const t = this.#C(e);
              if (t) {
                const a = e.getMetadata(c.z9);
                this.#G(
                  "trainer_launch",
                  Object.assign({ trigger: a.trigger }, t),
                  y.$
                );
              }
            }),
            this.#g.onTrainerActivated(this.#$.bind(this)),
            this.#g.onTrainerEnded((e) =>
              this.#G(
                "trainer_end",
                this.#C(e, {
                  trainerTotalDuration: _(e.totalDuration),
                  trainerLaunchDuration: _(e.launchDuration),
                  trainerActiveDuration: _(e.activeDuration),
                  trainerLaunchResult: P[e.launchResult] ?? null,
                  trainerFinalState: A[e.finalState] ?? null,
                }),
                y.$
              )
            ),
            this.#p.onConnectionStatusChanged((e) => {
              "connected" === e && this.#G("overlay_connect");
            }),
            this.#f.onStatusChanged(this.#E.bind(this)),
            this.#e.onClosedToTray(() => this.#G("app_background")),
            this.#e.onRestoredFromTray(() => this.#G("app_open")),
            this.#e.onAdViewMessage(this.#S.bind(this)),
            this.#a.subscribe(h.Us, (e) =>
              this.#G("pro_cta_click", { ctaId: e.id }, y.$)
            ),
            this.#a.subscribe(h.Ax, (e) =>
              this.#G(
                "objective_open",
                { objectiveId: e.objectiveId, completed: e.completed },
                y.$
              )
            ),
            this.#a.subscribe(h.xp, (e) =>
              this.#G(
                "game_boost",
                this.#N(e.gameId, { boostsRemaining: this.account.boosts }),
                y.$
              )
            ),
            this.#a.subscribe(h.Bx, (e) =>
              this.#G(
                "game_follow",
                this.#N(e.gameId, { followType: T[e.followType] }),
                y.$
              )
            ),
            this.#a.subscribe(h.PE, (e) =>
              this.#G("game_unfollow", this.#N(e.gameId), y.$)
            ),
            this.#a.subscribe(h.mU, () => this.#G("subscription_resume")),
            this.#a.subscribe(h.TD, () =>
              this.#G("subscription_reactivate", {}, y.$)
            ),
            this.#a.subscribe(h.kx, (e) =>
              this.#G(
                "title_link_click",
                {
                  location: e.location,
                  titleId: e.titleId,
                  gameId: e.gameId || null,
                  trainerId: e.trainerId || null,
                  searchResult: e.searchResult || !1,
                  ...(this.#O(e.titleId) || {}),
                },
                y.$
              )
            ),
            this.#a.subscribe(h.wg, (e) =>
              this.#G(
                "game_install_link_click",
                this.#N(e.gameId, {
                  uriScheme: e.uri.substring(0, e.uri.indexOf(":")),
                  freeGame: e.free,
                }),
                y.$
              )
            ),
            this.#a.subscribe(h.o4, (e) =>
              this.#G("search", { location: e.location, terms: e.terms }, y.$)
            ),
            this.#a.subscribe(h.EF, (e) =>
              this.#G(
                "create_desktop_shortcut_click",
                this.#N(e.gameId, { trigger: e.trigger })
              )
            ),
            this.#a.subscribe(h.lc, (e) =>
              this.#G(
                e.enabled ? "save_cheats_enable" : "save_cheats_disable",
                this.#N(e.gameId, { trigger: e.trigger }),
                y.$
              )
            ),
            this.#a.subscribe(h.Y_, (e) =>
              this.#G("suggest_cheats", this.#N(e.gameId), y.$)
            ),
            this.#a.subscribe(h.qC, (e) =>
              this.#G("coaching_tip_show", {
                id: e.id,
                nonInteraction: e.nonInteraction,
              })
            ),
            this.#a.subscribe(h.PC, (e) =>
              this.#G("coaching_tip_hide", { id: e.id, trigger: e.trigger })
            ),
            this.#a.subscribe(h.dR, (e) => this.#V(e.trainerInfo)),
            this.#a.subscribe(h.e4, (e) =>
              this.#G(e.name, this.#j(e.mapId, e.params), e.dispatch)
            ),
            (0, w.Q7)(
              window,
              "resize",
              (() => {
                let e;
                const t = () =>
                  this.#G("window_resize", {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    maximized: this.#e.maximized,
                  });
                return () => {
                  clearTimeout(e), (e = setTimeout(t, 1e4));
                };
              })()
            ),
          ]);
        }
        detached() {
          this.#I.dispose(), (this.#I = null);
        }
        #T() {
          this.#m.user("app_locale", this.#t.getEffectiveLocale().toString());
        }
        accountChanged(e) {
          this.#m.user("subscription_tier", e.subscription ? "pro" : "free");
        }
        installedGameVersionsChanged(e) {
          e && this.#m.user("installed_games", Object.keys(e).length);
        }
        #G(e, t, a) {
          !1 !== t && this.#m.event(e, t, a);
        }
        #C(e, t = {}) {
          const a = e.getMetadata(c.z9);
          return Object.assign(
            this.#N(a.info.gameId, {
              trainerId: a.info.id,
              appPlatform: a.app.platform,
              appSku: a.app.platform === u.$ ? null : a.app.sku,
              gameVersion: a.gameVersion,
              gameVersionSupported:
                null === a.gameVersion
                  ? null
                  : a.info.supportedVersions.includes(a.gameVersion),
            }),
            t
          );
        }
        #N(e, t = {}) {
          const a = this.catalog.games[e];
          return (
            !!a &&
            this.#O(
              a.titleId,
              Object.assign(
                {
                  gameId: a.id,
                  gamePlatform: a.platformId,
                  creatorId: a.creatorId ?? null,
                },
                t
              )
            )
          );
        }
        #O(e, t = {}) {
          const a = this.catalog.titles[e];
          return !!a && Object.assign({ titleId: a.id, titleName: a.name }, t);
        }
        #j(e, t = {}) {
          const a = this.catalog.maps.find((t) => t.id === e);
          return (
            !!a &&
            this.#O(a.titleId, Object.assign({ mapId: e, mapName: a.name }, t))
          );
        }
        #$(e) {
          const t = this.#C(e, { trainerLaunchDuration: _(e.launchDuration) });
          this.#G("trainer_activate", t, y.$);
          const a = e.getMetadata(c.z9).info.blueprint.cheats,
            i = new Set(),
            s = new Map(),
            r = (0, w.tI)(() => {
              const n = Date.now() - 500;
              for (const [e, r] of s)
                if (r.timestamp <= n) {
                  s.delete(e);
                  const n = a.find((t) => t.target === e);
                  if (void 0 !== n) {
                    const e = Object.assign(
                      {
                        cheatUuid: n.uuid,
                        cheatName: n.name,
                        cheatType: n.type,
                        cheatCategory: n.category,
                        cheatTarget: n.target,
                        cheatInstructionsRead: this.#v.isRead(
                          n.uuid,
                          n.instructions
                        ),
                        cheatHasInstructions: !!n.instructions,
                      },
                      t,
                      r.params
                    );
                    r.error
                      ? this.#G(
                          "trainer_cheat_error",
                          Object.assign(
                            {
                              cheatAndTitleName: `${e.cheatName} - ${e.titleName}`,
                            },
                            e
                          ),
                          y.$
                        )
                      : i.has(n.uuid) ||
                        (i.add(n.uuid),
                        this.#G(
                          "trainer_cheat",
                          Object.assign(
                            {
                              cheatSource: k[r.event.source],
                              newValue: r.event.value,
                            },
                            e
                          ),
                          y.$
                        ));
                  }
                }
              0 === s.size && e.hasEnded() && r.dispose();
            }, 500),
            n = new w.K4();
          n.push(
            e.onValueSet((t) => {
              0 !== t.source &&
                s.set(t.name, {
                  error: !1,
                  timestamp: Date.now(),
                  params: {
                    trainerTotalDuration: _(e.totalDuration),
                    trainerActiveDuration: _(e.activeDuration),
                  },
                  event: t,
                });
            })
          ),
            n.push(
              e.onValueSetError((t) => {
                s.set(t.name, {
                  error: !0,
                  timestamp: Date.now(),
                  params: {
                    trainerTotalDuration: _(e.totalDuration),
                    trainerActiveDuration: _(e.activeDuration),
                  },
                });
              })
            ),
            e.onEnded(() => n.dispose());
        }
        #E(e) {
          e === b.d.Connected && this.#G("remote_connect", {}, y.$),
            e === b.d.Disconnected && this.#G("remote_disconnect", {}, y.$);
        }
        #S(e) {
          ["ad_start", "ad_click", "ad_default_click", "ad_load"].includes(
            e.message
          ) &&
            this.#G(e.message, {
              location: e.sender,
              provider: "playwire",
              defaultVariant: e.params.defaultVariant,
            }),
            "ad_default_click" === e.message &&
              (this.#a.publish(new h.Us("default_playwire_popup_ad")),
              this.#w.open({
                trigger: "default_playwire_popup_ad",
                nonInteraction: !1,
              }));
        }
        #D(e, t, a, i) {
          if (i) {
            const e = this.#b[i.name];
            e && queueMicrotask(() => e.call(this, t, ...(i.params || [])));
          }
          return e;
        }
        #A(e, t, a, i, s) {
          this.#G(
            "hotkey_edit",
            this.#N(t, {
              cheatUuid: a,
              hotkeyIndex: i,
              hotkeyEditType:
                void 0 === s ? "reset" : null === s ? "unset" : "set",
            }),
            y.$
          );
        }
        #_(e, t, a, i) {
          i ||
            Object.keys(t)
              .filter((a) => t[a] !== e.settings[a])
              .forEach((i) =>
                this.#G("app_setting_change", {
                  setting: i,
                  oldValue: e.settings[i] ?? null,
                  newValue: t[i] ?? null,
                  source: a,
                })
              );
        }
        #P(e, t) {
          this.#G(
            e.favoriteTitles[t] ? "title_unfavorite" : "title_favorite",
            this.#O(t, { titleId: t }),
            y.$
          );
        }
        #k(e, t) {
          this.#G("custom_game_install", this.#N(t));
        }
        #V(e) {
          e.blueprint.cheats.filter((e) => (0, f.yE)(e.flags, 2)).length > 0 &&
            this.#G("beta_mods_view", this.#N(e.gameId));
        }
      };
      G = (0, i.gn)(
        [
          (0, r.autoinject)(),
          (0, p.b)({
            setup: "activate",
            teardown: "deactivate",
            selectors: {
              account: (0, p.g)("account"),
              catalog: (0, p.g)("catalog"),
              flags: (0, p.g)("flags"),
              installedGameVersions: (0, p.g)("installedGameVersions"),
            },
          }),
          (0, i.w6)("design:paramtypes", [
            y.c,
            n.yh,
            s.h,
            c.hc,
            I.F0,
            b.K,
            m.f,
            l.X,
            d.x,
            g.oc,
          ]),
        ],
        G
      );
    },
    25626: (e, t, a) => {
      a.d(t, { K: () => m });
      var i = a(70655),
        s = a("aurelia-framework"),
        r = a(16511),
        n = a(23739),
        l = a(81110),
        o = a(93082),
        c = a(11912),
        d = a(26478);
      const h = r.fY + "/";
      let m = class {
        #e;
        #F;
        #x;
        #R;
        #U;
        constructor(e, t, a) {
          (this.#e = e), (this.#F = t), (this.#x = a);
        }
        attached(e) {
          (this.#R = e),
            (this.#U = new c.K4()
              .push(this.#e.addNewWindowInterceptor(this.#H.bind(this)))
              .push(this.#e.setNewWindowErrorHandler(this.#z.bind(this)))
              .pushEventListener(document, "click", this.#L.bind(this))
              .pushEventListener(document, "auxclick", this.#L.bind(this)));
        }
        detached() {
          this.#U.dispose(), (this.#U = null);
        }
        #z(e) {
          this.#x.toast({
            content: "url_handler.failed_to_open_$url",
            i18nParams: { url: e.length > 30 ? e.substring(0, 30) + "..." : e },
            type: "alert",
            onTop: !0,
            actions: [
              {
                label: "url_handler.copy_url",
                onclick: () => this.#e.copyText(e),
              },
            ],
          });
        }
        #L(e) {
          const t = this.#B(e.target);
          if (!t) return;
          if ("auxclick" === e.type) return void e.preventDefault();
          const a = t.getAttribute("href");
          a && "#" !== a
            ? a.startsWith("#/") ||
              (e.preventDefault(), window.open(a, "_blank"))
            : e.preventDefault();
        }
        #B(e) {
          for (; e; ) {
            if ("A" === e.tagName) return e;
            e = e.parentElement;
          }
          return null;
        }
        async #H(e) {
          if ((e = this.#M(e)).startsWith(h)) {
            const t = this.#K(new URL(e));
            if (!0 === t || "string" == typeof t) return t;
            if (e.endsWith("#auth")) {
              e = e.substring(0, e.length - "#auth".length);
              try {
                const t = await this.#F.requestWebAuthCode();
                return `${e}${e.includes("?") ? "&" : "?"}auth=${t}`;
              } catch {}
            }
            return e;
          }
        }
        #M(e) {
          return e.startsWith("website://") ? e.replace("website://", h) : e;
        }
        #K(e) {
          if ("/cheats" === e.pathname)
            return this.#R.navigateToRoute("titles"), !0;
          if ("/queue" === e.pathname)
            return this.#R.navigateToRoute("queue"), !0;
          if ("/gift" === e.pathname)
            return this.#e.activate(`wemod://gift${e.search}`), !0;
          const t = e.pathname.split("/");
          if (3 === t.length && "cheats" === t[1]) {
            const e = t[2].endsWith("-trainers") ? t[2].slice(0, -9) : t[2],
              a = Object.values(this.catalog.titles).find((t) => t.slug === e);
            if (a)
              return (
                this.#R.navigateToRoute("title", {
                  titleId: a.id,
                  gameId: "",
                  trainerId: "",
                }),
                !0
              );
          }
          return (
            3 === t.length &&
            "surveys" === t[1] &&
            (e.searchParams.set("user_id", this.token.userId), e.toString())
          );
        }
      };
      m = (0, i.gn)(
        [
          (0, s.autoinject)(),
          (0, o.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              catalog: (0, o.g)("catalog"),
              token: (0, o.g)("token"),
            },
          }),
          (0, i.w6)("design:paramtypes", [l.f, n.K, d.x]),
        ],
        m
      );
    },
    19748: (e, t, a) => {
      a.d(t, { r: () => $ });
      var i = a(70655),
        s = a(71017),
        r = a("aurelia-event-aggregator"),
        n = a("aurelia-framework"),
        l = a(45437),
        o = a(56901),
        c = a(23739),
        d = a(69949),
        h = a(29242),
        m = a(81110),
        u = a("services/bugsnag/index"),
        g = a("shared/api/index"),
        p = a("shared/api/value-converters"),
        f = a(339),
        v = a(35969),
        w = a(93082),
        y = a(66302),
        I = a(54934),
        b = a("shared/utility/resources/value-converters/platform"),
        _ = a(5384),
        A = a(15066),
        P = a(27170),
        k = a(77995),
        T = a(57638),
        G = a(78219),
        D = a(26478),
        C = a(81866);
      let $ = class {
        #W;
        #q;
        #Y;
        #F;
        #u;
        #x;
        #a;
        #e;
        #t;
        #Z;
        #J;
        #Q;
        #m;
        constructor(e, t, a, i, s, r, n, l, o, c) {
          (this.followedGames = []),
            (this.#F = e),
            (this.#u = t),
            (this.#x = a),
            (this.#a = i),
            (this.#e = s),
            (this.#t = r),
            (this.#Z = n),
            (this.#J = l),
            (this.#Q = o),
            (this.#m = c);
        }
        attached() {
          (this.#W = (0, f.tI)(() => this.#X(), (0, G.i)(20, 25))),
            (this.#q = (0, f.tI)(() => this.#ee(), 6e4));
        }
        detached() {
          this.#W.dispose(), this.#q.dispose();
        }
        async followGames(e, t) {
          if (0 === e.length) return !0;
          try {
            let a;
            for (let i = 0; i < e.length; i += 500) {
              const s = e.slice(i, i + 500);
              a = await this.#F.followGames(s, t);
            }
            return (
              await this.#te(a),
              e.forEach((e) => this.#a.publish(new h.Bx(e, t))),
              !0
            );
          } catch (e) {
            return (
              this.#x.toast({
                content: "follow_games.failed_to_set_notification_preferences",
                type: "alert",
              }),
              e instanceof g.ResponseError || (0, u.report)(e),
              !1
            );
          }
        }
        async unfollowGames(e) {
          if (0 === e.length) return !0;
          try {
            return (
              await this.#te(await this.#F.unfollowGames(e)),
              e.forEach((e) => this.#a.publish(new h.PE(e))),
              !0
            );
          } catch {
            return (
              this.#x.toast({
                content: "follow_games.failed_to_set_notification_preferences",
                type: "alert",
              }),
              !1
            );
          }
        }
        async unfollowAllGames() {
          try {
            return await this.#F.unfollowAllGames(), await this.#te([]), !0;
          } catch {
            return (
              this.#x.toast({
                content: "follow_games.failed_to_set_notification_preferences",
                type: "alert",
              }),
              !1
            );
          }
        }
        async #X() {
          try {
            const e = await this.#F.getFollowedGames();
            await this.#te(e);
          } catch {}
        }
        async #te(e) {
          const t = e.map((e) => this.#ae(e));
          JSON.stringify(t) !== JSON.stringify(this.followedGames) &&
            (await this.#u.dispatch(P.b, t)),
            this.#ee();
        }
        #ae(e) {
          const t = this.catalog.games[e.gameId];
          return {
            ...e,
            createdAt: t?.trainer?.createdAt || null,
            updatedAt: t?.trainer?.updatedAt || null,
          };
        }
        catalogChanged() {
          this.#te(this.followedGames);
        }
        async #ee() {
          const e = (await this.#e.getSystemIdleTime()) >= 30;
          if (e) return void (this.#Y = Date.now());
          const t = !this.#Y || (0, I._Q)(Date.now(), this.#Y) >= 6e4,
            a = !this.#Q.trainer && !e && t,
            i = [],
            s = new Date(Date.now() - 864e5);
          this.followedGames.forEach((e) => {
            const t = e.gameId,
              r = this.gameHistory[t]?.lastNotification;
            if (!r) return void i.push(t);
            const n = new Date(e.updatedAt),
              l = new Date(r);
            (0, I.Ax)(n, l) && (0, I.Ax)(s, l) && a && this.showNotification(e);
          }),
            i.length && this.#u.dispatch(P.is, i);
        }
        async showNotification(e) {
          if (
            (await this.#u.dispatch(P.xW, e.gameId),
            !this.allowDesktopNotifications || !this.#e.isWindows10OrGreater)
          )
            return;
          const t = this.#Z.toView(e.gamePlatformId),
            a = e.updatedAt === e.createdAt ? "release" : "update",
            i = `wemod:titles/${e.titleId}?gameId=${e.gameId}&trigger=notification:${a}/${e.gameId}`,
            s = new k.G(e.titleName)
              .addText(
                this.#t.getValue(
                  `follow_games.$game_for_$platform_${a}_message`,
                  { game: e.titleName, platform: t }
                )
              )
              .setActivationType("protocol")
              .setLaunchString(i);
          e.titleThumbnail && (await this.#ie(s, e.titleThumbnail, a)),
            s.addAction({
              activationType: "protocol",
              content: this.#t.getValue("follow_games.play_now"),
              arguments: i,
            }),
            (await this.#e.showToast(s.toXml())) &&
              this.#m.event(
                "notification_show",
                { type: a, gameId: e.gameId },
                C.$
              );
        }
        async #ie(e, t, a) {
          try {
            const i = this.#J.toView(t, { size: 460 }),
              r = (0, T.DZ)(new URL(i).pathname),
              n = await this.#n(i),
              l = await this.#se(n, a),
              c = Buffer.from(await l.arrayBuffer()),
              d = s.join(this.#e.info.paths.temp, (0, _.O1)(16) + r);
            await o.promises.writeFile(d, c),
              e.addImage(d),
              setTimeout(() => {
                o.promises.unlink(d).catch(y.K);
              }, 5e3);
          } catch {}
        }
        async #se(e, t) {
          const a = this.#t.getValue(
              `follow_games.${t}_notification_image_watermark`
            ),
            i = document.createElement("canvas"),
            s = i.getContext("2d");
          (i.width = 460),
            (i.height = 215),
            s.drawImage(e, 0, 0, 460, 215),
            (s.font = "bold 30px/40px Inter"),
            (s.textBaseline = "middle");
          const r = s.measureText(a);
          return (
            s.beginPath(),
            s.rect(9, 151, r.width + 32, 54),
            (s.fillStyle = (0, A.L)("accent")),
            s.fill(),
            (s.fillStyle = "#000"),
            s.fillText(a, 25, 178),
            await new Promise((e) => i.toBlob(e))
          );
        }
        #n(e) {
          return new Promise((t) => {
            const a = new Image();
            (a.crossOrigin = "anonymous"),
              (a.onload = () => {
                t(a);
              }),
              (a.src = e);
          });
        }
      };
      $ = (0, i.gn)(
        [
          (0, w.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              gameHistory: (0, w.g)("gameHistory"),
              catalog: (0, w.g)("catalog"),
              allowDesktopNotifications: (0, w.g)(
                "settings",
                "allowDesktopNotifications"
              ),
              followedGames: (0, w.g)("followedGames"),
            },
          }),
          (0, n.autoinject)(),
          (0, i.w6)("design:paramtypes", [
            c.K,
            l.yh,
            D.x,
            r.h,
            m.f,
            v.oc,
            b.PlatformNameValueConverter,
            p.CdnValueConverter,
            d.hc,
            C.c,
          ]),
        ],
        $
      );
    },
    74036: (e, t, a) => {
      a.d(t, {
        AD: () => V,
        Bd: () => u,
        PV: () => P,
        RB: () => C,
        RZ: () => v,
        Si: () => b,
        US: () => T,
        W8: () => $,
        Wz: () => w,
        ZR: () => g,
        _k: () => O,
        aC: () => A,
        iu: () => k,
        ly: () => y,
        no: () => _,
        sf: () => I,
        sq: () => f,
      });
      var i = a(70655),
        s = a("aurelia-event-aggregator"),
        r = a("aurelia-framework"),
        n = a(45437),
        l = a(69157),
        o = a(41931),
        c = a(2314),
        d = a(51722),
        h = a(11912);
      const m = ["catalog", "gameHistory", "installedGameVersions"],
        u = {
          id: "all-games",
          getGames: (e) =>
            Object.values(e.catalog.games)
              .filter((e) => (0, d.yE)(e.flags, c.p.Available))
              .sort((e, t) =>
                t.trainer.createdAt.localeCompare(e.trainer.createdAt)
              ),
          mergeSimilarGames: !0,
        },
        g = {
          id: "all-games-alpha",
          getGames: (e) =>
            u.getGames(e).sort((t, a) => {
              const i = e.catalog.titles[t.titleId],
                s = e.catalog.titles[a.titleId];
              return i.name.localeCompare(s.name);
            }),
          mergeSimilarGames: !0,
        },
        p = (e) => {
          const t = e.gameHistory,
            a = Object.values(e.catalog.games)
              .filter((t) => e.installedGameVersions.hasOwnProperty(t.id))
              .filter((e) => (0, d.yE)(e.flags, c.p.Available))
              .sort((e, t) => e.trainer.rank - t.trainer.rank),
            i = a.filter(
              (t) =>
                e.installedGameVersions[t.id]?.some((e) =>
                  t.trainer.supportedVersions.includes(e.version)
                ) ?? !1
            ),
            s = a.filter((e) => "string" == typeof t[e.id]?.lastPlayedAt),
            r = Object.values(e.correlatedUnavailableTitles)
              .flatMap((e) => e.games)
              .filter((t) => t.correlationIds.some((t) => !!e.installedApps[t]))
              .map((t) => E(t.id, e))
              .filter((e) => !!e),
            n = r.filter((e) => "string" == typeof t[e.id]?.lastPlayedAt),
            l = [...s, ...n].sort((e, a) =>
              t[a.id].lastPlayedAt.localeCompare(t[e.id].lastPlayedAt)
            ),
            o = i.filter((e) => !l.includes(e));
          l.push(...o);
          const h = a.filter((e) => !l.includes(e) && !i.includes(e));
          l.push(...h);
          const m = r.filter((e) => !n.find((t) => t.id === e.id));
          return l.push(...m), l;
        },
        f = {
          id: "my-games-dashboard",
          getGames: (e) =>
            p(e).filter(
              (t) =>
                e.catalog.games[t.id] ||
                "string" == typeof e.gameHistory[t.id]?.lastPlayedAt
            ),
          mergeSimilarGames: !0,
        },
        v = {
          id: "my-games-collection",
          getGames: (e) => {
            let t = p(e);
            const a = t.filter((e) => (0, d.yE)(e.flags, c.p.Available)),
              i = T.getGames(e).filter(
                (e) => !t.find((t) => t.titleId === e.titleId)
              );
            if (((t = [...t, ...i]), !a.length && t.length)) {
              const a = u
                .getGames(e)
                .filter((e) => e.tags.includes("free"))
                .filter((t) => !e.installedGameVersions.hasOwnProperty(t.id))
                .slice(0, 10);
              t = t.concat(a);
            }
            return t.sort((t, a) => {
              const i =
                  e.catalog.titles[t.titleId] ||
                  e.correlatedUnavailableTitles[t.titleId],
                s =
                  e.catalog.titles[a.titleId] ||
                  e.correlatedUnavailableTitles[a.titleId];
              return i.name.localeCompare(s.name);
            });
          },
          mergeSimilarGames: !0,
          watchKeys: ["favoriteTitles"],
        },
        w = {
          id: "my-games-activity-feed",
          getGames: (e) =>
            [
              ...Object.values(e.catalog.games).filter((t) =>
                e.installedGameVersions.hasOwnProperty(t.id)
              ),
              ...T.getGames(e),
              ...e.followedGames
                .map((t) => e.catalog.games[t.gameId])
                .filter((e) => !!e),
            ]
              .filter((e) => (0, d.yE)(e.flags, c.p.Available))
              .sort((e, t) =>
                t.trainer.updatedAt.localeCompare(e.trainer.updatedAt)
              ),
          mergeSimilarGames: !0,
          watchKeys: ["favoriteTitles", "account"],
        },
        y = {
          id: "my-games-follow",
          getGames: (e) => w.getGames(e),
          mergeSimilarGames: !1,
          watchKeys: ["favoriteTitles", "account"],
        },
        I = {
          id: "my-games-remote",
          getGames: (e) => {
            const t = Object.values(e.catalog.games)
                .filter((t) => e.installedGameVersions.hasOwnProperty(t.id))
                .filter((e) => (0, d.yE)(e.flags, c.p.Available))
                .sort((t, a) =>
                  e.catalog.titles[t.titleId].name.localeCompare(
                    e.catalog.titles[a.titleId].name
                  )
                ),
              a = e.gameHistory,
              i = t
                .filter((e) => "string" == typeof a[e.id]?.lastPlayedAt)
                .sort((e, t) =>
                  a[t.id].lastPlayedAt.localeCompare(a[e.id].lastPlayedAt)
                ),
              s = t.filter((e) => !i.includes(e));
            return i.push(...s), i;
          },
        },
        b = {
          id: "recently-played",
          getGames: (e) => {
            const t = e.gameHistory;
            return [
              ...Object.keys(t)
                .filter((e) => "string" == typeof t[e].lastPlayedAt)
                .filter((t) => e.catalog.games.hasOwnProperty(t))
                .map((t) => e.catalog.games[t]),
              ...Object.keys(t)
                .filter((e) => "string" == typeof t[e].lastPlayedAt)
                .filter((t) => !e.catalog.games[t])
                .map((t) => E(t, e))
                .filter((e) => !!e),
            ].sort((e, a) =>
              t[a.id].lastPlayedAt.localeCompare(t[e.id].lastPlayedAt)
            );
          },
        },
        _ = {
          id: "recently-played-available",
          getGames: (e) =>
            b.getGames(e).filter((e) => (0, d.yE)(e.flags, c.p.Available)),
        },
        A = {
          id: "most-popular",
          getGames: (e) =>
            Object.values(e.catalog.games)
              .filter((e) => (0, d.yE)(e.flags, c.p.Active))
              .sort((e, t) => e.trainer.rank - t.trainer.rank),
          mergeSimilarGames: !0,
        },
        P = {
          id: "new-releases",
          getGames: (e) =>
            Object.values(e.catalog.games)
              .filter((e) => (0, d.yE)(e.flags, c.p.Active))
              .sort((e, t) => {
                const a =
                  e.trainer.createdAt.localeCompare(e.trainer.updatedAt) >= 0
                    ? e.trainer.createdAt
                    : e.trainer.updatedAt;
                return (
                  t.trainer.createdAt.localeCompare(t.trainer.updatedAt) >= 0
                    ? t.trainer.createdAt
                    : t.trainer.updatedAt
                ).localeCompare(a);
              }),
          mergeSimilarGames: !0,
        },
        k = {
          id: "queue",
          getGames: (e) => e.catalog.queue.map((t) => e.catalog.games[t]),
        },
        T = {
          id: "favorites",
          getGames: (e) =>
            Object.keys(e.favoriteTitles)
              .filter((t) => e.catalog.titles[t] && e.catalog.titles[t].gameIds)
              .flatMap((t) => e.catalog.titles[t].gameIds)
              .map((t) => e.catalog.games[t])
              .filter((e) => (0, d.yE)(e.flags, c.p.Available))
              .sort((t, a) => {
                const i = e.catalog.titles[t.titleId],
                  s = e.catalog.titles[a.titleId];
                return i?.name.localeCompare(s?.name);
              }),
          watchKeys: ["favoriteTitles"],
          mergeSimilarGames: !0,
        };
      function G(e, t) {
        const a = e.localeCompare(t);
        return a > 0 && "steam" === e
          ? -1
          : (a < 0 && "steam" === t) || (a < 0 && "standalone" === e)
          ? 1
          : a > 0 && "standalone" === t
          ? -1
          : a;
      }
      function D(e, t) {
        const a = e.catalog.games[t],
          i = e.catalog.titles[a.titleId],
          s = e.gameHistory[a.id],
          r = a.trainer?.createdAt
            ? (0, l.Z)(new Date(a.trainer.createdAt), Date.now()) <= 7
            : null,
          n = a.trainer?.updatedAt
            ? (0, l.Z)(new Date(a.trainer.updatedAt), Date.now()) <= 7
            : null;
        return {
          titleId: i.id,
          titleThumbnail: i.thumbnail,
          titleName: i.name,
          titleTerms: [...i.terms],
          gameId: a.id,
          platformIds: [a.platformId],
          gameEdition: a.edition,
          creator: a.creatorId
            ? e.catalog.creators[a.creatorId].username
            : null,
          creatorAvatar: a.creatorId
            ? e.catalog.creators[a.creatorId].avatar
            : null,
          players: a.trainer?.players,
          secondsPlayed: e.gameHistory[a.id]?.playDuration || 0,
          createdAt: a.trainer?.createdAt,
          updatedAt: a.trainer?.updatedAt,
          lastPlayedAt: s && s.lastPlayedAt,
          isNew: r,
          isUpdated: n && !r,
          isAvailable: (0, d.yE)(a.flags, c.p.Available),
          isInstalled: e.installedGameVersions.hasOwnProperty(a.id),
          isChoice: a.tags.includes("choice"),
          isFree: a.tags.includes("free"),
          isFavorite: !!e.favoriteTitles[a.titleId],
          genres: i.genreIds.map((t) =>
            e.catalog.genres[t]?.slug.replaceAll("-", "_")
          ),
        };
      }
      function C(e, t) {
        const a = S(
          Object.values(e.catalog.games)
            .filter(
              (e) => e.titleId === t?.id && (0, d.yE)(e.flags, c.p.Active)
            )
            .map((t) => D(e, t.id)),
          (e, t) => e.titleId === t.titleId
        );
        return a.length ? a[0] : null;
      }
      function $(e, t) {
        return {
          titleId: e.id,
          titleThumbnail: e.thumbnail,
          titleName: e.name,
          titleTerms: [...e.terms],
          gameId: 1 === e.games.length ? e.games[0].id : null,
          platformIds: e.games.map((e) => e.platformId),
          gameEdition: null,
          creator: null,
          creatorAvatar: null,
          players: null,
          secondsPlayed: 0,
          createdAt: null,
          updatedAt: null,
          lastPlayedAt: null,
          isNew: !1,
          isUpdated: !1,
          isAvailable: !1,
          isInstalled: t,
          isChoice: !1,
          isFree: !1,
          isFavorite: !1,
          genres: [],
        };
      }
      function E(e, t) {
        const a = Object.values(t.correlatedUnavailableTitles).find((t) =>
          t.games.some((t) => t.id === e)
        );
        if (a) {
          const t = a.games.find((t) => t.id === e);
          return {
            id: t.id,
            titleId: a.id,
            platformId: t.platformId,
            correlationIds: t.correlationIds,
            purchaseUris: [],
            tags: [],
            flags: t.flags,
          };
        }
        return null;
      }
      function S(e, t) {
        const a = [],
          i = [];
        return (
          e.forEach((s) => {
            if (i.includes(s)) return;
            const r = e.filter((e) => s !== e && t(s, e));
            if (r.length) {
              i.push(...r), r.push(s);
              const e = [],
                t = [];
              for (const a of r)
                e.includes(a.platformIds[0]) || e.push(a.platformIds[0]),
                  t.includes(a.gameId) || t.push(a.gameId);
              const n = [...r].sort((e, t) =>
                  (t.createdAt || "").localeCompare(e.createdAt)
                )[0].createdAt,
                o = [...r].sort((e, t) =>
                  (t.updatedAt || "").localeCompare(e.updatedAt)
                )[0].updatedAt,
                c = n ? (0, l.Z)(new Date(n), Date.now()) <= 7 : null,
                d = o ? (0, l.Z)(new Date(o), Date.now()) <= 7 : null,
                h = {
                  ...s,
                  gameEdition: void 0,
                  gameId: 1 === t.length ? t[0] : null,
                  platformIds: e.sort(G),
                  players: r.reduce((e, t) => e + t.players, 0),
                  secondsPlayed: r.reduce((e, t) => e + t.secondsPlayed, 0),
                  createdAt: n,
                  updatedAt: o,
                  lastPlayedAt: [...r].sort((e, t) =>
                    (t.lastPlayedAt || "").localeCompare(e.lastPlayedAt)
                  )[0].lastPlayedAt,
                  isInstalled: r.some((e) => e.isInstalled),
                  isChoice: r.some((e) => e.isChoice),
                  isNew: c,
                  isUpdated: d && !c,
                };
              a.push(h);
            } else a.push(s);
          }),
          a
        );
      }
      class N {
        #a;
        #u;
        #re;
        #ne;
        constructor(e, t) {
          (this.games = []),
            (this.#a = new s.h()),
            (this.config = t),
            (this.#u = e),
            (this.#ne = m.concat(this.config.watchKeys || []));
        }
        initialize() {
          this.#re = this.#u.state
            .pipe((0, o.x)((e, t) => this.#ne.every((a) => e[a] === t[a])))
            .subscribe((e) => {
              (this.state = e), this.updateGames();
            });
        }
        updateGames() {
          if (!this.state) return;
          const e = this.config.getGames(this.state);
          (this.games &&
            e.length === this.games.length &&
            JSON.stringify(e) === JSON.stringify(this.games)) ||
            ((this.games = e), this.#a.publish("updated"));
        }
        dispose() {
          this.#re.unsubscribe(), (this.#re = null);
        }
        onUpdated(e) {
          return this.#a.subscribe("updated", e);
        }
      }
      class O {
        #le;
        #oe;
        constructor(e, t) {
          (this.items = []), (this.#le = e), (this.filter = t);
        }
        dispose() {
          this.#oe.dispose();
        }
        initialize() {
          (this.#oe = this.#le.onUpdated(() => {
            this.updateItems();
          })),
            this.updateItems();
        }
        updateItems() {
          const e = this.#le.state;
          if (!e) return;
          const t = this.#le.games;
          let a = this.#ce(t)
            .map((t) =>
              e.catalog.games[t.id]
                ? D(e, t.id)
                : e.correlatedUnavailableTitles[t.titleId]
                ? {
                    ...$(e.correlatedUnavailableTitles[t.titleId], !0),
                    platformIds: [t.platformId],
                  }
                : void 0
            )
            .filter((e) => !!e);
          (a = this.#le.config.mergeSimilarGames
            ? S(a, (e, t) => e.titleId === t.titleId)
            : a),
            (this.totalItems = a.length),
            this.filter?.maxItems && (a = a.slice(0, this.filter.maxItems)),
            (this.items = a);
        }
        #ce(e) {
          return (
            this.filter &&
              (this.filter.tags &&
                (e = e.filter((e) =>
                  e.tags.some((e) => this.filter.tags.includes(e))
                )),
              this.filter.genres?.length &&
                (e = e.filter((e) => {
                  const t = this.#le.state?.catalog.titles[e.titleId];
                  return (
                    t && t.genreIds.some((e) => this.filter.genres.includes(e))
                  );
                }))),
            e
          );
        }
      }
      (0, i.gn)(
        [
          (0, r.bindable)({ defaultBindingMode: r.bindingMode.toView }),
          (0, i.w6)("design:type", Number),
        ],
        O.prototype,
        "totalItems",
        void 0
      );
      let V = class {
        #u;
        #de;
        constructor(e) {
          (this.#de = new Map()), (this.#u = e);
        }
        attached() {}
        detached() {}
        async initialize() {
          const e = [f, v, w, A, u, b, P, k, T];
          for (const t of e) await (0, h.UC)(), this.#he(t);
        }
        #he(e) {
          const t = new N(this.#u, e);
          return t.initialize(), this.#de.set(e, t), t;
        }
        #me(e) {
          return this.#de.get(e) || this.#he(e);
        }
        getFilteredFeed(e, t) {
          const a = this.#me(e),
            i = new O(a, t);
          return i.initialize(), i;
        }
      };
      V = (0, i.gn)(
        [(0, r.autoinject)(), (0, i.w6)("design:paramtypes", [n.yh])],
        V
      );
    },
  },
]);

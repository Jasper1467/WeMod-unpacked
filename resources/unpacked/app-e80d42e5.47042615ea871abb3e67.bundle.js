"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [9450],
  {
    23015: (e, t, s) => {
      s.d(t, { e: () => y });
      var a = s(70655),
        i = s("aurelia-event-aggregator"),
        r = s("aurelia-framework"),
        n = s(45437),
        o = s(56901),
        h = s(18739),
        c = s(62546),
        l = s(23739),
        d = s(70824),
        g = s(29242),
        u = s(81110),
        p = s("shared/dialogs/basic-dialog"),
        m = s(35969),
        w = s(93082),
        f = s(84620),
        v = s(27170),
        b = s(11912);
      let y = class {
        #e;
        #t;
        #s;
        #a;
        #i;
        #r;
        #n;
        #o;
        constructor(e, t, s, a, i, r) {
          (this.#o = new Map()),
            (this.#e = e),
            (this.#t = t),
            (this.#s = s),
            (this.#a = a),
            (this.#i = i),
            (this.#r = r);
        }
        attached() {
          this.#n = new b.K4([
            this.#e.onGameMapWindowClosed(this.#h.bind(this)),
            this.#e.onGameMapWindowLoadError(this.#c.bind(this)),
          ]);
        }
        detached() {
          this.#n.dispose(), (this.#n = null);
        }
        #c(e) {
          this.#o.get(e)?.handleLoadError("window_load");
        }
        #h(e) {
          const t = this.#o.get(e);
          t && (this.#o.delete(e), t.handleClosed());
        }
        async openMap(e, t = !1) {
          const s = `game-map:${e.titleId}`,
            a =
              this.#o.get(s) ??
              new S(
                s,
                e.id,
                this.#t.createWebview({
                  mode: "window",
                  theme: this.theme,
                  locale: this.#s.getEffectiveLocale().baseName,
                  route: "game-map",
                  params: { mapId: e.id, debug: t ? "1" : void 0 },
                }),
                this.#a,
                this.#e,
                this.#i,
                this.#r
              );
          return (
            this.#o.set(s, a),
            await a.load(),
            await this.#e.showGameMapWindow(a.frameName),
            a.switchMap(e.id),
            a
          );
        }
      };
      y = (0, a.gn)(
        [
          (0, r.autoinject)(),
          (0, w.b)({
            setup: "attached",
            teardown: "detached",
            selectors: { theme: (0, w.g)("settings", "theme") },
          }),
          (0, a.w6)("design:paramtypes", [
            u.f,
            l.K,
            m.oc,
            n.yh,
            i.h,
            p.BasicDialogService,
          ]),
        ],
        y
      );
      class S {
        #l;
        #d;
        #g;
        #u;
        #p;
        #m;
        #w;
        #a;
        #e;
        #i;
        #r;
        constructor(e, t, s, a, i, r, n) {
          (this.frameName = e),
            (this.#p = null),
            (this.#l = t),
            (this.#a = a),
            (this.#e = i),
            (this.#i = r),
            (this.#r = n),
            (this.#d = new Promise((e, t) => {
              (this.#g = e),
                (this.#u = t),
                s
                  .then((e) => this.#f(e))
                  .catch((e) =>
                    this.handleLoadError("webview_request_error", e)
                  );
            }).finally(() => {
              (this.#g = null),
                (this.#u = null),
                this.#p && (this.#p.dispose(), (this.#p = null));
            }));
        }
        #f(e) {
          (this.#p = (0, b.rk)(() => this.handleLoadError("timeout"), 27e5)),
            (this.#m = window.open(e.url, this.frameName));
          const t = new f.k1(this.#m, e.origin);
          t.setHandler(
            "router_event",
            (e) => (
              ("router:navigation:error" !== e.event &&
                "router:navigation:canceled" !== e.event) ||
                this.handleLoadError("router_error"),
              !0
            )
          ),
            t.setHandler("get_map_settings", async (e) => {
              if ("string" == typeof e) {
                const t = await this.#a.state
                  .pipe((0, h.P)(), (0, c.j)("mapSettings", e))
                  .toPromise();
                return t ? JSON.parse(t) : null;
              }
            }),
            t.setHandler("set_map_settings", async (e) => {
              "object" == typeof e &&
                null !== e &&
                "string" == typeof e.mapId &&
                "object" == typeof e.settings &&
                null !== e.settings &&
                (await this.#a.dispatch(
                  v.wo,
                  e.mapId,
                  JSON.stringify(e.settings)
                ));
            }),
            t.setHandler("get_title_map_settings", async (e) => {
              if ("string" == typeof e) {
                const t = await this.#a.state
                  .pipe((0, h.P)(), (0, c.j)("titleMapSettings", e))
                  .toPromise();
                return t ? JSON.parse(t) : null;
              }
            }),
            t.setHandler("set_title_map_settings", async (e) => {
              "object" == typeof e &&
                null !== e &&
                "string" == typeof e.titleId &&
                "object" == typeof e.settings &&
                null !== e.settings &&
                (await this.#a.dispatch(
                  v.ql,
                  e.titleId,
                  JSON.stringify(e.settings)
                ));
            }),
            t.setHandler("export_map_json", async (e) => {
              e &&
                "string" == typeof e &&
                ((e = JSON.parse(e)).locations.forEach(
                  (e) => delete e.description
                ),
                (e = JSON.stringify(e, null, 4)),
                await this.#v(e));
            }),
            t.setHandler(
              "map_event",
              (e) => (
                "render_success" === e && this.#g?.(),
                "render_error" === e &&
                  (this.#r.ok("game_maps.map_render_error_message"),
                  this.handleLoadError("render_error")),
                !0
              )
            ),
            t.setHandler("event", (e) => {
              if (
                "string" == typeof e.name &&
                "object" == typeof e.data &&
                null !== e.data
              ) {
                const t = e.data.map_id;
                if ("string" == typeof t)
                  return (
                    delete e.data.map_id,
                    this.#i.publish(new g.e4(e.name, t, e.data, e.dispatch)),
                    !0
                  );
              }
              return !1;
            }),
            (this.#w = t);
        }
        async #v(e) {
          const t = await this.#e.showSaveFileDialog({
            defaultPath: "WeMod-MapExport.json",
            filters: [{ extensions: ["json"], name: "JSON files" }],
          });
          if (!t.canceled && t.filePath)
            try {
              await o.promises.writeFile(t.filePath, e);
            } catch {
              alert("Error exporting file!");
            }
        }
        load() {
          return this.#d;
        }
        handleLoadError(e, t) {
          this.#u &&
            (this.#i.publish(
              new g.e4("game_map_load_error", this.#l, { code: e })
            ),
            this.#u(t ?? new Error(`Failed to load game map: ${e}`))),
            this.dispose();
        }
        handleClosed() {
          this.dispose();
        }
        dispose() {
          this.#w && (this.#w.dispose(), (this.#w = null)),
            d.Z.debug ||
              !this.#m ||
              this.#m.closed ||
              (this.#m.close(), (this.#m = null));
        }
        async switchMap(e) {
          try {
            return await this.#w.execute("switch_game_map", e), !0;
          } catch (e) {
            if (e instanceof f.n8) return !1;
            throw e;
          }
        }
      }
    },
    23170: (e, t, s) => {
      s.d(t, { r: () => o });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(23739),
        n = s(69949);
      let o = class {
        #b;
        #t;
        #y;
        constructor(e, t) {
          (this.#b = e), (this.#t = t);
        }
        attached() {
          this.#y = this.#b.onTrainerActivated((e) => this.#S(e));
        }
        async #S(e) {
          const t = e.getMetadata(n.z9);
          try {
            await this.#t.recordGamePresence(t.info.gameId);
          } catch {}
        }
        detached() {
          this.#y.dispose(), (this.#y = null);
        }
      };
      o = (0, a.gn)(
        [(0, i.autoinject)(), (0, a.w6)("design:paramtypes", [n.hc, r.K])],
        o
      );
    },
    46176: (e, t, s) => {
      s.d(t, { t: () => c });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(23739),
        n = s(93082),
        o = s(11912),
        h = s(78219);
      let c = class {
        #t;
        #I;
        constructor(e) {
          this.#t = e;
        }
        attached() {
          this.#T();
        }
        detached() {}
        #T() {
          this.#I = (0, o.rk)(() => this.report(), (0, h.i)(15, 20));
        }
        #k() {
          this.#I && (this.#I.dispose(), (this.#I = null));
        }
        async report() {
          if ((this.#k(), !this.enabled)) return void this.#T();
          let e = !1;
          const t = {};
          if (
            (Object.keys(this.installedVersions).forEach((s) => {
              const a = Array.from(
                new Set(
                  this.installedVersions[s]
                    .filter((e) => this.#P(e))
                    .map((e) => e.version)
                )
              );
              a.length > 0 && ((t[s] = a), (e = !0));
            }),
            e)
          )
            try {
              await this.#t.reportInstalledGameVersions(t);
            } catch {}
          this.#T();
        }
        #P(e) {
          if (null === e.version) return !1;
          const t = this.installedApps[e.correlationId];
          return "uwp" !== t?.platform || !t.location.endsWith("\\Content");
        }
      };
      c = (0, a.gn)(
        [
          (0, n.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              enabled: (0, n.g)("settings", "analytics"),
              installedVersions: (0, n.g)("installedGameVersions"),
              installedApps: (0, n.g)("installedApps"),
            },
          }),
          (0, i.autoinject)(),
          (0, a.w6)("design:paramtypes", [r.K]),
        ],
        c
      );
    },
    84401: (e, t, s) => {
      s.d(t, { W: () => p });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(70824),
        n = s(81110),
        o = s("services/bugsnag/index"),
        h = s(93082),
        c = s(48736);
      const l = "https://www.google-analytics.com",
        d = globalThis,
        g = Object.freeze({
          crv: "P-256",
          ext: !0,
          key_ops: ["verify"],
          kty: "EC",
          x: "TvK_46GZKD04AzNmtLO2AZNE95q50zddzR6TAtPHAq0",
          y: "uSqGv7tok8iUolBG2vx7aJJmqst3Dn90q5CSvqpebt0",
        });
      let u = null,
        p = class {
          #e;
          #_;
          #C;
          constructor(e) {
            (this.#C = {}),
              (this.#R = function () {
                d.dataLayer.push(arguments),
                  d.dataLayer.length > 1e4 && d.dataLayer.splice(15, 1);
              }),
              (this.#e = e),
              (d.dataLayer = []);
          }
          enabledChanged(e) {
            "boolean" == typeof e && (0, o.setEnabled)(this.enabled);
          }
          userIdChanged(e) {
            "string" == typeof e && this.#G({ user_id: e });
          }
          async activate() {
            this.#e.isInTraySinceStartup &&
              this.#e.whenVisible(() => {
                this.#_ && this.event("screen_view");
              }),
              this.#R("js", new Date()),
              this.#R("set", {
                client_id: this.installationId,
                send_page_view: !1,
                page_title: "",
                page_location: "",
                page_referrer: "",
              }),
              this.#G({
                transport_url: l,
                user_id: this.userId ?? null,
                app_version: this.#e.info.version,
              }),
              this.enabledChanged(this.enabled),
              this.userIdChanged(this.userId);
            const e = navigator.sendBeacon.bind(navigator);
            (navigator.sendBeacon = (t, s) =>
              t.toString().startsWith(`${l}/g/collect?v=2`) &&
              "string" == typeof s
                ? s
                    .replaceAll("\r", "")
                    .split("\n")
                    .every((s) => e(`${t}&${s}`))
                : e(t, s)),
              (d.gtagDocument = new f(new m(r.Z.appOrigin))),
              await this.#A();
          }
          async #A() {
            try {
              const e = await (async function () {
                  const e = await fetch(
                    "https://ga.wemod.com/bundle.js?ids=" +
                      [r.Z.services.ga.measurementId].join(",")
                  );
                  if (!e.ok)
                    throw new Error(
                      `GA bundle request failed with status ${e.status}.`
                    );
                  const t = e.headers.get("X-Signature");
                  if (!t)
                    throw new Error(
                      "Expected X-Signature header on GA bundle response."
                    );
                  const s = await e.arrayBuffer();
                  if (
                    ((u ??= await crypto.subtle.importKey(
                      "jwk",
                      g,
                      { name: "ECDSA", namedCurve: "P-256" },
                      !1,
                      ["verify"]
                    )),
                    !(await crypto.subtle.verify(
                      { name: "ECDSA", hash: "SHA-256" },
                      u,
                      Buffer.from(t, "base64"),
                      s
                    )))
                  )
                    throw new Error(
                      "Invalid signature on GA bunldle response."
                    );
                  return new TextDecoder("utf-8").decode(s);
                })(),
                t = document.createElement("script");
              (t.text = e), document.head.append(t);
            } catch {
              setTimeout(() => this.#A(), 6e4);
            }
          }
          #R;
          #G(e) {
            (this.#C = Object.assign(this.#C, e)),
              this.#R("config", r.Z.services.ga.measurementId, this.#C);
          }
          event(e, t = {}) {
            this.enabled && this.#R("event", e, (0, c.v)(t));
          }
          user(e, t) {
            this.#R("set", "user_properties", { [e]: t });
          }
          screenView(e) {
            (this.#_ && e.name === this.#_.name && e.class === this.#_.class) ||
              (this.#G({
                firebase_screen: name,
                firebase_screen_class: e.class,
              }),
              this.#e.isInTraySinceStartup ||
                this.event("screen_view", {
                  firebase_previous_screen: this.#_?.name ?? null,
                  firebase_previous_class: this.#_?.class ?? null,
                  ...(e.params || null),
                }),
              (this.#_ = { name: e.name, class: e.class }));
          }
        };
      p = (0, a.gn)(
        [
          (0, i.autoinject)(),
          (0, h.b)({
            setup: "activate",
            teardown: "deactivate",
            selectors: {
              installationId: (0, h.g)("installation", "id"),
              userId: (0, h.g)("account", "uuid"),
              enabled: (0, h.g)("settings", "analytics"),
            },
          }),
          (0, a.w6)("design:paramtypes", [n.f]),
        ],
        p
      );
      class m {
        #E;
        constructor(e) {
          this.#E = e;
        }
        getCurrentUrl() {
          return this.#E + document.location.hash.substring(5);
        }
        getCookies() {
          return Object.entries(this.#j())
            .map((e) => e.join("="))
            .join("; ");
        }
        setCookie(e) {
          const [t, s] = e.split(";", 2)[0].trim().split("=", 2),
            a = this.#j();
          (a[t] = s || void 0),
            localStorage.setItem("gaCookie", JSON.stringify(a));
        }
        #j() {
          try {
            return JSON.parse(localStorage.getItem("gaCookie") || "{}");
          } catch {
            return {};
          }
        }
      }
      class w {
        constructor(e) {
          this.helper = e;
          const t = this.url;
          (this.origin = t.origin),
            (this.protocol = t.protocol),
            (this.host = t.hostname),
            (this.hostname = t.hostname),
            (this.port = t.port);
        }
        get url() {
          return new URL(this.href);
        }
        get href() {
          return this.helper.getCurrentUrl();
        }
        get pathname() {
          return this.url.pathname;
        }
        get search() {
          return this.url.search;
        }
        get [Symbol.toStringTag]() {
          return this.href;
        }
        toString() {
          return this.href;
        }
      }
      class f {
        constructor(e) {
          (this.helper = e), (this.location = new w(e));
        }
        get cookie() {
          return this.helper.getCookies();
        }
        set cookie(e) {
          this.helper.setCookie(e);
        }
      }
    },
    72326: (e, t, s) => {
      s.d(t, { q: () => v });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(98099),
        n = s(45437),
        o = s(81110),
        h = s(30206),
        c = s(26822),
        l = s(58694),
        d = s("services/bugsnag/index"),
        g = s(93082),
        u = s(27170),
        p = s(11912),
        m = s(78219),
        w = s(46176);
      const f = (0, r.jl)("installations");
      let v = class {
        #e;
        #D;
        #a;
        #W;
        #L;
        #M;
        #N;
        #V;
        #O;
        #x;
        #$;
        #q;
        constructor(e, t, s, a, i) {
          (this.#V = !1),
            (this.#x = new Map()),
            (this.#$ = new Map()),
            (this.#q = !1),
            (this.#e = e),
            (this.#D = t),
            (this.#a = s),
            (this.#W = a),
            (this.#L = i);
        }
        initialize() {
          return this.#B(!0);
        }
        attached() {
          this.#e.onClosedToTray(() => {
            this.#O && f.debug("Closed to system tray. Pausing watcher"),
              (this.#q = !0),
              this.#U();
          }),
            this.#e.onRestoredFromTray(() => {
              (this.#q = !1), this.#J(!0);
            });
        }
        detached() {
          this.#K(), this.#x.clear(), this.#U();
        }
        #K() {
          this.#N && (this.#N.dispose(), (this.#N = null));
        }
        #U() {
          this.#O && (this.#O.dispose(), (this.#O = null));
        }
        #J(e = !1) {
          this.#x.size > 0 &&
            !this.#O &&
            !this.#q &&
            (e
              ? (f.debug("Restored from system tray. Resuming watcher"),
                (this.#O = p.$L),
                this.#H())
              : (this.#O = (0, p.rk)(() => this.#H(), 1e4)));
        }
        async #B(e = !1) {
          if (this.#N || e) {
            this.#K();
            try {
              await this.refreshApps(), await this.#z();
            } finally {
              this.#V
                ? ((this.#V = !1), this.#B(!0))
                : (this.#N = (0, p.rk)(() => this.#B(), (0, m.i)(2, 3)));
            }
          }
        }
        watchGame(e) {
          const t = this.#x.get(e) ?? 0;
          return (
            0 === t && (f.debug(`Watching game ${e}`), this.#$.set(e, 0)),
            this.#x.set(e, t + 1),
            this.#J(),
            (0, p.JD)(() => this.#F(e))
          );
        }
        #F(e) {
          const t = this.#x.get(e);
          1 === t
            ? (f.debug(`Unwatching game ${e}`),
              this.#$.delete(e),
              this.#x.delete(e))
            : this.#x.set(e, t - 1),
            0 === this.#x.size && this.#U();
        }
        async #H() {
          try {
            const e = Array.from(this.#x.keys()),
              t = Array.from(
                new Set(
                  Array.prototype.concat(
                    ...e.map((e) => this.catalog.games[e]?.correlationIds ?? [])
                  )
                )
              ),
              s = Object.fromEntries((await this.#D.findApps(t)).entries());
            for (const t of e) {
              const e = this.catalog.games[t];
              if (e && (await this.#Z(e, s))) {
                f.debug(`Versions changed for game ${t}`);
                const s = this.#$.get(t) + 1;
                if ((this.#$.set(t, s), !(s >= 12))) {
                  this.#N ? await this.#B() : (this.#V = !0);
                  break;
                }
                12 === s &&
                  (0, d.report)(
                    new Error(
                      `Watch trigger limit exceeded for ${e.platformId} game ${t}`
                    )
                  );
              }
            }
          } catch (e) {
            f.error(
              "Failed to refresh watched games",
              Array.from(this.#x.keys()),
              e
            );
          } finally {
            this.#U(), this.#J();
          }
        }
        async refreshApps() {
          this.#M
            ? await this.#M
            : ((this.#M = this.#X()),
              await this.#M.finally(() => (this.#M = null)));
        }
        async #X() {
          const e = await this.#D.getInstalledApps(),
            t = {},
            s = Object.keys(this.installedApps);
          let a = e.reduce((e, s) => {
            const a = `${s.platform}:${s.sku}`;
            if (((t[a] = s), e)) return !0;
            {
              const e = this.installedApps[a];
              if (e) {
                if (s.location !== e.location) return !0;
                {
                  const t = s.alternateLocations,
                    a = e.alternateLocations;
                  return (
                    Array.isArray(t) !== Array.isArray(a) ||
                    (!!Array.isArray(t) &&
                      (t.length !== a.length || t.some((e) => !a.includes(e))))
                  );
                }
              }
              return !0;
            }
          }, e.length !== s.length);
          a || (a = s.some((e) => !t[e])),
            a && (await this.#a.dispatch(u.sE, t)),
            await this.#a.dispatch(u.JC, "appsRefreshedAt");
        }
        async #z() {
          const e = Object.values(this.catalog.games),
            t = Object.keys(this.installedVersions).length,
            s = new Set();
          let a = {},
            i = 0,
            r = !1;
          for (let t, n = 0; (t = e.slice(n, n + 15)).length > 0; n += 15)
            await Promise.all(
              t.map(async (e) => {
                const t = await this.#Z(e, this.installedApps, s);
                null !== t && ((a[e.id] = t), i++);
              })
            ),
              (i >= 5 || (i > 0 && n + 15 >= e.length)) &&
                (await this.#a.dispatch(u.mS, a), (a = {}), (i = 0), (r = !0));
          (r || s.size !== t) && (await this.#a.dispatch(u.oN, s)),
            r && (await this.#L.report());
        }
        async #Z(e, t, s = null) {
          const a = [],
            i = this.installedVersions[e.id] || [];
          let r = !1;
          for (const s of e.correlationIds) {
            const n = i.find((e) => e.correlationId === s) || null,
              o = await this.#Y(e, t[s], n);
            (r ||= o !== n),
              null !== o &&
                a.push({
                  gameId: e.id,
                  correlationId: s,
                  version: o.version,
                  modifiedAt: o.modifiedAt,
                });
          }
          return (
            i.forEach((t) => {
              this.installedApps[t.correlationId]?.platform === l.$
                ? a.push(t)
                : e.correlationIds.includes(t.correlationId) || (r = !0);
            }),
            a.length > 0 && s?.add(e.id),
            r ? a : null
          );
        }
        async #Y(e, t, s) {
          if (!t || !e.versionPath) return null;
          try {
            return await this.#W.getGameVersion(
              t.location,
              e.versionPath,
              t.platform,
              s
            );
          } catch {
            return null;
          }
        }
      };
      v = (0, a.gn)(
        [
          (0, g.b)({
            setup: "initialize",
            teardown: "detached",
            selectors: {
              catalog: (0, g.g)("catalog"),
              installedApps: (0, g.g)("installedApps"),
              installedVersions: (0, g.g)("installedGameVersions"),
            },
          }),
          (0, i.autoinject)(),
          (0, a.w6)("design:paramtypes", [o.f, h.w, n.yh, c.B, w.t]),
        ],
        v
      );
    },
    62224: (e, t, s) => {
      s.d(t, { i: () => T });
      var a = s(70655),
        i = s("aurelia-event-aggregator"),
        r = s("aurelia-framework"),
        n = s(45437),
        o = s(55586),
        h = s(7924),
        c = s("dialogs/fullscreen-webview-dialog"),
        l = s(13915),
        d = s(62522),
        g = s("dialogs/webview-dialog"),
        u = s(29242),
        p = s(81110),
        m = s("settings/settings-dialog"),
        w = s("shared/dialogs/basic-dialog"),
        f = s(93082),
        v = s(27170),
        b = s(81866),
        y = s(95112),
        S = s(35080),
        I = s(97845);
      let T = class {
        #Q;
        #ee;
        #te;
        #se;
        #ae;
        #ie;
        #re;
        #e;
        #i;
        #ne;
        #oe;
        #he;
        #a;
        #ce;
        #le;
        #de;
        #y;
        constructor(e, t, s, a, i, r, n, o, h, c, l, d, g, u, p) {
          (this.#Q = e),
            (this.#te = t),
            (this.#se = s),
            (this.#ae = a),
            (this.#ie = i),
            (this.#re = r),
            (this.#e = n),
            (this.#i = o),
            (this.#ne = h),
            (this.#oe = c),
            (this.#he = l),
            (this.#a = d),
            (this.#ce = g),
            (this.#ee = u),
            (this.#le = p);
        }
        attached(e) {
          (this.#de = e),
            (this.#y = this.#e.onActivated((e) => {
              this.#e.focus(), this.#ge(e, !1);
            })),
            this.#ge(this.#e.info.launchUri, !0);
        }
        detached() {
          this.#y.dispose(), (this.#y = null);
        }
        #ge(e, t) {
          const s = new URL(e);
          if (!t) {
            const e = new URL(s);
            e.searchParams.delete("trigger"),
              this.#oe.event(
                "app_activate",
                {
                  uri: e.toString(),
                  trigger: s.searchParams.get("trigger") || null,
                },
                b.$9
              );
          }
          this.#ue(s), this.#pe(s);
          const a = s.pathname.replace(/^\/+/, "");
          if (0 === a.length) return;
          const i = a.split("/");
          switch (i[0]) {
            case "home":
              this.#de.navigateToRoute("dashboard");
              break;
            case "titles":
              1 === i.length
                ? this.#de.navigateToRoute("titles")
                : 2 === i.length &&
                  this.#de.navigateToRoute("title", {
                    titleId: i[1],
                    gameId: s.searchParams.get("gameId") || void 0,
                    trainerId: "",
                  });
              break;
            case "projects":
              2 === i.length &&
                this.#de.navigateToRoute("project-redirect", {
                  projectId: i[1],
                });
              break;
            case "settings":
              this.#ae.open({ group: i.slice(1).join("/") });
              break;
            case "checkout": {
              let e = !1;
              if (1 === i.length) e = !0;
              else
                switch (i[1]) {
                  case "reactivate":
                    this.account.subscription ||
                      this.#ie.showReactivateDialog();
                    break;
                  case "resume":
                    this.account.subscription
                      ? this.#ae.open({ group: "account/billing" })
                      : (e = !0);
                    break;
                  case "update":
                    this.account.subscription
                      ? this.#re.open(
                          s.searchParams.get("trigger") || "app_activation"
                        )
                      : this.#ae.open({ group: "account/billing" });
                    break;
                  case "upgrade":
                    e = !0;
                }
              if (e)
                if (this.account.subscription)
                  this.#ae.open({ group: "account/billing" });
                else {
                  const e = s.searchParams.get("trigger") || "app_activation";
                  this.#i.publish(new u.Us(e)),
                    this.#Q.open({
                      trigger: e,
                      frequency: s.searchParams.get("frequency") || void 0,
                      discountCode: s.searchParams.get("coupon") || void 0,
                    });
                }
              break;
            }
            case "gift":
              {
                const e = s.searchParams.get("trigger") || "app_activation";
                this.#ee.open({
                  trigger: e,
                  frequency: s.searchParams.get("frequency") || void 0,
                  discountCode: s.searchParams.get("coupon") || void 0,
                  recipient: s.searchParams.get("recipient") || void 0,
                });
              }
              break;
            case "pro":
              {
                const e = s.searchParams.get("trigger") || "app_activation";
                this.#i.publish(new u.Us(e)),
                  this.#te.open({
                    trigger: e,
                    nonInteraction: !1,
                    discountCode: s.searchParams.get("coupon") || void 0,
                  });
              }
              break;
            case "queue":
              this.#de.navigate("queue");
              break;
            case "collection":
              this.#de.navigateToRoute("collection", { slug: i[1] });
              break;
            case "play":
              this.#de.navigateToRoute("title", {
                titleId: s.searchParams.get("titleId") || void 0,
                gameId: s.searchParams.get("gameId") || void 0,
                trainerId: "",
                autoLaunch: !0,
              });
              break;
            case "updates":
              this.#se.openDialog();
              break;
            case "webview":
              this.#ne.open({
                route: i.slice(1).join("/"),
                params: Object.fromEntries(s.searchParams.entries()),
              });
              break;
            case "fullscreen-webview":
              this.#ce.open({
                route: i.slice(1).join("/"),
                params: Object.fromEntries(s.searchParams.entries()),
              });
              break;
            case "promotion":
              this.#he.showDialog();
              break;
            default:
              this.#le.ok("uri_handler.unsupported_message");
          }
        }
        #ue(e) {
          const t = e.searchParams.get("trigger");
          if (!t) return;
          const s = t.match(/^promotion:([\d]+)\/([\w]+)$/);
          if (!s) return;
          const [a, i, r] = s;
          a &&
            i &&
            "notification" === r &&
            this.#a.dispatch(v.g2, i, "notification", new Date().toISOString());
        }
        #pe(e) {
          const t = e.searchParams.get("trigger");
          if (!t) return;
          const s = t.match(/^notification:([\w]+)\/([\d]+)$/);
          if (!s) return;
          const [a, i, r] = s;
          a &&
            ["relase", "update"].includes(i) &&
            this.#oe.event("notification_click", { type: i, gameId: r }, b.$9);
        }
      };
      T = (0, a.gn)(
        [
          (0, f.b)({
            setup: "attached",
            teardown: "detached",
            selectors: { account: (0, f.g)("account") },
          }),
          (0, r.autoinject)(),
          (0, a.w6)("design:paramtypes", [
            h.l,
            d.x,
            S.v,
            m.SettingsDialogService,
            I.x,
            o.V,
            p.f,
            i.h,
            g.WebviewDialogService,
            b.cp,
            y.z,
            n.yh,
            c.FullscreenWebviewDialogService,
            l.G,
            w.BasicDialogService,
          ]),
        ],
        T
      );
    },
    16943: (e, t, s) => {
      s.d(t, { W: () => g });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(45437),
        n = s(81866),
        o = s(26478),
        h = s(48162),
        c = s(30206),
        l = s(93082),
        d = s(27170);
      let g = class {
        #me;
        #oe;
        #a;
        #we;
        constructor(e, t, s, a) {
          (this.#me = e), (this.#oe = t), (this.#a = s), (this.#we = a);
        }
        attached() {}
        detached() {}
        launch(e, t, s) {
          this.#me
            .launchAndForget(e)
            .then(() => {
              this.#oe.event("game_launch", this.#fe({}, e, t, s), n.$9),
                this.#a.dispatch(d.B$, t, new Date().toISOString(), 0);
            })
            .catch((a) => {
              this.#oe.event(
                "game_launch_error",
                this.#fe(
                  { code: a instanceof c.V ? a.errorCode : null },
                  e,
                  t,
                  s
                ),
                n.$9
              ),
                this.#we.toast({
                  type: "alert",
                  content: "launch_without_mods_button.launch_failed",
                });
            });
        }
        #fe(e, t, s, a) {
          const i = this.catalog.games[s],
            r = this.catalog.titles[i?.titleId],
            n = Object.values(this.correlatedUnavailableTitles).find((e) =>
              e.games.find((e) => e.id === s)
            ),
            o = n?.games.find((e) => e.id === s),
            h = r || n,
            c = i || o;
          return {
            ...e,
            trigger: a,
            appPlatform: t.platform ?? null,
            appSku: t.sku ?? null,
            gameId: s,
            titleId: h?.id ?? null,
            titleName: h?.name ?? null,
            gamePlatform: c?.platformId ?? null,
            gameEdition: c?.edition ?? null,
          };
        }
      };
      g = (0, a.gn)(
        [
          (0, i.autoinject)(),
          (0, l.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              catalog: (0, l.g)("catalog"),
              correlatedUnavailableTitles: (0, l.g)(
                "correlatedUnavailableTitles"
              ),
            },
          }),
          (0, a.w6)("design:paramtypes", [h.hM, n.cp, r.yh, o.x]),
        ],
        g
      );
    },
    65793: (e, t, s) => {
      s.d(t, { F: () => u });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(45437),
        n = s(23739),
        o = s(81110),
        h = s(35969),
        c = s(93082),
        l = s(66302),
        d = s(27170),
        g = s(81866);
      let u = class {
        #y;
        #a;
        #s;
        #t;
        #e;
        #oe;
        constructor(e, t, s, a, i) {
          (this.#a = e),
            (this.#s = t),
            (this.#t = s),
            (this.#e = a),
            (this.#oe = i);
        }
        async activate() {
          this.#ve(!1).catch(l.K),
            (this.#y = this.#s.onLocaleChanged((e) => {
              this.#a.dispatch(
                d.D3,
                { language: this.#s.getPreferredLocale()?.toString() ?? null },
                e.source
              ),
                this.#ve(!0).catch(l.K);
            }));
        }
        deactivate() {
          this.#y?.dispose(), (this.#y = null);
        }
        async #ve(e) {
          const t = this.#s.getEffectiveLocale().toString();
          (e || this.account.language !== t) &&
            (this.#oe.event("locale_change", {
              effectiveLocale: t,
              preferredLocale: this.#s.getPreferredLocale()?.toString() ?? null,
              systemLocale: this.#e.info.locale,
              systemRegion: this.#e.info.region,
            }),
            await this.#a.dispatch(
              d.qg,
              await this.#t.setAccountLanguage(t, !this.#s.getPreferredLocale())
            ));
        }
      };
      u = (0, a.gn)(
        [
          (0, i.autoinject)(),
          (0, c.b)({
            setup: "activate",
            teardown: "deactivate",
            selectors: { account: (0, c.g)("account") },
          }),
          (0, a.w6)("design:paramtypes", [r.yh, h.oc, n.K, o.f, g.cp]),
        ],
        u
      );
    },
    81769: (e, t, s) => {
      s.d(t, { m: () => u });
      var a = s(70655),
        i = s(41808),
        r = s("aurelia-event-aggregator"),
        n = s("aurelia-framework"),
        o = s(98099),
        h = s(81110),
        c = s(6358),
        l = s(93082);
      const d = (0, o.jl)("overlay"),
        g = [
          "S-1-15-2-957691514-1856554628-2223506514-2735362290-2978057538-3373136399-3720596370",
          "S-1-15-2-3188398512-4273922640-615417156-2416968318-1371955550-2718685005-1518716088",
        ];
      let u = class {
        #be;
        #e;
        #i;
        #ye;
        #Se;
        #Ie;
        #Te;
        constructor(e, t) {
          (this.#i = new r.h()),
            (this.#ye = !1),
            (this.#Se = !1),
            (this.#Te = []),
            (this.#be = e),
            (this.#e = t);
        }
        get connected() {
          return this.connections > 0;
        }
        get connections() {
          return this.#Te.length;
        }
        get open() {
          return !!this.#Ie;
        }
        onClientConnected(e) {
          return this.#i.subscribe("connect", e);
        }
        onClientDisconnected(e) {
          return this.#i.subscribe("disconnect", e);
        }
        onMessageReceived(e) {
          return this.#i.subscribe("message", e);
        }
        subscriptionChanged() {
          this.subscription ? this.#ke() : this.#Pe();
        }
        #_e() {
          return !(
            this.#ye ||
            this.#Se ||
            this.#Ie ||
            !this.subscription ||
            "win32" !== this.#e.info.osPlatform
          );
        }
        async attached() {
          setTimeout(() => this.#ke(), 2e3);
        }
        detached() {
          (this.#ye = !0), this.#Pe();
        }
        #Ce() {
          return "\\\\.\\pipe\\WeMod\\Overlay";
        }
        #Re() {
          setTimeout(() => this.#ke(), 1e4);
        }
        async #ke() {
          if (this.#_e()) {
            this.#Se = !0;
            try {
              const e = await this.#Ge(this.#Ce());
              e.on("close", () => this.#Ae(e)),
                (this.#Ie = e),
                d.debug("Awaiting connection");
            } catch (e) {
              d.error("Failed to start server", e), this.#Re();
            } finally {
              this.#Se = !1;
            }
          }
        }
        #Ae(e) {
          e === this.#Ie &&
            ((this.#Te = []), (this.#Ie = null), this.#_e() && this.#Re());
        }
        #Ge(e) {
          const t = (0, i.createServer)();
          return new Promise((s, a) => {
            let i = !1;
            t.on("error", (e) => {
              t.close(() => {
                i || ((i = !0), a(e));
              });
            }),
              t.on("listening", async () => {
                try {
                  await this.#be.grantFilePermissions(
                    e,
                    g,
                    c.Hg.Read | c.Hg.Write
                  );
                } catch (e) {
                  return (i = !0), void a(e);
                }
                t.on("connection", (e) => this.#Ee(t, e)), (i = !0), s(t);
              }),
              t.listen(e);
          });
        }
        #Ee(e, t) {
          e === this.#Ie
            ? (d.debug("Client connected"),
              this.#Te.push(t),
              t.on("end", () => {
                d.debug("Client disconnected");
                const e = this.#Te.indexOf(t);
                e >= 0 &&
                  (this.#Te.splice(e, 1), this.#i.publish("disconnect"));
              }),
              t.on("data", (e) => this.#je(e)),
              this.#i.publish("connect"))
            : t.destroy();
        }
        broadcast(e) {
          if (this.#Ie && this.connections > 0) {
            const t = (function (e) {
              const t = JSON.stringify(e),
                s = Buffer.byteLength(t),
                a = Buffer.alloc(s + 4);
              return a.writeUInt32LE(s, 0), a.write(t, 4), a;
            })(e);
            this.#Te.forEach((e) => {
              try {
                e.write(t, (e) => {
                  e &&
                    "EPIPE" !== e.code &&
                    d.error("Error writing to socket", e);
                });
              } catch {}
            });
          }
        }
        #je(e) {
          let t = 0;
          for (; t + 4 < e.length; ) {
            const s = e.readInt32LE(t);
            t += 4;
            const a = e.toString("utf8", t, t + s);
            t += s;
            try {
              this.#i.publish("message", JSON.parse(a));
            } catch (e) {
              d.error("Error while handling client message", e);
            }
          }
        }
        #Pe() {
          if (this.#Ie) {
            const e = this.#Te;
            (this.#Te = []),
              this.#Ie.close(() => {
                for (const t of e)
                  try {
                    t.destroy();
                  } catch {}
              }),
              (this.#Ie = null),
              e.length > 0 && this.#i.publish("disconnect");
          }
        }
      };
      u = (0, a.gn)(
        [
          (0, l.b)({
            setup: "attached",
            teardown: "detached",
            selectors: { subscription: (0, l.g)("account", "subscription") },
          }),
          (0, n.autoinject)(),
          (0, a.w6)("design:paramtypes", [c.aI, h.f]),
        ],
        u
      );
    },
    87632: (e, t, s) => {
      s.d(t, { F0: () => T, bf: () => b, fk: () => I });
      var a = s(70655),
        i = s("aurelia-framework"),
        r = s(30248),
        n = s(248),
        o = s(69949),
        h = s(81110),
        c = s(30654),
        l = s(13171),
        d = s(6358),
        g = s(35969),
        u = s(93082),
        p = s(66302),
        m = s(11912),
        w = s(52180),
        f = s(72326),
        v = s(81769);
      const b = "WeMod.WeModOverlay_t7g4ya3tqt6sw",
        y = "9P2C17TK96BB",
        S = new w.G(5, 721, 5282, 0),
        I = "1809";
      let T = class {
        #Ie;
        #De;
        #e;
        #be;
        #We;
        #s;
        #Le;
        #Me;
        #Ne;
        #i;
        #n;
        #Ve;
        #Oe;
        constructor(e, t, s, a, i, r, n, o, h) {
          (this.status = "disconnected"),
            (this.#Ie = e),
            (this.#De = t),
            (this.#e = s),
            (this.#be = a),
            (this.#We = i),
            (this.#s = r),
            (this.#Le = n),
            (this.#Me = o),
            (this.#Ne = h);
        }
        attached() {
          this.#xe(),
            (this.#n = new m.K4([
              (this.#i = new m.yM()),
              this.#De.onNewTrainer((e) => this.#$e(e)),
              this.#Ie.onClientConnected(() => this.#qe()),
              this.#Ie.onClientDisconnected(() => this.#Be()),
              this.#Ie.onMessageReceived((e) => this.#Ue(e)),
              this.#Me.onCheatStatesChanged((e) => {
                if (this.#Ve) {
                  const t = this.#Ve.getMetadata(o.z9).info;
                  e.gameId === t.gameId && this.#Je();
                }
              }),
              this.#s.onLocaleChanged(() => this.#Ke()),
            ]));
        }
        detached() {
          this.#n.dispose();
        }
        themeChanged() {
          this.#Ke();
        }
        onConnectionStatusChanged(e) {
          return this.#i.subscribe("status", e);
        }
        #qe() {
          this.#He("connected");
        }
        #Be() {
          0 === this.#Ie.connections && this.#He("disconnected");
        }
        #He(e) {
          e !== this.status &&
            ((this.status = e), this.#i.publish("status", e));
        }
        #Ue(e) {
          switch (e.type) {
            case "broadcast_request":
              switch (e.request) {
                case "config":
                  this.#Ke();
                  break;
                case "trainer_state":
                  this.#Je();
              }
              break;
            case "trainer_value":
              e.stateId === this.#Oe && this.#Ve?.isActive()
                ? this.#Ve.setValue(e.name, e.value, 4, e.cheatId)
                : this.#Je();
              break;
            case "cheat_instructions_read":
              this.#Ne.markRead(e.cheatId, e.instructions);
          }
        }
        #xe() {
          this.#Oe = Date.now();
        }
        #$e(e) {
          (this.#Ve = e),
            e.onActivated(() => this.#Je()),
            e.onValueSet((e) => {
              this.#Ie.connected &&
                this.#ze({
                  type: "trainer_value",
                  stateId: this.#Oe,
                  name: e.name,
                  value: e.value,
                });
            }),
            e.onEnded(() => {
              (this.#Ve = null), this.#xe(), this.#Je();
            }),
            this.#xe(),
            this.#Je();
        }
        #Je() {
          if (this.#Ie.connected)
            if (this.#Ve) {
              const e = this.#Ve.getMetadata(o.z9).info;
              this.#ze({
                type: "trainer_state",
                stateId: this.#Oe,
                blueprint: {
                  cheats: e.blueprint.cheats,
                  notes: e.blueprint.notes,
                },
                strings: this.#Fe(e.gameId),
                values: this.#Ve.isActive()
                  ? Object.fromEntries(this.#Ve.values.entries())
                  : null,
                cheatStates: this.#Me.cheatStates,
              });
            } else
              this.#ze({
                type: "trainer_state",
                stateId: this.#Oe,
                blueprint: null,
                strings: null,
                values: null,
                cheatStates: null,
              });
        }
        #Fe(e) {
          return (
            this.gameTranslations[e]?.[
              this.#s.getEffectiveLocale().toString()
            ] ?? null
          );
        }
        #Ke() {
          this.#Ie.connected &&
            this.#ze({
              type: "config",
              theme: this.theme,
              locale: this.#s.getEffectiveLocale().toString(),
            });
        }
        #ze(e) {
          this.#Ie.broadcast(e);
        }
        isSystemSupported() {
          if (
            "win32" !== this.#e.info.osPlatform ||
            "x64" !== this.#e.info.osArch
          )
            return !1;
          const e = this.#e.info.osVersion.split(".");
          return (
            e.length >= 3 &&
            "10" === e[0] &&
            "0" === e[1] &&
            parseInt(e[2], 10) >= 17763
          );
        }
        async isAppInstalled() {
          return null !== (await this.#be.getInstalledPackageId(b));
        }
        async isGameBarEnabled() {
          return (
            !!(await this.#We.queryValue(
              "HKEY_CURRENT_USER\\System\\GameConfigStore\\GameDVR_Enabled"
            )) &&
            0 !==
              (await this.#We.queryValue(
                "HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\GameDVR\\AppCaptureEnabled"
              ))
          );
        }
        async openInStore() {
          const e = await this.#be.getInstalledPackageId(
              "Microsoft.XboxGamingOverlay_8wekyb3d8bbwe"
            ),
            t =
              e && w.G.parse(c.d.parse(e).version).gte(S)
                ? `ms-gamebar://launchforeground/activate/StoreWidget?productId=${y}`
                : `ms-windows-store://pdp/?ProductId=${y}`;
          (await this.#e.launchExternal(t)) ||
            window.open(`https://www.microsoft.com/store/apps/${y}`, "_blank");
        }
        async openGameBarSettings() {
          (await this.#e.launchExternal("ms-settings:gaming-gamebar")) ||
            window.open(
              "https://support.xbox.com/help/games-apps/game-setup-and-play/troubleshoot-game-bar-windows",
              "_blank"
            );
        }
        open() {
          return this.#e.launchExternal(
            `ms-gamebar://launchforeground/activate/${b}_App_WeMod.Overlay.Trainer`
          );
        }
        async refreshFeatureStatus() {
          let e;
          return (
            (e = this.isSystemSupported()
              ? (await this.isAppInstalled())
                ? (await this.isGameBarEnabled())
                  ? "installed"
                  : "game-bar-disabled"
                : "not-installed"
              : "unsupported"),
            ((this.featureStatus && "installed" === e) ||
              "installed" === this.featureStatus) &&
              this.#Le.refreshApps().catch(p.K),
            (this.featureStatus = e),
            e
          );
        }
      };
      T = (0, a.gn)(
        [
          (0, u.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              theme: (0, u.g)("settings", "theme"),
              gameTranslations: (0, u.g)("gameTranslations"),
            },
          }),
          (0, i.autoinject)(),
          (0, a.w6)("design:paramtypes", [
            v.m,
            o.hc,
            h.f,
            d.aI,
            l.u,
            g.oc,
            f.q,
            n.s,
            r.X,
          ]),
        ],
        T
      );
    },
  },
]);

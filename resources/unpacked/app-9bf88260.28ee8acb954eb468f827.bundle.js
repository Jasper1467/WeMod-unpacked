"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [9428],
  {
    29242: (t, e, a) => {
      a.d(e, {
        Ax: () => c,
        Bx: () => r,
        EF: () => g,
        PC: () => w,
        PE: () => o,
        TD: () => u,
        Us: () => n,
        Y_: () => m,
        _V: () => E,
        dR: () => I,
        e4: () => A,
        jT: () => i,
        kx: () => p,
        lc: () => f,
        mU: () => l,
        o4: () => d,
        qC: () => y,
        wg: () => h,
        xp: () => s,
      });
      class s {
        constructor(t) {
          this.gameId = t;
        }
      }
      class n {
        constructor(t) {
          this.id = t;
        }
      }
      class i {
        constructor(t) {
          this.id = t;
        }
      }
      class r {
        constructor(t, e) {
          (this.gameId = t), (this.followType = e);
        }
      }
      class o {
        constructor(t) {
          this.gameId = t;
        }
      }
      class c {
        constructor(t, e) {
          (this.objectiveId = t), (this.completed = e);
        }
      }
      class l {}
      class u {}
      class p {
        constructor(t, e, a, s, n) {
          (this.location = t),
            (this.titleId = e),
            (this.gameId = a),
            (this.trainerId = s),
            (this.searchResult = n);
        }
      }
      class h {
        constructor(t, e, a) {
          (this.gameId = t), (this.uri = e), (this.free = a);
        }
      }
      class d {
        constructor(t, e) {
          (this.location = t), (this.terms = e);
        }
      }
      class g {
        constructor(t, e) {
          (this.trigger = t), (this.gameId = e);
        }
      }
      class f {
        constructor(t, e, a) {
          (this.trigger = t), (this.gameId = e), (this.enabled = a);
        }
      }
      class m {
        constructor(t) {
          this.gameId = t;
        }
      }
      class y {
        constructor(t, e) {
          (this.id = t), (this.nonInteraction = e);
        }
      }
      class w {
        constructor(t, e) {
          (this.id = t), (this.trigger = e);
        }
      }
      class I {
        constructor(t) {
          this.trainerInfo = t;
        }
      }
      class A {
        constructor(t, e, a, s) {
          (this.name = t),
            (this.mapId = e),
            (this.params = a),
            (this.dispatch = s);
        }
      }
      class E {
        constructor(t, e, a, s) {
          (this.gameId = t),
            (this.gameVersion = e),
            (this.trainerId = a),
            (this.result = s);
        }
      }
    },
    81110: (t, e, a) => {
      a.d(e, { H: () => p, f: () => h });
      var s = a("aurelia-event-aggregator"),
        n = a(98099),
        i = a(72298),
        r = a(70824),
        o = a(66302),
        c = a(11912);
      const l = (0, n.jl)("host");
      let u;
      function p() {
        return u;
      }
      class h {
        constructor() {
          (this.#t = new s.h()), (this.#e = []), (this.#a = []);
        }
        #t;
        #s;
        #e;
        #a;
        #n;
        #i;
        #r;
        #o;
        #c;
        static async create() {
          return u || ((u = new h()), await u.#l()), u;
        }
        async #l() {
          const t = await this.#u("ACTION_INITIALIZE_APP");
          (this.info = t.app),
            (this.updateState = t.updateState),
            (this.isInTraySinceStartup = t.startedInTray),
            this.#p(t.window),
            t.envOverride && (0, r.v)(t.envOverride),
            (this.#n = r.Z.releaseFeed),
            (this.#i = `${r.Z.storageNamespace}:squirrelChannel`),
            this.info.updaterAvailable &&
              this.setUpdateChannel(
                localStorage.getItem(this.#i) || this.info.releaseChannel
              ),
            this.#h("EVENT_APP_ACTIVATED"),
            this.#h("EVENT_NEW_WINDOW_REQUESTED"),
            this.#h("EVENT_CLOSED_TO_TRAY"),
            this.#h("EVENT_ADVIEW_MESSAGE"),
            this.#h("EVENT_GAME_MAP_WINDOW_LOAD_FINISH"),
            this.#h("EVENT_GAME_MAP_WINDOW_LOAD_ERROR"),
            this.#h("EVENT_GAME_MAP_WINDOW_CLOSED"),
            this.#d("EVENT_APP_QUIT_REQUESTED", () => this.#g()),
            this.#d("EVENT_RESTORED_FROM_TRAY", () => this.#f()),
            this.#d("EVENT_NEW_WINDOW_REQUESTED", (t) => this.#m(t)),
            this.#d("EVENT_WINDOW_STATE_CHANGED", (t) => this.#p(t)),
            this.#d("EVENT_UPDATE_STATE_CHANGED", (t) => this.#y(t)),
            this.#d("EVENT_WINDOW_MESSAGE", (t) => this.#w(t)),
            document.addEventListener("keydown", (t) => {
              t.ctrlKey &&
                t.shiftKey &&
                (("D" !== t.key && "d" !== t.key) ||
                  this.#u("ACTION_OPEN_DEV_TOOLS"),
                ("W" !== t.key && "w" !== t.key) ||
                  this.#u("ACTION_DEFAULT_WINDOW"));
            });
        }
        #h(t) {
          this.#d(t, (e) => this.#t.publish(t, e));
        }
        #d(t, e) {
          i.ipcRenderer.removeAllListeners(t),
            i.ipcRenderer.addListener(t, (a, s) => {
              l.debug(t, s), e(s);
            });
        }
        #p(t) {
          (this.minimized = t.minimized),
            (this.maximized = t.maximized),
            (this.visible = t.visible);
        }
        addNewWindowInterceptor(t) {
          return this.#I(this.#e, t);
        }
        setNewWindowErrorHandler(t) {
          return (
            (this.#s = t),
            (0, c.JD)(() => {
              this.#s === t && (this.#s = null);
            })
          );
        }
        async #m(t) {
          for (const e of this.#e) {
            const a = await e(t);
            if (!0 === a) return;
            "string" == typeof a && (t = a);
          }
          if (!(await this.launchExternal(t))) {
            if (!this.#s) throw new Error(`Failed to launch URL "${t}"`);
            this.#s(t);
          }
        }
        #w(t) {
          window.postMessage(t.message, t.targetOrigin, t.transfer || void 0);
        }
        addAppQuitInterceptor(t) {
          return this.#I(this.#a, t);
        }
        async #A() {
          for (const t of this.#a) if (!0 === (await t())) return !1;
          return !0;
        }
        async #g() {
          (await this.#A()) && (await this.quit());
        }
        #I(t, e) {
          return (
            t.push(e),
            {
              dispose: () => {
                const a = t.indexOf(e);
                -1 !== a && t.splice(a, 1);
              },
            }
          );
        }
        async #u(t, ...e) {
          l.debug(t, ...e);
          try {
            const a = await i.ipcRenderer.invoke(t, ...e);
            return void 0 !== a && l.debug(`-> ${t}`, a), a;
          } catch (e) {
            throw (l.error(`-> ${t}`, e), e);
          }
        }
        getWindowsFolder() {
          return this.info.env.SYSTEMROOT;
        }
        getNativeSystemFolder() {
          return this.info.wow64
            ? `${this.getWindowsFolder()}\\Sysnative`
            : `${this.getWindowsFolder()}\\System32`;
        }
        getTempFolder() {
          const t = this.info.env;
          let e = t.TEMP || t.TEMP || `${t.SYSTEMROOT}\\Temp`;
          return (
            e.length > 1 &&
              e.endsWith("\\") &&
              !e.endsWith(":\\") &&
              (e = e.slice(0, -1)),
            e
          );
        }
        expandEnvironmentStrings(t) {
          return t.replace(
            /%([^%]+)%/g,
            (t, e) => this.info.env[e.toUpperCase()] || `%${e}%`
          );
        }
        getMemoryInfo() {
          return this.#u("ACTION_GET_MEMORY_INFO");
        }
        getInstalledAvProducts() {
          return this.#u("ACTION_GET_INSTALLED_AV_PRODUCTS");
        }
        setInstallationInfo(t, e) {
          return this.#u("ACTION_SET_INSTALLATION_INFO", t, e);
        }
        getCreatorConfiguration() {
          return this.#u("ACTION_GET_CREATOR_CONFIGURATION");
        }
        readShortcutLink(t) {
          return this.#u("ACTION_READ_SHORTCUT_LINK", t);
        }
        showOpenFileDialog(t) {
          return this.#u("ACTION_SHOW_OPEN_FILE_DIALOG", t);
        }
        showSaveFileDialog(t) {
          return this.#u("ACTION_SHOW_SAVE_FILE_DIALOG", t);
        }
        launchExternal(t) {
          return this.#u("ACTION_OPEN_EXTERNAL", t);
        }
        setCloseBehavior(t) {
          return this.#u("ACTION_SET_CLOSE_BEHAVIOR", t);
        }
        close() {
          return this.#u("ACTION_CLOSE_WINDOW");
        }
        quit() {
          return this.#u("ACTION_QUIT_APP");
        }
        async show() {
          return this.#u("ACTION_SHOW_WINDOW");
        }
        focus() {
          return this.#u("ACTION_FOCUS_WINDOW");
        }
        minimize() {
          return this.#u("ACTION_MINIMIZE_WINDOW");
        }
        maximize() {
          return this.#u("ACTION_MAXIMIZE_WINDOW");
        }
        unmaximize() {
          return this.#u("ACTION_UNMAXIMIZE_WINDOW");
        }
        async reload() {
          return await this.#u("ACTION_RELOAD_WINDOW"), new Promise(o.K);
        }
        async showToast(t) {
          return this.#u("ACTION_SHOW_TOAST", t);
        }
        activate(t) {
          this.#t.publish("EVENT_APP_ACTIVATED", t);
        }
        onActivated(t) {
          return this.#t.subscribe("EVENT_APP_ACTIVATED", t);
        }
        onClosedToTray(t) {
          return this.#t.subscribe("EVENT_CLOSED_TO_TRAY", t);
        }
        onRestoredFromTray(t) {
          return this.#t.subscribe("EVENT_RESTORED_FROM_TRAY", t);
        }
        whenVisible(t) {
          return this.visible
            ? (t(), c.$L)
            : this.#t.subscribeOnce("EVENT_RESTORED_FROM_TRAY", t);
        }
        #f() {
          (this.isInTraySinceStartup = !1),
            this.#t.publish("EVENT_RESTORED_FROM_TRAY");
        }
        onGameMapWindowLoadFinish(t) {
          return this.#t.subscribe("EVENT_GAME_MAP_WINDOW_LOAD_FINISH", t);
        }
        onGameMapWindowLoadError(t) {
          return this.#t.subscribe("EVENT_GAME_MAP_WINDOW_LOAD_ERROR", t);
        }
        onGameMapWindowClosed(t) {
          return this.#t.subscribe("EVENT_GAME_MAP_WINDOW_CLOSED", t);
        }
        showGameMapWindow(t) {
          return this.#u("ACTION_SHOW_GAME_MAP_WINDOW", t);
        }
        createAdView(t) {
          return this.#u("ACTION_CREATE_ADVIEW", t);
        }
        showAdView(t) {
          return this.#u("ACTION_SHOW_ADVIEW", t);
        }
        hideAdView(t) {
          return this.#u("ACTION_HIDE_ADVIEW", t);
        }
        destroyAdView(t) {
          return this.#u("ACTION_DESTROY_ADVIEW", t);
        }
        updateAdView(t) {
          return this.#u("ACTION_UPDATE_ADVIEW", t);
        }
        onAdViewMessage(t) {
          return this.#t.subscribe("EVENT_ADVIEW_MESSAGE", t);
        }
        onUpdateStateChanged(t) {
          return this.#t.subscribe("EVENT_UPDATE_STATE_CHANGED", t);
        }
        #y(t) {
          "applying" === t && ((this.#o = Date.now()), (this.#c = null)),
            ("applied" !== t && "apply-error" !== t) || (this.#c = Date.now()),
            (this.updateState = t),
            this.#t.publish("EVENT_UPDATE_STATE_CHANGED", t);
        }
        fakeApplyUpdate() {
          return this.#u("ACTION_FAKE_APPLY_UPDATE");
        }
        checkForUpdate() {
          return this.#r
            ? this.#u("ACTION_CHECK_FOR_UPDATE", this.#r)
            : Promise.resolve("not-checked");
        }
        applyUpdate() {
          return this.#r
            ? this.#u("ACTION_APPLY_UPDATE", this.#r)
            : Promise.resolve("not-checked");
        }
        async restartForUpdate(t, e = !1) {
          return (
            !(!e && !(await this.#A())) &&
            (await this.#u("ACTION_RESTART_APP_FOR_UPDATE", t))
          );
        }
        async setUpdateChannel(t) {
          return (
            "string" == typeof t &&
            (t === this.updateChannel ||
              ((this.updateChannel = t),
              (this.#r = this.#n.replace("{channel}", t)),
              localStorage.setItem(this.#i, t)),
            !0)
          );
        }
        get manualUpdateUrl() {
          return this.updateChannel ? `${this.#r}/releases/latest` : null;
        }
        copyText(t) {
          return this.#u("ACTION_COPY_TEXT", t);
        }
        createDesktopShortcut(t, e, a) {
          return this.#u("ACTION_CREATE_DESKTOP_SHORTCUT", {
            uri: t,
            label: e,
            icon: a,
          });
        }
        async getSystemIdleTime() {
          return await this.#u("ACTION_GET_SYSTEM_IDLE_TIME");
        }
        async postAnalyticsEvent(t, e = {}) {
          return await this.#u("ACTION_POST_ANALYTICS_EVENT", {
            name: t,
            params: e,
          });
        }
        get isWindows10OrGreater() {
          if ("win32" !== this.info.osPlatform) return !1;
          const t = this.info.osVersion.split(".");
          return t.length >= 1 && parseInt(t[0]) >= 10;
        }
        get applyUpdateDuration() {
          return this.#o ? ((this.#c ?? Date.now()) - this.#o) / 1e3 : null;
        }
      }
    },
    30206: (t, e, a) => {
      a.d(e, { V: () => f, w: () => m });
      var s = a(70655),
        n = a(32081),
        i = a("aurelia-framework"),
        r = a(45437),
        o = a(18739),
        c = a(62546),
        l = a(81110),
        u = a(4346),
        p = a("services/bugsnag/index"),
        h = a(15524),
        d = a(11912);
      function g(t) {
        return (
          t &&
            (t = t.replaceAll("/", "\\")).endsWith("\\") &&
            (t = t.substring(0, t.length - 1)),
          t
        );
      }
      class f extends Error {
        constructor(t) {
          super(`App launched failed with code ${t}.`),
            (this.errorCode = t),
            Object.setPrototypeOf(this, f.prototype);
        }
      }
      let m = class {
        #E;
        #_;
        #T;
        constructor(t, e) {
          (this.#E = t), (this.#_ = e);
        }
        setPlatforms(t) {
          this.#T = t;
        }
        setIconCacheDirectory(t) {
          this.iconCacheDirectory = t;
        }
        async findApps(t) {
          const e = new Map(),
            a = new Map();
          await this.#L(t, a, e);
          const s = new Map();
          for (const n of t) {
            const t = e.get(n);
            if (t) {
              const e = t.redirect
                ? this.#v(t.location, t.redirect, a)
                : t.location;
              e &&
                s.set(n, {
                  platform: t.platform,
                  sku: t.sku,
                  location: e,
                  alternateLocations: t.alternateLocations,
                });
            }
          }
          return s;
        }
        async #L(t, e, a) {
          const s = new Set(),
            n = this.#C(t);
          for (const [t, i] of n) {
            const n = e.get(t) ?? new Map(),
              r = i.filter((t) => !n.has(t));
            if (r.length > 0) {
              const i = (await this.#T[t]?.findApps(r, await this.#O(t))) ?? [];
              for (const e of r) {
                const s = new h.h(t, e).toString(),
                  r = i.find((t) => t.sku === e),
                  o = r ? { correlationId: s, platform: t, ...r } : null;
                n.set(e, o), a.set(s, o);
              }
              e.set(t, n);
              for (const t of i)
                t.redirect &&
                  s.add(
                    new h.h(t.redirect.platform, t.redirect.sku).toString()
                  );
            }
          }
          s.size > 0 && (await this.#L(Array.from(s), e, a));
        }
        #C(t) {
          const e = new Map();
          for (const a of t) {
            const { platform: t, sku: s } = h.h.parse(a),
              n = e.get(t);
            void 0 === n ? e.set(t, [s]) : n.push(s);
          }
          return e;
        }
        async getInstalledApps() {
          const t = new Map(),
            e = await this.#S();
          await Promise.all(
            Object.keys(this.#T).map(async (a) => {
              try {
                const s = await this.#T[a].getApps(e[a]);
                t.set(
                  a,
                  new Map(
                    s.map(
                      (t) => (
                        (t.location = g(t.location)),
                        t.alternateLocations &&
                          (t.alternateLocations = t.alternateLocations.map(g)),
                        [t.sku, t]
                      )
                    )
                  )
                );
              } catch (t) {
                t instanceof u.h ||
                  (0, p.report)(
                    new Error(
                      `${
                        t?.constructor?.name ?? "Unknown error"
                      } occured while reading ${a} apps. Message: ${t?.message}`
                    )
                  );
              }
            })
          );
          const a = [];
          for (const [e, s] of t)
            for (const [n, i] of s) {
              const s = i.redirect
                ? this.#v(i.location, i.redirect, t)
                : i.location;
              s &&
                a.push({
                  platform: e,
                  sku: n,
                  location: s,
                  alternateLocations: i.alternateLocations,
                });
            }
          return a;
        }
        #v(t, e, a, s = new Set()) {
          const n = a.get(e.platform);
          if (!n) return t;
          const i = n.get(e.sku);
          return i
            ? i.redirect
              ? s.has(i.redirect)
                ? i.location
                : (s.add(i.redirect), this.#v(i.location, i.redirect, a, s))
              : i.location
            : t;
        }
        async launchApp(t, e, a, s, i) {
          "string" == typeof a && (a = a.replaceAll("&", "^&"));
          const r = await this.#N(t, e, a, s);
          if (null === r) throw new Error("App not found.");
          await new Promise((t, e) => {
            const a = (0, n.spawn)(r.command, {
                detached: !0,
                windowsHide: !0,
                stdio: "ignore",
                env: this.#E.info.env,
                cwd: r.cwd,
                shell: `${this.#E.getNativeSystemFolder()}\\cmd.exe`,
              }),
              s = new d.K4([
                (0, d.HB)(a, "error", (t) => {
                  s.dispose(), e(t);
                }),
                (0, d.HB)(a, "exit", (a) => {
                  s.dispose(),
                    "number" != typeof a ||
                    (0 !== a &&
                      100010 !== a &&
                      !r.successExitCodes?.includes(a))
                      ? e(new f(a))
                      : t();
                }),
                i.onCancel(() => {
                  s.dispose(), e(new d.ie());
                }),
              ]);
          });
        }
        async #N(t, e, a, s) {
          const n = (await this.#S())[t];
          return (await this.#T[t]?.getLaunchConfiguration(e, a, n, s)) ?? null;
        }
        async #S() {
          return await this.#_.state
            .pipe((0, o.P)(), (0, c.j)("catalog", "platforms"))
            .toPromise();
        }
        async #O(t) {
          return (
            (await this.#_.state
              .pipe((0, o.P)(), (0, c.j)("catalog", "platforms", t))
              .toPromise()) ?? {}
          );
        }
        async getIcon(t, e) {
          return (await this.#T[t]?.getIcon(e, await this.#O(t))) ?? null;
        }
      };
      m = (0, s.gn)(
        [(0, i.autoinject)(), (0, s.w6)("design:paramtypes", [l.f, r.yh])],
        m
      );
    },
    26822: (t, e, a) => {
      a.d(e, { B: () => h });
      var s = a(70655),
        n = a(71017),
        i = a("aurelia-framework"),
        r = a(56901),
        o = a(6358),
        c = a(57638),
        l = a(20259),
        u = a(40903);
      let p = class {
        #D;
        constructor(t) {
          this.#D = t;
        }
        async read(t) {
          if (
            null === t ||
            !(await r.promises
              .stat(t)
              .then((t) => t.isFile())
              .catch(() => !1))
          )
            return null;
          switch ((0, c.DZ)(t).toLocaleLowerCase()) {
            case ".exe":
            case ".dll":
              return await this.#k(t);
            case ".p7x":
              return await this.#b(t);
            case ".zip":
            case ".jar":
              return await this.#R(t);
            default:
              return null;
          }
        }
        async readProtectedFileModificationTime(t) {
          try {
            const e = await this.#D.statFile(t);
            return null === e ? null : e.lastWriteTime;
          } catch {
            return null;
          }
        }
        async #k(t) {
          try {
            return (await l.QT.load(t)).ntHeaders.fileHeader.timestamp;
          } catch {
            return null;
          }
        }
        async #b(t) {
          try {
            return (await this.#D.getFileSignatureInfo(t)).timestamp;
          } catch {
            return null;
          }
        }
        async #R(t) {
          const e = await (0, u.I)(t);
          return e ? Math.floor(e.getTime() / 1e3) : null;
        }
      };
      p = (0, s.gn)(
        [(0, i.autoinject)(), (0, s.w6)("design:paramtypes", [o.aI])],
        p
      );
      let h = class {
        #P;
        constructor(t) {
          this.#P = t;
        }
        async getGameVersion(t, e, a, s) {
          const i = n.join(t, e),
            o = await r.promises.stat(i).catch(() => null);
          if (null === o)
            return "uwp" === a
              ? e.toLocaleLowerCase().endsWith(".p7x")
                ? await this.#W(n.join(t, "AppxManifest.xml"), s)
                : await this.#W(i, s)
              : null;
          const c = Math.floor(o.mtimeMs / 1e3);
          if (s && s.modifiedAt === c) return s;
          let l = await this.#P.read(i);
          return (
            null !== l ||
              "uwp" !== a ||
              e.toLocaleLowerCase().endsWith(".p7x") ||
              (l = c),
            null !== l ? { version: l, modifiedAt: c } : null
          );
        }
        async #W(t, e) {
          const a = await this.#P.readProtectedFileModificationTime(t);
          return a
            ? e?.modifiedAt !== a
              ? { version: a, modifiedAt: a }
              : e
            : null;
        }
      };
      h = (0, s.gn)(
        [(0, i.autoinject)(), (0, s.w6)("design:paramtypes", [p])],
        h
      );
    },
    "installations/index": (t, e, a) => {
      a.r(e), a.d(e, { configure: () => Q, platforms: () => B });
      var s = a(45437),
        n = a(81110),
        i = a(30206),
        r = a(34135),
        o = a(70655),
        c = a("aurelia-framework"),
        l = a(13171),
        u = a(56901);
      class p {
        #M;
        constructor(t) {
          this.#M = t;
        }
        static async getDefault(t, e) {
          const a = await t.queryValue(
            "HKEY_LOCAL_MACHINE\\SOFTWARE\\Epic Games\\EpicGamesLauncher\\AppDataPath",
            l.G.Registry32
          );
          if (
            "string" == typeof a &&
            a.length > 0 &&
            (await u.promises
              .stat(a)
              .then((t) => t.isDirectory())
              .catch(() => !1))
          )
            return new p(a.endsWith("\\") ? a.substring(0, a.length - 1) : a);
          const s = e.expandEnvironmentStrings(
            "%ProgramData%\\Epic\\EpicGamesLauncher\\Data"
          );
          return (await u.promises
            .stat(s)
            .then((t) => t.isDirectory())
            .catch(() => !1))
            ? new p(s)
            : null;
        }
        async getInstalledApplications() {
          return (await this.#F()).filter(
            (t) =>
              !0 !== t.bIsIncompleteInstall &&
              "string" == typeof t.InstallLocation &&
              "string" == typeof t.CatalogNamespace &&
              "string" == typeof t.CatalogItemId &&
              "string" == typeof t.AppName &&
              Array.isArray(t.AppCategories)
          );
        }
        async #F() {
          const t = `${this.#M}\\Manifests`,
            e = await u.promises
              .readdir(t, { withFileTypes: !0 })
              .catch(() => []),
            a = [];
          for (const s of e)
            if (s.isFile() && s.name.endsWith(".item"))
              try {
                a.push(
                  JSON.parse(
                    await u.promises.readFile(`${t}\\${s.name}`, "utf8")
                  )
                );
              } catch {}
          return a;
        }
      }
      let h = class {
        #$;
        #E;
        #V;
        constructor(t, e) {
          (this.#$ = t), (this.#E = e);
        }
        async #G() {
          return (
            this.#V || (this.#V = await p.getDefault(this.#$, this.#E)), this.#V
          );
        }
        async findApps(t) {
          return (await this.getApps()).filter((e) => t.includes(e.sku));
        }
        async getApps() {
          const t = await this.#G();
          if (!t) return [];
          const e = [],
            a = await t.getInstalledApplications();
          for (const t of a.filter((t) => t.AppCategories.includes("games")))
            e.push({
              sku: `${t.CatalogNamespace}:${t.CatalogItemId}:${t.AppName}`,
              location: t.InstallLocation,
              redirect: this.#x(t),
            });
          return e;
        }
        #x(t) {
          if (
            "string" != typeof t.LaunchExecutable ||
            "string" != typeof t.LaunchCommand
          )
            return null;
          if ("uplaylaunch.exe" !== t.LaunchExecutable.toLocaleLowerCase())
            return null;
          const e = t.LaunchCommand.match(/-uplayid=([0-9]+)/i)?.[1] ?? null;
          return e ? { platform: "uplay", sku: e } : null;
        }
        async getLaunchConfiguration(t, e) {
          return {
            command: `start "" "com.epicgames.launcher://apps/${encodeURIComponent(
              t
            )}?action=launch&silent=true"`,
          };
        }
        async getIcon(t) {
          return null;
        }
      };
      var d;
      h = (0, o.gn)(
        [(0, c.autoinject)(), (0, o.w6)("design:paramtypes", [l.u, n.f])],
        h
      );
      const g = "HKEY_LOCAL_MACHINE\\SOFTWARE\\GOG.com\\Games";
      let f = (d = class {
        #$;
        constructor(t, e) {
          (this.location = t), (this.#$ = e);
        }
        static async getDefault(t, e) {
          const a = await t.queryValue(
            "HKEY_LOCAL_MACHINE\\SOFTWARE\\GOG.com\\GalaxyClient\\paths\\client",
            l.G.Registry32
          );
          if (
            "string" == typeof a &&
            a.length > 0 &&
            (await d.isValidInstallDir(a))
          )
            return new d(a, t);
          const s = e.expandEnvironmentStrings(
            "%PROGRAMFILES(X86)%\\GOG Galaxy"
          );
          return (await d.isValidInstallDir(s)) ? new d(s, t) : null;
        }
        static async isValidInstallDir(t) {
          try {
            return (await u.promises.stat(`${t}\\GalaxyClient.exe`)).isFile();
          } catch {
            return !1;
          }
        }
        async getGames() {
          const t = await this.#$.querySubkeySubkeyValues(g, l.G.Registry32);
          if (!t) return [];
          const e = [];
          for (const a of Object.values(t)) {
            const t = this.#U(a);
            t && e.push(t);
          }
          return e;
        }
        async findGame(t) {
          try {
            const e = await this.#$.querySubkeyValues(
              `${g}\\${t}`,
              l.G.Registry32
            );
            return this.#U(e);
          } catch {
            return null;
          }
        }
        #U(t) {
          try {
            const e = {};
            for (const a of Object.keys(t)) e[a.toUpperCase()] = t[a];
            if ("string" != typeof (t = e).PATH || 0 === t.PATH.length)
              return null;
            const a = parseInt(t.GAMEID, 10);
            return isNaN(a) || a <= 0
              ? null
              : {
                  id: a,
                  buildId: t.BUILDID,
                  name: t.GAMENAME,
                  launchCommand: t.LAUNCHCOMMAND,
                  launchParam: t.LAUNCHPARAM,
                  workingDir: t.WORKINGDIR,
                  path: t.PATH,
                };
          } catch {
            return null;
          }
        }
      });
      f = d = (0, o.gn)(
        [(0, c.autoinject)(), (0, o.w6)("design:paramtypes", [String, l.u])],
        f
      );
      let m = class {
        #$;
        #E;
        #H;
        constructor(t, e) {
          (this.#$ = t), (this.#E = e);
        }
        async #j() {
          return (
            this.#H || (this.#H = await f.getDefault(this.#$, this.#E)), this.#H
          );
        }
        async findApps(t) {
          const e = await this.#j();
          return e
            ? (await Promise.all(t.map((t) => e.findGame(parseInt(t, 10)))))
                .filter((t) => !!t)
                .map((t) => this.#q(t))
            : [];
        }
        async getApps() {
          const t = await this.#j();
          return t ? (await t.getGames()).map((t) => this.#q(t)) : [];
        }
        #q(t) {
          return { sku: t.id.toString(), location: t.path.toLocaleLowerCase() };
        }
        async getLaunchConfiguration(t, e) {
          const a = await this.#j();
          if (!a) return null;
          const s = await a.findGame(Number(t));
          return s
            ? {
                command: `"${a.location}\\GalaxyClient.exe" /command=runGame /gameId=${t} /path="${s.path}"`,
                cwd: a.location,
                successExitCodes: [4294967295],
              }
            : null;
        }
        async getIcon(t) {
          return null;
        }
      };
      m = (0, o.gn)(
        [(0, c.autoinject)(), (0, o.w6)("design:paramtypes", [l.u, n.f])],
        m
      );
      var y = a(58694),
        w = a(6113);
      const I = Buffer.alloc(32);
      async function A(t) {
        if ("string" != typeof t) return null;
        const e = `${t}\\Launcher.exe`;
        return (await u.promises
          .stat(e)
          .then((t) => t.isFile())
          .catch(() => !1))
          ? e
          : null;
      }
      class E {
        #K;
        #M;
        constructor(t, e) {
          (this.#K = t), (this.#M = e);
        }
        static async getDefault(t, e) {
          const a = await t
              .queryValue(
                "HKEY_LOCAL_MACHINE\\SOFTWARE\\Rockstar Games\\Launcher\\InstallFolder",
                l.G.Registry32
              )
              .catch(() => null),
            s =
              (await A(a)) ??
              (await A(
                e.expandEnvironmentStrings(
                  "%PROGRAMW6432%\\Rockstar Games\\Launcher"
                )
              )) ??
              (await A(
                e.expandEnvironmentStrings(
                  "%PROGRAMFILES%\\Rockstar Games\\Launcher"
                )
              ));
          return null === s
            ? null
            : new E(
                s,
                e.expandEnvironmentStrings(
                  "%PROGRAMDATA%\\Rockstar Games\\Launcher"
                )
              );
        }
        async getTitles() {
          const t = await (async function (t) {
            try {
              const e = await u.promises.readFile(t),
                a = w.createDecipheriv("aes-256-cbc", I, e.slice(0, 16)),
                s = Buffer.concat([a.update(e.slice(16)), a.final()]);
              return JSON.parse(s.toString("utf-8"));
            } catch {
              return null;
            }
          })(`${this.#M}\\titles.dat`);
          return "object" == typeof t && null !== t && Array.isArray(t.tl)
            ? t.tl
                .filter((t) => null !== t && "object" == typeof t)
                .map((t) => ({
                  id: t.ti,
                  location: t.il,
                  version: t.iv,
                  flags: t.if,
                }))
                .filter(
                  (t) =>
                    0 !== t.flags &&
                    "launcher" !== t.id &&
                    "string" == typeof t.location &&
                    0 !== t.location.length &&
                    "string" == typeof t.id &&
                    "string" == typeof t.version &&
                    "number" == typeof t.flags
                )
            : [];
        }
        getLaunchCommand(t) {
          return `"${this.#K}" -minmodeApp=${t}`;
        }
      }
      let _ = class {
        #$;
        #E;
        #Y;
        constructor(t, e) {
          (this.#$ = t), (this.#E = e);
        }
        async #Z() {
          return this.#Y || (this.#Y = await E.getDefault(this.#$, this.#E));
        }
        async findApps(t) {
          return (await this.getApps()).filter((e) => t.includes(e.sku));
        }
        async getApps() {
          const t = await this.#Z();
          return null === t
            ? []
            : (await t.getTitles()).map((t) => ({
                sku: t.id,
                location: t.location.toLocaleLowerCase(),
              }));
        }
        async getLaunchConfiguration(t) {
          return { command: (await this.#Z()).getLaunchCommand(t) };
        }
        async getIcon(t) {
          return null;
        }
      };
      _ = (0, o.gn)(
        [(0, c.autoinject)(), (0, o.w6)("design:paramtypes", [l.u, n.f])],
        _
      );
      let T = class {
        #E;
        #$;
        constructor(t, e) {
          (this.#E = t), (this.#$ = e);
        }
        async getLaunchConfiguration(t, e, a) {
          const s = a.apps.find((e) => e.id === t);
          if (!s) return null;
          const n = await this.#z(s);
          return n
            ? {
                command: `"${n}\\${s.launcher}" ${s.args || ""} ${
                  e || ""
                }`.trim(),
                cwd: s.cwd ? `${n}\\${s.cwd}` : n,
              }
            : null;
        }
        async findApps(t, e) {
          const a = [];
          for (const s of t) {
            const t = e.apps.find((t) => t.id === s);
            if (void 0 !== t) {
              const e = await this.#z(t);
              null !== e &&
                a.push({ sku: t.id, location: e.toLocaleLowerCase() });
            }
          }
          return a;
        }
        async getApps(t) {
          return (
            await Promise.all(
              t.apps.map(async (t) => ({
                sku: t.id,
                location: ((await this.#z(t)) || "").toLocaleLowerCase(),
              }))
            )
          ).filter((t) => !!t.location);
        }
        async #z(t) {
          for (const e of t.locators) {
            const a = await this.#B(e);
            if (
              a &&
              (await u.promises
                .stat(`${a}\\${t.launcher}`)
                .then((t) => t.isFile())
                .catch(() => !1))
            )
              return a;
          }
          return null;
        }
        async #B(t) {
          let e;
          switch (t.type) {
            case "directory":
              e = t.value;
              break;
            case "registry_value":
              e = await this.#Q(t.value);
              break;
            case "uninstall_key":
              e = await this.#Q(
                `HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\${t.value}\\InstallLocation`
              );
          }
          return "string" != typeof e || 0 === e.length
            ? null
            : ((e = e.split(",")[0].replaceAll('"', "")),
              (e = this.#E.expandEnvironmentStrings(e).replaceAll("/", "\\")),
              e);
        }
        async #Q(t) {
          let e;
          try {
            e = await this.#$.queryValue(t, l.G.Registry64);
          } catch {}
          if (!e)
            try {
              e = await this.#$.queryValue(t, l.G.Registry32);
            } catch {}
          return "string" == typeof e ? e : null;
        }
        async getIcon(t) {
          return null;
        }
      };
      T = (0, o.gn)(
        [(0, c.autoinject)(), (0, o.w6)("design:paramtypes", [n.f, l.u])],
        T
      );
      var L = a(98099),
        v = a(950);
      const C = [
        [/"\t/g, '":\t'],
        [/\t/g, ""],
        [/\n/g, ""],
        [/"\{/g, '":{'],
        [/\}"/g, '},"'],
        [/("*)""/g, '$1","'],
      ];
      function O(t) {
        return (
          C.forEach((e) => (t = t.replace(e[0], e[1]))), JSON.parse(`{${t}}`)
        );
      }
      function S(t) {
        return N(new v.O(t));
      }
      function N(t) {
        let e = t.readByte();
        const a = {};
        for (; 8 !== e; )
          (a[t.readNullTerminatedString("ascii")] = D(e, t)),
            (e = t.readByte());
        return a;
      }
      function D(t, e) {
        switch (t) {
          case 0:
            return N(e);
          case 1:
            return e.readNullTerminatedString("utf8");
          case 2:
          case 6:
          case 4:
            return e.readInt32();
          case 3:
            return e.readFloat();
          case 7:
            return e.readUInt64();
          case 10:
            return e.readInt64();
          default:
            throw new Error(`Unknown node type ${t} in VDF`);
        }
      }
      class k {
        constructor(t, e) {
          (this.universe = t), (this.io = e);
        }
        static async open(t) {
          const e = await v.c.open(t);
          try {
            const t = await e.read(8);
            if (8 !== t.length || 658789895 !== t.readUInt32BE())
              throw new Error("Invalid Steam appinfo file");
            return new k(t.readUInt32LE(4), e);
          } catch (t) {
            throw (await e.close(), t);
          }
        }
        async *enumerateApps(t) {
          let e = t.length;
          const a = new Set(t);
          for (this.io.position = 8; e > 0; ) {
            const t = await this.io.read(8),
              s = t.readUInt32LE();
            if (0 === s) break;
            const n = t.readUInt32LE(4);
            if (a.has(s)) {
              e--, (this.io.position += 40);
              const t = await this.io.read(n - 40);
              yield S(t);
            } else this.io.position += n;
          }
        }
        close() {
          return this.io.close();
        }
      }
      var b = a(51722),
        R = a(57638);
      const P = /^appmanifest_\d+\.acf$/i,
        W = (0, L.jl)("steam");
      let M = !1;
      class F {
        #J;
        constructor(t, e = null) {
          (this.location = e), (this.#J = t);
        }
        get isPrimary() {
          return this.location === this.#J.directory;
        }
        get appDirectory() {
          return (0, R.v_)(this.location, "steamapps");
        }
        async getChildLibraries() {
          if (!this.isPrimary) return [];
          const t = `${this.appDirectory}\\libraryfolders.vdf`,
            e = [];
          try {
            const a = O(await u.promises.readFile(t, "utf8")),
              s = a.LibraryFolders ?? a.libraryfolders;
            if ("object" == typeof s)
              for (let t = 1; s.hasOwnProperty(t.toString()); t++) {
                const a = s[t.toString(10)],
                  n = "string" == typeof a ? a : a.path;
                "string" == typeof n &&
                  (await u.promises
                    .stat(n)
                    .then((t) => t.isDirectory())
                    .catch(() => !1)) &&
                  e.push(new F(this.#J, n));
              }
          } catch {
            W.error("Invalid VDF", t);
          }
          return e;
        }
        async refreshApps() {
          const t = await u.promises
            .readdir(this.appDirectory, { withFileTypes: !0 })
            .catch(() => null);
          if (null === t) return [];
          const e = new Set(),
            a = [];
          for (const s of t)
            if (s.isFile() && P.test(s.name)) {
              const t = await this.#X(s.name);
              null !== t && (e.add(t.appId), a.push(t));
            }
          const s = await this.getChildLibraries();
          for (const t of s) {
            const s = await t.refreshApps();
            for (const t of s) e.has(t.appId) || (e.add(t.appId), a.push(t));
          }
          return (
            !M &&
              this.isPrimary &&
              (W.debug(
                "Libraries discovered.",
                [this.location].concat(s.map((t) => t.location))
              ),
              (M = !0)),
            a
          );
        }
        async findApp(t) {
          const e = `appmanifest_${t}.acf`;
          let a = await this.#X(e, !1);
          if (null !== a) return a;
          for (const t of await this.getChildLibraries())
            if (((a = await t.#X(e, !1)), null !== a)) return a;
          return null;
        }
        async #X(t, e = !0) {
          t = `${this.appDirectory}\\${t}`;
          try {
            const e = O(await u.promises.readFile(t, "utf8"));
            if (null === e) return null;
            const a = Object.keys(e);
            if (0 === a.length) return null;
            if (
              (a.forEach((t) => (e[t.toLowerCase()] = e[t])), "appstate" in e)
            ) {
              const t = e.appstate;
              if (
                (Object.keys(t).forEach((e) => (t[e.toLowerCase()] = t[e])),
                "appid" in t &&
                  "stateflags" in t &&
                  "buildid" in t &&
                  "installdir" in t)
              ) {
                const e = parseInt(t.stateflags, 10);
                if ((0, b.yE)(e, 4))
                  return (
                    (0, R.YP)(t.installdir) ||
                      (t.installdir = (0, R.v_)(
                        this.appDirectory,
                        "common",
                        t.installdir
                      )),
                    {
                      appId: parseInt(t.appid, 10),
                      stateFlags: parseInt(t.stateflags, 10),
                      buildId: parseInt(t.buildid, 10),
                      location: t.installdir,
                    }
                  );
              }
            }
          } catch {
            e && W.warn("Invalid ACF", t);
          }
          return null;
        }
      }
      const $ = (0, L.jl)("steam");
      class V {
        constructor(t) {
          this.directory = t;
        }
        get exePath() {
          return this.directory + "\\Steam.exe";
        }
        defaultLibrary() {
          return new F(this, this.directory);
        }
        static async getDefault(t, e) {
          const a = await t.queryValue(
            "HKEY_LOCAL_MACHINE\\SOFTWARE\\Valve\\Steam\\InstallPath",
            l.G.Registry32
          );
          if (
            "string" == typeof a &&
            a.length > 0 &&
            (await u.promises
              .stat(a)
              .then((t) => t.isDirectory())
              .catch(() => !1))
          )
            return new V(a);
          const s = e.expandEnvironmentStrings("%PROGRAMFILES(X86)%\\Steam");
          return (await u.promises
            .stat(s)
            .then((t) => t.isDirectory())
            .catch(() => !1))
            ? new V(s)
            : (a
                ? $.warn("Invalid installation path.", a)
                : $.debug("Steam not installed."),
              null);
        }
        async openAppInfo() {
          try {
            return await k.open(this.directory + "\\appcache\\appinfo.vdf");
          } catch {
            return null;
          }
        }
      }
      let G = class {
        #$;
        #E;
        #J;
        constructor(t, e) {
          (this.#$ = t), (this.#E = e);
        }
        async #j() {
          return (
            this.#J || (this.#J = await V.getDefault(this.#$, this.#E)), this.#J
          );
        }
        async getLibrary() {
          const t = await this.#j();
          return t && t.defaultLibrary();
        }
        async findApps(t) {
          const e = await this.#j();
          if (!e) return [];
          const a = [];
          for (const s of t) {
            const t = await e.defaultLibrary().findApp(Number(s));
            null !== t && a.push(this.#tt(t));
          }
          return a;
        }
        async getApps() {
          const t = await this.#j();
          return t
            ? (await t.defaultLibrary().refreshApps()).map((t) => this.#tt(t))
            : [];
        }
        #tt(t) {
          return {
            sku: t.appId.toString(),
            location: t.location.toLocaleLowerCase(),
          };
        }
        async getLaunchConfiguration(t, e) {
          const a = await this.#j();
          return !e || e.startsWith("-") || e.startsWith("/")
            ? { command: `"${a.exePath}" -applaunch ${t} ${e || ""}`.trim() }
            : { command: `"${a.exePath}" "steam://launch/${t}/${e}"` };
        }
        async getIcon(t) {
          const e = await this.#j();
          if (!e) return null;
          const a = await e.openAppInfo();
          if (!a) return null;
          try {
            const s = parseInt(t, 10),
              n = (await a.enumerateApps([s]).next()).value?.appinfo,
              i = n?.common.clienticon;
            return i ? `${e.directory}\\steam\\games\\${i}.ico` : null;
          } finally {
            a.close();
          }
        }
      };
      G = (0, o.gn)(
        [(0, c.autoinject)(), (0, o.w6)("design:paramtypes", [l.u, n.f])],
        G
      );
      const x = "HKEY_LOCAL_MACHINE\\SOFTWARE\\Ubisoft\\Launcher\\Installs";
      class U {
        #et;
        #$;
        constructor(t, e) {
          t.endsWith("\\") && (t = t.substring(0, t.length - 1)),
            (this.#et = t),
            (this.#$ = e);
        }
        static async getDefault(t) {
          const e = await t.queryValue(
            "HKEY_LOCAL_MACHINE\\SOFTWARE\\Ubisoft\\Launcher\\InstallDir",
            l.G.Registry32
          );
          return "string" == typeof e ? new U(e, t) : null;
        }
        async getAllGames() {
          const t = await this.#$.querySubkeySubkeyValues(x, l.G.Registry32);
          if (!t) return [];
          const e = [];
          for (const [a, s] of Object.entries(t)) {
            const t = await this.#at(a, s);
            t && e.push(t);
          }
          return e;
        }
        async findGame(t) {
          const e = await this.#$.querySubkeyValues(
            `${x}\\${t}`,
            l.G.Registry32
          );
          return e ? await this.#at(t, e) : null;
        }
        async #at(t, e) {
          try {
            const a = parseInt(t, 10);
            if (
              !isNaN(a) &&
              "object" == typeof e &&
              "string" == typeof e.InstallDir
            ) {
              const t = e.InstallDir.replaceAll("/", "\\");
              if ((await u.promises.stat(t + "uplay_install.state")).isFile())
                return { id: a, location: t };
            }
          } catch {}
          return null;
        }
        getLaunchCommand(t, e) {
          let a = `"${this.#et}\\UbisoftGameLauncher.exe" -upc_uplay_id ${t}`;
          return (
            "string" == typeof e &&
              e.length > 0 &&
              (a += " -upc_arguments " + btoa(e)),
            a
          );
        }
      }
      let H = class {
        #$;
        #st;
        constructor(t) {
          this.#$ = t;
        }
        async #G() {
          return this.#st || (this.#st = await U.getDefault(this.#$));
        }
        async findApps(t) {
          const e = await this.#G();
          if (null === e) return [];
          const a = [];
          for (const s of t) {
            const t = await e.findGame(s);
            t && a.push(this.#q(t));
          }
          return a;
        }
        async getApps() {
          const t = await this.#G();
          return null === t
            ? []
            : (await t.getAllGames()).map((t) => this.#q(t));
        }
        #q(t) {
          return {
            sku: t.id.toString(),
            location: t.location.toLocaleLowerCase(),
          };
        }
        async getLaunchConfiguration(t, e) {
          return {
            command: (await this.#G()).getLaunchCommand(parseInt(t, 10), e),
          };
        }
        async getIcon(t) {
          return null;
        }
      };
      H = (0, o.gn)(
        [(0, c.autoinject)(), (0, o.w6)("design:paramtypes", [l.u])],
        H
      );
      var j = a(6358),
        q = a(30654);
      class K {
        constructor(t, e) {
          (this.fullName = t), (this.packageRoot = e);
        }
        async getLaunchCommand(t) {
          return (
            (t ??= await this.#nt()),
            `start shell:AppsFolder\\${this.fullName.pfn}!${t}`
          );
        }
        async #nt() {
          try {
            const t = await u.promises.readFile(
                this.packageRoot + "\\AppxManifest.xml",
                "utf8"
              ),
              e = t.indexOf('Id="', t.indexOf("<Application "));
            return t.substring(e + 4, t.indexOf('"', e + 4));
          } catch {
            return "App";
          }
        }
      }
      let Y = class {
        #$;
        #it;
        constructor(t, e) {
          (this.#$ = t), (this.#it = e);
        }
        async getAllApps() {
          const t = await this.#$.querySubkeySubkeyValues(
            "HKEY_CLASSES_ROOT\\Local Settings\\Software\\Microsoft\\Windows\\CurrentVersion\\AppModel\\Repository\\Packages"
          );
          if (!t) return [];
          const e = await this.#rt(),
            a = new Set(await this.#ot()),
            s = Object.values(t)
              .map((t) => this.#X(t, e))
              .filter((t) => null !== t);
          for (const t of s)
            if (a.has(t.fullName.toString())) {
              const e = await this.#it.resolvePath(t.packageRoot);
              e && e !== t.packageRoot && (t.resolvedPackageRoot = e);
            }
          return s;
        }
        #X(t, e) {
          if (
            "string" == typeof t.PackageID &&
            "string" == typeof t.PackageRootFolder
          ) {
            const a = e.get(t.PackageID);
            try {
              const e = q.d.parse(t.PackageID),
                s = new K(e, t.PackageRootFolder);
              return (
                a &&
                  ((s.installedLocation = a.InstalledLocation || null),
                  (s.mutableLink = a.MutableLink || null),
                  (s.mutableLocation = a.MutableLocation || null)),
                s
              );
            } catch {}
          }
          return null;
        }
        async #ot() {
          const t = await this.#$.querySubkeyValues(
            "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\GamingServices\\PackageRepository\\Package",
            l.G.Registry64
          );
          return t ? Object.keys(t) : [];
        }
        async #rt() {
          const t = await this.#$.querySubkeySubkeyValues(
            "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\AppModel\\StateRepository\\Cache\\Package\\Data",
            l.G.Registry64
          );
          return new Map(
            Object.values(t ?? {}).map((t) => [t.PackageFullName, t])
          );
        }
      };
      Y = (0, o.gn)(
        [(0, c.autoinject)(), (0, o.w6)("design:paramtypes", [l.u, j.aI])],
        Y
      );
      const Z = [
        400, 350, 300, 250, 225, 200, 180, 175, 150, 140, 125, 100, 80,
      ];
      let z = class {
        #ct;
        constructor(t) {
          this.#ct = t;
        }
        async findApps(t, e) {
          return (await this.getApps(e)).filter((e) => t.includes(e.sku));
        }
        async getApps(t) {
          return Array.from((await this.#lt(t)).values()).map((t) => {
            let e = t.packageRoot;
            const a = [];
            return (
              t.resolvedPackageRoot &&
                (a.push(t.packageRoot), (e = t.resolvedPackageRoot)),
              t.installedLocation &&
                t.installedLocation !== t.packageRoot &&
                t.installedLocation !== e &&
                a.push(t.installedLocation),
              t.mutableLink &&
                t.mutableLink !== e &&
                !a.includes(t.mutableLink) &&
                a.push(t.mutableLink),
              t.mutableLocation &&
                t.mutableLocation !== e &&
                !a.includes(t.mutableLocation) &&
                a.push(t.mutableLocation),
              {
                sku: t.fullName.pfn,
                location: e,
                alternateLocations: a.length ? a : void 0,
              }
            );
          });
        }
        async getLaunchConfiguration(t, e, a, s) {
          const n = (await this.#lt(a)).get(t);
          return n
            ? {
                command: await n.getLaunchCommand(
                  s ? a.containers[n.fullName.pfn] : void 0
                ),
              }
            : null;
        }
        async #lt(t) {
          const e = t.ignore.map((t) => new RegExp(t, "i")),
            a = new Map();
          return (
            (await this.#ct.getAllApps())
              .filter((t) => e.every((e) => !e.test(t.fullName.pfn)))
              .forEach((t) => {
                ("x64" !== t.fullName.arch && a.has(t.fullName.pfn)) ||
                  a.set(t.fullName.pfn, t);
              }),
            a
          );
        }
        async getIcon(t, e) {
          const a = await this.findApps([t], e);
          if (a) {
            const t = a[0],
              e = (
                await u.promises.readFile(
                  (0, R.v_)(t.location, "AppxManifest.xml")
                )
              ).toString(),
              s = [
                /VisualElements.+\Square150x150Logo="([^"]+)"/,
                /VisualElements.+\Square44x44Logo="([^"]+)"/,
                /VisualElements.+\sLogo="([^"]+)"/,
              ];
            let n;
            for (const t of s) {
              const a = t.exec(e);
              if (a) {
                n = a[1];
                break;
              }
            }
            if (!n) return;
            const i = (0, R.DZ)(n);
            if (
              !(await u.promises.stat((0, R.v_)(t.location, n)).catch(() => !1))
            )
              for (const e of Z) {
                const a = n.replace(i, `.scale-${e}${i}`);
                (await u.promises
                  .stat((0, R.v_)(t.location, a))
                  .catch(() => !1)) && (n = a);
              }
            return (await u.promises
              .stat((0, R.v_)(t.location, n))
              .catch(() => !1))
              ? (0, R.v_)(t.location, n)
              : null;
          }
          return null;
        }
      };
      z = (0, o.gn)(
        [(0, c.autoinject)(), (0, o.w6)("design:paramtypes", [Y])],
        z
      );
      const B = {
        gog: m,
        steam: G,
        uplay: H,
        uwp: z,
        epic: h,
        rockstar: _,
        standalone: T,
        [y.$]: r.a,
      };
      function Q(t, e) {
        t.container.registerSingleton(i.w, function () {
          const a = new i.w(t.container.get(n.f), t.container.get(s.yh));
          return (
            a.setPlatforms(
              (function (t) {
                const e = {};
                return (
                  Object.keys(B).forEach((a) => (e[a] = t.container.get(B[a]))),
                  e
                );
              })(t)
            ),
            a.setIconCacheDirectory(e.iconCacheDirectory),
            a
          );
        });
      }
    },
    34135: (t, e, a) => {
      a.d(e, { a: () => l, w: () => c });
      var s = a(70655),
        n = a("aurelia-framework"),
        i = a(45437),
        r = a(18739),
        o = a(62546);
      class c {
        constructor(t, e) {
          (this.gameId = t), (this.path = e);
        }
        static parse(t) {
          const e = t.indexOf("_");
          if (-1 === e) throw new Error(`Invalid custom platform SKU '${t}'.`);
          return new c(t.substring(0, e), t.substring(e + 1));
        }
        toString() {
          return `${this.gameId}_${this.path}`;
        }
      }
      let l = class {
        #_;
        constructor(t) {
          this.#_ = t;
        }
        async findApps(t) {
          return (await this.getApps()).filter((e) => t.includes(e.sku));
        }
        async getApps() {
          return Object.values(await this.#ut()).filter(
            (t) => "custom" === t.platform
          );
        }
        getLaunchConfiguration(t, e) {
          const a = c.parse(t).path;
          return Promise.resolve({
            command: `"${a}" ${e || ""}`.trim(),
            cwd: a.substring(0, a.lastIndexOf("\\")),
          });
        }
        #ut() {
          return this.#_.state
            .pipe((0, r.P)(), (0, o.j)("installedApps"))
            .toPromise();
        }
        async getIcon(t) {
          return null;
        }
      };
      l = (0, s.gn)(
        [(0, n.autoinject)(), (0, s.w6)("design:paramtypes", [i.yh])],
        l
      );
    },
    58694: (t, e, a) => {
      a.d(e, { $: () => s });
      const s = "custom";
    },
    30654: (t, e, a) => {
      a.d(e, { d: () => s });
      class s {
        constructor(t, e, a, s, n) {
          (this.name = t),
            (this.version = e),
            (this.arch = a),
            (this.locale = s),
            (this.publisherId = n),
            "" === s && (s = null);
        }
        toString() {
          return `${this.name}_${this.version}_${this.arch}_${
            this.locale || ""
          }_${this.publisherId}`;
        }
        get pfn() {
          return `${this.name}_${this.publisherId}`;
        }
        static parse(t) {
          const e = t.split("_");
          if (5 !== e.length)
            throw new Error(`Invalid package full name '${t}'.`);
          return new s(...e);
        }
      }
    },
    85473: (t, e, a) => {
      a.d(e, { JT: () => u, V3: () => p, q5: () => l });
      var s = a(98099),
        n = a(56901),
        i = a(81110),
        r = a(5384);
      const o = {
          [s.hw.debug]: "DEBUG",
          [s.hw.info]: "INFO",
          [s.hw.warn]: "WARN",
          [s.hw.error]: "ERROR",
        },
        c = [];
      async function l() {
        const t = (0, i.H)(),
          e = t.info,
          a = await t.getMemoryInfo();
        return {
          appVersion: e.version,
          locale: e.locale,
          osVersion: e.osVersion,
          osArch: e.osArch,
          cpuModel: e.deviceCpuModel,
          cpuCount: e.deviceCpuCount,
          freeMemory: a.free,
          totalMemory: a.total,
          antivirusProducts: (await t.getInstalledAvProducts()) ?? ["Error"],
        };
      }
      async function u(t) {
        const e = await l(),
          a = [
            `App Version: ${e.appVersion}`,
            `OS: ${e.osVersion}`,
            `Arch: ${e.osArch}`,
            `CPU: ${e.cpuModel ?? "Unknown"}`,
            `CPU Count: ${e.cpuCount}`,
            `Free Memory: ${(0, r.td)(e.freeMemory)} / ${(0, r.td)(
              e.totalMemory
            )}`,
            `Antivirus: ${e.antivirusProducts.join(", ") || "None"}`,
            `Locale: ${e.locale}`,
            "",
          ];
        for (const t of c)
          a.push(
            `${o[t.level]} [${t.logger.id}] ${t.message}${
              t.args ? "\r\n" + t.args : ""
            }`
          );
        await n.promises.writeFile(t, a.join("\r\n"));
      }
      class p {
        #pt(t, e, ...a) {
          (e === s.hw.debug &&
            "native" === t.id &&
            "string" == typeof a[0] &&
            a[0].startsWith("query-registry")) ||
            c.push({
              logger: t,
              level: e,
              message: a[0],
              args: a
                .slice(1)
                .map((t, e) => {
                  return `\t${e} ${
                    ((a = t), void 0 === a ? "undefined" : JSON.stringify(a))
                  }`;
                  var a;
                })
                .join("\r\n"),
            });
        }
        debug(t, ...e) {
          this.#pt(t, s.hw.debug, ...e);
        }
        info(t, ...e) {
          this.#pt(t, s.hw.info, ...e);
        }
        warn(t, ...e) {
          this.#pt(t, s.hw.warn, ...e);
        }
        error(t, ...e) {
          this.#pt(t, s.hw.error, ...e);
        }
      }
    },
    main: (t, e, a) => {
      a.d(e, { configure: () => m });
      var s = a(57147),
        n = a(71017),
        i = (a("aurelia-framework"), a(98099)),
        r = a(45437),
        o = a(18739),
        c = a(62546),
        l = a(70824),
        u = a(81110),
        p = a(85473),
        h = a("services/bugsnag/index"),
        d = a(38838),
        g = a(66825),
        f = a(86725);
      async function m(t) {
        const e = await (async function () {
          const t = await u.f.create(),
            e = ["1073807364", "3221226091", "3762504530", "4294967295"];
          return (
            t.onUpdateStateChanged(async (a) => {
              if ("available" === a)
                try {
                  await t.applyUpdate();
                } catch (t) {
                  (t instanceof Error &&
                    e.some((e) => t.message.includes(e))) ||
                    (0, h.report)(t);
                }
            }),
            t.checkForUpdate().catch(() => {}),
            document.addEventListener("keydown", async (e) => {
              if (e.ctrlKey && e.shiftKey && "L" === e.key) {
                const e = await t.showSaveFileDialog({
                  defaultPath: `WeMod-${Date.now()}.log`,
                  filters: [{ extensions: ["log"], name: "Log Files" }],
                });
                !e.canceled &&
                  e.filePath &&
                  (await (0, p.JT)(e.filePath).catch(() => {}));
              }
            }),
            t
          );
        })();
        t.container.registerInstance(u.f, e),
          console.info(`WeMod v${e.info.version}`),
          t.use
            .standardConfiguration()
            .plugin("aurelia-dialog", (t) => {
              t.useDefaults(),
                (t.settings.lock = !1),
                (t.settings.keyboard = !0),
                (t.settings.startingZIndex = 1001),
                (t.settings.restoreFocus = (t) => {
                  if (
                    (["#dialogs", "#fullscreen-dialogs"].forEach((t) => {
                      const e = document.querySelector(t);
                      e &&
                        !e.hasChildNodes() &&
                        e.classList.remove("ux-dialog-open");
                    }),
                    t)
                  )
                    try {
                      t.focus();
                    } catch (t) {
                      (0, h.report)(t);
                    }
                });
            })
            .plugin("aurelia-animator-css")
            .feature("services/bugsnag/index", {
              appVersion: e.info.version,
              appPath: e.info.paths.app,
              releaseStage:
                "stable" === e.info.releaseChannel
                  ? void 0
                  : e.info.releaseChannel,
              locale: e.info.locale,
              osArch: e.info.osArch,
              ...l.Z.services.bugsnag,
            })
            .feature("shared/utility/index", { debug: l.Z.debug })
            .feature("shared/i18n/index", {
              defaultLocale: "en-US",
              systemLocale: e.info.locale,
              supportedLocales: [
                "en-US",
                "zh-CN",
                "de-DE",
                "es-ES",
                "fr-FR",
                "pl-PL",
                "pt-BR",
                "tr-TR",
                "ja-JP",
                "ko-KR",
                `en-US-${d.Mr}`,
              ],
              templateRepository: new y(
                n.normalize(`${e.info.paths.app}/static/strings`)
              ),
              initialLocale: () =>
                t.container
                  .get(r.yh)
                  .state.pipe((0, o.P)(), (0, c.j)("settings", "language"))
                  .toPromise(),
            })
            .feature("shared/markdown/index")
            .feature("shared/pusher/index", l.Z.services.pusher)
            .feature("shared/api/index", {
              baseUrl: l.Z.services.api.baseUrl,
              clientId: l.Z.services.api.clientId,
              cdnUrl: l.Z.services.cdn.baseUrl,
              superProperties: {
                client: "desktop",
                clientVersion: e.info.version,
                os:
                  "win32" === e.info.osPlatform ? "windows" : e.info.osPlatform,
                osVersion: e.info.osVersion,
                osArch: e.info.osArch,
                systemLocale: e.info.locale,
                systemRegion: e.info.region,
              },
            })
            .feature("api/index", { catalogUrl: l.Z.services.api.catalogUrl })
            .feature("store/index", {
              storageKey: `${l.Z.storageNamespace}:globalStore`,
              debug: l.Z.debug,
            })
            .feature("native/support/index", {
              exe: n.normalize(
                `${e.info.paths.assets}/auxiliary/WeModAuxiliaryService.exe`
              ),
            })
            .feature("cheats/storage/index", {
              cacheDirectory: n.normalize(`${e.info.paths.storage}/trainers`),
            })
            .feature("cheats/trainer/index", {
              binaryDir: n.normalize(`${e.info.paths.assets}/trainerlib`),
            })
            .feature("installations/index", {
              iconCacheDirectory: n.normalize(`${e.info.paths.storage}/icons`),
            })
            .feature("resources/index"),
          t.use.preTask(async () => {
            i.RP(new f.L(l.Z.debug ? [] : ["aurelia", "templating", "host"])),
              i.RP(new p.V3()),
              i.uR(i.hw.debug);
          }),
          l.Z.testing && t.use.plugin("aurelia-testing"),
          await t.start(),
          await t.setRoot("root/root", document.getElementById("root"));
      }
      l.Z.debug || (process.noDeprecation = !0),
        (() => {
          const t = global.URL.prototype.toString;
          global.URL.prototype.toString = function () {
            const e = t.apply(this, arguments);
            return "string" == typeof e && e.startsWith("file://")
              ? e.replaceAll("'", "%27").replaceAll(")", "%29")
              : e;
          };
        })();
      class y {
        #ht;
        constructor(t) {
          this.#ht = t;
        }
        async getTemplates(t) {
          const e = await s.promises.readFile(
            n.normalize(`${this.#ht}/${t.toString()}.json`),
            "utf8"
          );
          return (0, g.N)(JSON.parse(e));
        }
      }
    },
  },
]);

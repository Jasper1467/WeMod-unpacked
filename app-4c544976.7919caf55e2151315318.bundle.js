"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [7137],
  {
    13171: (e, t, s) => {
      s.d(t, { G: () => r, u: () => u });
      var r,
        n = s(70655),
        i = s("aurelia-framework"),
        o = s(94486);
      function a(e) {
        switch (e) {
          case r.Registry64:
            return "64";
          case r.Registry32:
            return "32";
          default:
            return "default";
        }
      }
      !(function (e) {
        (e[(e.Default = 0)] = "Default"),
          (e[(e.Registry32 = 1)] = "Registry32"),
          (e[(e.Registry64 = 2)] = "Registry64");
      })(r || (r = {}));
      let u = class {
        #e;
        constructor(e) {
          this.#e = e;
        }
        #t(e) {
          return this.#e.run("QueryRegistry", e);
        }
        queryValue(e, t = r.Default) {
          const s = e.split("\\"),
            n = s.shift(),
            i = s.pop();
          return this.#t({
            type: "value",
            hive: n,
            subkey: s.join("\\"),
            value: i,
            view: a(t),
          });
        }
        querySubkeyValues(e, t = r.Default) {
          const s = e.split("\\"),
            n = s.shift();
          return this.#t({
            type: "subkey-values",
            hive: n,
            subkey: s.join("\\"),
            view: a(t),
          });
        }
        querySubkeySubkeyValues(e, t = r.Default) {
          const s = e.split("\\"),
            n = s.shift();
          return this.#t({
            type: "subkey-subkey-values",
            hive: n,
            subkey: s.join("\\"),
            view: a(t),
          });
        }
      };
      u = (0, n.gn)(
        [(0, i.autoinject)(), (0, n.w6)("design:paramtypes", [o.au])],
        u
      );
    },
    "native/support/index": (e, t, s) => {
      s.r(t), s.d(t, { configure: () => k });
      var r = s(81110),
        n = s(4346),
        i = s(94486),
        o = s(11912);
      class a extends i.au {
        constructor() {
          super(...arguments), (this.#s = new o.yM());
        }
        #s;
        subscribe(e, t) {
          return this.#s.subscribe(e, t);
        }
        onElevated(e) {
          return this.#s.subscribe("elevated", e);
        }
        async run(e, t) {
          switch ((await (0, o.UC)(10), e)) {
            case "QueryRegistry":
              return "value" === t.type ? null : {};
            case "ResolvePath":
              return t;
            case "GetProcesses":
              return [];
            case "StatFile":
            case "GetUacIcon":
            case "GetInstalledPackageId":
              return null;
            case "GrantFilePermission":
              return;
            default:
              throw new i.x8("Command not supported.");
          }
        }
        async initialize() {}
        dispose() {
          this.#s.dispose();
        }
      }
      var u,
        c = s(70655),
        l = s("aurelia-framework"),
        d = s(98099),
        p = s("services/bugsnag/index");
      !(function (e) {
        (e[(e.Success = 1)] = "Success"),
          (e[(e.Error = 2)] = "Error"),
          (e[(e.Event = 4)] = "Event"),
          (e[(e.RequiresElevation = 5)] = "RequiresElevation");
      })(u || (u = {}));
      const h = (0, d.jl)("native"),
        y = new Set(["Hotkey", "Hotkey.Pressed"]),
        v = new Set([
          "GetProcesses",
          "QueryRegistry",
          "StatFile",
          "GetInstalledPackageId",
        ]);
      let f = class extends i.au {
        #r;
        #s;
        #n;
        #i;
        #o;
        #a;
        #u;
        constructor(e) {
          super(),
            (this.#s = new o.yM()),
            (this.#n = new Map()),
            (this.#i = 1),
            (this.#r = e);
        }
        subscribe(e, t) {
          return this.#s.subscribe(e, t);
        }
        onElevated(e) {
          return this.subscribe("Elevated", e);
        }
        dispose() {
          this.#s && (this.#s.dispose(), (this.#s = null));
        }
        async run(e, t) {
          await this.initialize();
          const s = this.#i++;
          v.has(e) ||
            (h.debug(`${e}:${s} executed.`, t),
            (0, p.setMetadata)("app", "lastNativeCommand", e));
          const r = new Promise((t, r) => {
            this.#n.set(s, { command: e, resolve: t, reject: r });
          });
          return await this.#c({ id: s, command: e, data: t }), await r;
        }
        #c(e) {
          const t = JSON.stringify(e),
            s = Buffer.byteLength(t),
            r = Buffer.alloc(s + 4);
          return (
            r.writeUInt32LE(s, 0),
            r.write(t, 4),
            new Promise((e, t) => {
              this.#a.write(r, (s) => {
                s ? t(s) : e();
              });
            })
          );
        }
        async initialize() {
          (this.#o && this.#a) ||
            (this.#u || (this.#u = this.#l().finally(() => (this.#u = null))),
            await this.#u);
        }
        async #l() {
          ([this.#o, this.#a] = await this.#r.start()),
            this.#o.on("close", () => this.#d()),
            this.#a.on("close", () => this.#d()),
            this.#o.on("data", (e) => this.#p(e));
        }
        #d() {
          if (this.#o && !this.#o.destroyed)
            try {
              this.#o.destroy();
            } catch {}
          if (((this.#o = null), this.#a && !this.#a.destroyed))
            try {
              this.#a.destroy();
            } catch {}
          this.#a = null;
        }
        #p(e) {
          let t = 0;
          for (; t + 4 < e.length; ) {
            const s = e.readInt32BE(t);
            t += 4;
            const r = e.toString("utf8", t, t + s);
            let n;
            t += s;
            try {
              n = JSON.parse(r);
            } catch {
              continue;
            }
            n.status === u.Event ? this.#h(n) : this.#y(n);
          }
        }
        #h(e) {
          const t = e.data;
          y.has(t.event) || h.debug(`${t.event} raised.`, t.data),
            this.#s.publish(t.event, t.data);
        }
        #y(e) {
          const t = this.#n.get(e.id);
          if (!t) return;
          this.#n.delete(e.id);
          const s = !v.has(t.command);
          return e.status === u.Success
            ? (s && h.debug(`${t.command}:${e.id} completed.`, e.data),
              void t.resolve(e.data))
            : e.status === u.Error
            ? (s && h.debug(`${t.command}:${e.id} failed.`),
              void t.reject(new i.x8(`${t.command} task failed.`, e.data)))
            : e.status === u.RequiresElevation
            ? (s && h.error(`${t.command}:${e.id} elevation denied.`, e.data),
              void t.reject(new i.F$()))
            : void t.reject(new i.x8(`Unknown task status ${e.status}.`));
        }
      };
      function k(e, t) {
        "win32" === e.container.get(r.f).info.osPlatform
          ? (e.container.registerInstance(n.R, new n.R(t.exe)),
            e.container.registerAlias(f, i.au))
          : e.container.registerAlias(a, i.au);
      }
      f = (0, c.gn)(
        [(0, l.autoinject)(), (0, c.w6)("design:paramtypes", [n.R])],
        f
      );
    },
    4346: (e, t, s) => {
      s.d(t, { R: () => y, h: () => l });
      var r = s(32081),
        n = s(41808),
        i = s(98099),
        o = s(56901),
        a = s("services/bugsnag/index");
      const u = (0, i.jl)("native"),
        c = new Map([
          [1, "Process terminated with exit code 1."],
          [1073807364, "Process terminated for Windows shutdown."],
          [3221226091, "Process terminated for Windows logoff."],
          [4294967295, "Process terminated by task manager."],
        ]);
      class l extends Error {
        constructor(e, t = null, s) {
          super(e),
            (this.code = t),
            Object.setPrototypeOf(this, l.prototype),
            s && (this.doNotReport = !0);
        }
      }
      function d(e) {
        if (e)
          try {
            e.destroy();
          } catch {}
        return null;
      }
      function p(e) {
        if (e)
          try {
            e.close();
          } catch {}
        return null;
      }
      let h = !1;
      class y {
        #v;
        constructor(e) {
          (this.#v = e),
            window.addEventListener("unload", () => (h = !0), { once: !0 });
        }
        async start() {
          if (
            !(await o.promises
              .stat(this.#v)
              .then((e) => e.isFile())
              .catch(() => !1))
          )
            throw new l("Support executable not found.");
          const e = `WeMod\\Support_${Date.now()}`,
            t = `${e}_In`,
            s = `${e}_Out`;
          return await new Promise((e, i) => {
            let o,
              y,
              v,
              f = !1,
              k = (0, n.createServer)((t) => {
                (o = t), (f = !0), e([o, y]);
              }),
              w = (0, n.createServer)((e) => {
                y = e;
                try {
                  e.write(t, (e) => e && g(e));
                } catch (e) {
                  g(e);
                }
              });
            const g = (e) => {
              if (
                ((o = d(o)),
                (y = d(y)),
                (k = p(k)),
                (w = p(w)),
                (v = (function (e) {
                  if (e)
                    try {
                      e.kill();
                    } catch {}
                  return null;
                })(v)),
                h)
              )
                return;
              let t, s;
              if (e instanceof Error) {
                t = e;
                const r = e;
                "string" == typeof r.code &&
                  (s = new l(
                    `Auxiliary process failed with code ${r.code}.`,
                    r.code
                  ));
              }
              if ("number" == typeof e && 0 !== e) {
                const r = c.get(e);
                if (r) (t = !1), (s = new l(r, e, !0));
                else {
                  const t = `0x${e.toString(16).padStart(8, "0")}`;
                  s = new l(`Auxiliary process exited with code ${t}.`, e);
                }
              }
              (null !== e && 0 !== e) ||
                (s = new l("Auxiliary process exited without an exit code.")),
                (s ??= new l(
                  `Auxiliary process failed with ${typeof e} result.`
                )),
                !1 !== t && (0, a.report)(t ?? s),
                u.error(s.message),
                f || ((f = !0), i(s));
            };
            k.on("error", g),
              w.on("error", g),
              k.listen(`\\\\.\\pipe\\${t}`, () => {
                w.listen(`\\\\.\\pipe\\${s}`, () => {
                  try {
                    (v = (0, r.spawn)(this.#v, [s])),
                      v.on("error", g),
                      v.on("exit", g);
                  } catch (e) {
                    g(e);
                  }
                });
              });
          });
        }
      }
    },
    94486: (e, t, s) => {
      s.d(t, { F$: () => o, au: () => a, x8: () => i });
      var r = s(70655),
        n = s("aurelia-framework");
      class i extends Error {
        constructor(e, t) {
          super(e), Object.setPrototypeOf(this, i.prototype), (this.data = t);
        }
      }
      class o extends i {
        constructor() {
          super("The user denied required process elevation."),
            (this.doNotReport = !0),
            Object.setPrototypeOf(this, o.prototype);
        }
      }
      let a = class {};
      a = (0, r.gn)([(0, n.autoinject)()], a);
    },
    6358: (e, t, s) => {
      s.d(t, { Hg: () => r, _l: () => a, aI: () => u });
      var r,
        n = s(70655),
        i = s("aurelia-framework"),
        o = s(94486);
      !(function (e) {
        (e[(e.Read = 1)] = "Read"),
          (e[(e.Write = 2)] = "Write"),
          (e[(e.Execute = 4)] = "Execute");
      })(r || (r = {}));
      const a = { appContainer: "S-1-15-2-1", everyone: "S-1-1-0" };
      let u = class {
        #e;
        constructor(e) {
          this.#e = e;
        }
        initialize() {
          return this.#e.initialize();
        }
        injectDll(e, t, s = 0, r = 5) {
          return this.#e.run("InjectDll", {
            processId: e,
            dllPath: t,
            stackSize: s,
            timeout: r,
          });
        }
        resolvePath(e) {
          return this.#e.run("ResolvePath", e);
        }
        statFile(e) {
          return this.#e.run("StatFile", e);
        }
        onHotkeyPress(e) {
          return this.#e.subscribe("Hotkey", e);
        }
        getRunningProcesses(e) {
          return this.#e.run("GetProcesses", { argsFilter: e });
        }
        createRemoteThread(e, t, s, r, n) {
          return this.#e.run("CreateRemoteThread", {
            processId: e,
            module: t,
            export: s,
            arg: r ? r.toString("base64") : null,
            proxy: n || null,
          });
        }
        grantFilePermissions(e, t, s) {
          return this.#e.run("GrantFilePermission", {
            file: e,
            sids: t,
            permissions: s,
          });
        }
        waitForInputIdle(e, t) {
          return this.#e.run("WaitForInputIdle", { processId: e, timeout: t });
        }
        runLauncherBypass(e) {
          return this.#e.run("RunLauncherBypass", e);
        }
        getFileSignatureInfo(e) {
          return this.#e.run("GetFileSignatureInfo", { file: e });
        }
        addAvExclusion(e) {
          return this.#e.run("AddAvExclusion", { directory: e });
        }
        getUacIcon(e) {
          return this.#e.run("GetUacIcon", { size: e });
        }
        mountLauncherProxy(e) {
          return this.#e.run("MountLauncherProxy", e);
        }
        unmountLauncherProxy(e) {
          return this.#e.run("UnmountLauncherProxy", { launcher: e });
        }
        suspendProcess(e) {
          return this.#e.run("SuspendProcess", { processId: e });
        }
        resumeProcess(e) {
          return this.#e.run("ResumeProcess", { processId: e });
        }
        getInstalledPackageId(e) {
          return this.#e.run("GetInstalledPackageId", e);
        }
      };
      u = (0, n.gn)(
        [(0, i.autoinject)(), (0, n.w6)("design:paramtypes", [o.au])],
        u
      );
    },
  },
]);

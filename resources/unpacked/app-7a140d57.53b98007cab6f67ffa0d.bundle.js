"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [22],
  {
    20151: (e, t, s) => {
      s.d(t, { p: () => a });
      var i = s(85473),
        n = s(94692),
        r = s(15524);
      class a {
        #e;
        constructor(e) {
          (this.metadata = e), (this.events = []), (this.#e = Date.now());
        }
        event(e, t) {
          this.events.push({ type: e, time: Date.now() - this.#e, data: t });
        }
        hasEvent(e) {
          return -1 !== this.events.findIndex((t) => t.type === e);
        }
        getUsedCheatTargets() {
          return Array.from(
            new Set(
              this.events
                .filter(
                  (e) =>
                    e.type === n.zI.ValueChanged && "trainer" !== e.data.source
                )
                .map((e) => e.data.name)
            )
          );
        }
        async compile(e, t) {
          const s = await (0, i.q5)();
          return {
            trainerId: this.metadata.info.id,
            correlationId: new r.h(
              this.metadata.app.platform,
              this.metadata.app.sku
            ).toString(),
            gameVersion: this.metadata.gameVersion,
            type: e,
            report: t,
            events: e === n.Xe.Failure ? this.events : null,
            app: { version: s.appVersion },
            system: {
              version: s.osVersion,
              arch: s.osArch,
              locale: s.locale,
              freeMemory: s.freeMemory,
              antivirus: s.antivirusProducts,
            },
          };
        }
      }
    },
    77644: (e, t, s) => {
      s.d(t, { A: () => d });
      var i = s(70655),
        n = s("aurelia-framework"),
        r = s(45437),
        a = s(18739),
        o = s(62546),
        c = s(23739),
        h = s(35969),
        l = s(27170),
        u = s(69949);
      let d = class {
        #t;
        #s;
        #i;
        #n;
        constructor(e, t, s, i) {
          (this.#t = e), (this.#s = t), (this.#i = s), (this.#n = i);
        }
        async fetch(e, t) {
          const s = {
            gameId: e,
            trainerId: t,
            locale: this.#i.getEffectiveLocale().baseName,
            creatorMode: await this.#s.state
              .pipe((0, a.P)(), (0, o.j)("settings", "creatorMode"))
              .toPromise(),
          };
          return (
            (await this.#r(s)) ||
            (await this.#a(s)) ||
            this.#o(s) ||
            (await this.#c(s))
          );
        }
        async #r(e) {
          if (!e.trainerId) return null;
          const t = this.#o(e);
          if (e.trainerId === t?.id) return t;
          try {
            return await this.#h(e);
          } catch {
            return e.creatorMode ? null : await this.#l(e);
          }
        }
        async #h(e) {
          const t = e.creatorMode
            ? await this.#t.getLocalTrainerById(e.trainerId, e.locale)
            : await this.#t.getTrainerById(e.trainerId, e.locale);
          return await this.#s.dispatch(l.bP, t), t.trainer;
        }
        async #l(e) {
          return (
            (
              await this.#s.state
                .pipe((0, a.P)(), (0, o.j)("trainers", e.gameId))
                .toPromise()
            )?.find((t) => t.id === e.trainerId) || null
          );
        }
        async #a(e) {
          if (!e.creatorMode) return null;
          try {
            const t = (await this.#t.getLatestLocalTrainerForGame(e.gameId))
              .trainer;
            if (t) return t;
          } catch {}
          return null;
        }
        #o(e) {
          const t = this.#n.trainer?.getMetadata(u.z9);
          return t?.info.gameId === e.gameId ? t.info : null;
        }
        async #c(e) {
          if (e.creatorMode) return null;
          const t = await this.#u(e.gameId);
          try {
            return await this.#d(e.gameId, e.locale, t);
          } catch {
            return await this.#p(e.gameId, t);
          }
        }
        async #d(e, t, s) {
          const i = await this.#t.getMostCompatibleTrainerForGame(e, t, s);
          return await this.#s.dispatch(l.bP, i), i.trainer;
        }
        async #p(e, t) {
          const s = await this.#s.state
            .pipe((0, a.P)(), (0, o.j)("trainers", e))
            .toPromise();
          if (!s?.length) return null;
          const i = s
            .slice()
            .sort((e, t) => t.releasedAt.localeCompare(e.releasedAt));
          return (
            i.find((e) => t.some((t) => e.supportedVersions.includes(t))) ||
            i[0] ||
            null
          );
        }
        async #u(e) {
          const t = await this.#s.state
            .pipe((0, a.P)(), (0, o.j)("installedGameVersions"))
            .toPromise();
          return t[e]
            ? Array.from(
                new Set(t[e].map((e) => e.version).filter((e) => null !== e))
              )
            : [];
        }
      };
      d = (0, i.gn)(
        [
          (0, n.autoinject)(),
          (0, i.w6)("design:paramtypes", [c.K, r.yh, h.oc, u.hc]),
        ],
        d
      );
    },
    48162: (e, t, s) => {
      s.d(t, { W5: () => u, hM: () => g, or: () => d, y0: () => p });
      var i,
        n = s(70655),
        r = s("aurelia-framework"),
        a = s(30206),
        o = s(58694),
        c = s(6358),
        h = s(66302),
        l = s(11912);
      !(function (e) {
        (e[(e.Found = 0)] = "Found"),
          (e[(e.Launched = 1)] = "Launched"),
          (e[(e.Error = 2)] = "Error"),
          (e[(e.Timeout = 3)] = "Timeout"),
          (e[(e.Canceled = 4)] = "Canceled");
      })(i || (i = {}));
      class u extends Error {
        constructor(e = "The operation timed out.") {
          super(e), Object.setPrototypeOf(this, u.prototype);
        }
      }
      class d extends Error {
        constructor(e = "The game is already running and cannot be launched.") {
          super(e), Object.setPrototypeOf(this, d.prototype);
        }
      }
      class p extends Error {
        constructor(e = "Failed to find an existing game process.") {
          super(e), Object.setPrototypeOf(this, p.prototype);
        }
      }
      let g = class {
        #g;
        #m;
        constructor(e, t) {
          (this.#g = e), (this.#m = t);
        }
        launchAndForget(e, t = 1e4) {
          return new Promise((s, i) => {
            this.#m
              .launchApp(e.platform, e.sku, void 0, !1, new l.wK())
              .then(s)
              .catch(i),
              setTimeout(s, t);
          });
        }
        async launch(e, t = {}, s = {}, i) {
          const n = await this.#g.resolvePath(e.location),
            r = this.#w(e, s, n),
            a = this.#y(s.reducer),
            o = s.minimumAge ?? 8e3,
            c = s.timeout ?? 45e3,
            h = await this.#f(r, a, s.cliArgs, o, !0);
          if (h) {
            if (t && t.required) throw new d();
            return { process: h };
          }
          if (!1 === t) throw new p();
          return await this.#v(
            this.#b(e, n, t),
            () => this.#f(r, a, s.cliArgs, o, !1),
            c,
            i
          );
        }
        #b(e, t, s) {
          return async (i) => {
            let n;
            !1 !== s &&
              (s.bypass &&
                e.platform !== o.$ &&
                this.#g.runLauncherBypass({ directory: t, ...s.bypass }),
              s.proxy && e.platform !== o.$ && (n = await this.#P(e, t, s)));
            try {
              return (
                await this.#m.launchApp(
                  e.platform,
                  e.sku,
                  s ? s.cliArgs : void 0,
                  !0,
                  i
                ),
                n
              );
            } catch (e) {
              throw (n?.dispose(), e);
            }
          };
        }
        async #P(e, t, s) {
          if (e.platform !== o.$ && s.proxy) {
            const e = `${t}\\${s.proxy.launcher}`;
            if (await this.#g.mountLauncherProxy({ ...s.proxy, launcher: e }))
              return (0, l.JD)(() =>
                this.#g.unmountLauncherProxy(e).catch(h.K)
              );
          }
          return l.$L;
        }
        #w(e, t, s) {
          if (t.image) {
            const e = `\\${t.image}`.toLocaleLowerCase();
            return (t) => t.imagePath.toLocaleLowerCase().endsWith(e);
          }
          if (e.platform === o.$) {
            const e = s.toLocaleLowerCase();
            return (t) => t.imagePath.toLocaleLowerCase() === e;
          }
          if (e.alternateLocations?.length) {
            const t = e.alternateLocations.map((e) =>
              `${e}\\`.toLocaleLowerCase()
            );
            return (
              t.push(`${s}\\`.toLocaleLowerCase()),
              (e) => {
                const s = e.imagePath.toLocaleLowerCase();
                return t.some((e) => s.startsWith(e));
              }
            );
          }
          {
            const e = `${s}\\`.toLocaleLowerCase();
            return (t) => t.imagePath.toLocaleLowerCase().startsWith(e);
          }
        }
        #y(e) {
          switch (e) {
            case 1:
              return (e, t) =>
                e ? (t.elapsedTime > e.elapsedTime ? t : e) : t;
            case 2:
              return (e, t) =>
                e ? (t.elapsedTime < e.elapsedTime ? t : e) : t;
            default:
              return (e, t) =>
                e ? (t.workingSetSize > e.workingSetSize ? t : e) : t;
          }
        }
        async #f(e, t, s, i, n) {
          const r = (await this.#g.getRunningProcesses(s))
            .filter(e)
            .reduce(t, null);
          return null === r
            ? null
            : r.elapsedTime >= i
            ? r
            : n
            ? (await (0, l.UC)(i - r.elapsedTime),
              await this.#f(e, t, s, i, !0))
            : null;
        }
        async #v(e, t, s, i) {
          return await new Promise(async (n, r) => {
            let a;
            const o = new l.K4([
              (0, l.rk)(() => {
                a?.dispose(), o.dispose(), r(new u("App launch timed out."));
              }, s),
              (0, l.tI)(async () => {
                const e = await t();
                e &&
                  !o.disposed &&
                  (o.dispose(), n({ process: e, cleanup: a }));
              }, 2500),
              (0, l.JD)(() => c.cancel()),
            ]);
            i &&
              o.push(
                i.onCancel(() => {
                  a?.dispose(),
                    o.dispose(),
                    r(new l.ie("App launch canceled."));
                })
              );
            const c = new l.wK();
            try {
              a = await e(c);
            } catch (e) {
              o.disposed || (o.dispose(), r(e));
            }
          });
        }
      };
      g = (0, n.gn)(
        [(0, r.autoinject)(), (0, n.w6)("design:paramtypes", [c.aI, a.w])],
        g
      );
    },
    "cheats/trainer/index": (e, t, s) => {
      s.r(t), s.d(t, { configure: () => a });
      var i = s(6358),
        n = s(82501),
        r = s(76193);
      function a(e, t) {
        e.container.registerSingleton(r.N, function () {
          return new r.N(t.binaryDir, e.container.get(i.aI));
        }),
          e.container.registerSingleton(n.f, function () {
            return new n.f(t.binaryDir);
          });
      }
    },
    82501: (e, t, s) => {
      s.d(t, { f: () => n });
      var i = s(32081);
      class n {
        #L;
        constructor(e) {
          this.#L = {
            x64: `${e}\\TrainerHost_x64.exe`,
            ia32: `${e}\\TrainerHost_x86.exe`,
          };
        }
        async launch(e) {
          return new r((0, i.spawn)(this.#L[e], { detached: !1 }));
        }
      }
      class r {
        #I;
        constructor(e) {
          this.#I = e;
        }
        get processId() {
          return this.#I.pid;
        }
        dispose() {
          if (this.#I) {
            try {
              this.#I.kill();
            } catch {}
            this.#I = null;
          }
        }
      }
    },
    76193: (e, t, s) => {
      s.d(t, { N: () => c });
      var i = s(56901),
        n = s(6358),
        r = s(66302),
        a = s(51722),
        o = s(57638);
      class c {
        #g;
        #L;
        constructor(e, t) {
          (this.#g = t),
            (this.#L = {
              x64: {
                trainerLib: `${e}\\TrainerLib_x64.dll`,
                trainerLibDecoy: `${e}\\stub\\TrainerLib_x64.dll`,
                ceLib: `${e}\\CELib_x64.dll`,
              },
              ia32: {
                trainerLib: `${e}\\TrainerLib_x86.dll`,
                trainerLibDecoy: `${e}\\stub\\TrainerLib_x86.dll`,
                ceLib: `${e}\\CELib_x86.dll`,
              },
            });
        }
        async getMissingFiles(e) {
          const t = Object.values(this.#L[e]),
            s = await Promise.all(
              t.map((e) =>
                i.promises
                  .stat(e)
                  .then((e) => e.isFile())
                  .catch(() => !1)
              )
            );
          return t.filter((e, t) => !s[t]);
        }
        async inject(e) {
          const t = this.#L[e.arch];
          await this.#E([e.trainerDll, t.trainerLib, t.ceLib]);
          const s = (0, a.yE)(e.flags, 8)
            ? await this.#A(e.trainerDll, t.trainerLibDecoy)
            : null;
          if (
            (s && (await this.#E([s, t.trainerLibDecoy])),
            await this.#g.waitForInputIdle(e.targetProcessId, 1e4),
            (0, a.yE)(e.flags, 1) &&
              (await this.#g.suspendProcess(e.targetProcessId)) < 0)
          )
            throw new Error("Failed to suspend process.");
          try {
            s &&
              (await Promise.all([
                this.#g.injectDll(e.hostProcessId, t.trainerLibDecoy, 0, 5e3),
                this.#g.injectDll(e.hostProcessId, s, 0, 5e3),
              ])),
              await this.#g.injectDll(
                e.hostProcessId,
                t.trainerLib,
                (0, a.yE)(e.flags, 4) ? 7340032 : 0,
                5e3
              );
          } catch (t) {
            throw (
              ((0, a.yE)(e.flags, 1) &&
                (await this.#g.resumeProcess(e.targetProcessId).catch(r.K)),
              t)
            );
          }
          return {
            module: t.trainerLib,
            export: "Run",
            proxy: (0, a.yE)(e.flags, 4) ? "ExitProcess" : null,
            suspended: (0, a.yE)(e.flags, 1),
          };
        }
        async resumeProcess(e) {
          return (await this.#g.resumeProcess(e)) >= 0;
        }
        async #E(e) {
          try {
            await Promise.all(
              e.map((e) =>
                this.#g.grantFilePermissions(
                  e,
                  [n._l.everyone, n._l.appContainer],
                  n.Hg.Read | n.Hg.Execute
                )
              )
            );
          } catch {}
        }
        async #A(e, t) {
          const s = `${(0, o.XX)(e)}\\stub`,
            n = `${s}\\${(0, o.EZ)(e)}`;
          return (
            (await i.promises
              .stat(n)
              .then((e) => e.isFile())
              .catch(() => !1)) ||
              ((await i.promises
                .stat(s)
                .then((e) => e.isDirectory())
                .catch(() => !1)) || (await i.promises.mkdir(s)),
              await i.promises.copyFile(t, n)),
            n
          );
        }
      }
    },
    79669: (e, t, s) => {
      s.d(t, { $2: () => l, in: () => u });
      var i = s(70655),
        n = s(41808),
        r = s("aurelia-framework"),
        a = s(98099),
        o = s(6358),
        c = s(11912);
      const h = (0, a.jl)("trainer-ipc");
      let l = class {
        #g;
        constructor(e) {
          this.#g = e;
        }
        async open(e) {
          const t = `\\\\.\\pipe\\WeMod\\Trainer_${Date.now()}_`,
            s = new c.K4(),
            [i, n, r] = await Promise.all([
              this.#T(`${t}In`, s),
              this.#T(`${t}Out`, s),
              e.logPipe ? Promise.resolve(null) : this.#T(`${t}Log`, s),
            ]).catch((e) => {
              throw (s.dispose(), e);
            });
          return await (0, c.UC)(500), new d(i, n, r ?? e.logPipe);
        }
        #T(e, t) {
          return new Promise((s, i) => {
            const r = (0, n.createServer)();
            t.push(
              (0, c.JD)(() => {
                a.dispose(), r.close();
              })
            );
            const a = new c.K4([
              (0, c.HB)(r, "error", (e) => {
                a.dispose(), i(e);
              }),
              (0, c.HB)(r, "listening", async () => {
                a.dispose();
                try {
                  await this.#g.grantFilePermissions(
                    e,
                    [o._l.everyone, o._l.appContainer],
                    o.Hg.Read | o.Hg.Write
                  ),
                    s(r);
                } catch (e) {
                  i(e);
                }
              }),
            ]);
            r.listen(e);
          });
        }
      };
      var u;
      (l = (0, i.gn)(
        [(0, r.autoinject)(), (0, i.w6)("design:paramtypes", [o.aI])],
        l
      )),
        (function (e) {
          (e[(e.Verbose = 0)] = "Verbose"),
            (e[(e.Info = 1)] = "Info"),
            (e[(e.Warning = 2)] = "Warning"),
            (e[(e.Error = 3)] = "Error");
        })(u || (u = {}));
      class d {
        #x;
        #C;
        #D;
        #B;
        #k;
        constructor(e, t, s) {
          if (
            ((this.#x = new c.yM()),
            (this.#C = new c.K4()),
            (this.#B = new Map()),
            (this.#k = 1),
            (this.messagePipe = t.address()),
            this.#C.push(
              (0, c.JD)(() => {
                e.close(), t.close(), "string" != typeof s && s.close();
              })
            ),
            "string" == typeof s)
          )
            this.logPipe = s;
          else {
            this.logPipe = s.address();
            const e = (0, c.HB)(s, "connection", (t) => {
              e.dispose(),
                this.#C.push((0, c.JD)(() => t.destroy())),
                this.#C.push((0, c.HB)(t, "data", this.#F.bind(this)));
            });
            this.#C.push(e);
          }
          const i = (0, c.HB)(t, "connection", (t) => {
            i.dispose(),
              (this.#D = t),
              this.#C.push(
                (0, c.JD)(() => {
                  (this.#D = null), t.destroy();
                })
              ),
              this.#C.push((0, c.HB)(t, "close", () => this.dispose())),
              this.#C.push(
                (0, c.HB)(t, "error", (e) => {
                  "EPIPE" === e.code && this.dispose();
                })
              ),
              t.write(e.address(), "utf16le", (e) => e && this.dispose());
          });
          this.#C.push(i);
          const n = (0, c.HB)(e, "connection", (e) => {
            n.dispose(),
              this.#C.push((0, c.JD)(() => e.destroy())),
              this.#C.push((0, c.HB)(e, "data", this.#M.bind(this))),
              this.#x.publish("connect");
          });
          this.#C.push(i);
        }
        onConnect(e) {
          return this.#x.subscribeOnce("connect", e);
        }
        onReady(e) {
          return this.#x.subscribeOnce("ready", e);
        }
        onDisconnect(e) {
          return this.#x.subscribeOnce("disconnect", e);
        }
        onLogMessage(e) {
          return this.#x.subscribe("log", e);
        }
        onValue(e) {
          return this.#x.subscribe("value", e);
        }
        dispose() {
          if (!this.#C) return;
          const e = this.#C;
          (this.#C = null),
            e.dispose(),
            this.#B.clear(),
            this.#x.publish("disconnect"),
            this.#x.dispose(),
            (this.#x = null);
        }
        setValue(e, t) {
          const s = this.#k++,
            i = new Promise((e, t) => this.#B.set(s, [e, t])),
            n = Buffer.alloc(56);
          return (
            n.writeUInt32LE(2, 0),
            n.writeUInt32LE(s, 8),
            n.write(e || "", 16, 32, "ascii"),
            n.writeDoubleLE(t, 48),
            this.#D.write(n, (e) => {
              if (e) {
                const t = this.#B.get(s);
                t && (this.#B.delete(s), t[1](e));
              }
            }),
            i
          );
        }
        #F(e) {
          if (e.length < 16 || !this.#C) return;
          let t = 0;
          for (; t + 4 < e.length; ) {
            const s = e.readUInt32LE(t);
            t += 8;
            const i = e.readUInt32LE(t);
            t += 8;
            const n = e.toString("utf16le", t, t + i);
            t += i;
            const r = { time: Date.now(), level: s, message: n };
            this.#x.publish("log", r);
          }
        }
        #M(e) {
          if (!this.#C) return;
          let t = 0;
          for (; t + 8 <= e.length; ) {
            const s = e.readUInt32LE(t);
            switch (((t += 8), s)) {
              case 0:
                break;
              case 1:
                this.#x.publish("ready");
                break;
              case 2:
                {
                  t += 8;
                  let s = e.toString("ascii", t, t + 32);
                  (s = s.substring(0, s.indexOf("\0"))), (t += 32);
                  const i = e.readDoubleLE(t);
                  (t += 8), this.#x.publish("value", { name: s, value: i });
                }
                break;
              case 3:
                {
                  const s = e.readUInt32LE(t);
                  t += 8;
                  const i = e.readUInt32LE(t);
                  t += 8;
                  const n = this.#B.get(s);
                  n && (this.#B.delete(s), n[0](i));
                }
                break;
              default:
                return void h.error(`Unknown message type ${s}.`);
            }
          }
        }
      }
    },
    69949: (e, t, s) => {
      s.d(t, { w6: () => m, z9: () => g, hc: () => w });
      var i = s(70655),
        n = s("aurelia-framework"),
        r = s(45437),
        a = s(18739),
        o = s(62546),
        c = s(11912),
        h = s(48162),
        l = s(38650),
        u = s(99078),
        d = s(10443);
      let p = class {
        #j;
        #$;
        constructor(e, t) {
          (this.#j = e), (this.#$ = t);
        }
        async fetch(e, t, s) {
          switch (e) {
            case "trainerlib":
              return await this.#R(t, s);
            case "trainerlib-local":
              return await this.#V(t);
            default:
              return !1;
          }
        }
        #R(e, t) {
          return this.#j.fetchBinary(
            { trainerId: e.trainerId, url: e.binaryUrl, hash: e.binaryHash },
            t
          );
        }
        async #V(e) {
          const t = await this.#$.getTrainerBinaryPath(e.repoPath);
          if (!t) throw new Error("Local binary not found.");
          return t;
        }
      };
      p = (0, i.gn)(
        [(0, n.autoinject)(), (0, i.w6)("design:paramtypes", [d.q, u.I])],
        p
      );
      class g {
        constructor(e, t, s = null, i) {
          (this.info = e),
            (this.app = t),
            (this.gameVersion = s),
            (this.trigger = i);
        }
      }
      class m extends Error {
        constructor(e) {
          super(e), Object.setPrototypeOf(this, m.prototype);
        }
      }
      let w = class {
        #H;
        #S;
        #O;
        #s;
        #x;
        #U;
        constructor(e, t, s, i) {
          (this.trainer = null),
            (this.#x = new c.yM()),
            (this.#H = e),
            (this.#S = t),
            (this.#O = s),
            (this.#s = i);
        }
        async endTrainer() {
          if (this.trainer) {
            const e = new Promise((e) => this.trainer.onEnded(() => e()));
            this.#U ? this.#U.cancel() : this.trainer.dispose(), await e;
          }
        }
        onNewTrainer(e) {
          return this.#x.subscribe("trainer", e);
        }
        onTrainerActivated(e) {
          return this.#x.subscribe("activated", e);
        }
        onTrainerEnded(e) {
          return this.#x.subscribe("ended", e);
        }
        async launch(e) {
          if (this.trainer)
            throw new m(
              "Attempted to start a trainer when one is already running."
            );
          const t = e.info,
            s = t.blueprint,
            i = this.#H.make({
              getProcess: async (t) => {
                const n = await this.#S.launch(
                    e.app,
                    s.config?.launch,
                    s.config?.target,
                    t
                  ),
                  r = () => n.cleanup?.dispose();
                return (
                  i.isEnding() ? r() : (i.onActivated(r), i.onEnded(r)),
                  n.process
                );
              },
              getTrainerBinary: (e) => this.#O.fetch(t.loader, t.loaderArgs, e),
              connectTimeout: 15e3,
              trainerArgs: {
                gameVersion: e.gameVersion,
                variables: Array.from(new Set(s.cheats.map((e) => e.target))),
              },
              useExternalLogger: await this.#_(),
              flags: t.blueprint.config?.activate?.flags ?? 0,
            });
          return (
            i.addMetadata(e),
            i.onActivated(() => {
              (this.#U = null), this.#x.publish("activated", i);
            }),
            i.onEnded(() => {
              (this.trainer = null), this.#x.publish("ended", i);
            }),
            (this.trainer = i),
            (this.#U = new c.wK()),
            this.#x.publish("trainer", i),
            await i.launch(this.#U),
            i
          );
        }
        #_() {
          return this.#s.state
            .pipe((0, a.P)(), (0, o.j)("settings", "trainerLibExternalConsole"))
            .toPromise();
        }
        dispose() {
          this.trainer?.dispose(),
            (this.trainer = null),
            this.#x?.dispose(),
            (this.#x = null);
        }
      };
      w = (0, i.gn)(
        [
          (0, n.autoinject)(),
          (0, i.w6)("design:paramtypes", [l.eo, h.hM, p, r.yh]),
        ],
        w
      );
    },
    38650: (e, t, s) => {
      s.d(t, { eo: () => b, YN: () => y, $c: () => w });
      var i = s(70655),
        n = s("aurelia-framework"),
        r = s(94486),
        a = s(66302),
        o = s(51722),
        c = s(11912),
        h = s(20259),
        l = s(48162),
        u = s(82501),
        d = s(76193),
        p = s(79669),
        g = s(6358);
      let m = class {
        #g;
        constructor(e) {
          this.#g = e;
        }
        run(e) {
          return this.#g.createRemoteThread(
            e.hostProcessId,
            e.call.module,
            e.call.export,
            this.#W(e),
            e.call.proxy
          );
        }
        #W(e) {
          const t = Buffer.alloc(1552 + 32 * e.variables.length);
          let s = 0;
          return (
            t.write(e.logPipe, 0, 512, "utf16le"),
            (s += 512),
            t.write(e.messagePipe, s, 512, "utf16le"),
            (s += 512),
            t.write(e.module, s, 512, "utf16le"),
            (s += 512),
            t.writeUInt32LE(e.targetProcessId, s),
            (s += 4),
            t.writeUInt32LE(e.gameVersion || 0, s),
            (s += 4),
            t.writeUInt32LE(e.variables.length, s),
            (s += 4),
            e.variables.forEach((e) => {
              t.write(e, s, 32, "ascii"), (s += 32);
            }),
            t
          );
        }
      };
      var w, y;
      (m = (0, i.gn)(
        [(0, n.autoinject)(), (0, i.w6)("design:paramtypes", [g.aI])],
        m
      )),
        (function (e) {
          (e[(e.AwaitingLaunch = 0)] = "AwaitingLaunch"),
            (e[(e.AcquiringBinary = 1)] = "AcquiringBinary"),
            (e[(e.EnsuringBinaryAccess = 2)] = "EnsuringBinaryAccess"),
            (e[(e.CheckingInternalBinaries = 3)] = "CheckingInternalBinaries"),
            (e[(e.FindingProcess = 4)] = "FindingProcess"),
            (e[(e.ValidatingProcess = 5)] = "ValidatingProcess"),
            (e[(e.CreatingTrainerHost = 6)] = "CreatingTrainerHost"),
            (e[(e.Injecting = 7)] = "Injecting"),
            (e[(e.InitializingIpc = 8)] = "InitializingIpc"),
            (e[(e.Executing = 9)] = "Executing"),
            (e[(e.Connecting = 10)] = "Connecting"),
            (e[(e.Activating = 11)] = "Activating"),
            (e[(e.Active = 12)] = "Active"),
            (e[(e.Ended = 13)] = "Ended");
        })(w || (w = {})),
        (function (e) {
          (e[(e.Success = 0)] = "Success"),
            (e[(e.Canceled = 1)] = "Canceled"),
            (e[(e.TimedOut = 2)] = "TimedOut"),
            (e[(e.ElevationDenied = 3)] = "ElevationDenied"),
            (e[(e.Incompatible = 4)] = "Incompatible"),
            (e[(e.GameAlreadyRunning = 5)] = "GameAlreadyRunning"),
            (e[(e.GameNotRunning = 6)] = "GameNotRunning"),
            (e[(e.Error = 7)] = "Error");
        })(y || (y = {}));
      class f extends Error {
        constructor() {
          super("Supplied trainer is incompatible with this app version."),
            Object.setPrototypeOf(this, f.prototype);
        }
      }
      function v(e) {
        return !0 === e && (e = 1), !1 === e && (e = 0), e;
      }
      let b = class {
        #K;
        #N;
        #G;
        #z;
        constructor(e, t, s, i) {
          (this.#K = e), (this.#N = t), (this.#G = s), (this.#z = i);
        }
        make(e) {
          return new P(e, this.#K, this.#N, this.#G, this.#z);
        }
      };
      b = (0, i.gn)(
        [
          (0, n.autoinject)(),
          (0, i.w6)("design:paramtypes", [u.f, d.N, p.$2, m]),
        ],
        b
      );
      class P {
        #J;
        #K;
        #N;
        #G;
        #z;
        #q;
        #X;
        #Q;
        #Y;
        #Z;
        #ee;
        #te;
        #se;
        constructor(e, t, s, i, n) {
          (this.log = []),
            (this.values = new Map()),
            (this.timings = new Map()),
            (this.dllPath = null),
            (this.process = null),
            (this.finalState = null),
            (this.launchResult = null),
            (this.#X = w.AwaitingLaunch),
            (this.#Q = new Map()),
            (this.#Y = new c.yM()),
            (this.#ee = null),
            (this.#te = null),
            (this.#se = !1),
            (this.#J = e),
            (this.#K = t),
            (this.#N = s),
            (this.#G = i),
            (this.#z = n);
        }
        get launchDuration() {
          return this.#q
            ? this.wasEverActive()
              ? this.timings.get(w.Active)
              : Date.now() - this.#q
            : null;
        }
        get activeDuration() {
          return this.wasEverActive()
            ? this.totalDuration - this.launchDuration
            : null;
        }
        get totalDuration() {
          return this.#q
            ? this.hasEnded()
              ? this.timings.get(w.Ended)
              : Date.now() - this.#q
            : null;
        }
        isLoading() {
          return !this.isActive() && !this.hasEnded();
        }
        isActive() {
          return this.#X === w.Active;
        }
        wasEverActive() {
          return this.#se;
        }
        hasEnded() {
          return this.#X === w.Ended;
        }
        isEnding() {
          return !!this.finalState;
        }
        addMetadata(e) {
          this.#Q.set(Object.getPrototypeOf(e).constructor, e);
        }
        getMetadata(e) {
          return this.#Q.get(e);
        }
        onStateChanged(e) {
          return this.#Y.subscribe("state", e);
        }
        onActivated(e) {
          return this.#Y.subscribeOnce("activated", e);
        }
        onEnded(e) {
          return this.#Y.subscribeOnce("ended", e);
        }
        onValueSet(e) {
          return this.#Y.subscribe("value", e);
        }
        onValueSetError(e) {
          return this.#Y.subscribe("value-error", e);
        }
        onLogMessage(e) {
          return this.#Y.subscribe("log", e);
        }
        getValue(e) {
          return this.values.get(e);
        }
        #ie(e, t) {
          t = v(t);
          const s = this.values.get(e);
          t !== s &&
            (this.values.set(e, t),
            this.#Y?.publish("value", {
              name: e,
              value: t,
              oldValue: s,
              source: 0,
            }));
        }
        async setValue(e, t, s, i) {
          t = v(t);
          const n = this.values.get(e);
          if (!this.values.has(e))
            throw new Error(`Attempted to set unknown trainer variable '${e}'`);
          if (
            (this.values.set(e, t),
            this.#Y?.publish("value", {
              name: e,
              value: t,
              oldValue: n,
              source: s,
              cheatId: i,
            }),
            !this.#Z)
          )
            return !0;
          try {
            const s = await this.#Z.setValue(e, t);
            return (
              ((1 !== s || n || 1 !== t || 0 !== this.values.get(e)) &&
                2 !== s) ||
              (this.#Y?.publish("value-error", { name: e, cheatId: i }), !1)
            );
          } catch (e) {
            if (this.isEnding()) return !0;
            throw e;
          }
        }
        async launch(e) {
          try {
            return (this.#q = Date.now()), await this.#ne(e), !0;
          } catch (e) {
            return (
              (this.launchError = e),
              (this.launchResult = (function (e) {
                return e instanceof c.ie
                  ? y.Canceled
                  : e instanceof l.W5
                  ? y.TimedOut
                  : e instanceof r.F$
                  ? y.ElevationDenied
                  : e instanceof f
                  ? y.Incompatible
                  : e instanceof l.or
                  ? y.GameAlreadyRunning
                  : e instanceof l.y0
                  ? y.GameNotRunning
                  : y.Error;
              })(e)),
              this.dispose(),
              !1
            );
          }
        }
        dispose() {
          if (this.#X !== w.Ended) {
            if (
              ((this.finalState = this.#X),
              this.#re(w.Ended),
              this.#Y.publish("ended"),
              this.#Y.dispose(),
              (this.#Y = null),
              this.#Z?.dispose(),
              (this.#Z = null),
              this.#ee)
            ) {
              const e = this.#ee;
              (this.#ee = null), setTimeout(() => e.dispose(), 1e4);
            }
            this.process = null;
          }
        }
        async #ne(e) {
          if (e.canceled) throw new c.ie();
          this.#re(w.AcquiringBinary);
          const t = await this.#ae(e);
          (this.dllPath = t), this.#re(w.EnsuringBinaryAccess);
          const s = await this.#oe(t);
          this.#re(w.CheckingInternalBinaries),
            await this.#ce(s),
            this.#re(w.FindingProcess),
            (this.process = await this.#J.getProcess(e)),
            this.#re(w.ValidatingProcess),
            this.#he(s, this.process),
            (0, o.yE)(this.#J.flags, 16)
              ? (this.#re(w.CreatingTrainerHost),
                (this.#ee = await this.#le(s)),
                (this.#te = this.#ee.processId))
              : (this.#te = this.process.id),
            this.#re(w.Injecting);
          const i = await this.#ue(t);
          this.#re(w.InitializingIpc);
          try {
            this.#Z = await this.#de();
          } catch (e) {
            throw (
              (i.suspended && this.#N.resumeProcess(this.process.id).catch(a.K),
              e)
            );
          }
          this.#re(w.Executing);
          try {
            await new Promise(async (s, n) => {
              const r = (0, c.rk)(() => {
                  a.dispose(), n(new l.W5("Trainer loading timed out."));
                }, this.#J.connectTimeout),
                a = e.onCancel(() => {
                  r.dispose(), n(new c.ie("Trainer launch canceled."));
                });
              this.#Z.onConnect(() => {
                r.dispose(),
                  this.#X === w.Executing && this.#re(w.Connecting),
                  this.#re(w.Activating);
              }),
                this.#Z.onReady(async () => {
                  if ((a.dispose(), i.suspended && (0, o.yE)(this.#J.flags, 2)))
                    try {
                      if (!(await this.#N.resumeProcess(this.process.id)))
                        throw new Error(
                          "Failed to resume process after setup."
                        );
                    } catch (e) {
                      return void n(e);
                    }
                  (this.launchResult = y.Success),
                    (this.#se = !0),
                    this.#re(w.Active),
                    this.#Y.publish("activated"),
                    s();
                }),
                this.#Z.onLogMessage((e) => this.#Y?.publish("log", e)),
                this.#Z.onValue((e) => this.#ie(e.name, e.value)),
                this.#Z.onDisconnect(() => {
                  this.isLoading()
                    ? (r.dispose(),
                      a.dispose(),
                      n(new Error("Trainer disconnected.")))
                    : this.dispose();
                }),
                this.#J.trainerArgs.variables.forEach((e) =>
                  this.values.set(e, void 0)
                );
              try {
                await this.#z.run({
                  hostProcessId: this.#te,
                  targetProcessId: this.process.id,
                  module: t,
                  gameVersion: this.#J.trainerArgs.gameVersion,
                  variables: this.#J.trainerArgs.variables,
                  messagePipe: this.#Z.messagePipe,
                  logPipe: this.#Z.logPipe,
                  call: i,
                }),
                  this.#X === w.Executing && this.#re(w.Connecting);
              } catch (e) {
                r.dispose(), a.dispose(), n(e);
              }
            });
          } catch (e) {
            throw (
              (i.suspended && this.#N.resumeProcess(this.process.id).catch(a.K),
              e)
            );
          }
        }
        async #ae(e) {
          const t = await this.#J.getTrainerBinary(e);
          if (!1 === t) throw new f();
          return t;
        }
        async #oe(e) {
          return (await h.QT.load(e)).ntHeaders.fileHeader.machine === h.J.AMD64
            ? "x64"
            : "ia32";
        }
        async #ce(e) {
          if ((await this.#N.getMissingFiles(e)).length > 0)
            throw new Error("Internal trainer DLLs are missing.");
        }
        #le(e) {
          return this.#K.launch(e);
        }
        #he(e, t) {
          if (("x64" === e && !t.x64) || ("ia32" === e && t.x64))
            throw new Error(
              "Trainer was not built for this process architecture."
            );
        }
        #de() {
          return this.#G.open({
            logPipe: this.#J.useExternalLogger
              ? "\\\\.\\pipe\\WeMod_TrainerLib_Debug"
              : null,
          });
        }
        #ue(e) {
          return this.#N.inject({
            hostProcessId: this.#te,
            targetProcessId: this.process.id,
            arch: this.process.x64 ? "x64" : "ia32",
            trainerDll: e,
            flags: this.#J.flags,
          });
        }
        #re(e) {
          if (e <= this.#X)
            throw new Error(`Cannot transition from state ${this.#X} to ${e}.`);
          (this.#X = e),
            this.timings.set(e, Date.now() - this.#q),
            this.#Y.publish("state", e);
        }
        get state() {
          return this.#X;
        }
      }
    },
  },
]);

"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [5821],
  {
    8022: (t, e, a) => {
      a.d(e, { G: () => l });
      var s = a(70655),
        i = a("aurelia-event-aggregator"),
        r = a("aurelia-framework"),
        o = a(69949),
        n = a(11912),
        h = a(26478);
      let l = class {
        #t;
        #e;
        #a;
        #s;
        #i;
        #r;
        constructor(t, e, a) {
          (this.#t = t), (this.#e = e), (this.#a = a);
        }
        attached(t) {
          this.#r = t;
          const e = this.#o.bind(this);
          this.#s = new n.K4([
            this.#t.onNewTrainer(e),
            this.#t.onTrainerEnded(e),
            this.#a.subscribe("router:navigation:success", e),
          ]);
        }
        #o() {
          if (!this.#t.trainer) return void this.#n();
          const t = this.#t.trainer.getMetadata(o.z9).info;
          this.#h() === t.id ? this.#n() : this.#l(this.#t.trainer, t);
        }
        #h() {
          return (("&" + document.location.hash.split("?", 2)[1]).match(
            /&trainerId=([^&]+)/
          ) ?? [])[1];
        }
        #n() {
          this.#i && (this.#e.remove(this.#i), (this.#i = null));
        }
        #l(t, e) {
          this.#i ||
            (this.#i = this.#e.toast({
              content: "active_trainer_toast.cheats_are_running",
              type: "ok",
              persist: !0,
              lock: !0,
              onremove: () => (this.#i = null),
              actions: [
                {
                  label: "active_trainer_toast.end",
                  onclick: () => {
                    t.isEnding() || t.dispose();
                  },
                },
                {
                  label: "active_trainer_toast.open",
                  onclick: () =>
                    this.#r.navigateToRoute("title", {
                      titleId: e.titleId,
                      gameId: e.gameId,
                      trainerId: e.id,
                    }),
                },
              ],
            }));
        }
        detached() {
          this.#s.dispose(), (this.#s = null), this.#n();
        }
      };
      l = (0, s.gn)(
        [(0, r.autoinject)(), (0, s.w6)("design:paramtypes", [o.hc, h.x, i.h])],
        l
      );
    },
    67824: (t, e, a) => {
      a.d(e, { J: () => c });
      var s = a(70655),
        i = a("aurelia-framework"),
        r = a(81110),
        o = a(66302),
        n = a(11912),
        h = a(26478),
        l = a(83467);
      let c = class {
        #e;
        #c;
        #d;
        #u;
        #p;
        #g;
        #m;
        #f;
        constructor(t, e, a) {
          (this.#e = t), (this.#c = e), (this.#d = a);
        }
        attached() {
          this.#w(this.#c.updateState),
            (this.#u = this.#c.onUpdateStateChanged((t) => this.#w(t)));
        }
        detached() {
          this.#y(), this.#v(), this.#u.dispose(), (this.#u = null);
        }
        #y() {
          this.#p && (this.#e.remove(this.#p), (this.#p = null)),
            this.#g && (this.#e.remove(this.#g), (this.#g = null));
        }
        #v() {
          this.#f && (this.#f.dispose(), (this.#f = null));
        }
        #b() {
          this.#v(),
            (this.#f = (0, n.rk)(() => {
              (this.#f = null), this.#w(this.#m);
            }, 216e5));
        }
        #w(t) {
          (this.#m = t),
            "applied" === t && (this.#v(), this.#T()),
            "apply-error" !== t || this.#f || this.#_();
        }
        #T() {
          this.#p ||
            (this.#y(),
            (this.#p = this.#e.toast({
              type: "ok",
              content: "app_update_toast.update_available",
              persist: !0,
              actions: [
                {
                  label: "app_update_toast.restart_now",
                  onclick: () =>
                    this.#c.restartForUpdate(this.#d.getCurrentInternalUri()),
                },
              ],
              onremove: () => {
                (this.#p = null), this.#b();
              },
            })));
        }
        #_() {
          if (this.#g) return;
          this.#y();
          let t = !1;
          this.#g = this.#e.toast({
            type: "alert",
            content: "app_update_toast.update_failed",
            persist: !0,
            actions: [
              {
                label: "app_update_toast.retry",
                onclick: () => {
                  (t = !0),
                    this.#e.remove(this.#g),
                    this.#c.checkForUpdate().catch(o.K);
                },
              },
            ],
            onremove: () => {
              (this.#g = null), t || "apply-error" !== this.#m || this.#b();
            },
          });
        }
      };
      c = (0, s.gn)(
        [(0, i.autoinject)(), (0, s.w6)("design:paramtypes", [h.x, r.f, l.W])],
        c
      );
    },
    4249: (t, e, a) => {
      a.d(e, { L: () => u });
      var s = a(70655),
        i = a("aurelia-framework"),
        r = a(23739),
        o = a("settings/settings-dialog"),
        n = a(94472),
        h = a(93082),
        l = a(51722),
        c = a(26478),
        d = a(85882);
      let u = class {
        #e;
        #S;
        #D;
        #R;
        #P;
        #C;
        #k;
        #A;
        constructor(t, e, a, s) {
          (this.#P = !0),
            (this.#A = !1),
            (this.#e = t),
            (this.#S = e),
            (this.#D = a),
            (this.#R = s);
        }
        attached() {
          this.accountChanged();
        }
        detached() {}
        accountChanged() {
          const t = this.#P;
          this.#P = !1;
          const e = this.#C;
          if (
            ((this.#C = this.account.email),
            !this.account.email || (0, l.yE)(this.account.flags, 4))
          )
            return void (this.#k && this.#e.remove(this.#k));
          if (this.#k) return void (e !== this.#C && this.#S.watchFlag(4, 30));
          const a = [
            {
              label: "verify_email_toast.send_again",
              onclick: () => this.#E(),
              primary: !0,
            },
            {
              label: "verify_email_toast.change_email",
              onclick: () => this.#D.open({ group: "account/profile" }),
            },
          ];
          (this.#k = this.#e.toast({
            content: "verify_email_toast.check_your_email",
            i18nParams: { email: this.account.email },
            type: "warning",
            persist: !0,
            lock: !0,
            onremove: () => (this.#k = null),
            actions: a,
          })),
            t && this.account.email ? this.#I() : this.#S.watchFlag(4, 30);
        }
        #I() {
          this.#k &&
            this.#k.actions.length < 3 &&
            this.#k.actions.push({
              label: "verify_email_toast.refresh",
              onclick: () => this.#o(),
            });
        }
        #o() {
          this.#S.watchFlag(4, 1, !0);
        }
        async #E() {
          if (!this.#A) {
            this.#A = !0;
            try {
              const t = await this.#R.sendAccountVerificationEmail();
              this.#e.toast({
                type: "ok",
                content: "verify_email_toast.verification_email_sent",
                i18nParams: { email: t.email },
              }),
                this.#S.watchFlag(4, 30);
            } catch (t) {
              t instanceof n.MS && 409 === t.status
                ? this.#o()
                : this.#e.toast({
                    content: "verify_email_toast.error_toast",
                    type: "alert",
                  });
            } finally {
              this.#A = !1;
            }
          }
        }
      };
      u = (0, s.gn)(
        [
          (0, h.b)({
            setup: "attached",
            teardown: "detached",
            selectors: { account: (0, h.g)("account") },
          }),
          (0, i.autoinject)(),
          (0, s.w6)("design:paramtypes", [
            c.x,
            d.B,
            o.SettingsDialogService,
            r.K,
          ]),
        ],
        u
      );
    },
    91978: (t, e, a) => {
      a.d(e, { $: () => c });
      var s = a(70655),
        i = a("aurelia-framework"),
        r = a(45437),
        o = a("dialogs/failed-payment-dialog"),
        n = a(93082),
        h = a(27170),
        l = a(26478);
      let c = class {
        #e;
        #U;
        #F;
        #N;
        constructor(t, e, a) {
          (this.#e = t), (this.#U = e), (this.#F = a);
        }
        subscriptionChanged() {
          return this.#o();
        }
        attached() {
          return this.#o();
        }
        detached() {}
        async #o() {
          if (!this.subscription?.pastDueInvoice)
            return (
              this.#O(),
              void (
                this.lastFailedPayment &&
                (await this.#U.dispatch(h.JC, "lastFailedPayment", null))
              )
            );
          const t = this.subscription.pastDueInvoice.date;
          (!this.lastFailedPayment ||
            this.lastFailedPayment.localeCompare(t) < 0) &&
            (await this.#U.dispatch(h.JC, "lastFailedPayment", t),
            this.#F.open()),
            this.#N || this.add();
        }
        #O() {
          this.#N && this.#e.remove(this.#N);
        }
        add() {
          this.#N ||
            (this.#N = this.#e.toast({
              content: "failed_payment_toast.update_payment",
              type: "alert",
              persist: !0,
              lock: !0,
              onremove: () => (this.#N = null),
              actions: [
                {
                  label: "failed_payment_toast.fix",
                  onclick: () => this.#F.open(),
                },
              ],
            }));
        }
      };
      c = (0, s.gn)(
        [
          (0, n.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              subscription: (0, n.g)("account", "subscription"),
              lastFailedPayment: (0, n.g)("timestamps", "lastFailedPayment"),
            },
          }),
          (0, i.autoinject)(),
          (0, s.w6)("design:paramtypes", [
            l.x,
            r.yh,
            o.FailedPaymentDialogService,
          ]),
        ],
        c
      );
    },
    21709: (t, e, a) => {
      a.d(e, { u: () => n });
      var s = a(70655),
        i = a("aurelia-framework"),
        r = a(36997),
        o = a(26478);
      let n = class {
        #e;
        #j;
        #x;
        #V;
        #k;
        constructor(t, e) {
          (this.#e = t), (this.#j = e);
        }
        attached() {
          (this.#V = this.#j.onStatusChanged((t) => this.#M(t))),
            this.#M(this.#j.status);
        }
        detached() {
          this.#V.dispose(), (this.#V = null);
        }
        #M(t) {
          !this.#k ||
            ("online" !== t && this.#x === t) ||
            (this.#e.remove(this.#k), (this.#k = null)),
            "online" === t ||
              this.#k ||
              (this.#k = this.#e.toast({
                type: "alert",
                lock: !1,
                persist: !0,
                content:
                  "maintenance" === t
                    ? "online_status.maintenance_toast"
                    : "online_status.offline_toast",
              })),
            (this.#x = t);
        }
      };
      n = (0, s.gn)(
        [(0, i.autoinject)(), (0, s.w6)("design:paramtypes", [o.x, r.Yz])],
        n
      );
    },
    86241: (t, e, a) => {
      a.d(e, { O: () => c });
      var s = a(70655),
        i = a("aurelia-framework"),
        r = a(45437),
        o = a("dialogs/overlay-education-dialog"),
        n = a(93082),
        h = a(27170),
        l = a(87632);
      let c = class {
        #L;
        #B;
        #U;
        constructor(t, e, a) {
          (this.#L = t), (this.#B = e), (this.#U = a);
        }
        attached() {}
        detached() {}
        async showDialog() {
          const t = Object.values(this.state.gameHistory).filter(
            (t) => !!t.lastPlayedAt
          );
          if (
            t.map((t) => t.playDuration || 0).reduce((t, e) => t + e, 0) <= 600
          )
            return !1;
          if (
            !this.state.flags.hasUsedOverlay &&
            (this.state.flags.hasUsedHotkeys ||
              this.state.flags.hasUsedInteractiveControls) &&
            t.length >= 3
          ) {
            let t = await this.#L.refreshFeatureStatus();
            const e = !!this.state.account.subscription,
              a =
                !e &&
                !this.state.flags.overlayEducationFreeTrialShownAfterTrainer,
              s =
                e &&
                !this.state.flags.overlayEducationInstallShownAfterTrainer &&
                ["not-installed", "game-bar-disabled"].includes(t),
              i =
                e &&
                !this.state.flags
                  .overlayEducationPostInstallShownAfterTrainer &&
                "installed" === t;
            if (a)
              return (
                await this.#B.open(),
                this.#U.dispatch(
                  h.V0,
                  "overlayEducationFreeTrialShownAfterTrainer",
                  !0
                ),
                !0
              );
            if (s)
              return (
                await this.#B.open(),
                this.#U.dispatch(
                  h.V0,
                  "overlayEducationInstallShownAfterTrainer",
                  !0
                ),
                (t = await this.#L.refreshFeatureStatus()),
                "installed" === t &&
                  this.#U.dispatch(
                    h.V0,
                    "overlayEducationPostInstallShownAfterTrainer",
                    !0
                  ),
                !0
              );
            if (i)
              return (
                await this.#B.open(),
                this.#U.dispatch(
                  h.V0,
                  "overlayEducationPostInstallShownAfterTrainer",
                  !0
                ),
                !0
              );
          }
          return !1;
        }
      };
      c = (0, s.gn)(
        [
          (0, n.b)({ setup: "attached", teardown: "detached" }),
          (0, i.autoinject)(),
          (0, s.w6)("design:paramtypes", [
            l.F0,
            o.OverlayEducationDialogService,
            r.yh,
          ]),
        ],
        c
      );
    },
    80538: (t, e, a) => {
      a.d(e, { y: () => N });
      var s,
        i,
        r = a(70655),
        o = a("aurelia-framework"),
        n = a(45437),
        h = a(29001),
        l = a(23739),
        c = a(82826),
        d = a(16943),
        u = a("cheats/resources/elements/feedback-dialog"),
        p = a("cheats/resources/elements/play-next-game-dialog"),
        g = a("cheats/resources/elements/save-cheats-promo-dialog"),
        m = a(20151),
        f = a(38650),
        w = a(79669),
        y = a(69949),
        v = a("dialogs/app-rating-dialog"),
        b = a(62522),
        T = a(64371),
        _ = a(81110),
        S = a(6358),
        D = a(36997),
        R = a(94692),
        P = a(15524),
        C = a("shared/dialogs/basic-dialog"),
        k = a(93082),
        A = a(66302),
        E = a(27170),
        I = a(57638),
        U = a(34535),
        F = a(83202);
      !(function (t) {
        (t[(t.Continue = 0)] = "Continue"),
          (t[(t.Return = 1)] = "Return"),
          (t[(t.Retry = 2)] = "Retry"),
          (t[(t.ReportProblem = 3)] = "ReportProblem");
      })(s || (s = {})),
        (function (t) {
          (t[(t.NotShown = 0)] = "NotShown"),
            (t[(t.Canceled = 1)] = "Canceled"),
            (t[(t.Collected = 2)] = "Collected");
        })(i || (i = {}));
      let N = class {
        #c;
        #W;
        #R;
        #t;
        #$;
        #z;
        #G;
        #J;
        #K;
        #j;
        #U;
        #Y;
        #Z;
        #H;
        #q;
        #X;
        #Q;
        #V;
        constructor(t, e, a, s, i, r, o, n, h, l, c, d, u, p, g, m, f) {
          (this.#c = t),
            (this.#W = e),
            (this.#R = a),
            (this.#t = s),
            (this.#$ = i),
            (this.#z = r),
            (this.#G = o),
            (this.#J = n),
            (this.#K = h),
            (this.#j = l),
            (this.#U = c),
            (this.#Y = d),
            (this.#Z = u),
            (this.#H = p),
            (this.#q = g),
            (this.#X = m),
            (this.#Q = f);
        }
        attached() {
          this.#V = this.#t.onTrainerEnded((t) => this.#tt(t));
        }
        detached() {
          this.#V.dispose(), (this.#V = null);
        }
        async #tt(t) {
          const e = await this.#et(t),
            a = t.getMetadata(y.z9),
            r = a.info;
          if ("remote" !== a.trigger && e !== s.Return)
            if (e !== s.Retry) {
              if ("online" === this.#j.status)
                if (e !== s.ReportProblem) {
                  if (t.values.size > 0) {
                    const e = t.getMetadata(m.p)?.getUsedCheatTargets().length,
                      a = this.#Z.trainerSupportsActivateOnLoad(r.blueprint),
                      s = !this.state.account.subscription,
                      i = this.state.flags.saveCheatsPromoShownAfterTrainer;
                    e &&
                      a &&
                      s &&
                      !i &&
                      (await this.#Y.open(),
                      this.#U.dispatch(
                        E.V0,
                        "saveCheatsPromoShownAfterTrainer",
                        !0
                      ));
                  }
                  if (!(await this.#H.hasOpenDialog())) {
                    if ((await this.#at(t)) === i.NotShown) {
                      if (await this.#H.hasOpenDialog()) return;
                      Object.values(this.state.gameHistory)
                        .filter((t) => !!t.lastPlayedAt)
                        .map((t) => t.playDuration || 0)
                        .reduce((t, e) => t + e, 0) > 600 &&
                        (this.state.flags.choosePlanShownAfterTrainer ||
                        this.state.account.subscription
                          ? this.state.flags.appRatingShownAfterTrainer
                            ? await this.#K.openPostTrainer()
                            : (await this.#G.open(null, !1),
                              this.#U.dispatch(
                                E.V0,
                                "appRatingShownAfterTrainer",
                                !0
                              ))
                          : (await this.#J.open({
                              trigger: "auto_after_trainer",
                              nonInteraction: !0,
                            }),
                            this.#U.dispatch(
                              E.V0,
                              "choosePlanShownAfterTrainer",
                              !0
                            )));
                    }
                    return !(await this.#H.hasOpenDialog()) &&
                      !this.state.flags.playNextGameShownAfterTrainer &&
                      !this.state.account.subscription &&
                      (0, h.Z)(
                        new Date(this.state.account.joinedAt),
                        Date.now()
                      ) < 604800
                      ? (this.#U.dispatch(
                          E.V0,
                          "playNextGameShownAfterTrainer",
                          !0
                        ),
                        void (await this.#Q.open()))
                      : void 0;
                  }
                } else await this.#at(t, !1);
            } else this.#t.launch(t.getMetadata(y.z9));
        }
        async #et(t) {
          if (t.launchResult === f.YN.Success) return s.Continue;
          if (t.launchResult === f.YN.Canceled) return s.Return;
          if (t.launchResult === f.YN.ElevationDenied)
            return (
              await this.#$.ok("trainer_launcher.elevation_denied"), s.Return
            );
          if (t.launchResult === f.YN.Incompatible)
            return (
              await this.#$.ok("trainer_launcher.newer_version_required"),
              s.Return
            );
          if (t.launchResult === f.YN.GameAlreadyRunning)
            return (
              await this.#$.ok("trainer_launcher.game_already_running"),
              s.Return
            );
          if (t.launchResult === f.YN.GameNotRunning)
            return (
              this.#$
                .open({
                  message: "trainer_launcher.game_not_running",
                  options: ["trainer_launcher.launch_outside_wemod"],
                })
                .whenClosed((e) => {
                  if (!e.wasCancelled) {
                    const e = t.getMetadata(y.z9);
                    this.#X.launch(
                      e.app,
                      e.info.gameId,
                      "game_not_running_dialog"
                    );
                  }
                }),
              s.Return
            );
          const e = t.finalState;
          if (e === f.$c.AcquiringBinary)
            return (
              "trainerlib" === t.getMetadata(y.z9).info.loader
                ? await this.#$.help(
                    "trainer_launcher.cannot_download_cheats",
                    "https://wemod.gg/support-downloading-mods"
                  )
                : await this.#$.ok("trainer_launcher.cannot_find_dll"),
              s.Return
            );
          if (e === f.$c.EnsuringBinaryAccess) {
            if (await this.#q.open()) {
              try {
                if (await this.#W.addAvExclusion((0, I.XX)(t.dllPath)))
                  return s.Retry;
              } catch {}
              await this.#$.ok("auto_fix_av_failed");
            }
            return s.Return;
          }
          if (
            e === f.$c.CheckingInternalBinaries ||
            e === f.$c.CreatingTrainerHost
          )
            return (
              "trainer_launcher.reinstall_now" ===
                (await this.#$.show({
                  message: "trainer_launcher.files_missing",
                  options: [
                    "trainer_launcher.ok",
                    "trainer_launcher.reinstall_now",
                  ],
                })) &&
                (window.open("website://download"), await this.#c.quit()),
              s.Return
            );
          if (e === f.$c.FindingProcess) {
            if (t.launchResult === f.YN.TimedOut) {
              if (
                "trainer_launcher.retry" ===
                (await this.#$.show({
                  message: "trainer_launcher.trouble_starting_or_finding",
                  options: ["trainer_launcher.ok", "trainer_launcher.retry"],
                }))
              )
                return s.Retry;
            } else
              await this.#$.help(
                "trainer_launcher.trouble_starting_or_finding",
                "https://wemod.gg/support-launching-game"
              );
            return s.Return;
          }
          if (e === f.$c.ValidatingProcess)
            return (
              await this.#$.ok(
                t.process.x64
                  ? "trainer_launcher.x86_expected"
                  : "trainer_launcher.x64_expected"
              ),
              s.Return
            );
          let a;
          if (
            (e === f.$c.Injecting &&
              (a = "trainer_launcher.trouble_loading_cheats"),
            e === f.$c.InitializingIpc &&
              (a = "trainer_launcher.preparation_failed"),
            (e !== f.$c.Executing && e !== f.$c.Connecting) ||
              (a = "trainer_launcher.trouble_running_cheats"),
            e === f.$c.Activating &&
              (a = t.log.some((t) => t.level === w.in.Error)
                ? "trainer_launcher.activation_problem"
                : "trainer_launcher.activation_prevented"),
            !a)
          )
            throw new Error(`Unknown trainer state ${e}.`);
          return "trainer_launcher.report_problem" ===
            (await this.#$.help(
              a,
              "https://wemod.gg/support-loading-mods",
              "online" === this.#j.status
                ? ["trainer_launcher.report_problem"]
                : []
            ))
            ? s.ReportProblem
            : s.Return;
        }
        async #at(t, e) {
          const a = t.getMetadata(m.p);
          if (!a) return i.NotShown;
          const s = a.metadata,
            r = s.info,
            o = a
              .getUsedCheatTargets()
              .flatMap((t) => r.blueprint.cheats.filter((e) => e.target === t))
              .map((t) => t.uuid),
            n = await this.#z.collectFeedback(
              this.state.catalog.titles[r.titleId].name,
              r,
              new P.h(s.app.platform, s.app.sku).toString(),
              s.gameVersion,
              o,
              e,
              "boolean" == typeof e
            );
          if (!n.shown) return i.NotShown;
          if (n.reportType !== R.Xe.Success && n.reportType !== R.Xe.Failure)
            return i.Canceled;
          const h = await a.compile(n.reportType, n.report);
          return this.#R.submitTrainerFeedback(h).catch(A.K), i.Collected;
        }
      };
      N = (0, r.gn)(
        [
          (0, k.b)({ setup: "attached", teardown: "detached" }),
          (0, o.autoinject)(),
          (0, r.w6)("design:paramtypes", [
            _.f,
            S.aI,
            l.K,
            y.hc,
            C.BasicDialogService,
            u.FeedbackDialogService,
            v.AppRatingDialogService,
            b.x,
            U.X,
            D.Yz,
            n.yh,
            g.SaveCheatsPromoDialogService,
            F.b,
            c.x,
            T.c,
            d.W,
            p.PlayNextGameDialogService,
          ]),
        ],
        N
      );
    },
    68377: (t, e, a) => {
      a.d(e, { G: () => d });
      var s = a(70655),
        i = a("aurelia-event-aggregator"),
        r = a("aurelia-framework"),
        o = a(45437),
        n = a(69157),
        h = a(62522),
        l = a(93082),
        c = a(27170);
      let d = class {
        #$;
        #U;
        #st;
        #it;
        #rt;
        constructor(t, e, a) {
          (this.#$ = t), (this.#U = e), (this.#st = a);
        }
        attached() {
          this.subscriptionChanged() || this.#ot(),
            (this.#rt = this.#st.subscribe("open-pro-dialog", (t) => {
              this.#$.open(t);
            }));
        }
        detached() {
          this.#rt.dispose();
        }
        #nt() {
          this.#it && (clearTimeout(this.#it), (this.#it = null));
        }
        async subscriptionChanged() {
          return (
            this.subscription &&
              this.timestamps.freeUserSince &&
              (await this.#U.dispatch(c.JC, "freeUserSince", null),
              await this.#U.dispatch(c.JC, "lastProPopup", null),
              this.#nt()),
            !this.subscription &&
              !this.timestamps.freeUserSince &&
              (await this.#U.dispatch(c.JC, "freeUserSince"),
              await this.#U.dispatch(c.JC, "lastProPopup", null),
              this.#nt(),
              this.#ot(),
              !0)
          );
        }
        async #ht() {
          await this.#U.dispatch(c.JC, "lastProPopup"),
            await this.#$.open({
              trigger: "auto_three_day_ten_day",
              nonInteraction: !0,
            });
        }
        #ot() {
          if (this.subscription) return;
          this.#nt();
          const t = (0, n.Z)(
              new Date(this.timestamps.freeUserSince),
              Date.now()
            ),
            e = (0, n.Z)(
              new Date(
                this.timestamps.lastProPopup || this.timestamps.freeUserSince
              ),
              Date.now()
            ),
            a = [3, 10];
          for (const s of a)
            if (t >= s) {
              e >= s ? this.#ht() : this.#lt(s - e);
              break;
            }
        }
        #lt(t) {
          const e = 24 * t * 60 * 60 * 1e3;
          this.#it = setTimeout(() => this.#ot(), e);
        }
      };
      d = (0, s.gn)(
        [
          (0, l.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              subscription: (0, l.g)("account", "subscription"),
              timestamps: (0, l.g)("timestamps"),
            },
          }),
          (0, r.autoinject)(),
          (0, s.w6)("design:paramtypes", [h.x, o.yh, i.h]),
        ],
        d
      );
    },
    93192: (t, e, a) => {
      a.d(e, { r: () => g });
      var s = a(70655),
        i = a("aurelia-event-aggregator"),
        r = a("aurelia-framework"),
        o = a(45437),
        n = a(29080),
        h = a(87632),
        l = a(93082),
        c = a(51722),
        d = a(27170),
        u = a(11912),
        p = a(56372);
      let g = class {
        #ct;
        #st;
        #L;
        #U;
        #dt;
        constructor(t, e, a, s) {
          (this.#st = t), (this.#L = e), (this.#U = a), (this.#dt = s);
        }
        attached() {
          this.#ct = new u.K4().push(
            this.#st.subscribe(
              "router:navigation:complete",
              this.#ut.bind(this)
            )
          );
        }
        detached() {
          this.#ct.dispose(), (this.#ct = null);
        }
        async #ut(t) {
          "cheats/title" ===
            t.instruction.viewPortInstructions.default.childRouter
              .currentInstruction.config.moduleId &&
            this.account?.subscription &&
            (await this.#pt(), this.#gt());
        }
        async #gt() {
          const t = (0, n.Z)(
              new Date(this.account.subscription.startedAt),
              Date.now()
            ),
            e = t >= 864e5 && t <= 1728e5,
            a = !!this.lastProOnboardingReminder;
          e &&
            !a &&
            (this.#U.dispatch(d.JC, "lastProOnboardingReminder"),
            this.#dt.openTooltip());
        }
        async #pt() {
          (0, n.Z)(new Date(this.account.subscription.startedAt), Date.now()) >=
            1728e5 &&
            (this.lastProOverlayReminder ||
              (await this.#U.dispatch(d.JC, "lastProOverlayReminder"),
              (await this.#L.isAppInstalled()) ||
                (await this.#dt.highlightOverlay())),
            this.lastProRemoteReminder ||
              (await this.#U.dispatch(d.JC, "lastProRemoteReminder"),
              (0, c.yE)(this.account.flags, 1024) ||
                (await this.#dt.highlightRemote())));
        }
      };
      g = (0, s.gn)(
        [
          (0, l.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              account: (0, l.g)("account"),
              lastProOverlayReminder: (0, l.g)(
                "timestamps",
                "lastProOverlayReminder"
              ),
              lastProRemoteReminder: (0, l.g)(
                "timestamps",
                "lastProRemoteReminder"
              ),
              lastProOnboardingReminder: (0, l.g)(
                "timestamps",
                "lastProOnboardingReminder"
              ),
            },
          }),
          (0, r.autoinject)(),
          (0, s.w6)("design:paramtypes", [i.h, h.F0, o.yh, p.d]),
        ],
        g
      );
    },
    97845: (t, e, a) => {
      a.d(e, { x: () => u });
      var s = a(70655),
        i = a("aurelia-framework"),
        r = a(45437),
        o = a(18739),
        n = a(62546),
        h = a("dialogs/webview-dialog"),
        l = a(93082),
        c = a(26478),
        d = a(68611);
      let u = class {
        #mt;
        #U;
        #ft;
        #e;
        #wt;
        constructor(t, e, a, s) {
          (this.#mt = t), (this.#U = e), (this.#ft = a), (this.#e = s);
        }
        attached() {
          this.subscription
            ? (this.#wt = !0)
            : ((this.#wt = !1),
              this.#U.state
                .pipe((0, o.P)(), (0, n.j)("flags", "proOnStartup"))
                .subscribe((t) => {
                  t && this.showReactivateDialog();
                }));
        }
        detached() {}
        subscriptionChanged() {
          this.subscription
            ? (this.#wt = !0)
            : this.#wt && ((this.#wt = !1), this.showReactivateDialog());
        }
        async showReactivateDialog() {
          (
            await this.#mt.open({
              route: "reactivate-pro",
              params: { hadGift: this.hadGift ? "true" : void 0 },
            })
          ).wasCancelled ||
            (await this.#ft.refreshAccount(),
            this.#e.toast({
              content: "reactivate_pro.youre_a_pro_again",
              type: "ok",
            }));
        }
      };
      u = (0, s.gn)(
        [
          (0, l.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              subscription: (0, l.g)("account", "subscription"),
              hadGift: (0, l.g)("flags", "giftOnStartup"),
            },
          }),
          (0, i.autoinject)(),
          (0, s.w6)("design:paramtypes", [
            h.WebviewDialogService,
            r.yh,
            d.v,
            c.x,
          ]),
        ],
        u
      );
    },
    93122: (t, e, a) => {
      a.d(e, { c: () => d });
      var s = a(70655),
        i = a("aurelia-framework"),
        r = a(45437),
        o = a(29080),
        n = a("dialogs/remote-education-dialog"),
        h = a(93082),
        l = a(51722),
        c = a(27170);
      let d = class {
        #yt;
        #U;
        constructor(t, e) {
          (this.#yt = t), (this.#U = e);
        }
        attached() {}
        detached() {}
        async showDialogOnDashboard() {
          return (
            !this.remoteEducationShownOnDashboard &&
            (await this.#yt.open({ trigger: "dashboard" }),
            this.#U.dispatch(c.V0, "remoteEducationShownOnDashboard", !0),
            !0)
          );
        }
        async showDialogBeforeTrainer() {
          const t = !!this.account?.subscription,
            e =
              !!t &&
              (0, o.Z)(
                new Date(this.account.subscription.startedAt),
                Date.now()
              ) >= 864e5,
            a = (0, l.yE)(this.account?.flags, 1024);
          return !(
            !t ||
            !e ||
            this.remoteEducationShownBeforeTrainer ||
            a ||
            (await this.#yt.open({ trigger: "play_button" }),
            this.#U.dispatch(c.V0, "remoteEducationShownBeforeTrainer", !0),
            0)
          );
        }
      };
      d = (0, s.gn)(
        [
          (0, h.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              account: (0, h.g)("account"),
              remoteEducationShownOnDashboard: (0, h.g)(
                "flags",
                "remoteEducationShownOnDashboard"
              ),
              remoteEducationShownBeforeTrainer: (0, h.g)(
                "flags",
                "remoteEducationShownBeforeTrainer"
              ),
            },
          }),
          (0, i.autoinject)(),
          (0, s.w6)("design:paramtypes", [
            n.RemoteEducationDialogService,
            r.yh,
          ]),
        ],
        d
      );
    },
    86021: (t, e, a) => {
      a.d(e, { s: () => d });
      var s = a(70655),
        i = a("aurelia-event-aggregator"),
        r = a("aurelia-framework"),
        o = a(81110),
        n = a(93082),
        h = a(11912),
        l = a(95112),
        c = a(59979);
      let d = class {
        #ct;
        #vt;
        #c;
        #a;
        #bt;
        #Tt;
        constructor(t, e, a, s) {
          (this.#c = t), (this.#a = e), (this.#bt = a), (this.#Tt = s);
        }
        attached() {
          this.#ct = new h.K4().push(
            this.#a.subscribe("router:navigation:complete", this.#ut.bind(this))
          );
        }
        detached() {
          this.#vt?.dispose(), this.#ct.dispose();
        }
        #ut(t) {
          const e =
            t.instruction.viewPortInstructions.default.childRouter
              .currentInstruction;
          this.#vt ||
            (this.#c.visible
              ? this.#_t(e)
              : (this.#vt = this.#c.whenVisible(() => {
                  (this.#vt = null), this.#_t(e);
                })));
        }
        async #_t(t) {
          let e = await this.#St();
          e ||
            ("dashboard" === t.config.name && (e = await this.#Dt()),
            e || (await this.#Rt()));
        }
        async #St() {
          return !!this.#bt.showDialog("navigation");
        }
        async #Dt() {
          return !!this.#Tt.showDialog();
        }
        async #Rt() {
          return !1;
        }
      };
      d = (0, s.gn)(
        [
          (0, n.b)({ setup: "attached", teardown: "detached" }),
          (0, r.autoinject)(),
          (0, s.w6)("design:paramtypes", [o.f, i.h, l.z, c.h]),
        ],
        d
      );
    },
    81016: (t, e, a) => {
      a.d(e, { K: () => c });
      var s = a(70655),
        i = a("aurelia-framework"),
        r = a(45437),
        o = a(81110),
        n = a(35969),
        h = a(93082),
        l = a(27170);
      let c = class {
        #c;
        #Pt;
        #U;
        #V;
        constructor(t, e, a) {
          (this.#c = t), (this.#Pt = e), (this.#U = a);
        }
        attached() {
          this.closeToTrayChanged();
        }
        detached() {
          this.#Ct();
        }
        #Ct() {
          this.#V && (this.#V.dispose(), (this.#V = null));
        }
        async closeToTrayChanged() {
          this.closeToTray
            ? (await this.#c.setCloseBehavior("tray"),
              this.#V ||
                this.flags.runningInTrayNotificationShown ||
                (this.#V = this.#c.onClosedToTray(() => {
                  new Notification(
                    this.#Pt.getValue("tray_notification.wemod_minimized"),
                    {
                      body: this.#Pt.getValue(
                        "tray_notification.wemod_is_running_in_the_tray"
                      ),
                    }
                  ),
                    this.#Ct(),
                    this.#U.dispatch(
                      l.V0,
                      "runningInTrayNotificationShown",
                      !0
                    );
                })))
            : await this.#c.setCloseBehavior("quit");
        }
      };
      c = (0, s.gn)(
        [
          (0, h.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              closeToTray: (0, h.g)("settings", "closeToTray"),
              flags: (0, h.g)("flags"),
            },
          }),
          (0, i.autoinject)(),
          (0, s.w6)("design:paramtypes", [o.f, n.oc, r.yh]),
        ],
        c
      );
    },
    59979: (t, e, a) => {
      a.d(e, { h: () => u });
      var s = a(70655),
        i = a("aurelia-dialog"),
        r = a("aurelia-framework"),
        o = a(45437),
        n = a(29001),
        h = a("dialogs/secure-account-dialog"),
        l = a(93082),
        c = a(51722),
        d = a(27170);
      let u = class {
        #Tt;
        #U;
        #$;
        constructor(t, e, a) {
          (this.#Tt = t), (this.#U = e), (this.#$ = a);
        }
        attached() {}
        detached() {}
        showDialog() {
          const t = (0, c.yE)(this.account.flags, 8),
            e = (0, c.yE)(this.account.flags, 2),
            a = Date.now();
          return (
            !this.#$.hasOpenDialog &&
            (!t || !e) &&
            !(
              this.lastSecureAccountDialog &&
              (0, n.Z)(new Date(this.lastSecureAccountDialog), a) < 604800
            ) &&
            !((0, n.Z)(new Date(this.account.joinedAt), a) < 3600) &&
            !!this.gameHistory &&
            (Object.values(this.gameHistory).filter((t) => !!t.lastPlayedAt)
              .length
              ? (this.#U.dispatch(d.JC, "lastSecureAccountDialog"),
                this.#Tt.open(),
                !0)
              : void 0)
          );
        }
      };
      u = (0, s.gn)(
        [
          (0, l.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              lastSecureAccountDialog: (0, l.g)(
                "timestamps",
                "lastSecureAccountDialog"
              ),
              gameHistory: (0, l.g)("gameHistory"),
              account: (0, l.g)("account"),
            },
          }),
          (0, r.autoinject)(),
          (0, s.w6)("design:paramtypes", [
            h.SecureAccountDialogService,
            o.yh,
            i.DialogService,
          ]),
        ],
        u
      );
    },
    91060: (t, e, a) => {
      a.d(e, { r: () => h });
      var s = a(70655),
        i = a("aurelia-framework"),
        r = a(69949),
        o = a(81110),
        n = a("shared/dialogs/basic-dialog");
      let h = class {
        #t;
        #$;
        #c;
        #V;
        constructor(t, e, a) {
          (this.#t = t), (this.#$ = e), (this.#c = a);
        }
        attached() {
          this.#V = this.#c.addAppQuitInterceptor(async () => {
            if (
              this.#t.trainer &&
              (this.#c.focus(),
              (await this.#$.yesNo("game.exit_confirm_dialog", void 0, !0)) !==
                n.DialogResult.Yes)
            )
              return !0;
          });
        }
        detached() {
          this.#V.dispose(), (this.#V = null);
        }
      };
      h = (0, s.gn)(
        [
          (0, i.autoinject)(),
          (0, s.w6)("design:paramtypes", [r.hc, n.BasicDialogService, o.f]),
        ],
        h
      );
    },
    10207: (t, e, a) => {
      a.d(e, { B: () => l });
      var s = a(70655),
        i = a("aurelia-framework"),
        r = a(45437),
        o = a(18739),
        n = a(27170),
        h = a(35080);
      let l = class {
        #U;
        #kt;
        constructor(t, e) {
          (this.#U = t), (this.#kt = e);
        }
        attached() {
          this.#kt.available &&
            this.#U.state.pipe((0, o.P)()).subscribe(this.#At.bind(this));
        }
        detached() {}
        #At(t) {
          const e = t.settings.lastReleaseNotesVersion;
          (!e || e < this.#kt.version) &&
            this.#U.dispatch(
              n.D3,
              { lastReleaseNotesVersion: this.#kt.version },
              "update_dialog_trigger",
              !0
            ),
            !e || e >= this.#kt.version || this.#kt.openDialog();
        }
      };
      l = (0, s.gn)(
        [(0, i.autoinject)(), (0, s.w6)("design:paramtypes", [r.yh, h.v])],
        l
      );
    },
    66971: (t, e, a) => {
      a.d(e, { l: () => c });
      var s = a(70655),
        i = a("aurelia-dialog"),
        r = a("aurelia-framework"),
        o = a(45437),
        n = a("dialogs/welcome-mat-dialog"),
        h = a(93082),
        l = a(27170);
      let c = class {
        #Et;
        #U;
        #$;
        constructor(t, e, a) {
          (this.#Et = t), (this.#U = e), (this.#$ = a);
        }
        attached() {}
        detached() {}
        async showDialog() {
          return !(
            this.#$.hasOpenDialog ||
            this.lastWelcomeMatDialog ||
            this.subscription ||
            (this.#U.dispatch(l.JC, "lastWelcomeMatDialog"), this.#Et.open(), 0)
          );
        }
      };
      c = (0, s.gn)(
        [
          (0, h.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              lastWelcomeMatDialog: (0, h.g)(
                "timestamps",
                "lastWelcomeMatDialog"
              ),
              subscription: (0, h.g)("account", "subscription"),
            },
          }),
          (0, r.autoinject)(),
          (0, s.w6)("design:paramtypes", [
            n.WelcomeMatDialogService,
            o.yh,
            i.DialogService,
          ]),
        ],
        c
      );
    },
    4351: (t, e, a) => {
      a.d(e, { j: () => p });
      var s = a(70655),
        i = a("aurelia-framework"),
        r = a(45437),
        o = a(23739),
        n = a(58694),
        h = a(93082),
        l = a(27170),
        c = a(11912),
        d = a(78219);
      const u = new Set([n.$]);
      let p = class {
        #R;
        #U;
        #It;
        #Ut;
        #Ft;
        constructor(t, e) {
          (this.#It = !1), (this.#Ut = !1), (this.#R = t), (this.#U = e);
        }
        initialize() {
          return this.#o();
        }
        attached() {}
        detached() {
          this.#Nt(), (this.#Ut = !1);
        }
        #Ot() {
          this.#Ft = (0, c.rk)(() => this.#o(), (0, d.i)(60, 70));
        }
        #Nt() {
          this.#Ft?.dispose(), (this.#Ft = null);
        }
        installedAppsChanged() {
          return this.#o();
        }
        async #o() {
          if (this.#It) this.#Ut = !0;
          else {
            this.#Nt(), (this.#It = !0), (this.#Ut = !1);
            try {
              await this.#jt();
            } catch (t) {
              throw ((this.#Ut = !1), t);
            } finally {
              (this.#It = !1), this.#Ut ? this.#o() : this.#Ot();
            }
          }
        }
        async #jt() {
          const t = Object.keys(this.installedApps).filter(
              (t) => !u.has(this.installedApps[t].platform)
            ),
            e = Math.ceil(Date.now() / 1e3),
            a = t.filter((t) => this.#xt(t, e));
          if (0 === a.length) await this.#U.dispatch(l.Cn, new Set(t));
          else {
            const e = [];
            for (let t = 0; t < a.length; t += 250) {
              const s = a.slice(t, t + 250);
              try {
                e.push(await this.#R.getUnavailableTitlesByCorrelationIds(s));
              } catch {}
            }
            await this.#U.dispatch(l.Dr, e.flat(), a, new Set(t));
          }
        }
        #xt(t, e) {
          const a = this.correlatedUnavailableTitleRefreshes[t];
          return "number" != typeof a || a + 604800 <= e;
        }
      };
      p = (0, s.gn)(
        [
          (0, h.b)({
            setup: "initialize",
            teardown: "detached",
            selectors: {
              installedApps: (0, h.g)("installedApps"),
              correlatedUnavailableTitleRefreshes: (0, h.g)(
                "correlatedUnavailableTitleRefreshes"
              ),
            },
          }),
          (0, i.autoinject)(),
          (0, s.w6)("design:paramtypes", [o.K, r.yh]),
        ],
        p
      );
    },
    12437: (t, e, a) => {
      a.d(e, { U: () => p });
      var s = a(70655),
        i = a("aurelia-framework"),
        r = a(29080),
        o = a(69949),
        n = a(81110),
        h = a(11912),
        l = a(78219),
        c = a(83467),
        d = a(76330);
      const u = () => (0, l.i)(30, 40);
      let p = class {
        #c;
        #Vt;
        #d;
        #Mt;
        #Lt;
        #ct;
        #Bt;
        constructor(t, e, a, s) {
          (this.#c = t), (this.#Vt = e), (this.#d = a), (this.#Mt = s);
        }
        activate() {
          this.#c.info.updaterAvailable &&
            ("applied" === this.#c.updateState
              ? this.#Wt()
              : ((this.#Lt = (0, h.rk)(() => this.#$t(), u())),
                (this.#ct = this.#c.onUpdateStateChanged((t) => {
                  "applied" === t && this.#Wt();
                }))));
        }
        deactivate() {
          this.#Lt?.dispose(), this.#ct?.dispose();
        }
        async #$t() {
          "applied" !== (await this.#c.checkForUpdate().catch(() => !1)) &&
            (this.#Lt = (0, h.rk)(() => this.#$t(), u()));
        }
        #Wt() {
          this.#c.visible || (this.#Bt = Date.now()),
            this.#ct?.dispose(),
            (this.#ct = new h.K4([
              this.#c.onClosedToTray(() => {
                (this.#Bt = Date.now()), this.#zt();
              }),
              this.#Vt.onTrainerEnded(() => this.#zt()),
              this.#Mt.onStatusChanged((t) => {
                t !== d.d.Connected && this.#zt();
              }),
            ])),
            this.#zt();
        }
        #zt() {
          this.#Lt?.dispose(), (this.#Lt = (0, h.rk)(() => this.#Gt(), 6e4));
        }
        async #Gt() {
          this.#Jt() &&
            (await this.#c.restartForUpdate(
              this.#d.getCurrentInternalUri(),
              !0
            ));
        }
        #Jt() {
          return (
            "applied" === this.#c.updateState &&
            !this.#Vt.trainer &&
            !(this.#c.visible || (0, r.Z)(this.#Bt, Date.now()) < 6e4) &&
            this.#Mt.status !== d.d.Connected
          );
        }
      };
      p = (0, s.gn)(
        [
          (0, i.autoinject)(),
          (0, s.w6)("design:paramtypes", [n.f, o.hc, c.W, d.K]),
        ],
        p
      );
    },
  },
]);

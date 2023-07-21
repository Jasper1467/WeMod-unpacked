"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [4553],
  {
    51296: (t, e, i) => {
      i.d(e, { p: () => d });
      var s = i(70655),
        a = i("aurelia-framework"),
        n = i(45437),
        o = i("dialogs/playwire-ad-dialog"),
        r = i(36997),
        l = i(93082),
        h = i(27170),
        c = i(81866);
      let d = class {
        #t;
        #e;
        #i;
        #s;
        constructor(t, e, i, s) {
          (this.#t = t), (this.#e = e), (this.#i = i), (this.#s = s);
        }
        attached() {}
        detached() {}
        async open(t, e) {
          if (this.account?.subscription && !t) return !0;
          if ("online" !== this.#e.status && !t) return !0;
          if (!e) return !0;
          if (
            this.lastPlaywireAd &&
            !t &&
            Date.now() - new Date(this.lastPlaywireAd).getTime() < 6e5
          )
            return !0;
          this.#i.event("playwire_pre_content_ad_open");
          const i = await this.#t.open({ useAlternateCta: 2 === e });
          let s, a, n;
          switch (
            ((s = i.wasCancelled
              ? o.PlaywireAdDialogResultStatus.Cancel
              : i.output),
            s)
          ) {
            case o.PlaywireAdDialogResultStatus.Cancel:
              (a = "cancel"), (n = !1);
              break;
            case o.PlaywireAdDialogResultStatus.AdComplete:
              (a = "complete"), (n = !0);
              break;
            case o.PlaywireAdDialogResultStatus.LoadError:
            case o.PlaywireAdDialogResultStatus.AdError:
              (a = "error"), (n = !0);
              break;
            case o.PlaywireAdDialogResultStatus.ProCtaClick:
              (a = "cta_click"), (n = !1);
          }
          return (
            this.#i.event("playwire_pre_content_ad_close", { result: a }),
            !0 !== n || t || this.#s.dispatch(h.JC, "lastPlaywireAd"),
            n
          );
        }
      };
      d = (0, s.gn)(
        [
          (0, l.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              account: (0, l.g)("account"),
              lastPlaywireAd: (0, l.g)("timestamps", "lastPlaywireAd"),
            },
          }),
          (0, a.autoinject)(),
          (0, s.w6)("design:paramtypes", [
            o.PlaywireAdDialogService,
            r.Yz,
            c.cp,
            n.yh,
          ]),
        ],
        d
      );
    },
    34535: (t, e, i) => {
      i.d(e, { X: () => p });
      var s,
        a = i(70655),
        n = i("aurelia-framework"),
        o = i(45437),
        r = i(23739),
        l = i("dialogs/selection-dialog"),
        h = i(35969),
        c = i(93082),
        d = i(27170),
        u = i(26020);
      !(function (t) {
        (t[(t.NotShown = 0)] = "NotShown"),
          (t[(t.Canceled = 1)] = "Canceled"),
          (t[(t.Completed = 2)] = "Completed");
      })(s || (s = {}));
      let p = class {
        #a;
        #s;
        #n;
        #o;
        constructor(t, e, i, s) {
          (this.#a = t), (this.#s = e), (this.#n = i), (this.#o = s);
        }
        attached() {}
        detached() {}
        async openPostTrainer() {
          return this.#r()
            ? await this.openByUsage("generic")
            : { status: s.NotShown };
        }
        #r() {
          const t = Object.values(this.gameHistory).filter(
            (t) => !!t.lastPlayedAt
          );
          return (
            !(t.length < 3) &&
            !(
              t.map((t) => t.playDuration || 0).reduce((t, e) => t + e, 0) <
              1800
            )
          );
        }
        async openByUsage(t, e = !1) {
          const i = this.polls
            .filter((e) => e.usage === t)
            .filter((t) => e || this.#o.isApplicable(t))
            .filter((t) => e || !this.account.answeredPolls.includes(t.id));
          if (0 === i.length) return { status: s.NotShown };
          const a = i[Math.floor(Math.random() * i.length)];
          return await this.open(a);
        }
        async open(t, e = !1) {
          let i, a;
          "subscription_cancelation" === t.usage &&
            ((i = "poll_dialog.cancel_my_subscription"),
            (a = "poll_dialog.i_changed_my_mind")),
            "generic" === t.usage && (i = "poll_dialog.submit");
          const n = {
              title: h.oc.literal(t.title),
              message: t.message ? h.oc.literal(t.message) : void 0,
              options: t.options.map(h.oc.literal),
              multiselect: t.multiselect,
              customSelection: t.customSelection
                ? {
                    ...t.customSelection,
                    placeholder: t.customSelection.placeholder
                      ? h.oc.literal(t.customSelection.placeholder)
                      : void 0,
                  }
                : null,
              detailsField: t.detailsField
                ? {
                    ...t.detailsField,
                    placeholder: t.detailsField.placeholder
                      ? h.oc.literal(t.detailsField.placeholder)
                      : void 0,
                  }
                : t.detailsField,
              submitLabel: i,
              cancelLabel: a,
            },
            o = await this.#a.open(n);
          if (o.wasCancelled) return { status: s.Canceled };
          const r = o.output;
          if (t.id && !e)
            try {
              const e = await this.#n.respondToPoll(
                t.id,
                r.selections,
                r.customSelection,
                r.details
              );
              await this.#s.dispatch(d.qg, e);
            } catch {}
          return {
            status: s.Completed,
            selections: r.selections,
            customSelection: r.customSelection,
            additionalInfo: r.details,
          };
        }
      };
      p = (0, a.gn)(
        [
          (0, c.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              account: (0, c.g)("account"),
              polls: (0, c.g)("catalog", "polls"),
              gameHistory: (0, c.g)("gameHistory"),
            },
          }),
          (0, n.autoinject)(),
          (0, a.w6)("design:paramtypes", [
            l.SelectionDialogService,
            o.yh,
            r.K,
            u.W,
          ]),
        ],
        p
      );
    },
    56372: (t, e, i) => {
      i.d(e, { d: () => S });
      var s = i(70655),
        a = i("aurelia-event-aggregator"),
        n = i("aurelia-framework"),
        o = i(45437),
        r = i(31389),
        l = i(78681),
        h = i(26478),
        c = i("dialogs/email-dialog"),
        d = i("dialogs/pro-onboarding-dialog"),
        u = i(70824),
        p = i(29242),
        g = i("settings/settings-dialog"),
        m = i(93082),
        b = i(51722),
        y = i(27170),
        f = i(11912),
        v = i(85882),
        w = i(87632);
      let S = class {
        #l;
        #h;
        #c;
        #d;
        #u;
        #p;
        #g;
        #m;
        #b;
        #y;
        #s;
        constructor(t, e, i, s, n, o, r, l, h) {
          (this.#h = new a.h()),
            (this.#c = t),
            (this.#d = e),
            (this.#u = i),
            (this.#p = s),
            (this.#g = n),
            (this.#m = o),
            (this.#b = r),
            (this.#y = l),
            (this.#s = h);
        }
        attached() {
          (this.#l = new f.K4([
            this.#d.subscribe(p.TD, () => this.check()),
            this.#d.subscribe(p.mU, () => this.check()),
          ]).pushEventListener(window, "focus", () => this.check())),
            !this.account.subscription ||
              (this.proOnStartup && !this.#f()) ||
              this.trigger();
        }
        detached() {
          this.#l.dispose();
        }
        async trigger() {
          this.#v(),
            this.account.subscription.gift ||
              (0, b.yE)(this.account.flags, 2) ||
              (await this.#g.open(null, !u.Z.debug)),
            await this.#p.open({
              trigger: "post_pro_upgrade",
              mode: "post-pro-upgrade",
            }),
            this.#w(),
            await this.highlightOverlay(),
            this.highlightRemote();
        }
        #v() {
          this.#c.play({ path: "static/animations/fireworks.json" });
        }
        check() {
          this.account.subscription || this.#m.watchFlag(512, 1, !0);
        }
        async highlightOverlay() {
          return new Promise((t) => {
            this.#u.isSystemSupported()
              ? setTimeout(() => {
                  this.#d.publish("open-overlay-tooltip"),
                    this.#d.publish("highlight-overlay-button"),
                    this.#d.subscribeOnce("overlay-tooltip-closed", () => {
                      t();
                    });
                }, 1e3)
              : t();
          });
        }
        highlightRemote() {
          setTimeout(() => {
            this.#d.publish("open-remote-tooltip"),
              this.#d.publish("highlight-remote-button");
          }, 1e3);
        }
        openTooltip() {
          this.#d.publish("open-pro-onboarding-tooltip");
        }
        onSuccess(t) {
          return this.#h.subscribe("success", t);
        }
        accountChanged(t, e) {
          const i = !e.subscription && t.subscription,
            s =
              "active" !== e.subscription?.state &&
              "active" === t.subscription?.state;
          (i || s) && (this.trigger(), this.#h.publish("success"));
        }
        #w() {
          if (this.account.subscription?.gift) {
            const t = this.account.subscription.period;
            ["monthly", "yearly"].includes(t) &&
              this.#b.toast({
                content: `post_pro_upgrade.${t}_gift_toast_message`,
                i18nParams: {
                  sender: this.account.subscription.gift.senderName,
                },
                type: "gift",
                persist: !0,
                actions: [
                  {
                    onclick: () => this.#y.open({ group: "account/billing" }),
                    label: "post_pro_upgrade.view_details",
                  },
                ],
              });
          }
        }
        #f() {
          if (this.account?.subscription?.gift) {
            const t = this.account.subscription.startedAt;
            if (
              !this.lastGiftOnboardingShown ||
              (0, r.Z)(new Date(this.lastGiftOnboardingShown), new Date(t))
            )
              return this.#s.dispatch(y.JC, "lastGiftOnboardingShown"), !0;
          }
          return !1;
        }
      };
      S = (0, s.gn)(
        [
          (0, n.autoinject)(),
          (0, m.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              account: (0, m.g)("account"),
              settings: (0, m.g)("settings"),
              proOnStartup: (0, m.g)("flags", "proOnStartup"),
              lastGiftOnboardingShown: (0, m.g)(
                "timestamps",
                "lastGiftOnboardingShown"
              ),
            },
          }),
          (0, s.w6)("design:paramtypes", [
            l.b,
            a.h,
            w.F0,
            d.ProOnboardingDialogService,
            c.EmailDialogService,
            v.B,
            h.x,
            g.SettingsDialogService,
            o.yh,
          ]),
        ],
        S
      );
    },
    30035: (t, e, i) => {
      i.d(e, { c: () => l });
      var s = i(70655),
        a = i("aurelia-event-aggregator"),
        n = i("aurelia-framework"),
        o = i(58694),
        r = i(93082);
      let l = class {
        constructor() {
          this.#h = new a.h();
        }
        #h;
        activate() {}
        deactivate() {}
        getPreferredInstallationInfo(t) {
          const e = { app: null, version: null };
          if (!t) return e;
          const i = this.installedGameVersions[t];
          if (!i?.length) return e;
          if (
            (i.forEach((t) => {
              const i = this.installedApps[t.correlationId];
              i && i.platform !== o.$ && ((e.app = i), (e.version = t.version));
            }),
            !e.app)
          ) {
            const t = i[0],
              s = this.installedApps[t.correlationId];
            s && ((e.app = s), (e.version = t.version));
          }
          return e;
        }
        installedAppsChanged() {
          this.#h.publish("installations-changed");
        }
        installedGameVersionsChanged() {
          this.#h.publish("installations-changed");
        }
        onInstallationsChanged(t) {
          return this.#h.subscribe("installations-changed", t);
        }
      };
      l = (0, s.gn)(
        [
          (0, n.autoinject)(),
          (0, r.b)({
            setup: "activate",
            teardown: "deactivate",
            selectors: {
              installedGameVersions: (0, r.g)("installedGameVersions"),
              installedApps: (0, r.g)("installedApps"),
            },
          }),
        ],
        l
      );
    },
    95112: (t, e, i) => {
      i.d(e, { z: () => I });
      var s = i(70655),
        a = i(71017),
        n = i("aurelia-dialog"),
        o = i("aurelia-framework"),
        r = i(45437),
        l = i(31389),
        h = i(29080),
        c = i(56901),
        d = i(23739),
        u = i("dialogs/webview-dialog"),
        p = i(70824),
        g = i(81110),
        m = i(35969),
        b = i(93082),
        y = i(66302),
        f = i(27170),
        v = i(11912),
        w = i(77995),
        S = i(78219),
        C = i(81866);
      let I = class {
        #S;
        #C;
        #I;
        #D;
        #T;
        #s;
        #A;
        #P;
        #n;
        #i;
        #_;
        #R;
        constructor(t, e, i, s, a, n, o) {
          (this.promotion = null),
            (this.#s = t),
            (this.#A = e),
            (this.#P = i),
            (this.#n = s),
            (this.#i = a),
            (this.#_ = n),
            (this.#R = o);
        }
        attached() {
          (this.#D = this.#R.onLocaleChanged(() => this.refresh())),
            this.refresh();
        }
        detached() {
          (this.promotion = null),
            this.#T?.dispose(),
            this.#S?.dispose(),
            this.#C?.dispose(),
            this.#I?.dispose(),
            this.#D?.dispose();
        }
        async refresh(t) {
          this.#C?.dispose();
          try {
            if (!t)
              try {
                t = await this.#n.getPromotion();
              } catch {
                return;
              }
            JSON.stringify(t) !== JSON.stringify(this.promotion) && this.#V(t);
          } finally {
            this.#C = (0, v.rk)(() => this.refresh(), (0, S.i)(60, 70));
          }
        }
        #V(t) {
          (this.promotion = t),
            this.#S?.dispose(),
            this.#T?.dispose(),
            t &&
              (this.#k(),
              (this.#T = this.#_.whenVisible(() =>
                this.#i.event(
                  "promotion_app_banner_show",
                  { promotionId: t.id },
                  C.$9
                )
              ))),
            this.#O();
        }
        audienceChanged() {
          this.refresh();
        }
        subscriptionChanged(t, e) {
          JSON.stringify(e ?? null) !== JSON.stringify(t ?? null) &&
            this.refresh();
        }
        showDialog(t = null) {
          if ("string" == typeof t && this.#A.hasOpenDialog) return !1;
          const e = this.promotion?.components?.dialog;
          if (!e) return !1;
          if (t) {
            if (!e.triggers.includes(t)) return !1;
            const i = this.promotionHistory[this.promotion.id]?.dialogShownAt,
              s =
                this.promotionHistory[this.promotion.id]?.notificationClickedAt;
            if (i || s) return !1;
          }
          return (
            this.#P.open({ route: e.route, params: e.params }),
            this.#s.dispatch(
              f.UE,
              this.promotion.id,
              "dialog",
              new Date().toISOString()
            ),
            !0
          );
        }
        #k() {
          const t = this.promotion.components.notification;
          t &&
            (this.#S = (0, v.rk)(async () => {
              if (document.hasFocus() && !p.Z.debug) return;
              const e = this.promotion.id,
                i = this.promotionHistory[e]?.notificationShownAt;
              if (i) return;
              const s = new w.G(t.title)
                .addText(t.message)
                .setActivationType("protocol")
                .setLaunchString(this.#G(e, t.url));
              if (t.image) {
                const i = await this.#E(e, t.image);
                i && s.addImage(i, "appLogoOverride");
              }
              t.actions.forEach((t) =>
                s.addAction({
                  activationType: t.type,
                  content: t.label,
                  arguments:
                    "protocol" === t.type
                      ? this.#G(e, t.arguments)
                      : t.arguments,
                })
              ),
                (await this.#_.showToast(s.toXml())) &&
                  (await this.#s.dispatch(
                    f.UE,
                    e,
                    "notification",
                    new Date().toISOString()
                  ),
                  this.#i.event(
                    "promotion_notification_show",
                    {
                      promotionId: this.promotion.id,
                      windowState: this.#_.visible
                        ? this.#_.minimized
                          ? "minimized"
                          : "visible"
                        : "tray",
                    },
                    C.$9
                  ));
            }, 1e3 * t.delay));
        }
        #G(t, e) {
          const i = new URL(e);
          return (
            "wemod:" === i.protocol &&
              (i.searchParams.set("trigger", `promotion:${t}/notification`),
              (e = i.toString())),
            e
          );
        }
        async #E(t, e) {
          const i = e.match(
            /^data:image\/(png|jpeg|gif|webp);base64,([a-zA-Z0-9+/]+={0,2})$/
          );
          if (i) {
            const e = a.join(this.#_.info.paths.temp, "WeMod");
            await c.promises.mkdir(e).catch(y.K);
            const s = a.join(e, `promo-notification-${t}.${i[1]}`);
            return await c.promises.writeFile(s, i[2], "base64"), s;
          }
          return !1;
        }
        #O() {
          if ((this.#I?.dispose(), !this.promotion || !this.promotion.endsAt))
            return;
          const t = new Date(this.promotion.endsAt);
          if ((0, l.Z)(t, Date.now())) this.#V(null);
          else {
            const e = (0, h.Z)(Date.now(), t);
            this.#I = (0, v.rk)(() => this.#O(), e);
          }
        }
      };
      I = (0, s.gn)(
        [
          (0, o.autoinject)(),
          (0, b.b)({
            setup: "attached",
            teardown: "detached",
            selectors: {
              subscription: (0, b.g)("account", "subscription"),
              promotionHistory: (0, b.g)("promotionHistory"),
            },
          }),
          (0, s.w6)("design:paramtypes", [
            r.yh,
            n.DialogService,
            u.WebviewDialogService,
            d.K,
            C.cp,
            g.f,
            m.oc,
          ]),
        ],
        I
      );
    },
    35080: (t, e, i) => {
      i.d(e, { v: () => r });
      var s = i(70655),
        a = i("aurelia-framework"),
        n = i("dialogs/update-dialog"),
        o = i(35969);
      let r = class {
        #R;
        #L;
        constructor(t, e) {
          (this.version = 1),
            (this.available = !0),
            (this.#R = t),
            (this.#L = e);
        }
        attached() {}
        detached() {}
        async openDialog() {
          return (
            !!this.available &&
            (await this.#L.open({
              content: this.#R.getValue("release_notes.content"),
            }),
            !0)
          );
        }
      };
      r = (0, s.gn)(
        [
          (0, a.autoinject)(),
          (0, s.w6)("design:paramtypes", [o.oc, n.UpdateDialogService]),
        ],
        r
      );
    },
    76330: (t, e, i) => {
      i.d(e, { K: () => D, d: () => s });
      var s,
        a = i(70655),
        n = i("aurelia-framework"),
        o = i(45437),
        r = i(62546),
        l = i(41931),
        h = i(81866),
        c = i(38650),
        d = i(81110),
        u = i(35969),
        p = i("shared/pusher/index"),
        g = i(93082),
        m = i(27170),
        b = i(11912),
        y = i(83467),
        f = i(30248),
        v = i(74036),
        w = i(30035),
        S = i(83202),
        C = i(248);
      !(function (t) {
        (t[(t.Disconnected = 0)] = "Disconnected"),
          (t[(t.Connecting = 1)] = "Connecting"),
          (t[(t.WaitingForClient = 2)] = "WaitingForClient"),
          (t[(t.Connected = 3)] = "Connected"),
          (t[(t.ForceDisconnected = 4)] = "ForceDisconnected");
      })(s || (s = {}));
      const I = new Set(["default", "green-pro", "orange-pro", "pro"]);
      let D = class {
        #N;
        #F;
        #j;
        #x;
        #s;
        #H;
        #U;
        #i;
        #R;
        #_;
        #h;
        #l;
        #W;
        #$;
        #M;
        #J;
        #K;
        #Z;
        #z;
        #B;
        #X;
        #q;
        #Y;
        #Q;
        constructor(t, e, i, a, n, o, r, l, h, c, d) {
          (this.status = s.Disconnected),
            (this.#h = new b.yM()),
            (this.#l = new b.K4()),
            (this.#K = null),
            (this.#B = []),
            (this.#X = {}),
            (this.#q = 0),
            (this.#N = t),
            (this.#F = i),
            (this.#z = a),
            (this.#j = n),
            (this.#x = o),
            (this.#s = e),
            (this.#H = r),
            (this.#U = l),
            (this.#i = h),
            (this.#R = c),
            (this.#_ = d);
        }
        activate() {
          this.#_.isInTraySinceStartup &&
            this.#l.push(
              this.#_.whenVisible(() => this.#tt(this.remoteChannel))
            ),
            this.#l
              .push(this.#h)
              .push(
                this.#z.onCheatStatesChanged((t) => {
                  t.gameId === this.#M && this.#et();
                })
              )
              .push(this.#R.onLocaleChanged(() => this.#it()));
          const t = this.#s.state
              .pipe((0, r.j)("settings", "theme"), (0, l.x)())
              .subscribe(this.#st.bind(this)),
            e = this.#s.state
              .pipe(
                (0, r.j)("account", "subscription", "remoteChannel"),
                (0, l.x)()
              )
              .subscribe(this.#tt.bind(this)),
            i = this.#s.state
              .pipe((0, r.j)("trainerNotesRead"), (0, l.x)())
              .subscribe(this.#at.bind(this)),
            s = this.#x.onInstallationsChanged(this.#nt.bind(this));
          this.#l.push(
            (0, b.JD)(() => {
              t.unsubscribe(), e.unsubscribe(), s.dispose(), i.unsubscribe();
            })
          ),
            this.#it();
        }
        deactivate() {
          this.#l.dispose();
        }
        onStatusChanged(t) {
          return this.#h.subscribe("status", t);
        }
        #ot() {
          return I.has(this.#Y) ? this.#Y : "default";
        }
        #st(t) {
          (this.#Y = t),
            this.#W &&
              (this.#W.send("client-theme", this.#ot()),
              this.#W.send("client-theme-id", this.#Y));
        }
        #it() {
          (this.#Q = this.#R.getEffectiveLocale().toString()),
            this.#W && this.#W.send("client-language", this.#Q);
        }
        #at(t) {
          (this.#X = t), this.#nt();
        }
        #rt() {
          this.#Z && (this.#Z.dispose(), (this.#Z = null)),
            (this.#$ = Date.now().toString()),
            (this.#J = null),
            (this.#B = []),
            (this.#K = null);
        }
        #nt() {
          if (this.status === s.Connected) {
            let t,
              e = !1,
              i = !1;
            const s = this.#X[this.#J] || null;
            this.#M &&
              ((t = this.#x.getPreferredInstallationInfo(this.#M)),
              t.app &&
                ((e = !0),
                (i =
                  "number" == typeof t.version &&
                  !this.#B.includes(t.version)))),
              this.#W.send("client-state", {
                instanceId: this.#$,
                trainerId: this.#J,
                trainerLoading: this.#K?.isLoading(),
                gameInstalled: e,
                needsCompatibilityWarning: i,
                values: this.#lt(),
                theme: this.#ot(),
                themeId: this.#Y,
                language: this.#Q,
                notesReadHash: s,
              });
          }
        }
        #lt() {
          return this.#K?.isActive()
            ? Object.fromEntries(this.#K.values.entries())
            : null;
        }
        async #tt(t) {
          if (this.#_.isInTraySinceStartup) return;
          if (this.#W && this.#W.name === t) return;
          this.#W && (this.#W.dispose(), (this.#W = null));
          const e = ++this.#q;
          t
            ? (this.#ht(s.Connecting),
              this.#rt(),
              await this.#ct(t, e),
              this.#dt())
            : this.#ht(s.Disconnected);
        }
        async #ct(t, e) {
          try {
            const i = await this.#N.joinPresence(t);
            e !== this.#q
              ? i.close()
              : (i.onMemberAdded((t) => {
                  "infinity" === t.info.type ? this.#ut() : this.#pt();
                }),
                i.onMemberRemoved(() => this.#pt()),
                i.listen("client-state", () => this.#nt()),
                i.listen("client-cheat-states", () => this.#et()),
                i.listen("client-value-changed", (t) => this.#gt(t)),
                i.listen("client-saved-value-changed", (t) => this.#mt(t)),
                i.listen("client-cheat-insructions-read", (t) => this.#bt(t)),
                i.listen("client-launch-trainer", (t) => this.#yt(t)),
                i.listen("client-trainer-notes-read", (t) => this.#ft(t)),
                i.listen("client-playable-games", () => this.#dt()),
                i.listen("client-navigate-to-route", (t) => this.#vt(t)),
                (this.#W = i),
                this.#pt());
          } catch {
            setTimeout(() => {
              e === this.#q && this.#ct(t, e);
            }, 5e3);
          }
        }
        disconnect() {
          this.#W && (this.#W.send("client-disconnect"), this.#pt());
        }
        #pt() {
          const t = this.#W.members.some((t) => "remote" === t.info.type)
            ? s.Connected
            : s.WaitingForClient;
          this.#ht(t);
        }
        #ht(t) {
          const e = this.status;
          (this.status = t),
            t !== e &&
              (t === s.Connected && this.#nt(),
              this.#h.publish("status", this.status));
        }
        #gt(t) {
          this.#K &&
            t.instanceId === this.#$ &&
            (this.#K.isActive()
              ? this.#K.setValue(t.name, t.value, 3, t.cheatId)
              : this.#nt());
        }
        #mt(t) {
          t.instanceId === this.#$ &&
            this.#j.saveValue(this.#M, t.name, t.value);
        }
        setCurrentTrainer(t, e = null) {
          const i = t?.trainerId || null,
            s = (i ? t?.gameId : null) || null,
            a = (i ? t?.supportedVersions : null) || [];
          if (i === this.#J && e === this.#K) return;
          if (
            (this.#rt(),
            this.#Z && (this.#Z.dispose(), (this.#Z = null)),
            (this.#J = i),
            (this.#M = s),
            (this.#B = [...a]),
            !i)
          )
            return (this.#K = null), void this.#nt();
          if (((this.#K = e), null === e)) return void this.#nt();
          const n = new b.K4();
          e.isActive()
            ? this.#wt(e, n)
            : n.push(e.onActivated(() => this.#wt(e, n))),
            n.push(
              e.onEnded(() => {
                this.#nt();
              })
            ),
            n.push(e.onStateChanged(() => this.#St())),
            (this.#Z = n);
        }
        sendGamePlayed(t, e, i) {
          this.#W.send("client-game-played", {
            gameId: t,
            playedAt: e,
            duration: i,
          });
        }
        #et() {
          this.status === s.Connected &&
            this.#W.send("client-cheat-states", this.#z.cheatStates);
        }
        #wt(t, e) {
          e.push(
            t.onValueSet((t) => {
              this.status === s.Connected &&
                3 !== t.source &&
                this.#W.send("client-value-changed", {
                  instanceId: this.#$,
                  name: t.name,
                  value: t.value,
                });
            })
          ),
            this.#nt();
        }
        #bt(t) {
          this.#F.markRead(t.cheatId, t.instructions);
        }
        #yt(t) {
          this.#h.publish("launch-trainer", t.trainerId);
        }
        #ft(t) {
          this.#s.dispatch(m.yo, t.trainerId, t.notesHash);
        }
        onLaunchTrainer(t) {
          return this.#h.subscribe("launch-trainer", t);
        }
        #St() {
          this.#K.state === c.$c.AcquiringBinary && this.#nt();
        }
        #vt(t) {
          this.#H.router.navigateToRoute(t.routeName, t.params, {
            replace: !0,
          });
        }
        #dt() {
          this.status === s.Connected &&
            this.#W.send(
              "client-playable-games",
              this.#Ct().slice(0, 1e3).join(",")
            );
        }
        #Ct() {
          const t = this.#U.getFilteredFeed(v.sf),
            e = t.items.map((t) => t.gameId);
          return t.dispose(), e;
        }
        installedGameVersionsChanged() {
          this.#dt();
        }
        catalogChanged() {
          this.#dt();
        }
        gameHistoryChanged() {
          this.#dt();
        }
        reconnect() {
          this.remoteChannel && this.#tt(this.remoteChannel);
        }
        #ut() {
          this.#i.event("remote_force_disconnect"),
            this.#N.disconnect(),
            this.#ht(s.ForceDisconnected),
            this.#rt();
        }
      };
      D = (0, a.gn)(
        [
          (0, n.autoinject)(),
          (0, g.b)({
            setup: "activate",
            teardown: "deactivate",
            selectors: {
              installedGameVersions: (0, g.g)("installedGameVersions"),
              gameHistory: (0, g.g)("gameHistory"),
              catalog: (0, g.g)("catalog"),
              remoteChannel: (0, g.g)(
                "account",
                "subscription",
                "remoteChannel"
              ),
            },
          }),
          (0, a.w6)("design:paramtypes", [
            p.Pusher,
            o.yh,
            f.X,
            C.s,
            S.b,
            w.c,
            y.W,
            v.AD,
            h.cp,
            u.oc,
            d.f,
          ]),
        ],
        D
      );
    },
  },
]);

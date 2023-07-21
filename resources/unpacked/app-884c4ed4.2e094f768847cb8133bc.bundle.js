"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [1390],
  {
    "settings/resources/elements/billing-settings.scss": (i, t, n) => {
      n.r(t), n.d(t, { default: () => f });
      var e = n(8081),
        s = n.n(e),
        o = n(23645),
        a = n.n(o),
        r = n(61667),
        l = n.n(r),
        c = new URL(n(47823), n.b),
        g = new URL(n(31916), n.b),
        d = new URL(n(81025), n.b),
        b = new URL(n(93869), n.b),
        p = a()(s()),
        h = l()(c),
        u = l()(g),
        m = l()(d),
        v = l()(b);
      p.push([
        i.id,
        ".billing-settings section{padding:20px;border-radius:10px;border:1px solid rgba(255,255,255,.04);transition:opacity .15s}.billing-settings section.filled{background:rgba(255,255,255,.04);border:none;padding-top:18px}.billing-settings section.filled h5{color:rgba(255,255,255,.6)}.billing-settings section.filled h5.plan-header{margin-bottom:16px;color:#fff}.billing-settings section+section{margin-top:20px}.billing-settings section.loading{opacity:.4}.billing-settings section.loading,.billing-settings section.loading *{pointer-events:none}.billing-settings section.layout{display:flex}.billing-settings section.layout>*:first-child{flex:1 1 auto}.billing-settings section.layout>*:last-child{flex:0 0 auto}.billing-settings .details{display:flex;align-items:center}.billing-settings .details .meta{display:flex;align-items:center;color:rgba(255,255,255,.5)}.billing-settings .details .meta>*+*{margin-left:7px}.billing-settings .details .meta,.billing-settings .details .meta strong,.billing-settings .details .meta em{font-size:13px;line-height:20px;font-weight:500}.billing-settings .details .meta em{font-style:normal;color:rgba(255,255,255,.8)}.billing-settings .details .card-type{width:34px;height:22px;border-radius:4px;background-position:center;background-repeat:no-repeat;background-image:url(" +
          h +
          ');display:inline-block;flex:0 0 auto}.billing-settings .details .meta.warning,.billing-settings .details .meta.warning *{color:var(--color--brand-yellow)}.billing-settings .details .row-actions{display:flex;align-items:center}.billing-settings .details .row-actions .links{display:flex;align-items:center;margin-left:20px;padding-left:20px;border-left:1px solid rgba(255,255,255,.1)}.billing-settings .link{font-size:13px;line-height:20px;font-weight:700;background:rgba(0,0,0,0);border:0;color:rgba(255,255,255,.25);padding:0}.billing-settings .link:hover{color:#fff}.billing-settings h5{font-weight:600;font-size:16px;line-height:25px;font-weight:700;color:#fff;margin:0 0 11px}.billing-settings h5 em{font-style:normal;color:var(--theme--highlight)}.billing-settings h5 strong{background-color:var(--theme--highlight);display:inline-block;font-weight:800;font-size:14px;text-transform:uppercase;color:#fff;line-height:20px;letter-spacing:.6px;padding:0 4px;border-radius:2.5px;min-width:0;text-rendering:geometricPrecision;background:linear-gradient(225deg, var(--color--brand-green) 0%, var(--color--pro) 100%);color:#fff;margin-right:4px;vertical-align:middle}@media(forced-colors: active){body:not(.override-contrast-mode) .billing-settings h5 strong{border:1px solid #fff}}.billing-settings h5+.details{margin-top:2px}.billing-settings h5.warning{color:var(--color--brand-yellow) !important;display:inline-flex;align-items:center}.billing-settings h5.warning:before{display:inline-block;content:"";width:15px;height:15px;border-radius:50%;background:rgba(var(--color--brand-yellow--rgb), 0.3) url(' +
          u +
          ') 6px 3px no-repeat}.billing-settings h5.warning:before{margin-right:8px}.billing-settings .main-actions{margin:17px 0 0 0}.billing-settings .main-actions>*+*{margin-left:15px}.billing-settings .main-actions .button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;box-shadow:inset 0 0 0 1px var(--color--accent);--cta__icon--color: var(--color--accent);font-weight:800;--cta--padding: 18px;--cta--height: 40px;--cta--hover--border-width: 2px;font-size:18px}.billing-settings .main-actions .button,.billing-settings .main-actions .button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) .billing-settings .main-actions .button{border:1px solid #fff}}.billing-settings .main-actions .button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}.billing-settings .main-actions .button>*:first-child{padding-left:0}.billing-settings .main-actions .button>*:last-child{padding-right:0}.billing-settings .main-actions .button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) .billing-settings .main-actions .button svg *{fill:CanvasText}}.billing-settings .main-actions .button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) .billing-settings .main-actions .button svg{opacity:1}}.billing-settings .main-actions .button img{height:50%}.billing-settings .main-actions .button:disabled{opacity:.3}.billing-settings .main-actions .button:disabled,.billing-settings .main-actions .button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){.billing-settings .main-actions .button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}.billing-settings .main-actions .button:not(:disabled):hover svg{opacity:1}}.billing-settings .main-actions .button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}@media(hover: hover){.billing-settings .main-actions .button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--color--accent);background-color:rgba(0,0,0,0)}}.billing-settings .main-actions .button:not(:disabled):active{background-color:var(--color--accent)}.billing-settings .main-actions .button:not(:disabled):active{--cta__icon--color: #000;color:#000}.billing-settings .main-actions .button.main{background-color:var(--color--accent) !important;color:var(--theme--background) !important;transition:filter .15s;box-shadow:none !important}@media(hover: hover){.billing-settings .main-actions .button.main:hover{filter:brightness(1.1)}}.billing-settings .main-actions .button.secondary{background-color:rgba(255,255,255,.6);box-shadow:none;color:var(--theme--background)}.billing-settings .main-actions .button.secondary svg{opacity:1}.billing-settings .main-actions .button.secondary svg *{--cta__icon--color: var(--theme--background)}@media(hover: hover){.billing-settings .main-actions .button.secondary:not(:disabled):hover{background-color:var(--theme--highlight)}}.billing-settings .main-actions .button.accent{background-color:rgba(var(--color--accent--rgb), 0.08) !important;color:var(--color--accent) !important;transition:filter .15s;box-shadow:none !important}@media(hover: hover){.billing-settings .main-actions .button.accent:hover{filter:brightness(1.1)}}.billing-settings .main-actions .button.small{font-size:13px;line-height:20px;font-weight:700;--cta--padding: 11px;--cta--height: 26px;--cta--hover--border-width: 1px}.billing-settings .main-actions .divider{border-left:1px solid rgba(255,255,255,.1);height:28px}.billing-settings .main-actions .promo{font-size:13px;line-height:20px;color:var(--color--accent);display:inline-flex;align-items:center}.billing-settings .main-actions .promo i{margin-left:7px}.billing-settings .main-actions .promo i svg *{fill:var(--color--accent)}.billing-settings .info{font-size:14px;line-height:21px;font-weight:500;line-height:19px;color:rgba(255,255,255,.5)}.billing-settings .disclaimer{font-size:13px;line-height:20px;font-weight:500;color:rgba(255,255,255,.3);display:flex;align-items:center;margin:20px 0 0 0}.billing-settings .disclaimer .icon{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;--cta--height: 15px;--cta--hover--border-width: 1px;min-width:var(--cta--height);width:var(--cta--height);border-radius:50%;justify-content:center;align-items:center;position:relative;background:rgba(255,255,255,.1);box-shadow:none !important;pointer-events:none;margin-right:7px}.billing-settings .disclaimer .icon,.billing-settings .disclaimer .icon *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) .billing-settings .disclaimer .icon{border:1px solid #fff}}.billing-settings .disclaimer .icon>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}.billing-settings .disclaimer .icon>*:first-child{padding-left:0}.billing-settings .disclaimer .icon>*:last-child{padding-right:0}.billing-settings .disclaimer .icon svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) .billing-settings .disclaimer .icon svg *{fill:CanvasText}}.billing-settings .disclaimer .icon svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) .billing-settings .disclaimer .icon svg{opacity:1}}.billing-settings .disclaimer .icon img{height:50%}.billing-settings .disclaimer .icon:disabled{opacity:.3}.billing-settings .disclaimer .icon:disabled,.billing-settings .disclaimer .icon:disabled *{cursor:default;pointer-events:none}@media(hover: hover){.billing-settings .disclaimer .icon:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}.billing-settings .disclaimer .icon:not(:disabled):hover svg{opacity:1}}.billing-settings .disclaimer .icon:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}.billing-settings .disclaimer .icon,.billing-settings .disclaimer .icon>*{padding:0 !important}.billing-settings .disclaimer .icon:active{background-color:rgba(0,0,0,0) !important;color:rgba(255,255,255,.8) !important}.billing-settings .disclaimer .icon svg{opacity:.5}.billing-settings .disclaimer a{color:rgba(255,255,255,.5)}.billing-settings .disclaimer a:hover{color:#fff}.billing-settings .graphic{margin:0 0 -20px 0;justify-self:flex-end}.billing-settings .subscribed{--checkbox--checked-color: var(--theme--highlight);--checkbox__label--color: rgba(255, 255, 255, 0.5);display:inline-flex;align-items:center;--checkbox--checked-color: var(--color--accent);border:1px solid rgba(255,255,255,.15);border-radius:100px;padding:8px 15px;transition:background-color .15s,border-color .15s;background-color:rgba(var(--color--accent--rgb), 0.08);cursor:initial;border-color:rgba(0,0,0,0);--checkbox__label--color: var(--checkbox--checked-color);margin-right:15px}.billing-settings .subscribed,.billing-settings .subscribed *{cursor:pointer}.billing-settings .subscribed,.billing-settings .subscribed *{cursor:pointer}.billing-settings .subscribed>*:first-child{margin-right:9px}.billing-settings .subscribed:hover>*{--checkbox__label--color: #fff}.billing-settings .subscribed,.billing-settings .subscribed *:not(info-tooltip){cursor:default !important}.billing-settings .subscribed .checkbox{display:inline-block;width:15px;height:15px;border:1px solid rgba(255,255,255,.25);border-radius:4px;position:relative;background:rgba(0,0,0,0);transition:background-color .15s;-webkit-appearance:none;width:15px;height:15px;background:rgba(0,0,0,0);border-color:rgba(255,255,255,.25);border-color:rgba(0,0,0,0)}.billing-settings .subscribed .checkbox,.billing-settings .subscribed .checkbox *{cursor:pointer}.billing-settings .subscribed .checkbox:checked:before{opacity:1}.billing-settings .subscribed .checkbox:before{background:var(--checkbox--checked-color);content:"";display:block;position:absolute;left:0;top:0;width:15px;height:11px;opacity:0;-webkit-mask-box-image:url(' +
          m +
          ')}.billing-settings .subscribed .checkbox:before{left:1px;top:0;width:15px;height:11px;transform:scale(1)}.billing-settings .subscribed .checkbox:before{opacity:1}.billing-settings .subscribed>.icon{margin-right:9px}.billing-settings .subscribed>.icon svg *{fill:var(--color--accent)}.billing-settings .subscribed .label{font-size:13px;line-height:20px;font-weight:500;color:var(--checkbox__label--color);transition:color .15s;color:var(--color--accent) !important}.billing-settings .subscribed .label,.billing-settings .subscribed .label *{cursor:pointer}.billing-settings .subscribed info-tooltip{margin-left:10px}.billing-settings .subscribed info-tooltip,.billing-settings .subscribed info-tooltip *{cursor:pointer}.billing-settings .subscribed.warning{background:rgba(var(--color--brand-yellow--rgb), 0.08)}.billing-settings .subscribed.warning .label{color:var(--color--brand-yellow) !important}.billing-settings .subscribed.warning .checkbox{display:none}.billing-settings .subscribed.warning:before{display:inline-block;content:"";width:19px;height:19px;border-radius:50%;background:rgba(var(--color--brand-yellow--rgb), 0.3) url(' +
          v +
          ") center no-repeat;margin-right:11px}.billing-settings hr{border:0;border-top:1px solid rgba(255,255,255,.1);margin:20px 0 16px}",
        "",
      ]);
      const f = p;
    },
    "settings/resources/elements/billing-settings.html": (i, t, n) => {
      n.r(t), n.d(t, { default: () => l });
      var e = n(27091),
        s = n.n(e),
        o = new URL(n(98894), n.b),
        a = new URL(n(5733), n.b),
        r = s()(o);
      const l =
        '<template> <require from="./billing-settings.scss"></require> <require from="../../../resources/elements/pro-cta-label"></require> <require from="../../../shared/resources/elements/info-tooltip"></require> <div class="billing-settings" if.bind="initialized"> <section if.bind="account.subscription" class="filled"> <h5 class="plan-header" innerhtml.bind="\'billing_settings.pro_plan\' | i18n | markdown"></h5> <div class="details"> <template if.bind="account.subscription.gift"> <div class="subscribed"> <i class="icon"><inline-svg src="' +
        r +
        '"></inline-svg></i> <span class="label">${\'billing_settings.active_gift\' | i18n}</span> <info-tooltip>${`billing_settings.active_gift_${account.subscription.period}_info` | i18n:{sender: account.subscription.gift.senderName}}</info-tooltip> </div> <span class="meta"> <span if.bind="account.subscription.endsAt"> ${\'billing_settings.ends\' | i18n} <em>${account.subscription.endsAt | i18nDateTime:{dateStyle:\'medium\'}}</em> </span> </span> </template> <template else> <div class="subscribed ${account.subscription.pastDueInvoice ? \'warning\' : \'\'}"> <span class="checkbox"></span> <span class="label">${\'billing_settings.subscribed\' | i18n}</span> </div> <span class="meta ${account.subscription.pastDueInvoice ? \'warning\' : \'\'}"> <template if.bind="account.subscription.pastDueInvoice"> ${\'billing_settings.payment_overdue\' | i18n}&nbsp; <b>${account.subscription.pastDueInvoice.date | i18nDateTime:{dateStyle:\'medium\'}} · ${pastDueInvoiceAmount | i18nCurrency:account.subscription.pastDueInvoice.currency}</b> </template> <template else> <span if.bind="account.subscription.trialEndsAt"> ${\'billing_settings.$x_days_left_in_trial\' | i18n: {x: trialDaysLeft}} · </span> <span if.bind="account.subscription.nextInvoice"> ${\'billing_settings.next_billing\' | i18n} <em>${account.subscription.nextInvoice.date | i18nDateTime:{dateStyle:\'medium\'}} · ${nextInvoiceAmount | i18nCurrency:account.subscription.nextInvoice.currency}</em> </span> <span if.bind="account.subscription.endsAt"> ${\'billing_settings.until\' | i18n} <em>${account.subscription.endsAt | i18nDateTime:{dateStyle:\'medium\'}}</em> </span> </template> </span> <span class="row-actions" if.bind="account.subscription.period !== \'monthly\' || account.subscription.state !== \'active\'"> <span class="links"> <button class="link" if.bind="account.subscription.state === \'canceled\'" click.trigger="resumeSubscription()" disabled.bind="busy"> ${\'billing_settings.resume\' | i18n} </button> <button class="link" if.bind="account.subscription.state === \'active\'" click.trigger="openPlanDetailsDialog()"> ${\'billing_settings.view_plan_details\' | i18n} </button> </span> </span> </template> </div> <div if.bind="account.subscription.period === \'monthly\' && account.subscription.state === \'active\'" class="main-actions"> <button class="link" click.trigger="openPlanDetailsDialog()"> ${\'billing_settings.view_plan_details\' | i18n} </button> <span class="divider"></span> <a class="button accent small" href="#" click.delegate="openSwitchToAnnualDialog()">${\'billing_settings.switch_to_yearly_payment\' | i18n}</a> <span class="promo"> ${\'billing_settings.save_$x_or_more\' | i18n:{x: 25}} <i><inline-svg src="' +
        r +
        '"></inline-svg></i> </span> </div> <hr> <compose view="./payment-method.html"></compose> </section> <section if.bind="!account.subscription" class="layout"> <span> <h5 innerhtml.bind="\'billing_settings.upgrade_to_pro\' | i18n | markdown"></h5> <p class="info">${\'billing_settings.get_the_best_experience_with_pro\' | i18n}</p> <div class="main-actions"> <button class="button main" pro-cta="billing_settings_upgrade_button"><pro-cta-label no-trial-key="billing_settings.upgrade"></pro-cta-label></button> </div> </span> <img class="graphic" src="' +
        s()(a) +
        '"> </section> <section if.bind="!account.subscription && paymentMethod" class="filled ${loadingPaymentMethod ? \'loading\' : \'\'}"> <compose view="./payment-method.html"></compose> </section> </div> </template> ';
    },
    "settings/resources/elements/change-password.html": (i, t, n) => {
      n.r(t), n.d(t, { default: () => r });
      var e = n(27091),
        s = n.n(e),
        o = new URL(n(47254), n.b),
        a = s()(o);
      const r =
        '<template> <section class="change-password"> <section class="settings-form"> <div class="form-row"> <input type="password" class="settings-form-input" value.bind="currentPassword" disabled.bind="!passwordSet" placeholder="${!passwordSet ? \'change_password.no_password_set\' : null | i18n}"> <label>${\'change_password.current_password\' | i18n}</label> </div> <div class="form-row"> <div class="input-wrapper"> <input class="${newPasswordOk ? \'with-icon\' : \'\'}" type="password" value.bind="newPassword"> <i if.bind="newPasswordOk" class="ok"><inline-svg src="' +
        a +
        '"></inline-svg></i> </div> <label>${passwordSet ? \'change_password.new_password\' : \'change_password.create_password\' | i18n}</label> </div> <div class="form-row"> <div class="input-wrapper"> <input class="${newPasswordConfirmOk ? \'with-icon\' : \'\'}" type="password" value.bind="newPasswordConfirm"> <i if.bind="newPasswordConfirmOk" class="ok"><inline-svg src="' +
        a +
        '"></inline-svg></i> </div> <label>${passwordSet ? \'change_password.new_password_again\' : \'change_password.password_again\' | i18n}</label> </div> <button disabled.bind="!canSave" class="settings-form-submit-button" click.delegate="save()">${\'change_password.save\' | i18n}</button> </section> </section> </template> ';
    },
    "settings/resources/elements/billing-settings": (i, t, n) => {
      n.r(t), n.d(t, { BillingSettings: () => y });
      var e = n(70655),
        s = n("aurelia-event-aggregator"),
        o = n("aurelia-framework"),
        a = n(45437),
        r = n(69157),
        l = n(23739),
        c = n(68611),
        g = n(56372),
        d = n(55586),
        b = n(13915),
        p = n("dialogs/plan-details-dialog"),
        h = n("dialogs/webview-dialog"),
        u = n(29242),
        m = n("shared/dialogs/basic-dialog"),
        v = n(35969),
        f = n(93082),
        w = n(66302),
        x = n(27170);
      let y = class {
        #i;
        #t;
        #n;
        #e;
        #s;
        #o;
        #a;
        #r;
        #l;
        #c;
        #g;
        #d;
        constructor(i, t, n, e, s, o, a, r, l, c, g) {
          (this.initialized = !1),
            (this.busy = !1),
            (this.#t = i),
            (this.#n = t),
            (this.#e = n),
            (this.#s = e),
            (this.#o = s),
            (this.#a = o),
            (this.#r = a),
            (this.#l = r),
            (this.#c = l),
            (this.#g = c),
            (this.#d = g);
        }
        attached() {
          this.#b().catch(w.K), (this.#i = this.#l.onSuccess(() => this.#p()));
        }
        detached() {
          this.#i.dispose();
        }
        async #b() {
          await Promise.all([this.#c.refreshAccount(), this.#p()]),
            (this.initialized = !0);
        }
        async #p() {
          this.loadingPaymentMethod = !0;
          try {
            const i = await this.#t.getPaymentMethods();
            this.paymentMethod = i?.methods.find((i) => i.primary);
          } catch {
            this.paymentMethod = null;
          }
          this.loadingPaymentMethod = !1;
        }
        resumeSubscription() {
          return this.#h(async () => {
            if (
              !this.paymentMethod &&
              (await this.changePaymentMethod(
                "billing_settings_resume_subscription_button"
              ),
              !this.paymentMethod)
            )
              return !1;
            const i = await this.#t.resumeSubscription();
            return i.subscription && this.#a.publish(new u.mU()), i;
          });
        }
        async #h(i) {
          if (!this.busy) {
            this.busy = !0;
            try {
              const t = await i();
              t && (await this.#n.dispatch(x.qg, t));
            } finally {
              this.busy = !1;
            }
          }
        }
        async changePaymentMethod(i) {
          await this.#o.open(i), await this.#p();
        }
        async deleteBillingInfo() {
          this.account.subscription &&
            this.account.subscription.nextInvoice &&
            this.#e.ok(
              v.oc.literal(
                this.#s.getValue(
                  "billing_settings.pro_subscription_end_on_$date_dialog",
                  {
                    date: this.#s.formatDateTime(
                      this.account.subscription.nextInvoice.date,
                      { dateStyle: "medium" }
                    ),
                  }
                )
              )
            ),
            this.#t.removePaymentMethod(this.paymentMethod.id),
            (this.paymentMethod = null);
        }
        get trialDaysLeft() {
          if (
            this.account.subscription &&
            this.account.subscription.trialEndsAt
          )
            return (
              (0, r.Z)(
                Date.now(),
                new Date(this.account.subscription.trialEndsAt)
              ) + 1
            );
        }
        get nextInvoiceAmount() {
          return this.#u(this.account?.subscription?.nextInvoice);
        }
        get pastDueInvoiceAmount() {
          return this.#u(this.account?.subscription?.pastDueInvoice);
        }
        #u(i) {
          if (!i) return 0;
          const t = parseFloat(i.amount);
          return (0, v.gH)(i.currency) ? t : 100 * t;
        }
        async openPlanDetailsDialog() {
          await this.#r.open(), this.#p();
        }
        async openGiftDialog() {
          await this.#g.open({ trigger: "billing_settings" }), this.#p();
        }
        async openSwitchToAnnualDialog() {
          (
            await this.#d.open({
              route: "switch-to-annual",
              params: { trigger: "billing_settings" },
            })
          ).wasCancelled || (await this.#c.refreshAccount());
        }
      };
      (0, e.gn)(
        [
          (0, o.computedFrom)(
            "account.subscription.trialing",
            "account.subscription.trialEndsAt"
          ),
          (0, e.w6)("design:type", Number),
          (0, e.w6)("design:paramtypes", []),
        ],
        y.prototype,
        "trialDaysLeft",
        null
      ),
        (0, e.gn)(
          [
            (0, o.computedFrom)("account.subscription.nextInvoice"),
            (0, e.w6)("design:type", Number),
            (0, e.w6)("design:paramtypes", []),
          ],
          y.prototype,
          "nextInvoiceAmount",
          null
        ),
        (0, e.gn)(
          [
            (0, o.computedFrom)("account.subscription.pastDueInvoice"),
            (0, e.w6)("design:type", Number),
            (0, e.w6)("design:paramtypes", []),
          ],
          y.prototype,
          "pastDueInvoiceAmount",
          null
        ),
        (y = (0, e.gn)(
          [
            (0, f.b)({
              selectors: {
                token: (0, f.g)("token"),
                account: (0, f.g)("account"),
              },
            }),
            (0, o.autoinject)(),
            (0, e.w6)("design:paramtypes", [
              l.K,
              a.yh,
              m.BasicDialogService,
              v.oc,
              d.V,
              s.h,
              p.PlanDetailsDialogService,
              g.d,
              c.v,
              b.G,
              h.WebviewDialogService,
            ]),
          ],
          y
        ));
    },
    "settings/resources/elements/change-password": (i, t, n) => {
      n.r(t), n.d(t, { ChangePassword: () => d });
      var e = n(70655),
        s = n("aurelia-framework"),
        o = n(45437),
        a = n(23739),
        r = n(26478),
        l = n(93082),
        c = n(51722),
        g = n(27170);
      let d = class {
        #t;
        #n;
        #m;
        constructor(i, t, n) {
          (this.saving = !1), (this.#t = i), (this.#n = t), (this.#m = n);
        }
        bind() {
          this.accountFlagsChanged();
        }
        accountFlagsChanged() {
          this.passwordSet = (0, c.yE)(this.accountFlags, 8);
        }
        async save() {
          this.saving = !0;
          try {
            const i = await this.#t.changeAccountPassword(
              this.newPassword,
              this.currentPassword || null
            );
            await this.#n.dispatch(g.qg, i),
              this.#m.toast({
                content: "change_password.success_toast",
                type: "ok",
              }),
              (this.currentPassword = null),
              (this.newPassword = null),
              (this.newPasswordConfirm = null);
          } catch {
            this.#m.toast({
              content: "change_password.problem_toast",
              type: "alert",
            });
          }
          this.saving = !1;
        }
        get newPasswordOk() {
          return this.newPassword && this.newPassword.length >= 7;
        }
        get newPasswordConfirmOk() {
          return (
            this.newPasswordOk && this.newPassword === this.newPasswordConfirm
          );
        }
        get canSave() {
          return (
            (!this.passwordSet || this.currentPassword) &&
            this.newPasswordOk &&
            this.newPasswordConfirmOk &&
            !this.saving
          );
        }
      };
      (0, e.gn)(
        [
          (0, s.computedFrom)("newPassword"),
          (0, e.w6)("design:type", Boolean),
          (0, e.w6)("design:paramtypes", []),
        ],
        d.prototype,
        "newPasswordOk",
        null
      ),
        (0, e.gn)(
          [
            (0, s.computedFrom)("newPassword", "newPasswordConfirm"),
            (0, e.w6)("design:type", Boolean),
            (0, e.w6)("design:paramtypes", []),
          ],
          d.prototype,
          "newPasswordConfirmOk",
          null
        ),
        (0, e.gn)(
          [
            (0, s.computedFrom)(
              "passwordSet",
              "currentPassword",
              "newPasswordOk",
              "newPasswordConfirmOk",
              "saving"
            ),
            (0, e.w6)("design:type", Boolean),
            (0, e.w6)("design:paramtypes", []),
          ],
          d.prototype,
          "canSave",
          null
        ),
        (d = (0, e.gn)(
          [
            (0, l.b)({
              selectors: { accountFlags: (0, l.g)("account", "flags") },
            }),
            (0, s.autoinject)(),
            (0, e.w6)("design:paramtypes", [a.K, o.yh, r.x]),
          ],
          d
        ));
    },
  },
]);

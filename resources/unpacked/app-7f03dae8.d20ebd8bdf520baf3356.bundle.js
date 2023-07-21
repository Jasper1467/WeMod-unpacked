"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [7230],
  {
    "shared/cheats/resources/elements/number-input.scss": (e, t, i) => {
      i.r(t), i.d(t, { default: () => a });
      var n = i(8081),
        s = i.n(n),
        r = i(23645),
        o = i.n(r)()(s());
      o.push([
        e.id,
        'number-input{position:relative;display:flex;align-content:center}number-input.disabled{position:relative;z-index:0}number-input.disabled:before{content:"";position:absolute;left:0;top:0;right:0;bottom:0;z-index:999;opacity:0;cursor:not-allowed}number-input.disabled *{pointer-events:none}number-input input{font-weight:800;font-size:24px;line-height:32px;font-weight:800;cursor:text;display:flex;flex:1;line-height:28px;border:0;background:rgba(0,0,0,0);padding:0 5px;color:#fff;text-align:center;outline:none;min-width:0;width:100%}number-input input::-webkit-inner-spin-button{-webkit-appearance:none;opacity:0}number-input button.update{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-weight:700;font-size:15px;line-height:24px;font-weight:700;--cta--padding: 12px;--cta--height: 28px;--cta--hover--border-width: 1px;min-width:var(--cta--height);width:var(--cta--height);border-radius:50%;justify-content:center;align-items:center;background-color:rgba(255,255,255,.6);box-shadow:none;color:var(--theme--background);flex:0;background-repeat:no-repeat;background-position:center}number-input button.update,number-input button.update *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) number-input button.update{border:1px solid #fff}}number-input button.update>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}number-input button.update>*:first-child{padding-left:0}number-input button.update>*:last-child{padding-right:0}number-input button.update svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) number-input button.update svg *{fill:CanvasText}}number-input button.update svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) number-input button.update svg{opacity:1}}number-input button.update img{height:50%}number-input button.update:disabled{opacity:.3}number-input button.update:disabled,number-input button.update:disabled *{cursor:default;pointer-events:none}@media(hover: hover){number-input button.update:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}number-input button.update:not(:disabled):hover svg{opacity:1}}number-input button.update:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}number-input button.update,number-input button.update>*{padding:0 !important}number-input button.update svg{opacity:1}number-input button.update svg *{--cta__icon--color: var(--theme--background)}@media(hover: hover){number-input button.update:not(:disabled):hover{background-color:var(--theme--highlight)}}number-input button.update svg{height:auto}number-input button.set{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-size:13px;line-height:20px;font-weight:700;--cta--padding: 11px;--cta--height: 26px;--cta--hover--border-width: 1px;flex:0;margin-left:10px}number-input button.set,number-input button.set *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) number-input button.set{border:1px solid #fff}}number-input button.set>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}number-input button.set>*:first-child{padding-left:0}number-input button.set>*:last-child{padding-right:0}number-input button.set svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) number-input button.set svg *{fill:CanvasText}}number-input button.set svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) number-input button.set svg{opacity:1}}number-input button.set img{height:50%}number-input button.set:disabled{opacity:.3}number-input button.set:disabled,number-input button.set:disabled *{cursor:default;pointer-events:none}@media(hover: hover){number-input button.set:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}number-input button.set:not(:disabled):hover svg{opacity:1}}number-input button.set:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}',
        "",
      ]);
      const a = o;
    },
    "shared/cheats/resources/elements/selection-input.scss": (e, t, i) => {
      i.r(t), i.d(t, { default: () => a });
      var n = i(8081),
        s = i.n(n),
        r = i(23645),
        o = i.n(r)()(s());
      o.push([
        e.id,
        "selection-input{display:flex;align-items:center}selection-input button.set{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-size:13px;line-height:20px;font-weight:700;--cta--padding: 11px;--cta--height: 26px;--cta--hover--border-width: 1px;flex:0;margin-left:10px}selection-input button.set,selection-input button.set *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) selection-input button.set{border:1px solid #fff}}selection-input button.set>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}selection-input button.set>*:first-child{padding-left:0}selection-input button.set>*:last-child{padding-right:0}selection-input button.set svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) selection-input button.set svg *{fill:CanvasText}}selection-input button.set svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) selection-input button.set svg{opacity:1}}selection-input button.set img{height:50%}selection-input button.set:disabled{opacity:.3}selection-input button.set:disabled,selection-input button.set:disabled *{cursor:default;pointer-events:none}@media(hover: hover){selection-input button.set:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}selection-input button.set:not(:disabled):hover svg{opacity:1}}selection-input button.set:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}",
        "",
      ]);
      const a = o;
    },
    "shared/dialogs/basic-dialog.scss": (e, t, i) => {
      i.r(t), i.d(t, { default: () => a });
      var n = i(8081),
        s = i.n(n),
        r = i(23645),
        o = i.n(r)()(s());
      o.push([
        e.id,
        "ux-dialog.basic-dialog{width:auto;min-width:300px;max-width:550px}ux-dialog.basic-dialog.size-narrow{max-width:300px}ux-dialog.basic-dialog ux-dialog-body{padding-bottom:20px}ux-dialog.basic-dialog ux-dialog-body a{color:var(--theme--highlight);transition:filter .15s;cursor:pointer}ux-dialog.basic-dialog ux-dialog-body a:hover{filter:brightness(1.2)}ux-dialog.basic-dialog ux-dialog-body img{margin-top:8px;max-width:100%;border-radius:5px}ux-dialog.basic-dialog ux-dialog-footer{padding:0}",
        "",
      ]);
      const a = o;
    },
    "shared/cheats/resources/elements/number-input.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => a });
      var n = i(27091),
        s = i.n(n),
        r = new URL(i(85130), i.b),
        o = new URL(i(83839), i.b);
      const a =
        '<template class="${disabled ? \'disabled\' : \'\'}"> <require from="./number-input.scss"></require> <button click.delegate="subtract()" class="update" disabled.bind="disabled || !canDecrease" haptic-touch> <inline-svg src="' +
        s()(r) +
        '"></inline-svg> </button> <input type="number" value.bind="internalValue | i18nNativeNumber:{useGrouping: false}" disabled.bind="disabled" ref="inputEl"> <button click.delegate="add()" class="update" disabled.bind="disabled || !canIncrease" haptic-touch> <inline-svg src="' +
        s()(o) +
        '"></inline-svg> </button> <button if.bind="button" class="set" click.delegate="setValue()" disabled.bind="disabled" haptic-touch> ${button | i18n} </button> </template> ';
    },
    "shared/cheats/resources/elements/selection-input.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => n });
      const n =
        '<template class="${opened ? \'opened\' : \'\'} ${disabled ? \'disabled\' : \'\'}"> <require from="../../../resources/elements/selection-input.scss"></require> <require from="./selection-input.scss"></require> <div class="wrapper"> <div click.delegate="open()" class="selection-value" haptic-touch tabindex.bind="disabled ? -1 : 0">${options[value] || \'---\'}</div> <ul class="selection-options"> <li repeat.for="option of options" click.delegate="setIndex($index)" class="${$index == value ? \'selected\' : \'\'}" haptic-touch tabindex.bind="disabled || !opened ? -1 : 0">${option}</li> </ul> </div> <button if.bind="button" class="set" click.delegate="setValue()"> ${button | i18n} </button> </template> ';
    },
    "shared/dialogs/basic-dialog.html": (e, t, i) => {
      i.r(t), i.d(t, { default: () => n });
      const n =
        '<template> <require from="../resources/elements/close-button"></require> <require from="./basic-dialog.scss"></require> <ux-dialog class="basic-dialog ${config.className} align-${config.align} size-${config.size || \'full\'}"> <ux-dialog-header> <close-button if.bind="!controller.settings.lock" click.trigger="controller.cancel()" tabindex="0"></close-button> <header if.bind="config.headerLabel"> <span>${config.headerLabel | i18n}</span> </header> </ux-dialog-header> <ux-dialog-body> <div><p innerhtml.bind="config.message | i18n:config.messageParams | markdown"></p></div> </ux-dialog-body> <ux-dialog-footer> <button repeat.for="option of config.options" class="${config.options.length === 1 || option.style === \'primary\' ? \'\' : \'secondary\'}" click.delegate="close(option)"> <img if.bind="option.icon" src.bind="option.icon"> <span>${option.label | i18n}</span> </button> </ux-dialog-footer> </ux-dialog> </template> ';
    },
    38994: (e, t, i) => {
      i.d(t, { r: () => r });
      var n = i(52956),
        s = i(98627);
      class r {
        #e;
        #t;
        constructor(e, t) {
          (this.#e = new n.eN().configure((t) => t.withBaseUrl(e))),
            (this.#t = btoa(JSON.stringify(t)));
        }
        get baseUrl() {
          return this.#e.baseUrl;
        }
        addInterceptor(e) {
          this.#e.interceptors.push(e);
        }
        get(e, t) {
          return this.fetch({ method: "GET", endpoint: e, query: t });
        }
        post(e, t) {
          return this.fetch({ method: "POST", endpoint: e, body: t });
        }
        put(e, t) {
          return this.fetch({ method: "PUT", endpoint: e, body: t });
        }
        patch(e, t) {
          return this.fetch({ method: "PATCH", endpoint: e, body: t });
        }
        delete(e) {
          return this.fetch({ method: "DELETE", endpoint: e });
        }
        async fetch(e) {
          const t = {
              Accept: "application/json",
              "X-Super-Properties": this.#t,
            },
            i = { method: e.method, headers: t };
          void 0 !== e.body &&
            ((i.headers["Content-Type"] = "application/json"),
            (i.body = JSON.stringify(e.body)));
          let n = e.endpoint;
          "object" == typeof e.query &&
            null !== e.query &&
            (n += `?${(0, s.Ie)(e.query)}`);
          const r = await this.#e.fetch(n, i);
          return await this.#i(r);
        }
        async #i(e) {
          return "application/json" === e.headers.get("Content-Type")
            ? await e.json()
            : await e.text();
        }
      }
    },
    94472: (e, t, i) => {
      i.d(t, {
        MS: () => a,
        VL: () => o,
        jK: () => l,
        pl: () => r,
        zF: () => s,
      });
      const n = new Set([502, 503, 504, 520]);
      function s(e) {
        return e instanceof o && n.has(e.response.status);
      }
      class r {
        response(e) {
          return e.status >= 400
            ? (async function (e) {
                throw (
                  (await a.fromResponse(e)) ??
                  new o(`API request failed with status ${e.status}.`, e)
                );
              })(e)
            : e;
        }
      }
      class o extends Error {
        constructor(e, t) {
          super(e),
            Object.setPrototypeOf(this, o.prototype),
            (this.response = t);
        }
      }
      class a extends o {
        static async fromResponse(e) {
          const t = await e.json().catch(() => null);
          return (function (e) {
            return (
              null !== e &&
              "object" == typeof e &&
              "number" == typeof e.status &&
              "string" == typeof e.code &&
              "string" == typeof e.message &&
              ["object", "undefined"].includes(typeof e.data)
            );
          })(t)
            ? new a(e, t)
            : null;
        }
        constructor(e, t) {
          super(t.message, e),
            Object.setPrototypeOf(this, a.prototype),
            (this.status = t.status),
            (this.code = t.code),
            (this.data = t.data);
        }
        get isMaintenanceError() {
          return 503 === this.status;
        }
      }
      var l;
      !(function (e) {
        (e.BadRequest = "bad-request"),
          (e.Unauthorized = "unauthorized"),
          (e.AccessDenied = "access-denied"),
          (e.NotFound = "not-found"),
          (e.MethodNotAllowed = "method-not-allowed"),
          (e.NotAcceptable = "not-acceptable"),
          (e.Conflict = "conflict"),
          (e.Gone = "gone"),
          (e.UnsupportedMediaType = "unsupported-media-type"),
          (e.UnprocessableEntity = "unprocessable-entity"),
          (e.ResourceLocked = "resource-locked"),
          (e.RateLimited = "rate-limited"),
          (e.InternalError = "internal-error"),
          (e.ServiceUnavailable = "service-unavailable"),
          (e.ValidationError = "validation-error"),
          (e.EmailVerificationRequired = "email-verification-required"),
          (e.PaymentDeclined = "payment-declined"),
          (e.UserAlreadySubscribed = "user-already-subscribed"),
          (e.MaxGamesFollowed = "max-games-followed");
      })(l || (l = {}));
    },
    26716: (e, t, i) => {
      i.d(t, { Z: () => r });
      var n = i(52956),
        s = i(98627);
      class r {
        #e;
        #n;
        constructor(e, t) {
          (this.#e = new n.eN().configure((t) => {
            t.withBaseUrl(e);
          })),
            (this.#n = t);
        }
        async revokeAccessToken(e) {
          await this.#e.fetch("/auth/token", {
            method: "DELETE",
            headers: { Authorization: `Bearer ${e}` },
          });
        }
        async requestAccessToken(e) {
          const t = await this.#e.fetch("/auth/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: (0, s.Ie)({ ...e, client_id: this.#n }),
          });
          if (t.status >= 300) throw t;
          const i = await t.json();
          if ("bearer" !== i.token_type.toLocaleLowerCase())
            throw new Error(`Expected bearer token type, got ${i.token_type}.`);
          return {
            accessToken: i.access_token,
            refreshToken: i.refresh_token,
            userId: i.user_id,
            expiresAt: Math.floor(Date.now() / 1e3) + i.expires_in,
            clientParams: i.client_params,
          };
        }
      }
    },
    73876: (e, t, i) => {
      i.d(t, { y: () => o });
      var n = i(70655),
        s = i("aurelia-framework"),
        r = i(26716);
      let o = class {
        #s;
        #r;
        #o;
        #a;
        #l;
        #c;
        constructor(e) {
          (this.#r = !1), (this.#o = null), (this.#a = null), (this.#s = e);
        }
        setTokenRefreshedHandler(e) {
          this.#l = e;
        }
        setDeauthorizedHandler(e) {
          this.#c = e;
        }
        setAccessTokenResponse(e) {
          "object" == typeof e && (this.#a = e);
        }
        async forceRefreshAccessToken() {
          (this.#r = !0), await this.#d();
        }
        async request(e) {
          const t = await this.#d();
          return (
            null !== t &&
              e.headers.set("Authorization", `Bearer ${t.accessToken}`),
            e
          );
        }
        async responseError(e, t, i) {
          if (
            null !== this.#a &&
            "object" == typeof e &&
            null !== e &&
            401 === e.status
          ) {
            if (this.#a.refreshToken)
              return (this.#r = !0), await i.fetch(t.clone());
            await this.#u();
          }
          throw e;
        }
        async #d() {
          if (null === this.#a) return null;
          if (this.#o) await this.#o;
          else if (this.#r || this.#p(this.#a)) {
            this.#o = this.#h(this.#a);
            try {
              await this.#o;
            } finally {
              this.#o = null;
            }
          }
          return this.#a;
        }
        #p(e) {
          return 0 !== e.expiresAt && e.expiresAt < Date.now() / 1e3 + 150;
        }
        async #h(e) {
          if (e.refreshToken)
            try {
              (this.#a = await this.#s.requestAccessToken({
                grant_type: "refresh_token",
                refresh_token: e.refreshToken,
              })),
                (this.#r = !1),
                await this.#l(this.#a);
            } catch (e) {
              throw (
                ([400, 401, 403].includes(e.status) && (await this.#u()), e)
              );
            }
          else await this.#u();
        }
        #u() {
          return (this.#r = !1), (this.#a = null), this.#c();
        }
      };
      o = (0, n.gn)(
        [(0, s.autoinject)(), (0, n.w6)("design:paramtypes", [r.Z])],
        o
      );
    },
    2314: (e, t, i) => {
      i.d(t, { d: () => r, p: () => o });
      const n = (e) => "object" == typeof e && null !== e,
        s = [
          ["titles", n],
          ["games", n],
          ["creators", n],
          ["genres", n],
          ["platforms", n],
          ["maps", Array.isArray],
          ["queue", Array.isArray],
          ["stats", n],
          ["featured", Array.isArray],
          ["announcements", Array.isArray],
          ["polls", Array.isArray],
          ["releaseChannels", Array.isArray],
          ["projectIds", n],
          ["featuredGames", Array.isArray],
        ];
      function r(e) {
        return null === e || (n(e) && s.every((t) => t[1](e[t[0]])));
      }
      var o;
      !(function (e) {
        (e[(e.ReleaseQueued = 1)] = "ReleaseQueued"),
          (e[(e.UpdateQueued = 2)] = "UpdateQueued"),
          (e[(e.Active = 4)] = "Active"),
          (e[(e.Retired = 8)] = "Retired"),
          (e[(e.Unsupported = 16)] = "Unsupported"),
          (e[(e.Outdated = 32)] = "Outdated"),
          (e[(e.Free = 64)] = "Free"),
          (e[(e.AllowCheatSuggestions = 128)] = "AllowCheatSuggestions"),
          (e[(e.Queued = 3)] = "Queued"),
          (e[(e.Available = 12)] = "Available");
      })(o || (o = {}));
    },
    47164: (e, t, i) => {
      i.d(t, { p: () => s });
      var n = i("aurelia-event-aggregator");
      class s {
        #g;
        #b;
        #f;
        #m;
        constructor(e, t = {}) {
          (this.#g = new n.h()),
            (this.#b = new Set()),
            (this.#m = new Map()),
            (this.assignments = new Map()),
            (this.#f = e),
            (this.assignments = new Map(Object.entries(t)));
        }
        async trigger(e) {
          const t = this.assignments.get(e);
          if (void 0 !== t) return t;
          const i = await this.#f.post("/v3/experiment", { key: e });
          return this.#v({ [e]: i.variant }), i.variant;
        }
        setOverride(e, t) {
          this.#m.set(e, t), this.#v({ [e]: t });
        }
        clearOverride(e) {
          this.#m.delete(e);
        }
        queueTrigger(e) {
          this.#b.add(e);
        }
        onVariantChanged(e) {
          return this.#g.subscribe("variant", e);
        }
        createInterceptor() {
          return {
            request: (e) => (
              this.#b.size > 0 &&
                (e.headers.set(
                  "X-Trigger-Experiments",
                  btoa(JSON.stringify(Array.from(this.#b)))
                ),
                this.#b.clear()),
              e
            ),
            response: (e, t) => {
              const i = e.headers.get("X-Experiments");
              if (i) {
                let e = null;
                try {
                  const t = JSON.parse(atob(i));
                  "object" == typeof t && null !== t && (e = t);
                } catch {}
                e && this.#v(e);
              }
              return e;
            },
          };
        }
        setAllExperiments(e) {
          e = { ...e, ...Object.fromEntries(this.#m) };
          const t = new Set(Object.keys(e));
          for (const e of Array.from(this.assignments.keys()))
            t.has(e) ||
              (this.assignments.delete(e),
              this.#g.publish("variant", { existingKey: e, variant: null }));
          this.#v(e);
        }
        #v(e) {
          e = { ...e, ...Object.fromEntries(this.#m) };
          for (const [t, i] of Object.entries(e))
            (this.assignments.get(t) ?? null) !== i &&
              (this.assignments.set(t, i),
              this.#g.publish("variant", { key: t, variant: i }));
        }
      }
    },
    "shared/api/index": (e, t, i) => {
      i.r(t),
        i.d(t, {
          ApiError: () => s.MS,
          ApiErrorInterceptor: () => s.pl,
          AuthorizationInterceptor: () => o.y,
          ErrorCode: () => s.jK,
          ResponseError: () => s.VL,
          WeModApiClient: () => n.r,
          WeModAuthClient: () => r.Z,
          configure: () => c,
          isTemporaryServerError: () => s.zF,
        }),
        i("aurelia-framework");
      var n = i(38994),
        s = i(94472),
        r = i(26716),
        o = i(73876),
        a = i(47164),
        l = i("shared/api/value-converters");
      function c(e, t) {
        const i = new r.Z(t.baseUrl, t.clientId);
        e.container.registerInstance(r.Z, i);
        const c = new n.r(t.baseUrl, t.superProperties);
        e.container.registerInstance(n.r, c);
        const d = e.container.get(s.pl);
        c.addInterceptor(d);
        const u = new o.y(i);
        e.container.registerInstance(o.y, u),
          t.initialAccessTokenResponse &&
            u.setAccessTokenResponse(t.initialAccessTokenResponse),
          c.addInterceptor(u);
        const p = new a.p(c, t.activeExperiments);
        e.container.registerInstance(a.p, p),
          c.addInterceptor(p.createInterceptor()),
          e.container.registerInstance(
            l.CdnValueConverter,
            new l.CdnValueConverter(t.cdnUrl)
          ),
          e.globalResources(["./value-converters"]);
      }
    },
    36997: (e, t, i) => {
      i.d(t, { Yz: () => u, by: () => d });
      var n = i(70655),
        s = i(6778),
        r = i("aurelia-framework"),
        o = i(339),
        a = i(38994),
        l = i(94472);
      class c extends Error {
        constructor(e, t) {
          super(e),
            (this.innerError = t),
            Object.setPrototypeOf(this, c.prototype);
        }
      }
      function d(e) {
        return e instanceof c;
      }
      let u = class {
        #f;
        #g;
        #y;
        #w;
        constructor(e) {
          (this.#g = new o.yM()),
            (this.#f = e),
            (this.#y = new o.K4()
              .pushEventListener(window, "online", () => this.#x())
              .pushEventListener(window, "offline", () => this.#k())),
            e.addInterceptor({
              responseError: (e) => {
                if (e instanceof TypeError)
                  throw (
                    (this.#k(),
                    new c("Request failed due to a network error", e))
                  );
                throw (
                  (e instanceof l.MS && e.isMaintenanceError && this.#C(), e)
                );
              },
            }),
            (this.status = navigator.onLine ? "online" : "offline"),
            "online" !== this.status && this.#x();
        }
        onStatusChanged(e) {
          return this.#g.subscribe("_", e);
        }
        dispose() {
          this.#g.dispose(), this.#y.dispose();
        }
        #k() {
          "offline" !== this.status && (this.#E("offline"), this.#x());
        }
        #C() {
          "maintenance" !== this.status && (this.#E("maintenance"), this.#x());
        }
        async #x() {
          if ("online" !== this.status) {
            this.#w && (this.#w.dispose(), (this.#w = null));
            try {
              await this.#f.get("/v3/ping"), this.#E("online");
            } catch {
              this.#w = (0, o.rk)(() => this.#x(), 5e3);
            }
          }
        }
        #E(e) {
          e !== this.status &&
            ((this.status = e),
            (0, s.M_)("online-changed"),
            this.#g.publish("_", e));
        }
      };
      u = (0, n.gn)(
        [(0, r.autoinject)(), (0, n.w6)("design:paramtypes", [a.r])],
        u
      );
    },
    94692: (e, t, i) => {
      var n, s, r, o;
      i.d(t, { Ih: () => r, L0: () => s, Xe: () => o, zI: () => n }),
        (function (e) {
          (e[(e.PlayPressed = 0)] = "PlayPressed"),
            (e[(e.GameLaunched = 1)] = "GameLaunched"),
            (e[(e.GameFound = 2)] = "GameFound"),
            (e[(e.TrainerExecuted = 3)] = "TrainerExecuted"),
            (e[(e.TrainerInitialized = 4)] = "TrainerInitialized"),
            (e[(e.ValueChanged = 5)] = "ValueChanged"),
            (e[(e.LogMessage = 6)] = "LogMessage"),
            (e[(e.TrainerEnd = 7)] = "TrainerEnd"),
            (e[(e.TrainerInjecting = 8)] = "TrainerInjecting"),
            (e[(e.OpeningConnection = 9)] = "OpeningConnection");
        })(n || (n = {})),
        (function (e) {
          (e[(e.Other = 0)] = "Other"),
            (e[(e.MainMenu = 1)] = "MainMenu"),
            (e[(e.Loading = 2)] = "Loading"),
            (e[(e.InGamePlaying = 3)] = "InGamePlaying"),
            (e[(e.InGameMenu = 4)] = "InGameMenu");
        })(s || (s = {})),
        (function (e) {
          (e[(e.Other = 0)] = "Other"),
            (e[(e.GameCrash = 1)] = "GameCrash"),
            (e[(e.NoEffect = 2)] = "NoEffect"),
            (e[(e.NotAsExpected = 3)] = "NotAsExpected");
        })(r || (r = {})),
        (function (e) {
          (e[(e.Success = 0)] = "Success"), (e[(e.Failure = 1)] = "Failure");
        })(o || (o = {}));
    },
    "shared/api/value-converters": (e, t, i) => {
      i.r(t), i.d(t, { CdnValueConverter: () => r });
      var n = i(70655),
        s = i("aurelia-framework");
      let r = class {
        #T;
        constructor(e) {
          this.#T = e;
        }
        toView(e, t, i) {
          if (!e) return i || "";
          if (e.includes(":") || !e.startsWith("/")) return e;
          if (t) for (const i of Object.keys(t)) e = e.replace(`{${i}}`, t[i]);
          if (e.includes("{"))
            throw new Error(`Missing CDN parameter in "${e}".`);
          return this.#T + e;
        }
      };
      r = (0, n.gn)(
        [(0, s.autoinject)(), (0, n.w6)("design:paramtypes", [String])],
        r
      );
    },
    15524: (e, t, i) => {
      i.d(t, { h: () => n });
      class n {
        constructor(e, t) {
          (this.platform = e), (this.sku = t);
        }
        static parse(e) {
          const t = e.indexOf(":");
          return new n(e.substring(0, t), e.substring(t + 1));
        }
        toString() {
          return `${this.platform}:${this.sku}`;
        }
      }
    },
    "shared/cheats/resources/custom-attributes/collapse-category": (
      e,
      t,
      i
    ) => {
      i.r(t), i.d(t, { CollapseCategoryCustomAttribute: () => o });
      var n = i(70655),
        s = i("aurelia-framework"),
        r = i(339);
      let o = class {
        #A;
        #R;
        constructor(e) {
          this.#A = e;
        }
        attached() {
          this.#O(),
            (this.#R = (0, r.Q7)(window, "resize", this.#O.bind(this)));
        }
        detached() {
          this.#R.dispose(), (this.#R = null);
        }
        #O() {
          const e = this.#A.querySelector(".cheats-wrapper"),
            t = this.#A.querySelector(".category-header .content");
          this.#A.classList.remove("collapse"),
            t.offsetHeight > e.offsetHeight &&
              this.#A.classList.add("collapse");
        }
      };
      o = (0, n.gn)(
        [
          (0, s.inject)(Element),
          (0, s.noView)(),
          (0, n.w6)("design:paramtypes", [Element]),
        ],
        o
      );
    },
    "shared/cheats/resources/elements/number-input": (e, t, i) => {
      i.r(t), i.d(t, { NumberInput: () => r });
      var n = i(70655),
        s = i("aurelia-framework");
      class r {
        #I;
        attached() {
          this.#V(),
            (this.#I = new ResizeObserver(() => this.#V())),
            this.#I.observe(this.inputEl);
        }
        detached() {
          this.#I.disconnect(), (this.#I = null);
        }
        matchPrecision(e, t) {
          const i = e.toString(),
            n = i.indexOf(".");
          return parseFloat(t.toFixed(-1 === n ? 0 : i.length - n - 1));
        }
        get canDecrease() {
          return (
            void 0 === this.internalValue ||
            parseFloat(this.internalValue.toString()) - this.step >= this.min
          );
        }
        get canIncrease() {
          return (
            void 0 === this.internalValue ||
            parseFloat(this.internalValue.toString()) + this.step <= this.max
          );
        }
        add() {
          this.#S(+this.step);
        }
        subtract() {
          this.#S(-this.step);
        }
        #S(e) {
          let t = this.internalValue
            ? parseFloat(this.internalValue.toString())
            : 0;
          (t += e),
            (t = this.matchPrecision(this.step, t)),
            t < this.min && (t = this.min),
            t > this.max && (t = this.max),
            (this.internalValue = t);
        }
        setValue() {
          this.#z();
        }
        internalValueChanged() {
          this.button || this.internalValue === this.value || this.#z(),
            setTimeout(() => this.#V());
        }
        valueChanged(e) {
          "string" == typeof e && e.length > 0
            ? (e = parseFloat(e))
            : "number" != typeof e &&
              (e = Math.min(this.max, Math.max(0, this.min))),
            (this.internalValue = e);
        }
        #z() {
          (this.internalValue < this.min &&
            ((this.internalValue = this.min), !this.button)) ||
            (this.internalValue > this.max &&
              ((this.internalValue = this.max), !this.button)) ||
            (this.change
              ? this.change({ value: this.internalValue })
              : (this.value = this.internalValue));
        }
        #V() {
          if (this.inputEl)
            for (
              this.inputEl.style.removeProperty("font-size");
              this.inputEl.scrollWidth > this.inputEl.clientWidth;

            ) {
              const e = parseInt(
                window.getComputedStyle(this.inputEl).fontSize,
                10
              );
              if (12 === e) break;
              this.inputEl.style.fontSize = e - 1 + "px";
            }
        }
      }
      (0, n.gn)(
        [s.bindable, (0, n.w6)("design:type", Number)],
        r.prototype,
        "value",
        void 0
      ),
        (0, n.gn)(
          [s.bindable, (0, n.w6)("design:type", Number)],
          r.prototype,
          "min",
          void 0
        ),
        (0, n.gn)(
          [s.bindable, (0, n.w6)("design:type", Number)],
          r.prototype,
          "max",
          void 0
        ),
        (0, n.gn)(
          [s.bindable, (0, n.w6)("design:type", Number)],
          r.prototype,
          "step",
          void 0
        ),
        (0, n.gn)(
          [s.bindable, (0, n.w6)("design:type", Boolean)],
          r.prototype,
          "disabled",
          void 0
        ),
        (0, n.gn)(
          [s.bindable, (0, n.w6)("design:type", Boolean)],
          r.prototype,
          "button",
          void 0
        ),
        (0, n.gn)(
          [s.bindable, (0, n.w6)("design:type", Function)],
          r.prototype,
          "change",
          void 0
        ),
        (0, n.gn)(
          [s.observable, (0, n.w6)("design:type", Number)],
          r.prototype,
          "internalValue",
          void 0
        ),
        (0, n.gn)(
          [
            (0, s.computedFrom)("internalValue", "step", "min"),
            (0, n.w6)("design:type", Boolean),
            (0, n.w6)("design:paramtypes", []),
          ],
          r.prototype,
          "canDecrease",
          null
        ),
        (0, n.gn)(
          [
            (0, s.computedFrom)("internalValue", "step", "max"),
            (0, n.w6)("design:type", Boolean),
            (0, n.w6)("design:paramtypes", []),
          ],
          r.prototype,
          "canIncrease",
          null
        );
    },
    "shared/cheats/resources/elements/selection-input": (e, t, i) => {
      i.r(t), i.d(t, { SelectionInput: () => r });
      var n = i(70655),
        s = i("aurelia-framework");
      let r = class {
        #A;
        constructor(e) {
          (this.opened = !1),
            (this.#A = e),
            (this.closeIfClickOutside = this.closeIfClickOutside.bind(this));
        }
        open() {
          (this.opened = !0),
            document.addEventListener("click", this.closeIfClickOutside);
        }
        close() {
          (this.opened = !1),
            document.removeEventListener("click", this.closeIfClickOutside);
        }
        closeIfClickOutside(e) {
          this.#A.contains(e.target) || this.close();
        }
        setIndex(e) {
          this.options && ((this.internalValue = e), (this.opened = !1));
        }
        detached() {
          this.close();
        }
        setValue() {
          this.#z();
        }
        internalValueChanged() {
          this.button || this.internalValue === this.value || this.#z();
        }
        valueChanged(e) {
          this.internalValue = e;
        }
        #z() {
          this.change
            ? this.change({ value: this.internalValue })
            : (this.value = this.internalValue);
        }
      };
      (0, n.gn)(
        [s.bindable, (0, n.w6)("design:type", Number)],
        r.prototype,
        "value",
        void 0
      ),
        (0, n.gn)(
          [s.bindable, (0, n.w6)("design:type", Array)],
          r.prototype,
          "options",
          void 0
        ),
        (0, n.gn)(
          [s.bindable, (0, n.w6)("design:type", Boolean)],
          r.prototype,
          "disabled",
          void 0
        ),
        (0, n.gn)(
          [s.bindable, (0, n.w6)("design:type", Boolean)],
          r.prototype,
          "button",
          void 0
        ),
        (0, n.gn)(
          [s.bindable, (0, n.w6)("design:type", Function)],
          r.prototype,
          "change",
          void 0
        ),
        (0, n.gn)(
          [s.observable, (0, n.w6)("design:type", Number)],
          r.prototype,
          "internalValue",
          void 0
        ),
        (r = (0, n.gn)(
          [
            (0, s.inject)(Element),
            (0, n.w6)("design:paramtypes", [HTMLElement]),
          ],
          r
        ));
    },
    "shared/cheats/resources/value-converters/group-cheats": (e, t, i) => {
      i.r(t), i.d(t, { GroupCheatsValueConverter: () => o });
      var n = i(70655),
        s = i("aurelia-framework"),
        r = i(52726);
      let o = class {
        #q;
        constructor(e) {
          this.#q = e;
        }
        toView(e, t) {
          const i = this.#q.toView(e, "category");
          return 1 === i.length && (i[0][t] = "cheats"), i;
        }
      };
      o = (0, n.gn)(
        [(0, s.autoinject)(), (0, n.w6)("design:paramtypes", [r.l])],
        o
      );
    },
    "shared/cheats/resources/value-converters/important-genres": (e, t, i) => {
      i.r(t), i.d(t, { ImportantGenresValueConverter: () => s });
      const n = [
        "puzzle",
        "racing",
        "fighting",
        "rpg",
        "simulation",
        "survival",
        "platformer",
        "sports",
        "fps",
        "horror",
        "indie",
        "open-world",
        "open_world",
        "casual",
        "strategy",
        "action",
        "adventure",
        "shooter",
      ].reverse();
      class s {
        toView(e, t = -1) {
          return e
            .slice(0)
            .sort((e, t) => n.indexOf(t) - n.indexOf(e))
            .slice(0, -1 === t ? e.length : t);
        }
      }
    },
    "shared/dialogs/basic-dialog": (e, t, i) => {
      i.r(t),
        i.d(t, {
          BasicDialog: () => a,
          BasicDialogService: () => c,
          DialogResult: () => l,
        });
      var n = i(70655),
        s = i("aurelia-dialog"),
        r = i("aurelia-framework"),
        o = i(35969);
      let a = class {
        constructor(e) {
          this.controller = e;
        }
        async activate(e) {
          (this.config = e), (this.controller.settings.lock = !e.cancelable);
        }
        close(e) {
          this.controller.ok(e.label.toString());
        }
      };
      var l;
      (a = (0, n.gn)(
        [
          (0, r.autoinject)(),
          (0, n.w6)("design:paramtypes", [s.DialogController]),
        ],
        a
      )),
        (function (e) {
          (e[(e.OK = 0)] = "OK"),
            (e[(e.Yes = 1)] = "Yes"),
            (e[(e.No = 2)] = "No"),
            (e[(e.Cancel = 3)] = "Cancel"),
            (e[(e.Help = 4)] = "Help");
        })(l || (l = {}));
      let c = class {
        #j;
        constructor(e) {
          this.#j = e;
        }
        show(e) {
          return this.open(e).whenClosed((e) =>
            e.wasCancelled ? null : e.output
          );
        }
        open(e) {
          return this.#j.open({
            viewModel: "shared/dialogs/basic-dialog",
            host: document.querySelector("#dialogs"),
            startingZIndex: 1001,
            model: {
              ...e,
              options: e.options.map((e) =>
                "string" == typeof e || e instanceof o.nv ? { label: e } : e
              ),
              align: e.align || "center",
              cancelable: e.cancelable ?? !0,
            },
          });
        }
        async ok(e, t) {
          return (
            await this.show({
              message: e,
              messageParams: t,
              options: [{ label: "basic_dialog.ok" }],
            }),
            l.OK
          );
        }
        async yesNo(e, t, i) {
          return "basic_dialog.yes" ===
            (await this.show({
              size: "narrow",
              message: e,
              messageParams: t,
              options: i
                ? [
                    { label: "basic_dialog.yes" },
                    { label: "basic_dialog.no", style: "primary" },
                  ]
                : [
                    { label: "basic_dialog.no" },
                    { label: "basic_dialog.yes", style: "primary" },
                  ],
            }))
            ? l.Yes
            : l.No;
        }
        async help(e, t, i = []) {
          let n = [{ label: "basic_dialog.ok", style: "primary" }];
          t && n.push("basic_dialog.help"), (n = n.concat(i));
          const s = await this.show({ message: e, options: n });
          if ("basic_dialog.help" === s)
            return window.open(t, "_blank"), l.Help;
          if ("basic_dialog.ok" === s) return l.OK;
          for (const e of i)
            if ("string" == typeof e) {
              if (e === s) return e;
            } else if (e instanceof o.nv) {
              if (e.toString() === s) return s;
            } else if (e.label === s) return s;
          return l.Cancel;
        }
      };
      c = (0, n.gn)(
        [
          (0, r.autoinject)(),
          (0, n.w6)("design:paramtypes", [s.DialogService]),
        ],
        c
      );
    },
    14267: (e, t, i) => {
      i.d(t, { c: () => o });
      var n = i(70655),
        s = i("aurelia-dialog"),
        r = i("aurelia-framework");
      let o = class {
        #_;
        constructor(e) {
          this.#_ = e;
        }
        async open(e, t, i) {
          return await this.#_
            .open({
              viewModel: this.viewModelClass,
              host: document.querySelector("#dialogs"),
              model: e,
              lock: t,
              keyboard: !t,
              ignoreTransitions: i,
            })
            .whenClosed();
        }
      };
      o = (0, n.gn)(
        [
          (0, r.autoinject)(),
          (0, n.w6)("design:paramtypes", [s.DialogService]),
        ],
        o
      );
    },
    339: (e, t, i) => {
      i.d(t, {
        ie: () => h,
        wK: () => g,
        K4: () => u,
        yM: () => p,
        Q7: () => d,
        JD: () => o,
        UC: () => a,
        tI: () => c,
        rk: () => l,
        $L: () => r,
      });
      var n = i("aurelia-event-aggregator"),
        s = i(66302);
      const r = Object.freeze(o(s.K));
      function o(e) {
        return {
          dispose: () => {
            e && (e(), (e = void 0));
          },
        };
      }
      function a(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      function l(e, t) {
        const i = setTimeout(e, t);
        return o(() => clearTimeout(i));
      }
      function c(e, t) {
        const i = setInterval(e, t);
        return o(() => clearInterval(i));
      }
      function d(e, t, i, n) {
        return (
          e.addEventListener(t, i, n), o(() => e.removeEventListener(t, i, n))
        );
      }
      class u {
        #M;
        constructor(e = []) {
          this.#M = e;
        }
        get disposed() {
          return null === this.#M;
        }
        push(e) {
          return this.#M.push(e), this;
        }
        dispose() {
          if (null !== this.#M) {
            const e = this.#M;
            this.#M = null;
            for (let t = e.length - 1; t >= 0; t--) e[t].dispose();
          }
        }
        pushFunction(e) {
          return this.push(o(e));
        }
        pushEventListener(e, t, i, n) {
          return this.push(d(e, t, i, n));
        }
      }
      class p extends n.h {
        constructor() {
          super(...arguments), (this.#L = new u());
        }
        #L;
        subscribe(e, t) {
          if (!this.#L) return r;
          const i = super.subscribe(e, t);
          return this.#L.push(i), i;
        }
        subscribeOnce(e, t) {
          if (!this.#L) return r;
          const i = super.subscribeOnce(e, t);
          return this.#L.push(i), i;
        }
        dispose() {
          this.#L && (this.#L.dispose(), (this.#L = null));
        }
      }
      class h extends Error {
        constructor(e = "The operation was canceled.") {
          super(e), Object.setPrototypeOf(this, h.prototype);
        }
      }
      class g {
        constructor() {
          (this.#g = new p()), (this.#N = !1);
        }
        #g;
        #N;
        get canceled() {
          return this.#N;
        }
        cancel() {
          this.canceled || ((this.#N = !0), this.#g.publish("_"));
        }
        onCancel(e) {
          return this.#g.subscribeOnce("_", e);
        }
        dispose() {
          this.#g && (this.#g.dispose(), (this.#g = null));
        }
      }
    },
  },
]);

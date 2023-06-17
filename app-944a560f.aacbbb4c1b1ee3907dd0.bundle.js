"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [4871],
  {
    35969: (t, e, a) => {
      a.d(e, { gH: () => d, nv: () => c, oc: () => p });
      var n = a(6778),
        r = a(98099),
        i = a(339),
        s = a(38838),
        o = a(28475);
      const l = (0, r.jl)("i18n");
      class c {
        constructor(t) {
          this.value = t;
        }
        toString() {
          return this.value;
        }
        [Symbol.toStringTag]() {
          return this.value;
        }
      }
      class u {
        constructor(t, e) {
          (this.tag = t), (this.source = e);
        }
      }
      function m(t) {
        try {
          return new Intl.Locale(t);
        } catch {
          return null;
        }
      }
      const g = new Map([
        ["en", "English"],
        ["zh", "中文"],
        ["de", "Deutsch"],
        ["es", "español"],
        ["fr", "français"],
        ["pl", "polski"],
        ["pt", "português"],
        ["ko", "한국어"],
        ["ja", "日本語"],
        ["tr", "Türkçe"],
      ]);
      function h(t) {
        const e = t.toString();
        if (e.endsWith(`-${s.Mr}`)) return s.bR;
        const a = t.minimize().toString();
        let n;
        try {
          n = new Intl.DisplayNames(e, { type: "language" }).of(a);
        } catch {}
        return n ?? g[a] ?? g[e] ?? e;
      }
      class p {
        #t;
        #e;
        #a;
        #n;
        #r;
        #i;
        #s;
        #o;
        #l;
        #c;
        constructor(t, e, a, n) {
          (this.#t = new i.yM()),
            (this.#o = new Intl.Locale(t)),
            (this.#a = m(e) ?? this.#o),
            (this.locales = a.map((t) => {
              const e = new Intl.Locale(t);
              return { tag: e.toString(), name: h(e) };
            })),
            (this.#c = new Map(
              this.locales
                .slice(0)
                .reverse()
                .flatMap((t) =>
                  this.#u(new Intl.Locale(t.tag)).map((e) => [e, t])
                )
            )),
            (this.#l = n);
        }
        dispose() {
          this.#t.dispose(), (this.#t = null);
        }
        onLocaleChanged(t) {
          return this.#t.subscribe("changed", t);
        }
        setSystemLocale(t) {
          const e = m(t);
          null !== e &&
            ((this.#a = e),
            this.setLocale(this.#e?.toString() ?? null, "system_locale"));
        }
        async setLocale(t, e) {
          let a = null;
          null !== t &&
            (this.locales.find((e) => e.tag === t)
              ? (a = new Intl.Locale(t))
              : (t = null)),
            null === t &&
              ((a = null),
              (t = this.getClosestMatchingSupportedLocale(this.#a).tag));
          const r = this.#r?.toString(),
            i = new Intl.Locale(t);
          (this.#s = await this.#l.getTemplates(new Intl.Locale(i.baseName))),
            (this.#r = i),
            (this.#i = t.endsWith(`-${s.Mr}`)),
            (this.#e = a);
          const l = this.#n?.toString();
          (this.#n =
            (this.#a.region && m(`${this.#r.language}-${this.#a.region}`)) ||
            this.#r),
            this.#t.publish("changed", new u(this.#r.toString(), e)),
            r !== this.#r.toString() && (0, n.M_)(o.H),
            l !== this.#n.toString() && (0, n.M_)(o.i);
        }
        getClosestMatchingSupportedLocale(t = this.#a) {
          return (
            this.#u(t)
              .map((t) => this.#c.get(t))
              .find((t) => !!t) ?? this.#c.get(this.#o.toString())
          );
        }
        #u(t) {
          const e = t.maximize();
          return [
            t.toString(),
            `${e.language}-${e.script}-${e.region}`,
            `${e.language}-${e.region}`,
            `${e.language}-${e.script}`,
            e.language,
          ];
        }
        static literal(t) {
          return new c(t.toString());
        }
        isDefaultLanguage() {
          return this.#r.language === this.#o.language;
        }
        getSystemLocale() {
          return this.#a;
        }
        getPreferredLocale() {
          return this.#e;
        }
        getEffectiveLocale() {
          return this.#r;
        }
        getValue(t, e) {
          if (void 0 === t) return "";
          let a;
          if (t instanceof c) a = t.toString();
          else if (((a = this.#s.get(t)), void 0 === a))
            return l.error(`Missing translation for key ${t}`), t;
          let n = e ? this.#m(a, e) : a;
          return this.#i && (n = (0, s.yG)(n)), n;
        }
        #m(t, e) {
          return Object.entries(e).reduce(
            (t, [e, a]) =>
              t.replace(
                `$${e}`,
                "number" == typeof a ? this.formatNumber(a) : a
              ),
            t
          );
        }
        formatNativeNumber(t, e) {
          return this.#g(t, e, navigator.language);
        }
        formatNumber(t, e) {
          return this.#g(t, e, this.#n.toString());
        }
        #g(t, e, a) {
          return new Intl.NumberFormat(a, e).format(t);
        }
        parseNativeNumber(t, e) {
          return this.#h(t, e, navigator.language);
        }
        parseNumber(t, e) {
          return this.#h(t, e, this.#n.toString());
        }
        #h(t, e, a) {
          if (null == t) return NaN;
          const n = new Intl.NumberFormat(a, e).formatToParts(11111.11),
            r = n.find((t) => "group" === t.type)?.value,
            i = n.find((t) => "decimal" === t.type)?.value;
          return (
            (r || "." !== i) &&
              (t = t
                .split("")
                .map((t) => (t === r ? "" : t === i ? "." : t))
                .join("")),
            parseFloat(t)
          );
        }
        formatCurrency(t, e, a) {
          const n = d(e);
          return (
            n || (t /= 100),
            new Intl.NumberFormat(this.#n.toString(), {
              style: "currency",
              currency: e,
              minimumFractionDigits: n ? 0 : 2,
              maximumFractionDigits: n ? 0 : void 0,
              ...(a ?? {}),
            }).format(t)
          );
        }
        formatDateTime(t, e) {
          return (
            "string" == typeof t && (t = Date.parse(t)),
            new Intl.DateTimeFormat(this.#n.toString(), e).format(t)
          );
        }
        formatRelativeTime(t, e) {
          "string" == typeof t && (t = Date.parse(t)),
            t instanceof Date && (t = t.valueOf());
          const [a, n] = this.#p(Date.now() - t);
          return new Intl.RelativeTimeFormat(this.#n.toString(), e).format(
            n,
            a
          );
        }
        #p(t) {
          const e = t < 0 ? -1 : 1;
          t = Math.abs(t);
          for (const [a, n] of f) if (t >= n) return [a, e * Math.round(t / n)];
          return ["second", 0];
        }
      }
      const f = [
          ["year", 31536e6],
          ["quarter", 7884e6],
          ["month", 2628e6],
          ["week", 6048e5],
          ["day", 864e5],
          ["hour", 36e5],
          ["minute", 6e4],
          ["second", 1e3],
        ],
        L = new Set([
          "BIF",
          "CLP",
          "DJF",
          "GNF",
          "JPY",
          "KMF",
          "KRW",
          "MGA",
          "PYG",
          "RWF",
          "UGX",
          "VND",
          "VUV",
          "XAF",
          "XOF",
          "XPF",
        ]);
      function d(t) {
        return L.has(t);
      }
    },
    "shared/i18n/index": (t, e, a) => {
      a.r(e), a.d(e, { configure: () => r }), a("aurelia-framework");
      var n = a(35969);
      function r(t, e) {
        const a = new n.oc(
          e.defaultLocale,
          e.systemLocale,
          e.supportedLocales,
          e.templateRepository
        );
        t.container.registerInstance(n.oc, a),
          t.postTask(async () => {
            let t = null;
            if (e.initialLocale)
              if ("string" == typeof e.initialLocale) t = e.initialLocale;
              else
                try {
                  t = await e.initialLocale();
                } catch {}
            await a.setLocale(t ?? null);
          }),
          t.globalResources(["./resources/value-converters"]);
      }
    },
    38838: (t, e, a) => {
      a.d(e, { Mr: () => n, bR: () => r, yG: () => s });
      const n = "x-leet",
        r = "13375p34k",
        i = Object.freeze({
          a: "4",
          e: "3",
          g: "6",
          i: "1",
          o: "0",
          s: "5",
          t: "7",
        });
      function s(t) {
        let e,
          a = !1;
        return t
          .split("")
          .map((t) =>
            "(" === t && "]" === e
              ? ((a = !0), t)
              : a
              ? ((a = ")" !== t), t)
              : ((e = t), (t = t.toLowerCase()), i[t] ?? t)
          )
          .join("");
      }
    },
    "shared/i18n/resources/value-converters": (t, e, a) => {
      a.r(e),
        a.d(e, {
          I18nCurrencyValueConverter: () => h,
          I18nDateTimeNowValueConverter: () => L,
          I18nDateTimeValueConverter: () => f,
          I18nElaspedTimeValueConverter: () => d,
          I18nLiteralValueConverter: () => u,
          I18nNativeNumberValueConverter: () => g,
          I18nNumberValueConverter: () => m,
          I18nParamValueConverter: () => c,
          I18nRelativeTimeValueConverter: () => p,
          I18nValueConverter: () => l,
        });
      var n = a(70655),
        r = a("aurelia-framework"),
        i = a(99087),
        s = a(35969),
        o = a(28475);
      let l = class {
        #f;
        constructor(t) {
          (this.signals = [o.H, o.i]), (this.#f = t);
        }
        toView(t, e) {
          return null === t ? "" : this.#f.getValue(t, e);
        }
      };
      l = (0, n.gn)(
        [(0, r.autoinject)(), (0, n.w6)("design:paramtypes", [s.oc])],
        l
      );
      let c = class {
        #f;
        constructor(t) {
          (this.signals = [o.H, o.i]), (this.#f = t);
        }
        toView(t, e, a, n) {
          return (
            (n = Object.assign({ [a]: t }, n ?? {})), this.#f.getValue(e, n)
          );
        }
      };
      c = (0, n.gn)(
        [(0, r.autoinject)(), (0, n.w6)("design:paramtypes", [s.oc])],
        c
      );
      let u = class {
        toView(t) {
          return s.oc.literal(t);
        }
      };
      u = (0, n.gn)([(0, r.autoinject)()], u);
      let m = class {
        #f;
        constructor(t) {
          (this.signals = [o.i]), (this.#f = t);
        }
        toView(t, e) {
          return (
            "number" != typeof t && (t = parseFloat(t)),
            isNaN(t) ? "" : this.#f.formatNumber(t, e)
          );
        }
        fromView(t, e) {
          return "number" == typeof t ? t : this.#f.parseNumber(t, e);
        }
      };
      m = (0, n.gn)(
        [(0, r.autoinject)(), (0, n.w6)("design:paramtypes", [s.oc])],
        m
      );
      let g = class {
        #f;
        constructor(t) {
          this.#f = t;
        }
        toView(t, e) {
          return (
            "number" != typeof t && (t = this.#f.parseNativeNumber(t, e)),
            isNaN(t) ? "" : this.#f.formatNativeNumber(t, e)
          );
        }
        fromView(t, e) {
          return "number" == typeof t ? t : this.#f.parseNativeNumber(t, e);
        }
      };
      g = (0, n.gn)(
        [(0, r.autoinject)(), (0, n.w6)("design:paramtypes", [s.oc])],
        g
      );
      let h = class {
        #f;
        constructor(t) {
          (this.signals = [o.i]), (this.#f = t);
        }
        toView(t, e, a) {
          return (
            "number" != typeof t && (t = parseFloat(t)),
            this.#f.formatCurrency(t, e, a)
          );
        }
      };
      h = (0, n.gn)(
        [(0, r.autoinject)(), (0, n.w6)("design:paramtypes", [s.oc])],
        h
      );
      let p = class {
        #f;
        constructor(t) {
          (this.signals = [o.i, i.k]), (this.#f = t);
        }
        toView(t, e) {
          return t ? this.#f.formatRelativeTime(t, e) : "";
        }
      };
      p = (0, n.gn)(
        [(0, r.autoinject)(), (0, n.w6)("design:paramtypes", [s.oc])],
        p
      );
      let f = class {
        #f;
        constructor(t) {
          (this.signals = [o.i]), (this.#f = t);
        }
        toView(t, e, a) {
          return t ? this.#f.formatDateTime(t, e) : a;
        }
      };
      f = (0, n.gn)(
        [(0, r.autoinject)(), (0, n.w6)("design:paramtypes", [s.oc])],
        f
      );
      let L = class {
        #f;
        constructor(t) {
          (this.signals = [o.i, i.k]), (this.#f = t);
        }
        toView(t) {
          return this.#f.formatDateTime(Date.now(), t);
        }
      };
      L = (0, n.gn)(
        [(0, r.autoinject)(), (0, n.w6)("design:paramtypes", [s.oc])],
        L
      );
      let d = class {
        #f;
        constructor(t) {
          (this.signals = [o.H, o.i, i.k]), (this.#f = t);
        }
        toView(t, e = !1) {
          if (!t) return "";
          "string" == typeof t && (t = Date.parse(t)),
            t instanceof Date && (t = t.valueOf());
          const [a, n] = this.#L(Date.now() - t);
          return this.#f.getValue(`time.$x_${a}${e ? "" : "_ago"}`, { x: n });
        }
        #L(t) {
          t = Math.abs(t);
          for (const [e, a, n] of y)
            if (t >= n) {
              const r = Math.round(t / n);
              return [r > 1 ? a : e, r];
            }
          return ["sec", 0];
        }
      };
      d = (0, n.gn)(
        [(0, r.autoinject)(), (0, n.w6)("design:paramtypes", [s.oc])],
        d
      );
      const y = [
        ["year", "years", 31536e6],
        ["mo", "mo", 2592e6],
        ["day", "days", 864e5],
        ["hr", "hr", 36e5],
        ["min", "min", 6e4],
        ["sec", "sec", 1e3],
      ];
    },
    28475: (t, e, a) => {
      a.d(e, { H: () => n, i: () => r });
      const n = "i18n:translation-locale-changed",
        r = "i18n:formatting-locale-changed";
    },
    66825: (t, e, a) => {
      function n(t) {
        const e = new Map();
        for (const [a, n] of Object.entries(t))
          for (const [t, r] of Object.entries(n)) e.set(`${a}.${t}`, r);
        return e;
      }
      a.d(e, { N: () => n });
    },
  },
]);

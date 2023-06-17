"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [9521],
  {
    "services/bugsnag/index": (e, t, a) => {
      a.r(t),
        a.d(t, {
          configure: () => f,
          isConfigured: () => v,
          report: () => M,
          setEnabled: () => h,
          setMetadata: () => y,
        });
      var o = a(64061),
        n = a.n(o),
        r = a(98099),
        c = a(81110),
        s = a(94472),
        i = a(5384);
      const l = (0, r.jl)("bugsnag");
      let m = null,
        u = !0;
      const p = new Set([
          "Breadcrumb not attached due to onBreadcrumb callback",
          "Event not sent due to onError callback",
        ]),
        d = [
          { type: "request", metadata: { status: 200, request: /\.svg$/ } },
          { type: "request", metadata: { request: /^GET data:/ } },
          {
            type: "request",
            metadata: { status: 304, request: /\/v3\/catalog$/ },
          },
          {
            type: "log",
            metadata: {
              "[1]": "EVENT_UPDATE_STATE_CHANGED",
              "[2]": /^(checking|not-available)$/,
            },
          },
          {
            type: "log",
            metadata: { "[1]": /^(-> )?ACTION_CHECK_FOR_UPDATE$/ },
          },
        ];
      function g(e) {
        return (...t) => {
          p.has(t[0]) || l[e](...t);
        };
      }
      function f(e, t) {
        t.apiKey &&
          ((m = [
            { pattern: k("file:///"), replacement: "" },
            { pattern: k(encodeURIComponent("file:///")), replacement: "" },
            { pattern: k(t.appPath), replacement: "~" },
            { pattern: k(encodeURIComponent(t.appPath)), replacement: "~" },
            { pattern: k(encodeURI(t.appPath)), replacement: "~" },
            { pattern: k(t.appPath.replaceAll("\\", "/")), replacement: "~" },
            {
              pattern: k(JSON.stringify(t.appPath).slice(1, -1)),
              replacement: "~",
            },
            {
              pattern: k(encodeURIComponent(t.appPath.replaceAll("\\", "/"))),
              replacement: "~",
            },
            {
              pattern: k(encodeURI(t.appPath.replaceAll("\\", "/"))),
              replacement: "~",
            },
          ]),
          n().start({
            apiKey: t.apiKey,
            appVersion: t.appVersion,
            releaseStage: t.releaseStage,
            autoTrackSessions: !1,
            projectRoot: "~",
            metadata: { device: { locale: t.locale, arch: t.osArch } },
            logger: {
              debug: g("debug"),
              info: g("info"),
              warn: g("warn"),
              error: g("error"),
            },
            onBreadcrumb: [b, I, P],
            onError: [b, E, C, R, U],
          }));
      }
      function h(e) {
        u = e;
      }
      function v() {
        return null !== m;
      }
      function y(e, t, a) {
        v() && n().addMetadata(e, t, a);
      }
      function b() {
        return u;
      }
      function E(e) {
        return (
          "object" != typeof e.originalError ||
          !0 !== e.originalError.doNotReport
        );
      }
      function C(e) {
        return !(0, s.zF)(e.originalError);
      }
      function M(e) {
        v() ? n().notify(e) : console.error(e);
      }
      function k(e) {
        return new RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "ig");
      }
      function w(e) {
        return (
          "string" == typeof e &&
            m.forEach((t) => (e = e.replace(t.pattern, t.replacement))),
          e
        );
      }
      function I(e) {
        return (
          "object" != typeof e.metadata ||
          null === e.metadata ||
          d.every(
            (t) =>
              t.type !== e.type ||
              Object.keys(t.metadata).some((a) => {
                const o = t.metadata[a],
                  n = e.metadata[a];
                return (
                  void 0 === n ||
                  (o instanceof RegExp
                    ? !["string", "number"].includes(typeof n) ||
                      !o.test(n.toString())
                    : n !== o)
                );
              })
          )
        );
      }
      function P(e) {
        e.message = w(e.message);
        const t = e.metadata;
        "object" == typeof t &&
          null !== t &&
          Object.keys(t).forEach((e) => (t[e] = w(t[e])));
      }
      function R(e) {
        (e.context = w(e.context)),
          (e.request.url = w(e.request.url)),
          e.errors.forEach((e) => {
            (e.errorMessage = w(e.errorMessage)),
              e.stacktrace.forEach((e) => (e.file = w(e.file)));
          });
      }
      async function U(e) {
        const t = (0, c.H)(),
          a = t.info,
          o = await t.getMemoryInfo();
        if (
          (e.addMetadata("device", {
            hostname: a.osHostname,
            cpu: a.deviceCpuModel,
            cpuCount: a.deviceCpuCount,
            memoryTotal: (0, i.td)(o.total),
            memoryFree: (0, i.td)(o.free),
          }),
          !n().getMetadata("device", "antivirus"))
        ) {
          const a = ((await t.getInstalledAvProducts()) ?? ["<error>"]).sort();
          n().addMetadata("device", "antivirus", a),
            e.addMetadata("device", "antivirus", a);
        }
        return !0;
      }
    },
    35994: (e, t, a) => {
      a.d(t, { G: () => c });
      var o = a(64061),
        n = a.n(o),
        r = a("services/bugsnag/index");
      class c {
        run(e, t) {
          return (0, r.isConfigured)() && n().resetEventCount(), t();
        }
      }
    },
    8462: (e, t, a) => {
      a.d(t, { o: () => l, q: () => o });
      var o,
        n = a(3689),
        r = a(11912);
      !(function (e) {
        (e.Invalid = "invalid"), (e.Unsure = "unsure"), (e.Valid = "valid");
      })(o || (o = {}));
      const c = new Map([
          ["gmail", "com"],
          ["outlook", "com"],
          ["hotmail", "com"],
          ["live", "com"],
          ["yahoo", "com"],
        ]),
        s = new Map([
          ["gemail", "gmail"],
          ["gmial", "gmail"],
          ["gmai", "gmail"],
        ]),
        i = new Map([
          ["c", "com"],
          ["ccom", "com"],
          ["cim", "com"],
          ["cob", "com"],
          ["coim", "com"],
          ["colm", "com"],
          ["com2", "com"],
          ["coma", "com"],
          ["comcom", "com"],
          ["come", "com"],
          ["comf", "com"],
          ["comi", "com"],
          ["comk", "com"],
          ["coml", "com"],
          ["comm", "com"],
          ["coms", "com"],
          ["con", "com"],
          ["coom", "com"],
          ["coom", "com"],
          ["cpm", "com"],
          ["dcom", "com"],
          ["ney", "net"],
          ["nt", "net"],
          ["ocm", "com"],
          ["r", "ru"],
          ["vcom", "com"],
          ["vom", "com"],
          ["xom", "com"],
          ["yk", "uk"],
        ]);
      class l {
        async validate(e) {
          if ("string" != typeof e) return { status: o.Invalid };
          const t = e.split("@");
          if (2 !== t.length) return { status: o.Invalid };
          const a = t[0].replace(/\s/g, ""),
            l = t[1]
              .replace(/\s/g, "")
              .replace(/[。｡︒]/g, ".")
              .toLocaleLowerCase();
          if (0 === a.length || l.length < 3 || a.length + l.length > 255)
            return { status: o.Invalid };
          if (!l.includes(".")) return { status: o.Invalid };
          const m = `${a}@${l}`,
            u = l.split("."),
            p = u.pop(),
            d = u.join(".");
          let g = i.get(p);
          const f = s.get(d);
          return g || f
            ? (f && !g && (g = c.get(d)),
              {
                status: o.Unsure,
                recommendation: `${a}@${f || d}.${g || p}`,
                normalized: m,
              })
            : /^[\p{L}\p{N}_+.-]+$/gu.test(a) && /^[\p{L}\p{N}.-]+$/gu.test(l)
            ? {
                status: (await Promise.race([
                  this.#e(n.H9(l)),
                  (0, r.UC)(3e3).then(() => !1),
                ]))
                  ? o.Valid
                  : o.Unsure,
                normalized: m,
              }
            : { status: o.Unsure, normalized: m };
        }
        async #e(e) {
          const t = new URL("https://1.1.1.1/dns-query");
          t.searchParams.set("type", "MX"), t.searchParams.set("name", e);
          try {
            const e = await (
              await fetch(t, { headers: { Accept: "application/dns-json" } })
            ).json();
            return (
              0 === e.Status &&
              e.Answer?.some(
                (e) => !e.data.endsWith(" .") && !e.data.endsWith(" localhost.")
              )
            );
          } catch {
            return !1;
          }
        }
      }
    },
  },
]);

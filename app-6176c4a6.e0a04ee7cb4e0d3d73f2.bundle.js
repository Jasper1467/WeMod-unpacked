"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [4062],
  {
    27170: (e, t, n) => {
      n.d(t, {
        AC: () => Te,
        B$: () => y,
        Cn: () => re,
        D3: () => k,
        Dr: () => ne,
        FE: () => je,
        IB: () => M,
        JC: () => G,
        Jr: () => p,
        Jw: () => z,
        MH: () => Le,
        NP: () => ee,
        NW: () => Se,
        Sv: () => c,
        UE: () => Ve,
        Uh: () => J,
        V0: () => D,
        V_: () => Fe,
        Vb: () => Z,
        ZM: () => Ce,
        aS: () => ce,
        b: () => We,
        b9: () => A,
        bP: () => x,
        cd: () => Ue,
        eU: () => Ie,
        ey: () => ae,
        g2: () => He,
        hV: () => f,
        is: () => N,
        jC: () => h,
        mE: () => Oe,
        mS: () => b,
        oN: () => P,
        oU: () => m,
        qV: () => we,
        qg: () => ge,
        ql: () => Ye,
        sE: () => v,
        tS: () => de,
        uy: () => Qe,
        wo: () => qe,
        xS: () => Re,
        xW: () => _,
        y4: () => u,
        yo: () => Ee,
        z_: () => $e,
        zv: () => B,
      });
      var s = n(34135),
        a = n(58694),
        o = n("services/bugsnag/index"),
        r = n(2314),
        i = n(51722),
        l = n(74503);
      function c() {
        return {
          [u]: d,
          [f]: g,
          [m]: T,
          [A]: I,
          [y]: E,
          [h]: O,
          [_]: C,
          [N]: R,
          [p]: S,
          [b]: V,
          [P]: H,
          [v]: L,
          [k]: w,
          [D]: j,
          [G]: U,
          [M]: $,
          [B]: F,
          [K]: W,
          [x]: q,
          [J]: Y,
          [z]: Q,
          [Z]: X,
          [ee]: te,
          [ne]: se,
          [ae]: oe,
          [re]: ie,
          [ce]: ue,
          [de]: fe,
          [ge]: me,
          [Te]: Ae,
          [Ie]: pe,
          [Se]: ye,
          [Ee]: he,
          [Oe]: _e,
          [Ce]: Ne,
          [Re]: be,
          [we]: De,
          [Ve]: Pe,
          [He]: ve,
          [Le]: ke,
          [je]: Ge,
          [Ue]: Me,
          [$e]: Be,
          [Fe]: Ke,
          [We]: xe,
          [qe]: Je,
          [Ye]: ze,
          [Qe]: Ze,
        };
      }
      const u = "ACTION_SET_CATALOG";
      function d(e, t, n = null) {
        if (null === t || !(0, r.d)(t))
          throw new Error("Invalid catalog object.");
        const s = Object.keys(e.correlatedUnavailableTitles).filter(
          (e) =>
            t.titles[e] &&
            t.titles[e].gameIds.some((e) =>
              (0, i.yE)(t.games[e].flags, r.p.Available)
            )
        );
        if (0 === s.length) return { ...e, catalog: t, catalogCacheKey: n };
        const a = { ...e.correlatedUnavailableTitles };
        return (
          s.forEach((e) => delete a[e]),
          {
            ...e,
            catalog: t,
            catalogCacheKey: n,
            correlatedUnavailableTitles: a,
          }
        );
      }
      const f = "ACTION_CLEAR_INVALID_CATALOG";
      function g(e) {
        return (0, r.d)(e.catalog)
          ? e
          : { ...e, catalog: null, catalogCacheKey: null };
      }
      const m = "ACTION_CLEAR_ACQUISITION_DATA";
      function T(e) {
        return (0, r.d)(e.catalog)
          ? e
          : { ...e, installation: { ...e.installation, acquisition: null } };
      }
      const A = "ACTION_TOGGLE_FAVORITE_TITLE";
      function I(e, t) {
        const n = { ...e.favoriteTitles };
        return (
          n.hasOwnProperty(t) ? delete n[t] : (n[t] = !0),
          { ...e, favoriteTitles: n }
        );
      }
      const p = "ACTION_TITLE_VIEWED";
      function S(e, t) {
        return {
          ...e,
          titleHistory: {
            ...e.titleHistory,
            [t]: { lastViewedAt: new Date().toISOString() },
          },
        };
      }
      const y = "ACTION_GAME_PLAYED";
      function E(e, t, n, s) {
        const a = e.gameHistory[t]?.playDuration || 0;
        return {
          ...e,
          gameHistory: {
            ...e.gameHistory,
            [t]: {
              ...(e.gameHistory[t] || {}),
              lastPlayedAt: n,
              playDuration: a + s,
            },
          },
        };
      }
      const h = "ACTION_POSITIVE_TRAINER_FEEDBACK_SUBMITTED";
      function O(e, t) {
        return {
          ...e,
          gameHistory: {
            ...e.gameHistory,
            [t]: {
              ...(e.gameHistory[t] || {}),
              lastPositiveFeedbackAt: new Date().toISOString(),
            },
          },
        };
      }
      const _ = "ACTION_GAME_NOTIFICATION_SHOWN";
      function C(e, t, n) {
        return {
          ...e,
          gameHistory: {
            ...e.gameHistory,
            [t]: {
              ...(e.gameHistory[t] || {}),
              lastNotification: n || new Date().toISOString(),
            },
          },
        };
      }
      const N = "ACTION_GAME_NOTIFICATIONS_RESET";
      function R(e, t) {
        const n = {};
        return (
          t.forEach((t) => {
            n[t] = {
              ...(e.gameHistory[t] || {}),
              lastNotification: new Date().toISOString(),
            };
          }),
          { ...e, gameHistory: { ...e.gameHistory, ...n } }
        );
      }
      const b = "ACTION_SET_INSTALLED_GAME_VERSIONS";
      function V(e, t) {
        return {
          ...e,
          installedGameVersions: { ...e.installedGameVersions, ...t },
        };
      }
      const P = "ACTION_CLEAR_UNINSTALLED_GAME_VERSIONS";
      function H(e, t) {
        const n = Object.entries(e.installedGameVersions),
          s = n.filter(([e]) => t.has(e));
        return n.length === s.length
          ? e
          : { ...e, installedGameVersions: Object.fromEntries(s) };
      }
      const v = "ACTION_SET_INSTALLED_APPS";
      function L(e, t) {
        return { ...e, installedApps: t };
      }
      const k = "ACTION_SET_SETTINGS";
      function w(e, t, n, s) {
        return { ...e, settings: { ...e.settings, ...t } };
      }
      const D = "ACTION_SET_FLAG";
      function j(e, t, n) {
        return e.flags[t] === n ? e : { ...e, flags: { ...e.flags, [t]: !!n } };
      }
      const G = "ACTION_SET_TIMESTAMP";
      function U(e, t, n) {
        return (
          void 0 === n && (n = new Date().toISOString()),
          { ...e, timestamps: { ...e.timestamps, [t]: n } }
        );
      }
      const M = "ACTION_ADD_CUSTOM_INSTALLATION";
      function $(e, t, n) {
        const o = new s.w(t, n.toLocaleLowerCase()),
          r = `${a.$}:${o.toString()}`,
          i = [...(e.installedGameVersions[t] || [])];
        return (
          i.some((e) => e.correlationId === r) ||
            i.push({
              gameId: t,
              correlationId: r,
              version: null,
              modifiedAt: null,
            }),
          {
            ...e,
            installedApps: {
              ...e.installedApps,
              [r]: { platform: a.$, sku: o.toString(), location: n },
            },
            installedGameVersions: { ...e.installedGameVersions, [t]: i },
          }
        );
      }
      const B = "ACTION_REMOVE_CUSTOM_INSTALLATION";
      function F(e, t, n) {
        const s = `${a.$}:${t}_${n.toLocaleLowerCase()}`,
          o = { ...e.installedApps };
        delete o[s];
        const r = { ...e.installedGameVersions };
        return (
          r.hasOwnProperty(t) &&
            ((r[t] = r[t].filter((e) => e.correlationId !== s)),
            0 === r[t].length && delete r[t]),
          { ...e, installedApps: o, installedGameVersions: r }
        );
      }
      const K = "ACTION_CACHE_TRAINER";
      function W(e, t) {
        return {
          ...e,
          trainers: {
            ...e.trainers,
            [t.gameId]: [
              ...(e.trainers[t.gameId] || []).filter((e) => e.id !== t.id),
              t,
            ],
          },
        };
      }
      const x = "ACTION_CACHE_TRAINER_RESPONSE";
      function q(e, t) {
        const { trainer: n, i18n: s } = t;
        return {
          ...e,
          trainers: {
            ...e.trainers,
            [n.gameId]: [
              ...(e.trainers[n.gameId] || []).filter((e) => e.id !== n.id),
              n,
            ],
          },
          gameTranslations: s
            ? {
                ...e.gameTranslations,
                [n.gameId]: {
                  ...(e.gameTranslations[n.gameId] || {}),
                  [s.locale]: s.strings,
                },
              }
            : e.gameTranslations,
        };
      }
      const J = "ACTION_SET_CUSTOM_HOTKEY";
      function Y(e, t, n, s, a) {
        const o = e.gamePreferences[t] || {
            customHotkeys: {},
            saveCheats: { trainerState: {}, enabled: void 0 },
          },
          r = { ...(o.customHotkeys || {}) },
          i = { ...r, [n]: { ...(r[n] || {}) } };
        return (
          void 0 === a
            ? (delete i[n][s], 0 === Object.keys(i[n]).length && delete i[n])
            : (i[n][s] = a),
          {
            ...e,
            gamePreferences: {
              ...e.gamePreferences,
              [t]: { ...o, customHotkeys: i },
            },
          }
        );
      }
      const z = "ACTION_SET_TRAINER_STATE";
      function Q(e, t, n, s) {
        const a = e.gamePreferences[t] || {
            customHotkeys: {},
            saveCheats: { trainerState: {}, enabled: void 0 },
          },
          o = { ...(a.saveCheats || { trainerState: {}, enabled: void 0 }) },
          r = { ...o.trainerState, [n]: s };
        return {
          ...e,
          gamePreferences: {
            ...e.gamePreferences,
            [t]: { ...a, saveCheats: { ...o, trainerState: r } },
          },
        };
      }
      const Z = "ACTION_ENABLE_GAME_SAVE_CHEATS";
      function X(e, t, n, s) {
        const a = e.gamePreferences[t] || {
          customHotkeys: {},
          saveCheats: { trainerState: {}, enabled: void 0 },
        };
        n &&
          s &&
          (s = Object.fromEntries(
            Object.entries(s).filter(([e, t]) => void 0 !== t)
          ));
        const o = {
          trainerState: n ? s ?? a.saveCheats?.trainerState ?? {} : {},
          enabled: n,
        };
        return {
          ...e,
          gamePreferences: {
            ...e.gamePreferences,
            [t]: { ...a, saveCheats: { ...o, enabled: n } },
          },
        };
      }
      const ee = "ACTION_CLEAR_SAVE_CHEATS";
      function te(e) {
        const t = { ...e.gamePreferences };
        return (
          Object.keys(t).forEach((e) => {
            t[e] = {
              ...t[e],
              saveCheats: { enabled: void 0, trainerState: {} },
            };
          }),
          { ...e, gamePreferences: t }
        );
      }
      const ne = "ACTION_REGISTER_CORRELATED_UNAVAILABLE_TITLES";
      function se(e, t, n, s) {
        const a = { ...e.correlatedUnavailableTitles },
          o = { ...e.correlatedUnavailableTitleRefreshes };
        le(a, o, s), t.forEach((e) => (a[e.id] = e));
        const r = Math.ceil(Date.now() / 1e3);
        return (
          n.forEach((e) => (o[e] = r)),
          {
            ...e,
            correlatedUnavailableTitles: a,
            correlatedUnavailableTitleRefreshes: o,
          }
        );
      }
      const ae = "ACTION_REMOVE_CORRELATED_UNAVAILABLE_TITLES";
      function oe(e, t) {
        if (t.every((t) => !e.correlatedUnavailableTitles.hasOwnProperty(t)))
          return e;
        const n = { ...e.correlatedUnavailableTitles };
        return (
          t.forEach((e) => delete n[e]),
          { ...e, correlatedUnavailableTitles: n }
        );
      }
      const re = "ACTION_REMOVE_UNINSTALLED_CORRELATED_UNAVAILABLE_TITLES";
      function ie(e, t) {
        const n = { ...e.correlatedUnavailableTitles },
          s = { ...e.correlatedUnavailableTitleRefreshes };
        return le(n, s, t)
          ? {
              ...e,
              correlatedUnavailableTitles: n,
              correlatedUnavailableTitleRefreshes: s,
            }
          : e;
      }
      function le(e, t, n) {
        let s = !1;
        return (
          Object.keys(t)
            .filter((e) => !n.has(e))
            .forEach((e) => {
              (s = !0), delete t[e];
            }),
          Object.values(e).forEach((t) => {
            void 0 === t.games
              ? (0, o.report)(
                  new Error(
                    `Undefined games property for title type ${typeof t}, OBJ: ${JSON.stringify(
                      t
                    )}`
                  )
                )
              : t.games
                  .flatMap((e) => e.correlationIds)
                  .every((e) => !n.has(e)) && ((s = !0), delete e[t.id]);
          }),
          s
        );
      }
      const ce = "ACTION_TRAINER_FEEDBACK_REQUESTED";
      function ue(e, t, n, s, a) {
        const o = `${t}:${n || ""}:${s ?? ""}`,
          r = (e.trainerFeedbackRequests || {})[o] || [],
          i = Array.from(new Set([].concat(r, a)));
        return {
          ...e,
          trainerFeedbackRequests: {
            ...(e.trainerFeedbackRequests || {}),
            [o]: i,
          },
        };
      }
      const de = "ACTION_SET_ACCESS_TOKEN";
      function fe(e, t) {
        return { ...e, token: t };
      }
      const ge = "ACTION_SET_USER_ACCOUNT";
      function me(e, t) {
        return e.account && JSON.stringify(t) === JSON.stringify(e.account)
          ? e
          : { ...e, account: t };
      }
      const Te = "ACTION_DESTROY_USER";
      function Ae(e) {
        return {
          ...e,
          token: null,
          account: null,
          flags: { ...e.flags, signOutOnStartup: !1 },
        };
      }
      const Ie = "ACTION_SET_INSTALLATION_TOKEN";
      function pe(e, t) {
        if (e.installation.token)
          throw new Error("Installation token already set.");
        if (e.installation.id) throw new Error("Installation ID already set.");
        return { ...e, installation: { ...e.installation, token: t } };
      }
      const Se = "ACTION_SET_INSTALLATION_PARAMS";
      function ye(e, t) {
        if (e.installation.id) throw new Error("Installation ID already set.");
        return {
          ...e,
          installation: {
            ...e.installation,
            id: t.installationId,
            token: void 0,
            acquisition: t.acquisition ?? null,
          },
        };
      }
      const Ee = "ACTION_MARK_TRAINER_NOTES_READ";
      function he(e, t, n) {
        return { ...e, trainerNotesRead: { ...e.trainerNotesRead, [t]: n } };
      }
      const Oe = "ACTION_CLEAR_READ_TRAINER_NOTES";
      function _e(e) {
        return { ...e, trainerNotesRead: {} };
      }
      const Ce = "ACTION_MARK_CHEAT_BLUEPRINT_INSTRUCTIONS_READ";
      function Ne(e, t, n) {
        const s = { ...e.cheatBlueprintInstructionsRead };
        return (
          n ? (s[t] = n) : delete s[t],
          { ...e, cheatBlueprintInstructionsRead: s }
        );
      }
      const Re = "ACTION_MARK_ALL_CHEAT_BLUEPRINT_INSTRUCTIONS_UNREAD";
      function be(e) {
        return { ...e, cheatBlueprintInstructionsRead: {} };
      }
      const Ve = "ACTION_PROMOTION_SHOW";
      function Pe(e, t, n, s) {
        return {
          ...e,
          promotionHistory: {
            ...e.promotionHistory,
            [t]: { ...(e.promotionHistory[t] || {}), [`${n}ShownAt`]: s },
          },
        };
      }
      const He = "ACTION_PROMOTION_CLICKED";
      function ve(e, t, n, s) {
        return {
          ...e,
          promotionHistory: {
            ...e.promotionHistory,
            [t]: { ...(e.promotionHistory[t] || {}), [`${n}ClickedAt`]: s },
          },
        };
      }
      const Le = "ACTION_PROMOTION_BANNER_DISMISSED";
      function ke(e, t, n) {
        return {
          ...e,
          promotionHistory: {
            ...e.promotionHistory,
            [t]: { ...(e.promotionHistory[t] || {}), bannerDismissedAt: n },
          },
        };
      }
      const we = "ACTION_CLEAR_PROMOTION_HISTORY";
      function De(e) {
        return { ...e, promotionHistory: {} };
      }
      const je = "ACTION_RESET_STATE";
      function Ge(e) {
        return {
          ...l.E,
          token: e.token,
          installation: {
            ...e.installation,
            id: e.installation.id,
            acquisition: e.installation.acquisition,
          },
          stateVersion: e.stateVersion,
        };
      }
      const Ue = "ACTION_COACHING_TIP_SHOWN";
      function Me(e, t, n) {
        return {
          ...e,
          coachingTipHistory: {
            ...e.coachingTipHistory,
            [t]: { ...(e.coachingTipHistory[t] || {}), tipShownAt: n },
          },
        };
      }
      const $e = "ACTION_RESET_COACHING_TIP_HISTORY";
      function Be(e) {
        return { ...e, coachingTipHistory: {} };
      }
      const Fe = "ACTION_SET_GAME_COLLECTION_PREFERENCES";
      function Ke(e, t, n) {
        return {
          ...e,
          gameCollectionPreferences: { ...e.gameCollectionPreferences, [t]: n },
        };
      }
      const We = "ACTION_SET_FOLLOWED_GAMES";
      function xe(e, t) {
        return { ...e, followedGames: t };
      }
      const qe = "ACTION_SET_MAP_SETTINGS";
      function Je(e, t, n) {
        return { ...e, mapSettings: { ...e.mapSettings, [t]: n } };
      }
      const Ye = "ACTION_SET_TITLE_MAP_SETTINGS";
      function ze(e, t, n) {
        return { ...e, titleMapSettings: { ...e.titleMapSettings, [t]: n } };
      }
      const Qe = "ACTION_CLEAR_MAP_SETTINGS";
      function Ze(e) {
        return { ...e, mapSettings: {}, titleMapSettings: {} };
      }
    },
    "store/index": (e, t, n) => {
      n.r(t), n.d(t, { configure: () => Y }), n(1015);
      var s = n(27170);
      const a = `${n(16511).np}:`;
      function o(e) {
        const t = localStorage.getItem(a + e);
        if (t)
          try {
            const e = JSON.parse(t);
            return i(e), e;
          } catch {}
      }
      function r(e) {
        localStorage.removeItem(a + e);
      }
      function i(e) {
        if ("object" == typeof e && null !== e)
          if (Array.isArray(e)) e.forEach((e) => i(e));
          else
            for (const t of Object.keys(e))
              t.endsWith("__date")
                ? ((e[t.substring(0, t.length - 6)] = new Date(e[t])),
                  delete e[t])
                : i(e[t]);
      }
      var l = n(58694);
      function c() {
        const e = {
          catalog: { titles: {}, games: {}, projects: {}, creators: {} },
          favoriteTitles: {},
          gameHistory: {},
          projectHistory: {},
          installedApps: {},
          installedGameVersions: {},
          trainers: {},
          projectPreferences: {},
          playHistory: [],
          reportedApps: {},
          settings: {
            theme: "default",
            analytics: !0,
            closeToTray: !0,
            cheatSounds: !0,
            cheatSoundPack: null,
          },
          mixpanelData: {},
          appInstalledAt: new Date().toISOString(),
          stateVersion: 1,
        };
        {
          const t = o("appSettings") || {};
          t.hasOwnProperty("cheat-sounds") &&
            ((t.cheatSounds = t["cheat-sounds"]), delete t["cheat-sounds"]),
            (t.notFirstRun = !0),
            o("choosePlanShownAfterTrainer") &&
              (t.choosePlanShownAfterTrainer = !0),
            delete t["recording-mode"],
            delete t["trainer-external-console"],
            delete t["cheat-sounds"],
            (e.settings = { ...e.settings, ...t });
        }
        {
          const t = o("selectedCheatSoundPack");
          t && (e.settings = { ...e.settings, cheatSoundPack: t });
        }
        {
          const t = o("userUuid");
          t && (e.mixpanelData = { ...e.mixpanelData, trackingId: t });
        }
        {
          const t = (o("timestamps") || {}).installedAt;
          t && (e.appInstalledAt = t.toISOString());
        }
        {
          const t = o("usageTimestamps");
          t &&
            Object.keys(t).forEach((n) => {
              const s = n.split(":");
              if (3 !== s.length) return;
              const [a, o, r] = s[1].split(",");
              if (!r) return;
              const i = t[n].toISOString();
              if ("view" === s[2]) {
                e.gameHistory = { ...e.gameHistory, [r]: { lastViewedAt: i } };
                const t = e.projectHistory[a] || { lastPlayedAt: null };
                e.projectHistory = {
                  ...e.projectHistory,
                  [a]: { ...t, lastViewedAt: i },
                };
              } else if ("play" === s[2]) {
                const t = e.projectHistory[a] || { lastViewedAt: i };
                e.projectHistory = {
                  ...e.projectHistory,
                  [a]: { ...t, lastPlayedAt: i },
                };
              }
            });
        }
        (o("customLocations") || []).forEach((t) => {
          const n = t.gameId,
            s = `${t.location}\\${t.command}`,
            a = `${n}_${s.toLocaleLowerCase()}`,
            o = `${l.$}:${a}`,
            r = [...(e.installedGameVersions[n] || [])];
          r.some((e) => e.correlationId === o) ||
            (r.push({
              gameId: n,
              correlationId: o,
              snapshotId: null,
              version: null,
              modifiedAt: null,
            }),
            (e.installedGameVersions = { ...e.installedGameVersions, [n]: r })),
            (e.installedApps = {
              ...e.installedApps,
              [o]: { platform: l.$, sku: a, location: s },
            });
        });
        {
          const t = {};
          (o("favorites") || []).forEach((e) => (t[e] = !0)),
            (e.favoriteTitles = t);
        }
        {
          const t = o("customHotkeys");
          if (t) {
            const n = {};
            Object.keys(t).forEach((e) => {
              Object.keys(t[e]).forEach((s) => {
                const a = t[e][s][0];
                a &&
                  ["0", "1"].forEach((t) => {
                    const o = a[t];
                    o &&
                      Array.isArray(o) &&
                      0 !== o.length &&
                      (n.hasOwnProperty(e) || (n[e] = {}),
                      n[e].hasOwnProperty(s) || (n[e][s] = {}),
                      (n[e][s][t] = o));
                  });
              });
            });
            const s = {};
            Object.keys(n).forEach((e) => {
              s[e] = { preferredInstallation: null, customHotkeys: n[e] };
            }),
              (e.projectPreferences = s);
          }
        }
        return (
          [
            "activityFeed",
            "cachedGameVersions",
            "cachedGameVersions2",
            "installedGames",
            "installedGames2",
            "titleItems",
            "titleItems2",
            "trainerItems",
            "favorites",
            "preferredCustomLocations",
            "preferredSnapshots",
            "lastPlayedTitle",
            "customHotkeys",
            "appSettings",
            "selectedCheatSoundPack",
            "trainerBlueprints",
            "trainerBlueprints2",
            "choosePlanShownAfterTrainer",
            "referrerId",
            "hasSeenHub",
            "checkoutVariant",
            "featuredContent",
            "userUuid",
            "lastViewedTrainerId",
            "customLocations",
            "usageTimestamps",
            "notFirstRun",
          ].forEach((e) => r(e)),
          e
        );
      }
      function u(e) {
        const t = { ...e, stateVersion: 2 };
        return delete t.mixpanelData, t;
      }
      function d(e) {
        const t = {};
        Object.keys(e.installedGameVersions).forEach((n) => {
          t[n] = e.installedGameVersions[n]
            .filter((e) => null === e.snapshotId)
            .map((e) => ({
              gameId: e.gameId,
              correlationId: e.correlationId,
              version: e.version,
              modifiedAt: e.modifiedAt,
            }));
        });
        const n = {};
        return (
          Object.keys(e.gamePreferences).forEach((t) => {
            n[t] = { customHotkeys: e.gamePreferences[t].customHotkeys };
          }),
          {
            ...e,
            installedGameVersions: t,
            gamePreferences: n,
            stateVersion: 3,
          }
        );
      }
      function f(e) {
        return {
          ...e,
          settings: { ...e.settings, preferLocalCurrency: !0 },
          stateVersion: 4,
        };
      }
      function g(e) {
        return { ...e, i18ns: {}, stateVersion: 5 };
      }
      function m(e) {
        return { ...e, trainerFeedbackRequests: {}, stateVersion: 6 };
      }
      var T = n(5384);
      function A(e) {
        const t = new Map(
            Object.keys(e.catalog.projects).map((t) => [
              t,
              e.catalog.projects[t].gameId,
            ])
          ),
          n = {},
          s = o("trainerNoteHistory") || {};
        Object.keys(s).forEach((e) => {
          s[e] && (n[e] = (0, T.Wu)(s[e]));
        });
        const i = {};
        Object.keys(e.projectPreferences).forEach((n) => {
          const s = t.get(n);
          "string" == typeof s && (i[s] = e.projectPreferences[n]);
        });
        const l = e.playHistory.map((e) => ({
            gameId: t.get(e.projectId),
            playedAt: e.playedAt,
            duration: e.duration,
          })),
          c = o("authToken"),
          u = c
            ? {
                accessToken: c.accessToken.value,
                refreshToken: c.refreshToken,
                userId: c.accessToken.userId,
                channel: `accounts.${c.accessToken.userId}`,
                expiresAt: Math.floor(c.accessToken.expiresAt.getTime() / 1e3),
              }
            : null,
          d = o("installationId"),
          f = o("installationToken"),
          g = {
            firstRun: !1,
            runningInTrayNotificationShown:
              !!e.settings.hideRunningInTrayNotification,
            choosePlanShownAfterTrainer:
              !!e.settings.choosePlanShownAfterTrainer,
            appRatingShownAfterTrainer: !!e.settings.appRatingShownAfterTrainer,
          },
          m = { ...e.i18ns };
        delete m["en-US"];
        const A = {
          ...e,
          catalog: null,
          catalogCacheKey: null,
          gamePreferences: i,
          gameTranslations: {},
          playHistory: l,
          correlatedUnavailableTitles: {},
          correlatedUnavailableTitleRefreshes: {},
          trainers: {},
          trainerNotesRead: n,
          token: u,
          account: null,
          flags: g,
          i18ns: m,
          timestamps: {},
          changelog: null,
          installation: {
            id: "string" == typeof d ? d : void 0,
            token: "string" == typeof f && "string" != typeof d ? f : void 0,
            installedAt: e.appInstalledAt,
            lastVersion: "6.3.12",
          },
          settings: { cheatSoundVolume: 75, ...e.settings },
          stateVersion: 7,
        };
        delete A.appInstalledAt,
          delete A.projectHistory,
          delete A.projectPreferences,
          delete A.reportedApps,
          delete A.settings.userUuid,
          delete A.settings.notFirstRun,
          delete A.settings.hideRunningInTrayNotification,
          delete A.settings.choosePlanShownAfterTrainer,
          delete A.settings.appRatingShownAfterTrainer,
          delete A.settings.hasSeenHub,
          [
            "guest",
            "installationToken",
            "installationId",
            "authToken",
            "referrerId",
            "timestamps",
            "changelog",
            "choosePlanDialogShown",
            "featuredContent2",
            "standalonePlatformConfigs",
            "objectives2",
            "hasSeenReactivationDialog",
            "trainerNoteHistory",
            "onboardingItemStatuses",
          ].forEach((e) => r(e));
        const I = ["userProfiles:", "notifications:", "objectives2:"];
        for (const e of (function* () {
          for (let e = 0; e < localStorage.length; e++) {
            const t = localStorage.key(e);
            "string" == typeof t &&
              t.startsWith(a) &&
              (yield t.substring(a.length));
          }
        })())
          I.some((t) => e.startsWith(t)) && r(e);
        return A;
      }
      function I(e) {
        r("trainerProPopupHistory");
        const t = localStorage.getItem("gaClientId") ?? e.installation.id,
          n = {
            ...e,
            installation: { ...e.installation, analyticsId: t },
            stateVersion: 8,
          };
        return localStorage.removeItem("gaClientId"), n;
      }
      function p(e) {
        return {
          ...e,
          installedGameVersions: Object.fromEntries(
            Object.entries(e.installedGameVersions || {}).filter(([e]) =>
              /^[0-9]+$/.test(e)
            )
          ),
          stateVersion: 9,
        };
      }
      function S(e) {
        return {
          ...e,
          catalog: null,
          catalogCacheKey: null,
          correlatedUnavailableTitles: {},
          correlatedUnavailableTitleRefreshes: {},
          stateVersion: 10,
        };
      }
      function y(e) {
        const t = e.catalog?.games;
        return {
          ...e,
          titleHistory:
            t && e.gameHistory
              ? Object.fromEntries(
                  Object.entries(e.gameHistory)
                    .filter(([e]) => t.hasOwnProperty(e))
                    .map(([e, n]) => [
                      t[e].titleId,
                      { lastViewedAt: n.lastViewedAt ?? null },
                    ])
                )
              : {},
          gameHistory: e.gameHistory
            ? Object.fromEntries(
                Object.entries(e.gameHistory).map(([e, t]) => [
                  e,
                  { lastPlayedAt: t.lastPlayedAt ?? null },
                ])
              )
            : {},
          stateVersion: 11,
        };
      }
      function E(e) {
        return { ...e, stateVersion: 12 };
      }
      function h(e) {
        const t = { ...e, stateVersion: 13 };
        return (
          (t.timestamps.lastProPopup = t.timestamps.lastEnhanceWithProPopup),
          delete t.timestamps.lastEnhanceWithProPopup,
          t
        );
      }
      function O(e) {
        return {
          ...e,
          catalog: { ...e.catalog, promotions: e.catalog?.promotions || {} },
          promotionHistory: {},
          stateVersion: 14,
        };
      }
      function _(e) {
        const t = e.catalog.games;
        return (
          Object.keys(t).forEach((e) => {
            const n = t[e];
            n.trainer && (n.cheatCount = 0);
          }),
          { ...e, catalog: { ...e.catalog, games: t }, stateVersion: 15 }
        );
      }
      function C(e) {
        return {
          ...e,
          trainers: {},
          cheatBlueprintInstructionsRead: {},
          stateVersion: 16,
        };
      }
      function N(e) {
        const t = { ...e.gamePreferences };
        Object.keys(t).forEach((e) => {
          t[e].saveCheats = { enabled: !1, trainerState: {} };
        });
        const n = {
          ...e.settings,
          confirmDisablingSaveCheats: !0,
          enableSaveCheatsByDefault: !1,
        };
        return { ...e, gamePreferences: t, settings: n, stateVersion: 17 };
      }
      function R(e) {
        return {
          ...e,
          catalog: {
            ...e.catalog,
            featuredGames: e.catalog?.featuredGames || [],
          },
          stateVersion: 18,
        };
      }
      function b(e) {
        const t = { ...e.settings },
          n = [
            "myGamesLayout",
            "freeGamesLayout",
            "mostPopularLayout",
            "recentlyPlayedLayout",
            "favoritesPlayedLayout",
            "gamePassLayout",
            "communityChoiceLayout",
          ],
          s = Object.keys(t).find((e) => n.includes(e)),
          a = s ? t[s] : void 0;
        return (
          a && !t.hasOwnProperty("gamesLayout") && (t.gamesLayout = a),
          n.forEach((e) => {
            delete t[e];
          }),
          { ...e, settings: t, stateVersion: 19 }
        );
      }
      function V(e) {
        const t = { ...e };
        return (
          delete t.settings.queueAnnouncementHidden, { ...t, stateVersion: 20 }
        );
      }
      function P(e) {
        return { ...e, coachingTipHistory: {}, stateVersion: 21 };
      }
      function H(e) {
        return { ...e, stateVersion: 22 };
      }
      function v(e) {
        const t = { ...e.settings };
        return (
          delete t.preferLocalCurrency, { ...e, settings: t, stateVersion: 23 }
        );
      }
      function L(e) {
        const t = { ...e.settings };
        return delete t.sidebarPinned, { ...e, settings: t, stateVersion: 24 };
      }
      function k(e) {
        const t = e.playHistory,
          n = e.gameHistory;
        return (
          t.forEach((e) => {
            const t = n[e.gameId];
            t && (t.playDuration = (t.playDuration || 0) + e.duration);
          }),
          { ...e, gameHistory: n, stateVersion: 25 }
        );
      }
      function w(e) {
        const t = {
          ...e,
          settings: { ...e.settings, trendiExperimentVariant: null },
          stateVersion: 26,
        };
        return delete t.flags.wasInFirstTrendiExperiment, t;
      }
      function D(e) {
        const t = {
          ...e,
          settings: { ...e.settings },
          installation: { ...e.installation },
          stateVersion: 27,
        };
        return delete t.settings.region, delete t.installation.analyticsId, t;
      }
      function j(e) {
        return { ...e, gameCollectionPreferences: {}, stateVersion: 28 };
      }
      function G(e) {
        const t = {
          ...e,
          flags: { ...e.flags },
          timestamps: { ...e.timestamps },
          stateVersion: 29,
        };
        return (
          delete t.flags.newUserProDiscountDialogShown,
          delete t.timestamps.newUserProDiscountPromoStarted,
          t
        );
      }
      function U(e) {
        const t = { ...e, stateVersion: 30 };
        return delete t.experiments, t;
      }
      function M(e) {
        return {
          ...e,
          settings: { ...e.settings, useWindowsContrastMode: !0 },
          stateVersion: 31,
        };
      }
      function $(e) {
        return {
          ...e,
          settings: { ...e.settings, language: null },
          i18ns: {},
          stateVersion: 32,
        };
      }
      function B(e) {
        return {
          ...e,
          followedGames: [],
          settings: { ...e.settings, allowDesktopNotifications: !0 },
          stateVersion: 33,
        };
      }
      function F(e) {
        const t = {
          ...e,
          installation: { ...e.installation },
          stateVersion: 34,
        };
        return delete e.installation.lastVersion, t;
      }
      function K(e) {
        return { ...e, mapSettings: {}, stateVersion: 35 };
      }
      function W(e) {
        const t = { ...e, stateVersion: 36 };
        return delete t.flags.trendiExperimentVariant, t;
      }
      function x(e) {
        return { ...e, titleMapSettings: {}, stateVersion: 37 };
      }
      function q(e) {
        const t = {
          ...e,
          timestamps: { ...e.timestamps },
          flags: { ...e.flags },
          settings: {
            ...e.settings,
            enableSaveCheatsByDefault: !(
              e.account?.subscription && !e.settings.enableSaveCheatsByDefault
            ),
          },
          stateVersion: 38,
        };
        return (
          delete t.flags.disableSaveCheatsEnableConfirmDialog,
          delete t.timestamps.lastSaveCheatsEnableConfirmDialog,
          t
        );
      }
      var J = n(74503);
      function Y(e, t) {
        e.feature("shared/store/index", {
          debug: t.debug,
          storageKey: t.storageKey,
          initialState: J.E,
          migrations: [
            c,
            u,
            d,
            f,
            g,
            m,
            A,
            I,
            p,
            S,
            y,
            E,
            h,
            O,
            _,
            C,
            N,
            R,
            b,
            V,
            P,
            H,
            v,
            L,
            k,
            w,
            D,
            j,
            G,
            U,
            M,
            $,
            B,
            F,
            K,
            W,
            x,
            q,
          ],
          actions: (0, s.Sv)(),
          getFallbackState: () =>
            o("notFirstRun") ? { stateVersion: 0 } : null,
        });
      }
    },
    74503: (e, t, n) => {
      n.d(t, { E: () => s });
      const s = {
        catalog: null,
        catalogCacheKey: null,
        account: null,
        token: null,
        favoriteTitles: {},
        titleHistory: {},
        gameHistory: {},
        installedApps: {},
        installedGameVersions: {},
        trainers: {},
        trainerNotesRead: {},
        cheatBlueprintInstructionsRead: {},
        gameTranslations: {},
        gamePreferences: {},
        correlatedUnavailableTitles: {},
        correlatedUnavailableTitleRefreshes: {},
        trainerFeedbackRequests: {},
        mapSettings: {},
        titleMapSettings: {},
        followedGames: [],
        settings: {
          theme: "default",
          analytics: !0,
          closeToTray: !0,
          cheatSounds: !0,
          cheatSoundVolume: 50,
          confirmDisablingSaveCheats: !0,
          enableSaveCheatsByDefault: !0,
          useWindowsContrastMode: !0,
          allowDesktopNotifications: !0,
          preventCatalogRefresh: !1,
        },
        flags: { firstRun: !0 },
        timestamps: {},
        installation: { installedAt: new Date().toISOString() },
        promotionHistory: {},
        coachingTipHistory: {},
        gameCollectionPreferences: {},
        stateVersion: null,
      };
    },
  },
]);

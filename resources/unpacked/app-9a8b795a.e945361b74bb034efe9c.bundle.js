"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [9622],
  {
    23739: (e, t, n) => {
      function s(e) {
        const t = e.headers.get("etag") || null;
        return t ? t.replace(/^W\//, "").replace(/"/g, "") : null;
      }
      n.d(t, { K: () => a });
      class a {
        #e;
        #t;
        constructor(e, t) {
          (this.#t = null), (this.#e = e), (this.#t = t);
        }
        registerInstallation(e) {
          return this.#e.post("/v3/installation", { token: e });
        }
        requestRemoteAuthCode() {
          return this.#e.post("/v3/auth/remote_code");
        }
        async requestWebAuthCode() {
          return (await this.#e.post("/v3/auth/web_code")).code;
        }
        createWebview(e) {
          return this.#e.post("/v3/webview", e);
        }
        getUserAccount() {
          return this.#e.get("/v3/account");
        }
        async getUserAccountFlags(e) {
          return (await this.#e.get(`/v3/account/flags/${e}`)).flags;
        }
        sendAccountVerificationEmail() {
          return this.#e.post("/v3/account/verify_send");
        }
        changeAccountEmail(e, t = null) {
          return this.#e.post("/v3/account/email", {
            email: e,
            currentPassword: t,
          });
        }
        changeAccountPassword(e, t = null) {
          return this.#e.post("/v3/account/password", {
            password: e,
            currentPassword: t,
          });
        }
        changeAccountUsername(e, t = null) {
          return this.#e.post("/v3/account/username", {
            username: e,
            currentPassword: t,
          });
        }
        changeAccountProfileImage(e) {
          return this.#e.post("/v3/account/profile_image", { profileImage: e });
        }
        setAccountLanguage(e, t) {
          return this.#e.post("/v3/account/language", { tag: e, auto: t });
        }
        resumeSubscription() {
          return this.#e.post("/v3/account/subscription", { state: "active" });
        }
        async getBillingPortalUrl() {
          const e = await this.#e.get("/v3/account/billing_portal");
          return e ? e.url : null;
        }
        async getCatalog(e) {
          const t = {
            method: "GET",
            cache: "no-store",
            headers: { Accept: "application/json" },
          };
          e && (t.headers["If-None-Match"] = `"${e}"`);
          const n = await fetch(this.#t, t);
          return {
            body: 304 !== n.status ? await n.json() : null,
            cacheKey: s(n),
          };
        }
        getUnavailableTitle(e) {
          return this.#e.get(`/v3/unavailable_titles/${e}`);
        }
        searchUnavailableTitles(e, t) {
          return this.#e.get("/v3/unavailable_titles", {
            q: e,
            limit: t.toString(),
          });
        }
        getUnavailableTitlesByCorrelationIds(e) {
          return this.#e.post("/v3/unavailable_titles", e);
        }
        getMostCompatibleTrainerForGame(e, t, n) {
          return this.#e.get(`/v3/games/${e}/trainer`, {
            gameVersions: n.join(","),
            locale: t,
            v: "2",
          });
        }
        getTrainerById(e, t) {
          return this.#e.get(`/v3/trainers/${e}`, { locale: t, v: "2" });
        }
        getLocalTrainerById(e, t) {
          return this.#e.get(`/v3/trainers/${e}/local`, { locale: t, v: "2" });
        }
        getLatestLocalTrainerForGame(e) {
          return this.#e.get(`/v3/games/${e}/local_trainer`, { v: "2" });
        }
        getTrainerHistoryForGame(e) {
          return this.#e.get(`/v3/games/${e}/trainers`);
        }
        getGameTranslationUrl(e, t) {
          return `${this.#e.baseUrl}/v3/games/${e}/translate/${t}`;
        }
        reportInstalledGameVersions(e) {
          return this.#e.post("/v3/installed_games", e);
        }
        submitAppFeedback(e) {
          return this.#e.post("/v3/app_feedback", { feedback: e });
        }
        submitTrainerFeedback(e) {
          return this.#e.post("/v3/trainer_feedback", e);
        }
        submitAppRating(e, t) {
          return this.#e.post("/v3/ratings", { rating: e, feedback: t });
        }
        recordGamePresence(e) {
          return this.#e.post("/v3/game_presence", { gameId: e });
        }
        boostGame(e, t) {
          return this.#e.post(`/v3/games/${e}/boost`, { availableBoosts: t });
        }
        respondToPoll(e, t, n, s) {
          return this.#e.post(`/v3/polls/${e}/cast`, {
            selections: t,
            customSelection: n,
            details: s,
          });
        }
        getFollowedGames() {
          return this.#e.get("/v3/account/followed_games");
        }
        followGames(e, t) {
          return this.#e.post("/v3/account/followed_games", {
            type: t,
            gameIds: e,
          });
        }
        unfollowGames(e) {
          return this.#e.post("/v3/account/followed_games", {
            type: 0,
            gameIds: e,
          });
        }
        unfollowAllGames() {
          return this.#e.delete("/v3/account/followed_games");
        }
        suggestCheats(e, t) {
          return this.#e.post(`/v3/games/${e}/suggest`, { suggestions: t });
        }
        getPaymentMethods() {
          return this.#e.get("/v3/checkout/methods");
        }
        removePaymentMethod(e) {
          return this.#e.delete(`/v3/checkout/methods/${e}`);
        }
        getConsentRequirements() {
          return this.#e.get("/v3/gdpr");
        }
        giveConsent() {
          return this.#e.post("/v3/account/gdpr", { consentGiven: !0 });
        }
        revokeConsent() {
          return this.#e.post("/v3/account/gdpr", { consentGiven: !1 });
        }
        getPromotion() {
          return this.#e.get("/v3/promotion");
        }
      }
    },
    93869: (e) => {
      e.exports =
        "data:image/svg+xml,%3Csvg%20width%3D%273%27%20height%3D%2711%27%20viewBox%3D%270%200%203%2011%27%20fill%3D%27none%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M0.549943%201.38335C0.549943%200.858679%200.975272%200.43335%201.49994%200.43335C2.02461%200.43335%202.44994%200.85868%202.44994%201.38335V5.71535C2.44994%206.24002%202.02461%206.66535%201.49994%206.66535C0.975272%206.66535%200.549943%206.24002%200.549943%205.71535V1.38335ZM0.604751%2010.1978C0.3571%209.95179%200.233276%209.65255%200.233276%209.30002C0.233276%208.94748%200.3571%208.64824%200.604751%208.40228C0.852401%208.15633%201.1508%208.03335%201.49994%208.03335C1.84909%208.03335%202.14748%208.15633%202.39513%208.40228C2.64279%208.64824%202.76661%208.94748%202.76661%209.30002C2.76661%209.65255%202.64279%209.95179%202.39513%2010.1978C2.14748%2010.4437%201.84909%2010.5667%201.49994%2010.5667C1.1508%2010.5667%200.852401%2010.4437%200.604751%2010.1978Z%27%20fill%3D%27%23FFAA2B%27%2F%3E%3C%2Fsvg%3E";
    },
    31916: (e) => {
      e.exports =
        "data:image/svg+xml,%3Csvg%20width%3D%273%27%20height%3D%279%27%20viewBox%3D%270%200%203%209%27%20fill%3D%27none%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20fill-rule%3D%27evenodd%27%20clip-rule%3D%27evenodd%27%20d%3D%27M0.75%201.25C0.75%200.835786%201.08579%200.5%201.5%200.5C1.91421%200.5%202.25%200.835787%202.25%201.25V4.67C2.25%205.08421%201.91421%205.42%201.5%205.42C1.08579%205.42%200.75%205.08421%200.75%204.67V1.25ZM0.793269%208.20874C0.597755%208.01456%200.5%207.77832%200.5%207.5C0.5%207.22168%200.597755%206.98544%200.793269%206.79126C0.988783%206.59709%201.22436%206.5%201.5%206.5C1.77564%206.5%202.01122%206.59709%202.20673%206.79126C2.40224%206.98544%202.5%207.22168%202.5%207.5C2.5%207.77832%202.40224%208.01456%202.20673%208.20874C2.01122%208.40291%201.77564%208.5%201.5%208.5C1.22436%208.5%200.988783%208.40291%200.793269%208.20874Z%27%20fill%3D%27%23FFAA2B%27%2F%3E%3C%2Fsvg%3E";
    },
    81025: (e) => {
      e.exports =
        "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%2712%27%20height%3D%2711%27%20viewBox%3D%270%200%2012%2011%27%20fill%3D%27none%27%3E%3Cpath%20d%3D%27M1%205.75L4%208.75L11%201.75%27%20stroke%3D%27%23ACFF35%27%20stroke-width%3D%271.5%27%20stroke-linecap%3D%27round%27%2F%3E%3C%2Fsvg%3E%0A";
    },
    16511: (e) => {
      e.exports = JSON.parse(
        '{"debug":false,"testing":false,"appOrigin":"https://app.wemod.com","websiteUrl":"https://www.wemod.com","releaseFeed":"https://api.wemod.com/client/channels/{channel}","storageNamespace":"infinity","services":{"api":{"baseUrl":"https://api.wemod.com","clientId":"infinity","catalogUrl":"https://storage-cdn.wemod.com/catalog.json"},"ga":{"measurementId":"G-SDMRBNNJT6"},"pusher":{"key":"f6178078f7b082466037","options":{"authEndpoint":"https://api.wemod.com/auth/pusher"}},"bugsnag":{"apiKey":"85c3ea033d905b3cecc4acb31caefc16"},"cdn":{"baseUrl":"https://api-cdn.wemod.com"},"playwire":{"preContentHash":"","trendiHash":""},"amplitude":{"apiKey":"2c992888dd619918396ea013f779271d"}}}'
      );
    },
  },
]);

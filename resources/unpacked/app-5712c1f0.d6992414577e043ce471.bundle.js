"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [4594],
  {
    "app/app.scss": (e, t, a) => {
      a.r(t), a.d(t, { default: () => p });
      var i = a(8081),
        o = a.n(i),
        r = a(23645),
        n = a.n(r)()(o());
      n.push([
        e.id,
        '#app{z-index:0;position:relative}.app-layout{background:var(--theme--background);width:100vw;height:100vh;position:relative}body.disable-view-transition .app-content>router-view .view-background,body.disable-view-transition .app-content>.app-view .view-background{animation:none !important}body.disable-looping-animation *:not(.allow-looping-animation),body.disable-looping-animation *:not(.allow-looping-animation):before,body.disable-looping-animation *:not(.allow-looping-animation):after{animation-iteration-count:1 !important}.app-content{width:100vw;height:100vh;z-index:0}.app-content>router-view,.app-content>.app-view{display:block;height:100%}.app-content>router-view .view-background,.app-content>.app-view .view-background{--overflow-fade--background: var(--theme--background);display:block;height:100%;position:relative;z-index:0}.app-content>router-view .view-background.au-enter-active,.app-content>.app-view .view-background.au-enter-active{animation:view-transition .15s}.app-content>router-view .view-background.au-leave-active,.app-content>.app-view .view-background.au-leave-active{animation:view-transition .15s reverse forwards}.app-content>router-view .view-background>.overflow-fade__wrapper:before,.app-content>.app-view .view-background>.overflow-fade__wrapper:before{top:var(--constant--appHeaderHeight)}.app-content>router-view .view-background .view-scrollable,.app-content>.app-view .view-background .view-scrollable{display:flex;flex-direction:column;height:100%;overflow-y:overlay;overflow-x:hidden;width:100%;padding:var(--constant--appHeaderHeight) 30px 20px}.app-content>router-view .view-background .view-scrollable::-webkit-scrollbar,.app-content>.app-view .view-background .view-scrollable::-webkit-scrollbar{width:7px;height:7px;background:rgba(255,255,255,.1);border-radius:10px;margin:10px}.app-content>router-view .view-background .view-scrollable::-webkit-scrollbar-thumb:window-inactive,.app-content>router-view .view-background .view-scrollable::-webkit-scrollbar-thumb,.app-content>.app-view .view-background .view-scrollable::-webkit-scrollbar-thumb:window-inactive,.app-content>.app-view .view-background .view-scrollable::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,.2);border-radius:99px;border:1px solid rgba(0,0,0,.2);background-clip:padding-box}.app-content>router-view .view-background .view-scrollable::-webkit-scrollbar-thumb:window-inactive:hover,.app-content>router-view .view-background .view-scrollable::-webkit-scrollbar-thumb:hover,.app-content>.app-view .view-background .view-scrollable::-webkit-scrollbar-thumb:window-inactive:hover,.app-content>.app-view .view-background .view-scrollable::-webkit-scrollbar-thumb:hover{background-color:rgba(255,255,255,.5)}.app-content>router-view .view-background .view-scrollable::-webkit-scrollbar-button:single-button:vertical:decrement,.app-content>.app-view .view-background .view-scrollable::-webkit-scrollbar-button:single-button:vertical:decrement{height:var(--constant--appHeaderHeight)}.app-content>router-view .view-background .view-scrollable::-webkit-scrollbar-button:single-button:vertical:increment,.app-content>.app-view .view-background .view-scrollable::-webkit-scrollbar-button:single-button:vertical:increment{height:0px}.app-content>router-view .view-background .view-scrollable::-webkit-scrollbar,.app-content>.app-view .view-background .view-scrollable::-webkit-scrollbar{background:-webkit-linear-gradient(transparent 0px, transparent var(--constant--appHeaderHeight), rgba(255, 255, 255, 0.1) var(--constant--appHeaderHeight), rgba(255, 255, 255, 0.1) calc(100% - 0px), transparent calc(100% - 0px))}.app-content>router-view .view-background .view-scrollable:before,.app-content>.app-view .view-background .view-scrollable:before{content:"";position:absolute;left:0;top:0;width:100%;height:var(--constant--appHeaderHeight);background:rgba(var(--theme--background--rgb), 0.95);z-index:1}.app-header{position:absolute;left:0;top:0;display:flex;flex-direction:column;width:100%;padding:0}.app-header:before{content:"";display:block;position:fixed;left:0;top:0;width:100%;height:3px;-webkit-app-region:no-drag;z-index:9999}@keyframes view-transition{from{opacity:0;transform:translate(10px, 0)}to{opacity:1;transform:translate(0, 0)}}',
        "",
      ]);
      const p = n;
    },
    "app/app.html": (e, t, a) => {
      a.r(t), a.d(t, { default: () => i });
      const i =
        '<template> <require from="./app.scss"></require> <require from="./resources/elements/app-header"></require> <require from="./resources/elements/promotion-banner"></require> <require from="./toasts"></require> <div id="fullscreen-dialogs"></div> <div id="dialogs"></div> <toasts></toasts> <div class="app-layout"> <header class="app-header"> <app-header></app-header> <promotion-banner class="inert-when-dialog-open"></promotion-banner> </header> <div class="app-content inert-when-dialog-open"> <router-view></router-view> </div> </div> </template> ';
    },
    "api/index": (e, t, a) => {
      a.r(t), a.d(t, { configure: () => r });
      var i = a("shared/api/index"),
        o = a(23739);
      function r(e, t) {
        e.container.registerSingleton(o.K, function () {
          return new o.K(e.container.get(i.WeModApiClient), t.catalogUrl);
        });
      }
    },
    "app/app": (e, t, a) => {
      a.r(t), a.d(t, { App: () => fe });
      var i = a(70655),
        o = a("aurelia-framework"),
        r = a(45437),
        n = a(18739),
        p = a(62546),
        c = a(27170),
        s = a(11912),
        l = a(31033),
        d = a(85882),
        v = a(68611),
        b = a(83467),
        w = a(40387),
        u = a(30248),
        g = a(26020),
        h = a(2789),
        k = a(27099),
        m = a(82826),
        f = a(23924),
        y = a(25626),
        x = a(19748),
        H = a(74036),
        q = a(23015),
        L = a(23170),
        z = a(46176),
        A = a(72326),
        C = a(62224),
        E = a(16943),
        K = a(65793),
        S = a(81769),
        W = a(87632),
        j = a(51296),
        M = a(34535),
        _ = a(56372),
        O = a(30035),
        R = a(95112),
        X = a(35080),
        B = a(76330),
        F = a(83202),
        G = a(28529),
        T = a(19502),
        U = a(93884),
        D = a(7137),
        J = a(248),
        P = a(21375),
        Q = a(72542),
        V = a(27366),
        Y = a(8397),
        Z = a(30291),
        $ = a(17564),
        I = a(8022),
        N = a(67824),
        ee = a(4249),
        te = a(91978),
        ae = a(21709),
        ie = a(86241),
        oe = a(80538),
        re = a(68377),
        ne = a(93192),
        pe = a(97845),
        ce = a(93122),
        se = a(86021),
        le = a(81016),
        de = a(59979),
        ve = a(91060),
        be = a(10207),
        we = a(66971),
        ue = a(4351);
      const ge = [a(12437).U, K.F, f.O, g.W, D.Q, O.c, B.K],
        he = [
          U.X,
          v.v,
          d.B,
          w.H,
          H.AD,
          A.q,
          ue.j,
          z.t,
          S.m,
          W.F0,
          u.X,
          F.b,
          f.O,
          l.r,
          m.x,
          G.s,
          L.r,
          P.a,
          Q.s,
          Y.Y,
          Z.h,
          $.l,
          V.M,
          J.s,
          M.X,
          _.d,
          b.W,
          R.z,
          k.T,
          h.y,
          j.p,
          T.n,
          E.W,
          x.r,
          X.v,
          q.e,
          ae.u,
          N.J,
          re.G,
          pe.x,
          ee.L,
          te.$,
          be.B,
          I.G,
          oe.y,
          ne.r,
          se.s,
          ve.r,
          le.K,
          de.h,
          ie.O,
          we.l,
          ce.c,
          y.K,
          C.i,
        ];
      let ke = class {
        #e;
        #t;
        #a;
        constructor(e) {
          this.#e = e;
        }
        async activate() {
          this.#t = ge.map((e) => this.#e.get(e));
          for (const e of this.#t) await e.activate();
        }
        async deactivate() {
          for (const e of this.#t) await e.deactivate();
          this.#t = null;
        }
        attached(e) {
          (this.#a = he.map((e) => this.#e.get(e))),
            this.#a.forEach((t) => t.attached(e));
        }
        detached() {
          this.#a.forEach((e) => e.detached()), (this.#a = null);
        }
      };
      ke = (0, i.gn)(
        [(0, o.autoinject)(), (0, i.w6)("design:paramtypes", [o.Container])],
        ke
      );
      var me = a(40522);
      let fe = class {
        #i;
        #a;
        #o;
        #r;
        constructor(e, t) {
          (this.#i = e), (this.#a = t);
        }
        configureRouter(e, t) {
          (e.options.root = "/"), e.map(me.Z), (this.#o = t);
        }
        async activate() {
          (this.#r = new s.K4()
            .pushEventListener(window, "blur", () => this.#n(!1))
            .pushEventListener(window, "focus", () => this.#n(!0))),
            await this.#a.activate();
        }
        deactivate() {
          return this.#r.dispose(), this.#a.deactivate();
        }
        attached() {
          this.#a.attached(this.#o),
            this.#i.state
              .pipe((0, n.P)(), (0, p.j)("flags", "firstRun"))
              .subscribe((e) => {
                e && this.#i.dispatch(c.V0, "firstRun", !1);
              });
        }
        detached() {
          this.#a.detached();
        }
        #n(e) {
          document.body.classList.toggle("disable-looping-animation", !e);
        }
      };
      fe = (0, i.gn)(
        [(0, o.autoinject)(), (0, i.w6)("design:paramtypes", [r.yh, ke])],
        fe
      );
    },
    78681: (e, t, a) => {
      a.d(t, { b: () => p });
      var i = a(70655),
        o = a("aurelia-framework"),
        r = a(98234),
        n = a.n(r);
      let p = class {
        play({ loop: e = !1, autoplay: t = !0, path: a }) {
          const i = document.createElement("div"),
            o = n().loadAnimation({
              container: i,
              renderer: "svg",
              loop: e,
              autoplay: t,
              path: a,
            });
          return (
            (i.style.cssText =
              "\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      z-index: 9999;\n      pointer-events: none;\n    "),
            document.body.appendChild(i),
            o.addEventListener("complete", () => {
              document.body.removeChild(i);
            }),
            o
          );
        }
      };
      p = (0, i.gn)([(0, o.singleton)()], p);
    },
  },
]);

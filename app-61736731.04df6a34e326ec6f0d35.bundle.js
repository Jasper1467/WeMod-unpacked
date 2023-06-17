"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [8855],
  {
    "app/toasts.scss": (e, s, a) => {
      a.r(s), a.d(s, { default: () => m });
      var t = a(8081),
        o = a.n(t),
        r = a(23645),
        i = a.n(r),
        n = a(61667),
        g = a.n(n),
        c = new URL(a(24052), a.b),
        l = i()(o()),
        d = g()(c);
      l.push([
        e.id,
        'playwire-ad-popup{display:flex;background:var(--theme--background);width:375px;height:210px}playwire-ad-popup .webview-placeholder{overflow:hidden;width:100%;height:100%;border:0}ad-popup{--playwire-ad--width: 375px;--playwire-ad--height: 210px;display:block;position:fixed;right:30px;bottom:0;padding-bottom:20px;z-index:9998;visibility:hidden}ad-popup .wrapper{background:var(--theme--background) linear-gradient(rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)) !important;border-bottom-left-radius:10px;border-bottom-right-radius:10px}ad-popup.active{visibility:visible}ad-popup .content{width:var(--ad-popup--width);display:flex;align-items:center;margin:0;padding:10px 20px;min-height:56px}ad-popup .content i{margin-right:15px}ad-popup .content i svg{width:43px;height:33px}ad-popup .content p{font-size:12px;line-height:18px;color:rgba(255,255,255,.6);margin:0}ad-popup .content p a{font-size:12px;line-height:18px;background:rgba(0,0,0,0) !important;padding:0;border:0;display:inline-flex;align-items:center;color:var(--theme--highlight);text-decoration:none}ad-popup .content p a svg *{fill:var(--theme--highlight)}@media(hover: hover){ad-popup .content p a:hover{color:#fff}ad-popup .content p a:hover svg *{fill:#fff}}ad-popup .content p a:after{content:"";display:inline-block;width:5px;height:9px;-webkit-mask-box-image:url(' +
          d +
          ");margin-left:5px;background:var(--theme--highlight);transition:transform .15s}@media(hover: hover){ad-popup .content p a:hover{color:#fff}ad-popup .content p a:hover:after{transform:translateX(3px);background:#fff}}@media(max-height: 800px){ad-popup{padding-bottom:0}ad-popup .content{display:none}}toasts{transition:opacity .15s,visibility 0s .15s}toasts .messages{position:fixed;left:20px;bottom:20px;z-index:1001;pointer-events:none;display:inline-flex;flex-direction:column;padding-right:20px}toasts .messages .message-wrapper{display:inline-block;pointer-events:all}toasts .messages .message-wrapper+.message-wrapper{margin-top:20px}toasts .messages .message-wrapper-inner{display:inline-block}toasts .messages .message{box-shadow:0 0 5px rgba(var(--theme--background--rgb), 0.5);position:relative;border-radius:10px;border:1px solid rgba(255,255,255,.05);padding:11px 15px;text-align:left;display:inline-flex;align-items:center;position:relative}.theme-default toasts .messages .message{background:#11171d linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-purple-pro toasts .messages .message{background:#0b172a linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-green-pro toasts .messages .message{background:#1b1b1b linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-orange-pro toasts .messages .message{background:#161c24 linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}.theme-pro toasts .messages .message{background:#111 linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))}toasts .messages .message>*+*{margin-left:9px}toasts .messages .message,toasts .messages .message a{font-size:14px;line-height:21px;line-height:19px;font-weight:500;color:rgba(255,255,255,.5)}toasts .messages .message strong,toasts .messages .message em{font-weight:700;color:#fff;font-style:normal}toasts .messages .message p{margin:0;padding:0}toasts .messages .message p+p{margin-top:10px}toasts .messages .message .action{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-size:13px;line-height:20px;font-weight:700;--cta--padding: 11px;--cta--height: 26px;--cta--hover--border-width: 1px}toasts .messages .message .action,toasts .messages .message .action *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) toasts .messages .message .action{border:1px solid #fff}}toasts .messages .message .action>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}toasts .messages .message .action>*:first-child{padding-left:0}toasts .messages .message .action>*:last-child{padding-right:0}toasts .messages .message .action svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) toasts .messages .message .action svg *{fill:CanvasText}}toasts .messages .message .action svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) toasts .messages .message .action svg{opacity:1}}toasts .messages .message .action img{height:50%}toasts .messages .message .action:disabled{opacity:.3}toasts .messages .message .action:disabled,toasts .messages .message .action:disabled *{cursor:default;pointer-events:none}@media(hover: hover){toasts .messages .message .action:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}toasts .messages .message .action:not(:disabled):hover svg{opacity:1}}toasts .messages .message .action:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}toasts .messages .message .action:active{background-color:rgba(0,0,0,0) !important;color:rgba(255,255,255,.8) !important}toasts .messages .message .action.primary{background-color:rgba(255,255,255,.6) !important;color:var(--theme--background) !important;transition:filter .15s;box-shadow:none !important}@media(hover: hover){toasts .messages .message .action.primary:hover{filter:brightness(1.1)}}toasts .messages .message .close-button{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)) !important;display:inline-flex;width:26px;height:26px;box-shadow:none;padding:0;border-radius:50%;border:0;align-items:center;justify-content:center;transition:background-color .15s;position:absolute;right:-12.5px;top:-12.5px}@media(forced-colors: active){body:not(.override-contrast-mode) toasts .messages .message .close-button{border:1px solid #fff}}toasts .messages .message .close-button svg{opacity:1}@media(hover: hover){toasts .messages .message .close-button:hover{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)) !important}}toasts .messages .message.ok .icon svg *{fill:var(--color--accent)}toasts .messages .message.alert{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(var(--color--alert--rgb), 0.12), rgba(var(--color--alert--rgb), 0.12)) !important}toasts .messages .message.alert,toasts .messages .message.alert a{color:rgba(var(--color--alert--rgb), 0.9)}toasts .messages .message.alert .action{box-shadow:inset 0 0 0 1px var(--color--alert);--cta__icon--color: var(--color--alert)}@media(hover: hover){toasts .messages .message.alert .action:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--color--alert);background-color:rgba(0,0,0,0)}}toasts .messages .message.alert .action:not(:disabled):active{background-color:var(--color--alert)}toasts .messages .message.alert .close-button{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(var(--color--alert--rgb), 0.2), rgba(var(--color--alert--rgb), 0.2)) !important}@media(hover: hover){toasts .messages .message.alert .close-button:hover{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(var(--color--alert--rgb), 0.3), rgba(var(--color--alert--rgb), 0.3)) !important}}.theme-default toasts .messages .message.warning{background:#1c211f;border-color:rgba(230,214,67,.05)}.theme-purple-pro toasts .messages .message.warning{background:#16212b;border-color:rgba(230,214,67,.05)}.theme-green-pro toasts .messages .message.warning{background:#25241d;border-color:rgba(230,214,67,.05)}.theme-orange-pro toasts .messages .message.warning{background:#202526;border-color:rgba(230,214,67,.05)}.theme-pro toasts .messages .message.warning{background:#1c1b14;border-color:rgba(230,214,67,.05)}toasts .messages .message.warning .content strong{color:#e6d643}toasts .messages .message.warning alert-icon{background:rgba(230,214,67,.3)}toasts .messages .message.warning alert-icon i svg *{fill:#e6d643}.theme-default toasts .messages .message.gift{background:#113441;border-color:#12738e}.theme-purple-pro toasts .messages .message.gift{background:#0c344c;border-color:#0f7395}.theme-green-pro toasts .messages .message.gift{background:#1a383f;border-color:#17758d}.theme-orange-pro toasts .messages .message.gift{background:#163947;border-color:#157692}.theme-pro toasts .messages .message.gift{background:#112f37;border-color:#127088}toasts .messages .message.gift .content strong{font-weight:500;color:var(--color--brand-blue)}toasts .messages .message.gift .icon svg *{fill:var(--color--brand-green)}toasts .messages .message.gift .action{box-shadow:inset 0 0 0 1px var(--color--brand-blue);--cta__icon--color: var(--color--brand-blue)}@media(hover: hover){toasts .messages .message.gift .action:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--color--brand-blue);background-color:rgba(0,0,0,0)}}toasts .messages .message.gift .action:not(:disabled):active{background-color:var(--color--brand-blue)}toasts .messages .message.clickable,toasts .messages .message.clickable *{cursor:pointer}toasts .messages .message.clickable.arrow-up:hover .icon svg *,toasts .messages .message.clickable.arrow-down:hover .icon svg *{fill:#fff}toasts .messages .message.arrow-up .icon svg *,toasts .messages .message.arrow-down .icon svg *{fill:rgba(255,255,255,.6);transition:fill .15s}toasts .messages .message.arrow-up .icon{transform:rotate(180deg)}toasts:not(.empty)~.app-layout .app-content>router-view .view-background .view-scrollable{padding-bottom:calc(var(--toasts-safe-area) + 20px)}.ux-dialog-open~toasts .messages .message-wrapper.persist:not(.on-top),.ux-dialog-open~toasts .messages .message-wrapper.has-actions:not(.on-top){display:none !important}.ad-popup-active toasts .messages{max-width:calc(100vw - var(--ad-popup--width) - 30px - 20px)}",
        "",
      ]);
      const m = l;
    },
    "app/toasts.html": (e, s, a) => {
      a.r(s), a.d(s, { default: () => l });
      var t = a(27091),
        o = a.n(t),
        r = new URL(a(47254), a.b),
        i = new URL(a(27590), a.b),
        n = new URL(a(25661), a.b),
        g = new URL(a(98894), a.b),
        c = new URL(a(27349), a.b);
      const l =
        '<template class="${!toaster.messages.length ? \'empty\' : \'\'}"> <require from="./toasts.scss"></require> <require from="../resources/elements/alert-icon.html"></require> <div class="messages" ref="messagesEl"> <div class="message-wrapper au-animate ${message.persist ? \'persist\' : \'\'} ${message.actions.length ? \'has-actions\' : \'\'} ${message.onTop ? \'on-top\' : \'\'}" repeat.for="message of toaster.messages | toastSort"> <div class="message-wrapper-inner"> <div class="message ${message.type} ${message.onclick ? \'clickable\' : \'\'}" mouseenter.trigger="toaster.cancelRemoval(message)" mouseleave.trigger="toaster.removeAfterDelay(message, true)" click.delegate="handleClick(message)" tabindex.bind="message.onclick ? 0 : -1"> <i if.bind="message.type == \'ok\'" class="icon"><inline-svg src="' +
        o()(r) +
        '"></inline-svg></i> <i if.bind="message.type == \'boost\'" class="icon"><inline-svg src="' +
        o()(i) +
        '"></inline-svg></i> <i if.bind="[\'arrow-up\', \'arrow-down\'].includes(message.type)" class="icon"><inline-svg src="' +
        o()(n) +
        '"></inline-svg></i> <i if.bind="message.type === \'gift\'" class="icon"><inline-svg src="' +
        o()(g) +
        '"></inline-svg></i> <alert-icon if.bind="[\'alert\', \'warning\'].includes(message.type)" class="icon"></alert-icon> <strong if.bind="message.type == \'tada\'">🎉</strong> <div class="content"> <p innerhtml.bind="message.content | i18n:(message.i18nParams||{}) | markdown"></p> </div> <button if.bind="!message.lock" class="close-button" click.delegate="toaster.remove(message)"> <inline-svg src="' +
        o()(c) +
        '"></inline-svg> </button> <button repeat.for="action of message.actions" class="action ${action.primary ? \'primary\' : \'\'}" click.delegate="action.onclick()">${action.label | i18n}</button> </div> </div> </div> </div> </template> ';
    },
    26478: (e, s, a) => {
      a.d(s, { x: () => i });
      var t = a(70655),
        o = a("aurelia-framework"),
        r = a(11912);
      let i = class {
        constructor() {
          this.messages = [];
        }
        toast(e) {
          return (
            this.messages.push(e), e.persist || this.removeAfterDelay(e), e
          );
        }
        remove(e) {
          const s = this.messages.findIndex((s) => s === e);
          -1 !== s && (this.messages.splice(s, 1), e.onremove?.());
        }
        removeAfterDelay(e, s = !1) {
          e.persist ||
            (this.cancelRemoval(e),
            (e.removeTimeout = (0, r.rk)(
              () => this.remove(e),
              s ? 2500 : 5e3
            )));
        }
        cancelRemoval(e) {
          e.removeTimeout &&
            (e.removeTimeout.dispose(), (e.removeTimeout = null));
        }
      };
      i = (0, t.gn)([(0, o.singleton)()], i);
    },
    "app/toasts": (e, s, a) => {
      a.r(s), a.d(s, { ToastSortValueConverter: () => l, Toasts: () => i });
      var t = a(70655),
        o = a("aurelia-framework"),
        r = a(26478);
      let i = class {
        #e;
        constructor(e) {
          this.toaster = e;
        }
        attached() {
          (this.#e = new ResizeObserver(() => this.#s())),
            this.#e.observe(this.messagesEl),
            this.#s();
        }
        detached() {
          this.#e.disconnect();
        }
        handleClick(e) {
          e.onclick && e.onclick();
        }
        #s() {
          const e = this.messagesEl.getBoundingClientRect(),
            s = window.innerHeight - e.bottom + e.height;
          document.body.style.setProperty("--toasts-safe-area", `${s}px`);
        }
      };
      i = (0, t.gn)(
        [(0, o.autoinject)(), (0, t.w6)("design:paramtypes", [r.x])],
        i
      );
      const n = Object.freeze(["arrow-up", "arrow-down"]);
      function g(e) {
        return n.includes(e.type);
      }
      function c(e, s) {
        return (
          (g(e) && !g(s) ? -1 : !g(e) && g(s) ? 1 : 0) ||
          (e.lock && !s.lock ? 1 : !e.lock && s.lock ? -1 : 0) ||
          (e.persist && !s.persist ? 1 : !e.persist && s.persist ? -1 : 0)
        );
      }
      class l {
        toView(e) {
          return e.slice(0).sort(c);
        }
      }
    },
  },
]);

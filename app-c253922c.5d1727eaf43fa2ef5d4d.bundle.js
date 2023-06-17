"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [213],
  {
    "settings/resources/elements/text.scss": (e, t, r) => {
      r.r(t), r.d(t, { default: () => i });
      var o = r(8081),
        s = r.n(o),
        a = r(23645),
        l = r.n(a)()(s());
      l.push([
        e.id,
        '.text-setting{position:relative;width:100%}.text-setting input{display:block;color:rgba(255,255,255,.9);padding:4px 9px 5px 9px;border:1px solid rgba(0,0,0,0);transition:color .15s,border-color .15s;position:relative;background:rgba(255,255,255,.05);border-radius:5px;height:30px;width:100%}.text-setting input,.text-setting input::placeholder{font-size:14px;line-height:21px;font-weight:500}.text-setting input::placeholder{color:rgba(255,255,255,.3)}.text-setting input:disabled{opacity:.5}.text-setting input:focus{border-color:var(--theme--highlight);caret-color:var(--theme--highlight);color:#fff}.text-setting input:focus+*{--input__label--color: rgba(255, 255, 255, 0.6)}.text-setting input[maxlength="2"]{max-width:70px}.text-setting .clear-button{position:absolute;right:12px;top:11px;background:rgba(0,0,0,0);border:0;padding:0;opacity:.2;transition:opacity .15s;display:inline-flex}.text-setting .clear-button:hover{opacity:1}',
        "",
      ]);
      const i = l;
    },
    "settings/resources/elements/theme-selector.scss": (e, t, r) => {
      r.r(t), r.d(t, { default: () => d });
      var o = r(8081),
        s = r.n(o),
        a = r(23645),
        l = r.n(a),
        i = r(61667),
        n = r.n(i),
        c = new URL(r(81025), r.b),
        p = l()(s()),
        h = n()(c);
      p.push([
        e.id,
        '.theme-selector{display:flex;flex-wrap:wrap;margin-right:-20px}.theme-selector .theme{background:rgba(0,0,0,0);border:0;padding:0;margin-bottom:20px;margin-right:20px}.theme-selector .theme .thumbnail{width:124px;height:77px;border-radius:5px;overflow:hidden;transition:border-color .15s}.theme-selector .theme footer{display:flex;flex-direction:row;align-items:center;margin-top:10px}.theme-selector .theme footer .wrapper{--checkbox--checked-color: var(--theme--highlight);--checkbox__label--color: rgba(255, 255, 255, 0.5);display:inline-flex;align-items:center;flex:1}.theme-selector .theme footer .wrapper,.theme-selector .theme footer .wrapper *{cursor:pointer}.theme-selector .theme footer .wrapper>*:first-child{margin-right:9px}.theme-selector .theme footer .wrapper .radio{display:inline-block;width:15px;height:15px;border:1px solid rgba(255,255,255,.25);border-radius:4px;position:relative;background:rgba(0,0,0,0);transition:background-color .15s;-webkit-appearance:none;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;width:15px;height:15px;border-color:rgba(255,255,255,.25);background-color:rgba(0,0,0,0)}.theme-selector .theme footer .wrapper .radio,.theme-selector .theme footer .wrapper .radio *{cursor:pointer}.theme-selector .theme footer .wrapper .radio:checked:before{opacity:1}.theme-selector .theme footer .wrapper .radio:before{background:var(--checkbox--checked-color);content:"";display:block;position:absolute;left:0;top:0;width:15px;height:11px;opacity:0;-webkit-mask-box-image:url(' +
          h +
          ")}.theme-selector .theme footer .wrapper .radio:before{width:9px;height:9px;border-radius:50%;-webkit-mask-box-image:none;position:relative;top:initial;left:initial;box-shadow:inset 0 0 0 1px var(--theme--background);transform:scale(1)}.theme-selector .theme footer .wrapper .label{font-size:13px;line-height:20px;font-weight:500;color:var(--checkbox__label--color)}.theme-selector .theme footer .wrapper .label,.theme-selector .theme footer .wrapper .label *{cursor:pointer}.theme-selector .theme footer .pro-badge{background-color:var(--theme--highlight);display:inline-block;font-weight:800;font-size:14px;text-transform:uppercase;color:#fff;line-height:20px;letter-spacing:.6px;padding:0 4px;border-radius:2.5px;min-width:0;text-rendering:geometricPrecision;line-height:14px;font-size:10px;letter-spacing:.4px;padding:0 3px;background:linear-gradient(225deg, var(--color--brand-green) 0%, var(--color--pro) 100%);color:#fff;display:flex;flex:0 0 auto}@media(forced-colors: active){body:not(.override-contrast-mode) .theme-selector .theme footer .pro-badge{border:1px solid #fff}}.theme-selector .theme:hover .thumbnail,.theme-selector .theme.selected .thumbnail{border:1px solid var(--theme--highlight)}.theme-selector .theme:hover footer .radio,.theme-selector .theme.selected footer .radio{border-color:var(--theme--highlight)}.theme-selector .theme:hover footer .radio:before,.theme-selector .theme.selected footer .radio:before{opacity:1}",
        "",
      ]);
      const d = p;
    },
    "settings/resources/elements/text.html": (e, t, r) => {
      r.r(t), r.d(t, { default: () => l });
      var o = r(27091),
        s = r.n(o),
        a = new URL(r(27349), r.b);
      const l =
        '<template bindable="value"> <require from="./text.scss"></require> <div class="text-setting"> <input type="text" value.two-way="value" maxlength.bind="setting.maxLength || 9999"> <button class="clear-button" click.delegate="value = \'\'" if.bind="value"> <inline-svg src="' +
        s()(a) +
        '"></inline-svg> </button> </div> </template> ';
    },
    "settings/resources/elements/theme-selector.html": (e, t, r) => {
      r.r(t), r.d(t, { default: () => p });
      var o = r(27091),
        s = r.n(o),
        a = new URL(r(46376), r.b),
        l = new URL(r(76273), r.b),
        i = new URL(r(31921), r.b),
        n = new URL(r(55601), r.b),
        c = new URL(r(74816), r.b);
      const p =
        '<template> <require from="./theme-selector.scss"></require> <div class="theme-selector"> <button class="theme ${selectedTheme == \'default\' ? \'selected\' : \'\'}" click.delegate="selectTheme(\'default\')"> <img class="thumbnail" src="' +
        s()(a) +
        '"> <footer> <span class="wrapper"> <span class="radio"></span> <span class="label">${\'theme_selector.default\' | i18n}</span> </span> </footer> </button> <button class="theme ${selectedTheme == \'purple-pro\' ? \'selected\' : \'\'} ${isPro ? \'\' : \'trigger-pro-cta\'}" click.delegate="selectTheme(\'purple-pro\')" pro-cta="value: theme_selector_item; disabled.bind: isPro;"> <img class="thumbnail" src="' +
        s()(l) +
        '"> <footer> <span class="wrapper"> <span class="radio"></span> <span class="label">${\'theme_selector.purple\' | i18n}</span> </span> <span class="pro-badge">Pro</span> </footer> </button> <button class="theme ${selectedTheme == \'green-pro\' ? \'selected\' : \'\'} ${isPro ? \'\' : \'trigger-pro-cta\'}" click.delegate="selectTheme(\'green-pro\')" pro-cta="value: theme_selector_item; disabled.bind: isPro;"> <img class="thumbnail" src="' +
        s()(i) +
        '"> <footer> <span class="wrapper"> <span class="radio"></span> <span class="label">${\'theme_selector.green\' | i18n}</span> </span> <span class="pro-badge">Pro</span> </footer> </button> <button class="theme ${selectedTheme == \'orange-pro\' ? \'selected\' : \'\'} ${isPro ? \'\' : \'trigger-pro-cta\'}" click.delegate="selectTheme(\'orange-pro\')" pro-cta="value: theme_selector_item; disabled.bind: isPro;"> <img class="thumbnail" src="' +
        s()(n) +
        '"> <footer> <span class="wrapper"> <span class="radio"></span> <span class="label">${\'theme_selector.orange\' | i18n}</span> </span> <span class="pro-badge">Pro</span> </footer> </button> <button class="theme ${selectedTheme == \'pro\' ? \'selected\' : \'\'} ${isPro ? \'\' : \'trigger-pro-cta\'}" click.delegate="selectTheme(\'pro\')" pro-cta="value: theme_selector_item; disabled.bind: isPro;"> <img class="thumbnail" src="' +
        s()(c) +
        '"> <footer> <span class="wrapper"> <span class="radio"></span> <span class="label">${\'theme_selector.black\' | i18n}</span> </span> <span class="pro-badge">Pro</span> </footer> </button> </div> </template> ';
    },
    "settings/resources/elements/toggle.html": (e, t, r) => {
      r.r(t), r.d(t, { default: () => o });
      const o =
        '<template bindable="value"> <require from="../../../shared/resources/elements/toggle.html"></require> <toggle value.two-way="value"></toggle> </template> ';
    },
    "settings/resources/elements/theme-selector": (e, t, r) => {
      r.r(t), r.d(t, { ThemeSelector: () => n });
      var o = r(70655),
        s = r("aurelia-framework"),
        a = r(45437),
        l = r(93082),
        i = r(27170);
      let n = class {
        #e;
        constructor(e) {
          (this.source = "settings"), (this.#e = e);
        }
        selectTheme(e) {
          ("default" === e || this.isPro) &&
            this.#e.dispatch(i.D3, { theme: e }, this.source);
        }
        get isPro() {
          return !!this.account?.subscription;
        }
      };
      (0, o.gn)(
        [s.bindable, (0, o.w6)("design:type", String)],
        n.prototype,
        "source",
        void 0
      ),
        (0, o.gn)(
          [
            (0, s.computedFrom)("account"),
            (0, o.w6)("design:type", Boolean),
            (0, o.w6)("design:paramtypes", []),
          ],
          n.prototype,
          "isPro",
          null
        ),
        (n = (0, o.gn)(
          [
            (0, l.b)({
              selectors: {
                selectedTheme: (0, l.g)("settings", "theme"),
                account: (0, l.g)("account"),
              },
            }),
            (0, s.autoinject)(),
            (0, o.w6)("design:paramtypes", [a.yh]),
          ],
          n
        ));
    },
  },
]);

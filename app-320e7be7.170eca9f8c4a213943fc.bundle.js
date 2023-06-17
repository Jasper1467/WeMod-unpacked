"use strict";
(global.webpackChunkWeMod = global.webpackChunkWeMod || []).push([
  [7970],
  {
    "settings/resources/elements/debug-settings.scss": (e, t, a) => {
      a.r(t), a.d(t, { default: () => l });
      var i = a(8081),
        o = a.n(i),
        s = a(23645),
        n = a.n(s)()(o());
      n.push([
        e.id,
        ".settings-dialog .debug-buttons button{float:left;margin:0 10px 10px 0}.settings-dialog .debug-column{flex-direction:column}.settings-dialog .debug-column .setting-description{margin-bottom:10px}.settings-dialog .debug-groups .hidden{display:none !important}",
        "",
      ]);
      const l = n;
    },
    "settings/resources/elements/notifications-settings.scss": (e, t, a) => {
      a.r(t), a.d(t, { default: () => u });
      var i = a(8081),
        o = a.n(i),
        s = a(23645),
        n = a.n(s),
        l = a(61667),
        r = a.n(l),
        c = new URL(a(69091), a.b),
        d = n()(o()),
        g = r()(c);
      d.push([
        e.id,
        ".notification-settings .setting-name{display:flex;align-items:center}.notification-settings .search{flex:1;position:relative;display:flex;align-items:center;margin-left:15px}.notification-settings .search input{font-size:13px;line-height:20px;font-weight:500;flex:1 1 auto;background:url(" +
          g +
          ") 0 center no-repeat;border:0;color:#fff;padding:0 0 0 25px;margin-right:20px}.notification-settings .search input:placeholder{color:rgba(255,255,255,.25)}.notification-settings .search button{font-size:13px;line-height:20px;font-weight:500;background:rgba(0,0,0,0);padding:0;border:0;outline:none;color:rgba(255,255,255,.25);transition:color .15s}.notification-settings .search button:hover{color:#fff}.notification-settings .no-results-message{font-size:15px;color:rgba(255,255,255,.4)}.notification-settings .setting .setting-info .setting-input{flex-grow:1 !important}.notification-settings .followed-game{display:flex;align-items:center;max-width:710px;overflow:hidden}.notification-settings .followed-game:nth-child(1n+0) img{animation-delay:0.1s}.notification-settings .followed-game:nth-child(2n+0) img{animation-delay:0.2s}.notification-settings .followed-game:nth-child(3n+0) img{animation-delay:0.3s}.notification-settings .followed-game:nth-child(4n+0) img{animation-delay:0.4s}.notification-settings .followed-game:nth-child(5n+0) img{animation-delay:0.5s}.notification-settings .followed-game:nth-child(6n+0) img{animation-delay:0.6s}.notification-settings .followed-game:nth-child(7n+0) img{animation-delay:0.7s}.notification-settings .followed-game:nth-child(8n+0) img{animation-delay:0.8s}.notification-settings .followed-game:nth-child(9n+0) img{animation-delay:0.9s}.notification-settings .followed-game+.followed-game{margin-top:15px}.notification-settings .followed-game .thumbnail{display:inline-block;background:rgba(0,0,0,.1);width:40px;height:19px;border-radius:2.5px;margin-right:14px;flex:0 0 auto}.notification-settings .followed-game .thumbnail:not(.loaded){animation-name:thumbnail-loading;animation-duration:1s;animation-timing-function:linear;animation-direction:alternate;animation-iteration-count:infinite;background-clip:padding-box}.notification-settings .followed-game .name{font-size:14px;line-height:21px;line-height:19px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;color:rgba(255,255,255,.5);margin-right:14px;flex:0 1 auto}.notification-settings .followed-game .platform-icon{opacity:.4;margin-right:8px;flex:0 0 auto}.notification-settings .followed-game .title-link{flex:0 1 auto;display:flex;overflow:hidden}.notification-settings .followed-game .title-link:hover .name{color:#fff}.notification-settings .followed-game .title-link:hover .platform-icon{opacity:.6}.notification-settings .followed-game .spacer{flex:1 1 auto}.notification-settings .followed-game .delete-wrapper{flex:0 0 auto;position:relative}.notification-settings .followed-game .delete-wrapper .tooltip{white-space:nowrap}.notification-settings .followed-game .delete{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;display:inline-flex;width:20px;height:20px;box-shadow:none;padding:0;border-radius:50%;border:0;align-items:center;justify-content:center;transition:background-color .15s}.notification-settings .followed-game .delete,.notification-settings .followed-game .delete *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) .notification-settings .followed-game .delete{border:1px solid #fff}}.notification-settings .followed-game .delete>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}.notification-settings .followed-game .delete>*:first-child{padding-left:0}.notification-settings .followed-game .delete>*:last-child{padding-right:0}.notification-settings .followed-game .delete svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) .notification-settings .followed-game .delete svg *{fill:CanvasText}}.notification-settings .followed-game .delete svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) .notification-settings .followed-game .delete svg{opacity:1}}.notification-settings .followed-game .delete img{height:50%}.notification-settings .followed-game .delete:disabled{opacity:.3}.notification-settings .followed-game .delete:disabled,.notification-settings .followed-game .delete:disabled *{cursor:default;pointer-events:none}@media(hover: hover){.notification-settings .followed-game .delete:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}.notification-settings .followed-game .delete:not(:disabled):hover svg{opacity:1}}.notification-settings .followed-game .delete:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}.notification-settings .followed-game .delete i{padding:0}.notification-settings .followed-game .delete svg{opacity:1;width:5.5px;height:5.5px}.notification-settings .followed-game .delete,.notification-settings .followed-game .delete:hover{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)) !important}",
        "",
      ]);
      const u = d;
    },
    "settings/resources/elements/profile-settings.scss": (e, t, a) => {
      a.r(t), a.d(t, { default: () => l });
      var i = a(8081),
        o = a.n(i),
        s = a(23645),
        n = a.n(s)()(o());
      n.push([
        e.id,
        ".profile-settings .profile-image-editor{position:relative;margin-bottom:22px}.profile-settings .profile-image-editor,.profile-settings .profile-image-editor *{cursor:pointer}.profile-settings .profile-image-editor label{font-size:12px;line-height:18px;font-weight:500;color:rgba(255,255,255,.4);display:flex;align-items:center}.profile-settings .profile-image-editor label:hover{color:#fff}.profile-settings .profile-image-editor input[type=file]{display:none}.profile-settings .profile-image-editor .profile-image{display:flex;width:56px;height:56px;border-radius:50%;overflow:hidden;margin-right:15px}.profile-settings .profile-image-editor .clear-button{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)) !important;display:inline-flex;width:26px;height:26px;box-shadow:none;padding:0;border-radius:50%;border:0;align-items:center;justify-content:center;transition:background-color .15s;position:absolute;left:35px;top:-5px}.profile-settings .profile-image-editor .clear-button,.profile-settings .profile-image-editor .clear-button *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) .profile-settings .profile-image-editor .clear-button{border:1px solid #fff}}.profile-settings .profile-image-editor .clear-button>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}.profile-settings .profile-image-editor .clear-button>*:first-child{padding-left:0}.profile-settings .profile-image-editor .clear-button>*:last-child{padding-right:0}.profile-settings .profile-image-editor .clear-button svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) .profile-settings .profile-image-editor .clear-button svg *{fill:CanvasText}}.profile-settings .profile-image-editor .clear-button svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) .profile-settings .profile-image-editor .clear-button svg{opacity:1}}.profile-settings .profile-image-editor .clear-button img{height:50%}.profile-settings .profile-image-editor .clear-button:disabled{opacity:.3}.profile-settings .profile-image-editor .clear-button:disabled,.profile-settings .profile-image-editor .clear-button:disabled *{cursor:default;pointer-events:none}@media(hover: hover){.profile-settings .profile-image-editor .clear-button:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}.profile-settings .profile-image-editor .clear-button:not(:disabled):hover svg{opacity:1}}.profile-settings .profile-image-editor .clear-button:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}@media(forced-colors: active){body:not(.override-contrast-mode) .profile-settings .profile-image-editor .clear-button{border:1px solid #fff}}.profile-settings .profile-image-editor .clear-button svg{opacity:1}@media(hover: hover){.profile-settings .profile-image-editor .clear-button:hover{background:rgba(var(--theme--background--rgb), 0.95) linear-gradient(rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)) !important}}.profile-settings .row{display:flex;align-items:center;width:100%}.profile-settings .row .col{flex:1;display:flex}.profile-settings .row .col:last-child{justify-content:flex-end}.profile-settings .logout-link{font-size:12px;line-height:18px;font-weight:700;color:var(--color--alert)}.profile-settings .logout-link:hover{color:#fff}",
        "",
      ]);
      const l = n;
    },
    "settings/resources/elements/sound-pack.scss": (e, t, a) => {
      a.r(t), a.d(t, { default: () => l });
      var i = a(8081),
        o = a.n(i),
        s = a(23645),
        n = a.n(s)()(o());
      n.push([
        e.id,
        ".sound-pack{display:flex;align-items:center}.sound-pack .preview{--cta__icon--color: #fff;display:inline-flex;background:rgba(0,0,0,0);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);transition:box-shadow .15s,background-color .15s;text-decoration:none;border-radius:99px;color:rgba(255,255,255,.8);align-items:center;justify-content:center;height:var(--cta--height);padding-top:0;padding-bottom:0;padding-right:var(--cta--padding);padding-left:var(--cta--padding);white-space:nowrap;border:0;font-size:13px;line-height:20px;font-weight:700;--cta--padding: 11px;--cta--height: 26px;--cta--hover--border-width: 1px;background-color:rgba(255,255,255,.6);box-shadow:none;color:var(--theme--background);min-width:var(--cta--height);width:var(--cta--height);border-radius:50%;justify-content:center;align-items:center;margin-left:10px}.sound-pack .preview,.sound-pack .preview *{cursor:pointer}@media(forced-colors: active){body:not(.override-contrast-mode) .sound-pack .preview{border:1px solid #fff}}.sound-pack .preview>*{padding-right:4.5px;padding-left:4.5px;display:flex;height:100%;align-items:center}.sound-pack .preview>*:first-child{padding-left:0}.sound-pack .preview>*:last-child{padding-right:0}.sound-pack .preview svg{opacity:.25;transition:opacity .15s}@media(forced-colors: active){body:not(.override-contrast-mode) .sound-pack .preview svg *{fill:CanvasText}}.sound-pack .preview svg *{fill:var(--cta__icon--color)}@media(forced-colors: active){body:not(.override-contrast-mode) .sound-pack .preview svg{opacity:1}}.sound-pack .preview img{height:50%}.sound-pack .preview:disabled{opacity:.3}.sound-pack .preview:disabled,.sound-pack .preview:disabled *{cursor:default;pointer-events:none}@media(hover: hover){.sound-pack .preview:not(:disabled):hover{box-shadow:inset 0 0 0 var(--cta--hover--border-width) var(--cta--hover--color, var(--theme--highlight));background-color:rgba(0,0,0,0);color:#fff}.sound-pack .preview:not(:disabled):hover svg{opacity:1}}.sound-pack .preview:not(:disabled):active{background-color:var(--cta--active--background-color, var(--theme--highlight));color:var(--cta--active--color, #fff)}.sound-pack .preview svg{opacity:1}.sound-pack .preview svg *{--cta__icon--color: var(--theme--background)}@media(hover: hover){.sound-pack .preview:not(:disabled):hover{background-color:var(--theme--highlight)}}.sound-pack .preview,.sound-pack .preview>*{padding:0 !important}",
        "",
      ]);
      const l = n;
    },
    "settings/resources/elements/cheat-volume-slider.html": (e, t, a) => {
      a.r(t), a.d(t, { default: () => i });
      const i =
        '<template> <require from="../../../shared/resources/elements/range-input"></require> <range-input value.bind="cheatSoundVolume" min="0" max="100" class="label-first"></range-input> </template>';
    },
    "settings/resources/elements/debug-settings.html": (e, t, a) => {
      a.r(t), a.d(t, { default: () => i });
      const i =
        '<template> <require from="./debug-settings.scss"></require> <div class="debug-groups" ref="containerEl"> <div class="setting"> <div class="setting-info"> <div class="setting-input"> <div class="text-setting"> <input type="text" placeholder="Filter..." value.two-way="filter" maxlength="100"> </div> </div> </div> </div> <div class="setting"> <div class="setting-name">Dialogs</div> <div class="setting-info"> <div class="setting-input debug-buttons"> <button class="standard-button" click.delegate="appRatingDialog.open(null, false)">App Rating</button> <button class="standard-button" click.delegate="openSelectionDialog()">Selection</button> <button class="standard-button" click.delegate="openCancelDialog()">Cancel</button> <button class="standard-button" click.delegate="openPollDialog()">Poll</button> <button class="standard-button" click.delegate="leaveFeedbackDialog.open()">Leave Feedback</button> <button class="standard-button" click.delegate="secureAccountDialog.open()">Secure Account</button> <button class="standard-button" click.delegate="secureAccountDialog.open({emailOnly: true})">Secure Account Email</button> <button class="standard-button" click.delegate="overlayEducationDialog.open()">Overlay Education</button> <button class="standard-button" click.delegate="remoteEducationDialog.open({ trigger: \'dashboard\' })">Remote Education (Dashboard)</button> <button class="standard-button" click.delegate="remoteEducationDialog.open({ trigger: \'play_button\' })">Remote Education (Play Button)</button> <button class="standard-button" click.delegate="welcomeMatDialog.open()">Welcome Mat</button> <button class="standard-button" click.delegate="requiresElevationDialog.open()">Requires Elevation</button> <button class="standard-button" click.delegate="playNextGameDialog.open()">Play Next Game</button> </div> </div> </div> <div class="setting"> <div class="setting-name">Pro Dialogs</div> <div class="setting-info"> <div class="setting-input debug-buttons"> <button class="standard-button" click.delegate="openProDialog()">Pro</button> <button class="standard-button" click.delegate="openProCheckoutDialog()">Pro Checkout</button> <button class="standard-button" click.delegate="openProCheckoutDialog({discountCode: \'halfoff\'})">Pro Checkout (with coupon)</button> <button class="standard-button" click.delegate="reactivatePro.showReactivateDialog()">Reactivate Pro</button> <button class="standard-button" click.delegate="changePaymentMethod.open()">Change Payment Method</button> <button class="standard-button" click.delegate="failedPaymentDialog.open()">Failed Payment Dialog</button> <button class="standard-button" click.delegate="failedPaymentToast.add()">Failed Payment Toast</button> <button class="standard-button" click.delegate="planDetailsDialog.open()">Plan Details</button> <button class="standard-button" click.delegate="emailDialog.open()">Email Collection</button> </div> </div> </div> <div class="setting"> <div class="setting-name">Webviews</div> <div class="setting-info"> <div class="setting-input debug-buttons"> <button class="standard-button" click.delegate="webviewDialog.open({route: \'switch-to-annual\', params: {route: \'switch-to-annual\'}})">Switch to Annual</button> <button class="standard-button" click.delegate="webviewDialog.open({route: \'cancel-flow\'})">Cancel Win-Back</button> <button class="standard-button" click.delegate="webviewDialog.open({route: \'cancel-flow\', params: {route: \'switch-to-monthly\'}})">Switch to Monthly</button> <button class="standard-button" click.delegate="webviewDialog.open({route: \'cancel-flow\', params: {route: \'trial-cancel-discount\'}})">Trial Cancel Discount</button> <button class="standard-button" click.delegate="webviewDialog.open({route: \'cancel-flow\', params: {route: \'cancel-reason-poll\'}})">Cancel Reason Poll</button> <button class="standard-button" click.delegate="webviewDialog.open({route: \'cancel-win-back\'})">Cancel Win-Back (Legacy)</button> <button class="standard-button" click.delegate="webviewDialog.open({route: \'switch-to-monthly\'})">Switch to Monthly (Legacy)</button> </div> </div> </div> <div class="setting"> <div class="setting-name">Experiments</div> <div class="setting-info"> <div class="setting-input debug-buttons"> <button class="standard-button" click.delegate="playwireAdDialog.open(true, 1)">Open Pre-Content Ad</button> <button class="standard-button" click.delegate="showFirstPlayUpgradePromptDialog(1)">First Play Upgrade (Variant 1)</button> <button class="standard-button" click.delegate="showFirstPlayUpgradePromptDialog(2)">First Play Upgrade (Variant 2)</button> <button class="standard-button" click.delegate="showFirstPlayUpgradePromptDialog(3)">First Play Upgrade (Variant 3)</button> </div> </div> </div> <div class="setting"> <div class="setting-name">Feedback Dialog</div> <div class="setting-info"> <div class="setting-input debug-buttons"> <button class="standard-button" click.delegate="openFeedbackDialog(null)">Indeterminate</button> <button class="standard-button" click.delegate="openFeedbackDialog(false)">Failure</button> <button class="standard-button" click.delegate="openFeedbackDialog(true)">Success</button> </div> </div> </div> <div class="setting"> <div class="setting-name">Basic Dialogs</div> <div class="setting-info"> <div class="setting-input debug-buttons"> <button class="standard-button" click.delegate="basicDialog.ok(\'This is a test\')">Ok</button> <button class="standard-button" click.delegate="basicDialog.show({message: \'This is a test\', options: [{label: \'Cancel\'}, {label: \'Ok\', style: \'primary\'}]})">Show</button> <button class="standard-button" click.delegate="basicDialog.help(\'There was a problem\', \'some-help-topic\')">Help</button> <button class="standard-button" click.delegate="basicDialog.yesNo(\'Are you sure?\')">Yes/No</button> </div> </div> </div> <div class="setting"> <div class="setting-name">Toasts</div> <div class="setting-info debug-column"> <div class="setting-input debug-buttons"> <button class="standard-button" click.delegate="toaster.toast({content: \'This is a normal toast with an action\', persist: true, actions: [{label: \'Ok\'}], onTop: true})">Normal</button> <button class="standard-button" click.delegate="toaster.toast({content: \'This is an alert toast with two actions\', type: \'alert\', persist: true, actions: [{label: \'Yep\'}, {label: \'Nope\'}], onTop: true})">Alert</button> <button class="standard-button" click.delegate="toaster.toast({content: \'This is a boost toast\', type: \'boost\', persist: true, onTop: true})">Boost</button> <button class="standard-button" click.delegate="toaster.toast({content: \'This toast will not be persisted\', persist: false, actions: [{label: \'Ok\'}], onTop: true})">Not Persisted</button> <button class="standard-button" click.delegate="toaster.toast({content: \'This toast has no actions\', persist: false, onTop: true})">No Actions</button> </div> </div> </div> <div class="setting"> <div class="setting-name">Animations</div> <div class="setting-info debug-column"> <div class="setting-input debug-buttons"> <button class="standard-button" click.delegate="playFireworksAnimation()">Fireworks</button> </div> </div> </div> <div class="setting"> <div class="setting-name">Triggers</div> <div class="setting-info debug-column"> <div class="setting-input debug-buttons"> <button class="standard-button" click.delegate="triggerPostProUpgrade()">Pro Onboarding</button> <button class="standard-button" click.delegate="triggerProTooltip()">Pro Onboarding Tooltip</button> <button class="standard-button" click.delegate="addPromotion()">Promotion</button> <button class="standard-button" click.delegate="addSwitchToAnnualPromotion()">Switch to Annual Promotion</button> <button class="standard-button" click.delegate="accountRefresher.refreshAccount()">Refresh Account</button> <button class="standard-button" click.delegate="fakeApplyUpdate()">Fake Update in 10s</button> </div> </div> </div> <div class="setting"> <div class="setting-name">Followed Games</div> <div class="setting-info debug-column"> <div class="setting-input debug-buttons"> <button class="standard-button" click.delegate="showRandomFollowedGameNotification(0, \'update\')">Immediate Update</button> <button class="standard-button" click.delegate="showRandomFollowedGameNotification(60000, \'update\')">Update After 1 Minute</button> <button class="standard-button" click.delegate="showRandomFollowedGameNotification(0, \'release\')">Immediate Release</button> <button class="standard-button" click.delegate="showRandomFollowedGameNotification(60000, \'release\')">Release After 1 Minute</button> <button class="standard-button" click.delegate="followedGameManager.unfollowAllGames()">Unfollow All</button> <button class="standard-button" click.delegate="resetMyGamesFollowPrompt()">Reset My Games Follow Prompt</button> </div> </div> </div> <div class="setting"> <div class="setting-name">Save Mods</div> <div class="setting-info debug-column"> <div class="setting-input debug-buttons"> <button class="standard-button" click.delegate="saveCheatsPromoDialog.open()">Post trainer promo dialog</button> <button class="standard-button" click.delegate="saveCheatsDisableConfirmDialog.open()">Disable confirm</button> <button class="standard-button" click.delegate="showSaveCheatDisableConfirmDialog()">Reset disable confirm dialog</button> </div> </div> </div> <div class="setting"> <div class="setting-name">Store</div> <div class="setting-info debug-column"> <div class="setting-input debug-buttons"> <button class="standard-button" click.delegate="markAllCheatInstructionsUnread()">Clear Read Cheat Instructions</button> <button class="standard-button" click.delegate="clearOverlayEducationFlags()">Clear Overlay Education Flags</button> <button class="standard-button" click.delegate="clearRemoteEducationFlags()">Clear Remote Education Flags</button> <button class="standard-button" click.delegate="resetCoachingTipHistory()">Clear Coaching Tip History</button> <button class="standard-button" click.delegate="clearReadTrainerNotes()">Clear Read Trainer Notes</button> <button class="standard-button" click.delegate="clearPromotionHistory()">Clear Promotion History</button> <button class="standard-button" click.delegate="clearMyGamesFollowPrompt()">Clear Follow My Games</button> <button class="standard-button" click.delegate="clearMapSettings()">Clear Map Settings</button> <button class="standard-button alert" click.delegate="resetState()">Reset</button> </div> </div> </div> <div class="setting"> <div class="setting-name">External Links</div> <div class="setting-info debug-column"> <div class="setting-input debug-buttons"> <a class="standard-button" href="wemod://play?titleId=26670&gameId=26896">Play Game</a> </div> </div> </div> </div> </template> ';
    },
    "settings/resources/elements/general-settings.html": (e, t, a) => {
      a.r(t), a.d(t, { default: () => i });
      const i =
        '<template> <require from="../../../shared/resources/elements/toggle.html"></require> <div class="setting"> <div class="setting-name">${\'general_settings.save_log\' | i18n}</div> <div class="setting-info"> <div class="setting-description">${\'general_settings.save_messages\' | i18n}</div> <div class="setting-input"> <button click.delegate="saveLog()" class="standard-button">${\'general_settings.save_log\' | i18n}...</button> </div> </div> </div> <div class="setting" if.bind="account.gdpr.consentRequired"> <div class="setting-name">${\'general_settings.gdpr_consent\' | i18n}</div> <div class="setting-info"> <div class="setting-description">${\'general_settings.gdpr_consent_description\' | i18n}</div> <div class="setting-input"> <toggle value.bind="account.gdpr.consentGiven" click.delegate="toggleConsent()" tabindex="0"></toggle> </div> </div> </div> </template> ';
    },
    "settings/resources/elements/language-selector.html": (e, t, a) => {
      a.r(t), a.d(t, { default: () => i });
      const i =
        '<template> <require from="../../../shared/resources/elements/selection-input"></require> <selection-input value.two-way="selectedLanguageLocale" options.bind="languageLocales" labels.bind="languageNames" disabled.bind="busy"></selection-input> </template> ';
    },
    "settings/resources/elements/notifications-settings.html": (e, t, a) => {
      a.r(t), a.d(t, { default: () => l });
      var i = a(27091),
        o = a.n(i),
        s = new URL(a(92281), a.b),
        n = new URL(a(27349), a.b);
      const l =
        '<template> <require from="./notifications-settings.scss"></require> <require from="../../../shared/resources/elements/tooltip"></require> <div class="notification-settings"> <div class="setting"> <div class="setting-name"> ${\'settings_dialog.followed_games\' | i18n} <span class="search" if.bind="follows.followedGames.length"> <input type="text" placeholder.bind="\'notifications_settings.search_games\' | i18n" value.bind="searchTerms" disabled.bind="!follows.followedGames.length"> <button click.delegate="searchTerms = \'\'" if.bind="searchTerms && follows.followedGames.length">${\'notifications_settings.clear_search\' | i18n}</button> </span> </div> <div class="setting-info"> <div class="setting-input"> <div if.bind="searchTerms && follows.followedGames.length && !filteredFollowedGames.length" class="no-results-message">${\'notifications_settings.no_results_message\' | i18n}</div> <div if.bind="!follows.followedGames.length" class="no-results-message">${\'notifications_settings.no_followed_games_message\' | i18n}</div> <div repeat.for="followedGame of filteredFollowedGames" class="followed-game"> <a href="#" class="title-link" click.delegate="navigateToFollowedGame(followedGame)"> <img class="thumbnail ${thumbnailLoaded ? \'loaded\' : \'\'}" src.bind="followedGame.titleThumbnail | cdn:{size: 40}" fallback-src="' +
        o()(s) +
        '" load.trigger="thumbnailLoaded = true"> <img class="platform-icon" src.bind="followedGame.gamePlatformId | platformIconSvg"> <span class="name">${followedGame.titleName}</span> </a> <span class="spacer"></span> <span class="delete-wrapper"> <button class="delete" click.delegate="unfollowGame(followedGame)"> <i><inline-svg src="' +
        o()(n) +
        '"></inline-svg></i> </button> <tooltip direction="top-right"> <div slot="content"> ${\'notifications_settings.remove_from_followed\' | i18n} </div> </tooltip> </span> </div> </div> </div> </div> </div> </template> ';
    },
    "settings/resources/elements/payment-method.html": (e, t, a) => {
      a.r(t), a.d(t, { default: () => i });
      const i =
        '<template> <h5 innerhtml.bind="\'billing_settings.payment_method\' | i18n | markdown" class="${account.subscription.pastDueInvoice ? \'warning\' : \'\'}"></h5> <div class="details"> <span class="meta"> <template if.bind="!paymentMethod"> ${\'billing_settings.no_payment_method\' | i18n} </template> <template if.bind="[\'card\', \'google_pay\', \'apple_pay\'].includes(paymentMethod.type)"> <span if.bind="paymentMethod.type === \'card\'" class="card-type wemod-payment-method--${paymentMethod.typeData.brand | dashCase}"></span> <span else class="card-type wemod-payment-method--${paymentMethod.type | dashCase}"></span> <em>${paymentMethod.typeData.brandName}</em> <span> · </span> <span>${\'payment_method.ending_in_digits\' | i18n:{digits: paymentMethod.typeData.lastFour}}</span> <span> · </span> <span>${\'payment_method.expiration_$month_$year\' | i18n:{month: paymentMethod.typeData.expMonth, year: paymentMethod.typeData.expYear % 1000}}</span> </template> <template if.bind="paymentMethod.type === \'paypal\'"> <span class="card-type wemod-payment-method--paypal"></span> <em>${\'payment_method.paypal\' | i18n}</em> <span> · </span> <span>${paymentMethod.typeData.email}</span> </template> <template if.bind="paymentMethod.type === \'amazon_pay\'"> <span class="card-type wemod-payment-method--amazon-pay"></span> <em>${\'payment_method.amazon_pay\' | i18n}</em> <span> · </span> <span>${paymentMethod.typeData.email}</span> </template> <template if.bind="paymentMethod.type === \'alipay\'"> <span class="card-type wemod-payment-method--alipay"></span> <em>${\'payment_method.alipay\' | i18n}</em> </template> </span> <span if.bind="paymentMethod && !account.subscription" class="row-actions"> <span class="links"> <button class="link" click.delegate="deleteBillingInfo()">${\'billing_settings.remove\' | i18n}</button> </span> </span> <span if.bind="paymentMethod && account.subscription && !account.subscription.pastDueInvoice" class="row-actions"> <span class="links"> <button class="link" click.delegate="changePaymentMethod(\'billing_settings_change_payment_method_button\')">${\'billing_settings.change_payment_method\' | i18n}</button> </span> </span> </div> <div class="main-actions" if.bind="!paymentMethod"> <button class="button" click.trigger="changePaymentMethod(\'billing_settings_add_payment_method_button\')">${\'billing_settings.add_payment_method\' | i18n}</button> </div> <div if.bind="paymentMethod && account.subscription.pastDueInvoice" class="main-actions"> <button class="button main small" click.delegate="changePaymentMethod(\'billing_settings_past_due_button\')">${\'billing_settings.change_payment_method\' | i18n}</button> </div> </template>';
    },
    "settings/resources/elements/profile-settings.html": (e, t, a) => {
      a.r(t), a.d(t, { default: () => n });
      var i = a(27091),
        o = a.n(i),
        s = new URL(a(27349), a.b);
      const n =
        '<template> <require from="./profile-settings.scss"></require> <require from="../../../resources/elements/account-email"></require> <section class="profile-settings" if.bind="initialized"> <div class="profile-image-editor"> <label> <img if.bind="!profileImage.startsWith(\'data:\')" class="profile-image" src.bind="profileImage || currentProfileImage | cdn:{size: 128}"> <img else class="profile-image" src.bind="profileImage"> <div>${\'profile_settings.upload_new_pic\' | i18n}</div> <input type="file" accept=".jpg,.jpeg,.png" change.delegate="changeProfileImage($event)"> </label> <button class="clear-button" click.delegate="profileImage = null" if.bind="profileImage"> <inline-svg src="' +
        o()(s) +
        '"></inline-svg> </button> </div> <div class="settings-form"> <div class="form-row"> <input type="text" value.bind="username" spellcheck="false" maxlength="20"> <label>${\'profile_settings.username\' | i18n}</label> </div> <div class="form-row"> <account-email view-model.ref="accountEmail" status.bind="accountEmailStatus" location="profile_settings"></account-email> <label>${\'profile_settings.email_address\' | i18n}</label> </div> <div class="form-row" if.bind="profile.hasPassword"> <input type="password" value.bind="currentPassword"> <label>${\'profile_settings.current_password\' | i18n}</label> </div> <div class="row"> <div class="col"> <button disabled.bind="saving || (profile.hasPassword && !currentPassword) || (!usernameUpdated && !(accountEmailStatus === \'valid\' || accountEmailStatus === \'unsure\')  && !profileImageUpdated)" class="settings-form-submit-button" click.delegate="save()">${\'profile_settings.save\' | i18n}</button> </div> <div class="col"> <a class="logout-link" href="#" click.delegate="switchUser()">${\'profile_settings.logout\' | i18n}</a> </div> </div> </div> </section> </template> ';
    },
    "settings/resources/elements/release-channel-selector.html": (e, t, a) => {
      a.r(t), a.d(t, { default: () => i });
      const i =
        '<template> <require from="../../../shared/resources/elements/selection-input"></require> <selection-input value.two-way="selectedChannel" options.bind="channelIds" labels.bind="channelLabels" disabled.bind="selectedChannel === \'disabled\'" enable-i18n="true"> </selection-input> </template>';
    },
    "settings/resources/elements/sound-pack.html": (e, t, a) => {
      a.r(t), a.d(t, { default: () => n });
      var i = a(27091),
        o = a.n(i),
        s = new URL(a(36644), a.b);
      const n =
        '<template> <require from="./sound-pack.scss"></require> <require from="../../../shared/resources/elements/selection-input"></require> <div class="sound-pack"> <selection-input value.two-way="selectedSoundPack" options.bind="soundPlayer.availablePacks" enable-i18n.bind="false"> </selection-input> <a href="#" class="preview" click.trigger="preview()" disabled.bind="disablePreview"> <i><inline-svg src="' +
        o()(s) +
        '"></inline-svg></i> </a> </div> </template> ';
    },
    "settings/resources/elements/cheat-volume-slider": (e, t, a) => {
      a.r(t), a.d(t, { CheatVolumeSlider: () => n });
      var i = a(70655),
        o = a("aurelia-framework"),
        s = a(28529);
      let n = class {
        #e;
        constructor(e) {
          (this.#e = e), (this.cheatSoundVolume = e.volume);
        }
        async cheatSoundVolumeChanged(e, t) {
          void 0 !== t && (await this.#e.setVolume(e, "settings"));
        }
      };
      (0, i.gn)(
        [o.observable, (0, i.w6)("design:type", Number)],
        n.prototype,
        "cheatSoundVolume",
        void 0
      ),
        (n = (0, i.gn)(
          [(0, o.autoinject)(), (0, i.w6)("design:paramtypes", [s.s])],
          n
        ));
    },
    "settings/resources/elements/debug-settings": (e, t, a) => {
      a.r(t), a.d(t, { DebugSettings: () => V });
      var i = a(70655),
        o = a("aurelia-dialog"),
        s = a("aurelia-framework"),
        n = a(98099),
        l = a(45437),
        r = a(78681),
        c = a(68611),
        d = a(19748),
        g = a(51296),
        u = a(34535),
        p = a(56372),
        h = a(95112),
        m = a(91978),
        b = a(97845),
        f = a(26478),
        v = a("cheats/resources/elements/feedback-dialog"),
        w = a("cheats/resources/elements/first-play-upgrade-prompt-dialog"),
        y = a("cheats/resources/elements/play-next-game-dialog"),
        k = a("cheats/resources/elements/save-cheats-disable-confirm-dialog"),
        _ = a("cheats/resources/elements/save-cheats-promo-dialog"),
        x = a("dialogs/app-rating-dialog"),
        D = a(55586),
        P = a(7924),
        S = a("dialogs/email-dialog"),
        A = a("dialogs/failed-payment-dialog"),
        C = a("dialogs/leave-feedback-dialog"),
        L = a("dialogs/overlay-education-dialog"),
        I = a("dialogs/plan-details-dialog"),
        T = a(62522),
        F = a("dialogs/remote-education-dialog"),
        M = a(64371),
        R = a("dialogs/secure-account-dialog"),
        O = a("dialogs/selection-dialog"),
        E = a("dialogs/webview-dialog"),
        U = a("dialogs/welcome-mat-dialog"),
        G = a(81110),
        N = a(47164),
        B = a("shared/dialogs/basic-dialog"),
        $ = a(35969),
        q = a(93082),
        z = a(27170);
      const j = (0, n.jl)("debug-settings");
      let V = class {
        #t;
        #a;
        #i;
        constructor(
          e,
          t,
          a,
          i,
          o,
          s,
          n,
          l,
          r,
          c,
          d,
          g,
          u,
          p,
          h,
          m,
          b,
          f,
          v,
          w,
          y,
          k,
          _,
          x,
          D,
          P,
          S,
          A,
          C,
          L,
          I,
          T,
          F,
          M,
          R
        ) {
          (this.checkoutDialog = e),
            (this.failedPaymentDialog = t),
            (this.failedPaymentToast = a),
            (this.reactivatePro = i),
            (this.appRatingDialog = o),
            (this.proDialog = s),
            (this.feedbackDialog = n),
            (this.selectionDialog = l),
            (this.pollDialog = r),
            (this.leaveFeedbackDialog = c),
            (this.basicDialog = d),
            (this.toaster = g),
            (this.changePaymentMethod = u),
            (this.fullscreenAnimationPlayer = p),
            (this.postProUpgrade = h),
            (this.dialog = m),
            (this.secureAccountDialog = b),
            (this.planDetailsDialog = f),
            (this.playwireAdDialog = v),
            (this.overlayEducationDialog = w),
            (this.saveCheatsPromoDialog = y),
            (this.welcomeMatDialog = k),
            (this.requiresElevationDialog = _),
            (this.emailDialog = x),
            (this.accountRefresher = D),
            (this.remoteEducationDialog = P),
            (this.webviewDialog = S),
            (this.saveCheatsDisableConfirmDialog = A),
            (this.promotions = C),
            (this.playNextGameDialog = L),
            (this.followedGameManager = I),
            (this.firstPlayUpgradePromptDialog = T),
            (this.#t = F),
            (this.#a = M),
            (this.#i = R);
        }
        filterChanged() {
          const e =
            "string" == typeof this.filter
              ? this.filter.toLocaleLowerCase()
              : "";
          Array.from(
            this.containerEl.querySelectorAll(".setting:not(:first-child)")
          ).forEach((t) => {
            let a = !0;
            Array.from(t.querySelectorAll(".standard-button")).forEach((t) => {
              t.classList.toggle(
                "hidden",
                !t.innerText.toLocaleLowerCase().includes(e)
              ) || (a = !1);
            }),
              t.classList.toggle("hidden", a);
          });
        }
        async openFeedbackDialog(e) {
          const t = await this.feedbackDialog.collectFeedback(
            "Gears of Duty",
            {
              gameId: "1",
              blueprint: {
                notes: "These are some notes...",
                cheats: [
                  { name: "Unlimited Health", uuid: "aaaaaaaa" },
                  { name: "Jump Height", uuid: "bbbbbbbb" },
                  { name: "Gravity", uuid: "cccccccc" },
                ],
              },
            },
            "steam:550",
            Math.floor(99999 * Math.random()),
            ["aaaaaaaa", "bbbbbbbb"],
            e,
            !0
          );
          j.info("Feedback dialog result", JSON.parse(JSON.stringify(t)));
        }
        async openCancelDialog() {
          const e = await this.pollDialog.openByUsage(
            "subscription_cancelation",
            !0
          );
          j.info(
            "Cancel dialog result",
            e ? JSON.parse(JSON.stringify(e)) : "canceled"
          );
        }
        async openPollDialog() {
          const e = await this.pollDialog.open({
            id: void 0,
            usage: "generic",
            options: ["Google Search", "Youtube", "Forum", "A friend", "Other"],
            startedAt: "2018-11-20T17:20:27Z",
            title: "How did you hear about WeMod",
          });
          j.info(
            "Poll dialog result",
            e ? JSON.parse(JSON.stringify(e)) : "canceled"
          );
        }
        async openSelectionDialog() {
          const e = await this.selectionDialog.open({
            title: $.oc.literal("Animals"),
            message: $.oc.literal("Pick any two"),
            options: ["Lions", "Tigers", "Bears", "Other"].map($.oc.literal),
            defaultSelections: ["Lions"].map($.oc.literal),
            multiselect: { minSelections: 1, maxSelections: 2 },
            detailsField: {
              lastOptionOnly: !0,
              placeholder: $.oc.literal("Some other animal"),
              minLength: 20,
              maxLength: 100,
            },
            submitLabel: $.oc.literal("Submit"),
          });
          j.info("Selection dialog result", JSON.parse(JSON.stringify(e)));
        }
        triggerPostProUpgrade() {
          this.dialog.closeAll(), this.postProUpgrade.trigger();
        }
        triggerProTooltip() {
          this.dialog.closeAll(), this.postProUpgrade.openTooltip();
        }
        openProDialog() {
          this.proDialog.open({ trigger: "debug", nonInteraction: !1 });
        }
        openProCheckoutDialog(e) {
          this.checkoutDialog.open({ ...(e || {}), trigger: "debug" });
        }
        addPromotion() {
          this.promotions.refresh({
            id: "debug_promotion",
            flags: 1,
            components: {
              dialog: {
                triggers: ["navigation"],
                route: "promotion",
                params: { id: "debug_promotion" },
              },
              appBanner: {
                icon: "gift",
                name: "25% off Pro annual subscriptions",
                description: "Get 3 months free",
                button: "Claim gift now",
                url: "wemod://checkout",
                theme: {},
              },
              notification: {
                delay: 0,
                image:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA3lBMVEUAAAD0nBLAOSvyxQ7AOSvyvRDyuxDFRyjAOSvAOSvAOSvAOSvxxA/AOSvANyvAOSvznBLAOSvAOSvxxA/AOSvAOSvxxA/zohLyrBHskBrzoxLAOSvyrRHxxA/znBLAOSvznBLAOSvOYSPprxPprxPxxA/xxA/tuRHuvBDznBLAOSvtqRbtqBbAOSvKVSXAOSvLWCXxxA/AOSvznBLznBLAOSvxxQ7nTDvAOSvznBLqhR7rnRrysBDyphHUQzLRQjLKPi/hSTnBOyv0nhLytRDhSzjsnxnpsRLzohLzqBGeoOfQAAAANnRSTlMA+vvUh4N7BdTOpzL2Gfbk5NyybjbnyYWDgXx6enIoIRAOCf796uTg3926uraYko+MfHFtZi6JURAMAAABAElEQVQ4y+3P6VLCMBDA8bVGmyb0ooAgh4D3fet6K5Tr/V/InZCE1hkLD8DvQ2a7829mAivzBb/sgdIT1bIPf8gQEUOpUk5jtQI5buw0ZRNjl0YPmbxzQheyHrFM5zUyAIaCRoH5K3zk9Ec/dirSCfbUNXRmCeSMsTPkHno0eHRjnnsTYEZw1QcjqW0qJweT0Y8ymuwfz3e1NkD7aeFZy6xu4ag4OIRScVBaHiQXb8b4Sxvb1XkC0Hi1BqgMFpsGAOy+GEMTDO1qZ5Wg9W6kn1pqV3UKtotesbUObNAqCuoUPKT/B+k9Bd3T6cfc7Fub6cU06gLpRBuao5nvqAPL/QL2XpTCbKc44AAAAABJRU5ErkJggg==",
                title: "Get 25% off Pro",
                message:
                  "Purchase an annual subscription today and get 3 months free.",
                url: "wemod://settings",
                actions: [
                  {
                    type: "protocol",
                    arguments: "wemod://settings",
                    label: "Claim gift",
                  },
                ],
              },
            },
            endsAt: "2099-11-29T17:59:59+0000",
          });
        }
        addSwitchToAnnualPromotion() {
          this.promotions.refresh({
            id: "switch_to_annual_debug_promotion",
            flags: 1,
            components: {
              dialog: {
                triggers: ["navigation"],
                route: "switch-to-annual",
                params: {},
              },
              appBanner: {
                name: "Save 25% on **Pro**",
                description: "Switch to yearly plan today",
                button: "Switch now",
                url: "wemod://webview/switch-to-annual",
                theme: {},
              },
            },
            endsAt: "2099-11-29T17:59:59+0000",
          });
        }
        markAllCheatInstructionsUnread() {
          this.#t.dispatch(z.xS);
        }
        clearReadTrainerNotes() {
          this.#t.dispatch(z.mE);
        }
        showSaveCheatDisableConfirmDialog() {
          this.#t.dispatch(z.D3, { confirmDisablingSaveCheats: !0 }, "debug");
        }
        clearOverlayEducationFlags() {
          this.#t.dispatch(z.V0, "hasUsedOverlay", !1),
            this.#t.dispatch(
              z.V0,
              "overlayEducationInstallShownAfterTrainer",
              !1
            ),
            this.#t.dispatch(
              z.V0,
              "overlayEducationPostInstallShownAfterTrainer",
              !1
            ),
            this.#t.dispatch(
              z.V0,
              "overlayEducationFreeTrialShownAfterTrainer",
              !1
            );
        }
        clearRemoteEducationFlags() {
          this.#t.dispatch(z.V0, "remoteEducationShownOnDashboard", !1),
            this.#t.dispatch(z.V0, "remoteEducationShownBeforeTrainer", !1);
        }
        clearPromotionHistory() {
          this.#t.dispatch(z.qV);
        }
        clearMyGamesFollowPrompt() {
          this.#t.dispatch(z.JC, "lastFollowedMyGames", null);
        }
        async resetState() {
          return await this.#t.dispatch(z.FE), this.#a.reload();
        }
        resetCoachingTipHistory() {
          this.#t.dispatch(z.z_);
        }
        playFireworksAnimation() {
          this.fullscreenAnimationPlayer.play({
            path: "static/animations/fireworks.json",
          });
        }
        fakeApplyUpdate() {
          setTimeout(() => this.#a.fakeApplyUpdate(), 1e4);
        }
        showRandomFollowedGameNotification(e, t) {
          const a = this.followedGameManager.followedGames;
          if (0 === a.length)
            return void alert("You're not following any games!");
          const i = a[Math.floor(Math.random() * a.length)];
          setTimeout(() => {
            const e = new Date(Date.now()).toISOString();
            this.#t.dispatch(z.y4, {
              ...this.catalog,
              games: {
                ...this.catalog.games,
                [i.gameId]: {
                  ...this.catalog.games[i.gameId],
                  trainer: {
                    ...this.catalog.games[i.gameId].trainer,
                    updatedAt: e,
                    createdAt:
                      "release" === t
                        ? e
                        : this.catalog.games[i.gameId].trainer.createdAt,
                  },
                },
              },
            });
          }, e);
        }
        resetMyGamesFollowPrompt() {
          this.#t.dispatch(z.JC, "lastFollowedMyGames", null);
        }
        clearMapSettings() {
          this.#t.dispatch(z.uy);
        }
        showFirstPlayUpgradePromptDialog(e) {
          this.#i.setOverride(w.EXPERIMENT_KEY, e),
            this.firstPlayUpgradePromptDialog.open();
        }
      };
      (0, i.gn)(
        [(0, s.observable)(), (0, i.w6)("design:type", String)],
        V.prototype,
        "filter",
        void 0
      ),
        (V = (0, i.gn)(
          [
            (0, q.b)({
              selectors: {
                catalog: (0, q.g)("catalog"),
                account: (0, q.g)("account"),
              },
            }),
            (0, s.autoinject)(),
            (0, i.w6)("design:paramtypes", [
              P.l,
              A.FailedPaymentDialogService,
              m.$,
              b.x,
              x.AppRatingDialogService,
              T.x,
              v.FeedbackDialogService,
              O.SelectionDialogService,
              u.X,
              C.LeaveFeedbackDialogService,
              B.BasicDialogService,
              f.x,
              D.V,
              r.b,
              p.d,
              o.DialogService,
              R.SecureAccountDialogService,
              I.PlanDetailsDialogService,
              g.p,
              L.OverlayEducationDialogService,
              _.SaveCheatsPromoDialogService,
              U.WelcomeMatDialogService,
              M.c,
              S.EmailDialogService,
              c.v,
              F.RemoteEducationDialogService,
              E.WebviewDialogService,
              k.SaveCheatsDisableConfirmDialogService,
              h.z,
              y.PlayNextGameDialogService,
              d.r,
              w.FirstPlayUpgradePromptDialogService,
              l.yh,
              G.f,
              N.p,
            ]),
          ],
          V
        ));
    },
    "settings/resources/elements/general-settings": (e, t, a) => {
      a.r(t), a.d(t, { GeneralSettings: () => m });
      var i = a(70655),
        o = a("aurelia-framework"),
        s = a(45437),
        n = a(23739),
        l = a(81866),
        r = a(26478),
        c = a(81110),
        d = a(85473),
        g = a("shared/dialogs/basic-dialog"),
        u = a(35969),
        p = a(93082),
        h = a(27170);
      let m = class {
        #o;
        #s;
        #a;
        #n;
        #l;
        #t;
        #r;
        constructor(e, t, a, i, o, s, n) {
          (this.#o = e),
            (this.#s = t),
            (this.#a = a),
            (this.#n = i),
            (this.#l = o),
            (this.#t = s),
            (this.#r = n);
        }
        async saveLog() {
          const e = await this.#a.showSaveFileDialog({
            defaultPath: `WeMod-${Date.now()}.log`,
            filters: [
              {
                extensions: ["log"],
                name: this.#o.getValue("general_settings.log_files"),
              },
            ],
          });
          if (!e.canceled && e.filePath)
            try {
              await (0, d.JT)(e.filePath);
            } catch {
              this.#s.toast({
                content: "general_settings.failed_to_save_toast",
                type: "alert",
              });
            }
        }
        async toggleConsent() {
          if (this.account.gdpr?.consentGiven)
            if (
              "general_settings.ok" ===
              (await this.#l.show({
                cancelable: !0,
                message: "general_settings.gdpr_revoke_confirm_message",
                options: [
                  { label: "general_settings.cancel", style: "primary" },
                  { label: "general_settings.ok" },
                ],
              }))
            ) {
              this.#r.event("gdpr_consent_revoke", { location: "settings" });
              try {
                await this.#n.revokeConsent(), await this.#a.reload();
              } catch {}
            } else
              this.#r.event("gdpr_consent_cancel_revoke ", {
                location: "settings",
              });
          else
            try {
              const e = await this.#n.giveConsent();
              this.#r.event("gdpr_consent_give", { location: "settings" }),
                await this.#t.dispatch(h.qg, e);
            } catch {}
        }
      };
      m = (0, i.gn)(
        [
          (0, p.b)({ selectors: { account: (0, p.g)("account") } }),
          o.autoinject,
          (0, i.w6)("design:paramtypes", [
            u.oc,
            r.x,
            c.f,
            n.K,
            g.BasicDialogService,
            s.yh,
            l.c,
          ]),
        ],
        m
      );
    },
    "settings/resources/elements/language-selector": (e, t, a) => {
      a.r(t), a.d(t, { LanguageSelector: () => l });
      var i = a(70655),
        o = a("aurelia-framework"),
        s = a(35969);
      const n = "auto";
      let l = class {
        #c;
        #o;
        constructor(e) {
          (this.busy = !1), (this.#o = e);
        }
        bind() {
          const e = this.#o.locales.map((e) => e.tag);
          e.unshift(n),
            (this.languageLocales = e),
            (this.#c = this.#o.onLocaleChanged(() => this.#d())),
            this.#d();
        }
        unbind() {
          this.#c.dispose(), (this.#c = null);
        }
        #d() {
          const e = Object.fromEntries(
            this.#o.locales.map((e) => [e.tag, s.oc.literal(e.name)])
          );
          (e[n] = s.oc.literal(
            this.#o.getValue("language_selector.automatic_$lang", {
              lang: this.#o.getClosestMatchingSupportedLocale().name,
            })
          )),
            (this.languageNames = e),
            (this.selectedLanguageLocale =
              this.#o.getPreferredLocale()?.toString() ?? n);
        }
        async selectedLanguageLocaleChanged(e, t) {
          if (t && !this.busy) {
            this.busy = !0;
            try {
              await this.#o.setLocale(e === n ? null : e, "settings");
            } catch (e) {
              throw ((this.selectedLanguageLocale = t), e);
            } finally {
              this.busy = !1;
            }
          }
        }
      };
      (0, i.gn)(
        [o.observable, (0, i.w6)("design:type", String)],
        l.prototype,
        "selectedLanguageLocale",
        void 0
      ),
        (l = (0, i.gn)(
          [(0, o.autoinject)(), (0, i.w6)("design:paramtypes", [s.oc])],
          l
        ));
    },
    "settings/resources/elements/notifications-settings": (e, t, a) => {
      a.r(t), a.d(t, { NotificationsSettings: () => g });
      var i = a(70655),
        o = a("aurelia-event-aggregator"),
        s = a("aurelia-framework"),
        n = a(83467),
        l = a(19748),
        r = a(26478),
        c = a(29242),
        d = a(9288);
      let g = class {
        #s;
        #g;
        #u;
        constructor(e, t, a, i) {
          (this.follows = t),
            (this.searchTerms = ""),
            (this.#s = e),
            (this.#g = a),
            (this.#u = i);
        }
        async unfollowGame(e) {
          (await this.follows.unfollowGames([e.gameId])) &&
            this.#s.toast({
              content: "notifications_settings.$game_removed_from_followed",
              i18nParams: { game: e.titleName },
            });
        }
        get filteredFollowedGames() {
          return (0, d.y)(
            this.follows.followedGames,
            this.searchTerms,
            ["titleName", "titleTerms"],
            "titleName"
          );
        }
        navigateToFollowedGame(e) {
          this.#g.router.navigateToRoute("title", {
            titleId: e.titleId,
            gameId: e.gameId,
          }),
            this.#u.publish(
              new c.kx(
                "notifications_settings",
                e.titleId,
                e.gameId || null,
                null,
                !1
              )
            );
        }
      };
      (0, i.gn)(
        [
          (0, s.computedFrom)("follows.followedGames", "searchTerms"),
          (0, i.w6)("design:type", Array),
          (0, i.w6)("design:paramtypes", []),
        ],
        g.prototype,
        "filteredFollowedGames",
        null
      ),
        (g = (0, i.gn)(
          [
            (0, s.autoinject)(),
            (0, i.w6)("design:paramtypes", [r.x, l.r, n.W, o.h]),
          ],
          g
        ));
    },
    "settings/resources/elements/profile-settings": (e, t, a) => {
      a.r(t), a.d(t, { ProfileSettings: () => m });
      var i = a(70655),
        o = a("aurelia-framework"),
        s = a(45437),
        n = a(23739),
        l = a(68611),
        r = a(26478),
        c = a(94472),
        d = a("shared/dialogs/basic-dialog"),
        g = a(35969),
        u = a(93082),
        p = a(51722),
        h = a(27170);
      let m = class {
        #n;
        #s;
        #t;
        #p;
        #h;
        constructor(e, t, a, i, o) {
          (this.initialized = !1),
            (this.saving = !1),
            (this.#n = e),
            (this.#s = t),
            (this.#t = a),
            (this.#p = i),
            (this.#h = o);
        }
        attached() {
          (this.username = this.account.username),
            (this.profileImage = (0, p.yE)(this.account.flags, 16)
              ? this.account.profileImage
              : null),
            (this.currentProfileImage = this.account.profileImage),
            (this.initialized = !0);
        }
        detached() {
          this.initialized = !1;
        }
        changeProfileImage(e) {
          const t = e.target;
          if (t.files.length > 0) {
            const e = new FileReader();
            e.readAsDataURL(t.files[0]),
              e.addEventListener(
                "load",
                () => {
                  (t.value = null), (this.profileImage = e.result);
                },
                { once: !0 }
              );
          }
        }
        async save() {
          this.saving = !0;
          let e = null;
          this.initialized &&
            this.usernameUpdated &&
            (e = await this.#m(
              () =>
                this.#n.changeAccountUsername(
                  this.username,
                  this.currentPassword || null
                ),
              "profile_settings.username_change_success_toast"
            )),
            this.initialized &&
              this.accountEmail.value !== this.account.email &&
              (await this.accountEmail.submit()) &&
              this.#s.toast({
                content: "profile_settings.email_change_success_toast",
                type: "ok",
              }),
            this.initialized &&
              this.profileImageUpdated &&
              (e = await this.#m(
                () => this.#n.changeAccountProfileImage(this.profileImage),
                "profile_settings.profile_image_change_success_toast"
              )),
            null !== e &&
              (await this.#t.dispatch(h.qg, e),
              (this.currentProfileImage = e.profileImage)),
            (this.currentPassword = ""),
            (this.profileImage = (0, p.yE)(this.account.flags, 16)
              ? this.account.profileImage
              : null),
            (this.saving = !1);
        }
        async #m(e, t) {
          let a = null;
          try {
            (a = await e()), a && this.#s.toast({ content: t, type: "ok" });
          } catch (e) {
            this.#s.toast({
              content:
                e instanceof c.MS && e.code === c.jK.ValidationError
                  ? g.oc.literal(
                      e.data.entries.reduce((e, t) => e + (t.message + " "), "")
                    )
                  : "profile_settings.update_error_toast",
              type: "alert",
            });
          }
          return a;
        }
        async switchUser() {
          if ((0, p.EB)(this.account.flags, [2, 8])) {
            if (
              "profile_settings.sign_out" !==
              (await this.#p.show({
                message: "profile_settings.are_you_sure",
                headerLabel: "profile_settings.sign_out",
                options: [
                  { label: "profile_settings.cancel" },
                  { label: "profile_settings.sign_out", style: "primary" },
                ],
                cancelable: !0,
              }))
            )
              return;
          } else if (
            "profile_settings.sign_out" !==
            (await this.#p.show({
              message: "profile_settings.no_email_for_$username",
              messageParams: { username: this.account.username },
              headerLabel: "profile_settings.hold_on",
              options: [
                { label: "profile_settings.update_account", style: "primary" },
                { label: "profile_settings.sign_out", style: "primary" },
              ],
              cancelable: !0,
            }))
          )
            return;
          return this.#h.signOut();
        }
        get usernameUpdated() {
          return this.username !== this.account.username;
        }
        get profileImageUpdated() {
          return (
            !(null === this.profileImage && !this.profileImageSet) &&
            this.profileImage !== this.account.profileImage
          );
        }
        get profileImageSet() {
          return (0, p.yE)(this.account.flags, 16);
        }
      };
      (0, i.gn)(
        [
          (0, o.computedFrom)("username", "account.username"),
          (0, i.w6)("design:type", Boolean),
          (0, i.w6)("design:paramtypes", []),
        ],
        m.prototype,
        "usernameUpdated",
        null
      ),
        (0, i.gn)(
          [
            (0, o.computedFrom)(
              "profileImage",
              "account.profileImage",
              "account.flags"
            ),
            (0, i.w6)("design:type", Boolean),
            (0, i.w6)("design:paramtypes", []),
          ],
          m.prototype,
          "profileImageUpdated",
          null
        ),
        (0, i.gn)(
          [
            (0, o.computedFrom)("account.flags"),
            (0, i.w6)("design:type", Boolean),
            (0, i.w6)("design:paramtypes", []),
          ],
          m.prototype,
          "profileImageSet",
          null
        ),
        (m = (0, i.gn)(
          [
            (0, u.b)({ selectors: { account: (0, u.g)("account") } }),
            (0, o.autoinject)(),
            (0, i.w6)("design:paramtypes", [
              n.K,
              r.x,
              s.yh,
              d.BasicDialogService,
              l.v,
            ]),
          ],
          m
        ));
    },
    "settings/resources/elements/release-channel-selector": (e, t, a) => {
      a.r(t), a.d(t, { ReleaseChannelSelector: () => d });
      var i = a(70655),
        o = a("aurelia-framework"),
        s = a(81110),
        n = a("shared/dialogs/basic-dialog"),
        l = a(35969),
        r = a(93082),
        c = a(66302);
      let d = class {
        #a;
        #p;
        #b;
        constructor(e, t) {
          (this.#a = e),
            (this.#p = t),
            (this.selectedChannel = e.updateChannel || "disabled");
        }
        bind() {
          this.#f();
        }
        accountChanged() {
          this.#f();
        }
        catalogChanged() {
          this.#f();
        }
        #f() {
          const e = [
            ...this.catalog.releaseChannels,
            ...(this.account.releaseChannels ?? []),
          ];
          (this.channelIds = e.map((e) => e.id)),
            (this.channelLabels = {
              disabled: l.oc.literal("—"),
              ...Object.fromEntries(e.map((e) => [e.id, l.oc.literal(e.name)])),
            }),
            (this.channelLabels[this.selectedChannel] ??=
              l.oc.literal("Unknown"));
        }
        async selectedChannelChanged(e, t) {
          if (this.#b) return void (this.#b = !1);
          if (void 0 === t) return;
          if (e === t) return;
          const a = this.channelIds.indexOf(e),
            i = this.channelIds.indexOf(t);
          let o;
          a > i &&
            (o = await this.#p.show({
              headerLabel: "release_channel_selector.app_upgrade",
              message:
                "release_channel_selector.channel_may_include_unstable_features",
              options: [
                {
                  label: "release_channel_selector.continue",
                  style: "primary",
                },
                { label: "release_channel_selector.cancel" },
              ],
            })),
            a < i &&
              (o = await this.#p.show({
                headerLabel: "release_channel_selector.app_downgrade",
                message: "release_channel_selector.youll_have_to_wait",
                options: [
                  {
                    label: "release_channel_selector.continue",
                    style: "primary",
                  },
                  { label: "release_channel_selector.cancel" },
                ],
              })),
            "release_channel_selector.continue" === o
              ? this.#a.setUpdateChannel(e) &&
                this.#a.checkForUpdate().catch(c.K)
              : ((this.#b = !0), (this.selectedChannel = t));
        }
      };
      (0, i.gn)(
        [o.observable, (0, i.w6)("design:type", String)],
        d.prototype,
        "selectedChannel",
        void 0
      ),
        (d = (0, i.gn)(
          [
            (0, r.b)({
              selectors: {
                catalog: (0, r.g)("catalog"),
                account: (0, r.g)("account"),
              },
            }),
            (0, o.autoinject)(),
            (0, i.w6)("design:paramtypes", [s.f, n.BasicDialogService]),
          ],
          d
        ));
    },
    "settings/resources/elements/setting": (e, t, a) => {
      a.r(t), a.d(t, { Setting: () => r });
      var i = a(70655),
        o = a("aurelia-framework"),
        s = a(45437),
        n = a(93082),
        l = a(27170);
      let r = class {
        #t;
        #v;
        #w;
        constructor(e) {
          (this.#w = !1), (this.#t = e);
        }
        bind() {
          this.settingsChanged();
        }
        attached() {
          this.#w = !0;
        }
        settingsChanged() {
          const e = this.settings[this.#v.key];
          this.value = void 0 !== e ? e : this.#v.default;
        }
        activate(e) {
          this.#v = e;
        }
        valueChanged(e) {
          this.#w && this.#t.dispatch(l.D3, { [this.#v.key]: e }, "settings");
        }
      };
      (0, i.gn)(
        [o.bindable, (0, i.w6)("design:type", Object)],
        r.prototype,
        "value",
        void 0
      ),
        (r = (0, i.gn)(
          [
            (0, n.b)({ selectors: { settings: (0, n.g)("settings") } }),
            (0, o.autoinject)(),
            (0, i.w6)("design:paramtypes", [s.yh]),
          ],
          r
        ));
    },
    "settings/resources/elements/sound-pack": (e, t, a) => {
      a.r(t), a.d(t, { SoundPack: () => l });
      var i = a(70655),
        o = a("aurelia-framework"),
        s = a(28529),
        n = a(11912);
      let l = class {
        #y;
        constructor(e) {
          (this.soundPlayer = e),
            (this.#y = !1),
            (this.selectedSoundPack = e.selectedPack);
        }
        async selectedSoundPackChanged(e, t) {
          void 0 !== t &&
            (await this.soundPlayer.setSoundPack(e, "settings"),
            await this.soundPlayer.preload());
        }
        async preview() {
          if (!this.#y) {
            this.#y = !0;
            try {
              await this.soundPlayer.play(s.$.Enable),
                await (0, n.UC)(1e3),
                await this.soundPlayer.play(s.$.Disable);
            } finally {
              this.#y = !1;
            }
          }
        }
      };
      (0, i.gn)(
        [o.observable, (0, i.w6)("design:type", String)],
        l.prototype,
        "selectedSoundPack",
        void 0
      ),
        (l = (0, i.gn)(
          [(0, o.autoinject)(), (0, i.w6)("design:paramtypes", [s.s])],
          l
        ));
    },
  },
]);

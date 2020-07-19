var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var gdeint;
(function (gdeint) {
    var CViewTermsMenu = (function (_super) {
        __extends(CViewTermsMenu, _super);
        function CViewTermsMenu() {
            return _super.call(this) || this;
        }
        CViewTermsMenu.prototype.childrenCreated = function () {
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
            this.viewUserProBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onViewUserProBtn, this);
            this.viewPriPoliBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onViewPriPoliBtn, this);
        };
        CViewTermsMenu.prototype.onViewUserProBtn = function () {
            this.userProPanel.visible = true;
        };
        CViewTermsMenu.prototype.onViewPriPoliBtn = function () {
            this.priPoliPanel.visible = true;
        };
        CViewTermsMenu.prototype.onCloseBtn = function () {
            this.visible = false;
        };
        return CViewTermsMenu;
    }(eui.Component));
    gdeint.CViewTermsMenu = CViewTermsMenu;
    __reflect(CViewTermsMenu.prototype, "gdeint.CViewTermsMenu");
})(gdeint || (gdeint = {}));
//# sourceMappingURL=CViewTermsMenu.js.map
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
    var CSndConfMenu = (function (_super) {
        __extends(CSndConfMenu, _super);
        function CSndConfMenu() {
            return _super.call(this) || this;
        }
        // 从存储获取设置值。第一次打开对话框时需要外部调用执行。
        CSndConfMenu.prototype.fetchData = function () {
            egret.ExternalInterface.call("fetchIsSndOn", "");
        };
        CSndConfMenu.prototype.show = function () {
            this.sndOnSwitch.$setSelected(g_isSndOn);
            this.visible = true;
        };
        CSndConfMenu.prototype.savData = function () {
            var strSndOn = "";
            g_isSndOn = this.sndOnSwitch.selected;
            if (g_isSndOn) {
                strSndOn = "1";
            }
            else {
                strSndOn = "0";
            }
            egret.ExternalInterface.call("storeIsSndOn", strSndOn);
            this.visible = false;
        };
        CSndConfMenu.prototype.childrenCreated = function () {
            this.OKBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOKBtn, this);
            this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelBtn, this);
        };
        CSndConfMenu.prototype.onOKBtn = function () {
            this.savData();
            this.visible = false;
        };
        CSndConfMenu.prototype.onCancelBtn = function () {
            this.fetchData(); //回滚到修改前的设置。
            this.visible = false;
        };
        return CSndConfMenu;
    }(eui.Component));
    gdeint.CSndConfMenu = CSndConfMenu;
    __reflect(CSndConfMenu.prototype, "gdeint.CSndConfMenu");
})(gdeint || (gdeint = {}));
//# sourceMappingURL=CSndConfMenu.js.map
/***********************************************************
* /src/components/notifications/CAlertPanel.ts
* 功能类似于 window.alert 。作为显示容器的插件使用。
*
************************************************************/
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
    var CAlertPanel_v2 = (function (_super) {
        __extends(CAlertPanel_v2, _super);
        function CAlertPanel_v2() {
            var _this = _super.call(this) || this;
            _this.m_cc = false;
            _this.visible = false;
            _this.x = 0;
            _this.y = 0;
            return _this;
        }
        /*
            设置父窗体。
        */
        CAlertPanel_v2.prototype.setParent = function (p) {
            this.m_parent = p;
        };
        CAlertPanel_v2.prototype.getParent = function () {
            return this.m_parent;
        };
        CAlertPanel_v2.prototype.setCloseListener = function (func) {
            this.m_closeListener = func;
        };
        /*
            设置要提示的内容。
        */
        CAlertPanel_v2.prototype.setContent = function (con) {
            this.cc_content = con;
            if (this.m_cc) {
                this.content.text = this.cc_content;
            }
        };
        /*
            显示警告框。
        */
        CAlertPanel_v2.prototype.showDlg = function () {
            if (this.getParent()) {
                this.getParent().getNotiLayer().addChild(CDispObj2EgretDOAdapter.from(this));
                this.getParent().getNotiLayer().show();
                this.visible = true;
                this.getParent().disableForNoti();
            }
            else {
                this.show();
            }
        };
        /*
            传入父场景的大小和坐标偏移量，以便根据父场景确定本框的显示位置。
        */
        CAlertPanel_v2.prototype.setSceneRect = function (x, y, wid, hei) {
            this.x = x + (wid - 300) / 2;
            this.y = y + (hei - 300) / 5 * 2;
        };
        /*
            设置父容器。因实现多接口所以难以避免代码重复。
        */
        CAlertPanel_v2.prototype._setParentContainer = function (pc) {
            this.m_parentContainer = pc;
        };
        CAlertPanel_v2.prototype._getParentContainer = function () {
            window.alert("Don't use _getParentContainer() here. Use getParent() instead.");
            return this.m_parentContainer;
        };
        CAlertPanel_v2.prototype.childrenCreated = function () {
            this.m_cc = true;
            this.content.text = this.cc_content;
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        };
        CAlertPanel_v2.prototype.onCloseBtn = function (evt) {
            this.visible = false;
            if (this.getParent()) {
                this.getParent().getNotiLayer().hide();
                this.getParent().applyFunc(this.m_closeListener, null);
                this.getParent().resumeAfterNoti();
            }
        };
        /*
            注：要利用警告框提示信息时应调用showDlg()，而不是show()。
        */
        CAlertPanel_v2.prototype.show = function () {
            this.visible = true;
        };
        CAlertPanel_v2.prototype.hide = function () {
            this.visible = false;
        };
        CAlertPanel_v2.prototype.isVisible = function () {
            return this.visible;
        };
        return CAlertPanel_v2;
    }(eui.Panel));
    gdeint.CAlertPanel_v2 = CAlertPanel_v2;
    __reflect(CAlertPanel_v2.prototype, "gdeint.CAlertPanel_v2", ["IAlertDlg", "INotification", "IContainerPlugin", "gdeint.IHidable"]);
})(gdeint || (gdeint = {}));
//# sourceMappingURL=CAlertPanel_v2.js.map
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
    var CPraMenu = (function (_super) {
        __extends(CPraMenu, _super);
        function CPraMenu() {
            return _super.call(this) || this;
        }
        CPraMenu.prototype.childrenCreated = function () {
            this.sndConfMenu.fetchData(); // 从存储获取设置值到声音设置对话框。
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClose, this);
            this.adjustTopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAdjustTopBtn, this);
            this.caliBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCaliBtn, this);
            this.sndConfBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSndConfBtn, this);
            this.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelpBtn, this);
            this.viewTermsBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onViewTermsBtn, this);
            this.quitPraBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onQuitPra, this);
        };
        CPraMenu.prototype.show = function () {
            this.visible = true;
        };
        CPraMenu.prototype.hide = function () {
            this.visible = false;
        };
        CPraMenu.prototype.isVisible = function () {
            return this.visible;
        };
        CPraMenu.prototype.setSceneRect = function (x, y, wid, hei) {
            //设置父场景大小和坐标偏移量，以便确定确认框的显示位置。
            this.x = x + (wid - 350) / 2;
            this.y = y + (hei - 580) / 5 * 2;
            console.log("Setting scene rect!");
        };
        CPraMenu.prototype._setParentContainer = function (c) {
            this.m_parentContainer = c;
            this._getParentContainer().getDlgLayer().addChild(CDispObj2EgretDOAdapter.from(this));
            console.log("Parent container set!");
        };
        CPraMenu.prototype._getParentContainer = function () {
            return this.m_parentContainer;
        };
        CPraMenu.prototype._setMenuListener = function (menuListener) {
            this.m_menuListener = menuListener;
        };
        /*
        * 右上角关闭按钮触摸时触发。
        */
        CPraMenu.prototype.onClose = function () {
            this.visible = false;
            var argArr = new Array(); // apply是javascript方法所以要用javascript对象。
            argArr[0] = false;
            this._getParentContainer().applyFunc(this.m_closeListener, argArr);
        };
        CPraMenu.prototype.onAdjustTopBtn = function () {
            this.onMenu("AdjustTop");
            this.adjustTopDlg.visible = true;
        };
        CPraMenu.prototype.onCaliBtn = function () {
            this.onMenu("Calibrate");
        };
        CPraMenu.prototype.onSndConfBtn = function () {
            console.log("Showing SndConfMenu!");
            this.sndConfMenu.show(); // 不能直接设置visible，因为需要读取当前设置。
            this.onMenu("SndConf");
        };
        CPraMenu.prototype.onHelpBtn = function () {
            this.helpPanel.visible = true;
        };
        CPraMenu.prototype.onViewTermsBtn = function () {
            this.viewTermsMenu.visible = true;
            this.onMenu("ViewTerms");
        };
        CPraMenu.prototype.onMenu = function (menuClicked) {
            if ("AdjustTop" == menuClicked) {
                console.log("onMenu Adjusting top!");
                console.log("Now top space is:" + g_topSpaceHeight);
                //                gdeint.CAdjustTop 
            }
            if ("Calibrate" == menuClicked) {
                //                this.m_parentContainer.showCaliDlg(this.onCaliDlgClose);
                this.m_parentContainer.showCaliDlg(this.m_parentContainer.sendMsgToScene("getOnCaliDlgCloseFunc", null));
                this.visible = false;
            }
            //            else if("ViewTerms" == menuClicked) 不涉及跟容器或scene交互的菜单不触发onMenu。
        };
        CPraMenu.prototype.onQuitPra = function () {
            this.m_parentContainer.showConfirm("该操作将放弃当前练习的进度和数据。\n您确定继续吗？", this.onBack2MainMenuConfirm);
        };
        CPraMenu.prototype.onBack2MainMenuConfirm = function (param) {
            var ret = param;
            if (ret) {
                g_pageJumper.gotoPage("WelcomeScene", null);
            }
            else {
            }
        };
        return CPraMenu;
    }(eui.Component));
    gdeint.CPraMenu = CPraMenu;
    __reflect(CPraMenu.prototype, "gdeint.CPraMenu", ["IContainerPlugin", "gdeint.IHidable"]);
})(gdeint || (gdeint = {}));
//# sourceMappingURL=CPraMenu.js.map
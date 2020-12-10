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
    var CAdjustTopDlg = (function (_super) {
        __extends(CAdjustTopDlg, _super);
        function CAdjustTopDlg() {
            return _super.call(this) || this;
        }
        CAdjustTopDlg.prototype.childrenCreated = function () {
            console.log("Children created in CAdjustTop!");
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelBtn, this);
            this.OKBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOKBtn, this);
            this.applyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onApplyBtn, this);
            this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelBtn, this);
        };
        CAdjustTopDlg.prototype.onOKBtn = function () {
            this.onApplyBtn();
            this.visible = false;
        };
        CAdjustTopDlg.prototype.onApplyBtn = function () {
            console.log("Applying new topspace!");
            var tmpTH = parseInt(this.topSpaceInp.text);
            if (tmpTH < 0)
                tmpTH = 0;
            else if (tmpTH > 800)
                tmpTH = 800;
            /*			else if(tmpTH > 200)
                            tmpTH = 200;*/
            g_topSpaceHeight = tmpTH;
            console.log("New topspace height(num):" + g_topSpaceHeight);
            g_praEasyScene.m_wm.setTopSpaceHeight(g_topSpaceHeight);
            g_praDiffProScene.m_wm.setTopSpaceHeight(g_topSpaceHeight);
            g_praDifficultScene.m_wm.setTopSpaceHeight(g_topSpaceHeight);
            if (g_praEasyScene.m_created) {
                g_praEasyScene.refreshScene();
            }
            if (g_praDiffProScene.m_created) {
                g_praDiffProScene.refreshScene();
            }
            if (g_praDifficultScene.m_created) {
                g_praDifficultScene.refreshScene();
            }
            console.log("Apply finished!");
        };
        CAdjustTopDlg.prototype.onCancelBtn = function () {
            this.visible = false;
        };
        return CAdjustTopDlg;
    }(eui.Component));
    gdeint.CAdjustTopDlg = CAdjustTopDlg;
    __reflect(CAdjustTopDlg.prototype, "gdeint.CAdjustTopDlg");
})(gdeint || (gdeint = {}));
//# sourceMappingURL=CAdjustTopDlg.js.map
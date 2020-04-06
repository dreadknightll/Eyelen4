/**************************************************
 * /src/UI/scenes/CMainMenu.ts
 *
 * 主菜单画面。
 *
**************************************************/
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
var eyelen4;
(function (eyelen4) {
    var CMainMenu = (function (_super) {
        __extends(CMainMenu, _super);
        function CMainMenu() {
            var _this = _super.call(this) || this;
            _this.m_trueWidth = 480;
            _this.m_trueHeight = 744;
            _this.m2_cc = false;
            _this.m_startTimer = new egret.Timer(5000, 1); // 5秒内不选择则自动进入困难练习。
            _this.m_startTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, _this.startDifficult, _this);
            return _this;
        }
        CMainMenu.prototype.childrenCreated = function () {
            this.startEasyBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startEasy, this);
            this.startEasyBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startEasy, this);
            this.startDifficultBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startDifficult, this);
            this.startDifficultBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startDifficult, this);
            this.m2_cc = true;
            this.rearrangeUI();
        };
        //定义了一些函数使内容居中。
        CMainMenu.prototype.setTrueWidth = function (w) {
            this.m_trueWidth = w;
            if (this.m2_cc) {
                this.rearrangeUI();
            }
        };
        CMainMenu.prototype.setTrueHeight = function (h) {
            this.m_trueHeight = h;
            if (this.m2_cc) {
                this.rearrangeUI();
            }
        };
        CMainMenu.prototype.rearrangeUI = function () {
            var scale, scale1, scale2;
            var leftGap = 0;
            scale1 = this.m_trueWidth / 400;
            scale2 = this.m_trueHeight / 744;
            if (scale1 < scale2) {
                scale = scale1;
                leftGap = 0;
            }
            else {
                scale = scale2;
                leftGap = (this.m_trueWidth / scale - 400) / 2;
            }
            this.menuGrp.left = 50.0 / 400 * this.m_trueWidth + leftGap;
            this.menuGrp.scaleX = scale;
            this.menuGrp.scaleY = scale;
        };
        CMainMenu.prototype.run = function () {
            this.m_startTimer.start();
            g_shutdownTimer.start();
        };
        /*
        * 开始简单练习。
        */
        CMainMenu.prototype.startEasy = function () {
            g_level = 1;
            g_praEasyContainer.startNewPra(); // 切换画面前先启动练习。
            //        先显示翻页动画 （未完成）
            g_praEasyContainer.saveVisibleStates();
            g_pageJumper.gotoPage("PraEasyScene", null); // 使用页面跳转器换页。非常方便。
            this.m_startTimer.stop();
        };
        CMainMenu.prototype.startNormal = function () {
            //目前没有中等难度。
            g_level = 2;
        };
        /*
        * 开始困难练习。
        */
        CMainMenu.prototype.startDifficult = function () {
            g_level = 3;
            g_praDifficultContainer.startNewPra();
            //        先显示翻页动画 （未完成）
            g_praDifficultContainer.saveVisibleStates();
            g_pageJumper.gotoPage("PraDifficultScene", null);
            this.m_startTimer.stop();
        };
        /*
        * 回到欢迎屏幕。
        */
        CMainMenu.prototype.goBack = function () {
        };
        return CMainMenu;
    }(eui.Panel));
    eyelen4.CMainMenu = CMainMenu;
    __reflect(CMainMenu.prototype, "eyelen4.CMainMenu");
})(eyelen4 || (eyelen4 = {}));
//# sourceMappingURL=CMainMenu.js.map
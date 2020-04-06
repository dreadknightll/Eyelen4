/****************************************************
 * /src/UI/scenes/CWelcomeScene_Eyelen4.ts
 *
 * 欢迎场景界面。
 *
 ****************************************************/
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
    var CWelcomeScene_Eyelen4 = (function (_super) {
        __extends(CWelcomeScene_Eyelen4, _super);
        function CWelcomeScene_Eyelen4() {
            var _this = _super.call(this) || this;
            _this.m_cc = false; //Children created boolean.
            _this.m_cc = false;
            return _this;
        }
        CWelcomeScene_Eyelen4.prototype.switch2StartBtn = function () {
            //旧版本留下的方法。暂未使用。
            if (this.m_cc) {
                this.startBtn.visible = true;
            }
        };
        CWelcomeScene_Eyelen4.prototype.childrenCreated = function () {
            this.shutdownClock.setFontSize(18);
            this.shutdownClock.setTimer(g_shutdownTimer);
            this.shutdownClock.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClockTap, this);
            //填写超链接文本流：
            //1、用户协议：
            this.userProLabel.text = "";
            this.userProLabel.textFlow = new Array({
                text: "我已阅读并同意", style: {}
            }, {
                text: "《用户协议》", style: { "href": "event:text event triggered", "textColor": 0x4444ff }
            }, {
                text: " ", style: {} /*必须留有空格，否则发布 Native 版会出现显示问题。*/
            });
            this.userProLabel.touchEnabled = true;
            this.userProLabel.addEventListener(egret.TextEvent.LINK, function (evt) {
                this.userProPanel.visible = true;
            }, this);
            //2、隐私政策：
            this.priPoliLabel.text = "";
            this.priPoliLabel.textFlow = new Array({
                text: "我已阅读并同意", style: {}
            }, {
                text: "《隐私政策》", style: { "href": "event:text event triggered", "textColor": 0x4444ff }
            }, {
                text: " ", style: {}
            });
            this.priPoliLabel.touchEnabled = true;
            this.priPoliLabel.addEventListener(egret.TextEvent.LINK, function (evt) {
                this.priPoliPanel.visible = true;
            }, this);
            //3、横竖校准：
            this.horverLabel.textFlow = new Array({
                text: "我已认真进行", style: {}
            }, {
                text: "横竖检验", style: { "href": "event:text event triggered", "textColor": 0x4444ff }
            }, {
                text: "并仔细阅读相\n关说明", style: {}
            });
            this.horverLabel.touchEnabled = true;
            this.horverLabel.addEventListener(egret.TextEvent.LINK, function (evt) {
                this.horverCheckPanel.visible = true;
            }, this);
            this.showCRBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShowCR, this);
            this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartPra, this);
            this.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp, this);
            this.userProRead.addEventListener(eui.UIEvent.CHANGE, this.onReadyCBCheck, this);
            this.priPoliRead.addEventListener(eui.UIEvent.CHANGE, this.onReadyCBCheck, this);
            this.horverChecked.addEventListener(eui.UIEvent.CHANGE, this.onReadyCBCheck, this);
            this.m_cc = true;
        };
        CWelcomeScene_Eyelen4.prototype.onReadyCBCheck = function () {
            if (this.userProRead.selected && this.priPoliRead.selected && this.horverChecked.selected) {
                //当且仅当三个复选框都选上开始练习按钮才会启用。
                this.startBtn.enabled = true;
            }
            else {
                this.startBtn.enabled = false;
            }
        };
        CWelcomeScene_Eyelen4.prototype.onShowCR = function () {
            // 显示著作权声明：
            this.crPanel.visible = true;
        };
        CWelcomeScene_Eyelen4.prototype.onHelp = function () {
            // 显示指引：
            this.helpPanel.visible = true;
        };
        CWelcomeScene_Eyelen4.prototype.onStartPra = function (evt) {
            //        先显示翻页动画 （未完成）
            this.startBtn.visible = false;
            g_pageJumper.gotoPage("MainMenu", null);
            g_mainMenu.run();
        };
        CWelcomeScene_Eyelen4.prototype.onClockTap = function () {
            g_praEasyContainer.showAlert("为了您的健康，每次使用20分钟后自动停止。", null);
        };
        return CWelcomeScene_Eyelen4;
    }(eui.Component));
    eyelen4.CWelcomeScene_Eyelen4 = CWelcomeScene_Eyelen4;
    __reflect(CWelcomeScene_Eyelen4.prototype, "eyelen4.CWelcomeScene_Eyelen4");
})(eyelen4 || (eyelen4 = {}));
//# sourceMappingURL=CWelcomeScene_Eyelen4.js.map
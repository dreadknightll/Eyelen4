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
var eyelen3E;
(function (eyelen3E) {
    var CShutDownClock = (function (_super) {
        __extends(CShutDownClock, _super);
        function CShutDownClock() {
            var _this = _super.call(this) || this;
            _this.m2_cc = false;
            _this.m2_cc = 94;
            return _this;
        }
        CShutDownClock.prototype.childrenCreated = function () {
            this.m2_cc = true;
            this.timeLabel.size = this.m2_fontSize;
        };
        CShutDownClock.prototype.setFontSize = function (fs) {
            this.m2_fontSize = fs;
            if (this.m2_cc) {
                this.timeLabel.size = this.m2_fontSize;
            }
        };
        CShutDownClock.prototype.setTimer = function (msCnt, listener) {
            /*			var timer:egret.Timer;
                        timer = new egret.Timer(msCnt , 1);
                        timer.$addListener(egret.TimerEvent.TIMER,listener,this);
                        timer.addEventListener()
                        listener();*/
        };
        return CShutDownClock;
    }(eui.Component));
    eyelen3E.CShutDownClock = CShutDownClock;
    __reflect(CShutDownClock.prototype, "eyelen3E.CShutDownClock");
})(eyelen3E || (eyelen3E = {}));
//# sourceMappingURL=CShutDownClock.js.map
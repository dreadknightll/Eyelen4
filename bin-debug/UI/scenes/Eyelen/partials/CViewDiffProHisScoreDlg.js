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
    var CViewDiffProHisScoreDlg = (function (_super) {
        __extends(CViewDiffProHisScoreDlg, _super);
        function CViewDiffProHisScoreDlg() {
            return _super.call(this) || this;
        }
        CViewDiffProHisScoreDlg.prototype.childrenCreated = function () {
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        };
        CViewDiffProHisScoreDlg.prototype.show = function () {
            console.log("ScoreJSONObjSize():" + g2_tmpScoresJSONObj.size);
            this.scoreLabel.text = "";
            var i;
            for (i = 0; i < g2_tmpScoresJSONObj.Scores.length; ++i) {
                this.scoreLabel.text += (g2_tmpScoresJSONObj.Scores[i].Score + "分 于" + g2_tmpScoresJSONObj.Scores[i].PraDateTime + "\n\n");
            }
            this.visible = true;
        };
        CViewDiffProHisScoreDlg.prototype.onCloseBtn = function () {
            this.visible = false;
        };
        return CViewDiffProHisScoreDlg;
    }(eui.Component));
    eyelen4.CViewDiffProHisScoreDlg = CViewDiffProHisScoreDlg;
    __reflect(CViewDiffProHisScoreDlg.prototype, "eyelen4.CViewDiffProHisScoreDlg");
})(eyelen4 || (eyelen4 = {}));

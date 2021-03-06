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
/**
 * /src/components/UIComponents/common/CProgressView.ts
 * 进度显示控件。
 */
var eyelen4;
(function (eyelen4) {
    var CProgressView = (function (_super) {
        __extends(CProgressView, _super);
        function CProgressView() {
            var _this = _super.call(this) || this;
            _this.s_cellWidth = 20; // 格子宽度。
            _this.s_cellHeight = 18; //格子高度。
            var i;
            _this.m_progressCellsArr = new Array();
            _this.m_progressCellContainer = new egret.DisplayObjectContainer();
            _this.m_progress = 0;
            for (i = 0; i < 10; ++i) {
                _this.m_progressCellsArr[i] = new egret.Bitmap();
                _this.m_progressCellsArr[i].x = i * _this.s_cellWidth;
                _this.m_progressCellsArr[i].y = 0;
                _this.m_progressCellsArr[i].width = _this.s_cellWidth;
                _this.m_progressCellsArr[i].height = _this.s_cellHeight;
                _this.m_progressCellsArr[i].texture = RES.getRes("progress_cell_empty_png");
                _this.m_progressCellContainer.addChild(_this.m_progressCellsArr[i]);
            }
            return _this;
        }
        CProgressView.prototype.childrenCreated = function () {
            this.progressCells.addChild(this.m_progressCellContainer);
        };
        // 显示参数所指的进度。
        CProgressView.prototype.setProgress = function (progress) {
            //progress range:0~10
            this.m_progress = progress;
            var i;
            for (i = 1; i <= this.m_progress; ++i) {
                this.m_progressCellsArr[i - 1].texture = RES.getRes("progress_cell_png");
            }
            for (; i <= 10; ++i) {
                this.m_progressCellsArr[i - 1].texture = RES.getRes("progress_cell_empty_png");
            }
        };
        CProgressView.prototype.clear = function () {
            this.setProgress(0);
        };
        return CProgressView;
    }(eui.Component));
    eyelen4.CProgressView = CProgressView;
    __reflect(CProgressView.prototype, "eyelen4.CProgressView");
})(eyelen4 || (eyelen4 = {}));

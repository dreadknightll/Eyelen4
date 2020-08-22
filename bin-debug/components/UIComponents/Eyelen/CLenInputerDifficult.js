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
 *
 * /src/components/UIComponents/Eyelen/CLenInputerDifficult.ts
 * 困难难度下的长度输入控件。让用户拉动卷尺输入长度。
 * 本卷尺控件由尺盒、尺带、拉环三部分组成。用户拉动拉环进行目测结果输入。
 *
 */
var eyelen4;
(function (eyelen4) {
    var CLenInputerDifficult = (function (_super) {
        __extends(CLenInputerDifficult, _super);
        function CLenInputerDifficult() {
            return _super.call(this) || this;
        }
        CLenInputerDifficult.prototype.childrenCreated = function () {
            this.m_isDraging = false;
            this.m_firstDraged = false;
            this.okBtn.enabled = false;
            this.m_dragerBaseX = this.ruler_head.x + this.ruler_head.width;
            this.m_rulerBodyShape = new egret.Shape();
            this.ruler_body.addChild(this.m_rulerBodyShape);
            this.drager.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStartDrag, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveOnStage, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTchEndOnStage, this);
            this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTchRelOutOfStage, this);
        };
        /*
        * 开始拖动时触发。
        */
        CLenInputerDifficult.prototype.onStartDrag = function (evt) {
            if (this.m_isLocked) {
                return;
            }
            this.m_isDraging = true;
            this.m_firstDraged = true;
            this.okBtn.enabled = true;
            this.m_tchPosX = evt.localX;
            if (g_isSndOn) {
                playBtnSnd();
            }
        };
        /*
        * 画尺带。
        */
        CLenInputerDifficult.prototype.drawLen = function () {
            this.m_rulerBodyShape.graphics.clear();
            this.m_rulerBodyShape.graphics.beginFill(0x888888);
            this.m_rulerBodyShape.graphics.drawRect(0, 0, this.drager.x - this.m_dragerBaseX, 60);
            this.m_rulerBodyShape.graphics.endFill();
        };
        /*
        * 拖动时触发。
        */
        CLenInputerDifficult.prototype.onMoveOnStage = function (evt) {
            if (this.m_isLocked) {
                return;
            }
            if (this.m_isDraging) {
                var newX = evt.stageX - this.m_tchPosX;
                if (newX < this.m_dragerBaseX) {
                    newX = this.m_dragerBaseX;
                }
                this.drager.x = newX;
                this.drawLen();
            }
        };
        /*
        * 触摸结束时触发（在卷尺控件内释放）
        */
        CLenInputerDifficult.prototype.onTchEndOnStage = function (evt) {
            if (this.m_isDraging) {
                if (g_isSndOn) {
                    playBtnSnd();
                }
            }
            this.m_isDraging = false;
        };
        /*
        * 触摸结束时触发（在卷尺控件外释放）
        */
        CLenInputerDifficult.prototype.onTchRelOutOfStage = function (evt) {
            this.m_isDraging = false;
        };
        CLenInputerDifficult.prototype.setWidth = function (wid) {
            this.width = wid;
            this.okBtn.x = wid - this.okBtn.width - 20;
        };
        /*
        * 获取当前卷尺代表的长度。
        */
        CLenInputerDifficult.prototype.getLen = function () {
            return this.drager.x - this.m_dragerBaseX;
        };
        /*
        * 清空卷尺长度。
        */
        CLenInputerDifficult.prototype.clearLen = function () {
            this.drager.x = this.m_dragerBaseX;
            this.m_rulerBodyShape.graphics.clear();
            this.m_rulerBodyShape.graphics.beginFill(0x000000);
            this.m_rulerBodyShape.graphics.endFill(); // 要加上这两行否则安卓真机下可能清除失败。
            this.m_firstDraged = false;
            this.okBtn.enabled = false;
        };
        /*
        * 锁定不允许操作卷尺。
        */
        CLenInputerDifficult.prototype.lock = function () {
            this.m_isLocked = true;
            this.okBtn.enabled = false;
        };
        /*
        * 解除锁定，重新允许操作卷尺。
        */
        CLenInputerDifficult.prototype.unlock = function () {
            this.m_isLocked = false;
            if (this.m_firstDraged) {
                this.okBtn.enabled = true;
            }
        };
        return CLenInputerDifficult;
    }(CLenInputerBase));
    eyelen4.CLenInputerDifficult = CLenInputerDifficult;
    __reflect(CLenInputerDifficult.prototype, "eyelen4.CLenInputerDifficult");
})(eyelen4 || (eyelen4 = {}));
//# sourceMappingURL=CLenInputerDifficult.js.map
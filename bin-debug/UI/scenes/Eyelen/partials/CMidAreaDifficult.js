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
 * /src/UI/scenes/Eyelen/partials/CMidAreaDifficult.ts
 * 练习场景中部区域。
 *
 */
var eyelen4;
(function (eyelen4) {
    var CMidAreaDifficult = (function (_super) {
        __extends(CMidAreaDifficult, _super);
        function CMidAreaDifficult() {
            var _this = _super.call(this) || this;
            _this.m_trueWidth = 0;
            _this.m_trueHeight = 0;
            _this.m_visibleStartY = 0;
            _this.m2_isImgMoving = false;
            _this.m2_cc = false;
            _this.s_horSpace = 80;
            _this.s_verSpace = 80;
            _this.m_imgCircler = new gdeint.CSquareCircler();
            _this.m_bg = new egret.Shape();
            _this.m2_imgTchStartPoint = new gdeint.CPoint();
            _this.m2_imgStartPoint = new gdeint.CPoint();
            _this.m_evtImgDragEnd = new CMidAreaEvent_Eyelen(CMidAreaEvent_Eyelen.EVT_IMG_DRAGEND);
            _this.m_randomGraphShape = new gdeint.CRandomGraph();
            return _this;
        }
        CMidAreaDifficult.prototype.childrenCreated = function () {
            this.randomGraph.addChild(this.m_randomGraphShape);
            var rect = new egret.Rectangle();
            rect.x = 0;
            rect.y = 0;
            if (0 == this.m_trueWidth) {
                rect.width = 720;
            }
            else {
                rect.width = this.m_trueWidth;
            }
            rect.height = 3000;
            this.mask = rect;
            this.midBgGrp.addChild(this.m_bg);
            if (CGlobals.S_NO_IMG_MODE) {
                this.m_randomGraphShape.touchEnabled = true;
                this.m_randomGraphShape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
                this.m_randomGraphShape.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
                this.m_randomGraphShape.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
            }
            else {
                this.imgFromFile.touchEnabled = true;
                this.imgFromFile.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
                this.imgFromFile.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
                this.imgFromFile.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
            }
            this.m2_cc = true;
        };
        CMidAreaDifficult.prototype.redrawBg = function () {
            this.m_bg.width = this.getTrueWidth();
            this.m_bg.height = this.m_trueHeight;
            this.m_bg.graphics.clear();
            this.m_bg.graphics.beginFill(0x999999);
            this.m_bg.graphics.drawRect(0, 0, this.m_bg.width, this.m_bg.height);
            this.m_bg.graphics.endFill();
            var rect = new egret.Rectangle();
            rect.x = 0;
            rect.y = 0;
            if (0 == this.m_trueWidth) {
                rect.width = 720;
            }
            else {
                rect.width = this.m_trueWidth;
            }
            rect.height = 3000;
            this.mask = rect; // 超出显示范围部分不显示。
        };
        CMidAreaDifficult.prototype.readjustCircler = function () {
            // 宽度使用校准后的。
            var circlerRect = new gdeint.CRect();
            circlerRect.m_left = 0;
            circlerRect.m_top = this.m_visibleStartY;
            circlerRect.m_width = this.getTrueWidth();
            circlerRect.m_height = this.getTrueHeight() - this.m_visibleStartY;
            this.m_imgCircler.setCirclerRect(circlerRect);
            this.m_imgCircler.setPullGapHor(this.s_horSpace);
            this.m_imgCircler.setPullGapVer(this.s_verSpace);
            this.m_imgCircler.setPushGapHor(this.s_horSpace);
            this.m_imgCircler.setPushGapVer(this.s_verSpace);
            var imgRect = new gdeint.CRect();
            if (CGlobals.S_NO_IMG_MODE) {
                imgRect.m_width = this.randomGraph.width;
                imgRect.m_height = this.randomGraph.height;
            }
            else {
                imgRect.m_width = this.imgFromFile.width;
                imgRect.m_height = this.imgFromFile.height;
            }
            this.m_imgCircler.setItemRect(imgRect);
            var inpPos = new gdeint.CPoint();
            inpPos.m_x = -this.midContentGroup.x;
            inpPos.m_y = -this.midContentGroup.y;
            this.m_imgCircler.setInpPos(inpPos);
        };
        CMidAreaDifficult.prototype.touchBegin = function (evt) {
            this.readjustCircler();
            this.m2_imgTchStartPoint.m_x = evt.stageX;
            this.m2_imgTchStartPoint.m_y = evt.stageY;
            this.m2_imgStartPoint.m_x = this.midContentGroup.x;
            this.m2_imgStartPoint.m_y = this.midContentGroup.y;
            this.m2_isImgMoving = true;
        };
        CMidAreaDifficult.prototype.touchMove = function (evt) {
            if (this.m2_isImgMoving) {
                if (evt.target == this.imgFromFile) {
                    var dx, dy, newX, newY;
                    dx = evt.stageX - this.m2_imgTchStartPoint.m_x;
                    dy = evt.stageY - this.m2_imgTchStartPoint.m_y;
                    newX = this.m2_imgStartPoint.m_x + dx;
                    newY = this.m2_imgStartPoint.m_y + dy;
                    var inpPos = new gdeint.CPoint();
                    inpPos.m_x = newX;
                    inpPos.m_y = newY;
                    this.m_imgCircler.setInpPos(inpPos);
                    var outPos;
                    outPos = this.m_imgCircler.getOutpPos(); // 若超出可拖动范围，则限制移动。
                    newX = outPos.m_x;
                    newY = outPos.m_y;
                    this.midContentGroup.x = newX;
                    this.midContentGroup.y = newY;
                    var pt;
                    pt = new gdeint.CPoint();
                    pt.m_x = -this.midContentGroup.x;
                    pt.m_y = -this.midContentGroup.y + this.m_visibleStartY;
                    this.m_UIPresenter.inpImgSelPt(pt);
                    this.dispatchEvent(this.m_evtImgDragEnd); // 通知PraScene进行有关处理。目前DragMove和DragEnd进行的处理相同。
                }
                else if (evt.target == this.m_randomGraphShape) {
                    var dx, dy, newX, newY;
                    dx = evt.stageX - this.m2_imgTchStartPoint.m_x;
                    dy = evt.stageY - this.m2_imgTchStartPoint.m_y;
                    newX = this.m2_imgStartPoint.m_x + dx;
                    newY = this.m2_imgStartPoint.m_y + dy;
                    var graphShowWidth = this.m_randomGraphShape.width;
                    if (newX > this.s_horSpace
                        && newX + graphShowWidth > this.getTrueWidth() + this.s_horSpace) {
                        var gap1 = 0, gap2 = 0;
                        gap1 = newX - this.s_horSpace;
                        gap2 = newX + graphShowWidth - (this.getTrueWidth() + this.s_horSpace);
                        if (gap1 > gap2) {
                            newX = -(graphShowWidth - (this.getTrueWidth() + this.s_horSpace));
                        }
                        else {
                            newX = this.s_horSpace;
                        }
                    }
                    if (newX < -(graphShowWidth + this.s_horSpace - this.getTrueWidth())
                        && newX < -this.s_horSpace) {
                        var gap1 = 0, gap2 = 0;
                        gap1 = newX + graphShowWidth + this.s_horSpace - this.getTrueWidth();
                        gap2 = newX + this.s_horSpace;
                        if (gap1 < gap2) {
                            newX = -this.s_horSpace;
                        }
                        else {
                            newX = -(graphShowWidth + this.s_horSpace - this.getTrueWidth());
                        }
                    }
                    if (newY > this.s_verSpace
                        && newY + 720 - this.getTrueHeight() > this.s_verSpace) {
                        var gap1 = 0, gap2 = 0;
                        gap1 = newY - this.s_verSpace;
                        gap2 = newY + 720 - this.getTrueHeight() - this.s_verSpace;
                        if (gap1 > gap2) {
                            newY = -(720 - this.getTrueHeight() - this.s_verSpace);
                        }
                        else {
                            newY = this.s_verSpace;
                        }
                    }
                    if (newY < -(720 + this.s_verSpace - this.getTrueHeight())
                        && newY < -this.s_verSpace) {
                        var gap1 = 0, gap2 = 0;
                        gap1 = newY + 720 + this.s_verSpace - this.getTrueHeight();
                        gap2 = this.s_verSpace;
                        if (gap1 < gap2) {
                            newY = -this.s_verSpace;
                        }
                        else {
                            newY = -(720 + this.s_verSpace - this.getTrueHeight());
                        }
                    }
                    this.midContentGroup.x = newX;
                    this.midContentGroup.y = newY;
                    var pt;
                    pt = new gdeint.CPoint();
                    pt.m_x = -this.midContentGroup.x;
                    pt.m_y = -this.midContentGroup.y + this.m_visibleStartY;
                    this.m_UIPresenter.inpImgSelPt(pt);
                    this.dispatchEvent(this.m_evtImgDragEnd); // No parmameter passed. Calculate inside this func!!
                }
            }
            else {
            }
        };
        CMidAreaDifficult.prototype.touchEnd = function (evt) {
            this.m2_isImgMoving = false;
            this.dispatchEvent(this.m_evtImgDragEnd);
        };
        CMidAreaDifficult.prototype.setVisibleStartY = function (vsy) {
            this.m_visibleStartY = vsy;
            this.m_UIPresenter.m_visibleStartY = vsy;
        };
        CMidAreaDifficult.prototype.setTrueWidth = function (tw) {
            this.m_trueWidth = tw;
            if (this.m2_cc) {
                if (this.width < this.m_trueWidth) {
                    this.width = this.m_trueWidth;
                }
                this.redrawBg();
            }
        };
        CMidAreaDifficult.prototype.getTrueWidth = function () {
            return this.m_trueWidth;
        };
        CMidAreaDifficult.prototype.setTrueHeight = function (th) {
            this.m_trueHeight = th;
            this.redrawBg();
        };
        CMidAreaDifficult.prototype.getTrueHeight = function () {
            return this.m_trueHeight;
        };
        return CMidAreaDifficult;
    }(eui.Component));
    eyelen4.CMidAreaDifficult = CMidAreaDifficult;
    __reflect(CMidAreaDifficult.prototype, "eyelen4.CMidAreaDifficult");
})(eyelen4 || (eyelen4 = {}));

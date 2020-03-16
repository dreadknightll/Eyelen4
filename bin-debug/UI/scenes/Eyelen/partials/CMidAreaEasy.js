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
 * 练习场景中部区域。
 *
 */
var eyelen4;
(function (eyelen4) {
    var CMidAreaEasy = (function (_super) {
        __extends(CMidAreaEasy, _super);
        function CMidAreaEasy() {
            var _this = _super.call(this) || this;
            _this.m_trueWidth = 0;
            _this.m_trueHeight = 0;
            _this.m_visibleStartY = 0;
            _this.m2_isImgMoving = false;
            _this.s_horSpace = 80;
            _this.s_verSpace = 80;
            _this.m2_cc = false;
            _this.m_imgCircler = new gdeint.CSquareCircler();
            _this.m_bg = new egret.Shape();
            _this.m2_imgTchStartPoint = new gdeint.CPoint();
            _this.m2_imgStartPoint = new gdeint.CPoint();
            _this.m_evtImgDragEnd = new CMidAreaEvent_Eyelen(CMidAreaEvent_Eyelen.EVT_IMG_DRAGEND);
            _this.m_randomGraphShape = new gdeint.CRandomGraph();
            _this.m_randomGraphShape.genGraph(1024, 720);
            return _this;
        }
        CMidAreaEasy.prototype.childrenCreated = function () {
            this.randomGraph.addChild(this.m_randomGraphShape);
            this.m_randomGraphShape.touchEnabled = true;
            this.m_randomGraphShape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
            this.m_randomGraphShape.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
            this.m_randomGraphShape.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
            /*            if(S_BUILD_FOR == S_WECHAT && S_NO_IMG_MODE) {
                            console.log("Children created:MidAreaEasy!");
                            this.imgFromFile.visible = false;
                            this.randomGraph.visible = true;
                            this.m_randomGraphShape = genRandomGraphic(1024,720);
                            this.m_randomGraphShape.visible = true;
                            this.randomGraph.addChild(this.m_randomGraphShape);
                        }*/
            //        this.maxWidth = 480; Not work.
            var rect = new egret.Rectangle();
            rect.x = 0;
            rect.y = 0;
            if (0 == this.m_trueWidth) {
                //                rect.width = 480;
                rect.width = 720;
            }
            else {
                rect.width = this.m_trueWidth;
            }
            //            rect.height = 2000;
            rect.height = 3000;
            this.mask = rect;
            this.midBgGrp.addChild(this.m_bg);
            //	    this.midCanvasGrp.addChild(this.m_midCanvas);
            //            if(!(S_BUILD_FOR == S_WECHAT && S_NO_IMG_MODE)) {
            if (!(S_NO_IMG_MODE)) {
                this.imgFromFile.touchEnabled = true;
                this.imgFromFile.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
                this.imgFromFile.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
                this.imgFromFile.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
            }
            this.m2_cc = true;
        };
        CMidAreaEasy.prototype.redrawBg = function () {
            this.m_bg.width = this.getTrueWidth();
            this.m_bg.height = this.m_trueHeight;
            this.m_bg.graphics.clear();
            this.m_bg.graphics.beginFill(0x999999);
            this.m_bg.graphics.drawRect(0, 0, this.m_bg.width, this.m_bg.height);
            this.m_bg.graphics.endFill();
        };
        CMidAreaEasy.prototype.readjustCircler = function () {
            //Use dispWidth.
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
            if (S_NO_IMG_MODE) {
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
        CMidAreaEasy.prototype.touchBegin = function (evt) {
            this.m2_imgTchStartPoint.m_x = evt.stageX;
            this.m2_imgTchStartPoint.m_y = evt.stageY;
            this.m2_imgStartPoint.m_x = this.midContentGroup.x;
            this.m2_imgStartPoint.m_y = this.midContentGroup.y;
            this.readjustCircler();
            this.m2_isImgMoving = true;
        };
        CMidAreaEasy.prototype.touchMove = function (evt) {
            if (this.m2_isImgMoving) {
                if (evt.target == this.imgFromFile) {
                    var dx, dy, newX, newY;
                    dx = evt.stageX - this.m2_imgTchStartPoint.m_x;
                    dy = evt.stageY - this.m2_imgTchStartPoint.m_y;
                    newX = this.m2_imgStartPoint.m_x + dx;
                    newY = this.m2_imgStartPoint.m_y + dy;
                    var newPt = new gdeint.CPoint();
                    newPt.m_x = newX;
                    newPt.m_y = newY;
                    this.m_imgCircler.setInpPos(newPt);
                    /*
                    if(newX > this.s_horSpace
                        && newX+this.imgFromFile.width > this.getTrueWidth()+this.s_horSpace)
                    {
                        var gap1:number=0,gap2:number=0;
                        gap1 = newX - this.s_horSpace;
                        gap2 = newX+this.imgFromFile.width - (this.getTrueWidth()+this.s_horSpace);
                        if(gap1 > gap2) {
                            newX = -(this.imgFromFile.width - (this.getTrueWidth()+this.s_horSpace));
                        }
                        else {
                            newX = this.s_horSpace;
                        }
                    }

                    if(newX < -(this.imgFromFile.width + this.s_horSpace - this.getTrueWidth())
                        && newX < -this.s_horSpace)
                    {
                        var gap1:number=0,gap2:number=0;
                        gap1 = newX + this.imgFromFile.width + this.s_horSpace - this.getTrueWidth();
                        gap2 = newX + this.s_horSpace;
                        if(gap1<gap2) {
                            newX = -this.s_horSpace;
                        }
                        else {
                            newX = -(this.imgFromFile.width + this.s_horSpace - this.getTrueWidth());
                        }
                    }

                    if(newY > this.s_verSpace
                        && newY+this.imgFromFile.height-this.getTrueHeight()>this.s_verSpace)
                    {
                        var gap1:number=0,gap2:number=0;
                        gap1 = newY - this.s_verSpace;
                        gap2 = newY+this.imgFromFile.height-this.getTrueHeight()-this.s_verSpace;
                        if(gap1>gap2) {
                            newY = -(this.imgFromFile.height-this.getTrueHeight()-this.s_verSpace);
                        }
                        else {
                            newY = this.s_verSpace;
                        }
                    }

                    if(newY < -(this.imgFromFile.height + this.s_verSpace - this.getTrueHeight())
                        && newY < -this.s_verSpace)
                    {
                        var gap1:number=0,gap2:number=0;
                        gap1 = newY+this.imgFromFile.height + this.s_verSpace - this.getTrueHeight();
                        gap2 = this.s_verSpace;
                        if(gap1<gap2) {
                            newY = -this.s_verSpace;
                        }
                        else {
                            newY = -(this.imgFromFile.height + this.s_verSpace - this.getTrueHeight());
                        }
                    }
                    */
                    var newPtFinal = new gdeint.CPoint();
                    newPtFinal = this.m_imgCircler.getOutpPos();
                    newX = newPtFinal.m_x;
                    newY = newPtFinal.m_y;
                    console.log("NewY:" + newY + ",BottomYImg:" + (newY + this.imgFromFile.height) + ",BottomYCircler:" + this.getTrueHeight()); //Correct!
                    this.midContentGroup.x = newX;
                    this.midContentGroup.y = newY;
                    var pt;
                    pt = new gdeint.CPoint();
                    pt.m_x = -this.midContentGroup.x;
                    pt.m_y = -this.midContentGroup.y + this.m_visibleStartY;
                    //pt:[-newX , -newY+this.visibleStartY]
                    this.m_UIPresenter.inpImgSelPt(pt);
                    this.dispatchEvent(this.m_evtImgDragEnd); // No parmameter passed. Calculate inside this func!!
                }
                else if (evt.target == this.m_randomGraphShape) {
                    console.log("Moving randomGraph!");
                    var dx, dy, newX, newY;
                    dx = evt.stageX - this.m2_imgTchStartPoint.m_x;
                    dy = evt.stageY - this.m2_imgTchStartPoint.m_y;
                    newX = this.m2_imgStartPoint.m_x + dx;
                    newY = this.m2_imgStartPoint.m_y + dy;
                    var graphShowWidth = this.m_randomGraphShape.width;
                    var newPt = new gdeint.CPoint();
                    newPt.m_x = newX;
                    newPt.m_y = newY;
                    this.m_imgCircler.setInpPos(newPt);
                    /*
                                        if(newX > this.s_horSpace
                                            && newX+graphShowWidth > this.getTrueWidth()+this.s_horSpace)
                                        {
                                            var gap1:number=0,gap2:number=0;
                                            gap1 = newX - this.s_horSpace;
                                            gap2 = newX+graphShowWidth - (this.getTrueWidth()+this.s_horSpace);
                                            if(gap1 > gap2) {
                                                newX = -(graphShowWidth - (this.getTrueWidth()+this.s_horSpace));
                                            }
                                            else {
                                                newX = this.s_horSpace;
                                            }
                                        }
                    
                                        if(newX < -(graphShowWidth + this.s_horSpace - this.getTrueWidth())
                                            && newX < -this.s_horSpace)
                                        {
                                            var gap1:number=0,gap2:number=0;
                                            gap1 = newX + graphShowWidth + this.s_horSpace - this.getTrueWidth();
                                            gap2 = newX + this.s_horSpace;
                                            if(gap1<gap2) {
                                                newX = -this.s_horSpace;
                                            }
                                            else {
                                                newX = -(graphShowWidth + this.s_horSpace - this.getTrueWidth());
                                            }
                                        }
                    
                                        if(newY > this.s_verSpace
                                            && newY+this.m_randomGraphShape.height-this.getTrueHeight()>this.s_verSpace)
                                        {
                                            var gap1:number=0,gap2:number=0;
                                            gap1 = newY - this.s_verSpace;
                                            gap2 = newY+this.m_randomGraphShape.height-this.getTrueHeight()-this.s_verSpace;
                                            if(gap1>gap2) {
                                                newY = -(this.m_randomGraphShape.height-this.getTrueHeight()-this.s_verSpace);
                                            }
                                            else {
                                                newY = this.s_verSpace;
                                            }
                                        }
                    
                                        if(newY < -(this.m_randomGraphShape.height + this.s_verSpace - this.getTrueHeight())
                                            && newY < -this.s_verSpace)
                                        {
                                            var gap1:number=0,gap2:number=0;
                                            gap1 = newY+this.m_randomGraphShape.height + this.s_verSpace - this.getTrueHeight();
                                            gap2 = this.s_verSpace;
                                            if(gap1<gap2) {
                                                newY = -this.s_verSpace;
                                            }
                                            else {
                                                newY = -(this.m_randomGraphShape.height + this.s_verSpace - this.getTrueHeight());
                                            }
                                        }
                    */
                    var newPtFinal = new gdeint.CPoint();
                    newPtFinal = this.m_imgCircler.getOutpPos();
                    newX = newPtFinal.m_x;
                    newY = newPtFinal.m_y;
                    this.midContentGroup.x = newX;
                    this.midContentGroup.y = newY;
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
        CMidAreaEasy.prototype.touchEnd = function (evt) {
            this.m2_isImgMoving = false;
            this.dispatchEvent(this.m_evtImgDragEnd);
        };
        CMidAreaEasy.prototype.setVisibleStartY = function (vsy) {
            this.m_visibleStartY = vsy;
            this.m_UIPresenter.m_visibleStartY = vsy;
        };
        CMidAreaEasy.prototype.setTrueWidth = function (tw) {
            this.m_trueWidth = tw;
            if (this.width < this.m_trueWidth) {
                this.width = this.m_trueWidth;
            }
            if (this.m2_cc) {
                var rect = new egret.Rectangle();
                rect.x = 0;
                rect.y = 0;
                if (0 == this.m_trueWidth) {
                    rect.width = 480;
                }
                else {
                    rect.width = this.m_trueWidth;
                }
                rect.height = 2000;
                this.mask = rect;
            }
            this.redrawBg();
        };
        CMidAreaEasy.prototype.getTrueWidth = function () {
            if (0 == this.m_trueWidth) {
                return 720;
            }
            else {
                return this.m_trueWidth;
            }
        };
        CMidAreaEasy.prototype.setTrueHeight = function (th) {
            this.m_trueHeight = th;
            this.redrawBg();
        };
        CMidAreaEasy.prototype.getTrueHeight = function () {
            return this.m_trueHeight;
        };
        return CMidAreaEasy;
    }(eui.Component));
    eyelen4.CMidAreaEasy = CMidAreaEasy;
    __reflect(CMidAreaEasy.prototype, "eyelen4.CMidAreaEasy");
})(eyelen4 || (eyelen4 = {}));
//# sourceMappingURL=CMidAreaEasy.js.map
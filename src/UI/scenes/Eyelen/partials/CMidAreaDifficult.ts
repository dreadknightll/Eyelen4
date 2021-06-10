/**
 * /src/UI/scenes/Eyelen/partials/CMidAreaDifficult.ts
 * 练习场景中部区域。
 *
 */
namespace eyelen4 {
    export class CMidAreaDifficult extends eui.Component {
        public constructor() {
            super();

            this.m_imgCircler = new gdeint.CSquareCircler();
            this.m_bg = new egret.Shape();

            this.m2_imgTchStartPoint = new gdeint.CPoint();
            this.m2_imgStartPoint = new gdeint.CPoint();

            this.m_evtImgDragEnd = new CMidAreaEvent_Eyelen(CMidAreaEvent_Eyelen.EVT_IMG_DRAGEND);

            this.m_randomGraphShape = new gdeint.CRandomGraph();
        }

        private midBgGrp:eui.Group;
        public midContentGroup:eui.Group;
        public imgGrp:eui.Group;
        public imgFromFile:eui.Image; // 有图模式使用 imgFromFile，无图模式使用 randomGraphShape。
        public randomGraph:eui.Group;
        public m_randomGraphShape:gdeint.CRandomGraph;
        public midCanvasGrp:eui.Group;

        public m_UIPresenter:CEyelen4PraDifficultPresenter;
        public m_imgCircler:gdeint.CSquareCircler; // 控制可拖动范围。

        private m_trueWidth: number = 0;
        private m_trueHeight:number = 0;
        public m_visibleStartY:number = 0;

        private m_bg: egret.Shape;
        private m_evtImgDragEnd: CMidAreaEvent_Eyelen;

        private m2_imgTchStartPoint:gdeint.CPoint;
        private m2_imgStartPoint:gdeint.CPoint;
        private m2_isImgMoving: boolean = false;

        private m2_cc:boolean = false;

        public s_horSpace: number = 80;
        public s_verSpace: number = 80;

        public childrenCreated():void {
            this.randomGraph.addChild(this.m_randomGraphShape);
            var rect:egret.Rectangle = new egret.Rectangle();
            rect.x = 0;
            rect.y = 0;
            if(0 == this.m_trueWidth) {
                rect.width = 720;
            }
            else {
                rect.width = this.m_trueWidth;
            }
            rect.height = 3000;

            this.mask = rect;

            this.midBgGrp.addChild(this.m_bg);

            if(CGlobals.S_NO_IMG_MODE) {
                this.m_randomGraphShape.touchEnabled = true;
                this.m_randomGraphShape.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this);
                this.m_randomGraphShape.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this);
                this.m_randomGraphShape.addEventListener(egret.TouchEvent.TOUCH_END,this.touchEnd,this);
            }
            else {
                this.imgFromFile.touchEnabled = true;
                this.imgFromFile.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this);
                this.imgFromFile.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this);
                this.imgFromFile.addEventListener(egret.TouchEvent.TOUCH_END,this.touchEnd,this);
            }

            this.m2_cc = true;
        }

        private redrawBg():void {
            this.m_bg.width = this.getTrueWidth();
            this.m_bg.height = this.m_trueHeight;
            this.m_bg.graphics.clear();
            this.m_bg.graphics.beginFill(0x999999);
            this.m_bg.graphics.drawRect(0,0,this.m_bg.width,this.m_bg.height);
            this.m_bg.graphics.endFill();

            var rect:egret.Rectangle = new egret.Rectangle();

            rect.x = 0;
            rect.y = 0;
            if(0 == this.m_trueWidth) {
                rect.width = 720;
            }
            else {
                rect.width = this.m_trueWidth;
            }
            rect.height = 3000;

            this.mask = rect; // 超出显示范围部分不显示。

        }


        public readjustCircler(): void
        {
            // 宽度使用校准后的。
            var circlerRect:gdeint.CRect = new gdeint.CRect();
            circlerRect.m_left = 0;
            circlerRect.m_top = this.m_visibleStartY;
            circlerRect.m_width = this.getTrueWidth();
            circlerRect.m_height = this.getTrueHeight() - this.m_visibleStartY;
            this.m_imgCircler.setCirclerRect(circlerRect);
            this.m_imgCircler.setPullGapHor(this.s_horSpace);
            this.m_imgCircler.setPullGapVer(this.s_verSpace);
            this.m_imgCircler.setPushGapHor(this.s_horSpace);
            this.m_imgCircler.setPushGapVer(this.s_verSpace);
            var imgRect:gdeint.CRect = new gdeint.CRect();
            if(CGlobals.S_NO_IMG_MODE) {
                imgRect.m_width = this.randomGraph.width;
                imgRect.m_height = this.randomGraph.height;
            }
            else {
                imgRect.m_width = this.imgFromFile.width;
                imgRect.m_height = this.imgFromFile.height;
            }
            this.m_imgCircler.setItemRect(imgRect);
            var inpPos:gdeint.CPoint = new gdeint.CPoint();
            inpPos.m_x = -this.midContentGroup.x;
            inpPos.m_y = -this.midContentGroup.y;

            this.m_imgCircler.setInpPos(inpPos);
        }

        private touchBegin(evt:egret.TouchEvent):void {
            this.readjustCircler();
            this.m2_imgTchStartPoint.m_x = evt.stageX;
            this.m2_imgTchStartPoint.m_y = evt.stageY;
            this.m2_imgStartPoint.m_x = this.midContentGroup.x;
            this.m2_imgStartPoint.m_y = this.midContentGroup.y;

            this.m2_isImgMoving = true;
        }

        private touchMove(evt:egret.TouchEvent):void {
            if(this.m2_isImgMoving) {
                if(evt.target == this.imgFromFile)
                {
                    var dx:number , dy:number , newX:number , newY:number;
                    dx = evt.stageX - this.m2_imgTchStartPoint.m_x;
                    dy = evt.stageY - this.m2_imgTchStartPoint.m_y;
                    newX = this.m2_imgStartPoint.m_x + dx;
                    newY = this.m2_imgStartPoint.m_y + dy;

                    var inpPos:gdeint.CPoint = new gdeint.CPoint();
                    inpPos.m_x = newX;
                    inpPos.m_y = newY;
                    this.m_imgCircler.setInpPos(inpPos);
                    var outPos:gdeint.CPoint;
                    outPos = this.m_imgCircler.getOutpPos(); // 若超出可拖动范围，则限制移动。

                    newX = outPos.m_x;
                    newY = outPos.m_y;

                    this.midContentGroup.x = newX;
                    this.midContentGroup.y = newY;

                    var pt:gdeint.CPoint;
                    pt = new gdeint.CPoint();
                    pt.m_x = -this.midContentGroup.x;
                    pt.m_y = -this.midContentGroup.y + this.m_visibleStartY;

                    this.m_UIPresenter.inpImgSelPt(pt);

                    this.dispatchEvent(this.m_evtImgDragEnd); // 通知PraScene进行有关处理。目前DragMove和DragEnd进行的处理相同。
                }
                else if(evt.target == this.m_randomGraphShape) {
                    var dx:number , dy:number , newX:number , newY:number;
                    dx = evt.stageX - this.m2_imgTchStartPoint.m_x;
                    dy = evt.stageY - this.m2_imgTchStartPoint.m_y;
                    newX = this.m2_imgStartPoint.m_x + dx;
                    newY = this.m2_imgStartPoint.m_y + dy;
                    var graphShowWidth = this.m_randomGraphShape.width;

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
                        && newY+720-this.getTrueHeight()>this.s_verSpace)
                    {
                        var gap1:number=0,gap2:number=0;
                        gap1 = newY - this.s_verSpace;
                        gap2 = newY+720-this.getTrueHeight()-this.s_verSpace;
                        if(gap1>gap2) {
                            newY = -(720-this.getTrueHeight()-this.s_verSpace);
                        }
                        else {
                            newY = this.s_verSpace;
                        }
                    }

                    if(newY < -(720 + this.s_verSpace - this.getTrueHeight())
                        && newY < -this.s_verSpace)
                    {
                        var gap1:number=0,gap2:number=0;
                        gap1 = newY+720 + this.s_verSpace - this.getTrueHeight();
                        gap2 = this.s_verSpace;
                        if(gap1<gap2) {
                            newY = -this.s_verSpace;
                        }
                        else {
                            newY = -(720 + this.s_verSpace - this.getTrueHeight());
                        }
                    }

                    this.midContentGroup.x = newX;
                    this.midContentGroup.y = newY;

                    var pt:gdeint.CPoint;
                    pt = new gdeint.CPoint();
                    pt.m_x = -this.midContentGroup.x;
                    pt.m_y = -this.midContentGroup.y + this.m_visibleStartY;

                    this.m_UIPresenter.inpImgSelPt(pt);

                    this.dispatchEvent(this.m_evtImgDragEnd); // No parmameter passed. Calculate inside this func!!

                }
            }
            else {
            }
        }

        private touchEnd(evt:egret.TouchEvent):void {
            this.m2_isImgMoving = false;

            this.dispatchEvent(this.m_evtImgDragEnd);
        }

        public setVisibleStartY(vsy:number) {
            this.m_visibleStartY = vsy;
            this.m_UIPresenter.m_visibleStartY = vsy;
        }

        public setTrueWidth(tw: number): void {
            this.m_trueWidth = tw;
            if(this.m2_cc) {
                if(this.width < this.m_trueWidth) {
                    this.width = this.m_trueWidth;
                }
                this.redrawBg();
            }
        }

        public getTrueWidth():number {
            return this.m_trueWidth;
        }

        public setTrueHeight(th:number) :void {
            this.m_trueHeight = th;
            this.redrawBg();
        }
        
        public getTrueHeight():number {
            return this.m_trueHeight;
        }
    }
}

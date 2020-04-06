/**
 * /src/UI/scenes/Eyelen/partials/CMidAreaEasy.ts
 * 
 * 练习场景中部区域。
 *
 */
namespace eyelen4 {

    export class CMidAreaEasy extends eui.Component {
        public constructor() {
            super();

            this.m_imgCircler = new gdeint.CSquareCircler(); // 控制练习图片可拖动范围的模型。
            this.m_bg = new egret.Shape();
            
            this.m2_imgTchStartPoint = new gdeint.CPoint();
            this.m2_imgStartPoint = new gdeint.CPoint();

            this.m_evtImgDragEnd = new CMidAreaEvent_Eyelen(CMidAreaEvent_Eyelen.EVT_IMG_DRAGEND);
            this.m_randomGraphShape = new gdeint.CRandomGraph();
            this.m_randomGraphShape.genGraph(1024,720);
        }

        private midBgGrp:eui.Group;
        public midContentGroup:eui.Group;
        public imgGrp:eui.Group;
        public imgFromFile:eui.Image; // 图片模式使用imgFromFile，无图模式使用randomGraphShape。
        public randomGraph:eui.Group;
        public m_randomGraphShape:gdeint.CRandomGraph;
        public midCanvasGrp:eui.Group;

        public m_UIPresenter:CEyelen4PraEasyPresenter; //跟PraScene的UIPresenter互通。
        public m_imgCircler:gdeint.CSquareCircler;

        private m_trueWidth: number = 0;
        private m_trueHeight:number = 0;
        public m_visibleStartY:number = 0;

        private m_bg: egret.Shape;
        private m_evtImgDragEnd: CMidAreaEvent_Eyelen;

        private m2_imgTchStartPoint:gdeint.CPoint;
        private m2_imgStartPoint:gdeint.CPoint;
        private m2_isImgMoving: boolean = false;

        public s_horSpace: number = 80;
        public s_verSpace: number = 80;

        private m2_cc:boolean = false;

        public childrenCreated():void {

            this.randomGraph.addChild(this.m_randomGraphShape);
            this.m_randomGraphShape.touchEnabled = true;
            this.m_randomGraphShape.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this);
            this.m_randomGraphShape.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this);
            this.m_randomGraphShape.addEventListener(egret.TouchEvent.TOUCH_END,this.touchEnd,this);

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
            this.mask = rect;//超出范围的内容不显示。

            this.midBgGrp.addChild(this.m_bg);

            if(!(S_NO_IMG_MODE)) {
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
        }

        //根据场景设置调整可拖动范围。
        public readjustCircler(): void
        {
            //Use dispWidth.
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
            if(S_NO_IMG_MODE) {
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

        // 练习图片开始拖动时触发。
        private touchBegin(evt:egret.TouchEvent):void {
            this.m2_imgTchStartPoint.m_x = evt.stageX;
            this.m2_imgTchStartPoint.m_y = evt.stageY;
            this.m2_imgStartPoint.m_x = this.midContentGroup.x;
            this.m2_imgStartPoint.m_y = this.midContentGroup.y;

            this.readjustCircler();
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

                    var newPt:gdeint.CPoint = new gdeint.CPoint();
                    newPt.m_x = newX;
                    newPt.m_y = newY;
                    this.m_imgCircler.setInpPos(newPt);
                    var newPtFinal:gdeint.CPoint = new gdeint.CPoint();
                    newPtFinal = this.m_imgCircler.getOutpPos(); // InpPos未超出范围，则OutpPos==InpPos；若超出范围，则OutpPos把练习图片控制在范围内。
                    newX = newPtFinal.m_x;
                    newY = newPtFinal.m_y;

                    this.midContentGroup.x = newX;
                    this.midContentGroup.y = newY;

                    var pt:gdeint.CPoint;
                    pt = new gdeint.CPoint();
                    pt.m_x = -this.midContentGroup.x;
                    pt.m_y = -this.midContentGroup.y + this.m_visibleStartY;

                    this.m_UIPresenter.inpImgSelPt(pt);

                    this.dispatchEvent(this.m_evtImgDragEnd); // 把事件通知PraScene进行相关处理。目前DragMove和DragEnd处理内容相同。
                }
                else if(evt.target == this.m_randomGraphShape) {
                    console.log("Moving randomGraph!");
                    var dx:number , dy:number , newX:number , newY:number;
                    dx = evt.stageX - this.m2_imgTchStartPoint.m_x;
                    dy = evt.stageY - this.m2_imgTchStartPoint.m_y;
                    newX = this.m2_imgStartPoint.m_x + dx;
                    newY = this.m2_imgStartPoint.m_y + dy;

                    var graphShowWidth:number = this.m_randomGraphShape.width;

                    var newPt:gdeint.CPoint = new gdeint.CPoint();
                    newPt.m_x = newX;
                    newPt.m_y = newY;
                    this.m_imgCircler.setInpPos(newPt);

                    var newPtFinal:gdeint.CPoint = new gdeint.CPoint();
                    newPtFinal = this.m_imgCircler.getOutpPos();
                    newX = newPtFinal.m_x;
                    newY = newPtFinal.m_y;

                    this.midContentGroup.x = newX;
                    this.midContentGroup.y = newY;

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
            if(this.width < this.m_trueWidth) {
                this.width = this.m_trueWidth;
            }
            if(this.m2_cc) {
                var rect:egret.Rectangle = new egret.Rectangle();
                rect.x = 0;
                rect.y = 0;
                if(0 == this.m_trueWidth) {
                    rect.width = 480;
                }
                else {
                    rect.width = this.m_trueWidth;
                }
                rect.height = 2000;

                this.mask = rect;
            }
        
            this.redrawBg();
        }

        public getTrueWidth():number {
            if(0==this.m_trueWidth) {
                return 720;
            }
            else {
                return this.m_trueWidth;
            }
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
// /src/UI/scenes/Eyelen/CPraDifficultScene.ts
/**
 *
 * 困难难度练习画面场景。
 * 分为顶部、中部、底部三大区域。
 *  顶部区域可收缩和展开，显示缩略图，得分和进度。
 *  中部区域显示背景图片和待测角度。
 *  底部区域显示用户长度输入控件和菜单。
 *
 * 拖动中部区域的图片或点击顶部区域的缩略图均可变换屏幕选择区域。
 *
 */
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
var MSG_PICS_PRELOAD_FINISHED = 1; // 事件ID。练习图片json加载完成。
var MSG_IMGS_PRELOAD_FINISHED = 2; // 事件ID。练习图片加载完成。
var s_topRightWidth = 250;
var s_topRightHeight1 = 70;
var s_cellWidth = 20;
/*
 * 画面初始化方法：
 *  1、创建对象。
 *  2、setWinWidth/setWinHeight。
 *  3、startNewPra。
 */
var eyelen4;
(function (eyelen4) {
    var CPraDiffProScene = (function (_super) {
        __extends(CPraDiffProScene, _super);
        /////////////////////////////////////////////////////////////////////////////
        function CPraDiffProScene() {
            var _this = _super.call(this) || this;
            _this.m2_cc = false;
            _this.x = 0;
            _this.y = 0;
            _this.m_topOpen = true;
            _this.m_wm = new CEyelen4WinModel(); // 此模型用于计算画面各区域的位置大小等数据。
            _this.m_wm.setTopSpaceHeight(s_topSpaceHeight);
            _this.m_wm.setTopHeight1(30);
            _this.m_wm.setTopHeight2(190);
            _this.m_wm.showTop();
            _this.m_wm.setBottomHeight(300);
            _this.m_pm = new CEyelen3EPraMachineDifficult(); //部件没改动，继续使用上一代的。
            _this.m_UIPresenter = new CEyelen4PraDifficultPresenter(); // 很多元素的位置大小不在Scene里计算，而在此presenter里。
            _this.m_UIPresenter.bindPM(_this.m_pm);
            _this.m_tipBalloon1 = new eyelen4.CBalloonTip();
            _this.m_tipBalloon1.visible = false;
            _this.m_tipBalloon2 = new eyelen4.CBalloonTip();
            _this.m_tipBalloon2.visible = false;
            _this.m_imgOriWidth = 0;
            _this.m_imgHorSpace = 100;
            _this.m_imgVerSpace = 80;
            _this.m2_imgTchStartPoint = new gdeint.CPoint();
            _this.m2_isImgMoving = false;
            _this.m_topSpace = new CTopSpace_Eyelen();
            _this.m_curPicTag = -1; //Refresh when showImg.
            _this.m_curRoundTag = -1;
            _this.m2_isFirstPra = true;
            return _this;
        }
        CPraDiffProScene.prototype.childrenCreated = function () {
            this.shutdownClock.setFontSize(24);
            this.m_bgUnderTop = new egret.Shape();
            this.bgUnderTopGrp.addChild(this.m_bgUnderTop);
            this.midArea.m_UIPresenter = this.m_UIPresenter;
            this.midArea.setVisibleStartY(this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1());
            //            this.bottomArea.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.backBtnTap , this);
            this.bottomArea.caliBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCaliBtn, this);
            this.bottomArea.menuBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMenuBtn, this);
            this.bottomArea.lenInputer.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOKButtonTap, this);
            this.m2_cc = true;
            this.shutdownClock.setTimer(g_shutdownTimer);
            this.shutdownClock.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClockTap, this);
        };
        CPraDiffProScene.prototype._setParentContainer = function (c) {
            _super.prototype._setParentContainer.call(this, c);
            this.m_UIPresenter.setRenderFilter(this.getParentContainer()._getRenderFilter());
        };
        CPraDiffProScene.prototype.getPM = function () {
            return this.m_pm;
        };
        CPraDiffProScene.prototype.setLenArr = function (la) {
            this.m_pm.setLenArr(la);
        };
        CPraDiffProScene.prototype.recMis = function (len) {
            egret.ExternalInterface.call("recMis", JSON.stringify(len));
        };
        CPraDiffProScene.prototype.decMisDeviation = function (len) {
            egret.ExternalInterface.call("decMisDeviation", JSON.stringify(len));
        };
        CPraDiffProScene.prototype.getCurPicTag = function () {
            return this.m_curPicTag;
        };
        /*
        * 初始化长度比较对话框。
        */
        CPraDiffProScene.prototype.initCmpLenDlg = function () {
            this.m_cmpLenDlg = new eyelen4.CCmpLenDlg();
            this.m_cmpLenDlg.x = (this.m_winWidth - 400) / 2; //40.0 / 480 * this.m_winWidth;
            this.m_cmpLenDlg.y = 200;
            this.m_cmpLenDlg.visible = false;
            this.m_cmpLenDlg.onNextBtnEvent(egret.TouchEvent.TOUCH_TAP, this.onNextButtonTap, this);
            this.addChild(this.m_cmpLenDlg);
        };
        CPraDiffProScene.prototype.savScore = function () {
            egret.ExternalInterface.call("savScore", this.m_pm.getCurScore().toString());
        };
        /*
        * 触摸“下一长度”按钮后触发。
        */
        CPraDiffProScene.prototype.onNextButtonTap = function (evt) {
            if (g_isSndOn) {
                playBtnSnd();
            }
            this.hideCmpLenDlg();
            var p;
            p = this.m_pm.getCmplProgress();
            if (p >= 10) {
                this.bottomArea.lenInputer.lock();
                var score = this.m_pm.getCurScore();
                this.finalScoreDlg.setScore(score);
                this.finalScoreDlg.visible = true;
                if (score >= 270) {
                    this.finalScoreDlg.setStars(3);
                }
                else if (score >= 240) {
                    this.finalScoreDlg.setStars(2);
                }
                else if (score >= 180) {
                    this.finalScoreDlg.setStars(1);
                }
                else {
                    this.finalScoreDlg.setStars(0);
                    this._getParentContainer().showAlert("成绩很差哟！\n别灰心，继续努力！！", this.onFailurePanelClose);
                }
                this.savScore();
            }
            else {
                this.m_UIPresenter.nextLen();
                this.m_UIPresenter.setUserLen(0);
                this.bottomArea.lenInputer.clearLen();
                this.bottomArea.lenInputer.unlock();
                this.showLen(this.m_pm.getCurLen());
            }
        };
        CPraDiffProScene.prototype.onFailurePanelClose = function (evt) {
            //Nothing to do here.
        };
        /*
        * 显示长度比较对话框。
        */
        CPraDiffProScene.prototype.showCmpLenDlg = function () {
            var r = this.m_UIPresenter.m_curRank;
            this.m_cmpLenDlg.setScore(10 * r);
            var correOriLen = this.m_pm.getCurLen();
            this.m_cmpLenDlg.setCorreLen(this.m_pm.getCurLen().m_length * this.m_UIPresenter.getRenderFilter()._getCaRat());
            this.m_cmpLenDlg.setUserLen(this.m_UIPresenter.m_userLen);
            this.m_cmpLenDlg.visible = true;
            //            var curLen = this.m_pm.getCurLen();
        };
        CPraDiffProScene.prototype.hideCmpLenDlg = function () {
            this.m_cmpLenDlg.visible = false;
        };
        /*
        * “确定”按钮点击后触发。提交用户输入的长度。
        */
        CPraDiffProScene.prototype.onOKButtonTap = function (evt) {
            if (g_isSndOn) {
                playBtnSnd();
            }
            this.m_UIPresenter.setUserLen(this.bottomArea.lenInputer.getLen());
            this.m_UIPresenter.submitLen();
            if (this.m_UIPresenter.m_curRank <= 1) {
                this.recMis(this.m_pm.getCurLen());
            }
            else {
                this.decMisDeviation(this.m_pm.getCurLen());
            }
            this.showCmpLenDlg();
            this.bottomArea.lenInputer.lock();
            var r = this.m_pm.getLastLenRank();
            var curScore = this.m_pm.getCurScore();
            var curPro = this.m_pm.getCmplProgress();
            this.topArea.scoreView.setScoreWithPro(curScore, curPro);
            this.topArea.progressView.setProgress(curPro);
        };
        //重新开始练习。
        CPraDiffProScene.prototype.replayBtnTouched = function () {
            this.finalScoreDlg.visible = false;
            this.bottomArea.lenInputer.unlock();
            this.bottomArea.lenInputer.clearLen();
            this.getParentContainer().startNewPra();
        };
        CPraDiffProScene.prototype.onClockTap = function () {
            g_praDifficultContainer.showAlert("为了您的健康，每次使用20分钟后自动停止。", null);
        };
        // 开始新一轮练习。
        CPraDiffProScene.prototype.startNewPra = function () {
            console.log("Starting diffPro!");
            this.m_pm.startPra();
            if (this.m2_isFirstPra) {
                this.m2_isFirstPra = false;
                console.log("OK2");
                this.createScene();
            }
            else {
                this.refreshScene();
            }
        };
        /*
        * 重新调整缩略图。
        * 修改 m_itm 后应运行本函数。
        */
        CPraDiffProScene.prototype.readjustThumb = function () {
            //Affect:thumb
            //Do not affect:thumbSel,thumbQuestioner
            var thRect = this.m_UIPresenter.getThumbRect();
            if (this.m_NoImgMode) {
                this.topArea.thumbUI.setShape(this.midArea.m_randomGraphShape);
            }
            else {
                this.topArea.thumbUI.setImgSrc(this.m_curImgResName);
            }
            this.topArea.thumbUI.x = thRect.m_left / 480 * this.m_winWidth;
            this.topArea.thumbUI.y = thRect.m_top;
            this.topArea.thumbUI.setThumbWidth(thRect.m_width);
            this.topArea.thumbUI.setThumbHeight(thRect.m_height);
        };
        /*
        * 重新调整缩略图选框。
        * 修改 m_itm 或图片选区变化后应调用本函数。
        */
        CPraDiffProScene.prototype.readjustThumbSel = function () {
            var tsr = this.m_UIPresenter.getThumbSelRect();
            this.topArea.thumbUI.setSelRect(tsr);
        };
        /*
        * 根据某一长度对象在缩略图显示问号。
        * 修改 m_itm 或进入新的长度时应调用本函数。此时参数应传入当前长度。
        */
        CPraDiffProScene.prototype.showThumbQuestioner = function (len) {
            var tmpLen = this.m_pm.getCurLen();
            var tmpPoint = new gdeint.CPoint();
            var tmpPoint2 = new gdeint.CPoint();
            tmpPoint.m_x = tmpLen.m_x + tmpLen.m_length / 2;
            tmpPoint.m_y = tmpLen.m_y;
            var qdp = this.m_UIPresenter.getThumbQuestionerDispCenterPt();
            this.topArea.thumbUI.thumbQuestioner.x = qdp.m_x - 8;
            this.topArea.thumbUI.thumbQuestioner.y = qdp.m_y - 11;
        };
        /*
        * 在屏幕显示图片。
        */
        CPraDiffProScene.prototype.showImg = function (imgResName) {
            if (this.m_NoImgMode) {
                console.log("Warning! showImg not supported in no img mode!");
                return;
            }
            var oldImgResName;
            oldImgResName = this.m_curImgResName; // getCurImgResName();
            var tmpImg = new egret.Bitmap(); //既用作计算大图，也用作缩略图。
            tmpImg.texture = this.m_parentContainer._getResLoader().getRes(imgResName);
            this.m_imgOriWidth = tmpImg.width;
            //            this.midArea.imgFromFile.width = this.m_UIPresenter.getImgRect().m_width; 后面有相关计算，此处不设置。
            this.midArea.imgFromFile.height = tmpImg.height;
            this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
            this.m_UIPresenter.setImgHeight(this.midArea.imgFromFile.height);
            this.midArea.imgFromFile.width = this.m_imgOriWidth * this.m_UIPresenter.getRenderFilter()._getCaRat();
            this.midArea.imgFromFile.texture = this.m_parentContainer._getResLoader().getRes(imgResName);
            this.m_curImgResName = imgResName;
            this.topArea.thumbUI.setImgSrc(imgResName);
            /*
                换了图片：框移到右上角；
                没换图片：框回到原来的位置：
            */
            if (oldImgResName == this.m_curImgResName) {
            }
            else {
                var selPt = new gdeint.CPoint();
                selPt.m_x = 0;
                selPt.m_y = 0;
                this.m_UIPresenter.inpImgSelPt(selPt);
                this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
                this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
                var imgRect;
                imgRect = this.m_UIPresenter.getImgRect();
                this.midArea.midContentGroup.x = imgRect.m_left;
                this.midArea.midContentGroup.y = imgRect.m_top;
            }
            this.readjustThumb();
            this.readjustThumbSel();
        };
        CPraDiffProScene.prototype.showRandomGraph = function () {
            //每次均重新产生随机图。
            this.midArea.randomGraph.visible = true;
            this.midArea.imgFromFile.visible = false;
            this.midArea.m_randomGraphShape.genGraph(1024, 720);
            this.m_imgOriWidth = 1024;
            this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
            this.m_UIPresenter.setImgHeight(720);
            this.midArea.m_randomGraphShape.resize(this.m_imgOriWidth * this.m_UIPresenter.getRenderFilter()._getCaRat(), 720);
            var selPt = new gdeint.CPoint();
            selPt.m_x = 0;
            selPt.m_y = 0;
            this.m_UIPresenter.inpImgSelPt(selPt);
            this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            var imgRect;
            imgRect = this.m_UIPresenter.getImgRect();
            this.midArea.midContentGroup.x = imgRect.m_left;
            this.midArea.midContentGroup.y = imgRect.m_top;
            this.readjustThumb();
            this.readjustThumbSel();
        };
        /*
        * 在屏幕显示一个长度。不显示图片，不更新presenter。
        */
        CPraDiffProScene.prototype._showLen = function (len) {
            this.m_lenEdgeCanvas.graphics.clear();
            if (len.m_isHor) {
                //Draw questioner:
                this.m_lenQuestioner.x = len.m_x * this.m_UIPresenter.getRenderFilter()._getCaRat() + len.m_length * this.m_UIPresenter.getRenderFilter()._getCaRat() / 2 - 10;
                this.m_lenQuestioner.y = len.m_y - 20;
                //Draw two edges:
                this.m_lenEdgeCanvas.x = len.m_x * this.m_UIPresenter.getRenderFilter()._getCaRat() - 5;
                this.m_lenEdgeCanvas.y = len.m_y - 30;
                this.m_lenEdgeCanvas.graphics.beginFill(0x00FFFF);
                this.m_lenEdgeCanvas.graphics.drawRect(0, 0, 5, 60); //Edge1
                var edge2X, edge2Y;
                edge2X = len.m_length * this.m_UIPresenter.getRenderFilter()._getCaRat() + 5;
                edge2Y = 0;
                this.m_lenEdgeCanvas.graphics.drawRect(edge2X, edge2Y, 5, 60); //Edge2
                this.m_lenEdgeCanvas.graphics.endFill();
            }
            else {
                var lenDispPtsRect;
                lenDispPtsRect = this.m_UIPresenter.calcuLenPtsRects(len);
                //Draw questioner:
                var tmpFontSize = this.m_UIPresenter.getLenQuestionerFontSize();
                this.m_lenQuestioner.x = lenDispPtsRect.m_lenQuestionerDispPt.m_x;
                this.m_lenQuestioner.y = lenDispPtsRect.m_lenQuestionerDispPt.m_y;
                this.m_lenQuestioner.size = tmpFontSize;
                //Draw two edges:
                this.m_lenEdgeCanvas.x = lenDispPtsRect.m_lenEdge1DispRect.m_left;
                this.m_lenEdgeCanvas.y = lenDispPtsRect.m_lenEdge1DispRect.m_top;
                this.m_lenEdgeCanvas.graphics.beginFill(0x00FFFF);
                this.m_lenEdgeCanvas.graphics.drawRect(0, 0, lenDispPtsRect.m_lenEdge1DispRect.m_width, lenDispPtsRect.m_lenEdge1DispRect.m_height);
                var edge2X, edge2Y;
                edge2X = lenDispPtsRect.m_lenEdge2DispRect.m_left - lenDispPtsRect.m_lenEdge1DispRect.m_left;
                edge2Y = lenDispPtsRect.m_lenEdge2DispRect.m_top - lenDispPtsRect.m_lenEdge1DispRect.m_top;
                this.m_lenEdgeCanvas.graphics.drawRect(edge2X, edge2Y, lenDispPtsRect.m_lenEdge1DispRect.m_width, lenDispPtsRect.m_lenEdge1DispRect.m_height);
                this.m_lenEdgeCanvas.graphics.endFill();
            }
        };
        /*
        * 在屏幕显示一个长度。图片也会一起显示。
        */
        CPraDiffProScene.prototype.showLen = function (len) {
            this.m_UIPresenter.showLen(len);
            if (this.m_NoImgMode) {
                this.showRandomGraph();
            }
            else {
                //Change img if needed:
                this.showImg(len.m2_imgResName);
            }
            this._showLen(len);
            this.showThumbQuestioner(len);
        };
        /*
        * 缩略图点击时触发。
        */
        CPraDiffProScene.prototype.onThumbTap = function (evt) {
            var tmpSelTp = new gdeint.CPoint();
            tmpSelTp.m_x = evt.m_tchX - this.m_UIPresenter.getThumbSelRect().m_width / 2;
            tmpSelTp.m_y = evt.m_tchY - this.m_UIPresenter.getThumbSelRect().m_height / 2;
            this.m_UIPresenter.inpThSelPt(tmpSelTp);
            this.syncWithUIPresenter();
        };
        /*
        * 创建顶部区域。
        */
        CPraDiffProScene.prototype.createTop = function () {
            this.topAreaGroup.y = this.m_wm.getTopY();
            this.m_bgUnderTop.x = 0;
            this.m_bgUnderTop.y = 0;
            this.m_bgUnderTop.width = this.m_wm.getWinWidth();
            this.m_bgUnderTop.height = this.m_wm.getTopHeight();
            this.m_bgUnderTop.graphics.beginFill(0x00FF00);
            this.m_bgUnderTop.graphics.drawRect(0, 0, this.m_bgUnderTop.width, this.m_bgUnderTop.height);
            this.m_bgUnderTop.graphics.endFill();
            this.topArea.scoreView.x = this.m_bgUnderTop.x + this.m_bgUnderTop.width - s_topRightWidth + 5;
            this.topArea.scoreView.y = this.m_bgUnderTop.y + s_topRightHeight1 + 3;
            this.topArea.progressView.x = this.m_bgUnderTop.x + this.m_bgUnderTop.width - s_topRightWidth + 5;
            this.topArea.progressView.y = s_topRightHeight1 / 2 - 35;
            this.topArea.setTrueWidth(this.m_winWidth);
            this.topArea.setTrueHeight(this.m_wm.getTopHeight2());
            this.m_UIPresenter.setImgWidth(160);
            this.m_UIPresenter.setImgHeight(160);
            this.m_imgOriWidth = 160;
            this.m_lenView = new egret.DisplayObjectContainer();
            this.m_lenEdgeCanvas = new egret.Shape();
            this.m_lenQuestioner = new egret.TextField();
            this.m_lenQuestioner.textColor = 0xFF0000;
            this.m_lenQuestioner.size = 36;
            this.m_lenQuestioner.text = "?";
            this.midArea.midCanvasGrp.addChild(this.m_lenEdgeCanvas);
            this.midArea.midCanvasGrp.addChild(this.m_lenQuestioner);
            //Add thumb and thumbSel:
            var selPt = new gdeint.CPoint();
            selPt.m_x = 0;
            selPt.m_y = 0;
            this.m_UIPresenter.inpImgSelPt(selPt);
            this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            //Add components to scene:
            this.topArea.thumbUI.addEventListener(CThumbUIEvent.EVT_THUMB_TAP, this.onThumbTap, this);
            this.topArea.visible = true;
            this.topArea.addEventListener(CTopAreaEvent_Eyelen.EVT_SWITCHBTN_TAP, this.onTopBtnTab, this);
            this.topAreaGroup.y = this.m_wm.getTopY();
        };
        /*
        * 创建中间区域。
        */
        CPraDiffProScene.prototype.createMid = function () {
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.midArea.setTrueWidth(this.m_winWidth);
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
            console.log("midTrueWidth:" + this.m_winWidth + ",midTrueHeight:" + this.m_wm.getMidHeight());
        };
        /*
        * 创建底部区域。
        */
        CPraDiffProScene.prototype.createBottom = function () {
            var bottomY, bottomHeight;
            bottomY = this.m_wm.getBottomY();
            this.bottomAreaGroup.y = bottomY;
            bottomHeight = this.m_wm.getBottomHeight();
            this.bottomArea.setTrueWidth(this.m_winWidth);
            this.bottomArea.setTrueHeight(bottomHeight);
            //Draw bottom
        };
        /*
        * 资源加载完成后，运行此函数创建场景。
        */
        CPraDiffProScene.prototype.createScene = function () {
            _super.prototype.createScene.call(this);
            this.m_wm.setWinWidth(this.m_winWidth);
            this.m_wm.setWinHeight(this.m_winHeight);
            this.m_topSpace.setColor(0xFFFFFF);
            this.m_topSpace.x = 0;
            this.m_topSpace.y = 0;
            this.m_topSpace.width = this.m_wm.getWinWidth();
            this.m_topSpace.height = this.m_wm.getTopSpaceHeight();
            this.m_topSpace.draw();
            this.midArea.imgFromFile.fillMode = egret.BitmapFillMode.SCALE;
            this.midArea.imgGrp.x = 0;
            this.createTop();
            this.createMid();
            this.createBottom();
            console.log("OK3");
            this.midArea.addEventListener(CMidAreaEvent_Eyelen.EVT_IMG_DRAGMOVE, this.onImgDragMove, this);
            this.midArea.addEventListener(CMidAreaEvent_Eyelen.EVT_IMG_DRAGEND, this.onImgDragEnd, this);
            this.addChild(this.m_topSpace);
            this.finalScoreDlg.left = (this.m_winWidth - this.finalScoreDlg.width) / 2;
            this.finalScoreDlg.visible = false;
            this.finalScoreDlg.addEventListener(CFinalScoreDlgEvent.EVT_REPLAY_BTN_TAP, this.replayBtnTouched, this);
            //Add touch events:
            this.initCmpLenDlg();
            //OK to start and show first len.
            var firstLen = this.m_pm.getCurLen();
            this.showLen(firstLen);
            this.readjustThumb();
            this.readjustThumbSel();
            this.showInitInstrus();
        };
        /*
        * 显示开始练习时的提示说明。
        */
        CPraDiffProScene.prototype.showInitInstrus = function () {
            this.prepareTipBalloons();
            var balloonX = g_scenePos.m_x + 65 * g_scale;
            var balloonY = g_scenePos.m_y + 230 * g_scale;
            this.m_tipBalloon1.x = balloonX * 0.9;
            this.m_tipBalloon1.y = balloonY;
            this.m_tipBalloon1.scaleX = g_scale;
            this.m_tipBalloon1.scaleY = g_scale;
            this.m_tipBalloon1.title = "提示";
            this.m_tipBalloon1.setContent("请目测图上“？”处显示的长度，并拖动拉尺输入您目测的结果。");
            this.m_tipBalloon1.visible = true;
            this.disableScene();
            this.m_tipBalloon2.x = balloonX * 1.1;
            this.m_tipBalloon2.y = balloonY;
            this.m_tipBalloon2.scaleX = g_scale;
            this.m_tipBalloon2.scaleY = g_scale;
            this.m_tipBalloon2.title = "提示";
            this.m_tipBalloon2.setContent("请目测图上“？”处显示的\n长度并拖动拉尺输入您目测的结果。");
            this.m_tipBalloon2.visible = false; //隐藏2以防两个重叠显示。
            this.m_tipBalloon1.addEventListener(CBalloonTipEvent.EVT_CLOSE, this.onTipBalloon1Close, this);
            //        make rulerUser bright
            var r = new gdeint.CRect();
            r.m_left = 5;
            r.m_top = this.m_wm.getBottomY() + 25;
            r.m_width = 440.0 / 480 * this.m_winWidth;
            r.m_height = 140;
            this.brightenNotiLayerBgRect(r);
        };
        CPraDiffProScene.prototype.prepareTipBalloons = function () {
            this.m_notiLayer.addChild(this.m_tipBalloon1);
            this.m_notiLayer.addChild(this.m_tipBalloon2);
        };
        /*
        * 关闭操作提示后触发。
        */
        CPraDiffProScene.prototype.onTipBalloon1Close = function (evt) {
            this.m_tipBalloon2.visible = true;
            this.m_tipBalloon2.addEventListener(CBalloonTipEvent.EVT_CLOSE, this.onTipBalloon2Close, this);
        };
        /*
        * 关闭操作提示后触发。
        */
        CPraDiffProScene.prototype.onTipBalloon2Close = function (evt) {
            this.enabled = true;
            this.recoverNotiLayerBg();
            this.m_notiLayer.visible = false;
        };
        /*
        * 顶部按钮触摸后触发。
        */
        CPraDiffProScene.prototype.onTopBtnTab = function (evt) {
            if (g_isSndOn) {
                playBtnSnd();
            }
            if (this.m_topOpen) {
                this.m_topOpen = false;
                this.m_wm.hideTop();
                this.midArea.setTrueHeight(this.m_wm.getMidHeight());
                var tw = egret.Tween.get(this.topArea);
                var tw_bgUnderTop = egret.Tween.get(this.bgUnderTopGrp);
                var targetTopY = -(this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1());
                tw.to({ y: targetTopY }, 300);
                tw_bgUnderTop.to({ y: targetTopY }, 300);
                var tw2 = egret.Tween.get(this.midAreaGroup);
                tw2.to({ y: this.m_wm.getMidY() }, 300);
                tw2.to({ height: this.m_wm.getMidHeight() }, 300);
                var timer = new egret.Timer(305, 1);
                timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerTSClosed, this);
                timer.start();
            }
            else {
                this.m_topOpen = true;
                this.m_wm.showTop();
                var tw = egret.Tween.get(this.topArea);
                var tw_bgUnderTop = egret.Tween.get(this.bgUnderTopGrp);
                tw.to({ y: 0 }, 300);
                tw_bgUnderTop.to({ y: 0 }, 300);
                var tw2 = egret.Tween.get(this.midAreaGroup);
                tw2.to({ y: this.m_wm.getMidY() }, 300);
                tw2.to({ height: this.m_wm.getMidHeight() }, 300);
                var timer = new egret.Timer(305, 1);
                timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerTSOpen, this);
                timer.start();
            }
        };
        /*
        * 顶部区域展开完成时触发。
        */
        CPraDiffProScene.prototype.timerTSOpen = function (event) {
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.topArea.switchBtn.source = RES.getRes("top_screen_button_up_png");
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            this.midArea.setVisibleStartY(this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1());
            this.readjustThumbSel();
        };
        /*
        * 顶部区域关闭完成时触发。
        */
        CPraDiffProScene.prototype.timerTSClosed = function (event) {
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.topArea.switchBtn.source = RES.getRes("top_screen_button_down_png");
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            this.midArea.setVisibleStartY(0);
            this.readjustThumbSel();
        };
        CPraDiffProScene.prototype.onImgDragMove = function (evt) {
            this.readjustThumbSel();
        };
        CPraDiffProScene.prototype.onImgDragEnd = function (evt) {
            this.readjustThumbSel();
        };
        // 处理外部投递到此类的消息。
        CPraDiffProScene.prototype.sendMsg = function (msgType, msgObj) {
            var retObj = null;
            /*
                msgType表（CPraEasyScene)：
                    onCaliDlgClose
            
            */
            if ("getOnCaliDlgCloseFunc" == msgType) {
                console.log("getOnCaliDlgCloseFunc via send message!");
                retObj = this.onCaliDlgClose;
            }
            return retObj;
        };
        /*
        * 横竖校准对话框确定退出时调用。
        */
        CPraDiffProScene.prototype.onCaliDlgClose = function (dlgResult) {
            if (dlgResult) {
                this.m_UIPresenter.setCaRat(this._getParentContainer().getCaRat());
                this.m_UIPresenter.updateFromPM();
                this.syncWithUIPresenter();
            }
            this.m_parentContainer.showPraMenu();
        };
        /*
        * 显示横竖校准对话框。
        */
        CPraDiffProScene.prototype.onCaliBtn = function (evt) {
            this.m_parentContainer.showCaliDlg(this.onCaliDlgClose);
        };
        /*
        * 显示横竖校准对话框。
        */
        CPraDiffProScene.prototype.onMenuBtn = function (evt) {
            this.m_parentContainer.showPraMenu();
        };
        /*
            获取父 container。
        */
        CPraDiffProScene.prototype.getParentContainer = function () {
            return this.m_parentContainer;
        };
        /*
        * 点击“返回”按钮时触发。
        */
        CPraDiffProScene.prototype.backBtnTap = function () {
            this.m_parentContainer.showConfirm("该操作将放弃当前练习的进度和数据。\n您确定继续吗？", this.onBack2MainMenuConfirm);
        };
        CPraDiffProScene.prototype.onBack2MainMenuConfirm = function (param) {
            var ret = param;
            if (ret) {
                this.finalScoreDlg.visible = false;
                g_pageJumper.gotoPage("WelcomeScene", null);
            }
            else {
            }
        };
        /*
        * 创建底部菜单。
        */
        CPraDiffProScene.prototype.createBottomMenu = function () {
        };
        /*
        * 重置场景各元素状态以便进行新一轮练习。
        */
        CPraDiffProScene.prototype.resetSceneElems = function () {
            this.m_cmpLenDlg.visible = false;
            this.finalScoreDlg.visible = false;
            this.bottomArea.lenInputer.unlock();
            this.bottomArea.lenInputer.clearLen();
        };
        /*
        * 刷新场景。通常新练习开始时，资源加载完成后调用。
        */
        CPraDiffProScene.prototype.refreshScene = function () {
            this.resetSceneElems();
            //        1、Reset Img content & location
            this.showLen(this.m_pm.getCurLen());
            if (this.m_NoImgMode) {
                this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
                this.m_UIPresenter.setImgHeight(720);
            }
            else {
                this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
                this.m_UIPresenter.setImgHeight(this.midArea.imgFromFile.height);
            }
            var tmpSelRect = new gdeint.CRect();
            tmpSelRect.m_left = 0;
            tmpSelRect.m_top = 0;
            tmpSelRect.m_width = this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat();
            tmpSelRect.m_height = this.m_wm.getMidHeight();
            var selPt = new gdeint.CPoint();
            selPt.m_x = 0;
            selPt.m_y = 0;
            this.m_UIPresenter.inpImgSelPt(selPt);
            this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            //reset thumb & thumbSel
            this.readjustThumb();
            this.readjustThumbSel();
            //        2、Progress bar and score to 0
            this.topArea.progressView.setProgress(0);
            this.topArea.scoreView.clearScore();
            //        3、Ruler user and OK button
            this.m_UIPresenter.m_userLen = 0;
            this.bottomArea.lenInputer.clearLen();
            this.showInitInstrus();
            this.bottomArea.lenInputer.unlock();
        };
        /*
        * 与presenter进行同步，把presenter里最新数据应用到场景。不应更改presenter的内容，目前问题严重。
        */
        CPraDiffProScene.prototype.syncWithUIPresenter = function () {
            // Img
            this.midArea.readjustCircler();
            var imgRect;
            imgRect = this.m_UIPresenter.getImgRect();
            if (this.m_NoImgMode) {
                this.midArea.m_randomGraphShape.resize(imgRect.m_width, imgRect.m_height);
            }
            else {
                this.midArea.imgFromFile.width = imgRect.m_width;
                this.midArea.imgFromFile.height = imgRect.m_height;
            }
            var tmpLen;
            tmpLen = this.m_UIPresenter.getLen();
            if (tmpLen && null != tmpLen) {
                if (this.m_NoImgMode) {
                    // 要加上这三行缩略图才显示正常。原因未知。
                    this.m_imgOriWidth = 1024;
                    this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
                    this.m_UIPresenter.setImgHeight(720);
                }
                else {
                    this.showImg(tmpLen.m2_imgResName);
                }
            }
            var inpPos = new gdeint.CPoint();
            inpPos.m_x = this.m_UIPresenter.getImgRect().m_left;
            inpPos.m_y = this.m_UIPresenter.getImgRect().m_top;
            this.midArea.m_imgCircler.setInpPos(inpPos);
            var inpPosFinal = this.midArea.m_imgCircler.getOutpPos();
            console.log("inpPosFinal:[" + inpPosFinal.m_x + "," + inpPosFinal.m_y + "]");
            this.midArea.midContentGroup.x = inpPosFinal.m_x;
            this.midArea.midContentGroup.y = inpPosFinal.m_y;
            var newImgSelPt = new gdeint.CPoint();
            newImgSelPt.m_x = -inpPosFinal.m_x;
            newImgSelPt.m_y = -inpPosFinal.m_y + this.midArea.m_visibleStartY;
            this.midArea.m_UIPresenter.inpImgSelPt(newImgSelPt);
            // Len
            this._showLen(tmpLen);
            // Thumb
            this.readjustThumb();
            // ThumbQuestioner
            var questionerPt;
            questionerPt = this.m_UIPresenter.getThumbQuestionerDispCenterPt();
            this.topArea.thumbUI.thumbQuestioner.x = questionerPt.m_x - 8;
            this.topArea.thumbUI.thumbQuestioner.y = questionerPt.m_y - 11;
            // ThumbSel
            this.readjustThumbSel();
        };
        return CPraDiffProScene;
    }(CCommonEyelenPraScene));
    eyelen4.CPraDiffProScene = CPraDiffProScene;
    __reflect(CPraDiffProScene.prototype, "eyelen4.CPraDiffProScene");
})(eyelen4 || (eyelen4 = {}));
//# sourceMappingURL=CPraDiffProScene.js.map
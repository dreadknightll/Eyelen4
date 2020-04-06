// /src/UI/scenes/Eyelen/CPraEasyScene.ts
/**
 *
 * 简单难度练习画面场景。
 * 分为顶部、中部、底部三大区域。
 *  顶部区域可收缩和展开，显示缩略图，得分和进度。
 *  中部区域显示背景图片和待测长度。
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
var s_topRightWidth = 250; // 顶部右边宽度。
var s_topRightHeight1 = 70; // 顶部收起时的高度。
var s_cellWidth = 20; // 拉尺每格的宽度。
/*
 * 画面初始化方法：
 *  1、创建对象。
 *  2、setWinWidth/setWinHeight。
 *  3、startNewPra。
 */
var eyelen4;
(function (eyelen4) {
    var CPraEasyScene = (function (_super) {
        __extends(CPraEasyScene, _super);
        /////////////////////////////////////////////////////////////////////////////
        function CPraEasyScene() {
            var _this = _super.call(this) || this;
            _this.x = 0;
            _this.y = 0;
            _this.m_topOpen = true;
            _this.m_wm = new CEyelen4WinModel();
            _this.m_wm.setTopSpaceHeight(s_topSpaceHeight);
            _this.m_wm.setTopHeight1(30);
            _this.m_wm.setTopHeight2(190);
            _this.m_wm.showTop();
            _this.m_wm.setBottomHeight(300);
            _this.m_pm = new CEyelen3EPraMachineEasy(); //部件没改动，继续使用上一代的。
            _this.m_UIPresenter = new CEyelen4PraEasyPresenter();
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
        CPraEasyScene.prototype.childrenCreated = function () {
            this.shutdownClock.setFontSize(24);
            this.midArea.m_UIPresenter = this.m_UIPresenter;
            this.midArea.setVisibleStartY(this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1());
            this.m_bgUnderTop = new egret.Shape();
            this.bgUnderTopGrp.addChild(this.m_bgUnderTop);
            this.bottomArea.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backBtnTap, this);
            this.bottomArea.caliBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCaliBtn, this);
            this.bottomArea.lenInputer.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOKButtonTap, this);
            this.shutdownClock.setTimer(g_shutdownTimer); // 关联全局计时器以显示时间。
            this.shutdownClock.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClockTap, this);
        };
        CPraEasyScene.prototype._setParentContainer = function (c) {
            // 设置父容器，以使用各种提示框等。
            _super.prototype._setParentContainer.call(this, c);
            this.m_UIPresenter.setRenderFilter(this.getParentContainer()._getRenderFilter());
        };
        CPraEasyScene.prototype.getPM = function () {
            return this.m_pm;
        };
        CPraEasyScene.prototype.setLenArr = function (la) {
            this.m_pm.setLenArr(la);
        };
        CPraEasyScene.prototype.getCurPicTag = function () {
            return this.m_curPicTag;
        };
        /*
        * 初始化长度比较对话框。
        */
        CPraEasyScene.prototype.initCmpLenDlg = function () {
            this.m_cmpLenDlg = new eyelen4.CGridCmpLenDlg();
            this.m_cmpLenDlg.x = this.m_winWidth * 0.15; //(this.m_winWidth-400)/2;
            this.m_cmpLenDlg.y = this.m_winHeight * 0.3; //200;
            var cmpLenDlgTrueWidth = this.m_winWidth * 0.7;
            this.m_cmpLenDlg.setTrueWidth(cmpLenDlgTrueWidth);
            this.m_cmpLenDlg.setTrueHeight(cmpLenDlgTrueWidth * 350 / 400);
            this.m_cmpLenDlg.visible = false;
            this.m_cmpLenDlg.onNextBtnEvent(egret.TouchEvent.TOUCH_TAP, this.onNextButtonTap, this);
            this.addChild(this.m_cmpLenDlg);
        };
        /*
        * 触摸“下一长度”按钮后触发。
        */
        CPraEasyScene.prototype.onNextButtonTap = function (evt) {
            playBtnSnd();
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
            }
            else {
                this.m_UIPresenter.nextLen();
                this.m_UIPresenter.setUserGridCnt(0);
                this.bottomArea.lenInputer.clearLen();
                this.bottomArea.lenInputer.unlock();
                this.showLen(this.m_pm.getCurLen());
            }
        };
        CPraEasyScene.prototype.onFailurePanelClose = function (evt) {
            //Nothing to do here.
        };
        /*
        * 显示长度比较对话框。
        */
        CPraEasyScene.prototype.showCmpLenDlg = function () {
            var r = this.m_UIPresenter.m_curRank;
            this.m_cmpLenDlg.setScore(10 * r);
            var correOriLen = this.m_pm.getCurLen();
            this.m_cmpLenDlg.setCorreLen(this.m_pm.getCurLen().m_length * this.m_UIPresenter.getRenderFilter()._getCaRat());
            var gridWidth = this.bottomArea.lenInputer.getGridWidth();
            var gridCnt = this.bottomArea.lenInputer.getUserGridCnt();
            this.m_cmpLenDlg.setUserGridWidth(gridWidth);
            this.m_cmpLenDlg.setUserGridCnt(gridCnt);
            this.m_cmpLenDlg.visible = true;
            var curLen = this.m_pm.getCurLen();
        };
        CPraEasyScene.prototype.hideCmpLenDlg = function () {
            this.m_cmpLenDlg.visible = false;
        };
        /*
        * “确定”按钮点击后触发。提交用户输入的长度。
        */
        CPraEasyScene.prototype.onOKButtonTap = function (evt) {
            playBtnSnd();
            this.m_UIPresenter.setUserGridCnt(this.bottomArea.lenInputer.getUserGridCnt());
            this.m_UIPresenter.submitLen();
            this.showCmpLenDlg();
            this.bottomArea.lenInputer.lock();
            var r = this.m_pm.getLastLenRank();
            var curScore = this.m_pm.getCurScore();
            var curPro = this.m_pm.getCmplProgress();
            this.topArea.scoreView.setScoreWithPro(curScore, curPro);
            this.topArea.progressView.setProgress(curPro);
        };
        CPraEasyScene.prototype.replayBtnTouched = function () {
            //        start next pra      
            this.finalScoreDlg.visible = false;
            this.bottomArea.lenInputer.unlock();
            this.bottomArea.lenInputer.clearLen();
            this.getParentContainer().startNewPra();
        };
        CPraEasyScene.prototype.onClockTap = function () {
            g_praEasyContainer.showAlert("为了您的健康，每次使用20分钟后自动停止。", null);
        };
        CPraEasyScene.prototype.startNewPra = function () {
            this.m_pm.startPra();
            if (this.m2_isFirstPra) {
                this.m2_isFirstPra = false;
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
        CPraEasyScene.prototype.readjustThumb = function () {
            //Affect:thumb
            //Do not affect:thumbSel,thumbQuestioner
            var thRect = this.m_UIPresenter.getThumbRect();
            this.topArea.thumbUI.x = thRect.m_left / 480 * this.m_winWidth;
            this.topArea.thumbUI.y = thRect.m_top;
            this.topArea.thumbUI.setThumbWidth(thRect.m_width);
            this.topArea.thumbUI.setThumbHeight(thRect.m_height);
            if (!this.m_NoImgMode) {
                this.topArea.thumbUI.setImgSrc(this.m_curImgResName);
            }
        };
        /*
        * 重新调整缩略图选框。
        * 修改 m_itm 或图片选区变化后应调用本函数。
        */
        CPraEasyScene.prototype.readjustThumbSel = function () {
            var tsr = this.m_UIPresenter.getThumbSelRect();
            this.topArea.thumbUI.setSelRect(tsr);
        };
        /*
        * 根据某一长度对象在缩略图显示问号。
        * 修改 m_itm 或进入新的长度时应调用本函数。此时参数应传入当前长度。
        */
        CPraEasyScene.prototype.showThumbQuestioner = function (len) {
            var tmpLen = this.m_pm.getCurLen();
            var tmpPoint = new gdeint.CPoint();
            var tmpPoint2 = new gdeint.CPoint();
            tmpPoint.m_x = tmpLen.m_x + tmpLen.m_length / 2;
            tmpPoint.m_y = tmpLen.m_y;
            var qdp = this.m_UIPresenter.getThumbQuestionerDispPt();
            this.topArea.thumbUI.thumbQuestioner.x = qdp.m_x - 8;
            this.topArea.thumbUI.thumbQuestioner.y = qdp.m_y - 11;
        };
        /*
        * 在屏幕显示图片。
        */
        CPraEasyScene.prototype.showImg = function (imgResName) {
            //注：Png图片的渐变等特效很可能会对长度显示造成影响！须谨慎！
            if (this.m_NoImgMode) {
            }
            else {
                var oldImgResName = this.m_curImgResName;
                var tmpImg = new egret.Bitmap();
                tmpImg.texture = this.m_parentContainer._getResLoader().getRes(imgResName);
                this.m_imgOriWidth = tmpImg.width;
                var tmpBitmap = new egret.Bitmap();
                tmpBitmap.texture = this.m_parentContainer._getResLoader().getRes(imgResName);
                this.midArea.imgFromFile.$setBitmapData(tmpBitmap.texture);
                this.midArea.imgFromFile.width = this.m_UIPresenter.getImgRect().m_width;
                this.midArea.imgFromFile.height = tmpImg.height;
                this.m_curImgResName = imgResName;
                this.topArea.thumbUI.setImgSrc(imgResName);
                this.m_UIPresenter.setImgWidth(this.m_imgOriWidth);
                this.m_UIPresenter.setImgHeight(this.midArea.imgFromFile.height);
                this.midArea.imgFromFile.width = this.m_imgOriWidth * this.m_UIPresenter.getRenderFilter()._getCaRat();
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
            }
            this.readjustThumb();
            this.readjustThumbSel();
        };
        /*
            使用无图模式时，随机图形在这函数生成。
        */
        CPraEasyScene.prototype.showRandomGraph = function () {
            this.m_imgOriWidth = 1024;
            try {
                this.midArea.randomGraph.removeChild(this.midArea.m_randomGraphShape);
            }
            catch (e) {
            }
            this.midArea.m_randomGraphShape.genGraph(1024, 720);
            this.midArea.m_randomGraphShape.visible = true;
            this.midArea.randomGraph.visible = true;
            this.midArea.randomGraph.addChild(this.midArea.m_randomGraphShape);
            this.midArea.imgFromFile.visible = false;
            this.topArea.thumbUI.setShape(this.midArea.m_randomGraphShape);
            //                this.topArea.thumbUI.setImgSrc(imgResName);
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
        * 在屏幕显示一个长度。不带图片，也不更新presenter。
        */
        CPraEasyScene.prototype._showLen = function (len) {
            this.m_lenEdgeCanvas.graphics.drawRect(0, 0, 5, 60);
            this.m_lenEdgeCanvas.graphics.clear();
            if (len.m_isHor) {
                //Draw questioner:
                this.m_lenQuestioner.x = len.m_x * this.m_UIPresenter.getRenderFilter()._getCaRat() + len.m_length * this.m_UIPresenter.getRenderFilter()._getCaRat() / 2 - 10;
                this.m_lenQuestioner.y = len.m_y - 20;
                //Draw two edges:
                var tmpRect1 = this.m_UIPresenter.getLenEdge1DispRect();
                var tmpRect2 = this.m_UIPresenter.getLenEdge2DispRect();
                this.m_lenEdgeCanvas.x = tmpRect1.m_left;
                this.m_lenEdgeCanvas.y = tmpRect1.m_top;
                this.m_lenEdgeCanvas.graphics.beginFill(0x00FFFF);
                this.m_lenEdgeCanvas.graphics.drawRect(0, 0, tmpRect1.m_width, tmpRect1.m_height); //Edge1
                var edge2X, edge2Y;
                edge2X = tmpRect2.m_left - tmpRect1.m_left;
                edge2Y = tmpRect2.m_top - tmpRect1.m_top;
                this.m_lenEdgeCanvas.graphics.drawRect(edge2X, edge2Y, tmpRect2.m_width, tmpRect2.m_height); //Edge2
                this.m_lenEdgeCanvas.graphics.endFill();
            }
            else {
                var tmpRect1, tmpRect2, tmpPt;
                //Draw questioner:
                tmpPt = this.m_UIPresenter.getLenQuestionerDispPt();
                var tmpFontSize = this.m_UIPresenter.getLenQuestionerFontSize();
                this.m_lenQuestioner.x = tmpPt.m_x;
                this.m_lenQuestioner.y = tmpPt.m_y;
                this.m_lenQuestioner.size = tmpFontSize;
                //Draw two edges:
                tmpRect1 = this.m_UIPresenter.getLenEdge1DispRect();
                tmpRect2 = this.m_UIPresenter.getLenEdge2DispRect();
                this.m_lenEdgeCanvas.x = this.m_UIPresenter.getLenEdge1DispRect().m_left;
                this.m_lenEdgeCanvas.y = this.m_UIPresenter.getLenEdge1DispRect().m_top;
                this.m_lenEdgeCanvas.graphics.beginFill(0x00FFFF);
                this.m_lenEdgeCanvas.graphics.drawRect(0, 0, tmpRect1.m_width, tmpRect1.m_height);
                var edge2X, edge2Y;
                edge2X = tmpRect2.m_left - tmpRect1.m_left;
                edge2Y = tmpRect2.m_top - tmpRect1.m_top;
                this.m_lenEdgeCanvas.graphics.drawRect(edge2X, edge2Y, tmpRect2.m_width, tmpRect2.m_height);
                this.m_lenEdgeCanvas.graphics.endFill();
            }
        };
        /*
        * 在屏幕显示一个长度。图片也会一起显示。
        */
        CPraEasyScene.prototype.showLen = function (len) {
            this.m_UIPresenter.showLen(len);
            if (!this.m_NoImgMode) {
                this.showImg(len.m2_imgResName);
            }
            else {
                this.showRandomGraph();
            }
            this._showLen(len);
            this.showThumbQuestioner(len);
        };
        /*
        * 缩略图点击时触发。
        */
        CPraEasyScene.prototype.onThumbTap = function (evt) {
            var tmpSelTp = new gdeint.CPoint();
            tmpSelTp.m_x = evt.m_tchX - this.m_UIPresenter.getThumbSelRect().m_width / 2;
            tmpSelTp.m_y = evt.m_tchY - this.m_UIPresenter.getThumbSelRect().m_height / 2;
            this.m_UIPresenter.inpThSelPt(tmpSelTp);
            this.syncWithUIPresenter();
        };
        /*
        * 创建顶部区域。
        */
        CPraEasyScene.prototype.createTop = function () {
            this.topAreaGroup.y = this.m_wm.getTopY();
            this.m_bgUnderTop.x = 0;
            this.m_bgUnderTop.y = 0;
            this.m_bgUnderTop.width = this.m_winWidth;
            this.m_bgUnderTop.height = this.m_wm.getTopHeight();
            this.m_bgUnderTop.graphics.beginFill(0x00FF00);
            this.m_bgUnderTop.graphics.drawRect(0, 0, this.m_bgUnderTop.width, this.m_bgUnderTop.height);
            this.m_bgUnderTop.graphics.endFill();
            var winWidth, topHeight;
            winWidth = this.m_wm.getWinWidth();
            this.topArea.setTrueWidth(winWidth);
            topHeight = this.m_wm.getTopHeight2();
            this.topArea.setTrueHeight(topHeight);
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
            //Calculate for thumb and thumbSel（计算结果保存在presenter）:
            var selPt = new gdeint.CPoint();
            selPt.m_x = 0;
            selPt.m_y = 0;
            this.m_UIPresenter.inpImgSelPt(selPt);
            this.m_UIPresenter.inpImgSelWidth(this.m_wm.getWinWidth() / this.m_UIPresenter.getRenderFilter()._getCaRat());
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            //先在这里添加listener，后面统一调整的时候会调整缩略图显示位置等:
            this.topArea.thumbUI.addEventListener(CThumbUIEvent.EVT_THUMB_TAP, this.onThumbTap, this);
            this.topArea.visible = true;
            this.topArea.addEventListener(CTopAreaEvent_Eyelen.EVT_SWITCHBTN_TAP, this.onTopBtnTab, this);
            this.topAreaGroup.y = this.m_wm.getTopY();
        };
        /*
        * 创建中间区域。
        */
        CPraEasyScene.prototype.createMid = function () {
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.midArea.setTrueWidth(this.m_winWidth);
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
        };
        /*
        * 创建底部区域。
        */
        CPraEasyScene.prototype.createBottom = function () {
            var bottomY, bottomHeight;
            bottomY = this.m_wm.getBottomY();
            this.bottomAreaGroup.y = bottomY;
            bottomHeight = this.m_wm.getBottomHeight();
            this.bottomArea.setTrueWidth(this.m_winWidth);
            this.bottomArea.setTrueHeight(bottomHeight);
        };
        /*
        * 资源加载完成后，运行此函数创建场景。
        */
        CPraEasyScene.prototype.createScene = function () {
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
            this.midArea.imgFromFile.x = 0;
            this.midArea.imgFromFile.y = 0;
            this.midArea.imgFromFile.width = 160;
            this.midArea.imgFromFile.height = 160;
            this.createTop();
            this.createMid();
            this.createBottom();
            this.midArea.addEventListener(CMidAreaEvent_Eyelen.EVT_IMG_DRAGMOVE, this.onImgDragMove, this);
            this.midArea.addEventListener(CMidAreaEvent_Eyelen.EVT_IMG_DRAGEND, this.onImgDragEnd, this);
            this.addChild(this.m_topSpace);
            this.finalScoreDlg.left = (this.m_winWidth - this.finalScoreDlg.width) / 2;
            this.finalScoreDlg.visible = false;
            this.finalScoreDlg.addEventListener(CFinalScoreDlgEvent.EVT_REPLAY_BTN_TAP, this.replayBtnTouched, this);
            this.initCmpLenDlg();
            //OK to start and show first len. （对于无图模式此处代码未必正确）
            var firstLen = this.m_pm.getCurLen();
            this.m_UIPresenter.showLen(firstLen);
            this.syncWithUIPresenter();
            this.showInitInstrus();
        };
        /*
        * 显示开始练习时的提示说明。
        */
        CPraEasyScene.prototype.showInitInstrus = function () {
            this.prepareTipBalloons();
            var balloonX = g_scenePos.m_x + 65 * g_scale;
            var balloonY = g_scenePos.m_y + 230 * g_scale;
            this.m_tipBalloon1.x = balloonX * 0.9;
            this.m_tipBalloon1.y = balloonY;
            this.m_tipBalloon1.scaleX = g_scale;
            this.m_tipBalloon1.scaleY = g_scale;
            this.m_tipBalloon1.title = "提示";
            this.m_tipBalloon1.setContent("请目测图上“？”处显示的长度，并点击格子输入您目测的结果。");
            this.m_tipBalloon1.visible = true;
            this.disableScene();
            this.m_tipBalloon2.x = balloonX * 1.1;
            this.m_tipBalloon2.y = balloonY;
            this.m_tipBalloon2.scaleX = g_scale;
            this.m_tipBalloon2.scaleY = g_scale;
            this.m_tipBalloon2.title = "提示";
            this.m_tipBalloon2.setContent("请目测图上“？”处显示的\n长度并点击格子输入您目测的结果。");
            this.m_tipBalloon2.visible = false; //隐藏气球2以防两个重叠显示。
            this.m_tipBalloon1.addEventListener(CBalloonTipEvent.EVT_CLOSE, this.onTipBalloon1Close, this);
            //此时尺子亮起来，屏幕其它内容变灰，直到关闭气球：
            var r = new gdeint.CRect();
            r.m_left = 5;
            r.m_top = this.m_wm.getBottomY() + 25;
            r.m_width = 440.0 / 480 * this.m_winWidth;
            r.m_height = 140;
            this.brightenNotiLayerBgRect(r);
        };
        CPraEasyScene.prototype.prepareTipBalloons = function () {
            this.m_notiLayer.addChild(this.m_tipBalloon1);
            this.m_notiLayer.addChild(this.m_tipBalloon2);
        };
        /*
        * 关闭操作提示后触发。
        */
        CPraEasyScene.prototype.onTipBalloon1Close = function (evt) {
            this.m_tipBalloon2.visible = true;
            this.m_tipBalloon2.addEventListener(CBalloonTipEvent.EVT_CLOSE, this.onTipBalloon2Close, this);
        };
        /*
        * 关闭操作提示后触发。
        */
        CPraEasyScene.prototype.onTipBalloon2Close = function (evt) {
            this.enabled = true;
            this.recoverNotiLayerBg(); //make ruler dark again for other disable scene actions.
            this.m_notiLayer.visible = false;
            //                this.midArea.imgFromFile.texture = this.m_parentContainer._getResLoader().getRes("img_017_png");
        };
        /*
        * 顶部按钮触摸后触发。
        */
        CPraEasyScene.prototype.onTopBtnTab = function (evt) {
            playBtnSnd();
            if (this.m_topOpen) {
                this.m_topOpen = false;
                this.m_wm.hideTop();
                this.midArea.setTrueHeight(this.m_wm.getMidHeight());
                var tw = egret.Tween.get(this.topArea);
                var tw_topBg = egret.Tween.get(this.bgUnderTopGrp);
                var targetTopY = -(this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1());
                tw.to({ y: targetTopY }, 300);
                tw_topBg.to({ y: targetTopY }, 300);
                var timer = new egret.Timer(305, 1);
                timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerTSClosed, this);
                timer.start();
            }
            else {
                this.m_topOpen = true;
                this.m_wm.showTop();
                var tw = egret.Tween.get(this.topArea);
                var tw_topBg = egret.Tween.get(this.bgUnderTopGrp);
                tw.to({ y: 0 }, 300);
                tw_topBg.to({ y: 0 }, 300);
                var timer = new egret.Timer(305, 1);
                timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerTSOpen, this);
                timer.start();
            }
        };
        /*
        * 顶部区域展开完成时触发。
        */
        CPraEasyScene.prototype.timerTSOpen = function (event) {
            this.topArea.switchBtn.source = RES.getRes("top_screen_button_up_png");
            var tmpRect;
            tmpRect = this.m_UIPresenter.getImgRect();
            var imgSelPt;
            imgSelPt = new gdeint.CPoint();
            imgSelPt.m_x = -tmpRect.m_left;
            imgSelPt.m_y = -tmpRect.m_top + this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1();
            this.m_UIPresenter.inpImgSelPt(imgSelPt);
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            this.midArea.setVisibleStartY(this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1());
            this.readjustThumbSel();
        };
        /*
        * 顶部区域关闭完成时触发。
        */
        CPraEasyScene.prototype.timerTSClosed = function (event) {
            this.topArea.switchBtn.source = RES.getRes("top_screen_button_down_png");
            var tmpRect;
            tmpRect = this.m_UIPresenter.getImgRect();
            var imgSelPt;
            imgSelPt = new gdeint.CPoint();
            imgSelPt.m_x = -tmpRect.m_left;
            imgSelPt.m_y = -tmpRect.m_top;
            this.m_UIPresenter.inpImgSelPt(imgSelPt);
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidVisibleHeight());
            this.midArea.setVisibleStartY(0);
            this.readjustThumbSel();
        };
        CPraEasyScene.prototype.onImgDragMove = function (evt) {
            this.readjustThumbSel();
        };
        CPraEasyScene.prototype.onImgDragEnd = function (evt) {
            this.readjustThumbSel();
        };
        /*
        * 横竖校准对话框确定退出时调用。
        */
        CPraEasyScene.prototype.onCaliDlgClose = function (dlgResult) {
            if (dlgResult) {
                this.m_UIPresenter.setCaRat(this._getParentContainer().getCaRat());
                var newGridWidth = this.m_UIPresenter.getRenderFilter().xOConv(30);
                this.bottomArea.lenInputer.setGridWidth(newGridWidth);
                this.m_pm.setGridDispWidth(newGridWidth);
                this.m_UIPresenter.updateFromPM();
                this.syncWithUIPresenter();
            }
        };
        /*
        * 显示横竖校准对话框。
        */
        CPraEasyScene.prototype.onCaliBtn = function (evt) {
            this.m_parentContainer.showCaliDlg(this.onCaliDlgClose);
        };
        /*
            获取父 container。
        */
        CPraEasyScene.prototype.getParentContainer = function () {
            return this.m_parentContainer;
        };
        /*
        * 点击“返回”按钮时触发。
        */
        CPraEasyScene.prototype.backBtnTap = function () {
            this.m_parentContainer.showConfirm("该操作将放弃当前练习的进度和数据。\n您确定继续吗？", this.onBack2MainMenuConfirm);
        };
        CPraEasyScene.prototype.onBack2MainMenuConfirm = function (param) {
            var ret = param;
            if (ret) {
                this.finalScoreDlg.visible = false;
                this.bottomArea.lenInputer.unlock();
                this.bottomArea.lenInputer.clearLen();
                g_pageJumper.gotoPage("WelcomeScene", null);
            }
            else {
            }
        };
        /*
        * 创建底部菜单。
        */
        CPraEasyScene.prototype.createBottomMenu = function () {
        };
        /*
        * 刷新场景。通常新练习开始时，资源加载完成后调用。
        */
        CPraEasyScene.prototype.refreshScene = function () {
            //        1、Reset Img content & location
            this.showLen(this.m_pm.getCurLen());
            if (this.m_NoImgMode) {
                this.m_UIPresenter.setImgWidth(1024);
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
            this.m_UIPresenter.m_userGCnt = 0;
            this.showInitInstrus();
        };
        /*
        * 与presenter进行同步，把presenter里最新数据应用到场景。
        */
        CPraEasyScene.prototype.syncWithUIPresenter = function () {
            // Img
            this.midArea.readjustCircler();
            var imgRect;
            imgRect = this.m_UIPresenter.getImgRect();
            if (!this.m_NoImgMode) {
                this.midArea.imgFromFile.width = imgRect.m_width;
                this.midArea.imgFromFile.height = imgRect.m_height;
            }
            else {
                this.midArea.m_randomGraphShape.resize(imgRect.m_width, imgRect.m_height);
            }
            var tmpLen;
            tmpLen = this.m_UIPresenter.getLen();
            if (tmpLen && null != tmpLen) {
                if (!this.m_NoImgMode) {
                    this.showImg(tmpLen.m2_imgResName);
                }
                else {
                    //                    this.showRandomGraph();
                }
            }
            var inpPos = new gdeint.CPoint();
            inpPos.m_x = this.m_UIPresenter.getImgRect().m_left;
            inpPos.m_y = this.m_UIPresenter.getImgRect().m_top;
            this.midArea.m_imgCircler.setInpPos(inpPos);
            var inpPosFinal = this.midArea.m_imgCircler.getOutpPos();
            this.midArea.midContentGroup.x = inpPosFinal.m_x;
            this.midArea.midContentGroup.y = inpPosFinal.m_y;
            console.log("inpPosFinal:[" + inpPosFinal.m_x + "," + inpPosFinal.m_y + "]");
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
            questionerPt = this.m_UIPresenter.getThumbQuestionerDispPt();
            this.topArea.thumbUI.thumbQuestioner.x = questionerPt.m_x - 8;
            this.topArea.thumbUI.thumbQuestioner.y = questionerPt.m_y - 11;
            // ThumbSel
            this.readjustThumbSel();
        };
        return CPraEasyScene;
    }(CCommonEyelenPraScene));
    eyelen4.CPraEasyScene = CPraEasyScene;
    __reflect(CPraEasyScene.prototype, "eyelen4.CPraEasyScene");
})(eyelen4 || (eyelen4 = {}));
//# sourceMappingURL=CPraEasyScene.js.map
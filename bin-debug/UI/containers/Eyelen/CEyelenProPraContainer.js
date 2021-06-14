/***********************************************************
* /src/UI/containers/eyelen/CEyelenProPraContainer.ts
* 尺眼通使用的显示容器。派生于CUIContainer。
* 注：不能与egret耦合，否则无法单元测试！
*
************************************************************/
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
var CEyelenProPraContainer = (function (_super) {
    __extends(CEyelenProPraContainer, _super);
    function CEyelenProPraContainer() {
        var _this = _super.call(this) || this;
        _this.m_NoImgMode = false;
        _this.m_visibilityTempScene = false;
        _this.m_resNameFinder = new CEyelen4ResNameFinder();
        _this.m_renderFilter = new CEyelen3ERenderFilter();
        _this.m_renderFilter.setCaRat(1);
        return _this;
        //        this.m_praMenu = new gdeint.CPraMenu();
        //        this.m_praMenu._setParentContainer(this);
    }
    CEyelenProPraContainer.prototype.setResNameFinder = function (rnf) {
        this.m_resNameFinder = rnf;
    };
    CEyelenProPraContainer.prototype.getResNameFinder = function () {
        return this.m_resNameFinder;
    };
    CEyelenProPraContainer.prototype.disableForNoti = function () {
        this._getPraScene().disableForNoti();
    };
    CEyelenProPraContainer.prototype.resumeAfterNoti = function () {
        this._getPraScene().resumeAfterNoti();
    };
    CEyelenProPraContainer.prototype.applyFunc = function (func, argArr) {
        if (null != func) {
            func.apply(this._getPraScene(), argArr);
        }
    };
    CEyelenProPraContainer.prototype.setPraScene = function (s) {
        this.m_praScene = s;
        this.m_praScene._setParentContainer(this);
    };
    CEyelenProPraContainer.prototype.setCaliDlg = function (d) {
        this.m_caliDlg = d;
        this.m_caliDlg._setParentContainer(this);
    };
    CEyelenProPraContainer.prototype.setPraMenu = function (m) {
        this.m_praMenu = m;
        this.m_praMenu._setParentContainer(this);
    };
    CEyelenProPraContainer.prototype.setRenderFilter = function (rf) {
        this.m_renderFilter = rf;
    };
    CEyelenProPraContainer.prototype.setPreloaderUI = function (pui) {
        this.m_preloaderUI = pui;
        this.m_preloaderUI._setParentContainer(this);
    };
    CEyelenProPraContainer.prototype.setCaRat = function (cr) {
        this.m_renderFilter.setCaRat(cr);
    };
    CEyelenProPraContainer.prototype.getCaRat = function () {
        return this.m_renderFilter._getCaRat();
    };
    CEyelenProPraContainer.prototype.getDlgLayer = function () {
        return this._getPraScene().getDlgLayer();
    };
    CEyelenProPraContainer.prototype.getNotiLayer = function () {
        return this._getPraScene().getNotiLayer();
    };
    CEyelenProPraContainer.prototype._getPraScene = function () {
        return this.m_praScene;
    };
    CEyelenProPraContainer.prototype._getCaliDlg = function () {
        return this.m_caliDlg;
    };
    CEyelenProPraContainer.prototype._getPraMenu = function () {
        return this.m_praMenu;
    };
    CEyelenProPraContainer.prototype._getRenderFilter = function () {
        return this.m_renderFilter;
    };
    CEyelenProPraContainer.prototype._getPreloaderUI = function () {
        return this.m_preloaderUI;
    };
    CEyelenProPraContainer.prototype.show = function () {
        if (this.m_visibilityTempScene) {
            this.m_praScene.show();
        }
        var parr = this.getAllPluginsThis();
        var i;
        for (i = 0; i < parr.length; ++i) {
            if (this.m_visibilityTempArrThis && this.m_visibilityTempArrThis[i]) {
                parr[i].show();
            }
        }
    };
    CEyelenProPraContainer.prototype.hide = function () {
        this.m_praScene.hide();
        this.saveVisibleStates();
        var parr = this.getAllPluginsThis();
        var i;
        for (i = 0; i < parr.length; ++i) {
            if (null != parr[i]) {
                parr[i].hide();
            }
        }
    };
    CEyelenProPraContainer.prototype.isVisible = function () {
        return true;
    };
    CEyelenProPraContainer.prototype.showCaliDlg = function (listener) {
        var caliDlg = this._getCaliDlg();
        caliDlg._setCloseListener(listener);
        caliDlg.show();
    };
    CEyelenProPraContainer.prototype.showPraMenu = function () {
        console.log("OK1!");
        var praMenu = this._getPraMenu();
        console.log("praMenu got!");
        praMenu.show();
    };
    CEyelenProPraContainer.prototype.fn2_fetchRetryLens = function (nextAct) {
        egret.ExternalInterface.call("fetchRetryLens", "");
        this.m2_fetchRetryLensNextAct = nextAct;
        var nextStepTimer = new egret.Timer(200, 1);
        nextStepTimer.addEventListener(egret.TimerEvent.TIMER, this.fetchRetryLens_step2, this);
        nextStepTimer.start();
    };
    CEyelenProPraContainer.prototype.fetchRetryLens_step2 = function () {
        this.m_retryLensArr = new Array();
        // 无错误长度或错误长度不足时，前三个长度使用以下默认长度：
        var len1 = new CLen();
        len1.m_className = "CLen";
        len1.m_x = 10;
        len1.m_y = 20;
        len1.m_isHor = true;
        len1.m_length = 300;
        len1.m_imgPath = "img_001.gif";
        len1.m2_imgResName = "img_001_gif";
        var len2 = new CLen();
        len2.m_className = "CLen";
        len2.m_x = 110;
        len2.m_y = 220;
        len2.m_isHor = false;
        len2.m_length = 240;
        len2.m_imgPath = "img_002.png";
        len2.m2_imgResName = "img_002_png";
        var len3 = new CLen();
        len3.m_className = "CLen";
        len3.m_x = 40;
        len3.m_y = 300;
        len3.m_isHor = true;
        len3.m_length = 80;
        len3.m_imgPath = "img_003.gif";
        len3.m2_imgResName = "img_003_gif";
        CGlobals.g2_tmpWaitingForRetFromNative = true;
        /* 返回结果调整后示例：
            {
                "RetryLens":
                [
                    {
                        "m_className":"CLen","m_x":10,"m_y":20,"m_isHor":true,"m_length":300,"m_imgPath":"img_001.gif","m2_imgResName":"img_001_gif"
                    },
                    {
                        "m_className":"CLen","m_x":110,"m_y":220,"m_isHor":false,"m_length":240,"m_imgPath":"img_002.png","m2_imgResName":"img_002_png"
                    }
                ]
            }
        */
        console.log("OK2");
        console.log("Parsing:" + CGlobals.g2_tmpRetryLensJSONStr);
        var lenArrObj = JSON.parse(CGlobals.g2_tmpRetryLensJSONStr);
        console.log("OK2.5");
        var tmpLen1Obj, tmpLen2Obj;
        if (lenArrObj.RetryLens.length > 0) {
            tmpLen1Obj = lenArrObj.RetryLens[0];
            console.log("OK3");
            len1.m_className = tmpLen1Obj.m_className;
            len1.m_x = tmpLen1Obj.m_x;
            len1.m_y = tmpLen1Obj.m_y;
            len1.m_isHor = tmpLen1Obj.m_isHor;
            len1.m_length = tmpLen1Obj.m_length;
            len1.m_imgPath = tmpLen1Obj.m_imgPath;
            len1.m2_imgResName = tmpLen1Obj.m2_imgResName;
            len3.m_className = tmpLen1Obj.m_className;
            len3.m_x = tmpLen1Obj.m_x;
            len3.m_y = tmpLen1Obj.m_y;
            len3.m_isHor = tmpLen1Obj.m_isHor;
            len3.m_length = tmpLen1Obj.m_length;
            len3.m_imgPath = tmpLen1Obj.m_imgPath;
            len3.m2_imgResName = tmpLen1Obj.m2_imgResName;
        }
        console.log("OK4");
        if (lenArrObj.RetryLens.length > 1) {
            tmpLen2Obj = lenArrObj.RetryLens[1];
            len2.m_className = tmpLen2Obj.m_className;
            len2.m_x = tmpLen2Obj.m_x;
            len2.m_y = tmpLen2Obj.m_y;
            len2.m_isHor = tmpLen2Obj.m_isHor;
            len2.m_length = tmpLen2Obj.m_length;
            len2.m_imgPath = tmpLen2Obj.m_imgPath;
            len2.m2_imgResName = tmpLen2Obj.m2_imgResName;
        }
        this.m_retryLensArr.push(len1);
        this.m_retryLensArr.push(len2);
        this.m_retryLensArr.push(len3);
        console.log("OK5");
        this.m2_fetchRetryLensNextAct.apply(this);
    };
    /*
        开始一轮新的练习。
    */
    CEyelenProPraContainer.prototype.startNewPra = function () {
        console.log("OK0");
        this.fn2_fetchRetryLens(this.startNewPra_step2);
    };
    CEyelenProPraContainer.prototype.startNewPra_step2 = function () {
        console.log("Successfully jumped to startNewPra_step2!");
        this._getPraScene().hide();
        //显示资源预加载界面并加载练习所需资源：
        var preloaderUI = this._getPreloaderUI();
        preloaderUI.show();
        preloaderUI.setCompleteListener(this.onPicJSONLoadComplete, this);
        var picJSONTask = new gdeint.CPreloadTask(); //创建任务对象。
        var resListPicJSON = new Array();
        console.log("OK0.3");
        var j;
        for (j = 0; j < this.m_retryLensArr.length; ++j) {
            resListPicJSON[j] = new gdeint.ResStruct();
            this.m_resNameFinder.setInp(this.m_retryLensArr[j].m2_imgResName);
            resListPicJSON[j].m_resName = this.m_resNameFinder.getResult();
            resListPicJSON[j].m_givenSize = 500;
        }
        this.m_seledPicTagArr = gdeint.randomNums_ts(18, 4); //从18张图片材料中随机选4张进行练习。
        var i;
        for (i = 0; i < this.m_seledPicTagArr.length; ++i) {
            resListPicJSON[i + 3] = new gdeint.ResStruct();
            this.m_resNameFinder.setInp(this.m_seledPicTagArr[i].toString());
            resListPicJSON[i + 3].m_resName = this.m_resNameFinder.getResult();
            resListPicJSON[i + 3].m_givenSize = 500;
        }
        picJSONTask.m_resList = resListPicJSON;
        if (this.m_NoImgMode) {
            picJSONTask.m_proportion = 101;
        }
        else {
            picJSONTask.m_proportion = 30;
        }
        picJSONTask.m_taskName = "picXMLs";
        preloaderUI.addTask(picJSONTask);
        preloaderUI.setNoTaskLeft(true); // 表示需加载的资源已全部添加到列表。
        preloaderUI.startPreload();
    };
    /*
     * 练习所需资源加载完成时触发。
     */
    CEyelenProPraContainer.prototype.onPicJSONLoadComplete = function () {
        var tmpLens = new Array();
        var curTag;
        for (curTag = 0; curTag < 3; ++curTag) {
            //                console.log("JSON str:"+this.m_retryLensArr[curTag].toJSONStr());
            //                tmpLens.push(CLen.fromJsonStr(this.m_retryLensArr[i].toJSONStr()));
            tmpLens.push(this.m_retryLensArr[curTag]);
        }
        for (curTag = 0; curTag < this.m_seledPicTagArr.length; ++curTag) {
            var strResName;
            this.m_resNameFinder.setInp(this.m_seledPicTagArr[curTag].toString());
            strResName = this.m_resNameFinder.getResult();
            var picJsn;
            picJsn = this.m_resLoader.getRes(strResName);
            console.log(picJsn);
            var len = picJsn.pics.pic.lens.len.length;
            var i;
            for (i = 0; i < len; ++i) {
                var tmpLen = new CLen();
                tmpLen.m_className = "CLen";
                tmpLen.m_x = parseFloat(picJsn.pics.pic.lens.len[i].x);
                tmpLen.m_y = parseFloat(picJsn.pics.pic.lens.len[i].y);
                tmpLen.m_length = parseFloat(picJsn.pics.pic.lens.len[i].length);
                var tmpHorStr;
                tmpHorStr = picJsn.pics.pic.lens.len[i].hor;
                if ("1" == tmpHorStr) {
                    tmpLen.m_isHor = true;
                }
                else {
                    tmpLen.m_isHor = false;
                }
                tmpLen.m_imgPath = picJsn.pics.pic.imgPath;
                this.m_resNameFinder.setInp(tmpLen.m_imgPath);
                tmpLen.m2_imgResName = this.m_resNameFinder.getResult();
                tmpLens.push(tmpLen);
            }
        }
        if (this.m_NoImgMode) {
            //使用随机图时，需避免长度显示在图外。
            var tmpLens2;
            tmpLens2 = new Array();
            var i;
            for (i = 0; i < tmpLens.length; ++i) {
                var fixedLen;
                fixedLen = tmpLens[i];
                if (fixedLen.m_isHor) {
                    while (fixedLen.m_x + fixedLen.m_length > 1024) {
                        fixedLen.m_x -= 200;
                    }
                    while (fixedLen.m_y > 720) {
                        fixedLen.m_y -= 200;
                    }
                }
                else {
                    while (fixedLen.m_x > 1024) {
                        fixedLen.m_x -= 200;
                    }
                    while (fixedLen.m_y + fixedLen.m_length > 720) {
                        fixedLen.m_y -= 200;
                    }
                }
                tmpLens2.push(fixedLen);
            }
            this.m_praScene.setLenArr(tmpLens2);
        }
        else {
            this.m_praScene.setLenArr(tmpLens);
        }
        if (this.m_NoImgMode) {
            this.onPicImgLoadComplete();
        }
        else {
            var preloaderUI = this.m_praScene._getParentContainer()._getPreloaderUI();
            preloaderUI.setNoTaskLeft(false);
            preloaderUI.setCompleteListener(this.onPicImgLoadComplete, this);
            var picImgTask = new gdeint.CPreloadTask();
            var resListPicImg = new Array();
            var i;
            for (i = 0; i < this.m_seledPicTagArr.length; ++i) {
                var tmpImgFileName = "", tmpImgResName = "";
                resListPicImg[i] = new gdeint.ResStruct();
                var resName;
                this.m_resNameFinder.setInp(this.m_seledPicTagArr[i].toString());
                resName = this.m_resNameFinder.getResult();
                var picJsn = this.m_resLoader.getRes(resName);
                tmpImgFileName = picJsn.pics.pic.imgPath;
                this.m_resNameFinder.setInp(tmpImgFileName);
                tmpImgResName = this.m_resNameFinder.getResult();
                resListPicImg[i].m_resName = tmpImgResName;
                resListPicImg[i].m_givenSize = 500;
            }
            picImgTask.m_resList = resListPicImg;
            picImgTask.m_proportion = 72;
            picImgTask.m_taskName = "picImgs";
            preloaderUI.addTask(picImgTask);
            preloaderUI.setNoTaskLeft(true);
            preloaderUI.startPreload();
        }
    };
    CEyelenProPraContainer.prototype.onPicImgLoadComplete = function () {
        this.m_preloaderUI.setNextActListener(this.startRunPra, this); //this.startRunPra will be called when scrTouched or * seconds collapse.
    };
    CEyelenProPraContainer.prototype.startRunPra = function () {
        this.m_preloaderUI.clearProgress();
        this._getPreloaderUI().hide();
        console.log("OK1");
        this.m_praScene.startNewPra();
        this._getPraScene().show();
    };
    CEyelenProPraContainer.prototype.sendMsgToScene = function (msgType, msgObj) {
        var retObj = null;
        return this.m_praScene.sendMsg(msgType, msgObj);
    };
    CEyelenProPraContainer.prototype._quitPra = function () {
    };
    CEyelenProPraContainer.prototype.setQuitHandler = function (func) {
    };
    /*
        父类该方法不符合要求，需要覆盖。
    */
    CEyelenProPraContainer.prototype.getAllPluginsThis = function () {
        var ret = new Array();
        ret[0] = (this._getAlertDlg());
        ret[1] = this._getConfirmDlg();
        ret[2] = this.m_caliDlg;
        ret[4] = this.m_praMenu;
        ret[3] = this.m_preloaderUI;
        return ret;
    };
    /*
        父类该方法不符合要求，需要覆盖。
    */
    CEyelenProPraContainer.prototype.saveVisibleStates = function () {
        this.m_visibilityTempArrThis = new Array();
        this.m_visibilityTempScene = this.m_praScene.isVisible();
        var plugins = this.getAllPluginsThis();
        var i;
        for (i = 0; i < plugins.length; ++i) {
            if (null != plugins[i]) {
                this.m_visibilityTempArrThis[i] = plugins[i].isVisible();
            }
        }
    };
    CEyelenProPraContainer.prototype.getVisibleStates = function () {
        return this.m_visibilityTempArrThis;
    };
    return CEyelenProPraContainer;
}(CUIContainer));
__reflect(CEyelenProPraContainer.prototype, "CEyelenProPraContainer", ["IEyelenPraContainer"]);

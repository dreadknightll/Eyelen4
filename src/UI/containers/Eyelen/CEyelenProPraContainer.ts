/***********************************************************
* /src/UI/containers/eyelen/CEyelenProPraContainer.ts
* 尺眼通使用的显示容器。派生于CUIContainer。
* 注：不能与egret耦合，否则无法单元测试！
*
************************************************************/

class CEyelenProPraContainer extends CUIContainer implements IEyelenPraContainer,INotiParent{
	public constructor() {
        super();
        this.m_resNameFinder = new CEyelen4ResNameFinder();

        this.m_renderFilter = new CEyelen3ERenderFilter();
        this.m_renderFilter.setCaRat(1);


//        this.m_praMenu = new gdeint.CPraMenu();
//        this.m_praMenu._setParentContainer(this);
	}

    public m_NoImgMode:boolean = false;

    private m_resNameFinder:IEyelen4ResNameFinder; // 用来把文件名、资源名、URL相互转换。

    private m_retryLensArr:Array<CLen>;

    public setResNameFinder(rnf:IEyelen4ResNameFinder) {
        this.m_resNameFinder = rnf;
    }
    public getResNameFinder():IEyelen4ResNameFinder {
        return this.m_resNameFinder;
    }

    public disableForNoti():void {
        this._getPraScene().disableForNoti();
    }

    public resumeAfterNoti():void {
        this._getPraScene().resumeAfterNoti();
    }

    public applyFunc(func:any , argArr:Array<any>):void {
        if(null != func) {
            func.apply(this._getPraScene() , argArr);
        }
    }

    public setPraScene(s:IEyelenPraScene): void {
        this.m_praScene = s;
        this.m_praScene._setParentContainer(this);
    }

    public setCaliDlg(d:ICaliDlgPlugin): void {
        this.m_caliDlg = d;
        this.m_caliDlg._setParentContainer(this);
    }

    public setPraMenu(m:gdeint.CPraMenu): void {
        this.m_praMenu = m;
        this.m_praMenu._setParentContainer(this);
    }

    public setRenderFilter(rf: IEyelen3ERenderFilter): void {
        this.m_renderFilter = rf;
    }

    public setPreloaderUI(pui:IPreloaderUI) {
        this.m_preloaderUI = pui;
        this.m_preloaderUI._setParentContainer(this);
    }

    public setCaRat(cr: number): void {
        this.m_renderFilter.setCaRat(cr);
    }

    public getCaRat(): number {
        return this.m_renderFilter._getCaRat();
    }

    public getDlgLayer():IDiv {
        return this._getPraScene().getDlgLayer();
    }

    public getNotiLayer():IDiv {
        return this._getPraScene().getNotiLayer();
    }

    public _getPraScene(): IEyelenPraScene {
        return this.m_praScene;
    }

    public _getCaliDlg(): ICaliDlg {
        return this.m_caliDlg;
    }

    public _getPraMenu(): gdeint.CPraMenu {
        return this.m_praMenu;
    }

    public _getRenderFilter(): IEyelen3ERenderFilter {
        return this.m_renderFilter;
    }

    public _getPreloaderUI(): IPreloaderUI {
        return this.m_preloaderUI;
    }

    public show():void {
        if(this.m_visibilityTempScene) {
            this.m_praScene.show();
        }
        var parr:Array<IContainerPlugin> = this.getAllPluginsThis();
        var i;
        for(i=0;i<parr.length;++i) {
            if(this.m_visibilityTempArrThis && this.m_visibilityTempArrThis[i]) {
                parr[i].show();
            }
        }
    }
    
    public hide():void {
        this.m_praScene.hide();
        this.saveVisibleStates();
        var parr:Array<IContainerPlugin> = this.getAllPluginsThis();
        var i;
        for(i=0;i<parr.length;++i) {
            if(null != parr[i]) {
                parr[i].hide();
            }
        }
    }

    public isVisible():boolean {
        return true;
    }

    public showCaliDlg(listener: (boolean)=>void): void {
        var caliDlg = this._getCaliDlg();
        caliDlg._setCloseListener(listener);
        caliDlg.show();
    }


    public showPraMenu():void {
        console.log("OK1!");
        var praMenu = this._getPraMenu();
        console.log("praMenu got!");
        praMenu.show();
    }

    private m2_fetchRetryLensNextAct:Function;
    private fn2_fetchRetryLens(nextAct:Function):void {

        egret.ExternalInterface.call("fetchRetryLens","");

        this.m2_fetchRetryLensNextAct  = nextAct;

        var nextStepTimer:egret.Timer = new egret.Timer(200 , 1);
        nextStepTimer.addEventListener(egret.TimerEvent.TIMER , this.fetchRetryLens_step2 , this);
        nextStepTimer.start();
    }

    private fetchRetryLens_step2():void {

        this.m_retryLensArr = new Array<CLen>();

        // 无错误长度或错误长度不足时，前三个长度使用以下默认长度：

        var len1:CLen = new CLen();
        len1.m_className = "CLen";
        len1.m_x = 10;
        len1.m_y = 20;
        len1.m_isHor = true;
        len1.m_length = 300;
        len1.m_imgPath = "img_001.gif";
        len1.m2_imgResName = "img_001_gif";

        var len2:CLen = new CLen();
        len2.m_className = "CLen";
        len2.m_x = 110;
        len2.m_y = 220;
        len2.m_isHor = false;
        len2.m_length = 240;
        len2.m_imgPath = "img_002.png";
        len2.m2_imgResName = "img_002_png";

        var len3:CLen = new CLen();
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

        console.log("Parsing:"+CGlobals.g2_tmpRetryLensJSONStr);
        var lenArrObj = JSON.parse(CGlobals.g2_tmpRetryLensJSONStr);

            console.log("OK2.5");

        var tmpLen1Obj , tmpLen2Obj;
        if(lenArrObj.RetryLens.length > 0) {

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

        if(lenArrObj.RetryLens.length > 1) {
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
    }

    /*
        开始一轮新的练习。
    */
    public startNewPra(): void {
        console.log("OK0");

        this.fn2_fetchRetryLens(this.startNewPra_step2);
    }

    public startNewPra_step2():void {
        console.log("Successfully jumped to startNewPra_step2!");
        this._getPraScene().hide();

//显示资源预加载界面并加载练习所需资源：
        var preloaderUI:IPreloaderUI = this._getPreloaderUI();

        preloaderUI.show();

        preloaderUI.setCompleteListener(this.onPicJSONLoadComplete,this);

        var picJSONTask:gdeint.CPreloadTask = new gdeint.CPreloadTask();//创建任务对象。
        var resListPicJSON:Array<gdeint.ResStruct> = new Array<gdeint.ResStruct>();

        console.log("OK0.3");

        var j:number;
        for(j=0;j<this.m_retryLensArr.length;++j) {
            resListPicJSON[j] = new gdeint.ResStruct();
            this.m_resNameFinder.setInp(this.m_retryLensArr[j].m2_imgResName);
            resListPicJSON[j].m_resName = this.m_resNameFinder.getResult();
            resListPicJSON[j].m_givenSize = 500;

        }


        this.m_seledPicTagArr = gdeint.randomNums_ts(18,4); //从18张图片材料中随机选4张进行练习。

        var i:number;
        for(i=0;i<this.m_seledPicTagArr.length;++i) {
            resListPicJSON[i+3] = new gdeint.ResStruct();
            this.m_resNameFinder.setInp(this.m_seledPicTagArr[i].toString());
            resListPicJSON[i+3].m_resName = this.m_resNameFinder.getResult();

            resListPicJSON[i+3].m_givenSize = 500;
        }

        picJSONTask.m_resList = resListPicJSON;
        if(this.m_NoImgMode) {
            picJSONTask.m_proportion = 101;
        }
        else {
            picJSONTask.m_proportion = 30;
        }
        picJSONTask.m_taskName = "picXMLs";
        preloaderUI.addTask(picJSONTask);
        preloaderUI.setNoTaskLeft(true); // 表示需加载的资源已全部添加到列表。

        preloaderUI.startPreload();

    }

    /*
     * 练习所需资源加载完成时触发。
     */ 
    private onPicJSONLoadComplete(/*evt: CPIPreloaderEvent*/): void {
        var tmpLens:Array<CLen> = new Array<CLen>();

        var curTag;

            for(curTag = 0;curTag < 3;++curTag) {
//                console.log("JSON str:"+this.m_retryLensArr[curTag].toJSONStr());
//                tmpLens.push(CLen.fromJsonStr(this.m_retryLensArr[i].toJSONStr()));
                tmpLens.push(this.m_retryLensArr[curTag]);
            }

            for(curTag = 0;curTag < this.m_seledPicTagArr.length;++curTag)
            {
                var strResName: string;

                this.m_resNameFinder.setInp(this.m_seledPicTagArr[curTag].toString());
                strResName = this.m_resNameFinder.getResult();

                var picJsn:any;
                picJsn = this.m_resLoader.getRes(strResName);
                console.log(picJsn);

                var len:number = picJsn.pics.pic.lens.len.length;
                var i:number;
                
                for(i = 0;i < len;++i) {

                    var tmpLen:CLen = new CLen();

                    tmpLen.m_className = "CLen";

                    tmpLen.m_x = parseFloat(picJsn.pics.pic.lens.len[i].x);
                    tmpLen.m_y = parseFloat(picJsn.pics.pic.lens.len[i].y);
                    tmpLen.m_length = parseFloat(picJsn.pics.pic.lens.len[i].length);

                    var tmpHorStr:string;
                    tmpHorStr = picJsn.pics.pic.lens.len[i].hor;
                    if("1" == tmpHorStr) {
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

        if(this.m_NoImgMode) {
            //使用随机图时，需避免长度显示在图外。
            var tmpLens2:Array<CLen>;
            tmpLens2 = new Array<CLen>();
            var i:number;
            for(i=0;i<tmpLens.length;++i) {
                var fixedLen:CLen;
                fixedLen = tmpLens[i];
                if(fixedLen.m_isHor) {
                    while(fixedLen.m_x + fixedLen.m_length > 1024) {
                        fixedLen.m_x -= 200;
                    }
                    while(fixedLen.m_y > 720) {
                        fixedLen.m_y -= 200;
                    }
                }
                else {
                    while(fixedLen.m_x > 1024) {
                        fixedLen.m_x -= 200;
                    }
                    while(fixedLen.m_y + fixedLen.m_length > 720) {
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

        if(this.m_NoImgMode) {
            this.onPicImgLoadComplete();
        }
        else {
            var preloaderUI:IPreloaderUI = this.m_praScene._getParentContainer()._getPreloaderUI();
            preloaderUI.setNoTaskLeft(false);
            preloaderUI.setCompleteListener(this.onPicImgLoadComplete,this);

            var picImgTask:gdeint.CPreloadTask = new gdeint.CPreloadTask();

            var resListPicImg:Array<gdeint.ResStruct> = new Array<gdeint.ResStruct>();

            var i:number;
            for(i=0;i<this.m_seledPicTagArr.length;++i) {
                var tmpImgFileName:string = "" , tmpImgResName:string = "";
                resListPicImg[i] = new gdeint.ResStruct();

                var resName:string;

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
    }

    private onPicImgLoadComplete(/*evt: CPIPreloaderEvent*/): void {
        this.m_preloaderUI.setNextActListener(this.startRunPra , this); //this.startRunPra will be called when scrTouched or * seconds collapse.
    }

    private startRunPra():void {
        this.m_preloaderUI.clearProgress();
        this._getPreloaderUI().hide();

        console.log("OK1");
        this.m_praScene.startNewPra();
        this._getPraScene().show();
    }


    public sendMsgToScene(msgType:string , msgObj:any):any {
        var retObj:any = null;

        return this.m_praScene.sendMsg(msgType , msgObj);
    }

    public _quitPra(): void {
    }

    setQuitHandler(func: Function):void {
    }

    private m_seledPicTagArr: Array<number>; //练习用到的角度。
    private m_praScene: IEyelenPraScene;
    private m_caliDlg: ICaliDlgPlugin;
    private m_praMenu: gdeint.CPraMenu;
    private m_renderFilter: IEyelen3ERenderFilter;

    /*
        父类该方法不符合要求，需要覆盖。
    */
    private getAllPluginsThis():Array<IContainerPlugin> {
        var ret:Array<IContainerPlugin> = new Array<IContainerPlugin>();
        ret[0] = <IContainerPlugin>(this._getAlertDlg());
        ret[1] = this._getConfirmDlg();
        ret[2] = this.m_caliDlg;
        ret[4] = this.m_praMenu;
        ret[3] = this.m_preloaderUI;
        return ret;
    }
    private m_visibilityTempArrThis:Array<boolean>;
    private m_visibilityTempScene:boolean = false;
    /*
        父类该方法不符合要求，需要覆盖。
    */
    public saveVisibleStates():void {
        this.m_visibilityTempArrThis = new Array<boolean>();
        this.m_visibilityTempScene = this.m_praScene.isVisible();
        var plugins:Array<IContainerPlugin> = this.getAllPluginsThis();
        var i:number;
        for(i=0;i<plugins.length;++i) {
            if(null != plugins[i]) {
                this.m_visibilityTempArrThis[i] = plugins[i].isVisible();
            }
        }
    }
    public getVisibleStates():Array<boolean> {
        return this.m_visibilityTempArrThis;
    }

}

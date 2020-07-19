/***********************************************************
* /src/UI/containers/eyelen/CEyelenPraContainer.ts
* 尺眼通使用的显示容器。派生于CUIContainer。
* 注：不能与egret耦合，否则无法单元测试！
*
************************************************************/

class CEyelenPraContainer extends CUIContainer implements IEyelenPraContainer,INotiParent{
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


    /*
        开始一轮新的练习。
    */
    public startNewPra(): void {
        this._getPraScene().hide();

//显示资源预加载界面并加载练习所需资源：
        var preloaderUI:IPreloaderUI = this._getPreloaderUI();

        preloaderUI.show();
        preloaderUI.setCompleteListener(this.onPicXMLLoadComplete,this);

        var picXMLTask:gdeint.CPreloadTask = new gdeint.CPreloadTask();//创建任务对象。
        var resListPicXML:Array<gdeint.ResStruct> = new Array<gdeint.ResStruct>();

        this.m_seledPicTagArr = gdeint.randomNums_ts(18,4); //从18张图片材料中随机选4张进行练习。

        var i:number;
        for(i=0;i<this.m_seledPicTagArr.length;++i) {
            resListPicXML[i] = new gdeint.ResStruct();
            this.m_resNameFinder.setInp(this.m_seledPicTagArr[i].toString());
            resListPicXML[i].m_resName = this.m_resNameFinder.getResult();

            resListPicXML[i].m_givenSize = 500;
        }

        picXMLTask.m_resList = resListPicXML;
        if(this.m_NoImgMode) {
            picXMLTask.m_proportion = 101;
        }
        else {
            picXMLTask.m_proportion = 30;
        }
        picXMLTask.m_taskName = "picXMLs";
        preloaderUI.addTask(picXMLTask);
        preloaderUI.setNoTaskLeft(true); // 表示需加载的资源已全部添加到列表。

        preloaderUI.startPreload();

    }

    /*
     * 练习所需资源加载完成时触发。
     */ 
    private onPicXMLLoadComplete(/*evt: CPIPreloaderEvent*/): void {
        var tmpLens:Array<CLen> = new Array<CLen>();

            var curTag;
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

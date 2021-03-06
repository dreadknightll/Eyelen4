/**
 *
 * /src/UI/scenes/Eyelen/CCommonEyelenPraScene.ts
 * 通用练习场景。简单难度练习场景和困难难度练习场景都从本类派生。 
 *
 */
class CCommonEyelenPraScene extends eui.Component implements IEyelenPraScene,INotiParent{
	public constructor() {
        super();
        this.m_scrMask = new egret.Rectangle();
        this.m_dlgLayer = new egret.DisplayObjectContainer();
        this.m_notiLayer = new egret.DisplayObjectContainer();

        this.m_notiLayerBg = new egret.Shape();
        this.recoverNotiLayerBg();
        this.m_notiLayer.visible = false;
        this.m_notiLayer.addChild(this.m_notiLayerBg);

	}

    public m_scrMask: egret.Rectangle; // 遮罩。防止内容在有效范围外显示。
    protected m_winWidth: number; // 场景宽度。通常填入屏幕宽度。
    protected m_winHeight: number; // 场景高度。通常填入屏幕高度。
    protected m_parentContainer:IEyelenPraContainer;
    protected m_dlgLayer:egret.DisplayObjectContainer;
    protected m_notiLayer:egret.DisplayObjectContainer;
    protected m_notiLayerBg:egret.Shape;
    public m_NoImgMode:boolean = false;
    protected m_curImgResName:string;

    public m_created:boolean = false; //场景是否已完成初始创建。

    /*
     * 正常情况下很多函数应当调用子类的同名函数。若本类的本函数被调用，则表明子类实现有误。
     */ 

    /*
     * 开始一轮新的练习。
     */ 
    public startNewPra(): void {
        window.alert("startNewPra run terribly!");
    }
    
    public setWinWidth(w): void {
        this.m_winWidth = w;
    }

    public setWinHeight(h): void {
        this.m_winHeight = h;
    }

    /*
     * 第一轮练习资源加载完成后创建场景。
     */ 
    public createScene():void
    {
        this.m_scrMask.x = 0;
        this.m_scrMask.y = 0;
        this.m_scrMask.width = this.m_winWidth; 
        this.m_scrMask.height = this.m_winHeight;
        this.mask = this.m_scrMask;
        this.m_created = true;
    }

    public getPM(): ILenPraMachine {
        return null;
    }

    public setLenArr(la:Array<CLen>):void {
        window.alert("Len arr set terribly!!Length:"+la.length);
    }

    public getCurPicTag():number {
        return -1;
    }

    public show():void {
        this.visible = true;
    }

    public hide():void {
        this.visible = false;
    }

    public isVisible():boolean {
        return this.visible;
    }

    public disableScene():void {
        this.m_notiLayer.visible = true;
        this.enabled = false;
    }

    public enableScene():void {
        this.m_notiLayer.visible = false;
        this.enabled = true;
    }

    public _setParentContainer(c:IEyelenPraContainer):void {
        this.m_parentContainer = c;
    }

    public _getParentContainer(): IEyelenPraContainer {
        return this.m_parentContainer;
    }

    public disableForNoti():void {
        this.disableScene();
    }

    public resumeAfterNoti():void {
        this.enableScene();
    }

    public applyFunc(func:any , argArr:Array<any>):void {
        window.alert("applying func!");
    }

    public getDlgLayer():IDivWithEgret {
        return CDiv2EgretDispOCAdapter.from(this.m_dlgLayer);
    }

    public getNotiLayer():IDivWithEgret {
        return CDiv2EgretDispOCAdapter.from(this.m_notiLayer);
    }

    public getParentContainer():IUIContainer {
        window.alert("Error! Illegal way to get parent container!!");
        return null;
    }
    
    protected brightenNotiLayerBgRect(r:gdeint.CRect):void {
        // 让背景变得更灰，只让指定区域亮着。显示某些特殊提示时需调用。
        this.m_notiLayerBg.graphics.clear();

        this.m_notiLayerBg.graphics.beginFill(0xaaaaaa,0.6);
        this.m_notiLayerBg.graphics.drawRect(0,0,CGlobals.g_winWidth,r.m_top);
        this.m_notiLayerBg.graphics.drawRect(0,r.m_top,r.m_left,r.m_height);
        this.m_notiLayerBg.graphics.drawRect(r.m_left+r.m_width,r.m_top,CGlobals.g_winWidth-(r.m_left+r.m_width),r.m_height);
        this.m_notiLayerBg.graphics.drawRect(0,r.m_top+r.m_height,CGlobals.g_winWidth,CGlobals.g_winHeight-(r.m_top+r.m_height));
        this.m_notiLayerBg.graphics.endFill();

    }

    protected recoverNotiLayerBg():void {
        // 让提示显示时场景背景复原（不是背景不变灰），供下次提示用（不是供没提示时）。
        this.m_notiLayerBg.graphics.clear();
        this.m_notiLayerBg.graphics.beginFill(0xaaaaaa,0.4);
        this.m_notiLayerBg.graphics.drawRect(0,0,CGlobals.g_winWidth,CGlobals.g_winHeight);
        this.m_notiLayerBg.graphics.endFill();
    }

    public sendMsg(msgType:string , msgObj:any):any {
        console.log("Error! sendMsg in super classes called as not implemented in sub class!");
        return null;
    }

}

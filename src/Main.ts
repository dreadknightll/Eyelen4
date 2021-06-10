// /src/Main.ts
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2020-present, 梁力.
//  All rights reserved.
//
//////////////////////////////////////////////////////////////////////////////////////
// 宜英（eint或gdeint）是本作者设立的个人品牌。
// 本程序采用北京白鹭公司的白鹭引擎为核心。
// 本程序调用了libGdeint库。libGdeint是本作者开发的共享库，供多套软件调用，命名空间主要是gdeint。
//////////////////////////////////////////////////////////////////////////////////////

/**************************************************
 * 
 * Main类为程序入口类。
 * 
**************************************************/

class CGlobals {
    //需要将全局变量封装到类里，否则发布到一些平台（例如新版的AndroidNative）后会被解析成window.g_???，从而引起错误。
    public static S_WEB:number = 1;
    public static S_NATIVE_ANDROID:number = 2;
    public static S_NATIVE_IOS:number = 3;
    public static S_NATIVE_WP:number = 4;
    public static S_WECHAT:number = 5; // 发布成微信小游戏。另须移除项目里的resoure/pics目录。否则体积太大。

    public static S_BUILD_FOR:number = CGlobals.S_NATIVE_ANDROID;

//Android、iOS的无图模式尚未通过调试，只能使用图片模式！！
    public static S_NO_IMG_MODE:boolean = false; // 无图模式开关。开启后练习材料不显示图片而是显示简单图形，以节省资源。通常用于微信版。无图模式下Pic从本地读取，且不使用img。


//var g_console: egret.TextField = new egret.TextField(); // 调试终端。

    public static g_winWidth: number; // 保存舞台宽度。
    public static g_winHeight: number; // 保存舞台高度。

    public static g_isSndOn:boolean = true; // 声音是否开启。

    public static s_defaultTopSpaceHeight: number = 0; // 顶部空白条的高度。默认：0，iOS：0或25。横竖校准等调试时可考虑增加到300。
    public static g_topSpaceHeight:number = CGlobals.s_defaultTopSpaceHeight;

    public static g_scenePos:gdeint.CPoint; // 此处gdeint为libGdeint使用的命名空间。
    public static g_scale:number = 1; // 有些元素需要根据实际分辨率确定大小、位置等信息，因此需要保存此变量。好处：舞台分辨率提高了也无重新设计exml等界面。

    public static g_praEasyScene:eyelen4.CPraEasyScene; // 简单难度练习场景。
    public static g_praDiffProScene:eyelen4.CPraDiffProScene; // 困难难度专业模式练习场景。
    public static g_praDifficultScene:eyelen4.CPraDifficultScene; // 困难难度传统模式练习场景。

    public static g_resCache:{[index:string]:CHTTPSResStru} = {}; // 用于缓存远程获取的数据。目前主要用在微信版。

    public static g_resLoader:IResFetcher; //资源读取器。用于通过资源名读取已加载到缓存的资源。可灵活选择从本地读取还是通过网络读取。可供显示容器使用。

    public static g_praEasyContainer:CEyelenPraContainer; //简单难度显示容器。该容器除了包含练习场景，还可注入各式各样的提示框、功能对话框等插件。此设计便于代码测试和重用。
    public static g_praDiffProContainer:CEyelenProPraContainer; //困难难度专业模式显示容器。
    public static g_praDifficultContainer:CEyelenPraContainer; //困难难度显示容器。

    public static g_welcomeScene:eyelen4.CWelcomeScene_Eyelen4; // 欢迎屏幕画面。含用户协议、隐私政策、指引等入口。
    public static g_shutdownScr:gdeint.CShutdownScr; // 为了眼睛健康，使用时间超过20分钟后练习自动停止并显示为此画面。
    public static g_mainMenu:eyelen4.CMainMenu; // 主菜单画面。难度选择。


//画面采用分层设计。不同类型的元素应显示在不同的图层上，以维持合理的前后顺序。
    public static g_sceneLayer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer(); // 场景图层。
    public static g_dlgLayerContainer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer(); // 对话框图层。
    public static g_notiLayerContainer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer(); // 提示图层。

    public static g_level: number = 0; // 当前练习的难度。0：未知。1：简单。2：中等。3：困难。

    public static g_pageJumper:gdeint.CPageJumper; // 页面跳转器。在libGdeint里实现。用一个页面跳转器把上面的页面串起来。

    public static g_shutdownTimer:egret.Timer; // 为了眼睛健康，20分钟后自动停止。

    public static g2_tmpScoresJSONObj;
    public static g2_tmpRetryLensJSONStr:string;

    public static g2_tmpWaitingForRetFromNative = false;

}



class Main extends eui.UILayer {

    public constructor () {
    //程序开始运行时会自动执行此构造函数。
    //但由于此时页面元素尚未准备好，页面元素相关的操作须转到createChildren里进行。

        super();
    // 初始化一些全局变量：
        CGlobals.g_scenePos = new gdeint.CPoint();

        CGlobals.g_pageJumper = new gdeint.CPageJumper();
    }

    protected createChildren(): void {
        super.createChildren();

        CGlobals.g_shutdownTimer = new egret.Timer(1000 , 0); // 这里用无限次。实际时间在listener里控制。
        CGlobals.g_shutdownTimer.addEventListener(egret.TimerEvent.TIMER,this.autoShutdown,this);


        //获取舞台宽度和高度：
        CGlobals.g_winWidth = this.stage.stageWidth;
        CGlobals.g_winHeight = this.stage.stageHeight;

        //计算适配屏幕应采用的图形缩放比例和起始显示坐标。新版白鹭引擎下可考虑去掉：
        var scaleX = CGlobals.g_winWidth / 480; // 界面设计使用尺寸：480*800。
        var scaleY = CGlobals.g_winHeight / 800;

        if(scaleX < scaleY) {
            CGlobals.g_scale = scaleX;
            CGlobals.g_scenePos.m_x = 0;
            CGlobals.g_scenePos.m_y = (CGlobals.g_winHeight - 800*CGlobals.g_scale)/2; //宽占满，高居中。
        }
        else {
            CGlobals.g_scale = scaleY;
            CGlobals.g_scenePos.m_x = (CGlobals.g_winWidth - 480*CGlobals.g_scale)/2; //宽居中，高占满。
            CGlobals.g_scenePos.m_y = 0;
        }

        //把三个核心自定义图层添加到舞台：
        this.addChild(CGlobals.g_sceneLayer);
        this.addChild(CGlobals.g_dlgLayerContainer);
        this.addChild(CGlobals.g_notiLayerContainer);

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runProgram().catch(e => {
            console.log(e);
        })
    }

    private async runProgram() {
        await this.loadResource()
        this.createScene();
        const result = await RES.getResAsync("description_json")

    }

    private async loadResource() {
        try {

            const loadingView1 = new LoadingUI_NoUI(); //起始画面的资源加载界面。已自定义。
            this.stage.addChild(loadingView1);
            loadingView1.visible = true;
            await RES.loadConfig("resource/default.res.json", "resource/");
            if(CGlobals.S_BUILD_FOR == CGlobals.S_WECHAT) {
                if(CGlobals.S_NO_IMG_MODE) {
                    await RES.loadConfig("resource/picRes_NoImg.res.json", "resource/");
                    CGlobals.g_resLoader = new CEgretDefaultResLoader();
                }
                else {
                    CGlobals.g_resLoader = new CNetResLoaderWithEgret();
                }
            }
            else {
                if(CGlobals.S_NO_IMG_MODE) {
                    await RES.loadConfig("resource/picRes_NoImg.res.json", "resource/");
                    CGlobals.g_resLoader = new CEgretDefaultResLoader();
                }
                else {
                    await RES.loadConfig("resource/picRes_WebGL.res.json", "resource/");
                    CGlobals.g_resLoader = new CEgretDefaultResLoader();
                }
            }

            await this.loadTheme(); // Theme里定义了exml皮肤和typescript类的对应关系。
            await RES.loadGroup("logo", 0, loadingView1); //logo资源组有宜英logo等资源。
            loadingView1.visible = false;
            this.stage.removeChild(loadingView1);

            const loadingView2: LoadingUI_Eint_V3 = new LoadingUI_Eint_V3(); // 启动时的资源加载画面。该画面为自定义界面。

            loadingView2.setWinSize(CGlobals.g_winWidth,CGlobals.g_winHeight);
            loadingView2.create();

            this.stage.addChild(loadingView2);
            loadingView2.visible = true;

            await RES.loadGroup("eint", 0, loadingView2); //eint资源组有宜英通用的图片音乐等资源。
            await RES.loadGroup("preload", 0, loadingView2); //preload资源组为系统默认资源组。未人工分类的资源都在这里。资源较多。
//            await loadingView2.touch2C(); //资源加载完以后“触摸屏幕继续”。使用Promise控制。
            this.stage.removeChild(loadingView2); //加载界面用完必须尽快移除。否则安卓Native下很可能会黑屏。
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createScene(): void {

        CGlobals.g_welcomeScene = new eyelen4.CWelcomeScene_Eyelen4();
        CGlobals.g_sceneLayer.addChild(CGlobals.g_welcomeScene);
        CGlobals.g_welcomeScene.scaleX = CGlobals.g_scale;
        CGlobals.g_welcomeScene.scaleY = CGlobals.g_scale; //scaleX、scaleY保持相等，确保横竖检验功能正常。
        CGlobals.g_welcomeScene.x = CGlobals.g_scenePos.m_x;
        CGlobals.g_welcomeScene.y = CGlobals.g_scenePos.m_y;

        CGlobals.g_shutdownScr = new gdeint.CShutdownScr();

        CGlobals.g_mainMenu = new eyelen4.CMainMenu();
        CGlobals.g_mainMenu.setTrueWidth(this.stage.stageWidth);
        CGlobals.g_mainMenu.setTrueHeight(this.stage.stageHeight);
        CGlobals.g_mainMenu.visible = false;
        CGlobals.g_mainMenu.width = this.stage.stageWidth;
        CGlobals.g_mainMenu.height = this.stage.stageHeight;
        CGlobals.g_sceneLayer.addChild(CGlobals.g_mainMenu);

        CGlobals.g_praEasyScene = new eyelen4.CPraEasyScene();
        CGlobals.g_praDifficultScene = new eyelen4.CPraDifficultScene();
        CGlobals.g_praDiffProScene = new eyelen4.CPraDiffProScene();

        if(CGlobals.S_NO_IMG_MODE) {
            CGlobals.g_praEasyScene.m_NoImgMode = true;
            CGlobals.g_praDifficultScene.m_NoImgMode = true;
            CGlobals.g_praDiffProScene.m_NoImgMode = true;
        }

        CGlobals.g_dlgLayerContainer.addChild(CGlobals.g_praEasyScene.getDlgLayer().toEgretDispObjContainer());
        CGlobals.g_notiLayerContainer.addChild(CGlobals.g_praEasyScene.getNotiLayer().toEgretDispObjContainer());
        CGlobals.g_dlgLayerContainer.addChild(CGlobals.g_praDifficultScene.getDlgLayer().toEgretDispObjContainer());
        CGlobals.g_notiLayerContainer.addChild(CGlobals.g_praDifficultScene.getNotiLayer().toEgretDispObjContainer());
        CGlobals.g_dlgLayerContainer.addChild(CGlobals.g_praDiffProScene.getDlgLayer().toEgretDispObjContainer());
        CGlobals.g_notiLayerContainer.addChild(CGlobals.g_praDiffProScene.getNotiLayer().toEgretDispObjContainer());

        CGlobals.g_praEasyContainer = new CEyelenPraContainer();

        if (CGlobals.S_NO_IMG_MODE) {
            CGlobals.g_praEasyContainer.m_NoImgMode = true;
        }
        CGlobals.g_praEasyContainer.setResLoader(CGlobals.g_resLoader); // 显示容器里包含一个资源加载器，随时加载资源。

        if(CGlobals.S_BUILD_FOR == CGlobals.S_WECHAT) {
            if(!CGlobals.S_NO_IMG_MODE) {
                CGlobals.g_praEasyContainer.setResNameFinder(new CEyelen4HTTPSResUrlFinder());
            }
        }
        else {
        }

        CGlobals.g_praEasyContainer.setPraScene(CGlobals.g_praEasyScene);

        var cad:gdeint.CAlertPanel_v2 = new gdeint.CAlertPanel_v2();
        cad.setSceneRect(CGlobals.g_scenePos.m_x , CGlobals.g_scenePos.m_y , 480*CGlobals.g_scale , 800*CGlobals.g_scale); // 把主场景的位置和尺寸告诉警告框插件，让其可以自行计算警告框的位置和尺寸。
        CGlobals.g_praEasyContainer.setAlertDlg(cad); // 提示框的创建在Container类以外，这样可以灵活改用各种风格的提示框。

        var cp:gdeint.CConfirmPanel = new gdeint.CConfirmPanel();
        cp.setSceneRect(CGlobals.g_scenePos.m_x , CGlobals.g_scenePos.m_y , 480*CGlobals.g_scale , 800*CGlobals.g_scale);
        CGlobals.g_praEasyContainer.setConfirmDlg(cp);

        var pui:eyelen4.CPreloaderUI = new eyelen4.CPreloaderUI();
        pui.setSceneRect(CGlobals.g_scenePos.m_x , CGlobals.g_scenePos.m_y , 480*CGlobals.g_scale , 800*CGlobals.g_scale);
        pui.hide();
        CGlobals.g_sceneLayer.addChild(pui);
        CGlobals.g_praEasyContainer.setPreloaderUI(pui);

        var cd:eyelen4.CCaliDlg = new eyelen4.CCaliDlg();
        cd.setSceneRect(CGlobals.g_scenePos.m_x , CGlobals.g_scenePos.m_y , 480*CGlobals.g_scale , 800*CGlobals.g_scale);
        cd.hide();
        CGlobals.g_praEasyContainer.setCaliDlg(cd);

        var pm:gdeint.CPraMenu = new gdeint.CPraMenu();
        pm.setSceneRect(CGlobals.g_scenePos.m_x , CGlobals.g_scenePos.m_y , 480*CGlobals.g_scale , 800*CGlobals.g_scale);
        pm.hide();
        CGlobals.g_praEasyContainer.setPraMenu(pm);


        CGlobals.g_praDifficultContainer = new CEyelenPraContainer();
        if(CGlobals.S_BUILD_FOR == CGlobals.S_WECHAT && CGlobals.S_NO_IMG_MODE) {
            CGlobals.g_praDifficultContainer.m_NoImgMode = true;
        }
        CGlobals.g_praDifficultContainer.setResLoader(CGlobals.g_resLoader);
        if(CGlobals.S_BUILD_FOR == CGlobals.S_WECHAT) {
            if(!CGlobals.S_NO_IMG_MODE) {
                CGlobals.g_praDifficultContainer.setResNameFinder(new CEyelen4HTTPSResUrlFinder());
            }
        }

        CGlobals.g_praDifficultContainer.setPraScene(CGlobals.g_praDifficultScene);

        var cad2:gdeint.CAlertPanel_v2 = new gdeint.CAlertPanel_v2();
        cad2.setSceneRect(CGlobals.g_scenePos.m_x , CGlobals.g_scenePos.m_y , 480*CGlobals.g_scale , 800*CGlobals.g_scale);
        CGlobals.g_praDifficultContainer.setAlertDlg(cad2);

        var cp2:gdeint.CConfirmPanel = new gdeint.CConfirmPanel();
        cp2.setSceneRect(CGlobals.g_scenePos.m_x , CGlobals.g_scenePos.m_y , 480*CGlobals.g_scale , 800*CGlobals.g_scale);
        CGlobals.g_praDifficultContainer.setConfirmDlg(cp2);

        var pui2:eyelen4.CPreloaderUI = new eyelen4.CPreloaderUI();
        pui2.setSceneRect(CGlobals.g_scenePos.m_x , CGlobals.g_scenePos.m_y , 480*CGlobals.g_scale , 800*CGlobals.g_scale);
        pui2.hide();
        CGlobals.g_sceneLayer.addChild(pui2);
        CGlobals.g_praDifficultContainer.setPreloaderUI(pui2);

        var cd2:eyelen4.CCaliDlg = new eyelen4.CCaliDlg();
        cd2.setSceneRect(CGlobals.g_scenePos.m_x , CGlobals.g_scenePos.m_y , 480*CGlobals.g_scale , 800*CGlobals.g_scale);
        cd2.hide();
        CGlobals.g_praDifficultContainer.setCaliDlg(cd2);

        var pm2:gdeint.CPraMenu = new gdeint.CPraMenu();
        pm2.setSceneRect(CGlobals.g_scenePos.m_x , CGlobals.g_scenePos.m_y , 480*CGlobals.g_scale , 800*CGlobals.g_scale);
        pm2.hide();
        CGlobals.g_praDifficultContainer.setPraMenu(pm2);


        CGlobals.g_praDiffProContainer = new CEyelenProPraContainer();
        if(CGlobals.S_BUILD_FOR == CGlobals.S_WECHAT && CGlobals.S_NO_IMG_MODE) {
            CGlobals.g_praDiffProContainer.m_NoImgMode = true;
        }
        CGlobals.g_praDiffProContainer.setResLoader(CGlobals.g_resLoader);
        if(CGlobals.S_BUILD_FOR == CGlobals.S_WECHAT) {
            if(!CGlobals.S_NO_IMG_MODE) {
                CGlobals.g_praDiffProContainer.setResNameFinder(new CEyelen4HTTPSResUrlFinder());
            }
        }

        CGlobals.g_praDiffProContainer.setPraScene(CGlobals.g_praDiffProScene);

        var cad2:gdeint.CAlertPanel_v2 = new gdeint.CAlertPanel_v2();
        cad2.setSceneRect(CGlobals.g_scenePos.m_x , CGlobals.g_scenePos.m_y , 480*CGlobals.g_scale , 800*CGlobals.g_scale);
        CGlobals.g_praDiffProContainer.setAlertDlg(cad2);

        var cp2:gdeint.CConfirmPanel = new gdeint.CConfirmPanel();
        cp2.setSceneRect(CGlobals.g_scenePos.m_x , CGlobals.g_scenePos.m_y , 480*CGlobals.g_scale , 800*CGlobals.g_scale);
        CGlobals.g_praDiffProContainer.setConfirmDlg(cp2);

        var pui3:eyelen4.CPreloaderUI = new eyelen4.CPreloaderUI();
        pui3.setSceneRect(CGlobals.g_scenePos.m_x , CGlobals.g_scenePos.m_y , 480*CGlobals.g_scale , 800*CGlobals.g_scale);
        pui3.hide();
        CGlobals.g_sceneLayer.addChild(pui3);
        CGlobals.g_praDiffProContainer.setPreloaderUI(pui3);


        var cd2:eyelen4.CCaliDlg = new eyelen4.CCaliDlg();
        cd2.setSceneRect(CGlobals.g_scenePos.m_x , CGlobals.g_scenePos.m_y , 480*CGlobals.g_scale , 800*CGlobals.g_scale);
        cd2.hide();
        CGlobals.g_praDiffProContainer.setCaliDlg(cd2);

        var pm2:gdeint.CPraMenu = new gdeint.CPraMenu();
        pm2.setSceneRect(CGlobals.g_scenePos.m_x , CGlobals.g_scenePos.m_y , 480*CGlobals.g_scale , 800*CGlobals.g_scale);
        pm2.hide();
        CGlobals.g_praDiffProContainer.setPraMenu(pm2);





        // 一个Page对应一个Scene。
        // 根据需处理事件的差异，部分页面要专门定义Page子类，Container页面有可能需要定义各自的Adapter转成Page，其余页面使用统一的Adapter由eui.Component转Page即可。
        var welcomePage:CWelcomePage_Eyelen4 = new CWelcomePage_Eyelen4();
        welcomePage.m_scene = CGlobals.g_welcomeScene;

        var mainMenuSceneAdapter:CPage2EuiAdapter = new CPage2EuiAdapter();
        mainMenuSceneAdapter.m_adaptee = CGlobals.g_mainMenu;

        var praEasyContainerAdapter:CPage2EyelenPraContainerAdapter = new CPage2EyelenPraContainerAdapter();
        praEasyContainerAdapter.m_adaptee = CGlobals.g_praEasyContainer;

        var praDifficultContainerAdapter:CPage2EyelenPraContainerAdapter = new CPage2EyelenPraContainerAdapter();
        praDifficultContainerAdapter.m_adaptee = CGlobals.g_praDifficultContainer;

        var praDiffProContainerAdapter:CPage2EyelenPraContainerAdapter = new CPage2EyelenPraContainerAdapter();
        praDiffProContainerAdapter.m_adaptee = CGlobals.g_praDiffProContainer;

        var shutdownPageAdapter:CPage2EuiAdapter = new CPage2EuiAdapter();
        shutdownPageAdapter.m_adaptee = CGlobals.g_shutdownScr;

// 把以上场景添加到页面跳转器，方便跳转。
        CGlobals.g_pageJumper.setPage("WelcomeScene" , welcomePage);
        CGlobals.g_pageJumper.setPage("MainMenu" , mainMenuSceneAdapter);
        CGlobals.g_pageJumper.setPage("PraEasyScene" , praEasyContainerAdapter);
        CGlobals.g_pageJumper.setPage("PraDifficultScene" , praDifficultContainerAdapter);
        CGlobals.g_pageJumper.setPage("PraDiffProScene" , praDiffProContainerAdapter);
        CGlobals.g_pageJumper.setPage("ShutdownScr" , shutdownPageAdapter);





        CGlobals.g_shutdownScr.visible = false;
        CGlobals.g_shutdownScr.width = this.stage.stageWidth;
        CGlobals.g_shutdownScr.height = this.stage.stageHeight;
        CGlobals.g_sceneLayer.addChild(CGlobals.g_shutdownScr);

//        g_sceneLayer.addChild(CGlobals.g_console);


        CGlobals.g_praEasyScene.setWinWidth(CGlobals.g_winWidth);
        CGlobals.g_praEasyScene.setWinHeight(CGlobals.g_winHeight);
        CGlobals.g_praEasyScene.hide();
        CGlobals.g_sceneLayer.addChild(CGlobals.g_praEasyScene);

        CGlobals.g_praDifficultScene.setWinWidth(CGlobals.g_winWidth);
        CGlobals.g_praDifficultScene.setWinHeight(CGlobals.g_winHeight);
        CGlobals.g_praDifficultScene.hide();
        CGlobals.g_sceneLayer.addChild(CGlobals.g_praDifficultScene); // 把场景添加到场景显示层。

        CGlobals.g_praDiffProScene.setWinWidth(CGlobals.g_winWidth);
        CGlobals.g_praDiffProScene.setWinHeight(CGlobals.g_winHeight);
        CGlobals.g_praDiffProScene.hide();
        CGlobals.g_sceneLayer.addChild(CGlobals.g_praDiffProScene); // 把场景添加到场景显示层。





        egret.ExternalInterface.addCallback("ret_fetchIsSndOn" , function(msg) {
            console.log("ret_fetchIsSndOn,msg:"+msg);
            if("1"==msg) {
                CGlobals.g_isSndOn = true;
            }
            else if("0"==msg) {
                CGlobals.g_isSndOn = false;
            }
            //else do not change g_isSndOn.

        });

        egret.ExternalInterface.addCallback("ret_fetchDiffProHisScore" , function(msg) {
            console.log("ret_fetchDiffProHisScore:"+msg);

            CGlobals.g2_tmpScoresJSONObj = JSON.parse(msg);
            console.log("g2_tmpScoresJSONObj set!");
            console.log( "Size is "+CGlobals.g2_tmpScoresJSONObj.Scores.length);

        });

        egret.ExternalInterface.addCallback("ret_fetchRetryLens" , function(msg) {

            CGlobals.g2_tmpRetryLensJSONStr = msg;
            console.log("RetryLens sent to ts:"+CGlobals.g2_tmpRetryLensJSONStr);
            CGlobals.g2_tmpWaitingForRetFromNative = false;

        });

        egret.ExternalInterface.addCallback("ret_fetchTopSpaceHeight" , function(msg) {
            var tmpTopSpaceHeight = parseInt(msg);
            if(!isNaN(tmpTopSpaceHeight)) {
                CGlobals.g_topSpaceHeight = tmpTopSpaceHeight;
            }
			CGlobals.g_praEasyScene.m_wm.setTopSpaceHeight(CGlobals.g_topSpaceHeight);
			CGlobals.g_praDiffProScene.m_wm.setTopSpaceHeight(CGlobals.g_topSpaceHeight);
			CGlobals.g_praDifficultScene.m_wm.setTopSpaceHeight(CGlobals.g_topSpaceHeight);

			if(CGlobals.g_praEasyScene.m_created) {
				CGlobals.g_praEasyScene.refreshScene();
			}

			if(CGlobals.g_praDiffProScene.m_created) {
				CGlobals.g_praDiffProScene.refreshScene();
			}

			if(CGlobals.g_praDifficultScene.m_created) {
				CGlobals.g_praDifficultScene.refreshScene();
			}
        });

    }

    public autoShutdown() {

        if(CGlobals.g_shutdownTimer.currentCount >= 1200) //1200秒，即20分钟。
        {
            CGlobals.g_pageJumper.gotoPage("ShutdownScr",null);
        }
    }
}

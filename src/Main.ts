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


const S_WEB:number = 1;
const S_NATIVE_ANDROID:number = 2;
const S_NATIVE_IOS:number = 3;
const S_NATIVE_WP:number = 4;
const S_WECHAT:number = 5; // 发布成微信小游戏。另须移除项目里的resoure/pics目录。否则体积太大。

const S_BUILD_FOR:number = S_NATIVE_ANDROID;

//Android、iOS的无图模式尚未通过调试，只能使用图片模式！！
const S_NO_IMG_MODE:boolean = false; // 无图模式开关。开启后练习材料不显示图片而是显示简单图形，以节省资源。通常用于微信版。无图模式下Pic从本地读取，且不使用img。


var g_console: egret.TextField = new egret.TextField(); // 调试终端。

var g_winWidth: number; // 保存舞台宽度。
var g_winHeight: number; // 保存舞台高度。

var g_isSndOn:boolean = true; // 声音是否开启。

var s_topSpaceHeight: number = 0; // 顶部空白条的高度。默认：0，iOS：0或25。横竖校准等调试时可考虑增加到300。

if(S_BUILD_FOR == S_NATIVE_ANDROID) {
    s_topSpaceHeight = 0;
}

var g_scenePos:gdeint.CPoint; // 此处gdeint为libGdeint使用的命名空间。
var g_scale:number = 1; // 有些元素需要根据实际分辨率确定大小、位置等信息，因此需要保存此变量。好处：舞台分辨率提高了也无重新设计exml等界面。

var g_praEasyScene:eyelen4.CPraEasyScene; // 简单难度练习场景。
var g_praDiffProScene:eyelen4.CPraDiffProScene; // 困难难度专业模式练习场景。
var g_praDifficultScene:eyelen4.CPraDifficultScene; // 困难难度传统模式练习场景。

var g_resCache:{[index:string]:CHTTPSResStru} = {}; // 用于缓存远程获取的数据。目前主要用在微信版。

var g_resLoader:IResFetcher; //资源读取器。用于通过资源名读取已加载到缓存的资源。可灵活选择从本地读取还是通过网络读取。可供显示容器使用。

var g_praEasyContainer:CEyelenPraContainer; //简单难度显示容器。该容器除了包含练习场景，还可注入各式各样的提示框、功能对话框等插件。此设计便于代码测试和重用。
var g_praDiffProContainer:CEyelenPraContainer; //困难难度专业模式显示容器。
var g_praDifficultContainer:CEyelenPraContainer; //困难难度显示容器。

var g_welcomeScene:eyelen4.CWelcomeScene_Eyelen4; // 欢迎屏幕画面。含用户协议、隐私政策、指引等入口。
var g_shutdownScr:gdeint.CShutdownScr; // 为了眼睛健康，使用时间超过20分钟后练习自动停止并显示为此画面。
var g_mainMenu:eyelen4.CMainMenu; // 主菜单画面。难度选择。

//画面采用分层设计。不同类型的元素应显示在不同的图层上，以维持合理的前后顺序。
var g_sceneLayer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer(); // 场景图层。
var g_dlgLayerContainer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer(); // 对话框图层。
var g_notiLayerContainer:egret.DisplayObjectContainer = new egret.DisplayObjectContainer(); // 提示图层。

var g_level: number = 0; // 当前练习的难度。0：未知。1：简单。2：中等。3：困难。

var g_pageJumper:gdeint.CPageJumper; // 页面跳转器。在libGdeint里实现。用一个页面跳转器把上面的页面串起来。

var g_shutdownTimer:egret.Timer; // 为了眼睛健康，20分钟后自动停止。

class Main extends eui.UILayer {

    public constructor () {
    //程序开始运行时会自动执行此构造函数。
    //但由于此时页面元素尚未准备好，页面元素相关的操作须转到createChildren里进行。

        super();
    // 初始化一些全局变量：
        g_scenePos = new gdeint.CPoint();

        g_console.size = 24;
        g_console.x = 80;
        g_console.y = 60;
        g_console.width = 600;
        g_console.height = 800;
        g_console.textColor = 0xFF0000;

        g_pageJumper = new gdeint.CPageJumper();
    }

    protected createChildren(): void {
        super.createChildren();

        g_shutdownTimer = new egret.Timer(1000 , 0); // 这里用无限次。实际时间在listener里控制。
        g_shutdownTimer.addEventListener(egret.TimerEvent.TIMER,this.autoShutdown,this);


        //获取舞台宽度和高度：
        g_winWidth = this.stage.stageWidth;
        g_winHeight = this.stage.stageHeight;

        //计算适配屏幕应采用的图形缩放比例和起始显示坐标。新版白鹭引擎下可考虑去掉：
        var scaleX = g_winWidth / 480; // 界面设计使用尺寸：480*800。
        var scaleY = g_winHeight / 800;

        if(scaleX < scaleY) {
            g_scale = scaleX;
            g_scenePos.m_x = 0;
            g_scenePos.m_y = (g_winHeight - 800*g_scale)/2; //宽占满，高居中。
        }
        else {
            g_scale = scaleY;
            g_scenePos.m_x = (g_winWidth - 480*g_scale)/2; //宽居中，高占满。
            g_scenePos.m_y = 0;
        }

        //把三个核心自定义图层添加到舞台：
        this.addChild(g_sceneLayer);
        this.addChild(g_dlgLayerContainer);
        this.addChild(g_notiLayerContainer);

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
            if(S_BUILD_FOR == S_WECHAT) {
                if(S_NO_IMG_MODE) {
                    await RES.loadConfig("resource/picRes_NoImg.res.json", "resource/");
                    g_resLoader = new CEgretDefaultResLoader();
                }
                else {
                    g_resLoader = new CNetResLoaderWithEgret();
                }
            }
            else {
                if(S_NO_IMG_MODE) {
                    await RES.loadConfig("resource/picRes_NoImg.res.json", "resource/");
                    g_resLoader = new CEgretDefaultResLoader();
                }
                else {
                    await RES.loadConfig("resource/picRes_WebGL.res.json", "resource/");
                    g_resLoader = new CEgretDefaultResLoader();
                }
            }

            await this.loadTheme(); // Theme里定义了exml皮肤和typescript类的对应关系。
            await RES.loadGroup("logo", 0, loadingView1); //logo资源组有宜英logo等资源。
            loadingView1.visible = false;
            this.stage.removeChild(loadingView1);

            const loadingView2: LoadingUI_Eint_V3 = new LoadingUI_Eint_V3(); // 启动时的资源加载画面。该画面为自定义界面。

            loadingView2.setWinSize(g_winWidth,g_winHeight);
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

        g_welcomeScene = new eyelen4.CWelcomeScene_Eyelen4();
        g_sceneLayer.addChild(g_welcomeScene);
        g_welcomeScene.scaleX = g_scale;
        g_welcomeScene.scaleY = g_scale; //scaleX、scaleY保持相等，确保横竖检验功能正常。
        g_welcomeScene.x = g_scenePos.m_x;
        g_welcomeScene.y = g_scenePos.m_y;

        g_shutdownScr = new gdeint.CShutdownScr();

        g_mainMenu = new eyelen4.CMainMenu();
        g_mainMenu.setTrueWidth(this.stage.stageWidth);
        g_mainMenu.setTrueHeight(this.stage.stageHeight);
        g_mainMenu.visible = false;
        g_mainMenu.width = this.stage.stageWidth;
        g_mainMenu.height = this.stage.stageHeight;
        g_sceneLayer.addChild(g_mainMenu);

        g_praEasyScene = new eyelen4.CPraEasyScene();
        g_praDifficultScene = new eyelen4.CPraDifficultScene();
        g_praDiffProScene = new eyelen4.CPraDiffProScene();

        if(S_NO_IMG_MODE) {
            g_praEasyScene.m_NoImgMode = true;
            g_praDifficultScene.m_NoImgMode = true;
            g_praDiffProScene.m_NoImgMode = true;
        }

        g_dlgLayerContainer.addChild(g_praEasyScene.getDlgLayer().toEgretDispObjContainer());
        g_notiLayerContainer.addChild(g_praEasyScene.getNotiLayer().toEgretDispObjContainer());
        g_dlgLayerContainer.addChild(g_praDifficultScene.getDlgLayer().toEgretDispObjContainer());
        g_notiLayerContainer.addChild(g_praDifficultScene.getNotiLayer().toEgretDispObjContainer());
        g_dlgLayerContainer.addChild(g_praDiffProScene.getDlgLayer().toEgretDispObjContainer());
        g_notiLayerContainer.addChild(g_praDiffProScene.getNotiLayer().toEgretDispObjContainer());

        g_praEasyContainer = new CEyelenPraContainer();

        if (S_NO_IMG_MODE) {
            g_praEasyContainer.m_NoImgMode = true;
        }
        g_praEasyContainer.setResLoader(g_resLoader); // 显示容器里包含一个资源加载器，随时加载资源。

        if(S_BUILD_FOR == S_WECHAT) {
            if(!S_NO_IMG_MODE) {
                g_praEasyContainer.setResNameFinder(new CEyelen4HTTPSResUrlFinder());
            }
        }
        else {
        }

        g_praEasyContainer.setPraScene(g_praEasyScene);

        var cad:gdeint.CAlertPanel = new gdeint.CAlertPanel();
        cad.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale); // 把主场景的位置和尺寸告诉警告框插件，让其可以自行计算警告框的位置和尺寸。
        g_praEasyContainer.setAlertDlg(cad); // 提示框的创建在Container类以外，这样可以灵活改用各种风格的提示框。

        var cp:gdeint.CConfirmPanel = new gdeint.CConfirmPanel();
        cp.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale);
        g_praEasyContainer.setConfirmDlg(cp);

        var pui:eyelen4.CPreloaderUI = new eyelen4.CPreloaderUI();
        pui.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale);
        pui.hide();
        g_sceneLayer.addChild(pui);
        g_praEasyContainer.setPreloaderUI(pui);

        var cd:eyelen4.CCaliDlg = new eyelen4.CCaliDlg();
        cd.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale);
        cd.hide();
        g_praEasyContainer.setCaliDlg(cd);

        var pm:gdeint.CPraMenu = new gdeint.CPraMenu();
        pm.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale);
        pm.hide();
        g_praEasyContainer.setPraMenu(pm);


        g_praDifficultContainer = new CEyelenPraContainer();
        if(S_BUILD_FOR == S_WECHAT && S_NO_IMG_MODE) {
            g_praDifficultContainer.m_NoImgMode = true;
        }
        g_praDifficultContainer.setResLoader(g_resLoader);
        if(S_BUILD_FOR == S_WECHAT) {
            if(!S_NO_IMG_MODE) {
                g_praDifficultContainer.setResNameFinder(new CEyelen4HTTPSResUrlFinder());
            }
        }

        g_praDifficultContainer.setPraScene(g_praDifficultScene);

        var cad2:gdeint.CAlertPanel = new gdeint.CAlertPanel();
        cad2.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale);
        g_praDifficultContainer.setAlertDlg(cad2);

        var cp2:gdeint.CConfirmPanel = new gdeint.CConfirmPanel();
        cp2.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale);
        g_praDifficultContainer.setConfirmDlg(cp2);

        var pui2:eyelen4.CPreloaderUI = new eyelen4.CPreloaderUI();
        pui2.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale);
        pui2.hide();
        g_sceneLayer.addChild(pui2);
        g_praDifficultContainer.setPreloaderUI(pui2);

        var cd2:eyelen4.CCaliDlg = new eyelen4.CCaliDlg();
        cd2.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale);
        cd2.hide();
        g_praDifficultContainer.setCaliDlg(cd2);

        var pm2:gdeint.CPraMenu = new gdeint.CPraMenu();
        pm2.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale);
        pm2.hide();
        g_praDifficultContainer.setPraMenu(pm2);


        g_praDiffProContainer = new CEyelenPraContainer();
        if(S_BUILD_FOR == S_WECHAT && S_NO_IMG_MODE) {
            g_praDiffProContainer.m_NoImgMode = true;
        }
        g_praDiffProContainer.setResLoader(g_resLoader);
        if(S_BUILD_FOR == S_WECHAT) {
            if(!S_NO_IMG_MODE) {
                g_praDiffProContainer.setResNameFinder(new CEyelen4HTTPSResUrlFinder());
            }
        }

        g_praDiffProContainer.setPraScene(g_praDiffProScene);

        var cad2:gdeint.CAlertPanel = new gdeint.CAlertPanel();
        cad2.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale);
        g_praDiffProContainer.setAlertDlg(cad2);

        var cp2:gdeint.CConfirmPanel = new gdeint.CConfirmPanel();
        cp2.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale);
        g_praDiffProContainer.setConfirmDlg(cp2);

        var pui3:eyelen4.CPreloaderUI = new eyelen4.CPreloaderUI();
        pui3.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale);
        pui3.hide();
        g_sceneLayer.addChild(pui3);
        g_praDiffProContainer.setPreloaderUI(pui3);


        var cd2:eyelen4.CCaliDlg = new eyelen4.CCaliDlg();
        cd2.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale);
        cd2.hide();
        g_praDiffProContainer.setCaliDlg(cd2);

        var pm2:gdeint.CPraMenu = new gdeint.CPraMenu();
        pm2.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale);
        pm2.hide();
        g_praDiffProContainer.setPraMenu(pm2);





        // 一个Page对应一个Scene。
        // 根据需处理事件的差异，部分页面要专门定义Page子类，Container页面有可能需要定义各自的Adapter转成Page，其余页面使用统一的Adapter由eui.Component转Page即可。
        var welcomePage:CWelcomePage_Eyelen4 = new CWelcomePage_Eyelen4();
        welcomePage.m_scene = g_welcomeScene;

        var mainMenuSceneAdapter:CPage2EuiAdapter = new CPage2EuiAdapter();
        mainMenuSceneAdapter.m_adaptee = g_mainMenu;

        var praEasyContainerAdapter:CPage2EyelenPraContainerAdapter = new CPage2EyelenPraContainerAdapter();
        praEasyContainerAdapter.m_adaptee = g_praEasyContainer;

        var praDifficultContainerAdapter:CPage2EyelenPraContainerAdapter = new CPage2EyelenPraContainerAdapter();
        praDifficultContainerAdapter.m_adaptee = g_praDifficultContainer;

        var praDiffProContainerAdapter:CPage2EyelenPraContainerAdapter = new CPage2EyelenPraContainerAdapter();
        praDiffProContainerAdapter.m_adaptee = g_praDiffProContainer;

        var shutdownPageAdapter:CPage2EuiAdapter = new CPage2EuiAdapter();
        shutdownPageAdapter.m_adaptee = g_shutdownScr;

// 把以上场景添加到页面跳转器，方便跳转。
        g_pageJumper.setPage("WelcomeScene" , welcomePage);
        g_pageJumper.setPage("MainMenu" , mainMenuSceneAdapter);
        g_pageJumper.setPage("PraEasyScene" , praEasyContainerAdapter);
        g_pageJumper.setPage("PraDifficultScene" , praDifficultContainerAdapter);
        g_pageJumper.setPage("PraDiffProScene" , praDiffProContainerAdapter);
        g_pageJumper.setPage("ShutdownScr" , shutdownPageAdapter);





        g_shutdownScr.visible = false;
        g_shutdownScr.width = this.stage.stageWidth;
        g_shutdownScr.height = this.stage.stageHeight;
        g_sceneLayer.addChild(g_shutdownScr);

        g_sceneLayer.addChild(g_console);


        g_praEasyScene.setWinWidth(g_winWidth);
        g_praEasyScene.setWinHeight(g_winHeight);
        g_praEasyScene.hide();
        g_sceneLayer.addChild(g_praEasyScene);

        g_praDifficultScene.setWinWidth(g_winWidth);
        g_praDifficultScene.setWinHeight(g_winHeight);
        g_praDifficultScene.hide();
        g_sceneLayer.addChild(g_praDifficultScene); // 把场景添加到场景显示层。

        g_praDiffProScene.setWinWidth(g_winWidth);
        g_praDiffProScene.setWinHeight(g_winHeight);
        g_praDiffProScene.hide();
        g_sceneLayer.addChild(g_praDiffProScene); // 把场景添加到场景显示层。





        egret.ExternalInterface.addCallback("ret_fetchIsSndOn" , function(msg) {
            console.log("ret_fetchIsSndOn,msg:"+msg);
            if("1"==msg) {
                g_isSndOn = true;
            }
            else if("0"==msg) {
                g_isSndOn = false;
            }
            //else do not change g_isSndOn.

        });

    }

    public autoShutdown() {

        if(g_shutdownTimer.currentCount >= 1200) //1200秒，即20分钟。
        {
            g_pageJumper.gotoPage("ShutdownScr",null);
        }
    }
}

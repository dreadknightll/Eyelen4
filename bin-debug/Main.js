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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**************************************************
 *
 * Main类为程序入口类。
 *
**************************************************/
var CGlobals = (function () {
    function CGlobals() {
    }
    //需要将全局变量封装到类里，否则发布到一些平台（例如新版的AndroidNative）后会被解析成window.g_???，从而引起错误。
    CGlobals.S_WEB = 1;
    CGlobals.S_NATIVE_ANDROID = 2;
    CGlobals.S_NATIVE_IOS = 3;
    CGlobals.S_NATIVE_WP = 4;
    CGlobals.S_WECHAT = 5; // 发布成微信小游戏。另须移除项目里的resoure/pics目录。否则体积太大。
    CGlobals.S_BUILD_FOR = CGlobals.S_NATIVE_ANDROID;
    //Android、iOS的无图模式尚未通过调试，只能使用图片模式！！
    CGlobals.S_NO_IMG_MODE = false; // 无图模式开关。开启后练习材料不显示图片而是显示简单图形，以节省资源。通常用于微信版。无图模式下Pic从本地读取，且不使用img。
    CGlobals.g_isSndOn = true; // 声音是否开启。
    CGlobals.s_defaultTopSpaceHeight = 0; // 顶部空白条的高度。默认：0，iOS：0或25。横竖校准等调试时可考虑增加到300。
    CGlobals.g_topSpaceHeight = CGlobals.s_defaultTopSpaceHeight;
    CGlobals.g_scale = 1; // 有些元素需要根据实际分辨率确定大小、位置等信息，因此需要保存此变量。好处：舞台分辨率提高了也无重新设计exml等界面。
    CGlobals.g_resCache = {}; // 用于缓存远程获取的数据。目前主要用在微信版。
    //画面采用分层设计。不同类型的元素应显示在不同的图层上，以维持合理的前后顺序。
    CGlobals.g_sceneLayer = new egret.DisplayObjectContainer(); // 场景图层。
    CGlobals.g_dlgLayerContainer = new egret.DisplayObjectContainer(); // 对话框图层。
    CGlobals.g_notiLayerContainer = new egret.DisplayObjectContainer(); // 提示图层。
    CGlobals.g_level = 0; // 当前练习的难度。0：未知。1：简单。2：中等。3：困难。
    CGlobals.g2_tmpWaitingForRetFromNative = false;
    return CGlobals;
}());
__reflect(CGlobals.prototype, "CGlobals");
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        //程序开始运行时会自动执行此构造函数。
        //但由于此时页面元素尚未准备好，页面元素相关的操作须转到createChildren里进行。
        var _this = _super.call(this) || this;
        // 初始化一些全局变量：
        CGlobals.g_scenePos = new gdeint.CPoint();
        CGlobals.g_pageJumper = new gdeint.CPageJumper();
        return _this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        CGlobals.g_shutdownTimer = new egret.Timer(1000, 0); // 这里用无限次。实际时间在listener里控制。
        CGlobals.g_shutdownTimer.addEventListener(egret.TimerEvent.TIMER, this.autoShutdown, this);
        //获取舞台宽度和高度：
        CGlobals.g_winWidth = this.stage.stageWidth;
        CGlobals.g_winHeight = this.stage.stageHeight;
        //计算适配屏幕应采用的图形缩放比例和起始显示坐标。新版白鹭引擎下可考虑去掉：
        var scaleX = CGlobals.g_winWidth / 480; // 界面设计使用尺寸：480*800。
        var scaleY = CGlobals.g_winHeight / 800;
        if (scaleX < scaleY) {
            CGlobals.g_scale = scaleX;
            CGlobals.g_scenePos.m_x = 0;
            CGlobals.g_scenePos.m_y = (CGlobals.g_winHeight - 800 * CGlobals.g_scale) / 2; //宽占满，高居中。
        }
        else {
            CGlobals.g_scale = scaleY;
            CGlobals.g_scenePos.m_x = (CGlobals.g_winWidth - 480 * CGlobals.g_scale) / 2; //宽居中，高占满。
            CGlobals.g_scenePos.m_y = 0;
        }
        //把三个核心自定义图层添加到舞台：
        this.addChild(CGlobals.g_sceneLayer);
        this.addChild(CGlobals.g_dlgLayerContainer);
        this.addChild(CGlobals.g_notiLayerContainer);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runProgram().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runProgram = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView1, loadingView2, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 14, , 15]);
                        loadingView1 = new LoadingUI_NoUI();
                        this.stage.addChild(loadingView1);
                        loadingView1.visible = true;
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        if (!(CGlobals.S_BUILD_FOR == CGlobals.S_WECHAT)) return [3 /*break*/, 5];
                        if (!CGlobals.S_NO_IMG_MODE) return [3 /*break*/, 3];
                        return [4 /*yield*/, RES.loadConfig("resource/picRes_NoImg.res.json", "resource/")];
                    case 2:
                        _a.sent();
                        CGlobals.g_resLoader = new CEgretDefaultResLoader();
                        return [3 /*break*/, 4];
                    case 3:
                        CGlobals.g_resLoader = new CNetResLoaderWithEgret();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 9];
                    case 5:
                        if (!CGlobals.S_NO_IMG_MODE) return [3 /*break*/, 7];
                        return [4 /*yield*/, RES.loadConfig("resource/picRes_NoImg.res.json", "resource/")];
                    case 6:
                        _a.sent();
                        CGlobals.g_resLoader = new CEgretDefaultResLoader();
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, RES.loadConfig("resource/picRes_WebGL.res.json", "resource/")];
                    case 8:
                        _a.sent();
                        CGlobals.g_resLoader = new CEgretDefaultResLoader();
                        _a.label = 9;
                    case 9: return [4 /*yield*/, this.loadTheme()];
                    case 10:
                        _a.sent(); // Theme里定义了exml皮肤和typescript类的对应关系。
                        return [4 /*yield*/, RES.loadGroup("logo", 0, loadingView1)];
                    case 11:
                        _a.sent(); //logo资源组有宜英logo等资源。
                        loadingView1.visible = false;
                        this.stage.removeChild(loadingView1);
                        loadingView2 = new LoadingUI_Eint_V3();
                        loadingView2.setWinSize(CGlobals.g_winWidth, CGlobals.g_winHeight);
                        loadingView2.create();
                        this.stage.addChild(loadingView2);
                        loadingView2.visible = true;
                        return [4 /*yield*/, RES.loadGroup("eint", 0, loadingView2)];
                    case 12:
                        _a.sent(); //eint资源组有宜英通用的图片音乐等资源。
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView2)];
                    case 13:
                        _a.sent(); //preload资源组为系统默认资源组。未人工分类的资源都在这里。资源较多。
                        //            await loadingView2.touch2C(); //资源加载完以后“触摸屏幕继续”。使用Promise控制。
                        this.stage.removeChild(loadingView2); //加载界面用完必须尽快移除。否则安卓Native下很可能会黑屏。
                        return [3 /*break*/, 15];
                    case 14:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 15];
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createScene = function () {
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
        if (CGlobals.S_NO_IMG_MODE) {
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
        if (CGlobals.S_BUILD_FOR == CGlobals.S_WECHAT) {
            if (!CGlobals.S_NO_IMG_MODE) {
                CGlobals.g_praEasyContainer.setResNameFinder(new CEyelen4HTTPSResUrlFinder());
            }
        }
        else {
        }
        CGlobals.g_praEasyContainer.setPraScene(CGlobals.g_praEasyScene);
        var cad = new gdeint.CAlertPanel_v2();
        cad.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale); // 把主场景的位置和尺寸告诉警告框插件，让其可以自行计算警告框的位置和尺寸。
        CGlobals.g_praEasyContainer.setAlertDlg(cad); // 提示框的创建在Container类以外，这样可以灵活改用各种风格的提示框。
        var cp = new gdeint.CConfirmPanel();
        cp.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        CGlobals.g_praEasyContainer.setConfirmDlg(cp);
        var pui = new eyelen4.CPreloaderUI();
        pui.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        pui.hide();
        CGlobals.g_sceneLayer.addChild(pui);
        CGlobals.g_praEasyContainer.setPreloaderUI(pui);
        var cd = new eyelen4.CCaliDlg();
        cd.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        cd.hide();
        CGlobals.g_praEasyContainer.setCaliDlg(cd);
        var pm = new gdeint.CPraMenu();
        pm.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        pm.hide();
        CGlobals.g_praEasyContainer.setPraMenu(pm);
        CGlobals.g_praDifficultContainer = new CEyelenPraContainer();
        if (CGlobals.S_BUILD_FOR == CGlobals.S_WECHAT && CGlobals.S_NO_IMG_MODE) {
            CGlobals.g_praDifficultContainer.m_NoImgMode = true;
        }
        CGlobals.g_praDifficultContainer.setResLoader(CGlobals.g_resLoader);
        if (CGlobals.S_BUILD_FOR == CGlobals.S_WECHAT) {
            if (!CGlobals.S_NO_IMG_MODE) {
                CGlobals.g_praDifficultContainer.setResNameFinder(new CEyelen4HTTPSResUrlFinder());
            }
        }
        CGlobals.g_praDifficultContainer.setPraScene(CGlobals.g_praDifficultScene);
        var cad2 = new gdeint.CAlertPanel_v2();
        cad2.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        CGlobals.g_praDifficultContainer.setAlertDlg(cad2);
        var cp2 = new gdeint.CConfirmPanel();
        cp2.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        CGlobals.g_praDifficultContainer.setConfirmDlg(cp2);
        var pui2 = new eyelen4.CPreloaderUI();
        pui2.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        pui2.hide();
        CGlobals.g_sceneLayer.addChild(pui2);
        CGlobals.g_praDifficultContainer.setPreloaderUI(pui2);
        var cd2 = new eyelen4.CCaliDlg();
        cd2.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        cd2.hide();
        CGlobals.g_praDifficultContainer.setCaliDlg(cd2);
        var pm2 = new gdeint.CPraMenu();
        pm2.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        pm2.hide();
        CGlobals.g_praDifficultContainer.setPraMenu(pm2);
        CGlobals.g_praDiffProContainer = new CEyelenProPraContainer();
        if (CGlobals.S_BUILD_FOR == CGlobals.S_WECHAT && CGlobals.S_NO_IMG_MODE) {
            CGlobals.g_praDiffProContainer.m_NoImgMode = true;
        }
        CGlobals.g_praDiffProContainer.setResLoader(CGlobals.g_resLoader);
        if (CGlobals.S_BUILD_FOR == CGlobals.S_WECHAT) {
            if (!CGlobals.S_NO_IMG_MODE) {
                CGlobals.g_praDiffProContainer.setResNameFinder(new CEyelen4HTTPSResUrlFinder());
            }
        }
        CGlobals.g_praDiffProContainer.setPraScene(CGlobals.g_praDiffProScene);
        var cad2 = new gdeint.CAlertPanel_v2();
        cad2.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        CGlobals.g_praDiffProContainer.setAlertDlg(cad2);
        var cp2 = new gdeint.CConfirmPanel();
        cp2.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        CGlobals.g_praDiffProContainer.setConfirmDlg(cp2);
        var pui3 = new eyelen4.CPreloaderUI();
        pui3.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        pui3.hide();
        CGlobals.g_sceneLayer.addChild(pui3);
        CGlobals.g_praDiffProContainer.setPreloaderUI(pui3);
        var cd2 = new eyelen4.CCaliDlg();
        cd2.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        cd2.hide();
        CGlobals.g_praDiffProContainer.setCaliDlg(cd2);
        var pm2 = new gdeint.CPraMenu();
        pm2.setSceneRect(CGlobals.g_scenePos.m_x, CGlobals.g_scenePos.m_y, 480 * CGlobals.g_scale, 800 * CGlobals.g_scale);
        pm2.hide();
        CGlobals.g_praDiffProContainer.setPraMenu(pm2);
        // 一个Page对应一个Scene。
        // 根据需处理事件的差异，部分页面要专门定义Page子类，Container页面有可能需要定义各自的Adapter转成Page，其余页面使用统一的Adapter由eui.Component转Page即可。
        var welcomePage = new CWelcomePage_Eyelen4();
        welcomePage.m_scene = CGlobals.g_welcomeScene;
        var mainMenuSceneAdapter = new CPage2EuiAdapter();
        mainMenuSceneAdapter.m_adaptee = CGlobals.g_mainMenu;
        var praEasyContainerAdapter = new CPage2EyelenPraContainerAdapter();
        praEasyContainerAdapter.m_adaptee = CGlobals.g_praEasyContainer;
        var praDifficultContainerAdapter = new CPage2EyelenPraContainerAdapter();
        praDifficultContainerAdapter.m_adaptee = CGlobals.g_praDifficultContainer;
        var praDiffProContainerAdapter = new CPage2EyelenPraContainerAdapter();
        praDiffProContainerAdapter.m_adaptee = CGlobals.g_praDiffProContainer;
        var shutdownPageAdapter = new CPage2EuiAdapter();
        shutdownPageAdapter.m_adaptee = CGlobals.g_shutdownScr;
        // 把以上场景添加到页面跳转器，方便跳转。
        CGlobals.g_pageJumper.setPage("WelcomeScene", welcomePage);
        CGlobals.g_pageJumper.setPage("MainMenu", mainMenuSceneAdapter);
        CGlobals.g_pageJumper.setPage("PraEasyScene", praEasyContainerAdapter);
        CGlobals.g_pageJumper.setPage("PraDifficultScene", praDifficultContainerAdapter);
        CGlobals.g_pageJumper.setPage("PraDiffProScene", praDiffProContainerAdapter);
        CGlobals.g_pageJumper.setPage("ShutdownScr", shutdownPageAdapter);
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
        egret.ExternalInterface.addCallback("ret_fetchIsSndOn", function (msg) {
            console.log("ret_fetchIsSndOn,msg:" + msg);
            if ("1" == msg) {
                CGlobals.g_isSndOn = true;
            }
            else if ("0" == msg) {
                CGlobals.g_isSndOn = false;
            }
            //else do not change g_isSndOn.
        });
        egret.ExternalInterface.addCallback("ret_fetchDiffProHisScore", function (msg) {
            console.log("ret_fetchDiffProHisScore:" + msg);
            CGlobals.g2_tmpScoresJSONObj = JSON.parse(msg);
            console.log("g2_tmpScoresJSONObj set!");
            console.log("Size is " + CGlobals.g2_tmpScoresJSONObj.Scores.length);
        });
        egret.ExternalInterface.addCallback("ret_fetchRetryLens", function (msg) {
            CGlobals.g2_tmpRetryLensJSONStr = msg;
            console.log("RetryLens sent to ts:" + CGlobals.g2_tmpRetryLensJSONStr);
            CGlobals.g2_tmpWaitingForRetFromNative = false;
        });
        egret.ExternalInterface.addCallback("ret_fetchTopSpaceHeight", function (msg) {
            var tmpTopSpaceHeight = parseInt(msg);
            if (!isNaN(tmpTopSpaceHeight)) {
                CGlobals.g_topSpaceHeight = tmpTopSpaceHeight;
            }
            CGlobals.g_praEasyScene.m_wm.setTopSpaceHeight(CGlobals.g_topSpaceHeight);
            CGlobals.g_praDiffProScene.m_wm.setTopSpaceHeight(CGlobals.g_topSpaceHeight);
            CGlobals.g_praDifficultScene.m_wm.setTopSpaceHeight(CGlobals.g_topSpaceHeight);
            if (CGlobals.g_praEasyScene.m_created) {
                CGlobals.g_praEasyScene.refreshScene();
            }
            if (CGlobals.g_praDiffProScene.m_created) {
                CGlobals.g_praDiffProScene.refreshScene();
            }
            if (CGlobals.g_praDifficultScene.m_created) {
                CGlobals.g_praDifficultScene.refreshScene();
            }
        });
    };
    Main.prototype.autoShutdown = function () {
        if (CGlobals.g_shutdownTimer.currentCount >= 1200) {
            CGlobals.g_pageJumper.gotoPage("ShutdownScr", null);
        }
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");

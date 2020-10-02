/**************************************************
 * /src/UI/scenes/CMainMenu.ts
 * 
 * 主菜单画面。
 *
**************************************************/

namespace eyelen4 {
        export class CMainMenu extends eui.Panel {
//                public startDifficultBtn1: eui.Button; // 触摸左边的文字或右边的按钮均能进入练习。因此是两个按钮。
                public startDifficultBtn2: eui.Button; // 开始困难练习按钮。
                public startDiffProBtn:eui.Button;
                public viewDiffProHisScoreBtn: eui.Button;
                public viewDiffProHisScoreDlg: CViewDiffProHisScoreDlg;
                public diffProHelpBtn:eui.Button;
                public aao:eui.Label;

//                public startEasyBtn1: eui.Button;
                public startEasyBtn2: eui.Button; // 开始简单练习按钮。1
                public printMisRecBtn:eui.Button;
                private menuGrp:eui.Group;
                private alertDlg:gdeint.CAlertPanel_v2;

                public m_startTimer: egret.Timer; // 自动开始定时器。

                private m_trueWidth:number = 480;
                private m_trueHeight:number = 744;
                private m2_cc:boolean = false;

                public constructor() {
                        super();

                        this.m_startTimer = new egret.Timer(5000,1); // 5秒内不选择则自动进入困难练习。
//                        this.m_startTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.startDifficult,this);
                }

                public childrenCreated() {

                        if(S_BUILD_FOR == S_NATIVE_ANDROID) {
                                this.aao.visible = false;
                                this.startDiffProBtn.visible = true;
                                this.diffProHelpBtn.visible = true;
                                this.viewDiffProHisScoreBtn.visible = true;

                        }
                        else {
                                this.aao.visible = true;
                                this.startDiffProBtn.visible = false;
                                this.diffProHelpBtn.visible = false;
                                this.viewDiffProHisScoreBtn.visible = false;
                        }
                        
//                        this.startEasyBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startEasy,this);
                        this.startEasyBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startEasy,this);

//                        this.startDifficultBtn1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startDifficult,this);
                        this.startDifficultBtn2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startDifficult,this);
                        this.startDiffProBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.startDiffPro , this);
                        this.viewDiffProHisScoreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onViewDiffProHisScoreBtn , this);
//                        this.printMisRecBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onPrintMisRecBtn , this);
                        this.diffProHelpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onDiffProHelpBtn , this);

                        this.m2_cc = true;
                        this.rearrangeUI();


                }

                //定义了一些函数使内容居中。
                public setTrueWidth(w:number) {
                        this.m_trueWidth = w;
                        if(this.m2_cc) {
                                this.rearrangeUI();
                        }
                }

                public setTrueHeight(h:number) {
                        this.m_trueHeight = h;
                        if(this.m2_cc) {
                                this.rearrangeUI();
                        }
                }

                private rearrangeUI():void {
                        var scale:number , scale1:number , scale2:number;
                        var leftGap:number = 0;
                        scale1 = this.m_trueWidth / 400;
                        scale2 = this.m_trueHeight / 744;
                        if(scale1<scale2) {
                                scale = scale1;
                                leftGap = 0;
                        }
                        else {
                                scale = scale2;
                                leftGap = (this.m_trueWidth/scale - 400)/2;
                        }

                        this.menuGrp.left = 50.0 / 400 * this.m_trueWidth + leftGap;

                        this.menuGrp.scaleX = scale;
                        this.menuGrp.scaleY = scale;
                }

                public run():void {
                        this.m_startTimer.start();

                        g_shutdownTimer.start();
                }

                /*
                * 开始简单练习。
                */ 
                public startEasy():void {
                        g_level = 1;
                        g_praEasyContainer.startNewPra(); // 切换画面前先启动练习。

                //        先显示翻页动画 （未完成）
                        g_praEasyContainer.saveVisibleStates();
                        g_pageJumper.gotoPage("PraEasyScene",null); // 使用页面跳转器换页。非常方便。
                        this.m_startTimer.stop();
                }

                public startNormal():void {
                //目前没有中等难度。
                        g_level = 2;
                }

                /*
                * 开始困难传统模式练习。
                */ 
                public startDifficult():void {
                        g_level = 3;
                        g_praDifficultContainer.startNewPra();

                //        先显示翻页动画 （未完成）
                        g_praDifficultContainer.saveVisibleStates();
                        g_pageJumper.gotoPage("PraDifficultScene",null);

                        this.m_startTimer.stop();
                }

                /*
                * 开始困难专业模式练习。
                */ 
                public startDiffPro():void {
                        g_level = 2; // 循序渐进练习顺序是简单、困难（专业）、困难（传统）。
                        g_praDiffProContainer.startNewPra();

                //        先显示翻页动画 （未完成）
                        g_praDiffProContainer.saveVisibleStates();
                        g_pageJumper.gotoPage("PraDiffProScene",null);

                        this.m_startTimer.stop();
                }

                public onViewDiffProHisScoreBtn():void {
                        egret.ExternalInterface.call("fetchDiffProHisScore" , "");
                        this.viewDiffProHisScoreDlg.show();
                }

                public onDiffProHelpBtn():void {
                        console.log("Showing diffProHelp!");
                        this.alertDlg.setContent("专业模式：对错题有针对性，大幅度提高训练效果。");
                        this.alertDlg.showDlg();
//                        this.alertDlg.show();
                }

                public onPrintMisRecBtn():void {
                       egret.ExternalInterface.call("printMisRec" , "");
                }


                /*
                * 回到欢迎屏幕。
                */ 
                public goBack():void {
                }

        }
}

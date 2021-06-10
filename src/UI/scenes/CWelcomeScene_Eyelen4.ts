/****************************************************
 * /src/UI/scenes/CWelcomeScene_Eyelen4.ts
 * 
 * 欢迎场景界面。
 *
 ****************************************************/

namespace eyelen4 {
    export class CWelcomeScene_Eyelen4 extends eui.Component {
        public constructor() {
            super();
            this.m_cc = false;
        }
        
        private scrBgGrp:eui.Group;
        private updateGroup:eui.Group;
        private showCRBtn:eui.Image;
        private crPanel:eui.Panel;
        private userProPanel:CUserProPanel;
        private helpPanel:CHelpPanel;
        private priPoliPanel:CPrivacyPolicyPanel;
        private horverCheckPanel:CHorverCheckPanel;
        private userProRead:eui.CheckBox;
        private userProLabel:eui.Label;
        private priPoliRead:eui.CheckBox;
        private priPoliLabel:eui.Label;
        private horverChecked:eui.CheckBox;
        private horverLabel:eui.Label;

        public startBtn:eui.Button;
        private helpBtn:eui.Button;
        public localVer: eui.Label;
        public latestVer: eui.Label;

        private m_cc:boolean = false; //Children created boolean.

        private shutdownClock:gdeint.CShutdownClock;

        public switch2StartBtn():void {
            //旧版本留下的方法。暂未使用。

            if(this.m_cc) {
                this.startBtn.visible = true;
            }
        }

        public childrenCreated():void
        {
            this.shutdownClock.setFontSize(18);
            this.shutdownClock.setTimer(CGlobals.g_shutdownTimer);
            this.shutdownClock.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onClockTap , this);

        //填写超链接文本流：
            //1、用户协议：
            this.userProLabel.text = "";
            this.userProLabel.textFlow= new Array<egret.ITextElement> (
                {
                    text:"我已阅读并同意", style: {}
                },
                {
                    text:"《用户协议》", style: { "href" : "event:text event triggered" , "textColor":0x4444ff }
                },
                {
                    text:" ", style: {} /*必须留有空格，否则发布 Native 版会出现显示问题。*/
                }
            );

            this.userProLabel.touchEnabled = true;
            this.userProLabel.addEventListener( egret.TextEvent.LINK, function( evt:egret.TextEvent ){
                this.userProPanel.visible = true;

            }, this );

            //2、隐私政策：
            this.priPoliLabel.text = "";
            this.priPoliLabel.textFlow= new Array<egret.ITextElement> (
                {
                    text:"我已阅读并同意", style: {}
                },
                {
                    text:"《隐私政策》", style: { "href" : "event:text event triggered" , "textColor":0x4444ff }
                },
                {
                     text:" ", style: {} 
                }
            );

            this.priPoliLabel.touchEnabled = true;
            this.priPoliLabel.addEventListener( egret.TextEvent.LINK, function( evt:egret.TextEvent ){
                this.priPoliPanel.visible = true;
            }, this );

            //3、横竖校准：
            this.horverLabel.textFlow= new Array<egret.ITextElement> (
                {
                    text:"我已认真进行", style: {}
                },
                {
                    text:"横竖检验", style: { "href" : "event:text event triggered" , "textColor":0x4444ff }
                },
                {
                     text:"并仔细阅读相\n关说明", style: {} 
                }
            );

            this.horverLabel.touchEnabled = true;
            this.horverLabel.addEventListener( egret.TextEvent.LINK, function( evt:egret.TextEvent ){
                this.horverCheckPanel.visible = true;
            }, this );


            this.showCRBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onShowCR , this);
            this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onStartPra , this);
            this.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onHelp , this);


            this.userProRead.addEventListener(eui.UIEvent.CHANGE , this.onReadyCBCheck , this);
            this.priPoliRead.addEventListener(eui.UIEvent.CHANGE , this.onReadyCBCheck , this);
            this.horverChecked.addEventListener(eui.UIEvent.CHANGE , this.onReadyCBCheck , this);

            if(CGlobals.S_BUILD_FOR == CGlobals.S_NATIVE_ANDROID) {
                egret.ExternalInterface.call("fetchTopSpaceHeight" , "");
            }

            this.m_cc = true;
        }

        private onReadyCBCheck() {

            if(this.userProRead.selected && this.priPoliRead.selected && this.horverChecked.selected) {
                //当且仅当三个复选框都选上开始练习按钮才会启用。
                this.startBtn.enabled = true;
            }
            else {
                this.startBtn.enabled = false;
            }
        }

        private onShowCR():void {
            // 显示著作权声明：
            this.crPanel.visible = true;
        }

        private onHelp():void {
            // 显示指引：
            this.helpPanel.visible = true;
        }

        public onStartPra(evt:egret.TouchEvent):void {

    //        先显示翻页动画 （未完成）
            this.startBtn.visible = false;

            CGlobals.g_pageJumper.gotoPage("MainMenu",null);
            CGlobals.g_mainMenu.run();
        }

        private onClockTap():void {
            CGlobals.g_praEasyContainer.showAlert("为了您的健康，每次使用20分钟后自动停止。" , null);
        }
    }
}


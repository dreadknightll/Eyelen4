namespace gdeint {
	export class CPraMenu extends eui.Component implements IContainerPlugin {
		public constructor() {
			super();
		}

        public closeBtn: eyelen4.CCloseBtn;
        public caliBtn:eui.Button;
        public helpBtn:eui.Button;
        public sndConfBtn:eui.Button;
        public viewTermsBtn:eui.Button;
        public quitPraBtn: eui.Button;

        private helpPanel:eyelen4.CHelpPanel;
        private sndConfMenu:CSndConfMenu;
		private viewTermsMenu:CViewTermsMenu;

		m_parentContainer:IEyelenPraContainer;
        private m_closeListener:(boolean)=>void;
        private m_menuListener:(string , boolean)=>void;

		public childrenCreated() {

            this.sndConfMenu.fetchData(); // 从存储获取设置值到声音设置对话框。

            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClose,this);
            this.caliBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onCaliBtn , this);
            this.sndConfBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onSndConfBtn , this);
            this.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onHelpBtn , this);
            this.viewTermsBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onViewTermsBtn , this);
            this.quitPraBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onQuitPra,this);
		}

		public show() {
			this.visible = true;
		}

		public hide() {
			this.visible = false;
		}

		public isVisible():boolean {
			return this.visible;
		}

        public setSceneRect(x:number , y:number , wid:number , hei:number)
        {
        //设置父场景大小和坐标偏移量，以便确定确认框的显示位置。
            this.x = x + (wid-350) / 2;
            this.y = y + (hei-580) / 5 * 2;
			console.log("Setting scene rect!");
        }

		public _setParentContainer(c:IEyelenPraContainer):void {
			this.m_parentContainer = c;
            this._getParentContainer().getDlgLayer().addChild(CDispObj2EgretDOAdapter.from(this));

			console.log("Parent container set!");
		}

		public _getParentContainer():IEyelenPraContainer {
			return this.m_parentContainer;
		}

        public _setMenuListener(menuListener:(string , boolean)=>void) {
            this.m_menuListener = menuListener;
        }

		/*
        * 右上角关闭按钮触摸时触发。
        */ 
        public onClose():void
        {
            this.visible = false;
            var argArr = new Array(); // apply是javascript方法所以要用javascript对象。
            argArr[0] = false;
            this._getParentContainer().applyFunc(this.m_closeListener,argArr);
        }

        private onCaliBtn():void {
            this.onMenu("Calibrate");
        }

        private onSndConfBtn():void {
            console.log("Showing SndConfMenu!");

            this.sndConfMenu.show(); // 不能直接设置visible，因为需要读取当前设置。
            this.onMenu("SndConf");
        }

        private onHelpBtn():void {
            this.helpPanel.visible = true;
        }

        private onViewTermsBtn():void {
            this.viewTermsMenu.visible = true;
            this.onMenu("ViewTerms");
        }

        public onMenu(menuClicked:string):void {

            if("Calibrate" == menuClicked) {
//                this.m_parentContainer.showCaliDlg(this.onCaliDlgClose);
                this.m_parentContainer.showCaliDlg(this.m_parentContainer.sendMsgToScene("getOnCaliDlgCloseFunc" , null));
                this.visible = false;
            }
//            else if("ViewTerms" == menuClicked) 不涉及跟容器或scene交互的菜单不触发onMenu。

        }

		public onQuitPra():void {
            this.m_parentContainer.showConfirm("该操作将放弃当前练习的进度和数据。\n您确定继续吗？" , this.onBack2MainMenuConfirm);
		}

        private onBack2MainMenuConfirm(param:any): void {
            var ret:boolean = <boolean>param;

            if(ret) {
                g_pageJumper.gotoPage("WelcomeScene" , null);
            }
            else {
            }
        }
	}
}
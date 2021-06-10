namespace gdeint {
	export class CAdjustTopDlg extends eui.Component {
		public constructor() {
			super();
		}

		private closeBtn:eui.Button;
		private OKBtn:eui.Button;
		private applyBtn:eui.Button;
		private cancelBtn:eui.Button;
		public topSpaceInp:eui.TextInput;

		public childrenCreated() {
			console.log("Children created in CAdjustTop!")
			this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onCancelBtn , this);
			this.OKBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onOKBtn , this);
			this.applyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onApplyBtn , this);
			this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onCancelBtn , this);
		}

		public onOKBtn():void {
			
			this.onApplyBtn();
			this.visible = false;
		}

		public onApplyBtn():void {
			console.log("Applying new topspace!");
			var tmpTH:number = parseInt(this.topSpaceInp.text);
			if(tmpTH < 0)
				tmpTH = 0;
			else if(tmpTH > 200)
				tmpTH = 200;

			CGlobals.g_topSpaceHeight = tmpTH;

			console.log("New topspace height(num):"+CGlobals.g_topSpaceHeight);
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

			if(CGlobals.S_BUILD_FOR == CGlobals.S_NATIVE_ANDROID)
			{
				egret.ExternalInterface.call("storeTopSpaceHeight",CGlobals.g_topSpaceHeight.toString());
			}

			console.log("Apply finished!");
		}

		public onCancelBtn():void {
			this.visible = false;
		}


	}
}
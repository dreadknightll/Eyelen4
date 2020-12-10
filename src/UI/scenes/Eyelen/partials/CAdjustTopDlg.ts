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

			g_topSpaceHeight = tmpTH;

			console.log("New topspace height(num):"+g_topSpaceHeight);
			g_praEasyScene.m_wm.setTopSpaceHeight(g_topSpaceHeight);
			g_praDiffProScene.m_wm.setTopSpaceHeight(g_topSpaceHeight);
			g_praDifficultScene.m_wm.setTopSpaceHeight(g_topSpaceHeight);

			if(g_praEasyScene.m_created) {
				g_praEasyScene.refreshScene();
			}

			if(g_praDiffProScene.m_created) {
				g_praDiffProScene.refreshScene();
			}

			if(g_praDifficultScene.m_created) {
				g_praDifficultScene.refreshScene();
			}
			console.log("Apply finished!");
		}

		public onCancelBtn():void {
			this.visible = false;
		}


	}
}
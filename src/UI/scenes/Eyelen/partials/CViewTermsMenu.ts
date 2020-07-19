namespace gdeint {

	export class CViewTermsMenu extends eui.Component {

        private userProPanel:eyelen4.CUserProPanel;
        private priPoliPanel:eyelen4.CPrivacyPolicyPanel;

		private viewUserProBtn:eui.Button;
		private viewPriPoliBtn:eui.Button;

		private closeBtn:eui.Button;
		public constructor() {
			super();
		}

		public childrenCreated() {
			this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onCloseBtn , this);
			this.viewUserProBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onViewUserProBtn , this);
			this.viewPriPoliBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onViewPriPoliBtn , this);
		}

		private onViewUserProBtn() {
			this.userProPanel.visible = true;
		}

		private onViewPriPoliBtn() {
			this.priPoliPanel.visible = true;
		}

		public onCloseBtn():void {
			this.visible = false;
		}
		
	}
}
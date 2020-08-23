namespace gdeint {

	export class CSndConfMenu extends eui.Component {

		public sndOnSwitch:eui.ToggleButton;
		private OKBtn:eui.Button;
		private cancelBtn:eui.Button;

		public constructor() {
			super();
		}

		// 从存储获取设置值。第一次打开对话框时需要外部调用执行。
		public fetchData():void {
			egret.ExternalInterface.call("fetchIsSndOn","");
		}

		public show() {
			this.sndOnSwitch.$setSelected(g_isSndOn);
			this.visible = true;
		}

		public savData():void {
			var strSndOn:string = "";
			g_isSndOn = this.sndOnSwitch.selected;
			if(g_isSndOn) {
				strSndOn = "1";
			}
			else {
				strSndOn = "0";
			}

			egret.ExternalInterface.call("storeIsSndOn", strSndOn);

			this.visible = false;

		}

		public childrenCreated() {
			this.OKBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onOKBtn , this);
			this.cancelBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onCancelBtn , this);
		}

		public onOKBtn():void {
			this.savData();
			this.visible = false;
		}

		public onCancelBtn():void {
			this.fetchData(); //回滚到修改前的设置。
			this.visible = false;
		}


	}
}
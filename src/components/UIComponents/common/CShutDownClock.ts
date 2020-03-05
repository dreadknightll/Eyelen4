module eyelen3E {
	export class CShutDownClock extends eui.Component{

		private timeLabel:eui.Label;

		public constructor() {
			super();
			this.m2_cc = false;
			this.m2_cc = 94;
		}

		private m2_cc;
		private m2_fontSize;

		public childrenCreated() {
			this.m2_cc = true;
			this.timeLabel.size=this.m2_fontSize;

		}

		public setFontSize(fs:number) {
			this.m2_fontSize = fs;
			if(this.m2_cc) {
				this.timeLabel.size=this.m2_fontSize;

			}
		}

		public setTimer(msCnt:number , listener:Function) {
/*			var timer:egret.Timer;
			timer = new egret.Timer(msCnt , 1);
			timer.$addListener(egret.TimerEvent.TIMER,listener,this);
			timer.addEventListener()
			listener();*/
		}
	}
}
